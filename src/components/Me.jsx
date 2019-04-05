import React from "react";
import Typography from "@material-ui/core/Typography/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import AuthorPicture from "../assets/author_picture.png";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import TodayIcon from "@material-ui/icons/Today";
import PlaceIcon from "@material-ui/icons/Place";
import EmailIcon from "@material-ui/icons/AlternateEmail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Me = props => (
  <Paper className={props.classes.paper}>
    <Grid container spacing={40}>
      <Grid item xs={12} className={props.classes.inline}>
        <img
          src={AuthorPicture}
          alt="Vincent Monard"
          className={props.classes.picture}
        />
        <div className={props.classes.title}>
          <Typography variant="h2" paragraph>
            Vincent Monard
          </Typography>
          <Typography variant="h4">Développeur Fullstack</Typography>
        </div>
      </Grid>
      <Grid item xs={12}>
        <Divider variant="middle" />
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={16}>
          <Grid item md={6} xs={12}>
            <List>
              <ListItem>
                <ListItemIcon>
                  <TodayIcon />
                </ListItemIcon>
                <ListItemText primary="25 ans" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <PlaceIcon />
                </ListItemIcon>
                <ListItemText primary="Paris, France" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <EmailIcon />
                </ListItemIcon>
                <ListItemText primary="vincent.monard[at]free.fr" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FontAwesomeIcon icon={faGithub} />
                </ListItemIcon>
                <ListItemText primary="Github" />
              </ListItem>
            </List>
            <Divider />
          </Grid>
          <Grid item md={6} xs={12}>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin leo
              ante, faucibus vitae nulla ut, laoreet venenatis odio. Fusce
              facilisis magna nulla, in rhoncus purus sodales accumsan. Nulla a
              mollis tortor, vitae ultricies urna. Nulla tincidunt vel nulla in
              rutrum. In vel suscipit lectus.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Paper>
);

Me.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    display: "flex",
    justifyContent: "center"
  },
  inline: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexWrap: "wrap"
  },
  picture: {
    maxWidth: "256px",
    margin: theme.spacing.unit * 2
  },
  title: {}
});

export default withStyles(styles)(Me);
