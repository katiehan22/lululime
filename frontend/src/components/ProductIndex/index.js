import './ProductIndex.css';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchProducts } from '../../store/products';
import ProductIndexItem from '../ProductIndexItem';
import womens from '../../assets/images/index-pov/womens.png';
import womensLeggings from '../../assets/images/index-pov/womens-leggings.png';
import womensHoodies from '../../assets/images/index-pov/womens-hoodies.png';
import womensJoggers from '../../assets/images/index-pov/womens-joggers.png';
import womensShirts from '../../assets/images/index-pov/womens-shirts.png';
import mens from '../../assets/images/index-pov/mens.png';
import mensJoggers from '../../assets/images/index-pov/mens-joggers.png';
import mensHoodies from '../../assets/images/index-pov/mens-hoodies.png';
import mensShorts from '../../assets/images/index-pov/mens-shorts.png';
import mensShirts from '../../assets/images/index-pov/mens-shirts.png';
import accessories from '../../assets/images/index-pov/accessories.png';
import accessoriesBackpack from '../../assets/images/index-pov/accessories-backpack.png';
import accessoriesBeltbag from '../../assets/images/index-pov/accessories-beltbag.png';

const ProductIndex = () => {
  const dispatch = useDispatch();
  const { category, subcategory } = useParams();
  let products = useSelector(state => state.products ? Object.values(state.products) : []);

  useEffect(() => {
    dispatch(fetchProducts(category, subcategory));
  }, [dispatch, category, subcategory])

  let headerText = "";
  let imgSource = "";

  switch (category) {
    case "womens":
      switch (subcategory) {
        case undefined:
          headerText = "All Women's";
          imgSource = womens;
          break;
        case "leggings":
          headerText = "Women's Leggings";
          imgSource = womensLeggings;
          break;
        case "hoodies":
          headerText = "Women's Hoodies & Sweatshirts";
          imgSource = womensHoodies;
          break;
        case "joggers":
          headerText = "Women's Joggers";
          imgSource = womensJoggers;
          break;
        case "shirts":
          headerText = "Women's Shirts";
          imgSource = womensShirts;
          break;
        default:
          break;
      }
      break;
    case "mens":
      switch (subcategory) {
        case undefined:
          headerText = "All Men's";
          imgSource = mens;
          break;
        case "joggers":
          headerText = "Men's Joggers";
          imgSource = mensJoggers;
          break;
        case "hoodies":
          headerText = "Men's Hoodies & Sweatshirts";
          imgSource = mensHoodies;
          break;
        case "shorts":
          headerText = "Men's Shorts";
          imgSource = mensShorts;
          break;
        case "shirts":
          headerText = "Men's Shirts";
          imgSource = mensShirts;
          break;
        default:
          break;
      }
    case "accessories":
      switch (subcategory) {
        case undefined:
          headerText = "All Accessories";
          imgSource = accessories;
          break;
        case "belt-bags":
          headerText = "Belt Bags";
          imgSource = accessoriesBeltbag;
          break;
        case "backpacks":
          headerText = "Backpacks";
          imgSource = accessoriesBackpack;
          break;
        default:
          break;
      }
    default:
      break;
  }

  return (
    <>
      <div className='product-index-page'>
        <div className="index-header-container">
          <div className="index-header-text">{headerText}</div>
          <div className="index-header-img">
            <img src={imgSource}/>
          </div>
        </div>
        <div className='product-index-container'>
          {products?.map(product => <ProductIndexItem product={product} key={product.id}/>)}
        </div>
      </div>
    </>
  )
}

export default ProductIndex;