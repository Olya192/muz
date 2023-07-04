import { Search } from './SearchSvg'
import React from "react"

export function CenterBlockSearch() {
  return (
    <React.Fragment>
      <svg className="search__svg"><Search/></svg>
      <input
        className="search__text"
        type="search"
        placeholder="Поиск"
        name="search"
      ></input>
    </React.Fragment>
  )
}
