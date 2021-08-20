import { useEffect } from 'react';

import VanillaTilt from 'vanilla-tilt';
import useMobile from './useMobile';

const defaultOptions = {
  max: 15,
  speed: 200,

};

const useTilt = (ref, query = '.tilt-item', options = {}) => {
  const isMobile = useMobile();
  useEffect(() => {
   if(isMobile && !options.mobile) return;
   const opt = {...defaultOptions, ...options};
   const el = ref.current;
   const elements = query === 'self' ? [el] : el.querySelectorAll(query);
   VanillaTilt.init(elements, opt); 
  }, [ref, query, options, isMobile]);
};

export default useTilt;
