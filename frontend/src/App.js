import { Switch, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import React from 'react';
import UserNavigation from './components/UserNavigation';
import MainNavigation from './components/MainNavigation';
import SignupPage from './components/SignupPage';
import SplashPage from './components/SplashPage';
import Footer from './components/Footer';
import ProductIndex from './components/ProductIndex';
import ProductDetailPage from './components/ProductDetailPage';
import BagIndex from './components/BagIndex';
import EditCartForm from './components/EditCartForm';

function App() {
  return (
    <>
      <UserNavigation />
      <MainNavigation />
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/products/:category/:subcategory" component={ProductIndex}/>
        <Route path="/products/:category" component={ProductIndex} />
        <Route path="/productdetail/:productId" component={ProductDetailPage} />
        <Route path="/bag" component={BagIndex} />
        <Route path="/edit-item/:cartItemId" component={EditCartForm} />
        <Route path="/" component={SplashPage} />
      </Switch>
      {/* <Footer /> */}
    </>
  );
}

export default App;