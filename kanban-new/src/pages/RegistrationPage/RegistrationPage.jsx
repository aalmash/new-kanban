import { Link, useNavigate } from "react-router-dom";
import { Wrapper } from "../../Global.styled";
import * as S from "../LoginPage/LoginPage.styled";
import { routes } from "../../router/routes";
import { useState } from "react";
import { register } from "../../api/api";

export const RegistrationPage = ({ setIsAuth }) => {
  const [formData, setFormData] = useState({
    login: "",
    password: "",
    name: "",
  });
  const [addError, setAddError] = useState(null);

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (
      formData.login === "" ||
      formData.password === "" ||
      formData.name === ""
    ) {
      setAddError("Заполните все поля!");
      return;
    }

    if (formData.password.length < 3) {
      setAddError("Пароль должен содержать хотя бы 3 символа!");
      return;
    }

    register(formData)
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
                <h2>Регистрация</h2>
              </S.ModalTtl>
              <S.ModalFormRegister
                onSubmit={handleRegister}
                id="formLogUp"
                action="#"
              >
                <S.ModalInput
                  type="text"
                  name="first-name"
                  id="first-name"
                  placeholder="Имя"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
                <S.ModalInput
                  type="text"
                  name="login"
                  id="loginReg"
                  placeholder="Эл. почта"
                  onChange={(e) => {
                    setFormData({ ...formData, login: e.target.value });
                    setAddError(null);
                  }}
                />
                <S.ModalInput
                  type="password"
                  name="password"
                  id="passwordFirst"
                  placeholder="Пароль"
                  onChange={(e) => {
                    setFormData({ ...formData, password: e.target.value });
                    setAddError(null);
                  }}
                />
                {addError && <S.ErrorMessage>{addError}</S.ErrorMessage>}
                <S.ModalBtn type="submit" id="SignUpEnter">
                  <a>Зарегистрироваться</a>{" "}
                </S.ModalBtn>
                <S.ModalFormGroup>
                  <p>
                    Уже есть аккаунт?{" "}
                    <Link to={routes.login}>Войдите здесь</Link>
                  </p>
                </S.ModalFormGroup>
              </S.ModalFormRegister>
            </S.ModalBlock>
          </S.Modal>
        </S.ContainerSingin>
      </Wrapper>
    </>
  );
};
