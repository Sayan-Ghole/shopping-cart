import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

import { CartProvider } from "./context/CartContext";

import "./App.css";


const products = [

  {
    id: 1,
    name: "Wireless Headphones",
    description: "Comfortable Bluetooth headphones",
    price: 1999,
    image: "https://via.placeholder.com/300x200?text=Headphones"
  },

  {
    id: 2,
    name: "Mechanical Keyboard",
    description: "RGB mechanical keyboard",
    price: 2999,
    image: "https://via.placeholder.com/300x200?text=Keyboard"
  },

  {
    id: 3,
    name: "Gaming Mouse",
    description: "High precision gaming mouse",
    price: 1299,
    image: "https://via.placeholder.com/300x200?text=Mouse"
  },

  {
    id: 4,
    name: "USB-C Hub",
    description: "Multi-port USB-C adapter",
    price: 999,
    image: "https://via.placeholder.com/300x200?text=USB-Hub"
  },

  {
    id: 5,
    name: "Laptop Stand",
    description: "Adjustable aluminium laptop stand",
    price: 1499,
    image: "https://via.placeholder.com/300x200?text=Laptop+Stand"
  },

  {
    id: 6,
    name: "Webcam",
    description: "Full HD webcam for meetings",
    price: 2499,
    image: "https://via.placeholder.com/300x200?text=Webcam"
  }

];


function App() {

  return (

    <CartProvider>

      <Header />

      <main>

        <ProductList
          products={products}
        />

        <Cart />

      </main>

      <Footer />

    </CartProvider>

  );
}

export default App;