import React from "react";
import Footer from "./Footer.jsx";
import AsyncContent from "../components/AsyncContent";
import ErrorCatcher from "./ErrorCatcher";
import Grid from "@material-ui/core/Grid/Grid";
import withStyles from "@material-ui/core/styles/withStyles";

const Decoration = props => (
  <div className={props.classes.root}>
    <Grid container className={props.classes.page}>
      <Grid item xs={12}>
        <main className={props.classes.content}>
          <ErrorCatcher>
            <AsyncContent />
          </ErrorCatcher>
        </main>
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  </div>
);

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "center"
  },
  page: {
    maxWidth: "1200px"
  },
  content: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minHeight: "100vh"
  }
});

export default withStyles(styles, { withTheme: true })(Decoration);
