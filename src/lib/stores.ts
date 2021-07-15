import { writable } from 'svelte/store';

export interface Breadcrumb {
  title: string;
  href: string;
}

export const createBreadcrumbsStore = () => {
  const { subscribe, update } = writable<Set<Breadcrumb>>(new Set());
  return {
    subscribe,
    add: (item: Breadcrumb) => {
      update((value) => {
        value.add(item);
        return value;
      });
    },
    remove: (item: Breadcrumb) => {
      update((value) => {
        value.delete(item);
        return value;
      });
    },
  };
};
