import * as S from './SidebarBlock.Styles'

export function SidebarBlock() {
  return (
    <S.SidebarList>
      <S.SidebarItem>
        <S.SidebarLink href="#">
          <S.SidebarImg
            src="img/playlist01.png"
            alt="day's playlist"
          />
        </S.SidebarLink>
      </S.SidebarItem>
      <S.SidebarItem>
        <S.SidebarLink href="#">
          <S.SidebarImg
            src="img/playlist02.png"
            alt="day's playlist"
          />
        </S.SidebarLink>
      </S.SidebarItem>
      <S.SidebarItem>
        <S.SidebarLink href="#">
          <S.SidebarImg
            src="img/playlist03.png"
            alt="day's playlist"
          />
        </S.SidebarLink>
      </S.SidebarItem>
    </S.SidebarList>
  )
}
