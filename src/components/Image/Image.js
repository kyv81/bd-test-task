import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ img, isLoading, error }) => {
  if (isLoading) {
    return <p>Данные загружаются...</p>;
  }

  if (error) {
    return <p>Ошибка загрузки</p>;
  }

  return <img src={img} alt="gif" />;
};

Image.propTypes = {
  img: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.object,
};

export default Image;
