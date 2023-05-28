import { useState } from 'react'

import { ThemeProvider } from 'styled-components'

import Sidebar from './containers/Sidebar'
import About from './containers/About'
import GlobalStyle, { Container } from './styles'
import Projects from './containers/Projects'
import lightTheme from './themes/light'
import darkTheme from './themes/dark'

function App() {
  const [usingDarkTheme, setusingDarkTheme] = useState(false)

  function switchTheme() {
    setusingDarkTheme(!usingDarkTheme)
  }

  return (
    <ThemeProvider theme={usingDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Container>
        <Sidebar switchTheme={switchTheme} />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
