/*
 *     This program is part of Portfolio.
 *
 *     Portfolio is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU General Public License as published by
 *     the Free Software Foundation, either version 3 of the License, or
 *     (at your option) any later version.
 *
 *     Portfolio is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *     GNU General Public License for more details.
 *
 *     You should have received a copy of the GNU General Public License
 *     along with Portfolio.  If not, see <https://www.gnu.org/licenses/>.
 */

/*
 *     This program is part of Portfolio.
 *
 *     Portfolio is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU General Public License as published by
 *     the Free Software Foundation, either version 3 of the License, or
 *     (at your option) any later version.
 *
 *     Portfolio is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *     GNU General Public License for more details.
 *
 *     You should have received a copy of the GNU General Public License
 *     along with Portfolio.  If not, see <https://www.gnu.org/licenses/>.
 */
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Grid, Paper, Typography, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { logoLucy, screenshotLucy1, screenshotLucy2, screenshotLucy3 } from "assets";
import { ChipGroup, ExternalLink, Gallery } from "components";
import { nodeLanguage, reactLanguage } from "datas/languages";
import React from "react";

const screenshots = [
  { file: screenshotLucy1 },
  { file: screenshotLucy2 },
  { file: screenshotLucy3 }
];

const LucyProjectPage = () => {
  const classes       = useStyles(),
        theme         = useTheme(),
        isSmallDevice = useMediaQuery(theme.breakpoints.down("sm")),
        cols          = isSmallDevice ? 1.2 : 2.5,
        cellHeight    = isSmallDevice ? 300 : 500;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Grid
            container
            justify="flex-start"
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <img
                src={logoLucy}
                alt="Logo du projet"
                className={classes.logo}
              />
            </Grid>
            <Grid item>
              <Typography variant="h3">
                Lucy
              </Typography>
              <ChipGroup chips={[reactLanguage, nodeLanguage]}/>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          Description
        </Typography>
        <Typography variant="body1" paragraph>
          <b>Lucy</b> est un site qui permet de <b>visualiser des statistiques sur les
          conversations Facebook
          Messenger</b>. Il permet de voir combien de messages sont envoyés au cours du temps, qui
          poste
          le plus de messages etc.
        </Typography>
        <Typography variant="body1" paragraph>
          C'est un site <b>front-end uniquement</b>, c'est à dire que tout est fait sur la machine
          du
          client. C'est pour cela que, sur des grosses conversations, cela prend un peu de temps
          pour tout calculer. Le site a
          été fait en <b>React</b> avec un <ExternalLink text="Material-UI"
                                                         href="https://material-ui.com"/> pour
          l'interface globale et <ExternalLink text="charts.js"
                                               href="https://www.chartjs.org/"/> pour les
          graphiques. Il permet donc de visualiser
          des statistiques mais aussi de chiffrer et déchiffrer des conversations. C'est pourquoi
          certaines conversations vous seront inaccessibles.
        </Typography>
        <Typography variant="body1" paragraph>
          Je vous invite, bien évidemment, à tester le site avec la conversation de test <i>'Pokémon
          Version Rouge'</i> ou bien avec votre propre conversation Facebook ! (Promis, je ne garde
          aucune
          donnée)
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
        <Typography variant="h4" gutterBottom>
          Galerie
        </Typography>
        <Gallery files={screenshots} cols={cols} cellHeight={cellHeight}/>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing()
    }
  },
  logo: {
    maxWidth: "128px",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "64px"
    }
  }
}));

export default LucyProjectPage;
