import React from 'react';
import styled from 'styled-components';

import { useDarkMode } from '@hooks';
import Lightbulb from '@images/lightbulb.svg';

const Wrapper = styled.div`
  overflow: hidden;
  position: absolute;
  top: 0;
  right: 0;
`;

const Toggle = styled.button`
  background: none;
  border: 0;
  color: inherit;
  transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
  transition-duration: 0.4s;
  transition-property: transform;
  transform: translateX(calc(100% - 3.5rem));
  display: flex;
  padding: 1rem;
  align-items: center;

  :hover {
    transform: none;
  }
`;

const LightbulbIcon = styled(Lightbulb)`
  width: 1.5rem;
  height: 1.5rem;
  fill: currentColor;
  filter: drop-shadow(1px 3px 2px rgba(0, 0, 0, 0.15));
`;

const Label = styled.span`
  margin-left: 0.5rem;
  opacity: 0;
  transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
  transition-duration: 0.4s;
  transition-property: opacity;
  white-space: nowrap;

  ${Toggle}:hover & {
    opacity: 1;
  }
`;

export const ThemeSwitcher = () => {
  const [darkMode, devicePrefersDark, toggleDarkMode] = useDarkMode();
  return (
    <Wrapper>
      <Toggle onClick={toggleDarkMode}>
        <LightbulbIcon />
        <Label>
          {darkMode
            ? `Dark${devicePrefersDark ? ' (device default)' : ''}`
            : `Light${!devicePrefersDark ? ' (device default)' : ''}`}
        </Label>
      </Toggle>
    </Wrapper>
  );
};
