const AuthService = {
  register$: payload => {
    return axios.post('/api/v1/auth/register', payload)
      .then(resp => resp);
  },
  login$: payload => {
    return axios.post('/api/v1/auth/login', payload)
      .then(resp => resp);
  },
  getAuthUser$: () => {
    return axios.get('/api/v1/auth/me')
      .then(resp => resp);
  },
};

export default AuthService;
