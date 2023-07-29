import { styled } from 'styled-components'



export const Main = styled.main`
flex: 1 1 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const MainCentrblock = styled.div`
width: auto;
  flex-grow: 3;
  padding: 20px 40px 20px 111px;
`
export const CenterblockSearch = styled.div`
width: 100%;
border-bottom: 1px solid #4e4e4e;
margin-bottom: 51px;
display: flex;
flex-direction: row;
align-items: center;
`

export const CenterblockH2 = styled.h2`
font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 72px;
  letter-spacing: -0.8px;
  margin-bottom: 45px;
`

export const CenterblockFilter = styled.div`
display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 51px;
`
export const CenterblockContent = styled.div`
display: flex;
  flex-direction: column;
`
export const ContentPlaylist = styled.div`
display: flex;
  flex-direction: column;
  overflow-y: auto;
`