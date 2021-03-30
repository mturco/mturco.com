import React from 'react';
import styled, { css } from 'styled-components';

import { useProgressiveImage } from '@hooks';

const baseUrl = '//res.cloudinary.com/mturco/image/upload';

// https://cloudinary.com/documentation/image_transformation_reference
const parseOptions = (options, overrides = {}) =>
  Object.entries({ ...options, ...overrides })
    .map(([key, value]) => `${key}_${value}`)
    .join(',');

const Image = styled.img`
  object-fit: fill;
  transition: transform 0.3s, filter 0.3s;

  ${(props) =>
    props['data-type'] === 'preview' &&
    css`
      filter: blur(1vw);
      transform: scale3d(1.1, 1.1, 1);
    `}
`;

export const CloudinaryImage = ({ id, options, ...props }) => {
  const src = `${baseUrl}/${parseOptions(options, {
    dpr: '2.0',
    f: 'auto',
    q: 'auto:best',
  })}/${id}`;
  return <Image {...props} src={src} />;
};

export const CloudinaryImageProgressive = ({ id, options, ...props }) => {
  const [type, src] = useProgressiveImage([
    [
      'preview',
      `${baseUrl}/${parseOptions(options, {
        f: 'auto',
        q: 'auto:low',
        w: 20,
      })}/${id}`,
    ],
    [
      'full',
      `${baseUrl}/${parseOptions(options, {
        dpr: '2.0',
        f: 'auto',
        q: 'auto:best',
      })}/${id}`,
    ],
  ]);
  return <Image {...props} src={src} data-type={type} />;
};
