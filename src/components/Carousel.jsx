/*
 * Vincent Monard
 *     Copyright (C) 2019  Vincent Monard
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
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import withStyles from "@material-ui/core/styles/withStyles";
import { withTheme } from "@material-ui/core/styles";

const Carousel = props => {
  const { screenshots, theme, classes } = props;
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = screenshots.length;

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
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
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
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Précédent
          </Button>
        }
      />
    </div>
  );
};
const style = () => ({
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
});

export default withTheme()(withStyles(style)(Carousel));
