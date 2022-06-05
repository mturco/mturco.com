<div>
  <slot />
</div>

<style lang="postcss">
  div {
    line-height: 1.7;
  }

  div :global(h1),
  div :global(h2),
  div :global(h3),
  div :global(h4),
  div :global(h5),
  div :global(h6) {
    margin: 1.75em 0 0.5em;
    font-weight: 700;
  }

  div :global(h1) {
    font-size: 2.5em;
  }

  div :global(h2) {
    font-size: 1.75em;
  }

  div :global(h3) {
    font-size: 1.5em;
  }

  div :global(h4) {
    font-size: 1.25em;
  }

  div :global(h5) {
    font-size: 1.125em;
  }

  div :global(h6) {
    font-size: 1em;
  }

  div :global(p) {
    margin: 0.875em 0;
  }

  div :global(ul) {
    margin: 1em 0;
    padding: 0 0 0 2em;
  }

  div :global(li ul) {
    margin: 0.5em 0 0 0;
  }

  div :global(li) {
    margin-bottom: 0.5em;
  }

  div :global(table) {
    border-collapse: collapse;
    border-spacing: 0;
  }

  div :global(thead) {
    border-bottom: 2px solid var(--color-divider-lc);
  }

  div :global(tbody tr) {
    border-bottom: 1px solid var(--color-divider-lc);
  }

  div :global(td),
  div :global(th) {
    padding: 0.25em 0.75em;
  }

  div :global(td:first-of-type),
  div :global(th:first-of-type) {
    padding-left: 0;
  }

  div :global(td:last-of-type),
  div :global(th:last-of-type) {
    padding-right: 0;
  }

  div :global(th) {
    text-align: start;
  }

  div :global(blockquote) {
    position: relative;
    margin: 1.25rem 1rem;
    padding: 0 1rem 0 1.5rem;
    color: var(--color-text-lc);
  }

  div :global(blockquote::after) {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 5px;
    background-color: var(--color-divider-lc);
    border-radius: 5px;
  }

  div :global(code) {
    background-color: var(--color-background-alt);
    border-radius: 3px;
    color: var(--red-500);
    padding: 0.125rem 0.25rem;
    overflow-wrap: break-word;
    word-wrap: break-word;
    font-family: var(--font-mono);
    font-size: 0.875em;
  }

  div :global(pre code) {
    display: block;
    padding: 0.5em 1em;
  }

  div :global(hr) {
    background-image: repeating-linear-gradient(
      -45deg,
      var(--color-divider-lc),
      var(--color-divider-lc) 4px,
      transparent 4px,
      transparent 8px
    );
    border: 0;
    height: 3px;
    margin: 2em 0;
  }

  div :global(summary) {
    cursor: pointer;
    width: fit-content;
    font-size: 0.875em;
    font-weight: bold;
  }

  div :global(summary:hover) {
    color: var(--color-primary);
  }

  div :global(del) {
    text-decoration-thickness: 2px;
  }
</style>
