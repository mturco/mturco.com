<script lang="ts">
  import Breadcrumb from '$lib/Breadcrumb.svelte';
  import Header from '$lib/Header.svelte';
  import Link from '$lib/Link.svelte';
  import Section from './_lib2/Section.svelte';
  import CompanyTitle from './_lib/CompanyTitle.svelte';
  import JobTitle from './_lib/JobTitle.svelte';
  import SidebarHeading from './_lib/SidebarHeading.svelte';
  import TimeSpan from './_lib/TimeSpan.svelte';
</script>

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
</svelte:head>

<Breadcrumb title="Resume" href="/resume" />

<div class="header">
  <Header />
</div>

<main>
  <div class="sidebar-bg" />
  <header>
    <h1 class="name">Matt Turco</h1>

    <p class="tagline">Software Engineer in Boulder</p>

    <ul class="contact">
      <li>
        <Link inheritColor external href="mailto:matt.turco@gmail.com">matt.turco@gmail.com</Link>
      </li>
      <li><Link inheritColor external href="tel:4026305866">(402) 630-5866</Link></li>
      <li><Link inheritColor href="/">mturco.com</Link></li>
    </ul>
  </header>

  <Section title="Experience">
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

      <ul>
        <li>
          Defined the vision and roadmap for the frontend platform. Established code standards and
          best practices. Led quarterly workshops to address tech debt and prototype new ideas.
        </li>
        <li>
          Compiled <Link href="/reading-list">weekly reading lists</Link>, presented new
          technologies, and led group code review sessions. Established a strong engineering team
          culture.
        </li>
        <li>
          Onboarded and mentored 4 engineers. Explained best practices, reviewed code, offered role
          and career advice, and created opportunities for growth.
        </li>
        <li>
          Built design system components, focusing on composability and accessibility. Emphasized
          the importance of semantic and predictable component APIs.
        </li>
        <li>
          Developed a state management library that greatly simplified building complex forms with
          branching logic, multi-page flows, input validation, and inline editing.
        </li>
      </ul>
    </div>

    <div class="subsection">
      <CompanyTitle>Gallup</CompanyTitle>

      <div class="role">
        <JobTitle>Front End Engineer</JobTitle>
        <TimeSpan from="2015-02" to="2018-04" />
      </div>

      <ul>
        <li>
          Created the charting library that renders all of Gallup&apos;s line chart graphics using
          JavaScript and SVG. Built an <Link
            external
            href="http://news.gallup.com/interactives/185273/presidential-job-approval-center.aspx"
            >interactive data visualization</Link
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
    </div>

    <div class="subsection">
      <CompanyTitle>Optimum Data</CompanyTitle>

      <div class="role">
        <JobTitle>Software Engineer</JobTitle>
        <TimeSpan from="2012-11" to="2015-02" />
      </div>

      <ul>
        <li>
          Designed and developed a web app to surface critical order and inventory information from
          Microsoft Dynamics NAV. Once rolled out, the app dramatically sped up order fulfillment
          time.
        </li>
      </ul>
    </div>
  </Section>

  <Section title="Technologies">
    <div class="subsection">
      <SidebarHeading>Web platform</SidebarHeading>
      <p>JS/TS, CSS, HTML, SVG</p>
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
    --grid-line-color: var(--color-primary);
    --section-item-gap: 2.5rem;
    --sidebar-bg-color: hsl(200, 75%, 95%);

    display: grid;
    grid-template:
      'header' auto
      'experience' auto
      'technologies' auto
      / 1fr;
    align-content: start;
    line-height: 1.5;
    margin: 0 auto;
    padding: 10vh 0;
    max-width: 64rem;

    @media print, (min-width: 60rem) {
      grid-template:
        'header experience' max-content
        'technologies experience' 1fr
        / 20rem 1fr;
    }

    @media print {
      margin: 0;
      padding: 0;
      height: 100vh;
    }
  }

  header {
    grid-area: header;
    display: flex;
    flex-direction: column;
    align-items: baseline;

    @media print, (min-width: 60rem) {
      padding: var(--section-item-gap) var(--section-item-gap) 0;
    }
  }

  .name {
    font: 800 3rem var(--font-name);
    letter-spacing: 0.03em;
    margin: 0 0 2rem;
    line-height: 1;
    color: var(--color-primary);
  }

  .tagline {
    font-weight: 700;
    margin-bottom: 1rem;
  }

  .contact {
    list-style: none;
    padding: 0;
    margin: 0;

    & li {
      margin: 0;
      padding: 0;
    }
  }

  .sidebar-bg {
    @media print, (min-width: 60rem) {
      grid-row: 1 / -1;
      grid-column: 1 / 2;
      background-color: var(--sidebar-bg-color);
    }
  }

  .subsection:not(:last-child) {
    margin-bottom: 1.5rem;
  }

  .role {
    align-items: baseline;

    @media print, (min-width: 38rem) {
      display: flex;
    }
  }

  p {
    margin: 0 0 0.375em;

    &:last-child {
      margin-bottom: 0;
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

  @media print {
    :root {
      margin: 0;
      padding: 0;
      font-size: 9.5pt;
      color-adjust: exact;
    }
  }
</style>
