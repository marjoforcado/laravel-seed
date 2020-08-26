import React, { useState } from 'react';

import styled from 'styled-components';

import {
  TextField,
  Paper,
  Box,
  Button,
  Checkbox,
  Link,
  Typography,
  Divider,
} from '@material-ui/core';

import { KeyboardDatePicker } from '@material-ui/pickers';

const StyledPaper = styled(Paper)`
  width: 500px;
`;

const StyledLink = styled(Link)`
  cursor: pointer;
  margin-left: 3px;
  margin-right: 3px;
`;

const StyledKeyboardDatePicker = styled(KeyboardDatePicker)`
  width: 100%;
`;

const RegisterForm = props => {
  const [selectedDate, setSelectedDate] = useState(null);
  
  return (
    <StyledPaper className="p-3 mx-auto mt-5"
                 elevation={3}>
      <Typography variant="h4">Login</Typography>
      <form action="#">
        <TextField className="my-2"
                   label="First Name"
                   variant="outlined"
                   type="text"
                   fullWidth
                   required />
        <TextField className="my-2"
                   label="Last Name"
                   variant="outlined"
                   type="text"
                   fullWidth
                   required />
        <StyledKeyboardDatePicker className="my-2"
                                  label="Date of birth"
                                  inputVariant="outlined"
                                  value={selectedDate}
                                  onChange={date => setSelectedDate(date)}
                                  placeholder="MM/DD/YYYY"
                                  format="MM/DD/YYYY"
                                  clearable
                                  disableFuture
                                  autoOk />
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
        <TextField className="my-2"
                   label="Confirm Password"
                   variant="outlined"
                   type="password"
                   fullWidth
                   required />
        <Checkbox color="primary" />
        <Typography component="span"
                    variant="body2">
          I Accept the
          <StyledLink>Terms of Use</StyledLink>
          &amp;
          <StyledLink>Primary Policy</StyledLink>
        </Typography>
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
                    variant="contained">Register</Button>
          </Box>
        </Box>
      </form>
    </StyledPaper>
  );
};

export default RegisterForm;
