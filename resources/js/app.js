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
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

import {
  Provider,
  useSelector,
  useDispatch,
} from 'react-redux';

import { createStore } from 'redux';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { MuiPickersUtilsProvider } from '@material-ui/pickers';

import MomentUtils from '@date-io/moment';

import { CssBaseline } from '@material-ui/core';

import DefaultLayout from '@layouts/DefaultLayout/DefaultLayout';

import HomePage from '@pages/HomePage';
import LoginPage from '@pages/LoginPage';
import RegisterPage from '@pages/RegisterPage';

import rootReducer from '@store';

const App = () => {
  const authAccessToken = useSelector(state => state.authStore.accessToken);
  
  axios.interceptors.request.use(
    config => {
      if (authAccessToken) {
        config.headers.common['Authorization'] = `Bearer ${authAccessToken}`;
      }
      
      return config;
    },
    error => Promise.reject(error)
  );
  
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <CssBaseline />
      <Router>
        <DefaultLayout>
          <Switch>
            <Route path="/"
                   component={HomePage}
                   exact />
            <Route path="/login"
                   component={LoginPage} />
            <Route path="/register"
                   component={RegisterPage} />
          </Switch>
        </DefaultLayout>
      </Router>
    </MuiPickersUtilsProvider>
  );
};

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

if (document.getElementById('app')) {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
  );
}
