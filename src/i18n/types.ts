export type Locale = 'en' | 'my' | 'th'

export interface NewsArticle {
  slug: string
  category: string
  date: string
  title: string
  excerpt: string
  body: [string, string, string]
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

export interface WzkMetaPill {
  label: string
  value: string
}

export interface WzkTimelineItem {
  dateBadge: string
  eyebrow: string
  title: string
  description: string
  citation: string
}

export interface WzkGalleryItem {
  plate: string
  eyebrow: string
  title: string
  caption: string
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

export interface WzkTrustee {
  name: string
  role: string
  bio: string
  tenure: string
}

export interface WzkRouteCard {
  eyebrow: string
  title: string
  description: string
}

export interface WzkTimingSlot {
  label: string
  time: string
  note: string
}

export interface WatZomKhamDictionary {
  meta: { title: string }
  hero: {
    catalogBadge: string
    statusBadge: string
    title: string
    subtitle: string
    metaPills: [WzkMetaPill, WzkMetaPill, WzkMetaPill, WzkMetaPill]
    audio: {
      label: string
      title: string
      narrator: string
      currentTime: string
      totalTime: string
      spatialLabel: string
      download: string
    }
  }
  quickNav: {
    label: string
    items: [string, string, string, string, string]
    registeredBadge: string
  }
  history: {
    eyebrow: string
    title: string
    description: string
    items: [WzkTimelineItem, WzkTimelineItem, WzkTimelineItem, WzkTimelineItem]
  }
  gallery: {
    eyebrow: string
    title: string
    countLabel: string
    items: [WzkGalleryItem, WzkGalleryItem, WzkGalleryItem, WzkGalleryItem, WzkGalleryItem]
  }
  rituals: {
    eyebrow: string
    title: string
    description: string
    festivals: [WzkFestival, WzkFestival]
  }
  trustees: {
    eyebrow: string
    title: string
    registrationLabel: string
    registrationId: string
    people: [WzkTrustee, WzkTrustee, WzkTrustee, WzkTrustee]
    contactEyebrow: string
    contactAddress: string
    contactHours: string
    ctaLedger: string
    ctaContact: string
  }
  wayfinding: {
    eyebrow: string
    title: string
    description: string
    pinLabel: string
    pinDetail: string
    routeLegendA: string
    routeLegendB: string
    routes: [WzkRouteCard, WzkRouteCard]
    timingHeading: string
    timingSlots: [WzkTimingSlot, WzkTimingSlot]
  }
}

export interface MmmFactPill {
  label: string
  value: string
}

export interface MmmTimelineItem {
  year: string
  title: string
  description: string
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
  history: {
    eyebrow: string
    title: string
    items: [MmmTimelineItem, MmmTimelineItem, MmmTimelineItem]
  }
  video: {
    eyebrow: string
    title: string
    description: string
    mute: string
    unmute: string
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
    items: [MmmBeliefItem, MmmBeliefItem, MmmBeliefItem]
  }
  trustees: {
    eyebrow: string
    title: string
    description: string
    people: MmmTrusteeMember[]
  }
  location: {
    eyebrow: string
    title: string
    description: string
    addressLabel: string
    address: string
    coordinatesLabel: string
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

export interface Dictionary {
  meta: {
    title: string
  }
  header: {
    brand: string
    nav: {
      home: string
      pagodas: string
      news: string
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
  watZomKham: WatZomKhamDictionary
  maharMyatMuni: MaharMyatMuniDictionary
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
  news: {
    eyebrow: string
    title: string
    description: string
    readMore: string
    backToNews: string
    notFound: string
    articles: [NewsArticle, NewsArticle, NewsArticle]
  }
  aboutPage: {
    eyebrow: string
    title: string
    description: string
    missionTitle: string
    missionText: string
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
  }
  common: {
    viewDetails: string
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
