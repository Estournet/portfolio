/*
 *     This program is part of Portfolio.
 *
 *     Portfolio is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU General Public License as published by
 *     the Free Software Foundation, either version 3 of the License, or
 *     (at your option) any later version.
 *
 *     Portfolio is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *     GNU General Public License for more details.
 *
 *     You should have received a copy of the GNU General Public License
 *     along with Portfolio.  If not, see <https://www.gnu.org/licenses/>.
 */

/*
 *     This program is part of Portfolio.
 *
 *     Portfolio is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU General Public License as published by
 *     the Free Software Foundation, either version 3 of the License, or
 *     (at your option) any later version.
 *
 *     Portfolio is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *     GNU General Public License for more details.
 *
 *     You should have received a copy of the GNU General Public License
 *     along with Portfolio.  If not, see <https://www.gnu.org/licenses/>.
 */
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Divider, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ExternalLink } from "components";
import React from "react";

export const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Divider className={classes.divider}/>
      <Typography variant='body2' color="textSecondary" align="center">
        <FontAwesomeIcon flip="horizontal" icon={faCopyright} fixedWidth/>{" "}
        Copyleft 2020 - Créé par Vincent Monard.
      </Typography>
      <Typography variant="body2" color="textSecondary" align="center">
        {"Site sous license "}
        <ExternalLink text="GNU GPL v3" href="https://www.gnu.org/licenses/gpl-3.0.fr.html"/>
        {". Voir le projet sur "}
        <ExternalLink text="GitHub" href="https://github.com/Estournet/portfolio"/>
        .
      </Typography>
    </footer>
  );
};

const useStyles = makeStyles((theme) => ({
  footer: {
    marginTop: theme.spacing(4)
  },
  divider: {
    marginBottom: theme.spacing(2)
  }
}));


