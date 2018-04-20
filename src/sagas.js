import { call, put, takeEvery } from 'redux-saga/effects';
import { getImages } from './api';
import {
  getImagesRequest,
  getImagesSuccess,
  getImagesFailure,
} from './actions/imageActions';

function* fetchGetImages(action) {
  try {
    const result = yield call(getImages, action.payload);
    yield put(getImagesSuccess(result));
  } catch (error) {
    yield put(getImagesFailure(error));
  }
}

function* imagesRequestWatch() {
  yield takeEvery(getImagesRequest, fetchGetImages);
}

export default imagesRequestWatch;
