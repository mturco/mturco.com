import { error } from '@sveltejs/kit';

export async function load({ fetch }) {
  const res = await fetch(`/reading-list/all.json`);
  const { posts } = await res.json();
  const [latestPost] = posts;

  if (res.ok) {
    return { latestPost };
  }

  throw error(500, 'Failed to load post');
}
