import{s as w,n as g}from"../chunks/scheduler.CtbWrGNo.js";import{S as D,i as I,e as u,t as j,s as y,c as v,a as _,b as E,d as b,f as x,l as p,g as V,h as o,j as H,v as S,z as k,w as T,q,x as z,m as L,n as M,y as P}from"../chunks/index.Be_5MA_p.js";import{b as A}from"../chunks/paths.CCAcH9BZ.js";function J(c){let e,s,i,n,t,m;return{c(){e=u("div"),s=u("h1"),i=j(c[0]),n=y(),t=u("p"),m=j(c[1]),this.h()},l(l){e=v(l,"DIV",{class:!0});var a=_(e);s=v(a,"H1",{});var r=_(s);i=E(r,c[0]),r.forEach(b),n=x(a),t=v(a,"P",{});var h=_(t);m=E(h,c[1]),h.forEach(b),a.forEach(b),this.h()},h(){p(e,"class","container svelte-146ovnf")},m(l,a){V(l,e,a),o(e,s),o(s,i),o(e,n),o(e,t),o(t,m)},p(l,[a]){a&1&&H(i,l[0]),a&2&&H(m,l[1])},i:g,o:g,d(l){l&&b(e)}}}function $(c,e,s){let{title:i="Title"}=e,{subtitle:n="Subtitle"}=e;return c.$$set=t=>{"title"in t&&s(0,i=t.title),"subtitle"in t&&s(1,n=t.subtitle)},[i,n]}class B extends D{constructor(e){super(),I(this,e,$,J,w,{title:0,subtitle:1})}}function F(c){let e,s,i="Jessica Helen Anderson",n,t,m='<input type="radio" name="slider" id="item-1" checked="" class="svelte-10h90bf"/> <input type="radio" name="slider" id="item-2" class="svelte-10h90bf"/> <input type="radio" name="slider" id="item-3" class="svelte-10h90bf"/> <div class="cards svelte-10h90bf"><label class="card svelte-10h90bf" for="item-1" id="post-1"><img src="images/flowers.jpg" alt="post" class="svelte-10h90bf"/></label> <label class="card svelte-10h90bf" for="item-2" id="post-2"><img src="images/baby.jpg" alt="post" class="svelte-10h90bf"/></label> <label class="card svelte-10h90bf" for="item-3" id="post-3"><img src="images/road.jpg" alt="post" class="svelte-10h90bf"/></label></div>',l,a,r,h;return r=new B({}),{c(){e=u("div"),s=u("h1"),s.textContent=i,n=y(),t=u("div"),t.innerHTML=m,l=y(),a=u("div"),S(r.$$.fragment),this.h()},l(d){e=v(d,"DIV",{id:!0,style:!0,class:!0});var f=_(e);s=v(f,"H1",{class:!0,"data-svelte-h":!0}),k(s)!=="svelte-r5cksz"&&(s.textContent=i),n=x(f),t=v(f,"DIV",{class:!0,"data-svelte-h":!0}),k(t)!=="svelte-1ly68w5"&&(t.innerHTML=m),l=x(f),a=v(f,"DIV",{class:!0});var C=_(a);T(r.$$.fragment,C),C.forEach(b),f.forEach(b),this.h()},h(){p(s,"class","title svelte-10h90bf"),p(t,"class","carousell svelte-10h90bf"),p(a,"class","info svelte-10h90bf"),p(e,"id","container"),q(e,"background-image","url('"+A+"/images/field-background.jpg')"),p(e,"class","svelte-10h90bf")},m(d,f){V(d,e,f),o(e,s),o(e,n),o(e,t),o(e,l),o(e,a),z(r,a,null),h=!0},p:g,i(d){h||(L(r.$$.fragment,d),h=!0)},o(d){M(r.$$.fragment,d),h=!1},d(d){d&&b(e),P(r)}}}class O extends D{constructor(e){super(),I(this,e,null,F,w,{})}}export{O as component};