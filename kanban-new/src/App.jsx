import "./App.css";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import { PopBrowse } from "./components/popups/popBrowse/PopBrowse";
import { PopNewCard } from "./components/popups/popNewCard/PopNewCard";
import { PopUser } from "./components/popups/popUser/PopUser";

function App() {
  return (
    <>
      <div className="wrapper">
        <PopUser></PopUser>
        <PopNewCard></PopNewCard>
        <PopBrowse></PopBrowse>
        <Header></Header>
        <Main></Main>
      </div>
    </>
  );
}

export default App;
