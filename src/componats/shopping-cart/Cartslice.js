


import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItem: [],
  totalquantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existItem = state.cartItem.find((item) => item.id === newItem.id);
      state.totalquantity++;
      if (!existItem) {
        state.cartItem.push({
          id: newItem.id,
          title: newItem.title,
          image01: newItem.image01,
          price: newItem.price,
          quantity: 1,
          totalprice: newItem.price,
        });
      } else {
        existItem.quantity++;
        existItem.totalprice =
          Number(existItem.totalprice) + Number(newItem.price);
      }
      state.totalAmount = state.cartItem.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
    },
    removeItem(state, action) {
      const id = action.payload;
      const existlitonItem = state.cartItem.find((item) => item.id === id);
      state.totalquantity--;
      if (existlitonItem.quantity === 1) {
        state.cartItem = state.cartItem.filter((item) => item.id !== id);
      } else {
        existlitonItem.quantity--;
        existlitonItem.totalprice =
          Number(existlitonItem.totalprice) - Number(existlitonItem.price);
      }
      state.totalAmount = state.cartItem.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
    },
    DeletItem(state , action){
      const id = action.payload
      const existlitonItem = state.cartItem.find((item) => item.id === id);
      if(existlitonItem){
        state.totalquantity -= existlitonItem.quantity; // تحديث العدد الكلي للمنتجات في السلة
        state.cartItem = state.cartItem.filter(item => item.id !== id)
      }
      state.totalAmount = state.cartItem.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
    }
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;