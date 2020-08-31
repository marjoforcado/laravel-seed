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

import AuthService from '@services/auth-service';

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
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });
  
  const onFormSubmit = e => {
    e.preventDefault();
    AuthService.register$(form)
      .then(resp => console.log(resp))
      .catch(error => {
        if (error) {
          console.log(error.response.data.message);
        }
      });
  };
  
  const onInputChange = e => {
    const { value, name } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  
  return (
    <StyledPaper className="p-3 mx-auto mt-5"
                 elevation={3}>
      <Typography variant="h4">Register</Typography>
      <form action="#" onSubmit={onFormSubmit}>
        <TextField className="my-2"
                   name="name"
                   label="Full Name"
                   variant="outlined"
                   type="text"
                   onChange={onInputChange}
                   value={form.name}
                   fullWidth
                   required />
        {/*<StyledKeyboardDatePicker className="my-2"*/}
        {/*                          label="Date of birth"*/}
        {/*                          inputVariant="outlined"*/}
        {/*                          value={selectedDate}*/}
        {/*                          onChange={date => setSelectedDate(date)}*/}
        {/*                          placeholder="MM/DD/YYYY"*/}
        {/*                          format="MM/DD/YYYY"*/}
        {/*                          clearable*/}
        {/*                          disableFuture*/}
        {/*                          autoOk />*/}
        <TextField className="my-2"
                   name="email"
                   label="Email"
                   variant="outlined"
                   type="email"
                   onChange={onInputChange}
                   value={form.email}
                   fullWidth
                   required />
        <TextField className="my-2"
                   name="password"
                   label="Password"
                   variant="outlined"
                   type="password"
                   onChange={onInputChange}
                   value={form.password}
                   fullWidth
                   required />
        <TextField className="my-2"
                   name="password_confirmation"
                   label="Confirm Password"
                   variant="outlined"
                   type="password"
                   onChange={onInputChange}
                   value={form.password_confirmation}
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
