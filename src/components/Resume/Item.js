import React from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';

import { Heading, Subheading } from './Typography';

const ItemDatesWrapper = styled.div`
  margin-bottom: 0.5em;
  font-size: 0.875rem;

  @media print, (min-width: 64rem) {
    flex: 0 0 auto;
    margin-left: 3rem;
  }
`;

const ItemDates = ({ from, to }) => (
  <ItemDatesWrapper>
    <time dateTime={format(from, 'YYYY-MM')}>{format(from, 'MMM YYYY')}</time>
    &thinsp;&ndash;&thinsp;
    {to ? (
      <time dateTime={format(to, 'YYYY-MM')}>{format(to, 'MMM YYYY')}</time>
    ) : (
      'Present'
    )}
  </ItemDatesWrapper>
);

const ContentWrapper = styled.div`
  @media print, (min-width: 64rem) {
    display: flex;
    align-items: baseline;
  }
`;

const Content = styled.div`
  flex: 1 1 auto;

  @media print, (min-width: 64rem) {
    order: -1;
  }
`;

export const Item = ({ children, from, subtitle, title, to }) => (
  <section>
    {title && <Heading>{title}</Heading>}
    <ContentWrapper>
      {from && <ItemDates from={from} to={to} />}
      <Content>
        {subtitle && <Subheading>{subtitle}</Subheading>}
        {children}
      </Content>
    </ContentWrapper>
  </section>
);