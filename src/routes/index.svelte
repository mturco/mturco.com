<script context="module" lang="ts">
  export async function load({ fetch }) {
    const res = await fetch(`/reading-list/all.json`);
    const { posts } = await res.json();
    const [latestPost] = posts;

    if (res.ok) {
      return { props: { latestPost } };
    }

    return {
      status: res.status,
      error: new Error('Failed to load post'),
    };
  }
</script>

<script lang="ts">
  import ThemeToggle from '$lib/ThemeToggle.svelte';
  import EmailIcon from './_index/EmailIcon.svelte';
  import GithubIcon from './_index/GithubIcon.svelte';
  import LinkedinIcon from './_index/LinkedinIcon.svelte';
  import ReadingListIcon from './_index/ReadingListIcon.svelte';
  import ResumeIcon from './_index/ResumeIcon.svelte';
  import TwitterIcon from './_index/TwitterIcon.svelte';
  import ProfileLink from './_index/ProfileLink.svelte';
  import Section from './_index/Section.svelte';
  import PostPreview from './reading-list/_lib/PostPreview.svelte';

  export let latestPost;
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
  <header>
    <h1>Matt Turco</h1>
    <h2>software engineer <span class="mobile-break">&amp; design enthusiast</span></h2>
  </header>

  <div class="links">
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

    <ProfileLink href="/reading-list">
      <ReadingListIcon slot="icon" />
      <span slot="label">Reading List</span>
    </ProfileLink>

    <ProfileLink href="/resume">
      <ResumeIcon slot="icon" />
      <span slot="label">Resume</span>
    </ProfileLink>
  </div>

  <div class="recent">
    <Section title="Recent Posts">
      <PostPreview post={latestPost} highlight tag="Reading List" />
    </Section>
  </div>
</main>

<style lang="postcss">
  .theme-toggle {
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem;
  }

  main {
    min-height: 100vh;
    padding: 18vh 5vw;
    margin: 0 auto;
    max-width: 50rem;
  }

  h1 {
    color: var(--color-primary);
    font: 700 3em Montserrat, var(--font-base);
    margin: 0 0 0.5rem -0.1ch;
  }

  h2 {
    font-size: 1.5em;
    font-weight: 300;
    text-transform: lowercase;
    line-height: 1.5;
    color: var(--color-text-lc);
  }

  .mobile-break {
    display: block;

    @media (min-width: 30rem) {
      display: inline;
    }
  }

  .links {
    display: flex;
    flex-wrap: wrap;
    margin: 3rem -0.75rem -0.75rem;
  }

  .recent {
    margin-top: 11rem;
  }
</style>
