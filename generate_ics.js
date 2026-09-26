const fs = require('fs');
const vm = require('vm');

const HTML_FILE = 'calendar.html';
const ICS_FILE = 'kicea-calendar.ics';

const html = fs.readFileSync(HTML_FILE, 'utf8');

const startMarker = 'const monthDefs =';
const endMarker = 'const kiceaTypeStyles =';

const start = html.indexOf(startMarker);
const end = html.indexOf(endMarker, start);

if (start < 0 || end < 0) {
  throw new Error('Could not find the KICEA event data in calendar.html');
}

/*
 * Extract the calendar data from calendar.html.
 *
 * We execute only the data section inside a sandbox.
 * This allows the GitHub Action to use the existing
 * calendar data without maintaining a second copy.
 */
const dataSource =
  html.slice(start, end) +
  `
globalThis.__KICEA_DATA = {
  yearStartDates,
  eventsByMonth,
  kiceaEvents,
  kiceaAnnualByMonth,
  kiceaHussainCommemoration
};
`;

const sandbox = {};

vm.runInNewContext(dataSource, sandbox, {
  filename: HTML_FILE
});

const {
  yearStartDates,
  eventsByMonth,
  kiceaEvents,
  kiceaAnnualByMonth,
  kiceaHussainCommemoration
} = sandbox.__KICEA_DATA;


/* -------------------------------------------------------
   Basic helpers
------------------------------------------------------- */

const monthNames = [
  'Muharram',
  'Safar',
  "Rabi' al-Awwal",
  "Rabi' al-Thani",
  'Jumada al-Awwal',
  'Jumada al-Thani',
  'Rajab',
  "Sha'ban",
  'Ramadan',
  'Shawwal',
  "Dhu al-Qi'dah",
  'Dhu al-Hijjah'
];

const pad = n => String(n).padStart(2, '0');

function parseUTC(s) {
  const [y, m, d] = s.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, d));
}

function addDays(date, n) {
  const d = new Date(date);
  d.setUTCDate(d.getUTCDate() + n);
  return d;
}

function icsDate(date) {
  return (
    date.getUTCFullYear() +
    pad(date.getUTCMonth() + 1) +
    pad(date.getUTCDate())
  );
}

function escapeICS(text) {
  return String(text)
    .replace(/\\/g, '\\\\')
    .replace(/([,;])/g, '\\$1')
    .replace(/\r?\n/g, '\\n');
}

function icsStamp() {
  const n = new Date();

  return (
    n.getUTCFullYear() +
    pad(n.getUTCMonth() + 1) +
    pad(n.getUTCDate()) +
    'T' +
    pad(n.getUTCHours()) +
    pad(n.getUTCMinutes()) +
    pad(n.getUTCSeconds()) +
    'Z'
  );
}

function firstWeekdayOnOrAfter(date, weekday) {
  const diff =
    (weekday - date.getUTCDay() + 7) % 7;

  return addDays(date, diff);
}

function uidFor(kind, parts) {
  return `${kind}-${parts.join('-')}@hussainiya-seoul`;
}


/* -------------------------------------------------------
   Build the Hijri month list
------------------------------------------------------- */

const months = [];

for (
  const year of Object.keys(yearStartDates)
    .sort((a, b) => Number(a) - Number(b))
) {
  yearStartDates[year].forEach((startDate, i) => {
    months.push({
      year: Number(year),
      num: i + 1,
      name: monthNames[i],
      start: parseUTC(startDate)
    });
  });
}

if (months.length === 0) {
  throw new Error('No Hijri months found in calendar.html');
}


/* -------------------------------------------------------
   Calendar boundaries
------------------------------------------------------- */

const calendarStart = months[0].start;

const calendarEnd =
  months.length > 1
    ? addDays(months[months.length - 1].start, 29)
    : addDays(calendarStart, 29);


/* -------------------------------------------------------
   Determine month length
------------------------------------------------------- */

function monthLength(index) {
  if (index < months.length - 1) {
    return Math.round(
      (months[index + 1].start - months[index].start) /
      86400000
    );
  }

  return 30;
}


/* -------------------------------------------------------
   KICEA annual events
------------------------------------------------------- */

function annualEvent(monthName, day, length) {

  if (
    kiceaAnnualByMonth[monthName] &&
    kiceaAnnualByMonth[monthName][day]
  ) {
    return kiceaAnnualByMonth[monthName][day];
  }

  if (
    monthName === 'Dhu al-Hijjah' &&
    day === length
  ) {
    return kiceaHussainCommemoration;
  }

  return null;
}


/* -------------------------------------------------------
   Generate events
------------------------------------------------------- */

const entries = [];


/* -------------------------------------------------------
   Islamic events
------------------------------------------------------- */

