import { error } from '@sveltejs/kit';

export async function load({ params, fetch }) {
  const res = await fetch(`/reading-list/${params.issue}.json`);
  const { post, next, prev } = await res.json();

  if (res.ok) {
    return { post, next, prev };
  }

  throw error(500, 'Failed to load post');
}
