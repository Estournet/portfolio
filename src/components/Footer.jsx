import React from "react";
import Typography from "@material-ui/core/Typography/Typography";
import Divider from "@material-ui/core/Divider/Divider";
import withStyles from "@material-ui/core/styles/withStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

class Footer extends React.PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <footer className={classes.footer}>
        <Divider className={classes.divider} />
        <Typography color="textSecondary" align="center">
          <FontAwesomeIcon flip="horizontal" icon={faCopyright} fixedWidth />{" "}
          Copyleft 2019 - Créé par Vincent Monard.
        </Typography>
        <Typography variant="caption" color="textSecondary" align="center">
          {"Site sous license "}
          <a
            href="https://www.gnu.org/licenses/gpl-3.0.fr.html"
            rel="noopener noreferrer"
            target="_blank"
            className={classes.link}>
            GNU GPL v3
          </a>
          {". Voir le projet sur "}
          <a
            href="https://github.com/Estournet/"
            rel="noopener noreferrer"
            target="_blank"
            className={classes.link}>
            GitHub
          </a>
          .
        </Typography>
      </footer>
    );
  }
}

const styles = theme => ({
  footer: {
    padding: "20px 10%" // Top & Bottom : 20px, Left & Right : 10%
  },
  divider: {
    margin: theme.spacing.unit
  },
  link: {
    color: theme.palette.secondary.dark,
    textDecoration: "none"
  }
});

export default withStyles(styles)(Footer);
