import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { HashRouter, Route, Switch } from "react-router-dom";
import theme from "./theme";
import Decoration from "./components/Decoration";

const App = () => (
  <HashRouter>
    <>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>
        <Switch>
          {/*<Route exact path="/" render={() => <Homepage />} />*/}
          <Route path="/" render={() => <Decoration />} />
        </Switch>
      </MuiThemeProvider>
    </>
  </HashRouter>
);

export default App;
