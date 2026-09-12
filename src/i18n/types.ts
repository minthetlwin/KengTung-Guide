export type Locale = 'en' | 'my' | 'th'

export interface NotablePlace {
  name: string
  description: string
}

export interface HeroSlide {
  tag: string
  coordinate: string
  title: string
  titleAccent: string
  subtitle: string
  badges: [string, string, string]
  primaryCta: string
  secondaryCta: string
}

export interface StatItem {
  value: string
  label: string
  sub: string
}

export interface FilterPill {
  id: string
  label: string
}

export interface SpotlightStatCard {
  label: string
  value: string
  sub: string
}

export interface DirectoryCard {
  code: string
  title: string
  subtitle: string
  tags: [string, string]
  categories: string[]
  description: string
  hours: string
  price: string
  detailPath?: string
}

export interface MapPin {
  label: string
}

export interface MapInfoRow {
  label: string
  value: string
}

export interface FestivalSlide {
  badge: string
  subBadge: string
  heading: string
  description: string
  cta: string
}

export interface WzkFestival {
  cycle: string
  period: string
  title: string
  description: string
  checklistHeading: string
  checklist: [string, string, string]
  nextObservance: string
  statusBadge: string
}

export interface PagodaHeroBadge {
  label: string
  pulsingDot?: boolean
}

// Shared shape for the two structurally-similar pagoda detail pages (Wat Zom
// Kham, Yarzamuni) — rendered by one generic PagodaDetailPage template.
// gallery/rituals/readMore(Cta)/readLessCta/approximateLabel are optional
// since Yarzamuni's page has none of them; the template conditionally
// renders those sections/controls based on their presence.
export interface PagodaDetailDictionary {
  meta: { title: string }
  hero: {
    badges: PagodaHeroBadge[]
    title: string
    localName: string
    subtitle: string
  }
  quickNav: {
    label: string
    items: string[]
  }
  facts: {
    pills: [MmmFactPill, MmmFactPill, MmmFactPill, MmmFactPill]
  }
  history: {
    eyebrow: string
    title: string
    description: string
    quickFacts: [MmmFactPill, MmmFactPill, MmmFactPill]
    sections: MmmHistorySection[]
    readMoreCta?: string
    readLessCta?: string
  }
  audio: {
    title: string
    play: string
    pause: string
    credit: string
  }
  gallery?: {
    eyebrow: string
    title: string
    photoCount: (count: number) => string
    albums: MmmGalleryAlbum[]
  }
  rituals?: {
    eyebrow: string
    title: string
    description: string
    festivals: [WzkFestival, WzkFestival]
  }
  location: {
    eyebrow: string
    title: string
    description: string
    addressLabel: string
    address: string
    coordinatesLabel: string
    approximateLabel?: string
    hoursLabel: string
    hours: string
    streetView: string
    satelliteView: string
    viewMapCta: string
    directionsCta: string
  }
  closing: {
    text: string
    cta: string
  }
}

export interface MmmFactPill {
  label: string
  value: string
}

export interface MmmHistorySection {
  heading: string
  paragraphs: string[]
}

export interface MmmBeliefItem {
  title: string
  description: string
}

export interface MmmGalleryAlbum {
  eyebrow: string
  title: string
  date?: string
  caption: string
}

export interface MmmTrusteeMember {
  name: string
  role: string
  location?: string
}

export interface MaharMyatMuniDictionary {
  meta: { title: string }
  hero: {
    badge: string
    title: string
    localName: string
    subtitle: string
  }
  facts: {
    pills: [MmmFactPill, MmmFactPill, MmmFactPill, MmmFactPill]
  }
  quickNav: {
    label: string
    items: [string, string, string, string, string]
  }
  history: {
    eyebrow: string
    title: string
    quickFacts: [MmmFactPill, MmmFactPill, MmmFactPill]
    sections: [MmmHistorySection, MmmHistorySection, MmmHistorySection, MmmHistorySection]
    readMoreCta: string
    readLessCta: string
  }
  audio: {
    title: string
    play: string
    pause: string
    credit: string
  }
  shanHistory: {
    title: string
    description: string
  }
  gallery: {
    eyebrow: string
    title: string
    photoCount: (count: number) => string
    albums: MmmGalleryAlbum[]
  }
  beliefs: {
    eyebrow: string
    title: string
    items: MmmBeliefItem[]
  }
  trustees: {
    eyebrow: string
    title: string
    description: string
    people: MmmTrusteeMember[]
    groupSayadaw: string
    groupOldBoard: string
    groupNewBoard: string
    groupNayaka: string
    groupLeadership: string
    groupOthers: string
  }
  location: {
    eyebrow: string
    title: string
    description: string
    addressLabel: string
    address: string
    coordinatesLabel: string
    hoursLabel: string
    hours: string
    streetView: string
    satelliteView: string
    viewMapCta: string
    directionsCta: string
  }
  otherPagodas: {
    eyebrow: string
    title: string
    description: string
    viewAll: string
  }
  closing: {
    text: string
    cta: string
  }
}

