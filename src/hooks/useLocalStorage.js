import { useState } from 'react';

export const useLocalStorage = (key, defaultValue = null) => {
  const [value, setValue] = useState(() => {
    try {
      const storedValue = JSON.parse(window.localStorage.getItem(key));
      return storedValue !== null ? storedValue : defaultValue;
    } catch (err) {
      return defaultValue;
    }
  });

  const storeValue = val => {
    try {
      window.localStorage.setItem(key, JSON.stringify(val));
      setValue(val);
    } catch (err) {
      // do nothing
    }
  };
  return [value, storeValue];
};
