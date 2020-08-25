/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { CssBaseline } from '@material-ui/core';

import DefaultLayout from '@layouts/DefaultLayout/DefaultLayout';

import HomePage from '@pages/HomePage';
import LoginPage from '@pages/LoginPage';
import RegisterPage from '@pages/RegisterPage';

const App = props => {
  return (
    <>
      <CssBaseline />
      <Router>
        <DefaultLayout>
          <Switch>
            <Route path="/"
                   component={HomePage}
                   exact />
          </Switch>
        </DefaultLayout>
      </Router>
    </>
  );
};

if (document.getElementById('app')) {
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  );
}
