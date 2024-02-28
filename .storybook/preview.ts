import type { Preview } from '@storybook/react';

const preview: Preview = {
	parameters: {
		options: {
			storySort: {
			  order: ['Welcome', 'Examples', [ 'Simple', 'Gallery', 'Projects' ]],
			}
		},
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
};

export default preview;
