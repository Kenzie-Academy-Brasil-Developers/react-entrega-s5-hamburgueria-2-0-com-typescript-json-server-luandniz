import { createContext, ReactNode, useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { useHistory } from "react-router-dom";
import api from "../../services/api";

interface ProviderProps {
  children: ReactNode;
}

interface DataLogin {
  email: string;
  password: string;
}

interface LoginProviderData {
  SignIn: (data: DataLogin) => void;
  SignOut: () => void;
}

export const LoginContext = createContext<LoginProviderData>(
  {} as LoginProviderData
);

export const LoginProvider = ({ children }: ProviderProps) => {
  const history = useHistory();
  const SignOut = () => {
    localStorage.clear();
    history.push("/");
  };

  const SignIn = (data: DataLogin) => {
    api
      .post("/login", data)
      .then((response) => {
        localStorage.setItem(
          "@hamburgueria:token",
          JSON.stringify(response.data.accessToken)
        );
        localStorage.setItem(
          "@hamburgueria:id",
          JSON.stringify(response.data.user.id)
        );
        localStorage.setItem(
          "@hamburgueria:user",
          JSON.stringify(response.data.user.name)
        );
      })
      .then((response) => {
        history.push("/dashboard");
        toast("Welcome to Kenzei Burguer", {
          icon: "🍔",
        });
      })
      .catch((error) => {
        toast("Something went wrong. Check your e-mail and password.", {
          icon: "🚷",
        });
      });
  };

  return (
    <LoginContext.Provider value={{ SignIn, SignOut }}>
      {children}
    </LoginContext.Provider>
  );
};

export const UseLogin = () => useContext(LoginContext);
