(this["webpackJsonpapi-meli"]=this["webpackJsonpapi-meli"]||[]).push([[0],{17:function(e,t,c){},18:function(e,t,c){},22:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),s=c(10),a=c.n(s),i=(c(17),c(4)),o=c(6),u=c(2),j=(c(18),c(1)),d=function(e){var t=e.shoppingCart;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(o.b,{to:"/products",children:"Go products"}),Object(j.jsxs)("h1",{children:["\xa1Hello! The quantity of products you selected is: ",t.length]})]})},l=c(12),b=c(9),h=c.n(b),p=c(11),O=function(e){var t=e.product,c=e.addProductToCart;return Object(j.jsxs)("div",{className:"card col-4",children:[Object(j.jsx)("img",{src:t.thumbnail,className:"card-img-top",alt:"..."}),Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsxs)("h5",{className:"card-title",children:[t.title," - $",t.price]}),Object(j.jsx)("p",{className:"card-text",children:"Some quick example text to build on the card title and make up the bulk of the card's content."}),Object(j.jsx)("button",{className:"btn btn-primary",onClick:function(){return c(t.id)},children:"Add to cart"})]})]})},x=function(e){var t=e.shoppingCart,c=e.handleKeyPress;return Object(j.jsxs)("div",{className:"bg-info",children:[Object(j.jsx)("div",{children:Object(j.jsx)("input",{type:"text",onKeyPress:c,placeholder:"Search by product name"})}),Object(j.jsx)(o.b,{to:"/",children:"Go home"}),Object(j.jsx)("br",{}),"Quantity of selected products: ",t.length]})},f=function(e){var t=e.setCart,c=Object(n.useState)(""),r=Object(i.a)(c,2),s=r[0],a=r[1],o=Object(n.useState)([]),u=Object(i.a)(o,2),d=u[0],b=u[1],f=Object(n.useState)([]),m=Object(i.a)(f,2),v=m[0],g=m[1];Object(n.useEffect)((function(){var e=function(){var e=Object(p.a)(h.a.mark((function e(t){var c,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.mercadolibre.com/sites/MLA/search?q=".concat(t));case 2:return c=e.sent,e.next=5,c.json();case 5:n=e.sent,b(n.results);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();e(s)}),[s]),Object(n.useEffect)((function(){t(v)}),[v]);var y=function(e){return g([].concat(Object(l.a)(v),[e]))};return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(x,{shoppingCart:v,handleKeyPress:function(e){return 13===e.charCode&&a(e.target.value)}}),Object(j.jsx)("div",{className:"row px-2 py-2",children:d.map((function(e){return Object(j.jsx)(O,{product:e,addProductToCart:y},e.id)}))})]})};var m=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],r=t[1];return console.log(c),Object(j.jsx)(o.a,{children:Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(u.c,{children:[Object(j.jsx)(u.a,{path:"/",element:Object(j.jsx)(d,{shoppingCart:c})}),Object(j.jsx)(u.a,{path:"/products",element:Object(j.jsx)(f,{setCart:r})})]})})})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,23)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),r(e),s(e),a(e)}))};c(21);a.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(m,{})}),document.getElementById("root")),v()}},[[22,1,2]]]);
//# sourceMappingURL=main.032a115f.chunk.js.map