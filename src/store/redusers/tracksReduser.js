import { TRACKS_TYPE } from "../actions/types/tracksType";

export const INITIAL_STATE = {

    tracksList: [],
    currentTrack: null,
    isPlaying: false

}


export function tracksReducer(state = INITIAL_STATE, action) {

    switch (action.type) {
        case TRACKS_TYPE.SET_TRACKSLIST:
            return {
                ...state,
                tracksList: action.payload
            }

        case TRACKS_TYPE.SET_TRACK:
            return {
                ...state,
                currentTrack: action.payload
            }

        case TRACKS_TYPE.IS_PLAYING:
            return {
                ...state,
                isPlaying: action.payload
            }
        default:
            return state;
    }

}