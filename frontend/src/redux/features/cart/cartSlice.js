import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const initialState = {
  cartItems: [],
  totalQuantity: 0, 
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemExist = state.cartItems.find(item => item._id === action.payload._id); 

      if (!itemExist) {
        state.cartItems.push({ ...action.payload, quantity: 1 });
        state.totalQuantity += 1;
        Swal.fire({
          title: "Book added to cart successfully!",
          icon: "success",
          draggable: true,
        });
      } else {
        Swal.fire({
          title: "Book already exists!",
          icon: "warning",
          draggable: true,
        });
      }
    },
    removeFromCart: (state, action) => {
      const itemExist = state.cartItems.find(item => item._id === action.payload._id);
      if (itemExist) {
        state.cartItems = state.cartItems.filter(item => item._id !== action.payload._id);
        state.totalQuantity -= 1;
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.totalQuantity = 0;
    }
  }
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
