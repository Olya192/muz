import { deepCopy } from "../../utils/deepCopy";
import { TRACKS_TYPE } from "../actions/types/tracksType";

export const INITIAL_STATE = {

    tracksList: [],
    currentTrack: null,
    isPlaying: false,
    loading: false,
    error: false

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
        case TRACKS_TYPE.SET_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case TRACKS_TYPE.SET_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case TRACKS_TYPE.SET_LIKE:
            {
                const newState = deepCopy(state)
                const item = newState.tracksList.find((el) => el.id === action.id)
                item.stared_user.push(action.payload)
                return newState
            }
        case TRACKS_TYPE.SET_DISLIKE:
            {
                const newState = deepCopy(state)
                const item = newState.tracksList.find((el) => el.id === action.id)
                const newUsers = item.stared_user
                if (newUsers) {
                    const index = newUsers?.findIndex((el) => el.id === action.payload.id);
                    if (index > -1) newUsers.splice(index, 1);
                } else {
                    const index = newState.tracksList?.findIndex((el) => el.id === action.id);
                    if (index > -1) newState.tracksList.splice(index, 1);
                }

                return newState
            }
        default:
            return state;
    }

}