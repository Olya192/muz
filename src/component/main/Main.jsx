import { MainNav } from './mainNav/MainNav'
import { MainSidebar } from './mainSidebar/MainSidebar'
import { CenterBlockSearch } from './mainCenterblock/centerblock/CenterblockSearch'
import * as S from './Main.Styles'
import { TrackList } from '../trackList/TrackList'




export function Main( {items, loading, handleSelectedTrack, setAddTodoError}) {

  return (
    <S.Main>
      <MainNav />
      <S.MainCentrblock>
        <S.CenterblockSearch>
          <CenterBlockSearch />
        </S.CenterblockSearch>
        <TrackList items={items} title = {`Треки`} loading = {loading} setAddTodoError = {setAddTodoError} handleSelectedTrack={handleSelectedTrack}/>
      </S.MainCentrblock>
      <MainSidebar />
    </S.Main>
  )
}
