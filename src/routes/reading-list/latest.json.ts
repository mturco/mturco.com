import type { Response } from '@sveltejs/kit';
import path from 'path';
import fs from 'fs';
import grayMatter from 'gray-matter';
import marked from 'marked';

import { getPostUrl } from './_lib/utils';
import type { IPost } from './_lib/types';

export function get(): Response {
	const posts = fs.readdirSync('static/posts/reading-list');
	const latest = posts
		.map((filename) => Number(filename.slice(0, filename.lastIndexOf('.'))))
		.sort()
		.pop();
	const fileContents = fs.readFileSync(
		path.resolve('static/posts/reading-list/', `${latest}.md`),
		'utf-8'
	);
	const renderer = new marked.Renderer();

	const { data, content } = grayMatter(fileContents);
	const html = marked(content, { renderer });

	if (html) {
		const post: IPost = {
			title: data.title,
			date: data.date,
			body: data.body,
			html,
			id: latest,
			url: getPostUrl(latest).href
		};
		return { body: { post } };
	}
}
