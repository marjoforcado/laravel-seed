import * as actions from '@store/actions/auth';

export const login = (user, accessToken) => ({
  type: actions.LOG_IN,
  user,
  accessToken,
});
