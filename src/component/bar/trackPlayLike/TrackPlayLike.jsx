import * as S from './TrackPlayLike.Styles'



export function TrackPlayLike() {
  return (
    <S.TrackPlayLikeDis>
      <S.TrackPlayLike>
        <S.TrackPlayLikeSvg alt="like">
          <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
        </S.TrackPlayLikeSvg>
      </S.TrackPlayLike>
      < S.TrackPlayDislike>
        <S.TrackPlayLikeSvg alt="dislike">
          <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
        </S.TrackPlayLikeSvg>
      </S.TrackPlayDislike>
    </S.TrackPlayLikeDis>
  )
}
