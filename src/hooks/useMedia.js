import { useEffect, useState } from 'react';

export const useMedia = query => {
  const mql = typeof window !== 'undefined' ? window.matchMedia(query) : {};
  const [value, setValue] = useState(mql.matches);

  useEffect(() => {
    const handler = () => setValue(mql.matches);
    mql.addListener(handler);
    return () => mql.removeListener(handler);
  }, [mql]);

  return value;
};
