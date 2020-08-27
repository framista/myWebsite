import React, { useContext, useEffect } from 'react';
import './style.css';
import NavbarContext from '../../context/navbar/context';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const Drawer = (props) => {
  const { goToSection } = props;
  const { closeNavbar } = useContext(NavbarContext);

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

  const handleClickLink = (section) => {
    goToSection(section);
    closeNavbar();
  };

  return (
    <div>
      <div className="navbar__background" onClick={closeNavbar}></div>
      <motion.ul
        className={'drawer__list'}
        ref={refView}
        animate={controls}
        initial="hidden"
        variants={{
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
              x: { type: 'spring', stiffness: 30 },
            },
          },
          hidden: { opacity: 0, x: '-10vw' },
        }}
      >
        <li
          onClick={() => handleClickLink('skillsSection')}
          className="drawer__list--item"
        >
          skills
        </li>
        <li
          onClick={() => handleClickLink('projectsSection')}
          className="drawer__list--item"
        >
          projects
        </li>
        <li
          onClick={() => handleClickLink('educationsSection')}
          className="drawer__list--item"
        >
          education
        </li>
        <li
          onClick={() => handleClickLink('contactSection')}
          className="drawer__list--item"
        >
          contact
        </li>
      </motion.ul>
    </div>
  );
};

export default Drawer;
