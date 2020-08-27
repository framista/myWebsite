import React from 'react';
import Education from '../../education';
import './style.css';

const educations = [
  {
    name: 'JavaScript Algorithms and Data Structures',
    date: '08.2020',
    link:
      'https://www.freecodecamp.org/certification/fcc69cc997c-b02b-467d-9282-bb3f82d3b102/javascript-algorithms-and-data-structures',
  },
  {
    name: 'IdoSell Shop - IAI webcamp',
    date: '05.2020 - 06.2020',
    link: 'https://adajablonska.netlify.app/certificate/webcamp',
  },
  {
    name: 'CodersCrew - CodersCamp',
    date: '10.2019 - 01.2020',
    link: 'https://adajablonska.netlify.app/certificate/coderscamp',
  },
  {
    name:
      'Politechnika Wrocławska - Inżynieria Biomedyczna (Informatyka medyczna)',
    date: '10.2015 - 07.2020 (mgr inż.)',
    link: 'https://adajablonska.netlify.app/certificate/pwr',
  },
];

const Educations = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="educations">
      <div className="container">
        <h3 className="educations__title">education & certificates</h3>
        <div className="educations__box">
          {educations.map((education, index) => (
            <Education key={index} education={education} index={index} />
          ))}
        </div>
      </div>
      <div className="triangle educations__triangle"></div>
    </div>
  );
});

export default Educations;
