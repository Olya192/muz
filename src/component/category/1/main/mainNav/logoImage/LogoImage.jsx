import * as S from './LogoImage.Styles'
import logo from './logo.png'

export function LogoImage() {
    return(
        <S.LogoImage src={logo} alt="logo"></S.LogoImage> 
    )
}