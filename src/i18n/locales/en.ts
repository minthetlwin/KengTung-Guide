import type { Dictionary } from '../types'

export const en: Dictionary = {
  meta: {
    title: 'Keng Tung Pagoda Guide',
  },
  header: {
    brand: 'Keng Tung Pagoda Guide',
    nav: {
      home: 'Home',
      pagodas: 'Pagodas in Kengtung',
      news: 'News',
      festivals: 'Festival Calendar',
      map: 'Location Map',
      about: 'About Us',
      contact: 'Contact Us',
    },
    searchShort: 'Search pagodas & relics',
    searchLabel: 'Search',
    audioGuide: 'Audio Guide',
    themeLight: 'Light',
    themeDark: 'Dark',
  },
  hero: {
    liveBadge: 'Living Archive · Sacred Summit',
    slides: [
      {
        tag: 'Sacred Summit',
        coordinate: '21°17′N 99°36′E',
        title: 'Wat Zom Kham',
        titleAccent: 'The Golden Crown of Kyaing Tong',
        subtitle:
          'Sacred hair relics of the Buddha, enshrined for seven centuries above the Keng Tung valley.',
        badges: ['Elevation 829m', 'Founded 1253 CE', 'Active Sangha'],
        primaryCta: 'Explore the Archive',
        secondaryCta: 'Listen to Audio Guide',
      },
      {
        tag: 'Royal Replica',
        coordinate: '21°17′29″N 99°36′11″E',
        title: 'Maha Myat Muni',
        titleAccent: 'The Radiant Bronze of Keng Tung',
        subtitle:
          'Cast in Mandalay in 1921 and carried over 700km by bullock cart and river raft, this gilded replica of the Mahamuni Buddha has been venerated in Keng Tung since 1926.',
        badges: ['Consecrated 1926', '39th Saopha Patronage', 'Gold Lacquer Shan Architecture'],
        primaryCta: 'Explore the Sanctuary',
        secondaryCta: 'Listen to Audio Guide',
      },
      {
        tag: 'Colossal Buddha',
        coordinate: '21 km East of Keng Tung',
        title: 'Yarzamuni',
        titleAccent: 'The Abhaya Raza Muni Buddha Image',
        subtitle:
          'A 22-metre seated Buddha in the Abhaya mudra of fearlessness, rising from a lotus throne near Pan Kwai village on the road to Tachileik.',
        badges: ['22m Seated Statue', '6m Lotus & Base Pedestal', 'Gardens & Poetry Monument'],
        primaryCta: 'Plan the Journey',
        secondaryCta: 'Listen to Audio Guide',
      },
    ],
    play: 'Play',
    pause: 'Pause',
    atlasLabel: 'Shan Monastic Sanctuary Atlas',
  },
  stats: [
    { value: '32', label: 'Historic Pagodas & Stupas', sub: 'Built between the 13th–19th century' },
    { value: '750+', label: 'Years of Tai Khün Heritage', sub: 'A living monastic lineage, unbroken' },
    { value: '4', label: 'Annual Festivals', sub: 'Thingyan, Waso, Tazaungdaing & Loy' },
    { value: '820m', label: 'Valley Elevation', sub: 'Ringed by 1,800m Shan peaks' },
  ],
  filters: {
    searchPlaceholder: 'Search by name, relic, century, or district…',
    pills: [
      { id: 'all', label: 'All Pagodas' },
      { id: 'ancient', label: 'Pre-1500 Historic' },
      { id: 'lakeside', label: 'Lakeside' },
      { id: 'hilltop', label: 'Hilltop Vistas' },
      { id: 'festivals', label: 'Festival Hubs' },
    ],
  },
  spotlight: {
    eyebrow: "Editor's Pick",
    catalogId: 'Archive ID KT-01',
    audioLabel: 'Audio Chronicle',
    audioTitle: 'The 13th-Century Founding & the Golden Hair Relic',
    audioMeta: '3:42 · Tai Khün & English',
    tags: ['13th-Century Origin', 'Tai Khün Heritage', 'Active Sanctuary'],
    title: 'Wat Zom Kham',
    subtitle: 'The Golden Stupa Hill',
    description:
      'Rising 226 feet above the valley floor, Wat Zom Kham is the spiritual heart of the Tai Khün world. Tradition holds that six hair relics of the Buddha rest within its gilded spire, crowned by a jewelled hti that chimes softly in the mountain wind.',
    statCards: [
      { label: 'Spire Height', value: '69.8 m', sub: 'Above the valley plain' },
      { label: 'Status', value: 'Living Sanctuary', sub: 'Daily dawn offerings' },
    ],
    ctaPrimary: 'Explore Full Archive',
    ctaSecondary: 'Sanctuary Map',
  },
  directory: {
    eyebrow: 'Verified Directory',
    title: 'Pagodas & Monastic Compounds',
    viewingLabel: (shown, total) => `Showing ${shown} of ${total} sanctuaries`,
    viewAll: 'View Full Directory',
    noResults: 'No sanctuaries match your search. Try another filter.',
    cards: [
      {
        code: 'KT-01',
        title: 'Wat Zom Kham',
        subtitle: 'Golden Stupa Summit',
        tags: ['Hilltop', '13th C.'],
        categories: ['ancient', 'hilltop'],
        description:
          'The apex temple of Keng Tung, ringed by 28 mini-stupas with sweeping views of the Shan hills.',
        hours: '05:30 – 20:30 Daily',
        price: 'Free Entry',
        detailPath: '/wat-zom-kham',
      },
      {
        code: 'KT-04',
        title: 'Mahar Myat Muni Pagoda (Keng Tung)',
        subtitle: 'Royal Bronze Replica · Wat Pha Jao Lung',
        tags: ['Lakeside', '1926'],
        categories: ['lakeside', 'festivals'],
        description:
          "A gilded 1921 replica of Mandalay's Mahamuni Buddha, commissioned by the 39th Saopha and consecrated in 1926 after a 700km journey by cart and river raft.",
        hours: '06:00 – 19:00 Daily',
        price: 'Active Rituals',
        detailPath: '/mahar-myat-muni-pagoda',
      },
      {
        code: 'KT-05',
        title: 'Yarzamuni',
        subtitle: 'Abhaya Raza Muni Buddha Image',
        tags: ['Countryside', '22m Statue'],
        categories: ['hilltop'],
        description:
          'A 22-metre seated Buddha in the Abhaya mudra of fearlessness, rising from a lotus throne near Pan Kwai village amid flower gardens and a poetry monument.',
        hours: 'Open 24 Hours',
        price: 'Free Entry',
      },
    ],
  },
  pilgrimageMap: {
    eyebrow: 'Spatial Coordinates & Wayfinding',
    title: 'Pilgrim Valley Trajectory',
    description:
      'The valley circuit links Naung Tung Lake with the high ridge stupas across gentle elevation changes. Walking routes are marked with traditional Shan boundary stones and monastic rest pavilions (zayat).',
    pins: [
      { label: 'Wat Zom Kham (Central)' },
      { label: 'Naung Tung Lake Precinct' },
      { label: 'Loi Kham Ridge' },
    ],
    infoRows: [
      { label: 'Circumambulation Track', value: '5.2 km · 2h 15m' },
      { label: 'Hilltop Climb (Steps)', value: '318 Stone Tiers' },
    ],
    cta: 'Launch Fullscreen Sacred Cartography',
  },
  festivals: {
    eyebrow: 'Sacred Calendar',
    title: 'Upcoming Votive Festivals',
    dateNote: 'Dates are estimated from the traditional lunar calendar.',
    countdown: { days: 'Days', hours: 'Hours', mins: 'Mins', secs: 'Secs' },
    slides: [
      {
        badge: 'Thingyan Water Festival',
        subBadge: 'Myanmar New Year',
        heading: 'Four Days of Water, Renewal & Communal Blessing',
        description:
          'The valley erupts in celebration as the old year is washed away. Pilgrims process to Wat Zom Kham for ceremonial hair-washing rites before the water throwing begins in the streets below.',
        cta: 'Festival Program & Schedule',
      },
      {
        badge: 'Waso Full Moon',
        subBadge: 'Beginning of Buddhist Lent',
        heading: "The Sangha's Three-Month Retreat Begins",
        description:
          'Monks across Kyaing Tong enter Vassa, the traditional rains retreat. Candlelit processions circle the monasteries at dusk as laypeople offer robes and provisions for the season ahead.',
        cta: 'Ritual Program & Schedule',
      },
      {
        badge: 'Tazaungdaing Lunar Cycle',
        subBadge: 'Full Moon of Tazaungmon',
        heading: 'Festival of 9,000 Oil Lamps & Hot-Air Fire Balloons',
        description:
          'Witness the grand congregation at Wat Zom Kham and the shores of Naung Tung Lake. Monks and devotees release hundreds of illuminated woven fire-paper balloons carrying prayers to the Sulamani Cetiya in the heavenly realm.',
        cta: 'Ritual Program & Schedule',
      },
      {
        badge: 'Loy Krathong Night',
        subBadge: 'Full Moon of the Twelfth Month',
        heading: 'Floating Lanterns Drift Across Naung Tung Lake',
        description:
          'At dusk, families gather lakeside to release krathongs woven from banana leaf and lotus, each carrying a candle, incense and a quiet wish downstream.',
        cta: 'Festival Program & Schedule',
      },
    ],
  },
  watZomKham: {
    meta: { title: 'Wat Zom Kham — The Golden Crown of Kyaing Tong' },
    hero: {
      catalogBadge: 'Monastic Monument Catalog · Ref. KT-ZOM-01',
      statusBadge: 'Active Theravada Sanctum',
      title: 'Wat Zom Kham',
      subtitle:
        'The eternal golden crown of Keng Tung, established in the 13th century CE — a guardian stupa enshrining the sacred hair relics of Gautama Buddha above the Kyaing Tong valley.',
      metaPills: [
        { label: 'Consecration', value: '1253 CE (Tai Khün Era)' },
        { label: 'Stupa Height', value: '68 Meters (223 ft)' },
        { label: 'Architectural Lineage', value: 'Tai Khün · Lanna · Shan' },
        { label: 'Summit Elevation', value: 'Zom Kham Ridge · 829m' },
      ],
      audio: {
        label: 'Sacred Audio Sanctuary · Chapter 01',
        title: 'The Golden Scriptorium & Relic Chambers of Wat Zom Kham',
        narrator: 'Narrator: Ven. Bhaddanta Nyanavamsa (English, Tai Khün & Shan)',
        currentTime: '01:42',
        totalTime: '08:15',
        spatialLabel: 'Spatial Audio (Binaural Chanting)',
        download: 'Offline Audio (14MB)',
      },
    },
    quickNav: {
      label: 'Jump to Section:',
      items: [
        'Chronology & Relics',
        'Archival Gallery',
        'Festivals & Rites',
        'Gopaka Trustee Roster',
        'Ascent & Wayfinding',
      ],
      registeredBadge: 'Official Registered Monument',
    },
    history: {
      eyebrow: 'Tai Khün Monastic Annals',
      title: 'Sacred Chronology & Seven Centuries of Relic Protection',
      description:
        'The founding of Wat Zom Kham is woven into the spiritual genealogy of the Keng Tung valley, from the early blessings of wandering Arhat monks to the golden age of the hereditary Saopha rulers.',
      items: [
        {
          dateBadge: '1253 CE',
          eyebrow: "Founding by King Mangrai's Successors",
          title: 'Establishment upon Zom Kham Knoll',
          description:
            'Following the taming of the ancient lake waters by the hermit Maha Kassapa and his disciples, the Mangrai dynasty decreed a gilded chedi be raised atop the hill overlooking Lake Naung Tung, to serve as the spiritual core of the Tai Khün people.',
          citation: 'Annals Ref: Chronicle of Jengtung, Palm Leaf MSS-12',
        },
        {
          dateBadge: '1780 CE',
          eyebrow: 'Saopha Royal Patronage & Relic Enshrinement',
          title: 'The Sacred Gautama Hair Relics Deposited',
          description:
            'The Saopha of Keng Tung ordered a complete structural re-casing of the stupa, increasing its circumference to 180 cubits and depositing six sacred hair relics into an inner jewelled chamber alongside royal silver seals and ruby reliquaries.',
          citation: 'Custodial Note: Reliquary remains sealed beneath the octagonal plinth',
        },
        {
          dateBadge: '1924 CE',
          eyebrow: 'Colonial Era Elevation',
          title: 'Raising of the Nine-Tiered Gemstone Hti',
          description:
            'A community-wide effort combined 45 kilograms of brass, gold leaf, and 1,200 gemstone bells. When wind sweeps across Zom Kham Hill, the wind-chimes ring in tones tuned to classical Tai Khün devotional modes.',
          citation: 'Restoration Master: U Sai Hlaing, Keng Tung Goldsmith Guild',
        },
        {
          dateBadge: 'Present Era',
          eyebrow: 'Perpetual Trustee Stewardship',
          title: 'Continuous Gilding & Scientific Conservation',
          description:
            'Under the Wat Zom Kham Gopaka Trustee Committee, the stupa receives regular re-gilding with pure Shan gold leaf pounded in the traditional Loi Mwe workshops, guarding against structural wear through monsoon cycles.',
          citation: 'Conservation Cycle: Bi-Annual Inspection',
        },
      ],
    },
    gallery: {
      eyebrow: 'Visual Archive & Photographic Record',
      title: 'Curatorial Architectural Plates',
      countLabel: '5 Verified High-Resolution Plates',
      items: [
        {
          plate: 'PLATE KT-01',
          eyebrow: 'Dawn Atmosphere · 05:40 AM',
          title: 'The Golden Stupa at First Light',
          caption:
            'The octagonal plinth catching early mountain light, with morning mist ascending from Lake Naung Tung below.',
        },
        {
          plate: 'PLATE KT-02',
          eyebrow: 'Monastic Architecture',
          title: 'Intricate Teakwood Carvings',
          caption: 'Lanna-style multi-tiered eave carvings showcasing Tai Khün master joinery.',
        },
        {
          plate: 'PLATE KT-03',
          eyebrow: 'Venerable Iconography',
          title: 'Antique Buddha Image',
          caption: '15th-century bronze casting, cast from sacred alloy collected across the eastern Shan valleys.',
        },
        {
          plate: 'PLATE KT-04',
          eyebrow: 'Assembly Hall',
          title: 'Monastic Dhamma Hall (Vihara)',
          caption:
            'The congregation hall, supported by colossal teak trunks adorned with gold lacquer stencil patterns.',
        },
        {
          plate: 'PLATE KT-05',
          eyebrow: 'Living Traditions',
          title: 'Annual Offering Ceremony (Poya)',
          caption:
            'Devotees ascending the Zom Kham stairwells with woven lotus parasols and scented spring water.',
        },
      ],
    },
    rituals: {
      eyebrow: 'Votive Calendar & Monastic Observance',
      title: 'Annual Sacred Rituals & Pilgrim Protocol',
      description:
        'The ritual calendar follows the lunar movements of the Tai Khün calendar. Participation is welcomed for respectful observers adhering to traditional Theravada decorum.',
      festivals: [
        {
          cycle: 'Astrological Cycle: Lunar VI',
          period: 'Full Moon of Kason (May)',
          title: 'Sacred Full Moon Bathing Ritual (Buddha Bathing)',
          description:
            'Commemorating the Birth, Enlightenment, and Parinirvana of the Buddha. Bamboo chutes carry scented sandalwood and jasmine water to the mid-tier rings of the golden spire, poured by monastic elders and hereditary chieftains.',
          checklistHeading: 'Merit-Making Procedure',
          checklist: [
            'Assemble at the southern staircase courtyard before 06:30 AM with water vessels.',
            'Join the communal five-precepts chant led by the Wat Zom Kham Sayadaw.',
            'Circumambulate the chedi clockwise (Pradaksina) three times in silent meditation.',
          ],
          nextObservance: 'Next Observance: May 12, 2025',
          statusBadge: 'Public Participation Permitted',
        },
        {
          cycle: 'Astrological Cycle: Lunar XI',
          period: 'Full Moon of Thadingyut (October)',
          title: 'Thadingyut Floating Lantern & Candlelight Homage',
          description:
            "Marking the Buddha's descent from Tavatimsa heaven. The Zom Kham terrace is illuminated by over 5,000 earthenware oil lamps, while paper fire-balloons (Khmu Phay) are released above the hill into the night sky.",
          checklistHeading: 'Visitor Etiquette & Sacred Rules',
          checklist: [
            'Shoes-off threshold: footwear must be deposited at the tier-1 outer gateway lockers.',
            'Attire: shoulders and knees fully covered (longyi or loose trousers required).',
            'Photography permitted in the outer courtyard; prohibited inside the inner relic vault.',
          ],
          nextObservance: 'Next Observance: October 6, 2025',
          statusBadge: 'Night Vigil Until Midnight',
        },
      ],
    },
    trustees: {
      eyebrow: 'Custodial Governance',
      title: 'Wat Zom Kham Board of Trustees (Gopaka)',
      registrationLabel: 'Official Registration:',
      registrationId: 'KT-GOPAKA-041',
      people: [
        {
          name: 'U Sai Lone',
          role: 'Chairman of Trustees',
          bio: 'Former Eastern Shan Heritage Conservator with 34 years of stupa restoration leadership.',
          tenure: 'Tenure: 2018–Present',
        },
        {
          name: 'Daw Nang Kham Moe',
          role: 'Vice Chair · Financial Ledger',
          bio: 'Oversees public transparency ledgers, merit fund escrows, and municipal audit filings.',
          tenure: 'Tenure: 2020–Present',
        },
        {
          name: 'U Sai Kyaw Tint',
          role: 'Chief Maintenance Custodian',
          bio: 'Structural engineer specializing in seismic dampening and brick masonry mortar analysis.',
          tenure: 'Tenure: 2015–Present',
        },
        {
          name: 'U Sai Seng Hark',
          role: 'Archives & Monastic Relations',
          bio: 'Liaison to the Mahamuni Sangha Council and keeper of the palm-leaf architectural codices.',
          tenure: 'Tenure: 2019–Present',
        },
      ],
      contactEyebrow: 'Official Trustee Secretarial Bureau',
      contactAddress: 'East Stairway Administrative Annex, Wat Zom Kham, Keng Tung',
      contactHours: 'Open Daily 07:00 – 17:00 · Inquiries: +95 (0)84 21 042',
      ctaLedger: 'Public Audit & Donation Ledger',
      ctaContact: 'Contact Secretariat',
    },
    wayfinding: {
      eyebrow: 'Pilgrim Cartography & Route Guidelines',
      title: 'Ascent Wayfinding: Naung Tung Lake to the Summit',
      description:
        'Wat Zom Kham presides over the central hill in Kyaing Tong. Access is available via ceremonial covered staircases or the southern vehicular switchback.',
      pinLabel: 'Summit Sanctuary (829m ASL)',
      pinDetail: 'Coordinates: 21.2917° N, 99.6052° E · 650m from the Naung Tung Lake shore.',
      routeLegendA: 'Eastern Covered Stairway (218 Steps)',
      routeLegendB: 'South Vehicular Loop (Motorbike/Taxi)',
      routes: [
        {
          eyebrow: 'Walking Ascent from Naung Tung Lake',
          title: 'Ceremonial Eastern Dragon Stairway',
          description:
            'Begins at the northeastern lakeside promenade, guarded by twin 18th-century stucco chinthe (mythical lions) and shaded by ancient Bodhi trees, with rest pavilions at step 80 and step 150. Duration: 12–18 minutes.',
        },
        {
          eyebrow: 'Vehicular & Accessible Access',
          title: 'South Crest Drive & Wheelchair Ramps',
          description:
            "Taxis, tuk-tuks, and motorbikes navigate the paved ridge road directly to the Upper South Gate. Level ramp access connects the upper car park to the stupa's marble pradaksina ambulatory.",
        },
      ],
      timingHeading: 'Optimal Viewing & Chanting Timings',
      timingSlots: [
        { label: 'Sunrise Vigil', time: '05:30 – 06:45 AM', note: 'Quiet chanting & fog.' },
        { label: 'Sunset Reflection', time: '17:45 – 18:30 PM', note: 'Golden hour & temple bells.' },
      ],
    },
  },
  maharMyatMuni: {
    meta: { title: 'Maha Myat Muni Pagoda — Keng Tung' },
    hero: {
      badge: "Keng Tung's Iconic Pagoda",
      title: 'Maha Myat Muni Pagoda',
      localName: 'Locally known as Wat Phra Sao Luang',
      subtitle:
        'Standing at the heart of Keng Tung in Eastern Shan State, this great pagoda is a historic cast replica of the revered Mahamuni image of Mandalay.',
    },
    facts: {
      pills: [
        { label: 'Local Name', value: 'Wat Phra Sao Luang' },
        { label: 'Modeled After', value: 'Mandalay Mahamuni Image' },
        { label: 'Enshrined', value: '1926' },
        { label: 'Centennial', value: '2026' },
      ],
    },
    history: {
      eyebrow: 'Historical Summary',
      title: 'How the Great Pagoda Came to Be',
      items: [
        {
          year: '1920',
          title: 'The Initial Vision',
          description:
            'Sao Kawng Kiao Intaleng, the Saopha of Keng Tung, together with the abbot of Wat Zaing Ngarm monastery, envisioned casting a replica of the revered Mahamuni image of Mandalay to be enshrined and worshipped in Keng Tung.',
        },
        {
          year: '1921',
          title: 'The Casting',
          description:
            'Sayar U Tay of Mandalay, together with craftsmen gathered from across the region, successfully cast the bronze replica of the Mandalay Mahamuni image.',
        },
        {
          year: '1926',
          title: 'Enshrinement',
          description:
            'The completed sacred image was carried to a newly built monastery in the heart of Keng Tung, where it was successfully enshrined and consecrated with a grand offering ceremony in 1926.',
        },
      ],
    },
    video: {
      eyebrow: 'Living Devotion',
      title: 'Inspiring Deep Respect and Reverence',
      description:
        'Beneath its jewelled crown, the golden image of Maha Myat Muni continues to draw quiet reverence from all who come before it — a devotion unbroken since its enshrinement a century ago.',
      mute: 'Mute',
      unmute: 'Unmute',
    },
    gallery: {
      eyebrow: 'Visual Archive',
      title: 'Photo Gallery',
      photoCount: (count) => `${count} Photo${count === 1 ? '' : 's'}`,
      albums: [
        {
          eyebrow: 'Vassa Season Ritual',
          title: 'Morning Alms Offering (Aruna Hsun)',
          caption:
            'A record of the morning collective alms-offering (Aruna Hsun) to the monks, held at Maha Myat Muni Pagoda in Keng Tung on the full moon and new moon days during the Vassa retreat.',
        },
        {
          eyebrow: 'Waso Full Moon',
          title: 'Dhammacakka Sutta Recitation',
          caption:
            'Inside the Gandhakuti monastery hall of Maha Myat Muni Pagoda, devotional groups chant the Dhammacakka Sutta in the Shan language on the full moon day of Waso.',
        },
        {
          eyebrow: 'Centennial Ceremony',
          title: 'Ruby Crown, Gold Umbrella & Buddha Consecration for the 100th Anniversary',
          date: 'February 15, 2022',
          caption:
            "The grand ceremony marking the 100th anniversary of Maha Myat Muni Pagoda — the pride of Keng Tung, Eastern Shan State — including the offering of a ruby-and-diamond crown (Yadana Sein Hpondaw) and a gold umbrella (Shwehti), together with the Buddha Consecration (Anekazatin) grand ceremony, was held on the morning of the full moon day of Tabodwe, Sasana Year 2565, Kawza Era 1383. Presiding over the ceremony were the Sayadaws and members of the Sangha led by the chief Nayaka of Kyaing Yin Monastery in Keng Tung, Agga Maha Saddhamma Jotikadhaja Bhaddanta Khemasara.\n\nThe ceremony was attended by the Chairman of the State Administration Council and Prime Minister, Senior General Min Aung Hlaing, together with his wife Daw Kyu Kyu Hla and family members; State Administration Council members Lieutenant General Moe Myint Tun, U Sai Lone Hsai, and U Shwe Kyin; Union Ministers Lieutenant General Tun Tun Naung, U Ko Ko, U Hla Moe, Dr. Nyunt Phay, and Dr. Thet Khaing Win; Shan State Chief Minister Dr. Kyaw Tun; State Administration Council Chairman's Advisory Body member Dr. Daw Yin Yin Nwe; Commander-in-Chief (Navy) Admiral Moe Aung and his wife; Commander-in-Chief (Air) General Tun Aung and his wife; senior Tatmadaw officers from the Office of the Commander-in-Chief and their wives; Triangle Region Military Command Commander Major General Myo Min Tun and responsible officials; invited guests, sincere donors, officers, soldiers and their families, monastic associations, local ethnic residents, and traditional cultural associations.",
        },
      ],
    },
    beliefs: {
      eyebrow: 'Distinctive Features & Devotion',
      title: 'Living Traditions & Festivals',
      items: [
        {
          title: 'Daily Face-Washing Ceremony',
          description:
            'As with the Mahamuni image in Mandalay, the Keng Tung Maha Myat Muni image is honored each morning with the traditional face-washing and tooth-brushing ceremony, unbroken to this day.',
        },
        {
          title: 'Centennial Celebration',
          description:
            'Having stood for a full century, 2026 marks the 100th anniversary of the Keng Tung Maha Myat Muni Pagoda.',
        },
        {
          title: 'Tazaungdaing Festival',
          description:
            'Every year on the full moon of Tazaungmon, the pagoda hosts grand festivities in keeping with local tradition.',
        },
      ],
    },
    trustees: {
      eyebrow: 'Governance',
      title: 'Board of Trustees',
      description:
        "The Maha Myat Muni Pagoda board of trustees pairs Keng Tung's senior Sayadaws with a lay committee — Nayaka patrons, an executive council, and general members — overseeing the pagoda's day-to-day affairs.",
      people: [
        {
          name: 'Bhaddanta Khemasara (Agga Maha Saddhamma Jotikadhaja)',
          role: 'Sayadaw',
          location: 'Kyaing Yin Monastery, Keng Tung',
        },
        {
          name: 'Bhaddanta Zawtika (Abhijeya Agga Maha Saddhamma Jotika)',
          role: 'Sayadaw',
          location: 'Ho Khun Pariyatti Monastic School, Keng Tung',
        },
        { name: 'Bhaddanta Gambhira', role: 'Sayadaw', location: 'Wat In Monastery, Keng Tung' },
        {
          name: 'Bhaddanta Uttama (Maha Gantha Vacaka Pandita)',
          role: 'Sayadaw',
          location: 'Kyaing Lel Monastery, Keng Tung',
        },
        { name: 'Bhaddanta Sandavara', role: 'Sayadaw', location: 'Naung Pha Zedi Monastery, Keng Tung' },
        { name: 'Bhaddanta Kusala', role: 'Sayadaw', location: 'Yan Lo Monastery, Keng Tung' },
        { name: 'Bhaddanta Dhammavara', role: 'Sayadaw', location: 'Pa Lwan Monastery, Keng Tung' },
        {
          name: 'Bhaddanta Pyinnyathiri (Gantha Vacaka Pandita, Saddhamma Jotikadhaja)',
          role: 'Sayadaw',
          location: 'Bhum Min-Khemin Monastery, Keng Tung',
        },
        { name: 'U Sai Tit Aung', role: 'Nayaka (Patron)' },
        { name: 'U Loon Sai', role: 'Nayaka (Patron)' },
        { name: 'U San Yi', role: 'Nayaka (Patron)' },
        { name: 'U Sai Sai Khan', role: 'Chairperson' },
        { name: 'U Sai Ri Tim Wun', role: 'Vice Chairperson 1' },
        { name: 'U Sam Than', role: 'Vice Chairperson 2' },
        { name: 'U Nan Maha Than', role: 'Secretary' },
        { name: 'U Aung Than (a.k.a. U Nan Haung)', role: 'Joint Secretary 1' },
        { name: 'U Sai Mon Ywet', role: 'Joint Secretary 2' },
        { name: 'Nang Wo Thaung', role: 'Accountant' },
        { name: 'U Sai Sai Hsai', role: 'Treasurer' },
        { name: 'U Sai Kyaw Kyaw', role: 'Auditor 1' },
        { name: 'U Lone Kyauk', role: 'Member' },
        { name: 'Dr. Sai Sai Tit', role: 'Member' },
      ],
    },
    location: {
      eyebrow: 'Visit & Directions',
      title: 'Find the Pagoda',
      description:
        'Maha Myat Muni Pagoda stands in the heart of Keng Tung town, a short walk from Naung Tung Lake — easy to reach on foot, by bicycle, or by taxi.',
      addressLabel: 'Address',
      address: 'Maha Myat Muni Pagoda, near Naung Tung Lake, Keng Tung (Kyaingtong), Shan State, Myanmar',
      coordinatesLabel: 'Coordinates',
      streetView: 'Street',
      satelliteView: 'Satellite',
      viewMapCta: 'View on Google Maps',
      directionsCta: 'Get Directions',
    },
    closing: {
      text: 'For any visitor to Keng Tung, this historic and powerful sacred image is not to be missed.',
      cta: 'Explore the Directory',
    },
  },
  locationMapPage: {
    eyebrow: 'Pilgrimage Cartography',
    title: 'Location Map',
    description:
      "Every sanctuary in this guide, plotted on one interactive map. Toggle between satellite and street views, and tap a pin for directions to each pagoda around Keng Tung.",
    streetView: 'Street',
    satelliteView: 'Satellite',
    approximateLabel: 'Approximate location',
    coordinatesLabel: 'Coordinates',
    viewOnMap: 'View on Google Maps',
    getDirections: 'Get Directions',
  },
  news: {
    eyebrow: 'News & Updates',
    title: 'Latest from the Guide',
    description: 'Fresh additions and improvements to the Keng Tung Pagoda Guide.',
    readMore: 'Read More',
    backToNews: 'Back to News',
    notFound: 'Article not found.',
    articles: [
      {
        slug: 'board-of-trustees-added',
        category: 'Site Update',
        date: 'September 5, 2026',
        title: 'Board of Trustees Now Listed for Maha Myat Muni Pagoda',
        excerpt:
          'The Maha Myat Muni Pagoda page now lists its full board of trustees — senior Sayadaws, Nayaka patrons, and the executive committee — with names, roles, and photographs.',
        body: [
          'The Maha Myat Muni Pagoda detail page now includes a complete Board of Trustees section, listing the senior Sayadaws who serve as spiritual advisors alongside the lay Nayaka patrons and executive committee who oversee the pagoda\'s day-to-day affairs.',
          'Each member is shown with their name, official role or title, and — where applicable — their home monastery. Portraits have been added for every listed member to make the board easier to recognize for visitors and the local community alike.',
          'This page will continue to be updated as more verified information about the pagoda\'s governance becomes available.',
        ],
      },
      {
        slug: 'photo-gallery-added',
        category: 'Site Update',
        date: 'September 5, 2026',
        title: 'Photo Gallery Added for Maha Myat Muni Pagoda',
        excerpt:
          'A new photo gallery documents recent ceremonies at Maha Myat Muni Pagoda, including the Vassa-season alms offering and Dhammacakka Sutta recitation.',
        body: [
          'A new photo gallery has been added to the Maha Myat Muni Pagoda page, documenting two recent ceremonies held at the pagoda: the morning collective alms-offering (Aruna Hsun) during the Vassa retreat, and the Dhammacakka Sutta recitation inside the Gandhakuti monastery hall on the full moon of Waso.',
          'Visitors can click any photo to open a full-screen view with captions, and browse through the full set using the on-screen or keyboard arrow controls.',
          'More galleries will be added for other pagodas as photographs become available.',
        ],
      },
      {
        slug: 'satellite-map-added',
        category: 'Site Update',
        date: 'September 5, 2026',
        title: 'Interactive Satellite Map Added for Maha Myat Muni Pagoda',
        excerpt:
          'Find the pagoda more easily with a new interactive map featuring a satellite/street toggle, real road labels, and one-tap directions via Google Maps.',
        body: [
          'The "Find the Pagoda" section on the Maha Myat Muni page now features a fully interactive map, defaulting to a satellite view with road and place names overlaid for easy orientation.',
          'A toggle lets visitors switch between satellite and standard street map views, and two buttons open the location directly in Google Maps for viewing or turn-by-turn directions.',
          'This same wayfinding treatment is planned for other pagoda pages on the guide.',
        ],
      },
    ],
  },
  aboutPage: {
    eyebrow: 'About This Guide',
    title: 'About Us',
    description:
      'The Keng Tung Pagoda Guide is a trilingual digital archive documenting the sacred pagodas, monasteries, and pilgrimage routes of Keng Tung, Eastern Shan State.',
    missionTitle: 'Our Mission',
    missionText:
      "This guide exists to preserve and share the history, rituals, and living traditions of Keng Tung's sacred sites — in English, Myanmar, and Thai — for pilgrims, researchers, and the local community alike.",
    creditEyebrow: 'Built By',
    creditTitle: 'University of Computer Studies (Keng Tung)',
    creditText:
      'This site was designed and developed by the University of Computer Studies (Keng Tung) as a digital heritage project documenting the sacred pagodas of Keng Tung for the local community and visitors alike.',
  },
  contactPage: {
    eyebrow: 'Get in Touch',
    title: 'Contact Us',
    description:
      'Have a question, a correction, or information to share about a pagoda in this guide? Send us a message below.',
    formName: 'Name',
    formEmail: 'Email',
    formSubject: 'Subject',
    formMessage: 'Message',
    formSubmit: 'Send Message',
    formSuccess: "Thank you — your message has been noted. We'll get back to you soon.",
    infoTitle: 'About the Developer',
    infoText: 'This guide is maintained by the University of Computer Studies (Keng Tung), Shan State, Myanmar.',
  },
  common: {
    viewDetails: 'View Details',
  },
  footer: {
    tagline: 'A living archive of the sacred pagodas, monasteries and pilgrimage routes of Kyaing Tong.',
    exploreHeading: 'Explore',
    resourcesHeading: 'Resources',
    languageHeading: 'Language',
    resources: ['Preservation Trust', 'Festivals Calendar', 'Pilgrimage Map'],
    rights: 'Keng Tung Pagoda Guide. Built in service of Tai Khün heritage.',
  },
}
