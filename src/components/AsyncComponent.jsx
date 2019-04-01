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
    constructor() {
      super();
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
