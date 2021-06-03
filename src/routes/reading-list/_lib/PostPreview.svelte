<script lang="ts">
  import type { IPost } from './types';
  import { formatPostDate } from './utils';

  type Size = 'normal' | 'large';

  export let post: IPost;
  export let highlight = false;
  export let size: Size = 'normal';
  export let tag: string = undefined;
</script>

<article class:highlight class={size} class:has-tag={tag}>
  <a href={post.url} data-tag={tag}>
    <h1>
      <span class="title">{post.title}</span>
      <span class="slash">/</span>
      <span class="date">{formatPostDate(post.date)}</span>
    </h1>
    {#if post.description}
      <p class="description">{post.description}</p>
    {/if}
  </a>
</article>

<style lang="postcss">
  a {
    display: block;
    color: unset;
    text-decoration: unset;
    line-height: 1.6;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    transition: background-color 0.5s var(--ease-out-quint);

    &:hover {
      background-color: var(--color-background-alt);
    }
  }

  h1 {
    font-weight: 700;
    font-weight: 800;
    font-size: 2rem;
    margin: 0;
  }

  .title {
    color: var(--color-primary);
  }

  .slash {
    font-weight: 400;
    margin: 0 0.5ch 0 0.125ch;
    color: var(--color-divider-lc);
  }

  .date {
    font-weight: 400;
    font-size: 0.625em;
    color: var(--color-text-lc);
  }

  .description {
    margin: 0.25rem 0 0.5rem;
  }

  .highlight {
    & a {
      position: relative;
      padding: 1rem 1.5rem;
      border: 2px solid var(--color-divider-lc);
      transition: border-color 0.5s var(--ease-out-quint);

      &:hover {
        border-color: var(--color-primary);
        background-color: transparent;
      }
    }
  }

  .has-tag {
    & a {
      &::after {
        content: attr(data-tag);
        position: absolute;
        top: 0;
        right: 0;
        padding: 0.375rem 0.625rem 0.5rem 0.75rem;
        line-height: 1;
        background-color: var(--color-divider-lc);
        border-bottom-left-radius: 8px;
        font-size: 0.625rem;
        letter-spacing: 0.15em;
        text-transform: uppercase;
        font-weight: 600;
        transition: background-color 0.5s var(--ease-out-quint), color 0.5s var(--ease-out-quint);
      }

      &:hover::after {
        background-color: var(--color-primary);
        color: white;
      }
    }
  }

  .large {
    & h1 {
      font-size: 3rem;
    }

    & .date {
      font-size: 0.5em;
    }
  }
</style>
