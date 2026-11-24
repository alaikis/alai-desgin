import sveltePreprocess from 'svelte-preprocess';

export default {
  preprocess: sveltePreprocess.vitePreprocess ? sveltePreprocess.vitePreprocess() : sveltePreprocess(),
};
