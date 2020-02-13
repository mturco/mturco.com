import React from 'react';

import { useDarkMode } from '@hooks';

export const LayoutBase = ({ children, ...props }) => {
  useDarkMode();
  return <div {...props}>{children}</div>;
};
