import styled, { createGlobalStyle } from 'styled-components'


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
export const Bar = styled.div `
position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(28, 28, 28, 0.5);
`
export const Container = styled.div `
max-width: 1920px;
height: 100vh;
margin: 0 auto;
position: relative;
background-color: #181818;
`

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*:before,
*:after {
  box-sizing: border-box;
}

a,
a:visited {
  text-decoration: none;
  font-family: "StratosSkyeng", sans-serif;
  cursor: pointer;
}

button,
._btn {

}

@font-face {
  font-family: "StratosSkyeng";
  src: local("StratosSkyeng"), local("StratosSkyeng"), url("../../public/fonts/Stratos-Regular.woff2") format("woff2"), url("../../public/fonts/Stratos-Regular.woff") format("woff");
  font-weight: 400;
  font-style: normal;
}

html,
body {
  width: 100%;
  height: 100%;
  font-family: "StratosSkyeng", sans-serif;
  color: #ffffff;
}

.wrapper {
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  background-color: #383838;
}

`