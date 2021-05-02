const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const nesting = require('postcss-nesting').default;

const mode = process.env.NODE_ENV;
const dev = mode === 'development';

module.exports = {
	plugins: [
		autoprefixer,
		nesting,

		!dev &&
			cssnano({
				preset: 'default'
			})
	]
};
