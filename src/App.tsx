import { ThemeProvider } from 'styled-components'
import { ProfileProvider } from './context/ProfileContex'
import { Home } from './pages/Home'
import { GlobalStyle } from './styles/global'

import { defaultTheme } from './styles/themes/defaults'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <ProfileProvider>
        <Home />
      </ProfileProvider>
    </ThemeProvider>
  )
}
