import * as actions from '@store/actions/auth';

const initialState = {
  accessToken: null,
  refreshToken: null,
};

import AuthService from '@services/auth-service';

const auth = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOG_IN: {
      AuthService.getAuthUser$()
        .then(resp => console.log(resp));
    }
    case actions.LOG_OUT: {}
    case actions.SAVE_ACCESS_TOKEN: {
      return {
        ...state,
        accessToken: action.accessToken,
      };
    }
    case actions.SAVE_REFRESH_TOKEN: {
      return {
        ...state,
        refreshToken: action.refreshToken,
      };
    }
    default: {
      return state;
    }
  }
};

export default auth;
