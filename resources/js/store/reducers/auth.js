import * as actions from '@store/actions/auth';

const initialState = {
  user: null,
  accessToken: null,
};

// TODO: Integrate auth
const auth = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOG_IN: {
      const { accessToken, user } = action;
      
      localStorage.setItem('accessToken', accessToken);
      
      return {
        accessToken,
        user,
      };
    }
    
    case actions.LOG_OUT: {
      return state = initialState;
    }
    
    default: {
      return state;
    }
  }
};

export default auth;
