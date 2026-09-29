// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// code in blog posts stays plain black and white like the rest of the site // AI CODE
	markdown: { syntaxHighlight: false }, // AI CODE
	fonts: [
		{
			provider: fontProviders.google(),
			name: 'Noto Sans Mono',
			cssVariable: '--font-noto-sans-mono',
			weights: [400, 700],
			styles: ['normal', 'italic'],
			fallbacks: ['monospace'],
		},
	],
});
