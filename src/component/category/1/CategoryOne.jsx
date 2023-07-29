import { BarPlayer } from './bar/barPlayer/BarPlayer'
import { Main } from './main/Main'

import * as S from './CategoryOne.Styles'

export function CategoryOne() {
  return (
    <S.Container>
       <Main />
      <S.Bar >
      <BarPlayer/>
      </S.Bar>
      <footer className="footer"></footer>
    </S.Container>
  )
}

