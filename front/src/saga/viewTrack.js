import axios from 'axios';
import { call, put} from 'redux-saga/effects';

import { viewTrackItemsSuccess, viewTrackItemsFailure} from '../features/track/trackSlice';
const viewTracksUrl = 'http://localhost:5000/tracks';

const callViewTracksApi = async () => {
  try {
    const resp = await axios.get(viewTracksUrl);
    return resp.data.track;
  } catch (error) {
    throw new Error('Error fetching track data');
  }
};

function* fetchViewTrack() {
  try {
    const tracks = yield call(callViewTracksApi);
    yield put(viewTrackItemsSuccess(tracks));
  } catch (error) {
    yield put(viewTrackItemsFailure());
  }
}

export default fetchViewTrack;