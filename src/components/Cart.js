import { useContext } from "react";
import { CartContext } from "../utils/cartContext";
import DisplayItem from "./DisplayItem";

const Cart = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  return (
    <div className="flex flex-col">
      {cartItems.map((item) => {
        return <DisplayItem item={item} key={item?.card?.info?.name} />;
      })}
    </div>
  );
};

export default Cart;
