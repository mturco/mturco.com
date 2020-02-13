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
    color: var(--color-primary);
    background-color: transparent;
  }
`;

const SectionWrapper = styled.section`
  margin-top: 1rem;
  border-top: 2px solid #0f7cb3;

  & + & {
    margin-top: 2rem;
  }

  @media (min-width: 30rem) {
    & + & {
      margin-top: 2.5rem;
    }
  }

  @media print, (min-width: 48rem) {
    display: flex;
    align-items: flex-start;
  }

  @media print {
    & + & {
      margin-top: 1.5rem;
    }
  }
`;

const SectionContent = styled.section`
  flex: 1;
  line-height: 1.6;

  @media print, (min-width: 768px) {
    padding-top: 0.75rem;
    padding-left: 1.25rem;
  }

  @media print {
    line-height: 1.5;
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
