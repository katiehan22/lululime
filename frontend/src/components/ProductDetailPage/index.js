import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { fetchProduct } from "../../store/products";
import { fetchReviews } from "../../store/reviews";
import "./ProductDetailPage.css";
import testImg from '../../assets/images/product-item-test.png';
import ProductDetailForm from "../ProductDetailForm";
import ProductCarousel from "../ProductCarousel";
import BagPreviewIndex from "../BagPreviewIndex";
import ReviewIndexItem from "../ReviewIndexItem";

const ProductDetailPage = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  let product = useSelector(state => state.products ? state.products[productId] : null);
  let reviews = useSelector(state => state.reviews ? Object.values(state.reviews) : [])

  const scrollToReviews = () => {
    document.querySelector('.reviews-container').scrollIntoView({behavior: "smooth"});
  }

  useEffect(() => {
    dispatch(fetchProduct(productId));
    dispatch(fetchReviews(productId));
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
              <img src={testImg} alt=""/>
              {/* <img src={product.imgUrls[0]} alt="" /> */}
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

              <div className="reviews-anchor" onClick={() => scrollToReviews()}>
                <i class="fa-regular fa-star"></i>
                <Link to="#" className="reviews-anchor-link"><h2>&nbsp;Reviews ({reviews.length})</h2></Link>
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
              <img src={testImg} alt="" />
              {/* <img src={product.imgUrls[1]} alt="" /> */}
            </div>
            <div className="description-right">
              <img src={testImg} alt="" />
              {/* <img src={product.imgUrls[0]} alt="" /> */}
            </div>
          </div>

          {/* <div className="pdp-carousel-container">
            <div className='pdp-carousel-header'>
              You may also like
            </div>
            <ProductCarousel category={product.category}/>
          </div> */}

          <div className="reviews-container">
            <div className="reviews-header-container">
              <div className="reviews-header-text">Reviews</div>
              <div className="reviews-header-average">ADD AVG RATING</div>
              <div className="create-revew-button-container">
                <button id="create-revew-button">WRITE A REVIEW</button>
              </div>
            </div>
            <div className="reviews-index-item-container">
              {reviews?.map(review => <ReviewIndexItem review={review} key={review.id} />)}
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