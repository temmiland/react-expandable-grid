import type { Preview } from '@storybook/react-vite';

const preview: Preview = {
	parameters: {
		options: {
			storySort: {
				order: ['Welcome', 'Examples', ['Simple', 'Gallery', 'Projects']]
			}
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		}
	}
};

export default preview;
