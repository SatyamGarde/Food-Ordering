import { useSelector } from "react-redux";
import Recommanded from "./Recommanded";
import { useDispatch } from "react-redux";
import { clearCart } from "./cartSlice";
import { LOGO_URL } from "../Utils/constants";
const CartStore = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const totalAmount = cartItems.reduce((total, currentItem) => {
    let price = 0;

    if (Number.isInteger(currentItem.data.costForTwo)) {
      price = currentItem.data.costForTwo / 100;
    } else {
      const priceString = currentItem.data.costForTwo;
      const numericPart = priceString.match(/\d+/);
      price = numericPart && numericPart[0] ? parseInt(numericPart[0], 10) : 0;
    }
    return total + price;
  }, 0);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="cart-store">
      <h1>CartStore</h1>

      {cartItems.map((dataitem) => (
        <Recommanded key={dataitem.data.id} resData={dataitem} />
      ))}
      {cartItems.length === 0 && <h2>Cart is empty Add Items to the Cart</h2>}
      <div className="amount">Total Amount: ₹{totalAmount.toFixed(2)}</div>

      <div className="cart-btn">
        <button onClick={handleClearCart}>Clear Cart</button>
        <button>Order Now</button>
      </div> 
    </div>
  );
};

export default CartStore;
