import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./jsx-runtime-f3rHp9ZU.js";import{n,t as r}from"./main-BlbC2vLq.js";var i,a,o=e((()=>{r(),i=t(),a=({size:e,elements:t,fbJustifyContent:r})=>(0,i.jsx)(n,{elements:Array(t).fill({expandableElement:({currentIndex:t})=>(0,i.jsxs)(`div`,{style:{width:e,height:e,background:`red`,color:`white`,marginTop:10},children:[`Expandable `,t]}),expandedElement:({currentIndex:t,close:n})=>(0,i.jsxs)(`div`,{style:{width:`100%`,height:e,background:`blue`,color:`white`,marginTop:10},children:[`Expanded `,t,(0,i.jsx)(`button`,{onClick:n,children:`Close`})]})}),expandableElementWidthInPx:e,fbJustifyContent:r,defaultSelectedIndex:1}),a.__docgenInfo={description:``,methods:[],displayName:`Simple`,props:{size:{required:!0,tsType:{name:`number`},description:``},elements:{required:!0,tsType:{name:`number`},description:``},fbJustifyContent:{required:!0,tsType:{name:`union`,raw:`'space-between' | 'space-around' | 'space-evenly'`,elements:[{name:`literal`,value:`'space-between'`},{name:`literal`,value:`'space-around'`},{name:`literal`,value:`'space-evenly'`}]},description:``}}}})),s,c,l;e((()=>{o(),s={title:`Examples/Simple`,component:a,tags:[`autodocs`],argTypes:{fbJustifyContent:{options:[`space-between`,`space-around`,`space-evenly`],control:{type:`select`}}},parameters:{docs:{source:{code:`<ExpandableGrid
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
`}}}},c={args:{size:150,elements:15,fbJustifyContent:`space-between`}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    size: 150,
    elements: 15,
    fbJustifyContent: 'space-between'
  }
}`,...c.parameters?.docs?.source}}},l=[`Standard`]}))();export{c as Standard,l as __namedExportsOrder,s as default};