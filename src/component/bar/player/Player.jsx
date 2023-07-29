import { TrackPlay } from "../trackPlay/TrackPlay";
import { TrackPlayLike } from "../trackPlayLike/TrackPlayLike";
import * as S from './Player.Styles'


export function Player({selectedTrack}) {
  return (
    <S.PlayerTrackPlay>
        <TrackPlay selectedTrack={selectedTrack}/>
      <TrackPlayLike/>
    </S.PlayerTrackPlay>
  )
}

