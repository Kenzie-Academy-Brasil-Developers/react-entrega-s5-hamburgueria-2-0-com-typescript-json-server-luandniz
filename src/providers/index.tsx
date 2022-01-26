import { ReactNode } from "react";
import { LoginProvider } from "./login";
import { ProductsProvider } from "./products";
import { RegisterProvider } from "./register";
import { UserProvider } from "./user";

interface ProviderProps {
  children: ReactNode;
}

const Providers = ({ children }: ProviderProps) => {
  return (
    <LoginProvider>
      <RegisterProvider>
        <ProductsProvider>
          <UserProvider>{children}</UserProvider>
        </ProductsProvider>
      </RegisterProvider>
    </LoginProvider>
  );
};

export default Providers;
