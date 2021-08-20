import{ useState, useEffect } from 'react';

const useScrollDirection = () => {
  const [direction, setDirection] = useState(null);

  useEffect(() => {
    const handleScroll = (() => {
      let prev = 0;
      return () => {
        const curr = window?.scrollY;
        if (curr - prev > 0) {
          if (direction !== 'down') setDirection('down');
        } else if (curr - prev < 0) {
          if (direction !== 'up') setDirection('up');
        }
        prev = curr;
      };
    })();
    window?.addEventListener('scroll', handleScroll);
    return () => {
      window?.removeEventListener('scroll', handleScroll);
    };
  // eslint-disable-next-line 
  }, []);
  

  return [direction, setDirection];
};

export default useScrollDirection;
