import { heroImages } from './images'

export const skstHeroImage = heroImages.swamKyeimShweHsanTaw

// No published GPS fix exists for Swam Kyeim village itself; the source history
// places it "12 miles from Maing Pyin (Mong Ping) town" without a bearing, so
// this pins Mong Ping Township's own center (21°21'00"N 99°01'00"E — Wikipedia
// "Mong Ping Township") as the nearest identifiable landmark. Flagged as
// approximate in the UI.
export const skstCoordinates = { lat: 21.35, lng: 99.01667 }

// Supplied directly by the project owner; audio extracted from the source
// .mov (a black video track wrapping a voice recording) and re-encoded to
// MP3 for universal browser playback.
export const skstHistoryAudioSrc = '/audio/skst-history-narration.mp3'
