import { styled } from 'styled-components'

export const PlayerBth = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
`

export const PlayerBthPrev = styled(PlayerBth)`
  margin-right: 23px;
`

export const PlayerBthPlay = styled(PlayerBth)`
  margin-right: 23px;
  cursor: pointer;
`

export const PlayerBthNext = styled(PlayerBth)`
  margin-right: 28px;
  fill: #a53939;
`

export const PlayerRepeat = styled(PlayerBth)`
  margin-right: 24px;
`

export const PlayerShuffle = styled(PlayerBth)`
  display: flex;
  align-items: center;
`

export const PlayerBthPrevSvg = styled.svg`
  width: 15px;
  height: 14px;
`

export const PlayerBthPlaySvg = styled.svg`
  width: 22px;
  height: 20px;
  fill: #d9d9d9;
`

export const PlayerBthNextSvg = styled.svg`
  width: 15px;
  height: 14px;
  fill: inherit;
  stroke: #d9d9d9;
`

export const PlayerRepeatSvg = styled.svg`
  width: 18px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`
export const PlayerShuffleSvg = styled.svg`
width: 19px;
height: 12px;
fill: transparent;
stroke: #696969;
`