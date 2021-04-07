import type { Response } from '@sveltejs/kit';
import path from 'path';
import fs from 'fs';
import grayMatter from 'gray-matter';
import marked from 'marked';

export function get(): Response {
	const posts = fs.readdirSync('static/posts/reading-list');
	const latest = posts
		.map((filename) => Number(filename.slice(0, filename.lastIndexOf('.'))))
		.sort()
		.pop();
	const post = fs.readFileSync(path.resolve('static/posts/reading-list/', `${latest}.md`), 'utf-8');
	const renderer = new marked.Renderer();

	const { data, content } = grayMatter(post);
	const html = marked(content, { renderer });

	if (html) {
		return {
			body: { post: { ...data, html } }
		};
	}
}
