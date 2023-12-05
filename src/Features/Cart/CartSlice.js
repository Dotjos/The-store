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
    updateProdQuantity: (state, action) => {
      const { productIdToUpdate, newQuantity } = action.payload;
      const productToUpdateIndex = state.products.findIndex(
        (product) => product.id === productIdToUpdate
      );
      if (productToUpdateIndex !== -1) {
        state.products[productToUpdateIndex].quantity = newQuantity;
      }
    },
    increaseQuantity: (state, action) => {
      const productIdToIncrease = action.payload;
      const productToUpdateIndex = state.products.findIndex(
        (product) => product.id === productIdToIncrease
      );
      if (productToUpdateIndex !== -1) {
        state.products[productToUpdateIndex].quantity++;
      }
    },
    decreaseQuantity: (state, action) => {
      const productIdToDecrease = action.payload;
      const productToUpdateIndex = state.products.findIndex(
        (product) => product.id === productIdToDecrease
      );

      if (productToUpdateIndex !== -1) {
        // Ensure the quantity does not go below one
        state.products[productToUpdateIndex].quantity = Math.max(
          1,
          state.products[productToUpdateIndex].quantity - 1
        );
      }
    },

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

export const {
  addToCart,
  updateProdQuantity,
  removeProduct,
  clearStore,
  increaseQuantity,
  decreaseQuantity,
} = CartSlice.actions;
export default CartSlice.reducer;
