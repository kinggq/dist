import{aA as U,L as ne,f as S,r as j,K as se,i as oe,d as A,M as re,bK as C,h as L,U as ie,b as ae,T as M,J as le,p as ue,a1 as O,b9 as ce,aG as z,b7 as de,bc as fe,aL as F,_ as D,o as m,j as G,n as f,w as p,q as J,k as N,x as pe,m as q,s as T,v as Y,G as _e,bL as he,aI as ve,t as me,bu as xe,z as I}from"./index.ac5c63a1.js";import{_ as be}from"./add.d6624c97.js";import{b as ge,N as ye}from"./Icon.ee0a60f4.js";import{g as Se,_ as W}from"./Space.5007e240.js";function $e(e){if(typeof e=="number")return{"":e.toString()};const t={};return e.split(/ +/).forEach(n=>{if(n==="")return;const[s,o]=n.split(":");o===void 0?t[""]=s:t[s]=o}),t}function k(e,t){var n;if(e==null)return;const s=$e(e);if(t===void 0)return s[""];if(typeof t=="string")return(n=s[t])!==null&&n!==void 0?n:s[""];if(Array.isArray(t)){for(let o=t.length-1;o>=0;--o){const r=t[o];if(r in s)return s[r]}return s[""]}else{let o,r=-1;return Object.keys(s).forEach(i=>{const a=Number(i);!Number.isNaN(a)&&t>=a&&a>=r&&(r=a,o=s[i])}),o}}function we(e){var t;const n=(t=e.dirs)===null||t===void 0?void 0:t.find(({dir:s})=>s===U);return!!(n&&n.value===!1)}const Re={xs:0,s:640,m:1024,l:1280,xl:1536,"2xl":1920};function Ce(e){return`(min-width: ${e}px)`}const V={};function Ge(e=Re){if(!ne)return S(()=>[]);if(typeof window.matchMedia!="function")return S(()=>[]);const t=j({}),n=Object.keys(e),s=(o,r)=>{o.matches?t.value[r]=!0:t.value[r]=!1};return n.forEach(o=>{const r=e[o];let i,a;V[r]===void 0?(i=window.matchMedia(Ce(r)),i.addEventListener?i.addEventListener("change",c=>{a.forEach(u=>{u(c,o)})}):i.addListener&&i.addListener(c=>{a.forEach(u=>{u(c,o)})}),a=new Set,V[r]={mql:i,cbs:a}):(i=V[r].mql,a=V[r].cbs),a.add(s),i.matches&&a.forEach(c=>{c(i,o)})}),se(()=>{n.forEach(o=>{const{cbs:r}=V[e[o]];r.has(s)&&r.delete(s)})}),S(()=>{const{value:o}=t;return n.filter(r=>o[r])})}const Z=1,K=oe("n-grid"),ee=1,Ne={span:{type:[Number,String],default:ee},offset:{type:[Number,String],default:0},suffix:Boolean,privateOffset:Number,privateSpan:Number,privateColStart:Number,privateShow:{type:Boolean,default:!0}},Be=A({__GRID_ITEM__:!0,name:"GridItem",alias:["Gi"],props:Ne,setup(){const{isSsrRef:e,xGapRef:t,itemStyleRef:n,overflowRef:s,layoutShiftDisabledRef:o}=re(K),r=ie();return{overflow:s,itemStyle:n,layoutShiftDisabled:o,mergedXGap:S(()=>C(t.value||0)),deriveStyle:()=>{e.value;const{privateSpan:i=ee,privateShow:a=!0,privateColStart:c=void 0,privateOffset:u=0}=r.vnode.props,{value:x}=t,b=C(x||0);return{display:a?"":"none",gridColumn:`${c!=null?c:`span ${i}`} / span ${i}`,marginLeft:u?`calc((100% - (${i} - 1) * ${b}) / ${i} * ${u} + ${b} * ${u})`:""}}}},render(){var e,t;if(this.layoutShiftDisabled){const{span:n,offset:s,mergedXGap:o}=this;return L("div",{style:{gridColumn:`span ${n} / span ${n}`,marginLeft:s?`calc((100% - (${n} - 1) * ${o}) / ${n} * ${s} + ${o} * ${s})`:""}},this.$slots)}return L("div",{style:[this.itemStyle,this.deriveStyle()]},(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e,{overflow:this.overflow}))}}),Ee={xs:0,s:640,m:1024,l:1280,xl:1536,xxl:1920},te=24,P="__ssr__",ke={layoutShiftDisabled:Boolean,responsive:{type:[String,Boolean],default:"self"},cols:{type:[Number,String],default:te},itemResponsive:Boolean,collapsed:Boolean,collapsedRows:{type:Number,default:1},itemStyle:[Object,String],xGap:{type:[Number,String],default:0},yGap:{type:[Number,String],default:0}},Ve=A({name:"Grid",inheritAttrs:!1,props:ke,setup(e){const{mergedClsPrefixRef:t,mergedBreakpointsRef:n}=ae(e),s=/^\d+$/,o=j(void 0),r=Ge((n==null?void 0:n.value)||Ee),i=M(()=>!!(e.itemResponsive||!s.test(e.cols.toString())||!s.test(e.xGap.toString())||!s.test(e.yGap.toString()))),a=S(()=>{if(!!i.value)return e.responsive==="self"?o.value:r.value}),c=M(()=>{var d;return(d=Number(k(e.cols.toString(),a.value)))!==null&&d!==void 0?d:te}),u=M(()=>k(e.xGap.toString(),a.value)),x=M(()=>k(e.yGap.toString(),a.value)),b=d=>{o.value=d.contentRect.width},h=d=>{ge(b,d)},B=j(!1),$=S(()=>{if(e.responsive==="self")return h}),_=j(!1),g=j();return le(()=>{const{value:d}=g;d&&d.hasAttribute(P)&&(d.removeAttribute(P),_.value=!0)}),ue(K,{layoutShiftDisabledRef:O(e,"layoutShiftDisabled"),isSsrRef:_,itemStyleRef:O(e,"itemStyle"),xGapRef:u,overflowRef:B}),{isSsr:!ce,contentEl:g,mergedClsPrefix:t,style:S(()=>e.layoutShiftDisabled?{width:"100%",display:"grid",gridTemplateColumns:`repeat(${e.cols}, minmax(0, 1fr))`,columnGap:C(e.xGap),rowGap:C(e.yGap)}:{width:"100%",display:"grid",gridTemplateColumns:`repeat(${c.value}, minmax(0, 1fr))`,columnGap:C(u.value),rowGap:C(x.value)}),isResponsive:i,responsiveQuery:a,responsiveCols:c,handleResize:$,overflow:B}},render(){if(this.layoutShiftDisabled)return L("div",z({ref:"contentEl",class:`${this.mergedClsPrefix}-grid`,style:this.style},this.$attrs),this.$slots);const e=()=>{var t,n,s,o,r,i,a;this.overflow=!1;const c=fe(Se(this)),u=[],{collapsed:x,collapsedRows:b,responsiveCols:h,responsiveQuery:B}=this;c.forEach(l=>{var E,y,v,w;if(((E=l==null?void 0:l.type)===null||E===void 0?void 0:E.__GRID_ITEM__)!==!0)return;if(we(l)){const R=F(l);R.props?R.props.privateShow=!1:R.props={privateShow:!1},u.push({child:R,rawChildSpan:0});return}l.dirs=((y=l.dirs)===null||y===void 0?void 0:y.filter(({dir:R})=>R!==U))||null;const H=F(l),Q=Number((w=k((v=H.props)===null||v===void 0?void 0:v.span,B))!==null&&w!==void 0?w:Z);Q!==0&&u.push({child:H,rawChildSpan:Q})});let $=0;const _=(t=u[u.length-1])===null||t===void 0?void 0:t.child;if(_!=null&&_.props){const l=(n=_.props)===null||n===void 0?void 0:n.suffix;l!==void 0&&l!==!1&&($=(o=(s=_.props)===null||s===void 0?void 0:s.span)!==null&&o!==void 0?o:Z,_.props.privateSpan=$,_.props.privateColStart=h+1-$,_.props.privateShow=(r=_.props.privateShow)!==null&&r!==void 0?r:!0)}let g=0,d=!1;for(const{child:l,rawChildSpan:E}of u){if(d&&(this.overflow=!0),!d){const y=Number((a=k((i=l.props)===null||i===void 0?void 0:i.offset,B))!==null&&a!==void 0?a:0),v=Math.min(E+y,h);if(l.props?(l.props.privateSpan=v,l.props.privateOffset=y):l.props={privateSpan:v,privateOffset:y},x){const w=g%h;v+w>h&&(g+=h-w),v+g+$>b*h?d=!0:g+=v}}d&&(l.props?l.props.privateShow!==!0&&(l.props.privateShow=!1):l.props={privateShow:!1})}return L("div",z({ref:"contentEl",class:`${this.mergedClsPrefix}-grid`,style:this.style,[P]:this.isSsr||void 0},this.$attrs),u.map(({child:l})=>l))};return this.isResponsive&&this.responsive==="self"?L(de,{onResize:this.handleResize},{default:e}):e()}}),je={},Le=N("div",{"text-center":"","py-40px":""},"\u56E2\u961FID: 12413",-1);function Me(e,t){const n=pe;return m(),G("div",null,[f(n,{"w-960px":"","m-auto":"","min-h-600px":"",style:{"box-shadow":"0 12px 16px 0 rgb(0 0 0 / 12%)"}},{default:p(()=>[J(e.$slots,"default")]),_:3}),Le])}const Ae=D(je,[["render",Me]]),De={},Ie=T(" \u521B\u5EFA\u65B0\u9879\u76EE ");function Pe(e,t){const n=be,s=ye,o=Y,r=W;return m(),q(r,{"pb-20px":""},{default:p(()=>[f(o,{type:"primary",icon:"plus"},{icon:p(()=>[f(s,null,{default:p(()=>[f(n)]),_:1})]),default:p(()=>[Ie]),_:1})]),_:1})}const qe=D(De,[["render",Pe]]),Te={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},He=N("path",{fill:"currentColor",d:"M5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h9v2H5v14h14v-9h2v9q0 .825-.587 1.413Q19.825 21 19 21Zm2-4h2v-7H7Zm4 0h2V7h-2Zm4 0h2v-4h-2Zm2-8V7h-2V5h2V3h2v2h2v2h-2v2Z"},null,-1),Qe=[He];function Oe(e,t){return m(),G("svg",Te,Qe)}const ze={name:"material-symbols-add-chart",render:Oe},Fe={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},Ze=N("path",{d:"M18 5.414l1.707-1.707l-1.414-1.414l-1.563 1.562C15.483 2.708 13.824 2 12 2s-3.483.708-4.73 1.855L5.707 2.293L4.293 3.707L6 5.414A6.937 6.937 0 0 0 5 9H3v2h2v2H3v2h2c0 3.86 3.141 7 7 7s7-3.14 7-7h2v-2h-2v-2h2V9h-2a6.937 6.937 0 0 0-1-3.586zM15 15H9v-2h6v2zm0-4H9V9h6v2z",fill:"currentColor"},null,-1),Xe=[Ze];function Ue(e,t){return m(),G("svg",Fe,Xe)}const Je={name:"bx-bxs-bug-alt",render:Ue},Ye={},We={"h-160px":"","text-center":"",flex:"","flex-col":"","justify-center":"","items-center":"","cursor-pointer":"","hover-rd-6px":"",class:"hover-bg-[#eee] dark:hover:bg-[#333]"};function Ke(e,t){return m(),G("div",We,[J(e.$slots,"default")])}const X=D(Ye,[["render",Ke]]),et={"py-10px":"","text-18px":""},tt=N("p",{"py-10px":"","text-18px":""},"\u521B\u5EFA\u9879\u76EE",-1),nt=A({__name:"ProjectListContent",setup(e){const{routerPush:t}=_e(),n=o=>{t({name:xe("projects_items"),query:{id:o}})},s=[{project_name:"bug\u7BA1\u7406",id:2}];return(o,r)=>{const i=Je,a=Be,c=ze,u=Ve;return m(),q(u,{"x-gap":"12",cols:4},{default:p(()=>[(m(),G(ve,null,he(s,(x,b)=>f(a,{key:b},{default:p(()=>[f(X,{onClick:h=>n(x.id)},{default:p(()=>[f(i,{class:"color-[#5ac8fa] text-50px"}),N("p",et,me(x.project_name),1)]),_:2},1032,["onClick"])]),_:2},1024)),64)),f(a,null,{default:p(()=>[f(X,null,{default:p(()=>[f(c,{"text-50px":""}),tt]),_:1})]),_:1})]),_:1})}}}),st={},ot={"absolute-lb":"","w-full":"","p-20px":""},rt=T("\u9879\u76EE\u6A21\u677F"),it=T("\u6240\u6709\u9879\u76EE");function at(e,t){const n=Y,s=W;return m(),G("div",ot,[f(s,null,{default:p(()=>[f(n,{text:"",type:"primary"},{default:p(()=>[rt]),_:1}),f(n,{text:"",type:"primary"},{default:p(()=>[it]),_:1})]),_:1})])}const lt=D(st,[["render",at]]),pt=A({__name:"index",setup(e){return(t,n)=>(m(),q(Ae,null,{default:p(()=>[N("div",null,[f(I(qe)),f(I(nt)),f(I(lt))])]),_:1}))}});export{pt as default};
