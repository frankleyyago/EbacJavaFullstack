import { ThemeProvider } from 'styled-components'

import Cabecalho from './components/Cabecalho'
import GlobalStyle, { Container } from './styles'
import temaLight from './themes/light'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

function App() {
  return (
    <ThemeProvider theme={temaLight}>
      <GlobalStyle />
      <Cabecalho />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </ThemeProvider>
  )
}

export default App
