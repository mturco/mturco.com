import { writable } from 'svelte/store';

export interface Breadcrumb {
  title: string;
  href: string;
}

export const createBreadcrumbsStore = () => {
  const { subscribe, update } = writable<Set<Breadcrumb>>(new Set());
  return {
    subscribe,
    toggle: (item: Breadcrumb) => {
      update((value) => {
        if (value.has(item)) {
          value.delete(item);
        } else {
          value.add(item);
        }
        return value;
      });
    },
  };
};
