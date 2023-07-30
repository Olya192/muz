import { MainNav } from './mainNav/MainNav'
import { MainSidebar } from './mainSidebar/MainSidebar'
import { CenterBlockSearch } from './mainCenterblock/centerblock/CenterblockSearch'
import { CenterBlockFilter } from './mainCenterblock/CenterblockFilter'
import { items } from './mainCenterblock/contentPlaylist/Item'
import { PlayListItem } from './mainCenterblock/contentPlaylist/PlaylistItem'
import { useEffect, useState } from 'react'
import { SkeletonTheme } from 'react-loading-skeleton';
import * as S from './Main.Styles'




export function Main( {items, loading, handleSelectedTrack, setAddTodoError}) {

  const stub = Array(10).fill({name: 'Guilt',
  author: 'Nero',
  album: 'Welcome Reality',
  duration_in_seconds: '4:44'})

  return (
    <S.Main>
      <MainNav />
      <S.MainCentrblock>
        <S.CenterblockSearch>
          <CenterBlockSearch />
        </S.CenterblockSearch>
        <S.CenterblockH2>Треки</S.CenterblockH2>
        <S.CenterblockFilter>
          <CenterBlockFilter />
        </S.CenterblockFilter>
        <p>{setAddTodoError}</p>
        <S.CenterblockContent> <SkeletonTheme baseColor="#313131" highlightColor="#444">
                <S.ContentPlaylist>
            {loading
            ? stub?.map((item,index) => (
              <PlayListItem key= {index} item={item} loading={loading} />
            )) 
            : items?.map((item,index) => (
              <PlayListItem onClick = {() => handleSelectedTrack(item)} key= {index} item={item} loading={loading} />
            ))}
          </S.ContentPlaylist> </SkeletonTheme>
        </S.CenterblockContent>
      </S.MainCentrblock>
      <MainSidebar />
    </S.Main>
  )
}
