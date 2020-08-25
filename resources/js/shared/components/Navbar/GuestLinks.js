import React from 'react';

import NavLink from './NavLink';

const GuestLinks = props => {
  return (
    <>
      <li className="nav-item">
        <NavLink to="/login">Login</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/register">Register</NavLink>
      </li>
    </>
  );
};

export default GuestLinks;
