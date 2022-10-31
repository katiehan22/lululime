import csrfFetch from "./csrf";

const RECEIVE_PRODUCTS = "products/RECEIVE_PRODUCTS";
const RECEIVE_PRODUCT = "products/RECEIVE_PRODUCT";

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

export default function productsReducer(state={}, action) {
  switch (action.type) {
    case receiveProducts:
      return action.products;
    case receiveProduct:
      return { ...state, [action.product.id]: action.product }
    default:
      return state;
  }
}