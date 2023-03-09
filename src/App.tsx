import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import { ProfileProvider } from './context/ProfileContex'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'

import { defaultTheme } from './styles/themes/defaults'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <ProfileProvider>
          <Router />
        </ProfileProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
