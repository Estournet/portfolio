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

import { Grid, Paper, Typography } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import React from "react";
import {
  logoEcarlate,
  screenshotEcarlate1,
  screenshotEcarlate2,
  screenshotEcarlate3,
  screenshotEcarlate4,
  screenshotEcarlate5,
  screenshotEcarlate6
} from "assets";
import { ChipGroup } from "components/ChipGroup";
import { Gallery } from "components/Gallery";
import { nodeLanguage, reactLanguage } from "datas/languages";

const screenshots = [
  {
    file: screenshotEcarlate1,
    description: "lorem ipsum dolor sit amet"
  },
  {
    file: screenshotEcarlate2
  },
  {
    file: screenshotEcarlate3,
    description: "lorem ipsum dolor sit amet"
  },
  {
    file: screenshotEcarlate4,
    description: "lorem ipsum dolor sit amet"
  },
  {
    file: screenshotEcarlate5,
    description: "lorem ipsum dolor sit amet"
  },
  {
    file: screenshotEcarlate6,
    description: "lorem ipsum dolor sit amet"
  }
];

const EcarlateProjectPage = () => {
  const classes = useStyles();


  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <img
            src={logoEcarlate}
            alt="Logo du projet"
            className={classes.logo}
          />
          <div>
            <div className={classes.inline}>
              <Typography align="center" variant="h3">
                Écarlate
              </Typography>
            </div>
            <ChipGroup chips={[reactLanguage, nodeLanguage]}/>
          </div>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h4" className={classes.title}>
          En quelques mots
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1" paragraph>
          Mon projet de <b>stage de fin d'études</b>. Pendant 6 mois, j'ai développé Écarlate, un
          site de <b>gestion de projet</b>, qui présente les projets de façon globale et, ainsi,
          permet en un seul
          coup d'oeil de voir quels projets méritent une attention particulière.
        </Typography>
        <Typography variant="body1" paragraph>
          On peut créer des projets et, semaine après semaine, mettre à jour l'état du projet et
          souligner les soucis potentiels. On a donc les developpeurs et chefs de projets qui
          mettent à jour les projets dont ils s'occupent et les managers qui peuvent consulter, d'un
          seul coup d'oeil, l'état de tous les projets. Le site permet notament d'avoir des
          utilisateurs avec <b>différents privilèges</b>, qui leur permet d'effectuer certaines
          actions
          (ajouter, supprimer, modifier...). Il a donc fallu gérer en front-end ainsi qu'en back-end
          que chaque utilisateur avait le droit d'effectuer une action.
        </Typography>
        <Typography variant="body1" paragraph>
          J'ai développé ce site en <b>totale autonomie</b>, j'ai donc pu choisir les technologies à
          utiliser, la charte graphique, les outils que je veux utiliser... J'ai fait le site
          en React, en utilisant notamment les libraires Material-UI, React Router, Redux. Le
          back-end est un serveur Node.JS avec le framework hapijs, qui permet de créer facilement
          des API REST. Enfin, la base de données est une base MongoDB. Il a aussi fallu
          rendre le site facilement déployable, j'ai donc fait un petit script Docker pour que
          Jenkins puisse déployer le site automatiquement.
        </Typography>
        <Typography variant="body1" paragraph>
          Vous ne pouvez, cenpendant, pas voir le projet, le projet étant interne à l'entreprise.
          Seules quelques captures d'écran sont disponibles.
        </Typography>

      </Grid>
      <Grid item xs={12}>
        <Typography variant="h4" className={classes.title}>
          Galerie
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Gallery files={screenshots} cellHeight={400} cols={2.5}/>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1)
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    flexWrap: "wrap",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing()
    }

  },
  logo: {
    maxWidth: "128px",
    margin: theme.spacing(),
    [theme.breakpoints.down("sm")]: {
      maxWidth: "64px"
    }
  },
  inline: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }
}));

export default EcarlateProjectPage;
