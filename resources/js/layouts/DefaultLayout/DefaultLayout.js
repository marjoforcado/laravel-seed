import React from 'react';

import {
  Box,
  Container,
} from '@material-ui/core';

import Navbar from '@shared/components/Navbar/Navbar';

const DefaultLayout = props => {
  const { children } = props;
  
  return (
    <>
      <Navbar />
      <Box>
        <Container>
          {children}
        </Container>
      </Box>
    </>
  );
};

export default DefaultLayout;
