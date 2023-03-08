import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Main from "./pages/Main";
import Cart from "./pages/Cart";
import Pdp from "./pages/Pdp";
import Checkout from "./pages/Checkout";

function App() {
  const [cartItems, setCartItems] = React.useState([]);

  const itemsPrice = cartItems?.reduce((a, c) => a + c.price * c.qty, 0);

  const [open, setOpen] = React.useState(false);
  const [switchOpen, setSwitchOpen] = React.useState(false);

  const menuRef = React.useRef();

  React.useState(() => {
    let handler = (e) => {
      if (!menuRef.current?.contains(e.target)) {
        setOpen(false);
        setSwitchOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const handleSwitch = () => {
    setSwitchOpen(!switchOpen);
  };

  const handleOverlay = () => {
    setOpen(!open);
  };

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <div>
      <Router>
        <Header
          cartItems={cartItems}
          handleOverlay={handleOverlay}
          handleSwitch={handleSwitch}
          switchOpen={switchOpen}
          menuRef={menuRef}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                cartItems={cartItems}
                onAdd={onAdd}
                onRemove={onRemove}
                open={open}
                menuRef={menuRef}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                onAdd={onAdd}
                onRemove={onRemove}
                open={open}
                menuRef={menuRef}
              />
            }
          />
          <Route
            path="/pdp/:type"
            element={
              <Pdp
                cartItems={cartItems}
                onAdd={onAdd}
                onRemove={onRemove}
                open={open}
                menuRef={menuRef}
              />
            }
          />
          <Route
            path="/checkout"
            element={<Checkout itemsPrice={itemsPrice} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
