import { useCallback, useEffect, useState } from 'react';

import { useLocalStorage, useMedia } from '@hooks';

export const useDarkMode = () => {
  const devicePrefersDark = useMedia('(prefers-color-scheme: dark)');
  const [prefersDark, setPrefersDark] = useLocalStorage('darkMode');
  const [darkMode, setDarkMode] = useState(
    prefersDark !== null ? prefersDark : devicePrefersDark,
  );

  const toggleDarkMode = useCallback(() => {
    setPrefersDark(prefersDark === null ? !darkMode : null);
    setDarkMode(!darkMode);
  }, [darkMode, prefersDark]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (prefersDark === false) {
        document.documentElement.classList.add('light');
      } else {
        document.documentElement.classList.remove('light');
      }
    }
  }, [prefersDark]);

  return [darkMode, devicePrefersDark, toggleDarkMode];
};
