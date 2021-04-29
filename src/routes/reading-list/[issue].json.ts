import type { Request, Response } from '@sveltejs/kit';
import path from 'path';
import fs from 'fs';
import grayMatter from 'gray-matter';
import marked from 'marked';

import { getPostUrl } from './_lib/utils';
import type { IPost } from './_lib/types';

export function get({ params }: Request): Response {
	const { issue } = params;
	const id = Number(issue);

	const post = fs.readFileSync(path.resolve('static/posts/reading-list/', `${id}.md`), 'utf-8');
	const hasNext = fs.existsSync(path.resolve('static/posts/reading-list/', `${id + 1}.md`));
	const renderer = new marked.Renderer();

	const { data, content } = grayMatter(post);
	const html = marked(content, { renderer });

	if (html) {
		const post: IPost = {
			title: data.title,
			date: data.date,
			body: data.body,
			html,
			id,
			url: getPostUrl(id),
			permalink: getPostUrl(id, true)
		};
		return {
			body: {
				post,
				next: hasNext ? id + 1 : null,
				prev: id > 1 ? id - 1 : null
			}
		};
	}
}
