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

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Divider,
  Grid,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Paper,
  Typography
} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import EmailIcon from "@material-ui/icons/AlternateEmail";
import PlaceIcon from "@material-ui/icons/Place";
import TodayIcon from "@material-ui/icons/Today";
import React from "react";
import AuthorPicture from "../assets/author_picture.jpg";

const MY_BIRTHDATE_TIMESTAMP = 750729600000;
const getMyAge = () => Math.abs(new Date(Date.now() - MY_BIRTHDATE_TIMESTAMP).getUTCFullYear() - 1970);

export const Me = () => {
  const classes = useStyle();
  return (
    <Paper className={classes.paper}>
      <Grid container spacing={5}>
        <Grid item xs={12} className={classes.inline}>
          <img
            src={AuthorPicture}
            alt="Vincent Monard"
            className={classes.picture}
          />
          <div>
            <Typography align="center" variant="h2" paragraph>
              Vincent Monard
            </Typography>
            <Typography align="center" color="textSecondary" variant="h4">
              Développeur Fullstack
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12}>
          <Divider variant="middle"/>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item md={6} xs={12}>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <TodayIcon/>
                  </ListItemIcon>
                  <ListItemText primary={`${getMyAge()} ans`}/>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PlaceIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Paris, France"/>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <EmailIcon/>
                  </ListItemIcon>
                  <ListItemText primary="vincent.monard[at]free.fr"/>
                </ListItem>
                <ListItem
                  button
                  component="a"
                  target="_blank"
                  href="https://github.com/Estournet/">
                  <ListItemIcon>
                    <FontAwesomeIcon icon={faGithub} size="lg" fixedWidth/>
                  </ListItemIcon>
                  <ListItemText primary="github.com/Estournet/"/>
                  <ListItemSecondaryAction>
                    <FontAwesomeIcon icon={faExternalLinkAlt} fixedWidth/>
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem
                  button
                  component="a"
                  target="_blank"
                  href="https://www.linkedin.com/in/vincent-monard/">
                  <ListItemIcon>
                    <FontAwesomeIcon icon={faLinkedin} size="lg" fixedWidth/>
                  </ListItemIcon>
                  <ListItemText primary="linkedin.com/in/vincent-monard/"/>
                  <ListItemSecondaryAction>
                    <FontAwesomeIcon icon={faExternalLinkAlt} fixedWidth/>
                  </ListItemSecondaryAction>
                </ListItem>
              </List>
            </Grid>
            <Grid item md={6} xs={12}>
              <Typography variant="body1" paragraph>
                Bienvenue sur mon portfolio. Sur ce site vous trouverez quelques
                informations sur mon parcours et mes compétences mais, surtout,
                accéder à mes différents projets. Je vous invite à aller sur mon{" "}
                <Link
                  href="https://www.linkedin.com/in/vincent-monard/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </Link>
                {" "}
                si vous souhaitez plus d'information ou à m'envoyer directement un
                email.
              </Typography>
              <Typography variant="body1" paragraph>
                Fraichement diplomé de mon école d'ingénieur, ESIEE Paris, je suis
                un développeur polyvalent. Comme vous pourrez le voir, j'ai pu
                travailler sur des technologies web, mobile mais j'ai aussi des
                connaissances dans l'algorithmique, le parallélisme, les
                compilateurs etc.
              </Typography>
              <Typography variant="body1" paragraph>
                J'ai aussi pas mal voyagé, notamment en Thaïlande pour faire un
                semestre d'études à l'étranger, ou encore en Amérique du Sud,
                seul, pendant quelques mois.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

const useStyle = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    justifyContent: "center"
  },
  inline: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexWrap: "wrap"
  },
  picture: {
    margin: theme.spacing(2),
    boxShadow: theme.shadows[4],
    maxWidth: "256px",
    borderRadius: theme.shape.borderRadius * 2
  }
}));
