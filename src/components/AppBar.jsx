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

import { Paper } from "@material-ui/core";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import makeStyles from "@material-ui/core/styles/makeStyles";
import React from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { DarkLightThemeButton } from "components/DarkLightThemeButton";

export const AppBar = ({ useDarkMode, setUseDarkMode }) => {
  const classes  = useStyle(),
        location = useLocation(),
        pathname = location.pathname.split("/"),
        paths    = pathname.filter(path => path !== "");

  return (
    <Paper className={classes.container}>
      <div className={classes.leftContainer}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            component={RouterLink}
            to="/"
            color={paths.length ? "textSecondary" : "textPrimary"}>
            Accueil
          </Link>
          {paths.map((path, i) => (
              <Link
                key={path}
                component={RouterLink}
                to={pathname.slice(0, i + 2).join("/")}
                color={i === paths.length - 1 ? "textPrimary" : "textSecondary"}
              >
                {capitalize(path)}
              </Link>
            )
          )}
        </Breadcrumbs>
      </div>
      <DarkLightThemeButton setUseDarkMode={setUseDarkMode} useDarkMode={useDarkMode}/>
    </Paper>
  );
};

const capitalize = s => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const useStyle = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "nowrap",
    marginBottom: theme.spacing()
  },
  leftContainer: {
    display: "flex",
    alignItems: "baseline"
  },
  title: {
    marginRight: theme.spacing()
  }
}));
