import { styled } from 'styled-components'
import { BarPlayer } from './bar/barPlayer/BarPlayer'
import { Main } from './main/Main'
import * as S from './ContainerStyles'
import { getTodos } from '../api'
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSetTrack, getTracklist } from '../store/selectors/tracksSelectors'
import { setPlaylist, setTrack } from '../store/actions/creators/tracksCreators'

export function Container() {

  const [loading, setLoading] = useState(true)
  const [addTodoError, setAddTodoError] = useState(null)

  const dispatch = useDispatch()


  const items = useSelector(getTracklist)
  const setItems = (el) => dispatch(setPlaylist(el))

  const selectedTrack = useSelector(getSetTrack)
  const setSelectedTrack = (el) => dispatch(setTrack(el))

  const handleSelectedTrack = (item) => {
    setSelectedTrack(item)
  }

  useEffect(() => {
    getTodos()
      .then((items) => {
        setItems(items)
        setLoading(false)
      })
      .catch((error) => {
        setAddTodoError(error.message)
      })
  }, [])

  return (
    <S.Container>
      <Main
        items={items}
        setItems={setItems}
        loading={loading}
        handleSelectedTrack={handleSelectedTrack}
        setAddTodoError={setAddTodoError}
      />
      <S.Bar>
        {selectedTrack ? (
          <BarPlayer
            selectedTrack={selectedTrack}
            setSelectedTrack={setSelectedTrack}
            items={items}
          />
        ) : null}
      </S.Bar>
      <footer className="footer"></footer>
    </S.Container>
  )
}
