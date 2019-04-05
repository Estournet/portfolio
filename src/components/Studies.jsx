import React from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import withWidth from "@material-ui/core/withWidth";

const steps = [
  { year: 2013, label: "Bac Scientifique" },
  { year: 2015, label: "Stage à la BRED (3\u00a0mois)" },
  { year: 2015, label: "DUT Informatique" },
  { year: 2017, label: "Stage à l'INA (3\u00a0mois)" },
  { year: 2018, label: "Stage chez Oui.SNCF (6\u00a0mois)" },
  { year: 2018, label: "Diplôme d'ingénieur ESIEE\u00a0Paris" }
];

const isXSDevice = props => props.width === "xs";

const Studies = props => (
  <Paper>
    <Stepper
      orientation={isXSDevice(props) ? "vertical" : "horizontal"}
      alternativeLabel={!isXSDevice(props)}
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

export default withWidth()(Studies);
