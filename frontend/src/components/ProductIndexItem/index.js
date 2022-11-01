import "./ProductIndexItem.css";

const ProductIndexItem = ({product}) => {
  return (
    <>
      <div className="product-index-item-container">
        {product.name}
        {product.price}
        {product.colours}
      </div>
    </>
  )
}

export default ProductIndexItem;