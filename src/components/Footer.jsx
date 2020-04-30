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

import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Divider, Link, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

const Footer = props => (
  <footer className={props.classes.footer}>
    <Divider className={props.classes.divider}/>
    <Typography color="textSecondary" align="center">
      <FontAwesomeIcon flip="horizontal" icon={faCopyright} fixedWidth/>{" "}
      Copyleft 2020 - Créé par Vincent Monard.
    </Typography>
    <Typography variant="body2" color="textSecondary" align="center">
      {"Site sous license "}
      <Link
        href="https://www.gnu.org/licenses/gpl-3.0.fr.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        GNU GPL v3
      </Link>
      {". Voir le projet sur "}
      <Link
        href="https://github.com/Estournet/portfolio"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </Link>
      .
    </Typography>
  </footer>
);

const styles = theme => ({
  footer: {
    padding: "20px 10%"
  },
  divider: {
    margin: theme.spacing(1)
  }
});

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
