import { browser } from '$app/env';

export type Theme = 'light' | 'dark' | null;
const storageKey = 'prefersDark';

export function getThemePreference(): Theme {
  try {
    const stored = JSON.parse(window.localStorage.getItem(storageKey));
    if (stored === null) return null;
    return stored ? 'dark' : 'light';
  } catch {
    return null;
  }
}

export function saveThemePreference(theme: Theme): void {
  try {
    window.localStorage.setItem(storageKey, JSON.stringify(theme === 'dark'));
  } catch {
    // ignore failure
  }
}

export function applyThemePreference(theme = getThemePreference()): void {
  if (!browser) return;
  document.documentElement.classList.toggle('theme-light', theme === 'light');
  document.documentElement.classList.toggle('theme-dark', theme === 'dark');
}
