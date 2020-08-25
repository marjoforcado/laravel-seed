import React from 'react';

import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@material-ui/core';

const NavLink = props => {
  const { to, children } = props;
  
  return (
    <Link to={to}
          underline="none"
          className="nav-link"
          component={RouterLink}>{children}</Link>
  );
};

export default NavLink;
