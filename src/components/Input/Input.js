import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ onChange, value }) => (
  <input onChange={onChange} type="text" value={value} />
);

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Input;
