import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import Chip from "@material-ui/core/Chip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAndroid,
  faJava,
  faNodeJs,
  faReact
} from "@fortawesome/free-brands-svg-icons";

const languages = {
  react: {
    icon: faReact,
    name: "React"
  },
  android: {
    icon: faAndroid,
    name: "Android"
  },
  java: {
    icon: faJava,
    name: "Java"
  },
  node: {
    icon: faNodeJs,
    name: "Node.js"
  }
};

const ChipGroup = props => (
  <div className={props.classes.root}>
    {props.chips.map(chip => (
      <Chip
        key={chip}
        icon={
          <FontAwesomeIcon icon={languages[chip].icon} size="lg" fixedWidth />
        }
        color="secondary"
        variant="outlined"
        label={languages[chip].name}
        className={props.classes.chip}
      />
    ))}
  </div>
);

ChipGroup.propTypes = {
  chips: PropTypes.arrayOf(PropTypes.string).isRequired,
  classes: PropTypes.object.isRequired
};

const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "left",
    flexWrap: "wrap",
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit
  },
  chip: {
    marginRight: theme.spacing.unit / 2
  }
});

export default withStyles(styles)(ChipGroup);
