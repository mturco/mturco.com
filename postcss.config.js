import nesting from 'postcss-nesting';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

const config = {
  plugins: [
    nesting(),
    autoprefixer(),
    cssnano({
      preset: 'default',
    }),
  ],
};

export default config;
