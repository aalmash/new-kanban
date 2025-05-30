import "../../App.css";
import { useEffect, useState } from "react";
import { cardList } from "../../../data";
import { Wrapper } from "../../Global.styled";
import { Header } from "../../components/header/Header";
import { Main } from "../../components/main/Main";
import { Outlet } from "react-router-dom";

export const MainPage = ({ theme, setTheme }) => {
  const [cards, setCards] = useState(cardList);
  const [isLoading, setIsLoading] = useState(false);

  const addCard = () => {
    const newCard = {
      id: cards.length + 1,
      theme: "Web Design",
      title: "Название задачи",
      date: "21.04.2025",
      status: "Без статуса",
    };
    setCards([...cards, newCard]);
  };

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <Wrapper>
      <Outlet />
      <Header addCard={addCard} theme={theme} setTheme={setTheme}></Header>

      {isLoading ? (
        <p className="loader">Данные загружаются...</p>
      ) : (
        <Main cards={cards}></Main>
      )}
    </Wrapper>
  );
};
