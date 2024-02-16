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

import {
	RefObject,
	useEffect,
	useRef,
	useState
} from 'react';

/**
 * A hook that returns the width of a DOM element and a ref to that element.
 * @returns {[number, RefObject<HTMLDivElement>]} - An array containing the width of the element and
 *     a ref to it.
 */
export default function useElementWidth(): [number, RefObject<HTMLDivElement>]  {
	const reference = useRef<HTMLDivElement>(null);

	const [width, setWidth] = useState<number>(0);
	
	useEffect(() => {
		const element = reference.current

		if (!element) return

		const updateWidth = () => {
			setWidth(element.clientWidth)
		}

		window.addEventListener("resize", updateWidth)
		updateWidth()

		return () => window.removeEventListener("resize", updateWidth)
	}, [])
	
	return [width, reference]
}