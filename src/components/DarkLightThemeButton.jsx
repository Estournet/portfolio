import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconButton from "@material-ui/core/IconButton";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Tooltip from "@material-ui/core/Tooltip";
import React from "react";

export const DarkLightThemeButton = ({ useDarkMode, setUseDarkMode }) => {
  const classes = useStyles();
  return (
    <Tooltip
      title={useDarkMode ? "Activer le mode jour" : "Activer le mode nuit"}
      placement="left">
      <IconButton
        className={classes.button}
        onClick={() => setUseDarkMode(!useDarkMode)}>
        <FontAwesomeIcon
          icon={useDarkMode ? faSun : faMoon}
          fixedWidth
        />
      </IconButton>
    </Tooltip>
  );
};

const useStyles = makeStyles((theme) => ({
  button: {
    position: "absolute",
    top: theme.spacing(4),
    right: theme.spacing(4)
  }
}));
