import{S as ee,i as te,s as le,h as re,e as h,c as d,a as k,d as n,b as y,f as o,u as ae,n as E,t as u,k as v,g as V,j as w,l as ie,m as f,o as se}from"./vendor.7a8e4634.js";import{d as g,p as M}from"./index.1c6c1c81.js";function x(i){const e=i[2][0];i[3]=e;const t=M.related(i[2][1],i[0]);i[4]=t}function ne(i){return{c:E,l:E,m:E,p:E,d:E}}function ce(i){x(i);let e,t,l=i[3].title+"",r,s,p,R=i[3].title+"",z,B,F,_,H,A,C=M.date.format(i[0])+"",N,J,S,I,P,U,K,j,W=i[3].cover+"",O,D=i[3].part&&oe(i);function X(a,c){return a[4].prev?_e:fe}let T=X(i),m=T(i);function Y(a,c){return a[4].next?ve:ue}let G=Y(i),b=G(i);return{c(){e=h("h1"),D&&D.c(),t=V(),r=u(l),s=V(),p=h("title"),z=u(R),B=u(" | Frontier"),F=V(),_=h("div"),m.c(),H=V(),A=h("div"),N=u(C),J=V(),b.c(),S=V(),I=h("div"),P=h("img"),K=V(),j=h("div"),O=u(W),this.h()},l(a){e=d(a,"H1",{});var c=k(e);D&&D.l(c),t=w(c),r=v(c,l),c.forEach(n),s=w(a),p=d(a,"TITLE",{});var Q=k(p);z=v(Q,R),B=v(Q," | Frontier"),Q.forEach(n),F=w(a),_=d(a,"DIV",{class:!0});var q=k(_);m.l(q),H=w(q),A=d(q,"DIV",{});var Z=k(A);N=v(Z,C),Z.forEach(n),J=w(q),b.l(q),q.forEach(n),S=w(a),I=d(a,"DIV",{class:!0});var L=k(I);P=d(L,"IMG",{src:!0,alt:!0,class:!0}),K=w(L),j=d(L,"DIV",{class:!0});var $=k(j);O=v($,W),$.forEach(n),L.forEach(n),this.h()},h(){y(_,"class","nav w-100 \u0192 \u2206-bw svelte-uyh2s5"),ie(P.src,U=M.image(i[3].count))||y(P,"src",U),y(P,"alt",""),y(P,"class","svelte-uyh2s5"),y(j,"class","cover p-abs w-100 svelte-uyh2s5"),y(I,"class","img p-rel w-100")},m(a,c){o(a,e,c),D&&D.m(e,null),f(e,t),f(e,r),o(a,s,c),o(a,p,c),f(p,z),f(p,B),o(a,F,c),o(a,_,c),m.m(_,null),f(_,H),f(_,A),f(A,N),f(_,J),b.m(_,null),o(a,S,c),o(a,I,c),f(I,P),f(I,K),f(I,j),f(j,O)},p(a,c){x(a),a[3].part&&D.p(a,c),T===(T=X(a))&&m?m.p(a,c):(m.d(1),m=T(a),m&&(m.c(),m.m(_,H))),c&1&&C!==(C=M.date.format(a[0])+"")&&se(N,C),G===(G=Y(a))&&b?b.p(a,c):(b.d(1),b=G(a),b&&(b.c(),b.m(_,null)))},d(a){a&&n(e),D&&D.d(),a&&n(s),a&&n(p),a&&n(F),a&&n(_),m.d(),b.d(),a&&n(S),a&&n(I)}}}function oe(i){let e,t=i[3].part+"",l,r;return{c(){e=u("Part "),l=u(t),r=u(" |")},l(s){e=v(s,"Part "),l=v(s,t),r=v(s," |")},m(s,p){o(s,e,p),o(s,l,p),o(s,r,p)},p:E,d(s){s&&n(e),s&&n(l),s&&n(r)}}}function fe(i){let e,t;return{c(){e=h("div"),t=u("\xA0")},l(l){e=d(l,"DIV",{});var r=k(e);t=v(r,"\xA0"),r.forEach(n)},m(l,r){o(l,e,r),f(e,t)},p:E,d(l){l&&n(e)}}}function _e(i){let e,t,l;return{c(){e=h("a"),t=u("\u2190 Prev"),this.h()},l(r){e=d(r,"A",{href:!0});var s=k(e);t=v(s,"\u2190 Prev"),s.forEach(n),this.h()},h(){y(e,"href",l=i[4].prev)},m(r,s){o(r,e,s),f(e,t)},p(r,s){s&1&&l!==(l=r[4].prev)&&y(e,"href",l)},d(r){r&&n(e)}}}function ue(i){let e,t;return{c(){e=h("div"),t=u("\xA0")},l(l){e=d(l,"DIV",{});var r=k(e);t=v(r,"\xA0"),r.forEach(n)},m(l,r){o(l,e,r),f(e,t)},p:E,d(l){l&&n(e)}}}function ve(i){let e,t,l;return{c(){e=h("a"),t=u("Next \u2192"),this.h()},l(r){e=d(r,"A",{href:!0});var s=k(e);t=v(s,"Next \u2192"),s.forEach(n),this.h()},h(){y(e,"href",l=i[4].next)},m(r,s){o(r,e,s),f(e,t)},p(r,s){s&1&&l!==(l=r[4].next)&&y(e,"href",l)},d(r){r&&n(e)}}}function he(i){let e;return{c(){e=u("Preparing the article for you...")},l(t){e=v(t,"Preparing the article for you...")},m(t,l){o(t,e,l)},p:E,d(t){t&&n(e)}}}function de(i){let e,t={ctx:i,current:null,token:null,hasCatch:!1,pending:he,then:ce,catch:ne,value:2};return re(i[1],t),{c(){e=h("div"),t.block.c(),this.h()},l(l){e=d(l,"DIV",{class:!0});var r=k(e);t.block.l(r),r.forEach(n),this.h()},h(){y(e,"class","\u2020c")},m(l,r){o(l,e,r),t.block.m(e,t.anchor=null),t.mount=()=>e,t.anchor=null},p(l,[r]){i=l,ae(t,i,r)},i:E,o:E,d(l){l&&n(e),t.block.d(),t.token=null,t=null}}}function pe(i,e,t){let{path:l}=e;const r=Promise.all([g.get(l),g.related(l)]);return i.$$set=s=>{"path"in s&&t(0,l=s.path)},[l,r]}class ke extends ee{constructor(e){super();te(this,e,pe,de,le,{path:0})}}export{ke as default};
