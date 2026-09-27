// @ts-check
import { defineConfig, fontProviders } from 'astro/config'; //AI CODE

// https://astro.build/config
export default defineConfig({
	fonts: [ //AI CODE
		{ //AI CODE
			provider: fontProviders.google(), //AI CODE
			name: 'Noto Sans Mono', //AI CODE
			cssVariable: '--font-noto-sans-mono', //AI CODE
			weights: [400, 700], //AI CODE
			styles: ['normal', 'italic'], //AI CODE
			fallbacks: ['monospace'], //AI CODE
		}, //AI CODE
	], //AI CODE
});
