import{s as D,n as x}from"../chunks/scheduler.CtbWrGNo.js";import{S as I,i as V,e as f,t as E,s as b,c as h,a as p,b as H,d as g,f as y,l as _,g as S,h as o,j,v as T,z as w,w as k,x as z,m as L,n as M,y as P}from"../chunks/index.Be_5MA_p.js";function q(d){let t,e,n,r,s,a;return{c(){t=f("div"),e=f("h1"),n=E(d[0]),r=b(),s=f("p"),a=E(d[1]),this.h()},l(i){t=h(i,"DIV",{class:!0});var l=p(t);e=h(l,"H1",{});var c=p(e);n=H(c,d[0]),c.forEach(g),r=y(l),s=h(l,"P",{});var u=p(s);a=H(u,d[1]),u.forEach(g),l.forEach(g),this.h()},h(){_(t,"class","container svelte-146ovnf")},m(i,l){S(i,t,l),o(t,e),o(e,n),o(t,r),o(t,s),o(s,a)},p(i,[l]){l&1&&j(n,i[0]),l&2&&j(a,i[1])},i:x,o:x,d(i){i&&g(t)}}}function A(d,t,e){let{title:n="Title"}=t,{subtitle:r="Subtitle"}=t,{img:s="images/icon.svg"}=t;return d.$$set=a=>{"title"in a&&e(0,n=a.title),"subtitle"in a&&e(1,r=a.subtitle),"img"in a&&e(2,s=a.img)},[n,r,s]}class J extends I{constructor(t){super(),V(this,t,A,q,D,{title:0,subtitle:1,img:2})}}function B(d){let t,e,n="Jessica Helen Anderson",r,s,a='<input type="radio" name="slider" id="item-1" checked="" class="svelte-9tl7tx"/> <input type="radio" name="slider" id="item-2" class="svelte-9tl7tx"/> <input type="radio" name="slider" id="item-3" class="svelte-9tl7tx"/> <div class="cards svelte-9tl7tx"><label class="card svelte-9tl7tx" for="item-1" id="post-1"><img src="images/flowers.jpg" alt="post" class="svelte-9tl7tx"/></label> <label class="card svelte-9tl7tx" for="item-2" id="post-2"><img src="images/baby.jpg" alt="post" class="svelte-9tl7tx"/></label> <label class="card svelte-9tl7tx" for="item-3" id="post-3"><img src="images/road.jpg" alt="post" class="svelte-9tl7tx"/></label></div>',i,l,c,u;return c=new J({}),{c(){t=f("div"),e=f("h1"),e.textContent=n,r=b(),s=f("div"),s.innerHTML=a,i=b(),l=f("div"),T(c.$$.fragment),this.h()},l(m){t=h(m,"DIV",{id:!0,class:!0});var v=p(t);e=h(v,"H1",{class:!0,"data-svelte-h":!0}),w(e)!=="svelte-r5cksz"&&(e.textContent=n),r=y(v),s=h(v,"DIV",{class:!0,"data-svelte-h":!0}),w(s)!=="svelte-1ly68w5"&&(s.innerHTML=a),i=y(v),l=h(v,"DIV",{class:!0});var C=p(l);k(c.$$.fragment,C),C.forEach(g),v.forEach(g),this.h()},h(){_(e,"class","title svelte-9tl7tx"),_(s,"class","carousell svelte-9tl7tx"),_(l,"class","info svelte-9tl7tx"),_(t,"id","container"),_(t,"class","svelte-9tl7tx")},m(m,v){S(m,t,v),o(t,e),o(t,r),o(t,s),o(t,i),o(t,l),z(c,l,null),u=!0},p:x,i(m){u||(L(c.$$.fragment,m),u=!0)},o(m){M(c.$$.fragment,m),u=!1},d(m){m&&g(t),P(c)}}}class K extends I{constructor(t){super(),V(this,t,null,B,D,{})}}export{K as component};
