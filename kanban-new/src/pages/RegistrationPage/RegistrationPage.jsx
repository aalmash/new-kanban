import { Link } from "react-router-dom";
import { Wrapper } from "../../Global.styled";
import * as S from "../LoginPage/LoginPage.styled"
import { routes } from "../../router/routes";

export const RegistrationPage = () => {
  return (
    <>
      <Wrapper>
        <S.ContainerSingin>
          <S.Modal>
            <S.ModalBlock>
              <S.ModalTtl>
                <h2>Регистрация</h2>
              </S.ModalTtl>
              <S.ModalFormRegister id="formLogUp" action="#">
                <S.ModalInput
                  type="text"
                  name="first-name"
                  id="first-name"
                  placeholder="Имя"
                />
                <S.ModalInput
                  type="text"
                  name="login"
                  id="loginReg"
                  placeholder="Эл. почта"
                />
                <S.ModalInput
                  type="password"
                  name="password"
                  id="passwordFirst"
                  placeholder="Пароль"
                />
                <S.ModalBtn
                  id="SignUpEnter"
                >
                  <a href="#">Зарегистрироваться</a>{" "}
                </S.ModalBtn>
                <S.ModalFormGroup>
                  <p>
                    Уже есть аккаунт? <Link to={routes.login}>Войдите здесь</Link>
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
