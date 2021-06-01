export interface IPost {
	id: number;
	title: string;
	description: string;
	date: string;
	body: string;
	html: string;
	url: string;
	permalink: string;
	[key: string]: string | number | null;
}
