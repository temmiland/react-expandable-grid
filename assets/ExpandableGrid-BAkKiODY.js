import{j as a}from"./jsx-runtime-CKrituN3.js";import{r as s}from"./index-CBqU2yxZ.js";function y(){const n=s.useRef(null),[o,i]=s.useState(0);return s.useEffect(()=>{const l=n.current;if(!l)return;const d=()=>{i(l.clientWidth)};return window.addEventListener("resize",d),d(),()=>window.removeEventListener("resize",d)},[]),[o,n]}const x=({elements:n,expandableElementWidthInPx:o,fbJustifyContent:i="space-between",defaultSelectedIndex:l=void 0})=>{const[d,f]=y(),[r,E]=s.useState(l+1),c=Math.floor(d/o),h=Math.ceil(n.length/c),u=e=>{E(r===e?void 0:e)},p=e=>{const t=n[e-1].expandableElement;return a.jsx("div",{onClick:()=>u(e),children:a.jsx(t,{currentIndex:e})},"expandable-"+e)},b=e=>{const t=n[e-1].expandedElement;return a.jsx("div",{style:{display:r?"block":"none",width:"100%"},children:a.jsx("div",{children:a.jsx(t,{currentIndex:r,close:()=>u(void 0)})},"expanded-"+e)})};return a.jsx("div",{ref:f,style:{display:"flex",flexWrap:"wrap",justifyContent:i},children:n.map((e,t)=>{const w=t+1===n.length,m=Math.ceil(r/c);return c*m===t+1||m===h&&w?a.jsxs(a.Fragment,{children:[p(t+1),b(t+1)]}):p(t+1)})})};try{x.displayName="ExpandableGrid",x.__docgenInfo={description:"A grid component that renders a collection of expandable elements.",displayName:"ExpandableGrid",props:{elements:{defaultValue:null,description:"",name:"elements",required:!0,type:{name:"ExpandableElement[]"}},expandableElementWidthInPx:{defaultValue:null,description:"",name:"expandableElementWidthInPx",required:!0,type:{name:"number"}},fbJustifyContent:{defaultValue:null,description:"",name:"fbJustifyContent",required:!1,type:{name:"enum",value:[{value:'"space-between"'},{value:'"space-around"'},{value:'"space-evenly"'}]}},defaultSelectedIndex:{defaultValue:{value:"undefined"},description:"",name:"defaultSelectedIndex",required:!1,type:{name:"number"}}}}}catch{}export{x as E};
