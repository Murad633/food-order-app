import { useContext } from "react";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";

const Header = () => {
  const cartCtx = useContext(CartContext);

  const totalCartItem = cartCtx.items.reduce((total, item)=>{
    return total + item.quantity
  }, 0)

  return (
    <header id="main-header">
      <div id="title">
        <img src="./assets/logo.jpg" alt="" />
        <h1>Food Order App</h1>
      </div>
      <nav>
        <Button textOnly>Cart ({totalCartItem})</Button>
      </nav>
    </header>
  );
};

export default Header;
