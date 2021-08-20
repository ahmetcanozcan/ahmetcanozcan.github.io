import React, { useRef } from 'react';

import * as styles from './Header.module.css';

import classNames from 'classnames';
import useParallax from '../../hooks/useParallax';
import useTilt from '../../hooks/useTilt';
import { Element } from 'react-scroll';

const Header = () => {
  const container = useRef(null);
  useParallax(container);
  console.log(styles.pp);
  useTilt(container, '.' + styles.pp, {
    'glare-prerender': true,
    'full-page-listening': true,
  });
  return (
    <Element name="home">
      <header className={styles.wrapper}>
        <div alt="" className={styles.bg} />
        <div ref={container} className={styles.container}>
          <div data-relative-input="true" className={styles.banner}>
            <div>
              <div className="layer">
                <div data-relative-input="true" data-depth="0.4">
                  Hello
                  <span className="dot" />{' '}
                </div>
              </div>
              <div className="layer">
                <div data-depth="0.7">I'm Ahmet</div>
              </div>
            </div>
            <div className={styles.subtitle}> Software Developer </div>
          </div>
          <div className={classNames(styles.ppWrapper, 'tilt-item')}>
            <img
              className={classNames(styles.pp)}
              alt=""
              src="/img/ppp.png"
            />
          </div>
        </div>
      </header>
    </Element>
  );
};

export default Header;
