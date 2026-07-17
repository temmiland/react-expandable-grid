/*
	Copyright 2024 Temmi Pietsch

	Permission is hereby granted, free of charge, to any person obtaining a copy of
	this software and associated documentation files (the “Software”), to deal in
	the Software without restriction, including without limitation the rights to use,
	copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
	Software, and to permit persons to whom the Software is furnished to do so,
	subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
	EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
	OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
	NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
	HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
	WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
	FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
	OTHER DEALINGS IN THE SOFTWARE.
*/

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
