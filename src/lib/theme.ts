import { browser } from '$app/env';

type Theme = 'light' | 'dark';
const storageKey = 'prefersDark';

export function getThemePreference(): Theme {
	try {
		return JSON.parse(window.localStorage.getItem(storageKey)) ? 'dark' : 'light';
	} catch {
		return 'light';
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

	document.documentElement.classList.remove(`theme-${theme === 'light' ? 'dark' : 'light'}`);
	document.documentElement.classList.add(`theme-${theme}`);
}
