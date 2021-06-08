module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				paleWhite: {
					DEFAULT: '#f7f7f7',
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
