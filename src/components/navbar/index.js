import React, { useContext } from 'react';
import './style.css';
import PropTypes from 'prop-types';
import Drawer from '../drawer';
import NavbarContext from '../../context/navbar/context';
import { motion } from 'framer-motion';
import { variantsNavbarHover } from '../../animation/variants';

const Navbar = ({ refs }) => {
  const navbarContext = useContext(NavbarContext);
  const { navbarOpen, toogleNavbar } = navbarContext;
  const goToSection = (section) => {
    window.scrollTo({
      top: refs[section].current.offsetTop,
      behavior: 'smooth',
    });
  };

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  let hamburgerButtonClasses = 'nav__button';
  if (navbarOpen) {
    hamburgerButtonClasses += ' nav__button--open';
  }

  return (
    <header className="nav__header">
      <div onClick={goToTop} className="nav__link--home">
        Home
      </div>
      <div className="nav__spacer"></div>
      <nav>
        <ul className="nav__list">
          <motion.li
            onClick={() => goToSection('skillsSection')}
            className="nav__list--item"
            whileHover={variantsNavbarHover.whileHover}
            transition={variantsNavbarHover.transition}
          >
            skills
          </motion.li>
          <motion.li
            onClick={() => goToSection('projectsSection')}
            className="nav__list--item"
            whileHover={variantsNavbarHover.whileHover}
            transition={variantsNavbarHover.transition}
          >
            projects
          </motion.li>
          <motion.li
            onClick={() => goToSection('educationsSection')}
            className="nav__list--item"
            whileHover={variantsNavbarHover.whileHover}
            transition={variantsNavbarHover.transition}
          >
            education
          </motion.li>
          <motion.li
            onClick={() => goToSection('contactSection')}
            className="nav__list--item"
            whileHover={variantsNavbarHover.whileHover}
            transition={variantsNavbarHover.transition}
          >
            contact
          </motion.li>
        </ul>
      </nav>
      <button className={hamburgerButtonClasses} onClick={toogleNavbar}>
        <div className="nav__span--toogle"></div>
      </button>
      {navbarOpen && <Drawer goToSection={goToSection} />}
    </header>
  );
};

Navbar.propTypes = {
  refs: PropTypes.object.isRequired,
};
export default Navbar;
