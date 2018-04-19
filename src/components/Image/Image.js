import React from 'react';

const Image = ({ img, isLoading, error }) => {
  if (isLoading) {
    return <p>Данные загружаются...</p>;
  }

  if (error) {
    return <p>Произошла ошибка</p>;
  }

  return <img src={img} alt="gif" />;
};

export default Image;
