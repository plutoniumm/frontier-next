import{S as b,i as k,s as y,v as d,w as f,x as S,y as h,f as u,z as A,A as C,B as $,C as E,D as g,d as l,E as w,F as m,G as v,H as T,e as j,c as F,a as G,n as H}from"./vendor.3cbfbf6e.js";function M(a){let e;return{c(){e=j("astro-fragment")},l(t){e=F(t,"ASTRO-FRAGMENT",{});var n=G(e);n.forEach(l)},m(t,n){u(t,e,n),e.innerHTML=a[1]},p:H,d(t){t&&l(e)}}}function N(a){let e,t=a[1]!=null&&M(a);return{c(){t&&t.c(),e=f()},l(n){t&&t.l(n),e=f()},m(n,r){t&&t.m(n,r),u(n,e,r)},p(n,r){n[1]!=null&&t.p(n,r)},d(n){t&&t.d(n),n&&l(e)}}}function R(a){let e,t,n;const r=[a[2]];var i=a[0];function _(s){let o={$$slots:{default:[N]},$$scope:{ctx:s}};for(let c=0;c<r.length;c+=1)o=m(o,r[c]);return{props:o}}return i&&(e=new i(_(a))),{c(){e&&d(e.$$.fragment),t=f()},l(s){e&&S(e.$$.fragment,s),t=f()},m(s,o){e&&h(e,s,o),u(s,t,o),n=!0},p(s,[o]){const c=o&4?A(r,[C(s[2])]):{};if(o&16&&(c.$$scope={dirty:o,ctx:s}),i!==(i=s[0])){if(e){T();const p=e;$(p.$$.fragment,1,0,()=>{w(p,1)}),E()}i?(e=new i(_(s)),d(e.$$.fragment),g(e.$$.fragment,1),h(e,t.parentNode,t)):e=null}else i&&e.$set(c)},i(s){n||(e&&g(e.$$.fragment,s),n=!0)},o(s){e&&$(e.$$.fragment,s),n=!1},d(s){s&&l(t),e&&w(e,s)}}}function W(a,e,t){const{__astro_component:n,__astro_children:r,...i}=e;return a.$$set=_=>{t(3,e=m(m({},e),v(_)))},e=v(e),[n,r,i]}class q extends b{constructor(e){super();k(this,e,W,R,y,{})}}var z=q,D=a=>(e,t,n)=>{delete t.class;try{new z({target:a,props:{__astro_component:e,__astro_children:n,...t},hydrate:!0})}catch{}};export{D as default};
