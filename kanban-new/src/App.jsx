import { useState } from "react";
import { GlobalStyle } from "./Global.styled";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import { AppRoutes } from "./router/AppRoutes";


function App() {
  const [theme, setTheme] = useState("lightTheme");
  
  return (
    <ThemeProvider theme={theme === "lightTheme" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <AppRoutes theme={theme} setTheme={setTheme}/>
    </ThemeProvider>
  );
}

export default App;
