import React from 'react';
import styled from 'styled-components';

import { LayoutBase, PageMeta } from '@components';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const Heading = styled.h1`
  font: 700 3em var(--font-heading);
  letter-spacing: 0.03em;
  margin: 0 0 1rem;
  color: var(--color-primary);
`;

const Paragraph = styled.p`
  font-size: 2rem;
`;

export default function NotFoundPage() {
  return (
    <LayoutBase>
      <Wrapper>
        <PageMeta title="404 Not Found" />
        <Heading>Nope...</Heading>
        <Paragraph>That's not a thing. In other words, 404.</Paragraph>
      </Wrapper>
    </LayoutBase>
  );
}
