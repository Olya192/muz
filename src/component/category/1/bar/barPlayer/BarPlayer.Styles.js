import { styled } from 'styled-components'


export const BarContent = styled.div`
display: flex;
  flex-direction: column;
`
export const BarPlayerProgress = styled.div`
width: 100%;
  height: 5px;
  background: #2e2e2e;
`
export const BarPlayerBlock = styled.div`
height: 73px;
display: flex;
flex-direction: row;
justify-content: space-between;
`
export const BarPlayer = styled.div`
display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`
export const BarPlayerControls = styled.div`
display: flex;
flex-direction: row;
padding: 0 27px 0 31px;
`
export const BarVolumeBlock = styled.div`
width: auto;
display: flex;
align-items: center;
padding: 0 92px 0 0;
`
export const BarVolumeContent = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: end;
`
export const BarVolumeImage = styled.div`
width: 13px;
height: 18px;
margin-right: 17px;
`

export const BarVolumeSvg = styled.svg`
width: 13px;
height: 18px;
fill: transparent;
`
export const BarVolumeProgress = styled.div`
width: 109px;
`

export const BarVolumeProgressLine = styled.input`
width: 109px;
`

