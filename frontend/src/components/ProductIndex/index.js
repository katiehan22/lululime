import './ProductIndex.css';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchProducts } from '../../store/products';
import ProductIndexItem from '../ProductIndexItem';

const ProductIndex = () => {
  const dispatch = useDispatch();
  const { category, subcategory } = useParams();
  let products = useSelector(state => state.products ? Object.values(state.products) : []);

  useEffect(() => {
    dispatch(fetchProducts(category, subcategory));
  }, [dispatch, category, subcategory])

  return (
    <>
      <div className='product-index-container'>
        {products?.map(product => <ProductIndexItem product={product} key={product.id}/>)}
      </div>
    </>
  )
}

export default ProductIndex;