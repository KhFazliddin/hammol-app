import React, { useState } from "react";
import { add } from "../redux/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import "react-slideshow-image/dist/styles.css";

function Product() {
  const product = useSelector((state) => state.product.products);
  // const categories = useSelector((state) => state.product.categories);
  const [datas, setDatas] = useState(product);
  const dispatch = useDispatch();
  const handleAdd = (product) => {
    dispatch(add(product));
    console.log(handleAdd);
  };

  const filterResult = (catItem) => {
    const result = product.products.filter((curData) => {
      return curData.category === catItem;
    });
    setDatas(result);
    console.log(result);
  };
  return (
    <div className="grid">
      <div>
        <button
          className="categoryBtn"
          onClick={() => filterResult("smartphones")}
        >
          smartphones
        </button>
        <button className="categoryBtn" onClick={() => filterResult("laptops")}>
          laptops
        </button>
        <button
          className="categoryBtn"
          onClick={() => filterResult("fragrances")}
        >
          fragrances
        </button>
        <button
          className="categoryBtn"
          onClick={() => filterResult("skincare")}
        >
          skincare
        </button>
        <button
          className="categoryBtn"
          onClick={() => filterResult("groceries")}
        >
          groceries
        </button>
        <button
          className="categoryBtn"
          onClick={() => filterResult("home-decoration")}
        >
          home-decoration
        </button>
        <button className="categoryBtn">All</button>
      </div>
      <div className="productsWrapper">
        {product.products.map((product, index) => {
          const { images, title, description, price } = product;
          return (
            <div className="card" key={index}>
              <img src={images} alt="" />
              <h3>{title}</h3>
              <h4>{description}</h4>
              <h5>${price}</h5>
              <button onClick={() => handleAdd(product)} className="btn">
                Add to cart
              </button>
            </div>
          );
        })}
        {/* {datas.products?.map((item, id) => {
          const { images, title, description, price } = item;
          return (
            <div className="card" key={id}>
              <img src={images} alt="" />
              <h3>{title}</h3>
              <h4>{description}</h4>
              <h5>${price}</h5>
              <button onClick={() => handleAdd(product)} className="btn">
                Add to cart
              </button>
            </div>
          );
        })} */}
      </div>
    </div>
  );
}

export default Product;
