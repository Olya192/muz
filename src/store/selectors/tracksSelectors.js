export function getTracklist(store) {
    return store.tracks.tracksList
}

export function getSetTrack(store) {
    return store.tracks.currentTrack
}
export function getPlayTrack(store) {
    return store.tracks.isPlaying
}

export function getLoading(store) {
    return store.tracks.loading
}

export function getError(store) {
    return store.tracks.error
}

export function getFilter(store) {
    return store.tracks.filter
}
