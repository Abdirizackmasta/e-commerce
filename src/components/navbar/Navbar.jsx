import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link, NavLink } from "react-router-dom";
import { UseShopContext } from "../../contexts/ShopContext";
function Navbar() {
  const [menu, setMenu] = useState("shop");

  const {getTotalCartItems} = UseShopContext();
  return (
    <div className="navbar">
      <div className="nav-logo">
        <p>Masta</p>
        <img src={logo} alt="logo" />

      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <NavLink style={{ textDecoration: "none" }} to="/">
            Shop
          </NavLink>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("men");
          }}
        >
          <NavLink style={{ textDecoration: "none" }} to="/mens">
            Mens
          </NavLink>
          {menu === "men" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}
        >
          <NavLink style={{ textDecoration: "none" }} to="/women">
            Women
          </NavLink>

          {menu === "women" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <NavLink style={{ textDecoration: "none" }} to="/kids">
            Kids
          </NavLink>

          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="login">
          <button>Login</button>
        </Link>
        <Link to="cart">
          <img src={cart_icon} alt="cart-icon" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
}

export default Navbar;
