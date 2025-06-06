import Container from './components/Container'
import Header from './components/Header'
import { MuteProvider } from './context/MuteContext'
import { ThemeProvider, useTheme } from './context/ThemeContext'

const AppContent = () => {
  const { themeStyles } = useTheme()

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center transition-all ${themeStyles.background} ${themeStyles.text}`}
    >
      <Header />
      <Container />
    </div>
  )
}

const App = () => {
  return (
    <ThemeProvider>
      <MuteProvider>
        <AppContent />
      </MuteProvider>
    </ThemeProvider>
  )
}

export default App
