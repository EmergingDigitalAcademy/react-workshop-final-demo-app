(this["webpackJsonpbeer-list-app"]=this["webpackJsonpbeer-list-app"]||[]).push([[0],{38:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(17),s=n.n(a),i=(n(38),n(20)),o=n(11),u=n(32),b=n.n(u),d=n(4);var j=function(e){var t=e.beer,n=Object(r.useState)(!1),c=Object(i.a)(n,2),a=c[0],s=c[1];return Object(d.jsxs)("li",{onClick:function(){return s(!a)},style:{color:a?"red":"black"},children:[t.name," ",Object(d.jsx)("a",{href:"https://rotatoripa.co/beers/".concat(t.slug),target:"_blank",rel:"noreferrer",children:"Go to beer"})]})},l="FETCH_BEERS",p="SET_BEERS",O="ADD_BEERS",h="REMOVE_BEER",f="START_DRINKING",x="END_DRINKING";var g=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=(t[1],Object(o.c)((function(e){return e.beers}))),a=Object(o.c)((function(e){return e.loading})),s=Object(o.c)((function(e){return e.drinking})),u=Object(o.b)();return Object(r.useEffect)((function(){u({type:l})}),[u]),a?Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Beer List Loading"}),Object(d.jsx)("p",{children:"Please wait while the gremlin is getting s-faced."}),Object(d.jsx)(b.a,{color:"cyan",loading:!0})]}):n?Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Beer List"}),Object(d.jsx)("p",{children:"You a big dummy. There an error thing. The Russians drank everything"})]}):Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Beer List"}),Object(d.jsx)("ul",{className:s?"drinking":"",children:c.map((function(e){return Object(d.jsx)(j,{beer:e},e.id)}))}),Object(d.jsx)("button",{onClick:function(){return u({type:f})},children:"Start Drinking"})]})};var v=function(){return Object(d.jsx)("div",{children:Object(d.jsx)(g,{})})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,72)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))},E=n(10),_=n(33),k=n(14),w=[];var m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return t.payload;case O:return[].concat(Object(k.a)(e),Object(k.a)(t.payload));case h:var n=e.findIndex((function(e){return e.id===t.payload}));return[].concat(Object(k.a)(e.slice(0,n)),Object(k.a)(e.slice(n+1)));default:return e}};var S=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return!0;case x:return!1;default:return e}},N="START_LOADING",D="END_LOADING";var T=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return!0;case D:return!1;default:return e}},R=Object(E.b)({beers:m,drinking:S,loading:T}),I=n(9),B=n.n(I),L=n(6),C=n(22),M=n.n(C),A=B.a.mark(G);function F(e){return Math.ceil(e)}function G(){var e,t,n,r,c,a;return B.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,Object(L.c)({type:N});case 3:return s.next=5,M.a.get("https://rotatoripa.co/api/beers?per_page=10&page=1");case 5:return e=s.sent,s.next=8,Object(L.c)({type:p,payload:e.data});case 8:return s.next=10,Object(L.c)({type:D});case 10:return t=Number(e.headers.total),n=Number(e.headers["per-page"]),s.next=14,Object(L.a)(F,t/n);case 14:r=s.sent,c=2;case 16:if(!(c<=r)){s.next=25;break}return s.next=19,M.a.get("https://rotatoripa.co/api/beers?per_page=10&page=".concat(c));case 19:return a=s.sent,s.next=22,Object(L.c)({type:O,payload:a.data});case 22:c++,s.next=16;break;case 25:s.next=30;break;case 27:s.prev=27,s.t0=s.catch(0),console.error(s.t0);case 30:case"end":return s.stop()}}),A,null,[[0,27]])}var P=B.a.mark(J);function J(){var e,t,n,r,c;return B.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(L.d)((function(e){return e.beers}));case 2:return e=a.sent,console.log(e),t=e.length,n=Math.random()*t,r=Math.floor(n),c=e[r],a.next=10,Object(L.c)({type:h,payload:c.id});case 10:return a.next=12,Object(L.b)(2e3);case 12:return a.next=14,Object(L.c)({type:x});case 14:case"end":return a.stop()}}),P)}var K=J,V=B.a.mark(X);function X(){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(L.f)(f,K);case 2:return e.next=4,Object(L.e)(l,G);case 4:case"end":return e.stop()}}),V)}var H=X,U=Object(_.a)(),Y=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||E.c,q=Object(E.d)(R,Y(Object(E.a)(U)));U.run(H);var z=q;s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(o.a,{store:z,children:Object(d.jsx)(v,{})})}),document.getElementById("root")),y()}},[[70,1,2]]]);
//# sourceMappingURL=main.322e9df2.chunk.js.map