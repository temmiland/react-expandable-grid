import { RefObject } from 'react';
/**
 * A hook that returns the width of a DOM element and a ref to that element.
 * @returns {[number, RefObject<HTMLDivElement>]} - An array containing the width of the element and
 *     a ref to it.
 */
export default function useElementWidth(): [number, RefObject<HTMLDivElement>];
