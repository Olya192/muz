import * as S from './Controls.Styles'

export function Controls({
  changePlaying,
  isPlaying,
  isLoop,
  skipNext,
  shufflePlay,
  skipBack,
  repeatLoop,
  isShuffle
}) {

  
  return (
    <>
      <S.PlayerBthPrev>
        <S.PlayerBthPrevSvg alt="prev" onClick={skipBack}>
          <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
        </S.PlayerBthPrevSvg>
      </S.PlayerBthPrev>
      <S.PlayerBthPlay onClick={changePlaying}>
        <S.PlayerBthPlaySvg alt="play">
          {!isPlaying ? (
            <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
          ) : (
            <use xlinkHref="img/icon/sprite.svg#icon-pause"></use>
          )}
        </S.PlayerBthPlaySvg>
      </S.PlayerBthPlay>
      <S.PlayerBthNext>
        <S.PlayerBthNextSvg alt="next" onClick={skipNext}>
          <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
        </S.PlayerBthNextSvg>
      </S.PlayerBthNext>
      <S.PlayerRepeat>
        <S.PlayerRepeatSvg alt="repeat" onClick={repeatLoop} style={{ fill: isLoop ? "rgba(255, 255, 255, 1)" : "rgba(105, 105, 105, 1)" }}>
          <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
        </S.PlayerRepeatSvg>
      </S.PlayerRepeat>
      <S.PlayerShuffle>
        <S.PlayerShuffleSvg alt="shuffle" onClick={shufflePlay} style={{ fill: isShuffle ? "rgba(255, 255, 255, 1)" : "rgba(105, 105, 105, 1)" }}>
          <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
        </S.PlayerShuffleSvg>
      </S.PlayerShuffle>
    </>
  )
}
