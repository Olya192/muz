import * as S from './TrackPlay.Styles'

export function TrackPlay() {
  return (
    <>
      <S.TrackPlayContain>
        <S.TrackPlayImage>
          <S.TrackPlaySvg alt="music">
            <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
          </S.TrackPlaySvg>
        </S.TrackPlayImage>
        <S.TrackPlayAuthor>
          <S.TrackPlayAuthorLink href="http://">
            Ты та...
          </S.TrackPlayAuthorLink>
        </S.TrackPlayAuthor>
        <S.TrackPlayAlbum>
          <S.TrackPlayAlbumLink href="http://">
            Баста
          </S.TrackPlayAlbumLink>
        </S.TrackPlayAlbum>
      </S.TrackPlayContain>
    </>
  )
}
