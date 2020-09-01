import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import styled from 'styled-components';

import {
  Box,
  Button,
  Divider,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core';

import AuthService from '@services/auth-service';

import {
  login,
  saveAccessToken,
  saveRefreshToken,
} from '@store/Auth/creator';

const StyledPaper = styled(Paper)`
  width: 500px;
`;

const LoginForm = props => {
  const dispatch = useDispatch();
  
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  
  const onFormSubmit = e => {
    e.preventDefault();
    AuthService.login$(form)
      .then(resp => {
        const {
          access_token,
          refresh_token,
        } = resp.data;
        
        dispatch(saveAccessToken(access_token));
        dispatch(saveRefreshToken(refresh_token));
        dispatch(login());
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
      <Typography variant="h4">Login</Typography>
      <form action="#"
            onSubmit={onFormSubmit}>
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
