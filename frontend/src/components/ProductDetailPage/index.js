import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { fetchProduct, fetchProductAndRelatedProducts } from "../../store/products";
import { fetchReviews } from "../../store/reviews";
import "./ProductDetailPage.css";
import testImg from '../../assets/images/product-item-test.png';
import ProductDetailForm from "../ProductDetailForm";
import ProductCarousel from "../ProductCarousel";
import BagPreviewIndex from "../BagPreviewIndex";
import ReviewIndexItem from "../ReviewIndexItem";
import ReviewFormModal from "../ReviewFormModal";

import testImg1 from '../../assets/images/color-test/01_black_v1.png';
import testImg2 from '../../assets/images/color-test/01_black_v2.png';
import testImg3 from '../../assets/images/color-test/02_icingblue_v1.png';
import testImg4 from '../../assets/images/color-test/02_icingblue_v2.png';
import testImg5 from '../../assets/images/color-test/03_navy_v1.png';
import testImg6 from '../../assets/images/color-test/03_navy_v2.png';
import testImg7 from '../../assets/images/color-test/04_white_v1.png';
import testImg8 from '../../assets/images/color-test/04_white_v2.png';

const ProductDetailPage = () => {
  const productImgTest = [testImg1, testImg2, testImg3, testImg4, testImg5, testImg6, testImg7, testImg8 ];
  const [img1, setImg1] = useState(productImgTest[0]);
  const [img2, setImg2] = useState(productImgTest[1]);

  const dispatch = useDispatch();
  const { productId } = useParams();
  let productIdInt = parseInt(productId);
  let products = useSelector(state => state.products ? Object.values(state.products) : []);
  let reviews = useSelector(state => state.reviews ? Object.values(state.reviews) : [])

  let product = products.find(product => product.id === productIdInt)

  const scrollToReviews = () => {
    document.querySelector('.reviews-container').scrollIntoView({behavior: "smooth"});
  }

  const calculateAvgRating = () => {
    if(reviews.length === 0) {
      return 0;
    }

    const ratingSum = reviews.reduce((acc, ele) => acc + ele.rating, 0);
    return (ratingSum/reviews.length).toFixed(1);
  }

  const calculatedRoundedRating = () => {
    const avgRating = calculateAvgRating();
    return Math.round(avgRating * 2) / 2;
  }

  const [starStyles, setStarStyles] = useState(["fa-regular fa-star", "fa-regular fa-star", "fa-regular fa-star", "fa-regular fa-star", "fa-regular fa-star"]);

  const fillStars = () => {
    const starStylesCopy = ["fa-regular fa-star", "fa-regular fa-star", "fa-regular fa-star", "fa-regular fa-star", "fa-regular fa-star"];

    let before = Math.floor(calculatedRoundedRating());
    let after = calculatedRoundedRating() - before;

    let i = 0;
    for(i; i < before; i++) {
      starStylesCopy[i] = "fa-solid fa-star";
    }

    if(i < 5 && after === .5) {
      starStylesCopy[i] = "fa-solid fa-star-half-stroke";
    }

    setStarStyles(starStylesCopy);
  }

  useEffect(() => {
    // dispatch(fetchProduct(productId));
    dispatch(fetchProductAndRelatedProducts(productId));
    dispatch(fetchReviews(productId));
  }, [dispatch, productId])

  useEffect(() => {
    fillStars();
  }, [dispatch, calculatedRoundedRating()])

  if (!product || !product.sizes) {
    return null;
  }

  if (product) {
    return (
      <>
        <div className="product-details-page">
          <div className="product-details-top">
            <div className="product-details-img">
              <img src={img1} alt=""/>
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

              <ProductDetailForm product={product} products={products} productImgTest={productImgTest} setImg1={setImg1} setImg2={setImg2}/>

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
              <img src={img2} alt="" />
              {/* <img src={product.imgUrls[1]} alt="" /> */}
            </div>
            <div className="description-right">
              <img src={img1} alt="" />
              {/* <img src={product.imgUrls[0]} alt="" /> */}
            </div>
          </div>

          <div className="pdp-carousel-container">
            <div className='pdp-carousel-header'>
              You may also like
            </div>
            <ProductCarousel products={products} productIdInt={productIdInt}/>
          </div>

          <div className="reviews-container">
            <div className="reviews-header-container">
              <div className="reviews-header-text">Reviews</div>
              <div className="reviews-header-average">
                <div className="avg-rating-and-stars">
                  <div className="avg-rating-amount">{calculateAvgRating()}</div>
                  <div className="avg-rating-stars">
                    <i class={starStyles[0]}></i>
                    <i class={starStyles[1]}></i>
                    <i class={starStyles[2]}></i>
                    <i class={starStyles[3]}></i>
                    <i class={starStyles[4]}></i>
                  </div>
                </div>
                <div className="based-on-reviews">
                  Based on {reviews.length} reviews
                </div>
              </div>
              <div className="create-review-button-container">
                <ReviewFormModal productId={productId}/>
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