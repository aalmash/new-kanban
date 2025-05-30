import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { MainPage } from "../pages/MainPage/MainPage";
import { ExitPage } from "../pages/ExitPage/ExitPage";
import { CardPage } from "../pages/CardPage/CardPage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { RegistrationPage } from "../pages/RegistrationPage/RegistrationPage";
import { NotFoundPage } from "../pages/NotFoundPage/NotFoundPage";
import { useState } from "react";
import { PrivateRoute } from "./PrivateRoute";

export const AppRoutes = ({ theme, setTheme }) => {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <Routes>
      <Route element={<PrivateRoute isAuth={isAuth} />}>
        <Route
          path={routes.main}
          element={<MainPage theme={theme} setTheme={setTheme} />}
        >
          <Route
            path={routes.exit}
            element={<ExitPage setIsAuth={setIsAuth} />}
          />
          <Route path={routes.card} element={<CardPage />} />
        </Route>
      </Route>
      <Route
        path={routes.login}
        element={<LoginPage setIsAuth={setIsAuth} />}
      />
      <Route path={routes.register} element={<RegistrationPage />} />
      <Route path={routes.notFound} element={<NotFoundPage />} />
    </Routes>
  );
};
