import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: localStorage.getItem("totalPrice") || 0,
  items: JSON.parse(localStorage.getItem("cartItems")) || [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const findItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (findItem) {
        findItem.count++;
        state.totalPrice = state.items.reduce((sum, obj) => {
          return obj.price * obj.count + sum;
        }, 0);
      } else {
        state.items.push({ ...action.payload, count: 1 });
        state.totalPrice = state.items.reduce((sum, obj) => {
          return obj.price * obj.count + sum;
        }, 0);
      }

      //   state.items.counter++;
    },
    removeItem: (state, action) => {
      console.log(action.payload);
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      state.totalPrice = state.totalPrice - action.payload.price;
    },
    removeItems: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },

    minusItem: (state, action) => {
      const findItem = state.items.find((item) => item.id === action.payload);
      findItem.count--;
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    plusItem: (state, action) => {
      const findItem = state.items.find((item) => item.id === action.payload);
      findItem.count++;
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
  },
});

export const { addItem, removeItem, removeItems, minusItem, plusItem } =
  cartSlice.actions;
export default cartSlice.reducer;
