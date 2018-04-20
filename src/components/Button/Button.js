import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ children, onClick }) => (
  <button className="btn" onClick={onClick}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func.isRequired,
};

export default Button;
