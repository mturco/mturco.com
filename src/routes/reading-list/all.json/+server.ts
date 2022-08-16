import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';

import { getAllPosts } from '../_lib/utils';

export const GET: RequestHandler = () => {
  const posts = getAllPosts();
  return json({ posts });
};
