import type { Dictionary } from '../types'

export const en: Dictionary = {
  meta: {
    title: 'Keng Tung Pagoda Guide',
    description:
      'The Keng Tung Pagoda Guide is a trilingual digital archive documenting the sacred pagodas, monasteries, and pilgrimage routes of Keng Tung, Eastern Shan State.',
  },
  header: {
    brand: 'Maha Myat Muni Pagoda and Historic Pagodas',
    nav: {
      home: 'Home',
      pagodas: 'Pagodas in Kengtung',
      otherPlaces: 'Other Notable Places',
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
          "Six sacred hair relics of the Buddha, enshrined by five hermits above the Keng Tung valley since the earliest era of the city's history.",
        badges: ['Elevation 829m', 'Sasana Era 157 Founding', 'Six Sacred Hair Relics'],
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
    audioTitle: "The Buddha's Prophecy & the Five Hermits' Founding",
    audioMeta: 'Myanmar',
    tags: ['Ancient Legendary Founding', 'Tai Khün Heritage', 'Active Sanctuary'],
    title: 'Wat Zom Kham',
    subtitle: 'The Golden Stupa Hill',
    description:
      'Enshrining six sacred hair relics of the Buddha since the earliest era of the Keng Tung valley, Wat Zom Kham is the spiritual heart of the Tai Khün world — founded by five hermits after a prophecy the Buddha himself gave on this very ground.',
    statCards: [
      { label: 'Founded By', value: 'Five Hermits', sub: 'Sasana Era 157' },
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
        code: 'KT-04',
        title: 'Mahar Myat Muni Pagoda (Keng Tung)',
        subtitle: 'Royal Bronze Replica · Wat Pha Jao Lung',
        tags: ['Lakeside', '1926'],
        categories: ['lakeside', 'festivals'],
        description:
          "A gilded 1921 replica of Mandalay's Mahamuni Buddha, commissioned by the 39th Saopha and consecrated in 1926 after a 700km journey by cart and river raft.",
        hours: '04:30 – 20:00 Daily',
        price: 'Active Rituals',
        detailPath: '/',
      },
      {
        code: 'KT-06',
        title: 'Dhat Zom Doi Pagoda',
        subtitle: 'Kaba Aye Pagoda · Hair Relic Shrine',
        tags: ['Hilltop', 'Hair Relic Shrine'],
        categories: ['ancient', 'hilltop'],
        description:
          "A hilltop hair-relic stupa above Miang Larn tied to a Buddha-era founding legend — its design later inspired Yangon's own Kaba Aye Pagoda.",
        hours: 'Open Daily, Dawn to Dusk',
        price: 'Free Entry',
        detailPath: '/dat-sam-loei',
      },
      {
        code: 'KT-01',
        title: 'Wat Zom Kham',
        subtitle: 'Golden Stupa Summit',
        tags: ['Hilltop', 'Ancient Origin'],
        categories: ['ancient', 'hilltop'],
        description:
          'The apex temple of Keng Tung, ringed by 28 mini-stupas with sweeping views of the Shan hills.',
        hours: '05:30 – 20:30 Daily',
        price: 'Free Entry',
        detailPath: '/wat-zom-kham',
      },
      {
        code: 'KT-07',
        title: 'Satu Rattha Sumingala Pagoda',
        subtitle: 'The Buried Buddhas of Luaymel',
        tags: ['Hilltop', 'Modern Pagoda'],
        categories: ['hilltop'],
        description:
          'A 45-foot golden stupa above Luaymel village group, raised where soldiers unearthed five buried Buddha images at a former army outpost in 1990.',
        hours: 'Open Daily, Dawn to Dusk',
        price: 'Free Entry',
        detailPath: '/satu-rattha-sumingala',
      },
      {
        code: 'KT-08',
        title: 'Khema Rattha Prophecy Buddha',
        subtitle: 'The Standing Buddha of Swam Sat Kone',
        tags: ['Hilltop', 'Standing Buddha'],
        categories: ['ancient', 'hilltop'],
        description:
          "A 67-foot golden standing Buddha atop Swam Sat Kone, raised where 1995 excavations uncovered relics and a centuries-old manuscript tracing the hill's Buddhist history back over 600 years.",
        hours: 'Open Daily, Dawn to Dusk',
        price: 'Free Entry',
        detailPath: '/khema-rattha',
      },
      {
        code: 'KT-09',
        title: 'Thatta Thattaha Maha Bodhi Pagoda',
        subtitle: 'The Mahabodhi-Style Stupa of Pan Kwe',
        tags: ['Sandstone Carving', 'Modern Pagoda'],
        categories: [],
        description:
          'A 108-foot sandstone-carved stupa modeled on the Mahabodhi Temple, raised at Pan Kwe village and consecrated over six ceremonies between 2018 and 2023.',
        hours: 'Open Daily, Dawn to Dusk',
        price: 'Free Entry',
        detailPath: '/thatta-thattaha-maha-bodhi',
      },
      {
        code: 'KT-10',
        title: 'Swam Kyeim Shwe Hsan Taw Pagoda',
        subtitle: 'The Golden Hair Relic Pagoda',
        tags: ['Hilltop', 'Hair Relic Shrine'],
        categories: ['ancient', 'hilltop'],
        description:
          "Three hair relics said to be the Buddha's own, enshrined on a hill above Swam Kyeim village after a farming family's chance encounter with him on his alms round.",
        hours: 'Open Daily, Dawn to Dusk',
        price: 'Free Entry',
        detailPath: '/swam-kyeim-shwe-hsan-taw',
      },
      {
        code: 'KT-11',
        title: 'Shwe Ohn Daing Min Pagoda',
        subtitle: 'The Golden Peacock King Pagoda',
        tags: ['Hilltop', 'Seven Restorations'],
        categories: ['ancient', 'hilltop'],
        description:
          'A hilltop pagoda named for a past-life peacock king, first raised by Emperor Ashoka according to legend and rebuilt across seven restorations from the Bagan era to 2018.',
        hours: 'Open Daily, Dawn to Dusk',
        price: 'Free Entry',
        detailPath: '/shwe-ohn-daing-min',
      },
      {
        code: 'KT-12',
        title: 'Maing Hnun Nee Bayar Pagoda',
        subtitle: 'The Bamboo-Woven Buddha Image',
        tags: ['Woven Bamboo', 'Sacred Legend'],
        categories: ['ancient', 'festivals'],
        description:
          'A Buddha image woven entirely from bamboo strips at Pakan village, said to have been completed overnight by a mysterious old weaver who then vanished without a trace.',
        hours: 'Open Daily, Dawn to Dusk',
        price: 'Free Entry',
        detailPath: '/maing-hnun-nee-bayar',
      },
      {
        code: 'KT-05',
        title: 'Yarzamuni',
        subtitle: 'Abhaya Raza Muni Buddha Image',
        tags: ['Countryside', '22m Statue'],
        categories: [],
        description:
          'A 22-metre seated Buddha in the Abhaya mudra of fearlessness, rising from a lotus throne near Pan Kwai village amid flower gardens and a poetry monument.',
        hours: 'Open 24 Hours',
        price: 'Free Entry',
        detailPath: '/yarzamuni',
      },
    ],
  },
  pagodasPage: {
    eyebrow: 'Verified Directory',
    title: 'Pagodas in Kengtung',
    description:
      'Browse every sanctuary documented in this guide, from hilltop stupas to bronze Buddha images, with hours, rituals, and directions.',
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
    dateTba: 'Date to be announced',
    countdown: { days: 'Days', hours: 'Hours', mins: 'Mins', secs: 'Secs' },
    slides: [
      {
        badge: 'Maha Myat Muni Pagoda Festival',
        subBadge: 'Full Moon of Tazaungmon',
        heading: 'Umbrellas, Almsgiving & the Founding Festival Day',
        description:
          'Since 1950, the full moon of Tazaungmon has been observed as the Maha Myat Muni Pagoda Festival — four ceremonial umbrellas offered at the temple entrance, and a great alms-offering to 85 monks at dawn, sealed with the ceremonial water-pouring to share merit.',
        cta: 'Festival Program & Schedule',
      },
      {
        badge: 'Morning Alms Offering',
        subBadge: 'Tazaungmon Full Moon, at the Haw',
        heading: 'The Saophas Lead Almsgiving Within the Palace',
        description:
          'Each year on the full moon of Tazaungmon, the Saophas lead the public in inviting monks to receive the morning alms-offering (Aruna Hsun) within the palace (Haw).',
        cta: 'Ritual Program & Schedule',
      },
      {
        badge: 'Bodhi Tree Watering',
        subBadge: 'Full Moon of Kason',
        heading: 'Honoring the Sacred Bodhi Tree',
        description:
          "Each year on the full moon of Kason, the Bodhi tree near Maha Myat Muni Pagoda is honored with a watering ceremony — the first rite held inside the Gandhakuti monastery hall, the watering itself at the tree's monastery compound (Wat Pha Kyauk).",
        cta: 'Ritual Program & Schedule',
      },
      {
        badge: 'Protective Paritta Chanting',
        subBadge: 'Every Three Months, Full Moon Evening',
        heading: '200 Monks Recite for Protection from Danger',
        description:
          'Once every three months, on the full moon evening at 6:00, a gathering of 200 monks recites the protective Paritta chants for freedom from danger inside the Gandhakuti monastery hall.',
        cta: 'Ritual Program & Schedule',
      },
      {
        badge: 'Akha Swing Festival',
        subBadge: 'After the Planting Season · Akha Villages',
        heading: 'A Celebration of Akha Culture',
        description:
          'One of the most important traditional festivals of the Akha people of eastern Shan State — celebrated after the planting season with the ceremonial swing, traditional dress, music and dance, and prayers for a good harvest.',
        cta: 'Festival Program & Details',
      },
      {
        badge: 'Lahu New Year Festival',
        subBadge: 'Collective New Year · Kengtung Township',
        heading: 'Heritage, Community and New Beginnings',
        description:
          'One of the most important traditional celebrations of the Lahu people — Lahu communities gather in Kengtung to welcome the new year with gourd-pipe music, communal dances, traditional dress and shared food.',
        cta: 'Festival Program & Details',
      },
      {
        badge: 'Akha New Year Festival',
        subBadge: 'Usually in December · Akha Communities',
        heading: 'Welcoming the New Year in Akha Tradition',
        description:
          'Akha communities around Kengtung welcome the New Year with traditional music, dancing, shared food and the silver-ornamented headdresses of Akha women.',
        cta: 'Festival Program & Details',
      },
      {
        badge: 'Nanda Bayri Drum Ceremony',
        subBadge: 'Thingyan (Myanmar New Year) · April',
        heading: 'The Sacred Drum of the Gon Shan New Year',
        description:
          'A distinctive Gon Shan Thingyan tradition — the sacred Nanda Bayri Mingala Drum is raised, blessed and sounded, then carried in procession through Kengtung to Nam Khin Creek.',
        cta: 'Festival Program & Details',
      },
      {
        badge: 'Wa New Year Festival',
        subBadge: '1st Waxing Day of Tabodwe · Pingsai Wa Village',
        heading: 'Welcoming the New Year in Wa Tradition',
        description:
          'Wa communities around Kengtung gather at Pingsai Wa Village to welcome the New Year with traditional songs, dances, bamboo pipes and drums, traditional dress and shared food.',
        cta: 'Festival Program & Details',
      },
      {
        badge: 'Shan New Year Festival',
        subBadge: 'Late November – December · Kengtung',
        heading: 'Kinnari Dances and Shan Heritage',
        description:
          'Shan communities and other ethnic groups gather in Kengtung to welcome the Shan New Year with Kinnari and Kinnara dances, traditional songs, cultural exhibitions and shared food.',
        cta: 'Festival Program & Details',
      },
      {
        badge: 'Sao Fa Market Day',
        subBadge: 'Once a Year, One Day · Old Market Area',
        heading: 'The Old Market of the Saophas',
        description:
          'For one day a year, the streets around Pa Leng Gate and the old Sao Fa tombs fill with stalls — a tradition said to date back to 1368, where buying something is believed to bring good fortune.',
        cta: 'Festival Program & Details',
      },
      {
        badge: 'Loi Mwe Cherry Blossom Festival',
        subBadge: 'December – January · Loi Mwe',
        heading: 'Mountains in Pink and White',
        description:
          'An annual festival held since 2022 among more than 1,000 cherry trees in the cool mountains of Loi Mwe — with blossom viewing, ethnic dances, traditional food and local products.',
        cta: 'Festival Program & Details',
      },
    ],
  },
  festivalCalendarPage: {
    eyebrow: 'Living Traditions',
    title: 'Festival Calendar',
    description:
      'Track every recurring ritual and votive festival at the pagodas of Keng Tung, with live countdowns to the next observance.',
  },
  festivalDetailPage: {
    aboutEyebrow: 'About the Festival',
    nextObservance: 'Next Observance',
    heldAtLabel: 'Held At',
    heldAt: 'Maha Myat Muni Pagoda, Keng Tung',
    visitPagoda: 'Visit the Pagoda',
    backToCalendar: 'Back to Festival Calendar',
    viewDetails: 'View Details',
    programTitle: 'Ceremony Program',
    tipsTitle: 'Visitor Tips',
    tips: [
      'Dress modestly — cover shoulders and knees.',
      'Remove shoes and socks before entering the pagoda grounds.',
      'Dates follow the Myanmar lunar calendar and may shift — confirm with the pagoda trustees before travelling.',
      'Arrive early for dawn ceremonies, and keep quiet during chanting and offerings.',
    ],
    festivals: [
      {
        sections: [
          {
            heading: 'How the Festival Began',
            paragraphs: [
              "On the full moon of Tazaungmon in 1312 ME (1950 CE), Saopha Sao Sai Long Khemadipati of Keng Tung, together with royal relatives and the pagoda's lay patrons, offered four ceremonial umbrellas at the temple entrances and a great alms-offering to 85 monks at 6:00 AM, sealed with the ceremonial water-pouring to share merit.",
              'Since that year, the full moon of Tazaungmon has been observed without interruption as the Maha Myat Muni Pagoda Festival.',
            ],
          },
          {
            heading: 'The Four Umbrellas',
            paragraphs: [
              'Ceremonial umbrellas (hti) are among the highest honours that can be offered to the Buddha in Myanmar and Shan tradition. On the first festival day, four umbrellas were offered at the entrances on all four sides of the pagoda.',
            ],
          },
          {
            heading: 'Sharing the Merit',
            paragraphs: [
              'The festival morning closes with the ceremonial water-pouring (Yay Zet Cha). As the donors slowly pour water, the merit of the offering is dedicated to all beings, and everyone present responds "Sadhu, Sadhu, Sadhu."',
            ],
          },
        ],
        program: [
          { time: '6:00 AM', activity: 'Monks are invited and receive the great alms-offering' },
          { time: 'Morning', activity: 'Offering of ceremonial umbrellas at the temple entrances' },
          { time: 'Closing', activity: 'Water-pouring ceremony to share the merit' },
        ],
      },
      {
        sections: [
          {
            heading: 'A Royal Tradition',
            paragraphs: [
              'Each year on the full moon of Tazaungmon, the Saophas lead the public in inviting monks to receive the morning alms-offering (Aruna Hsun) within the palace (Haw).',
              'The almsgiving falls on the same full moon as the Maha Myat Muni Pagoda Festival, making the Tazaungmon full moon one of the most important days of the year in Keng Tung.',
            ],
          },
          {
            heading: 'What Is Aruna Hsun?',
            paragraphs: [
              'Aruna means dawn. Aruna Hsun is the alms-food offered to the monks at first light, as the day begins — a quiet, devoted offering made before the town wakes.',
            ],
          },
          {
            heading: 'The Kengtung Haw',
            paragraphs: [
              'The Haw was the palace of the Kengtung Saophas, built between 1903 and 1906. The original building was demolished in 1991; a replica museum now stands beside Naung Tung Lake.',
            ],
          },
        ],
        program: [
          { time: 'Before dawn', activity: 'Devotees gather at the Haw with alms-food' },
          { time: 'Dawn', activity: 'Led by the Saophas, the public invites the monks and offers Aruna Hsun' },
        ],
      },
      {
        sections: [
          {
            heading: 'Honoring the Bodhi Tree',
            paragraphs: [
              "Each year on the full moon of Kason, the Bodhi tree near Maha Myat Muni Pagoda is honored with a watering ceremony: the first rite is held inside the Gandhakuti monastery hall, and the watering itself takes place at the Bodhi tree's monastery compound (Wat Pha Kyauk).",
            ],
          },
          {
            heading: 'Why the Full Moon of Kason?',
            paragraphs: [
              "The full moon of Kason is the most sacred day of the Buddhist year — the day of the Buddha's birth, his Enlightenment beneath the Bodhi tree, and his final passing. Watering the Bodhi tree on this day honours the tree under which the Buddha attained Enlightenment, and in the hottest season of the year it also keeps the tree green and alive.",
            ],
          },
        ],
        program: [
          { time: 'Part 1', activity: 'Opening rite inside the Gandhakuti monastery hall' },
          { time: 'Part 2', activity: 'Watering the Bodhi tree at Wat Pha Kyauk' },
        ],
      },
      {
        sections: [
          {
            heading: 'Chanting for Protection',
            paragraphs: [
              'Once every three months, on the full moon evening at 6:00, a gathering of 200 monks recites the protective Paritta chants for freedom from danger inside the Gandhakuti monastery hall of Maha Myat Muni Pagoda.',
            ],
          },
          {
            heading: 'What Is Paritta?',
            paragraphs: [
              'Paritta are protective discourses of the Buddha, chanted in Pali — among them the Mangala, Ratana and Metta Suttas. Their recitation is believed to bring blessings and protection from danger, illness and misfortune to all who listen with faith.',
            ],
          },
          {
            heading: 'Joining the Chanting',
            paragraphs: [
              'Devotees are welcome to sit quietly in the hall and listen as the voices of 200 monks fill the Gandhakuti hall.',
            ],
          },
        ],
        program: [
          { time: '6:00 PM', activity: '200 monks gather inside the Gandhakuti monastery hall' },
          { time: 'Evening', activity: 'Recitation of the protective Paritta chants' },
        ],
      },
      {
        heldAt: 'Akha villages around Kengtung',
        sections: [
          {
            heading: 'A Celebration of Akha Culture',
            paragraphs: [
              'The Akha Traditional Swing Festival is one of the important traditional festivals of the Akha people living in eastern Shan State, Myanmar.',
              'The festival is celebrated by Akha communities in mountainous areas around Kengtung, Tachileik, Mong Hsat and surrounding regions.',
              'More than a festival, it is a celebration of community, agriculture, tradition and cultural identity.',
            ],
          },
          {
            heading: 'The Festival and Agriculture',
            paragraphs: [
              'The Swing Festival is closely connected with the agricultural life of the Akha people.',
              'Traditionally, the festival is held after the planting season and an important period of agricultural work has been completed.',
              'It becomes a time for the community to celebrate the progress of the new crop, pray for a successful harvest and hope for sufficient food in the coming season.',
            ],
          },
          {
            heading: 'The Meaning of the Swing',
            paragraphs: [
              'The traditional swing is the central symbol of the festival.',
              'For the Akha people, the swing has a cultural and spiritual meaning that goes beyond entertainment.',
              'According to Akha traditional belief, their ancestors descended from the heavens through the swing.',
              'Because of this belief, ceremonial swinging is an important part of the festival and represents a connection between Akha traditions, ancestors and the community.',
            ],
          },
          {
            heading: 'A Celebration of Unity',
            paragraphs: [
              'The festival brings together people from the community and provides an opportunity for families and different generations to celebrate together.',
              'The festival is associated with peace, unity, prosperity and food sufficiency.',
              'It also provides an opportunity for younger generations to learn about and continue the traditional customs of their ancestors.',
            ],
          },
          {
            heading: 'Traditional Clothing',
            paragraphs: [
              'Akha traditional clothing is one of the most distinctive features of the festival.',
              'Women and men wear traditional costumes decorated with patterns and ornaments that reflect Akha cultural identity.',
              'The festival provides an opportunity for people to proudly display these traditional clothes and pass their cultural knowledge to younger generations.',
            ],
          },
          {
            heading: 'Traditional Music and Dance',
            paragraphs: [
              'Traditional music and dance are important parts of the celebration.',
              'Akha men and women perform traditional dances and songs during the festival, creating a lively atmosphere filled with music, movement and community participation.',
              'These performances also allow visitors to experience the cultural heritage of the Akha people.',
            ],
          },
          {
            heading: 'The Swing Ceremony',
            paragraphs: [
              'The ceremonial swing is prepared according to traditional customs.',
              'During the festival, community members participate in the ceremonial riding of the swing.',
              'The ceremony represents more than a physical activity. It is a symbolic expression of Akha tradition, community identity and connection with ancestral beliefs.',
            ],
          },
          {
            heading: 'The Festival in Kengtung',
            paragraphs: [
              'Akha communities around Kengtung regularly organize traditional swing festivals.',
              'In Kengtung Township, the festival has attracted local communities as well as visitors interested in experiencing Akha culture.',
              'The surrounding villages provide an opportunity to see traditional lifestyles, clothing, food, music and agricultural practices alongside the festival itself.',
            ],
          },
          {
            heading: 'Preserving Cultural Heritage',
            paragraphs: [
              'The Akha Swing Festival plays an important role in preserving traditional culture.',
              'As modern life changes the way communities live, festivals such as this provide opportunities to maintain traditional music, clothing, ceremonies, language and social customs.',
              'The festival also introduces Akha culture to visitors from other parts of Myanmar and beyond.',
            ],
          },
          {
            heading: 'A Living Tradition',
            paragraphs: [
              'The Akha Traditional Swing Festival is not simply a performance for visitors. It is a living cultural tradition practiced by Akha communities.',
              'The swing, traditional clothing, music, dance, agricultural beliefs and community gatherings all form part of a cultural heritage passed from one generation to another.',
              'For Kengtung and eastern Shan State, the festival provides a window into the diverse ethnic cultures that have shaped the region.',
            ],
          },
          {
            heading: 'A Festival of Culture and Community',
            paragraphs: [
              'The Akha Traditional Swing Festival brings together agriculture, spirituality, family, music, traditional clothing and community life.',
              'Through the movement of the swing and the rhythm of traditional songs and dances, generations come together to celebrate their heritage.',
              "For visitors to Kengtung, experiencing an Akha Swing Festival provides an opportunity to see not only a traditional celebration, but also a living expression of the cultural identity of one of eastern Shan State's important ethnic communities.",
            ],
          },
        ],
        program: [
          { time: 'Preparation', activity: 'The ceremonial swing is prepared according to traditional customs' },
          { time: 'Ceremony', activity: 'Community members take part in the ceremonial riding of the swing' },
          { time: 'Celebration', activity: 'Akha men and women perform traditional songs and dances' },
        ],
        tips: [
          'Festival dates follow the Akha calendar and vary by village — confirm with a local guide before travelling.',
          'A local guide can arrange transport to the villages and help with introductions.',
          'Ask permission before photographing people, especially during the ceremony.',
          'Treat the ceremonial swing with respect — ride it only if invited by the community.',
        ],
        album: {
          eyebrow: 'Akha Villages',
          title: 'The Akha Swing Festival',
          caption: 'The ceremonial swing, traditional dress and circle dances of the Akha Swing Festival.',
        },
      },
      {
        heldAt: 'Kengtung Township · collective festival',
        sections: [
          {
            heading: 'A Celebration of Heritage, Community and New Beginnings',
            paragraphs: [
              'The Lahu New Year Festival is one of the important traditional celebrations of the Lahu people living in eastern Shan State. In and around Kengtung, the festival brings together Lahu communities to welcome a new year, honour their traditions, strengthen relationships, and celebrate their shared cultural identity.',
              'More than a celebration marking the beginning of a new year, the festival is a time when families and communities come together through traditional music, dance, ceremonies, food, and cultural activities. The colourful clothing, distinctive musical instruments, traditional dances, and communal gatherings create a unique atmosphere that reflects the living heritage of the Lahu people.',
            ],
          },
          {
            heading: 'A Traditional New Year',
            paragraphs: [
              'The Lahu New Year is traditionally associated with a period of renewal and community gathering. During the celebration, people return to their communities, meet relatives and friends, and participate in activities that connect younger generations with their cultural traditions.',
              'In Kengtung, collective Lahu New Year celebrations have been organized for many years, bringing representatives and community members together from different Lahu villages.',
            ],
          },
          {
            heading: 'The Collective Celebration',
            paragraphs: [
              'One of the distinctive features of the Lahu New Year celebration is its communal character. Rather than being limited to individual families, the festival provides an opportunity for members of different communities to gather in one place.',
              'Traditional ceremonies, cultural performances, music, dancing, and community activities take place throughout the celebration. These gatherings also provide an important opportunity for younger Lahu people to experience traditions that have been passed down through generations.',
            ],
          },
          {
            heading: 'Music of the Lahu',
            paragraphs: [
              'Music is an essential part of the celebration.',
              'Traditional Lahu musicians perform using instruments associated with their cultural heritage. Among the most recognizable are bamboo and gourd-based wind instruments, whose distinctive sounds accompany traditional dances and community gatherings.',
              'The music is not simply entertainment. It forms part of the atmosphere of the festival and helps connect traditional performance with community participation.',
            ],
          },
          {
            heading: 'Traditional Dance',
            paragraphs: [
              'Traditional dancing is another important part of the Lahu New Year celebration.',
              'Groups of dancers often move together in coordinated formations while musicians perform traditional melodies. These communal dances create a strong sense of participation, with people gathering around the performers rather than simply watching from a distance.',
              'Through dance, rhythm, and movement, the festival becomes a shared experience for the entire community.',
            ],
          },
          {
            heading: 'Traditional Clothing',
            paragraphs: [
              'The Lahu are also recognized for their distinctive traditional clothing.',
              'During New Year celebrations, men and women may wear traditional garments and accessories that reflect their community and cultural identity. Dark-coloured fabrics, decorative elements, embroidery, and traditional headwear can form important parts of Lahu dress.',
              'These clothes are more than festival costumes. They represent cultural identity and provide a visible connection between present-day communities and previous generations.',
            ],
          },
          {
            heading: 'The Festival Gathering',
            paragraphs: [
              'At a Lahu New Year celebration, the atmosphere extends beyond formal ceremonies.',
              'Families and friends meet, people share food, musicians perform, and community members spend time together. The festival becomes a social gathering where relationships are renewed and strengthened.',
              'For visitors, these moments provide an opportunity to see Lahu culture not simply as a historical tradition, but as a living part of everyday community life.',
            ],
          },
          {
            heading: 'A Symbol of Community',
            paragraphs: [
              'The collective nature of the festival is one of its most meaningful characteristics.',
              'People from different villages and communities can gather to celebrate their shared heritage. The event creates a space where cultural traditions, family relationships, music, dance, and community identity come together.',
              'In this sense, the Lahu New Year Festival represents both a celebration of a new year and a celebration of belonging.',
            ],
          },
          {
            heading: 'Lahu New Year in Kengtung',
            paragraphs: [
              'Kengtung is home to many ethnic communities and has long been an important cultural crossroads in eastern Shan State. The Lahu New Year Festival is one of the events that demonstrates this cultural diversity.',
              'Recent collective celebrations have taken place in Kengtung Township. The 41st Lahu Ethnic Collective Traditional New Year Festival was held in February 2025, while the 42nd collective festival was held in January 2026.',
              'These celebrations demonstrate the continuing importance of Lahu traditions within the cultural landscape of Kengtung.',
            ],
          },
          {
            heading: 'Preserving a Living Heritage',
            paragraphs: [
              'Traditional festivals play an important role in keeping cultural knowledge alive.',
              'For younger generations, participating in traditional music, dance, clothing, ceremonies, and community gatherings provides an opportunity to learn about their heritage directly from older generations.',
              'The Lahu New Year Festival therefore represents more than a yearly celebration. It is also a living cultural space where traditions can be practiced, shared, and passed on.',
            ],
          },
          {
            heading: 'A New Year, a Continuing Tradition',
            paragraphs: [
              'As another year begins, the Lahu community gathers once again through music, dance, ceremony, and friendship.',
              'The sound of traditional instruments, the movement of communal dances, the colours of traditional clothing, and the gathering of families and villages all contribute to the atmosphere of the celebration.',
              "For Kengtung, the Lahu New Year Festival is another reminder of the region's remarkable cultural diversity. For the Lahu people, it is a celebration of heritage, community, and a new beginning.",
            ],
          },
          {
            heading: 'Documentary Timeline',
            paragraphs: [
              'Traditional — Lahu New Year celebrations held annually within Lahu communities.',
              '2018 — Documentary photographs recorded Lahu New Year celebrations in Kengtung.',
              'February 2025 — 41st Lahu Ethnic Collective Traditional New Year Festival, Kengtung Township.',
              'January 2026 — 42nd Lahu Ethnic Collective Traditional New Year Festival, Kengtung.',
            ],
          },
        ],
        program: [
          { time: 'Gathering', activity: 'Lahu communities from different villages gather in one place' },
          { time: 'Ceremony', activity: 'Traditional ceremonies and cultural performances' },
          { time: 'Music & Dance', activity: 'Bamboo and gourd-pipe music accompanies communal dances' },
          { time: 'Community', activity: 'Families and friends meet and share food' },
        ],
        tips: [
          'The collective festival date changes each year (January–February) — confirm with local organisers before travelling.',
          'Ask permission before photographing people in traditional dress.',
          'Watch the communal dances respectfully — join in only when invited.',
          'Follow the guidance of community elders and festival organisers.',
        ],
        album: {
          eyebrow: 'Kengtung Township',
          title: 'The Lahu New Year Festival',
          caption: 'Gourd-pipe musicians, drummers and communal dances in traditional Lahu dress.',
        },
      },
      {
        heldAt: 'Akha communities around Kengtung',
        sections: [
          {
            heading: 'Welcoming the New Year',
            paragraphs: [
              'The Akha New Year Festival is one of the important traditional celebrations of the Akha communities around Kengtung, eastern Shan State. Usually held in December, the festival brings together Akha communities to welcome the New Year through traditional music, dancing, cultural gatherings, food, and distinctive traditional dress.',
            ],
          },
          {
            heading: 'Headdresses and Traditional Dress',
            paragraphs: [
              'One of the most recognizable features of the celebration is the elaborate clothing and headdresses worn by Akha women. Decorated with silver ornaments, beads, coins, and other traditional elements, these headdresses reflect the cultural identity and craftsmanship of different Akha communities.',
            ],
          },
          {
            heading: 'Songs, Dances and Shared Food',
            paragraphs: [
              'During the festival, groups gather to perform traditional songs and dances, while families and community members share food and spend time together. The celebration is not only a New Year gathering but also an opportunity for younger generations to experience and preserve traditions passed down through their communities.',
            ],
          },
          {
            heading: 'The Festival in Kengtung',
            paragraphs: [
              'In Kengtung, the festival brings together different Akha groups, including communities with distinctive styles of dress and cultural expression. The colorful costumes, rhythmic music, group dances, traditional foods, and large community gatherings create a vivid celebration of Akha heritage and identity.',
            ],
          },
          {
            heading: 'A Glimpse of Akha Heritage',
            paragraphs: [
              'For visitors, the Akha New Year Festival offers a glimpse into the cultural diversity of Kengtung and the traditions that continue to connect Akha communities with their history and one another.',
            ],
          },
        ],
        program: [
          { time: 'Gathering', activity: 'Akha groups from different communities come together in traditional dress' },
          { time: 'Celebration', activity: 'Traditional songs, music and group dances' },
          { time: 'Community', activity: 'Families and community members share food and spend time together' },
        ],
        tips: [
          'The festival is usually held in December, but dates vary — confirm with a local guide before travelling.',
          'Ask permission before photographing people, especially women in traditional headdresses.',
          'Do not touch headdresses or silver ornaments — they are treasured family pieces.',
          'Watch the dances respectfully and join in only when invited.',
        ],
        album: {
          eyebrow: 'Akha Communities',
          title: 'The Akha New Year Festival',
          caption: 'Silver-ornamented headdresses, traditional dress and group dances of the Akha New Year.',
        },
      },
      {
        heldAt: 'Kengtung town · procession to Nam Khin Creek',
        sections: [
          {
            heading: 'A Sacred New Year Drum',
            paragraphs: [
              'The Gon Shan Traditional Thingyan Mingala Nanda Bayri Drum Ceremony is one of Kengtung’s distinctive traditional celebrations, held during the Myanmar New Year period in April. The ceremony centers on the sacred Nanda Bayri Mingala Drum and brings together local communities to preserve an old cultural tradition through ritual, music, dance, and procession.',
            ],
          },
          {
            heading: 'The Ceremony',
            paragraphs: [
              'The ceremony begins with traditional Gon Shan cultural performances and the raising of the Nanda Bayri Mingala Drum. Traditional prayers and ceremonial rites are performed, including the sounding of the drum seven times and the sprinkling of scented water over the drum. Traditional songs and dances are also performed as part of the celebration.',
            ],
          },
          {
            heading: 'The Procession to Nam Khin Creek',
            paragraphs: [
              'A major part of the tradition is the continuous drumming that follows the ceremony. The sacred drum is then ceremonially conveyed through Kengtung, accompanied by local people and traditional cultural groups. The procession continues toward Nam Khin Creek, where further traditional rituals are performed.',
            ],
          },
          {
            heading: 'Rain, Protection and Plenty',
            paragraphs: [
              'The festival is closely connected with traditional beliefs about welcoming the New Year, protecting the community from misfortune, encouraging good rainfall, and supporting prosperity and agricultural abundance. These beliefs reflect the historical relationship between the Gon Shan community, nature, water, and agriculture.',
            ],
          },
          {
            heading: 'A Living Heritage',
            paragraphs: [
              'The Nanda Bayri Drum Ceremony is more than a festival of music. It is a living expression of Kengtung’s cultural heritage, bringing together traditional beliefs, ceremonial music, dance, community participation, and the distinctive identity of the Gon Shan people.',
              'Today, the ceremony continues to provide an opportunity for younger generations to experience and preserve the traditions passed down through their communities. Through the sound of the Nanda Bayri drum and the procession through Kengtung, an important part of the city’s cultural heritage continues to live on.',
            ],
          },
        ],
        program: [
          { time: 'Opening', activity: 'Gon Shan cultural performances and the raising of the Nanda Bayri Mingala Drum' },
          { time: 'Rites', activity: 'Traditional prayers — the drum is sounded seven times and sprinkled with scented water' },
          { time: 'Celebration', activity: 'Traditional songs and dances' },
          { time: 'Drumming', activity: 'Continuous drumming follows the ceremony' },
          { time: 'Procession', activity: 'The drum is carried through Kengtung to Nam Khin Creek for further rituals' },
        ],
        tips: [
          'The ceremony falls during Thingyan in April — confirm the exact day locally before travelling.',
          'It is the water festival season: expect to get wet and keep phones and cameras protected.',
          'Ask permission before photographing the rites up close.',
          'Give way to the procession and follow the directions of the organisers.',
        ],
        album: {
          eyebrow: 'Kengtung · Thingyan',
          title: 'The Nanda Bayri Drum Ceremony',
          caption: 'Prayers before the sacred drum, the drummers and the Thingyan water blessing.',
        },
      },
      {
        heldAt: 'Pingsai Wa Village, Mainzin Village Tract, Kengtung Township',
        sections: [
          {
            heading: 'Welcoming the Wa New Year',
            paragraphs: [
              'The Wa New Year Festival is an important traditional celebration of the Wa communities living in and around Kengtung Township in eastern Shan State. The festival brings communities together to welcome the New Year, celebrate their cultural identity, and preserve traditional customs through music, dance, food, and community gatherings.',
            ],
          },
          {
            heading: 'The Collective Festival at Pingsai',
            paragraphs: [
              'In Kengtung, the collective Wa New Year Festival has been held at Pingsai Wa Village in the Mainzin Village Tract. Recent celebrations include the 48th festival in 2024, the 49th in 2025, and the 50th festival in 2026. The 50th Wa Ethnic Traditional Collective New Year Festival was held on 28 January 2026 at Pingsai Wa Village, bringing together Wa communities for a day of cultural celebration.',
            ],
          },
          {
            heading: 'The First Waxing Day of Tabodwe',
            paragraphs: [
              'The festival is traditionally held on the first waxing day of Tabodwe, known in Myanmar as တပို့တွဲလဆန်း ၁ ရက်. This day marks the beginning of the Wa New Year celebration and provides an opportunity for members of the community to gather and take part in traditional activities.',
            ],
          },
          {
            heading: 'Music and Dance',
            paragraphs: [
              'Music and dance are at the heart of the celebration. Wa cultural groups perform traditional songs and dances, accompanied by traditional musical instruments such as bamboo or pipe instruments and drums. These performances are not simply entertainment; they provide a way for younger generations to learn about and continue the cultural traditions of their communities.',
            ],
          },
          {
            heading: 'Traditional Dress',
            paragraphs: [
              'Traditional clothing also plays an important role in the festival. Men and women gather wearing distinctive Wa traditional dress, creating a colorful expression of cultural identity. Through clothing, music, dance, and ceremonies, the festival allows cultural knowledge and traditions to remain visible and meaningful within the community.',
            ],
          },
          {
            heading: 'Food and Harvest',
            paragraphs: [
              'Food is another important part of the celebration. Traditional Wa foods and locally produced agricultural products are displayed and shared during the festival. These foods and products reflect the close relationship between the community, agriculture, and the surrounding environment.',
            ],
          },
          {
            heading: 'A Time for Community',
            paragraphs: [
              "The festival is also a time for community connection. Families, elders, young people, and cultural groups come together to participate in the celebration. In some recent festivals, people from neighboring ethnic communities have also attended and participated in cultural activities, making the event an opportunity for cultural exchange in Kengtung's diverse social landscape.",
            ],
          },
          {
            heading: 'Preserving Wa Heritage',
            paragraphs: [
              'Beyond the celebration itself, the Wa New Year Festival represents the continuing effort of Wa communities to preserve their cultural heritage. Traditional songs, dances, clothing, musical instruments, food, and community practices are passed from one generation to another through gatherings such as this.',
            ],
          },
          {
            heading: 'Wa Culture in Kengtung',
            paragraphs: [
              "For Kengtung, the Wa New Year Festival is part of the region's wider cultural diversity. It offers visitors an opportunity to witness Wa traditions in a community setting and to understand how ethnic heritage continues to live through everyday people, shared traditions, and collective celebrations.",
              'Today, the Wa New Year Festival continues to bring people together in Kengtung, connecting the younger generation with the traditions of their elders while keeping an important part of Wa cultural heritage alive.',
            ],
          },
        ],
        program: [
          { time: 'Gathering', activity: 'Wa communities gather at Pingsai Wa Village in traditional dress' },
          { time: 'Music & Dance', activity: 'Traditional songs and dances with bamboo pipes and drums' },
          { time: 'Food', activity: 'Traditional Wa foods and local agricultural products are displayed and shared' },
          { time: 'Exchange', activity: 'Neighbouring ethnic communities join the cultural activities' },
        ],
        tips: [
          'The festival follows the 1st waxing day of Tabodwe (January–February) — confirm the date locally before travelling.',
          'Pingsai Wa Village is outside town — a local guide can arrange transport and introductions.',
          'Ask permission before photographing people, especially elders and performers.',
          'Try the traditional foods on offer, and follow the guidance of village elders and organisers.',
        ],
        album: {
          eyebrow: 'Wa Communities',
          title: 'The Wa New Year Festival',
          caption: 'Village elders, traditional dress and Wa songs and dances.',
        },
      },
      {
        heldAt: 'Kengtung District Sports Ground',
        sections: [
          {
            heading: 'Welcoming the Shan New Year',
            paragraphs: [
              'The Shan New Year Festival is one of the important cultural celebrations held in Kengtung, eastern Shan State, bringing together Shan communities and other ethnic groups to welcome the New Year and celebrate their cultural heritage.',
            ],
          },
          {
            heading: 'The 2024 Festival',
            paragraphs: [
              'In 2024, the Kengtung Shan New Year Festival was held from 26 to 30 November at the Kengtung District Sports Ground.',
            ],
          },
          {
            heading: 'Dances and Songs',
            paragraphs: [
              'Throughout the celebration, visitors and local communities could experience a variety of traditional cultural activities, including Shan traditional dances such as Kinnari and Kinnara dances, To-Naya dances, traditional songs, and performances by different ethnic groups.',
            ],
          },
          {
            heading: 'Exhibitions and Competitions',
            paragraphs: [
              'The festival also featured cultural exhibition booths where traditional foods, clothing, and other aspects of local heritage were displayed. Traditional singing competitions and cultural performances added to the festive atmosphere, while people gathered together to share food, music, and traditions.',
            ],
          },
          {
            heading: 'Passing On Tradition',
            paragraphs: [
              'The festival is not only a celebration of the beginning of a new year but also an opportunity for the people of Kengtung to preserve, present, and pass their cultural traditions to future generations.',
            ],
          },
        ],
        program: [
          { time: 'Stage', activity: 'Kinnari and Kinnara dances, To-Naya dances and traditional songs' },
          { time: 'Performances', activity: 'Cultural performances by different ethnic groups' },
          { time: 'Exhibitions', activity: 'Cultural booths with traditional foods, clothing and local heritage' },
          { time: 'Competitions', activity: 'Traditional singing competitions' },
        ],
        tips: [
          'The festival follows the Shan calendar (late November–December) and runs over several days — confirm the dates locally.',
          'Visit the exhibition booths to try traditional foods and see local clothing and crafts.',
          'Ask permission before photographing performers up close.',
          'Stay for performances by the other ethnic groups, not only the Shan dances.',
        ],
        album: {
          eyebrow: 'Kengtung District Sports Ground',
          title: 'The Shan New Year Festival',
          caption: 'Kinnari and Kinnara dancers, the opening ceremony and stage performances.',
        },
      },
      {
        heldAt: 'Old market area around Pa Leng Gate, Kengtung',
        sections: [
          {
            heading: 'A Market Held Once a Year',
            paragraphs: [
              'Sao Fa Market Day, also known as the Old Market Day, is one of Kengtung’s distinctive traditional cultural events. Unlike an ordinary daily market, it is held only once a year for one day, bringing together local residents, visitors, and vendors from surrounding areas.',
            ],
          },
          {
            heading: 'Rooted in Saopha History',
            paragraphs: [
              'The tradition is associated with the history of the Shan Saophas and has been preserved as an important part of Kengtung’s cultural heritage. Historical accounts place the tradition as far back as 1368 AD, during the time of Saopha Sao Sit Pan Tu. Over time, the original marketplace changed as Kengtung developed, but the annual gathering continued at the historic area.',
            ],
          },
          {
            heading: 'The Market Streets',
            paragraphs: [
              'On Sao Fa Market Day, the streets around the old Sao Fa tombs, Parlian Gate, Loimwe Road, Zaytangyi Road and nearby market streets become filled with temporary stalls and visitors. Vendors bring local crops, traditional foods, ethnic clothing, handicrafts and everyday goods to sell during the one-day event.',
            ],
          },
          {
            heading: 'Remembrance at the Saopha Tombs',
            paragraphs: [
              'The market is also closely connected with local traditions of remembrance and respect. Visitors come to the eight stupa tombs associated with past Saophas, where offerings such as fruits, flowers, candles and incense are made.',
            ],
          },
          {
            heading: 'Good Fortune and Community',
            paragraphs: [
              "For many local people, buying something at Sao Fa Market is more than ordinary shopping. It is part of a long-standing tradition associated with good fortune, health, social well-being and prosperity. The market therefore becomes both a place of commerce and a gathering that connects Kengtung's present-day community with its history and cultural traditions.",
            ],
          },
          {
            heading: 'A Market That Lasts Only One Day',
            paragraphs: [
              'From early in the morning, people gather around the historic market area to shop, meet one another, experience local traditions and pay their respects. The temporary nature of the market makes the day particularly special: once the day ends, the historic market streets return to their normal rhythm.',
              "Sao Fa Market Day continues to serve as a living expression of Kengtung's Shan heritage, traditional commerce and community life.",
            ],
          },
        ],
        program: [
          { time: 'Early morning', activity: 'People gather around the historic market area' },
          { time: 'All day', activity: 'Stalls of local crops, traditional foods, ethnic clothing and handicrafts fill the streets' },
          { time: 'Remembrance', activity: 'Offerings of fruits, flowers, candles and incense at the eight Saopha stupa tombs' },
          { time: 'Day’s end', activity: 'The market closes and the old streets return to their normal rhythm' },
        ],
        tips: [
          'The market is held on a single day each year — confirm the date locally before travelling.',
          'Arrive early: the streets around Pa Leng Gate get very crowded.',
          'Buy something small — by local tradition it brings good fortune.',
          'Be respectful at the Saopha stupa tombs, where people make offerings.',
        ],
        album: {
          eyebrow: 'Pa Leng Gate · Old Market',
          title: 'Sao Fa Market Day',
          caption: 'Stalls and crowds around Pa Leng Gate and the old market streets.',
        },
      },
      {
        heldAt: 'Loi Mwe, Kengtung Township',
        sections: [
          {
            heading: 'Overview',
            paragraphs: [
              'The Loi Mwe Cherry Blossom Festival is an annual cultural and tourism festival held in Loi Mwe, Kengtung Township, eastern Shan State, Myanmar. Located at approximately 5,542 feet (1,689 metres) above sea level, Loi Mwe is a cool mountain area known for its natural scenery, historic sites, and beautiful cherry trees. During the flowering season, the trees transform the mountain landscape with shades of pink and white, attracting visitors from different parts of the region.',
            ],
          },
          {
            heading: 'The Beginning of the Festival',
            paragraphs: [
              'The first Loi Mwe Cherry Blossom Festival was held in January 2022. The festival was established to promote tourism in the Loi Mwe area, encourage appreciation and conservation of the cherry trees, and introduce visitors to the traditions, culture, food, and local products of communities around Kengtung.',
              'Since its beginning, the festival has developed into a major seasonal attraction in eastern Shan State. Festival dates vary depending on the flowering season of the cherry trees.',
            ],
          },
          {
            heading: 'A Landscape Filled with Cherry Blossoms',
            paragraphs: [
              'Cherry trees have been associated with Loi Mwe for many years. Some of the older trees are believed to date back to the colonial period, while additional trees were planted by later generations.',
              'Around 500 cherry trees were planted during the 1990s, followed by another approximately 500 trees between 2022 and 2023. These plantings brought the reported number of cherry trees in the Loi Mwe area to more than 1,000.',
              'The area is known for different types of cherry trees that bloom at different times. As a result, the flowering season can continue for several weeks, allowing visitors to experience the blossoms over an extended period.',
            ],
          },
          {
            heading: 'A Celebration of Culture',
            paragraphs: [
              'The Loi Mwe Cherry Blossom Festival is not only a celebration of flowers. It is also an opportunity to showcase the cultural diversity of the Kengtung region.',
              'Festival programmes have included traditional dance performances, music, ethnic costumes, and cultural presentations by local communities. Groups representing ethnic communities such as the Shan, Akha, Lahu, Wa, Lisu, Loi, and Ahkhe have participated in cultural activities associated with the festival.',
              'Through these performances, visitors can experience the traditions and cultural heritage of eastern Shan State alongside the natural beauty of Loi Mwe.',
            ],
          },
          {
            heading: 'Local Food and Products',
            paragraphs: [
              'Local food and traditional products are an important part of the festival.',
              'Visitors can experience and purchase a variety of regional products, including traditional local foods, ethnic traditional dishes, local wines, traditional handicrafts, Shan traditional products, agricultural products, locally produced goods, MSME products, and regional souvenirs.',
              'Food fairs and local product exhibitions provide visitors with an opportunity to experience the everyday culture and traditions of communities around Kengtung.',
            ],
          },
          {
            heading: 'The Festival and Tourism',
            paragraphs: [
              'One of the main purposes of the Loi Mwe Cherry Blossom Festival is to promote Loi Mwe as a tourism destination.',
              'The festival attracts visitors from Kengtung and other parts of eastern Shan State, including areas such as Mongkhet, Mongyawng, Mongla, and Tachileik.',
              'The event provides an opportunity for visitors to enjoy the cherry blossoms while also exploring the surrounding mountain landscapes, historical sites, lakes, and cultural attractions.',
              'The festival has therefore become an important seasonal event for tourism in the Kengtung region.',
            ],
          },
          {
            heading: 'Beyond the Blossoms',
            paragraphs: [
              'Loi Mwe offers more than its famous cherry trees. The surrounding area contains several natural and historical attractions that make it a destination throughout the year.',
              'Among the notable places are Loi Mwe Lake and the Centennial Mansion.',
              'Loi Mwe Lake provides a peaceful natural setting surrounded by the mountain landscape. It offers visitors an opportunity to enjoy the quieter side of Loi Mwe away from the festival crowds.',
              'The Centennial Mansion is another important historical landmark in the area. Together with the lake, mountain scenery, and cherry-tree areas, it reflects the natural and historical character of Loi Mwe.',
            ],
          },
          {
            heading: 'Conservation of the Cherry Trees',
            paragraphs: [
              'The development of the cherry blossom festival is closely connected with the conservation and expansion of cherry trees in Loi Mwe.',
              'New trees have continued to be planted in the area to expand the cherry landscape and preserve the seasonal attraction for future generations.',
              'The festival therefore serves not only as a tourism event but also as an opportunity to raise awareness of the importance of protecting the natural environment and maintaining the unique character of Loi Mwe.',
            ],
          },
          {
            heading: 'Why Loi Mwe Is Special',
            paragraphs: [
              'The Loi Mwe Cherry Blossom Festival brings together three important elements: nature, history, and culture.',
              'The cool mountain environment provides the setting. Thousands of cherry trees create the seasonal spectacle. Traditional music, dance, clothing, food, handicrafts, and local products add a strong cultural dimension to the celebration.',
              'For visitors, the festival offers more than an opportunity to see flowers. It provides a chance to experience the natural beauty and cultural diversity of Loi Mwe and the wider Kengtung region.',
            ],
          },
          {
            heading: 'A Festival in Bloom',
            paragraphs: [
              'Every flowering season, Loi Mwe becomes a meeting place for nature, culture, and community.',
              'The pink and white cherry blossoms provide the visual identity of the festival, while the surrounding mountains, historic buildings, traditional cultures, and local products tell a wider story about the region.',
              'The Loi Mwe Cherry Blossom Festival has become one of the seasonal cultural attractions of eastern Shan State, offering visitors a memorable way to experience the landscape and heritage of Kengtung.',
            ],
          },
          {
            heading: 'Documentary Timeline',
            paragraphs: [
              '2022 — First Loi Mwe Cherry Blossom Festival.',
              '2023 — The festival continued with cherry blossom viewing, cultural performances, traditional food, and local product exhibitions.',
              '2024 — The third edition of the festival continued to promote Loi Mwe as a seasonal tourism destination.',
              '2025 — The fourth festival was held in January, while the fifth festival was held from 24–26 December 2025.',
              '2026 — Continued development and planting of cherry trees have been reported as part of efforts to expand the attraction of Loi Mwe.',
            ],
          },
        ],
        program: [
          { time: 'Blossoms', activity: 'Cherry blossom viewing along the mountain paths and lakeside' },
          { time: 'Culture', activity: 'Traditional dances, music and ethnic costumes by local communities' },
          { time: 'Food & Products', activity: 'Food fairs and exhibitions of local foods, wines, handicrafts and products' },
          { time: 'Nearby', activity: 'Loi Mwe Lake and the Centennial Mansion' },
        ],
        tips: [
          'Festival dates change each year with the flowering of the cherry trees — confirm before travelling.',
          'Loi Mwe sits at 5,542 ft — bring warm clothes for the cool mountain air.',
          'Help protect the cherry trees — do not pick blossoms or break branches.',
          'Visit Loi Mwe Lake and the Centennial Mansion for the quieter side of Loi Mwe.',
        ],
        album: {
          eyebrow: 'Loi Mwe',
          title: 'Loi Mwe Cherry Blossom Festival',
          caption: 'Cherry blossoms along the mountain paths and lakeside, the festival opening and cultural performances.',
        },
      },
    ],
  },
  watZomKham: {
    meta: { title: 'Wat Zom Kham — The Golden Crown of Kyaing Tong' },
    hero: {
      badges: [
        { label: 'Monastic Monument Catalog · Ref. KT-ZOM-01' },
        { label: 'Active Theravada Sanctum', pulsingDot: true },
      ],
      title: 'Wat Zom Kham',
      localName: 'ဝပ်စွမ်ခမ်း · ᩅᩢ᩠ᨯᨧᩬᨾᨤᩣᩴ · วัดจอมคำ',
      subtitle:
        "The eternal golden crown of Keng Tung and one of its most ancient pagodas — a guardian stupa said to enshrine six sacred hair relics of Gautama Buddha, foretold by the Buddha himself above the Kyaing Tong valley.",
    },
    facts: {
      pills: [
        { label: 'Traditional Founding', value: 'Sasana Era 157' },
        { label: 'Founded By', value: 'Five Tung Ga Hermits' },
        { label: 'Architectural Lineage', value: 'Tai Khün · Lanna · Shan' },
        { label: 'Summit Elevation', value: 'Zom Kham Ridge · 829m' },
      ],
    },
    quickNav: {
      label: 'Jump to Section:',
      items: ['Chronology & Relics', 'Archival Gallery', 'Festivals & Rites', 'Visit & Directions'],
    },
    history: {
      eyebrow: 'Sacred Chronicle',
      title: 'How Wat Zom Kham Came to Be',
      description:
        'Wat Zom Kham is both the pride of Keng Tung and one of its most ancient historic pagodas — its founding preserved in the city\'s earliest records and in the stone inscriptions kept at the pagoda itself.',
      quickFacts: [
        { label: 'Traditional Founding', value: 'Sasana Era 157' },
        { label: 'Founded By', value: 'Five Tung Ga Hermits' },
        { label: 'Original Name', value: 'Swan San Zedi' },
      ],
      sections: [
        {
          heading: "The Buddha's Prophecy",
          paragraphs: [
            'When Gautama Buddha visited this region, the entire Keng Tung valley is said to have been a great lake, with only seven high points left dry — one of which was Swan San Kone Taung, the hill where this pagoda now stands.',
            "Traveling with 49 arahant disciples, the Buddha bestowed six sacred hair relics upon a brother-and-sister pair of nagas, prophesying that in 150 years a great city where the Buddha's Sasana would flourish would arise here. He foretold that four hermits would come from the north to dry the lake, and instructed that the six hair relics be enshrined — and a pagoda built — upon the dry hill of Swan San Kone Taung.",
          ],
        },
        {
          heading: 'The Five Hermits and the Founding of Swan San Zedi',
          paragraphs: [
            "Fulfilling the Buddha's prophecy, five hermits led by the hermit Tung Ga enshrined the six hair relics around Sasana Era year 157, raising a stupa with a base of 3 lan 2 taung and a height of 5 lan in the traditional units recorded on the pagoda's own inscriptions. They named it Swan San Zedi — a founding recorded both in Keng Tung's earliest history and in the stone inscriptions kept at the pagoda itself.",
          ],
        },
        {
          heading: '2018: The Full Gold Robe Offering and Buddha Consecration',
          paragraphs: [
            'In 2018, with the blessing of the State Ovadacariya, the Sayadaw of Nagar Nhit Kaung Monastery, and the Deputy Chairman of the State Sangha Maha Nayaka Committee, the Loi Ling Sayadaw Dr. Bhaddanta Pyinnyananda, military and civil officials led by Commander-in-Chief Senior General Min Aung Hlaing joined local ethnic communities and donors to offer a full gold robe to the pagoda, holding a grand Buddha Consecration and water-pouring merit-sharing ceremony.',
          ],
        },
        {
          heading: '2024–2025: A New Gold Robe',
          paragraphs: [
            'On 11 June 2024, the family of State Administration Council Chairman Senior General Min Aung Hlaing donated 30 kyat-tha of pure gold toward a new full gold robe for the pagoda. On 18 October 2024, officials led by Triangle Region Military Command Commander Major General Soe Hlaing discussed the offering and signed the contract for the work.',
            'Combined with donations from ethnic communities and other donors, the gold robe offering began on 1 November 2024 and was completed on 31 January 2025.',
          ],
        },
      ],
      readMoreCta: 'Read Full History',
      readLessCta: 'Show Less',
    },
    audio: {
      title: 'Listen to the History',
      play: 'Play',
      pause: 'Pause',
      credit: 'Narrated as an act of merit by Maung Kyaw Linn Htet.',
    },
    gallery: {
      eyebrow: 'Visual Archive & Photographic Record',
      title: 'Photo Gallery',
      photoCount: (count) => `${count} Photo${count === 1 ? '' : 's'}`,
      albums: [
        {
          eyebrow: 'Community Offering',
          title:
            'For the offering of a full gold robe to Wat Zom Kham, the family of the President of the Republic of the Union of Myanmar, President U Min Aung Hlaing and his wife Daw Kyu Kyu Hla, donated thirty kyat-tha of pure gold, received by the respective Gopaka trustee committees',
          caption: 'A ceremonial handover of the donated gold at Wat Zom Kham, received by the Gopaka trustee committee.',
        },
      ],
    },
    rituals: {
      eyebrow: 'Annual Observances',
      title: 'Sacred Festivals of Wat Zom Kham',
      description:
        'Wat Zom Kham hosts two major annual observances rooted in Keng Tung tradition — a months-long gold robe offering culminating in a grand Buddha Consecration, and the Thadingyut lighting festival.',
      festivals: [
        {
          cycle: 'Annual · Multi-Month Observance',
          period: 'Late October – Late January',
          title: 'Full Gold Robe Offering & Buddha Consecration',
          description:
            'Each year, the offering of a full gold robe to Wat Zom Kham traditionally begins around the end of Thadingyut or the start of Tazaungmon (late October to early November) and concludes in late January with a grand Buddha Consecration (Anekazatin) ceremony.',
          checklistHeading: 'How the Observance Unfolds',
          checklist: [
            'Robe-offering donations and preparations begin around Thadingyut / Tazaungmon (Oct–Nov).',
            'Devotees and donors continue offerings through the following months.',
            'A grand Buddha Consecration (Anekazatin) ceremony closes the observance in late January.',
          ],
          nextObservance: 'Late Oct – Late Jan (Lunar Calendar)',
          statusBadge: 'Public Participation Welcome',
        },
        {
          cycle: 'Annual · Full Moon of Thadingyut',
          period: 'Full Moon of Thadingyut (October)',
          title: 'Thadingyut Lighting Festival',
          description:
            'Around the full moon of Thadingyut each year, devotees light candles and oil lamps across the pagoda courtyard, with local religious associations holding their own offering ceremonies.',
          checklistHeading: 'Merit-Making Procedure',
          checklist: [
            'Bring candles or oil lamps to the pagoda courtyard around the Thadingyut full moon.',
            'Join the lamp- and candle-lighting offering with fellow devotees.',
            'Participate in ceremonies held by local religious associations.',
          ],
          nextObservance: 'Full Moon of Thadingyut (Lunar Calendar)',
          statusBadge: 'Public Participation Welcome',
        },
      ],
    },
    location: {
      eyebrow: 'Visit & Directions',
      title: 'Find the Pagoda',
      description:
        'Wat Zom Kham stands beside Naung Tung Lake in Ward 4 of Keng Tung town — easy to reach on foot, by bicycle, or by taxi.',
      addressLabel: 'Address',
      address: 'Wat Zom Kham, Ward 4, near Naung Tung Lake, Keng Tung (Kyaingtong), Shan State, Myanmar',
      coordinatesLabel: 'Coordinates',
      hoursLabel: 'Visiting Hours',
      hours: '5:30 AM – 8:30 PM Daily',
      streetView: 'Street',
      satelliteView: 'Satellite',
      viewMapCta: 'View on Google Maps',
      directionsCta: 'Get Directions',
    },
    closing: {
      text: '"Buddhasasanam ciram titthatu" — may the Buddha\'s Sasana long endure.',
      cta: 'Explore the Directory',
    },
  },
  maharMyatMuni: {
    meta: { title: 'Maha Myat Muni Pagoda and Historic Pagodas' },
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
        { label: 'Enshrined', value: '1921' },
        { label: 'Centennial', value: '2021' },
      ],
    },
    quickNav: {
      label: 'Jump to Section:',
      items: ['History', 'Photo Gallery', '360° View', 'Living Traditions', 'Board of Trustees', 'Visit & Directions'],
    },
    history: {
      eyebrow: 'Historical Summary',
      title: 'How the Great Pagoda Came to Be',
      quickFacts: [
        { label: "Pagoda's Title", value: 'Maha Myat Muni Pagoda' },
        { label: 'Year Enshrined', value: '1283 ME (1921 CE)' },
        { label: "Pagoda's Patron", value: 'Saopha Sao Kawng Kiao Intaleng' },
      ],
      sections: [
        {
          heading: 'Background of the Sacred Image',
          paragraphs: [
            "During the lifetime of the Gautama Buddha, a king of immense power and pride named Phara Sunbu — also called Zambudipati — grew so arrogant that he believed no ruler surpassed him, and refused to pay homage even to the Buddha himself.",
            "One day, the Buddha manifested his power by donning five royal regalia even greater than the king's own and seated himself upon a royal throne in full majesty. Witnessing this, King Zambudipati was overcome with awe — his hair stood on end — and upon realizing that a being of far greater glory than himself existed in the world, his pride gave way, and he bowed before the Buddha in devotion.",
            "While the Buddha remained seated in this crowned and regally adorned form, the King of Dhanyawaddy and his people cast a likeness of him as a sacred image — the very first of its kind to be enshrined and worshipped. It came to be known through the ages as the Rakhine (Arakan) Buddha, or the Maha Myat Muni image, a name by which it is still called today.",
          ],
        },
        {
          heading: 'How the Idea Came to Keng Tung',
          paragraphs: [
            "Many years later, word of the glory and power of the Maha Myat Muni image had spread as far as Keng Tung in Eastern Shan State. In 1269 ME (1908 CE), Saopha Sao Kawng Kiao Intaleng of Keng Tung — a great patron of the pagoda — wishing for the Buddha's teachings to endure and shine like the sun and moon, consulted with sincere devotion with the chief Sayadaw of the monastic order (based at Kyaing Ngan Monastery) and the monks, as well as the pagoda's patrons throughout the town. Together they resolved, with the aim of sustaining the Buddha's teachings for five thousand years, to enshrine and worship a Maha Myat Muni image of their own.",
          ],
        },
        {
          heading: 'Casting in Mandalay and the Journey to Keng Tung',
          paragraphs: [
            "To have a Maha Myat Muni image cast in the five sacred metals, Saopha Sao Kawng Kiao Intaleng of Keng Tung, in 1282 ME (1921 CE), sent two senior officials of his court, U Hpo Myin and U Banya Hpara Wat, to Mandalay with instructions to have the image cast. In 1283 ME, Sayagyi U Sit, a sculptor residing at Four House Row west of the old Mandalay railway station, together with his apprentices, undertook the casting, following the exact likeness of the Maha Myat Muni image of Mandalay. From the neck to the crown of the head, the image contained pure gold weighing one peiktha and seventy kyat-tha, and pure silver weighing seventeen peiktha, while the copper, bronze, and craftsmanship were paid for with fifteen thousand (15,000) old silver rupees exactly. Of this sum, Sir Sao Chey, the Saopha of Hsipaw, generously contributed half the cost.",
            "At that time, no motor road yet existed between Hsipaw and Keng Tung, so the image was disassembled into sections and carried onward, resting for a time at Hsipaw. It was then loaded onto ox carts, and Sir Sao Chey, Saopha of Hsipaw, took responsibility for transporting it with the labour of the people and ox carts as far as the western bank crossing of the Salween River at Tako. Likewise, no motor road yet connected Keng Tung to the Tako crossing of the Salween. Saopha Sao Kawng Kiao Intaleng of Keng Tung personally organised the effort, gathering villagers along the route, and through great hardship over many stages of the journey — using both manpower and buffalo carts — carried the sacred image onward with heartfelt devotion.",
            "Before the image crossed from the Salween River at Tako into Keng Tung, the entire population of the town turned out with drums and gongs resounding, erecting a ceremonial pavilion at the iron bridge over the Nam Khun stream on the town's western edge to joyfully welcome its arrival. From there, the crowds processed the image into the town amid great festivity, and it was kept for one Vassa retreat in a temporary hall built of thatch roofing and bamboo-matted walls at Khon Kwaing Sun — now the town's football ground — in the heart of Keng Tung, where it was venerated by the faithful.",
          ],
        },
        {
          heading: 'Building and Renovating the Monastery Hall',
          paragraphs: [
            "In 1288 ME (Sasana Era 2470), when the vihara monastery hall was first built, the roof was of an ordinary style covered in teak planks, the ceiling was made of plank boards, and the monastery compound was enclosed on all four sides by a brick wall. That same year, the image was carried from its temporary shelter to the throne within the newly completed vihara hall. Led by the pagoda's great patron, Saopha Sao Kawng Kiao Intaleng, a grand robe-offering ceremony known as the squirrel-fur robe (weaving) offering was organised to present a golden robe to the Maha Myat Muni image: beginning on the 14th waxing day of Tazaungmon in 1288 ME, the robe was woven through the night, and by noon on the 15th waxing day it was completed and offered to the assembled monks, along with the ceremonial water-pouring to share the merit. In the weaving of this robe, fibres drawn from the stems of lotus buds that had grown naturally in a pond were spun and woven upon the loom.",
            "In 1300 ME, Mahadevi Sao Nang Kya Nyunt, the devoted chief consort of Kyaing Ngan Palace, consulted with local architects and had the vihara hall renovated: the old teak-plank roofing was removed and replaced with corrugated zinc sheets, built up into a tiered pyatthat-style spire, and finished with a coat of marine varnish.",
            "In 1303 ME (1942 CE), as the Second World War approached Keng Tung, and with administrative authority at that time in the hands of the British military officer Captain Robert, Mahadevi Sao Nang Kya Nyunt of Kyaing Ngan Palace, wishing to move the Maha Myat Muni image's regalia — its crown and epaulettes set with gems — to a place of safety, entrusted them to Captain Robert along with the jewelled ceremonial ornaments customarily used to adorn the Saopha of Keng Tung's elephants during festival processions. Captain Robert took charge of them and had them sent to the treasury in Taunggyi for safekeeping. During the course of the war, it could never be clearly established whether these two sets of valuables deposited in the Taunggyi treasury were carried off to India by British forces, or lost amid the ravages of war — and so the pagoda's precious jewels were lost for good during the Second World War.",
            "During 1308–1310 ME, the hall was renovated once again: a hti (umbrella finial) was placed atop the roof of the vihara hall, ornamental tin corner-pieces were fitted to the four corners of the tiered spire's eaves, and the brick wall enclosing the monastery compound was removed and replaced with an iron fence, in the form seen today. In 1311 ME, the plank ceiling of the hall was removed and replaced with four-foot square cement tiles, finished and gilded with gold leaf. In addition, around the interior walls, scenes from roughly ten of the Buddha's birth-story Jataka tales were rendered and gilded with gold leaf, and the names of the donors who sponsored this work were also inscribed on a stone plaque.",
          ],
        },
      ],
      readMoreCta: 'Read Full History',
      readLessCta: 'Show Less',
    },
    audio: {
      title: 'Listen to the History',
      play: 'Play',
      pause: 'Pause',
      credit: 'Narrated as an act of merit by Maung Kyaw Linn Htet.',
    },
    shanHistory: {
      title: 'History of Maha Myat Muni Pagoda — in Gone Shan',
      description: 'The history of Maha Myat Muni Pagoda can also be read in the Gone Shan language.',
    },
    panorama360: {
      eyebrow: 'Immersive View',
      title: '360° View of the Shrine Hall',
      description:
        'Step inside the gilded shrine hall and look around in every direction, from the enshrined Buddha image to the carved, gilded pillars.',
      cta: 'View in 360°',
      hint: 'Drag to look around · Scroll or pinch to zoom',
    },
    gallery: {
      eyebrow: 'Visual Archive',
      title: 'Photo Gallery',
      photoCount: (count) => `${count} Photo${count === 1 ? '' : 's'}`,
      albums: [
        {
          eyebrow: 'Centennial Ceremony',
          title: 'Ruby Crown, Gold Umbrella & Buddha Consecration for the 100th Anniversary',
          date: 'February 15, 2022',
          caption:
            "The grand ceremony marking the 100th anniversary of Maha Myat Muni Pagoda — the pride of Keng Tung, Eastern Shan State — including the offering of a ruby-and-diamond crown (Yadana Sein Hpondaw) and a gold umbrella (Shwehti), together with the Buddha Consecration (Anekazatin) grand ceremony, was held on the morning of the full moon day of Tabodwe, Sasana Year 2565, Kawza Era 1383. Presiding over the ceremony were the Sayadaws and members of the Sangha led by the chief Nayaka of Kyaing Yin Monastery in Keng Tung, Agga Maha Saddhamma Jotikadhaja Bhaddanta Khemasara.\n\nThe ceremony was attended by the Chairman of the State Administration Council and (then) Prime Minister — now State President — Senior General Min Aung Hlaing, together with his wife Daw Kyu Kyu Hla and family members; State Administration Council members Lieutenant General Moe Myint Tun, U Sai Lone Hsai, and U Shwe Kyin; Union Ministers Lieutenant General Tun Tun Naung, U Ko Ko, U Hla Moe, Dr. Nyunt Phay, and Dr. Thet Khaing Win; Shan State Chief Minister Dr. Kyaw Tun; State Administration Council Chairman's Advisory Body member Dr. Daw Yin Yin Nwe; Commander-in-Chief (Navy) Admiral Moe Aung and his wife; Commander-in-Chief (Air) General Tun Aung and his wife; senior Tatmadaw officers from the Office of the Commander-in-Chief and their wives; Triangle Region Military Command Commander Major General Myo Min Tun and responsible officials; invited guests, sincere donors, officers, soldiers and their families, monastic associations, local ethnic residents, and traditional cultural associations.",
        },
        {
          eyebrow: 'Vassa Season Ritual',
          title: 'Morning Alms Offering (Aruna Hsun)',
          caption:
            'A record of the morning collective alms-offering (Aruna Hsun) to the monks, held at Maha Myat Muni Pagoda in Keng Tung on the full moon and new moon days during the Vassa retreat.',
        },
        {
          eyebrow: 'Full Moon & New Moon',
          title: 'Dhammacakka Sutta Recitation',
          caption:
            'Inside the Gandhakuti monastery hall of Maha Myat Muni Pagoda, devotional groups chant the Dhammacakka Sutta in the Shan language on every full moon and new moon day.',
        },
        {
          eyebrow: 'Full Moon of Kason',
          title: 'Bodhi Tree Watering Festival at Maha Myat Muni',
          caption: 'A record of the Bodhi tree watering festival (Nyaung Ye Thun) held at Maha Myat Muni Pagoda.',
        },
      ],
    },
    beliefs: {
      eyebrow: 'Distinctive Features & Devotion',
      title: 'Living Traditions & Festivals',
      items: [
        {
          title: 'Annual Pagoda Festival',
          description:
            "On the full moon of Tazaungmon in 1312 ME (1950 CE), Saopha Sao Sai Long Khemadipati of Keng Tung, together with royal relatives and the pagoda's lay patrons, offered four ceremonial umbrellas at the temple entrance and a great alms-offering to 85 monks at 6:00 AM, sealed with the ceremonial water-pouring to share merit. Since that year, the full moon of Tazaungmon has been observed without interruption as the Maha Myat Muni Pagoda Festival.",
        },
        {
          title: 'Morning Alms Offering at the Palace',
          description:
            'Each year on the full moon of Tazaungmon, the Saophas lead the public in inviting monks to receive the morning alms-offering (Aruna Hsun) within the palace (Haw).',
        },
        {
          title: 'Face-Washing Ceremony',
          description:
            'On every full moon and new moon day, at 5:30 in the morning, the traditional face-washing ceremony is performed for the Maha Myat Muni image.',
        },
        {
          title: 'Bodhi Tree Watering Ceremony',
          description:
            "Each year on the full moon of Kason, the Bodhi tree near the pagoda is honored with a watering ceremony: the first rite is held inside the Gandhakuti monastery hall, and the watering itself takes place at the Bodhi tree's monastery compound (Wat Pha Kyauk).",
        },
        {
          title: 'Quarterly Protective Chanting',
          description:
            'Once every three months, on the full moon evening at 6:00, a gathering of 200 monks recites the protective Paritta chants for freedom from danger inside the Gandhakuti monastery hall.',
        },
        {
          title: 'Monthly Dhammacakka Recitation',
          description:
            'On the 2nd waxing and 2nd waning day of every month, at 2:00 in the afternoon, the Dhammacakka Sutta is recited and offered in the Shan language.',
        },
        {
          title: 'Centennial Celebration',
          description:
            'Having stood for a full century, 2021 marked the 100th anniversary of the Keng Tung Maha Myat Muni Pagoda.',
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
      groupSayadaw: 'Sayadaws — Great Preceptors of the Sangha',
      groupOldBoard: 'Old Board',
      groupNewBoard: 'New Board',
      groupNayaka: 'Nayaka Patrons',
      groupLeadership: 'Chairperson & Vice Chairpersons',
      groupOthers: 'Executive Committee & Members',
    },
    location: {
      eyebrow: 'Visit & Directions',
      title: 'Find the Pagoda',
      description:
        'Maha Myat Muni Pagoda stands in the heart of Keng Tung town, a short walk from Naung Tung Lake — easy to reach on foot, by bicycle, or by taxi.',
      addressLabel: 'Address',
      address: 'Maha Myat Muni Pagoda, near Naung Tung Lake, Keng Tung (Kyaingtong), Shan State, Myanmar',
      coordinatesLabel: 'Coordinates',
      hoursLabel: 'Visiting Hours',
      hours: '4:30 AM – 8:00 PM Daily',
      streetView: 'Street',
      satelliteView: 'Satellite',
      viewMapCta: 'View on Google Maps',
      directionsCta: 'Get Directions',
    },
    otherPagodas: {
      eyebrow: 'Continue Your Pilgrimage',
      title: 'Other Sacred Sites in Keng Tung',
      description:
        'Maha Myat Muni is one of several historic pagodas and monastic compounds around Keng Tung worth visiting — explore the others below.',
      viewAll: 'View All Pagodas',
    },
    closing: {
      text: '"Buddhasasanam ciram titthatu" — may the Buddha\'s Sasana long endure.',
      cta: 'Explore the Directory',
    },
  },
  yarzamuni: {
    meta: { title: 'Yarzamuni — Abhaya Raza Muni Buddha Image, Keng Tung' },
    hero: {
      badges: [{ label: 'Pan Kwai Village Landmark' }],
      title: 'Yarzamuni',
      localName: 'Abhaya Raza Muni Buddha Image',
      subtitle:
        'A 72-foot seated Buddha image in the Abhaya mudra of fearlessness, rising above Pan Kwai village east of Keng Tung — consecrated in 2018 under the patronage of the Defence Services.',
    },
    quickNav: {
      label: 'Jump to Section:',
      items: ['History', 'Visit & Directions'],
    },
    facts: {
      pills: [
        { label: 'Total Height', value: '72 ft (≈22 m)' },
        { label: 'Construction Began', value: 'October 2016' },
        { label: 'Consecration', value: 'January 30, 2018' },
        { label: 'Location', value: 'Pan Kwai Village' },
      ],
    },
    history: {
      eyebrow: 'Historical Summary',
      title: 'How the Abhaya Raza Muni Image Came to Be',
      description:
        'The great Abhaya Raza Muni Buddha image was built and consecrated in Pan Kwai village east of Keng Tung within the span of two years, under the direct patronage of the Defence Services.',
      quickFacts: [
        { label: 'Pedestal Height', value: '18 ft' },
        { label: 'Image Height', value: '54 ft' },
        { label: 'Designed By', value: 'Prof. U Zaw Than Htut' },
      ],
      sections: [
        {
          heading: 'Design & Construction',
          paragraphs: [
            'Construction of the great Abhaya Raza Muni Buddha image, enshrined in Pan Kwai village, Keng Tung township, Eastern Shan State, began in October 2016. Standing 72 feet in total height — a courtyard 180 feet wide, an 18-foot pedestal, and a 54-foot image — the design was drawn up by Professor U Zaw Than Htut of the University of Culture (Mandalay) together with the Directorate of Military Engineering, and approved by the Commander-in-Chief of the Defence Services.',
          ],
        },
        {
          heading: 'Relic Enshrinement & Buddha Consecration',
          paragraphs: [
            'The relic enshrinement and Buddha Consecration (Anekazatin) ceremony was held on 30 January 2018, attended by senior military and civil officials led by Commander-in-Chief of the Defence Services Senior General Min Aung Hlaing, together with donors.',
          ],
        },
      ],
    },
    audio: {
      title: 'Listen to the History',
      play: 'Play',
      pause: 'Pause',
      credit: 'Narrated as an act of merit by Maung Kyaw Linn Htet.',
    },
    location: {
      eyebrow: 'Visit & Directions',
      title: 'Find the Pagoda',
      description:
        'The Abhaya Raza Muni Buddha image stands in Pan Kwai village, a short drive east of Keng Tung town, and is open to visitors at any hour.',
      addressLabel: 'Address',
      address: 'Abhaya Raza Muni Buddha Image, Pan Kwai Village, Keng Tung Township, Shan State, Myanmar',
      coordinatesLabel: 'Coordinates',
      approximateLabel: 'Approximate location',
      hoursLabel: 'Visiting Hours',
      hours: 'Open 24 Hours',
      streetView: 'Street',
      satelliteView: 'Satellite',
      viewMapCta: 'View on Google Maps',
      directionsCta: 'Get Directions',
    },
    closing: {
      text: '"Buddhasasanam ciram titthatu" — may the Buddha\'s Sasana long endure.',
      cta: 'Explore the Directory',
    },
  },
  datSamLoei: {
    meta: { title: 'Dhat Zom Doi Pagoda — The Hair Relic Shrine of Miang Larn' },
    hero: {
      badges: [
        { label: 'Hair Relic Shrine · Founding Legend' },
        { label: 'Active Pilgrimage Site', pulsingDot: true },
      ],
      title: 'Dhat Zom Doi Pagoda',
      localName: 'ဓါတ်စွမ်လွဲဘုရား (ကမ္ဘာအေးဘုရား)',
      subtitle:
        "A hair-relic stupa on a hillside above Miang Larn where the Buddha himself is said to have prophesied Keng Tung's founding — the pagoda whose design later inspired Yangon's own Kaba Aye Pagoda.",
    },
    facts: {
      pills: [
        { label: 'Traditional Founding', value: 'Maha Sakaraj Era 115' },
        { label: 'Founded By', value: 'Kant Eik Un & Wife' },
        { label: 'Sacred Relics', value: '4 Hair Relics' },
        { label: 'Location', value: 'Miang Larn, Keng Tung' },
      ],
    },
    quickNav: {
      label: 'Jump to Section:',
      items: ['History & Legend', '360° View', 'Photo Gallery', 'Visit & Directions'],
    },
    history: {
      eyebrow: 'Sacred Legend',
      title: 'How Dhat Zom Doi Pagoda Came to Be',
      description:
        'In Miang Larn village group, Keng Tung township, Dhat Zom Doi Pagoda — also known as Kaba Aye Pagoda — was founded in Maha Sakaraj Era 115 by the villagers Kant Eik Un and his wife, who tradition holds received four sacred hair relics from the Buddha himself.',
      quickFacts: [
        { label: 'Traditional Founding', value: 'Maha Sakaraj Era 115' },
        { label: 'Founded By', value: 'Kant Eik Un & Wife' },
        { label: 'Also Known As', value: 'Kaba Aye Pagoda' },
      ],
      sections: [
        {
          heading: "The Buddha's Visit and the Naming of Miang Larn",
          paragraphs: [
            'At the time this pagoda was first founded, the site of present-day Keng Tung was still a great flooded lake, with only small hillside villages scattered above the waterline.',
            'While touring the eastern lands with his monks to deliver beings from suffering, Gautama Buddha passed over this hill, where the villagers Kant Eik Un and his wife were cutting wood. The couple offered the Sangha, led by the Buddha, the rice parcels and honey they had carried with them.',
            "After the Buddha accepted the offering of honey and rice, Venerable Ananda went to wash the alms bowl in the stream east of where the pagoda now stands — an act the Shan call 'lan'. In memory of this, the stream became known as Nam Lan Chaung and the village as Miang Larn. The Buddha foretold that this region would one day become the site of flourishing towns and villages.",
          ],
        },
        {
          heading: 'Four Hair Relics and the Upturned-Basket Stupa',
          paragraphs: [
            "After the meal, the Buddha rubbed his head and bestowed four hair relics upon Kant Eik Un, charging him with enshrining them in a stupa. Not knowing how a stupa should be built, Kant Eik Un asked the Buddha for guidance, and was told to shape it after the winnowing basket he had carried with him, turned upside down.",
            'Kant Eik Un and his wife gathered stones from the Nam Lan stream and chose a fitting site. The hair relics were placed inside a bamboo tube, the bamboo tube inside a gold tube, and the gold tube inside a silver tube, then sealed in a stone casket together with gold, silver, and gems, and buried seven cubits deep — with the upturned-basket-shaped stupa raised above.',
          ],
        },
        {
          heading: 'The Guardian Wind Vent',
          paragraphs: [
            'To keep the enshrined gold and relics safe from thieves, arahants together with the guardian spirits are said to have installed a wind-vent mechanism at an opening in the pagoda\'s northwest corner. No umbrella spire containing iron, bronze, or other metal can be raised over the pagoda — should one be installed, wind rushing from the vent tears it loose.',
            'The bronze bell and umbrella spire now hung at the pagoda\'s eastern portico were recast and reinstalled after the originals, raised during a ceremony on the full moon of Nayon in Myanmar Era 1315, were torn down by the wind vent that same night.',
            'Objects or scraps of monastic robe thrown into that opening are said to be carried up into the sky within about a minute. To prevent any mishap, the vent was sealed roughly 65 years ago by the Gon sect\'s presiding Sayadaw together with the pagoda\'s resident Sayadaw.',
          ],
        },
        {
          heading: "Prime Minister U Nu and Yangon's Kaba Aye Pagoda",
          paragraphs: [
            "After Myanmar's independence, Prime Minister U Nu, flying to Keng Tung, caught sight of Dhat Zom Doi Pagoda from the air. Once in Keng Tung, he visited and admired the pagoda, taking careful note of its design.",
            "U Nu is said to have carried that impression back to Yangon, where he built the Kaba Aye Pagoda on what is now Kaba Aye Pagoda Road — modeled on the pagoda he had seen at Keng Tung. For this reason, Dhat Zom Doi Pagoda is also widely known today as Kaba Aye Zedi.",
          ],
        },
        {
          heading: 'Sacred Signs and the Guardian Nagas',
          paragraphs: [
            "On full moon and new moon nights, star-shaped rays of light are said to radiate from the diamond bud at the pagoda's summit.",
            'On the terrace at the southern corner stand two dragon (naga) figures, heads turned toward the courtyard, carved decades ago by a resident Sayadaw. Around 65 years ago, a caretaker Sayadaw found algae, pond-scum, and lotus leaves clinging to the stone dragons despite there being no water nearby — and found them clinging again after each clearing. Taking this as a sign that the figures housed living naga spirits rather than ordinary carvings, the Sayadaw had them cut into segments rather than left whole, a precaution still visible in the statues today.',
          ],
        },
      ],
      readMoreCta: 'Read Full History',
      readLessCta: 'Show Less',
    },
    audio: {
      title: 'Listen to the History',
      play: 'Play',
      pause: 'Pause',
      credit: 'Narrated as an act of merit by Maung Kyaw Linn Htet.',
    },
    panorama360: {
      eyebrow: 'Immersive View',
      title: '360° Courtyard Panorama',
      description:
        'Step into the pagoda courtyard and look around in every direction, from the red-and-gold shrine hall to the surrounding hills.',
      cta: 'View in 360°',
      hint: 'Drag to look around · Scroll or pinch to zoom',
    },
    gallery: {
      eyebrow: 'Visual Archive & Photographic Record',
      title: 'Photo Gallery',
      photoCount: (count) => `${count} Photo${count === 1 ? '' : 's'}`,
      albums: [
        {
          eyebrow: 'Architecture',
          title: 'The Pagoda Hall, Seen from the Courtyard',
          caption:
            'The tiered red-and-gold roof and naga-flanked stairway of the pagoda hall, crowned with a gilded spire.',
        },
        {
          eyebrow: 'Architecture',
          title: 'Another View of the Pagoda Hall',
          caption: 'A second angle of the shrine hall, showing its gilded relief carvings and covered stairway entrances.',
        },
        {
          eyebrow: 'Shrine Hall',
          title: 'Inside the Gilded Shrine Hall',
          caption:
            "The main Buddha image inside the pagoda's red-and-gold shrine hall, its walls patterned with a thousand small Buddha images.",
        },
        {
          eyebrow: 'Devotion',
          title: 'The Enshrined Buddha Image and Attendant Figures',
          caption:
            'The gilded seated Buddha image enshrined inside the pagoda, flanked by standing Buddha images and statues of the Sangha.',
        },
        {
          eyebrow: 'Sacred Bell',
          title: "The Pagoda's Bronze Gong",
          caption: 'The bronze gong hanging at the pagoda terrace, with the Miang Larn valley and hills spreading out below.',
        },
      ],
    },
    location: {
      eyebrow: 'Visit & Directions',
      title: 'Find the Pagoda',
      description:
        'Dhat Zom Doi Pagoda sits on a hillside in Miang Larn village group, Keng Tung township, reachable by road from town.',
      addressLabel: 'Address',
      address: 'Dhat Zom Doi (Kaba Aye) Pagoda, Miang Larn Village Group, Keng Tung Township, Shan State (East)',
      coordinatesLabel: 'Coordinates',
      hoursLabel: 'Visiting Hours',
      hours: 'Open Daily, Dawn to Dusk',
      streetView: 'Street',
      satelliteView: 'Satellite',
      viewMapCta: 'View on Google Maps',
      directionsCta: 'Get Directions',
    },
    closing: {
      text: '"Buddhasasanam ciram titthatu" — may the Buddha\'s Sasana long endure.',
      cta: 'Explore the Directory',
    },
  },
  satuRatthaSumingala: {
    meta: { title: 'Satu Rattha Sumingala Pagoda — The Buried Buddhas of Luaymel' },
    hero: {
      badges: [
        { label: 'Buried Buddha Images · Military-Era Founding' },
        { label: 'Active Pilgrimage Site', pulsingDot: true },
      ],
      title: 'Satu Rattha Sumingala Pagoda',
      localName: 'စတုရဋ္ဌသုမင်္ဂလစေတီတော်',
      subtitle:
        'A 45-foot golden stupa rising above Luaymel village group, raised on a former army outpost where five Buddha images were unearthed beneath a decades-old sand-mound shrine.',
    },
    facts: {
      pills: [
        { label: 'Traditional Founding', value: '1990–91' },
        { label: 'Sponsored By', value: 'Senior General Than Shwe' },
        { label: 'Summit Height', value: '45 ft' },
        { label: 'Location', value: 'Luaymel, Keng Tung' },
      ],
    },
    quickNav: {
      label: 'Jump to Section:',
      items: ['History & Legend', '360° View', 'Photo Gallery', 'Visit & Directions'],
    },
    history: {
      eyebrow: 'Sacred History',
      title: 'How Satu Rattha Sumingala Pagoda Came to Be',
      description:
        'In Luaymel village group, Keng Tung township, Satu Rattha Sumingala Pagoda grew from a small army-outpost shrine into a 45-foot golden stupa, after soldiers clearing the site in 1990 uncovered five Buddha images buried beneath it.',
      quickFacts: [
        { label: 'Traditional Founding', value: 'Myanmar Era 1351–52' },
        { label: 'Sponsored By', value: 'Senior General Than Shwe' },
        { label: 'Original Site', value: '1960 Sand-Mound Stupa' },
      ],
      sections: [
        {
          heading: 'Founding on an Army Outpost',
          paragraphs: [
            'Luaymel village group, in Keng Tung township, is home to more than ten ethnic communities — Akha, Lahu, Shan-Chinese, Shan Li Shaw, Loi, Wa, Bamar, and others — spread across 38 villages. In 1960, under the Revolutionary Council, Infantry Battalion No. 3 was first stationed here.',
            "At the time, Buddhist practice in the area was overshadowed by other beliefs. With an aspiration that all beings — human, spirit, and brahma — on the Luaymel hill be freed from suffering, the battalion's families raised a small sand-mound stupa in its place.",
          ],
        },
        {
          heading: 'The Buried Buddha Images and a Grand New Stupa',
          paragraphs: [
            'Over the following decades, one battalion after another was stationed at the outpost. In 1990, acting commander of Infantry Battalion No. 226, Colonel Soe Win — later Prime Minister and Senior General — arrived at the post. Clearing the brush that had overgrown the old sand-mound stupa left by Battalion No. 3, his soldiers uncovered five Buddha images buried at the site.',
            'Moved by the discovery, State Peace and Development Council Chairman Senior General Than Shwe sponsored the construction of a 45-foot stupa on the site — the Satu Rattha Sumingala Pagoda. Its foundation-laying ceremony began on 19 October 1990 (2nd waxing of Tazaungmon, Myanmar Era 1351), received by the monks Bhaddanta Khemasara of Kyaing Yin Monastery, Bhaddanta Arzeya of Dhammodaya Monastery, and Bhaddanta Zawtika of Ho Khon Monastery, with military and civil officials and the people of Keng Tung in attendance. Construction was completed on 7 April 1991 (9th waning of late Tagu, Myanmar Era 1352).',
          ],
        },
        {
          heading: 'A Year of Building',
          paragraphs: [
            'In little over a year, the pagoda precinct took shape around the 45-foot stupa: four assembly halls, four small shrine porches, four thrones, twelve zodiac pillars, a 168-foot covered lamp corridor, a flagpole, two small ponds, four satellite stupas, a corner-shrine throne, a bell-bearer statue, and an inscription-stone pavilion.',
          ],
        },
        {
          heading: 'Gold Robes and the Diamond Finial',
          paragraphs: [
            'On 20 February 2014, the pagoda received the offering of a full gold robe. Then, at 6:30 am on 13 May 2014 — Tuesday, the full moon of Kason, Myanmar Era 1376 — a grand ceremony offered a diamond finial, a sacred bird ornament, and a gold umbrella spire, capped by a Buddha Consecration (Anekazatin).',
            'A further gold robe offering was contracted on 10 December 2024, began on 26 December 2024, and was completed on 8 March 2025. Today, Satu Rattha Sumingala Pagoda stands with its 45-foot stupa, four satellite stupas, and four assembly halls, actively worshipped by pilgrims.',
          ],
        },
      ],
      readMoreCta: 'Read Full History',
      readLessCta: 'Show Less',
    },
    audio: {
      title: 'Listen to the History',
      play: 'Play',
      pause: 'Pause',
      credit: 'Narrated as an act of merit by Maung Kyaw Linn Htet.',
    },
    panorama360: {
      eyebrow: 'Immersive View',
      title: '360° Courtyard Panorama',
      description:
        'Step into the pagoda courtyard and look around in every direction, from the golden stupa to the red-and-gold shrine halls.',
      cta: 'View in 360°',
      hint: 'Drag to look around · Scroll or pinch to zoom',
    },
    gallery: {
      eyebrow: 'Visual Archive & Photographic Record',
      title: 'Photo Gallery',
      photoCount: (count) => `${count} Photo${count === 1 ? '' : 's'}`,
      albums: [
        {
          eyebrow: 'Architecture',
          title: 'The Golden Stupa in Morning Mist',
          caption: 'The 45-foot stupa and its flanking shrine halls wrapped in morning fog.',
        },
        {
          eyebrow: 'Architecture',
          title: "The Pagoda's Guardian Gate",
          caption:
            'The gilded entrance arch, flanked by a pair of lion (chinthe) guardian statues, framing the golden stupa beyond.',
        },
      ],
    },
    location: {
      eyebrow: 'Visit & Directions',
      title: 'Find the Pagoda',
      description:
        'Satu Rattha Sumingala Pagoda sits on a hillside in Luaymel village group, Keng Tung township, reachable by road from town.',
      addressLabel: 'Address',
      address: 'Satu Rattha Sumingala Pagoda, Luaymel Village Group, Keng Tung Township, Shan State (East)',
      coordinatesLabel: 'Coordinates',
      hoursLabel: 'Visiting Hours',
      hours: 'Open Daily, Dawn to Dusk',
      streetView: 'Street',
      satelliteView: 'Satellite',
      viewMapCta: 'View on Google Maps',
      directionsCta: 'Get Directions',
    },
    closing: {
      text: '"Buddhasasanam ciram titthatu" — may the Buddha\'s Sasana long endure.',
      cta: 'Explore the Directory',
    },
  },
  khemaRattha: {
    meta: { title: 'Khema Rattha Prophecy Buddha — The Standing Buddha of Swam Sat Kone' },
    hero: {
      badges: [
        { label: 'Ancient Manuscript · 1995 Excavation' },
        { label: 'Active Pilgrimage Site', pulsingDot: true },
      ],
      title: 'Khema Rattha Prophecy Buddha',
      localName: 'ခေမရဋ္ဌဗျာဒိတ်တော်ပေးရပ်တော်မူဘုရားကြီး',
      subtitle:
        "A 67-foot golden standing Buddha, hand raised in a gesture of prophecy, rising from Swam Sat Kone hill where 1995 excavations unearthed centuries of Buddhist relics beneath the ruins of an ancient monastery.",
    },
    facts: {
      pills: [
        { label: 'Traditional Founding', value: '1995 Excavation' },
        { label: 'Consecrated', value: '30 April 1998' },
        { label: 'Standing Height', value: '67 ft 6 in' },
        { label: 'Location', value: 'Ward 1, Keng Tung' },
      ],
    },
    quickNav: {
      label: 'Jump to Section:',
      items: ['History & Legend', '360° View', 'Photo Gallery', 'Visit & Directions'],
    },
    history: {
      eyebrow: 'Sacred History',
      title: 'How the Khema Rattha Prophecy Buddha Came to Be',
      description:
        'On Swam Sat Kone hill in Ward 1, Keng Tung, the Khema Rattha Prophecy Buddha rose from a 1995 excavation that uncovered ancient Buddha images, burial relics, and a centuries-old palm-leaf manuscript recording the hill\'s long Buddhist history.',
      quickFacts: [
        { label: 'Excavation Began', value: '6 June 1995' },
        { label: 'Consecrated', value: '30 April 1998' },
        { label: 'Manuscript Verified By', value: 'Department of Archaeology' },
      ],
      sections: [
        {
          heading: 'Discovery on Swam Sat Kone',
          paragraphs: [
            "On 6 June 1995, U Kyaw Min, station chief of the Department of Meteorology and Hydrology on Swam Sat Kone hill in Ward 1, Keng Tung, was digging a pit when he uncovered ancient Buddha images and burial relics. Monks and lay devotees soon gathered to venerate the find as a 'self-revealed' Buddha image.",
            'On the morning of 30 July 1995, State Law and Order Restoration Council Vice-Chairman and Deputy Commander-in-Chief General Maung Aye, together with Council Secretary (2) Lieutenant-General Tin Oo, visited the ancient Buddha image on Swam Sat Kone. General Maung Aye directed that the site be excavated further and that supporting historical evidence be sought, while Lieutenant-General Tin Oo directed that the unearthed items be properly catalogued and preserved.',
          ],
        },
        {
          heading: 'The Ancient Manuscript',
          paragraphs: [
            'On the evening of 20 July 1995, U Sai Mote Tit of Waw Kut village allowed officials to copy an ancient palm-leaf manuscript, handed down through his family, recording the history of the Swam Sat Kone stupas and monastery. Department of Archaeology researcher U Min Way confirmed the manuscript as a genuine record of Swam Sat\'s history; Sayadaw Bhaddanta Arzeya of Dhammodaya Monastery and Sayadaw Bhaddanta Pyinnyathami of Tuyar Monastery each examined the copy that same night.',
            'The manuscript recounts that after Sayadaw U Wunna left for another country, his disciple Shin Kaw Ri Ya was ordained by the local donors and became abbot of a simple monastery of brick-footed posts, a thatched roof, and plank walls and floor. In Sakkaraj 767, Shin Kaw Ri Ya and the donors together built a stupa; by Sakkaraj 770 no monk remained to reside there. Around Sakkaraj 775, a Thai monk arrived by way of Laos carrying five rubies gifted by a Lao chief, each said to hold its own singular power. With the donors\' agreement, he enshrined the rubies in a new stupa named Swam Sat Pattamya Zedi. The Keng Tung Sawbwa built his own stupa nearby — carving a tiger figure into its stairway and naming it Yaza Aung Myin Zedi — while the wider public, moved by devotion, raised 28 satellite stupas of their own.',
          ],
        },
        {
          heading: 'A Warning Ignored',
          paragraphs: [
            'The manuscript also preserves a warning attributed to the Thai monk: that after his passing, later generations must watch over the stupas — and that if no one would care for them, his own stupa should rather be destroyed than let its five powerful rubies fall into the hands of the wicked.',
            'According to the manuscript, villagers of Waw Naik, La, and Pha Yan asked a destitute wanderer known as Kyaung Hair, or Musay, whether he dared destroy the stupas. He answered that he could not do it alone, but could with five or six companions — so the villagers told him to gather them and proceed. The stupas were torn down. The manuscript records that within months, everyone in that group fell ill, suffered severe dysentery, and died. Its closing dedication urges Buddhists never to destroy the stupas they venerate, but to cherish and protect them always.',
          ],
        },
        {
          heading: "The Mission's Arrival",
          paragraphs: [
            'The manuscript also preserves an account, given by U Lonta of Kaingkhon village during the reign of Sawbwa Sao Kawng Kyawk, of a Christian mission\'s arrival in Keng Tung. On 10 February 1912, a missionary reached the town and asked the Sawbwa for land to rest at temporarily while trading, requesting the high ground of Swam Sat where the ruins of an old monastery stood. Asked how much land was needed, the missionary asked only for as much as a single hide could cover; the Sawbwa granted enough ground for one hut, and the missionary was overjoyed.',
            'At the time, the ruined monastery still stood with forty posts, along with quantities of brick tile and rubble. The mission\'s party pulled out the old posts and burned them; three people died during the work, and others fell too ill to rise — a detail the manuscript records as confirming the site\'s true identity as the ancient monastery.',
            'Elsewhere in the manuscript, the Tang Yan-born chronicler Saw Na Ying appeals in old Shan script to those who would come after him: that no one should take the good high ground of Swam Sat, however many fine things stood upon it, and that none of it should be taken or destroyed.',
          ],
        },
        {
          heading: 'Six Centuries of Sacred Ground',
          paragraphs: [
            'The manuscript\'s own chronology places the Anawrahta Zedi\'s founding by a Myanmar king during Sayadaw U Wunna\'s abbotship, in Sakkaraj 733–766 — a period, historians note, that overlapped war between the Myanmar and Yodaya (Thai) kingdoms, context worth weighing when reading its account of vows and undertakings from that time.',
            'Taken together, the manuscript places 623 years of continuous Buddhist significance on Swam Sat Kone: resident monks and a Myanmar king\'s Anawrahta Zedi; Shin Kaw Ri Ya and the donors\' Mahasiri Zedi; the Thai monk and donors\' Swam Sat Pattamya Zedi; the Keng Tung Sawbwa\'s Yaza Aung Myin Zedi; and the public\'s own 28 satellite stupas — earning the hill its name, Maha Swam Sat Kone Myay, the great Buddha-Sasana ground.',
          ],
        },
        {
          heading: 'A New Standing Buddha',
          paragraphs: [
            'In June and July 1995, staff of the Department of Meteorology and Hydrology digging on Swam Sat Kone uncovered further ancient Buddha images and burial relics. Officials who examined the finds concluded the hill had historically been Sasana land, and resolved to enshrine a standing Buddha image there — both so that the Theravada Sasana might shine like the sun and moon, and to ward off and pacify every manner of danger.',
          ],
        },
        {
          heading: 'Consecration in Stages',
          paragraphs: [
            'The Khema Rattha Prophecy Buddha was consecrated in stages by Triangle Region Military Command Commander Colonel Thein Sein and regional officials, following scriptural precedent and Myanmar tradition, at auspicious times: ground purification on 22 January 1998 (9th waxing of Pyatho, Myanmar Era 1359); the foundation-digging ceremony on the 10th waxing of Tabodwe, Myanmar Era 1359, led by the State Peace and Development Council (Eastern) Chairman, Triangle Region Military Command Commander Colonel Thein Sein (retired); the jewel foundation-laying ceremony performed by nine city Sayadaws on 30 April 1998 (5th waxing of Kason, Myanmar Era 1360); and a grand Buddha Consecration (Anekazatin), with a celebratory almsgiving of fresh rice to the Sangha, on 19 February 2000 (full moon of Tabodwe, Myanmar Era 1361).',
            'The completed image stands 67 feet 6 inches from sole to crown, on a 7-foot lotus throne, with a 6-foot chest width and an 18-foot forehead diadem weighing one viss of gold. From its founding through completion, it was raised through the donated labor of soldiers and Keng Tung\'s ethnic communities, alongside gold robe offerings in 2006, 2007, and 2008 totaling 350 lakh kyats.',
          ],
        },
        {
          heading: 'Gold Robes, 2024–2025',
          paragraphs: [
            'On 11 June 2024, the family of State Administration Council Chairman Senior General Min Aung Hlaing donated 30 kyat-tha of pure gold toward a new full gold robe for the image. On 18 October 2024, Triangle Region Military Command Commander Major General Soe Hlaing and officials discussed and signed the contract for the work.',
            'Combined with donations from ethnic communities and other donors, the gold robe offering began on 10 November 2024 and was completed on 26 February 2025. The Khema Rattha Prophecy Buddha stands today at 67 feet 6 inches, its lotus throne 7 feet high, its chest 6 feet wide, and its forehead diadem 18 feet long and weighing one viss of gold.',
          ],
        },
      ],
      readMoreCta: 'Read Full History',
      readLessCta: 'Show Less',
    },
    audio: {
      title: 'Listen to the History',
      play: 'Play',
      pause: 'Pause',
      credit: 'Narrated as an act of merit by Maung Kyaw Linn Htet.',
    },
    panorama360: {
      eyebrow: 'Immersive View',
      title: '360° Statue Plaza Panorama',
      description:
        'Step onto the plaza before the Khema Rattha Prophecy Buddha and look around in every direction, from the golden standing image to the surrounding pagoda grounds.',
      cta: 'View in 360°',
      hint: 'Drag to look around · Scroll or pinch to zoom',
    },
    gallery: {
      eyebrow: 'Visual Archive & Photographic Record',
      title: 'Photo Gallery',
      photoCount: (count) => `${count} Photo${count === 1 ? '' : 's'}`,
      albums: [
        {
          eyebrow: 'Gold Robe Offering',
          title: 'Recording the Gold Robe Donation',
          caption:
            "The family of Union President U Min Aung Hlaing and Daw Kyu Kyu Hla donate three kyat-tha of pure gold toward the Khema Rattha Prophecy Buddha's full gold robe, received by the Bahuthathanuppyu Monastery Sayadaw and the pagoda's board of trustees.",
        },
        {
          eyebrow: 'Statue Grounds',
          title: 'Around the Khema Rattha Prophecy Buddha',
          caption: 'The standing Buddha, its inscribed gateway, the prayer-flag pole, and the bronze bell on the hilltop terrace.',
        },
        {
          eyebrow: 'Archaeological Finds',
          title: 'Relics Unearthed from the Earlier Pagoda',
          caption:
            'When the ground was dug to build the Prophecy Buddha, relics of the earlier pagoda were recovered — votive tablets, gold-leaf offerings, cowrie shells, pottery, and jewelry, now kept on display.',
        },
      ],
    },
    location: {
      eyebrow: 'Visit & Directions',
      title: 'Find the Pagoda',
      description:
        'Khema Rattha Prophecy Buddha stands on Swam Sat Kone hill in Ward 1, Keng Tung, reachable by road from town.',
      addressLabel: 'Address',
      address: 'Khema Rattha Prophecy Buddha, Swam Sat Kone, Ward 1, Keng Tung, Shan State (East)',
      coordinatesLabel: 'Coordinates',
      hoursLabel: 'Visiting Hours',
      hours: 'Open Daily, Dawn to Dusk',
      streetView: 'Street',
      satelliteView: 'Satellite',
      viewMapCta: 'View on Google Maps',
      directionsCta: 'Get Directions',
    },
    closing: {
      text: '"Buddhasasanam ciram titthatu" — may the Buddha\'s Sasana long endure.',
      cta: 'Explore the Directory',
    },
  },
  thattaThattahaMahaBodhi: {
    meta: { title: 'Thatta Thattaha Maha Bodhi Pagoda — The Seven Weeks Stupa of Pan Kwe' },
    hero: {
      badges: [
        { label: 'Mahabodhi-Style Stupa · Sandstone Carving' },
        { label: 'Active Pilgrimage Site', pulsingDot: true },
      ],
      title: 'Thatta Thattaha Maha Bodhi Pagoda',
      localName: 'သတ္တသတ္တာဟ မဟာဗောဓိစေတီတော်မြတ်ကြီး',
      subtitle:
        'A 108-foot sandstone-carved stupa modeled on the Mahabodhi Temple, raised in a Buddha Garden at Pan Kwe village and consecrated over six ceremonies between 2018 and 2023.',
    },
    facts: {
      pills: [
        { label: 'Traditional Founding', value: '2018–2023' },
        { label: 'Consecrated', value: '13 May 2023' },
        { label: 'Summit Height', value: '108 ft' },
        { label: 'Location', value: 'Pan Kwe, Keng Tung' },
      ],
    },
    quickNav: {
      label: 'Jump to Section:',
      items: ['History & Legend', '360° View', 'Photo Gallery', 'Visit & Directions'],
    },
    history: {
      eyebrow: 'Sacred History',
      title: 'How Thatta Thattaha Maha Bodhi Pagoda Came to Be',
      description:
        'In a Buddha Garden compound at Pan Kwe village, Keng Tung township, Thatta Thattaha Maha Bodhi Pagoda rises 108 feet, its sandstone-carved form modeled on India\'s Mahabodhi Temple, raised under the guidance of the Wazipit Sayadaw and consecrated over six ceremonies between 2018 and 2023.',
      quickFacts: [
        { label: 'Spiritual Guidance', value: 'Wazipit Sayadaw' },
        { label: 'Chief Donors', value: 'Senior General Min Aung Hlaing & Family' },
        { label: 'Consecrated', value: '13 May 2023' },
      ],
      sections: [
        {
          heading: 'A Pagoda for All Myanmar Buddhists',
          paragraphs: [
            'Within a Buddha Garden compound at Pan Kwe village, Keng Tung township, Thatta Thattaha Maha Bodhi Pagoda was raised as a place of refuge and devotion for Myanmar\'s Buddhist peoples of every ethnicity — a grand and dignified monument adorned with Myanmar artistry, gathering together the pride, customs, and distinctive character of the nation\'s ethnic communities, so that monks and lay devotees alike might visit and venerate it daily.',
            'Its founders intended it equally to support peace and prosperity and the long-term endurance of the Buddha Sasana in Shan State (East), and to welcome pilgrims from home and abroad — drawing tourism that would open livelihoods and improve the social and economic life of the local ethnic communities.',
          ],
        },
        {
          heading: 'Spiritual Guidance and Sponsorship',
          paragraphs: [
            'The pagoda was raised under the guidance of the Chief Nayaka Sayadaw of Thila Dhamma Kone Thawara Monastery in Keng Tung, Aggamahasaddhammajotikadhaja Bhaddanta Kawvida, known as the Wazipit Sayadaw.',
            'Its chief donors were State Administration Council Chairman, State Prime Minister, and Defence Services Commander-in-Chief Senior General Min Aung Hlaing and his wife Daw Kyu Kyu Hla, together with families of the Army, Navy, and Air Force, devoted donors, and the local ethnic communities, whose combined merit carried the project through six ceremonies over five years.',
          ],
        },
        {
          heading: 'Six Ceremonies, 2018–2023',
          paragraphs: [
            'Following traditional Myanmar Sasana custom and the customary rites for founding a pagoda and consecrating an image, the project proceeded through six ceremonies: ground purification, free of all obstacles, on 12 May 2018; the jewel foundation-pegging ceremony on 15 May 2018; the jewel foundation-laying ceremony on 29 October 2018; the offering of the original and middle relic enshrinements on 13 May 2019; the raising of the final corner finial posts on 25 February 2021; and the offering of the upper relic enshrinement together with the grand Buddha Consecration (Anekazatin) on 13 May 2023.',
          ],
        },
        {
          heading: 'Building the Mahabodhi-Style Stupa',
          paragraphs: [
            "Standing 108 feet tall, the pagoda's gold umbrella spire — 11 feet high and cast in bronze — was gilded and set with pure gold, an array of gems, and white pearls. Both the main stupa and its subsidiary stupas were carved from local sandstone, while the lotus pedestal beneath them was built up in stucco relief.",
            "A seated Buddha image (the Metta Buddha) on the ground floor and a standing image (the Arimetteya Buddha) on the upper level were both cast in bronze, alongside four subsidiary stupas, entrance images at ground level, two standing images on the pedestal, and images in a variety of mudras — the stupa body and its small corner stupas all carved, like the main structure, from local sandstone. The surrounding Maharam wall was raised in stucco relief, and two 27-inch bronze 'peace bells' were cast and hung from stucco pillars.",
            'The work was carried out jointly by officers and soldiers of the Army Commander-in-Chief\'s Office under architect U San Maung; stone-carving specialist Professor U Zaw Than Htut of the National University of Culture and Arts, Mandalay, and his team; retired lecturer and stone-carving specialist U Kyaw Kyaw Lwin of the National University of Culture and Arts, Yangon, and his team; and Myanmar traditional arts specialist U Kyin Thein and his team.',
          ],
        },
        {
          heading: 'Completion in 2023',
          paragraphs: [
            'The pagoda was completed on 13 May 2023 (10th waning of Kason, Myanmar Era 1385), marked by a water-libation ceremony of merit-sharing performed before the assembled Sayadaws and Sangha.',
          ],
        },
      ],
      readMoreCta: 'Read Full History',
      readLessCta: 'Show Less',
    },
    audio: {
      title: 'Listen to the History',
      play: 'Play',
      pause: 'Pause',
      credit: 'Narrated as an act of merit by Maung Kyaw Linn Htet.',
    },
    panorama360: {
      eyebrow: 'Immersive View',
      title: '360° Temple Courtyard Panorama',
      description:
        'Step onto the courtyard before the Mahabodhi-style stupa and look around in every direction, from the sandstone-carved tower to the surrounding grounds.',
      cta: 'View in 360°',
      hint: 'Drag to look around · Scroll or pinch to zoom',
    },
    gallery: {
      eyebrow: 'Visual Archive & Photographic Record',
      title: 'Photo Gallery',
      photoCount: (count) => `${count} Photo${count === 1 ? '' : 's'}`,
      albums: [
        {
          eyebrow: 'Consecration Ceremony',
          title:
            'Photographic Record of the Upper Relic Enshrinement and Gold Umbrella Spire Offering for Thatta Thattaha Maha Bodhi Pagoda in the Buddha Garden Compound, Keng Tung',
          date: '13 May 2023',
          caption: 'Scenes from the ceremony enshrining the upper relics and raising the gold umbrella spire.',
        },
        {
          eyebrow: 'Pagoda Grounds',
          title: 'The Buddha Garden Compound',
          caption: 'Shrines, halls, gateways, and Buddha images across the Buddha Garden compound.',
        },
      ],
    },
    location: {
      eyebrow: 'Visit & Directions',
      title: 'Find the Pagoda',
      description:
        'Thatta Thattaha Maha Bodhi Pagoda stands within a Buddha Garden compound at Pan Kwe village, Keng Tung township, reachable by road from town.',
      addressLabel: 'Address',
      address: 'Thatta Thattaha Maha Bodhi Pagoda, Pan Kwe Village, Keng Tung Township, Shan State (East)',
      coordinatesLabel: 'Coordinates',
      hoursLabel: 'Visiting Hours',
      hours: 'Open Daily, Dawn to Dusk',
      streetView: 'Street',
      satelliteView: 'Satellite',
      viewMapCta: 'View on Google Maps',
      directionsCta: 'Get Directions',
    },
    closing: {
      text: '"Buddhasasanam ciram titthatu" — may the Buddha\'s Sasana long endure.',
      cta: 'Explore the Directory',
    },
  },
  swamKyeimShweHsanTaw: {
    meta: { title: 'Swam Kyeim Shwe Hsan Taw Pagoda — The Golden Hair Relic Pagoda' },
    hero: {
      badges: [
        { label: 'Three Hair Relics · Gone Shan Legend' },
        { label: 'Active Pilgrimage Site', pulsingDot: true },
      ],
      title: 'Swam Kyeim Shwe Hsan Taw Pagoda',
      localName: 'စွမ်ကြိမ်ရွှေဆံတော်မြတ်စေတီ',
      subtitle:
        "A great stupa enshrining three of the Buddha's own hair relics, raised by a farming family on a hill above Swam Kyeim village after the Buddha himself, disguised as an alms-seeking monk, revealed his identity and blessed them.",
    },
    facts: {
      pills: [
        { label: 'Traditional Founding', value: 'Undated (Gone Shan Legend)' },
        { label: 'Founded By', value: 'The Tampula Family' },
        { label: 'Sacred Relics', value: '3 Hair Relics' },
        { label: 'Location', value: 'Swam Kyeim, Maing Pyin' },
      ],
    },
    quickNav: {
      label: 'Jump to Section:',
      items: ['History & Legend', 'Visit & Directions'],
    },
    history: {
      eyebrow: 'Sacred Legend',
      title: 'How Swam Kyeim Shwe Hsan Taw Pagoda Came to Be',
      description:
        'Above Swam Kyeim village in Maing Pu Un village group, Swam Kyeim Shwe Hsan Taw Pagoda enshrines three hair relics said to have been given directly by the Buddha to a farming family he encountered on an alms round — its history preserved only in a Gone Shan manuscript, with no year recorded.',
      quickFacts: [
        { label: 'Source', value: 'Gone Shan Manuscript' },
        { label: 'Founded By', value: 'The Tampula Family' },
        { label: 'Sacred Relics', value: '3 Hair Relics' },
      ],
      sections: [
        {
          heading: "The Farming Family and the Buddha's Visit",
          paragraphs: [
            "This pagoda's history comes down only through a Gone Shan manuscript, consulted and retold here — and since that record carries no year, none can be given for the pagoda's founding. Long ago, a family of the Tampula people — a husband and wife with a young daughter and son, four in all — made their living farming the land at the foot of the hill where the pagoda now stands.",
            "One day the couple rose before dawn, cooked rice and curry, and went out to the fields. When the two children woke and found their parents gone, they called out across the field: 'Mother, Father — we're hungry, we want to eat!' The couple broke off their work and came back to the hut to wash before the meal. Just as they were about to eat, a monk arrived unannounced on his alms round, and without hesitation the family offered him all the rice and curry they had prepared for themselves. Having never before encountered so radiant a monk, they felt only joy and rapture at having been able to give.",
          ],
        },
        {
          heading: 'Three Hair Relics and the First Enshrinement',
          paragraphs: [
            "The monk was no ordinary monk. He blessed the family himself and declared: 'I am the Buddha without equal, the Fully Awakened One, who alone has broken through, unaided, to see with perfect clarity the whole of what is to be known.' Realizing they stood before the great compassionate one who had come to deliver the three realms — of nats, of humans, and of brahmas — the family pressed their palms together and cried 'Sadhu' three times.",
            "Moved by great compassion for them, the Buddha reached up, drew three hairs from his own head with his hand, and gave them to the family. He told them that the untouched hill nearby — where, in a past life, a hermit named Tampula had once dwelt, a hill that Sakka himself had shaped — was a fitting place to enshrine the relics 'so that pilgrims from every direction, without number, may come to venerate them.' He instructed them to build a stupa there and enshrine the relics inside it, then departed.",
          ],
        },
        {
          heading: "Sakka's Night Visit and the Growing Stupa",
          paragraphs: [
            'That same day, the couple carried the hairs up the hill as the Buddha had instructed, chose a fitting spot, dug three cubits down, and enshrined them. Returning to their hut expecting to cook, they found the pot already full of rice and curry — the whole family marveled. At dawn the next morning, they were astonished again to see the hilltop glowing gold.',
            'On the night of the enshrinement, Sakka himself descended, placed the three hairs in a diamond casket, and re-enshrined them ten cubits deep at the very same spot — and the stupa itself grew naturally more magnificent and larger. Villagers from the surrounding hamlets, hearing the commotion, looked up at dawn to see the hilltop shining in astonishing golden light.',
          ],
        },
        {
          heading: "The Elephant Herd's Pilgrimage",
          paragraphs: [
            'Word of the pagoda\'s sanctity spread in every direction, drawing humans, nats, brahmas, and other beings to come and pay homage. From time to time rays of light would burst from the hill, deepening the devotion of all who witnessed it, until pilgrims came to venerate it almost daily.',
            'News of it reached even the guardian spirit of Loi Pa Yay hill, and five hundred elephants dwelling on Loi Pa Yay — also known as Suwannashan — set out under their leader to worship the pagoda, arriving on the full moon of Tabaung. Among them was a bull elephant from Loi Sault mountain, who had fallen for a young cow elephant of the Suwannashan herd and followed her all the way to the pagoda.',
            'At the foot of the hill, as the herd paid its respects, the bull searched desperately for his beloved; when the two lovestruck elephants, overcome with desire, caused a great commotion within sight of the pagoda, a peal of thunder rolled across the whole sky. Sakka, witnessing this misconduct at a moment of veneration, struck the pair with lightning. The bull fled, bleeding, and died at Loi Pel Maing Taung; the cow elephant died sometime after — and is said to remain the pagoda\'s guardian spirit to this day.',
          ],
        },
        {
          heading: 'A Lesson in Devotion',
          paragraphs: [
            "The legend holds this as a lesson: any being who comes to the pagoda without sincerity and without patience risks a fate like the two elephants'. But anyone who performs meritorious deeds at Shwe Hsan Taw Pagoda with a sincere heart, it is said, will see their wishes fulfilled without fail.",
          ],
        },
        {
          heading: 'Village and Geography',
          paragraphs: [
            'Swam Kyeim Shwe Hsan Taw Pagoda stands in Swam Kyeim village, Maing Pu Un village group, ringed by thirteen ironwood trees, some 12 miles from Maing Pyin (Mong Ping) town. The Nam Pu and Nam Wun streams meet nearby to form the Nam Pin, which flows past the foot of the pagoda\'s hill.',
          ],
        },
        {
          heading: 'Sights, Restoration, and Local Lore',
          paragraphs: [
            'Around the pagoda, large stones shaped like elephants in various forms still stand today. The pagoda has been maintained across generations through the combined efforts of the monks of Swam Kyeim village monastery, local villagers, and devoted donors.',
            'Local tradition holds that this may be the pagoda the Buddha foretold in his prophecy of Keng Tung during his twelfth year after enlightenment, arriving at Maing Pyin town, Maing Pu Un village group, as the Shwe Hsan Taw Pagoda meant to deliver beings there. The young cow elephant, it is said, did not truly die — she remains to this day as a large boulder, split down the middle, in the rice field east of the pagoda. A footprint left on a boulder is said to mark where the Tampula couple\'s young son once stood crying out for food. Villagers say pigs cannot be raised in Swam Kyeim, as the pagoda\'s guardian spirit disfavors unclean offerings. And during the Buddhist Lent, large fish are said to come to the Nam Pin stream at the foot of the hill to pay the pagoda homage.',
          ],
        },
      ],
      readMoreCta: 'Read Full History',
      readLessCta: 'Show Less',
    },
    audio: {
      title: 'Listen to the History',
      play: 'Play',
      pause: 'Pause',
      credit: 'Narrated as an act of merit by Maung Kyaw Linn Htet.',
    },
    location: {
      eyebrow: 'Visit & Directions',
      title: 'Find the Pagoda',
      description:
        'Swam Kyeim Shwe Hsan Taw Pagoda stands on a hill above Swam Kyeim village, Maing Pu Un village group, roughly 12 miles from Maing Pyin (Mong Ping) town.',
      addressLabel: 'Address',
      address:
        'Swam Kyeim Shwe Hsan Taw Pagoda, Swam Kyeim Village, Maing Pu Un Village Group, near Maing Pyin (Mong Ping), Shan State (East)',
      coordinatesLabel: 'Coordinates',
      approximateLabel: 'Approximate location',
      hoursLabel: 'Visiting Hours',
      hours: 'Open Daily, Dawn to Dusk',
      streetView: 'Street',
      satelliteView: 'Satellite',
      viewMapCta: 'View on Google Maps',
      directionsCta: 'Get Directions',
    },
    closing: {
      text: '"Buddhasasanam ciram titthatu" — may the Buddha\'s Sasana long endure.',
      cta: 'Explore the Directory',
    },
  },
  shweOhnDaingMin: {
    meta: { title: 'Shwe Ohn Daing Min Pagoda — The Golden Peacock King Pagoda' },
    hero: {
      badges: [
        { label: 'Seven Restorations · Ashoka-Era Legend' },
        { label: 'Active Pilgrimage Site', pulsingDot: true },
      ],
      title: 'Shwe Ohn Daing Min Pagoda',
      localName: 'သမိုင်းဝင်ရွှေဥဒေါင်းမင်းစေတီတော်',
      subtitle:
        'A hilltop stupa named for a past-life peacock king, said to have been first raised by Emperor Ashoka and rebuilt across seven restorations spanning the Bagan, Konbaung, and modern eras.',
    },
    facts: {
      pills: [
        { label: 'Traditional Founding', value: 'Sasana Era 218–225' },
        { label: 'Founded By', value: 'Emperor Ashoka (Legend)' },
        { label: 'Restorations', value: '7 Recorded' },
        { label: 'Location', value: 'Yan Mine, Maing Khat' },
      ],
    },
    quickNav: {
      label: 'Jump to Section:',
      items: ['History & Legend', 'Photo Gallery', 'Visit & Directions'],
    },
    history: {
      eyebrow: 'Sacred Legend',
      title: 'How Shwe Ohn Daing Min Pagoda Came to Be',
      description:
        'On a hill above Yan Mine village, Maing Khat township, Shwe Ohn Daing Min Pagoda takes its name from a past life in which the Buddha-to-be lived and died on this hill as a peacock king — and has been founded, lost, and restored across seven recorded phases from Emperor Ashoka\'s reign to 2018.',
      quickFacts: [
        { label: 'Founded By', value: 'Emperor Ashoka (Legend)' },
        { label: 'Restorations', value: '7 Recorded' },
        { label: 'Latest Gold Umbrella', value: '1 March 2018' },
      ],
      sections: [
        {
          heading: 'Named for a Peacock King',
          paragraphs: [
            'Shwe Ohn Daing Min Pagoda stands on a hill near Yan Mine village, Maing Khat township, at approximate map reference LK-334284. In earlier times the hill was known as Mawya Giri hill, or in Shan as Loi Nan Yon Kham; in Myanmar, Shwe Ohn Daing (\'Golden Peacock King\') hill.',
            'The name comes from a tradition that while the young Gautama Buddha was still fulfilling the perfections as a bodhisatta, he lived on this hill in the form of a peacock king, and that upon his death he was buried here. To this day, on full moon and new moon nights, when all is quiet, peacocks are said to come to the hill and dance in their natural way as an offering to the pagoda.',
          ],
        },
        {
          heading: "First: Emperor Ashoka's Founding",
          paragraphs: [
            'In Sasana Era 218, King Siridhammasoka ascended the throne in the kingdom of Pataliputra — a mighty ruler consecrated as universal emperor of the whole of Jambudipa, his authority said to reach one yojana below the earth and one yojana into the sky. In Sasana Era 225, he retrieved the relics enshrined in the Dhatunidhana Pagoda at Rajagriha, built by King Ajatasattu, and with them raised 84,000 pagodas and 84,000 ponds across Jambudipa.',
            'In doing so, guided by the sasana\'s guardian spirits, he sought out sites the Buddha himself had prophesied, and places where the bodhisatta had once fulfilled the perfections in a past existence. This hill — where the bodhisatta peacock king had lived and been laid to rest — was one such place, and it was here, under the guardian spirits\' guidance, that Ashoka founded Shwe Ohn Daing Min Pagoda.',
            'At the foot of the hill lies one of the 84,000 ponds, known in Shan as Naung Mo and in Myanmar as Kya Kan Taw, the Lotus Pond. At the pagoda\'s founding, an aspiration was made that lotuses should bloom abundantly there whenever future restorers of the pagoda arose, or whenever the Sasana was flourishing. In 2002, the pond\'s lotuses bloomed abundantly — the first time in twenty years.',
          ],
        },
        {
          heading: "Second Restoration: King Alaungsithu's Gold Umbrella",
          paragraphs: [
            'In the Bagan era, Myanmar Era 454, King Alaungsithu of Arimaddanapura ascended the throne — a mighty king who traveled the length and breadth of his realm building pagodas, reaching as far as the Malay Peninsula, Sri Lanka, the tip of Jambudipa, and China. Journeying by royal raft across his kingdom, he came near Shwe Ohn Daing Min hill.',
            'The hill\'s guardian spirit halted the royal raft and appealed to the king, explaining that this sacred hill was where the bodhisatta peacock king had once fulfilled the perfections, and that the pagoda Ashoka had raised here had since fallen into ruin — asking that it be restored. The king granted the guardian spirit\'s request, cleared the ruined pagoda, built it anew, and offered a new gold umbrella spire on the second day after the full moon of Thadingyut.',
          ],
        },
        {
          heading: "Third Restoration: Commander U Nat's Rebuilding",
          paragraphs: [
            'In the Konbaung era, more than 200 years ago, a combined column of Myanmar troops under commander U Nat, together with soldiers of the Thenni and Maing Pon Sawbwas, camped near Shwe Ohn Daing Min hill. At night, rays of light were seen streaming from the hilltop; by day, golden peacocks flew in and danced — extraordinary sights that led U Nat to question the local people.',
            'They told him of a ruined pagoda on the hill, and of the old tradition, passed down through generations, that the bodhisatta had once lived there as a peacock king, and that the pagoda had been restored in stages by Emperor Ashoka and King Alaungsithu. United Shan and Myanmar soldiers together with local villagers cleared the overgrown ruin, rebuilt the pagoda, and offered a new gold umbrella on the second day of the Myanmar new year. Two large lion statues were also carved on the pagoda\'s eastern side.',
          ],
        },
        {
          heading: 'The Maha Myat Muni Replica',
          paragraphs: [
            "Once the restoration and gold umbrella offering were complete, commander U Nat found himself missing his home capital, and longing to see the great Maha Myat Muni image enshrined there. So he had a brick-and-stucco image built near the hill, matching the Maha Myat Muni image in design and scale, and raised a golden monastery hall to house it. Local people to this day call this image 'Maung Nat Bayar' — 'Mr. Nat's Buddha' — and old mural paintings on its walls can still be seen.",
            'Behind the image\'s throne are two small square openings, which local tradition holds were made to commemorate two royal brothers once sealed within the brick structure. The original wooden monastery hall has since been replaced by local donors with a new building; no separate historical record of the image itself has yet been found.',
          ],
        },
        {
          heading: 'Fourth Restoration: The British-Era Rebuilding and the Lost Chicks',
          paragraphs: [
            'More than 100 years ago, in the British colonial era, a large village called Wan Hi stood west of Pha Laing village, Maing Khat township, at approximate map reference LK-351277. Its people had migrated from Thenni town in northern Shan State, and the village was governed by a widow, Daw Nan Twi Yaung, a relative of the Thenni Sawbwa\'s line.',
            'Chicks kept by the villagers repeatedly went missing. One day Daw Nan Twi Yaung saw a large bird carry off three chicks from her own household, and followed its flight path, together with fellow villagers, all the way to Shwe Ohn Daing Min hill. There, atop a tree that had grown up through the ruined pagoda, they found the three chicks playing safely.',
            'Around the pagoda they were astonished to find every chick their village had ever lost, being fed and cared for like a parent by a wild civet. On the hill, crows too were seen playing together in evident affection, and nearby a hermit sat in meditation. Concluding that this was no ordinary hill but one where loving-kindness itself dwelt, Daw Nan Twi Yaung led the villagers to petition the hermit for help restoring the ruined pagoda. The hermit recounted its history, guided the restoration, and a new gold umbrella was offered.',
          ],
        },
        {
          heading: "Fifth Restoration: A Son's Devotion",
          paragraphs: [
            'Under the Revolutionary Council, Maing Khat township headman U Shwe Won governed jointly with the regional army. During his tenure, three ancient Buddha images from the Maha Myat Muni monastery that commander U Nat had built at Yan Mine village went missing, and village leader U Taya reported the loss to the township head. With the army\'s help, the three images were found near Wan Tapin village; U Taya of Yan Mine was summoned to receive them back, but for fear they might be stolen again, they were instead kept in the township head\'s own care.',
            'When U Shwe Won retired due to old age, it troubled him deeply that he had never been able to return the three images to their rightful place. Under the People\'s Council, in 1980, during its second term, his son U Aik Lop became chairman of Wan Khut village group, Maing Khat township. To fulfill his father\'s wish, he organized fundraising among the villages of Wan Khut, Kwan Mon, Pha Laing, Pin Nin, Maing Hnun, and Yan Mine, and restoration began in 1981.',
            'Clearing the ruin, the workers found a lead inscription donated by commander U Nat, recording the pagoda\'s name in Shan as \'Htat Hwe Hine.\' Once restored, the three Buddha images were enshrined once more, together with silver ceremonial vessels. No new gold umbrella was offered this time — a stone umbrella was used in its place. The bell\'s lower fittings kept their original form, with the restoration work beginning roughly at the bell\'s midpoint. The pagoda then stood 19 cubits tall, and the work was completed in 1982.',
          ],
        },
        {
          heading: 'Sixth Restoration: The 2002 Comprehensive Rebuilding',
          paragraphs: [
            'Under the State Peace and Development Council, in 2002, military strategy commander Colonel Soe Thein was stationed at Maing Khat. At that time the pagoda at Yan Mine village had, through earthquake and natural wear, tilted eastward and stood near collapse.',
            'The pagoda repeatedly showed rays of light; peacocks that had long vanished from the hill returned to pay it homage; and lotuses that had disappeared from the pond for twenty years bloomed once more. Moved by these signs, local people petitioned Colonel Soe Thein to restore the pagoda. He inspected it himself and confirmed that restoration was genuinely needed.',
            'Under the guidance of local Sayadaws, he assigned Maing Khat Township Peace and Development Council chairman U Ko Ko Aung and department officials their respective duties, and restoration began on 13 June 2002. Members of the Union Solidarity and Development Association, other community associations, government staff, and local ethnic communities worked together in unity, and the restoration was completed successfully on 18 November 2002.',
            'The original pagoda had stood 19 cubits tall; enclosing that original structure, the new work raised it to 27 cubits. The public donated money and materials, while the gold umbrella itself was offered by Colonel Soe Thein and his wife, Daw Than Chit, and their family. On 25 November 2002, a grand ceremony unveiled the pagoda\'s rediscovered history and celebrated the new gold umbrella offering, together with a Buddha Consecration (Anekazatin) festival.',
          ],
        },
        {
          heading: 'Seventh Restoration: The 2018 Rebuilding',
          paragraphs: [
            'On the full moon of Tabodwe, Sasana Era 2561 (Myanmar Era 1379), this ancient and historic pagoda underwent its seventh comprehensive restoration, guided by Bhaddanta Khaymeinda of the Theravada Buddha Sasana Propagation (Central) Monastery, Maing Khat, and led by Triangle Region Military Command Commander Brigadier General Aung Zaw Aye, Strategic Command (Base) Maing Khat Strategy Commander Colonel Thurein Tun, and Maing Khat Township Administrator U Zaw Min Han.',
            'With 21.5 million kyats raised from donors organized by birth weekday, the work offered new gold umbrella spires, a new flagpole, two new lion statues, a new monastery hall, a pond and monastic quarters, a full gold robe offering, a renovated lotus platform, images honoring the four directions, a newly tiled courtyard, a new Maharam wall, a renovated pavilion, a new stairway, the excavation of the historic pond, and a new access road for pilgrims.',
            'Work began on Saturday, 6 January 2018, and concluded with a grand ceremony raising the new gold umbrella finial on Thursday, 1 March 2018.',
          ],
        },
      ],
      readMoreCta: 'Read Full History',
      readLessCta: 'Show Less',
    },
    audio: {
      title: 'Listen to the History',
      play: 'Play',
      pause: 'Pause',
      credit: 'Narrated as an act of merit by Maung Kyaw Linn Htet.',
    },
    gallery: {
      eyebrow: 'Visual Archive & Photographic Record',
      title: 'Photo Gallery',
      photoCount: (count) => `${count} Photo${count === 1 ? '' : 's'}`,
      albums: [
        {
          eyebrow: 'Hilltop Pagoda',
          title: 'Shwe Ohn Daing Min Pagoda, Viewed from the Courtyard',
          caption:
            'The gilded stupa and its cluster of smaller pagodas, seen from the surrounding courtyard on the hill above Yan Mine village.',
        },
      ],
    },
    location: {
      eyebrow: 'Visit & Directions',
      title: 'Find the Pagoda',
      description: 'Shwe Ohn Daing Min Pagoda stands on a hill near Yan Mine village, Maing Khat township.',
      addressLabel: 'Address',
      address: 'Shwe Ohn Daing Min Pagoda, Yan Mine Village, Maing Khat Township, Shan State (East)',
      coordinatesLabel: 'Coordinates',
      approximateLabel: 'Approximate location',
      hoursLabel: 'Visiting Hours',
      hours: 'Open Daily, Dawn to Dusk',
      streetView: 'Street',
      satelliteView: 'Satellite',
      viewMapCta: 'View on Google Maps',
      directionsCta: 'Get Directions',
    },
    closing: {
      text: '"Buddhasasanam ciram titthatu" — may the Buddha\'s Sasana long endure.',
      cta: 'Explore the Directory',
    },
  },
  maingHnunNeeBayar: {
    meta: { title: 'Maing Hnun Nee Bayar Pagoda — The Bamboo-Woven Buddha Image' },
    hero: {
      badges: [
        { label: 'Woven from Bamboo Strips · Myanmar Era 700' },
        { label: 'Active Pilgrimage Site', pulsingDot: true },
      ],
      title: 'Maing Hnun Nee Bayar Pagoda',
      localName: 'မိုင်းနှုန်းနှီးဘုရားစေတီတော်',
      subtitle:
        'A Buddha image woven entirely from split bamboo strips at the direction of Sayadaw Maha Gunanda Thera, raised at Pakan village in Myanmar Era 700 after a mysterious old weaver appeared, completed the sacred image overnight, and vanished without a trace.',
    },
    facts: {
      pills: [
        { label: 'Founded', value: 'Myanmar Era 700' },
        { label: 'Material', value: 'Woven Bamboo Strips' },
        { label: 'Annual Festival', value: 'Kason Full Moon' },
        { label: 'Location', value: 'Pakan, Maing Khat' },
      ],
    },
    quickNav: {
      label: 'Jump to Section:',
      items: ['History & Legend', '360° View', 'Visit & Directions'],
    },
    history: {
      eyebrow: 'Sacred Legend',
      title: 'How Maing Hnun Nee Bayar Pagoda Came to Be',
      description:
        'At Pakan village, one of 45 villages once governed from Maing Khat by town chief U Khan Shan, revered Sayadaw Maha Gunanda Thera was moved by a dream to have a Buddha image woven entirely from bamboo strips — a form, Sakka told him, that did not yet exist among Myanmar\'s gold, silver, bronze, and wooden images.',
      quickFacts: [
        { label: 'Founded', value: 'Myanmar Era 700' },
        { label: 'Material', value: 'Woven Bamboo Strips' },
        { label: 'Gandhakuti Renovation', value: '2023' },
      ],
      sections: [
        {
          heading: "The Sayadaw's Dream",
          paragraphs: [
            'Around Myanmar Era 700 — before Maing Khat had yet emerged as a township in its own right — 42 large villages and 3 small ones, 45 in all, were governed by town chief U Khan Shan (known in Shan as Pha Khan Shan), who appointed two samada deputies, village elder U Shan Nan as his right hand and samada elder U Shan Nan (a namesake) as his left.',
            'Among these 45 villages, at Pakan village, lived Sayadaw Maha Thera Upalan — known in Myanmar as Ashin Maha Gunanda Thera — a monk revered across the entire Maing Hnun region, teaching scripture to 164 disciple monks in residence. Accomplished in scriptural learning, practice, and realization, and regarded by the whole region as an arahant, he was fluent even in Magadhi, the language said to be understood by all beings, and devas and Sakka themselves were said to come pay him homage for his virtue, concentration, and wisdom.',
            'In his 58th year, the Sayadaw had a dream: Myanmar had Buddha images cast in gold, silver, and bronze, and carved from wood, but none yet woven from bamboo strips. In the dream, Sakka, king of the devas, came to the Sayadaw and asked him to have such an image made.',
            'The next morning, the Sayadaw summoned town chief U Khan Shan and the two samada deputies, U Shan Nan and U Shan Nan, related his dream, and proposed that a bamboo-woven Buddha image be made and enshrined. The chief and the village elders agreed. The Sayadaw then gave detailed instructions: the bamboo must be cut from stalks one year old, free of blemish, with well-spaced joints, cut to a length of three-and-a-half cubits; and those who cut and gathered it must be genuine unmarried young men and women, among whom those bearing the names Shwe (gold), Ngwe (silver), Kyauk (gem-stone), and Shan should be specially chosen.',
          ],
        },
        {
          heading: 'Cutting and Preparing the Bamboo',
          paragraphs: [
            'On the 8th waxing day of Nadaw, Myanmar Era 700, the bamboo-cutting began. Before setting out, the 57 chosen young men and women first took the five precepts from the Sayadaw, then cut and gathered fine, sound, one-year-old bamboo of three-and-a-half-cubit lengths in a single day. Stalks that did not meet the standard were set upright in a specially built pavilion, in readiness for the weaving.',
            'On the 8th day after the full moon of Nadaw, Myanmar Era 700, all who would weave the bamboo again took the five precepts from the Sayadaw before the weaving began. Once the strips were split, it was proposed that they be soaked in water — to keep them from drying out before the image was woven, and to protect them from insects over time. In the end all agreed to dig a pond and soak the strips there, and a pond was built and the bamboo strips placed inside.',
            'Because the pond had to be filled with water carried from the Nam Hnun stream, the town chief ordered that, to keep the water pure, no one was to wash clothes or bathe there the following day. That same night, from the new-moon night of Nadaw onward, heavy rain fell without stopping for seven days and seven nights before finally clearing.',
          ],
        },
        {
          heading: 'The Flood and the Pond of Guardian Fish',
          paragraphs: [
            'The rain fell so heavily that the Nam Hnun stream overflowed and submerged the pond where the bamboo strips were soaking, and everyone assumed the strips had all been washed away. The next morning, on the 7th waxing day of Pyatho, villagers went to check the pond — and found the bamboo strips had not washed away at all. The pond was instead full of water, and fish, prawns, and turtles were seen playing joyfully within it.',
            'Beginning on the 8th waxing day of Pyatho, Myanmar Era 700, the weaving of the sacred Nee Bayar image itself began. When the strips were lifted from the pond, the fish, prawns, and turtles had vanished on their own, with no trace of where they had gone. When the Sayadaw was told of this, he explained that these had been devas and Sakka, come in the form of water creatures to pay homage to the strips destined to become the Buddha image.',
          ],
        },
        {
          heading: 'The Mysterious Old Weaver',
          paragraphs: [
            'On the 11th waxing day of Pyatho, an old man arrived at the weaving site dressed in pure white, a carrying-pole balanced on his shoulder with a basket at each end. He asked the villagers what they were doing; they explained they were weaving a Buddha image from bamboo strips. The villagers in turn asked where he was from, how old he was, why he had come, whether he knew how to weave bamboo, and whether he could help weave the sacred image.',
            'The old man said he was 87 years old, that he made his living selling betel leaves, and that although he had traveled widely selling betel, he had never before seen a Buddha image woven from bamboo strips. When the villagers offered to buy all his betel leaves if he would help weave the image, he said he had never woven a Buddha image before, only other objects, but that he would help however he could if the villagers wished.',
            'What made the old man unusual was that he would vanish, unseen by anyone, whenever the villagers working on the sacred image paused for their meal, and again once the day\'s work was finished. Each time, everyone forgot, in the moment, to ask his name, his home village, or where he went at night — and by the time they remembered, back at their own homes, it was too late to ask; the next day at the worksite, they would forget again. And so it was agreed that the weaving of the sacred image\'s face would begin the following day, and everyone went home to rest.',
            'The next morning, as dawn broke, town chief Pha Khan Shan and his attendants arrived early at the pavilion — and found that the bamboo-woven Buddha image, left unfinished the evening before, was now complete, its proportions so graceful and beautiful that the chief was overcome with joy, and he sent his men out at once to find the old man and reward him properly. Messengers were sent to all 42 villages to search for him, but the old man was never found.',
          ],
        },
        {
          heading: 'Consecration and Early Endowments',
          paragraphs: [
            'The sacred bamboo-woven image was then coated with tree resin and offered a gold robe; a monastery was built and endowed for the Sayadaw to reside in beside it; in Myanmar Era 702 a sima ordination hall was built; and in Myanmar Era 703 a new monastery building was built and endowed for the Sayadaw\'s residence.',
          ],
        },
        {
          heading: 'Extraordinary Signs',
          paragraphs: [
            'During the Japanese occupation, a policeman serving under the Kengtung Sawbwa came to pay homage and offer a candle at the pagoda. Unnoticed by anyone, the candle flame grew and spread into a blaze, until a sudden violent thunderstorm and gale broke out around the monastery, drawing villagers outside to see what was happening. Finding the fire, they worked together to put it out — and the moment the fire was extinguished, the storm cleared as suddenly as it had come, witnessed by everyone present.',
            'A defense unit\'s Shan leadership group once tried to photograph the sacred image with five or six cameras, and to their astonishment not a single photograph came out. Only when they asked permission, explaining they wished to raise donations for the Sayadaw and the monastery, did every photograph come out clearly.',
            'One family, after offering various donated items to the pagoda, poured a water libation from the offering vessel kept there — and were astonished to see the water fail to fall, suspended rather than pouring down. It was said that this happened because the donated items were not entirely pure, containing something unfit to be offered. The wife of a Maing Khat township official who came to pay homage at the pagoda likewise reported that, for reasons unknown, she was unable to see the image\'s face at all.',
          ],
        },
        {
          heading: 'The Annual Festival',
          paragraphs: [
            'The great Maing Hnun Nee Bayar pagoda festival is held every year from the 8th waxing day of Kason through the full moon day.',
          ],
        },
        {
          heading: 'The 2008 Restoration',
          paragraphs: [
            'By the modern era, age and years spent housed deep in forest and hills had left the sacred bamboo image deteriorating from the waist down. To preserve the original craftsmanship for future generations of the faithful, the resident Sayadaw, Kyaukzeehtat, consulted with donors and Maing Hnun village-tract officials on a restoration.',
            'On 1 June 2008, offerings of rice, flowers, cool water, and candles were made at the image\'s morning devotions, and after the Sayadaw took the five precepts, the restoration work began. On 2 June 2008, the Sayadaw himself led the careful, step-by-step work of re-binding the image from the head down to below the waist with wire coils in the original proportions, preserving the antique craftsmanship, over roughly a week with the help of donors.',
            'On 6 June 2008, the restoration of the sacred image was completed. As some of the pedestal blocks it had rested on were found decayed, the Sayadaw had them replaced with a new pedestal. On 7 June 2008, offerings of rice, flowers, cool water, and candles were made, a water libation poured and merit shared, and the sacred Nee Bayar image was enshrined once more on its new pedestal — restored true to its original form, and open to this day for pilgrims to venerate in peace.',
          ],
        },
        {
          heading: 'The Gateway and the Gandhakuti Monastery Hall',
          paragraphs: [
            'On 4 April 2008, donors together with the people of Maing Hnun village began building a grand entrance gateway (mouk oo wa) at the monastery compound. On 23 April 2010, the gateway was completed, and donors and villagers joyfully carried in music a statue of Sakka to be installed above its central archway, flanked by two naga guardians — a sight pilgrims and monastics can still see today.',
            'Following the guidance of Sayadaw Bhaddanta Khemazara of the Gon Shan sect\'s Kengyaing monastery and Sayadaw Bhaddanta Kawvida of the Thilathamma Kontha monastery, given on 9 September 2022, and under the direction of Triangle Region Military Command Commander Brigadier General Nay Lin Aung, ground work for a full renovation of the pagoda\'s Gandhakuti monastery hall — to withstand weather and natural wear — began on 13 November 2022 with donors\' permission. The renovated Gandhakuti monastery hall was completed with a grand ceremony offering its new spire and pouring a water libation on Friday, 2 June 2023.',
          ],
        },
      ],
      readMoreCta: 'Read Full History',
      readLessCta: 'Show Less',
    },
    audio: {
      title: 'Listen to the History',
      play: 'Play',
      pause: 'Pause',
      credit: 'Narrated as an act of merit by Maung Kyaw Linn Htet.',
    },
    panorama360: {
      eyebrow: 'Immersive View',
      title: '360° Pagoda Grounds Panorama',
      description:
        'Step into the pagoda grounds and look around in every direction, from the bamboo-woven Nee Bayar image to the surrounding monastery courtyard.',
      cta: 'View in 360°',
      hint: 'Drag to look around · Scroll or pinch to zoom',
    },
    location: {
      eyebrow: 'Visit & Directions',
      title: 'Find the Pagoda',
      description: 'Maing Hnun Nee Bayar Pagoda stands at Pakan village, Maing Khat township.',
      addressLabel: 'Address',
      address: 'Maing Hnun Nee Bayar Pagoda, Pakan Village, Maing Khat Township, Shan State (East)',
      coordinatesLabel: 'Coordinates',
      approximateLabel: 'Approximate location',
      hoursLabel: 'Visiting Hours',
      hours: 'Open Daily, Dawn to Dusk',
      streetView: 'Street',
      satelliteView: 'Satellite',
      viewMapCta: 'View on Google Maps',
      directionsCta: 'Get Directions',
    },
    closing: {
      text: '"Buddhasasanam ciram titthatu" — may the Buddha\'s Sasana long endure.',
      cta: 'Explore the Directory',
    },
  },
  loneTreeHill: {
    meta: { title: 'Lone Tree Hill (Thit Ta Bin Taung) — Keng Tung' },
    hero: {
      badges: [{ label: 'Cultural Landmark' }],
      title: 'Lone Tree Hill',
      localName: 'Thit Ta Bin Taung',
      subtitle:
        'A 218-foot Kanyin Phyu tree, said in Gon Shan records to have been planted around 1426 A.D., standing alone atop Suam Mong Hill above the Keng Tung valley.',
    },
    quickNav: {
      label: 'Jump to Section:',
      items: ['History', 'Photo Gallery', 'Visit & Directions'],
    },
    facts: {
      pills: [
        { label: 'Tree Height', value: '218 ft' },
        { label: 'Species', value: 'Kanyin Phyu' },
        { label: 'Planted', value: 'c. 1426 A.D.' },
        { label: 'Location', value: 'Suam Mong Hill' },
      ],
    },
    history: {
      eyebrow: 'Shan Folklore & History',
      title: 'The Legend of the Lone Tree',
      description:
        'Steeped in the rich tapestry of Shan folklore, Lone Tree Hill (locally known as Thit Ta Bin Taung) stands as one of the most prominent cultural landmarks in Kengtung (Kyaing Tong), Myanmar.',
      quickFacts: [
        { label: 'Local Name', value: 'Thit Ta Bin Taung' },
        { label: 'Botanical Name', value: 'Dipterocarpus alatus' },
        { label: 'Age', value: 'About 600 years' },
      ],
      sections: [
        {
          heading: 'A Tree Planted for Brotherhood',
          paragraphs: [
            'Perched atop Suam Mong Hill (or Som Moan), the site is famous for its towering, ancient Kanyin Phyu tree (Dipterocarpus alatus), which reaches an astonishing 218 feet in height. According to early Gon Shan ethnic records, this giant tree is much more than a natural wonder; local legend dates it back to around 1426 A.D., when it was planted by the youngest son of a legendary chief warrior to solidify territorial boundaries and serve as a living symbol of fraternity.',
          ],
        },
        {
          heading: 'Sentinel of the Kengtung Valley',
          paragraphs: [
            'For over half a millennium, this solitary sentinel has overseen the changing eras of the Kengtung valley. Today, it remains a deeply revered historical site where travelers can gaze across sweeping vistas of the historic town center, the tranquil Naung Tung Lake, and the distant mountain ranges, bridging the ancient world of the Shan Sawbwas (royal rulers) with the vibrant living heritage of the surrounding hill tribe communities.',
          ],
        },
      ],
    },
    gallery: {
      eyebrow: 'Visual Archive',
      title: 'Photo Gallery',
      photoCount: (count) => `${count} Photo${count === 1 ? '' : 's'}`,
      albums: [
        {
          eyebrow: 'Suam Mong Hill',
          title: 'The Lone Kanyin Tree',
          caption: 'The 218-foot Kanyin Phyu tree and its flower gardens on the summit of Suam Mong Hill.',
        },
      ],
    },
    location: {
      eyebrow: 'Visit & Directions',
      title: 'Find Lone Tree Hill',
      description:
        'Lone Tree Hill rises on Suam Mong Hill on the western edge of Keng Tung, a short drive from the town centre and Naung Tung Lake.',
      addressLabel: 'Address',
      address: 'Lone Tree Hill (Thit Ta Bin Taung), Suam Mong Hill, Keng Tung, Shan State, Myanmar',
      coordinatesLabel: 'Coordinates',
      approximateLabel: 'Approximate location',
      hoursLabel: 'Visiting Hours',
      hours: 'Open Daily',
      streetView: 'Street',
      satelliteView: 'Satellite',
      viewMapCta: 'View on Google Maps',
      directionsCta: 'Get Directions',
    },
    closing: {
      text: 'Six centuries on, the lone tree still keeps watch over the Keng Tung valley.',
      cta: 'Explore the Directory',
    },
  },
  kengTungWaterfall: {
    meta: { title: 'Keng Tung Waterfall (Pin Tauk Waterfall) — Keng Tung' },
    hero: {
      badges: [{ label: 'Natural Attraction' }],
      title: 'Keng Tung Waterfall',
      localName: 'Pin Tauk Waterfall',
      subtitle:
        'Multi-tiered cascades, flower gardens, and forest pools 10 to 15 kilometers east of Keng Tung — one of the primary natural attractions of Eastern Shan State.',
    },
    quickNav: {
      label: 'Jump to Section:',
      items: ['About', 'Photo Gallery', 'Visit & Directions'],
    },
    facts: {
      pills: [
        { label: 'Distance', value: '10–15 km east of town' },
        { label: 'Travel Time', value: '20–30 minutes' },
        { label: 'Best Season', value: 'September – February' },
        { label: 'Opening Hours', value: 'Daily, daylight hours' },
      ],
    },
    history: {
      eyebrow: 'About the Waterfall',
      title: 'Cascades in the Forest East of Keng Tung',
      description:
        'Keng Tung Waterfall, commonly known as Pin Tauk Waterfall, stands as one of the primary natural attractions in Eastern Shan State.',
      quickFacts: [
        { label: 'Nearby Villages', value: 'Pin Tauk & Hoyang' },
        { label: 'Getting There', value: 'Car, motorbike taxi, or tuk-tuk' },
        { label: 'Best Light', value: 'Morning to early afternoon' },
      ],
      sections: [
        {
          heading: 'Getting There',
          paragraphs: [
            'Situated roughly 10 to 15 kilometers east of Keng Tung town center near Pin Tauk and Hoyang villages, the park is open daily during daylight hours and easily accessible within a 20 to 30-minute ride by hired car, motorbike taxi, or local tuk-tuk.',
          ],
        },
        {
          heading: 'Cascades & Gardens',
          paragraphs: [
            'The main attraction features multi-tiered cascades where water flows down smooth, terraced rock formations into natural pools framed by a dense forest canopy. Enhancing the natural landscape, the surrounding grounds are developed with manicured flower beds, orchids, wooden walkways, and covered rest gazebos.',
          ],
        },
        {
          heading: 'A Base for Hill-Tribe Treks',
          paragraphs: [
            'Due to its proximity to several ethnic minority communities—including Akha, Lahu, and Ann hill tribes—the site routinely serves as a cultural trekking base and a popular rest or lunch spot on full-day regional hiking routes, with local guides often arranging transport to and from the starting points.',
          ],
        },
        {
          heading: 'When to Visit',
          paragraphs: [
            'The ideal visiting window spans from September to February during the post-monsoon and cool dry season, when water flow is strongest and the surrounding gardens are in full bloom. Planning a visit between the morning and early afternoon guarantees the clearest natural light filtering through the tree canopy. While the park offers basic picnic areas and local food stalls selling drinks and snacks, carrying extra bottled water and snacks is recommended for those planning longer treks.',
          ],
        },
      ],
    },
    gallery: {
      eyebrow: 'Visual Archive',
      title: 'Photo Gallery',
      photoCount: (count) => `${count} Photo${count === 1 ? '' : 's'}`,
      albums: [
        {
          eyebrow: 'Pin Tauk',
          title: 'Keng Tung Waterfall & Its Gardens',
          caption: 'The terraced cascades, forest pools, and flower gardens of Keng Tung Waterfall.',
        },
      ],
    },
    location: {
      eyebrow: 'Visit & Directions',
      title: 'Find Keng Tung Waterfall',
      description:
        'The waterfall lies roughly 10 to 15 kilometers east of Keng Tung near Pin Tauk and Hoyang villages — a 20 to 30-minute ride by hired car, motorbike taxi, or tuk-tuk.',
      addressLabel: 'Address',
      address: 'Keng Tung Waterfall (Pin Tauk Waterfall), near Pin Tauk Village, Keng Tung Township, Shan State, Myanmar',
      coordinatesLabel: 'Coordinates',
      approximateLabel: 'Approximate location',
      hoursLabel: 'Visiting Hours',
      hours: 'Open Daily, Daylight Hours',
      streetView: 'Street',
      satelliteView: 'Satellite',
      viewMapCta: 'View on Google Maps',
      directionsCta: 'Get Directions',
    },
    closing: {
      text: 'Where the forest meets the water — a quiet rest stop on the trails east of Keng Tung.',
      cta: 'Explore the Directory',
    },
  },
  kengTungHawPalace: {
    meta: { title: 'Kengtung Haw Palace — Keng Tung' },
    hero: {
      badges: [{ label: 'Historic Landmark' }],
      title: 'Kengtung Haw Palace',
      localName: 'Kengtung Haw',
      subtitle:
        'The historic palace of the Sawbwa of Kengtung State — built 1903–1906, demolished in 1991, and reconstructed as a replica museum on Naung Tung Lake in 2024.',
    },
    quickNav: {
      label: 'Jump to Section:',
      items: ['History', 'Photo Gallery', 'Visit & Directions'],
    },
    facts: {
      pills: [
        { label: 'Built', value: '1903 – 1906' },
        { label: 'Demolished', value: '1991' },
        { label: 'Replica Museum Opened', value: '12 May 2024' },
        { label: 'Location', value: 'Naung Tung Lake, Ward 5' },
      ],
    },
    history: {
      eyebrow: 'Royal Heritage',
      title: 'The Palace of the Kengtung Sawbwa',
      description:
        'The Kengtung Haw Palace, also known as Kengtung Haw, was the historic palace of the Sawbwa of Kengtung State in eastern Shan State, Myanmar.',
      quickFacts: [
        { label: 'Commissioned By', value: 'Sao Kawng Kiao Intaleng' },
        { label: 'Architecture', value: 'Shan, Myanmar, European & Indian' },
        { label: 'Today', value: 'Replica Museum' },
      ],
      sections: [
        {
          heading: 'The Original Palace',
          paragraphs: [
            'The original Kengtung Haw Palace was commissioned by Sao Kawng Kiao Intaleng, the Saopha of Kengtung. Construction began in 1903 with the assistance of experts from India and was completed in 1906.',
            'The palace represented a unique combination of Shan and Myanmar traditional architecture with European and Indian influences. Its distinctive architectural design reflected the historical connections and cultural diversity of Kengtung during the early twentieth century.',
            'The palace was also regarded as the first cement building in Kengtung.',
          ],
        },
        {
          heading: 'The Saopha Family',
          paragraphs: [
            'The Haw Palace was the residence of generations of the Kengtung ruling family.',
            'Sao Kawng Kiao Intaleng, his son Sao Kawng Tai, and his grandson Sao Sai Long, together with their families, lived in the palace until 1959.',
            'In 1962, the palace was later used as a government office.',
          ],
        },
        {
          heading: 'A Lost Historical Landmark',
          paragraphs: [
            'The original Kengtung Haw Palace was demolished in 1991.',
            "The destruction of the palace marked the disappearance of one of Kengtung's most important historical landmarks. Today, historical photographs and documents provide valuable evidence of the original building and its place in the history of Kengtung.",
          ],
        },
        {
          heading: 'Historical Photographs',
          paragraphs: [
            'Historical photographs preserved in collections such as the British Library document the Kengtung Haw and its surroundings.',
            'Photographs from the late nineteenth and early twentieth centuries show the palace, its architecture, the surrounding town, and views from the Haw.',
            'These photographs are important visual records because the original palace no longer survives.',
          ],
        },
        {
          heading: 'The Reconstructed Haw Palace',
          paragraphs: [
            'A replica of the Kengtung Haw Palace was constructed to preserve and present the history of the former palace.',
            'The Kengtung Haw Palace Replica Museum was inaugurated on 12 May 2024 at Haw Palace Park on the Nawngtong Lake circular road in Ward 5 of Kengtung.',
            'The reconstructed building follows the historical identity of the former Haw Palace and serves as a museum dedicated to the history of the Kengtung Saopha and his family.',
          ],
        },
        {
          heading: 'Inside the Museum',
          paragraphs: [
            'The museum contains historical photographs, documentary materials, traditional utensils, and displays representing the rooms and life of the former Haw Palace.',
            'Visitors can learn about the Saopha family, the history of the palace, and the cultural heritage associated with Kengtung.',
          ],
        },
        {
          heading: "A Symbol of Kengtung's History",
          paragraphs: [
            'The Kengtung Haw is more than a historic building.',
            "It represents an important period in the history of Kengtung and the Shan States, connecting the region's royal heritage, architecture, culture, and changing political history.",
            'Although the original palace was lost, historical photographs, documents, and the reconstructed museum provide new generations with an opportunity to learn about the former Kengtung Haw Palace.',
            'Today, the reconstructed Haw Palace stands as a place where visitors can explore the history and cultural heritage of Kengtung.',
          ],
        },
      ],
      readMoreCta: 'Read Full History',
      readLessCta: 'Show Less',
    },
    gallery: {
      eyebrow: 'Visual Archive',
      title: 'Photo Gallery',
      photoCount: (count) => `${count} Photo${count === 1 ? '' : 's'}`,
      albums: [
        {
          eyebrow: 'Historical Photograph',
          title: 'The Original Kengtung Haw',
          caption: 'The original palace of the Kengtung Sawbwa, built 1903–1906 and demolished in 1991.',
        },
        {
          eyebrow: 'Opened 12 May 2024',
          title: 'The Haw Palace Replica Museum',
          caption: 'The reconstructed Haw Palace at its inauguration, and seen across Naung Tung Lake at dusk.',
        },
      ],
    },
    location: {
      eyebrow: 'Visit & Directions',
      title: 'Find the Haw Palace',
      description:
        'The Kengtung Haw Palace Replica Museum stands in Haw Palace Park on the Naung Tung Lake circular road, Ward 5, in the centre of Kengtung.',
      addressLabel: 'Address',
      address: 'Haw Palace Park, Naung Tung Lake Circular Road, Ward 5, Kengtung, Shan State, Myanmar',
      coordinatesLabel: 'Coordinates',
      approximateLabel: 'Approximate location',
      hoursLabel: 'Visiting Hours',
      hours: 'Check locally for museum hours',
      streetView: 'Street',
      satelliteView: 'Satellite',
      viewMapCta: 'View on Google Maps',
      directionsCta: 'Get Directions',
    },
    closing: {
      text: 'Though the original palace was lost, its story lives on beside Naung Tung Lake.',
      cta: 'Explore the Directory',
    },
  },
  naungTungLake: {
    meta: { title: 'Naung Tung Lake — Keng Tung' },
    hero: {
      badges: [{ label: 'Heart of the City' }],
      title: 'Naung Tung Lake',
      localName: 'The Lake at the Heart of Kengtung',
      subtitle:
        'The historic 33-acre lake between Swam Tong and Swam Sat hills, around which Kengtung grew — ringed by pagodas, the Haw Palace site, and a scenic lakeside walk.',
    },
    quickNav: {
      label: 'Jump to Section:',
      items: ['History & Legend', 'Photo Gallery', 'Visit & Directions'],
    },
    facts: {
      pills: [
        { label: 'Area', value: 'About 33 acres' },
        { label: 'Location', value: 'Kengtung town centre' },
        { label: 'Between', value: 'Swam Tong & Swam Sat Hills' },
        { label: 'Best Time', value: 'Morning & evening' },
      ],
    },
    history: {
      eyebrow: 'The Lake at the Heart of Kengtung',
      title: 'History & Legend of Naung Tung Lake',
      description:
        'Naung Tung Lake is one of the most recognizable landmarks of Kengtung, eastern Shan State, Myanmar. Located in the heart of the city, the historic lake has long been closely connected with the development and identity of Kengtung.',
      quickFacts: [
        { label: 'Legend', value: 'Drained by four hermits' },
        { label: 'Name Origin', value: 'The hermit Tonga' },
        { label: 'Nearby', value: 'Swam Tong Pagoda & Haw Palace' },
      ],
      sections: [
        {
          heading: 'The Lake at the Heart of Kengtung',
          paragraphs: [
            'Naung Tung Lake is one of the most recognizable landmarks of Kengtung, eastern Shan State, Myanmar.',
            'Located in the heart of the city, the historic lake has long been closely connected with the development and identity of Kengtung.',
            'The lake lies between the hills of Swam Tong and Swam Sat and covers approximately 33 acres according to historical tourism records.',
          ],
        },
        {
          heading: 'A Walk Through History',
          paragraphs: [
            'Kengtung developed around Naung Tung Lake.',
            'The eastern side of the lake became an important part of the early settlement of Kengtung, and many historical landmarks were established around the lake and its surrounding hills.',
            'Among these are Swam Tong Pagoda, the former Kengtung Haw Palace site, Maha Myat Muni Pagoda, Pa Leng Gate, the old market area, and other sites connected with the history of the city.',
          ],
        },
        {
          heading: 'The Legend of Naung Tung Lake',
          paragraphs: [
            'According to traditional Gon Shan historical accounts, the area where Kengtung now stands was once a vast flooded region.',
            'Four hermits are said to have arrived from the north and drained the water from the flooded land.',
            'After seven years and seven months, only a smaller lake remained.',
            'One of the hermits, known as Tonga, is said to have built a pagoda on Swam Tong Hill after the water receded.',
            'According to this traditional account, the name of the lake became associated with Tonga and eventually developed into the name Naung Tung, while the city became known as Kengtung.',
            'This story is preserved as part of the traditional history and legends of Kengtung.',
          ],
        },
        {
          heading: 'A Landmark Surrounded by History',
          paragraphs: [
            'Naung Tung Lake is surrounded by several important cultural and historical landmarks.',
            'On Swam Tong Hill stands the historic Swam Tong Pagoda.',
            'On Swam Mon Hill stands the famous Kanyin Phyu tree, rising prominently above the surrounding landscape.',
            'To the southwest of the lake is a large Standing Buddha image that can be seen from many parts of Kengtung.',
            'The area around the lake also connects visitors with the former Haw Palace site and other historical locations in the city.',
          ],
        },
        {
          heading: 'The Lake Today',
          paragraphs: [
            'Today, Naung Tung Lake remains one of the most recognizable places in Kengtung.',
            'A scenic walking route surrounds the lake, with trees, flowers and places for people to rest.',
            'The surrounding area also contains restaurants, food stalls, hotels and other local businesses.',
            'In the morning and evening, the lake becomes a gathering place for local residents, walkers, families, children and visitors.',
          ],
        },
        {
          heading: 'The View',
          paragraphs: [
            'The western side of the lake provides one of the notable viewpoints.',
            'Looking southwest, visitors can see the Standing Buddha.',
            'Looking south, Swam Mon Hill rises above the lake with the distinctive Kanyin Phyu tree standing prominently on the hilltop.',
            'During the evening, the lake becomes especially peaceful as the surrounding landscape reflects across the water.',
          ],
        },
        {
          heading: 'A Symbol of Kengtung',
          paragraphs: [
            'Naung Tung Lake is more than a natural lake.',
            'It is a place where the natural landscape, traditional legends, religious heritage and history of Kengtung come together.',
            'For generations, the lake has remained closely connected with the identity of the city.',
            'It is both a landmark for visitors and a place deeply valued by local residents.',
          ],
        },
        {
          heading: 'The Heart of the City',
          paragraphs: [
            'From its traditional origin stories to the historic landmarks surrounding its shores, Naung Tung Lake tells an important part of the story of Kengtung.',
            'The lake, the surrounding hills, ancient pagodas, historic buildings and modern city life create a landscape where the past and present of Kengtung meet.',
            'For anyone exploring Kengtung, Naung Tung Lake is not simply a place to visit.',
            'It is a place to understand the history, culture and identity of the city.',
          ],
        },
      ],
      readMoreCta: 'Read Full History',
      readLessCta: 'Show Less',
    },
    gallery: {
      eyebrow: 'Visual Archive',
      title: 'Photo Gallery',
      photoCount: (count) => `${count} Photo${count === 1 ? '' : 's'}`,
      albums: [
        {
          eyebrow: 'Kengtung Town Centre',
          title: 'Views of Naung Tung Lake',
          caption: 'The lake from above, the pagoda reflected at sunset, and the Haw Palace replica across the water at dusk.',
        },
      ],
    },
    location: {
      eyebrow: 'Visit & Directions',
      title: 'Find Naung Tung Lake',
      description:
        'Naung Tung Lake lies in the heart of Kengtung. A walking route circles the lake — mornings and evenings are the liveliest and most peaceful times to visit.',
      addressLabel: 'Address',
      address: 'Naung Tung Lake, Kengtung Town Centre, Shan State, Myanmar',
      coordinatesLabel: 'Coordinates',
      approximateLabel: 'Approximate location',
      hoursLabel: 'Visiting Hours',
      hours: 'Open 24 Hours',
      streetView: 'Street',
      satelliteView: 'Satellite',
      viewMapCta: 'View on Google Maps',
      directionsCta: 'Get Directions',
    },
    closing: {
      text: 'Where the past and present of Kengtung meet.',
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
  otherPlaces: {
    eyebrow: 'Beyond the Pagodas',
    title: 'Other Notable Places',
    description: 'More landmarks and points of interest around Keng Tung.',
    emptyState: 'Places are being documented and will appear here soon.',
    places: [
      {
        name: 'Lone Tree Hill',
        description: 'A 218-foot Kanyin Phyu tree on Suam Mong Hill, planted around 1426 A.D. according to Shan legend.',
      },
      {
        name: 'Keng Tung Waterfall',
        description: 'Also known as Pin Tauk Waterfall — terraced cascades and flower gardens 10 to 15 km east of town.',
      },
      {
        name: 'Kengtung Haw Palace',
        description: 'The palace of the Kengtung Sawbwa, built 1903–1906 and reborn as a replica museum on Naung Tung Lake in 2024.',
      },
      {
        name: 'Naung Tung Lake',
        description: 'The historic lake at the heart of Kengtung, around which the city grew — and the source of its name.',
      },
    ],
  },
  aboutPage: {
    eyebrow: 'About This Guide',
    title: 'About Us',
    description:
      'The Keng Tung Pagoda Guide is a trilingual digital archive documenting the sacred pagodas, monasteries, and pilgrimage routes of Keng Tung, Eastern Shan State.',
    features: [
      {
        title: 'Trilingual Access',
        description:
          'Every page reads in English, Myanmar, and Thai, so pilgrims, researchers, and visitors can explore in the language they know best.',
      },
      {
        title: 'Verified Local History',
        description:
          'Histories, rituals, and festival dates are sourced from real records and community accounts, not generic filler text.',
      },
      {
        title: 'Interactive Maps & Directions',
        description:
          'Satellite and street views, real GPS coordinates, and one-tap directions to every sanctuary in this guide.',
      },
    ],
    missionTitle: 'Our Mission',
    missionText:
      "This guide exists to preserve and share the history, rituals, and living traditions of Keng Tung's sacred sites — in English, Myanmar, and Thai — for pilgrims, researchers, and the local community alike.",
    statPagodasLabel: 'Pagodas Documented',
    statLanguagesLabel: 'Languages Supported',
    creditEyebrow: 'Built By',
    creditTitle: 'Polytechnic University (Keng Tung)',
    creditText:
      'This site was designed and developed by Polytechnic University (Keng Tung) as a digital heritage project documenting the sacred pagodas of Keng Tung for the local community and visitors alike.',
  },
  contactPage: {
    eyebrow: 'Get in Touch',
    title: 'Contact Us',
    description:
      'Have a question, a correction, or information to share about a pagoda in this guide? Reach out to one of the chairmen below.',
    chairmenLabel: 'Chairmen',
    chairmen: [
      { name: 'ဦးစိုင်းဆိုင်ခမ်း', phone: '09428225914' },
      { name: 'ဦးစိုင်းရီတိမ္မဝုန်း', phone: '095250274' },
      { name: 'ဦးဆမ်သန်း', phone: '095252480' },
      { name: 'ဦးနန်မဟာသန်း', phone: '09428215636' },
      { name: 'ဦးအောင်သန်း(ခ)ဦးနန်ဟောင်', phone: '095252381' },
      { name: 'ဦးစိုင်းမုန်ရွက်', phone: '09783166717' },
    ],
    infoTitle: 'About the Developer',
    infoText: 'This guide is maintained by Polytechnic University (Keng Tung), Shan State, Myanmar.',
    locationLabel: 'Location',
    location: 'Keng Tung, Eastern Shan State, Myanmar',
    languagesLabel: 'Languages',
    languages: 'English · Myanmar · Thai',
  },
  narrationPage: {
    eyebrow: 'Audio Guide',
    title: 'Narration Player',
    description:
      'Listen to voice narrations of each pagoda in Keng Tung, told in Myanmar and offered as an act of merit.',
    comingSoon: 'Narration coming soon',
    visitPage: 'Visit pagoda page',
  },
  common: {
    viewDetails: 'View Details',
    back: 'Go back',
  },
  closing: {
    text: '"Buddhasasanam ciram titthatu" — may the Buddha\'s Sasana long endure.',
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
