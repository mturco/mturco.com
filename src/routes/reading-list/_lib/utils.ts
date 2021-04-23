import { format, parseISO } from 'date-fns';

export function formatPostDate(iso8601: string): string {
	const isoDateOnly = iso8601.replace(/T.*/, '');
	return format(parseISO(isoDateOnly), 'MMM d, y');
}

export function getPostUrl(id: number, permalink = false): string {
	const path = `/reading-list/${id}`;
	return permalink ? new URL(path, 'https://mturco.com').href : path;
}