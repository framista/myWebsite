import React from 'react';
import Education from '../../education';
import './style.css';

const Educations = React.forwardRef((props, ref) => {
  const educations = [
    {
      name: 'JavaScript Algorithms and Data Structures',
      date: '08.2020',
      link: '',
    },
    {
      name: 'IdoSell Shop - IAI webcamp',
      date: '05.2020 - 06.2020',
      link: '',
    },
    {
      name: 'CodersCrew - CodersCamp',
      date: '10.2019 - 01.2020',
      link: '',
    },
    {
      name:
        'Politechnika Wrocławska - Inżynieria Biomedyczna (Informatyka medyczna)',
      date: '10.2015 - 07.2020 (mgr inż.)',
      link: '',
    },
  ];
  return (
    <div ref={ref} className="educations">
      <h3 className="educations__title">education & certificates</h3>
      <div className="educations__box">
        {educations.map((education, index) => (
          <Education key={index} education={education} />
        ))}
      </div>
      <div className="triangle educations__triangle"></div>
    </div>
  );
});

export default Educations;
