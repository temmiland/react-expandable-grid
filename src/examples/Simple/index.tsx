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

import { ExpandableGrid } from '../../../lib/main';
import { ExpandableElement } from '../../../lib/components/ExpandableGrid';

type SimpleProps = {
	size: number,
	elements: number,
	fbJustifyContent: "space-between" | "space-around" | "space-evenly"
}

export const Simple = ({ size, elements, fbJustifyContent }: SimpleProps) => (
	<ExpandableGrid
		elements={ Array<ExpandableElement>(elements).fill({
			expandableElement: ({ currentIndex }) => (
				<div style={ {
					width: size,
					height: size,
					background: 'red',
					color: 'white',
					marginTop: 10
				} }>
					{ 'Expandable ' }
					{ currentIndex }
				</div>
			),
			expandedElement: ({ currentIndex, close }) => (
				<div style={ {
					width: '100%',
					height: size,
					background: 'blue',
					color: 'white',
					marginTop: 10
				} }>
					{ 'Expanded ' }
					{ currentIndex }
					<button onClick={ close }>{ 'Close' }</button>
				</div>
			)
		}) }
		expandableElementWidthInPx={ size }
		fbJustifyContent={ fbJustifyContent }
		defaultSelectedIndex={1}
	/>
);
