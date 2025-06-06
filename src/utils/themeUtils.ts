export const getInitialTheme = () => {
  return localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'
}
