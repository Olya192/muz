import { Controls } from '../controls/Controls'
import { Player } from '../player/Player'
import React from 'react'
import * as S from './BarPlayer.Styles'

export function BarPlayer() {
  return (
    <React.Fragment>
      <S.BarContent>
        <S.BarPlayerProgress></S.BarPlayerProgress>
        <S.BarPlayerBlock>
          <S.BarPlayerControls>
            <Controls />
          </S.BarPlayerControls>
          <Player />
          <S.BarVolumeBlock>
            <S.BarVolumeContent>
              <S.BarVolumeImage>
                <S.BarVolumeSvg alt="volume">
                  <use href="img/icon/sprite.svg#icon-volume"></use>
                </S.BarVolumeSvg>
              </S.BarVolumeImage>
              <S.BarVolumeProgress>
                <S.BarVolumeProgressLine type="range" name="range" />
              </S.BarVolumeProgress>
            </S.BarVolumeContent>
          </S.BarVolumeBlock>
        </S.BarPlayerBlock>
      </S.BarContent>
    </React.Fragment>
  )
}
