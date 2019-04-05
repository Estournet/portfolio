import React from "react";
import Typography from "@material-ui/core/Typography/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import Card from "@material-ui/core/Card";
import ChipGroup from "./ChipGroup";

const ProjectCard = props => (
  <Card className={props.classes.card}>
    <CardActionArea>
      <CardMedia
        className={props.classes.media}
        image={props.banner}
        title={props.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.title}
        </Typography>
        <ChipGroup chips={["Java", "React", "Android"]} />
        <Typography component="p">{props.shortDescription}</Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary">
        En savoir plus
      </Button>
    </CardActions>
  </Card>
);

ProjectCard.propTypes = {
  banner: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired
};
const styles = {
  card: {},
  media: {
    height: 340
  }
};

export default withStyles(styles)(ProjectCard);
