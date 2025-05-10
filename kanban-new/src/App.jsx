import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import { PopBrowse } from "./components/popups/popBrowse/PopBrowse";
import { PopNewCard } from "./components/popups/popNewCard/PopNewCard";
import { PopUser } from "./components/popups/popUser/PopUser";
import { cardList } from "../data";
import { GlobalStyle, Wrapper } from "./Global.styled";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";


function App() {
  const [cards, setCards] = useState(cardList);
  const [isLoading, setIsLoading] = useState(false);
  const [theme, setTheme] = useState("lightTheme");

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
    <ThemeProvider theme={theme === "lightTheme" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Wrapper>
        <PopUser></PopUser>
        <PopNewCard></PopNewCard>
        <PopBrowse></PopBrowse>
        <Header addCard={addCard} theme={theme} setTheme={setTheme}></Header>
        {isLoading ? (
          <p className="loader">Данные загружаются...</p>
        ) : (
          <Main cards={cards}></Main>
        )}
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
