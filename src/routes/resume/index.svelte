<script lang="ts">
  import Breadcrumb from '$lib/Breadcrumb.svelte';
  import Header from '$lib/Header.svelte';
  import Section from './_lib/Section.svelte';
  import CompanyTitle from './_lib/CompanyTitle.svelte';
  import JobTitle from './_lib/JobTitle.svelte';
  import SidebarHeading from './_lib/SidebarHeading.svelte';
  import TimeSpan from './_lib/TimeSpan.svelte';

  function handleBeforePrint() {
    Array.from(document.querySelectorAll('details')).forEach((el) => {
      el.setAttribute('open', '');
      el.querySelector('summary')?.setAttribute('hidden', '');
    });
  }

  function handleAfterPrint() {
    Array.from(document.querySelectorAll('details')).forEach((el) => {
      el.removeAttribute('open');
      el.querySelector('summary')?.removeAttribute('hidden');
    });
  }
</script>

<svelte:window on:beforeprint={handleBeforePrint} on:afterprint={handleAfterPrint} />

<svelte:head>
  <title>Resume | Matt Turco</title>
  <meta
    name="description"
    content="Matt Turco's resume. Matt Turco is a software engineer & design enthusiast in Boulder, Colorado."
  />

  <link
    href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400&display=swap"
    rel="stylesheet"
  />
  <style>
    @media print {
      :root {
        height: 0;
        margin: 0.875cm 1cm;
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
      <li>Boulder, CO</li>
      <li class="slash">
        <a class="inherit-color" rel="external" href="mailto:matt.turco@gmail.com"
          >matt.turco@gmail.com</a
        >
      </li>
      <li class="slash"><a class="inherit-color" href="/">mturco.com</a></li>
    </ul>
  </header>

  <Section title="Experience" primary>
    <div class="subsection">
      <CompanyTitle>Google</CompanyTitle>

      <div class="role">
        <JobTitle>Senior Software Engineer</JobTitle>
        <TimeSpan from="2021-08" />
      </div>
    </div>

    <div class="subsection">
      <CompanyTitle>Namely</CompanyTitle>

      <div class="role">
        <JobTitle>Senior Software Engineer, Tech Lead</JobTitle>
        <TimeSpan from="2019-03" to="2021-08" />
      </div>

      <div class="role">
        <JobTitle>Software Engineer</JobTitle>
        <TimeSpan from="2018-05" to="2019-03" />
      </div>

      <details>
        <summary>Details</summary>
        <ul>
          <li>
            Defined the vision and roadmap for the front end platform. Established code standards
            and best practices. Led quarterly workshops to address tech debt and prototype new
            ideas.
          </li>
          <li>
            Compiled <a href="/reading-list">weekly reading lists</a>, presented new technologies,
            and led group code review sessions. Established a strong engineering team culture.
          </li>
          <li>
            Onboarded and mentored 4 engineers. Explained best practices, reviewed code, offered
            role and career advice, and created opportunities for growth.
          </li>
          <li>
            Built design system components, focusing on composability and accessibility. Emphasized
            the importance of semantic and predictable component APIs.
          </li>
          <li>
            Developed a state management library that greatly simplified building complex forms with
            conditional fields, multi-page flows, input validation, and inline editing.
          </li>
        </ul>
      </details>
    </div>

    <div class="subsection">
      <CompanyTitle>Gallup</CompanyTitle>

      <div class="role">
        <JobTitle>Front End Engineer</JobTitle>
        <TimeSpan from="2015-02" to="2018-04" />
      </div>

      <details>
        <summary>Details</summary>
        <ul>
          <li>
            Created the charting library that renders all of Gallup&apos;s line chart graphics using
            JavaScript and SVG. Built an <a
              rel="external"
              href="http://news.gallup.com/interactives/185273/presidential-job-approval-center.aspx"
              >interactive data visualization</a
            > on top of it.
          </li>
          <li>
            Developed a UI library and integrated it into Gallup's custom CMS to enable dynamic
            content on marketing pages.
          </li>
          <li>
            Improved keyboard navigation and screen reader accessibility for WCAG2 certification.
          </li>
        </ul>
      </details>
    </div>

    <div class="subsection">
      <CompanyTitle>Optimum Data</CompanyTitle>

      <div class="role">
        <JobTitle>Software Engineer</JobTitle>
        <TimeSpan from="2012-11" to="2015-02" />
      </div>

      <details>
        <summary>Details</summary>
        <ul>
          <li>
            Designed and developed a web app to surface critical order and inventory information
            from Microsoft Dynamics NAV. Once rolled out, the app dramatically sped up order
            fulfillment time.
          </li>
        </ul>
      </details>
    </div>
  </Section>

  <div class="divider" aria-hidden="true" />

  <Section title="Technologies">
    <div class="subsection">
      <SidebarHeading>Web platform</SidebarHeading>
      <p>TypeScript, CSS, HTML, SVG</p>
    </div>

    <div class="subsection">
      <SidebarHeading>Other languages</SidebarHeading>
      <p>Java, C#, PHP, SQL</p>
    </div>

    <div class="subsection">
      <SidebarHeading>Component frameworks</SidebarHeading>
      <p>React, Svelte, Lit, Vue</p>
    </div>

    <div class="subsection">
      <SidebarHeading>App frameworks</SidebarHeading>
      <p>Next, SvelteKit, Astro, Nuxt, CRA</p>
    </div>

    <div class="subsection">
      <SidebarHeading>Testing</SidebarHeading>
      <p>Jest, React Testing Library, Cypress, Chromatic, Lighthouse</p>
    </div>

    <div class="subsection">
      <SidebarHeading>Tooling</SidebarHeading>
      <p>Webpack, Babel, PostCSS, ESLint, Stylelint, Prettier</p>
    </div>
  </Section>

  <!-- <Section title="Talks">
    <div class="subsection">
      <p class="nowrap">
        <a rel="external" href="https://cross-component-communication.mturco.com/"
          >Cross Component Communication</a
        >
        <br />
        React NYC &middot; 2020
      </p>
    </div>
  </Section> -->
</main>

<style lang="postcss">
  :global(body) {
    font-family: 'Lato', var(--font-base);
  }

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
      'technologies' max-content
      /* 'talks' max-content */
      / 1fr;
    gap: 2rem 2.5rem;
    align-content: start;
    line-height: 1.5;
    margin: 0 auto;
    padding: 10vh 5vw;
    max-width: 64rem;

    @media print, (min-width: 60rem) {
      grid-template:
        'header header header' max-content
        'experience divider technologies' max-content
        /* 'experience divider talks' max-content */
        'experience divider .' max-content
        / 1fr min-content 26ch;
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
    font: 800 2.5rem var(--font-name);
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

  .inherit-color {
    color: inherit;
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

  .role {
    align-items: baseline;

    @media print, (min-width: 38rem) {
      display: flex;
    }
  }

  p {
    margin: 0;

    &:not(:last-child) {
      margin-bottom: 0.375em;
    }
  }

  ul {
    padding-left: 1.5rem;
    margin: 0.5rem 0 0;
    list-style-type: circle;
  }

  li {
    margin-bottom: 0.75em;

    &:last-child {
      margin-bottom: 0;
    }
  }

  details {
    @media print {
      display: block;
    }
  }

  summary {
    cursor: pointer;
    user-select: none;
    color: var(--color-primary);
  }

  :global([hidden]) {
    display: none;
  }
</style>
