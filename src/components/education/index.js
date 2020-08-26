import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Education = ({ education }) => {
  const { name, date, link } = education;
  return (
    <a
      href={link}
      rel="noopener noreferrer"
      title="link-cert"
      className="education__item"
      target="_blank"
    >
      <h6 className="education__name">{name}</h6>
      <p className="education__date">{date}</p>
    </a>
  );
};

Education.propTypes = {
  education: PropTypes.object.isRequired,
};
export default Education;
