import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./react-uS7UyY4Q.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";function i(){let e=(0,a.useRef)(null),[t,n]=(0,a.useState)(0);return(0,a.useEffect)(()=>{let t=e.current;if(!t)return;let r=()=>{n(t.clientWidth)};return window.addEventListener(`resize`,r),r(),()=>window.removeEventListener(`resize`,r)},[]),[t,e]}var a,o=e((()=>{a=t(n(),1)})),s,c,l,u=e((()=>{s=t(n(),1),o(),c=r(),l=({elements:e,expandableElementWidthInPx:t,fbJustifyContent:n=`space-between`,defaultSelectedIndex:r=void 0})=>{let[a,o]=i(),[l,u]=(0,s.useState)(r+1),d=Math.floor(a/t),f=Math.ceil(e.length/d);l!==void 0&&l>e.length&&u(1);let p=e=>{u(l===e?void 0:e)},m=t=>{let n=e[t-1].expandableElement;return(0,c.jsx)(`div`,{className:`expandable expandable-`+t,role:`button`,tabIndex:0,onClick:()=>p(t),onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),p(t))},children:(0,c.jsx)(n,{currentIndex:t})},`expandable-`+t)},h=t=>{let n=e[t-1].expandedElement;return(0,c.jsx)(`div`,{className:`expanded expanded-`+t,style:{display:l?`block`:`none`,width:`100%`},children:(0,c.jsx)(`div`,{children:(0,c.jsx)(n,{currentIndex:l,close:()=>p(void 0)})},`expanded-`+t)})};return(0,c.jsx)(`div`,{className:`expandable-grid`,ref:o,style:{display:`flex`,flexWrap:`wrap`,justifyContent:n},children:e.map((t,n)=>{let r=n+1===e.length,i=Math.ceil(l/d);return d*i===n+1||i===f&&r?(0,c.jsxs)(c.Fragment,{children:[m(n+1),h(n+1)]}):m(n+1)})})},l.__docgenInfo={description:`A grid component that renders a collection of expandable elements.
@param {ExpandableGridProps} props - Props for the ExpandableGrid component.
@returns {React.ReactElement} - JSX element representing the ExpandableGrid component.`,methods:[],displayName:`ExpandableGrid`,props:{elements:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
	expandableElement: React.FC<{
		currentIndex: number | undefined
	}>;
	expandedElement: React.FC<{
		currentIndex: number | undefined,
		close: () => void
	}>;
}`,signature:{properties:[{key:`expandableElement`,value:{name:`ReactFC`,raw:`React.FC<{
	currentIndex: number | undefined
}>`,elements:[{name:`signature`,type:`object`,raw:`{
	currentIndex: number | undefined
}`,signature:{properties:[{key:`currentIndex`,value:{name:`union`,raw:`number | undefined`,elements:[{name:`number`},{name:`undefined`}],required:!0}}]}}],required:!0}},{key:`expandedElement`,value:{name:`ReactFC`,raw:`React.FC<{
	currentIndex: number | undefined,
	close: () => void
}>`,elements:[{name:`signature`,type:`object`,raw:`{
	currentIndex: number | undefined,
	close: () => void
}`,signature:{properties:[{key:`currentIndex`,value:{name:`union`,raw:`number | undefined`,elements:[{name:`number`},{name:`undefined`}],required:!0}},{key:`close`,value:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}},required:!0}}]}}],required:!0}}]}}],raw:`ExpandableElement[]`},description:``},expandableElementWidthInPx:{required:!0,tsType:{name:`number`},description:``},fbJustifyContent:{required:!1,tsType:{name:`union`,raw:`'space-between' | 'space-around' | 'space-evenly'`,elements:[{name:`literal`,value:`'space-between'`},{name:`literal`,value:`'space-around'`},{name:`literal`,value:`'space-evenly'`}]},description:``,defaultValue:{value:`'space-between'`,computed:!1}},defaultSelectedIndex:{required:!1,tsType:{name:`union`,raw:`number | undefined`,elements:[{name:`number`},{name:`undefined`}]},description:``,defaultValue:{value:`undefined`,computed:!0}}}}})),d,f=e((()=>{u(),d=l})),p=e((()=>{f()}));export{d as n,f as r,p as t};