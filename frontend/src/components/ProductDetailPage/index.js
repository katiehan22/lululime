import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { fetchProduct } from "../../store/products";
import "./ProductDetailPage.css";
import testImg from '../../assets/images/product-item-test.png';
import ProductDetailForm from "../ProductDetailForm";
import ProductCarousel from "../ProductCarousel";

const ProductDetailPage = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  let product = useSelector(state => state.products ? state.products[productId] : null);

  useEffect(() => {
    dispatch(fetchProduct(productId))
  }, [dispatch, productId])

  if (!product || !product.sizes) {
    return null;
  }

  if(product) {
    return (
      <>
        <div className="product-details-page">
          <div className="product-details-top">
            <div className="product-details-img">
              <img src={testImg}/>
              {/* <img src={product.imgUrls[0]} /> */}
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

              <ProductDetailForm product={product}/>

              <div className="reviews-anchor">
                <i class="fa-regular fa-star"></i>
                <Link to="#" className="reviews-anchor-link"><h2>&nbsp;Reviews</h2></Link>
              </div>

              <div className="details-container">
                <h2>Details</h2>
                <ul>
                  <li><i class="fa-solid fa-person-running"></i>{product.details[0]}</li>
                  <li><i class="fa-solid fa-cloud"></i>{product.details[1]}</li>
                  <li><i class="fa-solid fa-arrows-up-to-line"></i>{product.details[2]}</li>
                </ul>
              </div>
            </div>

            <div className="product-details-recommended-top">
              <h2>You may like</h2>
            </div>
          </div>

          <div className="product-description-container">
            <div className="description-left">
              <div className="description-left-header">
                <p>Why we made this</p>
                <hr className="red-break" />
              </div>
              <div className="description-left-text">
                <p>{product.description}</p>
              </div>
            </div>
            <div className="description-middle">
              <img src={testImg} />
            </div>
            <div className="description-right">
              <img src={testImg} />
            </div>
          </div>

          <div className="pdp-carousel-container">
            <div className='pdp-carousel-header'>
              You may also like
            </div>
            <ProductCarousel category={product.category}/>
          </div>
        </div>
      </>
    )
  } else {
    return null;
  }
}

export default ProductDetailPage;