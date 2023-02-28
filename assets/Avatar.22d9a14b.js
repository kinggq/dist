import{aP as fe,b1 as Ce,b2 as d,c as U,a as R,aw as $,av as W,au as _,u as F,i as J,d as X,r as O,b as Z,p as me,a1 as pe,aY as ke,f as M,aZ as k,g as Q,a_ as K,aH as D,h as S,b3 as xe,aN as ze,b4 as ye,b5 as Se,M as q,$ as Pe,J as Ie,ay as Re,K as $e,b6 as He,b7 as Be}from"./index.ac5c63a1.js";const Me=e=>{const{textColor2:h,primaryColorHover:r,primaryColorPressed:v,primaryColor:t,infoColor:l,successColor:s,warningColor:c,errorColor:a,baseColor:C,borderColor:m,opacityDisabled:g,tagColor:b,closeIconColor:n,closeIconColorHover:u,closeIconColorPressed:y,borderRadiusSmall:f,fontSizeMini:x,fontSizeTiny:E,fontSizeSmall:o,fontSizeMedium:i,heightMini:P,heightTiny:z,heightSmall:p,heightMedium:H,closeColorHover:I,closeColorPressed:B,buttonColor2Hover:w,buttonColor2Pressed:j,fontWeightStrong:L}=e;return Object.assign(Object.assign({},Ce),{closeBorderRadius:f,heightTiny:P,heightSmall:z,heightMedium:p,heightLarge:H,borderRadius:f,opacityDisabled:g,fontSizeTiny:x,fontSizeSmall:E,fontSizeMedium:o,fontSizeLarge:i,fontWeightStrong:L,textColorCheckable:h,textColorHoverCheckable:h,textColorPressedCheckable:h,textColorChecked:C,colorCheckable:"#0000",colorHoverCheckable:w,colorPressedCheckable:j,colorChecked:t,colorCheckedHover:r,colorCheckedPressed:v,border:`1px solid ${m}`,textColor:h,color:b,colorBordered:"rgb(250, 250, 252)",closeIconColor:n,closeIconColorHover:u,closeIconColorPressed:y,closeColorHover:I,closeColorPressed:B,borderPrimary:`1px solid ${d(t,{alpha:.3})}`,textColorPrimary:t,colorPrimary:d(t,{alpha:.12}),colorBorderedPrimary:d(t,{alpha:.1}),closeIconColorPrimary:t,closeIconColorHoverPrimary:t,closeIconColorPressedPrimary:t,closeColorHoverPrimary:d(t,{alpha:.12}),closeColorPressedPrimary:d(t,{alpha:.18}),borderInfo:`1px solid ${d(l,{alpha:.3})}`,textColorInfo:l,colorInfo:d(l,{alpha:.12}),colorBorderedInfo:d(l,{alpha:.1}),closeIconColorInfo:l,closeIconColorHoverInfo:l,closeIconColorPressedInfo:l,closeColorHoverInfo:d(l,{alpha:.12}),closeColorPressedInfo:d(l,{alpha:.18}),borderSuccess:`1px solid ${d(s,{alpha:.3})}`,textColorSuccess:s,colorSuccess:d(s,{alpha:.12}),colorBorderedSuccess:d(s,{alpha:.1}),closeIconColorSuccess:s,closeIconColorHoverSuccess:s,closeIconColorPressedSuccess:s,closeColorHoverSuccess:d(s,{alpha:.12}),closeColorPressedSuccess:d(s,{alpha:.18}),borderWarning:`1px solid ${d(c,{alpha:.35})}`,textColorWarning:c,colorWarning:d(c,{alpha:.15}),colorBorderedWarning:d(c,{alpha:.12}),closeIconColorWarning:c,closeIconColorHoverWarning:c,closeIconColorPressedWarning:c,closeColorHoverWarning:d(c,{alpha:.12}),closeColorPressedWarning:d(c,{alpha:.18}),borderError:`1px solid ${d(a,{alpha:.23})}`,textColorError:a,colorError:d(a,{alpha:.1}),colorBorderedError:d(a,{alpha:.08}),closeIconColorError:a,closeIconColorHoverError:a,closeIconColorPressedError:a,closeColorHoverError:d(a,{alpha:.12}),closeColorPressedError:d(a,{alpha:.18})})},_e={name:"Tag",common:fe,self:Me},Ee=_e,Oe={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},we=U("tag",`
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[R("strong",`
 font-weight: var(--n-font-weight-strong);
 `),$("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),$("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),$("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),$("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),R("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[$("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),$("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),R("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),R("icon, avatar",[R("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),R("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),R("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[W("disabled",[_("&:hover","background-color: var(--n-color-hover-checkable);",[W("checked","color: var(--n-text-color-hover-checkable);")]),_("&:active","background-color: var(--n-color-pressed-checkable);",[W("checked","color: var(--n-text-color-pressed-checkable);")])]),R("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[W("disabled",[_("&:hover","background-color: var(--n-color-checked-hover);"),_("&:active","background-color: var(--n-color-checked-pressed);")])])])]),je=Object.assign(Object.assign(Object.assign({},F.props),Oe),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},onCheckedChange:{type:Function,validator:()=>!0,default:void 0}}),ee=J("n-tag"),Ue=X({name:"Tag",props:je,setup(e){const h=O(null),{mergedBorderedRef:r,mergedClsPrefixRef:v,inlineThemeDisabled:t,mergedRtlRef:l}=Z(e),s=F("Tag","-tag",we,Ee,e,v);me(ee,{roundRef:pe(e,"round")});function c(n){if(!e.disabled&&e.checkable){const{checked:u,onCheckedChange:y,onUpdateChecked:f,"onUpdate:checked":x}=e;f&&f(!u),x&&x(!u),y&&y(!u)}}function a(n){if(e.triggerClickOnClose||n.stopPropagation(),!e.disabled){const{onClose:u}=e;u&&ze(u,n)}}const C={setTextContent(n){const{value:u}=h;u&&(u.textContent=n)}},m=ke("Tag",l,v),g=M(()=>{const{type:n,size:u,color:{color:y,textColor:f}={}}=e,{common:{cubicBezierEaseInOut:x},self:{padding:E,closeMargin:o,closeMarginRtl:i,borderRadius:P,opacityDisabled:z,textColorCheckable:p,textColorHoverCheckable:H,textColorPressedCheckable:I,textColorChecked:B,colorCheckable:w,colorHoverCheckable:j,colorPressedCheckable:L,colorChecked:T,colorCheckedHover:oe,colorCheckedPressed:re,closeBorderRadius:ne,fontWeightStrong:ae,[k("colorBordered",n)]:te,[k("closeSize",u)]:le,[k("closeIconSize",u)]:se,[k("fontSize",u)]:ce,[k("height",u)]:G,[k("color",n)]:ie,[k("textColor",n)]:de,[k("border",n)]:he,[k("closeIconColor",n)]:Y,[k("closeIconColorHover",n)]:ue,[k("closeIconColorPressed",n)]:ve,[k("closeColorHover",n)]:ge,[k("closeColorPressed",n)]:be}}=s.value;return{"--n-font-weight-strong":ae,"--n-avatar-size-override":`calc(${G} - 8px)`,"--n-bezier":x,"--n-border-radius":P,"--n-border":he,"--n-close-icon-size":se,"--n-close-color-pressed":be,"--n-close-color-hover":ge,"--n-close-border-radius":ne,"--n-close-icon-color":Y,"--n-close-icon-color-hover":ue,"--n-close-icon-color-pressed":ve,"--n-close-icon-color-disabled":Y,"--n-close-margin":o,"--n-close-margin-rtl":i,"--n-close-size":le,"--n-color":y||(r.value?te:ie),"--n-color-checkable":w,"--n-color-checked":T,"--n-color-checked-hover":oe,"--n-color-checked-pressed":re,"--n-color-hover-checkable":j,"--n-color-pressed-checkable":L,"--n-font-size":ce,"--n-height":G,"--n-opacity-disabled":z,"--n-padding":E,"--n-text-color":f||de,"--n-text-color-checkable":p,"--n-text-color-checked":B,"--n-text-color-hover-checkable":H,"--n-text-color-pressed-checkable":I}}),b=t?Q("tag",M(()=>{let n="";const{type:u,size:y,color:{color:f,textColor:x}={}}=e;return n+=u[0],n+=y[0],f&&(n+=`a${K(f)}`),x&&(n+=`b${K(x)}`),r.value&&(n+="c"),n}),g,e):void 0;return Object.assign(Object.assign({},C),{rtlEnabled:m,mergedClsPrefix:v,contentRef:h,mergedBordered:r,handleClick:c,handleCloseClick:a,cssVars:t?void 0:g,themeClass:b==null?void 0:b.themeClass,onRender:b==null?void 0:b.onRender})},render(){var e,h;const{mergedClsPrefix:r,rtlEnabled:v,closable:t,color:{borderColor:l}={},round:s,onRender:c,$slots:a}=this;c==null||c();const C=D(a.avatar,g=>g&&S("div",{class:`${r}-tag__avatar`},g)),m=D(a.icon,g=>g&&S("div",{class:`${r}-tag__icon`},g));return S("div",{class:[`${r}-tag`,this.themeClass,{[`${r}-tag--rtl`]:v,[`${r}-tag--strong`]:this.strong,[`${r}-tag--disabled`]:this.disabled,[`${r}-tag--checkable`]:this.checkable,[`${r}-tag--checked`]:this.checkable&&this.checked,[`${r}-tag--round`]:s,[`${r}-tag--avatar`]:C,[`${r}-tag--icon`]:m,[`${r}-tag--closable`]:t}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},m||C,S("span",{class:`${r}-tag__content`,ref:"contentRef"},(h=(e=this.$slots).default)===null||h===void 0?void 0:h.call(e)),!this.checkable&&t?S(xe,{clsPrefix:r,class:`${r}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:s,absolute:!0}):null,!this.checkable&&this.mergedBordered?S("div",{class:`${r}-tag__border`,style:{borderColor:l}}):null)}}),Le=!1,Te=(e={})=>{var h;const{root:r=null}=e;return{hash:`${e.rootMargin||"0px 0px 0px 0px"}-${Array.isArray(e.threshold)?e.threshold.join(","):(h=e.threshold)!==null&&h!==void 0?h:"0"}`,options:Object.assign(Object.assign({},e),{root:(typeof r=="string"?document.querySelector(r):r)||document.documentElement})}},A=new WeakMap,N=new WeakMap,V=new WeakMap,We=(e,h,r)=>{if(!e)return()=>{};const v=Te(h),{root:t}=v.options;let l;const s=A.get(t);s?l=s:(l=new Map,A.set(t,l));let c,a;l.has(v.hash)?(a=l.get(v.hash),a[1].has(e)||(c=a[0],a[1].add(e),c.observe(e))):(c=new IntersectionObserver(g=>{g.forEach(b=>{if(b.isIntersecting){const n=N.get(b.target),u=V.get(b.target);n&&n(),u&&(u.value=!0)}})},v.options),c.observe(e),a=[c,new Set([e])],l.set(v.hash,a));let C=!1;const m=()=>{C||(N.delete(e),V.delete(e),C=!0,a[1].has(e)&&(a[0].unobserve(e),a[1].delete(e)),a[1].size<=0&&l.delete(v.hash),l.size||A.delete(t))};return N.set(e,m),V.set(e,r),m},Fe=J("n-avatar-group"),Ae=U("avatar",`
 width: var(--n-merged-size);
 height: var(--n-merged-size);
 color: #FFF;
 font-size: var(--n-font-size);
 display: inline-flex;
 position: relative;
 overflow: hidden;
 text-align: center;
 border: var(--n-border);
 border-radius: var(--n-border-radius);
 --n-merged-color: var(--n-color);
 background-color: var(--n-merged-color);
 transition:
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[ye(_("&","--n-merged-color: var(--n-color-modal);")),Se(_("&","--n-merged-color: var(--n-color-popover);")),_("img",`
 width: 100%;
 height: 100%;
 `),$("text",`
 white-space: nowrap;
 display: inline-block;
 position: absolute;
 left: 50%;
 top: 50%;
 `),U("icon",`
 vertical-align: bottom;
 font-size: calc(var(--n-merged-size) - 6px);
 `),$("text","line-height: 1.25")]),Ne=Object.assign(Object.assign({},F.props),{size:[String,Number],src:String,circle:{type:Boolean,default:void 0},objectFit:String,round:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},onError:Function,fallbackSrc:String,intersectionObserverOptions:Object,lazy:Boolean,color:String}),Ke=X({name:"Avatar",props:Ne,setup(e){const{mergedClsPrefixRef:h,inlineThemeDisabled:r}=Z(e),v=O(!1);let t=null;const l=O(null),s=O(null),c=()=>{const{value:o}=l;if(o&&(t===null||t!==o.innerHTML)){t=o.innerHTML;const{value:i}=s;if(i){const{offsetWidth:P,offsetHeight:z}=i,{offsetWidth:p,offsetHeight:H}=o,I=.9,B=Math.min(P/p*I,z/H*I,1);o.style.transform=`translateX(-50%) translateY(-50%) scale(${B})`}}},a=q(Fe,null),C=M(()=>{const{size:o}=e;if(o)return o;const{size:i}=a||{};return i||"medium"}),m=F("Avatar","-avatar",Ae,He,e,h),g=q(ee,null),b=M(()=>{if(a)return!0;const{round:o,circle:i}=e;return o!==void 0||i!==void 0?o||i:g?g.roundRef.value:!1}),n=M(()=>a?!0:e.bordered||!1),u=o=>{if(!x.value)return;v.value=!0;const{onError:i}=e;i&&i(o)};Pe(()=>e.src,()=>v.value=!1);const y=M(()=>{const o=C.value,i=b.value,P=n.value,{color:z}=e,{self:{borderRadius:p,fontSize:H,color:I,border:B,colorModal:w,colorPopover:j},common:{cubicBezierEaseInOut:L}}=m.value;let T;return typeof o=="number"?T=`${o}px`:T=m.value.self[k("height",o)],{"--n-font-size":H,"--n-border":P?B:"none","--n-border-radius":i?"50%":p,"--n-color":z||I,"--n-color-modal":z||w,"--n-color-popover":z||j,"--n-bezier":L,"--n-merged-size":`var(--n-avatar-size-override, ${T})`}}),f=r?Q("avatar",M(()=>{const o=C.value,i=b.value,P=n.value,{color:z}=e;let p="";return o&&(typeof o=="number"?p+=`a${o}`:p+=o[0]),i&&(p+="b"),P&&(p+="c"),z&&(p+=K(z)),p}),y,e):void 0,x=O(!e.lazy);Ie(()=>{if(Le)return;let o;const i=Re(()=>{o==null||o(),o=void 0,e.lazy&&(o=We(s.value,e.intersectionObserverOptions,x))});$e(()=>{i(),o==null||o()})});const E=O(!e.lazy);return{textRef:l,selfRef:s,mergedRoundRef:b,mergedClsPrefix:h,fitTextTransform:c,cssVars:r?void 0:y,themeClass:f==null?void 0:f.themeClass,onRender:f==null?void 0:f.onRender,hasLoadError:v,handleError:u,shouldStartLoading:x,loaded:E,mergedOnLoad:o=>{const{onLoad:i}=e;i==null||i(o),E.value=!0}}},render(){var e,h;const{$slots:r,src:v,mergedClsPrefix:t,lazy:l,onRender:s,mergedOnLoad:c,shouldStartLoading:a,loaded:C,hasLoadError:m}=this;s==null||s();let g;const b=!C&&!m&&((h=(e=this.$slots).placeholder)===null||h===void 0?void 0:h.call(e));return this.hasLoadError?g=S("img",{src:this.fallbackSrc,style:{objectFit:this.objectFit}}):g=D(r.default,n=>{if(n)return S(Be,{onResize:this.fitTextTransform},{default:()=>S("span",{ref:"textRef",class:`${t}-avatar__text`},n)});if(v)return S("img",{loading:"eager",src:a||C?v:void 0,onLoad:c,"data-image-src":v,onError:this.handleError,style:[{objectFit:this.objectFit},b?{height:"0",width:"0",visibility:"hidden",position:"absolute"}:""]})}),S("span",{ref:"selfRef",class:[`${t}-avatar`,this.themeClass],style:this.cssVars},g,l&&b)}});export{Ke as _,Fe as a,Ue as b};
