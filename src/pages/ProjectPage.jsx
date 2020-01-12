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

import React from "react";
import PropTypes from "prop-types";
import { Button, Grid, Paper, Typography } from "@material-ui/core";
import projectsFile from "../datas/projects.json";
import ChipGroup from "../components/ChipGroup";
import Carousel from "../components/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { withStyles } from "@material-ui/core/styles";

const ProjectPage = props => {
  const project = projectsFile.projects.filter(
    project => project.name === props.match.params.projectName
  )[0];

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Paper className={props.classes.paper}>
          <img
            src={require("../assets/" + project.logo)}
            alt="Logo du projet"
            className={props.classes.picture}
          />
          <div>
            <div className={props.classes.inline}>
              <Typography align="center" variant="h2">
                {project.name}
              </Typography>
            </div>
            <ChipGroup chips={project.languages} />
          </div>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h4" className={props.classes.title}>
          En quelques mots
        </Typography>
      </Grid>
      <Grid item xs={12}>
        {project.descriptions.map(description => (
          <Typography variant="body1" paragraph key={description}>
            {description}
          </Typography>
        ))}
      </Grid>
      <Grid item xs={12}>
        {project.link && (
          <Button
            variant="contained"
            fullWidth
            color="primary"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer">
            Voir le projet&nbsp;
            <FontAwesomeIcon icon={faExternalLinkAlt} fixedWidth />
          </Button>
        )}
      </Grid>
      {project.screenshots && (
        <React.Fragment>
          <Grid item xs={12}>
            <Typography variant="h4" className={props.classes.title}>
              Galerie
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Carousel screenshots={project.screenshots} />
          </Grid>
        </React.Fragment>
      )}
    </Grid>
  );
};

ProjectPage.propTypes = {
  classes: PropTypes.object.isRequired
};
const styles = theme => ({
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
});

export default withStyles(styles)(ProjectPage);
