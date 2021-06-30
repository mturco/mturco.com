import type { RequestHandler } from '@sveltejs/kit';

import { getPost, getPreviousPostId, getNextPostId } from './_lib/utils';

export const get: RequestHandler = ({ params }) => {
  const id = Number(params.issue);
  const post = getPost(id);
  if (!post) return;

  const prev = getPreviousPostId(id);
  const next = getNextPostId(id);

  return {
    body: { post, next, prev },
  };
};
