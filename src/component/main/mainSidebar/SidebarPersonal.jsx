import { useUser } from '../../../context/user'
import * as S from './SidebarPersonal.Styles'


export function SidebarPersonal() {

  const user = useUser()

  return (
    <S.SidebarPersonal>
      <S.SidebarPersonalName>{user?.username || ""}</S.SidebarPersonalName>
      <S.SidebarAvatar></S.SidebarAvatar>
    </S.SidebarPersonal>
  )
}
