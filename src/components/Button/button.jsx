
import React from 'react';
import './button.module.css';

const Button = ({ onClick, label }) => (
  <button className="overlay-button" onClick={onClick}>
    {label}
  </button>
);

export default Button;
