import { TRACKS_TYPE } from "../types/tracksType";


export const setPlaylist = (newPlaylist) => {
    return {
        type: TRACKS_TYPE.SET_TRACKSLIST,
        payload: newPlaylist
    }
}

export const setTrack = (newTrack) => {
    return {
        type: TRACKS_TYPE.SET_TRACK,
        payload: newTrack
    }
}

export const setPlaying = (isPlaying) => {
    return {
        type: TRACKS_TYPE.IS_PLAYING,
        payload: isPlaying
    }
}

export const setLoading = (loading) => {
    return {
        type: TRACKS_TYPE.SET_LOADING,
        payload: loading
    }
}

export const setError = (error) => {
    return {
        type: TRACKS_TYPE.SET_ERROR,
        payload: error
    }
}

export const setLike = ({ user, id }) => {
    return {
        type: TRACKS_TYPE.SET_LIKE,
        payload: user,
        id: id
    }
}

export const setDislike = ({ user, id }) => {
    return {
        type: TRACKS_TYPE.SET_DISLIKE,
        payload: user,
        id: id
    }
}

export const setFilter = ({ author, years, genre }) => {
    return {
        type: TRACKS_TYPE.SET_FILTER,
        author: author,
        years: years,
        genre: genre
    }
}