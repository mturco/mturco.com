import type { RequestHandler } from '@sveltejs/kit';

import { getAllPosts } from './_lib/utils';

export const get: RequestHandler = () => {
  const posts = getAllPosts();
  return { body: { posts } };
};
