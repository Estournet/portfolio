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
      {files.map(({ file, description }, i) => (
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
            alt={description}
          />
          {description && (
            <GridListTileBar
              title={description}
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
