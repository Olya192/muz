import { findAllByAltText } from '@testing-library/react'
import React from 'react'
import { useState } from "react"
export function CenterBlockFilter() {

  const initial = {
    artist: false,
    year: false,
    genre: false,
  };
  const [clicks, setClicks] = useState(initial)

  const handClick = (e) => {
    const key = e.target.name
    setClicks((prev) => ({ ...initial, [key]: !prev[key] }))
  }



  return (
    <React.Fragment>
      <div className="filter__title">Искать по:</div>
      <div className="dropdown">
        <button
          onClick={handClick}
          name="artist"
          className={`filter__button button-author _btn-text dropbtn ${clicks.artist? "button-active" : ""}`}
        >
          исполнителю
        </button>
        <div id="myDropdown" className={`dropdown-content ${clicks.artist? "show" : ""}`}>
          <p>Michael Jackson </p>
          <p> Frank Sinatra </p>
          <p>Calvin Harris </p>
          <p>Zhu </p>
          <p>Arctic Monkeys</p>
        </div>
      </div>
      <div className="filter__title">
        <button
          onClick={handClick}
          name="year"
          className={`filter__button button-author _btn-text dropbtn ${clicks.year? "button-active" : ""}`}
        >
          году выпуска
        </button>
        <div id="myDropdown" className={`dropdown-content ${clicks.year? "show" : ""}`}>
          <p >Michael Jackson </p>
          <p> Frank Sinatra </p>
          <p>Calvin Harris </p>
          <p>Zhu </p>
          <p>Arctic Monkeys</p>
        </div>
      </div>
      <div className="filter__title">
        <button
          onClick={handClick}
          name="genre"
          className={`filter__button button-author _btn-text dropbtn ${clicks.genre? "button-active" : ""}`}
        >
          жанру
        </button>
        <div id="myDropdown" className={`dropdown-content ${clicks.genre? "show" : ""}`}>
          <p>Michael Jackson </p>
          <p> Frank Sinatra </p>
          <p>Calvin Harris </p>
          <p>Zhu </p>
          <p>Arctic Monkeys</p>
        </div>
      </div>
    </React.Fragment>
  )
}
