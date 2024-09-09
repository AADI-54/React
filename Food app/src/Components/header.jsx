import { useState } from "react";
import { logourl, carturl } from "../Utils/constants";
import { useState } from "react";
const Header = () => {
  const [btn, setbtn] = useState("Login");
  return (
    <div className="header">
      <div className="logo-con">
        <img className="logo" src={logourl} alt="Logo" />
      </div>
      <div className="nav">
        <ul className="nav-lists">
          <li>Home</li>
          <li>About-Us</li>
          <li>Contact-Us</li>
          <li>Items</li>
          <li className="cart-con">
            <img className="cart" src={carturl} alt="Cart-Logo" />
          </li>
          <li>
            <button
              onClick={() => {
                btn === "Login" ? setbtn("Logout") : setbtn("Login");
              }}
            >
              {btn}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
