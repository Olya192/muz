import * as S from './Controls.Styles'

export function Controls({
  audioElem,
  changePlaying,
  isPlaying,
  items,
  selectedTrack,
  setSelectedTrack,
  setIsLoop,
  isLoop
}) {


  const skipBack = () => {
    const index = items.findIndex((x) => x.id == selectedTrack.id)

    if (index == 0) {
      setSelectedTrack(items[items.length - 1])
    } else {
      setSelectedTrack(items[index - 1])
    }

    audioElem.current.currentTime = 0
  }

  const skipNext = () => {
    const index = items.findIndex((x) => x.id == selectedTrack.id)

    if (index == items.length - 1) {
      setSelectedTrack(items[0])
    } else {
      setSelectedTrack(items[index + 1])
    }

    audioElem.current.currentTime = 0
  }

  const repeatLoop = () => {
    setIsLoop(!isLoop)
  }


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
        <S.PlayerRepeatSvg alt="repeat" onClick={repeatLoop} style={{ fill: isLoop ? "rgba(255, 255, 255, 1)" : "rgba(105, 105, 105, 1)"}}>
          <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
        </S.PlayerRepeatSvg>
      </S.PlayerRepeat>
      <S.PlayerShuffle>
        <S.PlayerShuffleSvg alt="shuffle">
          <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
        </S.PlayerShuffleSvg>
      </S.PlayerShuffle>
    </>
  )
}
