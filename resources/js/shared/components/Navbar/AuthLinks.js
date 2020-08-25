import React from 'react';

import NavLink from './NavLink';

const AuthLinks = props => {
  return (
    <>
      <li className="nav-item">
        <NavLink to="/auth-link-1">Auth Link 1</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/auth-link-2">Auth Link 2</NavLink>
        <span className="caret" />
      </li>
    </>
  );
};

export default AuthLinks;
