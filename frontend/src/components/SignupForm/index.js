import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import * as sessionActions from "../../store/session";
import "./SignupForm.css";

const SignupForm = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSignup = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.signup({ email, password }))
      .catch(async (res) => {
        let data;
        try {
          data = await res.clone().json();
        } catch {
          data = await res.text();
        }

        if (data?.errors) {
          setErrors(data.errors);
        } else if (data) {
          setErrors([data]);
        } else {
          setErrors([res.statusText]);
        }
      });
  }

  return (
    <>
      <div className="signup-form-container">
        <h1>Create a member account</h1>
        <hr className="red-break"/>
        <form className="signup-form">
          Email address
          <br />
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <br />
          <br />
          Password
          <br />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <br />
          <br />
          <ul className="signup-errors">
            {errors.map(error => <li key={error}>{error}</li>)}
          </ul>
          <button onClick={handleSignup} id="signup-button">CREATE MEMBER ACCOUNT</button>
        </form>
        <br />
        <hr />
        <Link to="/login" id="login-link">Sign in to your member account</Link>
      </div>
    </>
  );
}

export default SignupForm;