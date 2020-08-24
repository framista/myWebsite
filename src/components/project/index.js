import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Project = ({ project }) => {
  const { title, description, image, technologies, live, github } = project;
  return (
    <div className="project">
      <div className="project__info">
        <h3 className="project__title">{title}</h3>
        <p className="project__description">{description}</p>
        <div className="project__technologies">
          {technologies.map((technology, index) => (
            <p key={index} className="project__technologies--item">
              {technology}
            </p>
          ))}
        </div>
        <div className="project__links">
          <a
            className="project__links--item"
            target="_blank"
            href={live}
            title={`live ${title}`}
            rel="noopener noreferrer"
          >
            live
          </a>
          <a
            className="project__links--item"
            target="_blank"
            href={github}
            title={`github ${title}`}
            rel="noopener noreferrer"
          >
            github
          </a>
        </div>
      </div>
      <div className="project__image">
        <img src={image} alt="project img" />
      </div>
    </div>
  );
};

Project.propTypes = {
  project: PropTypes.object.isRequired,
};
export default Project;
