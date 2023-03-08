import React from "react";
import CartOverlay from "../components/CartOverlay";
import Product from "../components/Product";
import data from "../data";

function Main({ cartItems, onAdd, onRemove, open, menuRef }) {
  const productElement = data.map((product) => (
    <Product key={product.id} product={product} onAdd={onAdd} />
  ));
  return (
    <main className="container-left-right pud-80">
      <h1>Category name</h1>
      <div className="product-cards">{productElement}</div>
      <CartOverlay
        cartItems={cartItems}
        onAdd={onAdd}
        onRemove={onRemove}
        open={open}
        menuRef={menuRef}
      />
    </main>
  );
}

export default Main;
