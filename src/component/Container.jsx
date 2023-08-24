import { styled } from 'styled-components'
import { BarPlayer } from './bar/barPlayer/BarPlayer'
import { Main } from './main/Main'
import * as S from './ContainerStyles'
import { getTodos } from '../api'
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSetTrack, getTracklist } from '../store/selectors/tracksSelectors'
import { setPlaylist, setLoading, setError } from '../store/actions/creators/tracksCreators'
import { TrackList } from './trackList/TrackList'

export function Container() {

  const dispatch = useDispatch()
  const setItems = (el) => dispatch(setPlaylist(el))

  const changeLoading = (el) => dispatch(setLoading(el))
  const setAddTodoError = (el) => dispatch(setError(el))

  useEffect(() => {
    changeLoading(true)
    setAddTodoError(false)
    getTodos()
      .then((items) => {
        setItems(items)
        changeLoading(false)
      })
      .catch((error) => {
        setAddTodoError(error.message)
        changeLoading(false)
      })
  }, [])

  return (
    <TrackList
      title={`Треки`}
    />
  )
}

