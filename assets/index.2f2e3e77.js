import{c as C,a as R,d as x,u as M,r as B,b as D,p as I,e as P,f as S,g as j,h as y,N,i as O,I as Q,o as l,j as g,k as c,_ as w,l as z,m as u,w as r,n as s,q as G,t as A,s as T,v as K,x as U,y as W,z as p,A as X,B as Y,C as J,D as ee,E as te,F as ne,G as oe,H as le}from"./index.ac5c63a1.js";import{p as se,_ as E}from"./interface.5f83e526.js";import{_ as ce}from"./Badge.290e7214.js";import{N as re}from"./Icon.ee0a60f4.js";import{_ as ae}from"./Avatar.22d9a14b.js";import{_ as ie}from"./Space.5007e240.js";import{_ as _e,a as ue}from"./Menu.3ba21669.js";import{l as de,_ as he}from"./LayoutHeader.3ca57ca7.js";import"./get.bca912e4.js";import"./attribute.dd679ec7.js";const pe=C("layout",`
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 flex: auto;
 overflow: hidden;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[C("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),R("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),me={embedded:Boolean,position:se,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},fe=O("n-layout");function V(n){return x({name:n?"LayoutContent":"Layout",props:Object.assign(Object.assign({},M.props),me),setup(e){const t=B(null),o=B(null),{mergedClsPrefixRef:i,inlineThemeDisabled:a}=D(e),_=M("Layout","-layout",pe,de,e,i);function d(h,f){if(e.nativeScrollbar){const{value:v}=t;v&&(f===void 0?v.scrollTo(h):v.scrollTo(h,f))}else{const{value:v}=o;v&&v.scrollTo(h,f)}}I(fe,e);let m=0,$=0;const F=h=>{var f;const v=h.target;m=v.scrollLeft,$=v.scrollTop,(f=e.onScroll)===null||f===void 0||f.call(e,h)};P(()=>{if(e.nativeScrollbar){const h=t.value;h&&(h.scrollTop=$,h.scrollLeft=m)}});const Z={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},H={scrollTo:d},q=S(()=>{const{common:{cubicBezierEaseInOut:h},self:f}=_.value;return{"--n-bezier":h,"--n-color":e.embedded?f.colorEmbedded:f.color,"--n-text-color":f.textColor}}),b=a?j("layout",S(()=>e.embedded?"e":""),q,e):void 0;return Object.assign({mergedClsPrefix:i,scrollableElRef:t,scrollbarInstRef:o,hasSiderStyle:Z,mergedTheme:_,handleNativeElScroll:F,cssVars:a?void 0:q,themeClass:b==null?void 0:b.themeClass,onRender:b==null?void 0:b.onRender},H)},render(){var e;const{mergedClsPrefix:t,hasSider:o}=this;(e=this.onRender)===null||e===void 0||e.call(this);const i=o?this.hasSiderStyle:void 0,a=[this.themeClass,n&&`${t}-layout-content`,`${t}-layout`,`${t}-layout--${this.position}-positioned`];return y("div",{class:a,style:this.cssVars},this.nativeScrollbar?y("div",{ref:"scrollableElRef",class:`${t}-layout-scroll-container`,style:[this.contentStyle,i],onScroll:this.handleNativeElScroll},this.$slots):y(N,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentStyle:[this.contentStyle,i]}),this.$slots))}})}const ve=V(!1),ge=V(!0);function L(n,e={size:12}){return()=>y(re,e,{default:()=>y(Q,{icon:n})})}const xe={class:"inline-block",viewBox:"0 0 512 512",width:"1em",height:"1em"},be=c("path",{fill:"currentColor",d:"M259 271.3L226.2 367h-.1l-25.4 73.1c1.8.5 3.5.9 5.3 1.4h.3a192.51 192.51 0 0 0 49.5 6.5a157 157 0 0 0 24.9-1.8a184.3 184.3 0 0 0 32.5-7.1c2.6-.8 5.2-1.7 7.8-2.6c-2.8-6-8.8-19.3-9.1-19.9ZM80.8 180.5C70.8 203.1 64 230.9 64 256c0 6.3.3 12.6.9 18.8c6.9 71.2 52.9 131 116.1 157.9c2.6 1.1 5.3 2.2 8 3.2L96 180.6c-8-.3-9.5.2-15.2-.1Z"},null,-1),$e=c("path",{fill:"currentColor",d:"M430.2 175.4a188 188 0 0 0-15.1-26.6c-1.6-2.4-3.4-4.8-5.1-7.2A193 193 0 0 0 325.1 77a189.2 189.2 0 0 0-69.2-13a191.51 191.51 0 0 0-149.4 71.7A196 196 0 0 0 89 161.3c14.2.1 31.8.1 33.8.1c18.1 0 46-2.2 46-2.2c9.4-.6 10.4 13.1 1.1 14.2c0 0-9.4 1.1-19.8 1.6L213 362l37.8-113.3l-26.8-73.6c-9.4-.5-18.1-1.6-18.1-1.6c-9.4-.5-8.2-14.8 1-14.2c0 0 28.5 2.2 45.5 2.2c18.1 0 46-2.2 46-2.2c9.3-.6 10.5 13.1 1.1 14.2c0 0-9.3 1.1-19.7 1.6l62.3 185.6l17.3-57.6c8.7-22.4 13.1-40.9 13.1-55.7c0-21.3-7.7-36.1-14.3-47.6c-8.7-14.3-16.9-26.3-16.9-40.4c0-15.9 12-30.7 29-30.7h2.2c26.2-.7 34.8 25.3 35.9 43v.6c.4 7.2.1 12.5.1 18.8c0 17.4-3.3 37.1-13.1 61.8l-39 112.8l-22.3 65.7c1.8-.8 3.5-1.6 5.3-2.5c56.7-27.4 98-82 106.7-146.7a172.07 172.07 0 0 0 1.9-26a191.11 191.11 0 0 0-17.8-80.8Z"},null,-1),ye=c("path",{fill:"currentColor",d:"M256 48a208.06 208.06 0 0 1 81 399.66A208.06 208.06 0 0 1 175 64.34A206.7 206.7 0 0 1 256 48m0-16C132.29 32 32 132.29 32 256s100.29 224 224 224s224-100.29 224-224S379.71 32 256 32Z"},null,-1),we=[be,$e,ye];function Se(n,e){return l(),g("svg",xe,we)}const ke={name:"ion-logo-wordpress",render:Se},qe={},Ce=c("h2",{"pl-1px":""}," whiteboard ",-1);function Me(n,e){const t=ke,o=z("router-link");return l(),u(o,{"text-primary":"","flex-center":"",to:"/"},{default:r(()=>[s(t,{"text-40px":""}),Ce]),_:1})}const Be=w(qe,[["render",Me]]),Le={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},ze=c("path",{fill:"currentColor",d:"m9.25 22l-.4-3.2q-.325-.125-.612-.3q-.288-.175-.563-.375L4.7 19.375l-2.75-4.75l2.575-1.95Q4.5 12.5 4.5 12.337v-.675q0-.162.025-.337L1.95 9.375l2.75-4.75l2.975 1.25q.275-.2.575-.375q.3-.175.6-.3l.4-3.2h5.5l.4 3.2q.325.125.613.3q.287.175.562.375l2.975-1.25l2.75 4.75l-2.575 1.95q.025.175.025.337v.675q0 .163-.05.338l2.575 1.95l-2.75 4.75l-2.95-1.25q-.275.2-.575.375q-.3.175-.6.3l-.4 3.2Zm2.8-6.5q1.45 0 2.475-1.025Q15.55 13.45 15.55 12q0-1.45-1.025-2.475Q13.5 8.5 12.05 8.5q-1.475 0-2.488 1.025Q8.55 10.55 8.55 12q0 1.45 1.012 2.475Q10.575 15.5 12.05 15.5Zm0-2q-.625 0-1.062-.438q-.438-.437-.438-1.062t.438-1.062q.437-.438 1.062-.438t1.063.438q.437.437.437 1.062t-.437 1.062q-.438.438-1.063.438ZM12 12Zm-1 8h1.975l.35-2.65q.775-.2 1.438-.588q.662-.387 1.212-.937l2.475 1.025l.975-1.7l-2.15-1.625q.125-.35.175-.738q.05-.387.05-.787t-.05-.788q-.05-.387-.175-.737l2.15-1.625l-.975-1.7l-2.475 1.05q-.55-.575-1.212-.963q-.663-.387-1.438-.587L13 4h-1.975l-.35 2.65q-.775.2-1.437.587q-.663.388-1.213.938L5.55 7.15l-.975 1.7l2.15 1.6q-.125.375-.175.75q-.05.375-.05.8q0 .4.05.775t.175.75l-2.15 1.625l.975 1.7l2.475-1.05q.55.575 1.213.962q.662.388 1.437.588Z"},null,-1),Ae=[ze];function Te(n,e){return l(),g("svg",Le,Ae)}const Ee={name:"material-symbols-settings-outline",render:Te},Ve={"cursor-pointer":"","h-full":"","flex-center":""},k=x({__name:"HoverContainer",props:{content:{default:""},placement:{default:"bottom"}},setup(n){return(e,t)=>{const o=E;return l(),g("div",null,[s(o,{placement:n.placement,trigger:"hover"},{trigger:r(()=>[c("div",Ve,[G(e.$slots,"default")])]),default:r(()=>[c("span",null,A(n.content),1)]),_:3},8,["placement"])])}}}),Fe={viewBox:"0 0 36 36",width:"1em",height:"1em"},Ze=c("path",{fill:"currentColor",d:"M32.51 27.83A14.4 14.4 0 0 1 30 24.9a12.63 12.63 0 0 1-1.35-4.81v-4.94A10.81 10.81 0 0 0 19.21 4.4V3.11a1.33 1.33 0 1 0-2.67 0v1.31a10.81 10.81 0 0 0-9.33 10.73v4.94a12.63 12.63 0 0 1-1.35 4.81a14.4 14.4 0 0 1-2.47 2.93a1 1 0 0 0-.34.75v1.36a1 1 0 0 0 1 1h27.8a1 1 0 0 0 1-1v-1.36a1 1 0 0 0-.34-.75ZM5.13 28.94a16.17 16.17 0 0 0 2.44-3a14.24 14.24 0 0 0 1.65-5.85v-4.94a8.74 8.74 0 1 1 17.47 0v4.94a14.24 14.24 0 0 0 1.65 5.85a16.17 16.17 0 0 0 2.44 3Z",class:"clr-i-outline clr-i-outline-path-1"},null,-1),He=c("path",{fill:"currentColor",d:"M18 34.28A2.67 2.67 0 0 0 20.58 32h-5.26A2.67 2.67 0 0 0 18 34.28Z",class:"clr-i-outline clr-i-outline-path-2"},null,-1),Re=c("path",{fill:"none",d:"M0 0h36v36H0z"},null,-1),De=[Ze,He,Re];function Ie(n,e){return l(),g("svg",Fe,De)}const Pe={name:"clarity-notification-line",render:Ie},je={},Ne=T(" \u901A\u77E5\u8BBE\u7F6E "),Oe=c("div",{"w-300px":"","p-20px":""}," \u6682\u65E0\u6D88\u606F ",-1),Qe={"text-center":""},Ge=T("\u67E5\u770B\u5168\u90E8\u901A\u77E5");function Ke(n,e){const t=Pe,o=ce,i=k,a=Ee,_=K,d=U,m=E;return l(),u(m,{trigger:"click","show-arrow":!1},{trigger:r(()=>[s(i,{"w-40px":"",relative:"",content:"\u7CFB\u7EDF\u6D88\u606F"},{default:r(()=>[s(t,{"text-18px":""}),s(o,{value:10,max:9,absolute:"","top--2px":"","right-0px":""})]),_:1})]),default:r(()=>[s(d,{bordered:!1,title:"\u901A\u77E5",size:"small","header-style":"padding: 0;","footer-style":"padding: 0;"},{"header-extra":r(()=>[c("div",null,[s(_,{text:"",type:"primary"},{default:r(()=>[s(a),Ne]),_:1})])]),footer:r(()=>[c("div",Qe,[s(_,{quaternary:"",type:"primary"},{default:r(()=>[Ge]),_:1})])]),default:r(()=>[Oe]),_:1})]),_:1})}const Ue=w(je,[["render",Ke]]),We={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},Xe=c("path",{fill:"currentColor",d:"M21 3v6h-2V6.41l-3.29 3.3l-1.42-1.42L17.59 5H15V3zM3 3v6h2V6.41l3.29 3.3l1.42-1.42L6.41 5H9V3zm18 18v-6h-2v2.59l-3.29-3.29l-1.41 1.41L17.59 19H15v2zM9 21v-2H6.41l3.29-3.29l-1.41-1.42L5 17.59V15H3v6z"},null,-1),Ye=[Xe];function Je(n,e){return l(),g("svg",We,Ye)}const et={name:"gridicons-fullscreen",render:Je},tt={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},nt=c("path",{fill:"currentColor",d:"M14 10V4h2v2.59l3.29-3.29l1.41 1.41L17.41 8H20v2zM4 10V8h2.59l-3.3-3.29l1.42-1.42L8 6.59V4h2v6zm16 4v2h-2.59l3.29 3.29l-1.41 1.41L16 17.41V20h-2v-6zm-10 0v6H8v-2.59l-3.29 3.3l-1.42-1.42L6.59 16H4v-2z"},null,-1),ot=[nt];function lt(n,e){return l(),g("svg",tt,ot)}const st={name:"gridicons-fullscreen-exit",render:lt},ct=x({__name:"FullScreen",setup(n){const{isFullscreen:e,toggle:t}=W();return(o,i)=>{const a=st,_=et,d=k;return l(),u(d,{"w-40px":"",content:"\u5168\u5C4F",onClick:p(t)},{default:r(()=>[p(e)?(l(),u(a,{key:0,"text-18px":""})):(l(),u(_,{key:1,"text-18px":""}))]),_:1},8,["onClick"])}}}),rt={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},at=c("path",{fill:"currentColor",d:"M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z"},null,-1),it=[at];function _t(n,e){return l(),g("svg",rt,it)}const ut={name:"uil-search",render:_t},dt={};function ht(n,e){const t=ut,o=k;return l(),u(o,{"w-40px":"",content:"\u641C\u7D22"},{default:r(()=>[s(t,{"text-22px":""})]),_:1})}const pt=w(dt,[["render",ht]]),mt={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},ft=c("path",{fill:"currentColor",d:"m3.55 19.09l1.41 1.41l1.8-1.79l-1.42-1.42M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6c0-3.32-2.69-6-6-6m8 7h3v-2h-3m-2.76 7.71l1.8 1.79l1.41-1.41l-1.79-1.8M20.45 5l-1.41-1.4l-1.8 1.79l1.42 1.42M13 1h-2v3h2M6.76 5.39L4.96 3.6L3.55 5l1.79 1.81l1.42-1.42M1 13h3v-2H1m12 9h-2v3h2"},null,-1),vt=[ft];function gt(n,e){return l(),g("svg",mt,vt)}const xt={name:"mdi-white-balance-sunny",render:gt},bt={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},$t=c("path",{fill:"currentColor",d:"M2 12a10 10 0 0 0 13 9.54a10 10 0 0 1 0-19.08A10 10 0 0 0 2 12Z"},null,-1),yt=[$t];function wt(n,e){return l(),g("svg",bt,yt)}const St={name:"mdi-moon-waning-crescent",render:wt},kt=x({__name:"ThemeMode",setup(n){const e=X(),t=Y(),o=()=>{e.toggleDark(),J(t)()};return(i,a)=>{const _=St,d=xt,m=k;return l(),u(m,{"w-40px":"",content:"\u4E3B\u9898",onClick:o},{default:r(()=>[p(t)?(l(),u(_,{key:0,"text-18px":""})):(l(),u(d,{key:1,"text-18px":""}))]),_:1})}}}),qt=x({__name:"UserAvatar",setup(n){const e=ee(),t=i=>{var a;i==="logout"&&((a=window.$dialog)==null||a.info({title:"\u63D0\u793A",content:"\u786E\u8BA4\u9000\u51FA\u767B\u5F55\uFF1F",positiveText:"\u786E\u8BA4",negativeText:"\u53D6\u6D88",onPositiveClick:()=>{e.logout()}}))},o=[{label:"\u4E2A\u4EBA\u8BBE\u7F6E",key:"userSettings",icon:L("ph:user-circle-gear",{size:20})},{label:"\u9000\u51FA\u767B\u5F55",key:"logout",icon:L("material-symbols:logout",{size:20})}];return(i,a)=>{const _=ae,d=ie,m=_e;return l(),u(m,{options:o,onSelect:t},{default:r(()=>[s(d,{align:"center","px-12px":"","cursor-pointer":""},{default:r(()=>[s(_,{round:"",size:30,src:"https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"}),c("span",null,A(p(e).userInfo.userName),1)]),_:1})]),_:1})}}}),Ct=x({__name:"index",setup(n){const e=te(),t=S(()=>e.meta.activeMenu?e.meta.activeMenu:e.name),o=ne(),{routerPush:i}=oe(),a=S(()=>o.menus),_=(d,m)=>{i(m.routePath)};return(d,m)=>{const $=ue;return l(),u($,{value:p(t),options:p(a),mode:"horizontal","onUpdate:value":_},null,8,["value","options"])}}});const Mt=w(Ct,[["__scopeId","data-v-9496bb04"]]),Bt={flex:""},Lt=x({__name:"index",setup(n){return(e,t)=>{const o=he;return l(),u(o,{"flex-between":"","h-60px":"","pl-20px":"","pr-20px":"",class:"bg-#EDF5F0 border-b-1px b-color-[#e3e3e3] dark:bg-dark-bg dark:border-b-none"},{default:r(()=>[s(p(Be)),s(Mt),c("div",Bt,[s(p(pt)),s(p(Ue)),s(p(ct)),s(p(kt)),s(p(qt))])]),_:1})}}});const zt=w(Lt,[["__scopeId","data-v-9a56d49a"]]),At={"h-full":"",flex:"","flex-col":""},jt=x({__name:"index",setup(n){return(e,t)=>{const o=z("router-view"),i=ge,a=ve;return l(),u(a,{class:"app-container h-full"},{default:r(()=>[c("article",At,[s(zt),s(i,{"flex-1":""},{default:r(()=>[s(o,{"h-full":""},{default:r(({Component:_,route:d})=>[(l(),u(le(_),{key:d.fullPath}))]),_:1})]),_:1})])]),_:1})}}});export{jt as default};
