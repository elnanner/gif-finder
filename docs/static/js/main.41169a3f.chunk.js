(this["webpackJsonpcounter-app"]=this["webpackJsonpcounter-app"]||[]).push([[0],{15:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n(7),a=n.n(r),i=(n(15),n(2)),s=n(9),u=n(0),o=function(t){var e=t.setCategories,n=Object(c.useState)(""),r=Object(i.a)(n,2),a=r[0],o=r[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h5",{children:"Search gifs for:"}),Object(u.jsx)("form",{onSubmit:function(t){t.preventDefault(),a&&(e((function(t){return[a].concat(Object(s.a)(t))})),o(""))},children:Object(u.jsx)("input",{type:"text",value:a,onChange:function(t){o([t.target.value])}})})]})},j=n(10),d=function(t){t.id;var e=t.title,n=t.url;return Object(u.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(u.jsx)("img",{src:n,alt:e}),Object(u.jsx)("p",{children:e})]})},b=n(6),l=n.n(b),O=n(8),f=function(){var t=Object(O.a)(l.a.mark((function t(e){var n,c,r,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"Zv7Hcjmk7QPrOKr0SNcdJwn8qII59OsE",10,n="https://api.giphy.com/v1/gifs/search?api_key=".concat("Zv7Hcjmk7QPrOKr0SNcdJwn8qII59OsE","&q=").concat(encodeURI(e),"&limit=").concat(10),t.next=5,fetch(n);case 5:return c=t.sent,t.next=8,c.json(c);case 8:return r=t.sent,a=r.data,t.abrupt("return",a.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.original.url}})));case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(t){var e=t.category,n=function(t){var e=Object(c.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),r=n[0],a=n[1];return Object(c.useEffect)((function(){f(t).then((function(t){a({data:t,loading:!1})}))}),[t]),r}(e),r=n.data,a=n.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{children:e}),a&&Object(u.jsx)("p",{children:"Loading..."}),Object(u.jsx)("div",{className:"card-grid",children:r.map((function(t){return Object(u.jsx)(d,Object(j.a)({},t),t.id)}))})]})},h=function(){var t=Object(c.useState)([]),e=Object(i.a)(t,2),n=e[0],r=e[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"GifExpertApp"}),Object(u.jsx)(o,{setCategories:r}),Object(u.jsx)("hr",{}),n.map((function(t){return Object(u.jsx)(p,{category:t},t)}))]})},x=document.querySelector("#root");a.a.render(Object(u.jsx)(h,{}),x)}},[[18,1,2]]]);
//# sourceMappingURL=main.41169a3f.chunk.js.map