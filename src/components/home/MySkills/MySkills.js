import classNames from 'classnames';
import React, { useRef } from 'react';
import useParallax from '../../hooks/useParallax';
import useTilt from '../../hooks/useTilt';

import * as styles from './MySkills.module.css';

const MySkills = props => {
  const container = useRef(null);
  useParallax(container)
  useTilt(container, '.' + styles.button, {
    'glare-prerender': true,
  });

  return (
    <section ref={container} className={classNames(styles.container)}>
      <p data-animation='slide-right' className='layer'>
      <p  data-depth='0.4'  >For more information about my skills and my experiences</p>
      </p>
      <div>
        <a  data-animation='slide-left' target='_blank' className={styles.button} href="/resume.pdf">
          check my resume
        </a>
      </div>
    </section>
  );
};

export default MySkills;
