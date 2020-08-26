import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Link as RouterLink } from 'react-router-dom';
import { Button } from '@material-ui/core';

const StyledButton = styled(Button)`
  &:hover {
    color: #fff;
  }
`;

const NavLink = props => {
  const { to, children } = props;
  
  return (
    <StyledButton to={to}
                  variant="link"
                  component={RouterLink}>{children}</StyledButton>
  );
};

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default NavLink;
