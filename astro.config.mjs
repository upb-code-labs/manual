import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Code Labs manual',
			social: {
				github: 'https://github.com/upb-code-labs',
			},
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Introduction', link: '/guides/introduction/' },
					]
				},
				
			],
		}),
	],
});
