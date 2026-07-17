import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./jsx-runtime-f3rHp9ZU.js";import{n,t as r}from"./main-BlbC2vLq.js";var i,a,o,s=e((()=>{r(),i=t(),a=[{url:`http://i.imgur.com/zIEjP6Q.jpg`,title:`Westland Tai Poutini National Park`,href:`https://www.instagram.com/p/BRFjVZtgSJD/`,desc:`Photo by @christopheviseux / The Westland Tai Poutini National Park in New Zealand’s South Island offers a remarkable opportunity to take a guided walk on a glacier. ...`},{url:`http://i.imgur.com/rCrvQTv.jpg`,title:`Dubai Desert Conservation Reserve`,href:`https://www.instagram.com/p/BQ6_Wa2gmdR/`,desc:`Photo by @christopheviseux / Early morning flight on a hot air balloon ride above the Dubai Desert Conservation Reserve. Merely an hour drive from the city, the park ...`},{url:`http://i.imgur.com/U8iVzVl.jpg`,title:`Crumbling Reflections`,href:`https://www.instagram.com/p/BQyfDiKAEq9/`,desc:`Photo @pedromcbride // Crumbling Reflections: Much has changed in Cuba over the 17 years I have visited this island. But much has stayed the same. Time still ticks at a Cuban pace ...`},{url:`http://i.imgur.com/Ky9aJlE.jpg`,title:`Impalas`,href:`https://www.instagram.com/p/BQxf6CEgD8p/`,desc:`Impetious young impala go head-to-head as they practice sparring. A talent they will need later in life when the rut begins. Photographed on assignment for @natgeotravel in Kruger National Park. ...`},{url:`http://i.imgur.com/mf3qfzt.jpg`,title:`Elephants`,href:`https://www.instagram.com/p/BQvy7gbgynF/`,desc:"Photo by @ronan_donovan // Two bull African elephants at dawn in Uganda`s Murchison Falls National Park. See more from Uganda with @ronan_donovan."}],o=({size:e,elements:t,fbJustifyContent:r})=>(0,i.jsx)(`div`,{style:{background:`rgb(242, 242, 242)`,padding:30},children:(0,i.jsx)(n,{elements:Array(t).fill({expandableElement:({currentIndex:t})=>(0,i.jsx)(`div`,{style:{width:e,height:e,margin:`20px 0px`,color:`white`,background:`url(`+a[t%a.length].url+`) 0% 0% / cover`}}),expandedElement:({currentIndex:t,close:n})=>(0,i.jsxs)(`div`,{style:{width:`100%`,height:e,background:`rgb(217, 217, 217)`,margin:`0 0 10px 0`,display:`flex`,justifyContent:`center`,alignItems:`center`},children:[(0,i.jsx)(`div`,{style:{width:`30%`,padding:`25px 0`,display:`flex`,justifyContent:`center`},children:(0,i.jsx)(`div`,{style:{width:e/1.25,height:e/1.25,background:`url(`+a[t%a.length].url+`) 0% 0% / cover`}})}),(0,i.jsxs)(`div`,{style:{width:`70%`,padding:`15px 20px 25px 0`,fontFamily:`Helvetica Neue, Helvetica, Arial, sans-serif`,color:`black`},children:[(0,i.jsx)(`p`,{style:{fontWeight:800,fontSize:14},children:a[t%a.length].title}),(0,i.jsx)(`p`,{style:{fontWeight:400,fontSize:13},children:a[t%a.length].desc}),(0,i.jsxs)(`p`,{style:{margin:`20px 0`,fontSize:13},children:[(0,i.jsx)(`a`,{style:{textDecoration:`none`,padding:`0.5rem`,border:`1px solid #333333`,color:`black`},href:a[t%a.length].href,children:`Link`}),(0,i.jsx)(`button`,{type:`button`,style:{background:`none`,textDecoration:`none`,padding:`0.5rem`,margin:`1rem`,border:`1px solid #333333`,color:`black`,cursor:`pointer`},onClick:n,children:`Close`})]})]})]})}),expandableElementWidthInPx:e,fbJustifyContent:r,defaultSelectedIndex:3})}),o.__docgenInfo={description:``,methods:[],displayName:`Gallery`,props:{size:{required:!0,tsType:{name:`number`},description:``},elements:{required:!0,tsType:{name:`number`},description:``},fbJustifyContent:{required:!0,tsType:{name:`union`,raw:`'space-between' | 'space-around' | 'space-evenly'`,elements:[{name:`literal`,value:`'space-between'`},{name:`literal`,value:`'space-around'`},{name:`literal`,value:`'space-evenly'`}]},description:``}}}})),c,l,u;e((()=>{s(),c={title:`Examples/Gallery`,component:o,tags:[`autodocs`],argTypes:{fbJustifyContent:{options:[`space-between`,`space-around`,`space-evenly`],control:{type:`select`}}},parameters:{docs:{source:{code:`<ExpandableGrid
    elements={ Array<ExpandableElement>(\${elements}).fill({
        expandableElement: ({ currentIndex }) => (
            <div style={ {
                width: \${size},
                height: \${size},
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
                height: \${size},
                background: 'rgb(217, 217, 217)',
                margin: '0 0 10px 0',
                display: 'flex',
                justifyContent: 'center',
            } }>
                <div style={{
                    width: '30%',
                    padding: '25px 0',
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <div style={ {
                        width: \${size / 1.25},
                        height: \${size / 1.25},
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
                    <p style={ { fontWeight: 800, fontSize: 14 } }>{ imageUrls[currentIndex! % imageUrls.length].title }</p>
                    <p style={ { fontWeight: 400, fontSize: 13 } }>{ imageUrls[currentIndex! % imageUrls.length].desc }</p>
                    <p style={ { margin: '20px 0', fontSize: 13 } }>
                        <a style={{
                            textDecoration: 'none',
                            padding: '0.5rem',
                            border: '1px solid #333333',
                            color: 'black'
                        }} href={ imageUrls[currentIndex! % imageUrls.length].href }>
                            { 'Link' }
                        </a>
                        <a style={{
                            textDecoration: 'none',
                            padding: '0.5rem',
                            margin: '1rem',
                            border: '1px solid #333333',
                            color: 'black',
                            cursor: 'pointer'
                        }} onClick={ close }>
                            { 'Close' }
                        </a>
                    </p>
                </div>
            </div>
        )
    }) }
    expandableElementWidthInPx={ \${size} }
    fbJustifyContent='\${fbJustifyContent}'
/>
`}}}},l={args:{size:250,elements:15,fbJustifyContent:`space-between`}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    size: 250,
    elements: 15,
    fbJustifyContent: 'space-between'
  }
}`,...l.parameters?.docs?.source}}},u=[`Standard`]}))();export{l as Standard,u as __namedExportsOrder,c as default};