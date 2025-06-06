import { motion } from 'framer-motion'
import { useMute } from '../context/MuteContext'
import { useTheme } from '../context/ThemeContext'
import { playSound } from '../utils/playSound'

type ButtonProps = {
  label: string
  onClick: () => void
  variant: 'primary' | 'secondary' | 'toggle'
}

const Button = ({ label, onClick, variant }: ButtonProps) => {
  const { themeStyles } = useTheme()
  const { isMuted } = useMute()

  const handleClick = () => {
    playSound('/sounds/click.mp3', 0.2, isMuted)
    onClick()
  }

  const baseStyle =
    'px-4 py-2 rounded-lg font-semibold transition-all focus:outline-none focus:ring-2'

  const variants = {
    primary: `${themeStyles.buttonPrimary} hover:${themeStyles.buttonPrimaryHover} focus:ring-blue-300`,
    secondary: `${themeStyles.buttonSecondary} hover:${themeStyles.buttonSecondaryHover} focus:ring-red-300`,
    toggle: `${themeStyles.buttonToggle} hover:${themeStyles.buttonToggleHover} focus:ring-yellow-300`,
  }

  return (
    <motion.button
      onClick={handleClick}
      className={`${baseStyle} ${variants[variant]}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 300 }}
      aria-label={label}
    >
      {label}
    </motion.button>
  )
}

export default Button
