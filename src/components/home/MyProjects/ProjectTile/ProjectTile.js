import React, { useRef } from 'react';
import useTilt from '../../../hooks/useTilt';

import * as styles from './ProjectTile.module.css';

const ProjectTile = ({ project, even }) => {
  const { name, description, tags, img, link } = project;
  const tile = useRef(null);
  useTilt(tile, 'self', {
    mobile: false,
    max: 10,
    reverse: true,
  });

  return (
    <a
      href={link}
      ref={tile}
      target='_blank'
      rel='noreferrer'
      data-animation={even ? 'slide-left' : 'slide-right'}
      className={styles.tile}
    >
      <div className={styles.info}>
        <div className={styles.title}> {name} </div>
        <div className={styles.description}>{description}</div>
        <div className={styles.tags}>
          {tags.map((tag, index) => (
            <div key={index} className={styles.tag}>
              {tag}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.img}>
        <img src={img} alt='Project logo' />
      </div>
    </a>
  );
};

export default ProjectTile;
