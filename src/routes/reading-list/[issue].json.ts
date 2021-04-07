import type { Request, Response } from '@sveltejs/kit';
import path from 'path';
import fs from 'fs';
import grayMatter from 'gray-matter';
import marked from 'marked';

export function get({ params }: Request): Response {
	const { issue } = params;

	const post = fs.readFileSync(path.resolve('static/posts/reading-list/', `${issue}.md`), 'utf-8');
	const renderer = new marked.Renderer();

	const { data } = grayMatter(post);
	const html = marked(data.body, { renderer });

	if (html) {
		return {
			body: { post: { ...data, html } }
		};
	}
}
