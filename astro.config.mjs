export default ( {
	render: [
		'@astrojs/markdown-remark',
		{
			// Pick a syntax highlighter. Can be 'prism' (default), 'shiki' or false to disable any highlighting.
			syntaxHighlight: 'prism',
			// If you are using shiki, here you can define a global theme and
			// add custom languages.
			shikiConfig: {
				theme: 'github-dark',
				langs: [],
				wrap: false,
			},
		},
	],

	markdownOptions: {
		render: [
			'@astrojs/markdown-remark',
			{
				// Pick a syntax highlighter. Can be 'prism' (default), 'shiki' or false to disable any highlighting.
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
