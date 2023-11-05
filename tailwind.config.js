/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{vue,js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				fire: '#F16439',
				charcoal: '#1F231D',
				sun: '#FCC906',
			}
		},
	},
	plugins: [],
}
