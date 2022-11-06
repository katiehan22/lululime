import csrfFetch from "./csrf";

const RECEIVE_CART_ITEMS = "cartItem/RECEIVE_CART_ITEMS";
const RECEIVE_CART_ITEM = "cartItem/RECEIVE_CART_ITEM";
const REMOVE_CART_ITEM = "cartItem/REMOVE_CART_ITEM";

// Action creators 
export const receiveCartItems = (cartItems) => {
  return {
    type: RECEIVE_CART_ITEMS,
    cartItems
  }
}

export const receiveCartItem = (cartItem) => {
  return {
    type: RECEIVE_CART_ITEM,
    cartItem
  }
}

export const removeCartItem = (cartItemId) => {
  return {
    type: REMOVE_CART_ITEM,
    cartItemId
  }
}

// Thunk action creators
export const fetchCartItems = () => async dispatch => {
  const res = await csrfFetch('/api/cart_items');
  if(res.ok) {
    const cartItems = await res.json();
    dispatch(receiveCartItems(cartItems));
  }
}

export const fetchCartItem = (cartItemId) => async dispatch => {
  const res = await csrfFetch(`/api/cart_items/${cartItemId}`);
  if (res.ok) {
    const cartItem = await res.json();
    dispatch(receiveCartItem(cartItem));
  }
}

export const createCartItem = (cartItem) => async dispatch => {
  const res = await csrfFetch('/api/cart_items', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(cartItem)
  });

  if(res.ok) {
    const cartItem = await res.json();
    dispatch(receiveCartItem(cartItem));
  }
}

export const updateCartItem = (cartItem) => async dispatch => {
  const res = await csrfFetch(`/api/cart_items/${cartItem.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(cartItem)
  });

  if (res.ok) {
    const newCartItem = await res.json();
    dispatch(receiveCartItem(newCartItem));
  }
}

export const deleteCartItem = (cartItemId) => async dispatch => {
  const res = await csrfFetch(`/api/cart_items/${cartItemId}`, {
    method: "DELETE"
  })

  if(res.ok) {
    dispatch(removeCartItem(cartItemId));
  }
}

// Cart Reducer
export default function cartItemsReducer(state={}, action) {
  switch (action.type) {
    case RECEIVE_CART_ITEMS:
      return {...action.cartItems};
    case RECEIVE_CART_ITEM:
      return { ...state, [action.cartItem.id]: action.cartItem }
    case REMOVE_CART_ITEM:
      let newState = {...state};
      delete newState[action.cartItemId];
      return newState;
    default:
      return state;
  }
}