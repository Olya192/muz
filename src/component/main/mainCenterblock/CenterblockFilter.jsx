import { findAllByAltText } from '@testing-library/react'
import React from 'react'
import { useState } from 'react'
import * as S from './CenterBlockFilter.Styles'


export function CenterBlockFilter() {
  const initial = {
    artist: false,
    year: false,
    genre: false,
  }
  const [clicks, setClicks] = useState(initial)

  const handClick = (e) => {
    const key = e.target.name
    setClicks((prev) => ({ ...initial, [key]: !prev[key] }))
  }

  return (
    <React.Fragment>
      <S.FilterTitle>Искать по:</S.FilterTitle>
      <S.Dropdown>
        <S.DropdownButton
          onClick={handClick}
          name="artist"
          active={clicks.artist}
        >
          исполнителю
        </S.DropdownButton>
        <S.DropdownContent id="myDropdown" show={clicks.artist}>
          <p>Michael Jackson </p>
          <p> Frank Sinatra </p>
          <p>Calvin Harris </p>
          <p>Zhu </p>
          <p>Arctic Monkeys</p>
        </S.DropdownContent>
      </S.Dropdown>
      <S.FilterTitle>
        <S.DropdownButton
          onClick={handClick}
          name="year"
          active={clicks.year}
        >
          году выпуска
        </S.DropdownButton>
        <S.DropdownContent id="myDropdown" show={clicks.year}>
          <p>Michael Jackson </p>
          <p> Frank Sinatra </p>
          <p>Calvin Harris </p>
          <p>Zhu </p>
          <p>Arctic Monkeys</p>
        </S.DropdownContent>
      </S.FilterTitle>
      <S.FilterTitle>
        <S.DropdownButton
          onClick={handClick}
          name="genre"
          active={clicks.genre}
        >
          жанру
        </S.DropdownButton>
        <S.DropdownContent id="myDropdown" show={clicks.genre}>
          <p>Michael Jackson </p>
          <p> Frank Sinatra </p>
          <p>Calvin Harris </p>
          <p>Zhu </p>
          <p>Arctic Monkeys</p>
        </S.DropdownContent>
      </S.FilterTitle>
    </React.Fragment>
  )
}
