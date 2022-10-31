import { Switch, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import React from 'react';
import UserNavigation from './components/UserNavigation';
import MainNavigation from './components/MainNavigation';
import SignupPage from './components/SignupPage';
import SplashPage from './components/SplashPage';

function App() {
  return (
    <>
      <UserNavigation />
      <MainNavigation />
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/" component={SplashPage} />
      </Switch>
    </>
  );
}

export default App;