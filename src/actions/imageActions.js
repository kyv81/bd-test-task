import { createActions } from 'redux-actions';

const { getImagesRequest, getImagesSuccess, getImagesFailure } = createActions({
  GET_IMAGES_REQUEST: null,
  GET_IMAGES_SUCCESS: null,
  GET_IMAGES_FAILURE: null,
});

export { getImagesRequest, getImagesSuccess, getImagesFailure };
