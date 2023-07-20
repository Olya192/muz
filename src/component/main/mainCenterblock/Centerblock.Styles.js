import { styled } from "styled-components"

export const ContentTitle = styled.div`
display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`

export const PlaylistTitle = styled.div`
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 24px;
letter-spacing: 2px;
color: #696969;
text-transform: uppercase;
`
export const PlaylistTitleCol01 = styled(StyledPlaylistTitle)`
width: 447px;
`
export const PlaylistTitleCol02 = styled(StyledPlaylistTitle)`
width: 321px;
`
export const PlaylistTitleCol03 = styled(StyledPlaylistTitle)`
width: 245px;
`
export const PlaylistTitleCol04 = styled(StyledPlaylistTitle)`
width: 60px;
text-align: end;
`
export const PlaylistTitleSvg = styled.svg`
width: 12px;
height: 12px;
fill: transparent;
stroke: #696969;`