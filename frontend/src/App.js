import { Switch, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import React from 'react';
import UserNavigation from './components/UserNavigation';
import MainNavigation from './components/MainNavigation';
import SignupPage from './components/SignupPage';
import SplashPage from './components/SplashPage';
import Footer from './components/Footer';

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
      <Footer />
    </>
  );
}

export default App;