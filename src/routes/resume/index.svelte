<script lang="ts">
  import Breadcrumb from '$lib/Breadcrumb.svelte';
  import Header from '$lib/Header.svelte';
  import Link from '$lib/Link.svelte';
  import Section from './_lib/Section.svelte';
  import Heading from './_lib/Heading.svelte';
  import Subheading from './_lib/Subheading.svelte';
  import SidebarHeading from './_lib/SidebarHeading.svelte';
</script>

<svelte:head>
  <title>Resume | Matt Turco</title>
  <meta
    name="description"
    content="Matt Turco's resume. Matt Turco is a front end engineer & design enthusiast in Denver, Colorado."
  />

  <link
    href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400&display=swap"
    rel="stylesheet"
  />
  <style>
    body {
      font-family: 'Lato', var(--font-base);
    }

    @media print {
      :root {
        height: 0;
        margin: 0.75cm 1cm;
        padding: 0;
        font-size: 9.5pt;
        color-adjust: exact;
      }

      @page {
        size: A4;
        margin: 0;
      }
    }
  </style>
</svelte:head>

<Breadcrumb title="Resume" href="/resume" />

<div class="header">
  <Header />
</div>

<main>
  <header>
    <h1 class="name">Matt Turco</h1>

    <ul class="contact">
      <li>Denver, CO</li>
      <li class="slash">
        <Link inheritColor external href="mailto:matt.turco@gmail.com">matt.turco@gmail.com</Link>
      </li>
      <li class="slash">
        <Link inheritColor external href="tel:4026305866">(402) 630-5866</Link>
      </li>
      <li class="slash"><Link inheritColor href="/">mturco.com</Link></li>
    </ul>
  </header>

  <Section title="Experience" primary>
    <div class="subsection">
      <Heading>Namely</Heading>

      <div class="flex baseline">
        <Subheading>Senior Front End Engineer, Tech Lead</Subheading>
        <div class="time-span slash">Mar 2019 – Present</div>
      </div>

      <div class="flex baseline">
        <Subheading>Front End Engineer</Subheading>
        <div class="time-span slash">May 2018 – Mar 2019</div>
      </div>

      <ul>
        <li>
          <p>
            <strong>Engineering</strong>
          </p>
          <ul>
            <li>
              Built 30% of Namely&apos;s design system (55 of 183 components), focusing on
              composability and accessibility. Emphasized the importance of semantic and predictable
              component APIs.
            </li>
            <li>
              Developed a state management library that greatly simplified building complex forms
              with branching logic, multi-page flows, input validation, and inline editing.
            </li>
            <li>
              Migrated monorepo CI system from Jenkins to Drone, reducing CI time by 67% (36 min →
              12 min). This increased team velocity and enabled other engineers to confidently make
              CI changes.
            </li>
          </ul>
        </li>
        <li>
          <p>
            <strong>Leadership</strong>
          </p>
          <ul>
            <li>
              Defined the vision and roadmap for the frontend platform. Led quarterly workshops to
              address tech debt and prototype new ideas.
            </li>
            <li>
              Established code standards and best practices. Codified these guidelines as an open
              source{' '}
              <Link external href="https://www.npmjs.com/package/@namely/eslint-config-namely">
                ESLint rule set</Link
              > to standardize code across the company.
            </li>
            <li>
              Onboarded and mentored 4 engineers. Explained best practices, reviewed code, offered
              role and career advice, and created opportunities for growth.
            </li>
          </ul>
        </li>
        <li>
          <p>
            <strong>Impact</strong>
          </p>
          <ul>
            <li>
              Leveled up the team as a whole by compiling <Link href="/reading-list"
                >weekly reading lists</Link
              >, presenting new technologies, and performing team code reviews. Created
              proof-of-concepts to demonstrate the feasibility of new ideas.
            </li>
            <li>
              Interviewed, hired, and mentored Namely&apos;s most diverse team of engineers. Helped
              establish a strong front end engineering culture.
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <div class="subsection">
      <Heading>Gallup</Heading>

      <div class="flex baseline">
        <Subheading>Front End Engineer</Subheading>
        <div class="time-span slash">Feb 2015 – Apr 2018</div>
      </div>

      <ul>
        <li>
          Created the charting library that renders all of Gallup&apos;s line chart graphics using
          JavaScript and SVG. Used that library to create an interactive data visualization for{' '}
          <Link
            external
            href="http://news.gallup.com/interactives/185273/presidential-job-approval-center.aspx"
          >
            exploring presidential approval ratings</Link
          >.
        </li>
        <li>Developed a component library that unifies Gallup&apos;s apps and marketing sites.</li>
        <li>
          Improved site performance by optimizing the critical rendering path, defering scripts,
          compressing assets, and reducing dependencies.
        </li>
        <li>Enhanced keyboard and screen reader accessibility to meet WCAG2 standard.</li>
        <li>Conducted user tests and presented findings to stakeholders.</li>
      </ul>
    </div>

    <div class="subsection">
      <Heading>Optimum Data</Heading>

      <div class="flex baseline">
        <Subheading>Software Engineer</Subheading>
        <div class="time-span slash">Nov 2012 – Feb 2015</div>
      </div>

      <ul>
        <li>
          Designed and developed a web app to surface critical order and inventory information from
          Microsoft Dynamics NAV. The app dramatically sped up order fulfillment time.
        </li>
      </ul>
    </div>
  </Section>

  <div class="divider" aria-hidden="true" />

  <Section title="Education">
    <SidebarHeading>Creighton University</SidebarHeading>
    <p>
      B.S. in Business Administration
      <br />
      Business Intelligence &amp; Analytics
    </p>
  </Section>

  <Section title="Technologies">
    <div class="subsection">
      <SidebarHeading>Web platform</SidebarHeading>
      <p>HTML, JavaScript, TypeScript, CSS, SVG</p>
    </div>

    <div class="subsection">
      <SidebarHeading>Other languages</SidebarHeading>
      <p>C#, PHP, SQL</p>
    </div>

    <div class="subsection">
      <SidebarHeading>Component frameworks</SidebarHeading>
      <p>React, Svelte, Vue</p>
    </div>

    <div class="subsection">
      <SidebarHeading>App frameworks</SidebarHeading>
      <p>Gatsby, CRA, SvelteKit, Next.js, Nuxt.js</p>
    </div>

    <div class="subsection">
      <SidebarHeading>Testing</SidebarHeading>
      <p>Jest, React Testing Library, Cypress, Chromatic, Lighthouse</p>
    </div>

    <div class="subsection">
      <SidebarHeading>Tooling</SidebarHeading>
      <p>Webpack, Babel, PostCSS, ESLint, Stylelint</p>
    </div>
  </Section>

  <Section title="Talks">
    <div class="subsection">
      <p class="nowrap">
        <Link external href="https://cross-component-communication.mturco.com/"
          >Cross Component Communication</Link
        >
        <br />
        React NYC &middot; 2020
      </p>
    </div>
  </Section>

  <Section title="Interests">
    <p>
      Here are some things I love to chat about: tech, basketball, design, the web, photography,
      and, of course, building cool things with code.
    </p>
  </Section>
