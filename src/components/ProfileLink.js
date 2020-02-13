import React from 'react';
import { Link as RouterLink } from 'gatsby';
import styled from 'styled-components';

const Composable = ({ as: Component, ...props }) => <Component {...props} />;

const Link = styled(Composable)`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100px;
  height: 100px;
  font-size: 0.875em;
  color: var(--color-text);
  text-decoration: none;
  flex-direction: column;
  align-items: center;
  transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
  transition-duration: 0.4s;
  transition-property: transform, background-color;

  :hover {
    color: var(--color-accent);
    transform: translateY(-7px);
  }

  :after {
    position: absolute;
    top: -5px;
    right: -5px;
    bottom: -5px;
    left: -5px;
    z-index: -1;
    content: '';
    border-radius: 50%;
    transform: scale3d(1.15, 1.15, 1);
  }

  :hover:after {
    background-color: var(--color-background-alt);
    transform: none;
  }
`;

const LinkIcon = styled(Composable)`
  width: 48px;
  height: 48px;
  fill: currentColor;
  filter: drop-shadow(1px 3px 2px rgba(0, 0, 0, 0.15));
`;

const LinkText = styled.span`
  margin-top: 5px;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
`;

export const ProfileLink = ({
  children,
  external = false,
  icon,
  to,
  ...props
}) => (
  <Link
    {...props}
    as={external ? 'a' : RouterLink}
    href={external ? to : undefined}
    to={external ? undefined : to}
  >
    <LinkIcon as={icon} />
    <LinkText>{children}</LinkText>
  </Link>
);
