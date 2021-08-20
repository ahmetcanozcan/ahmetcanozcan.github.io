import { useCallback, useEffect } from 'react';
import { Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

const useSmoothScroll = () => {
  useEffect(() => {
    Events.scrollEvent.register('begin', function (to, element) {
      console.log('begin', arguments);
    });

    Events.scrollEvent.register('end', function (to, element) {
      console.log('end', arguments);
    });

    scrollSpy.update();
  }, []);

  const scrollToTop = useCallback(() => {
    scroll.scrollToTop();
  }, []);

  return { scrollToTop };
};

export default useSmoothScroll;