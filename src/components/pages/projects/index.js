import React from 'react';
import Project from '../../project';
import './style.css';

const Projects = React.forwardRef((props, ref) => {
  const projects = [
    {
      title: 'journey',
      description:
        'Website to store your journeys. You can create new journey, edit or delete selected journey. It is possible to sort all the journeys by date and filter journeys which contain selected string. Data are stored using local storage. Tests are done using Jest and React Testing Library.',
      image: './images/journey.jpg',
      technologies: [
        'React',
        'SASS',
        'CSS3',
        'BEM',
        'Jest',
        'React Testing Library',
      ],
      live: 'https://framista.github.io/journey/#/',
      github: 'https://github.com/framista/journey',
    },
    {
      title: 'exams',
      description:
        'Website to store your information about exams. You can create new exam, edit or delete selected exam. It is possible to sort all the exams by date or by subject and filter exams - failed, passed, without result, unwritten exam. Page with statistics - grade point average for all subjects. Data are stored using local storage. Manage state using Redux. Toogle light/dark mode.',
      image: '/images/exams.jpg',
      technologies: ['React', 'Redux', 'JavaScript', 'React Bootstrap'],
      live: 'https://framista.github.io/exams/#/',
      github: 'https://github.com/framista/exams',
    },
    {
      title: 'virtual clinic',
      description:
        'Website for patients to make an appointment, check or cancel visit and fill survey. Data are stored using MongoDB Atlas. Deploy using Heroku.',
      image: '/images/clinic.jpg',
      technologies: [
        'React',
        'Node',
        'Express',
        'MongoDB',
        'Material-UI',
        'Heroku',
      ],
      live: 'https://framista-clinic.herokuapp.com/',
      github: 'https://github.com/framista/clinic',
    },
    {
      title: 'gym',
      description:
        'Website for gym with special hover effects and form with data validation before sending. Deploy on Netlify.',
      image: '/images/gym.jpg',
      technologies: ['JavaScript', 'SASS', 'CSS3', 'HTML5', 'Netlify'],
      live: 'https://ecstatic-lalande-bf5273.netlify.app/',
      github: 'https://github.com/framista/gym',
    },
  ];
  return (
    <div ref={ref} className="projects">
      {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
      <div className="triangle projects__triangle"></div>
    </div>
  );
});

export default Projects;
