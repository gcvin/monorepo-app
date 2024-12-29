import{x,al as N,ab as O,q as z,v as j,P as L,am as T,k as w,p as g,a2 as R}from"./framework.DI_Nd1JI.js";const re=Object.assign,y=typeof window<"u",b=e=>e!==null&&typeof e=="object",h=e=>e!=null,_=e=>typeof e=="function",k=e=>typeof e=="number"||/^\d+(\.\d+)?$/.test(e),M=()=>y?/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()):!1;function F(e,t){const u=t.split(".");let n=e;return u.forEach(s=>{var r;n=b(n)&&(r=n[s])!=null?r:""}),n}const W=[Number,String],ae={type:Boolean,default:!0},se=e=>({type:e,required:!0}),oe=e=>({type:Number,default:e}),ie=e=>({type:W,default:e}),ce=e=>({type:String,default:e});var C=typeof window<"u";function q(e){let t;j(()=>{e(),L(()=>{t=!0})}),T(()=>{t&&e()})}function de(e,t,u={}){if(!C)return;const{target:n=window,passive:s=!1,capture:r=!1}=u;let f=!1,i;const v=o=>{if(f)return;const a=w(o);a&&!i&&(a.addEventListener(e,t,{capture:r,passive:s}),i=!0)},c=o=>{if(f)return;const a=w(o);a&&i&&(a.removeEventListener(e,t,r),i=!1)};x(()=>c(n)),N(()=>c(n)),q(()=>v(n));let l;return O(n)&&(l=z(n,(o,a)=>{c(a),v(o)})),()=>{l==null||l(),c(n),f=!0}}var d,p;function U(){if(!d&&(d=g(0),p=g(0),C)){const e=()=>{d.value=window.innerWidth,p.value=window.innerHeight};e(),window.addEventListener("resize",e,{passive:!0}),window.addEventListener("orientationchange",e,{passive:!0})}return{width:d,height:p}}function fe(e){const t="scrollTop"in e?e.scrollTop:e.pageYOffset;return Math.max(t,0)}M();function le(e,t){(typeof e.cancelable!="boolean"||e.cancelable)&&e.preventDefault()}const{width:H,height:I}=U();function E(e){if(h(e))return k(e)?`${e}px`:String(e)}function pe(e){if(h(e)){if(Array.isArray(e))return{width:E(e[0]),height:E(e[1])};const t=E(e);return{width:t,height:t}}}let m;function V(){if(!m){const e=document.documentElement,t=e.style.fontSize||window.getComputedStyle(e).fontSize;m=parseFloat(t)}return m}function K(e){return e=e.replace(/rem/g,""),+e*V()}function Y(e){return e=e.replace(/vw/g,""),+e*H.value/100}function G(e){return e=e.replace(/vh/g,""),+e*I.value/100}function Ee(e){if(typeof e=="number")return e;if(y){if(e.includes("rem"))return K(e);if(e.includes("vw"))return Y(e);if(e.includes("vh"))return G(e)}return parseFloat(e)}const J=/-(\w)/g,Q=e=>e.replace(J,(t,u)=>u.toUpperCase()),{hasOwnProperty:X}=Object.prototype;function Z(e,t,u){const n=t[u];h(n)&&(!X.call(e,u)||!b(n)?e[u]=n:e[u]=$(Object(e[u]),n))}function $(e,t){return Object.keys(t).forEach(u=>{Z(e,t,u)}),e}var ee={name:"姓名",tel:"电话",save:"保存",clear:"清空",cancel:"取消",confirm:"确认",delete:"删除",loading:"加载中...",noCoupon:"暂无优惠券",nameEmpty:"请填写姓名",addContact:"添加联系人",telInvalid:"请填写正确的电话",vanCalendar:{end:"结束",start:"开始",title:"日期选择",weekdays:["日","一","二","三","四","五","六"],monthTitle:(e,t)=>`${e}年${t}月`,rangePrompt:e=>`最多选择 ${e} 天`},vanCascader:{select:"请选择"},vanPagination:{prev:"上一页",next:"下一页"},vanPullRefresh:{pulling:"下拉即可刷新...",loosing:"释放即可刷新..."},vanSubmitBar:{label:"合计:"},vanCoupon:{unlimited:"无门槛",discount:e=>`${e}折`,condition:e=>`满${e}元可用`},vanCouponCell:{title:"优惠券",count:e=>`${e}张可用`},vanCouponList:{exchange:"兑换",close:"不使用",enable:"可用",disabled:"不可用",placeholder:"输入优惠码"},vanAddressEdit:{area:"地区",areaEmpty:"请选择地区",addressEmpty:"请填写详细地址",addressDetail:"详细地址",defaultAddress:"设为默认收货地址"},vanAddressList:{add:"新增地址"}};const D=g("zh-CN"),A=R({"zh-CN":ee}),te={messages(){return A[D.value]},use(e,t){D.value=e,this.add({[e]:t})},add(e={}){$(A,e)}};var ue=te;function P(e){const t=Q(e)+".";return(u,...n)=>{const s=ue.messages(),r=F(s,t+u)||F(s,u);return _(r)?r(...n):r}}function B(e,t){return t?typeof t=="string"?` ${e}--${t}`:Array.isArray(t)?t.reduce((u,n)=>u+B(e,n),""):Object.keys(t).reduce((u,n)=>u+(t[n]?B(e,n):""),""):""}function S(e){return(t,u)=>(t&&typeof t!="string"&&(u=t,t=""),t=t?`${e}__${t}`:e,`${t}${B(t,u)}`)}function me(e){const t=`van-${e}`;return[t,S(t),P(t)]}function ge(e){const t=`gcvin-${e}`;return[t,S(t),P(t)]}export{E as a,Ee as b,ge as c,me as d,ce as e,k as f,fe as g,re as h,h as i,pe as j,se as k,oe as l,ie as m,W as n,Q as o,le as p,ae as t,de as u};