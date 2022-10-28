import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = () => {

  const dispatch = useDispatch();
  const currentUser = useSelector(state => (state.session.user));
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const handleLogin = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ email, password }))
      .catch(async (res) => {
        let data;
        try {
          data = await res.clone().json();
        } catch {
          data = await res.text();
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      });
    // setEmail('');
    // setPassword('');
  }


  if (currentUser) return <Redirect to="/" />;

  return (
    <>
      <div className='login-form-container'>
        <h1>Sign in to your member account</h1>
        <form className="login-form">
          <ul>
            {errors.map(error => <li key={error}>{error}</li>)}
          </ul>
          Email address
          <br />
          <input value={email} onChange={e => setEmail(e.target.value)} />
          <br />
          <br />
          Password
          <br />
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
          <br />
          <br />
          <button onClick={handleLogin} id="login-button">SIGN IN TO YOUR MEMBER ACCOUNT</button>
        </form>
      </div>
    </>
  )
}

export default LoginForm;