import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { fetchProduct, fetchProductAndRelatedProducts } from "../../store/products";
import { fetchReviews } from "../../store/reviews";

const TestComponent = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  let productIdInt = parseInt(productId);
  let products = useSelector(state => state.products ? Object.values(state.products) : []);

  useEffect(() => {
    dispatch(fetchProductAndRelatedProducts(productId))
  }, [dispatch, productId])

  return (
    <>
      {productIdInt}
      {products[0].name}
      {products[productIdInt].name}
    </>
  )
}

export default TestComponent;