import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { searchProducts } from "../../store/products";
import "./SearchIndex.css";
import ProductIndexItem from "../ProductIndexItem";

const SearchIndex = () => {
  const { query } = useParams();
  const dispatch = useDispatch();
  let pageContent;
  let products = useSelector(state => state.products ? Object.values(state.products) : []);

  if(products.length === 0) {
    pageContent = (
      <>
        <div className="no-results-container">
          <div className="no-results-header">
            No search results for {query}
          </div>
          <div className="no-results-subheader">
            We couldn't find exactly what you were looking for, but try these popular search terms:
          </div>
          <div className="no-results-suggestions">
            <ul className="horizontal-list">
              <li><Link to="/search/align">align</Link></li>
              <li><Link to="/search/bag">belt bag</Link></li>
              <li><Link to="/search/scuba">scuba</Link></li>
              <li><Link to="/search/wunder">wunder</Link></li>
              <li><Link to="/search/jogger">joggers</Link></li>
            </ul>
          </div>
        </div>
      </>
    )
  } else {
    pageContent = (
      <>
        <div className="search-index-header">
          <h2>Showing results for:</h2>
          <h1>{query}</h1>
        </div>

        <div className="search-results-container">
          {products?.map(product => <ProductIndexItem product={product} key={product.id} />)}
        </div>
      </>
    )
  }

  useEffect(() => {
    dispatch(searchProducts(query));
  }, [dispatch, query]);

  return (
    <>
      <div className="search-index-page">
        {pageContent}
      </div>
    </>
  )
}

export default SearchIndex;