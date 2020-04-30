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

import { Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { theme } from "../theme";

const ErrorPage = ({ error = "Erreur inattendue" }) => (
  <Grid
    container
    spacing={5}
    justify="center"
    alignContent="center"
    alignItems="center"
    direction="column">
    <Grid item xs={12}>
      <Typography variant="h2" align="center">
        {error}
      </Typography>
    </Grid>
    <Grid item xs={12}>
      <Button
        variant="contained"
        size="large"
        color="primary"
        component={Link}
        to="/"
        style={styles.button}>
        Retourner à l'accueil
      </Button>
    </Grid>
  </Grid>
);

const styles = {
  button: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4)
  }
};

export default ErrorPage;
