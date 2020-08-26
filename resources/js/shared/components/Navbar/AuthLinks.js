import React from 'react';

import NavLink from './NavLink';

const AuthLinks = props => {
  return (
    <>
      <NavLink to="/auth-link-1">Auth Link 1</NavLink>
      <NavLink to="/auth-link-2">Auth Link 2</NavLink>
    </>
  );
};

export default AuthLinks;
