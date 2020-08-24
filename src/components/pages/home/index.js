import React, { Fragment } from 'react';
import Introduction from '../introduction';
import Skill from '../skill';
import Projects from '../projects';

const Home = () => {
  return (
    <Fragment>
      <Introduction />
      <Skill />
      <Projects />
    </Fragment>
  );
};

export default Home;
