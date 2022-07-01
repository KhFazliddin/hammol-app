import { createSlice } from "@reduxjs/toolkit";
import { categories } from "../data";
import { products } from "../data";

const initialState = {
  categories,
  products,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.products = [...state.products, action.payload];
    },
  },
});

export const { addToBasket } = productSlice.actions;
export default productSlice.reducer;
