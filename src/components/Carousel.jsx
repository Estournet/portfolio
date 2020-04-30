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

import { Button, MobileStepper } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import makeStyles from "@material-ui/core/styles/makeStyles";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import React, { useState } from "react";

export const Carousel = ({ screenshots }) => {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = screenshots.length;
  const theme = useTheme();
  const classes = useStyles();

  const handleNext = () => setActiveStep(prevActiveStep => prevActiveStep + 1);
  const handleBack = () => setActiveStep(prevActiveStep => prevActiveStep - 1);

  return (
    <div className={classes.root}>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            color="secondary"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}>
            Suivant
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft/>
            ) : (
              <KeyboardArrowRight/>
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight/>
            ) : (
              <KeyboardArrowLeft/>
            )}
            Précédent
          </Button>
        }
      />
      <img
        className={classes.img}
        src={require("../assets/screenshots/" + screenshots[activeStep])}
        alt="Capture d'écran du projet"
      />
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            color="secondary"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}>
            Suivant
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft/>
            ) : (
              <KeyboardArrowRight/>
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight/>
            ) : (
              <KeyboardArrowLeft/>
            )}
            Précédent
          </Button>
        }
      />
    </div>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column"
  },
  img: {
    maxWidth: "100%",
    height: "auto",
    maxHeight: 840,
    alignSelf: "center",
    overflow: "hidden"
  }
}));
