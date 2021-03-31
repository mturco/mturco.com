import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Wrapper = styled.h1`
  font: 700 2.5em var(--font-heading);
  letter-spacing: 0.03em;
  margin: 0;
`;

const HeadingLink = styled(Link)`
  color: var(--color-primary);
  display: inline-flex;
  line-height: 1;
  text-decoration-color: transparent;
  text-decoration-thickness: 2px;
  text-underline-offset: 4px;
  transition: all 0.2s ease-out;

  :hover {
    text-decoration-color: currentColor;
  }
`;

export const Heading = ({ children, ...props }) => (
  <Wrapper {...props}>
    <HeadingLink to="/">{children}</HeadingLink>
  </Wrapper>
);
