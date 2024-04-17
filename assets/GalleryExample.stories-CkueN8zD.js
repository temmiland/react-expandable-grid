import{j as e}from"./jsx-runtime-CKrituN3.js";import{E as h}from"./ExpandableGrid-BAkKiODY.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";const n=[{url:"http://i.imgur.com/zIEjP6Q.jpg",title:"Westland Tai Poutini National Park",href:"https://www.instagram.com/p/BRFjVZtgSJD/",desc:"Photo by @christopheviseux / The Westland Tai Poutini National Park in New Zealand’s South Island offers a remarkable opportunity to take a guided walk on a glacier. ..."},{url:"http://i.imgur.com/rCrvQTv.jpg",title:"Dubai Desert Conservation Reserve",href:"https://www.instagram.com/p/BQ6_Wa2gmdR/",desc:"Photo by @christopheviseux / Early morning flight on a hot air balloon ride above the Dubai Desert Conservation Reserve. Merely an hour drive from the city, the park ..."},{url:"http://i.imgur.com/U8iVzVl.jpg",title:"Crumbling Reflections",href:"https://www.instagram.com/p/BQyfDiKAEq9/",desc:"Photo @pedromcbride // Crumbling Reflections: Much has changed in Cuba over the 17 years I have visited this island. But much has stayed the same. Time still ticks at a Cuban pace ..."},{url:"http://i.imgur.com/Ky9aJlE.jpg",title:"Impalas",href:"https://www.instagram.com/p/BQxf6CEgD8p/",desc:"Impetious young impala go head-to-head as they practice sparring. A talent they will need later in life when the rut begins. Photographed on assignment for @natgeotravel in Kruger National Park. ..."},{url:"http://i.imgur.com/mf3qfzt.jpg",title:"Elephants",href:"https://www.instagram.com/p/BQvy7gbgynF/",desc:"Photo by @ronan_donovan // Two bull African elephants at dawn in Uganda`s Murchison Falls National Park. See more from Uganda with @ronan_donovan."}],i=({size:t,elements:d,fbJustifyContent:c})=>e.jsx("div",{style:{background:"rgb(242, 242, 242)",padding:30},children:e.jsx(h,{elements:Array(d).fill({expandableElement:({currentIndex:a})=>e.jsx("div",{style:{width:t,height:t,margin:"20px 0px",color:"white",background:"url("+n[a%n.length].url+") 0% 0% / cover"}}),expandedElement:({currentIndex:a,close:p})=>e.jsxs("div",{style:{width:"100%",height:t,background:"rgb(217, 217, 217)",margin:"0 0 10px 0",display:"flex",justifyContent:"center",alignItems:"center"},children:[e.jsx("div",{style:{width:"30%",padding:"25px 0",display:"flex",justifyContent:"center"},children:e.jsx("div",{style:{width:t/1.25,height:t/1.25,background:"url("+n[a%n.length].url+") 0% 0% / cover"}})}),e.jsxs("div",{style:{width:"70%",padding:"15px 20px 25px 0",fontFamily:"Helvetica Neue, Helvetica, Arial, sans-serif",color:"black"},children:[e.jsx("p",{style:{fontWeight:800,fontSize:14},children:n[a%n.length].title}),e.jsx("p",{style:{fontWeight:400,fontSize:13},children:n[a%n.length].desc}),e.jsxs("p",{style:{margin:"20px 0",fontSize:13},children:[e.jsx("a",{style:{textDecoration:"none",padding:"0.5rem",border:"1px solid #333333",color:"black"},href:n[a%n.length].href,children:"Link"}),e.jsx("a",{style:{textDecoration:"none",padding:"0.5rem",margin:"1rem",border:"1px solid #333333",color:"black",cursor:"pointer"},onClick:p,children:"Close"})]})]})]})}),expandableElementWidthInPx:t,fbJustifyContent:c,defaultSelectedIndex:3})});try{i.displayName="Gallery",i.__docgenInfo={description:"",displayName:"Gallery",props:{size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"number"}},elements:{defaultValue:null,description:"",name:"elements",required:!0,type:{name:"number"}},fbJustifyContent:{defaultValue:null,description:"",name:"fbJustifyContent",required:!0,type:{name:"enum",value:[{value:'"space-between"'},{value:'"space-around"'},{value:'"space-evenly"'}]}}}}}catch{}const f={title:"Examples/Gallery",component:i,tags:["autodocs"],argTypes:{fbJustifyContent:{options:["space-between","space-around","space-evenly"],control:{type:"select"}}},parameters:{docs:{source:{code:`<ExpandableGrid
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
`}}}},r={args:{size:250,elements:15,fbJustifyContent:"space-between"}};var l,s,o;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    size: 250,
    elements: 15,
    fbJustifyContent: 'space-between'
  }
}`,...(o=(s=r.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const x=["Standard"];export{r as Standard,x as __namedExportsOrder,f as default};
