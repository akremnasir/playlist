import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCard: {},
  trackOrAlbum: "track",
};

const SelectedCardSlice = createSlice({
  name: "selected",
  initialState,
  reducers: {
    selectCard: (state, action) => {
      state.selectedCard = action.payload;
    },
    handleTrackOrAlbum: (state, action) => {
      state.trackOrAlbum = action.payload;
    },
  },
});

export const { selectCard, handleTrackOrAlbum } = SelectedCardSlice.actions;
export default SelectedCardSlice.reducer;