export interface Dictionary {
  meta: {
    title: string
    description: string
  }
  header: {
    brand: string
    nav: {
      home: string
      pagodas: string
      otherPlaces: string
      festivals: string
      map: string
      about: string
      contact: string
    }
    searchShort: string
    searchLabel: string
    audioGuide: string
    themeLight: string
    themeDark: string
  }
  hero: {
    liveBadge: string
    slides: [HeroSlide, HeroSlide, HeroSlide]
    play: string
    pause: string
    atlasLabel: string
  }
  stats: [StatItem, StatItem, StatItem, StatItem]
  filters: {
    searchPlaceholder: string
    pills: [FilterPill, FilterPill, FilterPill, FilterPill, FilterPill]
  }
  spotlight: {
    eyebrow: string
    catalogId: string
    audioLabel: string
    audioTitle: string
    audioMeta: string
    tags: [string, string, string]
    title: string
    subtitle: string
    description: string
    statCards: [SpotlightStatCard, SpotlightStatCard]
    ctaPrimary: string
    ctaSecondary: string
  }
  directory: {
    eyebrow: string
    title: string
    viewingLabel: (shown: number, total: number) => string
    viewAll: string
    noResults: string
    cards: [DirectoryCard, DirectoryCard, DirectoryCard]
  }
  pagodasPage: {
    eyebrow: string
    title: string
    description: string
  }
  pilgrimageMap: {
    eyebrow: string
    title: string
    description: string
    pins: [MapPin, MapPin, MapPin]
    infoRows: [MapInfoRow, MapInfoRow]
    cta: string
  }
  festivals: {
    eyebrow: string
    title: string
    dateNote: string
    countdown: {
      days: string
      hours: string
      mins: string
      secs: string
    }
    slides: [FestivalSlide, FestivalSlide, FestivalSlide, FestivalSlide]
  }
  festivalCalendarPage: {
    eyebrow: string
    title: string
    description: string
  }
  watZomKham: PagodaDetailDictionary
  maharMyatMuni: MaharMyatMuniDictionary
  yarzamuni: PagodaDetailDictionary
  locationMapPage: {
    eyebrow: string
    title: string
    description: string
    streetView: string
    satelliteView: string
    approximateLabel: string
    coordinatesLabel: string
    viewOnMap: string
    getDirections: string
  }
  otherPlaces: {
    eyebrow: string
    title: string
    description: string
    emptyState: string
    places: NotablePlace[]
  }
  aboutPage: {
    eyebrow: string
    title: string
    description: string
    features: [
      { title: string; description: string },
      { title: string; description: string },
      { title: string; description: string },
    ]
    missionTitle: string
    missionText: string
    statPagodasLabel: string
    statLanguagesLabel: string
    creditEyebrow: string
    creditTitle: string
    creditText: string
  }
  contactPage: {
    eyebrow: string
    title: string
    description: string
    formName: string
    formEmail: string
    formSubject: string
    formMessage: string
    formSubmit: string
    formSuccess: string
    infoTitle: string
    infoText: string
    locationLabel: string
    location: string
    languagesLabel: string
    languages: string
  }
  narrationPage: {
    eyebrow: string
    title: string
    description: string
    comingSoon: string
    visitPage: string
  }
  common: {
    viewDetails: string
    back: string
  }
  closing: {
    text: string
  }
  footer: {
    tagline: string
    exploreHeading: string
    resourcesHeading: string
    languageHeading: string
    resources: [string, string, string]
    rights: string
  }
}
