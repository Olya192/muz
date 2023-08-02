import { styled } from 'styled-components'
import { BarPlayer } from './bar/barPlayer/BarPlayer'
import { Main } from './main/Main'
import * as S from './ContainerStyles'
import { getTodos } from '../api'
import { useEffect, useRef, useState } from 'react'

export function Container() {
  const [items, setItems] = useState()
  const [loading, setLoading] = useState(true)
  const [selectedTrack, setSelectedTrack] = useState(null)
  const [addTodoError, setAddTodoError] = useState(null)

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
