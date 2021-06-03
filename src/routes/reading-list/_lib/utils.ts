import { format, parseISO } from 'date-fns';
import fs from 'fs';
import grayMatter from 'gray-matter';
import marked from 'marked';

import type { IPost } from './types';

const postsBasePath = 'static/posts/reading-list';

export const getPost = (slug: number | string): IPost => {
  const id = Number(slug);
  const fileContents = fs.readFileSync(`${postsBasePath}/${id}.md`, 'utf-8');
  const { data, content } = grayMatter(fileContents);

  return {
    id,
    title: data.title,
    description: data.description,
    date: data.date,
    html: marked(content),
    body: data.body,
    url: getPostUrl(id),
    permalink: getPostUrl(id, true),
  };
};

export const getAllPosts = (): IPost[] => {
  return fs
    .readdirSync(postsBasePath)
    .map((fileName) => getPost(fileName.replace(/\.md$/, '')))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export function formatPostDate(iso8601: string): string {
  const isoDateOnly = iso8601.replace(/T.*/, '');
  return format(parseISO(isoDateOnly), 'MMM d, y');
}

export function getPostUrl(id: number, permalink = false): string {
  const path = `/reading-list/${id}`;
  return permalink ? new URL(path, 'https://mturco.com').href : path;
}
