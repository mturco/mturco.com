import styled, { css } from 'styled-components';

export const Link = styled.a`
  color: var(--color-primary);
  text-underline-offset: 1px;
  text-decoration-color: transparent;
  transition: all 0.1s ease-in;

  :hover {
    text-decoration-color: currentColor;
  }

  /* ${(props) =>
    props['data-short-url'] &&
    css`
      @media print {
        :after {
          font-size: 10px;
          content: ' (' attr(data-short-url) ')';
        }
      }
    `} */
`;
