import * as actions from './action';

export const login = () => ({
  type: actions.LOG_IN,
});

export const saveAccessToken = accessToken => ({
  type: actions.SAVE_ACCESS_TOKEN,
  accessToken,
});

export const saveRefreshToken = refreshToken => ({
  type: actions.SAVE_REFRESH_TOKEN,
  refreshToken,
});
