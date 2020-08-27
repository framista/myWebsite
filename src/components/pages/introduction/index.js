import React from 'react';
import './style.css';
import { motion } from 'framer-motion';

const variantsH2 = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 2 } },
};
const variantsP = {
  hidden: { opacity: 0, y: '100vh' },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
      delay: 2,
      y: { type: 'spring', stiffness: 50 },
    },
  },
};

const Introduction = () => {
  return (
    <div className="introduction">
      <div className="container">
        <motion.h2
          initial="hidden"
          animate="visible"
          variants={variantsH2}
          className="introduction__name"
        >
          Adrianna Jabłońska
        </motion.h2>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={variantsP}
          className="introduction__job"
        >
          Junior Frontend Developer
        </motion.p>
        <div className="triangle introduction__triangle"></div>
      </div>
    </div>
  );
};

export default Introduction;
