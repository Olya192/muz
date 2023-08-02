import { Controls } from '../controls/Controls'
import { Player } from '../player/Player'
import React, { useEffect, useRef, useState } from 'react'
import * as S from './BarPlayer.Styles'
import { check } from 'prettier'
import { formatTime } from '../../../utils/formatTime'

export function BarPlayer({ selectedTrack, setSelectedTrack, items }) {
  const clickRef = useRef()
  const audioElem = useRef()
  const [isPlaying, setIsPlaying] = useState(true)
  const [volume, setVolume] = useState(60);
  const [isLoop, setIsLoop] = useState(false);



  useEffect(() => {
    if (audioElem) {
      audioElem.current.volume = volume / 100;
    }
  }, [volume, audioElem]);

  const startPlaying = () => {
    setIsPlaying(true)
    audioElem.current.play()
  }
  const stopPlaying = () => {
    setIsPlaying(false)
    audioElem.current.pause()
  }

  const changePlaying = () => {
    if (isPlaying) {
      stopPlaying()
    } else {
      startPlaying()
    }
  }

  useEffect(() => {
    console.log("selectedTrack", selectedTrack);
    console.log("isPlaying", isPlaying);
    console.log("audioElem.current", audioElem.current);
    audioElem.current.src = selectedTrack.track_file
    setIsPlaying(true)
  }, [selectedTrack.track_file])

  const onPlaying = () => {
    const duration = audioElem.current.duration
    const currentTime = audioElem.current.currentTime

    setSelectedTrack({
      ...selectedTrack,
      progress: (currentTime / duration) * 100,
      length: duration,
    })
  }

  const checkWidth = (e) => {
    let widthAudio = clickRef.current.clientWidth
    const offset = e.nativeEvent.offsetX

    const divProgress = (offset / widthAudio) * 100
    audioElem.current.currentTime = (divProgress / 100) * selectedTrack.length
  }

  return (
    <React.Fragment>
      <S.BarContent>
        <S.TimeBar>
          {formatTime(audioElem.current?.currentTime || 0)} / {formatTime(audioElem.current?.duration || 0)}
        </S.TimeBar>
        <div onClick={checkWidth} ref={clickRef}>
          <S.BarPlayerProgress
            style={{ width: `${selectedTrack.progress + '%'}` }}
          ></S.BarPlayerProgress>
        </div>

        <S.BarPlayerBlock>
          <audio
            controls
            ref={audioElem}
            onTimeUpdate={onPlaying}
            style={{ visibility: 'hidden' }}
            loop={isLoop}
            autoPlay

          >
            <source src={selectedTrack.track_file} type="audio/mpeg" />
            <track kind="captions" label="" />
          </audio>
          <S.BarPlayerControls>
            <Controls
              audioElem={audioElem}
              changePlaying={changePlaying}
              isPlaying={isPlaying}
              items={items}
              selectedTrack={selectedTrack}
              setSelectedTrack={setSelectedTrack}
              setIsLoop={setIsLoop}
              isLoop={isLoop}
            />
          </S.BarPlayerControls>
          <Player selectedTrack={selectedTrack} />
          <S.BarVolumeBlock>
            <S.BarVolumeContent>
              <S.BarVolumeImage>
                <S.BarVolumeSvg alt="volume">
                  <use href="img/icon/sprite.svg#icon-volume"></use>
                </S.BarVolumeSvg>
              </S.BarVolumeImage>
              <S.BarVolumeProgress>
                <S.BarVolumeProgressLine type="range" name="range" min={0} max={100} value={volume} onChange={(e) => setVolume(e.target.value)} />
              </S.BarVolumeProgress>
            </S.BarVolumeContent>
          </S.BarVolumeBlock>
        </S.BarPlayerBlock>
      </S.BarContent>
    </React.Fragment>
  )
}
