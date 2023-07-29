import * as S from './Authorization.Styles'
import logo from './logo.png'

export const Authorization = () => {
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

          <div>
            <S.LoginFormButton className="regist_form-button">
              {' '}
              Войти{' '}
            </S.LoginFormButton>
            <S.RegistFormButton className="regist_form-button">
              {' '}
              Зарегистрироваться{' '}
            </S.RegistFormButton>
          </div>
        </S.RegistFormAll>
      </S.RegistForm>
    </S.Centr>
  )
}
