import React from 'react';
import './style.css';
import { AiFillGithub } from 'react-icons/ai';
import { SiCodewars } from 'react-icons/si';
import { FaFreeCodeCamp } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="social-media">
      <h3 className="social-media__title">See more of my projects</h3>
      <a
        href="https://github.com/framista"
        className="social-media__link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillGithub />
        <p>GitHub</p>
      </a>
      <a
        href="https://www.codewars.com/users/Ada_Jab/stats"
        className="social-media__link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiCodewars />
        <p>Codewars</p>
      </a>
      <a
        href="https://www.freecodecamp.org/fcc69cc997c-b02b-467d-9282-bb3f82d3b102"
        className="social-media__link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFreeCodeCamp />
        <p>freeCodeCamp</p>
      </a>
    </div>
  );
};

export default SocialMedia;
