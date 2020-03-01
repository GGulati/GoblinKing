import React, { MouseEvent } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { MenuItem } from '@material-ui/core';

import { Link } from "react-router-dom";

import BreadMenu from './Basic/BreadMenu';

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
}));

export default function Header() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState<Element | null>(null);
  const handleOpenMenu = (event: MouseEvent) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleOpenMenu}>
            <MenuIcon />
          </IconButton>
          <BreadMenu keepMounted anchorEl={anchorEl} open={anchorEl != null} onClose={handleCloseMenu}>
            <MenuItem component={Link} to="/" onClick={handleCloseMenu}>Play Goblin King</MenuItem>
            <MenuItem component={Link} to="/about" onClick={handleCloseMenu}>About</MenuItem>
          </BreadMenu>
          <Typography variant="h6" className={classes.title}>
            Goblin King
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
