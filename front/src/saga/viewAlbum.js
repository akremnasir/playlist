import axios from "axios";
import { call, put } from "redux-saga/effects";
import {
  viewAlbumItemsSuccess,
  viewAlbumItemsFailure,
} from "../features/album/albumSlice";

const viewAlbumsUrl = "http://localhost:5000/albums";

const callViewAlbumsApi = async () => {
  try {
    const resp = await axios.get(viewAlbumsUrl);
    return resp.data.album;
  } catch (error) {
    throw new Error("Error fetching album data");
  }
};

function* fetchViewAlbum() {
  try {
    const albums = yield call(callViewAlbumsApi);
    yield put(viewAlbumItemsSuccess(albums));
  } catch (error) {
    yield put(viewAlbumItemsFailure());
  }
}

export default fetchViewAlbum;
