import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './UserNavigation.css';
import * as sessionActions from '../../store/session';

function UserNavigation() {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);
  let userLink;

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push('/');
  }

  const redirectSignIn = (e) => {
    e.preventDefault();
    history.push('/login');
  };

  if (sessionUser) {
    userLink = (
      <button className="user-button" onClick={logout}>
        <i className="fa-regular fa-user"></i> Logout
      </button>
    );
  } else {
    userLink = (
      <>
        <button className="user-button" onClick={redirectSignIn}>
          <i className="fa-regular fa-user"></i> Sign In
        </button>
      </>
    );
  }

  return (
    <div className="user-nav">
      {userLink}
    </div>
  )
}

export default UserNavigation;