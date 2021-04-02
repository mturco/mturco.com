import React from 'react';

export const resume = {
  name: 'Matt Turco',
  location: 'Denver, CO',
  email: 'matt.turco@gmail.com',
  phone: '(402) 630-5866',
  website: {
    name: 'mturco.com',
    url: '/',
  },

  experience: [
    {
      company: 'Namely',
      roles: [
        {
          title: 'Senior Front End Engineer',
          from: '2019-03',
        },
        {
          title: 'Front End Engineer',
          from: '2018-05',
          to: '2019-03',
        },
      ],
      notes: [
        <>
          Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod
          in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat
        </>,
        <>
          Praesent dapibus, neque id cursus faucibus, tortor neque egestas
          augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui
          mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.
        </>,
        <>
          Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor,
          ultrices ut, elementum vulputate, nunc.
        </>,
        <>
          Sed adipiscing ornare risus. Morbi est est, blandit sit amet, sagittis
          vel, euismod vel, velit. Pellentesque egestas sem. Suspendisse commodo
          ullamcorper magna.
        </>,
      ],
    },

    {
      company: 'Gallup',
      roles: [{ title: 'Front End Engineer', from: '2015-02', to: '2018-04' }],
      notes: [
        <>
          Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod
          in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat
        </>,
        <>
          Praesent dapibus, neque id cursus faucibus, tortor neque egestas
          augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui
          mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.
        </>,
        <>
          Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor,
          ultrices ut, elementum vulputate, nunc.
        </>,
        <>
          Sed adipiscing ornare risus. Morbi est est, blandit sit amet, sagittis
          vel, euismod vel, velit. Pellentesque egestas sem. Suspendisse commodo
          ullamcorper magna.
        </>,
      ],
    },

    {
      company: 'Optimum Data',
      roles: [{ title: 'Software Engineer', from: '2012-11', to: '2015-02' }],
      notes: [
        <>
          Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod
          in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat
        </>,
        <>
          Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor,
          ultrices ut, elementum vulputate, nunc.
        </>,
      ],
    },
  ],

  skills: [
    {
      title: 'Engineering',
      notes: [
        <>Lorem ipsum dolor sit amet, consectetuer adipiscing</>,
        <>Aliquam tincidunt mauris eu risus</>,
        <>Vestibulum auctor dapibus neque</>,
      ],
    },
    {
      title: 'Leadership',
      notes: [
        <>Integer vitae libero ac risus egestas placerat</>,
        <>Vestibulum commodo felis quis tortor vitae</>,
        <>Ut aliquam sollicitudin leo risus</>,
      ],
    },
    {
      title: 'Collaboration',
      notes: [
        <>Cras iaculis ultricies nulla</>,
        <>Donec quis dui at dolor tempor interdum</>,
        <>Vivamus vestibulum ntulla nec ante</>,
      ],
    },
  ],

  education: [
    {
      name: 'Creighton University',
      degree: 'B.S. in Business Administration',
      major: 'Business Intelligence & Analytics',
    },
  ],

  tools: [
    {
      category: 'Web platform',
      items: ['HTML', 'JavaScript', 'TypeScript', 'CSS'],
    },
    {
      category: 'Component frameworks',
      items: ['React', 'Vue', 'Svelte'],
    },
    {
      category: 'App frameworks',
      items: ['Gatsby', 'CRA', 'Svelte Kit'],
    },
    {
      category: 'Testing',
      items: ['Jest', 'React Testing Library', 'Cypress', 'Chromatic'],
    },
    {
      category: 'Tooling',
      items: ['Webpack', 'Babel', 'PostCSS', 'ESLint', 'Stylelint'],
    },
  ],
};
