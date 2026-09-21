/* Dua al-Kumayl verses - extracted from PowerPoint */

const VERSES = [
  {
    ar: "اَللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَ آلِ مُحَمَّد",
    tr: "allāhumma ṣalli `alā muḥammadin wa āli muḥammad",
    en: "O' Alláh send Your blessings on Muhammad\nand the family of Muhammad.",
    ur: "اے الله! رحمت فرما محمد وآل محمد پر",
    hi: "ऐ अल्लाह मुहम्मद और आले मुहम्मद पर अपनी सलामती रख़",
    ko: ""
  },
  {
    ar: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ",
    tr: "bis-millāhir-raḥmanir-raḥīm",
    en: "In the Name of Alláh, \nthe All-beneficent, the All-merciful.",
    ur: "خدا کے نام سے( شروع کرتا ہوں)جو بڑا مہربا ن نہایت رحم والا ہے",
    hi: "अल्लाह के नाम से जो बड़ा कृपालु और अत्यन्त दयावान हैं।",
    ko: ""
  },
  {
    ar: "اللَّهُمَّ إِنِّي أَسْألُكَ بِرَحْمَتِكَ الَّتِي وَسِعَتْ كُلَّ شَيْء",
    tr: "allahumma in-nī as-aluka bi-raḥ-matikal-latī wasi`at kul-lā shay",
    en: "O Allah, I ask You by Your mercy, which embraces all things;",
    ur: "اے معبود میں تجھ سے سوال کرتا ہوں تیری رحمت کے ذریعے جوہر شی پر محیط ہے",
    hi: "ऐ अल्लाह मै तुझ से इल्तेजा करता हूँ, तुझे तेरी उस रहमत का वास्ता जो हर चीज़ को घेरे हुए है,",
    ko: ""
  },
  {
    ar: "وَبِقُوَّتِكَ الَّتِي قَهَرْتَ بِهَا كُلَّ شَيْء",
    tr: "wa bi-qū-watikal-latī qahar-ta bihā kul-lā shay",
    en: "And by Your strength, through which You dominatest all things,",
    ur: "تیری قوت کے ذریعے جس سے تو نے ہر شی کو زیر نگیں کیا",
    hi: "तेरी उस कुदरत का वास्ता जिस से तू हर चीज़ पर ग़ालिब है,",
    ko: ""
  },
  {
    ar: "وَخَضَعَ لَهَا كُلُّ شَيْء",
    tr: "wa khaḍa`a lahā kul-lu shay",
    en: "And toward which all things are humble",
    ur: "اس کے سامنے ہر شی جھکی ہوئی",
    hi: "जिस के सबब हर चीज़ तेरे आगे झुकी है",
    ko: ""
  },
  {
    ar: "وَذَلَّ لَهَا كُلُّ شَيْء",
    tr: "wa dhal-lā lahā kul-lu shay",
    en: "And before which all things are lowly;",
    ur: "اور ہر شی زیر ہے",
    hi: "और जिस के सामने हर चीज़ आजिज़ है,",
    ko: ""
  },
  {
    ar: "وَبِجَبرُوتِكَ الَّتِي غَلَبْتَ بِهَا كُلَّ شَيْء",
    tr: "wa bi-jabarūtikal-latī ghalab-ta bihā kul-lā shay",
    en: "And by Your invincibility through which You overwhelmest all things,",
    ur: "اور تیرے جبروت کے ذریعے جس سے توہر شی پر غالب ہے",
    hi: "तेरी इस जब्र्रुत  का वास्ता जिस से तू हर चीज़ पर हावी है,",
    ko: ""
  },
  {
    ar: "وَبِعِزَّتِكَ الَّتِي لا يَقُومُ لَهَا شَيْءٌ",
    tr: "wa bi`izzatikal-latī lā yaqūmu lahā shay",
    en: "And by Your might, which nothing can resist;",
    ur: "تیری عزت کے ذریعے جسکے آگے کوئی چیز ٹھہرتی نہیں",
    hi: "तेरी इस इज्ज़त का वास्ता जिस के आगे कोई चीज़  ठहर नहीं पाती,",
    ko: ""
  },
  {
    ar: "وَبِعَظَمَتِكَ الَّتِي مَلأَتْ كُلَّ شَيْء",
    tr: "wa bi`aẓamatikal-latī mala-at kul-lā shay",
    en: "And by Your tremendousness, which has filled all things;",
    ur: "تیری عظمت کے ذریعے جس نے ہر چیز کو پر کر دیا",
    hi: "तेरी उस अजमत का वास्ता जो हर चीज़  से नुमाया है,",
    ko: ""
  },
  {
    ar: "وَبِسُلْطَانِكَ الَّذِي عَلاَ كُلَّ شَيْء",
    tr: "wa bisul-ṭānikal-ladhī `alā kul-lā shay",
    en: "by Your force, which towers over all things;",
    ur: "تیری سلطنت کے ذریعے جو ہر چیز سے بلند ہے",
    hi: "तेरी उस सल्तनत का वास्ता जो हर चीज़  पर  कायेम है,",
    ko: ""
  },
  {
    ar: "وَبِوَجْهِكَ الْبَاقِي بَعْدَ فَنَاءِ كُلِّ شَيْء",
    tr: "wa bi-waj-hikal-bāqī ba`da fanā-i kul-li shay",
    en: "And by Your face, which subsists after the annihilation of all things,",
    ur: "تیری ذات کے واسطے سے جوہر چیز کی فنا کے بعد باقی رہے گی",
    hi: "तेरी उस ज़ात का वास्ता जो हर चीज़ के फ़ना हो जाने के बाद भी बाकी रहेगी,",
    ko: ""
  },
  {
    ar: "وَبِأَسْمَائِكَ الَّتِي مَلأَتْ أَرْكَانَ كُلِّ شَيْء",
    tr: "wa bi-as-mā-ikal-latī malat ar-kāna kul-li shay",
    en: "And by Your Names, which have filled the foundations of all things;",
    ur: "اورسوال کرتا ہوں تیرے ناموں کے ذریعے جنہوں نے ہر چیز کے اجزاء کو پر کر رکھا ہے",
    hi: "तेरे उन नामो का वासता जिन के असरात ज़र्रे ज़र्रे में तारी  व सारी हैं,",
    ko: ""
  },
  {
    ar: "وَبِعِلْمِكَ الَّذِي أَحَاطَ بِكُلِّ شَيْء",
    tr: "wa bi`il-mikal-ladhī aḥāṭa bikul-li shay",
    en: "And by Your knowledge, which encompasses all things;",
    ur: "تیرے علم کے ذریعے جس نے ہر چیز کو گھیر رکھا ہے",
    hi: "तेरे उस इल्म का वास्ता जो हर चीज़ का अहाता किये हुए हैं,",
    ko: ""
  },
  {
    ar: "وَبِنُورِ وَجْهِكَ الَّذِي أَضَاءَ لَهُ كُلُّ شَيْء",
    tr: "wa bi-nūri waj-hikal-ladhī aḍā-a lahu kul-lu shay",
    en: "And by the light of Your face, through which all things are illumined!",
    ur: "اور تیری ذات کے نور کے ذریعے جس سے ہر چیز روشن ہوئی ہے",
    hi: "तेरी ज़ात के उस नूर का  वास्ता जिस से हर चीज़ रोशन है!",
    ko: ""
  },
  {
    ar: "يَا نُورُ يَا قُدُّوسُ",
    tr: "yā nūru yā qud-dūs",
    en: "O Light! O All-holy!",
    ur: "یانور یاقدوس",
    hi: "ऐ हकीकी नूर! ऐ पाक व पाकीज़ा!",
    ko: ""
  },
  {
    ar: "يَا أَوَّلَ الأَوَّلِينَ",
    tr: "yā aw-walal-aw-walīn",
    en: "O First of those who are first",
    ur: "اے اولین میں سب سے اول",
    hi: "ए सब पहलों से पहले,",
    ko: ""
  },
  {
    ar: "وَيَا آخِرَ الآخِرِينَ",
    tr: "wa yā ā-khiral-ā-khirīn",
    en: "And O Last of those who are last!",
    ur: "اور اے آخرین میں سب سے آخر",
    hi: "ऐ सब पिछलो से पिछले",
    ko: ""
  },
  {
    ar: "اللَّهُمَ اغْفِرْ لِي الذُّنُوبَ الَّتِي تَهتِكُ الْعِصَمَ",
    tr: "allahumma-igh-fir liyadh-dhunūbal-latī tah-tikul`iṣam",
    en: "O Allah, forgive me those sins which tear apart safeguards!",
    ur: "اے معبود میرے ان گناہوں کو معاف کر دے جو پردہ فاش کرتے ہیں",
    hi: "ए अल्लाह मेरे सब गुनाह माफ़ कर दे जो अताब का मुस्तहक बनाते हैं!",
    ko: ""
  },
  {
    ar: "اللَّهُمَ اغْفِرْ لِي الذُّنُوبَ الَّتِي تُنْزِلُ النِّقَمَ",
    tr: "allahumma-igh-fir liyadh-dhunūbal-latī tunzilun-niqam",
    en: "O Allah, forgive me those sins which draw down adversities!",
    ur: "خدایا! میرے وہ گناہ معاف کر دے جن سے عذاب نازل ہوتا ہے",
    hi: "ऐ अल्लाह! मेरे वोह सब गुनाह माफ़ कर दे जिन की वजह से बालाएं आती हैं!",
    ko: ""
  },
  {
    ar: "اللَّهُمَ اغْفِرْ لِي الذُّنُوبَ الَّتِي تُغيِّرُ النِّعَمَ",
    tr: "allahumma-igh-fir liyadh-dhunūbal-latī tughy-yirun-ni`am",
    en: "O Allah, forgive me those sins which alter blessings!",
    ur: "خدایا میرے وہ گناہ بخش دے جن سے نعمتیں زائل ہوتی ہیں",
    hi: "ऐ अल्लाह मेरे वोह सब गुनाह माफ़ कर दे जो तेरी नेमतों से महरूमी का सबब बनते हैं!",
    ko: ""
  },
  {
    ar: "اللَّهُمَّ اغْفِرْ لِي الذُّنُوبَ الَّتِي تَحْبِسُ الدُّعَاءَ",
    tr: "allahumma-igh-fir liyadh-dhunūbal-latī taḥ-bisud-du’ā",
    en: "O Allah forgive me those sins which hold back supplication!",
    ur: "اے معبود! میرے وہ گناہ معاف فرما جو دعا کو روک لیتے ہیں",
    hi: "ऐ अल्लाह, मेरे वोह सब गुनाह बख्श दे जो दुआएं कबूल नहीं होने देते!",
    ko: ""
  },
  {
    ar: "اللَّهُمَّ اغْفِرْ لِي الذُّنُوبَ الَّتِي تَقْطَعُ الرَّجَاءَ",
    tr: "allahumma-igh-fir liyadh-dhunūbal-latī taq-ṭau'r-rajā",
    en: "O Allah forgive me those sins which cut down the hopes!",
    ur: "اے اللہ میرے وہ گناہ بخش دے جن سے بلائیں نازل ہوتی ہے",
    hi: "ए अल्लाह, मेरे वोह सब गुनाह माफ़ कर दे जो",
    ko: ""
  },
  {
    ar: "اللَّهُمَّ اغْفِرْ لِي الذُّنُوبَ الَّتِي تُنْزِلُ البَلاءَ",
    tr: "allahumma-igh-fir liyadh-dhunūbal-latī tunzilul-balā",
    en: "O Allah, forgive me those sins which draw down tribulation!",
    ur: "اے اللہ میرے وہ گناہ بخش دے جن سے بلائیں نازل ہوتی ہے",
    hi: "ए अल्लाह, मेरे वोह सब गुनाह माफ़ कर दे जो मुसीबत लाते हैं!",
    ko: ""
  },
  {
    ar: "اللَّهُمَّ اغْفِرْ لِي كُلَّ ذَنْب أَذْنَبْتُهُ وَكُلَّ خَطِيئَة أَخْطَأْتُهَا",
    tr: "allahumma-igh-fir liya kul-lā dham-bin adhnabtuhu wa kul-lā khaṭī-atin akh-ṭatuhā",
    en: "O Allah, forgive me every sin I have committed and every mistake I have made!",
    ur: "اے خدا میرا ہر وہ گناہ معاف فرما جو میں نے کیا ہےاور ہر لغزش سے درگزر کر جو مجھ سے ہو ئی ہے",
    hi: "ऐ अल्लाह, मेरी इन सारी खाताओं से दर गुज़र कर जो मैंने जान बूझ कर या भूले से की हैं!",
    ko: ""
  },
  {
    ar: "اللَّهُمَّ إِنِّي أَتَقَرَّبُ إِلَيْكَ بِذِكْرِكَ",
    tr: "allahumma innī ataqarrabu ilayka bi-dhik-rik",
    en: "O Allah, verily I seek nearness to You through remembrance of You,",
    ur: "اے اللہ میں تیرے ذکر کے ذریعے تیرا تقرب چاہتا ہوں",
    hi: "ए अल्लाह, मैं तुझे याद करके तेरे करीब आना चाहता हूँ!",
    ko: ""
  },
  {
    ar: "وَأَسْتَشْفِعُ بِكَ إِلَي نَفْسِكَ",
    tr: "wa as-tash-fiu' bika ilā naf-sik",
    en: "And I seek intercession from You with Yourself,",
    ur: "اور تیری ذات کو تیرے حضور اپنا سفارشی بناتا ہوں",
    hi: "तेरी जनाब में तुझी को अपना सिफारशी ठहराता हूँ,",
    ko: ""
  },
  {
    ar: "وَأَسْألُكَ بِجُودِكَ أَن تُدْنِيَنِي مِن قُرْبِكَ",
    tr: "wa as-aluka bi-jūdika an tud-ni-yanī min qur-bik",
    en: "And I ask You through Your munificence to bring me near to Your proximity,",
    ur: "تیرے جود کے واسطے سے سوال کرتا ہوں کہ مجھے اپناقرب عطا فرما",
    hi: "और तेरे करम का वास्ता दे कर तुझ से इल्तेजा करता हूँ के मुझे अपना कुर्ब अता कर",
    ko: ""
  },
  {
    ar: "وَأَن تُوزِعَنِي شُكْرَكَ",
    tr: "wa an tūzi`anī shuk-rak",
    en: "And to provide me with gratitude toward You",
    ur: "اور توفیق دے کہ تیرا شکر ادا کروں",
    hi: "मुझे अदाए शुक्र की तौफीक दे",
    ko: ""
  },
  {
    ar: "وَأَن تُلْهِمَنِي ذِكْرَكَ",
    tr: "wa an tul-himanī dhik-rak",
    en: "And to inspire me with Your remembrance.",
    ur: "اور میری زبان پر اپنا ذکر جاری فرما",
    hi: "और अपनी याद मेरे दिल में डाल दे!",
    ko: ""
  },
  {
    ar: "اللَّهُمَّ إِنِّي أَسْألُكَ سُؤَالَ خَاضِع مُّتَذَلِّل خَاشِع أَن تُسَامِحَنِي وَتَرْحَمَنِي",
    tr: "allahumma in-nī as-luka suāla khāḍii'm-mutadhal-lilin khā-shii'n an tusāmiḥanī wa tar-ḥamanī",
    en: "O Allah, verily I ask You with the asking of a submissive, abased and lowly man to show me forbearance, to have mercy on me",
    ur: "اے اللہ میں سوال کرتا ہوں جھکے ہوئے گرے ہوئے ڈرے ہوئے کیطرح کہ مجھ سے چشم پوشی فرما مجھ پر رحمت کر",
    hi: "ऐ अल्लाह, मैं तुझ से खोज़ू व खुशू और गिरया व ज़ारी से अर्ज़ करता हूँ के तू मेरी भूल चूक माफ़ कर,",
    ko: ""
  },
  {
    ar: "وَتَجْعلَنِي بِقَسَمِكَ رَاضِياً قَانِعاً وَفِي جَمِيعِ الأَحْوَاِل مُتَوَاضِعاً",
    tr: "wa taj-`alanī bi-qasamika rāḍiyan qāni`n wa fī jamīi'l-aḥ-wāli mutawāḍi`aā",
    en: "And to make me satisfied and content with Your appointment and [make me] humble in every state.",
    ur: "اور مجھے اپنی تقدیر پر راضی و قانع اور ہر قسم کے حالات میں نرم خو رہنے والا بنا دے",
    hi: "मुझ पर रहम फार्म और तू में मेरा जो हिस्सा मुक़र्रर किया है, मुझे इस पर राज़ी, काने और हर हाल में मुतमईन रख!",
    ko: ""
  },
  {
    ar: "اللَّهُمَّ وَأَسْألُكَ سُؤَالَ مَنِ اشْتَدَّتْ فَاقَتُهُ",
    tr: "allahumma wa as-aluka suāla manish-tad-dat fāqatuh",
    en: "O Allah, I ask You the question of one whose indigence is extreme,",
    ur: "یااللہ میں تجھ سے سوال کرتا ہوں اس شخص کیطرح جو سخت تنگی میں ہو",
    hi: "ए अल्लाह, मै तेरे हजूर में इस शख्स की मानिंद सवाल करता हूँ जिस पर सख्त फाके गुज़र रहे हों,",
    ko: ""
  },
  {
    ar: "وَأَنزَلَ بِكَ عِنْدَ الشَّدَائِدِ حَاجَتَهُ",
    tr: "wa anzala bika i'ndash-shadā-idi ḥājatahu",
    en: "And who has stated to You in difficulties his need",
    ur: "سختیوں میں پڑا ہواپنی حاجت لے کر تیرے پاس آیاہوں",
    hi: "जो मुसीबतों से तंग आकर अपनी ज़रुरत तेरे सामने पेश करे,",
    ko: ""
  },
  {
    ar: "وَعَظُمَ فِيمَا عِنْدَكَ رَغْبَتُهُ",
    tr: "wa `aẓuma fīmā i'ndaka ragh-batuhu",
    en: "And whose desire for what is with You has become great.",
    ur: "اور جو کچھ تیرے پاس ہے اس میں زیادہ رغبت رکھتا ہوں",
    hi: "जो तेरे लुत्फो करम का ज्यादा से ज्यादा खाहिश्मंद हो!",
    ko: ""
  },
  {
    ar: "اللَّهُمَّ عَظُمَ سُلْطَانُكَ وَعَلاَ مَكَانُكَ",
    tr: "allahumma `aẓuma sul-ṭānuka wa `alā makānuk",
    en: "O Allah, Your force is tremendous, Your place is lofty,",
    ur: "اے اللہ تیری عظیم سلطلنت اور تیرا مقام بلند ہے",
    hi: "ऐ अल्लाह, तेरी सल्तनत बहुत बड़ी है, तेरा रुतबा बहुत बुलंद है,",
    ko: ""
  },
  {
    ar: "وَخَفِي مَكْرُكَ وَظَهَرَ أَمْرُكَ",
    tr: "wa khafiya mak-ruka waẓahara am-ruk",
    en: "And Your deception is hidden, Your command is manifest,",
    ur: "تیری تدبیر پوشیدہ اور تیرا امر ظاہر ہے",
    hi: "तेरी तदबीर पोशीदा है, तेरा हुकुम साफ़ ज़ाहिर है,",
    ko: ""
  },
  {
    ar: "وَغَلَبَ قَهْرُكَ وَجَرَتْ قُدْرَتُكَ",
    tr: "wa ghalaba qah-ruka wa jarat qud-ratuk",
    en: "And Your domination is overwhelming, Your power is unhindered",
    ur: "تیرا قہر غالب تیری قدرت کارگر ہے",
    hi: "तेरा कहर ग़ालिब है, तेरी कुदरत कार फरमा है,",
    ko: ""
  },
  {
    ar: "وَلا يُمْكِنُ الْفِرَارُ مِنْ حُكُومَتِكَ",
    tr: "wa-lā yum-kinul-firāru min ḥukū-matik",
    en: "And escape from Your governance is impossible.",
    ur: "تیری حکومت سے فرار ممکن نہیں",
    hi: "और तेरी हुकूमत से निकल जाना मुमकिन नहीं है!",
    ko: ""
  },
  {
    ar: "اللَّهُمَّ لا أَجِدُ لِذُنُوبِي غَافِراً",
    tr: "allahumma lā ajidu lidhunūbī ghāfira",
    en: "O Allah, I find no forgiver of my sins,",
    ur: "خداوندا میں تیرے سوا کسی کو نہیں پاتا جو میرے گناہ بخشنے والا",
    hi: "ऐ अल्लाह, मेरे गुनाह बख्शने,",
    ko: ""
  },
  {
    ar: "وَّلا لِقَبَائِحِي سَاتِراً",
    tr: "wa-lā liqabā-iḥī sātira",
    en: "Nor concealer of my ugly acts",
    ur: "میری برائیوں کو چھپانے والا",
    hi: "मेरे ऐब ढाँकने",
    ko: ""
  },
  {
    ar: "وَّلا لِشَيْء مِّنْ عَمَلِي الْقَبِيحِ بِالْحَسَنِ مُبَدِّلاً غَيْرَكَ",
    tr: "wa-lā lishayim-min `amali-yal-qabīḥi bil-ḥasani mubad-dilan ghayrak",
    en: "Nor transformer of any of my ugly acts into good acts but You",
    ur: "اور میرے برے عمل کو نیکی میں بدل دینے والا ہو",
    hi: "और मेरे किसी बुरे अमल को अच्छे अमल से बदलने वाला तेरे सिवा कोई नहीं है!",
    ko: ""
  },
  {
    ar: "لا إِلَهَ إِلاَّ أَنتَ",
    tr: "lā ilāha il-lā anta",
    en: "There is no god but You!",
    ur: "تیرے سوا کوئی معبود نہیں",
    hi: "तेरे इलावा और कोई माबूद नहीं है!",
    ko: ""
  },
  {
    ar: "سُبْحَانَكَ وَبِحَمْدِكَ",
    tr: "sub-ḥānaka wa biḥam-dika",
    en: "Glory be to You, and Thine is the praise!",
    ur: "تو پاک ہے اور حمد تیرے ہی لیے ہے",
    hi: "तू पाक है, और मै तेरी ही हम्दोसेना  करता हूँ!",
    ko: ""
  },
  {
    ar: "ظَلَمْتُ نَفْسِي",
    tr: "ẓalam-tu naf-sī",
    en: "I have wronged myself,",
    ur: "میں نے اپنے نفس پر ظلم کیا",
    hi: "मैं  ने अपनी ज़ात पर ज़ुल्म किया",
    ko: ""
  },
  {
    ar: "وَتَجَرَّأْتُ بِجَهْلِي",
    tr: "wa tajar-ratu bijah-lī",
    en: "And I have been audacious in my ignorance",
    ur: "اپنی جہالت کی وجہ سے جرأت کی",
    hi: "और अपनी नादानी के बाएस बेग़ैरत बन गया!",
    ko: ""
  },
  {
    ar: "وَسَكَنتُ إِلَي قَدِيمِ ذِكْرِكَ لِي وَمَنِّكَ عَلَيَّ",
    tr: "wa sakan-tu ilā qadīmi dhik-rika lī wa man-nika `alay",
    en: "And I have depended upon Your ancient remembrance of me and Your favour toward me.",
    ur: "اور میں نے تیری قدیم یاد آوری اور اپنے لیے تیری بخشش پر بھروسہ کیا ہے",
    hi: "मै यह सोच कर मुतमईन हो गया के तू ने मुझे पहले भी याद रखा और अपनी नेमतों से नवाज़ा है!",
    ko: ""
  },
  {
    ar: "اللَّهُمَّ مَوْلايَ",
    tr: "allahumma maw-lāy",
    en: "O Allah! O my Protector!",
    ur: "اے اللہ : میرے مولا",
    hi: "ऐ  अल्लाह,  ऐ मेरे मालिक,",
    ko: ""
  },
  {
    ar: "كَم مِّن قَبِيح سَتَرْتَهُ",
    tr: "kam-min qabīḥin satar-tah",
    en: "How many ugly things You hast concealed!",
    ur: "کتنے ہی گناہوں کی تو نے پردہ پوشی کی",
    hi: "तू ने मेरी कितनी ही बुराईयों की परदापोशी की,",
    ko: ""
  },
  {
    ar: "وَكَم مِّن فَاِدح مِّنَ البَلاءِ أَقَلْتَهُ",
    tr: "wa kam-min fādiḥim-minal-balā-i aqal-tah",
    en: "How many burdensome tribulations You hast abolished!",
    ur: "اور کتنی ہی سخت بلاؤں سے مجھے بچالیا",
    hi: "कितनी ही सख्त बालाओं को मुझ से टाला,",
    ko: ""
  },
  {
    ar: "وَكَم مِّنْ عِثَار وَّقَيْتَهُ",
    tr: "wa kam-min i'thāriw-waqaytah",
    en: "And how many stumbles You hast prevented!",
    ur: "کتنی ہی لغزشیں معاف فرمائیں",
    hi: "कितनी ही नाज़िशों से मुझ को बचाया,",
    ko: ""
  },
  {
    ar: "وَكَم مِّن مَّكْرُوه دَفَعْتَهُ",
    tr: "wa kam-mim-mak-rūhin dafa`tah",
    en: "And how many ordeals You hast repelled!",
    ur: "اور کتنی ہی برائیاں مجھ سے دور کیں",
    hi: "कितनी ही आफतों को रोका!",
    ko: ""
  },
  {
    ar: "وَكَم مِّن ثَنَاء جَمِيل لَّسْتُ أَهْلاً لَّهُ نَشَرْتَهُ",
    tr: "wa kam-min thanā-in jamīlil-las-tu ah-lāl-lāhu nashar-tah",
    en: "And how much beautiful praise, for which I was unworthy, You hast spread abroad!",
    ur: "تو نے میری کتنی ہی تعریفیں عام کیں جن کا میں ہر گز اہل نہ تھا",
    hi: "और मेरी कितनी ही ऐसी खूबियाँ लोगो में मशहूर कर दीं जिन का मै अहल भी ना था!",
    ko: ""
  },
  {
    ar: "اللَّهُمَّ عَظُمَ بَلائِي",
    tr: "allahumma `aẓuma balāī",
    en: "O Allah, my tribulation is tremendous,",
    ur: "اے معبود! میری مصیبت عظیم ہے",
    hi: "ऐ अल्लाह, मेरी मुसीबत बढ़ गयी है,",
    ko: ""
  },
  {
    ar: "وَأَفْرَطَ بِي سُوءُ حَاِلي",
    tr: "wa af-raṭa bī sūo-u ḥālī",
    en: "And my bad state is excessive,",
    ur: "بدحالی کچھ زیادہ ہی بڑھ چکی ہے",
    hi: "मेरी बदहाली हद से गुज़र गयी है,",
    ko: ""
  },
  {
    ar: "وَقَصُرَتْ بِي أَعْمَاِلي",
    tr: "wa qaṣurat bī a`mālī",
    en: "And my acts are inadequate,",
    ur: "میرے اعمال بہت کم ہیں",
    hi: "मेरे नेक अमाल कम हैं,",
    ko: ""
  },
  {
    ar: "وَقَعَدَتْ بِي أَغْلاَلِي",
    tr: "wa qa`adat bī agh-lā-lī",
    en: "And my fetters have tied me down,",
    ur: "گناہوں کی زنجیر نے مجھے جکڑ لیا ہے",
    hi: "दुनयावी तालुक्कात के बोझ ने मुझ को दबा रखा है,",
    ko: ""
  },
  {
    ar: "وَحَبَسَنِي عَن نَّفْعِي بُعْدُ آمَاِلي",
    tr: "wa ḥabasanī `an-naf-e'e bu`a-du ā-mā-lī",
    en: "And my far-fetched hopes have held me back from my gain",
    ur: "لمبی آرزوؤں نے مجھے اپنا قیدی بنا رکھا ہے",
    hi: "मेरी उम्मीदों की दराजी ने मुझे नफा से महरूम कर रखा है,",
    ko: ""
  },
  {
    ar: "وَخَدَعَتْنِي الدُّنْيَا بِغُرُورِهَا وَنَفْسِي بِجِنَايَتِهَا وَمِطَاِلي",
    tr: "wa khada`at-nid-dunyā bi-ghurūri-hā wa naf-sī bi-jināyatihā wa miṭā-lī",
    en: "And this world with its delusions, my own soul with its offences and my delay have deceived me.",
    ur: "دنیا نے دھوکہ بازی سے اور نفس نے جرائم اور حیلہ سازی سے مجھ کو فریب دیا ہے",
    hi: "दुनिया ने अपनी झूटी चमक दमक से मझे धोका दिया है, और मेरे नफस ने मझे मेरे गुनाहों और मेरी टाल मटोल के बाअस  फरेब दिया है!",
    ko: ""
  },
  {
    ar: "يَا سَيِّدِي فَأَسْألُكَ بِعِزَّتِكَ أَن لا يَحْجُبَ عَنْكَ دُعَائِي سُوءُ عَمَلِي وَفِعَاِلي",
    tr: "yā say-yidī fa-as-aluka bi-i'z-zatika an lā yaḥ-juba `an-ka du`aā-ī sūo-u `amalī wa fī`ālī",
    en: "O my Master! So I ask You by Your might not to let my evil works and acts veil my supplication from You,",
    ur: "میرے آقا میں تیری عزت کا واسطہ دے کر سوال کرتا ہوں کہ میری بدعملی و بدکرداری میری دعا کو تجھ سے نہ روکے",
    hi: "ऐ मेरे आका अब मै तेरी इज्ज़त का वास्ता दे कर तुझ से इल्तेजा करता हूँ के मेरी बदअमालियाँ और ग़लतकारियां मेरी दुआ के कबूल होने में रुकावट ना बने!",
    ko: ""
  },
  {
    ar: "وَلا تَفْضَحَنِي بِخَفِيِّ مَا اطَّلَعْتَ عَلَيْهِ مِنْ سِرِّي",
    tr: "wa-lā taf-ḍaḥ-nī bi-khafī-yi māṭ-ṭala`ta `ailayhi min sir-rī",
    en: "And not to disgrace me through the hidden things You knowest of my secrets",
    ur: "اور تو مجھے میرے پوشیدہ کاموں سے رسوا نہ کرے جن میں تو میرے راز کو جانتاہے",
    hi: "मेरे जिन भेदों से तू वाकिफ है इन की वजह से मुझे रुसवा ना करना,",
    ko: ""
  },
  {
    ar: "وَلا تُعَاجِلْنِي بِالْعُقُوبَةِ عَلَى مَا عَمِلْتُهُ فِي خَلَوَاتِي",
    tr: "wa-lā tu`ājil-nī bil-u'qūbati `alā mā `amil-tuhu fī khalawātī",
    en: "And not to hasten me to punishment for what I have done in private:",
    ur: "اور مجھے اس پر سزا دینے میں جلدی نہ کر جو میں نے خلوت میں غلط کام کیا",
    hi: "मै ने अपनी तन्हाईयों में जो बदी,",
    ko: ""
  },
  {
    ar: "مِنْ سُوءِ فِعْلِي وَإِسَاءَتِي",
    tr: "min sūo-i fi`a-lī wa isā-atī",
    en: "My evil acts in secrecy and my misdeeds",
    ur: "کی ہمیشہ کوتاہی کی اس میں میری نادانی",
    hi: "बुराई और मुसलसल कोताही की है",
    ko: ""
  },
  {
    ar: "وَدَوَامِ تَفْرِيطِي وَجَهَالَتِي",
    tr: "wa dawāmi taf-rīṭī wa jahālatī",
    en: "And my continuous negligence and my ignorance",
    ur: "کی ہمیشہ کوتاہی کی اس میں میری نادانی",
    hi: "और नादानी, बढ़ी हुई खाहिशाते नफस और गफलत के सबब जो काम किये हैं",
    ko: ""
  },
  {
    ar: "وَكَثْرَةِ شَهَوَاتِي وَغَفْلَتِي",
    tr: "wa kath-rati sha-hawātī wa ghaf-latī",
    en: "And my manifold passions and my forgetfulness.",
    ur: "خواہشوں کی کثرت اور غفلت بھی ہے",
    hi: "मुझे उनकी सजा देने में जल्दी ना करना!",
    ko: ""
  },
  {
    ar: "وَكُنِ اللَّهُمَّ بِعِزَّتِكَ لِي فِي كُلِّ الأَحْوَاِل رَؤُوفاً",
    tr: "wa kunil-lāhumma bi-i'z-zatika lī fī kul-lil-aḥ-wāli ra’ūfā",
    en: "And by Your might, O Allah, be kind to me in all states",
    ur: "اور اے میرے اللہ تجھے اپنی عزت کا واسطہ میرے لیے",
    hi: "ऐ अल्लाह, अपनी इज्ज़त के तुफैल हर हाल में मुझ पर मेहरबान रहना,",
    ko: ""
  },
  {
    ar: "وَّعَلَيَّ فِي جَمِيعِ الأُمُورِ عَطُوفاً",
    tr: "wa `alay-ya fī jamīi'l-umūrī `aṭūfā",
    en: "And be gracious to me in all affairs!",
    ur: "ہر حال میں مہربان رہ  اور تمام امور میں مجھ پر عنایت فرما",
    hi: "और मेरे तमाम मामलात में मुझ पर करम करते रहना!",
    ko: ""
  },
  {
    ar: "إِلَهِي وَرَبِّي مَن لِّي غَيْرُكَ أَسْألُهُ كَشْفَ ضُرِّي وَالْنَّظَرَ فِي أَمْرِي!",
    tr: "ilahī wa rab-bī mal-lī ghayruka as-aluhu kash-fa ḍur-rī wan-naẓara fī am-rī!",
    en: "My God and my Lord! Have I any but You from whom to ask removal of my affliction and regard for my affairs!",
    ur: "میرے معبود میرے رب  تیرے سوا میرا کون ہے جس سے سوال کروں کہ میری تکلیف دور کر دے اور میرے معاملے پر نظر رکھ",
    hi: "ऐ मेरे अल्लाह, ऐ मेरे परवरदिगार, तेरे सिवा मेरा कौन है जिस से मै अपनी मुसीबत को दूर करने और अपने बारे में नज़रे करम करने का सवाल करूँ!",
    ko: ""
  },
  {
    ar: "إِلَهِي وَمَوْلاي أَجْرَيْتَ عَلَيَّ حُكْماً اتَّبَعْتُ فِيهِ هَوَى نَفْسِي",
    tr: "ilahī wa maw-laya aj-rayta `alay-ya ḥuk-mant-taba`tu fīhi hawā naf-sī",
    en: "My God and my Protector! You put into effect through me a decree in which I followed the caprice of my own soul",
    ur: "میرے معبود اور میرے مولا تو نے میرے لیے حکم صادر فرمایالیکن میں نے اس میں خواہش کا کہا مانا",
    hi: "ऐ मेरे माबूद और मेरे मालिक, मै ने खुद अपने खिलाफ फैसला दे दिया क्योंके मै हवाए नफस के पीछे चलता रहा",
    ko: ""
  },
  {
    ar: "وَلَمْ أَحْتَرِسْ فِيهِ مِن تَزْيينِ عَدُوِّي",
    tr: "wa lam aḥ-taris fīhi min tazyīni `adū-wī",
    en: "And [I] did not remain wary of adorning my enemy.",
    ur: "اور میں دشمن کی فریب کاری سے بچ نہ سکا",
    hi: "और मेरे दुश्मन ने जो मुझे सुनहरे खाव्ब दिखाए",
    ko: ""
  },
  {
    ar: "فَغَرَّنِي بِمَا أَهْوَى وَأَسْعَدَهُ عَلَى ذَلِكَ القَضَاءُ",
    tr: "fa-ghar-ranī bi-mā ah-wā wa as-`adahu `alā dhā-likal-qaḍā",
    en: "So he deluded me through my soul's caprice and therein destiny favoured him",
    ur: "اس نے میری خواہشوں میں دھوکہ دیااور وقت نے اسکا ساتھ دیا",
    hi: "मै ने इन से अपना बचाओ नहीं किया, चुनान्चेह इस ने मुझे खाहिशात के जाल में फंसा दिया,",
    ko: ""
  },
  {
    ar: "فَتَجَاوَزْتُ بِمَا جَرَى عَلَيَّ مِنْ ذَلِكَ بَعْضَ حُدُودِكَ",
    tr: "fa-tajā-waztu bi-mā jarā `alay-ya min dhā-lika ba`ḍa ḥudūdik",
    en: "So, in what was put into effect through me in that situation, I transgressed some of Your statutes",
    ur: "پس تو نے جو حکم صادر کیا میں نے اس میں تیری بعض حدود کو توڑا",
    hi: "इस में मेरी तकदीर ने भी इस की मदद की! इस तरह मै ने तेरी मुक़र्रर की हुई बाज़ हदें तोड़ दीं",
    ko: ""
  },
  {
    ar: "وَخَالَفْتُ بَعْضَ أَوَامِرِكَ",
    tr: "wa khālaf-tu ba`ḍa awāmirik",
    en: "And disobeyed some of Your commands.",
    ur: "اور تیرے بعض احکام کی مخالفت کی",
    hi: "और तेरे बाज़ अहकाम की नाफ़रमानी की!",
    ko: ""
  },
  {
    ar: "فَلَكَ الْحُجَّةُ عَلَيَّ فِي جَمِيعِ ذَلِكَ",
    tr: "falakal-ḥuj-jatu `alay-ya fī jamīi' dhālik",
    en: "So Thine is the argument against me in all of that",
    ur: "پس اس معاملہ میں مجھ پر لازم ہے",
    hi: "बहरहाल तू हर तारीफ़ का मुस्तहक है",
    ko: ""
  },
  {
    ar: "وَلا حُجَّةَ لِي فِيمَا جَرَي عَلَيَّ فِيهِ قَضَاؤُكَ",
    tr: "wa-lā ḥuj-jata lī fīmā jarā `alay-ya fīhi qaḍāuka",
    en: "I have no argument in what Your destiny put into effect through me therein",
    ur: "تیری حمد بجالانا اور میرے پاس کوئی حجت نہیں اس میں جو فیصلہ تو نے میرے لیے کیا ہے",
    hi: "और जो कुछ पेश आया इस में खता मेरी ही है!",
    ko: ""
  },
  {
    ar: "وَأَلْزَمَنِي حُكْمُكَ وَبَلاؤُكَ",
    tr: "wa alzamanī ḥuk-muka wa balāuk",
    en: "nor in what Your decree and Your tribulation imposed upon me.",
    ur: "اور میرے لیے تیرا حکم اور تیری آزمائش لازم ہے",
    hi: "इस बारे में तुने जो फैसला किया, तेरा जो हुक्म जारी हुआ",
    ko: ""
  },
  {
    ar: "وَقَدْ أَتَيْتُكَ يَا إِلَهِي بَعْدَ تَقْصِيرِي وَإِسْرَافِي عَلَى نَفْسِي",
    tr: "wa qad ataytuka yā ilahī ba`da taq-ṣīrī wa is-rāfī `alā naf-sī",
    en: "Now I have come to You, My God, after my shortcoming and my immoderation toward myself,",
    ur: "اور اے اللہ میں تیرے حضور آیا ہوں جب کہ میں نے کو تاہی کی اور اپنے نفس پرزیادتی  کی ہے",
    hi: "और तेरी तरफ से मेरी जो आजमाईश हुई इस के खिलाफ मेरे पास कोई उज्र नहीं है! ऐ मेरे माबूद, मै ने अपनी इस कोताही और अपने नफस पर ज़ुल्म के बाद",
    ko: ""
  },
  {
    ar: "مُعْتَذِراً نَّادِماً",
    tr: "mu`a-tadhiran-nādiman",
    en: "Proffering my excuse, regretful,",
    ur: "میں عذر خواہ و پشیماں",
    hi: "माफ़ी मांगने के लिए हाज़िर हुआ हूँ!",
    ko: ""
  },
  {
    ar: "مُّنْكَسِراً مُّسْتَقِيلاً",
    tr: "mun-kasirām-mus-taqīlama",
    en: "Broken, apologizing,",
    ur: "ہارا ہوا معافی کا طالب",
    hi: "मै अपने किये पर शर्मसार हूँ,",
    ko: ""
  },
  {
    ar: "مُّسْتَغْفِراً مُّنِيباً",
    tr: "mus-tagh-firām-munīban",
    en: "Asking forgiveness, repenting,",
    ur: "بخشش کا سوالی",
    hi: "दिल शिकस्ता हूँ, मै अपने करतूतों से बाज़ आया,",
    ko: ""
  },
  {
    ar: "مُّقِرّاً مُّذْعِناً مُّعْتَرِفاً",
    tr: "muqir-rām-mudhi'nām-mu`a-tarifa",
    en: "Acknowledging, submissive, confessing.",
    ur: "تائب گناہوں کا اقراری سرنگوں اور اقبال جرم کرتا ہوں",
    hi: "बक्शीश का तलबगार हूँ, पशेमानी के साथ तेरी जनाब में हाज़िर हूँ,",
    ko: ""
  },
  {
    ar: "لا أَجِدُ مَفَرّاً مِّمَّا كَانَ مِنِّي",
    tr: "lā ajidu mafar-rām-mim-mā kāna min-nī",
    en: "I find no place to flee from what occurred through me,",
    ur: "جو کچھ مجھ سے ہوا نہ اس سے فرار کی راہ ہے",
    hi: "जो कुछ मुझ से सरज़द हो चूका, उस के बाद मेरे लिए ना कोई भागने की जगह है",
    ko: ""
  },
  {
    ar: "وَلا مَفْزَعاً أَتَوَجَّهُ إِلَيْهِ في أَمْرِي",
    tr: "wa-lā mafzā'ān atawaj-jahu ilayhi fī am-rī",
    en: "Nor any place of escape to which I may turn in my affairs,",
    ur: "نہ کوئی جا ئے پناہ کہ اپنے معاملے میں اسکی طرف توجہ کروں سوائے اسکے",
    hi: "और ना कोई ऐसा मददगार जिस के पास मै अपना मामला ले जाऊं!",
    ko: ""
  },
  {
    ar: "غَيْرَ قَبُولِكَ عُذْرِي وَإِدخَاِلكَ إِيَاي فِي سَعَة مِّن رَّحْمَتِكَ",
    tr: "ghayra qabūlika u'dhrī wa id-khālika ī-yaya fī sā'tim-mir-raḥ-matik",
    en: "Other than Your acceptance of my excuse and Your entering me into the compass of Your mercy.",
    ur: "کہ تو میرا عذر قبول کر اور مجھے اپنی وسیع تر رحمت میں داخل کرلے",
    hi: "सिर्फ यही है के तू मेरी माज़रत कबूल कर ले, मुझे अपने दामने रहमत में जगह देदे!",
    ko: ""
  },
  {
    ar: "اللَّهُمَّ فَاقْبَل عُذْرِي",
    tr: "allahumma faq-bal u'dhrī",
    en: "O Allah, so accept my excuse,",
    ur: "اے معبود! بس میرا عذر قبول فرما",
    hi: "ऐ मेरे माबूद, मेरी माफ़ी की दरखास्त मंज़ूर कर ले,",
    ko: ""
  },
  {
    ar: "وَارْحَمْ شِدَّةَ ضُرِّي",
    tr: "war-ḥam shid-data ḍurī",
    en: "Have mercy upon the severity of my affliction",
    ur: "میری سخت تکلیف پر رحم کر",
    hi: "मेरी सख्त बदहाली पर रहम कर और मेरी गिरह कुशाई फर्मा दे!",
    ko: ""
  },
  {
    ar: "وَفُكَّنِي مِن شَدِّ وَثَاقِي",
    tr: "wa fuk-kanī min shad-di wathāqī",
    en: "And release me from the tightness of my fetters,",
    ur: "اور بھاری مشکل سے رہائی دے",
    hi: "ऐ मेरे परवरदिगार, मेरे जिस्म की नातवानी,",
    ko: ""
  },
  {
    ar: "يَا رَبِّ ارْحَمْ ضَعْفَ بَدَنِي وَرِقَّةَ جِلْدِي وَدِقَّةَ عَظْمِي",
    tr: "yā rab-bir-ḥam ḍa`fa badanī wa riq-qata jil-dī wa diq-qata `aẓmī",
    en: "My Lord, have mercy upon the weakness of my body, the thinness of my skin and the frailty of my bones.",
    ur: "اے پروردگار میرے کمزور بدن نازک جلد اور باریک ہڈیوں پر رحم فرما",
    hi: "मेरी जिल्द की कमजोरी और मेरी हड्डियों की नाताक़ती पर रहम कर!",
    ko: ""
  },
  {
    ar: "يَا مَنْ بَدَأَ خَلْقِي وَذِكْرِي وَتَرْبِيَتِي وَبِرِّي وَتَغْذِيَتِي",
    tr: "yā mam badā khal-qī wa dhik-rī wa tar-bi-yatī wa birī wa tagh-dhi-yatī",
    en: "O You who gave rise to my creation, to the remembrance of me, to the nurture of me, to goodness toward me and to nourishment on me,",
    ur: "اے وہ ذات جس نے میری خلقت ذکر پرورش نیکی اور غذا کا آغاز کیا",
    hi: "ऐ वोह ज़ात जिस ने मुझे वजूद बख्शा, मेरा ख्याल रखा, मेरी परवरिश का सामान किया, मेरे हक में बेहतर की और मेरे लिए ग़ज़ा के असबाब फराहम किये!",
    ko: ""
  },
  {
    ar: "هَبْنِي لابْتِدَاءِ كَرَمِكَ وَسَاِلفِ بِرِّكَ بِي",
    tr: "hab-nī lb-tidā-i karamika wa sālifi bir-rika bī",
    en: "Bestow upon me for the sake of Your having given rise [to me] with generosity and Your previous goodness to me!",
    ur: "اپنے پہلے کرم اور گزشتہ نیکی کے تحت مجھے معاف فرما",
    hi: "बस जिस तरह तू ने इस से पहले मुझ पर करम किया और मेरे लिए बेहतरी के सामन किये, अब भी मुझ पर वो पहला सा फज़ल व करम जारी रख!",
    ko: ""
  },
  {
    ar: "يَا إِلَهِي وَسَيِّدِي وَرَبِّي",
    tr: "yā ilahī wa say-yidī wa rab-bī",
    en: "O Allah, my Master and my Lord!",
    ur: "اے میرے معبودمیرے آقا اور میرے رب",
    hi: "ऐ मेरे माबूद, मेरे मालिक, ऐ मेरे परवरदिगार,",
    ko: ""
  },
  {
    ar: "أَتُرَاكَ مُعَذِّبِي بِنَارِكَ بَعْدَ تَوْحِيدِكَ",
    tr: "aturāka mu`adh-dhibī binārika ba`da taw-ḥīdik",
    en: "Canst You see Yourself  tormenting me with Your fire after I have professed Your Unity",
    ur: "کیا میں یہ سمجھوں کہ تو مجھے اپنی آگ کا عذاب دے گا جبکہ تیری توحید کا معترف ہوں",
    hi: "मै हैरान हूँ के क्या तू मुझे अपनी आतिशे जहन्नम का अज़ाब देगा हालांकि मै तेरी तौहीद का इकरार करता हूँ,",
    ko: ""
  },
  {
    ar: "وَبَعْدَ مَا انْطَوَى عَلَيْهِ قَلْبِي مِن مَّعْرِفَتِكَ",
    tr: "wa ba`da man-ṭawā `ailayhi qal-bī mim-ma`rifatik",
    en: "And after the knowledge of You my heart has embraced,",
    ur: "اسکے ساتھ میرا دل تیری معرفت سے لبریز ہے",
    hi: "मेरा दिल तेरी मार्फ़त से सरशार है,",
    ko: ""
  },
  {
    ar: "وَلَهِجَ بِهِ لِسَانِي مِنْ ذِكْرِكَ",
    tr: "wa lahija bihi lisānī min dhik-rik",
    en: "And the remembrance of You my tongue has constantly mentioned",
    ur: "اور میری زبان تیرے ذکر میں لگی ہوئی ہے",
    hi: "मेरी ज़बान पर तेरा ज़िक्र जारी है,",
    ko: ""
  },
  {
    ar: "وَاعْتَقَدَهُ ضَمِيرِي مِنْ حُبِّكَ",
    tr: "wa a`taqadahu ẓamīrī min ḥub-bik",
    en: "And the love of You to which my mind has clung,",
    ur: "میرا ضمیر تیری محبت سے جڑا ہوا ہے",
    hi: "मेरे दिल में तेरी मुहब्बत बस चुकी है",
    ko: ""
  },
  {
    ar: "وَبَعْدَ صِدْقِ اعْتِرَافِي وَدُعَائِي خَاضِعاً لِّرُبُوبِيَّتِكَ",
    tr: "wa ba`da ṣid-qi-`a-tirāfī wa du`aā-ī khāḍi`aāl-li-rubūbī-yatika",
    en: "And after the sincerity of my confession and my supplication, humble before Your lordship?",
    ur: "اور اپنے گناہوں کے سچے اعتراف اور تیری ربوبیت کے آگے میری عاجزانہ پکار کے بعد بھی تو مجھے عذاب دے گا۔",
    hi: "और मै तुझे अपना परवरदिगार मान कर सच्चे दिल से अपने गुनाहों का एतेराफ करता हूँ, और गिडगिडा कर तुझ से दुआ मांगता हूँ!",
    ko: ""
  },
  {
    ar: "هَيْهَاتَ أَنتَ أَكْرَمُ مِنْ أَن تُضَيِّعَ مَن رَّبَّيْتَهُ",
    tr: "hayhāta anta ak-ramu min an tuḍay-yi`a mar-rab-baytah",
    en: "Far be it from You! You art more generous than that You shouldst squander him whom You hast nurtured,",
    ur: "ہرگز نہیں! تو بلند ہے اس سے کہ جسے پالا ہو اسے ضائع کرے",
    hi: "नहीं ऐसा नहीं हो सकता, क्योंकि तेरा करम इस से कहीं बढ़ कर है के तू इस शख्स को बेसहारा छोड़ दे जिसे तुने खुद पाला हो",
    ko: ""
  },
  {
    ar: "أَوْ تُبْعِدَ مَنْ أَدْنَيْتَهُ",
    tr: "aw tub-i'da man ad-naytah",
    en: "Or banish him whom You hast brought nigh,",
    ur: "یا جسے قریب کیا ہو اسے دور کرے",
    hi: "या उसे अपने से दूर कर दे जिसे तू ने खुद  अपना कुर्ब बख्शा हो",
    ko: ""
  },
  {
    ar: "أَوْ تُشَرِّدَ مَنْ آوَيْتَهُ",
    tr: "aw tushar-rida man ā-aytah",
    en: "Or drive away him whom You hast given an abode",
    ur: "یا جسے پناہ دی ہو اسے چھوڑ دے",
    hi: "या उसे अपने यहाँ से निकाल दे जिसे तुने खुद पनाह दी हो,",
    ko: ""
  },
  {
    ar: "أَوْ تُسْلِّمَ إِلىَ الْبلاءِ مَن كَفَيْتَهُ وَرَحِمْتَهُ",
    tr: "aw tus-s-lima ilāl-balā-i man kafay-tahu wa raḥim-tah",
    en: "Or submit to tribulation him whom You hast spared and shown mercy.",
    ur: "یا جسکی سرپرستی کی ہو اور اس پر مہربانی کی ہو اسے مصیبت کے حوالے کر دے",
    hi: "या उसे बालाओं के हवाले कर दे जिस का तुने खुद ज़िम्मा लिया हो और जिस पर रहम किया हो,",
    ko: ""
  },
  {
    ar: "وَلَيْتَ شِعْرِي يَا سَيِّدِي وَإِلَهِي وَمَوْلاي",
    tr: "wa layta shi`a-rī yāy say-yidī wa ilahī wa maw-lāy",
    en: "Would that I knew, my Master, My God and my Protector,",
    ur: "اے کاش میں جانتا اے میرے آقا میرے معبود!",
    hi: "यह बात मेरी समझ में नहीं आती! ऐ मेरे मालिक, ऐ मेरे माबूद, ऐ मेरे मौला,",
    ko: ""
  },
  {
    ar: "أَتُسَلِّطُ النَّارَ عَلَى وُجُوه خَرَّتْ لِعَظَمَتِكَ سَاجِدَةً",
    tr: "atusal-liṭun-nāra `alā wujūhin khar-rat li-`aẓamatika sājidah",
    en: "Whether You wilt give the Fire dominion over faces fallen down prostrate before Your Tremendousness,",
    ur: "اور میرے مولا کہ کیا تو ان چہروں کو آگ میں ڈالے گا جو تیری عظمت کے سامنے سجدے میں پڑے ہیں",
    hi: "क्या तू आतिशे जहन्नम को मुसल्लत कर देगा इन चेहरों पर जो तेरी अजमत के बायेस तेरे हजूर में सज्दारेज़ हो चुके हैं,",
    ko: ""
  },
  {
    ar: "وَّعَلَى أَلْسُن نَّطَقَتْ بِتَوْحِيدِكَ صَادِقَةً وَّبِشُكْرِكَ مَادِحَةً",
    tr: "wa `alā al-sunin-naṭaqat bi-taw-ḥīdika ṣādiqataw-wa bishuk-rika mādiḥah",
    en: "And over tongues voicing sincerely the profession of Your Unity and giving thanks to You in praise,",
    ur: "اور ان زبانوں کو جو تیری توحید کے بیان میں سچی ہیں اور شکر کے ساتھ تیری تعریف کرتی ہیں",
    hi: "इन ज़बानों पर जो सिद्क़ दिल से तेरी तौहीद का इकरार करके शुक्रगुजारी के साथ तेरी मधा कर चुकी हैं,",
    ko: ""
  },
  {
    ar: "وَّعَلَى قُلُوب اعْتَرَفَتْ بِإِلَهِيَّتِكَ مُحَقِّقَةً",
    tr: "wa `alā qulūbin-`a-tarafat bi-ilhī-yatika muḥaq-qiqah",
    en: "And over hearts acknowledging Your Divinity through verification,",
    ur: "اور ان دلوںکو جو تحقیق کیساتھ تجھے معبود مانتے ہیں",
    hi: "इन दिलों पर जो वाकई तेरे माबूद होने का ऐतेराफ कर चुके हैं,",
    ko: ""
  },
  {
    ar: "وَّعَلَى ضَمَائِرَ حَوَتْ مِنَ الْعِلْمِ بِكَ حَتَّى صَارَتْ خَاشِعَةً",
    tr: "wa `alā ḍamā-ira ḥawat minal-i'l-mi bika ḥat-tā ṣārat khāshi`ah",
    en: "And over minds encompassing knowledge of You until they have become humble",
    ur: "ور انکے ضمیروں کو جو تیری معرفت سے پر ہو کر تجھ سے خائف ہیں",
    hi: "इन दिमागों पर जो तेरे इल्म से इस कद्र बहरावर हुए के तेरे हुज़ूर में झुके हुए हैं",
    ko: ""
  },
  {
    ar: "وَّعَلَى جَواِرحَ سَعَتْ إِلَى أَوْطَانِ تَعَبُّدِكَ طَائِعَةً وَّأَشَارَتْ بِاسْتِغْفَارِكَ مُذْعِنَةً",
    tr: "wa `alā jawariḥa sā't ilā aw-ṭāni tā'b-budika ṭā-i`ataw-wa ashārat bis-tigh-fārika mudhi'nah",
    en: "And over bodily members speeding to the places of Your worship in obedience and beckoning for Your forgiveness in submission.",
    ur: "اور ان اعضاء کو جو فرمانبرداری سے تیری عبا دت گاہوں کی طرف دوڑتے ہیں اور یقین کے ساتھتیری مغفرت کے طالب ہیں",
    hi: "या इन हाथ पाँव पर जो इताअत के जज्बे के साथ तेरी इबादतगाहों की तरफ दौड़ते रहे और गुनाहों के इकरार करके मग्फेरत  तलब करते रहे?",
    ko: ""
  },
  {
    ar: "مَّا هَكَذَا الظَّنُّ بِكَ وَلا أُخْبِرْنَا بِفَضْلِكَ عَنكَ",
    tr: "mā hkadhāẓ-ẓan-nu bika wa-lā ukh-bir-nā bi-faḍlika `anka",
    en: "No such opinion is held of You! Nor has such been reported - thanks to Your bounty — concerning You,",
    ur: "تیری ذات سے ایسا گمان نہیں نہ یہ تیرے فضلکے مناسب ہے",
    hi: "ऐ  रब्बे  करीम,  ना तो तेरी निस्बत ऐसा गुमान ही   किया जा सकता है और ना ही तेरी तरफ से हमें ऐसी कोई खबर दी गयी है!",
    ko: ""
  },
  {
    ar: "يَا كَرِيمُ يَا رَبِّ",
    tr: "yā karīmu yā rab",
    en: "O All-generous! My Lord,",
    ur: "اے کریم اے پروردگار!",
    hi: "ऐ मेरे पालने वाले",
    ko: ""
  },
  {
    ar: "وَأَنتَ تَعْلَمُ ضَعْفِي عَن قَلِيل مِّن بَلاءِ الدُّنْيَا وَعُقُوبَاتِهَا",
    tr: "wa anta ta`lamu ḍa`fī `an qalīlim-min balā-id-dun-yā wa u'qūbātihā",
    en: "And You knowest my weakness before a little of this world's tribulations and punishments,",
    ur: "دنیا کی مختصر تکلیفوں اور مصیبتوں کے مقابل تو میری ناتوانی کو جانتا ہے",
    hi: "तू मेरी कमजोरी से वाकिफ है, मुझ में इस दुनिया की मामूली आज्मायीशों, छोटी छोटी तकलीफों और इन सख्तियों को बर्दाश्त करने की ताब नहीं",
    ko: ""
  },
  {
    ar: "وَمَا يَجْرِي فِيهَا مِنَ الْمَكَارِهِ عَلَى أَهْلِهَا",
    tr: "wa mā yaj-rī fīhā minal-makārihi `alā ah-lihā",
    en: "And before those ordeals which befall its inhabitants,",
    ur: "اور اہل دنیا پر جو تنگیاں آتی ہیں",
    hi: "जो अहले दुनिया पर गुज़रती हैं",
    ko: ""
  },
  {
    ar: "عَلَى أَنَّ ذَلِكَ بَلاءٌ وَّمَكْرُوهٌ قَلِيلٌ مَّكْثُهُ يَسِيرٌ بَقَاؤُهُ قَصِيرٌ مُّدَّتُهُ",
    tr: "`alā an-na dhā-lika balā-uw-wa mak-rūhun, qalīlum-mak-thuhu, yasīrum baqā-uhu, qaṣīrum-mud-datuh",
    en: "Even though it is a tribulation and ordeal whose stay is short, whose subsistence is but little and, whose period is but fleeting.",
    ur: "اگرچہ اس تنگی و سختی کا ٹھہراؤ اور بقاء کا وقت تھوڑا اور مدت کوتاہ ہے",
    hi: "हालांकि वोह आजमाईश, तकलीफ और सख्ती मामूली होती है और इस की मुद्द्त  भी थोड़ी होती है,",
    ko: ""
  },
  {
    ar: "فَكَيْفَ احْتِمَاِلي لِبَلاءِ الآخِرَةِ وَجَلِيلِ وُقُوعِ الْمَكَارِهِ فِيهَا!",
    tr: "fa-kayfaḥ-timālī li-balā-il-akhirati wa jalīli wuqūi'l-makārihi fīhā!",
    en: "So how can I endure the tribulations of the next world and the great ordeals that occur within it?",
    ur: "تو پھر کیونکر میں آخرت کی مشکلوں کو جھیل سکوں گا جو بڑی سخت ہیں",
    hi: "फिर भला मुझ से आखेरत की ज़बरदस्त मुसीबत क्योंकर बर्दाश्त हो सकेगी,",
    ko: ""
  },
  {
    ar: "وَهُوَ بَلاءٌ تَطُولُ مُدَّتُهُ وَيَدُومُ مَقَامُهُ وَلا يُخَفَّفُ عَنْ أَهْلِهِ",
    tr: "wa huwa balā-un taṭūlu mud-datuhu, wa yadūmu maqāmuhu, wa-lā yukhaf-fafu `an ah-lih",
    en: "For it is a tribulation whose period is long, whose station endures and whose sufferers are given no respite,",
    ur: "اور وہ ایسی تکلیفیں ہیں جنکی مدت طولانی اقامت دائمی ہے اور ان میں سے کسی میں کمی نہیں ہو گی",
    hi: "जब की वहां की मुसीबत तूलानी होगी और इस में हमेशा हमेशा के लिए रहना होगा",
    ko: ""
  },
  {
    ar: "لأَنَّهُ لا يَكُونُ إِلاَّ عَنْ غَضَبِكَ وَانتِقَامِكَ وَسَخَطِكَ",
    tr: "li-an-nahu lā yakūnu il-lā `an ghaḍabika wan-tiqāmika wa sakhaṭik",
    en: "Since it only occurs as a result of Your wrath, Your vengeance and Your anger,",
    ur: "اس لیے کہ وہ تیرے غضب تیرے انتقام اور تیری ناراضگی سے آتی ہیں",
    hi: "और जो लोग इस में एक मर्तबा फँस जायेंगे इन के अज़ाब में कभी कमी नहीं होगी क्योंकि वो अज़ाब तेरे गुस्से, इंतकाम और नाराजगी के सबब होगा",
    ko: ""
  },
  {
    ar: "وَهَذَا مَا لا تَقُومُ لَهُ السَّمَاوَاتُ وَالأَرْضُ",
    tr: "wa hadhā mā lā taqūmu lahus-samāwātu wal-arḍu",
    en: "And these cannot be withstood by the heavens and the earth.",
    ur: "اور یہ وہ سختیاں ہیں جنکے سامنے زمین وآسمان بھی کھڑے نہیں رہ سکتے",
    hi: "जिसे ना आसमान बर्दाश्त कर सकता है ना ज़मीन!",
    ko: ""
  },
  {
    ar: "يَا سَيِّدِي فَكَيْفَ بِي",
    tr: "yā say-yidī fakayfa bī",
    en: "O Master, so what about me?!",
    ur: "تو اے آقا مجھ پر کیا گزرے گی",
    hi: "ऐ मेरे मालिक, फिर ऐसी सूरत में मेरा क्या हाल होगा",
    ko: ""
  },
  {
    ar: "وَأَنَا عَبْدُكَ الضَّعِيفُ الذَّلِيلُ الْحَقِيرُ الْمِسْكِينُ الْمُسْتَكِينُ",
    tr: "wa ana `abukaḍ-ḍae'efudh-dhalīlul-ḥaqīrul-mis-kīnul-mus-takīn",
    en: "For I am Your weak, lowly, base, wretched and miserable slave.",
    ur: "جبکہ میں تیرا کمزور پست بے حیثیت بے مایہ اور بے بس بندہ ہوں",
    hi: "जबकि मै तेरा एक कमज़ोर, अदना, लाचार, और आजिज़ बंदा हूँ !",
    ko: ""
  },
  {
    ar: "يَا إِلَهِي وَرَبِّي وَسَيِّدِي وَمَوْلاي",
    tr: "yā ilahī wa rab-bī wa say-yidī wa maw-lāy",
    en: "My God! My Lord! My Master! My Protector!",
    ur: "اے میرے آقا اور میرے مولا!",
    hi: "ऐ मेरे माबूद, ऐ मेरे परवरदिगार, ऐ मेरे मालिक, ऐ मेरे मौला,",
    ko: ""
  },
  {
    ar: "لأَيِّ الأُمُورِ إِلَيْكَ أَشْكُو",
    tr: "li-ay-yil-umūri ilayka ash-kū",
    en: "For which things would I complain to You?",
    ur: "میں کن کن باتوں کی تجھ سے شکایت کروں",
    hi: "मै तुझ से किस किस बात पर नाला",
    ko: ""
  },
  {
    ar: "وَلِمَا مِنْهَا أَضِجُّ وَأَبْكِي",
    tr: "wa limā minhā aḍij-ju wa ab-kī",
    en: "And for which of them would I lament and weep?",
    ur: "اور کس کس کے لیے نالہ و شیون کروں؟",
    hi: "व फरयाद और आहोबुका करूँ?",
    ko: ""
  },
  {
    ar: "لأَلِيمِ الْعَذَابِ وَشِدَّتِهِ!",
    tr: "li-alīmil-`adhābi wa shid-datih",
    en: "For the pain and severity of chastisement?",
    ur: "اور کس کس کے لیے نالہ و شیون کروں؟",
    hi: "दर्दनाक अज़ाब और इसकी सख्ती पर",
    ko: ""
  },
  {
    ar: "أَمْ لِطُولِ الْبَلاءِ وَمُدَّتِهِ!",
    tr: "am liṭūlil-balā-i wa mud-datih",
    en: "Or for the length and period of tribulation?",
    ur: "یا طولانی مصیبت اور اس کی مدت کی زیادتی کیلئے",
    hi: "या मुसीबत और इस की तवील मीयाद पर!",
    ko: ""
  },
  {
    ar: "فَلَئِن صَيَّرْتَنِي لِلْعُقُوبَاتِ مَعَ أَعْدَائِكَ",
    tr: "fa-la-in ṣay-yar-tanī lil-u'qūbāti mā' a`dā-ik",
    en: "So if You takest me to the punishments with Your enemies,",
    ur: "پس اگر تو نے مجھے عذاب و عقاب میں اپنے دشمنوں کے ساتھ رکھا",
    hi: "बस अगर तू ने मुझे अपने दुश्मनों के साथ अज़ाब में झोंक दिया",
    ko: ""
  },
  {
    ar: "وَجَمَعْتَ بَيْنِي وَبَيْنَ أَهْلِ بَلائِكَ",
    tr: "wa jama`ta baynī wa bayna ahli balā-ik",
    en: "And gatherest me with the people of Your tribulation",
    ur: "اور مجھے اوراپنے عذابیوں کو اکٹھا کر دیا",
    hi: "और मुझे इन लोगों में शामिल कर दिया जो तेरी बालाओं के सज़ावार हैं",
    ko: ""
  },
  {
    ar: "وَفَرَّقْتَ بَيْنِي وَبَيْنَ أَحِبَّائِكَ وَأَوْلِيَائِكَ",
    tr: "wa far-raq-ta bay-nī wa bay-na aḥib-bā-ika wa aw-li-yā-ik",
    en: "And separatest me from Your friends and saints,",
    ur: "اور میرے اور اپنے دوستوں اور محبوں میں دوری ڈال دی",
    hi: "और अपने अहिब्बा और औलिया के और मेरे दरम्यान जुदाई डाल दी",
    ko: ""
  },
  {
    ar: "فَهَبْنِي يَا إِلَهِي وَسَيِّدِي وَمَوْلاي وَرَبِّي صَبَرْتُ عَلَى عَذَابِكَ",
    tr: "fa-hab-nī yā ilahī wasay-yidī wa mawlaya wa rab-bī ṣabar-tu `alā `adhābika",
    en: "Then suppose, My God, my Master, my Protector and my Lord that I am able to endure Your chastisement,",
    ur: "تو اے میرے معبود میرے آقا میرے مولا اور میرے رب تو ہی بتا کہ میں تیرے عذاب پر صبر کر ہی لوں",
    hi: "तो ऐ मेरे माबूद, ऐ मेरे मालिक, ऐ मेरे मौला, ऐ मेरे परवरदिगार, मै तेरे दिया हुए अज़ाब पर अगर सब्र भी कर लूं",
    ko: ""
  },
  {
    ar: "فَكَيْفَ أَصْبِرُ عَلَى فِرَاقِكَ",
    tr: "fakayfa aṣ-biru `alā firāqika",
    en: "How can I endure separation from You?",
    ur: "تو تجھ سے دوری پر کیسے صبر کروں گا؟",
    hi: "तो तेरी रहमत से जुदाई पर क्योंकर सब्र कर सकूंगा?",
    ko: ""
  },
  {
    ar: "وَهَبْنِي صَبَرْتُ عَلَى حَرِّ نَارِكَ",
    tr: "wa hab-nī ṣabar-tu `alā ḥar-ri nārika",
    en: "And suppose that I am able to endure the heat of Your fire,",
    ur: "اور مجھے بتاکہ میں نے تیری آگ کی تپش پر صبر کر ہی لیا",
    hi: "इस तरह अगर मै तेरे आग की तपिश बर्दाश्त भी कर लूं",
    ko: ""
  },
  {
    ar: "فَكَيْفَ أَصْبِرُ عَنِ النَّظَرِ إِلَى كَرَامَتِكَ",
    tr: "fakayfa aṣ-biru `an-naẓari ilā karāmatik",
    en: "How can I endure not gazing upon Your generosity?",
    ur: "تو تیرے کرم سے کسطرح چشم پوشی کرسکوں گا",
    hi: "तो तेरी नज़रे करम से अपनी महरूमी को कैसे बर्दाश्त कर सकूंगा",
    ko: ""
  },
  {
    ar: "أَمْ كَيْفَ أَسْكُنُ فِي النَّارِ وَرَجَائِي عَفْوُكَ",
    tr: "am kayfa as-kunu fin-nāri wa rajā-ī `af-wuk",
    en: "Or how can I dwell in the Fire while my hope is Your pardon?",
    ur: "کیسے آگ میں پڑا رہوں گا جب کہ میں تیرے عفو و بخشش کا امیدوار ہوں",
    hi: "और इस के इलावा मै आतिशे जहन्नुम में क्योंकर रह सकूंगा जबके मुझे तो तुझ से माफ़ी की तवक्का है.",
    ko: ""
  },
  {
    ar: "فَبِعِزَّتِكَ يَا سَيِّدِي وَمَوْلاي أُقْسِمُ صَادِقاً لَئِن تَرَكْتَنِي نَاطِقاً",
    tr: "fabi-i'z-zatika yā say-yidī wa mawlaya uq-simu ṣādiqal-la-in tarak-tanī nāṭiqan",
    en: "So by Your might, my Master and my protector, I swear sincerely, if You leavest me with speech,",
    ur: "پس قسم ہے تیری عزت کی اے میرے آقا اور مولا سچی قسم کہ اگر تو نے میری گویائی باقی رہنے دی",
    hi: "बस ऐ मेरे आका, ऐ मेरे मौला, मै तेरी इज्ज़त की सच्ची क़सम खा कर कहता हूँ के अगर तू ने वहां मेरी गोयाई सलामत रखी",
    ko: ""
  },
  {
    ar: "لأَضِجَّنَّ إِلَيْكَ بَيْنَ أَهْلِهَا ضَجِيجَ الآمِلِينَ",
    tr: "laḍij-jan-na ilayka bayna ah-lihā ḍajījal-amilīn",
    en: "I will lament to You from the midst of the Fire's inhabitants with lamentation of the hopeful;",
    ur: "تو میں اہل نار کے درمیان تیرے حضور فریاد کروں گا آرزو مندوں کی طرح",
    hi: "तो मै अहले जहन्नम के दरम्यान तेरा नाम लेकर तुझे  इस तरह पुकारूँगा जैसे करम के उम्मेदवार पुकारा करते हैं,",
    ko: ""
  },
  {
    ar: "وَلأَصْرُخَنَّ إِلَيكَ صُرَاخَ المُسْتَصْرِخِينَ",
    tr: "wa laṣrukhan-na ilayka ṣurākhal-mus-taṣ-rikhīn",
    en: "I will cry to You with the cry of those crying for help;",
    ur: "اور تیرے سامنے نالہ کروں گا جیسے مددگار کے متلاشی کرتے ہیں",
    hi: "मै तेरे हुज़ूर में इस तरह आहोबुका करूंगा जैसे फरयाद किया करते हैं",
    ko: ""
  },
  {
    ar: "وَلأَبْكِيَنَّ عَلَيْكَ بُكَاءَ الفَاقِدِينَ",
    tr: "wa-la-ab-ki-yan-na `ailayka bukā-al-fāqidīn",
    en: "I will weep to You with the weeping of the bereft;",
    ur: "تیرے فراق میں یوں گریہ کروں گا جیسے ناامید ہونے والے گریہ کرتے ہیں",
    hi: "और तेरी रहमत के फ़िराक में इस तरह रोवूँगा जैसे बिछुड़ने वाले रोया करते हैं!",
    ko: ""
  },
  {
    ar: "وَلأُنَادِيَنَّكَ أَيْنَ كُنتَ يَا وَلِيَّ الْمُؤْمِنِينَ",
    tr: "wa la-unādi-yan-naka ay-na kun-ta yā walī-yal-mu-minīn",
    en: "And I will call to You, Where art You, O Sponsor of the believers,",
    ur: "اور تجھے پکاروں گا کہاں ہے تواے مومنوں کے مددگار",
    hi: "मैं तुझे वहां बराबर पुकारूंगा के तू कहाँ है ऐ मोमिनो के मालिक,",
    ko: ""
  },
  {
    ar: "يَا غَايَةَ آمَاِل العَارِفِينَ",
    tr: "yā ghāyata ā-mālil-`ārifīn",
    en: "O Goal of the hopes of Your knowers,",
    ur: "اے عارفوں کی امیدوں کے مرکز",
    hi: "ऐ आरिफों की उम्मीदगाह,",
    ko: ""
  },
  {
    ar: "يَا غِيَاثَ المُسْتَغِيثِينَ",
    tr: "yā ghiyāthal-mus-taghīthīn",
    en: "O Aid of those who seek assistance,",
    ur: "اے بیچاروں کی داد رسی کرنے والے",
    hi: "ऐ फर्यादीयों  के फरयादरस,",
    ko: ""
  },
  {
    ar: "يَا حَبِيبَ قُلُوبِ الصَّادِقِينَ",
    tr: "yā ḥabība qulūbiṣ-ṣādiqīn",
    en: "O Friend of the hearts of the sincere",
    ur: "اے سچے لوگوں کے دوست اور",
    hi: "ऐ सादिकों के दिलों के महबूब,",
    ko: ""
  },
  {
    ar: "وَيَا إِلَهَ العَالَمِينَ",
    tr: "wa yā ilhal-`ālamīn",
    en: "And O God of all the world's inhabitants!",
    ur: "اے عالمین کے معبود",
    hi: "ऐ इलाहिल आलमीन,",
    ko: ""
  },
  {
    ar: "أَفَتُرَاكَ سُبْحَانَكَ يَا إِلَهِي وَبِحَمْدِكَ تَسْمَعُ فِيهَا صَوْتَ عَبْد مُّسْلِم",
    tr: "afaturāka sub-ḥānaka yā ilahī wa biḥam-dika tas-mau' fīhā ṣaw-ta `ab-dim-mus-limin",
    en: "Canst You see Yourself — Glory be to You My God, and Thine is the praised — hearing within the Fire the voice of a slave surrendered to You,",
    ur: "کیا میں تجھے دیکھتا ہوں تو پاک ہے اس سے اے میرے اللہ اپنی حمد کے ساتھ کہ تو وہاں سے بندہ مسلم کی آواز سن رہا ہے",
    hi: "तेरी ज़ात पाक है, ऐ मेरे माबूद, मै तेरी हम्द करता हूँ! मैं  हैरान हूँ की यह क्योंकर होगा की तू इस आग में से एक मुस्लिम की आवाज़ सुने",
    ko: ""
  },
  {
    ar: "سُجِنَ فِيهَا بِمُخَالَفَتِهِ",
    tr: "sujina fīhā bi-mukhālafatih",
    en: "Imprisoned there because of his violations,",
    ur: "جو بوجہ نافرمانی دوزخ میں ہے اپنی برائی کے باعث",
    hi: "जो अपनी नाफ़रमानी की पादाश में इस के अंदर क़ैद कर दिया गया हो,",
    ko: ""
  },
  {
    ar: "وَذَاقَ طَعْمَ عَذَابِهَا بِمَعْصِيَتِهِ",
    tr: "wa dhāqa ṭa`ma `adhābihā bi-ma`ṣi-yatih",
    en: "Tasting the favour of its torment because of his disobedience,",
    ur: "عذاب کا ذائقہ چکھ رہا ہے اور اپنے جرم گناہ پر",
    hi: "अपनी मुसीबत की सजा में इस अज़ाब में गिरफ्तार हो",
    ko: ""
  },
  {
    ar: "وَحُبِسَ بَيْنَ أَطْبَاقِهَا بِجُرْمِهِ وَجَرِيرَتِهِ",
    tr: "wa ḥubisa bayna aṭ-bāqihā bijur-mih wa jarīratih",
    en: "And confined within its levels because of his sin and crime,",
    ur: "جہنم کے طبقوں کے بیچوں بیچ بند ہے",
    hi: "और जुर्मो खता के बदले में जहन्नुम के तबकात में बंद कर दिया गया हो",
    ko: ""
  },
  {
    ar: "وَهُوَ يَضِجُّ إلَيْكَ ضَجِيجَ مُؤَمِّل لِّرَحْمَتِكَ",
    tr: "wa huwa yaḍij-ju ilayka ḍajīja muammilil-liraḥ-mat-k",
    en: "While he laments to You with the lament of one hopeful for Your mercy,",
    ur: "تیرے سامنے گریہ کر رہا ہے تیری رحمت کے امیدوار کی طرح",
    hi: "मगर वोह तेरी रहमत के उम्मीदवार  की तरह तेरे हुज़ूर में फरयाद करता हो,",
    ko: ""
  },
  {
    ar: "وَيُنَادِيكَ بِلِسَانِ أَهْلِ تَوْحِيدِكَ",
    tr: "wa yunādīka bi-lisāni ahli taw-ḥīdik",
    en: "And calls to You with the tongue of those who profess Your Unity",
    ur: "اور اہل توحید کی زبان میں تجھے پکار رہا ہے",
    hi: "तेरी तौहीद को मानने वालों की सी जुबान से तुझे पुकारता हो",
    ko: ""
  },
  {
    ar: "وَيَتَوَسَّلُ إلَيْكَ بِرُبُوبِيَّتِكَ",
    tr: "wa yatawas-salu ilayka bi-rubūbī-yatik",
    en: "And entreats You by Your lordship!",
    ur: "اور تیرے حضور تیری ربوبیت کو وسیلہ بنا رہا ہے",
    hi: "और तेरी जनाब में तेरी रबूबियत का वास्ता देता हो!",
    ko: ""
  },
  {
    ar: "يَا مَوْلاي فَكَيْفَ يَبقَى فِي الْعَذَابِ وَهُوَ يَرْجُو مَا سَلَفَ مِنْ حِلْمِكَ",
    tr: "yā mawlāy fa-kayfa yabqā fīl-`adhābi wa huwa yar-jū mā salafa min ḥil-mik",
    en: "My Protector, so how should he remain in the chastisement, while he has hope for Your previous clemency?",
    ur: "اے میرے مولا! پس کس طرح وہ عذاب میں رہے گا جب کہ وہ تیرے گزشتہ حلم کا امیدوار ہے",
    hi: "ऐ मेरे मालिक, फिर वो इस अज़ाब में कैसे रह सकेगा जबके इसे तेरी गुज़िश्ता राफ्त ओ रहमत की आस बंधी होगी",
    ko: ""
  },
  {
    ar: "أَمْ كَيْفَ تُؤْلِمُهُ النَّارُ وَهُوَ يَامَلُ فَضْلَكَ وَرَحْمَتَكَ",
    tr: "am kayfa tu-limuhun-nāru wa huwa ya-malu faḍlaka wa raḥ-mataka",
    en: "Or how should the Fire cause him pain while he expects Your bounty and mercy?",
    ur: "یا پھر آگ کیونکر اسے تکلیف دے گی جبکہ وہ تیرے فضل اور رحمت کی امید رکھتا ہے",
    hi: "या आतिशे जहन्नम उसे कैसे तकलीफ पहुंचा सकेगा जबके उसे तेरी फज़ल और तेरी रहमत का आसरा होगा",
    ko: ""
  },
  {
    ar: "أَمْ كَيْفَ يُحْرِقُهُ لَهِيبُهَا وَأَنتَ تَسْمَعُ صَوْتَهُ وَتَرَى مَكَانَهُ",
    tr: "am kayfa yuḥ-riquhu lahībuhā wa anta tas-mau' ṣaw-tahu wa tarā makānah",
    en: "Or how should its flames burn him, while You hearest his voice and seest his place?",
    ur: "آگ کے شعلے کیسے اس کو جلائیں گے جبکہ تو اسکی آواز سن رہا ہے اور اس کے مقام کو دیکھ رہا ہے",
    hi: "या इस को जहन्नम का शोला कैसे जला सकेगा जबकि तू खुद इस की आवाज़ सुन रहा होगा और जहाँ वो है तू इस जगह को देख रहा होगा",
    ko: ""
  },
  {
    ar: "أَمْ كَيْفَ يَشْتَمِلُ عَلَيْهِ زَفِيرُهَا وَأَنتَ تَعْلَمُ ضَعْفَهُ",
    tr: "am kayfa yash-tamilu `ailayhi zafīruhā wa anta ta`lamu ḍa`fah",
    en: "Or how should its groaning encompass him, while You knowest his weakness?",
    ur: "یا کیسے آگ کے شرارے اسے گھیریں گے جبکہ تو اسکی ناتوانی کو جانتا ہے",
    hi: "या जहन्नुम का शोर उसे क्योंकर परेशान कर सकेगा, जबकि तू इस बन्दे की कमजोरी से वाकिफ होगा",
    ko: ""
  },
  {
    ar: "أَمْ كَيْفَ يَتَقَلْقَلُ بَيْنَ أَطْبَاقِهَا وَأَنتَ تَعْلَمُ صِدْقَهُ",
    tr: "am kayfa yataqalqalu bayna aṭ-bāqihā wa anta ta`lamu ṣid-qah",
    en: "Or how should he be convulsed among its levels, while You knowest his sincerity?",
    ur: "یا کیسے وہ جہنم کے طبقوں میں پریشان رہے گا جبکہ تو اس کی سچائی سے واقف ہے",
    hi: "या फिर वो जहन्नुम के तबकात में क्योंकर तड़पता रहेगा जबकि तू इस की सच्चाई से वाकिफ होगा",
    ko: ""
  },
  {
    ar: "أَمْ كَيْفَ تَزْجُرُهُ زَبَانِيَتُهَا وَهُوَ يُنَادِيكَ يَا رَبَّهُ",
    tr: "am kayfa tazjuruhu zabāni-yatuhā wa huwa yunādīka yā rab-bah",
    en: "Or how should its keepers torture him while he calls out to You, O Lord?",
    ur: "یا کیسے جہنم کے فرشتے اسے جھڑکیں گے جبکہ وہ تجھے پکار رہا ہے اے میرے رب",
    hi: "या जहन्नुम की लपटें इस को क्योंकर परेशान कर सकेंगी जबकि वो तुझे पुकार रहा होगा! ऐ मेरे परवरदिगार,",
    ko: ""
  },
  {
    ar: "أَمْ كَيْفَ يَرْجُو فَضْلَكَ فِي عِتْقِهِ مِنْهَا فَتَتْرُكُهُ فِيهَا",
    tr: "am kayfa yar-jū faḍlaka fī i't-qihi minhā fatat-rukuhu fīhā",
    en: "Or how should he have hope of Your bounty in freeing him from it, while You abandonest him within it?",
    ur: "یا کیسے ممکن ہے کہ وہ خلاصی میں تیرے فضل کا امیدوار ہو اور تو اسے جہنم میں رہنے دے",
    hi: "ऐसे क्योंकर मुमकिन है के तू वो तो जहन्नुम के निजात के लिए तेरे फज्लो करम की आस लगाये हुए हो और तू उसे जहन्नुम ही में पड़ा रहने दे!",
    ko: ""
  },
  {
    ar: "هَيهَاتَ مَا ذَلِكَ الظَّنُّ بِكَ",
    tr: "hayhāt mā dhālikaẓ-ẓan-nu bik",
    en: "Far be it from You! That is not what is expected of You,",
    ur: "ہرگز نہیں! تیرے بارے میں یہ گمان نہیں ہو سکتا",
    hi: "नहीं, तेरी निस्बत ऐसा गुमान नहीं किया जा सकता,",
    ko: ""
  },
  {
    ar: "وَلا الْمَعْرُوفُ مِن فَضْلِكَ",
    tr: "wa-lal-ma`rūfu min faḍlik",
    en: "Nor what is well-known of Your bounty,",
    ur: "نہ تیرے فضل کا ایسا تعارف ہے",
    hi: "ना तेरे फज़ल से पहले कभी ऐसी सूरत पेश आयी",
    ko: ""
  },
  {
    ar: "وَلا مُشْبِهٌ لِمَا عَامَلْتَ بِهِ الْمُوَحِّدِينَ مِنْ بِرِّكَ وَإِحْسَانِكَ",
    tr: "wa-lā mush-biha limā `āmal-ta bihil-mūaḥ-ḥidīna mim bir-rika wa iḥ-sānik",
    en: "Nor it is similar to the goodness and kindness You hast shown to those who profess Your Unity.",
    ur: "نہ یہ توحید پرستوں پر تیرے احسان و کرم سے مشابہ ہے",
    hi: "और ना ही यह बात इस लुत्फो करम के साथ मेल खाती है जो तू तौहीद परस्तों के साथ रवा रखता रहा है,",
    ko: ""
  },
  {
    ar: "فَبِالْيَقِينِ أَقْطَعُ لَوْلا مَا حَكَمْتَ بِهِ مِن تَعْذِيبِ جَاحِدِيكَ",
    tr: "fa-bial-yaqīni aq-ṭau' law-lā ma ḥakam-ta bihi min ta`dhībi jāḥidīk",
    en: "So I declare with certainty that were it not for what You hast decreed concerning the chastisement of Your deniers",
    ur: "پس میں یقین رکھتا ہوں کہ اگر تو نے اپنے دشمنوں کو آگ کا عذاب دینے کا حکم نہ دیا ہوتا",
    hi: "इस लिए मै पुरे यकीन के साथ कहता हूँ के अगर तुने अपने मुन्कीरों  को अज़ाब देने का हुक्म ना दे दिया होता",
    ko: ""
  },
  {
    ar: "وَقَضَيْتَ بِهِ مِنْ إِخْلاَدِ مُعَانِدِيكَ",
    tr: "wa qaḍayta bihi min ikh-lāydi mu`ānidīk",
    en: "And what You hast foreordained concerning the everlasting home of those who stubbornly resist,",
    ur: "اور اپنے مخالفوں کوہمیشہ اس میں رکھنے کا فیصلہ نہ کیا ہوتا",
    hi: "और इनको हमेशा जहन्नुम में रखने का फैसला ना कर लिया होता",
    ko: ""
  },
  {
    ar: "لَجَعَلْتَ النَّارَ كُلَّهَا بَرْداً وَّسَلاَماً",
    tr: "lajā'l-tan-nāra kul-lāhā bar-dāw-wa salāmā",
    en: "You wouldst make the Fire, all of it, coolness and safety,",
    ur: "تو ضرور تو آگ کو ٹھنڈی اور آرام بخش بنا دیتا",
    hi: "तो तू ज़रूर आतिशे जहन्नुम को ऐसा सर्द कर देता के वो आरामदेह बन जाती",
    ko: ""
  },
  {
    ar: "وَمَا كَانَ لأَحَد فِيهَا مَقَرّاً وَّلا مُقَاماً",
    tr: "wa mā kāna li-aḥadin fīhā maqar-rāw-wa-lā muqāmā",
    en: "And no one would have a place of rest or abode within it.",
    ur: "اور کسی کو بھی آگ میں جگہ اور ٹھکانہ نہ دیا جاتا",
    hi: "और फिर किसी भी शख्स का ठिकाना जहन्नुम ना होता",
    ko: ""
  },
  {
    ar: "لَّكِنَّكَ تَقَدَّسَتْ أَسْمَاؤُكَ أَقْسَمْتَ أَنْ تَمْلأَهَا مِنَ الْكَافِرِينَ",
    tr: "lakin-naka taqad-dasat as-mā-uka aq-sam-ta an tam-lahā minal-kāfirīna;",
    en: "But You—holy are Your Names—hast sworn that You wilt fill it with the unbelievers,",
    ur: "لیکن تو نے اپنے پاکیزہ ناموں کی قسم کھائی کہ جہنم کو تمام کافروں سے بھر دے گا",
    hi: "लेकिन खुद तू ने अपने पाक नामो की क़सम खाई है के तू  तमाम काफिर",
    ko: ""
  },
  {
    ar: "مِنَ الْجِنَّةِ وَالنَّاسِ أَجْمَعِينَ",
    tr: "minal-jin-nati wan-nāsi aj-m`aīn",
    en: "Both Jinn and men together,",
    ur: "جنّوں اور انسانوں میں سے",
    hi: "जिन्नों और इंसान से जहन्नुम भर देगा",
    ko: ""
  },
  {
    ar: "وَأَن تُخَلِّدَ فِيهَا الْمُعَانِدِينَ",
    tr: "wa-an tukhal-lida fīhāl-mu`ānidīn",
    en: "And that You wilt place those who stubbornly resist therein forever.",
    ur: "اور یہ مخالفین ہمیشہ اس میں رہیں گے",
    hi: "और अपने दुश्मनों को हमेशा के लिए इसमें रखेगा!",
    ko: ""
  },
  {
    ar: "وَأَنتَ جَلَّ ثَنَاؤُكَ قُلْتَ مُبْتَدَئاً وَّتَطَوَّلْتَ بِالإِنْعَامِ مُتَكَرِّماً:",
    tr: "wa anta jal-lā thanā-uka qul-ta mub-tadiwāw-wa taṭaw-wal-ta bil-in-`āmi mutakar-rimā",
    en: "And You— majestic is Your eulogy— said at the beginning and wernt gracious through kindness as a favour,",
    ur: "اور تو بڑی تعریف والا ہے تو نے فضل و کرم کرتے ہوئے بلا سابقہ یہ فرمایا کہ",
    hi: "तू जो बहुत ज्यादा तारीफ के लायेक है और अपने बन्दों पर एहसान करते हुए अपनी किताब में पहले ही फरमा चुका है :",
    ko: ""
  },
  {
    ar: "أَفَمَن كَانَ مُؤْمِنًا كَمَن كَانَ فَاسِقًا ۚ لَّا يَسْتَوُونَ",
    tr: "afaman kāna muminān kaman kāna fāsiqal-lā yas-tawūn",
    en: "What? Is he who has been believer like unto him who has been ungodly? They are not equal\nHoly Quran 32:18",
    ur: "کیا وہ شخص جو مومن ہے وہ فاسق جیسا ہو سکتا ہے؟یہ دونوں برابر نہیں",
    hi: "\"क्या मोमिन, फ़ासिक़ के बराबर हो सकता है? नहीं, यह कभी बाहम बराबर नहीं हो सकते\"!",
    ko: ""
  },
  {
    ar: "إِلَهِي وَسَيِّدِي فَأَسْألُكَ بِالْقُدْرَةِ الَّتِي قَدَّرْتَهَا",
    tr: "ilahī wa say-yidī fa-as-aluka bial-qud-ratil-latī qad-dartahā",
    en: "My God and my Master! So I ask You by the power You hast apportioned",
    ur: "میرے معبود میرے آقا! میں تیری قدرت جسے تو نے توانا کیا",
    hi: "ऐ मेरे माबूद, ऐ मेरे मालिक, मै तेरी इस कुदरत का जिस से तुने मौजूदात की तकदीर बनाई,",
    ko: ""
  },
  {
    ar: "وَبِالْقَضِيَّةِ الَّتِي حَتَمْتَهَا وَحَكَمْتَهَا وَغَلَبْتَ مَنْ عَلَيْهِ أَجْرَيْتَهَا",
    tr: "wa bil-qaḍī-yatil-latī ḥatam-tahā wa ḥakam-tahā wa ghalab-ta man `ailayhi aj-raytahā",
    en: "And by the decision which You hast determined and imposed and through which You hast overcome him toward whom it has been put into effect,",
    ur: "اور تیرا فرمان جسے تو نے یقینی و محکم بنایا اور تو غالب ہے اس پر جس پر اسے جاری کرے اسکے واسطے سے سوال کرتا ہوں",
    hi: "तेरे इस हतमी फैसले का जो तू ने सादिर किये हैं और जिन पर तू ने इन को नाफ़िज़ किया है इन पर तुझे काबू हासिल है! वास्ता देकर तुझ से इल्तेजा करता हूँ के हर वो जुर्म जिस का मै मुर्तकिब हुआ हूँ",
    ko: ""
  },
  {
    ar: "أَن تَهَبَ لِي فِي هذِهِ اللَّيْلَةِ وَفِي هَذِهِ السَّاعَةِ",
    tr: "an tahaba lī fī hadhihil-laylati wa fī hadhihīs-sā'ah",
    en: "That You forgivest me in this night and at this hour",
    ur: "بخش دے اس شب میں اور اس ساعت میں",
    hi: "इस रात और ख़ास कर इस साअत में बख्श दे.",
    ko: ""
  },
  {
    ar: "كُلَّ جُرْم أَجْرَمْتُهُ",
    tr: "kul-lā jur-min aj-ram-tuh",
    en: "Every offence I have committed,",
    ur: "میرے تمام وہ جرم جو میں نے کیے",
    hi: "और हर वो गुनाह जो मैंने किया हो,",
    ko: ""
  },
  {
    ar: "وَكُلَّ ذَنْب أَذْنَبْتُهُ",
    tr: "wa kul-lā dham-bin adhnab-tuh",
    en: "And every sin I have performed,",
    ur: "تمام وہ گناہ جو مجھ سے سرزد ہوئے",
    hi: "मेरी हर ऐसी बदअमली को माफ़ करदे",
    ko: ""
  },
  {
    ar: "وَكُلَّ قَبِيح أَسْرَرْتُهُ",
    tr: "wa kul-lā qabīḥin as-rar-tuh",
    en: "And every ugly thing I have concealed",
    ur: "وہ سب برائیاں جو میں نے چھپائی ہیں",
    hi: "हर वो बुराई जो मैंने छुपा कर की हो",
    ko: ""
  },
  {
    ar: "وَكُلَّ جَهْل عَمِلْتُهُ",
    tr: "wa kul-lā jah-lin `amil-tuhu,",
    en: "And every folly I have enacted",
    ur: "جو نادانیاں میں نے جہل کی وجہ سے کیں ہیں",
    hi: "और हर वो नादानी जो मुझ से सरज़द हुई हो,",
    ko: ""
  },
  {
    ar: "كَتَمْتُهُ أَوْ أَعْلَنتُهُ",
    tr: "katam-tuhūo aw a`lan-tuhu,",
    en: "Whether I have hidden or announced it,",
    ur: "علی الاعلان",
    hi: "चाहे मैंने उसे छुपाया हो या ज़ाहिर किया हो,",
    ko: ""
  },
  {
    ar: "أَخفَيْتُهُ أَوْ أَظْهَرْتُهُ",
    tr: "akhfaytuhūo aw aẓhar-tuh",
    en: "Or I have concealed it or manifested it",
    ur: "یا پوشیدہ رکھی ہوں یا ظاہر کیں ہیں",
    hi: "पोशीदा रखा हो या अफशा किया हो",
    ko: ""
  },
  {
    ar: "وَكُلَّ سَيِّئَة أَمَرْتَ بِإِثْبَاتِهَا الْكِرَامَ الكَاتِبِينَ",
    tr: "wa kul-lā say-yi-atin amarta bi-ith-bātihayal-kirāmal-kātibīn",
    en: "And every evil act which You hast commanded the Noble Writers to record,",
    ur: "اور میری بدیاں جن کے لکھنے کا تو نے معزز کاتبینکو حکم دیا ہے",
    hi: "मेरी हर ऐसी बदअमली को माफ़ करदे जिस को लिखने का हुक्म तुने किरामन कातेबीन को दिया हो,",
    ko: ""
  },
  {
    ar: "الَّذِينَ وَكَّلْتَهُم بِحِفْظِ مَا يَكُونُ مِنِّي",
    tr: "al-ladhīna wak-kal-tahum bi-ḥif-ẓi mā yakūnu min-nī",
    en: "Those whom You hast appointed to watch over what appears from me",
    ur: "جنہیں تو نے مقرر کیا ہے کہ جو کچھ میں کروں اسے محفوظ کریں",
    hi: "जिन को तुने मेरे हर अमल की निगरानी पर मामूर किया है",
    ko: ""
  },
  {
    ar: "وَجَعَلْتَهُمْ شُهُوداً عَلَيَّ مَعَ جَوَارِحِي",
    tr: "wa jā'l-tahum shuhūdan `alay-ya mā' jawāriḥī",
    en: "And whom You hast made, along with my bodily members, witness against me.",
    ur: "اور ان کو میرے اعضاء کے ساتھ مجھ پر گواہ بنایا",
    hi: "और जिन को मेरे अजा व जवारेह के साथ साथ मेरे अमाल का गवाह मुक़र्रर किया  है,",
    ko: ""
  },
  {
    ar: "وَكُنتَ أَنتَ الرَّقِيبَ عَلَيَّ مِن وَّرَائِهِمْ",
    tr: "wa kunta antar-raqība `alay-ya miw-warā-ihim",
    en: "And You wast Yourself the Watcher over me from behind them,",
    ur: "اور انکے علاوہ خود تو بھی مجھ پر ناظر",
    hi: "फिर इन से बढ़ कर तू खुद मेरे अमाल के निगरान रहा है और इन बातों को भी जानता है",
    ko: ""
  },
  {
    ar: "وَالشَّاهِدَ لِمَا خَفِي عَنْهُمْ",
    tr: "wash-shāhida limā khafiya `an-hum",
    en: "And the Witness of what is hidden from them",
    ur: "اور اس بات کا گواہ ہے جو ان سے پوشیدہ ہے",
    hi: "जो इन की नज़र से मख्फी रह गयीं",
    ko: ""
  },
  {
    ar: "وَبِرَحْمَتِكَ أَخْفَيْتَهُ",
    tr: "wa bi-raḥ-matika akh-faytahu",
    en: "But through Your mercy You concealed it",
    ur: "حالانکہ تو نے اپنی رحمت سے اسے چھپایا",
    hi: "और जिन्हें तुने अपनी रहमत से छुपा लिया",
    ko: ""
  },
  {
    ar: "وَبفَضْلِكَ سَتَرْتَهُ",
    tr: "wa bifaḍlika satar-tah",
    en: "And through Your bounty You veiled it.",
    ur: "اور اپنے فضل سے اس پر پردہ ڈالا",
    hi: "और जिन पर तुने अपने करम से पर्दा डाल दिया!",
    ko: ""
  },
  {
    ar: "وَأَن تُوَفِّرَ حَظِّي مِن كُلِّ خَيْر تُنْزِلُهُ",
    tr: "wa an tūwf-fira ḥaẓ-ẓī min kul-li khayrin tunziluh",
    en: "[And I ask You] that You bestowest upon me an abundant share of every good You sendest down,",
    ur: "وہ معاف فرما اور میرے لیے وافر حصہ قرار دے ہر اس خیر میں جسے تو نے نازل کیا",
    hi: "ऐ अल्लाह, मै तुझ से इल्तेजा करता हूँ के मुझे ज्यादा से ज्यादा हिस्सा दे हर इस भलाई से जो तेरी तरफ से नाज़िल हो",
    ko: ""
  },
  {
    ar: "أَوْ إِحْسَان تُفْضِلُهُ",
    tr: "aw iḥ-sānin tuf-ḍiluh",
    en: "Or kindness You conferrest,",
    ur: "یا ہر اس احسان میں جو تو نے کیا",
    hi: "हर उस एहसान से जो तू अपने फज़ल से करे,",
    ko: ""
  },
  {
    ar: "أَوْ بِرّ تَنْشِرُهُ",
    tr: "aw bir-rin tan-shiruhu",
    en: "Or goodness You unfoldest,",
    ur: "یا ہر نیکی میں جسے تو نے پھیلایا",
    hi: "हर उस नेकी से जिसे तू फैलाये,",
    ko: ""
  },
  {
    ar: "أَوْ رِزْق تَبْسُطُهُ",
    tr: "aw rizqin tab-suṭuh",
    en: "Or provision You spreadest out,",
    ur: "یا رزق میں جسے تو نے وسیع کیا",
    hi: "हर उस रिजक से जिस में तू वुसअत दे,",
    ko: ""
  },
  {
    ar: "أَوْ ذَنْب تَغْفِرُهُ",
    tr: "aw dḥam-bin tagh-firuyhu",
    en: "Or sin You forgivest,",
    ur: "یا گناہ میں جسے تو معاف نے کیا",
    hi: "हर उस गुनाह से जिसे तू माफ़ करदे,",
    ko: ""
  },
  {
    ar: "أَوْ خَطَأ تَسْتُرُهُ",
    tr: "aw khaṭain tas-turuhu",
    en: "Or error You coverest.",
    ur: "یا غلطی میں جسے تو نے چھپایا",
    hi: "हर उस ग़लती से जिसे तू छुपा ले!",
    ko: ""
  },
  {
    ar: "يَا رَبِّ يَا رَبِّ يَا رَبِّ",
    tr: "yā rab-bi yā rab-bi yā rabb",
    en: "My Lord! My Lord! My Lord!",
    ur: "یارب یا رب یا رب",
    hi: "ऐ मेरे परवरदिगार, ऐ मेरे परवरदिगार, ऐ मेरे परवरदिगार,",
    ko: ""
  },
  {
    ar: "يَا إِلَهِي وَسَيِّدِي وَمَوْلاي وَمَاِلكَ رِقِّي",
    tr: "yā ilahī wa say-yidī wa maw-laya wa mālika riq-qī",
    en: "My God! My Master! My Protector! Owner of my bondage!",
    ur: "اے میرے معبود میرے آقا اورمیرے مولا",
    hi: "ऐ मेरे माबूद, ऐ मेरे आका, ऐ मेरे मौला, ऐ मेरे जिस्मो जान के मालिक,",
    ko: ""
  },
  {
    ar: "يَا مَنْ بِيَدِهِ نَاصِيَتِي",
    tr: "yā mam bi-yadihi nāṣi-yatī",
    en: "O He in whose hand is my forelock!",
    ur: "اور میری جان کے مالک اے وہ جسکے ہاتھ میں میری لگام ہے",
    hi: "ऐ वो ज़ात जिसे मुझ पर काबू हासिल है,",
    ko: ""
  },
  {
    ar: "يَا عَلِيماً بِضُرِّي وَمَسْكَنَتِي",
    tr: "yā `alīmām biḍurī wa mas-kanatī",
    en: "O He who knows my affliction and my misery!",
    ur: "اے میری تنگی و بے چارگی سے واقف",
    hi: "ऐ मेरी बदहाली और बेचारगी को जान्ने वाले,",
    ko: ""
  },
  {
    ar: "يَا خَبِيراً بِفَقْرِي وَفَاقَتِي",
    tr: "yā khabīrām bi-faq-rī wa fāqatī",
    en: "O He who is aware of my poverty and indigence!",
    ur: "اے میری ناداری و تنگدستی سے باخبر",
    hi: "ऐ मेरे फिकरो फाका से आगही रखने वाले,",
    ko: ""
  },
  {
    ar: "يَا رَبِّ يَا رَبِّ يَا رَبِّ",
    tr: "yā rab-bi yā yā rab-bi yā rabb",
    en: "My Lord! My Lord! My Lord!",
    ur: "یارب یارب یارب",
    hi: "ऐ मेरे परवरदिगार, ऐ मेरे परवरदिगार, ऐ मेरे परवरदिगार,",
    ko: ""
  },
  {
    ar: "أَسْألُكَ بِحَقِّكَ وَقُدْسِكَ",
    tr: "as-aluka bi-ḥaq-qika wa qud-sik",
    en: "I ask You by Your Truth and Your Holiness",
    ur: "میں تجھ سے تیرے حق ہونے تیری پاکیزگی",
    hi: "मै तुझे तेरी सच्चाई और तेरी पाकीजगी,",
    ko: ""
  },
  {
    ar: "وَأَعْظَمِ صِفَاتِكَ وَأَسْمَائِكَ",
    tr: "wa a`ẓami ṣifātika wa as-mā-ika",
    en: "And the greatest of Your Attributes and Names,",
    ur: "تیری عظیم صفات اور اسماء کا واسطہ دے کر سوال کرتا ہوں",
    hi: "तेरी आला सेफात और तेरे मुबारक नामो का वासता देकर",
    ko: ""
  },
  {
    ar: "أن تَجْعَلَ أَوْقَاتِي فِي اللَّيلِ وَالنَّهَارِ بِذِكْرِكَ مَعْمُورَةً",
    tr: "an taj-`ala aw-qātī fil-layli wan-nahāri bi-dhik-rika ma`mūrah",
    en: "That You makest my times in the night and the day inhabited by Your remembrance,",
    ur: "کہ میرے رات دن کے اوقات اپنے ذکر سے آباد کر",
    hi: "तुझ से इल्तेजा करता हूँ के मेरे दिन रात के औकात को अपनी याद से मामूर कर दे",
    ko: ""
  },
  {
    ar: "وَبِخِدْمَتِكَ مَوْصُولَةً",
    tr: "wa bikhid-matika maw-ṣūlah",
    en: "And joined to Your service",
    ur: "اور مسلسل اپنی حضوری میں رکھ",
    hi: "के हर लम्हा तेरी फरमाबरदारी में बसर हो,",
    ko: ""
  },
  {
    ar: "وَّأَعْمَاِلي عِنْدَكَ مَقْبُولَةً",
    tr: "wa a`mālī i'ndaka maq-būlah",
    en: "And my works acceptable to You,",
    ur: "اور میرے اعمال کو اپنی جناب میں قبولیت عطا فرما",
    hi: "मेरे अमाल को कबूल फर्मा ,",
    ko: ""
  },
  {
    ar: "حَتَّى تَكُونَ أَعْمَاِلي وَأَوْرَادِي كُلُّهَا وِرْداً وَّاحِداً",
    tr: "ḥat-tā takūna a`mālī wa aw-rādī kul-luhā wir-dāw-wāḥidan",
    en: "So that my works and my litanies may all be a single litany",
    ur: "حتی کہ میرے تمام اعمال اور اذکار تیرے حضور ورد قرار پائیں",
    hi: "यहाँ तक के मेरे सारे आमाल और अज्कार की एक ही लए हो जाए",
    ko: ""
  },
  {
    ar: "وَّحَاِلي فِي خِدْمَتِكَ سَرْمَداً",
    tr: "wa ḥālī fī khid-matika sar-madā",
    en: "And my occupation with Your service everlasting.",
    ur: "اور میرا یہ حال تیری بارگاہ میں ہمیشہ قائم رہے",
    hi: "और मुझे तेरी फरमाबरदारी करने में दवाम हासिल हो जाए!",
    ko: ""
  },
  {
    ar: "يَا سَيِّدِي يَا مَنْ عَلَيْهِ مُعَوَّلِي",
    tr: "yā say-yidī yā man `ailayhi mu`aw-walī",
    en: "My Master! O He upon whom I depend!",
    ur: "اے میرے آقا اے وہ جس پر میرا تکیہ ہے",
    hi: "ऐ मेरे आका, ऐ वो ज़ात जिस का मुझे आसरा है",
    ko: ""
  },
  {
    ar: "يَا مَنْ إلَيْهِ شَكَوْتُ أَحْوَاِلي",
    tr: "yā man ilayhi shakaw-tu aḥ-wālī",
    en: "O He to whom I complain about my states!",
    ur: "اے جس سے میں اپنے حالات کی تنگی بیان کرتا ہوں",
    hi: "और जिस की सरकार में, मै अपनी हर उलझन पेश करता हूँ!",
    ko: ""
  },
  {
    ar: "يَا رَبِّ يَا رَبِّ يَا رَبِّ",
    tr: "yā rab-bi yā rab-bi yā rabb",
    en: "My Lord! My Lord! My Lord!",
    ur: "یارب یارب یارب",
    hi: "ऐ मेरे परवरदिगार, ऐ मेरे परवरदिगार, ऐ मेरे परवरदिगार,",
    ko: ""
  },
  {
    ar: "قَوِّ عَلَى خِدْمَتِكَ جَوَارِحِي",
    tr: "qaw-wi `alā khid-matika jawāriḥī",
    en: "Strengthen my bodily members in Your service,",
    ur: "میرے ظاہری اعضاء کو اپنی حضوری میں قوی",
    hi: "मेरे हाथ पाँव में अपनी इताअत के लिए कुवत दे,",
    ko: ""
  },
  {
    ar: "وَاشْدُدْ عَلىَ الْعَزِيمَةِ جَوَانِحِي",
    tr: "wash-dud `alāl-`azīmati jawāniḥī",
    en: "And fortify my ribs in determination",
    ur: "اور میرے باطنی ارادوں کو محکم و مضبوط بنا دے",
    hi: "मेरे दिल को नेक इरादों पर कायेम रहने की ताक़त बख्श,",
    ko: ""
  },
  {
    ar: "وَهَبْ لِي الْجِدَّ فِي خَشْيَتِكَ",
    tr: "wa hab liyal-jid-da fī khash-yatik",
    en: "And bestow upon me earnestness in my fear of You",
    ur: "اور مجھے توفیق دے کہ تجھ سے ڈرنے کی کوشش کروں",
    hi: "और मुझे तौफीक दे के मै तुझ से करार,",
    ko: ""
  },
  {
    ar: "وَالدَّوَامَ فِي الإتِّصَاِل بِخِدْمَتِكَ",
    tr: "wad-dawāma fil-at-itiṣāli bikhid-matik",
    en: "And continuity in my being joined to Your service",
    ur: "اور تیری حضوری میں ہمیشگی پیدا کروں",
    hi: "वाकई डरता रहूँ और हमेशा तेरी इताअत में सरगर्म रहूँ",
    ko: ""
  },
  {
    ar: "حَتَّى أَسْرَحَ إِلَيكَ فِي مَيَادِينِ السَّابِقِينَ",
    tr: "ḥat-tā as-raḥa ilayka fī mayā-dīnis-sābiqīn",
    en: "So that I may move easily toward You in the battlefields of the foremost",
    ur: "تاکہ تیری بارگاہ میں سابقین کی راہوں پر چل پڑ و ں",
    hi: "ताकि मै तेरी तरफ सबक़त करने वालों के साथ चलता रहूँ,",
    ko: ""
  },
  {
    ar: "وَأُسْرِعَ إلَيْكَ فِي الْمبُادِرِينَ",
    tr: "wa us-ri`a ilayka fil-mubādirīn",
    en: "And hurry to You among the prominent",
    ur: "اور تیری طر ف جا نے والوں سے آگے نکل جا ؤں",
    hi: "तेरी सिम्त बढ़ने वालों के हमराह तेज़ी से क़दम बढाऊँ,",
    ko: ""
  },
  {
    ar: "وَأَشْتَاقَ إلىَ قُرْبِكَ فِي الْمُشْتَاقِينَ",
    tr: "wa ash-tāqa ilā qur-bika fil-mush-tāqīn",
    en: "And desire fervently Your proximity among the fervently desirous",
    ur: "تیرے قرب کا شوق رکھنے والوںمیں زیادہ شوق والا بن جاؤں",
    hi: "तेरी मुलाक़ात का शौक़ रखने वालो की तरह तेरा मुश्ताक रहूँ,",
    ko: ""
  },
  {
    ar: "وَأَدْنُوَ مِنْكَ دُنُوَّ الْمُخْلِصِينَ",
    tr: "wa ad-nūa minka dunū-wal-mukh-liṣīn",
    en: "And move nearer to You with the nearness of the sincere",
    ur: "تیرے خالص بندوں کی طرح تیرے قریب ہو جاؤں",
    hi: "तेरे मुखलिस बन्दों की तरह तुझ से नज़दीक हो जाऊं,",
    ko: ""
  },
  {
    ar: "وَأَخَافَكَ مَخَافَةَ الْمُوقِنِينَ",
    tr: "wa akhāfaka makhāfatal-mūqinīn",
    en: "And fear You with the fear of those who have certitude",
    ur: "اہل یقین کی مانند تجھ سے ڈروں",
    hi: "तुझ पर यकीन रखने वालों की तरह तुझ से डरता रहूँ,",
    ko: ""
  },
  {
    ar: "وَأَجْتَمِعَ فِي جِوَارِكَ مَعَ الْمُؤْمنِينَ",
    tr: "wa aj-tami`a fī jiwārika mā'l-mu-mnīn",
    en: "And gather with the believers in Your vicinity.",
    ur: "اور تیرے آستانہ پر مومنوں کے ساتھ حاضر رہوں",
    hi: "और तेरे हुज़ूर में जब मोमिन जमा हों मै उन के साथ रहूँ!",
    ko: ""
  },
  {
    ar: "اللَّهُمَّ وَمَنْ أَرَادَنِي بِسُوء فَأَرِدْهُ",
    tr: "allahumma wa man arādanī bisūo-in fārid-hu",
    en: "O Allah, whoever desires evil for me, desire [it] for him!",
    ur: "اے معبود جو میرے لئے برائی کا ارادہ کرے تو اسکے لئے ایسا ہی کر",
    hi: "ऐ अल्लाह, जो शख्स मुझ से कोई बदी करने का इरादा करे, तू उसे वैसी ही सज़ा दे",
    ko: ""
  },
  {
    ar: "وَمَن كَادَنِي فَكِدْهُ",
    tr: "wa man kādanī fakid-hu",
    en: "whoever deceives me-deceive him!",
    ur: "جو میرے ساتھ مکر کر ے تو اسکے ساتھ بھی ایسا ہی کر",
    hi: "और जो मुझ से फरेब करे तू उस को वैसी ही पादाश दे!",
    ko: ""
  },
  {
    ar: "وَاجْعَلْنِي مِنْ أَحَسَنِ عَبِيدِكَ نَصِيباً عِنْدَكَ",
    tr: "waj-`alnī min aḥasani `abīdika naṣīban i'ndaka",
    en: "And make me one of the most excellent of Your slaves in Portion from You,",
    ur: "مجھے اپنے بند و ں میں قر ار دے جو نصیب میں بہتر ہیں",
    hi: "मुझे अपने उन बन्दों में करार दे जो तेरे यहाँ से सबसे अच्छा हिस्सा पाते हैं",
    ko: ""
  },
  {
    ar: "وَأَقْرَبِهِم مَّنْزِلَةً مِّنْكَ",
    tr: "wa aq-rabihim-manzilatam-mink",
    en: "And the nearest of them in station to You",
    ur: "جومنزلت میں تیرے قریب ہیں",
    hi: "जिन्हें तेरी जनाब में सबसे ज्यादा तक़र्रुब हासिल है",
    ko: ""
  },
  {
    ar: "وَأَخَصِّهِمْ زُلْفَةً لَّديْكَ",
    tr: "wa akhaṣ-ṣihim zul-fatal-ladayk",
    en: "And the most elected of them in proximity to You.",
    ur: "جو تیرے حضور تقرب میں مخصوص ہیں",
    hi: "और जो ख़ास तौर से तुझ से ज्यादा नज़दीक हैं",
    ko: ""
  },
  {
    ar: "فَإِنَّهُ لا يُنَالُ ذَلِكَ إِلاَّ بِفَضْلِكَ",
    tr: "fa-in-nahu lā yunālu dhā-lika il-lā bi-faḍlik",
    en: "For that cannot be attained except by Your bounty.",
    ur: "کیونکہ تیرے فضل کے بغیر یہ درجات نہیں مل سکتے",
    hi: "क्योंकि यह रूतबा तेरे फज़ल के बग़ैर नहीं मिल सकता!",
    ko: ""
  },
  {
    ar: "وَجُدْ لِي بِجُودِكَ",
    tr: "wa jud lī bijūdik",
    en: "And grant generously to me through Your munificence,",
    ur: "بواسطہ اپنے کرم کے مجھ پر کرم کر",
    hi: "मुझ पर अपना ख़ास करम कर और",
    ko: ""
  },
  {
    ar: "وَاعْطِفْ عَلَيَّ بِمَجْدِكَ",
    tr: "w`a-ṭif `alay-ya bi-maj-dik",
    en: "And incline toward me with Your splendour",
    ur: "بذریعہ اپنی بزرگی کے مجھ پر توجہ فرما",
    hi: "अपनी शान के मुताबिक मेहरबानी फर्मा !",
    ko: ""
  },
  {
    ar: "وَاحْفَظْنِي بِرَحْمَتِكَ",
    tr: "waḥ-faẓnī biraḥ-matik",
    en: "And protect me with Your mercy!",
    ur: "بوجہ اپنی رحمت کے میری حفاظت کر",
    hi: "अपनी रहमत से मेरी हिफाज़त कर,",
    ko: ""
  },
  {
    ar: "وَاجْعَل لِّسَانِي بِذِكْرِكَ لَهِجاً",
    tr: "waj-`al-lisānī bidhik-rika lahijā",
    en: "And make my tongue remember You without ceasing",
    ur: "میری زبان کو اپنے ذکر میں گویا فرما",
    hi: "मेरी ज़बान को अपने ज़िक्र में मशगूल  रख,",
    ko: ""
  },
  {
    ar: "وَّقَلْبِي بِحُبِّكَ مُتَيَّماً",
    tr: "wa qal-bī bi-ḥub-bika mutay-yamā",
    en: "And my heart enthralled by Your love!",
    ur: "اور میرے دل کو اپنا اسیر محبت بنا دے",
    hi: "मेरे दिल को अपनी मुहब्बत की चाशनी अता कर,",
    ko: ""
  },
  {
    ar: "وَّمُنَّ عَلَيَّ بِحُسْنِ إِجَابَتِكَ",
    tr: "wa mun-na `alay-ya biḥus-ni ijābatik",
    en: "And be gracious to me by answering me favourably,",
    ur: "میری دعا بخوبی قبول فرما مجھ پر احسان فرما",
    hi: "मेरी दुआएं कबूल करके मुझ पर एहसान कर,",
    ko: ""
  },
  {
    ar: "وَأَقِلْنِي عَثْرَتِي",
    tr: "wa aqil-nī `ath-ratī",
    en: "And nullify my slips",
    ur: "میرے گناہ معاف کر دے",
    hi: "मेरी खताएं माफ़ करदे",
    ko: ""
  },
  {
    ar: "وَاغْفِرْ زَلَّتِي",
    tr: "wagh-fir zal-latī",
    en: "And forgive my lapses!",
    ur: "اور میری خطا بخش دے",
    hi: "और मेरी नाज़िशें बख्श दे!",
    ko: ""
  },
  {
    ar: "فَإِنَّكَ قَضَيْتَ عَلَى عِبَادِكَ بِعِبَادَتِكَ",
    tr: "fa-in-naka qaḍayta `alā i'bādika bi-i'bādatik",
    en: "For You hast decreed Your worship for Your servants",
    ur: "کیونکہ تو نے بندوں پر عبادت فرض کی ہے",
    hi: "चूंके तुने अपने बन्दों पर अपनी इबादत वाजिब की है,",
    ko: ""
  },
  {
    ar: "وَأَمَرْتَهُم بِدُعَائِكَ",
    tr: "wa amar-tahum bidu`aā-ika",
    en: "And commanded them to supplicate You",
    ur: "اور انہیں دعا مانگنے کا حکم دیا",
    hi: "इन्हें दुआ मांगने का हुक्म दिया है",
    ko: ""
  },
  {
    ar: "وَضَمِنتَ لَهُمُ الإِجَابَةَ",
    tr: "wa ḍaminta lahumul-ijābah",
    en: "And assured them that they would be answered.",
    ur: "اور قبولیت کی ضمانت دی",
    hi: "और इनकी दुआएं कबूल करने की ज़िम्मेदारी ली है,",
    ko: ""
  },
  {
    ar: "فَإِلَيْكَ يَا رَبِّ نَصَبْتُ وَجْهِي",
    tr: "fa-ilayka yā rab-bi naṣab-tu waj-hī",
    en: "So toward You, my Lord, I have turned my face",
    ur: "پس اے پروردگار میں اپنا رخ تیری طرف کر رہا ہوں",
    hi: "इसलिए ऐ परवरदिगार, मै ने तेरी ही तरफ रुख किया है",
    ko: ""
  },
  {
    ar: "وَإلَيْكَ يَا رَبِّ مَدَدتُّ يَدِي",
    tr: "wa ilayka yā rab-bi madad-tu yadī",
    en: "And toward You, my Lord, I have extended my hand.",
    ur: "اور تیرے آگے ہاتھ پھیلا رہا ہوں",
    hi: "और तेरे ही सामने अपना हाथ फैलाया है!",
    ko: ""
  },
  {
    ar: "فَبِعِزَّتِكَ اسْتَجِبْ لِي دُعَائِي",
    tr: "fa-bi-i'z-zatikas-tajib lī du`aā-ī",
    en: "So by Your might, comply with my supplication",
    ur: "تو اپنی عزت کے طفیل میری د عا قبول فرما",
    hi: "बस अपनी इज्ज़त के सदके में मेरी दुआ कबूल फरमा",
    ko: ""
  },
  {
    ar: "وَبَلِّغْنِي مُنَاي",
    tr: "wa bal-ligh-nī munāy",
    en: "And make me attain my desires!",
    ur: "میری تمنائیں برلا",
    hi: "और मुझे मेरी मुराद को पहुंचा!",
    ko: ""
  },
  {
    ar: "وَلا تَقْطَعْ مِن فَضْلِكَ رَجَائِي",
    tr: "wa-lā taq-ṭā' min faḍlika rajā-ī",
    en: "Do not severe my hoping for Your Favours",
    ur: "اور اپنے فضل سے لگی میری امید نہ توڑ",
    hi: "मुझे अपने फजल ओ करम से मायूस ना कर,",
    ko: ""
  },
  {
    ar: "وَاكْفِنِي شَرَّ الْجِنِّ وَالإِنْسِ مِنْ أَعْدَائِي",
    tr: "wak-finī shar-ral-jin-ni wal-in-si min a`dā-ī",
    en: "And spare me the evil of my enemies from among the jinn and men!",
    ur: "میرے دشمن جو جنّوں اور انسانوں سے ہیں ان کے شر سے میری کفایت کر",
    hi: "और जिन्नों और इंसानों  में से जो भी मेरे दुश्मन हों मुझ को इन के शर से बचा!",
    ko: ""
  },
  {
    ar: "يَا سَرِيعَ الرِّضَا",
    tr: "yā sari-y`ar-riḍā",
    en: "O He, whose pleasure is quickly achieved!",
    ur: "اے جلدرا ضی ہونے والے",
    hi: "ऐ अपने बन्दों से जल्दी राज़ी हो जाने वाले,",
    ko: ""
  },
  {
    ar: "اغْفِرْ لِمَن لا يَمْلِكُ إِلاَّ الدُّعَاءَ",
    tr: "igh-fir liman-lā yam-liku il-lād-du`aā",
    en: "Forgive him who owns nothing but supplication",
    ur: "مجھے بخش دے جو دعا کے سوا کچھ نہیں ر کھتا",
    hi: "इस बन्दे को बख्श दे जिस के पास दुआ के सिवा कुछ नहीं,",
    ko: ""
  },
  {
    ar: "فَإِنَّكَ فَعَّالٌ لِّمَا تَشَاءُ",
    tr: "fa-in-naka fa`ālul-limā tashā",
    en: "For You dost what You wilt.",
    ur: "بے شک تو جو چا ہے کرنے والاہے",
    hi: "क्योंकि तू जो चाहे कर सकता है,",
    ko: ""
  },
  {
    ar: "يَا مَنْ اسْمُهُ دَوَاءٌ",
    tr: "yā manis-muhu dawā-un",
    en: "O He whose Name is a remedy,",
    ur: "اے وہ جس کا نام دوا",
    hi: "तू ऐसा है जिस का नाम हर मर्ज़ की दवा है,",
    ko: ""
  },
  {
    ar: "وَذِكْرُهُ شِفَاءٌ",
    tr: "wa dhik-ruhu shifā-un",
    en: "And whose remembrance is a cure,",
    ur: "جس کا ذکر شفا",
    hi: "जिस का ज़िक्र हर बीमारी से शिफा है,",
    ko: ""
  },
  {
    ar: "وَطَاعَتُهُ غِنًى",
    tr: "wa ṭā'tuhu ghinan",
    en: "And whose obedience is wealth!",
    ur: "اور اطاعت تونگری ہے",
    hi: "और जिस की इताअत सबे बेनेयाज़ कर देने वाली है,",
    ko: ""
  },
  {
    ar: "ارْحَم مَّن رَّأْسُ مَاِلهِ الرَّجَاءُ",
    tr: "ir-ḥam-mar-ra-su mālihir-rajā",
    en: "Have mercy upon him whose capital is hope",
    ur: "رحم فرما اس پرجس کا سرمایہ محض امید ہے",
    hi: "इस पर रहम कर जिस की पूंजी तेरा आसरा",
    ko: ""
  },
  {
    ar: "وَسِلاَحُهُ الْبُكَاءُ",
    tr: "wa silāḥuhul-bukā-u",
    en: "And whose weapon is tears!",
    ur: "اور جس کا ہتھیار گریہ ہے",
    hi: "और जिस का हथियार रोना है!",
    ko: ""
  },
  {
    ar: "يَا سَاِبغَ النِّعَمِ",
    tr: "yā sābighan-ni`am",
    en: "O Ample in blessings!",
    ur: "اے نعمتیں پوری کرنے والے",
    hi: "ऐ नेमतें अता करने वाले,",
    ko: ""
  },
  {
    ar: "يَا دَافِعَ النِّقَمِ",
    tr: "yā dāfi`an-niqam",
    en: "O Repeller of adversities!",
    ur: "اے سختیاں دور کرنے والے",
    hi: "ऐ बलाएँ टालने वाले,",
    ko: ""
  },
  {
    ar: "يَا نُورَ الْمُسْتَوْحِشِينَ فِي الظُّلَمِ",
    tr: "yā nūral-mus-taw-ḥishīna fiẓ-ẓulami",
    en: "O Light of those who are lonely in the darkness!",
    ur: "اے تاریکیوں میں ڈرنے والوں کیلئے نور",
    hi: "ऐ अंधेरों से घबराये हुओं के लिए रोशनी,",
    ko: ""
  },
  {
    ar: "يَا عَالِماً لا يُعَلَّمُ",
    tr: "yā `ālimal-lā yu`al-lam",
    en: "O Knower who was never taught!",
    ur: "اے وہ عالم جسے پڑھایا نہیں گیا",
    hi: "ऐ वो आलिम जिसे किसी ने तालीम नहीं दी,",
    ko: ""
  },
  {
    ar: "صَلِّ عَلَى مُحَمَّد وَّآلِ مُحَمَّد",
    tr: "ṣal-li `alā muḥammad wa ā-li muḥammadin",
    en: "Bless Muhammad and Muhammad's household!",
    ur: "محمد آل)ع( محمد پر رحمت فرما",
    hi: "मुहम्मद (सा) और आले मुहम्मद (सा) पर दरूद ओ सलाम भेज",
    ko: ""
  },
  {
    ar: "وافْعَلْ بِي مَا أَنتَ أَهْلُهُ",
    tr: "waf-`al bī mā anta ah-luh",
    en: "And do with me what is worthy of You!",
    ur: "مجھ سے وہ سلوک کر جس کا تو اہل ہے",
    hi: "और मेरे साथ वो सुलूक कर जो तेरे शायाने शान हो!",
    ko: ""
  },
  {
    ar: "وَصَلَّى اللَّهُ عَلَى رَسُولِهِ وَالأَئِمَّةِ الْمَيَامِينَ مِنْ آلِهِ",
    tr: "wa ṣal-lāllahu `alā rasūlihi wal-aimmatil-mayāmīna min ā-lihi",
    en: "And Allah bless His messenger and the holy Imams of his household",
    ur: "خدا اپنے رسول پر اور بابرکت آئمہ پرسلام بھیجتا ہے",
    hi: "और सलाम भेज अपने रसूल (स:अ:व:व) और बा'बरकत अईम्मा (अ:स) पर और जो इनकी आल में हों",
    ko: ""
  },
  {
    ar: "وَسَلَّمَ تَسْلِيماً كَثِيراً",
    tr: "wa sal-lama tas-līman kathīrā",
    en: "And give them abundant peace!",
    ur: "بہت زیادہ سلام وتحیات جو انکی آل)ع (میں سے ہیں",
    hi: "और इनपर बहुत ज़्यादा सलाम.",
    ko: ""
  },
  {
    ar: "اَللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَ آلِ مُحَمَّد",
    tr: "allahumma salli `ala muhammadin wa ali muhammadin",
    en: "O' Alláh send Your blessings on Muhammad\nand the family of Muhammad.",
    ur: "اے الله! رحمت فرما محمد وآل محمد پر",
    hi: "ऐ अल्लाह मुहम्मद और आले मुहम्मद पर अपनी सलामती रख़",
    ko: ""
  }
];
