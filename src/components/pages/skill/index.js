import React, { useEffect } from 'react';
import './style.css';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const Skill = React.forwardRef((props, ref) => {
  const controls = useAnimation();
  const [refView, inView] = useInView({
    triggerOnce: true,
    rootMargin: '100px 0px',
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const languages = [
    'JavaScript',
    'React.js',
    'CSS3',
    'SASS',
    'Bootstrap',
    'BEM',
    'HTML5',
    'Node.js',
  ];
  const tools = [
    'git',
    'npm',
    'webpack',
    'ESLint',
    'Prettier',
    'TabNine',
    'JIRA',
    'Trello',
  ];
  return (
    <div className="skill" ref={ref}>
      <motion.div
        className="container"
        ref={refView}
        animate={controls}
        initial="hidden"
        variants={{
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
              y: { type: 'spring', stiffness: 10 },
            },
          },
          hidden: { opacity: 0, y: '300px' },
        }}
      >
        <h3 className="skill__title">Programming</h3>
        <div className="skill__box">
          {languages.map((language, index) => (
            <p key={index} className="skill__item">
              {language}
            </p>
          ))}
        </div>
        <h3 className="skill__title">Tools & others</h3>
        <div className="skill__box">
          {tools.map((tool, index) => (
            <p key={index} className="skill__item">
              {tool}
            </p>
          ))}
        </div>
      </motion.div>
      <div className="triangle skill__triangle"></div>
    </div>
  );
});

export default Skill;
