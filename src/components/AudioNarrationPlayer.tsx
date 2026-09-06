import { useEffect, useRef, useState, type ChangeEvent } from 'react'

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return '0:00'
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${m}:${String(s).padStart(2, '0')}`
}

interface AudioNarrationPlayerProps {
  src: string
  title: string
  playLabel: string
  pauseLabel: string
  credit: string
}

export function AudioNarrationPlayer({ src, title, playLabel, pauseLabel, credit }: AudioNarrationPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  useEffect(() => {
    const el = audioRef.current
    if (!el) return

    const onTimeUpdate = () => setCurrentTime(el.currentTime)
    const onLoadedMetadata = () => setDuration(el.duration)
    const onEnded = () => setPlaying(false)

    el.addEventListener('timeupdate', onTimeUpdate)
    el.addEventListener('loadedmetadata', onLoadedMetadata)
    el.addEventListener('ended', onEnded)
    return () => {
      el.removeEventListener('timeupdate', onTimeUpdate)
      el.removeEventListener('loadedmetadata', onLoadedMetadata)
      el.removeEventListener('ended', onEnded)
    }
  }, [])

  function togglePlay() {
    const el = audioRef.current
    if (!el) return
    if (playing) {
      el.pause()
    } else {
      void el.play()
    }
    setPlaying((p) => !p)
  }

  function handleSeek(e: ChangeEvent<HTMLInputElement>) {
    const el = audioRef.current
    if (!el) return
    const value = Number(e.target.value)
    el.currentTime = value
    setCurrentTime(value)
  }

  const progress = duration ? (currentTime / duration) * 100 : 0

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-border bg-bg-elevated p-5 shadow-soft sm:flex-row sm:items-center">
      <audio ref={audioRef} src={src} preload="metadata" />

      <button
        type="button"
        onClick={togglePlay}
        aria-label={playing ? pauseLabel : playLabel}
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-on-primary shadow-soft transition-transform hover:scale-105"
      >
        <span className="material-symbols-outlined text-[26px]" style={{ fontVariationSettings: "'FILL' 1" }}>
          {playing ? 'pause' : 'play_arrow'}
        </span>
      </button>

      <div className="flex min-w-0 flex-1 flex-col gap-1.5">
        <div className="flex items-center justify-between gap-2">
          <span className="truncate font-sans text-sm font-semibold text-text">{title}</span>
          <span className="shrink-0 font-sans text-xs font-semibold text-text-faint">
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>
        </div>
        <input
          type="range"
          min={0}
          max={duration || 0}
          step={0.1}
          value={currentTime}
          onChange={handleSeek}
          aria-label={title}
          className="h-1.5 w-full cursor-pointer appearance-none rounded-full accent-primary"
          style={{
            background: `linear-gradient(to right, rgb(var(--color-primary)) ${progress}%, rgb(var(--color-bg-elevated-3)) ${progress}%)`,
          }}
        />
        <span className="font-sans text-xs text-text-faint">{credit}</span>
      </div>
    </div>
  )
}
