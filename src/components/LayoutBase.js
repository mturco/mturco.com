import React from 'react';

import { ThemeSwitcher } from '@components';
import { useDarkMode } from '@hooks';

export const LayoutBase = ({ children, ...props }) => {
  useDarkMode();
  return (
    <div {...props}>
      <ThemeSwitcher />
      {children}
    </div>
  );
};
