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
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Paper,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  AlternateEmail as EmailIcon,
  Place as PlaceIcon,
  Today as TodayIcon
} from "@material-ui/icons";
import { authorPicture } from "assets";
import { ExternalLink } from "components";
import React from "react";

const MY_BIRTHDATE_TIMESTAMP = 750729600000;
const getMyAge = () => Math.abs(new Date(Date.now() - MY_BIRTHDATE_TIMESTAMP).getUTCFullYear() - 1970);

export const Me = () => {
  const classes = useStyle();
  return (
    <Paper className={classes.paper}>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <Grid container justify="space-evenly" alignItems={"center"} wrap={"wrap"}>
            <Grid item>
              <img
                src={authorPicture}
                alt="Vincent Monard"
                className={classes.picture}
              />
            </Grid>
            <Grid item>
              <Typography align="center" variant="h2" paragraph>
                Vincent Monard
              </Typography>
              <Typography align="center" color="textSecondary" variant="h4">
                Développeur Fullstack
              </Typography>

            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Divider variant="middle"/>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item md={5} sm={6} xs={12}>
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
            <Grid item md={7} sm={6} xs={12}>
              <Typography variant="body1" paragraph>
                Bienvenue sur mon portfolio. Sur ce site vous trouverez quelques
                informations sur mon parcours et mes compétences et accéder à mes différents
                projets. Je vous invite à aller sur mon <ExternalLink text="LinkedIn"
                                                                      href="https://www.linkedin.com/in/vincent-monard/"/> si
                vous souhaitez plus d'information ou à m'envoyer directement un email.
              </Typography>
              <Typography variant="body1" paragraph>
                Récemment diplomé de mon école d'ingénieur, ESIEE Paris, je suis
                un développeur polyvalent. Comme vous pourrez le voir, j'ai pu
                travailler sur des technologies web, mobile mais j'ai aussi des
                connaissances dans l'algorithmique, le parallélisme, les
                compilateurs etc.
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
    padding: theme.spacing(2)
  },
  picture: {
    margin: theme.spacing(2),
    boxShadow: theme.shadows[4],
    maxWidth: "256px",
    borderRadius: theme.shape.borderRadius * 2
  }
}));
