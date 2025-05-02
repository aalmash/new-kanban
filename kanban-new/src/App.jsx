import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import { PopBrowse } from "./components/popups/popBrowse/PopBrowse";
import { PopNewCard } from "./components/popups/popNewCard/PopNewCard";
import { PopUser } from "./components/popups/popUser/PopUser";
import { cardList } from "../data";

function App() {
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
    }, 2000);
  }, []);
  return (
    <>
      <div className="wrapper">
        <PopUser></PopUser>
        <PopNewCard></PopNewCard>
        <PopBrowse></PopBrowse>
        <Header addCard={addCard}></Header>
        {isLoading ? (
          <p className="container loader">Данные загружаются...</p>
        ) : (
          <Main cards={cards}></Main>
        )}
      </div>
    </>
  );
}

export default App;
