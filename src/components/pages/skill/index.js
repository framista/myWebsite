import React from 'react';
import './style.css';

const Skill = React.forwardRef((props, ref) => {
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
    <div className="skill" ref={ref}>
      <h3 className="skill__title">Programming</h3>
      <div className="skill__box">
        {languages.map((language, index) => (
          <p key={index} className="skill__item">
            {language}
          </p>
        ))}
      </div>
      <h3 className="skill__title">Tools & others</h3>
      <div className="skill__box">
        {tools.map((tool, index) => (
          <p key={index} className="skill__item">
            {tool}
          </p>
        ))}
      </div>
      <div className="triangle skill__triangle"></div>
    </div>
  );
});

export default Skill;
