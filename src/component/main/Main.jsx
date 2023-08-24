import { MainNav } from './mainNav/MainNav'
import { MainSidebar } from './mainSidebar/MainSidebar'
import { CenterBlockSearch } from './mainCenterblock/centerblock/CenterblockSearch'
import * as S from './Main.Styles'
import { BarPlayer } from '../bar/barPlayer/BarPlayer'
import { useSelector } from 'react-redux'
import { getSetTrack } from '../../store/selectors/tracksSelectors'
import { cloneElement, useState } from 'react'



export function Main({ children }) {
  const selectedTrack = useSelector(getSetTrack)
  

  return (
    <S.Container>
      <S.Main>
        <MainNav />
        <S.MainCentrblock>
          <S.CenterblockSearch>
            <CenterBlockSearch />
          </S.CenterblockSearch>
          {children};
        </S.MainCentrblock>
        <MainSidebar />
      </S.Main>
      <S.Bar>
        {selectedTrack ? (
          <BarPlayer />
        ) : null}
      </S.Bar>
      <footer className="footer"></footer>
    </S.Container>

  )
}
