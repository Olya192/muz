import { findAllByAltText } from '@testing-library/react'
import React, { useEffect } from 'react'
import { useState } from 'react'
import * as S from './CenterBlockFilter.Styles'
import { getTracklist, getFilter } from '../../../store/selectors/tracksSelectors'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '../../../store/actions/creators/tracksCreators'

export function CenterBlockFilter() {
  const initial = {
    artist: false,
    year: false,
    genre: false,
  }

  const dispatch = useDispatch()
  const [clicks, setClicks] = useState(initial)


  const handClick = (e) => {
    const key = e.target.name
    setClicks((prev) => ({ ...initial, [key]: !prev[key] }))
  }

  const items = useSelector(getTracklist)

  const [authors, setAuthors] = useState([])
  const [genre, setGenre] = useState([])

  const setFilterTrackAuthor = (el) => dispatch(setFilter({ author: el }))
  const setFilterTrackGenre = (el) => dispatch(setFilter({ genre: el }))
  const setSortTrackYears = (el) => dispatch(setFilter({ years: el }))


  const filter = useSelector(getFilter)

  useEffect(() => {
    const list = []
    const genreList = []

    for (let i = 0; i < items.length; i++) {
      const item = items[i]
      list.push(item.author)
      genreList.push(item.genre)
    }

    const seen = {};
    setAuthors(list.filter((item) => {
      if (item !== '-') return seen.hasOwnProperty(item) ? false : (seen[item] = true);
      else return false
    }));

    setGenre(genreList.filter((item) => {
      if (item !== '-') return seen.hasOwnProperty(item) ? false : (seen[item] = true);
      else return false
    }));


  }, [items])

  const filterTracks = (item) => {

    const element = filter.author.find((i) => i === item)
    const result = [...filter.author]

    if (!element) {
      result.push(item)
    } else {
      for (let i = result.length - 1; i >= 0; --i) {
        if (result[i] == item) {
          result.splice(i, 1);
        }
      }
    }

    console.log(result);
    setFilterTrackAuthor(result)

  }



  const filterGenre = (item) => {

    const element = filter.genre.find((i) => i === item)
    const result = [...filter.genre]

    if (!element) {
      result.push(item)
    } else {
      for (let i = result.length - 1; i >= 0; --i) {
        if (result[i] == item) {
          result.splice(i, 1);
        }
      }
    }

    setFilterTrackGenre(result)

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
          {authors.map((item, index) => <p key={index} onClick={() => filterTracks(item)}
            className={filter.author.find(el => el === item) ? 'active' : ''}>{item}</p>)}
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
          <p onClick={() => setSortTrackYears(-1)} className={filter.years === -1 ? 'active' : ''}>Сначала новые</p>
          <p onClick={() => setSortTrackYears(1)} className={filter.years === 1 ? 'active' : ''}>Сначала старые</p>
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
          {genre.map((item, index) => <p key={index} onClick={() => filterGenre(item)}
            className={filter.genre.find(el => el === item) ? 'active' : ''}>{item}</p>)}
        </S.DropdownContent>
      </S.FilterTitle>
    </React.Fragment>
  )
}
