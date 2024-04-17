import React from 'react';
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
        currentIndex: number | undefined;
    }>;
    expandedElement: React.FC<{
        currentIndex: number | undefined;
        close: () => void;
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
    defaultSelectedIndex?: number | undefined;
};
/**
 * A grid component that renders a collection of expandable elements.
 * @param {ExpandableGridProps} props - Props for the ExpandableGrid component.
 * @returns {React.ReactElement} - JSX element representing the ExpandableGrid component.
 */
export declare const ExpandableGrid: React.FC<ExpandableGridProps>;
