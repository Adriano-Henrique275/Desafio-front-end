import { useEffect, useRef, useState } from 'react'
import { useMute } from '../context/MuteContext'
import Button from './Button'
import Skeleton from './Skeleton'

const Stopwatch = () => {
  const [time, setTime] = useState<number>(() => {
    const savedTime = localStorage.getItem('stopwatchTime')
    return savedTime ? Number(savedTime) : 0
  })

  const [isRunning, setIsRunning] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const { isMuted } = useMute()
  const tickSoundRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    tickSoundRef.current = new Audio('/sounds/ticks.mp3')
    tickSoundRef.current.loop = true
    tickSoundRef.current.volume = 0.1
  }, [])

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prev) => {
          const updated = prev + 1
          localStorage.setItem('stopwatchTime', updated.toString())
          return updated
        })
      }, 1000)
    }
    return () => interval && clearInterval(interval)
  }, [isRunning])

  useEffect(() => {
    if (!tickSoundRef.current) return
    if (isRunning && !isMuted) {
      tickSoundRef.current.play().catch(() => null)
    } else {
      tickSoundRef.current.pause()
    }
  }, [isRunning, isMuted])

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000) // 🔥 Simulação de carregamento
  }, [])

  const formatTime = (t: number) => {
    const h = Math.floor(t / 3600)
    const m = Math.floor((t % 3600) / 60)
    const s = t % 60
    return `${String(h).padStart(2, '0')}:${String(m).padStart(
      2,
      '0',
    )}:${String(s).padStart(2, '0')}`
  }

  return (
    <div className="flex flex-col items-center justify-center w-full p-6">
      {isLoading ? (
        <Skeleton width="w-32" height="h-16" />
      ) : (
        <>
          <h1 className="text-5xl font-bold mb-4">{formatTime(time)}</h1>
          <div className="flex gap-4 flex-wrap mt-4 justify-center">
            <Button
              label={isRunning ? 'Pausar' : 'Iniciar'}
              onClick={() => setIsRunning((prev) => !prev)}
              variant="primary"
            />
            <Button
              label="Resetar"
              onClick={() => setTime(0)}
              variant="secondary"
            />
          </div>
        </>
      )}
    </div>
  )
}

export default Stopwatch
