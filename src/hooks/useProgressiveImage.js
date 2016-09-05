import { useEffect, useState } from 'react';

const load = src =>
  new Promise(resolve => {
    const img = new Image();
    img.onload = resolve;
    img.src = src;
  });

export const useProgressiveImage = srcset => {
  const [current, setCurrent] = useState(srcset[0]);
  useEffect(() => {
    const loadAll = async () => {
      for (let i = 0; i < srcset.length; i++) {
        await load(srcset[i][1]);
        setCurrent(srcset[i]);
      }
    };
    loadAll();
  }, []);

  return current;
};
