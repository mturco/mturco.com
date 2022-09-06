<script lang="ts">
  import ThemeToggle from '$lib/ThemeToggle.svelte';
  import EmailIcon from './_index/EmailIcon.svelte';
  import GithubIcon from './_index/GithubIcon.svelte';
  import LinkedinIcon from './_index/LinkedinIcon.svelte';
  import ResumeIcon from './_index/ResumeIcon.svelte';
  import ReadingListIcon from './_index/ReadingListIcon.svelte';
  import TwitterIcon from './_index/TwitterIcon.svelte';
  import PageLink from './_index/PageLink.svelte';
  import ProfileLink from './_index/ProfileLink.svelte';
  import Section from './_index/Section.svelte';
  import PostPreview from './reading-list/_lib/PostPreview.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<svelte:head>
  <title>Matt Turco</title>
  <meta
    name="description"
    content="Matt Turco is a software engineer & design enthusiast in Boulder, Colorado."
  />
</svelte:head>

<span class="theme-toggle">
  <ThemeToggle />
</span>

<main>
  <div class="container">
    <header>
      <h1>Matt Turco</h1>
      <h2>software engineer <span class="mobile-break">&amp; design enthusiast</span></h2>
    </header>

    <div class="profile-links">
      <ProfileLink external href="https://github.com/mturco">
        <GithubIcon slot="icon" />
        <span slot="label">GitHub</span>
      </ProfileLink>

      <ProfileLink external href="https://twitter.com/matt_turco">
        <TwitterIcon slot="icon" />
        <span slot="label">Twitter</span>
      </ProfileLink>

      <ProfileLink external href="https://linkedin.com/in/mattturco">
        <LinkedinIcon slot="icon" />
        <span slot="label">LinkedIn</span>
      </ProfileLink>

      <ProfileLink external href="mailto:matt.turco@gmail.com">
        <EmailIcon slot="icon" />
        <span slot="label">Email</span>
      </ProfileLink>
    </div>

    <div class="section-container">
      <Section title="Pages">
        <ul class="page-links">
          <li>
          <PageLink href="/resume">
            <ResumeIcon slot="icon" />
            <span slot="label">Resume</span>
          </PageLink>
          </li>

          <li>
          <PageLink href="/reading-list">
            <ReadingListIcon slot="icon" />
            <span slot="label">Reading List</span>
          </PageLink>
          </li>
        </ul>
      </Section>
    </div>

    <div class="section-container" hidden>
      <Section title="Recent Posts">
        <PostPreview post={data.latestPost} highlight tag="Reading List" />
      </Section>
    </div>
  </div>
</main>

<style lang="postcss">
  .theme-toggle {
    position: absolute;
    top: 0;
    right: 0;
    padding: 16px;
  }

  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 18vh 5vw;
    margin: 0 auto;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 50rem;
  }

  h1 {
    color: var(--color-primary);
    font: 800 3em var(--font-name);
    margin: 0 0 0.5rem -0.1ch;
  }

  h2 {
    font-size: 1.5em;
    font-weight: 300;
    text-transform: lowercase;
    line-height: 1.5;
    color: var(--color-text-lc);
    margin: 1rem 0 2rem;
  }

  .mobile-break {
    display: block;

    @media (min-width: 30rem) {
      display: inline;
    }
  }

  .profile-links {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -0.5rem 0rem;
  }

  .section-container {
    margin-top: 5rem;
  }

  .page-links {
    display: flex;
    flex-wrap: wrap;
    margin: -0.75rem;
    list-style: none;
    padding: 0;
  }
</style>
