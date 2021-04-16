import type { Response } from '@sveltejs/kit';
import path from 'path';
import fs from 'fs';
import grayMatter from 'gray-matter';
import marked from 'marked';

import { getPostUrl } from './_lib/utils';
import type { IPost } from './_lib/types';

export function get(): Response {
	const renderer = new marked.Renderer();
	const posts = fs
		.readdirSync('static/posts/reading-list')
		.map((fileName) => {
			const fileContents = fs.readFileSync(
				path.resolve('static/posts/reading-list', fileName),
				'utf-8'
			);
			const { data, content } = grayMatter(fileContents);
			const id = Number(fileName.slice(0, fileName.lastIndexOf('.')));

			const post: IPost = {
				title: data.title,
				date: data.date,
				body: data.body,
				html: marked(content, { renderer }),
				id,
				url: getPostUrl(id).href
			};

			return post;
		})
		.sort((a, b) => b.id - a.id);

	return { body: { posts } };
}
