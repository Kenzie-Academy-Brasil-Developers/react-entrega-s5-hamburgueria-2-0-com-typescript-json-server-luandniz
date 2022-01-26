import { useContext, createContext, ReactNode, useState } from "react";
import toast from "react-hot-toast";
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

interface UserProviderData {
  userCart: Burger[];
  addToUserCart: (newProduct: Burger, userToken: object) => void;
  deleteFromUserCart: (productID: number, userToken: object) => void;
  getUserCart: (id: number) => void;
}

export const UserContext = createContext<UserProviderData>(
  {} as UserProviderData
);

export const UserProvider = ({ children }: ProviderProps) => {
  const [userCart, setUserCart] = useState<Burger[]>([]);

  const getUserCart = (id: number) => {
    api
      .get(`/users/${id}?_embed=userCart`)
      .then((response) => {
        setUserCart(response.data.userCart);
      })
      .catch((error) => console.log(error));
  };

  const addToUserCart = (newProduct: Burger, userToken: object) => {
    api
      .post("/userCart", newProduct, {
        headers: { Authorization: `Bearer ${userToken}` },
      })
      .then(() =>
        toast("Product add to cart.", {
          icon: "🛒",
        })
      )
      .catch(() =>
        toast("This product is already in the cart.", {
          icon: "🚷",
        })
      );
  };

  const deleteFromUserCart = (productID: number, userToken: object) => {
    api
      .delete(`/userCart/${productID}`, {
        headers: { Authorization: `Bearer ${userToken}` },
      })
      .then(() =>
        toast("Deleted product.", {
          icon: "🚷",
        })
      )
      .catch((error) => console.log(error.message));
  };

  return (
    <UserContext.Provider
      value={{ userCart, getUserCart, addToUserCart, deleteFromUserCart }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UseUser = () => useContext(UserContext);
