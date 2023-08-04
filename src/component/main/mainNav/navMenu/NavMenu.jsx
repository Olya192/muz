import { useSetUser } from '../../../../context/user'
import * as S from './NavMenu.Styles'

export function MenuList() {

  const setUser = useSetUser()

  const logOutHandle = () => {
    localStorage.removeItem("user")
    localStorage.removeItem("token")
    setUser(null)
  }

  return (
    <S.MenuList>
      <S.MenuItem>
        <S.MenuLink to="/" >
          Главная
        </S.MenuLink>
      </S.MenuItem>
      <S.MenuItem>
        <S.MenuLink to="/favorites" >
          Мой плейлист
        </S.MenuLink>
      </S.MenuItem>
      <S.MenuItem>
        <S.MenuLink to="/login" onClick={logOutHandle}>
          Выйти
        </S.MenuLink>
      </S.MenuItem>
    </S.MenuList>
  )
}
