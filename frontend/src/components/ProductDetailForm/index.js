import "./ProductDetailForm.css";

const ProductDetailForm = ({product}) => {

  const getColours = () => {
    
  }

  return (
    <>
      <div className="product-details-form-container">
        {product.colours}
        <form>
          <label htmlFor="colour">Colour: </label>
          <input type="radio" value={product.colours[0]} name="colour" placeholder="colour" id="colour" />{product.colours[0]}
          {/* {product.colours.map(colour => {
            <input type="radio" value={colour} name="colour" placeholder="colour" id="colour"/>
          })} */}
        </form>
      </div>
    </>
  )
}

export default ProductDetailForm;