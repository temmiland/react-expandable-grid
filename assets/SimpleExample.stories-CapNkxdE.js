import{j as n}from"./jsx-runtime-CKrituN3.js";import{E as c}from"./ExpandableGrid-BAkKiODY.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";const r=({size:e,elements:s,fbJustifyContent:i})=>n.jsx(c,{elements:Array(s).fill({expandableElement:({currentIndex:a})=>n.jsxs("div",{style:{width:e,height:e,background:"red",color:"white",marginTop:10},children:["Expandable ",a]}),expandedElement:({currentIndex:a,close:p})=>n.jsxs("div",{style:{width:"100%",height:e,background:"blue",color:"white",marginTop:10},children:["Expanded ",a,n.jsx("button",{onClick:p,children:"Close"})]})}),expandableElementWidthInPx:e,fbJustifyContent:i,defaultSelectedIndex:1});try{r.displayName="Simple",r.__docgenInfo={description:"",displayName:"Simple",props:{size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"number"}},elements:{defaultValue:null,description:"",name:"elements",required:!0,type:{name:"number"}},fbJustifyContent:{defaultValue:null,description:"",name:"fbJustifyContent",required:!0,type:{name:"enum",value:[{value:'"space-between"'},{value:'"space-around"'},{value:'"space-evenly"'}]}}}}}catch{}const y={title:"Examples/Simple",component:r,tags:["autodocs"],argTypes:{fbJustifyContent:{options:["space-between","space-around","space-evenly"],control:{type:"select"}}},parameters:{docs:{source:{code:`<ExpandableGrid
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
`}}}},t={args:{size:150,elements:15,fbJustifyContent:"space-between"}};var l,d,o;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    size: 150,
    elements: 15,
    fbJustifyContent: 'space-between'
  }
}`,...(o=(d=t.parameters)==null?void 0:d.docs)==null?void 0:o.source}}};const f=["Standard"];export{t as Standard,f as __namedExportsOrder,y as default};
