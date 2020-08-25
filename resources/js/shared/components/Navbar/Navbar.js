import React from 'react';
import { Box } from '@material-ui/core';

import AuthLinks from './AuthLinks';
import GuestLinks from './GuestLinks';

const Navbar = props => {
  return (
    <>
      <Box variant="nav"
           className="navbar navbar-expand sticky-top navbar-light bg-white py-0 px-5">
        <Box className="container-xl">
          <a href="#"
             className="navbar-brand">laravel</a>
          {/*left side*/}
          <ul className="navbar-nav mr-auto">
            <GuestLinks />
          </ul>
          
          {/*right side*/}
          <ul className="navbar-nav ml-auto">
            <AuthLinks />
          </ul>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
