import { takeEvery } from "redux-saga/effects";

import fetchViewAlbum from "./viewAlbum";
import fetchViewTrack from "./viewTrack";
import { VIEW_TRACK_ITEMS } from "../features/track/trackSlice";
import { VIEW_ALBUM_ITEMS } from "../features/album/albumSlice";

function* mySaga() {
  yield takeEvery(VIEW_TRACK_ITEMS, fetchViewTrack);
  yield takeEvery(VIEW_ALBUM_ITEMS, fetchViewAlbum);
}

export default mySaga;
