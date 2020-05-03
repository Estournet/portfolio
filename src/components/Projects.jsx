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

import { Grid } from "@material-ui/core";
import { ProjectCard } from "components/ProjectCard";
import { projects } from "datas/projects";
import React from "react";

export const Projects = () => (
  <Grid container spacing={2}>
    {projects.map(({ banner, name, shortDescription, link, languages }) => (
      <Grid item md={4} xs={12} sm={6} key={name}>
        <ProjectCard
          banner={banner}
          name={name}
          shortDescription={shortDescription}
          link={link}
          languages={languages}/>
      </Grid>
    ))}
  </Grid>
);
