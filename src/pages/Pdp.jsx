import React from "react";
import { useParams } from "react-router-dom";
import CartOverlay from "../components/CartOverlay";
import "./pdp.css";
import data from "../data";

function Pdp({ cartItems, onAdd, onRemove, open, menuRef }) {
  const param = useParams();

  const element = data?.find((item) => param.type == item.id);

  return (
    <div className="container-left-right pdp-flex pud-80 relative">
      <CartOverlay
        cartItems={cartItems}
        onAdd={onAdd}
        onRemove={onRemove}
        open={open}
        menuRef={menuRef}
      />
      <div className="three-clips">
        <img src={element.productImg} alt={element.productName} />
        <img src={element.productImg} alt={element.productName} />
        <img src={element.productImg} alt={element.productName} />
      </div>
      <div className="main-view">
        <img src={element.productImg} alt={element.productName} />
      </div>
      <div>
        <div className="product-in-cart">
          <div>
            <div className="product-in-cart-spec">
              <p className="title">{element.productName}</p>
              <p className="m-0">Size:</p>
              <ul className="size">
                <li>xs</li>
                <li>s</li>
                <li>m</li>
                <li>l</li>
              </ul>
              <p className="m-0">Color:</p>
              <ul className="color">
                <li className="color-grey"></li>
                <li className="color-black"></li>
                <li className="color-green"></li>
              </ul>
              <p className="m-0">Price:</p>
              <h4>${element.price.toFixed(2)}</h4>
              <input
                type="button"
                value="Add to Cart"
                onClick={() => onAdd(element)}
              />
              <p className="description">{element.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pdp;
