import { useEffect, useMemo } from 'react';
import ScrollReveal from 'scrollreveal';

const base = {
  delay: 200,
  duration: 400,
};

const slideBase = {
  ...base,
  distance: '150%',
  opacity: 0,
};

const defaultAnimations = {
  'slide-up': { ...slideBase, origin: 'bottom' },
  'slide-left': { ...slideBase, origin: 'right' },
  'slide-right': { ...slideBase, origin: 'left' },
};

const useScrollAnimation = (ref, customAnimations = null) => {
  const animations = useMemo(
    () => (customAnimations ? customAnimations : defaultAnimations),
    [customAnimations]
  );
  useEffect(() => {
    const el = ref.current;
    console.log(el);
    if (el) {
      const scr = ScrollReveal();
      for (const [name, options] of Object.entries(animations)) {
        const elements = el.querySelectorAll(`[data-animation="${name}"]`);
        scr.reveal(elements, options);
      }
    }
  }, [ref, animations]);
};

export default useScrollAnimation;
