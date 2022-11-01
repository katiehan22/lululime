import './ProductIndex.css';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchProducts } from '../../store/products';
import ProductIndexItem from '../ProductIndexItem';

const ProductIndex = () => {
  const dispatch = useDispatch();
  const { category, subcategory } = useParams();
  let products = useSelector(state => Object.values(state.products));
  
  useEffect(() => {
    dispatch(fetchProducts(category, subcategory));
  }, [dispatch, category, subcategory])
  
  return (
    <>
      {console.log(products)}
      <ul>
        {products.map(product => <ProductIndexItem product={product} key={product.id}/>)}
      </ul>
    </>
  )
}

export default ProductIndex;