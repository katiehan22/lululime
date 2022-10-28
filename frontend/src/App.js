import { Switch, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import React from 'react';
import UserNavigation from './components/UserNavigation';
import MainNavigation from './components/MainNavigation';
import SignupPage from './components/SignupPage';

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
          <SignupPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;