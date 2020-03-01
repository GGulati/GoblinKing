import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { ListItem, ListItemIcon, ListItemText, SwipeableDrawer, List } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import InfoIcon from '@material-ui/icons/Info';

import { Link } from "react-router-dom";

import { green, blue } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  drawer: {
    width: 250
  }
}));

export default function Header() {
  const classes = useStyles();

  const [isDrawerOpen, setDrawerOpen] = React.useState(false);

  const openDrawer = () => {
    setDrawerOpen(true);
  };
  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" onClick={openDrawer}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Goblin King
          </Typography>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer open={isDrawerOpen} onOpen={openDrawer} onClose={closeDrawer}>
        <List className={classes.drawer}>
          <ListItem button key="Play" component={Link} to="/">
            <ListItemIcon><SportsEsportsIcon style={{ color: green[800] }} /></ListItemIcon>
            <ListItemText primary="Play" />
          </ListItem>
          <ListItem button key="About" component={Link} to="/about">
            <ListItemIcon><InfoIcon style={{ color: blue[800] }} /></ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
        </List>
      </SwipeableDrawer>
    </div>
  );
};
