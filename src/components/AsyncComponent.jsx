/*
 * Vincent Monard
 *     Copyright (C) 2019  Vincent Monard
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

import React from "react";

/**
 * Charge le contenu de la page dynamiquement. Ainsi, webpack peut importer à la volée les différents bundles nécéssaires.
 * Ca optimise grandement les temps de changement, notament sur les connexion les plus restreintes.
 * @param importComponent un import de composant à afficher. Exemple : asyncComponent(() => import('containers/HomePageContainer'));
 * @returns {AsyncComponent} le composant une fois que ce dernier a été chargé.
 * En attendant que celui ci charge, revoit null (on pourrait mettre une barre de chargement)
 */
const asyncComponent = importComponent => {
  class AsyncComponent extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = { Component: null };
    }

    async componentDidMount() {
      const { default: Component } = await importComponent();

      this.setState({ Component });
    }

    render() {
      const { Component } = this.state;

      return Component ? <Component {...this.props} /> : null;
    }
  }

  return AsyncComponent;
};

export default asyncComponent;
