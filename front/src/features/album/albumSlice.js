import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  albumItems: [],
  albumIsLoading: true,
};

export const VIEW_ALBUM_ITEMS = 'album/viewAlbumItems';
export const SUCCESS_VIEW_ALBUM_ITEMS = 'album/viewAlbumItemsSuccess';

const albumSlice = createSlice({
  name: 'album',
  initialState,
  reducers: {
    viewAlbumItems: (state) => {
      state.albumIsLoading = true;
    },
    viewAlbumItemsSuccess: (state, action) => {
      state.albumItems = action.payload; // Use action.payload for the tracks
      state.albumIsLoading = false;
    },
    viewAlbumItemsFailure: (state) => {
      state.albumIsLoading = false;
    },
  },
});

export const { viewAlbumItems, viewAlbumItemsSuccess, viewAlbumItemsFailure } = albumSlice.actions;    
export default albumSlice.reducer;