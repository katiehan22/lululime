import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
// import configureStore from './store';
import csrfFetch from "./store/csrf";
import * as sessionActions from './store/session';
import * as productActions from './store/products';
import * as cartItemActions from './store/cart';
import * as reviewActions from './store/reviews';
import { ModalProvider } from './context/Modal';
import ScrollToTop from './components/ScrollToTop';
// import persistor from './store';
import { PersistGate } from 'redux-persist/integration/react';
import {persistor, store} from './store';

// const store = configureStore();

if (process.env.NODE_ENV !== "production") {
  window.store = store;
  window.csrfFetch = csrfFetch;
  window.sessionActions = sessionActions;
  window.productActions = productActions;
  window.cartItemActions = cartItemActions;
  window.reviewActions = reviewActions;
}

function Root() {
  return (
    <ModalProvider>  
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <ScrollToTop />
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </ModalProvider>
  );
}

const renderApplication = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Root />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

if (
  sessionStorage.getItem("currentUser") === null ||
  sessionStorage.getItem("X-CSRF-Token") === null 
) {
  store.dispatch(sessionActions.restoreSession()).then(renderApplication);
} else {
  renderApplication();
}