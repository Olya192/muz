export function getTracklist(store) {
    return store.tracks.tracksList
}

export function getSetTrack(store) {
    return store.tracks.currentTrack
}
export function getPlayTrack(store) {
    return store.tracks.isPlaying
}

