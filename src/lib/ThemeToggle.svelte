<script lang="ts">
  import { browser } from '$app/env';
  import { applyThemePreference, getThemePreference, saveThemePreference } from './theme';

  function getSystemPreference() {
    if (!browser) return 'light';
    const { matches } = window.matchMedia('(prefers-color-scheme: dark)');
    return matches ? 'dark' : 'light';
  }

  let theme = getThemePreference() ?? getSystemPreference();
  function toggleTheme() {
    theme = theme === 'light' ? 'dark' : 'light';
    applyThemePreference(theme);
    saveThemePreference(theme);
  }
</script>

<button on:click={toggleTheme}>
  <svg viewBox="0 0 24 24">
    <path
      d="M12,18V6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,15.31L23.31,12L20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31Z"
    />
  </svg>
</button>

<style lang="postcss">
  button {
    position: relative;
    cursor: pointer;
    isolation: isolate;
    display: inline-flex;
    padding: 0.5rem 0.5rem;
    color: var(--color-text);
    font-size: 1rem;
    text-decoration: none;
    line-height: normal;
    transition: color 0.5s var(--ease-out-quint), background-color 0.5s var(--ease-out-quint);
    background-color: var(--color-background-alt);
    border-radius: 50%;
    border: 0;

    &:hover {
      color: var(--color-primary);
      background-color: var(--color-highlight);
    }

    &::after {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: inherit;
      transform: scale3d(1.2, 1.2, 1);
      border: 2px solid transparent;
      pointer-events: none;
      transition: border-color 0.5s var(--ease-out-quint), transform 0.5s var(--ease-out-quint);
    }

    &:hover::after {
      border-color: var(--color-primary);
      transform: none;
    }
  }

  svg {
    fill: currentColor;
    width: 1.5rem;
    height: 1.5rem;
  }
</style>