</main>

<style lang="postcss">
  .header {
    @media print {
      display: none;
    }
  }

  main {
    --grid-line-color: var(--color-divider-hc);
    --section-item-gap: 1.5rem;

    display: grid;
    grid-template:
      'header' max-content
      'experience' max-content
      'education' max-content
      'technologies' max-content
      'talks' max-content
      'interests' max-content
      / 1fr;
    gap: 2rem;
    align-content: start;
    line-height: 1.5;
    margin: 0 auto;
    padding: 10vh 5vw;
    max-width: 64rem;

    @media print, (min-width: 60rem) {
      grid-template:
        'header header header' max-content
        'experience divider education' max-content
        'experience divider technologies' max-content
        'experience divider talks' max-content
        'experience divider interests' max-content
        'experience divider .' max-content
        / 1fr min-content min-content;
    }

    @media print {
      padding: 0;
      height: calc(11in - 1.5cm);
    }
  }

  header {
    grid-area: header;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: baseline;

    @media print, (min-width: 60rem) {
      flex-direction: row;
    }
  }

  .name {
    font: 700 2.5rem var(--font-heading);
    letter-spacing: 0.03em;
    margin: 0 0 1rem;
    line-height: 1;
    white-space: nowrap;
    color: var(--color-primary);

    @media print, (min-width: 60rem) {
      margin-bottom: 0;
    }
  }

  .contact {
    list-style: none;
    padding: 0;
    margin: 0;

    @media print, (min-width: 38rem) {
      display: inline-flex;
      align-items: baseline;
      flex-wrap: wrap;
    }

    & li {
      margin: 0;
      padding: 0;
    }
  }

  .slash::before {
    content: '';

    @media print, (min-width: 38rem) {
      content: '';
      display: inline-flex;
      vertical-align: middle;
      margin: 0 0.5rem 0 1.25rem;
      transform: rotateZ(30deg);
      height: 1.375rem;
      border-left: 2px solid var(--color-primary);
      transform-origin: top;
    }
  }

  .divider {
    grid-area: divider;
    display: none;
    border-left: 2px solid var(--color-divider-lc);

    @media print, (min-width: 60rem) {
      display: block;
    }
  }

  .subsection:not(:last-child) {
    margin-bottom: var(--section-item-gap);
  }

  .time-span {
    color: var(--color-text-lc);
    margin-bottom: 0.5rem;

    @media print, (min-width: 38rem) {
      margin-bottom: 0;
    }
  }

  .flex {
    @media print, (min-width: 38rem) {
      display: flex;
    }
  }

  .baseline {
    align-items: baseline;
  }

  .nowrap {
    white-space: nowrap;
  }

  p {
    margin: 0;

    &:not(:last-child) {
      margin-bottom: 0.375em;
    }
  }

  ul {
    padding-left: 1.5rem;
    margin: 0.25rem 0 0;
    list-style-type: circle;
  }

  li {
    margin-bottom: 0.75em;

    &:last-child {
      margin-bottom: 0;
    }
  }
</style>
