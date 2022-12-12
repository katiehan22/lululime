import csrfFetch from "./csrf";

const RECEIVE_PRODUCTS = "products/RECEIVE_PRODUCTS";
const RECEIVE_PRODUCT = "products/RECEIVE_PRODUCT";
const REMOVE_PRODUCTS = 'products/REMOVE_PRODUCTS';

export const receiveProducts = (products) => {
  return {
    type: RECEIVE_PRODUCTS,
    products
  }
}

export const receiveProduct = (product) => {
  return {
    type: RECEIVE_PRODUCT,
    product
  }
}

export const removeProducts = () => {
  return {
    type: REMOVE_PRODUCTS
  }
}

export const fetchProducts = (category, subcategory) => async dispatch => {
  const res = await csrfFetch(`/api/products?category=${category}&subcategory=${subcategory}`)

  if (res.ok) {
    const products = await res.json();
    dispatch(receiveProducts(products));
  }
}

export const fetchProduct = (productId) => async dispatch => {
  const res = await csrfFetch(`/api/products/${productId}`);
  if(res.ok) {
    const product = await res.json();
    dispatch(receiveProduct(product));
  }
}

export const fetchProductAndRelatedProducts = (productId) => async dispatch => {
  const res = await csrfFetch(`/api/products/${productId}`)

  if (res.ok) {
    const products = await res.json();
    dispatch(receiveProducts(products));
  }
}

export const searchProducts = (query) => async dispatch => {
  const res = await csrfFetch(`/api/products/search/${query}`);

  if (res.ok) {
    const products = await res.json();
    dispatch(receiveProducts(products));
  }
}

export default function productsReducer(state={}, action) {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return {...action.products};
    case RECEIVE_PRODUCT:
      return { ...state, [action.product.id]: action.product };
    case REMOVE_PRODUCTS:
      return {};
    default:
      return state;
  }
}