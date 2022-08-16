<script lang="ts">
  import PostPreview from './_lib/PostPreview.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<svelte:head>
  <title>Reading List | Matt Turco</title>
  <meta name="description" content="Matt Turco's weekly reading list on software and design." />
</svelte:head>

<main>
  <header>
    <h1>Reading List</h1>
    <p>
      Weekly-ish list of articles, blog posts, tweets, talks, projects, etc that I found interesting
      or learned something from. Usually related to web development, software, or design in some way
      but occasionally general interest. Not all content is necessarily fresh—I share things as I
      find them!
    </p>

    <p>With that said, here's the most recent reading list. Enjoy!</p>
  </header>

  <div class="latest">
    <PostPreview post={data.latest} highlight size="large" tag="Most Recent" />
  </div>

  <h2>Previous Reading Lists</h2>

  <div class="previous">
    {#each data.previousPosts as post}
      <PostPreview {post} />
    {/each}
  </div>
</main>

<style>
  h1 {
    font-weight: 700;
    font-size: 1.5em;
    margin: 0.5em 0;
  }

  h2 {
    font-weight: 700;
    font-size: 0.875em;
    margin: 0.5em 0;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  .latest {
    margin: 3rem 0 7rem;
  }

  .previous {
    margin: 1rem -1.5rem;
  }
</style>
