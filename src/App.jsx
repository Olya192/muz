import logo from './logo.svg'
import { Container } from './component/Container'
import { GlobalStyle } from './component/ContainerStyles'
import { AppRoutes } from './routes'

function App() {
  return (
    <>
      <GlobalStyle />
      <AppRoutes />
    </>
  )
}

export default App
