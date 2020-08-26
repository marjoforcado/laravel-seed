import React from 'react';

import NavLink from './NavLink';

const GuestLinks = props => {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
    </>
  );
};

export default GuestLinks;
