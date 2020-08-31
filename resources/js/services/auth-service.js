const AuthService = {
  register$: payload => {
    return axios.post('/api/v1/auth/register', payload)
      .then(resp => resp);
  },
};

export default AuthService;
