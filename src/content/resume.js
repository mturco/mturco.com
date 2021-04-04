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
            Created the charting library that renders all of Gallup&apos;s line
            chart graphics using JavaScript and SVG. Using that library, created
            an interactive data visualization for{' '}
            <a href="http://news.gallup.com/interactives/185273/presidential-job-approval-center.aspx">
              exploring presidential approval ratings
            </a>
            .
          </li>
          <li>
            Developed a library of UI components that powers Gallup&apos;s web
            apps and marketing sites.
          </li>
          <li>
            Improved site performance by optimizing the critical rendering path,
            minimizing asset sizes, and reducing dependencies.
          </li>
          <li>
            Enhanced keyboard and screen reader accessibility of the
            StrengthsQuest web app to obtain WCAG2 certification.
          </li>
          <li>
            Conducted usability studies and presented findings to stakeholders.
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
            Designed and developed a modern inventory and order management web
            app that interfaces with Microsoft Dynamics NAV using PHP and
            jQuery.
          </li>
          <li>
            Improved company workflows through automation and integrations with
            other software.
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
      items: ['HTML', 'JavaScript', 'TypeScript', 'CSS', 'SVG'],
    },
    {
      category: 'Other languages',
      items: ['C#', 'PHP', 'SQL'],
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

  about: (
    <>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
        Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
        Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
      </p>
    </>
  ),
};
