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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Chip } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import React from "react";

export const ChipGroup = ({ chips = [] }) => {
  const classes    = useStyles(),
        theme      = useTheme(),
        isDarkMode = theme.palette.type === "dark";

  return (
    <div className={classes.root}>
      {chips.map(({ name, icon }) => (
        <Chip
          key={name}
          icon={
            <FontAwesomeIcon
              icon={icon}
              size="sm"
              fixedWidth
            />
          }
          color={isDarkMode ? "default" : "secondary"}
          variant="outlined"
          label={name}
          size="small"
          className={classes.chip}
        />
      ))}
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
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
}));

