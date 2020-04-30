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

import { faAndroid, faJava, faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Chip } from "@material-ui/core";
import React from "react";
import { theme } from "../theme";

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

export const ChipGroup = ({ chips = [] }) => (
  <div style={styles.root}>
    {chips.map(chip => (
      <Chip
        key={chip}
        icon={
          <FontAwesomeIcon
            icon={languages[chip].icon}
            size="sm"
            fixedWidth
          />
        }
        color="secondary"
        variant="outlined"
        label={languages[chip].name}
        size="small"
        style={styles.chip}
      />
    ))}
  </div>
);

const styles = {
  root: {
    display: "flex",
    justifyContent: "left",
    flexWrap: "wrap"

  },
  chip: {
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
    paddingLeft: theme.spacing(1),
    paddingRigth: theme.spacing(1)
  }
};

