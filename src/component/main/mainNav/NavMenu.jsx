import * as S from './NavMenu.Styles'

export function MenuList() {
  return (
    <S.MenuList>
      <S.MenuItem>
        <S.MenuLink href="http://" >
          Главное
        </S.MenuLink>
      </S.MenuItem>
      <S.MenuItem>
        <S.MenuLink href="http://" >
          Мой плейлист
        </S.MenuLink>
      </S.MenuItem>
      <S.MenuItem>
        <S.MenuLink href="http://" >
          Войти
        </S.MenuLink>
      </S.MenuItem>
    </S.MenuList>
  )
}
