import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const findItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      console.log(findItem);
      // if (findItem) {
      //     state.items.
      // }
      state.items.push(action.payload);
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price + sum;
      }, 0);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    removeItems: (state) => {
      console.log("ssss");
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, removeItems } = cartSlice.actions;
export default cartSlice.reducer;
