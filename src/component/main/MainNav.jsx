import { LogoImage } from './mainNav/LogoImage'
import { NavBurger } from './mainNav/NavBurger'
import { MenuList } from './mainNav/NavMenu'
import { useState } from "react"

export function MainNav() {
  const [clicks, setClicks] = useState(false)

  const handClick = () => setClicks(!clicks)

  return (
    <nav className="main__nav nav">
      <div className="nav__logo logo">
        <LogoImage />
      </div>
      <div className="nav__burger burger" onClick={handClick}>
        {' '}
        <NavBurger />
      </div>
      <div className="nav__menu menu">
        {clicks && <MenuList />}
      </div>
    </nav>
  )
}
