import { useEffect, useState } from "react";
import { UseUser } from "../../providers/user";
import { Button } from "../button";
import CartCard from "../cartCard";
import {
  ModalContainer,
  ModalContent,
  ModalCardContent,
  TotalPriceContainer,
} from "./styles";
import { FiShoppingCart } from "react-icons/fi";
interface CartProp {
  setShowCart: (value: boolean) => void;
}
const Cart = ({ setShowCart }: CartProp) => {
  const [userId] = useState(() => {
    const current = localStorage.getItem("@hamburgueria:id") || "";
    return current;
  });

  const { userCart, getUserCart } = UseUser();

  useEffect(() => {
    getUserCart(parseInt(userId));
  }, [getUserCart, userId]);

  return (
    <ModalContainer>
      <ModalContent>
        <header>
          <FiShoppingCart />
          <Button onClick={() => setShowCart(false)}>X</Button>
        </header>

        <ModalCardContent>
          {userCart.map((item) => (
            <CartCard
              img={item.img}
              key={item.id}
              id={item.id}
              name={item.name}
              category={item.category}
              price={item.price}
            />
          ))}
        </ModalCardContent>

        <TotalPriceContainer>
          Total
          <p>{userCart.reduce((acc, pdt) => pdt.price + acc, 0).toFixed(2)}</p>
        </TotalPriceContainer>
      </ModalContent>
    </ModalContainer>
  );
};

export default Cart;
