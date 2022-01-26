import { createContext, ReactNode, useContext, useState } from "react";
import api from "../../services/api";

interface ProviderProps {
  children: ReactNode;
}

export interface Burger {
  name: string;
  category: string;
  price: number;
  img: string;
  userId?: number;
  id: number;
}

interface ProductsProviderData {
  productList: Burger[];
  filteredList: Burger[];
  isFiltered: boolean;
  getProducts: (userToken: object) => void;
  findProduct: (itemID: number) => Burger;
  getFilteredlist: (userToken: object, category: string) => void;
}

export const ProductsContext = createContext<ProductsProviderData>(
  {} as ProductsProviderData
);

export const ProductsProvider = ({ children }: ProviderProps) => {
  const [productList, setProductList] = useState<Burger[]>([]);
  const [filteredList, setFilteredList] = useState<Burger[]>([]);
  const [isFiltered, setIsFiltered] = useState<boolean>(false);

  const getProducts = (userToken: object) => {
    api
      .get("/products", {
        headers: { Authorization: `Bearer ${userToken}` },
      })
      .then((response) => {
        setProductList(response.data);
      })
      .catch((error) => console.log(error));
  };

  const findProduct = (itemID: number) => {
    const produto = productList.find((curr) => curr.id === itemID) as Burger;
    return produto;
  };

  const getFilteredlist = (userToken: object, category: string) => {
    api
      .get(`/products?category=${category}`, {
        headers: { Authorization: `Bearer ${userToken}` },
      })
      .then((response) => {
        setFilteredList(response.data);
      })
      .then(() => {
        setIsFiltered(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <ProductsContext.Provider
      value={{
        getProducts,
        findProduct,
        productList,
        filteredList,
        getFilteredlist,
        isFiltered,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const UseProducts = () => useContext(ProductsContext);
