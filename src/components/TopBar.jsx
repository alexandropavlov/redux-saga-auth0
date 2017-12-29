import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login, logout } from '../redux/modules/user';

const TopBar = ({ user, onLogin, onLogout }) => (
  <div>
    {!!user && 
      <div>
        <p>{ user.email }</p>
        <button onClick={onLogout}>Logout</button>
      </div>}
    {!user && <button onClick={onLogin}>Login</button>}
  </div>
);

TopBar.propTypes = {
  onLogin: PropTypes.func,
  onLogout: PropTypes.func,
  user: PropTypes.shape({ email: PropTypes.string.isRequired }),
};

export default connect(
  state => ({
    user: state.user.profile,
  }),
  {
    onLogin: login,
    onLogout: logout,
  }
)(TopBar);