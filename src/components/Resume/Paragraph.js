import styled from 'styled-components';

export const Paragraph = styled.p`
  margin: 0;

  & + & {
    margin-top: 1em;
  }
`;
