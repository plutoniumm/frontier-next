export default ( {
	render: [
		'@astrojs/markdown-remark',
		// {
		// 	syntaxHighlight: 'prism',
		// 	// If you are using shiki, here you can define a global theme and
		// 	shikiConfig: {
		// 		theme: 'github-dark',
		// 		langs: [],
		// 		wrap: false,
		// 	},
		// },
	],

	markdownOptions: {
		render: [
			'@astrojs/markdown-remark',
			{
				syntaxHighlight: 'shiki',
				shikiConfig: {
					theme: 'github-dark',
					wrap: true,
				},
			},
		],
	},

	vite: {},
} );
