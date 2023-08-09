import { TRACKS_TYPE } from "../types/tracksType";


export const setPlaylist = (newPlaylist) => {
return{
    type: TRACKS_TYPE.SET_TRACKSLIST,
    payload: newPlaylist
}
}

export const setTrack = (newTrack) => {
    return{
        type: TRACKS_TYPE.SET_TRACK,
        payload: newTrack
    }
}

export const setPlaying = (isPlaying) => {
    return{
        type: TRACKS_TYPE.IS_PLAYING,
        payload: isPlaying
    }
}