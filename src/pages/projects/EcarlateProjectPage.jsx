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

import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Grid, Paper, Typography } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import React from "react";
import { ChipGroup } from "../../components/ChipGroup";
import { Gallery } from "../../components/Gallerie";
import { nodeLanguage, reactLanguage } from "../../datas/languages";


const ecarlate = {
          name: "Écarlate",
          logo: "ecarlate_logo.png",
          banner: "ecarlate_banner.png",
          shortDescription: "Mon projet de stage de fin d'études. Pendant 6 mois, j'ai développé Écarlate, un site de gestion de projet, qui présente les projets de façon globale et, ainsi, permet en un seul coup d'oeil de voir quels projets méritent une attention particulière.",
          descriptions: [
            "Mon projet de stage de fin d'études. Pendant 6 mois, j'ai développé Écarlate, un site de gestion de projet, qui présente les projets de façon globale et, ainsi, permet en un seul coup d'oeil de voir quels projets méritent une attention particulière.",
            "On peut créer des projets et, semaine après semaine, mettre à jour l'état du projet et souligner les soucis potentiels. On a donc les developpeurs et chefs de projets qui mettent à jour les projets dont ils s'occupent et les managers qui peuvent consulter, d'un seul coup d'oeil, l'état de tous les projets. Le site permet notament d'avoir des utilisateurs avec différents privilèges, qui leur permet d'effectuer certaines actions (ajouter, supprimer, modifier...). Il a donc fallu gérer en front-end ainsi qu'en back-end que chaque utilisateur avait le droit d'effectuer une action.",
            "J'ai développé ce site en totale autonomie, j'ai donc pu choisir les technologies à utiliser, la charte graphique, les outils que je veux utiliser... J'ai donc fait le site en React, en utilisant notamment les libraires Material-UI, React Router, Redux. Le back-end est un serveur Node.JS avec le framework hapijs, qui permet de créer facilement des API REST. Enfin, la base de données est une base MongoDB classique. Il a aussi fallu rendre le site facilement déployable, j'ai donc fait un petit script Docker pour que Jenkins puisse déployer le site automatiquement.",
            "Vous ne pouvez, cenpendant, pas voir le projet, le projet étant interne à l'entreprise. Seules quelques captures d'écran sont disponibles."
          ],
          languages: [reactLanguage, nodeLanguage],
          screenshots: [
            {
              fileName: "screenshot_ecarlate_1.png",
              description: ""
            },
            {
              fileName: "screenshot_ecarlate_2.png",
              description: ""
            },
            {
              fileName: "screenshot_ecarlate_3.png",
              description: ""
            },
            {
              fileName: "screenshot_ecarlate_4.png",
              description: ""
            },
            {
              fileName: "screenshot_ecarlate_5.png",
              description: ""
            },
            {
              fileName: "screenshot_ecarlate_6.png",
              description: ""
            }

          ]
        };
const EcarlateProjectPage = () => {
  const classes = useStyles();

  const { logo, languages, name, descriptions, link, screenshots } = { project };

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <img
            src={require("../assets/" + logo)}
            alt="Logo du projet"
            className={classes.picture}
          />
          <div>
            <div className={classes.inline}>
              <Typography align="center" variant="h2">
                {name}
              </Typography>
            </div>
            <ChipGroup chips={languages}/>
          </div>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h4" className={classes.title}>
          En quelques mots
        </Typography>
      </Grid>
      <Grid item xs={12}>
        {descriptions.map(description => (
          <Typography variant="body1" paragraph key={description}>
            {description}
          </Typography>
        ))}
      </Grid>
      <Grid item xs={12}>
        {link && (
          <Button
            variant="contained"
            fullWidth
            color="primary"
            href={link}
            target="_blank"
            rel="noopener noreferrer">
            Voir le projet&nbsp;
            <FontAwesomeIcon icon={faExternalLinkAlt} fixedWidth/>
          </Button>
        )}
      </Grid>
      {screenshots && (
        <React.Fragment>
          <Grid item xs={12}>
            <Typography variant="h4" className={classes.title}>
              Galerie
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Gallery screenshots={screenshots} />
            {/*<Carousel screenshots={screenshots}/>*/}
          </Grid>
        </React.Fragment>
      )}
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
    flexWrap: "wrap"
  },
  picture: {
    maxWidth: "128px",
    margin: theme.spacing(2)
  },
  inline: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }
}));

export default EcarlateProjectPage;
