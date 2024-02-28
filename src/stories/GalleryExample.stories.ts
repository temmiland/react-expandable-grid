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
import { Gallery } from '../examples/Gallery';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: 'Examples/Gallery',
	component: Gallery,
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
					+ '    elements={ Array<ExpandableElement>(${elements}).fill({\n'
					+ '        expandableElement: ({ currentIndex }) => (\n'
					+ '            <div style={ {\n'
					+ '                width: ${size},\n'
					+ '                height: ${size},\n'
					+ '                margin: \'20px 0px\',\n'
					+ '                color: \'white\',\n'
					+ '                background: \'url(\' + imageUrls[\n'
					+ '                    currentIndex! % imageUrls.length\n'
					+ '                ].url + \') 0% 0% / cover\',\n'
					+ '            } } />\n'
					+ '        ),\n'
					+ '        expandedElement: ({ currentIndex, close }) => (\n'
					+ '            <div style={ {\n'
					+ '                width: \'100%\',\n'
					+ '                height: ${size},\n'
					+ '                background: \'rgb(217, 217, 217)\',\n'
					+ '                margin: \'0 0 10px 0\',\n'
					+ '                display: \'flex\',\n'
					+ '                justifyContent: \'center\',\n'
					+ '            } }>\n'
					+ '                <div style={{\n'
					+ '                    width: \'30%\',\n'
					+ '                    padding: \'25px 0\',\n'
					+ '                    display: \'flex\',\n'
					+ '                    justifyContent: \'center\'\n'
					+ '                }}>\n'
					+ '                    <div style={ {\n'
					+ '                        width: ${size / 1.25},\n'
					+ '                        height: ${size / 1.25},\n'
					+ '                        background: \'url(\' + imageUrls[\n'
					+ '                            currentIndex! % imageUrls.length\n'
					+ '                        ].url + \') 0% 0% / cover\',\n'
					+ '                    } } />\n'
					+ '                </div>\n'
					+ '                <div style={{\n'
					+ '                    width: \'70%\',\n'
					+ '                    padding: \'15px 20px 25px 0\',\n'
					+ '                    fontFamily: \'Helvetica Neue, Helvetica, Arial, sans-serif\',\n'
					+ '                    color: \'black\',\n'
					+ '                }}>\n'
					+ '                    <p style={ { fontWeight: 800, fontSize: 14 } }>{ imageUrls[currentIndex! % imageUrls.length].title }</p>\n'
					+ '                    <p style={ { fontWeight: 400, fontSize: 13 } }>{ imageUrls[currentIndex! % imageUrls.length].desc }</p>\n'
					+ '                    <p style={ { margin: \'20px 0\', fontSize: 13 } }>\n'
					+ '                        <a style={{\n'
					+ '                            textDecoration: \'none\',\n'
					+ '                            padding: \'0.5rem\',\n'
					+ '                            border: \'1px solid #333333\',\n'
					+ '                            color: \'black\'\n'
					+ '                        }} href={ imageUrls[currentIndex! % imageUrls.length].href }>\n'
					+ '                            { \'Link\' }\n'
					+ '                        </a>\n'
					+ '                        <a style={{\n'
					+ '                            textDecoration: \'none\',\n'
					+ '                            padding: \'0.5rem\',\n'
					+ '                            margin: \'1rem\',\n'
					+ '                            border: \'1px solid #333333\',\n'
					+ '                            color: \'black\',\n'
					+ '                            cursor: \'pointer\'\n'
					+ '                        }} onClick={ close }>\n'
					+ '                            { \'Close\' }\n'
					+ '                        </a>\n'
					+ '                    </p>\n'
					+ '                </div>\n'
					+ '            </div>\n'
					+ '        )\n'
					+ '    }) }\n'
					+ '    expandableElementWidthInPx={ ${size} }\n'
					+ '    fbJustifyContent=\'${fbJustifyContent}\'\n'
					+ '/>\n'
			}
		}
	}
} satisfies Meta<typeof Gallery>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Standard: Story = {
	args: {
		size: 250,
		elements: 15,
		fbJustifyContent: 'space-between'
	}
};