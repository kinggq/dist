import{p as b}from"./interface.5f83e526.js";import{aO as v,aP as m,aQ as g,aR as c,c as f,a as C,d as p,u as h,b as B,f as u,g as x,h as y}from"./index.ac5c63a1.js";const I=o=>{const{baseColor:t,textColor2:l,bodyColor:n,cardColor:a,dividerColor:e,actionColor:i,scrollbarColor:s,scrollbarColorHover:r,invertedColor:d}=o;return{textColor:l,textColorInverted:"#FFF",color:n,colorEmbedded:i,headerColor:a,headerColorInverted:d,footerColor:i,footerColorInverted:d,headerBorderColor:e,headerBorderColorInverted:d,footerBorderColor:e,footerBorderColorInverted:d,siderBorderColor:e,siderBorderColorInverted:d,siderColor:a,siderColorInverted:d,siderToggleButtonBorder:`1px solid ${e}`,siderToggleButtonColor:t,siderToggleButtonIconColor:l,siderToggleButtonIconColorInverted:l,siderToggleBarColor:c(n,s),siderToggleBarColorHover:c(n,r),__invertScrollbar:"true"}},T=v({name:"Layout",common:m,peers:{Scrollbar:g},self:I}),_=T,z=f("layout-header",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 width: 100%;
 background-color: var(--n-color);
 color: var(--n-text-color);
`,[C("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 `),C("bordered",`
 border-bottom: solid 1px var(--n-border-color);
 `)]),L={position:b,inverted:Boolean,bordered:{type:Boolean,default:!1}},P=p({name:"LayoutHeader",props:Object.assign(Object.assign({},h.props),L),setup(o){const{mergedClsPrefixRef:t,inlineThemeDisabled:l}=B(o),n=h("Layout","-layout-header",z,_,o,t),a=u(()=>{const{common:{cubicBezierEaseInOut:i},self:s}=n.value,r={"--n-bezier":i};return o.inverted?(r["--n-color"]=s.headerColorInverted,r["--n-text-color"]=s.textColorInverted,r["--n-border-color"]=s.headerBorderColorInverted):(r["--n-color"]=s.headerColor,r["--n-text-color"]=s.textColor,r["--n-border-color"]=s.headerBorderColor),r}),e=l?x("layout-header",u(()=>o.inverted?"a":"b"),a,o):void 0;return{mergedClsPrefix:t,cssVars:l?void 0:a,themeClass:e==null?void 0:e.themeClass,onRender:e==null?void 0:e.onRender}},render(){var o;const{mergedClsPrefix:t}=this;return(o=this.onRender)===null||o===void 0||o.call(this),y("div",{class:[`${t}-layout-header`,this.themeClass,this.position&&`${t}-layout-header--${this.position}-positioned`,this.bordered&&`${t}-layout-header--bordered`],style:this.cssVars},this.$slots)}});export{P as _,_ as l};
