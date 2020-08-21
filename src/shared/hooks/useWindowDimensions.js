/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';

export default function useWindowDimensions() {

  const hasWindow = typeof window !== 'undefined';

  function getWindowDimensions() {
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;
    const calcTileWidth = width => {
      if(width > 1820) return 470;
      else if(width >=1400 && width <= 1820) return ((width-330)/3 - 21);
      else if(width > 1200 && width <= 1400) return ((width-90)/3 - 21);
      else if(width > 750 && width <= 1200) return ((width-100)/2 - 21);
      else return (width-18);
    }
    const tileWidth = calcTileWidth(width);
    let colClass = 'col-12';
    if (width > 911 && width < 1292) colClass = 'col-6'
    if (width >= 1292) colClass = 'col-4'

    let lactationColClass = 'col-6';
    if (width > 911 && width < 1110) lactationColClass = 'col-4'
    if (width >= 1110) lactationColClass = 'col-3'
    
    let reproColClass = 'col';
    if (width > 1024 && width < 1280) reproColClass = 'col-4'
    // if (width >= 1292) reproColClass = 'col-4'


    return {
      width,
      height,
      tileWidth,
      colClass,
      lactationColClass,
      reproColClass,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    if (hasWindow) {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [hasWindow]);

  return windowDimensions;
}