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
import { Languages, Me, Projects, Studies } from "components";
import React from "react";

const HomePage = () => (
  <Grid container spacing={4}>
    <Grid item xs={12} id={"me"}>
      <Me/>
    </Grid>
    <Grid item xs={12} id={"career"}>
      <Typography variant="h4" gutterBottom>
        Mon parcours
      </Typography>
      <Studies/>
    </Grid>
    <Grid item xs={12} id={"skills"}>
      <Typography variant="h4" gutterBottom>
        Mes compétences
      </Typography>
      <Languages/>
    </Grid>
    <Grid item xs={12} id={"projects"}>
      <Typography variant="h4" gutterBottom>
        Mes projets
      </Typography>
      <Projects/>
    </Grid>
  </Grid>
);

export default HomePage;
