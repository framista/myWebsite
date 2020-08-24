import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

const Navbar = ({ refs }) => {
  const goToSection = (section) => {
    window.scrollTo({
      top: refs[section].current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <div>
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
          <li className="nav__list--item">contact</li>
        </ul>
      </nav>
    </div>
  );
};

Navbar.propTypes = {
  refs: PropTypes.object.isRequired,
};
export default Navbar;
