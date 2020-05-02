import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import makeStyles from "@material-ui/core/styles/makeStyles";
import React from "react";

export const Gallery = ({ files, cellHeight, cols }) => {
  const classes = useStyles();
  const {tile, imgFullWidth, gridList, titleBar} = classes;
  return (
    <GridList
      cols={cols}
      cellHeight={cellHeight}
      className={gridList}
    >
      {files.map(({ file, description }, i) => (
        <GridListTile
          key={i}
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
    color: "white",
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
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
