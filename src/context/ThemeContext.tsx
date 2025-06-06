import { createContext, useContext, useEffect, useState } from 'react'
import { darkTheme, lightTheme } from '../theme/theme'
import { getInitialTheme, updateTheme } from '../utils/themeUtils'

type ThemeContextType = {
  theme: 'light' | 'dark'
  themeStyles: typeof lightTheme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>(getInitialTheme)

  const themeStyles = theme === 'dark' ? darkTheme : lightTheme

  useEffect(() => {
    updateTheme(theme)
  }, [theme])

  const toggleTheme = () =>
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))

  return (
    <ThemeContext.Provider value={{ theme, themeStyles, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used within ThemeProvider')
  return context
}
