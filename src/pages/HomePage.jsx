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

import { Grid, Typography } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import React from "react";
import { Languages } from "../components/Languages";
import { Me } from "../components/Me";
import { ProjectCard } from "../components/ProjectCard";
import { Studies } from "../components/Studies.jsx";
import { projects } from "../datas/projects";

const HomePage = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Me/>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h4" className={classes.title} gutterBottom>
          Mon parcours
        </Typography>
        <Studies/>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h4" className={classes.title} gutterBottom>
          Mes compétences
        </Typography>
        <Languages/>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h4" className={classes.title} gutterBottom>
          Mes projets
        </Typography>
        <Grid container spacing={2}>
          {projects.map(project => (
            <Grid item md={4} xs={12} sm={6} key={project.name}>
              <ProjectCard {...project} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: theme.spacing(2)
    // marginBottom: theme.spacing(1)
  }
}));

export default HomePage;
