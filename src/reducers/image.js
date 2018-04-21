import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {
  getImagesRequest,
  getImagesSuccess,
  getImagesFailure,
} from 'actions/imageActions';

const img = handleActions(
  {
    [getImagesSuccess]: (state, action) => action.payload,
  },
  '',
);

const isLoading = handleActions(
  {
    [getImagesRequest]: () => true,
    [getImagesSuccess]: () => false,
    [getImagesFailure]: () => false,
  },
  false,
);

const error = handleActions(
  {
    [getImagesRequest]: () => null,
    [getImagesFailure]: (state, action) => action.payload,
  },
  null,
);

export default combineReducers({
  img,
  isLoading,
  error,
});
