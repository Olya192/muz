import { TrackPlay } from "./TrackPlay";
import { TrackPlayLike } from "./TrackPlayLike";

export function Player() {
  return (
    <div className="player__track-play track-play">
      <TrackPlay/>
      <TrackPlayLike/>
    </div>
  )
}
