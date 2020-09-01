import React from 'react';

import {
  Button,
} from '@material-ui/core';

import AuthService from '@services/auth-service';

const HomePage = props => {
  
  const onBtnAuthClick = () => {
    AuthService.getAuthUser$()
      .then(resp => console.log(resp));
  };
  
  return (
    <>
      <div>HomePage</div>
      <Button variant="contained"
              onClick={onBtnAuthClick}>Test Auth</Button>
    </>
  );
};

export default HomePage;
