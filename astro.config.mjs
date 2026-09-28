// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
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
