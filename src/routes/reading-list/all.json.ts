import type { Response } from '@sveltejs/kit';
import path from 'path';
import fs from 'fs';
import grayMatter from 'gray-matter';
import marked from 'marked';

export function get(): Response {
	const renderer = new marked.Renderer();
	const posts = fs
		.readdirSync('static/posts/reading-list')
		.map((fileName) => {
			const post = fs.readFileSync(path.resolve('static/posts/reading-list', fileName), 'utf-8');
			const { data, content } = grayMatter(post);

			return Object.assign(data, {
				html: marked(content, { renderer }),
				id: Number(fileName.slice(0, fileName.lastIndexOf('.')))
			});
		})
		.sort((a, b) => b.id - a.id);

	return { body: { posts } };
}