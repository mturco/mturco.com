import React from 'react';

import { Resume } from '../components';

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
      notes: [<>Hi</>, <>There</>],
    },

    {
      company: 'Gallup',
      roles: [{ title: 'Front End Engineer', from: '2015-02', to: '2018-04' }],
      notes: [
        <>
          Wrote an SVG charting library from scratch; used it to build an
          interactive data visualization for{' '}
          <Resume.Link href="http://news.gallup.com/interactives/185273/presidential-job-approval-center.aspx">
            exploring presidential approval ratings
          </Resume.Link>
        </>,
        <>
          Built a library of UI components used by Gallup's web apps and
          marketing sites
        </>,
        <>
          Improved site performance by optimizing the critical rendering path,
          minimizing asset sizes, and reducing dependencies
        </>,
        <>
          Enhanced keyboard and screen reader accessibility of the
          StrengthsQuest web app to obtain WCAG2 certification
        </>,
        <>
          Conducted remote and in-person usability studies and presented
          findings to stakeholders
        </>,
      ],
    },

    {
      company: 'Optimum Data',
      roles: [{ title: 'Software Engineer', from: '2012-11', to: '2015-02' }],
      notes: [
        <>
          Designed and developed a modern inventory and order management web app
          that interfaces with Microsoft Dynamics NAV using PHP and jQuery
        </>,
        <>
          Improved company workflows through automation and integrations with
          other software
        </>,
      ],
    },
  ],

  skills: [
    {
      title: 'Engineering',
      notes: [
        <>Creating components and composing applications from them</>,
        <>Developing and maintaining libraries with varied use cases</>,
        <>Building with modern frameworks (React, Vue, etc)</>,
        <>Configuring and using build tools (Webpack, Babel, etc)</>,
      ],
    },
    {
      title: 'Leadership',
      notes: [
        <>Leading agile scrum ceremonies</>,
        <>Maintaining repositories and reviewing peer contributions</>,
        <>Establishing and documenting coding standards and team processes</>,
        <>Mentoring junior developers</>,
      ],
    },
    {
      title: 'Domain Knowledge',
      notes: [
        <>
          <strong>Web platform:</strong> HTML, JavaScript, TypeScript, CSS, SVG
        </>,
        <>
          <strong>Component frameworks:</strong> React, Vue, Svelte
        </>,
        <>
          <strong>App frameworks:</strong> Gatsby, Next.js, CRA, Svelte Kit
        </>,
        <>
          <strong>Testing:</strong> Jest, React Testing Library, Cypress,
          Chromatic
        </>,
        <>
          <strong>Tooling:</strong> Webpack, Babel, PostCSS, ESLint, Stylelint
        </>,
      ],
    },
    {
      title: 'Collaboration',
      notes: [
        <>
          Partnering with UX designers to identify patterns, implement user
          interfaces, and provide technical insight
        </>,
        <>
          Communicating with project managers and product owners to define
          acceptance criteria and timelines
        </>,
      ],
    },
  ],

  education: [
    {
      name: 'Creighton University',
      degree: 'BSBA',
      major: 'Business Intelligence & Analytics',
    },
  ],
};
