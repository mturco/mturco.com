import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
  const res = await fetch(`/reading-list/all.json`);
  const { posts } = await res.json();
  const [latest, ...previousPosts] = posts;

  if (res.ok) {
    return { latest, previousPosts };
  }

  throw error(500, 'Failed to load post');
};
