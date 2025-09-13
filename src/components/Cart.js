import DisplayItem from "./DisplayItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cardSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const handleClear = () => {
    // dispatch an action
    dispatch(clearCart());
  };

  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex flex-col p-20 items-center justify-center">
      {cartItems.map((item) => {
        return <DisplayItem item={item} key={item?.card?.info?.name} />;
      })}
      <button
        className="p-2 m-2 bg-black w-fit text-white rounded-xl"
        onClick={handleClear}
      >
        Clear Cart
      </button>
      {cartItems.length === 0 && (
        <h1 className="text-2xl font-bold">
          Cart is Empty !! Add items to the cart
        </h1>
      )}
    </div>
  );
};

export default Cart;
