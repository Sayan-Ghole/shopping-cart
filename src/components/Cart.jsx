
import { useCart } from "../context/CartContext";

import CartItem from "./CartItem";
import Coupon from "./Coupon";

function Cart() {

  const { state } = useCart();

  const { cart, coupon } = state;


  const subtotal = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );


  const discount = coupon
    ? subtotal * (coupon.discount / 100)
    : 0;


  const priceAfterDiscount =
    subtotal - discount;


  const gst =
    priceAfterDiscount * 0.18;


  const grandTotal =
    priceAfterDiscount + gst;


  return (
    <section className="cart-section">

      <h2 className="section-title">
        Shopping Cart
      </h2>


      {cart.length === 0 ? (

        <div className="empty-cart">

          <h3>Your cart is empty</h3>

          <p>
            Add some products to your cart.
          </p>

        </div>

      ) : (

        <>

          <div className="cart-items">

            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
              />
            ))}

          </div>


          <Coupon />


          <div className="cart-summary">

            <h3>Order Summary</h3>

            <div className="summary-row">
              <span>Subtotal</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>


            <div className="summary-row">
              <span>Discount</span>
              <span>
                - ₹{discount.toFixed(2)}
              </span>
            </div>


            <div className="summary-row">
              <span>GST (18%)</span>
              <span>
                ₹{gst.toFixed(2)}
              </span>
            </div>


            <hr />


            <div className="summary-total">
              <span>Grand Total</span>

              <strong>
                ₹{grandTotal.toFixed(2)}
              </strong>
            </div>

          </div>

        </>

      )}

    </section>
  );
}

export default Cart;