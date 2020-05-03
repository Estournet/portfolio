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
import { Grid, Link, Paper, Typography, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  logoPeche,
  screenshotPeche1,
  screenshotPeche2,
  screenshotPeche3,
  screenshotPeche4
} from "assets";
import { ChipGroup, Gallery } from "components";
import { androidLanguage } from "datas/languages";
import React from "react";

const screenshots = [
  { file: screenshotPeche1 },
  { file: screenshotPeche2 },
  { file: screenshotPeche3 },
  { file: screenshotPeche4 }
];

const PecheProjectPage = () => {
  const classes       = useStyles(),
        theme         = useTheme(),
        isSmallDevice = useMediaQuery(theme.breakpoints.down("sm")),
        cols          = isSmallDevice ? 1.2 : 3.5,
        cellHeight    = 600;

  return (
    <Grid container spacing={2} justify="center">
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
                src={logoPeche}
                alt="Logo du projet"
                className={classes.logo}
              />
            </Grid>
            <Grid item>
              <Typography variant="h3">
                Pêche
              </Typography>
              <ChipGroup chips={[androidLanguage]}/>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          Description
        </Typography>
        <Typography variant="body1" paragraph>
          <b>Pêche</b> est une application de <b>gestion de dette</b> que j'ai créée pour ma famille
          et moi. Elle nous permet gérer nos remboursements (essence, courses etc).
          J'ai écrit cette application en <b>2017</b> et, après avoir fait quelques mises à jours
          pendant un temps, est désormais laissée à l'abandon.
          Vous pouvez la télécharger sur le Play Store mais ne pourrez pas l'utiliser, ayant
          restreint l'accès à mes proches uniquement.
        </Typography>
        <Typography variant="body1" paragraph>
          La base de données que j'utilise est <b>Firebase Database</b>. Je voulais essayer ce
          service et
          il s'avère très pratique (même si Firestore, encore en beta à l'époque, fait désormais
          beaucoup mieux).
          L'application fonctionne donc en <b>temps réel</b>, tout s'actualise dès qu'une
          modification est
          faite par un autre utilisateur. Cette application fût ma première fois avec Android et les
          bases de données NoSQL. Tout n'est pas parfait, loin de là, mais j'en garde quand même un
          très bon souvenir.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container justify="center">
          <Grid item>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://play.google.com/store/apps/details?id=com.vincent.peche&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
            >
              <img
                className={classes.playStoreButton}
                alt='Disponible sur Google Play'
                src='https://play.google.com/intl/en_us/badges/static/images/badges/fr_badge_web_generic.png'/>
            </Link>

          </Grid>
        </Grid>
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
  },
  playStoreButton: {
    maxWidth: 192,
    height: "auto"
  }
}));

export default PecheProjectPage;
