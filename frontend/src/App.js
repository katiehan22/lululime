import { Switch, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import React from 'react';
import SignUpFormPage from './components/SignupFormPage';
import UserNavigation from './components/UserNavigation';
import MainNavigation from './components/MainNavigation';

function App() {
  return (
    <>
      <UserNavigation />
      <MainNavigation />
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/signup">
          <SignUpFormPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;