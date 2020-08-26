import React, { useContext } from 'react';
import './style.css';
import PropTypes from 'prop-types';
import Drawer from '../drawer';
import NavbarContext from '../../context/navbar/context';

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

  return (
    <header className="nav__header">
      <div onClick={goToTop} className="nav__link--home">
        Home
      </div>
      <div className="nav__spacer"></div>
      <nav>
        <ul className="nav__list">
          <li
            onClick={() => goToSection('skillsSection')}
            className="nav__list--item"
          >
            skills
          </li>
          <li
            onClick={() => goToSection('projectsSection')}
            className="nav__list--item"
          >
            projects
          </li>
          <li
            onClick={() => goToSection('educationsSection')}
            className="nav__list--item"
          >
            education
          </li>
          <li
            onClick={() => goToSection('contactSection')}
            className="nav__list--item"
          >
            contact
          </li>
        </ul>
      </nav>
      <button className="nav__button" onClick={toogleNavbar}>
        <span className="nav__span--toogle"></span>
        <span className="nav__span--toogle"></span>
        <span className="nav__span--toogle"></span>
      </button>
      {navbarOpen && <Drawer goToSection={goToSection} />}
    </header>
  );
};

Navbar.propTypes = {
  refs: PropTypes.object.isRequired,
};
export default Navbar;
