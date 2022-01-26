import { useState } from "react";
import { UseUser } from "../../providers/user";
import { Button } from "../button";
import { Content } from "./styles";
import { FiX } from "react-icons/fi";

export interface Burger {
  name: string;
  category: string;
  price: number;
  img: string;
  userId?: number;
  id: number;
}

const CartCard = ({ name, price, category, id, img }: Burger) => {
  const [token] = useState(
    JSON.parse(localStorage.getItem("@hamburgueria:token") || "")
  );

  const { deleteFromUserCart } = UseUser();

  const handleDel = () => {
    deleteFromUserCart(id, token);
  };

  return (
    <Content>
      <img src={img} />
      <h3>{name}</h3>
      <p>{price}</p>
      <Button className="btn" onClick={handleDel}>
        x
      </Button>
    </Content>
  );
};

export default CartCard;
