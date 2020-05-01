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
import { Redirect, useParams } from "react-router-dom";
import { ChipGroup } from "../../components/ChipGroup";
import { Gallery } from "../../components/Gallerie";
import { nodeLanguage, reactLanguage } from "../../datas/languages";
import { projects } from "../../datas/projects";

const lucy =   {
  name: "Lucy",
  logo: "lucy_logo.png",
  banner: "lucy_banner.png",
  shortDescription: "Lucy est un site qui permet de visualiser des statistiques sur les conversations Facebook Messenger. Il permet de voir combien de messages sont envoyés au cours du temps, qui poste le plus de messages etc.",
  descriptions: [
    "Lucy est un site qui permet de visualiser des statistiques sur les conversations Facebook Messenger. Il permet de voir combien de messages sont envoyés au cours du temps, qui poste le plus de messages etc.",
    "C'est un site front-end uniquement, c'est à dire que tout est fait sur la machine du client. C'est pour cela que, sur des grosses conversations, cela prend un peu de temps pour tout calculer. Le site a été fait en React avec un Material UI et charts.js pour le design. Il permet donc de visualiser des statistiques mais aussi de chiffrer et déchiffrer des conversation. C'est pourquoi certaines conversations vous seront inaccessibles.",
    "Je vous invite, bien évidemment, à tester le site avec la conversation de test 'Pokémon Version Rouge' ou bien avec votre propre conversation Facebook ! (Promis, je garde aucune donnée)."
  ],
  languages: [reactLanguage, nodeLanguage],
  link: "https://estournet.github.io/lucy/",
  screenshots: [
    {
      fileName: "screenshot_lucy_1.png",
      description: ""
    },
    {
      fileName: "screenshot_lucy_2.png",
      description: ""
    }
  ]
};

const LucyProjectPage = () => {
  const classes = useStyles();
  const params = useParams();
  const projectNameParam = decodeURI(params.projectName.toLowerCase());
  const project = projects.find(
    ({ name }) => name.toLowerCase() === projectNameParam
  );

  if (!project)
    return <Redirect to="/"/>;

  const { logo, languages, name, descriptions, link, screenshots } = project;

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

export default LucyProjectPage;
