import "./ProductIndexItem.css";

const ProductIndexItem = ({product}) => {
  return (
    <>
      <li>{product.name}</li>
      <li>{product.price}</li>
      <li>{product.colours}</li>
    </>
  )
}

export default ProductIndexItem;