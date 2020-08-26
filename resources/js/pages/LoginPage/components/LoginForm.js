import React from 'react';

import styled from 'styled-components';

import {
  Box,
  Button,
  Divider,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core';

const StyledPaper = styled(Paper)`
  width: 500px;
`;

const LoginForm = props => {
  return (
    <StyledPaper className="p-3 mx-auto mt-5"
                 elevation={3}>
      <Typography variant="h4">Login</Typography>
      <form action="#">
        <TextField className="my-2"
                   label="Email"
                   variant="outlined"
                   type="email"
                   fullWidth
                   required />
        <TextField className="my-2"
                   label="Password"
                   variant="outlined"
                   type="password"
                   fullWidth
                   required />
        <Divider className="my-3" />
        <Box className="d-flex my-2">
          <Box className="ml-auto">
            <Button className="mx-1"
                    type="reset"
                    size="large"
                    color="default"
                    variant="text">Reset</Button>
            <Button className="mx-1"
                    type="submit"
                    size="large"
                    color="primary"
                    variant="contained">Log In</Button>
          </Box>
        </Box>
      </form>
    </StyledPaper>
  );
};

export default LoginForm;
