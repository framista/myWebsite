import React from 'react';
import './style.css';

const Footer = () => (
  <footer className="footer">
    &copy; Copyright {new Date().getFullYear()}
    <a href="mailto:jablonska.adrianna@wp.pl" className="footer__link">jablonska.adrianna@wp.pl</a>
  </footer>
);

export default Footer;
