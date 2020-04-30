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

import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import IconButton from "@material-ui/core/IconButton";
import { ThemeProvider } from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import Tooltip from "@material-ui/core/Tooltip";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import React, { lazy, Suspense, useMemo, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ErrorCatcher from "./components/ErrorCatcher";
import { Footer } from "./components/Footer";
import HomePage from "./pages/HomePage";
import { darkTheme, lightTheme, theme } from "./theme";

const App = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const [isDarkMode, switchDarkMode] = useState(prefersDarkMode);

  const theme = useMemo(
    () =>
      createMuiTheme(isDarkMode ? darkTheme : lightTheme),
    [isDarkMode]
  );

  // const HomePage = lazy(() => import("./pages/HomePage"));
  const ProjectPage = lazy(() => import("./pages/ProjectPage"));
  const ErrorPage = lazy(() => import("./pages/ErrorPage"));

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Container maxWidth={"lg"} style={styles.main}>
          <Tooltip
            title={isDarkMode ? "Activer le mode jour" : "Activer le mode nuit"}
            placement="left">
            <IconButton
              style={styles.darkModeButton}
              onClick={() => switchDarkMode(!isDarkMode)}>
              <FontAwesomeIcon
                icon={isDarkMode ? faSun : faMoon}
                fixedWidth
              />
            </IconButton>
          </Tooltip>
          <ErrorCatcher>
            <Suspense fallback={null}>
              <Switch>
                <Route path="/project/:projectName">
                  <ProjectPage/>
                </Route>
                <Route path="/">
                  <HomePage/>
                </Route>
                {/* In last position so, if no route is matched, we fall in error page */}
                <Route>
                  <ErrorPage error={"404 not found"}/>
                </Route>
              </Switch>
              {/* Outside of the switch so it matches every route*/}
              <Route>
                <Footer/>
              </Route>
            </Suspense>
          </ErrorCatcher>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
};

const styles = {
  main: {
    marginTop: theme.spacing(3)
  },
  darkModeButton: {
    position: "absolute",
    top: theme.spacing(4),
    right: theme.spacing(4)
  }
};

export default App;
