import React from "react";
import { Link } from "react-router-dom";
import whiteCart from "../assets/images/white-empty-cart.png";

function Product({ product, onAdd }) {
  return (
    <div className="card">
      <Link
        to={{
          pathname: `/pdp/${product.id}`,
          state: { stateParam: true },
        }}
      >
        <img src={product.productImg} alt="productA" className="product-img" />
      </Link>
      <p>{product.productName}</p>
      <h4>${product.price.toFixed(2)}</h4>
      <div className="float-img" onClick={() => onAdd(product)}>
        <img src={whiteCart} alt="white-cart" />
      </div>
    </div>
  );
}

export default Product;
