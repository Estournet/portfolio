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
import { Paper, Step, StepLabel, Stepper, Typography, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { steps } from "datas/studies";
import React from "react";

export const Studies = () => {
  const theme         = useTheme(),
        isSmallDevice = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Paper>
      <Stepper
        orientation={isSmallDevice ? "vertical" : "horizontal"}
        alternativeLabel={!isSmallDevice}
        activeStep={steps.length}>
        {steps.map(step => (
          <Step key={step.label}>
            <StepLabel
              icon={<Typography variant="body1">{step.year}</Typography>}>
              {step.label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Paper>
  );
};
