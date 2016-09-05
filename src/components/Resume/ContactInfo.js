import React from 'react';
import styled from 'styled-components';

import { Link } from './Link';

export const ContactInfoList = styled.ul`
  padding: 0;
  margin: 0 0 0.5rem;
  line-height: 1.5;
  list-style-type: none;

  @media print, (min-width: 48rem) {
    display: flex;
    line-height: 1;
  }

  @media (min-width: 64rem) {
    margin-bottom: 0;
  }
`;

const ContactInfoListItem = styled.li`
  @media print, (min-width: 48rem) {
    :not(:first-of-type) {
      padding: 0 0 0 1rem;
      margin: 0 0 0 1rem;
      border-left: 1px solid currentColor;
    }
  }
`;

const ContactInfoLink = styled(Link)`
  color: inherit;
`;

export const ContactInfoItem = ({ children, href, ...props }) => (
  <ContactInfoListItem {...props}>
    {href ? (
      <ContactInfoLink href={href}>{children}</ContactInfoLink>
    ) : (
      children
    )}
  </ContactInfoListItem>
);
