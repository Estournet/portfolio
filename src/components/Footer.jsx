/*
 * Vincent Monard
 *     Copyright (C) 2019  Vincent Monard
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
import Typography from "@material-ui/core/Typography/Typography";
import Divider from "@material-ui/core/Divider/Divider";
import withStyles from "@material-ui/core/styles/withStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import PropTypes from "prop-types";

const Footer = props => (
  <footer className={props.classes.footer}>
    <Divider className={props.classes.divider} />
    <Typography color="textSecondary" align="center">
      <FontAwesomeIcon flip="horizontal" icon={faCopyright} fixedWidth />{" "}
      Copyleft 2019 - Créé par Vincent Monard.
    </Typography>
    <Typography variant="caption" color="textSecondary" align="center">
      {"Site sous license "}
      <a
        href="https://www.gnu.org/licenses/gpl-3.0.fr.html"
        rel="noopener noreferrer"
        target="_blank"
        className={props.classes.link}>
        GNU GPL v3
      </a>
      {". Voir le projet sur "}
      <a
        href="https://github.com/Estournet/"
        rel="noopener noreferrer"
        target="_blank"
        className={props.classes.link}>
        GitHub
      </a>
      .
    </Typography>
  </footer>
);

const styles = theme => ({
  footer: {
    padding: "20px 10%" // Top & Bottom : 20px, Left & Right : 10%
  },
  divider: {
    margin: theme.spacing.unit
  },
  link: {
    color: theme.palette.secondary.dark,
    textDecoration: "none"
  }
});

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
