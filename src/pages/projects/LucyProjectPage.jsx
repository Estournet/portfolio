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
import {screenshotLucy1, screenshotLucy2, logoLucy } from 'assets';
import { ChipGroup } from "components/ChipGroup";
import { Gallery } from "components/Gallery";
import { nodeLanguage, reactLanguage } from "datas/languages";

const screenshots = [
  {
    file: screenshotLucy1,
    description: "lorem ipsum dolor sit amet"
  },
  {
    file: screenshotLucy2
    // description: "2"
  }
];

const LucyProjectPage = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <img
            src={logoLucy}
            alt="Logo du projet"
            className={classes.logo}
          />
          <div>
            <div className={classes.inline}>
              <Typography align="center" variant="h3">
                Lucy
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
          Lucy est un site qui permet de visualiser des statistiques sur les conversations Facebook
          Messenger. Il permet de voir combien de messages sont envoyés au cours du temps, qui poste
          le plus de messages etc.",
        </Typography>
        <Typography variant="body1" paragraph>
          C'est un site front-end uniquement, c'est à dire que tout est fait sur la machine du
          client. C'est pour cela que,
          sur des grosses conversations, cela prend un peu de temps pour tout calculer. Le site a
          été
          fait en React avec un Material UI et charts.js pour le design. Il permet donc de
          visualiser
          des statistiques mais aussi de chiffrer et déchiffrer des conversation. C'est pourquoi
          certaines conversations vous seront inaccessibles.",
        </Typography>
        <Typography variant="body1" paragraph>
          Je vous invite, bien évidemment, à tester le site avec la conversation de test 'Pokémon
          Version Rouge' ou bien avec votre propre conversation Facebook ! (Promis, je garde aucune
          donnée)."
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          fullWidth
          color="primary"
          href={"https://estournet.github.io/lucy/"}
          target="_blank"
          rel="noopener noreferrer">
          Voir le projet&nbsp;
          <FontAwesomeIcon icon={faExternalLinkAlt} fixedWidth/>
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h4" className={classes.title}>
          Galerie
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Gallery files={screenshots} cols={2} cellHeight={400}/>
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

export default LucyProjectPage;
