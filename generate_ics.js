const fs = require('fs');
const vm = require('vm');

const HTML_FILE = 'calendar.html';

const ISLAMIC_ICS = 'islamic-calendar.ics';
const KICEA_ICS = 'kicea-events.ics';

const html = fs.readFileSync(HTML_FILE, 'utf8');

const startMarker = 'const monthDefs =';
const endMarker = 'const kiceaTypeStyles =';

const start = html.indexOf(startMarker);
const end = html.indexOf(endMarker, start);

if (start < 0 || end < 0) {
    throw new Error(
        'Could not find the calendar data in calendar.html'
    );
}

/*
 * Extract the calendar data from calendar.html.
 *
 * The calendar itself remains the single source of truth.
 * This script does not maintain a second copy of the events.
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


/* =========================================================
   Helpers
========================================================= */

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

function pad(n) {
    return String(n).padStart(2, '0');
}

function parseUTC(value) {
    const [y, m, d] = value.split('-').map(Number);

    return new Date(
        Date.UTC(y, m - 1, d)
    );
}

function addDays(date, amount) {
    const result = new Date(date);

    result.setUTCDate(
        result.getUTCDate() + amount
    );

    return result;
}

function icsDate(date) {
    return (
        date.getUTCFullYear() +
        pad(date.getUTCMonth() + 1) +
        pad(date.getUTCDate())
    );
}

function escapeICS(value) {
    return String(value)
        .replace(/\\/g, '\\\\')
        .replace(/([,;])/g, '\\$1')
        .replace(/\r?\n/g, '\\n');
}

function icsTimestamp() {
    const now = new Date();

    return (
        now.getUTCFullYear() +
        pad(now.getUTCMonth() + 1) +
        pad(now.getUTCDate()) +
        'T' +
        pad(now.getUTCHours()) +
        pad(now.getUTCMinutes()) +
        pad(now.getUTCSeconds()) +
        'Z'
    );
}

function firstWeekdayOnOrAfter(date, weekday) {
    const difference =
        (weekday - date.getUTCDay() + 7) % 7;

    return addDays(date, difference);
}

function makeUID(prefix, parts) {
    return (
        prefix +
        '-' +
        parts.join('-') +
        '@kicea.github.io'
    );
}


/* =========================================================
   Build Hijri month list
========================================================= */

const months = [];

Object.keys(yearStartDates)
    .sort((a, b) => Number(a) - Number(b))
    .forEach(year => {

        yearStartDates[year].forEach(
            (startDate, index) => {

                months.push({

                    year: Number(year),

                    number: index + 1,

                    name: monthNames[index],

                    start: parseUTC(startDate)

                });

            }
        );

    });

if (months.length === 0) {
    throw new Error(
        'No Hijri months were found.'
    );
}


/* =========================================================
   Calendar boundaries
========================================================= */

const calendarStart =
    months[0].start;

const calendarEnd =
    addDays(
        months[months.length - 1].start,
        29
    );


/* =========================================================
   Determine Hijri month length
========================================================= */

function getMonthLength(index) {

    if (index < months.length - 1) {

        return Math.round(
            (
                months[index + 1].start -
                months[index].start
            ) / 86400000
        );

    }

    return 30;
}


/* =========================================================
   Event collections
========================================================= */

const islamicEvents = [];
const kiceaEventsList = [];


/* =========================================================
   Islamic calendar events
========================================================= */

