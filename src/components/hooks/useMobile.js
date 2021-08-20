import React, { useEffect } from 'react';


const useMobile = () => {
  const [isMobile, setIsMobile] = React.useState(false);
  
  useEffect(() => {
    const isMobile = window?.matchMedia('(max-width: 767px)').matches;
    setIsMobile(isMobile);
  }, [setIsMobile]);

  return isMobile;
}


export default useMobile;



