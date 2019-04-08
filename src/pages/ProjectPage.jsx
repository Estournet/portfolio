import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import projectsFile from "../projects.json";
import ChipGroup from "../components/ChipGroup";
import Carousel from "../components/Carousel";
import Button from "@material-ui/core/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const ProjectPage = props => {
  const project = projectsFile.projects.filter(
    project => project.name === props.match.params.projectName
  )[0];

  return (
    <Grid container spacing={32}>
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
          <Typography variant="body1" paragraph>
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
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit
  },
  paper: {
    padding: theme.spacing.unit * 2,
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    flexWrap: "wrap"
  },
  picture: {
    maxWidth: "128px",
    margin: theme.spacing.unit * 2
  },
  inline: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }
});

export default withStyles(styles)(ProjectPage);
