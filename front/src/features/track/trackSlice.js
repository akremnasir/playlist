import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trackItems: [],
  trackIsLoading: true,
};

export const VIEW_TRACK_ITEMS = "track/viewTrackItems";
export const SUCCESS_VIEW_TRACK_ITEMS = "track/viewTrackItemsSuccess";

const trackSlice = createSlice({
  name: "track",
  initialState,
  reducers: {
    viewTrackItems: (state) => {
      state.trackIsLoading = true;
    },
    viewTrackItemsSuccess: (state, action) => {
      state.trackItems = action.payload; // Use action.payload for the tracks
      state.trackIsLoading = false;
    },
    viewTrackItemsFailure: (state) => {
      state.trackIsLoading = false;
    },
  },
});

export const { viewTrackItems, viewTrackItemsSuccess, viewTrackItemsFailure } =
  trackSlice.actions;
export default trackSlice.reducer;