months.forEach((month, monthIndex) => {

    const monthLength =
        getMonthLength(monthIndex);

    const monthEvents = {
        ...(eventsByMonth[month.name] || {})
    };


    /*
     * Jumu'ah al-Wida is part of the Islamic calendar feed.
     * It is the final Friday of Ramadan.
     */
    if (month.name === 'Ramadan') {

        for (
            let day = monthLength;
            day >= 1;
            day--
        ) {

            const date = addDays(
                month.start,
                day - 1
            );

            if (date.getUTCDay() !== 5) {
                continue;
            }

            if (monthEvents[day]) {

                monthEvents[day] = {

                    ...monthEvents[day],

                    label:
                        monthEvents[day].label +
                        ' · Jumu\'ah al-Wida'

                };

            } else {

                monthEvents[day] = {

                    label:
                        'Jumu\'ah al-Wida (last Friday of Ramadan)',

                    type: 'other'

                };

            }

            break;
        }
    }


    Object.entries(monthEvents)
        .forEach(([day, info]) => {

            const date = addDays(
                month.start,
                Number(day) - 1
            );

            if (
                date < calendarStart ||
                date > calendarEnd
            ) {
                return;
            }

            islamicEvents.push({

                date,

                label: info.label,

                description:
                    info.label +
                    ' — KICEA Islamic Calendar',

                type:
                    info.type || 'other',

                uid:
                    makeUID(
                        'islamic',
                        [
                            month.year,
                            month.number,
                            day,
                            info.label
                                .replace(
                                    /[^A-Za-z0-9]+/g,
                                    '-'
                                )
                        ]
                    )

            });

        });

});


/* =========================================================
   KICEA one-off events
========================================================= */

(kiceaEvents.special || [])
    .forEach(event => {

        const date =
            parseUTC(event.date);

        if (
            date < calendarStart ||
            date > calendarEnd
        ) {
            return;
        }

        kiceaEventsList.push({

            date,

            label: event.label,

            description:
                event.label +
                ' — KICEA Event',

            type:
                event.type || 'program',

            uid:
                makeUID(
                    'kicea-special',
                    [
                        event.date,
                        event.label
                            .replace(
                                /[^A-Za-z0-9]+/g,
                                '-'
                            )
                    ]
                )

        });

    });


/* =========================================================
   KICEA fixed annual Hijri events
========================================================= */

months.forEach((month, monthIndex) => {

    const monthLength =
        getMonthLength(monthIndex);

    const annual =
        kiceaAnnualByMonth || {};

    const monthAnnual =
        annual[month.name] || {};


    Object.entries(monthAnnual)
        .forEach(([day, info]) => {

            const date = addDays(
                month.start,
                Number(day) - 1
            );

            if (
                date < calendarStart ||
                date > calendarEnd
            ) {
                return;
            }

            kiceaEventsList.push({

                date,

                label: info.label,

                description:
                    info.label +
                    ' — KICEA Event',

                type:
                    info.type || 'program',

                uid:
                    makeUID(
                        'kicea-annual',
                        [
                            month.year,
                            month.number,
                            day,
                            info.label
                                .replace(
                                    /[^A-Za-z0-9]+/g,
                                    '-'
                                )
                        ]
                    )

            });

        });


    /*
     * The Hussain commemoration is dynamically applied
     * to the last day of Dhu al-Hijjah.
     */
    if (
        month.name === 'Dhu al-Hijjah'
    ) {

        const date = addDays(
            month.start,
            monthLength - 1
        );

        if (
            date >= calendarStart &&
            date <= calendarEnd
        ) {

            kiceaEventsList.push({

                date,

                label:
                    kiceaHussainCommemoration.label,

                description:
                    kiceaHussainCommemoration.label +
                    ' — KICEA Event',

                type:
                    kiceaHussainCommemoration.type ||
                    'commemoration',

                uid:
                    makeUID(
                        'kicea-hussain',
                        [
                            month.year,
                            month.number,
                            monthLength
                        ]
                    )

            });

        }
    }

});


/* =========================================================
   KICEA weekly recurring events
========================================================= */

