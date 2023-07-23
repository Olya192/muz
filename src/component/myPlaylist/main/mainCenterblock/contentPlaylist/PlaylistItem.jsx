import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import * as S from './PlaylistItem.styles'



export function PlayListItem({ item, loading }) {
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
              </ S.TrackTitleSvg>
            )}
          </ S.TrackTitleImg>
          <S.TrackTitleText>
            {loading ? (
              <Skeleton count={1} />
            ) : (
              <S.TrackTitleLink href="http://">
                {' '}
                {item?.title}{' '}
                <S.TrackTitleSpan>
                  {item?.subtitle ? `(${item?.subtitle})` : ''}
                </S.TrackTitleSpan>
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
              <S.TrackTimeSvg alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
              </S.TrackTimeSvg>
              <S.TrackTimeText>{item?.time}</S.TrackTimeText>
            </>
          )}
        </S.TrackTime>
      </S.PlaylistTrack>
    </S.PlaylistItem>
  )
}
