module.exports = {
	env: {
		node: true,
		es6: true,
		browser: true,
		es2021: true
	},
	settings: {
		react: {
			version: 'detect'
		}
	},
	extends: ['plugin:react/recommended', 'standard-with-typescript', 'eslint-config-prettier', 'prettier'],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: './tsconfig.json',
		ecmaFeatures: {
			tsx: true,
			modules: true,
			experimentalObjectRestSpread: true
		}
	},
	plugins: ['react'],
	rules: {
		'react/display-name': 'off',
		'react/no-unescaped-entities': 'off',
		'import/no-anonymous-default-export': 'off',

		'lines-around-comment': [
			'error',
			{
				beforeLineComment: true,
				beforeBlockComment: true,
				allowBlockStart: true,
				allowClassStart: true,
				allowObjectStart: true,
				allowArrayStart: true
			}
		],

		'newline-before-return': 'error',

		'import/newline-after-import': [
			'error',
			{
				count: 1
			}
		],

		'padding-line-between-statements': [
			'error',
			{ blankLine: 'always', prev: ['export'], next: ['*'] },
			{ blankLine: 'always', prev: ['*'], next: ['multiline-const', 'multiline-let', 'multiline-var', 'export'] }
		]
	}
}
