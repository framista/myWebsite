import React, { useRef } from 'react';
import NavbarState from '../../../context/navbar/NavbarState';
import Introduction from '../introduction';
import Navbar from '../../navbar';
import Skill from '../skill';
import Projects from '../projects';
import Educations from '../educations';
import Contact from '../contact';

const Home = () => {
  const skillsSection = useRef(null);
  const projectsSection = useRef(null);
  const educationsSection = useRef(null);
  const contactSection = useRef(null);
  return (
    <NavbarState>
      <Navbar
        refs={{
          skillsSection,
          projectsSection,
          educationsSection,
          contactSection,
        }}
      />
      <Introduction />
      <Skill ref={skillsSection} />
      <Projects ref={projectsSection} />
      <Educations ref={educationsSection} />
      <Contact ref={contactSection} />
    </NavbarState>
  );
};

export default Home;
