import React, { useRef } from 'react';

import Navbar from './components/Navbar';
import Header from './components/home/Header';
import About from './components/home/About';

import useScrollAnimation from './components/hooks/useScrollAnimation';
import useSmoothScroll from './components/hooks/useSmoothScroll';

import usePageReady from './components/hooks/usePageReady';
import PreLoader from './components/PreLoader';
import MyProjects from './components/home/MyProjects';
import Contact from './components/home/Contact';
import Footer from './components/Footer';
import classNames from 'classnames';

export default function Home() {
  const home = useRef(null);
  useScrollAnimation(home);
  useSmoothScroll()
  const pageReady = usePageReady();
  return (
    <div
      className={classNames({ 'page-ready': pageReady })}
      id="app"
      ref={home}
    >
      {!pageReady && <PreLoader />}
      <Navbar />
      <Header />
      <About />
      {/* <MySkills /> */}
      <MyProjects />
      <Contact />
      <Footer />
    </div>
  );
}
