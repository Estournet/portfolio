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
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import { Button, Grid, Typography } from "@material-ui/core";

const ErrorPage = props => (
  <Grid
    container
    spacing={5}
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
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4)
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
