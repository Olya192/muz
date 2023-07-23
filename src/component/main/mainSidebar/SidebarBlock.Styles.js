import { styled } from 'styled-components'
import { NavLink } from "react-router-dom"

export const SidebarList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SidebarItem = styled.div`
  width: 250px;
  height: 150px;
  margin-bottom: 30px;
`

export const SidebarLink = styled(NavLink)`
width: 100%;
height: 100%;
`
export const SidebarImg = styled.img`
width: 100%;
height: auto;
`