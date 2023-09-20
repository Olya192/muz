import * as S from './SidebarBlock.Styles'

export function SidebarBlock() {
  return (
    <S.SidebarList>
      <S.SidebarItem>
        <S.SidebarLink to="/category/1">
          <S.SidebarImg
            src="img/Classic.png"
            alt="day's playlist"
          />
        </S.SidebarLink>
      </S.SidebarItem>
      <S.SidebarItem>
        <S.SidebarLink to="/category/2">
          <S.SidebarImg
            src="img/Electro.png"
            alt="day's playlist"
          />
        </S.SidebarLink>
      </S.SidebarItem>
      <S.SidebarItem>
        <S.SidebarLink to="/category/3">
          <S.SidebarImg
            src="img/Pock.png"
            alt="day's playlist"
          />
        </S.SidebarLink>
      </S.SidebarItem>
    </S.SidebarList>
  )
}
