import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import makeStyles from "@material-ui/core/styles/makeStyles";
import useTheme from "@material-ui/core/styles/useTheme";
import React from "react";

export const Gallery = ({ files, cellHeight, cols }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <GridList
      cols={cols}
      cellHeight={cellHeight}
      className={classes.gridList}
    >
      {files.map(({ file, description }, i) => (
        <GridListTile
          key={i}
          className={classes.img}
        >
          <img
            src={file}
            alt={description}
            // className={classes.img}
          />
          {description && (
            <GridListTileBar
              title={description}
              className={classes.titleBar}
            />
          )}
        </GridListTile>
      ))}
    </GridList>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    flexWrap: "nowrap",
    borderRadius: "18px",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)"
  },
  titleBar: {
    color: "white",
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
  },
  img: {
    borderRadius: "180px"
    // width: "100%",
    //   maxWidth: "100%",
    //   height: "900px",
    //   maxHeight: 840,
    // //   alignSelf: "center",
    // overflow: "hidden"
  }
}));
