import { browser } from '$app/environment';

export type Theme = 'light' | 'dark';
const storageKey = 'prefersDark';

export function getThemePreference(): Theme | null {
  if (!browser) return null;

  try {
    const stored = window.localStorage.getItem(storageKey);
    if (stored === null) return null;
    const parsed = JSON.parse(stored);
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
