import { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./store/cartContext";

function App() {
  const [showCart, setShowCart] = useState(false);

  function toggleCartHandler(value = null) {
    return () => {
      if (value) {
        setShowCart(value);
      } else
        setShowCart((preState) => {
          return !preState;
        });
    };
  }

  return (
    <CartProvider>
      {showCart && <Cart onToggleCart={toggleCartHandler} />}
      <Header showCart={toggleCartHandler(true)} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
