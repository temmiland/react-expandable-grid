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

import { ExpandableGrid } from '../../../lib/main';
import { ExpandableElement } from '../../../lib/components/ExpandableGrid';

type SimpleProps = {
	size: number,
	elements: number,
	fbJustifyContent: "space-between" | "space-around" | "space-evenly"
}

const imageUrls = [
	{ url: 'http://i.imgur.com/zIEjP6Q.jpg', title: 'Westland Tai Poutini National Park', href: 'https://www.instagram.com/p/BRFjVZtgSJD/', desc: 'Photo by @christopheviseux / The Westland Tai Poutini National Park in New Zealand’s South Island offers a remarkable opportunity to take a guided walk on a glacier. ...' },
	{ url: 'http://i.imgur.com/rCrvQTv.jpg', title: 'Dubai Desert Conservation Reserve', href: 'https://www.instagram.com/p/BQ6_Wa2gmdR/', desc: 'Photo by @christopheviseux / Early morning flight on a hot air balloon ride above the Dubai Desert Conservation Reserve. Merely an hour drive from the city, the park ...' },
	{ url: 'http://i.imgur.com/U8iVzVl.jpg', title: 'Crumbling Reflections', href: 'https://www.instagram.com/p/BQyfDiKAEq9/', desc: 'Photo @pedromcbride // Crumbling Reflections: Much has changed in Cuba over the 17 years I have visited this island. But much has stayed the same. Time still ticks at a Cuban pace ...' },
	{ url: 'http://i.imgur.com/Ky9aJlE.jpg', title: 'Impalas', href: 'https://www.instagram.com/p/BQxf6CEgD8p/', desc: 'Impetious young impala go head-to-head as they practice sparring. A talent they will need later in life when the rut begins. Photographed on assignment for @natgeotravel in Kruger National Park. ...' },
	{ url: 'http://i.imgur.com/mf3qfzt.jpg', title: 'Elephants', href: 'https://www.instagram.com/p/BQvy7gbgynF/', desc: 'Photo by @ronan_donovan // Two bull African elephants at dawn in Uganda`s Murchison Falls National Park. See more from Uganda with @ronan_donovan.' }
]

export const Gallery = ({ size, elements, fbJustifyContent }: SimpleProps) => (
	<div style={ {
		background: 'rgb(242, 242, 242)',
		padding: 30
	}}>
		<ExpandableGrid
			elements={ Array<ExpandableElement>(elements).fill({
				expandableElement: ({ currentIndex }) => (
					<div style={ {
						width: size,
						height: size,
						margin: '20px 0px',
						color: 'white',
						background: 'url(' + imageUrls[
							currentIndex! % imageUrls.length
						].url + ') 0% 0% / cover',
					} } />
				),
				expandedElement: ({ currentIndex, close }) => (
					<div style={ {
						width: '100%',
						height: size,
						background: 'rgb(217, 217, 217)',
						margin: '0 0 10px 0',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center'
					} }>
						<div style={{
							width: '30%',
							padding: '25px 0',
							display: 'flex',
							justifyContent: 'center'
						}}>
							<div style={ {
								width: size / 1.25,
								height: size / 1.25,
								background: 'url(' + imageUrls[
									currentIndex! % imageUrls.length
								].url + ') 0% 0% / cover',

							} } />
						</div>
						<div style={{
							width: '70%',
							padding: '15px 20px 25px 0',
							fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
							color: 'black',
						}}>
							<p style={ { fontWeight: 800, fontSize: 14 } }>
								{ imageUrls[currentIndex! % imageUrls.length].title }
							</p>
							<p style={ { fontWeight: 400, fontSize: 13 } }>
								{ imageUrls[currentIndex! % imageUrls.length].desc }
							</p>
							<p style={ { margin: '20px 0', fontSize: 13 } }>
								<a
									style={{
										textDecoration: 'none',
										padding: '0.5rem',
										border: '1px solid #333333',
										color: 'black'
									}}
									href={ imageUrls[currentIndex! % imageUrls.length].href }
								>
									{ 'Link' }
								</a>
								<a
									style={{
										textDecoration: 'none',
										padding: '0.5rem',
										margin: '1rem',
										border: '1px solid #333333',
										color: 'black',
										cursor: 'pointer'
									}}
									onClick={ close }
								>
									{ 'Close' }
								</a>
							</p>
						</div>
					</div>
				)
			}) }
			expandableElementWidthInPx={ size }
			fbJustifyContent={ fbJustifyContent }
			defaultSelectedIndex={3}
		/>
	</div>
);
