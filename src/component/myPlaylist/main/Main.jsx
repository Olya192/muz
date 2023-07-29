import { MainNav } from './mainNav/MainNav'
import { CenterBlockSearch } from './mainCenterblock/centerblock/CenterblockSearch'
import { items } from './mainCenterblock/contentPlaylist/Item'
import { PlayListItem } from './mainCenterblock/contentPlaylist/PlaylistItem'
import { useEffect, useState } from 'react'
import { SkeletonTheme } from 'react-loading-skeleton'
import * as S from './Main.Styles'

export function Main() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <S.Main>
      <MainNav />
      <S.MainCentrblock>
        <S.CenterblockSearch>
          <CenterBlockSearch />
        </S.CenterblockSearch>
        <S.CenterblockH2>Мои треки</S.CenterblockH2>
        <S.CenterblockContent>
          {' '}
          <SkeletonTheme baseColor="#313131" highlightColor="#444">
            <S.ContentPlaylist>
              {items.map((item, index) => (
                <PlayListItem key={index} item={item} loading={loading} />
              ))}
            </S.ContentPlaylist>{' '}
          </SkeletonTheme>
        </S.CenterblockContent>
      </S.MainCentrblock>
    </S.Main>
  )
}
