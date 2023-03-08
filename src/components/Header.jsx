import React from "react";
import logo from "../assets/images/a-logo.png";
import arrowDown from "../assets/images/arrow-down.png";
import arrowUp from "../assets/images/arrow-up.png";
import emptyCart from "../assets/images/empty-cart.png";
import { Link } from "react-router-dom";

function Header({
  cartItems,
  handleOverlay,
  handleSwitch,
  switchOpen,
  menuRef,
}) {
  return (
    <header className="container-left-right">
      <div className="nav-bar">
        <Link to="/" className="active-category">
          Women
        </Link>
        <a href="http://">Men</a>
        <a href="http://">Kids</a>
      </div>
      <img src={logo} alt="logo" className="logo" />
      <div className="currency-cart">
        <p>$</p>
        <img
          src={switchOpen ? arrowUp : arrowDown}
          alt="arrow-down"
          className="arrow-down"
          onClick={handleSwitch}
        />
        <img
          src={emptyCart}
          alt="empty-cart"
          className="empty-cart"
          onClick={handleOverlay}
        />
        <div
          className={`cart-item-no ${
            cartItems?.length > 0 ? "show" : "unshow"
          } `}
        >
          {cartItems?.length}
        </div>
      </div>
      <div
        className={`currency-switcher ${switchOpen ? "active" : "inactive"}`}
      >
        <ul ref={menuRef}>
          <li>$ USD</li>
          <li className="dark-list">€ EUR</li>
          <li>¥ JPY</li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
