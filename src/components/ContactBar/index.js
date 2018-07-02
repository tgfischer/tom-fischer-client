import React from "react";
import { withStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";

const styles = {
  root: {
    minHeight: "35px"
  }
};

const NavBar = ({ classes, email }) => (
  <AppBar position="sticky" color="secondary">
    <Toolbar className={classes.root}>
      <Grid container spacing={16} alignItems="center">
        <Hidden smDown>
          <Grid item sm />
        </Hidden>
        <Grid item sm={12} md={8}>
          <Grid container justify="flex-end" alignItems="center">
            <Typography variant="body1" color="inherit">
              email: {email}
            </Typography>
          </Grid>
        </Grid>
        <Hidden smDown>
          <Grid item sm />
        </Hidden>
      </Grid>
    </Toolbar>
  </AppBar>
);

NavBar.propTypes = {
  email: PropTypes.string.isRequired
};

export default withStyles(styles)(NavBar);