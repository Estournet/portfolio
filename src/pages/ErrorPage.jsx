import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid/Grid";
import Typography from "@material-ui/core/Typography/Typography";
import Button from "@material-ui/core/Button/Button";
import withStyles from "@material-ui/core/styles/withStyles";

const ErrorPage = props => (
  <Grid
    container
    spacing={40}
    justify="center"
    alignContent="center"
    alignItems="center"
    direction="column">
    <Grid item xs={12}>
      <Typography variant="h2" align="center">
        {props.error}
      </Typography>
    </Grid>
    <Grid item xs={12}>
      <Button
        variant="contained"
        size="large"
        color="primary"
        component={Link}
        to="/"
        className={props.classes.button}>
        {"Retourner à l'accueil"}
      </Button>
    </Grid>
  </Grid>
);

const styles = theme => ({
  button: {
    marginTop: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * 4
  }
});

ErrorPage.defaultProps = {
  error: "Erreur inattendue"
};

ErrorPage.propTypes = {
  classes: PropTypes.object.isRequired,
  error: PropTypes.string
};

// As we import pages asynchroneously, the IDE thinks the component is unused.
// See AsyncComponent.jsx and AsyncContent.jsx for more details
// noinspection JSUnusedGlobalSymbols
export default withStyles(styles)(ErrorPage);
