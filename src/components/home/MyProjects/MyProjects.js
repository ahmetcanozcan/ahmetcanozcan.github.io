import classNames from 'classnames';
import React from 'react';
import { Element } from 'react-scroll';
import SectionTitle from '../../SectionTitle';

import * as styles from './MyProjects.module.css';
import ProjectTile from './ProjectTile';

const projects = [
  {
    name: 'Eago',
    description:
      'A JavaScript runtime for developing maintainable web apps. Written with go',
    tags: ['web', 'runtime'],
    img: '/img/projects/eago.png',
    link: 'https://github.com/ahmetcanozcan/eago',
  },
  {
    name: 'Limqa',
    description:
      'Limqa is an client abstraction for AMQP communication using Consumer and Producer design.',
    tags: ['web', 'runtime'],
    img: '/img/projects/limqa.png',
    link: 'https://github.com/ahmetcanozcan/limqa',
  },
  {
    name: 'Hux',
    description:
      'Channel and event based websocket abstraction written with Golang. Implemented both client and server side',
    tags: ['web', 'tool'],
    img: '/img/projects/hux.png',
    link: 'https://github.com/ahmetcanozcan/hux',
  },
  {
    name: 'Tabby',
    small: true,
    description: 'A hyper casual game that focuses on timing',
    tags: ['game', 'unity'],
    img: '/img/projects/taptap.png',
    link: 'https://play.google.com/store/apps/details?id=com.AhmetcanOZCAN.TapTapTabbyNew',
  },
  {
    name: 'Preat',
    description:
      'simple, Vue-like, reactive library created by educational purposes',
    link: 'https://github.com/ahmetcanozcan/preat',
    tags: ['web', 'tool'],
    img: '/img/projects/preat.png',
  },
];

const MyProjects = () => {
  return (
    <Element name='projects' className={classNames('container', styles.container)}>
      <SectionTitle title="My Projects" />
      {projects.map((project, index) => (
        <ProjectTile
          data-animation="slide-left"
          key={index}
          even={index % 2 === 0}
          project={project}
        />
      ))}
    </Element>
  );
};

export default MyProjects;
