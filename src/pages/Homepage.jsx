import React from "react";
import Typography from "@material-ui/core/Typography/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";

const Homepage = props => <Typography variant="h1">Hello world</Typography>;

Homepage.propTypes = {
  classes: PropTypes.object.isRequired
};
const styles = theme => ({});

export default withStyles(styles)(Homepage);
