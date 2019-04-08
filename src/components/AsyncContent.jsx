import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import asyncComponent from "./AsyncComponent.jsx";

const AsyncErrorPage = asyncComponent(() => import("../pages/ErrorPage.jsx"));
const AsyncHomePage = asyncComponent(() => import("../pages/HomePage.jsx"));
const AsyncProjectPage = asyncComponent(() =>
  import("../pages/ProjectPage.jsx")
);

/**
 * Charge le contenu de la page dynamiquement. Ainsi, webpack peut importer à la volée les différents bundles nécéssaires.
 * Ca optimise grandement les temps de changement, notament sur les connexion les plus restreintes.
 * @returns {*}
 * @constructor
 */
const AsyncContent = () => (
  <Switch>
    <Route
      path="/project/:projectName"
      render={newProps => <AsyncProjectPage {...newProps} />}
    />
    <Route path="/" render={newProps => <AsyncHomePage {...newProps} />} />
    <Route
      render={newProps => (
        <AsyncErrorPage error={"404 Not found"} {...newProps} />
      )}
    />
  </Switch>
);

export default withRouter(AsyncContent);
