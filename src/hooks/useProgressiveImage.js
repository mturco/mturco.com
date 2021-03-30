import { useEffect, useState, useRef } from 'react';

const load = (src) =>
  new Promise((resolve) => {
    const img = new Image();
    img.onload = resolve;
    img.src = src;
  });

export const useProgressiveImage = (srcset) => {
  const srcsetRef = useRef(srcset);
  const [current, setCurrent] = useState(srcset[0]);

  useEffect(() => {
    (async () => {
      for (let i = 0; i < srcsetRef.current.length; i++) {
        await load(srcsetRef.current[i][1]);
        setCurrent(srcsetRef.current[i]);
      }
    })();
  }, []);

  return current;
};
