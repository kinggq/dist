import{c as b,a as d,au as m,u,d as C,b as y,f as l,g as _,bj as $,h,aG as z,br as x}from"./index.ac5c63a1.js";import{f as O}from"./Space.5007e240.js";let c=[];const f=new WeakMap;function R(){c.forEach(e=>e(...f.get(e))),c=[]}function j(e,...o){f.set(e,o),!c.includes(e)&&c.push(e)===1&&requestAnimationFrame(R)}const S=b("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[d("color-transition",{transition:"color .3s var(--n-bezier)"}),d("depth",{color:"var(--n-color)"},[m("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),m("svg",{height:"1em",width:"1em"})]),w=Object.assign(Object.assign({},u.props),{depth:[String,Number],size:[Number,String],color:String,component:Object}),I=C({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:w,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:i}=y(e),s=u("Icon","-icon",S,x,e,o),r=l(()=>{const{depth:t}=e,{common:{cubicBezierEaseInOut:a},self:p}=s.value;if(t!==void 0){const{color:g,[`opacity${t}Depth`]:v}=p;return{"--n-bezier":a,"--n-color":g,"--n-opacity":v}}return{"--n-bezier":a,"--n-color":"","--n-opacity":""}}),n=i?_("icon",l(()=>`${e.depth||"d"}`),r,e):void 0;return{mergedClsPrefix:o,mergedStyle:l(()=>{const{size:t,color:a}=e;return{fontSize:O(t),color:a}}),cssVars:i?void 0:r,themeClass:n==null?void 0:n.themeClass,onRender:n==null?void 0:n.onRender}},render(){var e;const{$parent:o,depth:i,mergedClsPrefix:s,component:r,onRender:n,themeClass:t}=this;return!((e=o==null?void 0:o.$options)===null||e===void 0)&&e._n_icon__&&$("icon","don't wrap `n-icon` inside `n-icon`"),n==null||n(),h("i",z(this.$attrs,{role:"img",class:[`${s}-icon`,t,{[`${s}-icon--depth`]:i,[`${s}-icon--color-transition`]:i!==void 0}],style:[this.cssVars,this.mergedStyle]}),r?h(r):this.$slots)}});export{I as N,j as b};
