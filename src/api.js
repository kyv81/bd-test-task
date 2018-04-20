export const getImages = () => {
  return fetch('https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC', {
    method: 'GET',
  })
    .then(response => response.json())
    .then(result => result.data.image_url);
};
