import React, { useContext, useEffect } from 'react';
import './style.css';
import NavbarContext from '../../context/navbar/context';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { variantsFromX, variantsDrawerHover } from '../../animation/variants';

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
        variants={variantsFromX('-10vw')}
      >
        <motion.li
          onClick={() => handleClickLink('skillsSection')}
          className="drawer__list--item"
          whileHover={variantsDrawerHover.whileHover}
          transition={variantsDrawerHover.transition}
        >
          skills
        </motion.li>
        <motion.li
          onClick={() => handleClickLink('projectsSection')}
          className="drawer__list--item"
          whileHover={variantsDrawerHover.whileHover}
          transition={variantsDrawerHover.transition}
        >
          projects
        </motion.li>
        <motion.li
          onClick={() => handleClickLink('educationsSection')}
          className="drawer__list--item"
          whileHover={variantsDrawerHover.whileHover}
          transition={variantsDrawerHover.transition}
        >
          education
        </motion.li>
        <motion.li
          onClick={() => handleClickLink('contactSection')}
          className="drawer__list--item"
          whileHover={variantsDrawerHover.whileHover}
          transition={variantsDrawerHover.transition}
        >
          contact
        </motion.li>
      </motion.ul>
    </div>
  );
};

export default Drawer;
