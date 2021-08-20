import React, { useEffect, useState, useCallback } from 'react';
import classnames from 'classnames';
import { Link } from 'react-scroll';

import Hamburger from 'hamburger-react';

import * as styles from './Navbar.module.css';
import useScrollDirection from '../hooks/useScrollDirection';

const links = ['home','about','projects','contact'];

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [direction, setDirection] = useScrollDirection();

  useEffect(() => {
    if (direction === 'down' && active) {
      setActive(false);
    }
  }, [direction, active]);

  const handleLinkClick = useCallback(() => {
    setDirection('up');
  }, [setDirection]);

  return (
    <nav className={classnames(styles.navbar, direction)}>
      <div className={styles.brand}>
        <img className={styles.logo} src="/img/logo.svg" alt="" />
        <div className={styles.icon}>
          <Hamburger
            rounded={true}
            color="white"
            toggled={active}
            onToggle={t => setActive(t)}
          />
        </div>
      </div>
      <div className={classnames(styles.navbarMenu, { active })}>
        {links.map((link, i) => {
          return (
            <Link className={styles.navbarLink} onClick={handleLinkClick} key={i} to={link} spy={true} smooth={true} offset={-50} duration={500}>
              {link}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
