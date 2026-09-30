

import { useState } from "react";
import { useCart } from "../context/CartContext";

function Coupon() {

  const [couponCode, setCouponCode] = useState("");

  const { state, dispatch } = useCart();


  const applyCoupon = () => {

    if (couponCode.toUpperCase() === "SAVE10") {

      dispatch({
        type: "APPLY_COUPON",
        payload: {
          code: "SAVE10",
          discount: 10
        }
      });

      alert("10% coupon applied!");

    } else {

      alert("Invalid coupon code.");

    }
  };


  const removeCoupon = () => {

    dispatch({
      type: "REMOVE_COUPON"
    });

    setCouponCode("");
  };


  return (
    <div className="coupon-section">

      <h3>Coupon Code</h3>

      {state.coupon ? (

        <div>

          <p>
            Coupon <strong>{state.coupon.code}</strong> applied
          </p>

          <button onClick={removeCoupon}>
            Remove Coupon
          </button>

        </div>

      ) : (

        <div className="coupon-input">

          <input
            type="text"
            placeholder="Enter coupon"
            value={couponCode}
            onChange={(event) =>
              setCouponCode(event.target.value)
            }
          />

          <button onClick={applyCoupon}>
            Apply
          </button>

        </div>

      )}

    </div>
  );
}

export default Coupon;