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
  text-decoration: none;
  transition: box-shadow 0.2s ease-out;

  :hover {
    box-shadow: 1px 4px 0 -2px var(--color-primary);
  }
`;

export const Heading = (props) => (
  <Wrapper {...props}>
    <HeadingLink to="/">Matt Turco</HeadingLink>
  </Wrapper>
);
