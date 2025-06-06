export const getInitialTheme = (): 'light' | 'dark' => {
  return localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'
}

export const updateTheme = (theme: 'light' | 'dark') => {
  localStorage.setItem('theme', theme)
  document.documentElement.classList.toggle('dark', theme === 'dark')
}
