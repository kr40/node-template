module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es2021: true,
		node: true,
	},
	extends: ['eslint:recommended', 'google', 'plugin:import/recommended', 'prettier'],
	parserOptions: {
		ecmaVersion: 12,
	},
	rules: {
		'require-jsdoc': 'off',
		'no-unused-vars': 'warn',
	},
};
