import { Link, useNavigate } from "react-router-dom";
import { Wrapper } from "../../Global.styled";
import * as S from "./LoginPage.styled";
import { routes } from "../../router/routes";
import { login } from "../../api/api";
import { useState } from "react";

export const LoginPage = ({ setIsAuth }) => {
  const [formData, setFormData] = useState({
    login: "",
    password: "",
  });
  const [addError, setAddError] = useState(null);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (formData.login === "" || formData.password === "") {
      setAddError("Заполните все поля!");
      return;
    }

    login(formData)
      .then((res) => {
        setIsAuth(res.user);
        navigate(routes.main);
      })
      .catch((error) => {
        setAddError(error.message);
      });
  };
  return (
    <>
      <Wrapper>
        <S.ContainerSingin>
          <S.Modal>
            <S.ModalBlock>
              <S.ModalTtl>
                <h2>Вход</h2>
              </S.ModalTtl>
              <S.ModalFormLogin
                onSubmit={handleLogin}
                id="formLogIn"
                action="#"
              >
                <S.ModalInput
                  type="text"
                  name="login"
                  id="formlogin"
                  placeholder="Эл. почта"
                  onChange={(e) => {
                    setFormData({ ...formData, login: e.target.value });
                    setAddError(null);
                  }}
                />
                <S.ModalInput
                  type="password"
                  name="password"
                  id="formpassword"
                  placeholder="Пароль"
                  onChange={(e) => {
                    setFormData({ ...formData, password: e.target.value });
                    setAddError(null);
                  }}
                />
                {addError && (
                  <S.ErrorMessage>{addError}</S.ErrorMessage>
                )}
                <S.ModalBtn type="submit" id="btnEnter">
                  <a>Войти</a>
                </S.ModalBtn>
                <S.ModalFormGroup>
                  <p>Нужно зарегистрироваться?</p>
                  <Link to={routes.register}>Регистрируйтесь здесь</Link>
                </S.ModalFormGroup>
              </S.ModalFormLogin>
            </S.ModalBlock>
          </S.Modal>
        </S.ContainerSingin>
      </Wrapper>
    </>
  );
};
