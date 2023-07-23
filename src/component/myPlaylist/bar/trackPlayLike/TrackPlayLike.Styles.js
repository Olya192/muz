import { styled } from 'styled-components'

export const TrackPlayLikeDis = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 26%;
`
export const TrackPlayLike = styled.div`
  padding: 5px;
`

export const TrackPlayLikeSvg = styled.svg`
width: 14px;
height: 12px;
fill: transparent;
stroke: #696969;

${TrackPlayLike}:hover & {
  fill: transparent;
  stroke: #acacac;
  cursor: pointer;
}

${TrackPlayLike}:active & {
  fill: #696969;
  stroke: #ffffff;
  cursor: pointer;
}`

export const TrackPlayDislike = styled(TrackPlayLike) `
margin-left: 28.5px;
`