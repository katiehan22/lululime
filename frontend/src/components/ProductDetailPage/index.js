import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { fetchProduct } from "../../store/products";
import "./ProductDetailPage.css";
import testImg from '../../assets/images/product-item-test.png';

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
        <div className="product-details-page">
          <div className="product-details-top">
            <div className="product-details-img">
              <img src={testImg}/>
            </div>

            <div className="product-details-top-middle">
              <div className="breadcrumbs">
                <Link className="breadcrumb-link" to={`/products/${product.category}`}>{product.category}</Link> / <Link className="breadcrumb-link" to={`/products/${product.category}/${product.subcategory}`}>{product.subcategory}</Link>
              </div>
              <div className="product-details-name">
                {product.name}
              </div>
              <div className="product-details-price">
                <h3>${product.price} USD</h3>
              </div>
            </div>

            <div className="product-details-recommended-top">
              <h2>You may like</h2>
            </div>
          </div>
        </div>
      </>
    )
  } else {
    return null;
  }
}

export default ProductDetailPage;