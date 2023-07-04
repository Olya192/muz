import { SidebarBlock } from "./SidebarBlock";
import { SidebarPersonal } from "./SidebarPersonal";

export function MainSidebar() {
    return (
        <div className="main__sidebar sidebar">
      <SidebarPersonal/>
        <div className="sidebar__block">
          <SidebarBlock/> 
        </div>
    </div>
    )
  }