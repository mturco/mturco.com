<script lang="ts">
  import { onMount } from 'svelte';
  import Breadcrumb from '$lib/Breadcrumb.svelte';
  import Header from '$lib/Header.svelte';
  import Section from './_lib2/Section.svelte';
  import TimeSpan from './_lib2/TimeSpan.svelte';
  import ExperienceItem from './_lib2/ExperienceItem.svelte';
  import JobTitle from './_lib/JobTitle.svelte';
  import SidebarHeading from './_lib/SidebarHeading.svelte';

  let printing = false;

  onMount(() => {
    window.addEventListener('beforeprint', () => (printing = true));
    window.addEventListener('afterprint', () => (printing = false));
  });
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

  <style>
    @media print {
      :root {
        margin: 0;
        padding: 0;
        font-size: 9.5pt !important;
        color-adjust: exact;
      }
    }
  </style>
</svelte:head>

<Breadcrumb title="Resume" href="/resume" />

<div class="header">
  <Header />
</div>

<main>
  <div class="sidebar-bg" />
  <header>
    <h1 class="name">Matt Turco</h1>
    <p class="tagline">Software Engineer in Boulder, CO</p>

    <ul class="contact">
      <li>
        <a class="inherit-color" rel="external" href="mailto:matt.turco@gmail.com"
          >matt.turco@gmail.com</a
        >
      </li>
      {#if printing}
        <li><a class="inherit-color" rel="external" href="tel:4026305866">(402) 630-5866</a></li>
        <li><a class="inherit-color" href="/">mturco.com</a></li>
      {/if}
    </ul>
  </header>

  <Section title="Experience" className="content">
    <ExperienceItem company="Google" placeholder>
      <div class="role" slot="roles">
        <JobTitle>Senior Software Engineer</JobTitle>
        <TimeSpan from="2021-08" />
      </div>
    </ExperienceItem>

    <ExperienceItem company="Namely" open={printing}>
      <div slot="roles">
        <div class="role">
          <JobTitle>Senior Software Engineer, Tech Lead</JobTitle>
          <TimeSpan from="2019-03" to="2021-08" />
        </div>

        <div class="role">
          <JobTitle>Software Engineer</JobTitle>
          <TimeSpan from="2018-05" to="2019-03" />
        </div>
      </div>

      <div slot="content">
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
      </div>
    </ExperienceItem>

    <ExperienceItem company="Gallup" open={printing}>
      <div slot="roles">
        <div class="role">
          <JobTitle>Front End Engineer</JobTitle>
          <TimeSpan from="2015-02" to="2018-04" />
        </div>
      </div>

      <div slot="content">
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
      </div>
    </ExperienceItem>

    <ExperienceItem company="Optimum Data" open={printing}>
      <div slot="roles">
        <div class="role">
          <JobTitle>Software Engineer</JobTitle>
          <TimeSpan from="2012-11" to="2015-02" />
        </div>
      </div>

      <div slot="content">
        <ul>
          <li>
            Designed and developed a web app to surface critical order and inventory information
            from Microsoft Dynamics NAV. Once rolled out, the app dramatically sped up order
            fulfillment time.
          </li>
        </ul>
      </div>
    </ExperienceItem>
  </Section>

  <Section title="Technologies" className="content">
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
      <p>Next, SvelteKit, Astro, Nuxt</p>
    </div>

    <div class="subsection">
      <SidebarHeading>Testing</SidebarHeading>
      <p>React Testing Library, Cypress, Chromatic, Lighthouse</p>
    </div>

    <div class="subsection">
      <SidebarHeading>Tooling</SidebarHeading>
      <p>Webpack, Babel, PostCSS, ESLint, Stylelint, Prettier</p>
    </div>
  </Section>
</main>

<style lang="postcss">
  .header {
    @media print {
      display: none;
    }
  }

  main {
    --grid-line-color: var(--color-primary);
    --section-item-gap: 2.5rem;
    --sidebar-bg-color: hsl(200, 75%, 95%);
    --sidebar-bg-color-dark: hsl(200, 10%, 17%);

    display: grid;
    grid-template:
      'header' auto
      'experience' auto
      'technologies' auto
      / 1fr;
    align-content: start;
    line-height: 1.5;
    margin: 0 auto;
    padding: 4vh 1rem;
    max-width: 40rem;
    font-family: 'Lato', var(--font-base);

    @media screen and (min-width: 60rem) {
      grid-template:
        'header header' max-content
        'experience technologies' max-content
        / 1fr 20rem;
      max-width: 64rem;
    }

    @media print {
      grid-template:
        'header experience' max-content
        'technologies experience' 1fr
        / 20rem 1fr;
      max-width: 64rem;
    }

    @media print {
      margin: 0;
      padding: 0;
      height: 100vh;
    }

    @media (prefers-color-scheme: dark) {
      --sidebar-bg-color: var(--sidebar-bg-color-dark);
    }
  }

  :global(.theme-dark) main {
    --sidebar-bg-color: var(--sidebar-bg-color-dark);
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
    font: 800 2.5rem var(--font-name);
    letter-spacing: 0.03em;
    margin: 0.5rem 0 1rem;
    line-height: 1;
    color: var(--color-primary);

    @media print {
      margin-bottom: 2.5rem;
    }
  }

  .tagline {
    font-weight: 700;
    margin: 0;

    @media print {
      margin: 1rem 0;
    }
  }

  .contact {
    list-style: none;
    padding: 0;
    margin: 0;

    & li {
      margin: 0;
      padding: 0;

      &::before {
        display: none;
      }
    }
  }

  .inherit-color {
    color: inherit;
  }

  .sidebar-bg {
    @media print {
      grid-row: 1 / -1;
      grid-column: 1 / 2;
      background-color: var(--sidebar-bg-color);
    }
  }

  .subsection:not(:last-child) {
    margin-bottom: 1.25rem;
  }

  .role {
    align-items: baseline;

    @media print, (min-width: 32rem) {
      display: flex;
    }
  }

  :global(.content) {
    & p {
      margin: 0 0 0.375em;

      &:last-child {
        margin-bottom: 0;
      }
    }

    & ul {
      padding-left: 1.5rem;
      margin: 0.5rem 0 0;
      list-style-type: circle;
    }

    & li {
      margin-bottom: 0.75em;
      position: relative;

      &:last-child {
        margin-bottom: 0;
      }

      &::marker {
        content: '';
        display: none;
      }

      &::before {
        content: '❯';
        color: var(--color-primary);
        position: absolute;
        font-size: 0.875em;
        line-height: 1.5rem;
        left: -1rem;
      }
    }
  }

  :global([hidden]) {
    display: none;
  }
</style>
