import * as S from './NavMenu.Styles'

export function MenuList() {
  return (
    <S.MenuList>
      <S.MenuItem>
        <S.MenuLink to="/" >
          Главное
        </S.MenuLink>
      </S.MenuItem>
      <S.MenuItem>
        <S.MenuLink to="/favorites" >
          Мой плейлист
        </S.MenuLink>
      </S.MenuItem>
      <S.MenuItem>
        <S.MenuLink to="/login" >
          Войти
        </S.MenuLink>
      </S.MenuItem>
    </S.MenuList>
  )
}
