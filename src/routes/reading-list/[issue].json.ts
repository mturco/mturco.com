import type { Request, Response } from '@sveltejs/kit';
import path from 'path';
import fs from 'fs';
import grayMatter from 'gray-matter';
import marked from 'marked';

import { getPostUrl } from './_lib/utils';
import type { IPost } from './_lib/types';

export function get({ params }: Request): Response {
	const { issue } = params;

	const post = fs.readFileSync(path.resolve('static/posts/reading-list/', `${issue}.md`), 'utf-8');
	const renderer = new marked.Renderer();

	const { data, content } = grayMatter(post);
	const html = marked(content, { renderer });

	if (html) {
		const id = Number(issue);
		const post: IPost = {
			title: data.title,
			date: data.date,
			body: data.body,
			html,
			id,
			url: getPostUrl(id),
			permalink: getPostUrl(id, true)
		};
		return { body: { post } };
	}
}
