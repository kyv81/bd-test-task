import { createActions } from 'redux-actions';

const {
  images: {
    request: getImagesRequest,
    success: getImagesSuccess,
    failure: getImagesFailure,
  },
} = createActions({
  IMAGES: {
    REQUEST: null,
    SUCCESS: null,
    FAILURE: null,
  },
});

export { getImagesRequest, getImagesSuccess, getImagesFailure };
