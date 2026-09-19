import { heroImages } from './images'

export const mhnbHeroImage = heroImages.maingHnunNeeBayar

// No published GPS fix exists for Pakan village itself; the source history
// places it among the 45 villages once governed from Maing Khat, so this
// pins Mong Khet (Maing Khat) Township's own center (21°42'00"N 99°23'00"E —
// Wikipedia "Mong Khet Township") as the nearest identifiable landmark, the
// same approach used for Shwe Ohn Daing Min (KT-11). Flagged as approximate.
export const mhnbCoordinates = { lat: 21.7, lng: 99.38333 }

// Supplied directly by the project owner; audio extracted from the source
// .mov (a video wrapping a voice recording) and re-encoded to MP3 for
// universal browser playback.
export const mhnbHistoryAudioSrc = '/audio/mhnb-history-narration.mp3'

// Equirectangular panorama of the pagoda grounds, supplied by the project owner.
export const mhnbPanoramaSrc = '/360photo/sv360-CIHM0ogKEICAgIDB8P6HDg-20260919-145813.jpg'
