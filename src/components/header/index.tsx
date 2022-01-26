import { FiLogOut, FiShoppingCart, FiSearch } from "react-icons/fi";
import { UseLogin } from "../../providers/login";
import {
  HeaderContainer,
  TextContent,
  SearchContent,
  CartContent,
} from "./styles";

interface ModalProp {
  setShowCart: (value: boolean) => void;
}

const Header = ({ setShowCart }: ModalProp) => {
  const { SignOut } = UseLogin();

  function showModal() {
    setShowCart(true);
    console.log("clicou");
  }

  return (
    <HeaderContainer>
      <TextContent>
        <h3>Kenzie Burguer</h3>
      </TextContent>

      <SearchContent>
        <input type="text" placeholder="Search" />
      </SearchContent>

      <CartContent>
        <FiShoppingCart onClick={showModal} />
        <FiLogOut onClick={SignOut} />
      </CartContent>
    </HeaderContainer>
  );
};

export default Header;
