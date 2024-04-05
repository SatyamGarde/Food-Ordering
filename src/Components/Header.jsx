import { Link } from "react-router-dom";
import { LOGO_URL } from "../Utils/constants";
import { useState } from "react";
import { useSelector } from "react-redux";
const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems.length);
  console.log(cartItems);
  let [btnNameReact, setBtnNameReact] = useState("Login");
  return (
    <div className="header">
      <div className="Logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/about">
            About Us
          </Link>
          <Link className="link" to="/contact">
            Contact Us
          </Link>
          <Link className="link" to="/cart">
            cart ({cartItems.length}items)
          </Link>

          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
