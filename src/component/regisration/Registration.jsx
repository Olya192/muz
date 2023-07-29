import * as S from './Registration.Styles'
import logo from './logo.png'

export const Registration = () => {
  return (
 
    <S.Centr className="centr">
      <S.RegistForm className="regist_form">
        <S.LogoImage src={logo} alt="logo"></S.LogoImage>
        <S.RegistFormAll className="regist_form-all" action="#">
          <S.RegistInput
            className="regist_input-form"
            type="text"
            placeholder="Логин"
          />
          <S.RegistInput
            className="regist_input-form"
            type="password"
            placeholder="Пароль"
          />
          <S.RegistInput
            className="regist_input-form"
            type="password"
            placeholder=" Повторите пароль"
          />

          <S.RegistFormButton className="regist_form-button">
            {' '}
            Зарегистрироваться{' '}
          </S.RegistFormButton>
        </S.RegistFormAll>
      </S.RegistForm>
    </S.Centr>
  )
}
