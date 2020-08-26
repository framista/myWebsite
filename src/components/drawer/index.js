import React, { useContext } from 'react';
import './style.css';
import NavbarContext from '../../context/navbar/context';

const Drawer = (props) => {
  const { goToSection } = props;
  const navbarContext = useContext(NavbarContext);

  const handleClickLink = (section) => {
      goToSection(section);
      navbarContext.closeNavbar();
  };

  return (
    <div>
      <ul className="drawer__list">
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
      </ul>
    </div>
  );
};

export default Drawer;
