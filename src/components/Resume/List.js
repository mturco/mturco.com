import styled from 'styled-components';

export const UnorderedList = styled.ul`
  padding-left: 1.5rem;
  margin: 0.25rem 0 0;
  list-style-type: circle;
`;

export const ListItem = styled.li`
  margin-bottom: 0.5em;

  :last-child {
    margin-bottom: 0;
  }

  @media print {
    margin-bottom: 0.25em;
  }
`;
