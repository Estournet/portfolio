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
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import ProjectCard from "../components/ProjectCard";
import Grid from "@material-ui/core/Grid";
import Me from "../components/Me";
import Studies from "../components/Studies.jsx";
import { Typography } from "@material-ui/core";
import projectsFile from "../datas/projects.json";
import Languages from "../components/Languages";

const HomePage = props => (
  <Grid container spacing={32}>
    <Grid item xs={12}>
      <Me />
    </Grid>
    <Grid item xs={12}>
      <Typography variant="h4" className={props.classes.title}>
        Mon parcours
      </Typography>
    </Grid>
    <Grid item xs={12}>
      <Studies />
    </Grid>
    <Grid item xs={12}>
      <Typography variant="h4" className={props.classes.title}>
        Mes compétences
      </Typography>
    </Grid>
    <Grid item xs={12}>
      <Languages />
    </Grid>{" "}
    <Grid item xs={12}>
      <Typography variant="h4" className={props.classes.title}>
        Mes projets
      </Typography>
    </Grid>
    {projectsFile.projects.map(project => (
      <Grid item md={4} xs={12} key={project.name}>
        <ProjectCard {...project} />
      </Grid>
    ))}
  </Grid>
);

HomePage.propTypes = {
  classes: PropTypes.object.isRequired
};
const styles = theme => ({
  title: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit
  }
});

export default withStyles(styles)(HomePage);
