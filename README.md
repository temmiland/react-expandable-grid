<!--
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
-->

# react-expandable-grid  - [![npm](https://img.shields.io/npm/v/@tomxpcvx/react-expandable-grid.svg?color=%2345bf17&style=popout)](https://www.npmjs.com/package/@tomxpcvx/react-expandable-grid)

react-expandable-grid is a simple-to-use component designed to create grids with an expanding detail view. It provides an easy solution for quickly setting up galleries and portfolios in your React applications. With this component, when a user clicks on an element of your choice, a preview window opens up, displaying a larger (or smaller, depending on the settings) area where you can customize and showcase your content as desired.

Trying it out is always simpler than just reading about it. Take a look at the demo!

## Demo

You can reach the Demo here: [`https://ghp.pietsch.earth/react-expandable-grid`](https://ghp.pietsch.earth/react-expandable-grid)

To try it locally, run:

```bash
git clone git@github.com:tomxpcvx/react-expandable-grid.git
cd react-expandable-grid
bun i
bun run dev
```

Then open [`localhost:6006`](http://localhost:6006) in a browser.

## Installation

A straightforward method for using react-expandable-grid involves installing it from the NPM registry and integrating it into your React build process.

```bash
bun i @tomxpcvx/react-expandable-grid

# or for those living under a rock :D
npm i @tomxpcvx/react-expandable-grid
pnpm i @tomxpcvx/react-expandable-grid
yarn i @tomxpcvx/react-expandable-grid
```

## Usage

```javascript
<ExpandableGrid
    elements={ Array<ExpandableElement>(15).fill({
        expandableElement: ({ currentIndex }) => (
            <div style={ {
                width: 300,
                height: 300,
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
                height: 300,
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
    expandableElementWidthInPx={ 300 }
    fbJustifyContent='space-between'
/>
```

### Properties

| Property                    | Type                        | Explanation                                    | Notes                                                   |
| --------------------------- | --------------------------- | ---------------------------------------------- | ------------------------------------------------------- |
| elements                    | `Array<ExpandableElement>`  | The list of expandable elements.               |                                                         |
| expandableElementWidthInPx  | `number`                    | The width of one expandable element.           | `px`                                                    |
| fbJustifyContent            | `string`                    | The mode for the CSS property justify-content. | one of: `space-between \| space-around \| space-evenly` |

### Notes

#### Default values:

```javascript
fbJustifyContent = 'space-between'
```

## Development (`src`, `lib` and the build process)

**NOTE:** The source code for the component is in `lib`.

To build, watch and serve the examples (which will also watch the component source), run `bun run dev`.

## License

### (MIT License)

```text
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
```
