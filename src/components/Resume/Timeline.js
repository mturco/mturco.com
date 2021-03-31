import React from 'react';
import styled from 'styled-components';
import { format, parseISO } from 'date-fns';

const TimelineWrapper = styled.span`
  display: inline-flex;
`;

export const Timeline = ({ from, to }) => (
  <TimelineWrapper>
    <time dateTime={format(parseISO(from), 'yyyy-MM')}>
      {format(parseISO(from), 'MMM yyyy')}
    </time>
    &thinsp;&ndash;&thinsp;
    {to ? (
      <time dateTime={format(parseISO(to), 'yyyy-MM')}>
        {format(parseISO(to), 'MMM yyyy')}
      </time>
    ) : (
      'Present'
    )}
  </TimelineWrapper>
);
