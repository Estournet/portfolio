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
 *//*
 *     This file is part of Portfolio.
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
 *     along with Portfolio.  If not, see <https://www.gnu.org/licenses/>. 2
 */

import { Grid, Paper, Typography, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  logoEcarlate,
  screenshotEcarlate1,
  screenshotEcarlate2,
  screenshotEcarlate3,
  screenshotEcarlate4,
  screenshotEcarlate5
} from "assets";
import { ChipGroup, ExternalLink, Gallery } from "components";
import { nodeLanguage, reactLanguage } from "datas/languages";
import React from "react";

const screenshots = [
  {
    file: screenshotEcarlate1,
    title: "Accueil, vue du manager",
    subtitle: "Avec les projets de toutes les équipes"
  },
  {
    file: screenshotEcarlate2,
    title: "Accueil, vue d'un membre de l'équipe.",
    subtitle: "Avec uniquement les projets de l'équipe."
  },
  {
    file: screenshotEcarlate3,
    title: "Création d'un nouveau projet"
  },
  {
    file: screenshotEcarlate4,
    title: "État de l'ensemble des équipes"
  },
  {
    file: screenshotEcarlate5,
    title: "Aperçu d'une équipe"
  }
];

const EcarlateProjectPage = () => {
  const classes       = useStyles(),
        theme         = useTheme(),
        isSmallDevice = useMediaQuery(theme.breakpoints.down("sm")),
        cols          = isSmallDevice ? 1.2 : 2.5,
        cellHeight    = isSmallDevice ? 350 : 500;

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
                src={logoEcarlate}
                alt="Logo du projet"
                className={classes.logo}
              />
            </Grid>
            <Grid item>
              <Typography variant="h3">
                Écarlate
              </Typography>
              <ChipGroup chips={[reactLanguage, nodeLanguage]}/>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          En quelques mots
        </Typography>
        <Typography variant="body1" paragraph>
          Mon projet de <b>stage de fin d'études</b>. Pendant 6 mois, en 2018, j'ai développé
          Écarlate, un
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
          actions (ajouter, supprimer, modifier...). Il a donc fallu gérer en front-end ainsi
          qu'en back-end que chaque utilisateur avait le droit d'effectuer une action.
        </Typography>
        <Typography variant="body1">
          J'ai développé ce site en <b>totale autonomie</b>, j'ai donc pu choisir les technologies à
          utiliser, la charte graphique, les outils que je veux utiliser...</Typography>
        <Typography variant="body1">
          J'ai fait le site en <b>React</b>, en utilisant notamment les bibliothèques <ExternalLink
          href="https://material-ui.com" text="Material-UI"/>, <ExternalLink
          href="https://reacttraining.com/react-router/" text="react-router"/> et <ExternalLink
          href="https://redux.js.org/" text={"Redux"}/>.
          C'était, d'ailleurs, ma première fois avec React et avec quasiment l'ensemble des
          technologies que j'ai utilisées. Du fait de ma <i
          title="Vous aurez compris que en 'grande autonomie' ça veut dire qu'on ne s'est pas occupé de moi pendant ce stage">grande
          autonomie</i>, j'ai tout appris par moi même, et j'ai du appréhender ces technologies
          seul.
        </Typography>
        <Typography variant="body1" paragraph>
          Le back-end est un serveur <b>Node.js</b> avec le framework <ExternalLink text="hapi"
                                                                                    href="https://hapi.dev/"/>,
          qui permet de
          créer facilement une <b>API REST</b>. Enfin, la base de données est une
          base <b>MongoDB</b>. Il a aussi fallu rendre le site facilement déployable, j'ai donc fait
          un petit script <b>Docker</b> pour que Jenkins puisse déployer le site automatiquement.
        </Typography>
        <Typography variant="body1" paragraph>
          Vous ne pouvez, cenpendant, pas voir le projet, le projet étant interne à l'entreprise.
          Seules quelques captures d'écran sont disponibles ci dessous.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          Galerie
        </Typography>
        <Gallery files={screenshots} cellHeight={cellHeight} cols={cols}/>
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

export default EcarlateProjectPage;
