import { styled } from 'styled-components'
import { BarPlayer } from './bar/barPlayer/BarPlayer'
import { Main } from './main/Main'
import * as S from './ContainerStyles'
import { getTodos } from '../api'
import { useEffect, useState } from 'react'

export function Container() {
  const [items, setItems] = useState()
  const [loading, setLoading] = useState(true)
  const [selectedTrack, setSelectedTrack] = useState(null)
  const handleSelectedTrack = (item) => {
    setSelectedTrack(item)
  }

  useEffect(() => {
    getTodos().then((items) => {
      setItems(items)
      setLoading(false)
    })
  }, [])

  return (
    <S.Container>
      <Main
        items={items}
        setItems={setItems}
        loading={loading}
        handleSelectedTrack={handleSelectedTrack}
      />
      <S.Bar>
        {selectedTrack ? <BarPlayer selectedTrack={selectedTrack} /> : null}
      </S.Bar>
      <footer className="footer"></footer>
    </S.Container>
  )
}
