(this["webpackJsonpvolga-volga_test"]=this["webpackJsonpvolga-volga_test"]||[]).push([[0],{29:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var i,c,a,r,s,o,d=n(0),l=n(9),b=n.n(l),j=n(6),p=n(18),u=n(4),f=n(19),O={title:"8 \u0421\u0435\u0437\u043e\u043d\u043e\u0432",category:"\u041f\u0438\u0446\u0446\u0430",description:"\u041a\u043e\u043b\u0431\u0430\u0441\u043a\u0438, \u043f\u0435\u043f\u043f\u0435\u0440\u043e\u043d\u0438, \u0445\u0430\u043b\u0430\u043f\u0435\u043d\u044c\u043e, \u0448\u0430\u043c\u043f\u0438\u043d\u044c\u043e\u043d\u044b, \u0442\u043e\u043c\u0430\u0442\u044b, \u0431\u0435\u043a\u043e\u043d, \u0446\u044b\u043f\u043b\u0435\u043d\u043e\u043a, \u0447\u0435\u0441\u043d\u043e\u043a, \u043e\u0433\u0443\u0440\u0446\u044b \u0441\u043e\u0443\u0441 \u0411\u0430\u0440\u0431\u0435\u043a\u044e, \u0441\u043e\u0443\u0441 \u0420\u044d\u043d\u0447, \u0444\u0438\u0440\u043c\u0435\u043d\u043d\u044b\u0439 \u0442\u043e\u043c\u0430\u0442\u043d\u044b\u0439 \u0441\u043e\u0443\u0441, \u043c\u043e\u0446\u0430\u0440\u0435\u043b\u043b\u0430.",image:"https://momentopizza.ru/images/vid-pizza.jpg",price:100,weight:700,energy:2220,size:"s",type:"common",id:"73f5cd52-2c0d-44a0-b902-d267501a35b1",variant:[{price:200,weight:900,energy:2620,size:"m",type:"common",id:"43a76941-c7df-467f-9d43-834c80fb5dc2"},{price:300,weight:1100,energy:3e3,size:"l",type:"common",id:"86544daa-6017-42c2-ab3e-cd689b675bae"},{price:400,weight:800,energy:2340,size:"m",type:"thin",id:"0d716812-9557-4cee-9ed1-e9a8b6dd622f"},{price:500,weight:1e3,energy:2780,size:"l",type:"thin",id:"920f2164-8c0a-4000-ad6b-016d229f15a5"}]},h=function(){return O},g=Object(u.a)(Object(u.a)({},h()),{},{shoppingCart:[]}),x=Object(f.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0,n=t.type,i=t.payload;return"ADD_CART"===n?Object(u.a)(Object(u.a)({},e),{},{shoppingCart:[].concat(Object(p.a)(e.shoppingCart),[i])}):e})),v=(n(29),n(2)),y=n(3),m=n(1),z=y.a.div(i||(i=Object(v.a)(["\n  background-color: #8287b6;\n  width: 100%;\n  height: 70px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #fff;\n  font-weight: 700;\n  font-size: 18px;\n"]))),w=function(e){var t=e.price;return Object(m.jsx)(z,{children:"\u0418\u0442\u043e\u0433\u043e \u043a \u043e\u043f\u043b\u0430\u0442\u0435: ".concat(t," \u20bd")})},S=n(5),C=y.a.button(c||(c=Object(v.a)(["\n  width: 200px;\n  height: 60px;\n  background-color: #4cc27f;\n  color: #fff;\n  border: none;\n  border-radius: 10px;\n  font-size: 16px;\n  margin-top: 15px;\n  cursor: pointer;\n  &:hover {\n    background-color: #139c4e;\n    transition: all 0.3s ease-in-out;\n  }\n"]))),k=function(e){var t=e.currentPrice,n=Object(j.c)();return Object(m.jsx)(C,{onClick:function(){n({type:"ADD_CART",payload:t})},children:"\u0412 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"})},E=y.a.div(a||(a=Object(v.a)(["\n  margin-left: 72px;\n  h2 {\n    color: #9c9c9c;\n  }\n  p {\n    color: #5f5f5f;\n  }\n"]))),_=y.a.div(r||(r=Object(v.a)(["\n  display: flex;\n  span:first-child {\n    margin-right: 75px;\n  }\n  margin: 50px 0;\n  font-weight: 700;\n  font-size: 20px;\n"]))),A=y.a.div(s||(s=Object(v.a)(["\n  ul {\n    padding: 0;\n    width: 100%;\n    list-style-type: none;\n    display: flex;\n    border: 2px solid #d0d0d0;\n    border-radius: 10px;\n    li {\n      flex: 1 1;\n      text-align: center;\n      padding: 25px 0;\n      font-weight: 700;\n      cursor: pointer;\n      &:hover {\n        background-color: #d5f0de;\n        &:first-child {\n          border-radius: 8px 0 0 8px;\n        }\n        &:last-child {\n          border-radius: 0 8px 8px 0;\n        }\n      }\n      &.active {\n        background-color: #4cc27f;\n        color: #fff;\n        &:first-child {\n          border-radius: 8px 0 0 8px;\n        }\n        &:last-child {\n          border-radius: 0 8px 8px 0;\n        }\n      }\n    }\n  }\n"]))),D=y.a.div(o||(o=Object(v.a)(["\n  font-weight: 700;\n  font-size: 40px;\n"])));x.subscribe((function(){return console.info(x.getState())}));var B,J,N,P=function(){var e=Object(d.useState)({activeObject:{title:"\u041e\u0431\u044b\u0447\u043d\u043e\u0435 \u0442\u0435\u0441\u0442\u043e",type:"common",id:"0"},types:[{title:"\u041e\u0431\u044b\u0447\u043d\u043e\u0435 \u0442\u0435\u0441\u0442\u043e",type:"common",id:"0"},{title:"\u0422\u043e\u043d\u043a\u043e\u0435 \u0442\u0435\u0441\u0442\u043e",type:"thin",id:"1"}]}),t=Object(S.a)(e,2),n=t[0],i=t[1],c=Object(d.useState)({activeObject:{title:"\u041c\u0430\u043b\u0435\u043d\u044c\u043a\u0430\u044f",size:"s",id:"0"},sizes:[{title:"\u041c\u0430\u043b\u0435\u043d\u044c\u043a\u0430\u044f",size:"s",id:"0"},{title:"\u0421\u0440\u0435\u0434\u043d\u044f\u044f",size:"m",id:"1"},{title:"\u0411\u043e\u043b\u044c\u0448\u0430\u044f",size:"l",id:"2"}]}),a=Object(S.a)(c,2),r=a[0],s=a[1],o=Object(d.useState)(null),l=Object(S.a)(o,2),b=l[0],j=l[1],p=Object(d.useState)(null),f=Object(S.a)(p,2),O=f[0],h=f[1],g=Object(d.useState)(null),v=Object(S.a)(g,2),y=v[0],z=v[1],w=Object(d.useState)(null),C=Object(S.a)(w,2),B=C[0],J=C[1],N=Object(d.useState)(null),P=Object(S.a)(N,2),R=P[0],T=P[1];function I(e){return n.types[e].id===n.activeObject.id?"active":""}function q(e){return r.sizes[e].id===r.activeObject.id?"active":""}return Object(d.useEffect)((function(){j(n.activeObject.type),h(r.activeObject.size)}),[n,r]),Object(d.useEffect)((function(){s("common"===b?Object(u.a)(Object(u.a)({},r),{},{activeObject:r.sizes[0]}):Object(u.a)(Object(u.a)({},r),{},{activeObject:r.sizes[1]}))}),[b]),Object(d.useEffect)((function(){!function(){var e=b,t=O;x.getState().size===t&&x.getState().type===e?(z(x.getState().price),J(x.getState().weight),T(x.getState().energy)):x.getState().variant.forEach((function(n){n.size===t&&n.type===e&&(z(n.price),J(n.weight),T(n.energy))}))}()}),[b,O]),Object(m.jsxs)(E,{children:[Object(m.jsx)("h2",{children:x.getState().category}),Object(m.jsx)("h1",{children:x.getState().title}),Object(m.jsx)("p",{children:x.getState().description}),Object(m.jsxs)(_,{children:[Object(m.jsx)("span",{children:"".concat(B," \u0433")}),Object(m.jsx)("span",{children:"".concat(R," \u043a\u043a\u0430\u043b")})]}),Object(m.jsxs)(A,{children:[Object(m.jsx)("ul",{children:n.types.map((function(e,t){return Object(m.jsx)("li",{pizzatype:e.type,className:I(t),onClick:function(){i(Object(u.a)(Object(u.a)({},n),{},{activeObject:n.types[t]}))},children:e.title},t)}))}),Object(m.jsx)("ul",{children:r.sizes.map((function(e,t){return!("thin"===b&&"s"===e.size)&&Object(m.jsx)("li",{pizzasize:e.size,className:q(t),onClick:function(){s(Object(u.a)(Object(u.a)({},r),{},{activeObject:r.sizes[t]}))},children:e.title},t)}))})]}),Object(m.jsx)(D,{children:"".concat(y," \u20bd")}),Object(m.jsx)(k,{currentPrice:y})]})},R=y.a.div(B||(B=Object(v.a)(["\n  margin: auto;\n  display: flex;\n  width: 1100px;\n  font-family: sans-serif;\n"]))),T=y.a.img(J||(J=Object(v.a)(["\n  width: 500px;\n  height: 500px;\n  border-radius: 10px;\n  user-select: none;\n"]))),I=function(){return Object(m.jsxs)(R,{children:[Object(m.jsx)(T,{src:x.getState().image,alt:"pizza_image"}),Object(m.jsx)(P,{})]})},q=y.a.div(N||(N=Object(v.a)(["\n  margin: 0;\n  padding: 0;\n  width: 100vw;\n  height: 100vh;\n  font-family: sans-serif;\n  display: flex;\n  flex-direction: column;\n"]))),F=Object(j.b)((function(e){return{shoppingCart:e.shoppingCart}}))((function(e){var t=e.shoppingCart;return Object(m.jsxs)(q,{children:[Object(m.jsx)(I,{}),Boolean(t.length)&&Object(m.jsx)(w,{price:t.reduce((function(e,t){return t+e}))})]})}));b.a.render(Object(m.jsx)(j.a,{store:x,children:Object(m.jsx)(F,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.4e4bb135.chunk.js.map