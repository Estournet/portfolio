import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import ProjectCard from "../components/ProjectCard";
import Grid from "@material-ui/core/Grid";
import Me from "../components/Me";
import Studies from "../components/Studies.jsx";
import { Typography } from "@material-ui/core";
import projectsFile from "../projects.json";

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
