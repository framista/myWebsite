import React, { useEffect } from 'react';
import './style.css';
import { AiFillGithub } from 'react-icons/ai';
import { SiCodewars } from 'react-icons/si';
import { FaFreeCodeCamp } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { variantsFromX, variantsLinkHover } from '../../animation/variants';

const SocialMedia = () => {
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
    <motion.div
      className="social-media"
      ref={refView}
      animate={controls}
      initial="hidden"
      variants={variantsFromX('-100px')}
    >
      <h3 className="social-media__title">See more of my projects</h3>
      <motion.a
        href="https://github.com/framista"
        className="social-media__link"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={variantsLinkHover.whileHover}
        transition={variantsLinkHover.transition}
      >
        <AiFillGithub />
        <p>GitHub</p>
      </motion.a>
      <motion.a
        href="https://www.codewars.com/users/Ada_Jab/stats"
        className="social-media__link"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={variantsLinkHover.whileHover}
        transition={variantsLinkHover.transition}
      >
        <SiCodewars />
        <p>Codewars</p>
      </motion.a>
      <motion.a
        href="https://www.freecodecamp.org/fcc69cc997c-b02b-467d-9282-bb3f82d3b102"
        className="social-media__link"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={variantsLinkHover.whileHover}
        transition={variantsLinkHover.transition}
      >
        <FaFreeCodeCamp />
        <p>freeCodeCamp</p>
      </motion.a>
    </motion.div>
  );
};

export default SocialMedia;
