import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  curPage: 0,
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
    setFilt: (state, action) => {
      state.curPage = Number(action.payload.page);
      state.category = Number(action.payload.category);
      state.sort = action.payload.sortN;
    },
  },
});

export const { setCat, setSor, setFilt } = filterSlice.actions;
export default filterSlice.reducer;
