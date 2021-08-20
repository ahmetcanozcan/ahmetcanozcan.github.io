import { useEffect, useState } from 'react';

const usePageReady = () => {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if (document.readyState === 'complete') {
      setReady(true);
      return;
    }
    window?.addEventListener('load', () => {
      setReady(true);
      console.log('loaded');
    });
  }, []);
  return ready;
};

export default usePageReady;
