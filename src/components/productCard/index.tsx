import { useState } from "react";
import { UseProducts } from "../../providers/products";
import { UseUser } from "../../providers/user";
import { Button } from "../button";
import { BoxContent, BoxImage, BoxInfo } from "./styles";

export interface Burger {
  name: string;
  category: string;
  price: number;
  img: string;
  userId?: number;
  id: number;
}

const ProductsCard = ({ name, price, category, img, id }: Burger) => {
  const [userId] = useState(
    JSON.parse(localStorage.getItem("@hamburgueria:id") || "")
  );
  const [token] = useState(
    JSON.parse(localStorage.getItem("@hamburgueria:token") || "")
  );

  const { findProduct } = UseProducts();
  const { addToUserCart } = UseUser();

  const handleAdd = () => {
    const newPdt = { ...findProduct(id), userId: parseInt(userId) };
    addToUserCart(newPdt, token);
    console.log("clicou");
  };

  return (
    <div>
      <BoxContent>
        <BoxImage>
          <img src={img} />
        </BoxImage>
        <BoxInfo>
          <h3>{name}</h3>
          <p>Category: {category}</p>
          <p>R$: {price}</p>
          <Button onClick={handleAdd}>Adicionar</Button>
        </BoxInfo>
      </BoxContent>
    </div>
  );
};

export default ProductsCard;
