import { SidebarBlock } from "./SidebarBlock";
import { SidebarPersonal } from "./SidebarPersonal";
import * as S from './MainSidebar.Styles'




export function MainSidebar() {
    return (
        <S.MainSidebar>
      <SidebarPersonal/>
        <S.MainSidebarBlock>
          <SidebarBlock/> 
        </S.MainSidebarBlock>
    </S.MainSidebar>
    )
  }