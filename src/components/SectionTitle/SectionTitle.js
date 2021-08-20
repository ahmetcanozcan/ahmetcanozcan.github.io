import React, { useRef } from 'react';
import classNames from 'classnames';

import useParallax from '../hooks/useParallax';

import * as styles from './SectionTitle.module.css';


const SectionTitle = ({ title, invert = false, animate = true, small = false }) => {
  const ref = useRef(null);

  useParallax(ref, 'self');

  const h2Props = { }
  const spanProps = {}
  const divProps = {
    ref,
    className:classNames(styles.title, { invert, small })
  }
  if (animate) {
    h2Props['data-depth'] = '0.2';
    divProps['data-animation'] = 'slide-up';
    spanProps['data-depth'] = '1.2';
  }

  return (
    <div
      {...divProps}
    >
      <h2 {...h2Props} >
        {title}
        <span {...spanProps} className="dot" />
      </h2>
    </div>
  );
};

export default SectionTitle;
