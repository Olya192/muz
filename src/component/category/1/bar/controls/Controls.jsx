import * as S from './Controls.Styles'

export function Controls() {
  return (
    <>
      <S.PlayerBthPrev>
        <S.PlayerBthPrevSvg alt="prev">
          <use xlinkHref="../../../../../img/icon/sprite.svg#icon-prev"></use>
        </S.PlayerBthPrevSvg>
      </S.PlayerBthPrev>
      <S.PlayerBthPlay>
        <S.PlayerBthPlaySvg alt="play">
          <use xlinkHref="../../../../../img/icon/sprite.svg#icon-play"></use>
        </S.PlayerBthPlaySvg>
      </S.PlayerBthPlay>
      <S.PlayerBthNext>
        <S.PlayerBthNextSvg alt="next">
          <use xlinkHref="../../../../../img/icon/sprite.svg#icon-next"></use>
        </S.PlayerBthNextSvg>
      </S.PlayerBthNext>
      <S.PlayerRepeat>
        <S.PlayerRepeatSvg alt="repeat">
          <use xlinkHref="../../../../../img/icon/sprite.svg#icon-repeat"></use>
        </S.PlayerRepeatSvg>
      </S.PlayerRepeat>
      <S.PlayerShuffle>
        <S.PlayerShuffleSvg alt="shuffle">
          <use xlinkHref="../../../../../img/icon/sprite.svg#icon-shuffle"></use>
        </S.PlayerShuffleSvg>
      </S.PlayerShuffle>
    </>
  )
}
