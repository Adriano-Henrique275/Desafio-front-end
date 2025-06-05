import { useEffect, useState } from 'react'
import Button from './Button'

const Stopwatch = () => {
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1)
      }, 1000)
    } else if (interval) {
      clearInterval(interval)
    }

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [isRunning])

  const formatTime = () => {
    const hours = Math.floor(time / 3600)
    const minutes = Math.floor((time % 3600) / 60)
    const seconds = time % 60
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(
      2,
      '0',
    )}:${String(seconds).padStart(2, '0')}`
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-800 text-white">
      <h1 className="text-5xl font-bold">{formatTime()}</h1>
      <div className="flex gap-4 mt-4">
        {!isRunning ? (
          <Button
            label="Iniciar"
            onClick={() => setIsRunning(true)}
            variant="primary"
          />
        ) : (
          <>
            <Button
              label="Parar"
              onClick={() => setIsRunning(false)}
              variant="secondary"
            />
            <Button
              label="Resetar"
              onClick={() => setTime(0)}
              variant="toggle"
            />
          </>
        )}
      </div>
    </div>
  )
}

export default Stopwatch
