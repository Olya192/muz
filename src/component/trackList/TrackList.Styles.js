import { styled } from 'styled-components'

export const CenterblockH2 = styled.h2`
font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 72px;
  letter-spacing: -0.8px;
  margin-bottom: 45px;
`
export const CenterblockContent = styled.div`
height: -webkit-fill-available;
flex-direction: column;
display: contents;
`
export const ContentPlaylist = styled.div`
display: flex;
  flex-direction: column;
  overflow-y: scroll;
  height: auto;
  scrollbar-gutter: stable both-edges;
  padding-right: 10px;
&::-webkit-scrollbar {
    width: 7px;
    background-color: rgba(75, 73, 73, 1);
    border-radius: 3px;
}
&::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 1);
    border-radius: 3px;
}
  `
export const CenterblockFilter = styled.div`
display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 51px;
`