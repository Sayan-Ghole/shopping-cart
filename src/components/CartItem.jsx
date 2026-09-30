
import { useCart } from "../context/CartContext";

function CartItem({ item }) {

  const { dispatch } = useCart();

  return (
    <div className="cart-item">

      <img
        src={item.image}
        alt={item.name}
      />

      <div className="cart-item-info">

        <h3>{item.name}</h3>

        <p>₹{item.price}</p>

        <div className="quantity-controls">

          <button
            onClick={() =>
              dispatch({
                type: "DECREASE_QUANTITY",
                payload: item.id
              })
            }
          >
            -
          </button>

          <span>{item.quantity}</span>

          <button
            onClick={() =>
              dispatch({
                type: "INCREASE_QUANTITY",
                payload: item.id
              })
            }
          >
            +
          </button>

        </div>

        <button
          className="remove-button"
          onClick={() =>
            dispatch({
              type: "REMOVE_FROM_CART",
              payload: item.id
            })
          }
        >
          Remove
        </button>

      </div>

    </div>
  );
}

export default CartItem;