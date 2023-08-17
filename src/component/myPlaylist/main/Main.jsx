import { MainNav } from './mainNav/MainNav'
import { CenterBlockSearch } from './mainCenterblock/centerblock/CenterblockSearch'
import { items } from './mainCenterblock/contentPlaylist/Item'
import { PlayListItem } from './mainCenterblock/contentPlaylist/PlaylistItem'
import { useEffect, useState } from 'react'
import { SkeletonTheme } from 'react-loading-skeleton'
import * as S from './Main.Styles'
import { TrackList } from '../../trackList/TrackList'

export function Main() {

  const [loading, setLoading] = useState(true)

  async function getTrakcs() {
    const favTracks = await getFavTrack()
  }
  useEffect(() => {
    getTrakcs()
  }, [])



  return (
    <S.Main>
      <MainNav />
      <S.MainCentrblock>
        <S.CenterblockSearch>
          <CenterBlockSearch />
        </S.CenterblockSearch>
        <TrackList items={items} title={`Мои треки`} loading={loading} />
      </S.MainCentrblock>
    </S.Main>
  )
}
