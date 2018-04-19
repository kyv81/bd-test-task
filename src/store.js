import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { GET_IMAGES_REQUEST } from './actions/imageTypes';
import { getImagesSuccess, getImagesFailure } from 'actions/imageActions';

const imageFetchMiddleware = store => next => action => {
  if (action.type === GET_IMAGES_REQUEST) {
    fetch('https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(result => {
        store.dispatch(getImagesSuccess(result.data.image_url));
      })
      .catch(error => {
        store.dispatch(getImagesFailure(error));
      });
  }

  next(action);
};

const createAppStore = () => {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(imageFetchMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
  );

  return store;
};

export default createAppStore;
