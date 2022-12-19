import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: 0,
  sort: { name: "популярности", sort: "rating" },
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCat: (state, action) => {
      state.category = action.payload;
    },
    setSor: (state, action) => {
      state.sort = action.payload;
    },
  },
});

export const { setCat, setSor } = filterSlice.actions;
export default filterSlice.reducer;
