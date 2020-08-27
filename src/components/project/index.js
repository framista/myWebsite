import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { variantsFromX } from '../../animation/variants';

const Project = ({ project }) => {
  const controls = useAnimation();
  const [refView, inView] = useInView({
    triggerOnce: true,
    rootMargin: '400px 0px',
  });
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  const { title, description, image, technologies, live, github } = project;
  return (
    <div className="project">
      <motion.div
        className="project__info"
        ref={refView}
        animate={controls}
        initial="hidden"
        variants={variantsFromX('-100px')}
      >
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
      </motion.div>
      <motion.div
        className="project__image"
        ref={refView}
        animate={controls}
        initial="hidden"
        variants={variantsFromX('100px')}
      >
        <img src={image} alt="project img" />
      </motion.div>
    </div>
  );
};

Project.propTypes = {
  project: PropTypes.object.isRequired,
};
export default Project;
