import type { RequestHandler } from '@sveltejs/kit';
import path from 'path';
import fs from 'fs';

import { getPost } from './_lib/utils';

export const get: RequestHandler = ({ params }) => {
	const id = Number(params.issue);
	const post = getPost(id);

	const hasNext = fs.existsSync(path.resolve('static/posts/reading-list/', `${id + 1}.md`));

	if (post) {
		return {
			body: {
				post,
				next: hasNext ? id + 1 : null,
				prev: id > 1 ? id - 1 : null
			}
		};
	}
};
