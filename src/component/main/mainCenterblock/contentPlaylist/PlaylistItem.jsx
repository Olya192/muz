import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import * as S from './PlaylistItem.styles'
import { getPlayTrack, getSetTrack } from '../../../../store/selectors/tracksSelectors'
import { useDispatch, useSelector } from 'react-redux'
import { postLike, deleteLike } from '../../../../api.js'
import { useUser } from '../../../../context/user'
import { setTrack, setLike, setDislike } from '../../../../store/actions/creators/tracksCreators'

export function PlayListItem({ item, loading, onClick }) {

  const dispatch = useDispatch()

  const setCurrentTrack = (el) => dispatch(setTrack(el))
  const selectedTrack = useSelector(getSetTrack)
  const isPlaying = useSelector(getPlayTrack)

  const user = useUser()
  const isLiked = !!item?.stared_user?.find((item) => item.id === user.id) || item?.stared_user === undefined

  async function like() {
    if (!isLiked) {
      await postLike(item.id)
      console.log("like");
      dispatch(setLike({ id: item.id, user }))
    } else {
      await deleteLike(item.id)
      console.log("dislike");
      dispatch(setDislike({ id: item.id, user }))
    }
  }

  return (
    <S.PlaylistItem>
      <S.PlaylistTrack>
        <S.TrackTitle>
          < S.TrackTitleImg>
            {loading ? (
              <Skeleton count={1} />
            ) : (
              < S.TrackTitleSvg alt="music">
                <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                {selectedTrack?.id === item.id ? <S.TrackPlay isPlaying={isPlaying}><use xlinkHref="img/icon/sprite.svg#icon-set"></use></S.TrackPlay> : ""}
              </ S.TrackTitleSvg>
            )}
          </ S.TrackTitleImg>
          <S.TrackTitleText>
            {loading ? (
              <Skeleton count={1} />
            ) : (
              <S.TrackTitleLink onClick={onClick}>
                {item?.name}
              </S.TrackTitleLink>
            )}
          </S.TrackTitleText>
        </S.TrackTitle>
        <S.TrackAuthor>
          {loading ? (
            <Skeleton count={1} />
          ) : (
            <S.AuthorLink href="http://">
              {item?.author}
            </S.AuthorLink>
          )}
        </S.TrackAuthor>
        <S.TrackAlbum>
          {loading ? (
            <Skeleton count={1} />
          ) : (
            <S.AlbumLink href="http://">
              {item?.album}
            </S.AlbumLink>
          )}
        </S.TrackAlbum>
        <S.TrackTime>
          {loading ? (
            <Skeleton count={1} />
          ) : (
            <>
              {' '}
              <S.TrackTimeSvg alt="time" onClick={like} style={{ fill: isLiked ? "rgba(255, 255, 255, 1)" : "rgba(105, 105, 105, 1)" }}>
                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
              </S.TrackTimeSvg>
              <S.TrackTimeText>{item?.duration_in_seconds}</S.TrackTimeText>
            </>
          )}
        </S.TrackTime>
      </S.PlaylistTrack>
    </S.PlaylistItem>
  )
}
