import { TrackPlay } from "../trackPlay/TrackPlay";
import { TrackPlayLike } from "../trackPlayLike/TrackPlayLike";
import * as S from './Player.Styles'


export function Player() {
  return (
    <S.PlayerTrackPlay>
        <TrackPlay/>
      <TrackPlayLike/>
    </S.PlayerTrackPlay>
  )
}

