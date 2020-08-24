import React from 'react';
import Project from '../../project';

const Projects = () => {
  const projects = [
    {
      title: 'journey',
      description:
        'Website to store your journeys. You can create new journey, edit or delete selected journey. It is possible to sort all the journeys by date and filter journeys which contain selected string. Data are stored using local storage. Tests are done using Jest and React Testing Library.',
      image: './images/journey.jpg',
      technologies: ['React', 'SASS', 'CSS3', 'Jest', 'React Testing Library'],
      live: 'https://framista.github.io/journey/#/',
      github: 'https://github.com/framista/journey',
    },
    {
      title: 'virtual clinic',
      description:
        'Website for patients to make an appointment, check or cancel visit and fill survey. Data are stored using MongoDB Atlas. Deploy using Heroku.',
      image: '/images/clinic.jpg',
      technologies: ['React', 'Node', 'Express', 'MongoDB', 'Material UI'],
      live: 'https://framista-clinic.herokuapp.com/',
      github: 'https://github.com/framista/clinic',
    },
  ];
  return (
    <div>
      {projects.map((project) => (
        <Project project={project} />
      ))}
    </div>
  );
};

export default Projects;
