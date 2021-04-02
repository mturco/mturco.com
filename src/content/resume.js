import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
  color: var(--color-primary);
  text-decoration-color: transparent;
  text-decoration-thickness: 2px;
  text-underline-offset: 0.2em;
  transition: all 0.2s ease-out;

  :hover {
    text-decoration-color: currentColor;
  }
`;

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
          title: 'Senior Front End Engineer, Tech Lead',
          from: '2019-03',
        },
        {
          title: 'Front End Engineer',
          from: '2018-05',
          to: '2019-03',
        },
      ],
      notes: (
        <ul>
          <li>
            Morbi in sem quis dui placerat ornare. Pellentesque odio nisi,
            euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat
          </li>
          <li>
            Praesent dapibus, neque id cursus faucibus, tortor neque egestas
            augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam
            dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.
          </li>
          <li>
            Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor,
            ultrices ut, elementum vulputate, nunc.
          </li>
          <li>
            Sed adipiscing ornare risus. Morbi est est, blandit sit amet,
            sagittis vel, euismod vel, velit. Pellentesque egestas sem.
            Suspendisse commodo ullamcorper magna.
          </li>
        </ul>
      ),
    },

    {
      company: 'Gallup',
      roles: [{ title: 'Front End Engineer', from: '2015-02', to: '2018-04' }],
      notes: (
        <ul>
          <li>
            Wrote an SVG charting library from scratch; used it to build an
            interactive data visualization for{' '}
            <a href="http://news.gallup.com/interactives/185273/presidential-job-approval-center.aspx">
              exploring presidential approval ratings
            </a>
          </li>
          <li>
            Built a library of UI components used by Gallup&apos;s web apps and
            marketing sites
          </li>
          <li>
            Improved site performance by optimizing the critical rendering path,
            minimizing asset sizes, and reducing dependencies
          </li>
          <li>
            Enhanced keyboard and screen reader accessibility of the
            StrengthsQuest web app to obtain WCAG2 certification
          </li>
          <li>
            Conducted remote and in-person usability studies and presented
            findings to stakeholders
          </li>
        </ul>
      ),
    },

    {
      company: 'Optimum Data',
      roles: [{ title: 'Software Engineer', from: '2012-11', to: '2015-02' }],
      notes: (
        <ul>
          <li>
            Morbi in sem quis dui placerat ornare. Pellentesque odio nisi,
            euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat
          </li>
          <li>
            Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor,
            ultrices ut, elementum vulputate, nunc.
          </li>
        </ul>
      ),
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
