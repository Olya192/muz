import { LogoImage} from './MainNav/LogoImage'
import { NavBurger } from './MainNav/NavBurger'
import { MenuList } from './MainNav/NavMenu'

export function MainNav() {
  return (
    <nav className="main__nav nav">
      <div className="nav__logo logo"><LogoImage/></div>
      <div className="nav__burger burger"> <NavBurger/></div>
      <div className="nav__menu menu"><MenuList/></div>
    </nav>
  )
}
