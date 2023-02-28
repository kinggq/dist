import{_ as Ee,a as be,V as to,b as no,c as ro,r as io,l as lo,u as ao}from"./interface.5f83e526.js";import{r as V,$ as ye,bd as co,be as so,bf as uo,K as vo,S as ie,bg as fo,R as le,d as j,h as u,u as te,bh as ho,f as S,i as ne,M as D,Q as Le,p as U,T as oe,aC as po,aG as _e,bi as W,bj as mo,aI as Me,aJ as go,O as bo,P as yo,c as C,aX as xo,au as P,av as ee,a as O,aw as w,a1 as G,b as Fe,aN as q,aZ as Q,g as $e,aM as de,bk as wo,bl as Co,aV as So,bm as xe,bn as zo,ay as ke,bo as Io}from"./index.ac5c63a1.js";import{N as No}from"./Icon.ee0a60f4.js";import{u as pe}from"./get.bca912e4.js";function Re(e,t){let{target:o}=e;for(;o;){if(o.dataset&&o.dataset[t]!==void 0)return!0;o=o.parentElement}return!1}function Po(e){return t=>{t?e.value=t.$el:e.value=null}}function ko(e,t,o){if(!t)return e;const n=V(e.value);let r=null;return ye(e,l=>{r!==null&&window.clearTimeout(r),l===!0?o&&!o.value?n.value=!0:r=window.setTimeout(()=>{n.value=!0},t):n.value=!1}),n}function Ro(e={},t){const o=co({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:n,keyup:r}=e,l=d=>{switch(d.key){case"Control":o.ctrl=!0;break;case"Meta":o.command=!0,o.win=!0;break;case"Shift":o.shift=!0;break;case"Tab":o.tab=!0;break}n!==void 0&&Object.keys(n).forEach(v=>{if(v!==d.key)return;const h=n[v];if(typeof h=="function")h(d);else{const{stop:f=!1,prevent:m=!1}=h;f&&d.stopPropagation(),m&&d.preventDefault(),h.handler(d)}})},a=d=>{switch(d.key){case"Control":o.ctrl=!1;break;case"Meta":o.command=!1,o.win=!1;break;case"Shift":o.shift=!1;break;case"Tab":o.tab=!1;break}r!==void 0&&Object.keys(r).forEach(v=>{if(v!==d.key)return;const h=r[v];if(typeof h=="function")h(d);else{const{stop:f=!1,prevent:m=!1}=h;f&&d.stopPropagation(),m&&d.preventDefault(),h.handler(d)}})},s=()=>{(t===void 0||t.value)&&(le("keydown",document,l),le("keyup",document,a)),t!==void 0&&ye(t,d=>{d?(le("keydown",document,l),le("keyup",document,a)):(ie("keydown",document,l),ie("keyup",document,a))})};return so()?(uo(s),vo(()=>{(t===void 0||t.value)&&(ie("keydown",document,l),ie("keyup",document,a))})):s(),fo(o)}const Ao=j({name:"ChevronRight",render(){return u("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},u("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),Ko=j({name:"ChevronDownFilled",render(){return u("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},u("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}});function Ae(e){return Array.isArray(e)?e:[e]}const me={STOP:"STOP"};function je(e,t){const o=t(e);e.children!==void 0&&o!==me.STOP&&e.children.forEach(n=>je(n,t))}function Oo(e,t={}){const{preserveGroup:o=!1}=t,n=[],r=o?a=>{a.isLeaf||(n.push(a.key),l(a.children))}:a=>{a.isLeaf||(a.isGroup||n.push(a.key),l(a.children))};function l(a){a.forEach(r)}return l(e),n}function To(e,t){const{isLeaf:o}=e;return o!==void 0?o:!t(e)}function Ho(e){return e.children}function Eo(e){return e.key}function Lo(){return!1}function _o(e,t){const{isLeaf:o}=e;return!(o===!1&&!Array.isArray(t(e)))}function Mo(e){return e.disabled===!0}function Fo(e,t){return e.isLeaf===!1&&!Array.isArray(t(e))}function ve(e){var t;return e==null?[]:Array.isArray(e)?e:(t=e.checkedKeys)!==null&&t!==void 0?t:[]}function fe(e){var t;return e==null||Array.isArray(e)?[]:(t=e.indeterminateKeys)!==null&&t!==void 0?t:[]}function $o(e,t){const o=new Set(e);return t.forEach(n=>{o.has(n)||o.add(n)}),Array.from(o)}function jo(e,t){const o=new Set(e);return t.forEach(n=>{o.has(n)&&o.delete(n)}),Array.from(o)}function Do(e){return(e==null?void 0:e.type)==="group"}function kt(e){const t=new Map;return e.forEach((o,n)=>{t.set(o.key,n)}),o=>{var n;return(n=t.get(o))!==null&&n!==void 0?n:null}}class Bo extends Error{constructor(){super(),this.message="SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."}}function Go(e,t,o,n){return ce(t.concat(e),o,n,!1)}function Vo(e,t){const o=new Set;return e.forEach(n=>{const r=t.treeNodeMap.get(n);if(r!==void 0){let l=r.parent;for(;l!==null&&!(l.disabled||o.has(l.key));)o.add(l.key),l=l.parent}}),o}function Uo(e,t,o,n){const r=ce(t,o,n,!1),l=ce(e,o,n,!0),a=Vo(e,o),s=[];return r.forEach(d=>{(l.has(d)||a.has(d))&&s.push(d)}),s.forEach(d=>r.delete(d)),r}function he(e,t){const{checkedKeys:o,keysToCheck:n,keysToUncheck:r,indeterminateKeys:l,cascade:a,leafOnly:s,checkStrategy:d,allowNotLoaded:v}=e;if(!a)return n!==void 0?{checkedKeys:$o(o,n),indeterminateKeys:Array.from(l)}:r!==void 0?{checkedKeys:jo(o,r),indeterminateKeys:Array.from(l)}:{checkedKeys:Array.from(o),indeterminateKeys:Array.from(l)};const{levelTreeNodeMap:h}=t;let f;r!==void 0?f=Uo(r,o,t,v):n!==void 0?f=Go(n,o,t,v):f=ce(o,t,v,!1);const m=d==="parent",K=d==="child"||s,z=f,T=new Set,A=Math.max.apply(null,Array.from(h.keys()));for(let H=A;H>=0;H-=1){const B=H===0,$=h.get(H);for(const p of $){if(p.isLeaf)continue;const{key:g,shallowLoaded:L}=p;if(K&&L&&p.children.forEach(i=>{!i.disabled&&!i.isLeaf&&i.shallowLoaded&&z.has(i.key)&&z.delete(i.key)}),p.disabled||!L)continue;let M=!0,y=!1,x=!0;for(const i of p.children){const I=i.key;if(!i.disabled){if(x&&(x=!1),z.has(I))y=!0;else if(T.has(I)){y=!0,M=!1;break}else if(M=!1,y)break}}M&&!x?(m&&p.children.forEach(i=>{!i.disabled&&z.has(i.key)&&z.delete(i.key)}),z.add(g)):y&&T.add(g),B&&K&&z.has(g)&&z.delete(g)}}return{checkedKeys:Array.from(z),indeterminateKeys:Array.from(T)}}function ce(e,t,o,n){const{treeNodeMap:r,getChildren:l}=t,a=new Set,s=new Set(e);return e.forEach(d=>{const v=r.get(d);v!==void 0&&je(v,h=>{if(h.disabled)return me.STOP;const{key:f}=h;if(!a.has(f)&&(a.add(f),s.add(f),Fo(h.rawNode,l))){if(n)return me.STOP;if(!o)throw new Bo}})}),s}function qo(e,{includeGroup:t=!1,includeSelf:o=!0},n){var r;const l=n.treeNodeMap;let a=e==null?null:(r=l.get(e))!==null&&r!==void 0?r:null;const s={keyPath:[],treeNodePath:[],treeNode:a};if(a!=null&&a.ignored)return s.treeNode=null,s;for(;a;)!a.ignored&&(t||!a.isGroup)&&s.treeNodePath.push(a),a=a.parent;return s.treeNodePath.reverse(),o||s.treeNodePath.pop(),s.keyPath=s.treeNodePath.map(d=>d.key),s}function Wo(e){if(e.length===0)return null;const t=e[0];return t.isGroup||t.ignored||t.disabled?t.getNext():t}function Zo(e,t){const o=e.siblings,n=o.length,{index:r}=e;return t?o[(r+1)%n]:r===o.length-1?null:o[r+1]}function Ke(e,t,{loop:o=!1,includeDisabled:n=!1}={}){const r=t==="prev"?Xo:Zo,l={reverse:t==="prev"};let a=!1,s=null;function d(v){if(v!==null){if(v===e){if(!a)a=!0;else if(!e.disabled&&!e.isGroup){s=e;return}}else if((!v.disabled||n)&&!v.ignored&&!v.isGroup){s=v;return}if(v.isGroup){const h=we(v,l);h!==null?s=h:d(r(v,o))}else{const h=r(v,!1);if(h!==null)d(h);else{const f=Jo(v);f!=null&&f.isGroup?d(r(f,o)):o&&d(r(v,!0))}}}}return d(e),s}function Xo(e,t){const o=e.siblings,n=o.length,{index:r}=e;return t?o[(r-1+n)%n]:r===0?null:o[r-1]}function Jo(e){return e.parent}function we(e,t={}){const{reverse:o=!1}=t,{children:n}=e;if(n){const{length:r}=n,l=o?r-1:0,a=o?-1:r,s=o?-1:1;for(let d=l;d!==a;d+=s){const v=n[d];if(!v.disabled&&!v.ignored)if(v.isGroup){const h=we(v,t);if(h!==null)return h}else return v}}return null}const Qo={getChild(){return this.ignored?null:we(this)},getParent(){const{parent:e}=this;return e!=null&&e.isGroup?e.getParent():e},getNext(e={}){return Ke(this,"next",e)},getPrev(e={}){return Ke(this,"prev",e)}};function Yo(e,t){const o=t?new Set(t):void 0,n=[];function r(l){l.forEach(a=>{n.push(a),!(a.isLeaf||!a.children||a.ignored)&&(a.isGroup||o===void 0||o.has(a.key))&&r(a.children)})}return r(e),n}function et(e,t){const o=e.key;for(;t;){if(t.key===o)return!0;t=t.parent}return!1}function De(e,t,o,n,r,l=null,a=0){const s=[];return e.forEach((d,v)=>{var h;const f=Object.create(n);if(f.rawNode=d,f.siblings=s,f.level=a,f.index=v,f.isFirstChild=v===0,f.isLastChild=v+1===e.length,f.parent=l,!f.ignored){const m=r(d);Array.isArray(m)&&(f.children=De(m,t,o,n,r,f,a+1))}s.push(f),t.set(f.key,f),o.has(a)||o.set(a,[]),(h=o.get(a))===null||h===void 0||h.push(f)}),s}function Be(e,t={}){var o;const n=new Map,r=new Map,{getDisabled:l=Mo,getIgnored:a=Lo,getIsGroup:s=Do,getKey:d=Eo}=t,v=(o=t.getChildren)!==null&&o!==void 0?o:Ho,h=t.ignoreEmptyChildren?p=>{const g=v(p);return Array.isArray(g)?g.length?g:null:g}:v,f=Object.assign({get key(){return d(this.rawNode)},get disabled(){return l(this.rawNode)},get isGroup(){return s(this.rawNode)},get isLeaf(){return To(this.rawNode,h)},get shallowLoaded(){return _o(this.rawNode,h)},get ignored(){return a(this.rawNode)},contains(p){return et(this,p)}},Qo),m=De(e,n,r,f,h);function K(p){if(p==null)return null;const g=n.get(p);return g&&!g.isGroup&&!g.ignored?g:null}function z(p){if(p==null)return null;const g=n.get(p);return g&&!g.ignored?g:null}function T(p,g){const L=z(p);return L?L.getPrev(g):null}function A(p,g){const L=z(p);return L?L.getNext(g):null}function H(p){const g=z(p);return g?g.getParent():null}function B(p){const g=z(p);return g?g.getChild():null}const $={treeNodes:m,treeNodeMap:n,levelTreeNodeMap:r,maxLevel:Math.max(...r.keys()),getChildren:h,getFlattenedNodes(p){return Yo(m,p)},getNode:K,getPrev:T,getNext:A,getParent:H,getChild:B,getFirstAvailableNode(){return Wo(m)},getPath(p,g={}){return qo(p,g,$)},getCheckedKeys(p,g={}){const{cascade:L=!0,leafOnly:M=!1,checkStrategy:y="all",allowNotLoaded:x=!1}=g;return he({checkedKeys:ve(p),indeterminateKeys:fe(p),cascade:L,leafOnly:M,checkStrategy:y,allowNotLoaded:x},$)},check(p,g,L={}){const{cascade:M=!0,leafOnly:y=!1,checkStrategy:x="all",allowNotLoaded:i=!1}=L;return he({checkedKeys:ve(g),indeterminateKeys:fe(g),keysToCheck:p==null?[]:Ae(p),cascade:M,leafOnly:y,checkStrategy:x,allowNotLoaded:i},$)},uncheck(p,g,L={}){const{cascade:M=!0,leafOnly:y=!1,checkStrategy:x="all",allowNotLoaded:i=!1}=L;return he({checkedKeys:ve(g),indeterminateKeys:fe(g),keysToUncheck:p==null?[]:Ae(p),cascade:M,leafOnly:y,checkStrategy:x,allowNotLoaded:i},$)},getNonLeafKeys(p={}){return Oo(m,p)}};return $}const ot=Object.assign(Object.assign({},be),te.props),tt=j({name:"Tooltip",props:ot,__popover__:!0,setup(e){const t=te("Tooltip","-tooltip",void 0,ho,e),o=V(null);return Object.assign(Object.assign({},{syncPosition(){o.value.syncPosition()},setShow(r){o.value.setShow(r)}}),{popoverRef:o,mergedTheme:t,popoverThemeOverrides:S(()=>t.value.self)})},render(){const{mergedTheme:e,internalExtraClass:t}=this;return u(Ee,Object.assign(Object.assign({},this.$props),{theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:this.popoverThemeOverrides,internalExtraClass:t.concat("tooltip"),ref:"popoverRef"}),this.$slots)}}),Ge=j({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return u("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),Ce=ne("n-dropdown-menu"),se=ne("n-dropdown"),Oe=ne("n-dropdown-option");function ge(e,t){return e.type==="submenu"||e.type===void 0&&e[t]!==void 0}function nt(e){return e.type==="group"}function Ve(e){return e.type==="divider"}function rt(e){return e.type==="render"}const Ue=j({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const t=D(se),{hoverKeyRef:o,keyboardKeyRef:n,lastToggledSubmenuKeyRef:r,pendingKeyPathRef:l,activeKeyPathRef:a,animatedRef:s,mergedShowRef:d,renderLabelRef:v,renderIconRef:h,labelFieldRef:f,childrenFieldRef:m,renderOptionRef:K,nodePropsRef:z,menuPropsRef:T}=t,A=D(Oe,null),H=D(Ce),B=D(Le),$=S(()=>e.tmNode.rawNode),p=S(()=>{const{value:N}=m;return ge(e.tmNode.rawNode,N)}),g=S(()=>{const{disabled:N}=e.tmNode;return N}),L=S(()=>{if(!p.value)return!1;const{key:N,disabled:F}=e.tmNode;if(F)return!1;const{value:Z}=o,{value:X}=n,{value:ue}=r,{value:J}=l;return Z!==null?J.includes(N):X!==null?J.includes(N)&&J[J.length-1]!==N:ue!==null?J.includes(N):!1}),M=S(()=>n.value===null&&!s.value),y=ko(L,300,M),x=S(()=>!!(A!=null&&A.enteringSubmenuRef.value)),i=V(!1);U(Oe,{enteringSubmenuRef:i});function I(){i.value=!0}function b(){i.value=!1}function E(){const{parentKey:N,tmNode:F}=e;F.disabled||!d.value||(r.value=N,n.value=null,o.value=F.key)}function R(){const{tmNode:N}=e;N.disabled||!d.value||o.value!==N.key&&E()}function k(N){if(e.tmNode.disabled||!d.value)return;const{relatedTarget:F}=N;F&&!Re({target:F},"dropdownOption")&&!Re({target:F},"scrollbarRail")&&(o.value=null)}function c(){const{value:N}=p,{tmNode:F}=e;!d.value||!N&&!F.disabled&&(t.doSelect(F.key,F.rawNode),t.doUpdateShow(!1))}return{labelField:f,renderLabel:v,renderIcon:h,siblingHasIcon:H.showIconRef,siblingHasSubmenu:H.hasSubmenuRef,menuProps:T,popoverBody:B,animated:s,mergedShowSubmenu:S(()=>y.value&&!x.value),rawNode:$,hasSubmenu:p,pending:oe(()=>{const{value:N}=l,{key:F}=e.tmNode;return N.includes(F)}),childActive:oe(()=>{const{value:N}=a,{key:F}=e.tmNode,Z=N.findIndex(X=>F===X);return Z===-1?!1:Z<N.length-1}),active:oe(()=>{const{value:N}=a,{key:F}=e.tmNode,Z=N.findIndex(X=>F===X);return Z===-1?!1:Z===N.length-1}),mergedDisabled:g,renderOption:K,nodeProps:z,handleClick:c,handleMouseMove:R,handleMouseEnter:E,handleMouseLeave:k,handleSubmenuBeforeEnter:I,handleSubmenuAfterEnter:b}},render(){var e,t;const{animated:o,rawNode:n,mergedShowSubmenu:r,clsPrefix:l,siblingHasIcon:a,siblingHasSubmenu:s,renderLabel:d,renderIcon:v,renderOption:h,nodeProps:f,props:m,scrollable:K}=this;let z=null;if(r){const B=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,n,n.children);z=u(qe,Object.assign({},B,{clsPrefix:l,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const T={class:[`${l}-dropdown-option-body`,this.pending&&`${l}-dropdown-option-body--pending`,this.active&&`${l}-dropdown-option-body--active`,this.childActive&&`${l}-dropdown-option-body--child-active`,this.mergedDisabled&&`${l}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},A=f==null?void 0:f(n),H=u("div",Object.assign({class:[`${l}-dropdown-option`,A==null?void 0:A.class],"data-dropdown-option":!0},A),u("div",_e(T,m),[u("div",{class:[`${l}-dropdown-option-body__prefix`,a&&`${l}-dropdown-option-body__prefix--show-icon`]},[v?v(n):W(n.icon)]),u("div",{"data-dropdown-option":!0,class:`${l}-dropdown-option-body__label`},d?d(n):W((t=n[this.labelField])!==null&&t!==void 0?t:n.title)),u("div",{"data-dropdown-option":!0,class:[`${l}-dropdown-option-body__suffix`,s&&`${l}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?u(No,null,{default:()=>u(Ao,null)}):null)]),this.hasSubmenu?u(to,null,{default:()=>[u(no,null,{default:()=>u("div",{class:`${l}-dropdown-offset-container`},u(ro,{show:this.mergedShowSubmenu,placement:this.placement,to:K&&this.popoverBody||void 0,teleportDisabled:!K},{default:()=>u("div",{class:`${l}-dropdown-menu-wrapper`},o?u(po,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>z}):z)}))})]}):null);return h?h({node:H,option:n}):H}}),it=j({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:t}=D(Ce),{renderLabelRef:o,labelFieldRef:n,nodePropsRef:r,renderOptionRef:l}=D(se);return{labelField:n,showIcon:e,hasSubmenu:t,renderLabel:o,nodeProps:r,renderOption:l}},render(){var e;const{clsPrefix:t,hasSubmenu:o,showIcon:n,nodeProps:r,renderLabel:l,renderOption:a}=this,{rawNode:s}=this.tmNode,d=u("div",Object.assign({class:`${t}-dropdown-option`},r==null?void 0:r(s)),u("div",{class:`${t}-dropdown-option-body ${t}-dropdown-option-body--group`},u("div",{"data-dropdown-option":!0,class:[`${t}-dropdown-option-body__prefix`,n&&`${t}-dropdown-option-body__prefix--show-icon`]},W(s.icon)),u("div",{class:`${t}-dropdown-option-body__label`,"data-dropdown-option":!0},l?l(s):W((e=s.title)!==null&&e!==void 0?e:s[this.labelField])),u("div",{class:[`${t}-dropdown-option-body__suffix`,o&&`${t}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return a?a({node:d,option:s}):d}}),lt=j({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:t,clsPrefix:o}=this,{children:n}=e;return u(Me,null,u(it,{clsPrefix:o,tmNode:e,key:e.key}),n==null?void 0:n.map(r=>Ve(r.rawNode)?u(Ge,{clsPrefix:o,key:r.key}):r.isGroup?(mo("dropdown","`group` node is not allowed to be put in `group` node."),null):u(Ue,{clsPrefix:o,tmNode:r,parentKey:t,key:r.key})))}}),at=j({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:t}}=this.tmNode;return u("div",t,[e==null?void 0:e()])}}),qe=j({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:t,childrenFieldRef:o}=D(se);U(Ce,{showIconRef:S(()=>{const r=t.value;return e.tmNodes.some(l=>{var a;if(l.isGroup)return(a=l.children)===null||a===void 0?void 0:a.some(({rawNode:d})=>r?r(d):d.icon);const{rawNode:s}=l;return r?r(s):s.icon})}),hasSubmenuRef:S(()=>{const{value:r}=o;return e.tmNodes.some(l=>{var a;if(l.isGroup)return(a=l.children)===null||a===void 0?void 0:a.some(({rawNode:d})=>ge(d,r));const{rawNode:s}=l;return ge(s,r)})})});const n=V(null);return U(bo,null),U(yo,null),U(Le,n),{bodyRef:n}},render(){const{parentKey:e,clsPrefix:t,scrollable:o}=this,n=this.tmNodes.map(r=>{const{rawNode:l}=r;return rt(l)?u(at,{tmNode:r,key:r.key}):Ve(l)?u(Ge,{clsPrefix:t,key:r.key}):nt(l)?u(lt,{clsPrefix:t,tmNode:r,parentKey:e,key:r.key}):u(Ue,{clsPrefix:t,tmNode:r,parentKey:e,key:r.key,props:l.props,scrollable:o})});return u("div",{class:[`${t}-dropdown-menu`,o&&`${t}-dropdown-menu--scrollable`],ref:"bodyRef"},o?u(go,{contentClass:`${t}-dropdown-menu__content`},{default:()=>n}):n,this.showArrow?io({clsPrefix:t,arrowStyle:this.arrowStyle}):null)}}),dt=C("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[xo(),C("dropdown-option",`
 position: relative;
 `,[P("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[P("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),C("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[P("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),ee("disabled",[O("pending",`
 color: var(--n-option-text-color-hover);
 `,[w("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),P("&::before","background-color: var(--n-option-color-hover);")]),O("active",`
 color: var(--n-option-text-color-active);
 `,[w("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),P("&::before","background-color: var(--n-option-color-active);")]),O("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[w("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),O("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),O("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[w("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[O("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),w("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[O("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),C("icon",`
 font-size: var(--n-option-icon-size);
 `)]),w("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),w("suffix",`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `,[O("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),C("icon",`
 font-size: var(--n-option-icon-size);
 `)]),C("dropdown-menu","pointer-events: all;")]),C("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),C("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),C("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),P(">",[C("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),ee("scrollable",`
 padding: var(--n-padding);
 `),O("scrollable",[w("content",`
 padding: var(--n-padding);
 `)])]),ct={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},st=Object.keys(be),ut=Object.assign(Object.assign(Object.assign({},be),ct),te.props),vt=j({name:"Dropdown",inheritAttrs:!1,props:ut,setup(e){const t=V(!1),o=pe(G(e,"show"),t),n=S(()=>{const{keyField:b,childrenField:E}=e;return Be(e.options,{getKey(R){return R[b]},getDisabled(R){return R.disabled===!0},getIgnored(R){return R.type==="divider"||R.type==="render"},getChildren(R){return R[E]}})}),r=S(()=>n.value.treeNodes),l=V(null),a=V(null),s=V(null),d=S(()=>{var b,E,R;return(R=(E=(b=l.value)!==null&&b!==void 0?b:a.value)!==null&&E!==void 0?E:s.value)!==null&&R!==void 0?R:null}),v=S(()=>n.value.getPath(d.value).keyPath),h=S(()=>n.value.getPath(e.value).keyPath),f=oe(()=>e.keyboard&&o.value);Ro({keydown:{ArrowUp:{prevent:!0,handler:g},ArrowRight:{prevent:!0,handler:p},ArrowDown:{prevent:!0,handler:L},ArrowLeft:{prevent:!0,handler:$},Escape:B},keyup:{Enter:M}},f);const{mergedClsPrefixRef:m,inlineThemeDisabled:K}=Fe(e),z=te("Dropdown","-dropdown",dt,wo,e,m);U(se,{labelFieldRef:G(e,"labelField"),childrenFieldRef:G(e,"childrenField"),renderLabelRef:G(e,"renderLabel"),renderIconRef:G(e,"renderIcon"),hoverKeyRef:l,keyboardKeyRef:a,lastToggledSubmenuKeyRef:s,pendingKeyPathRef:v,activeKeyPathRef:h,animatedRef:G(e,"animated"),mergedShowRef:o,nodePropsRef:G(e,"nodeProps"),renderOptionRef:G(e,"renderOption"),menuPropsRef:G(e,"menuProps"),doSelect:T,doUpdateShow:A}),ye(o,b=>{!e.animated&&!b&&H()});function T(b,E){const{onSelect:R}=e;R&&q(R,b,E)}function A(b){const{"onUpdate:show":E,onUpdateShow:R}=e;E&&q(E,b),R&&q(R,b),t.value=b}function H(){l.value=null,a.value=null,s.value=null}function B(){A(!1)}function $(){x("left")}function p(){x("right")}function g(){x("up")}function L(){x("down")}function M(){const b=y();b!=null&&b.isLeaf&&(T(b.key,b.rawNode),A(!1))}function y(){var b;const{value:E}=n,{value:R}=d;return!E||R===null?null:(b=E.getNode(R))!==null&&b!==void 0?b:null}function x(b){const{value:E}=d,{value:{getFirstAvailableNode:R}}=n;let k=null;if(E===null){const c=R();c!==null&&(k=c.key)}else{const c=y();if(c){let N;switch(b){case"down":N=c.getNext();break;case"up":N=c.getPrev();break;case"right":N=c.getChild();break;case"left":N=c.getParent();break}N&&(k=N.key)}}k!==null&&(l.value=null,a.value=k)}const i=S(()=>{const{size:b,inverted:E}=e,{common:{cubicBezierEaseInOut:R},self:k}=z.value,{padding:c,dividerColor:N,borderRadius:F,optionOpacityDisabled:Z,[Q("optionIconSuffixWidth",b)]:X,[Q("optionSuffixWidth",b)]:ue,[Q("optionIconPrefixWidth",b)]:J,[Q("optionPrefixWidth",b)]:Qe,[Q("fontSize",b)]:Ye,[Q("optionHeight",b)]:eo,[Q("optionIconSize",b)]:oo}=k,_={"--n-bezier":R,"--n-font-size":Ye,"--n-padding":c,"--n-border-radius":F,"--n-option-height":eo,"--n-option-prefix-width":Qe,"--n-option-icon-prefix-width":J,"--n-option-suffix-width":ue,"--n-option-icon-suffix-width":X,"--n-option-icon-size":oo,"--n-divider-color":N,"--n-option-opacity-disabled":Z};return E?(_["--n-color"]=k.colorInverted,_["--n-option-color-hover"]=k.optionColorHoverInverted,_["--n-option-color-active"]=k.optionColorActiveInverted,_["--n-option-text-color"]=k.optionTextColorInverted,_["--n-option-text-color-hover"]=k.optionTextColorHoverInverted,_["--n-option-text-color-active"]=k.optionTextColorActiveInverted,_["--n-option-text-color-child-active"]=k.optionTextColorChildActiveInverted,_["--n-prefix-color"]=k.prefixColorInverted,_["--n-suffix-color"]=k.suffixColorInverted,_["--n-group-header-text-color"]=k.groupHeaderTextColorInverted):(_["--n-color"]=k.color,_["--n-option-color-hover"]=k.optionColorHover,_["--n-option-color-active"]=k.optionColorActive,_["--n-option-text-color"]=k.optionTextColor,_["--n-option-text-color-hover"]=k.optionTextColorHover,_["--n-option-text-color-active"]=k.optionTextColorActive,_["--n-option-text-color-child-active"]=k.optionTextColorChildActive,_["--n-prefix-color"]=k.prefixColor,_["--n-suffix-color"]=k.suffixColor,_["--n-group-header-text-color"]=k.groupHeaderTextColor),_}),I=K?$e("dropdown",S(()=>`${e.size[0]}${e.inverted?"i":""}`),i,e):void 0;return{mergedClsPrefix:m,mergedTheme:z,tmNodes:r,mergedShow:o,handleAfterLeave:()=>{!e.animated||H()},doUpdateShow:A,cssVars:K?void 0:i,themeClass:I==null?void 0:I.themeClass,onRender:I==null?void 0:I.onRender}},render(){const e=(n,r,l,a,s)=>{var d;const{mergedClsPrefix:v,menuProps:h}=this;(d=this.onRender)===null||d===void 0||d.call(this);const f=(h==null?void 0:h(void 0,this.tmNodes.map(K=>K.rawNode)))||{},m={ref:Po(r),class:[n,`${v}-dropdown`,this.themeClass],clsPrefix:v,tmNodes:this.tmNodes,style:[l,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:a,onMouseleave:s};return u(qe,_e(this.$attrs,m,f))},{mergedTheme:t}=this,o={show:this.mergedShow,theme:t.peers.Popover,themeOverrides:t.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return u(Ee,Object.assign({},de(this.$props,st),o),{trigger:()=>{var n,r;return(r=(n=this.$slots).default)===null||r===void 0?void 0:r.call(n)}})}}),re=ne("n-menu"),Se=ne("n-submenu"),ze=ne("n-menu-item-group"),ae=8;function Ie(e){const t=D(re),{props:o,mergedCollapsedRef:n}=t,r=D(Se,null),l=D(ze,null),a=S(()=>o.mode==="horizontal"),s=S(()=>a.value?o.dropdownPlacement:"tmNodes"in e?"right-start":"right"),d=S(()=>{var m;return Math.max((m=o.collapsedIconSize)!==null&&m!==void 0?m:o.iconSize,o.iconSize)}),v=S(()=>{var m;return!a.value&&e.root&&n.value&&(m=o.collapsedIconSize)!==null&&m!==void 0?m:o.iconSize}),h=S(()=>{if(a.value)return;const{collapsedWidth:m,indent:K,rootIndent:z}=o,{root:T,isGroup:A}=e,H=z===void 0?K:z;if(T)return n.value?m/2-d.value/2:H;if(l)return K/2+l.paddingLeftRef.value;if(r)return(A?K/2:K)+r.paddingLeftRef.value}),f=S(()=>{const{collapsedWidth:m,indent:K,rootIndent:z}=o,{value:T}=d,{root:A}=e;return a.value||!A||!n.value?ae:(z===void 0?K:z)+T+ae-(m+T)/2});return{dropdownPlacement:s,activeIconSize:v,maxIconSize:d,paddingLeft:h,iconMarginRight:f,NMenu:t,NSubmenu:r}}const Ne={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},We=Object.assign(Object.assign({},Ne),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),ft=j({name:"MenuOptionGroup",props:We,setup(e){U(Se,null);const t=Ie(e);U(ze,{paddingLeftRef:t.paddingLeft});const{mergedClsPrefixRef:o,props:n}=D(re);return function(){const{value:r}=o,l=t.paddingLeft.value,{nodeProps:a}=n,s=a==null?void 0:a(e.tmNode.rawNode);return u("div",{class:`${r}-menu-item-group`,role:"group"},u("div",Object.assign({},s,{class:[`${r}-menu-item-group-title`,s==null?void 0:s.class],style:[(s==null?void 0:s.style)||"",l!==void 0?`padding-left: ${l}px;`:""]}),W(e.title),e.extra?u(Me,null," ",W(e.extra)):null),u("div",null,e.tmNodes.map(d=>Pe(d,n))))}}}),Ze=j({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0}},setup(e){const{props:t}=D(re);return{menuProps:t,style:S(()=>{const{paddingLeft:o}=e;return{paddingLeft:o&&`${o}px`}}),iconStyle:S(()=>{const{maxIconSize:o,activeIconSize:n,iconMarginRight:r}=e;return{width:`${o}px`,height:`${o}px`,fontSize:`${n}px`,marginRight:`${r}px`}})}},render(){const{clsPrefix:e,tmNode:t,menuProps:{renderIcon:o,renderLabel:n,renderExtra:r,expandIcon:l}}=this,a=o?o(t.rawNode):W(this.icon);return u("div",{onClick:s=>{var d;(d=this.onClick)===null||d===void 0||d.call(this,s)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},a&&u("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[a]),u("div",{class:`${e}-menu-item-content-header`,role:"none"},n?n(t.rawNode):W(this.title),this.extra||r?u("span",{class:`${e}-menu-item-content-header__extra`}," ",r?r(t.rawNode):W(this.extra)):null),this.showArrow?u(Co,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>l?l(t.rawNode):u(Ko,null)}):null)}}),Xe=Object.assign(Object.assign({},Ne),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:{type:Boolean,default:!1},icon:Function,onClick:Function}),ht=j({name:"Submenu",props:Xe,setup(e){const t=Ie(e),{NMenu:o,NSubmenu:n}=t,{props:r,mergedCollapsedRef:l,mergedThemeRef:a}=o,s=S(()=>{const{disabled:m}=e;return n!=null&&n.mergedDisabledRef.value||r.disabled?!0:m}),d=V(!1);U(Se,{paddingLeftRef:t.paddingLeft,mergedDisabledRef:s}),U(ze,null);function v(){const{onClick:m}=e;m&&m()}function h(){s.value||(l.value||o.toggleExpand(e.internalKey),v())}function f(m){d.value=m}return{menuProps:r,mergedTheme:a,doSelect:o.doSelect,inverted:o.invertedRef,isHorizontal:o.isHorizontalRef,mergedClsPrefix:o.mergedClsPrefixRef,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,iconMarginRight:t.iconMarginRight,dropdownPlacement:t.dropdownPlacement,dropdownShow:d,paddingLeft:t.paddingLeft,mergedDisabled:s,mergedValue:o.mergedValueRef,childActive:oe(()=>o.activePathRef.value.includes(e.internalKey)),collapsed:S(()=>r.mode==="horizontal"?!1:l.value?!0:!o.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:S(()=>!s.value&&(r.mode==="horizontal"||l.value)),handlePopoverShowChange:f,handleClick:h}},render(){var e;const{mergedClsPrefix:t,menuProps:{renderIcon:o,renderLabel:n}}=this,r=()=>{const{isHorizontal:a,paddingLeft:s,collapsed:d,mergedDisabled:v,maxIconSize:h,activeIconSize:f,title:m,childActive:K,icon:z,handleClick:T,menuProps:{nodeProps:A},dropdownShow:H,iconMarginRight:B,tmNode:$,mergedClsPrefix:p}=this,g=A==null?void 0:A($.rawNode);return u("div",Object.assign({},g,{class:[`${p}-menu-item`,g==null?void 0:g.class],role:"menuitem"}),u(Ze,{tmNode:$,paddingLeft:s,collapsed:d,disabled:v,iconMarginRight:B,maxIconSize:h,activeIconSize:f,title:m,extra:this.extra,showArrow:!a,childActive:K,clsPrefix:p,icon:z,hover:H,onClick:T}))},l=()=>u(So,null,{default:()=>{const{tmNodes:a,collapsed:s}=this;return s?null:u("div",{class:`${t}-submenu-children`,role:"menu"},a.map(d=>Pe(d,this.menuProps)))}});return this.root?u(vt,Object.assign({size:"large"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,trigger:"hover",disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:o,renderLabel:n}),{default:()=>u("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},r(),this.isHorizontal?null:l())}):u("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},r(),l())}}),Je=Object.assign(Object.assign({},Ne),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),pt=j({name:"MenuOption",props:Je,setup(e){const t=Ie(e),{NSubmenu:o,NMenu:n}=t,{props:r,mergedClsPrefixRef:l,mergedCollapsedRef:a}=n,s=o?o.mergedDisabledRef:{value:!1},d=S(()=>s.value||e.disabled);function v(f){const{onClick:m}=e;m&&m(f)}function h(f){d.value||(n.doSelect(e.internalKey,e.tmNode.rawNode),v(f))}return{mergedClsPrefix:l,dropdownPlacement:t.dropdownPlacement,paddingLeft:t.paddingLeft,iconMarginRight:t.iconMarginRight,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,mergedTheme:n.mergedThemeRef,menuProps:r,dropdownEnabled:oe(()=>e.root&&a.value&&r.mode!=="horizontal"&&!d.value),selected:S(()=>n.mergedValueRef.value===e.internalKey),mergedDisabled:d,handleClick:h}},render(){const{mergedClsPrefix:e,mergedTheme:t,tmNode:o,menuProps:{renderLabel:n,nodeProps:r}}=this,l=r==null?void 0:r(o.rawNode);return u("div",Object.assign({},l,{role:"menuitem",class:[`${e}-menu-item`,l==null?void 0:l.class]}),u(tt,{theme:t.peers.Tooltip,themeOverrides:t.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>n?n(o.rawNode):W(this.title),trigger:()=>u(Ze,{tmNode:o,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),mt=j({name:"MenuDivider",setup(){const e=D(re),{mergedClsPrefixRef:t,isHorizontalRef:o}=e;return()=>o.value?null:u("div",{class:`${t.value}-menu-divider`})}}),gt=xe(We),bt=xe(Je),yt=xe(Xe);function xt(e){return e.type==="divider"||e.type==="render"}function wt(e){return e.type==="divider"}function Pe(e,t){const{rawNode:o}=e,{show:n}=o;if(typeof n=="boolean"&&!n)return null;if(xt(o))return wt(o)?u(mt,Object.assign({key:e.key},o.props)):null;const{labelField:r}=t,{key:l,level:a,isGroup:s}=e,d=Object.assign(Object.assign({},o),{title:o.title||o[r],extra:o.titleExtra||o.extra,key:l,internalKey:l,level:a,root:a===0,isGroup:s});return e.children?e.isGroup?u(ft,de(d,gt,{tmNode:e,tmNodes:e.children,key:l})):u(ht,de(d,yt,{key:l,rawNodes:o[t.childrenField],tmNodes:e.children,tmNode:e})):u(pt,de(d,bt,{key:l,tmNode:e}))}const Te=[P("&::before","background-color: var(--n-item-color-hover);"),w("arrow",`
 color: var(--n-arrow-color-hover);
 `),w("icon",`
 color: var(--n-item-icon-color-hover);
 `),C("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[P("a",`
 color: var(--n-item-text-color-hover);
 `),w("extra",`
 color: var(--n-item-text-color-hover);
 `)])],He=[w("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),C("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[P("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),w("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],Ct=P([C("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[O("horizontal",`
 display: inline-flex;
 padding-bottom: 0;
 `,[C("submenu","margin: 0;"),C("menu-item","margin: 0;"),C("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[P("&::before","display: none;"),O("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),C("menu-item-content",[O("selected",[w("icon","color: var(--n-item-icon-color-active-horizontal);"),C("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[P("a","color: var(--n-item-text-color-active-horizontal);"),w("extra","color: var(--n-item-text-color-active-horizontal);")])]),O("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[C("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[P("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),w("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),w("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),ee("disabled",[ee("selected, child-active",[P("&:focus-within",He)]),O("selected",[Y(null,[w("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),C("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[P("a","color: var(--n-item-text-color-active-hover-horizontal);"),w("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),O("child-active",[Y(null,[w("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),C("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[P("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),w("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),Y("border-bottom: 2px solid var(--n-border-color-horizontal);",He)]),C("menu-item-content-header",[P("a","color: var(--n-item-text-color-horizontal);")])])]),O("collapsed",[C("menu-item-content",[O("selected",[P("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),C("menu-item-content-header","opacity: 0;"),w("arrow","opacity: 0;"),w("icon","color: var(--n-item-icon-color-collapsed);")])]),C("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),C("menu-item-content",`
 box-sizing: border-box;
 line-height: 1.75;
 height: 100%;
 display: grid;
 grid-template-areas: "icon content arrow";
 grid-template-columns: auto 1fr auto;
 align-items: center;
 cursor: pointer;
 position: relative;
 padding-right: 18px;
 transition:
 background-color .3s var(--n-bezier),
 padding-left .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[P("> *","z-index: 1;"),P("&::before",`
 z-index: auto;
 content: "";
 background-color: #0000;
 position: absolute;
 left: 8px;
 right: 8px;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),O("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),O("collapsed",[w("arrow","transform: rotate(0);")]),O("selected",[P("&::before","background-color: var(--n-item-color-active);"),w("arrow","color: var(--n-arrow-color-active);"),w("icon","color: var(--n-item-icon-color-active);"),C("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[P("a","color: var(--n-item-text-color-active);"),w("extra","color: var(--n-item-text-color-active);")])]),O("child-active",[C("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[P("a",`
 color: var(--n-item-text-color-child-active);
 `),w("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),w("arrow",`
 color: var(--n-arrow-color-child-active);
 `),w("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),ee("disabled",[ee("selected, child-active",[P("&:focus-within",Te)]),O("selected",[Y(null,[w("arrow","color: var(--n-arrow-color-active-hover);"),w("icon","color: var(--n-item-icon-color-active-hover);"),C("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[P("a","color: var(--n-item-text-color-active-hover);"),w("extra","color: var(--n-item-text-color-active-hover);")])])]),O("child-active",[Y(null,[w("arrow","color: var(--n-arrow-color-child-active-hover);"),w("icon","color: var(--n-item-icon-color-child-active-hover);"),C("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[P("a","color: var(--n-item-text-color-child-active-hover);"),w("extra","color: var(--n-item-text-color-child-active-hover);")])])]),O("selected",[Y(null,[P("&::before","background-color: var(--n-item-color-active-hover);")])]),Y(null,Te)]),w("icon",`
 grid-area: icon;
 color: var(--n-item-icon-color);
 transition:
 color .3s var(--n-bezier),
 font-size .3s var(--n-bezier),
 margin-right .3s var(--n-bezier);
 box-sizing: content-box;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 `),w("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),C("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 overflow: hidden;
 text-overflow: ellipsis;
 color: var(--n-item-text-color);
 `,[P("a",`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[P("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),w("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),C("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[C("menu-item-content",`
 height: var(--n-item-height);
 `),C("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[zo({duration:".2s"})])]),C("menu-item-group",[C("menu-item-group-title",`
 margin-top: 6px;
 color: var(--n-group-text-color);
 cursor: default;
 font-size: .93em;
 height: 36px;
 display: flex;
 align-items: center;
 transition:
 padding-left .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)])]),C("menu-tooltip",[P("a",`
 color: inherit;
 text-decoration: none;
 `)]),C("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function Y(e,t){return[O("hover",e,t),P("&:hover",e,t)]}const St=Object.assign(Object.assign({},te.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,defalut:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array,dropdownPlacement:{type:String,default:"bottom"}}),Rt=j({name:"Menu",props:St,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=Fe(e),n=te("Menu","-menu",Ct,Io,e,t),r=D(lo,null),l=S(()=>{var y;const{collapsed:x}=e;if(x!==void 0)return x;if(r){const{collapseModeRef:i,collapsedRef:I}=r;if(i.value==="width")return(y=I.value)!==null&&y!==void 0?y:!1}return!1}),a=S(()=>{const{keyField:y,childrenField:x}=e;return Be(e.items||e.options,{getChildren(i){return i[x]},getKey(i){var I;return(I=i[y])!==null&&I!==void 0?I:i.name}})}),s=S(()=>new Set(a.value.treeNodes.map(y=>y.key))),{watchProps:d}=e,v=V(null);d!=null&&d.includes("defaultValue")?ke(()=>{v.value=e.defaultValue}):v.value=e.defaultValue;const h=G(e,"value"),f=pe(h,v),m=V([]),K=()=>{m.value=e.defaultExpandAll?a.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||a.value.getPath(f.value,{includeSelf:!1}).keyPath};d!=null&&d.includes("defaultExpandedKeys")?ke(K):K();const z=ao(e,["expandedNames","expandedKeys"]),T=pe(z,m),A=S(()=>a.value.treeNodes),H=S(()=>a.value.getPath(f.value).keyPath);U(re,{props:e,mergedCollapsedRef:l,mergedThemeRef:n,mergedValueRef:f,mergedExpandedKeysRef:T,activePathRef:H,mergedClsPrefixRef:t,isHorizontalRef:S(()=>e.mode==="horizontal"),invertedRef:G(e,"inverted"),doSelect:B,toggleExpand:p});function B(y,x){const{"onUpdate:value":i,onUpdateValue:I,onSelect:b}=e;I&&q(I,y,x),i&&q(i,y,x),b&&q(b,y,x),v.value=y}function $(y){const{"onUpdate:expandedKeys":x,onUpdateExpandedKeys:i,onExpandedNamesChange:I,onOpenNamesChange:b}=e;x&&q(x,y),i&&q(i,y),I&&q(I,y),b&&q(b,y),m.value=y}function p(y){const x=Array.from(T.value),i=x.findIndex(I=>I===y);if(~i)x.splice(i,1);else{if(e.accordion&&s.value.has(y)){const I=x.findIndex(b=>s.value.has(b));I>-1&&x.splice(I,1)}x.push(y)}$(x)}const g=y=>{const x=a.value.getPath(y!=null?y:f.value,{includeSelf:!1}).keyPath;if(!x.length)return;const i=Array.from(T.value),I=new Set([...i,...x]);e.accordion&&s.value.forEach(b=>{I.has(b)&&!x.includes(b)&&I.delete(b)}),$(Array.from(I))},L=S(()=>{const{inverted:y}=e,{common:{cubicBezierEaseInOut:x},self:i}=n.value,{borderRadius:I,borderColorHorizontal:b,fontSize:E,itemHeight:R,dividerColor:k}=i,c={"--n-divider-color":k,"--n-bezier":x,"--n-font-size":E,"--n-border-color-horizontal":b,"--n-border-radius":I,"--n-item-height":R};return y?(c["--n-group-text-color"]=i.groupTextColorInverted,c["--n-color"]=i.colorInverted,c["--n-item-text-color"]=i.itemTextColorInverted,c["--n-item-text-color-hover"]=i.itemTextColorHoverInverted,c["--n-item-text-color-active"]=i.itemTextColorActiveInverted,c["--n-item-text-color-child-active"]=i.itemTextColorChildActiveInverted,c["--n-item-text-color-child-active-hover"]=i.itemTextColorChildActiveInverted,c["--n-item-text-color-active-hover"]=i.itemTextColorActiveHoverInverted,c["--n-item-icon-color"]=i.itemIconColorInverted,c["--n-item-icon-color-hover"]=i.itemIconColorHoverInverted,c["--n-item-icon-color-active"]=i.itemIconColorActiveInverted,c["--n-item-icon-color-active-hover"]=i.itemIconColorActiveHoverInverted,c["--n-item-icon-color-child-active"]=i.itemIconColorChildActiveInverted,c["--n-item-icon-color-child-active-hover"]=i.itemIconColorChildActiveHoverInverted,c["--n-item-icon-color-collapsed"]=i.itemIconColorCollapsedInverted,c["--n-item-text-color-horizontal"]=i.itemTextColorHorizontalInverted,c["--n-item-text-color-hover-horizontal"]=i.itemTextColorHoverHorizontalInverted,c["--n-item-text-color-active-horizontal"]=i.itemTextColorActiveHorizontalInverted,c["--n-item-text-color-child-active-horizontal"]=i.itemTextColorChildActiveHorizontalInverted,c["--n-item-text-color-child-active-hover-horizontal"]=i.itemTextColorChildActiveHoverHorizontalInverted,c["--n-item-text-color-active-hover-horizontal"]=i.itemTextColorActiveHoverHorizontalInverted,c["--n-item-icon-color-horizontal"]=i.itemIconColorHorizontalInverted,c["--n-item-icon-color-hover-horizontal"]=i.itemIconColorHoverHorizontalInverted,c["--n-item-icon-color-active-horizontal"]=i.itemIconColorActiveHorizontalInverted,c["--n-item-icon-color-active-hover-horizontal"]=i.itemIconColorActiveHoverHorizontalInverted,c["--n-item-icon-color-child-active-horizontal"]=i.itemIconColorChildActiveHorizontalInverted,c["--n-item-icon-color-child-active-hover-horizontal"]=i.itemIconColorChildActiveHoverHorizontalInverted,c["--n-arrow-color"]=i.arrowColorInverted,c["--n-arrow-color-hover"]=i.arrowColorHoverInverted,c["--n-arrow-color-active"]=i.arrowColorActiveInverted,c["--n-arrow-color-active-hover"]=i.arrowColorActiveHoverInverted,c["--n-arrow-color-child-active"]=i.arrowColorChildActiveInverted,c["--n-arrow-color-child-active-hover"]=i.arrowColorChildActiveHoverInverted,c["--n-item-color-hover"]=i.itemColorHoverInverted,c["--n-item-color-active"]=i.itemColorActiveInverted,c["--n-item-color-active-hover"]=i.itemColorActiveHoverInverted,c["--n-item-color-active-collapsed"]=i.itemColorActiveCollapsedInverted):(c["--n-group-text-color"]=i.groupTextColor,c["--n-color"]=i.color,c["--n-item-text-color"]=i.itemTextColor,c["--n-item-text-color-hover"]=i.itemTextColorHover,c["--n-item-text-color-active"]=i.itemTextColorActive,c["--n-item-text-color-child-active"]=i.itemTextColorChildActive,c["--n-item-text-color-child-active-hover"]=i.itemTextColorChildActiveHover,c["--n-item-text-color-active-hover"]=i.itemTextColorActiveHover,c["--n-item-icon-color"]=i.itemIconColor,c["--n-item-icon-color-hover"]=i.itemIconColorHover,c["--n-item-icon-color-active"]=i.itemIconColorActive,c["--n-item-icon-color-active-hover"]=i.itemIconColorActiveHover,c["--n-item-icon-color-child-active"]=i.itemIconColorChildActive,c["--n-item-icon-color-child-active-hover"]=i.itemIconColorChildActiveHover,c["--n-item-icon-color-collapsed"]=i.itemIconColorCollapsed,c["--n-item-text-color-horizontal"]=i.itemTextColorHorizontal,c["--n-item-text-color-hover-horizontal"]=i.itemTextColorHoverHorizontal,c["--n-item-text-color-active-horizontal"]=i.itemTextColorActiveHorizontal,c["--n-item-text-color-child-active-horizontal"]=i.itemTextColorChildActiveHorizontal,c["--n-item-text-color-child-active-hover-horizontal"]=i.itemTextColorChildActiveHoverHorizontal,c["--n-item-text-color-active-hover-horizontal"]=i.itemTextColorActiveHoverHorizontal,c["--n-item-icon-color-horizontal"]=i.itemIconColorHorizontal,c["--n-item-icon-color-hover-horizontal"]=i.itemIconColorHoverHorizontal,c["--n-item-icon-color-active-horizontal"]=i.itemIconColorActiveHorizontal,c["--n-item-icon-color-active-hover-horizontal"]=i.itemIconColorActiveHoverHorizontal,c["--n-item-icon-color-child-active-horizontal"]=i.itemIconColorChildActiveHorizontal,c["--n-item-icon-color-child-active-hover-horizontal"]=i.itemIconColorChildActiveHoverHorizontal,c["--n-arrow-color"]=i.arrowColor,c["--n-arrow-color-hover"]=i.arrowColorHover,c["--n-arrow-color-active"]=i.arrowColorActive,c["--n-arrow-color-active-hover"]=i.arrowColorActiveHover,c["--n-arrow-color-child-active"]=i.arrowColorChildActive,c["--n-arrow-color-child-active-hover"]=i.arrowColorChildActiveHover,c["--n-item-color-hover"]=i.itemColorHover,c["--n-item-color-active"]=i.itemColorActive,c["--n-item-color-active-hover"]=i.itemColorActiveHover,c["--n-item-color-active-collapsed"]=i.itemColorActiveCollapsed),c}),M=o?$e("menu",S(()=>e.inverted?"a":"b"),L,e):void 0;return{mergedClsPrefix:t,controlledExpandedKeys:z,uncontrolledExpanededKeys:m,mergedExpandedKeys:T,uncontrolledValue:v,mergedValue:f,activePath:H,tmNodes:A,mergedTheme:n,mergedCollapsed:l,cssVars:o?void 0:L,themeClass:M==null?void 0:M.themeClass,onRender:M==null?void 0:M.onRender,showOption:g}},render(){const{mergedClsPrefix:e,mode:t,themeClass:o,onRender:n}=this;return n==null||n(),u("div",{role:t==="horizontal"?"menubar":"menu",class:[`${e}-menu`,o,`${e}-menu--${t}`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},this.tmNodes.map(r=>Pe(r,this.$props)))}});export{vt as _,Rt as a,Be as b,kt as c,Po as d,Re as h};
