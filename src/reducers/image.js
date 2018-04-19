import {
  GET_IMAGES_REQUEST,
  GET_IMAGES_SUCCESS,
  GET_IMAGES_FAILURE,
} from 'actions/imageTypes';

const initialState = {
  img: '',
  isLoading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_IMAGES_REQUEST:
      return { ...state, isLoading: true };
    case GET_IMAGES_SUCCESS:
      return { ...state, img: action.payload, isLoading: false };
    case GET_IMAGES_FAILURE:
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
};
