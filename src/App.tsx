import { ThemeProvider } from 'styled-components'
import { Home } from './pages/Home'
import { GlobalStyle } from './styles/global'

import { defaultTheme } from './styles/themes/defaults'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  )
}
