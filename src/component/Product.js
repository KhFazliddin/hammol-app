import React, { useState } from "react";
import { add } from "../redux/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import "react-slideshow-image/dist/styles.css";

function Product() {
  const product = useSelector((state) => state.product.products);
  // const categories = useSelector((state) => state.product.categories);

  const [datas, setDatas] = useState(product.products);
  const dispatch = useDispatch();
  const handleAdd = (product) => {
    dispatch(add(product));
    console.log(handleAdd);
  };

  const allCategories = product.products.map((item) => item.category);
  const categories = ["all", ...new Set(allCategories)];
  const filterResult = (catItem) => {
    if (catItem === "all") {
      setDatas(product.products);
      return;
    }

    const result = product.products.filter(
      (curData) => curData.category === catItem
    );
    setDatas(result);
  };
  function brief(text) {
    return text.slice(0, 15) + "...";
  }

  return (
    <div className="grid">
      <div>
        {categories.map((item, index) => (
          <button
            onClick={() => filterResult(item)}
            className="categoryBtn"
            key={index}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="productsWrapper">
        {datas?.map((product, index) => {
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
      </div>
    </div>
  );
}

export default Product;
