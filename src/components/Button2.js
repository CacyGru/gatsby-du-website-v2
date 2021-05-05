import React from 'react';
import { Link } from 'gatsby';
import * as ButtonStyles2 from './Button2.module.css';

const Button2 = ({ text, to }) => {
  return (
    <Link to={to}>
      <button className={ButtonStyles2.button2}>{text}</button>
    </Link>
  );
};

export default Button2;
