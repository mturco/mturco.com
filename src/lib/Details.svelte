<script lang="ts">
  export let open = false;

  let el: HTMLDetailsElement;
  let summary: HTMLElement;
  let content: HTMLDivElement;
  let detailsHeight: number;
  let closing = false;
  let opening = false;
  let animation: Animation;

  const animationOptions: KeyframeAnimationOptions = {
    duration: 500,
    easing: 'cubic-bezier(0.23, 1, 0.32, 1)',
  };

  function toggle(e: MouseEvent) {
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
    open = isOpen;
    animation = null;
    closing = false;
    opening = false;
    el.style.height = '';
    el.style.overflow = '';
  }
</script>

<details {open} bind:this={el} bind:clientHeight={detailsHeight}>
  <summary on:click={toggle} bind:this={summary}><slot name="summary" /></summary>
  <div class="content" bind:this={content}><slot /></div>
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
