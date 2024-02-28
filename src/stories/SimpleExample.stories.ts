/*
	Copyright 2024 Tom Pietsch

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

import type { Meta, StoryObj } from '@storybook/react';
import { Simple } from '../examples/Simple';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: 'Examples/Simple',
	component: Simple,
	tags: ['autodocs'],
	argTypes: {
		fbJustifyContent: {
			options: ['space-between', 'space-around', 'space-evenly'],
			control: {
				type: 'select'
			},
		},
	},
	parameters: {
		docs: {
			source: {
				code: '<ExpandableGrid\n'
					+ '    elements={ Array<ExpandableElement>(15).fill({\n'
					+ '        expandableElement: ({ currentIndex }) => (\n'
					+ '            <div style={ {\n'
					+ '                width: 300,\n'
					+ '                height: 300,\n'
					+ '                background: \'red\',\n'
					+ '                color: \'white\',\n'
					+ '                marginTop: 10\n'
					+ '            } }>\n'
					+ '                { \'Expandable \' }\n'
					+ '                { currentIndex }\n'
					+ '            </div>\n'
					+ '        ),\n'
					+ '        expandedElement: ({ currentIndex, close }) => (\n'
					+ '            <div style={ {\n'
					+ '                width: \'100%\',\n'
					+ '                height: 300,\n'
					+ '                background: \'blue\',\n'
					+ '                color: \'white\',\n'
					+ '                marginTop: 10\n'
					+ '            } }>\n'
					+ '                { \'Expanded \' }\n'
					+ '                { currentIndex }\n'
					+ '                <button onClick={ close }>{ \'Close\' }</button>\n'
					+ '            </div>\n'
					+ '        )\n'
					+ '    }) }\n'
					+ '    expandableElementWidthInPx={ 300 }\n'
					+ '    fbJustifyContent=\'space-between\'\n'
					+ '/>\n'
			}
		}
	}
} satisfies Meta<typeof Simple>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Standard: Story = {
	args: {
		size: 150,
		elements: 15,
		fbJustifyContent: 'space-between'
	}
};