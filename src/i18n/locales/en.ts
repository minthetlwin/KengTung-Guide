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
        heading: '110 Monks Recite for Protection from Danger',
        description:
          'Once every three months, on the full moon evening at 6:00, a gathering of 110 monks recites the protective Paritta chants for freedom from danger inside the Gandhakuti monastery hall.',
        cta: 'Ritual Program & Schedule',
      },
    ],
  },
  festivalCalendarPage: {
    eyebrow: 'Living Traditions',
    title: 'Festival Calendar',
    description:
      'Track every recurring ritual and votive festival at the pagodas of Keng Tung, with live countdowns to the next observance.',
  },
  watZomKham: {
    meta: { title: 'Wat Zom Kham — The Golden Crown of Kyaing Tong' },
    hero: {
      badges: [
        { label: 'Monastic Monument Catalog · Ref. KT-ZOM-01' },
        { label: 'Active Theravada Sanctum', pulsingDot: true },
      ],
      title: 'Wat Zom Kham',
      localName: 'ဝပ်ဇွမ်ခမ်း · ᩅᩢ᩠ᨯᨧᩬᨾᨤᩣᩴ · วัดจอมคำ',
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
        { label: 'Enshrined', value: '1926' },
        { label: 'Centennial', value: '2026' },
      ],
    },
    quickNav: {
      label: 'Jump to Section:',
      items: ['History', 'Photo Gallery', 'Living Traditions', 'Board of Trustees', 'Visit & Directions'],
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
            "The grand ceremony marking the 100th anniversary of Maha Myat Muni Pagoda — the pride of Keng Tung, Eastern Shan State — including the offering of a ruby-and-diamond crown (Yadana Sein Hpondaw) and a gold umbrella (Shwehti), together with the Buddha Consecration (Anekazatin) grand ceremony, was held on the morning of the full moon day of Tabodwe, Sasana Year 2565, Kawza Era 1383. Presiding over the ceremony were the Sayadaws and members of the Sangha led by the chief Nayaka of Kyaing Yin Monastery in Keng Tung, Agga Maha Saddhamma Jotikadhaja Bhaddanta Khemasara.\n\nThe ceremony was attended by the Chairman of the State Administration Council and Prime Minister, Senior General Min Aung Hlaing, together with his wife Daw Kyu Kyu Hla and family members; State Administration Council members Lieutenant General Moe Myint Tun, U Sai Lone Hsai, and U Shwe Kyin; Union Ministers Lieutenant General Tun Tun Naung, U Ko Ko, U Hla Moe, Dr. Nyunt Phay, and Dr. Thet Khaing Win; Shan State Chief Minister Dr. Kyaw Tun; State Administration Council Chairman's Advisory Body member Dr. Daw Yin Yin Nwe; Commander-in-Chief (Navy) Admiral Moe Aung and his wife; Commander-in-Chief (Air) General Tun Aung and his wife; senior Tatmadaw officers from the Office of the Commander-in-Chief and their wives; Triangle Region Military Command Commander Major General Myo Min Tun and responsible officials; invited guests, sincere donors, officers, soldiers and their families, monastic associations, local ethnic residents, and traditional cultural associations.",
        },
        {
          eyebrow: 'Full Moon & New Moon Ritual',
          title: "Photo Records of Maha Myat Muni Pagoda's Face-Washing Ceremony",
          caption:
            'On every full moon and new moon day, at 5:30 in the morning, the traditional face-washing ceremony is performed for the Maha Myat Muni image.',
        },
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
            'Once every three months, on the full moon evening at 6:00, a gathering of 110 monks recites the protective Paritta chants for freedom from danger inside the Gandhakuti monastery hall.',
        },
        {
          title: 'Monthly Dhammacakka Recitation',
          description:
            'On the 2nd waxing and 2nd waning day of every month, at 2:00 in the afternoon, the Dhammacakka Sutta is recited and offered in the Shan language.',
        },
        {
          title: 'Centennial Celebration',
          description:
            'Having stood for a full century, 2026 marks the 100th anniversary of the Keng Tung Maha Myat Muni Pagoda.',
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
    places: [],
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
