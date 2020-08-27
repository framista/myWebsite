import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const Education = ({ education, index }) => {
  const { name, date, link } = education;
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
  return (
    <motion.a
      href={link}
      rel="noopener noreferrer"
      title="link-cert"
      className="education__item"
      target="_blank"
      ref={refView}
      animate={controls}
      initial="hidden"
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            delay: index * 0.5,
            duration: 1,
            y: { type: 'spring', mass: 0.5 },
          },
        },
        hidden: { opacity: 0, y: '200px' },
      }}
    >
      <h6 className="education__name">{name}</h6>
      <p className="education__date">{date}</p>
    </motion.a>
  );
};

Education.propTypes = {
  education: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};
export default Education;
