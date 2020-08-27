import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div className="not-found">
    <div className="not-found__container">
      <h1 className="not-found__title">Page not found</h1>
      <p className="not-found__description">
        I am very sorry for the inconvenience. It looks like you're trying to
        access a page that has been deleted or never even existed.
      </p>
      <Link to="/" className="not-found__link">
        Home
      </Link>
    </div>
  </div>
);

export default NotFoundPage;
