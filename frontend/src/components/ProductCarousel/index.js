import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import './ProductCarousel.css';
import ProductIndexItem from '../ProductIndexItem';
import { fetchProducts } from '../../store/products';

const ProductCarousel = ({ products, productIdInt }) => {
  // let product1 = products.find(product => product.id === ((productIdInt + 0) % 46 + 1));
  // let product2 = products.find(product => product.id === ((productIdInt + 1) % 46 + 1));
  // let product3 = products.find(product => product.id === ((productIdInt + 2) % 46 + 1));
  // let product4 = products.find(product => product.id === ((productIdInt + 3) % 46 + 1));
  return (
    <div className="carousel-container">
      <div className='product-carousel-items-container'>
        {/* <ProductIndexItem product={product1} />
        <ProductIndexItem product={product2} />
        <ProductIndexItem product={product3} />
        <ProductIndexItem product={product4} /> */}
        <ProductIndexItem product={products[1]} />
        <ProductIndexItem product={products[2]} />
        <ProductIndexItem product={products[3]} />
        <ProductIndexItem product={products[4]} />
      </div>
    </div>
  )
}

export default ProductCarousel;