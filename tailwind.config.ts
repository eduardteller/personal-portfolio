import type { Config } from 'tailwindcss';

export default {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			keyframes: {
				comet: {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(110vw) ' },
				},
			},
			animation: {
				comet: 'comet 1s linear forwards',
			},
			fontFamily: {
				thunder: ['Thunder', 'sans-serif'],
			},
		},
	},
	plugins: [],
} satisfies Config;
