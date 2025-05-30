import { Link, useNavigate } from "react-router-dom";
import { Wrapper } from "../../Global.styled";
import * as S from "./LoginPage.styled";
import { routes } from "../../router/routes";

export const LoginPage = ({ setIsAuth }) => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setIsAuth(true);
    navigate(routes.main);
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
              <S.ModalFormLogin id="formLogIn" action="#">
                <S.ModalInput
                  type="text"
                  name="login"
                  id="formlogin"
                  placeholder="Эл. почта"
                />
                <S.ModalInput
                  type="password"
                  name="password"
                  id="formpassword"
                  placeholder="Пароль"
                />
                <S.ModalBtn onClick={handleLogin} id="btnEnter">
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
