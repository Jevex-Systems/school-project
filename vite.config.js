import { defineConfig } from 'vite';
import { glob } from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig({
	root: 'src',
	build: {
		outDir: '../dist',
		emptyOutDir: true,
		rollupOptions: {
			input: glob.sync('./src/*.html'),
			output: {
				entryFileNames: '[name].js',
				assetFileNames: '[name][extname]',
			},
		},
	},
	define: {
		global: 'window',
	},
	css: {
		devSourcemap: true,
		preprocessorOptions: {
			scss: {
				additionalData: `
				@use "/scss/variables.scss";
				@use "/scss/utils.scss";
				@use "/scss/helpers/functions.scss";
				@use "/scss/helpers/media.scss";
				@use "/scss/helpers/mixins.scss";
				`,
			},
		},
	},
	plugins: [injectHTML(), FullReload(['./src/**/**.html'])],
	server: {
		open: true,
	},
});
