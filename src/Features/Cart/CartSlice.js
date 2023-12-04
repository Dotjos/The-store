import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cartSlice",
  initialState: { products: [] },
  reducers: {
    addToCart: (state, action) => {
      const producToAdd = action.payload;
      const checkProductExist = state.products.findIndex(
        (product) => product.id === producToAdd.id
      );
      if (checkProductExist === -1)
        state.products = [...state.products, action.payload];
    },
    reduceQuantity: (state, action) => {},
    removeProduct: (state, action) => {
      const productIdToDelete = action.payload;
      state.products = state.products.filter(
        (product) => product.id !== productIdToDelete
      );
    },
    clearStore: (state) => {
      state.products = [];
    },
  },
});

export const { addToCart, reduceQuantity, removeProduct, clearStore } =
  CartSlice.actions;
export default CartSlice.reducer;
