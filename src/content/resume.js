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
            <p>
              <strong>Engineering</strong>
            </p>
            <ul>
              <li>
                Built much of Namely&apos;s design system, focusing on
                composability and accessibility. Emphasized the importance of
                semantic and predictable component APIs.
              </li>
              <li>
                Developed a state management library that greatly simplified
                building complex forms with branching logic, multi-page flows,
                input validation, and inline editing.
              </li>
              <li>
                Migrated monorepo CI system from Jenkins to Drone, reducing CI
                time by 67% (36 min → 12 min). This increased team velocity and
                enabled other engineers to confidently make CI changes.
              </li>
            </ul>
          </li>
          <li>
            <p>
              <strong>Leadership</strong>
            </p>
            <ul>
              <li>
                Defined the vision and roadmap for the frontend platform. Led
                quarterly workshops to address tech debt or prototype new ideas.
              </li>
              <li>
                Defined code standards and best practices. Codified these
                standards and guidelines as an open source{' '}
                <a href="https://www.npmjs.com/package/@namely/eslint-config-namely">
                  ESLint rule set
                </a>
                .
              </li>
              <li>
                Mentored 4 engineers by guiding them in their work, providing
                code review, offering role and career advice, and creating
                opportunities for them to grow.
              </li>
            </ul>
          </li>
          <li>
            <p>
              <strong>Impact</strong>
            </p>
            <ul>
              <li>
                Strove to share knowledge and level up the team as a whole.
                Frequently presented new ideas and technologies, compiled weekly
                reading lists, created proof-of-concepts to demonstrate
                feasibility of new ideas.
              </li>
              <li>
                Identified common patterns in application code and developed
                encompassing solutions at the platform level.
              </li>
            </ul>
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
            Developed a component library that unifies Gallup&apos;s apps and
            marketing sites.
          </li>
          <li>
            Improved site performance by optimizing the critical rendering path,
            defering scripts, compressing assets, and reducing dependencies.
          </li>
          <li>
            Enhanced keyboard and screen reader accessibility to meet WCAG2
            standard.
          </li>
          <li>Conducted user tests and presented findings to stakeholders.</li>
        </ul>
      ),
    },

    {
      company: 'Optimum Data',
      roles: [{ title: 'Software Engineer', from: '2012-11', to: '2015-02' }],
      notes: (
        <ul>
          <li>
            Designed and developed a web app to surface critical order and
            inventory information from Microsoft Dynamics NAV. The app
            dramatically sped up order fulfillment time.
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
      items: ['React', 'Svelte', 'Vue'],
    },
    {
      category: 'App frameworks',
      items: ['Gatsby', 'CRA', 'Svelte Kit'],
    },
    {
      category: 'Testing',
      items: [
        'Jest',
        'React Testing Library',
        'Cypress',
        'Chromatic',
        'Lighthouse',
      ],
    },
    {
      category: 'Tooling',
      items: ['Webpack', 'Babel', 'PostCSS', 'ESLint', 'Stylelint'],
    },
  ],

  talks: [
    {
      title: 'Cross Component Communication',
      url: 'https://cross-component-communication.mturco.com',
      event: 'React NYC',
      year: 2020,
    },
  ],

  about: (
    <p>
      Here are some things I&apos;ll talk to anyone about anytime: tech,
      basketball, design, the web, photography, and of course, building cool
      things with code.
    </p>
  ),
};
