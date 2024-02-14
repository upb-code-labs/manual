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
				{
					label: 'Users (General)',
					items: [
						{ label: 'Profile management', link: '/guides/users/profile-management' },
					]
				},
				{
					label: 'Admins',
					items: [
						// { label: 'Introduction', link: '/guides/introduction/' },
					]
				},
				{
					label: 'Teachers',
					items: [
						{ label: 'Courses management', link: '/guides/teachers/courses-management' },
						{ label: 'Rubrics management', link: '/guides/teachers/rubrics-management' },
					]
				},
				{
					label: 'Students',
					items: [
						//{ label: 'Introduction', link: '/guides/introduction/' },
					]
				},
				{
					label: 'Maintainers',
					items: [
						//{ label: 'Introduction', link: '/guides/introduction/' },
					]
				},
			],
		}),
	],
});
