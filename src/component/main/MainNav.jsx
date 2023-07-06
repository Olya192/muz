import { LogoImage} from './mainNav/LogoImage'
import { NavBurger } from './mainNav/NavBurger'
import { MenuList } from './mainNav/NavMenu'

export function MainNav() {
  return (
    <nav className="main__nav nav">
      <div className="nav__logo logo"><LogoImage/></div>
      <div className="nav__burger burger"> <NavBurger/></div>
      <div className="nav__menu menu"><MenuList/></div>
    </nav>
  )
}

