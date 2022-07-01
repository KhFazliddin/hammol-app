import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const items = useSelector((state) => state.cart);
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span className="logo">REDUX STORE</span>
        <div>
          <h3 style={{ display: "flex" }}>
            <Link className="navLink" to="/">
              Home
            </Link>
            <Link className="navLink" to="/cart">
              Cart
            </Link>

            <span style={{ marginLeft: "50px" }} className="cartCount">
              CART ITEMS: {items.length}
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