(kiceaEvents.recurring || [])
    .forEach(event => {

        const firstDate =
            parseUTC(event.startDate);

        const firstOccurrence =
            firstWeekdayOnOrAfter(
                firstDate,
                event.weekday
            );

        if (
            firstOccurrence > calendarEnd
        ) {
            return;
        }

        const exceptions =
            event.exceptions || [];

        const weekdayCodes = [
            'SU',
            'MO',
            'TU',
            'WE',
            'TH',
            'FR',
            'SA'
        ];

        /*
         * Create a single recurring event.
         * Its RRULE is limited to the current
         * calendar year/range.
         */
        let lastOccurrence =
            calendarEnd;

        const lastWeekday =
            calendarEnd.getUTCDay();

        const daysBack =
            (
                lastWeekday -
                event.weekday +
                7
            ) % 7;

        lastOccurrence =
            addDays(
                calendarEnd,
                -daysBack
            );

        if (
            lastOccurrence <
            firstOccurrence
        ) {
            return;
        }

        const filteredExceptions =
            exceptions.filter(
                dateString => {

                    const date =
                        parseUTC(dateString);

                    return (
                        date >= firstOccurrence &&
                        date <= lastOccurrence
                    );

                }
            );

        kiceaEventsList.push({

            date: firstOccurrence,

            label: event.label,

            description:
                event.label +
                ' — KICEA Event',

            type:
                event.type || 'program',

            uid:
                makeUID(
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

            weekday:
                weekdayCodes[event.weekday],

            until:
                lastOccurrence,

            exceptions:
                filteredExceptions

        });

    });


/* =========================================================
   Generate one ICS file
========================================================= */

function buildICS(
    events,
    calendarName,
    calendarDescription,
    category
) {

    const lines = [

        'BEGIN:VCALENDAR',

        'VERSION:2.0',

        'PRODID:-//KICEA//Calendar//EN',

        'CALSCALE:GREGORIAN',

        'METHOD:PUBLISH',

        'X-WR-CALNAME:' +
            escapeICS(calendarName),

        'X-WR-CALDESC:' +
            escapeICS(calendarDescription)

    ];

    const timestamp =
        icsTimestamp();


    events
        .sort((a, b) => {

            const difference =
                a.date - b.date;

            if (difference !== 0) {
                return difference;
            }

            return a.label.localeCompare(
                b.label
            );

        })
        .forEach(event => {

            lines.push(
                'BEGIN:VEVENT',

                'UID:' + event.uid,

                'DTSTAMP:' + timestamp,

                'DTSTART;VALUE=DATE:' +
                    icsDate(event.date),

                'DTEND;VALUE=DATE:' +
                    icsDate(
                        addDays(
                            event.date,
                            1
                        )
                    ),

                'SUMMARY:' +
                    escapeICS(event.label),

                'CATEGORIES:' +
                    category,

                'DESCRIPTION:' +
                    escapeICS(
                        event.description
                    )
            );


            /*
             * Weekly KICEA event.
             */
            if (event.recurring) {

                lines.push(

                    'RRULE:FREQ=WEEKLY;BYDAY=' +
                    event.weekday +
                    ';UNTIL=' +
                    icsDate(event.until) +
                    'T000000Z'

                );


                /*
                 * Skip cancelled/exception dates.
                 */
                event.exceptions
                    .forEach(exception => {

                        lines.push(

                            'EXDATE;VALUE=DATE:' +
                            icsDate(
                                parseUTC(
                                    exception
                                )
                            )

                        );

                    });

            }


            lines.push(
                'END:VEVENT'
            );

        });


    lines.push(
        'END:VCALENDAR'
    );


    return (
        lines.join('\r\n') +
        '\r\n'
    );
}


/* =========================================================
   Write both subscription feeds
========================================================= */

const islamicICS = buildICS(

    islamicEvents,

    'KICEA Islamic Calendar — 1448 AH',

    'Islamic calendar events — KICEA',

    'ISLAMIC'

);

const kiceaICS = buildICS(

    kiceaEventsList,

    'KICEA Events — 1448 AH',

    'KICEA programs and events',

    'KICEA'

);


fs.writeFileSync(
    ISLAMIC_ICS,
    islamicICS,
    'utf8'
);

fs.writeFileSync(
    KICEA_ICS,
    kiceaICS,
    'utf8'
);


console.log(
    `Generated ${islamicEvents.length} Islamic events`
);

console.log(
    `Generated ${kiceaEventsList.length} KICEA events`
);

console.log(
    `Created ${ISLAMIC_ICS}`
);

console.log(
    `Created ${KICEA_ICS}`
);
