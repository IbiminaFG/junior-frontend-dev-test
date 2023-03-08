import React from "react";
import "./cart.css";
import CartOverlay from "../components/CartOverlay";
import { Link } from "react-router-dom";

function Cart({ cartItems, onAdd, onRemove, open, menuRef }) {
  const itemsPrice = cartItems?.reduce((a, c) => a + c.price * c.qty, 0);
  const taxPrice = itemsPrice * 0.21;

  let quantity = 0;
  cartItems.forEach((element) => {
    return (quantity += element.qty);
  });

  const cartProductList = cartItems?.map((item) => (
    <div className="product-in-cart">
      <div>
        <div className="product-in-cart-spec">
          <p>{item.productName}</p>
          <h4>${item.price.toFixed(2)}</h4>
          <p>Size:</p>
          <ul className="size">
            <li>xs</li>
            <li>s</li>
            <li>m</li>
            <li>l</li>
          </ul>
          <p>Color</p>
          <ul className="color">
            <li className="color-grey"></li>
            <li className="color-black"></li>
            <li className="color-green"></li>
          </ul>
        </div>
        <div className="product-in-cart-size">
          <div>
            <input type="button" value="+" onClick={() => onAdd(item)} />
            <p>{item.qty}</p>
            <input type="button" value="-" onClick={() => onRemove(item)} />
          </div>
          <img src={item.productImg} alt={item.productName} />
        </div>
      </div>
      <hr />
    </div>
  ));
  return (
    <div className="container-left-right up-down relative">
      <CartOverlay
        cartItems={cartItems}
        onAdd={onAdd}
        onRemove={onRemove}
        open={open}
        menuRef={menuRef}
      />
      <h1>Cart</h1>
      <hr />
      <div>{cartProductList}</div>
      <div className="order-props">
        <div>
          <p>Tax 21%:</p>
          <h4>{taxPrice.toFixed(2)}</h4>
          <p>Quantity:</p>
          <h4>{quantity}</h4>
          <p>Total:</p>
          <h4>${itemsPrice.toFixed(2)}</h4>
        </div>
        <Link to="/checkout">
          <button type="submit">Order</button>
        </Link>
      </div>
    </div>
  );
}

export default Cart;
