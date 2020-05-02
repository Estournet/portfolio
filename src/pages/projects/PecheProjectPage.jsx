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

import { Grid, Paper, Typography, useMediaQuery } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import useTheme from "@material-ui/core/styles/useTheme";
import React from "react";
import {
  logoPeche,
  screenshotPeche1,
  screenshotPeche2,
  screenshotPeche3,
  screenshotPeche4
} from "assets";
import { ChipGroup } from "components/ChipGroup";
import { Gallery } from "components/Gallery";
import { androidLanguage } from "datas/languages";

const screenshots = [
  {
    file: screenshotPeche1,
    description: "lorem ipsum dolor sit amet"
  },
  {
    file: screenshotPeche2
    // description: "2"
  },
  {
    file: screenshotPeche3
    // description: "3"
  },
  {
    file: screenshotPeche4
    // description: "4"
  }
];

const PecheProjectPage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmallDevice = useMediaQuery(theme.breakpoints.down("sm"));
  const cols = isSmallDevice ? 1.2 : 3.5;
  const cellHeight = isSmallDevice ? 600 : 600;

  return <Grid container spacing={1}>
    <Grid item xs={12}>
      <Paper className={classes.paper}>
        <img
          src={logoPeche}
          alt="Logo du projet"
          className={classes.logo}
        />
        <div>
          <div className={classes.inline}>
            <Typography align="center" variant="h3">
              Pêche
            </Typography>
          </div>
          <ChipGroup chips={[androidLanguage]}/>
        </div>
      </Paper>
    </Grid>
    <Grid item xs={12}>
      <Typography variant="h4" className={classes.title}>
        Description
      </Typography>
    </Grid>
    <Grid item xs={12}>
      <Typography variant="body1" paragraph>
        Pêche est une application de <b>gestion de dette</b> que j'ai créée pour ma famille et
        moi. Elle nous permet de savoir qui doit rembourser qui.
        J'ai écrit cette application en <b>2017</b> et, après avoir fait quelques mises à jours
        pendant un temps, est désormais laissée à l'abandon.
        Vous pouvez la télécharger sur le Play Store mais ne pourrez pas l'utiliser, ayant
        restreint l'accès à mes proches uniquement.
      </Typography>
      <Typography variant="body1" paragraph>
        La base de données que j'utilise est Firebase Database. Je voulais essayer ce service et
        il s'avère très pratique (même si Firestore, encore en beta à l'époque, fait désormais
        beaucoup mieux).
        L'application fonctionne donc en temps réel, tout s'actualise dès qu'une modification est
        faite par un autre utilisateur.
        {/*  TODO Meilleur texte */}
      </Typography>
    </Grid>
    <Grid item xs={12}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href='https://play.google.com/store/apps/details?id=com.vincent.peche&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'
      >
        <img
          className={classes.playStoreButton}
          alt='Disponible sur Google Play'
          src='https://play.google.com/intl/en_us/badges/static/images/badges/fr_badge_web_generic.png'/>
      </a>
    </Grid>
    <Grid item xs={12}>
      <Typography variant="h4" className={classes.title}>
        Galerie
      </Typography>
    </Grid>
    <Grid item xs={12}>
      <Gallery files={screenshots} cellHeight={cellHeight} cols={cols}/>
    </Grid>
  </Grid>;
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
  },
  playStoreButton: {
    maxWidth: 182,
    height: "auto"
  }
}));

export default PecheProjectPage;
