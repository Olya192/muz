import * as S from './TrackList.Styles'
import { SkeletonTheme } from 'react-loading-skeleton';
import { PlayListItem } from '../main/mainCenterblock/contentPlaylist/PlaylistItem'
import { CenterBlockFilter } from '../main/mainCenterblock/CenterblockFilter';
import { useDispatch, useSelector } from 'react-redux'
import { getTracklist, getError, getLoading, getFilter } from '../../store/selectors/tracksSelectors';
import { setTrack } from '../../store/actions/creators/tracksCreators'



export const TrackList = ({ title }) => {
    const stub = Array(10).fill({
        name: 'Guilt',
        author: 'Nero',
        album: 'Welcome Reality',
        duration_in_seconds: '4:44'
    })

    const dispatch = useDispatch()
    const items = useSelector(getTracklist)
    const setSelectedTrack = (el) => dispatch(setTrack(el))

    const handleSelectedTrack = (item) => {
        setSelectedTrack(item)
    }

    const error = useSelector(getError)
    const loading = useSelector(getLoading)


    const filterTracks = useSelector(getFilter)

    const tracks = items.filter((i) => {
        let authorFilter = false
        if (filterTracks.author.length === 0) {
            authorFilter = true
        } else {
            authorFilter = !!filterTracks.author.find((el) => el === i.author)
        }

        let genreFilter = false
        if (filterTracks.genre.length === 0) {
            genreFilter = true
        } else {
            genreFilter = !!filterTracks.genre.find((el) => el === i.genre)
        }


        return authorFilter && genreFilter
    }).sort((a, b) => {
        const aDate = new Date(a.release_date)
        const bDate = new Date(b.release_date)

        if (aDate > bDate) return filterTracks.years
        else if (aDate < bDate) return -filterTracks.years
        else return 0
    })

    console.log(tracks)


    return (
        <>
            <S.CenterblockH2>{title}</S.CenterblockH2>
            <S.CenterblockFilter>
                {window.location.pathname === "/" && <CenterBlockFilter />}
            </S.CenterblockFilter>
            <p>{error}</p>
            <S.CenterblockContent> <SkeletonTheme baseColor="#313131" highlightColor="#444">
                <S.ContentPlaylist>
                    {loading
                        ? stub?.map((item, index) => (
                            <PlayListItem key={index} item={item} loading={loading} />
                        ))
                        : tracks?.map((item, index) => (
                            <PlayListItem onClick={() => handleSelectedTrack(item)} key={index} item={item} loading={loading} />
                        ))}
                </S.ContentPlaylist> </SkeletonTheme>
            </S.CenterblockContent>
        </>
    )
}