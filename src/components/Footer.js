import { Link } from 'gatsby';
import React from 'react';

const Footer = () => {
  let d = new Date();
  let Year = d.getFullYear();

  return (
    <footer>
      © <Link to="/"> Drum Up</Link> {Year} |{' '}
      <Link to="/datenschutz">Datenschutz</Link> |{' '}
      <Link to="/impressum">Impressum</Link>
    </footer>
  );
};

export default Footer;
