import { TrackPlay } from "./TrackPlay";
import { TrackPlayLike } from "./TrackPlayLike";
import * as S from './Player.Styles'


export function Player() {
  return (
    <S.PlayerTrackPlay>
        <TrackPlay/>
      <TrackPlayLike/>
    </S.PlayerTrackPlay>
  )
}

