/*
	Copyright 2024 Temmi Pietschchch

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

import React, { useState } from 'react';
import useElementWidth from '../../hooks/useElementWidth';

/**
 * Represents an expandable element with its associated expanded element.
 * @typedef {Object} ExpandableElement
 * @property {React.FC<{ currentIndex: number | undefined }>} expandableElement - The component for
 *     the expandable element.
 * @property {React.FC<{ currentIndex: number | undefined, close: () => void }>} expandedElement
 *     - The component for the expanded element.
 */
export type ExpandableElement = {
	expandableElement: React.FC<{
		currentIndex: number | undefined
	}>;
	expandedElement: React.FC<{
		currentIndex: number | undefined,
		close: () => void
	}>;
};

/**
 * Props for the ExpandableGrid component.
 * @typedef {Object} ExpandableGridProps
 * @property {ExpandableElement[]} elements - Array of expandable elements.
 * @property {number} expandableElementWidthInPx - Width of each expandable element in pixels.
 * @property {'space-between' | 'space-around' | 'space-evenly'} [fbJustifyContent='space-between']
 *     - Optional prop for flexbox justify content property.
 * @property {number} defaultSelectedIndex - Optional; default selection of an element with index
 */
export type ExpandableGridProps = {
  elements: ExpandableElement[];
  expandableElementWidthInPx: number;
  fbJustifyContent?: 'space-between' | 'space-around' | 'space-evenly';
  defaultSelectedIndex?: number | undefined
};

/**
 * A grid component that renders a collection of expandable elements.
 * @param {ExpandableGridProps} props - Props for the ExpandableGrid component.
 * @returns {React.ReactElement} - JSX element representing the ExpandableGrid component.
 */
export const ExpandableGrid: React.FC<ExpandableGridProps> = ({
	elements,
	expandableElementWidthInPx,
	fbJustifyContent: flexboxJustifyContent = 'space-between',
	defaultSelectedIndex = undefined,
}: ExpandableGridProps): React.ReactElement => {

	const [ width, elemReference ] = useElementWidth();

	// + 1 to correct the internal counting
	const [ selectedIndex, setSelectedIndex ] = useState<number | undefined>(
		defaultSelectedIndex! + 1
	);

	const maxExpandedElementsPerRow = Math.floor(width / expandableElementWidthInPx);

	const totalRows = Math.ceil(elements.length / maxExpandedElementsPerRow);

	if (selectedIndex !== undefined && selectedIndex > elements.length) {
		setSelectedIndex(1);
	}

	const handleClick = (index: number | undefined) => {
		setSelectedIndex(selectedIndex === index ? undefined : index);
	};

	const renderExpandableElement = (index: number) => {
		const ExpandableComponent = elements[index - 1].expandableElement;

		return (
			<div
				className={"expandable expandable-" + index}
				key={ 'expandable-' + index }
				onClick={ () => handleClick(index) }
			>
				<ExpandableComponent
					currentIndex={ index }
				/>
			</div>
		);
	};

	const renderExpandedElement = (index: number) => {
		const ExpandedComponent = elements[index - 1].expandedElement;

		return (
			<div
				className={"expanded expanded-" + index}
				style={ {
					display: selectedIndex ? 'block' : 'none',
					width: '100%'
				} }
			>
				<div key={ 'expanded-' + index }>
					<ExpandedComponent
						currentIndex={ selectedIndex }
						close={ () => handleClick(undefined) }
					/>
				</div>
			</div>
		);
	};

	return (
		<div
			className={"expandable-grid"}
			ref={elemReference}
			style={ {
				display: 'flex',
				flexWrap: 'wrap',
				justifyContent: flexboxJustifyContent,
			} }
		>
			{
				elements.map((_, i) => {
					const isLastTile = i + 1 === elements.length;
					const selectedExpandedElementRow = (
						Math.ceil(selectedIndex! / maxExpandedElementsPerRow)
					);
					const isLastExpandedElementInSelectedRow = (
						maxExpandedElementsPerRow * selectedExpandedElementRow === i + 1
					);
					const isLastRow = selectedExpandedElementRow === totalRows;

					// Renders when in the current iteration, the ExpandedElement to render is the
					// last one in a selected row or one located in the last row.
					if (isLastExpandedElementInSelectedRow || (isLastRow && isLastTile)) {
						return (
							<>
								{ renderExpandableElement(i + 1) }
								{ renderExpandedElement(i + 1) }
							</>
						);
					}

					return renderExpandableElement(i + 1);
				})
			}
		</div>
	);
};
