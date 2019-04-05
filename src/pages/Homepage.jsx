import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import ProjectCard from "../components/ProjectCard";
import Grid from "@material-ui/core/Grid";
import EcarlateBanner from "../assets/ecarlate_banner.png";
import LucyBanner from "../assets/lucy_banner.png";
import PecheBanner from "../assets/peche_banner.png";
import Me from "../components/Me";
import Studies from "../components/Studies.jsx";
import { Typography } from "@material-ui/core";

const Homepage = props => (
  <Grid container spacing={16}>
    <Grid item xs={12}>
      <Me />
    </Grid>
    <Grid item xs={12}>
      <Typography variant="h4" className={props.classes.title}>
        Mon parcours
      </Typography>
    </Grid>
    <Grid item xs={12}>
      <Studies />
    </Grid>
    <Grid item xs={12}>
      <Typography variant="h4" className={props.classes.title}>
        Mes projets
      </Typography>
    </Grid>
    <Grid item md={4} xs={12}>
      <ProjectCard
        title="Ecarlate"
        shortDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin leo ante, faucibus vitae nulla ut, laoreet venenatis odio. Fusce facilisis magna nulla, in rhoncus purus sodales accumsan. Nulla a mollis tortor, vitae ultricies urna. Nulla tincidunt vel nulla in rutrum. In vel suscipit lectus. "
        banner={EcarlateBanner}
      />
    </Grid>
    <Grid item md={4} xs={12}>
      <ProjectCard
        title="Lucy"
        shortDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin leo ante, faucibus vitae nulla ut, laoreet venenatis odio. Fusce facilisis magna nulla, in rhoncus purus sodales accumsan. Nulla a mollis tortor, vitae ultricies urna. Nulla tincidunt vel nulla in rutrum. In vel suscipit lectus. "
        banner={LucyBanner}
      />
    </Grid>
    <Grid item md={4} xs={12}>
      <ProjectCard
        title="Pêche"
        shortDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin leo ante, faucibus vitae nulla ut, laoreet venenatis odio. Fusce facilisis magna nulla, in rhoncus purus sodales accumsan. Nulla a mollis tortor, vitae ultricies urna. Nulla tincidunt vel nulla in rutrum. In vel suscipit lectus. "
        banner={PecheBanner}
      />
    </Grid>
  </Grid>
);

Homepage.propTypes = {
  classes: PropTypes.object.isRequired
};
const styles = theme => ({
  title: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit
  }
});

export default withStyles(styles)(Homepage);
