import "../../App.css";
import { useEffect, useState } from "react";
// import { cardList } from "../../../data";
import { Wrapper } from "../../Global.styled";
import { Header } from "../../components/header/Header";
import { Main } from "../../components/main/Main";
import { Outlet } from "react-router-dom";
import { getTasks } from "../../api/api";

export const MainPage = ({ theme, setTheme, isAuth }) => {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [addError, setAddError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getTasks(isAuth.token)
      .then((tasks) => {
        setCards(tasks.tasks);
      })
      .catch((error) => {
        setAddError(error.message);
      }).finally(() => {
        setIsLoading(false)
      })
  }, [isAuth.token]);

  const addCard = () => {
    const newCard = {
      _id: cards.length + 1,
      topic: "Web Design",
      title: "New task",
      date: "21.04.2025",
      status: "В работе",
    };
    setCards([...cards, newCard]);
  };

  return (
    <Wrapper>
      <Outlet />
      <Header addCard={addCard} isAuth={isAuth} theme={theme} setTheme={setTheme}></Header>

      {isLoading ? (
        <p className="loader">Данные загружаются...</p>
      ) : addError ? (<p>{addError}</p>) : (
        <Main cards={cards}></Main>
      )}
    </Wrapper>
  );
};
