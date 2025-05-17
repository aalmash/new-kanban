import { Link, useNavigate } from "react-router-dom";
import * as S from "./PopUser.styled";
import { routes } from "../../../router/routes";

export const PopUser = ({ setIsAuth }) => {
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    setIsAuth(false);
    navigate(routes.login);
  };

  return (
    <S.PopExit>
      <S.PopExitContainer>
        <S.PopExitBlock>
          <S.PopExitTtl>
            <h2>Выйти из аккаунта?</h2>
          </S.PopExitTtl>
          <S.PopExitFormGroup>
            <S.PopExitYes onClick={handleLogout}>Да, выйти</S.PopExitYes>
            <S.PopExitNo as={Link} to={routes.main}>
              Нет, остаться
            </S.PopExitNo>
          </S.PopExitFormGroup>
        </S.PopExitBlock>
      </S.PopExitContainer>
    </S.PopExit>
  );
};
