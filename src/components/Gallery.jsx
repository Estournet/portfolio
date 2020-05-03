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
import { GridList, GridListTile, GridListTileBar, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

export const Gallery = ({ files, cellHeight, cols }) => {
  const classes = useStyles();
  const { tile, imgFullWidth, gridList, titleBar } = classes;
  return (
    <GridList
      cols={cols}
      cellHeight={cellHeight}
      spacing={16}
      className={gridList}
    >
      {files.map(({ file, title, subtitle }, i) => (
        <GridListTile
          key={i}
          component={Link}
          href={file}
          target="_blank"
          rel="noopener noreferrer"
          classes={{ imgFullWidth, tile }}
        >
          <img
            src={file}
            alt={title}
          />
          {title && (
            <GridListTileBar
              title={title}
              subtitle={subtitle}
              className={titleBar}

            />
          )}

        </GridListTile>

      ))}
    </GridList>
  );
};

const useStyles = makeStyles((theme) => ({
  gridList: {
    flexWrap: "nowrap",
    borderRadius: theme.shape.borderRadius * 2,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)"
  },
  titleBar: {
    color: theme.palette.grey[50],
    backgroundColor: theme.palette.grey[600]
  },
  tile: {
    borderRadius: theme.shape.borderRadius * 2
  },
  imgFullWidth: {
    borderRadius: theme.shape.borderRadius * 2,
    transform: "none",
    position: "unset"
  }
}));
