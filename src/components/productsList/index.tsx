import { useEffect, useState } from "react";
import { UseProducts } from "../../providers/products";
import ProductsCard from "../productCard";
import { DisplayContainer } from "./styles";
const ProductsList = () => {
  const [token] = useState(
    JSON.parse(localStorage.getItem("@hamburgueria:token") || "")
  );

  const { getProducts, productList } = UseProducts();
  console.log(productList);

  useEffect(() => {
    getProducts(token);
  }, []);

  return (
    <DisplayContainer>
      {productList.map((curr) => (
        <ProductsCard
          key={curr.id}
          name={curr.name}
          price={curr.price}
          img={curr.img}
          id={curr.id}
          category={curr.category}
        />
      ))}
    </DisplayContainer>
  );
};
export default ProductsList;
