import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import './ProductCarousel.css';
import ProductIndexItem from '../ProductIndexItem';
import { fetchProducts } from '../../store/products';

const ProductCarousel = ({ category }) => {
  const dispatch = useDispatch();
  // const category = product.category;
  let products = useSelector(state => state.products ? Object.values(state.products) : []);

  useEffect(() => {
    fetchProducts(category, "undefined");
  }, [dispatch]);

  return (
    <div className="carousel-container">
      <div className='product-carousel-items-container'>
        <ProductIndexItem product={products[0]} />
        <ProductIndexItem product={products[1]} />
        <ProductIndexItem product={products[2]} />
        <ProductIndexItem product={products[3]} />
      </div>
    </div>
  )
}

export default ProductCarousel;