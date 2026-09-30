
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {

  const { dispatch } = useCart();

  const addToCart = () => {

    dispatch({
      type: "ADD_TO_CART",
      payload: product
    });
  };

  return (
    <div className="product-card">

      <img
        src={product.image}
        alt={product.name}
      />

      <h3>{product.name}</h3>

      <p>{product.description}</p>

      <h4>₹{product.price}</h4>

      <button onClick={addToCart}>
        Add to Cart
      </button>

    </div>
  );
}

export default ProductCard;