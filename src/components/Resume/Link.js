import styled, { css } from 'styled-components';

export const Link = styled.a`
  color: var(--color-accent);
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-color 0.1s ease-in;

  :hover {
    border-color: currentColor;
  }

  ${props =>
    props['data-short-url'] &&
    css`
      @media print {
        :after {
          font-size: 10px;
          content: ' (' attr(data-short-url) ')';
        }
      }
    `}
`;
