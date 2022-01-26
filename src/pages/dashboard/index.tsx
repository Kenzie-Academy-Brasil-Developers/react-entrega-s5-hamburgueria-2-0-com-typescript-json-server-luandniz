import { useState } from "react";
import Cart from "../../components/cart";
import Header from "../../components/header";
import ProductsList from "../../components/productsList";

export const Dashboard = () => {
  const [showCart, setShowCart] = useState(false);

  return (
    <div>
      <Header setShowCart={setShowCart} />
      <ProductsList />
      {showCart && <Cart setShowCart={setShowCart} />}
    </div>
  );
};
