import React from 'react';

import {
  Container,
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from '@material-ui/core';

import { Menu } from '@material-ui/icons';

import AuthLinks from './AuthLinks';
import GuestLinks from './GuestLinks';

const Navbar = props => {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar disableGutters>
          <IconButton edge="start"
                      color="inherit"
                      aria-label="menu">
            <Menu />
          </IconButton>
          <Typography variant="h6"
                      noWrap>
            Laravel
          </Typography>
          <Box className="mr-auto">
            <GuestLinks />
          </Box>
          <Box className="ml-auto">
            <AuthLinks />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
