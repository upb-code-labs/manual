import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site:"https://upb-code-labs.github.io", 
	base: "/manual",
	integrations: [
		starlight({
			title: 'Code Labs manual',
			defaultLocale: 'es', 
			locales: {
				root: {
					label: 'Español',
					lang: 'es',
				}
			},
			social: {
				github: 'https://github.com/upb-code-labs',
			},
			sidebar: [
				{
					label: 'Introduction',
					items: [
						{ label: 'Introduction', link: '/guides/introduction/' },
					]
				},
				{
					label: 'Usuarios (General)',
					items: [
						{label: 'Gestión de perfil de usuario', link: '/guides/users/profile-management'},
					]
				},
				{
					label: 'Administradores',
					items: [
						{ label: 'Gestión de cuentas con rol de administrador', link: '/guides/admins/admin-accounts-management' },
						{ label: 'Gestión de cuentas con rol de profesor', link: '/guides/admins/teacher-accounts-management' },
					]
				},
				{
					label: 'Profesores',
					items: [
						{ label: 'Gestión de cursos', link: '/guides/teachers/courses-management' },
						{ label: 'Gestión de rúbricas', link: '/guides/teachers/rubrics-management' },
						{ label: 'Gestión de laboratorios', link: '/guides/teachers/laboratories-management' },
						{ label: 'Gestión de notas', link: '/guides/teachers/grades-management' },
					]
				},
				{
					label: 'Estudiantes',
					items: [
						{ label: 'Gestión de cursos', link: '/guides/students/courses-management' },
						{ label: 'Gestión de laboratorios', link: '/guides/students/laboratories-management' },
						{ label: 'Gestión de notas', link: '/guides/students/grades-management' },
					]
				},
				{
					label: "Desarrolladores y/o mantenedores",
					items: [
						//{ label: 'Introduction', link: '/guides/introduction/' },
					]
				},
			],
		}),
	],
});
