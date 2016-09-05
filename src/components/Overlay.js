import React, { forwardRef } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Backdrop = styled.div`
  background-color: var(--color-background);
  opacity: 0.95;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
`;

export const Overlay = forwardRef(({ children, ...props }, ref) => {
  return (
    <Wrapper {...props} ref={ref}>
      <Backdrop />
      <Content>{children}</Content>
    </Wrapper>
  );
});
