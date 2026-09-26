export interface Countdown {
  days: number
  hours: number
  mins: number
  secs: number
}

export function getCountdown(targetDate: string): Countdown {
  const diff = Math.max(0, new Date(targetDate).getTime() - Date.now())
  const totalSeconds = Math.floor(diff / 1000)
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    mins: Math.floor((totalSeconds % 3600) / 60),
    secs: totalSeconds % 60,
  }
}

export function pad(n: number) {
  return String(n).padStart(2, '0')
}
