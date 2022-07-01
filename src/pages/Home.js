import React from "react";
import Product from "../component/Product";

function Home() {
  return (
    <div>
      <h2 className="heading">Welcome to the Redux toolkit store</h2>
      <section>
        <h3>Products</h3>
        <Product />
      </section>
    </div>
  );
}

export default Home;
