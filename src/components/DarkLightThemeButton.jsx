import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import React from "react";

export const DarkLightThemeButton = ({ useDarkMode, setUseDarkMode }) => (
  <Tooltip
    title={useDarkMode ? "Activer le mode jour" : "Activer le mode nuit"}
    placement="left">
    <IconButton
      size={"small"}
      onClick={() => setUseDarkMode(!useDarkMode)}>
      <FontAwesomeIcon
        icon={useDarkMode ? faSun : faMoon}
        fixedWidth
      />
    </IconButton>
  </Tooltip>
);
