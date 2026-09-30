

import { useCart } from "../context/CartContext";

function Header() {

  const { state } = useCart();

  const cartCount = state.cart.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );

  return (
    <header className="header">

      <div>
        <h1>My Online Store</h1>
        <p>Simple React Shopping Cart</p>
      </div>

      <div className="cart-count">
        🛒 Cart: {cartCount}
      </div>

    </header>
  );
}

export default Header;