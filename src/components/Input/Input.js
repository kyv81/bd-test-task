import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

const Input = ({ onChange, placeholder, value }) => (
  <input
    className="input"
    onChange={onChange}
    placeholder={placeholder}
    type="text"
    value={value}
  />
);

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
};

export default Input;
