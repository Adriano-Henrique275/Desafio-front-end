import { motion } from 'framer-motion'
import { FaMoon, FaSun } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext'

const Header = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <header
      className={`fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center shadow-md transition-all ${
        theme === 'dark' ? 'bg-zinc-900' : 'bg-zinc-300'
      }`}
    >
      <h1
        className={`text-xl font-bold ${
          theme === 'dark' ? 'text-white' : 'text-black'
        }`}
      >
        Cronômetro & Contador
      </h1>

      <motion.button
        onClick={toggleTheme}
        className={`w-16 h-8 flex items-center rounded-full p-1 transition-all ${
          theme === 'dark' ? 'bg-yellow-500' : 'bg-gray-400'
        }`}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          className={`w-6 h-6 flex items-center justify-center rounded-full ${
            theme === 'dark' ? 'bg-gray-900' : 'bg-white'
          }`}
          animate={{ x: theme === 'dark' ? 28 : 0 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          {theme === 'dark' ? (
            <FaMoon className="text-gray-200 text-sm" />
          ) : (
            <FaSun className="text-yellow-500 text-sm" />
          )}
        </motion.div>
      </motion.button>
    </header>
  )
}

export default Header
