import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import * as constants from "../NavBar/constants";

const styles = {
  list: {
    width: "250px",
    backgroundColor: "white"
  },
  listItemText: {
    textTransform: "uppercase"
  }
};

const Sidebar = ({ classes, isOpen, openSidebar, closeSidebar }) => (
  <SwipeableDrawer open={isOpen} onClose={closeSidebar}>
    <List className={classes.list}>
      {constants.pages.map(({ path, name }) => (
        <ListItem
          key={path}
          component={Link}
          to={path}
          onClick={closeSidebar}
          button
        >
          <ListItemText className={classes.listItemText} primary={name} />
        </ListItem>
      ))}
    </List>
  </SwipeableDrawer>
);

Sidebar.propTypes = {
  classes: PropTypes.shape({
    list: PropTypes.string.isRequired,
    listItemText: PropTypes.string.isRequired
  }).isRequired,
  isOpen: PropTypes.bool.isRequired,
  openSidebar: PropTypes.func.isRequired,
  closeSidebar: PropTypes.func.isRequired
};

export default withStyles(styles)(Sidebar);
