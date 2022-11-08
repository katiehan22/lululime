import csrfFetch from "./csrf";

const RECEIVE_REVIEWS = "reviews/RECEIVE_REVIEWS";
const RECEIVE_REVIEW = "reviews/RECEIVE_REVIEW";

// ACTION CREATORS
export const receiveReviews = (reviews) => {
  return {
    type: RECEIVE_REVIEWS,
    reviews
  }
}

export const receiveReview = (review) => {
  return {
    type: RECEIVE_REVIEW,
    review
  }
}

// Thunk action creators 
export const fetchReviews = (productId) => async dispatch => {
  const res = await csrfFetch(`/api/products/${productId}/reviews`);
  if(res.ok) {
    const reviews = await res.json();
    dispatch(receiveReviews(reviews));
  }
}

export const createReview = (review) => async dispatch => {
  const res = await csrfFetch('/api/reviews', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(review)
  });

  if(res.ok) {
    const review = await res.json();
    dispatch(receiveReview(review));
  }
}

// Review Reducer
export default function reviewsReducer(state={}, action) {
  switch (action.type) {
    case RECEIVE_REVIEWS:
      return { ...action.reviews };
    case RECEIVE_REVIEW:
      return { ...state, [action.review.id]: action.review };
    default:
      return state;
  }
}