import React, { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Navbar from "./component/Navbar";

function App() {
  const product = useSelector((state) => state.product.products);
  console.log(product);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
