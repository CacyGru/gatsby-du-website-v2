import React from 'react';
import { Link } from 'gatsby';
import * as NeonStyles from './ButtonNeon.module.css';

const ButtonNeon = ({ text, to }) => {
  return (
    <Link to={to}>
      <button className={NeonStyles.button}>{text}</button>
    </Link>
  );
};

export default ButtonNeon;
