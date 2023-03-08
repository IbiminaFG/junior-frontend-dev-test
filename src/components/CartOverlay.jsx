import React from "react";
import { Link } from "react-router-dom";

function CartOverlay({ cartItems, onAdd, onRemove, open, menuRef }) {
  const itemsPrice = cartItems?.reduce((a, c) => a + c.price * c.qty, 0); // gets the total price

  const cartItemElement = cartItems?.map((item) => (
    <div className="product">
      <div className="product-spec">
        <p>{item.productName}</p>
        <h4>${item.price}</h4>
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
      <div className="product-size">
        <div>
          <input type="button" value="+" onClick={() => onAdd(item)} />
          <p>{item.qty}</p>
          <input type="button" value="-" onClick={() => onRemove(item)} />
        </div>
        <img src={item.productImg} alt={item.productName} />
      </div>
    </div>
  ));

  return (
    <div className={`cart-overlay ${open ? "active" : "inactive"}`}>
      <div className="cart" ref={menuRef}>
        <div>{cartItems?.length === 0 && <div>Cart Is Empty</div>}</div>
        <div>
          <p className="bag-title">
            <b>My bag.</b> {cartItems?.length} items
          </p>
          <div className="products">{cartItemElement}</div>
          <div className="total-price">
            <h4>Total</h4>
            <h4>${itemsPrice}</h4>
          </div>
        </div>
        <div className="submit-buttons">
          <Link to="/cart">
            <input type="button" value="view bag" />
          </Link>
          <Link to="/checkout">
            <input type="button" value="checkout" className="checkout" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CartOverlay;
