import { useEffect } from 'react';
import Parallax from 'parallax-js';

const useParallax = (ref, query = '.layer') => {
  useEffect(() => {
    const el = ref.current;
    const layers = query === 'self' ? [el] : el.querySelectorAll(query);
    for (const layer of layers) {
      new Parallax(layer);
    }
  }, [ref, query]);
};

export default useParallax;