months.forEach((month, index) => {

  const length = monthLength(index);

  const special = {
    ...(eventsByMonth[month.name] || {})
  };


  /*
   * Jumu'ah al-Wida:
   * Find the final Friday of Ramadan.
   */
  if (month.name === 'Ramadan') {

    for (let day = length; day >= 1; day--) {

      const d = addDays(
        month.start,
        day - 1
      );

      if (d.getUTCDay() === 5) {

        if (special[day]) {

          special[day] = {
            label:
              special[day].label +
              " · Jumu'ah al-Wida",

            type:
              special[day].type
          };

        } else {

          special[day] = {
            label:
              "Jumu'ah al-Wida (last Friday of Ramadan)",

            type: 'other'
          };

        }

        break;
      }
    }
  }


  /*
   * Standard Islamic events.
   */
  Object.entries(special).forEach(
    ([day, info]) => {

      const date = addDays(
        month.start,
        Number(day) - 1
      );

      if (
        date >= calendarStart &&
        date <= calendarEnd
      ) {

        entries.push({

          date,

          label: info.label,

          description:
            info.label +
            ' — Hussainiya Seoul Islamic Calendar',

          uid: uidFor(
            'evt',
            [index, day]
          )
        });

      }
    }
  );


  /*
   * KICEA annual Hijri events.
   */
  for (
    let day = 1;
    day <= length;
    day++
  ) {

    const info = annualEvent(
      month.name,
      day,
      length
    );

    if (!info) continue;

    const date = addDays(
      month.start,
      day - 1
    );

    entries.push({

      date,

      label: info.label,

      description:
        info.label +
        ' — KICEA annual event, Hussainiya Seoul',

      uid: uidFor(
        'kicea-annual',
        [index, day]
      )
    });
  }
});


/* -------------------------------------------------------
   One-off KICEA events
------------------------------------------------------- */

kiceaEvents.special.forEach(event => {

  const date = parseUTC(event.date);

  if (
    date < calendarStart ||
    date > calendarEnd
  ) {
    return;
  }

  entries.push({

    date,

    label: event.label,

    description:
      event.label +
      ' — KICEA event, Hussainiya Seoul',

    uid: uidFor(
      'kicea-special',
      [event.date]
    )
  });
});


/* -------------------------------------------------------
   Weekly KICEA events
------------------------------------------------------- */

kiceaEvents.recurring.forEach(event => {

  const first =
    firstWeekdayOnOrAfter(
      parseUTC(event.startDate),
      event.weekday
    );

  if (first > calendarEnd) {
    return;
  }


  const lastOccurrence =
    addDays(
      calendarEnd,
      -(
        (
          calendarEnd.getUTCDay() -
          event.weekday +
          7
        ) % 7
      )
    );


  if (lastOccurrence < first) {
    return;
  }


  entries.push({

    date: first,

    label: event.label,

    description:
      event.label +
      ' — KICEA weekly event, Hussainiya Seoul',

    uid: uidFor(
      'kicea-weekly',
      [
        event.label
          .replace(
            /[^A-Za-z0-9]+/g,
            '-'
          )
          .replace(
            /^-|-$/g,
            ''
          )
      ]
    ),

    recurring: true,

    weekday: event.weekday,

    until: lastOccurrence,

    exceptions:
      event.exceptions || []
  });

});


/* -------------------------------------------------------
   Sort events
------------------------------------------------------- */

entries.sort(
  (a, b) =>
    a.date - b.date ||
    a.label.localeCompare(b.label)
);


/* -------------------------------------------------------
   Build ICS
------------------------------------------------------- */

const stamp = icsStamp();

const lines = [

  'BEGIN:VCALENDAR',

  'VERSION:2.0',

  'PRODID:-//KICEA//Islamic Calendar 1448 AH//EN',

  'CALSCALE:GREGORIAN',

  'X-WR-CALNAME:KICEA Calendar — 1448 AH',

  'X-WR-CALDESC:KICEA Islamic Calendar — 1448 AH'
];


/* -------------------------------------------------------
   Write VEVENT blocks
------------------------------------------------------- */

for (const event of entries) {

  lines.push(

    'BEGIN:VEVENT',

    'UID:' + event.uid,

    'DTSTAMP:' + stamp,

    'DTSTART;VALUE=DATE:' +
      icsDate(event.date),

    'DTEND;VALUE=DATE:' +
      icsDate(
        addDays(event.date, 1)
      )
  );


  /*
   * Weekly recurring event.
   */
  if (event.recurring) {

    const weekdayCodes = [
      'SU',
      'MO',
      'TU',
      'WE',
      'TH',
      'FR',
      'SA'
    ];

    lines.push(

      'RRULE:FREQ=WEEKLY;BYDAY=' +
        weekdayCodes[event.weekday] +
        ';UNTIL=' +
        icsDate(event.until)
    );


    /*
     * Remove exceptional dates.
     */
    for (
      const exception of event.exceptions
    ) {

      const exDate =
        parseUTC(exception);

      if (
        exDate >= event.date &&
        exDate <= event.until
      ) {

        lines.push(
          'EXDATE;VALUE=DATE:' +
          icsDate(exDate)
        );

      }
    }
  }


  lines.push(

    'SUMMARY:' +
      escapeICS(event.label),

    'DESCRIPTION:' +
      escapeICS(event.description),

    'END:VEVENT'
  );
}


/* -------------------------------------------------------
   Finish calendar
------------------------------------------------------- */

lines.push('END:VCALENDAR');


/* -------------------------------------------------------
   Write file
------------------------------------------------------- */

fs.writeFileSync(
  ICS_FILE,
  lines.join('\r\n') + '\r\n',
  'utf8'
);

console.log(
  `Generated ${entries.length} events in ${ICS_FILE}`
);
