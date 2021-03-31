import styled from 'styled-components';

export const Slash = styled('span').attrs({
  'aria-hidden': 'true',
})`
  margin: 0 1rem;
  display: inline-flex;
  align-self: center;

  &::before {
    content: '';
    display: inline-flex;
    transform: rotateZ(30deg);
    height: 1.25rem;
    border-left: 2px solid var(--color-primary);
  }
`;
