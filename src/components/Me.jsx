/*
 * Vincent Monard
 *     Copyright (C) 2019  Vincent Monard
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

import React from "react";
import Typography from "@material-ui/core/Typography/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import AuthorPicture from "../assets/author_picture.png";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import TodayIcon from "@material-ui/icons/Today";
import PlaceIcon from "@material-ui/icons/Place";
import EmailIcon from "@material-ui/icons/AlternateEmail";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import {faExternalLinkAlt} from "@fortawesome/free-solid-svg-icons";

const Me = props => (
  <Paper className={props.classes.paper}>
    <Grid container spacing={40}>
      <Grid item xs={12} className={props.classes.inline}>
        <img
          src={AuthorPicture}
          alt="Vincent Monard"
          className={props.classes.picture}
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
        <Divider variant="middle" />
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={16}>
          <Grid item md={6} xs={12}>
            <List>
              <ListItem>
                <ListItemIcon>
                  <TodayIcon />
                </ListItemIcon>
                <ListItemText primary="25 ans" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <PlaceIcon />
                </ListItemIcon>
                <ListItemText primary="Paris, France" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <EmailIcon />
                </ListItemIcon>
                <ListItemText primary="vincent.monard[at]free.fr" />
              </ListItem>
              <ListItem
                button
                component="a"
                target="_blank"
                href="https://github.com/Estournet/">
                <ListItemIcon>
                  <FontAwesomeIcon icon={faGithub} size="lg" fixedWidth />
                </ListItemIcon>
                <ListItemText primary="github.com/Estournet/" />
                <ListItemSecondaryAction>
                  <FontAwesomeIcon icon={faExternalLinkAlt} fixedWidth />
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem
                button
                component="a"
                target="_blank"
                href="https://www.linkedin.com/in/vincent-monard/">
                <ListItemIcon>
                  <FontAwesomeIcon icon={faLinkedin} size="lg" fixedWidth />
                </ListItemIcon>
                <ListItemText primary="linkedin.com/in/vincent-monard/" />
                <ListItemSecondaryAction>
                  <FontAwesomeIcon icon={faExternalLinkAlt} fixedWidth />
                </ListItemSecondaryAction>
              </ListItem>
            </List>
          </Grid>
          <Grid item md={6} xs={12}>
            <Typography variant="body1" paragraph>
              Bienvenue sur mon portfolio. Sur ce site vous trouverez quelques
              informations sur mon parcours et mes compétences mais, surtout,
              accéder à mes différents projets. Je vous invite à aller sur mon{" "}
              <a
                target="_blank"
                href="https://www.linkedin.com/in/vincent-monard/"
                rel="noopener noreferrer">
                LinkedIn
              </a>{" "}
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

Me.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
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
    maxWidth: "256px",
    margin: theme.spacing.unit * 2
  }
});

export default withStyles(styles)(Me);
