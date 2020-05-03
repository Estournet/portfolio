/*
 * Vincent Monard
 *     Copyright (C) 2020  Vincent Monard
 *
 *     This program is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU General Public License as published by
 *     the Free Software Foundation, either version 3 of the License, or
 *     (at your option) any later version.
 *
 *     This program is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *     GNU General Public License for more details.
 *
 *     You should have received a copy of the GNU General Public License
 *     along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
import { Container, CssBaseline, useMediaQuery } from "@material-ui/core";
import { frFR } from "@material-ui/core/locale";
import {
  createMuiTheme,
  makeStyles,
  responsiveFontSizes,
  ThemeProvider
} from "@material-ui/core/styles";
import { AppBar, ErrorCatcher, Footer } from "components";
import HomePage from "pages/HomePage";
import React, { lazy, Suspense, useEffect, useMemo, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { darkTheme, lightTheme } from "theme";

const IS_DARK_MODE = "isDarkMode";

const App = () => {
  const classes = useStyles();

  // Checks localStorage setting
  const localStorageDarkMode = JSON.parse(localStorage.getItem(IS_DARK_MODE));

  // Checks OS or browser setting
  const browserOrOSDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  // If no setting in localStorage, use OS/browser setting
  const [useDarkMode, setUseDarkMode] = useState(localStorageDarkMode === null ? browserOrOSDarkMode : localStorageDarkMode);

  useEffect(() => {
    localStorage.setItem(IS_DARK_MODE, `${useDarkMode}`);
  }, [useDarkMode]);

  const theme = useMemo(
    () =>
      responsiveFontSizes(createMuiTheme(useDarkMode ? darkTheme : lightTheme, frFR)),
    [useDarkMode]
  );

  const PecheProjectPage    = lazy(() => import("pages/projects/PecheProjectPage")),
        EcarlateProjectPage = lazy(() => import("pages/projects/EcarlateProjectPage")),
        LucyProjectPage     = lazy(() => import("pages/projects/LucyProjectPage")),
        ErrorPage           = lazy(() => import("pages/ErrorPage"));

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Container maxWidth={"lg"} className={classes.main}>
          <ErrorCatcher>
            <Suspense fallback={null}>
              <AppBar
                useDarkMode={useDarkMode}
                setUseDarkMode={setUseDarkMode}
              />
              <Switch>
                <Route path="/lucy">
                  <LucyProjectPage/>
                </Route>
                <Route path="/pêche">
                  <PecheProjectPage/>
                </Route>
                <Route path="/écarlate">
                  <EcarlateProjectPage/>
                </Route>
                <Route exact path="/">
                  <HomePage/>
                </Route>
                {/* In last position so, if no route is matched, we fall in error page */}
                <Route>
                  <ErrorPage error={"404 not found"}/>
                </Route>
              </Switch>
              <Footer/>
            </Suspense>
          </ErrorCatcher>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
};

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  }
}));

export default App;
