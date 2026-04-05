<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    open?: boolean;
    summary: Snippet;
    children: Snippet;
  }

  let { open = $bindable(false), summary: summarySnippet, children }: Props = $props();

  let el = $state<HTMLDetailsElement>();
  let summary = $state<HTMLElement>();
  let content = $state<HTMLDivElement>();
  let detailsHeight = $state<number>(0);
  let closing = false;
  let opening = false;
  let animation: Animation | null = null;

  const animationOptions: KeyframeAnimationOptions = {
    duration: 500,
    easing: 'cubic-bezier(0.23, 1, 0.32, 1)',
  };

  function toggle(e: MouseEvent) {
    if (!el) return;
    e.preventDefault();
    el.style.overflow = 'hidden';

    if (closing || !open) {
      el.style.height = `${detailsHeight}px`;
      open = true;
      window.requestAnimationFrame(expand);
    } else if (opening || open) {
      collapse();
    }
  }

  function expand() {
    if (!el || !summary || !content) return;
    opening = true;
    if (animation) animation.cancel();

    animation = el.animate(
      { height: [`${detailsHeight}px`, `${summary.offsetHeight + content.offsetHeight}px`] },
      animationOptions,
    );
    animation.onfinish = () => cleanup(true);
    animation.oncancel = () => (opening = false);
  }

  function collapse() {
    if (!el || !summary) return;
    closing = true;
    if (animation) animation.cancel();

    animation = el.animate(
      { height: [`${detailsHeight}px`, `${summary.offsetHeight}px`] },
      animationOptions,
    );
    animation.onfinish = () => cleanup(false);
    animation.oncancel = () => (closing = false);
  }

  function cleanup(isOpen: boolean) {
    if (!el) return;
    open = isOpen;
    animation = null;
    closing = false;
    opening = false;
    el.style.height = '';
    el.style.overflow = '';
  }
</script>

<details {open} bind:this={el} bind:clientHeight={detailsHeight}>
  <summary onclick={toggle} bind:this={summary}>{@render summarySnippet()}</summary>
  <div class="content" bind:this={content}>{@render children()}</div>
</details>

<style lang="postcss">
  summary {
    cursor: pointer;
    list-style: none;
    border-radius: 8px;

    &:hover {
      background-color: var(--color-background-alt);
    }

    &::marker {
      display: none;
    }

    @media print {
      &:hover {
        background-color: transparent;
      }
    }
  }

  .content {
    display: flow-root;
  }
</style>
