import { FaMoon, FaSun } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-500 hover:bg-gray-600 transition-all duration-300"
    >
      {theme === 'light' ? (
        <FaSun className="text-yellow-400 text-2xl" />
      ) : (
        <FaMoon className="text-gray-200 text-2xl" />
      )}
    </button>
  )
}

export default ThemeToggle
