import { Link, useNavigate } from "react-router-dom";
import * as S from "./Authorization.Styles";
import { useEffect, useState } from "react";
import logo from "./logo.png"
import { postAuth, postRegist, postToken } from "../../api";
import { useSetUser } from "../../context/user";


export function Authorization() {
  const navigate = useNavigate();
  const setUser = useSetUser()
  const [isLoginMode, setIsLoginMode] = useState(true)
  const [error, setError] = useState(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");




  const handleLogin = async () => {
    try {
      console.log('Старт');
      const user = await postAuth(email, password)
      const token = await postToken(email, password)
      setUser(user)
      localStorage.setItem("tokenRefresh", token.refresh)
      localStorage.setItem("token", token.access)
      localStorage.setItem("user", JSON.stringify(user))
      console.log('Все ок');
      navigate('/');
    } catch (error) {
      setError(error?.message)
    }
  };

  const handleRegister = async () => {

    if (!email || !password) {
      setError("Укажите почту/пароль")
      return
    }
    if (password !== repeatPassword) {
      setError("Пароли не совпадают")
      return
    }


    try {
      const user = await postRegist(email, password);
      setUser(user)
      localStorage.setItem("token", "token")
      localStorage.setItem("user", JSON.stringify(user))
      navigate('/');
    } catch (error) {
      setError(error?.message)
    }
  };


  useEffect(() => {
    setError(null);
  }, [isLoginMode, email, password, repeatPassword]);

  return (
    <S.PageContainer>
      <S.ModalForm>
        <Link to="/login">
          <S.ModalLogo>
            <S.ModalLogoImage src={logo} alt="logo" />
          </S.ModalLogo>
        </Link>
        {isLoginMode ? (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton onClick={() => handleLogin({ email, password })}>
                Войти
              </S.PrimaryButton>
              <Link onClick={() => setIsLoginMode(false)}>
                <S.SecondaryButton >Зарегистрироваться</S.SecondaryButton>
              </Link>
            </S.Buttons>
          </>
        ) : (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="repeat-password"
                placeholder="Повторите пароль"
                value={repeatPassword}
                onChange={(event) => {
                  setRepeatPassword(event.target.value);
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton onClick={handleRegister}>
                Зарегистрироваться
              </S.PrimaryButton>
            </S.Buttons>
          </>
        )}
      </S.ModalForm>
    </S.PageContainer>
  );
}