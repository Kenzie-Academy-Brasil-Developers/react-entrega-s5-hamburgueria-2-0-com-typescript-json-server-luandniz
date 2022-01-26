import { createContext, ReactNode, useContext } from "react";
import toast from "react-hot-toast";
import { useHistory } from "react-router";
import api from "../../services/api";

interface ProviderProps {
  children: ReactNode;
}

interface DataRegister {
  name: string;
  email: string;
  password: string;
}

interface RegisterProviderData {
  registerUser: (data: DataRegister) => void;
}

interface IRegisterProviderData {
  registerUser: (data: DataRegister) => void;
}

const RegisterContext = createContext<IRegisterProviderData>(
  {} as IRegisterProviderData
);

export const RegisterProvider = ({ children }: ProviderProps) => {
  const history = useHistory();
  const registerUser = (data: DataRegister) => {
    api
      .post("/users", data)
      .then((response) => {
        toast("Registration done successfly", {
          icon: "🍔",
        });
        history.push("/");
      })
      .catch((error) => {
        toast("Something went wrong. Check your e-mail and password.", {
          icon: "🚷",
        });
      });
  };

  return (
    <RegisterContext.Provider value={{ registerUser }}>
      {children}
    </RegisterContext.Provider>
  );
};

export const UseRegister = () => useContext(RegisterContext);
