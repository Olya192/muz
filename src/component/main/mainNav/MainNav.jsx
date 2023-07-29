import { LogoImage } from './logoImage/LogoImage'
import { NavBurger } from './navBurger/NavBurger'
import { MenuList } from './navMenu/NavMenu'
import { useState } from "react"
import * as S from './MainNav.styles'


export function MainNav() {
  const [clicks, setClicks] = useState(false)

  const handClick = () => setClicks(!clicks)

  return (
    <S.MainNav>
      <S.NavLogo>
        <LogoImage />
      </S.NavLogo>
      <S.NavBurger onClick={handClick}>
        {' '}
        <NavBurger />
      </S.NavBurger>
      <S.NavMenu>
        {clicks && <MenuList />}
      </S.NavMenu>
    </S.MainNav>
  )
}
