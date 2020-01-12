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
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAndroid,
  faJava,
  faNodeJs,
  faReact
} from "@fortawesome/free-brands-svg-icons";
import { withStyles } from "@material-ui/core/styles";
import { Chip } from "@material-ui/core";

const languages = {
  react: {
    icon: faReact,
    name: "React"
  },
  android: {
    icon: faAndroid,
    name: "Android"
  },
  java: {
    icon: faJava,
    name: "Java"
  },
  node: {
    icon: faNodeJs,
    name: "Node.js"
  }
};

const ChipGroup = props => (
  <div className={props.classes.root}>
    {props.chips.map(chip => (
      <Chip
        key={chip}
        icon={
          <FontAwesomeIcon icon={languages[chip].icon} size="lg" fixedWidth />
        }
        color="secondary"
        variant="outlined"
        label={languages[chip].name}
        className={props.classes.chip}
      />
    ))}
  </div>
);

ChipGroup.propTypes = {
  chips: PropTypes.arrayOf(PropTypes.string).isRequired,
  classes: PropTypes.object.isRequired
};

const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "left",
    flexWrap: "wrap",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  chip: {
    marginRight: theme.spacing(0.5)
  }
});

export default withStyles(styles)(ChipGroup);
