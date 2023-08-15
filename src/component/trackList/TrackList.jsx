import * as S from './TrackList.Styles'
import { SkeletonTheme } from 'react-loading-skeleton';
import { PlayListItem } from '../main/mainCenterblock/contentPlaylist/PlaylistItem'
import { CenterBlockFilter } from '../main/mainCenterblock/CenterblockFilter';



export const TrackList = ({ items, loading, title, setAddTodoError, handleSelectedTrack }) => {

  const stub = Array(10).fill({name: 'Guilt',
  author: 'Nero',
  album: 'Welcome Reality',
  duration_in_seconds: '4:44'})

    return (
        <>
            <S.CenterblockH2>{title}</S.CenterblockH2>
            <S.CenterblockFilter>
                <CenterBlockFilter />
            </S.CenterblockFilter>
            <p>{setAddTodoError}</p>
            <S.CenterblockContent> <SkeletonTheme baseColor="#313131" highlightColor="#444">
                <S.ContentPlaylist>
                    {loading
                        ? stub?.map((item, index) => (
                            <PlayListItem key={index} item={item} loading={loading} />
                        ))
                        : items?.map((item, index) => (
                            <PlayListItem onClick={() => handleSelectedTrack(item)} key={index} item={item} loading={loading} />
                        ))}
                </S.ContentPlaylist> </SkeletonTheme>
            </S.CenterblockContent>
        </>
    )
}