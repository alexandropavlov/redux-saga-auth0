export const LOGIN = 'user/LOGIN';
export const LOGOUT = 'user/LOGOUT';
export const LOGIN_SUCCESS = 'user/LOGIN_SUCCESS';

const initialState = {
  token: null,
  profile: null,
};

const makeReducer = actions => (state = initialState, action) => {
  if (!actions[action.type]) return state;
  return actions[action.type](state, action);
};

const actions = {
  [LOGOUT]: state => initialState,
  [LOGIN_SUCCESS]: (state, { token, profile }) => ({ token, profile })
}

export default makeReducer(actions);

export const login = () => ({
  type: LOGIN,
});

export const logout = () => ({
  type: LOGOUT,
});

export const loginSuccess = (token, profile) => ({
  type: LOGIN_SUCCESS,
  token,
  profile,
});

