import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeItem: "track",
};

const activeItemSlice = createSlice({
  name: "active",
  initialState,
  reducers: {
    toogleActiveItem: (state) => {
      state.activeItem = state.activeItem == "track" ? "album" : "track";
    },
    changeActiveItem: (state, action) => {
      state.activeItem = action.payload;
    },
  },
});

export const { toogleActiveItem, changeActiveItem } = activeItemSlice.actions;
export default activeItemSlice.reducer;
