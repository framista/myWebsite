import React from 'react';
import NotFoundPage from './../not-found';
import './style.css';

const Certificate = (props) => {
  const certificateName = props.match.params.name;
  const myCertificates = ['webcamp', 'coderscamp', 'pwr'];

  if (!myCertificates.includes(certificateName)) {
    return <NotFoundPage />;
  }

  return (
    <div className="certificate__container">
      <div className="certificate__image">
        <img src={`/images/${certificateName}.jpg`} alt="certificate" />
      </div>
    </div>
  );
};

export default Certificate;
