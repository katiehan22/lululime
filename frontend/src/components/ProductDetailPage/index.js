import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../../store/products";
import "./ProductDetailPage.css";

const ProductDetailPage = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  let product = useSelector(state => state.products ? state.products[productId] : null);

  useEffect(() => {
    dispatch(fetchProduct(productId))
  }, [dispatch, productId])

  if(product) {
    return (
      <>
        {product.name}
      </>
    )
  } else {
    return null;
  }
}

export default ProductDetailPage;