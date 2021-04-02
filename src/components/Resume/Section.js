import React from 'react';
import styled from 'styled-components';

const SectionHeader = styled.header`
  flex: 0 0 11.5ch;
`;

const SectionHeading = styled.h1`
  display: inline-block;
  padding: 1px 4px;
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 0.8125rem;
  font-weight: 700;
  color: var(--color-background);
  text-transform: uppercase;
  letter-spacing: 0.15em;
  vertical-align: top;
  background-color: var(--color-primary);
  border: 2px solid var(--color-primary);

  @media print, (min-width: 48rem) {
    border-top: 0;
  }

  @media (min-width: 48rem) {
    margin-bottom: 0;
  }

  @media print {
    margin-bottom: 0.5rem;
    color: var(--color-primary);
    background-color: transparent;
  }
`;

const SectionWrapper = styled.section`
  margin-top: 2rem;
  border-top: 2px solid var(--color-primary);

  @media (min-width: 30rem) {
    margin-top: 2.5rem;
  }

  @media print {
    margin-top: 1.25rem;
  }
`;

const SectionContent = styled.section`
  flex: 1;
  line-height: 1.5;

  @media screen and (min-width: 48rem) {
    padding-left: 8.5rem;
  }

  @media print {
    line-height: 1.4;
    padding-left: 8.5rem;
  }
`;

export const Section = ({ children, title, ...props }) => (
  <SectionWrapper {...props}>
    <SectionHeader>
      <SectionHeading>{title}</SectionHeading>
    </SectionHeader>
    <SectionContent>{children}</SectionContent>
  </SectionWrapper>
);
