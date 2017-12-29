import { LOGIN, loginSuccess } from './modules/user';
import { take, call, put } from 'redux-saga/effects';
import Auth0Lock from 'auth0-lock';

const lock = new Auth0Lock(process.env.REACT_APP_AUTH0_CLIENTID, process.env.REACT_APP_AUTH0_DOMAIN);

function* handleLogin() {
  yield take(LOGIN);
  lock.show();
}

function* handleLoginSuccess() {
  let resolve;
  lock.on('authenticated', authResult => {
    lock.getUserInfo(authResult.accessToken, (err, profile) => {
      resolve({ token: authResult.accessToken, profile });
    });
  });
  while (true) {
    const promise = new Promise(res => { resolve = res });
    const { token, profile } = yield promise;
    yield put(loginSuccess(token, profile));
  }
}

export default [handleLogin, handleLoginSuccess];