import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import Button from './Button'
import Counter from './Counter'
import FullScreenLoader from './FullScreenLoader'
import MuteToggle from './MuteToggle'
import Stopwatch from './Stopwatch'

const Container = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isStopwatch, setIsStopwatch] = useState<boolean>(() => {
    const savedMode = localStorage.getItem('mode')
    return savedMode === 'stopwatch'
  })

  const { themeStyles } = useTheme()

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500)
  }, [])

  const handleToggleMode = () => {
    setIsStopwatch((prev) => {
      const next = !prev
      localStorage.setItem('mode', next ? 'stopwatch' : 'counter')
      return next
    })
  }

  return (
    <div
      className={`relative w-full max-w-md p-6 rounded-lg shadow-lg transition-all ${themeStyles.containerBg}`}
    >
      {isLoading ? (
        <FullScreenLoader />
      ) : (
        <>
          <div className="absolute top-4 right-4">
            <MuteToggle />
          </div>

          <motion.div
            key={isStopwatch ? 'stopwatch' : 'counter'}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="w-full flex justify-center items-center"
          >
            {isStopwatch ? <Stopwatch /> : <Counter />}
          </motion.div>

          <div className="mt-6 flex justify-center">
            <Button
              label={isStopwatch ? 'Modo Contador' : 'Modo Cronômetro'}
              onClick={handleToggleMode}
              variant="toggle"
            />
          </div>
        </>
      )}
    </div>
  )
}

export default Container
