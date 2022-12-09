import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import productsReducer from './products';
import sessionReducer from './session';
import cartItemsReducer from './cart';
import reviewsReducer from './reviews';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const rootReducer = combineReducers({
  session: sessionReducer,
  products: productsReducer,
  cartItems: cartItemsReducer,
  reviews: reviewsReducer
});

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

// const configureStore = (preloadedState) => {
//   // return createStore(rootReducer, preloadedState, enhancer);
//   return createStore(persistedReducer, preloadedState, enhancer);
// };

const store = createStore(persistedReducer, enhancer);

const persistor = persistStore(store);

// export default configureStore;
export {persistor, store}
