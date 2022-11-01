import { Switch, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import React from 'react';
import UserNavigation from './components/UserNavigation';
import MainNavigation from './components/MainNavigation';
import SignupPage from './components/SignupPage';
import SplashPage from './components/SplashPage';
import Footer from './components/Footer';
import ProductIndex from './components/ProductIndex';
import ProductDetailsPage from './components/ProductDetailsPage';

function App() {
  return (
    <>
      <UserNavigation />
      <MainNavigation />
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/products/:category/:subcategory" component={ProductIndex}/>
        <Route exact path="/products/:category" component={ProductIndex} />
        {/* <Route exact path="/products/:productId" component={ProductDetailsPage} /> */}
        <Route exact path="/" component={SplashPage} />
      </Switch>
      {/* <Footer /> */}
    </>
  );
}

export default App;