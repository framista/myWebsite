import React from 'react';
import './style.css';

const Skill = () => {
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
    <div className="skill">
      <h3 className="skill__title">Programming</h3>
      <div className="skill__box">
        {languages.map((language) => (
          <p className="skill__item">{language}</p>
        ))}
      </div>
      <h3 className="skill__title">Tools & others</h3>
      <div className="skill__box">
        {tools.map((tool) => (
          <p className="skill__item">{tool}</p>
        ))}
      </div>
      <div className="triangle skill__triangle"></div>
    </div>
  );
};

export default Skill;
