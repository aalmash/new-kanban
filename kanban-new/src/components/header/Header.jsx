import { useState } from "react";
import * as S from "./Header.styled";
import { Container } from "../../Global.styled";
import { Link } from "react-router-dom";
import { routes } from "../../router/routes";

export const Header = ({ isAuth, addCard, setTheme, theme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleShowUser = () => {
    setIsOpen((prev) => !prev);
  };

  const toggleTheme = () => {
    setTheme(theme === "lightTheme" ? "darkTheme" : "lightTheme")
  }

  return (
    <S.Header>
      <Container>
        <S.HeaderBlock>
          <S.HeaderLogo>
            <a href="" target="_self">
              <img src={theme === "lightTheme" ? "./logo.png" : "./logo_dark.png"} alt="logo" />
            </a>
          </S.HeaderLogo>
          <S.HeaderNav>
            <S.HeaderBtn onClick={addCard} id="btnMainNew">
              <a>Создать новую задачу</a>
            </S.HeaderBtn>
            <S.HeaderUser onClick={toggleShowUser}>{isAuth.name}</S.HeaderUser>

            {isOpen && (
              <S.HeaderPopUserSet id="user-set-target">
                <S.PopUserSetName>{isAuth.name}</S.PopUserSetName>
                <S.PopUserSetMail>{isAuth.login}</S.PopUserSetMail>
                <S.PopUserSetTheme onClick={toggleTheme}>
                  <p>Темная тема</p>
                  <input defaultChecked={theme === "darkTheme"}  type="checkbox" className="checkbox" name="checkbox" />
                </S.PopUserSetTheme>
                <S.PopUserSetButton>
                  <Link to={routes.exit}>Выйти</Link>
                </S.PopUserSetButton>
              </S.HeaderPopUserSet>
            )}
          </S.HeaderNav>
        </S.HeaderBlock>
      </Container>
    </S.Header>
  );
};
