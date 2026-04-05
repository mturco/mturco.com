import { writable } from 'svelte/store';
import type { Readable } from 'svelte/store';

export interface Breadcrumb {
  title: string;
  href: string;
}

export interface BreadcrumbsStore extends Readable<Set<Breadcrumb>> {
  add: (item: Breadcrumb) => void;
  remove: (item: Breadcrumb) => void;
}

export const createBreadcrumbsStore = (): BreadcrumbsStore => {
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
