import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import Chip from "@material-ui/core/Chip";
import Icon from "@material-ui/core/Icon";

const ChipGroup = props => (
  <div className={props.classes.root}>
    {props.chips.map(chip => (
      <Chip
        key={chip}
        icon={
          <Icon className={props.classes.icon}>
            <i className="fab fa-android" />
          </Icon>
        }
        color="primary"
        variant="outlined"
        label={chip}
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
    padding: theme.spacing.unit / 2
  },
  chip: {
    margin: theme.spacing.unit / 2
  },
  icon: {
    margin: theme.spacing.unit
  }
});

export default withStyles(styles)(ChipGroup);
