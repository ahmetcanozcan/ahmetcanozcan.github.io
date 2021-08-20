import React from 'react';
import { Element } from 'react-scroll';

import SectionTitle from '../../SectionTitle';

import * as styles from './About.module.css';

const aboutText = [
  `Hi, It's Ahmet, a software developer, I am fluent in several popular languages like Javascript and Go. And I've common software engineering skills such as data structures, algorithms, etc. I feel comfortable on both sides of web applications, frontend, and backend. I've experienced a lot of tools and languages. But for now, mostly I'm using Javascript, React, Node, Golang, Docker for creating web applications, tools, and libraries. Recently, I'm interested in cloud-nativeness and distributed systems.`,
  `Besides my technical personality, I'm a huge basketball fan, mostly NBA. I'm not just watching basketball, I play as well. I love to play video games. mostly I play games that I can finish on weekends. I'm very interested in art history, popular science, and literature. If you want to talk about technical or hobbyist topics, it will be a pleasure for me.
  `,
];

const About = () => {
  return (
    <Element
      name="about"
      className="container"
      style={{ marginBottom: '35vh' }}
    >
      <SectionTitle id="about-title" title="About me" />
      <div className={styles.content} data-animation="slide-left">
        <p>
          {aboutText[0]}
        </p>
      </div>
      <br />
      <div className={styles.content} data-animation="slide-right">
        <p>
          {aboutText[1]}
        </p>
      </div>
    </Element>
  );
};

export default About;
