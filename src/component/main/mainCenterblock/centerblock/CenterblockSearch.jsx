import { Search } from './SearchSvg'
import React from "react"
import * as S from './CenterblockSearch.Styles'



export function CenterBlockSearch() {
  return (
    <React.Fragment>
      <S.SearchSvg><Search/></S.SearchSvg>
      <S.SearchText
        type="search"
        placeholder="Поиск"
        name="search"
      ></S.SearchText>
    </React.Fragment>
  )
}
