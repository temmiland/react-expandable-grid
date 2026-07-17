import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';
import pluginReact from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import { createNodeResolver, flatConfigs as importXFlatConfigs } from 'eslint-plugin-import-x';
import { configs as storybookConfigs } from 'eslint-plugin-storybook';

export default tseslint.config(
	{
		ignores: ['dist/**', 'storybook-static/**']
	},
	js.configs.recommended,
	...tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,
	pluginReact.configs.flat['jsx-runtime'],
	jsxA11y.flatConfigs.recommended,
	reactHooks.configs.flat['recommended-latest'],
	importXFlatConfigs.recommended,
	importXFlatConfigs.typescript,
	...storybookConfigs['flat/recommended'],
	reactRefresh.configs.vite,
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			}
		},
		settings: {
			react: {
				version: 'detect'
			},
			'import-x/resolver-next': [
				createNodeResolver({
					extensions: ['.js', '.jsx', '.ts', '.tsx', '.mjs', '.cjs', '.json']
				})
			]
		},
		rules: {
			'func-names': 0,
			'comma-dangle': [
				2,
				'never'
			],
			'no-console': 1,
			'max-len': [
				2,
				100
			],
			'import-x/no-extraneous-dependencies': 0,
			'no-param-reassign': 0,
			'no-unneeded-ternary': 0,
			'class-methods-use-this': 0,
			'no-plusplus': 0,
			'arrow-body-style': 0,
			'arrow-parens': 0,
			'no-lonely-if': 0,
			'no-nested-ternary': 0,
			'no-mixed-spaces-and-tabs': 2,
			'indent': [
				'error',
				'tab'
			],
			'no-irregular-whitespace': 'error',
			'no-trailing-spaces': 'error',
			'object-curly-newline': [
				'error',
				{
					ObjectExpression: {
						minProperties: 1
					},
					ObjectPattern: {
						multiline: true
					},
					ImportDeclaration: {
						multiline: true,
						minProperties: 5
					},
					ExportDeclaration: {
						multiline: true,
						minProperties: 5
					}
				}
			],
			'array-element-newline': [
				'error',
				'consistent'
			],
			'object-curly-spacing': [
				'error',
				'always'
			],
			'brace-style': [
				'error',
				'1tbs',
				{
					allowSingleLine: true
				}
			],
			'no-unused-expressions': 'off',
			'no-unused-vars': 1,
			'@typescript-eslint/no-unused-vars': 1,
			'react/jsx-curly-newline': [
				'error',
				{
					multiline: 'consistent',
					singleline: 'consistent'
				}
			],
			'react/prop-types': 'off',
			'react/jsx-one-expression-per-line': [
				2,
				{
					allow: 'single-child'
				}
			],
			'quotes': [
				'error',
				'single'
			],
			'react/display-name': 0,
			'react/jsx-curly-brace-presence': [
				'error',
				{
					props: 'always',
					children: 'always',
					propElementValues: 'always'
				}
			],
			'react/jsx-curly-spacing': [
				'error',
				{
					when: 'always',
					children: true
				}
			],
			'import-x/no-named-as-default': 'off'
		}
	}
);
