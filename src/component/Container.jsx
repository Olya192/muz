import { styled } from 'styled-components'
import { BarPlayer } from './bar/barPlayer/BarPlayer'
import { Main } from './main/Main'
import * as S from './ContainerStyles'

export function Container() {

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

