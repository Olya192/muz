import { BarPlayer } from './bar/barPlayer/BarPlayer'
import { Main } from './main/Main'

export function Container() {
  return (
    <div className="container">
      <Main />
      <div className="bar">
        <BarPlayer/>
      </div>
      <footer className="footer"></footer>
    </div>
  )
}
