(this["webpackJsonpcrwn-clothing"]=this["webpackJsonpcrwn-clothing"]||[]).push([[0],{54:function(e,t,n){e.exports=n(90)},63:function(e,t,n){},64:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},90:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(28),i=n.n(c);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=n(18),o=n(8),s=n(46),u=n(10),m=(n(63),n(19)),p=n(7),d=Object(p.a)([function(e){return e.directory}],(function(e){return e.sections})),f=(n(64),Object(u.g)((function(e){var t=e.title,n=e.imageUrl,a=e.size,c=e.linkUrl,i=e.history,l=e.match;return r.a.createElement("div",{className:"menu-item ".concat(a),onClick:function(){return i.push(l.url+c)}},r.a.createElement("div",{className:"background-image",style:{backgroundImage:"url(".concat(n,")")}}),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"title"},t.toUpperCase()),r.a.createElement("span",{className:"subtitle"},"SHOP NOW")))}))),b=(n(66),Object(p.b)({sections:d})),E=Object(o.b)(b)((function(e){var t=e.sections;return r.a.createElement("div",{className:"directory-menu"},t.map((function(e){var t=e.id,n=Object(m.a)(e,["id"]);return r.a.createElement(f,Object.assign({key:t},n))})))})),v=n(13),O=n(14);function h(){var e=Object(v.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return h=function(){return e},e}var g=O.b.div(h()),S=function(){return r.a.createElement(g,null,r.a.createElement(E,null))},N={FETCH_COLLECTIONS_START:"FETCH_COLLECTIONS_START",FETCH_COLLECTIONS_SUCCESS:"FETCH_COLLECTIONS_SUCCESS",FETCH_COLLECTIONS_FAILURE:"FETCH_COLLECTIONS_FAILURE"},_=function(e){return{type:N.FETCH_COLLECTIONS_SUCCESS,payload:e}};function C(){var e=Object(v.a)(["\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  border: 3px solid rgba(195, 195, 195, 0.6);\n  border-radius: 50%;\n  border-top-color: #636767;\n  animation: spin 1s ease-in-out infinite;\n  -webkit-animation: spin 1s ease-in-out infinite;\n  @keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n"]);return C=function(){return e},e}function j(){var e=Object(v.a)(["\n  height: 60vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return j=function(){return e},e}var I=O.b.div(j()),y=O.b.div(C()),w=function(e){return function(t){var n=t.isLoading,a=Object(m.a)(t,["isLoading"]);return n?r.a.createElement(I,null,r.a.createElement(y,null)):r.a.createElement(e,a)}},x=function(e){return e.shop},T=Object(p.a)([x],(function(e){return e.collections})),k=Object(p.a)([T],(function(e){return e?Object.keys(e).map((function(t){return e[t]})):[]})),R=Object(p.a)([x],(function(e){return e.isFetching})),U=Object(p.a)([x],(function(e){return Boolean(e.collections)})),A=n(11),L={TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",CLEAR_ITEM_FROM_CART:"CLEAR_ITEM_FROM_CART",REMOVE_ITEM:"REMOVE_ITEM",CLEAR_CART:"CLEAR_CART"},G=function(){return{type:L.TOGGLE_CART_HIDDEN}},F=function(e){return{type:L.ADD_ITEM,payload:e}};function P(){var e=Object(v.a)(['\n  min-width: 165px;\n  width: auto;\n  height: 50px;\n  letter-spacing: 0.5px;\n  line-height: 50px;\n  padding: 0 35px 0 35px;\n  font-size: 15px;\n  background-color: black;\n  color: white;\n  text-transform: uppercase;\n  font-family: "Open Sans Condensed";\n  font-weight: bolder;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n\n  &:hover {\n    background-color: white;\n    color: black;\n    border: 1px solid black;\n  }\n\n  ',"\n"]);return P=function(){return e},e}function M(){var e=Object(v.a)(["\n  background-color: #4285f4;\n  color: white;\n\n  &:hover {\n    background-color: #357ae8;\n    border: none;\n  }\n"]);return M=function(){return e},e}function H(){var e=Object(v.a)(["\n  background-color: white;\n  color: black;\n  border: 1px solid black;\n\n  &:hover {\n    background-color: black;\n    color: white;\n    border: none;\n  }\n"]);return H=function(){return e},e}var D=Object(O.a)(H()),q=Object(O.a)(M()),V=O.b.button(P(),(function(e){return e.isGoogleSignin?q:e.inverted?D:void 0})),z=function(e){var t=e.children,n=Object(m.a)(e,["children"]);return r.a.createElement(V,n,t)},W=(n(67),Object(o.b)(null,(function(e){return{addItem:function(t){return e(F(t))}}}))((function(e){var t=e.item,n=e.addItem,a=t.name,c=t.price,i=t.imageUrl;return r.a.createElement("div",{className:"collection-item"},r.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(i,")")}}),r.a.createElement("div",{className:"collection-footer"},r.a.createElement("span",{className:"name"},a),r.a.createElement("span",{className:"price"},"$",c)),r.a.createElement(z,{inverted:!0,className:"button",onClick:function(){return n(t)}},"AGREGAR AL CARRO"))}))),B=(n(68),Object(u.g)((function(e){var t=e.title,n=e.items,a=e.history,c=e.match,i=e.routeName;return r.a.createElement("div",{className:"collection-preview"},r.a.createElement("h1",{className:"title",onClick:function(){return a.push("".concat(c.path,"/").concat(i))}},t.toUpperCase()),r.a.createElement("div",{className:"preview"},n.filter((function(e,t){return t<4})).map((function(e){return r.a.createElement(W,{key:e.id,item:e})}))))}))),K=(n(69),Object(p.b)({collections:k})),$=Object(o.b)(K)((function(e){var t=e.collections;return r.a.createElement("div",{className:"collections-overview"},t.map((function(e){var t=e.id,n=Object(m.a)(e,["id"]);return r.a.createElement(B,Object.assign({key:t},n))})))})),J=Object(p.b)({isLoading:R}),Z=Object(A.d)(Object(o.b)(J),w)($),Q=(n(70),Object(o.b)((function(e,t){return{collection:(n=t.match.params.collectionId,Object(p.a)([T],(function(e){return e?e[n]:null})))(e)};var n}))((function(e){var t=e.collection,n=t.title,a=t.items;return r.a.createElement("div",{className:"collection"},r.a.createElement("h2",{className:"title"},n),r.a.createElement("div",{className:"items"},a.map((function(e){return r.a.createElement(W,{key:e.id,item:e})}))))}))),Y=Object(p.b)({isLoading:function(e){return!U(e)}}),X=Object(A.d)(Object(o.b)(Y),w)(Q),ee=Object(o.b)(null,(function(e){return{fetchCollectionsStart:function(){return e({type:N.FETCH_COLLECTIONS_START})}}}))((function(e){var t=e.fetchCollectionsStart,n=e.match;return Object(a.useEffect)((function(){t()}),[t]),r.a.createElement("div",{className:"shop-page"},r.a.createElement(u.b,{exact:!0,path:"".concat(n.path),component:Z}),r.a.createElement(u.b,{path:"".concat(n.path,"/:collectionId"),component:X}))}));function te(){return(te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function ne(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var ae=r.a.createElement("title",null,"Group"),re=r.a.createElement("desc",null,"Created with Sketch."),ce=r.a.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.a.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},r.a.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},r.a.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),r.a.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2})))),ie=function(e){var t=e.svgRef,n=e.title,a=ne(e,["svgRef","title"]);return r.a.createElement("svg",te({width:"50px",height:"39px",viewBox:"0 0 50 39",ref:t},a),void 0===n?ae:n?r.a.createElement("title",null,n):null,re,ce)},le=r.a.forwardRef((function(e,t){return r.a.createElement(ie,te({svgRef:t},e))}));n.p;function oe(){return(oe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function se(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var ue=r.a.createElement("g",null),me=r.a.createElement("g",null),pe=r.a.createElement("g",null),de=r.a.createElement("g",null),fe=r.a.createElement("g",null),be=r.a.createElement("g",null),Ee=r.a.createElement("g",null),ve=r.a.createElement("g",null),Oe=r.a.createElement("g",null),he=r.a.createElement("g",null),ge=r.a.createElement("g",null),Se=r.a.createElement("g",null),Ne=r.a.createElement("g",null),_e=r.a.createElement("g",null),Ce=r.a.createElement("g",null),je=function(e){var t=e.svgRef,n=e.title,a=se(e,["svgRef","title"]);return r.a.createElement("svg",oe({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t},a),n?r.a.createElement("title",null,n):null,r.a.createElement("g",null,r.a.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),ue,me,pe,de,fe,be,Ee,ve,Oe,he,ge,Se,Ne,_e,Ce)},Ie=r.a.forwardRef((function(e,t){return r.a.createElement(je,oe({svgRef:t},e))})),ye=(n.p,n(71),function(e){return e.cart}),we=Object(p.a)([ye],(function(e){return e.cartItems})),xe=Object(p.a)([ye],(function(e){return e.hidden})),Te=Object(p.a)([we],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),ke=Object(p.a)([we],(function(e){return e.reduce((function(e,t){return e+t.price*t.quantity}),0)})),Re=Object(p.b)({itemCount:Te}),Ue=Object(o.b)(Re,(function(e){return{toggleCartHidden:function(){return e(G())}}}))((function(e){var t=e.toggleCartHidden,n=e.itemCount;return r.a.createElement("div",{className:"cart-icon"},r.a.createElement(Ie,{className:"shopping-icon",onClick:t}),r.a.createElement("span",{className:"item-count"},n))})),Ae=(n(72),function(e){var t=e.item,n=t.imageUrl,a=t.price,c=t.name,i=t.quantity;return r.a.createElement("div",{className:"cart-item"},r.a.createElement("img",{src:n,alt:"item"}),r.a.createElement("div",{className:"item-details"},r.a.createElement("span",{className:"name"},c),r.a.createElement("span",{className:"price"},i," x $",a)))}),Le=(n(73),Object(p.b)({cartItems:we})),Ge=Object(u.g)(Object(o.b)(Le)((function(e){var t=e.cartItems,n=e.history,a=e.dispatch;return r.a.createElement("div",{className:"cart-dropdown"},r.a.createElement("div",{className:"cart-items"},t.length?t.map((function(e){return r.a.createElement(Ae,{key:e.id,item:e})})):r.a.createElement("span",{className:"empty-message"},"Tu carro esta vacio")),r.a.createElement(z,{onClick:function(){n.push("/checkout"),a(G())}},"CONTINUAR COMPRA"))}))),Fe=Object(p.a)([function(e){return e.user}],(function(e){return e.currentUser}));function Pe(){var e=Object(v.a)(["\n  padding: 10px 15px;\n  cursor: pointer;\n"]);return Pe=function(){return e},e}function Me(){var e=Object(v.a)(["\n  width: 50%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n"]);return Me=function(){return e},e}function He(){var e=Object(v.a)(["\n  height: 100%;\n  width: 70px;\n  padding: 25px;\n"]);return He=function(){return e},e}function De(){var e=Object(v.a)(["\n  height: 70px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 25px;\n"]);return De=function(){return e},e}var qe=O.b.div(De()),Ve=Object(O.b)(l.b)(He()),ze=O.b.div(Me()),We=Object(O.b)(l.b)(Pe()),Be={SET_CURRENT_USER:"SET_CURRENT_USER",GOOGLE_SIGN_IN_START:"GOOGLE_SIGN_IN_START",EMAIL_SIGN_IN_START:"EMAIL_SIGN_IN_START",SIGN_IN_SUCCESS:"SIGN_IN_SUCCESS",SIGN_IN_FAIULRE:"SIGN_IN_FAIULRE",CHECK_USER_SESSION:"CHECK_USER_SESSION",SIGN_OUT_START:"SIGN_OUT_START",SIGN_OUT_SUCCESS:"SIGN_OUT_SUCCESS",SIGN_OUT_FAILURE:"SIGN_OUT_FAILURE",SIGN_UP_START:"SIGN_UP_START",SIGN_UP_SUCCESS:"SIGN_UP_SUCCESS",SIGN_UP_FAILURE:"SIGN_UP_FAILURE"},Ke=function(e){return{type:Be.SIGN_IN_FAIULRE,payload:e}},$e=function(e){var t=e.user,n=e.additionalData;return{type:Be.SIGN_UP_SUCCESS,payload:{user:t,additionalData:n}}},Je=Object(p.b)({currentUser:Fe,hidden:xe}),Ze=Object(o.b)(Je)((function(e){var t=e.currentUser,n=e.hidden,a=e.dispatch;return r.a.createElement(qe,null,r.a.createElement(Ve,{to:"/"},r.a.createElement(le,{className:"logo-container"})),r.a.createElement(ze,null,r.a.createElement(We,{to:"/shop"},"TIENDA"),r.a.createElement(We,{to:"/contact"},"CONTACTO"),t?r.a.createElement(We,{as:"div",onClick:function(){return a({type:Be.SIGN_OUT_START})}},"SALIR"):r.a.createElement(We,{to:"/signin"},"INGRESAR"),r.a.createElement(Ue,null)),n?null:r.a.createElement(Ge,null))})),Qe=(n(74),Object(o.b)()((function(e){var t=e.cartItem,n=e.dispatch,a=t.imageUrl,c=t.name,i=t.quantity,l=t.price;return r.a.createElement("div",{className:"checkout-item"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:a,alt:"item"})),r.a.createElement("span",{className:"name"},c),r.a.createElement("span",{className:"quantity"},r.a.createElement("div",{className:"arrow",onClick:function(){return n({type:L.REMOVE_ITEM,payload:t})}},"\u276e"),r.a.createElement("span",{className:"value"},i),r.a.createElement("div",{className:"arrow",onClick:function(){return n(F(t))}},"\u276f")),r.a.createElement("span",{className:"price"},"$",l),r.a.createElement("span",{className:"remove-button",onClick:function(){return n({type:L.CLEAR_ITEM_FROM_CART,payload:t})}},"\u2715"))}))),Ye=n(50),Xe=n.n(Ye),et=function(e){var t=e.price,n=100*t;return r.a.createElement(Xe.a,{label:"Pagar",name:"CRWN Clothing Ltd.",billingAddress:!0,shippingAddress:!0,image:"https://sendeyo.com/up/d/f3eb2117da",description:"Tu total es $".concat(t),amount:n,panelLabel:"Pagar Ahora",token:function(e){console.log(e),alert("Se realizo el pago exitosamente!")},stripeKey:"pk_test_51HZLJnCpwfvtfGvhP2INZVlN3UVVwki7Ck9m1lcbVcbekqU8jW9FNGbeEsvaPx5VCWLM4fciF7W4iChB9Mz8SaZu00nhctcVwJ"})},tt=(n(75),Object(p.b)({cartItems:we,total:ke})),nt=Object(o.b)(tt,null)((function(e){var t=e.cartItems,n=e.total;return r.a.createElement("div",{className:"checkout"},r.a.createElement("div",{className:"checkout-header"},r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Producto")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Descripcion")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Cantidad")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Precio")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Remover"))),t.map((function(e){return r.a.createElement(Qe,{key:e.id,cartItem:e})})),r.a.createElement("div",{className:"total"},r.a.createElement("span",null,"TOTAL: $",n)),r.a.createElement("div",{className:"test-warning"},"Podes usar la siguiente informacion para testear:",r.a.createElement("br",null),"4242 4242 4242 4242 - Exp: 01/20 - CVV: 123"),r.a.createElement(et,{price:n}))})),at=n(24),rt=n(9),ct=n(33),it=(n(76),n(77),function(e){var t=e.handleChange,n=e.label,a=Object(m.a)(e,["handleChange","label"]);return r.a.createElement("div",{className:"group"},r.a.createElement("input",Object.assign({className:"form-input"},a,{onChange:t})),n?r.a.createElement("label",{className:"form-input-label ".concat(a.value.length?"shrink":""," ")},n):null)}),lt=Object(o.b)()((function(e){var t=e.dispatch,n=Object(a.useState)({email:"",password:""}),c=Object(ct.a)(n,2),i=c[0],l=c[1],o=i.email,s=i.password,u=function(e){var t=e.target,n=t.value,a=t.name;l(Object(rt.a)({},i,Object(at.a)({},a,n)))};return r.a.createElement("div",{className:"sign-in"},r.a.createElement("h2",null,"Ya tengo una cuenta"),r.a.createElement("span",null,"Ingresa con tu email y contrase\xf1a"),r.a.createElement("form",{className:"form",onSubmit:function(e){e.preventDefault(),t({type:Be.EMAIL_SIGN_IN_START,payload:{email:o,password:s}})}},r.a.createElement(it,{handleChange:u,value:o,label:"Email",name:"email",type:"email",required:!0}),r.a.createElement(it,{handleChange:u,value:s,label:"Contrase\xf1a",name:"password",type:"password",required:!0}),r.a.createElement("div",{className:"buttons"},r.a.createElement(z,{type:"submit"},"Ingresar"),r.a.createElement(z,{type:"button",onClick:function(){return t({type:Be.GOOGLE_SIGN_IN_START})},isGoogleSignIn:!0},"Ingresar con Google"))))})),ot=n(2),st=n.n(ot),ut=n(31),mt=(n(79),Object(o.b)()((function(e){var t=e.dispatch,n=Object(a.useState)({displayName:"",email:"",password:"",confirmPassword:""}),c=Object(ct.a)(n,2),i=c[0],l=c[1],o=i.displayName,s=i.email,u=i.password,m=i.confirmPassword,p=function(){var e=Object(ut.a)(st.a.mark((function e(n){return st.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),u===m){e.next=4;break}return alert("No coinciden las contrase\xf1as"),e.abrupt("return");case 4:t({type:Be.SIGN_UP_START,payload:{displayName:o,email:s,password:u}});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(e){var t=e.target,n=t.value,a=t.name;l(Object(rt.a)({},i,Object(at.a)({},a,n)))};return r.a.createElement("div",{className:"sign-up"},r.a.createElement("h2",{className:"title"},"No tengo una cuenta"),r.a.createElement("span",null,"Ingresa con tu email y contrase\xf1a"),r.a.createElement("form",{className:"sign-up-form",onSubmit:p},r.a.createElement(it,{handleChange:d,value:s,label:"Email",name:"email",type:"email",required:!0}),r.a.createElement(it,{handleChange:d,value:o,label:"Nombre",name:"displayName",type:"text",required:!0})," ",r.a.createElement(it,{handleChange:d,value:u,label:"Contrase\xf1a",name:"password",type:"password",required:!0}),r.a.createElement(it,{handleChange:d,value:m,label:"Confirmar contrase\xf1a",name:"confirmPassword",type:"password",required:!0}),r.a.createElement("div",{className:"buttons"},r.a.createElement(z,{type:"submit"},"Registrarse"))))}))),pt=(n(80),function(){return r.a.createElement("div",{className:"authentification"},r.a.createElement(lt,null),r.a.createElement(mt,null))}),dt=Object(p.b)({currentUser:Fe}),ft=Object(o.b)(dt)((function(e){var t=e.dispatch,n=e.currentUser;return Object(a.useEffect)((function(){t({type:Be.CHECK_USER_SESSION})}),[t]),r.a.createElement("div",{className:"App"},r.a.createElement(Ze,null),r.a.createElement(u.d,null,r.a.createElement(u.b,{exact:!0,path:"/",component:S}),r.a.createElement(u.b,{path:"/shop",component:ee}),r.a.createElement(u.b,{exact:!0,path:"/checkout",component:nt}),r.a.createElement(u.b,{exact:!0,path:"/signin",render:function(){return n?r.a.createElement(u.a,{to:"/"}):r.a.createElement(pt,null)}})))})),bt=(n(81),n(32)),Et=(n(82),n(53)),vt=n(51),Ot=n.n(vt),ht={currentUser:null,error:null,displayName:"",email:"",password:"",confirmPassword:""},gt=n(52),St=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(rt.a)({},e,{quantity:e.quantity+1}):e})):[].concat(Object(gt.a)(e),[Object(rt.a)({},t,{quantity:1})])},Nt=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?Object(rt.a)({},e,{quantity:e.quantity-1}):e}))},_t={hidden:!0,cartItems:[]},Ct={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},jt={collections:null,isFetching:!1,errorMessage:null},It={key:"root",storage:Ot.a,whitelist:["cart"]},yt=Object(A.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ht,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case Be.SIGN_IN_SUCCESS:return Object(rt.a)({},e,{currentUser:a,error:null});case Be.SIGN_OUT_SUCCESS:return Object(rt.a)({},e,{currentUser:null,error:null});case Be.SIGN_UP_FAIULRE:case Be.SIGN_OUT_FAIULRE:case Be.SIGN_IN_FAIULRE:return Object(rt.a)({},e,{error:a});default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_t,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case L.TOGGLE_CART_HIDDEN:return Object(rt.a)({},e,{hidden:!e.hidden});case L.ADD_ITEM:return Object(rt.a)({},e,{cartItems:St(e.cartItems,a)});case L.CLEAR_ITEM_FROM_CART:return Object(rt.a)({},e,{cartItems:e.cartItems.filter((function(e){return e.id!==a.id}))});case L.REMOVE_ITEM:return Object(rt.a)({},e,{cartItems:Nt(e.cartItems,a)});case L.CLEAR_CART:return Object(rt.a)({},e,{cartItems:[]});default:return e}},directory:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ct,t=arguments.length>1?arguments[1]:void 0;t.type,t.payload;return e},shop:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:jt,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case N.FETCH_COLLECTIONS_START:return Object(rt.a)({},e,{isFetching:!0});case N.FETCH_COLLECTIONS_SUCCESS:return Object(rt.a)({},e,{isFetching:!1,collections:a});case N.FETCH_COLLECTIONS_FAILURE:return Object(rt.a)({},e,{isFetching:!1,errorMessage:a});default:return e}}}),wt=Object(bt.a)(It,yt),xt=n(4),Tt=st.a.mark(Ut),kt=st.a.mark(At),Rt=st.a.mark(Lt);function Ut(){return st.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(xt.c)({type:L.CLEAR_CART});case 2:case"end":return e.stop()}}),Tt)}function At(){return st.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(xt.d)(Be.SIGN_OUT_SUCCESS,Ut);case 2:case"end":return e.stop()}}),kt)}function Lt(){return st.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(xt.a)([Object(xt.b)(At)]);case 2:case"end":return e.stop()}}),Rt)}var Gt=n(25),Ft=n.n(Gt),Pt=(n(85),n(88),function(){var e=Object(ut.a)(st.a.mark((function e(t,n){var a,r,c,i;return st.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return a=Dt.doc("users/".concat(t.uid)),e.next=5,a.get();case 5:if(e.sent.exists){e.next=17;break}return r=t.displayName,c=t.email,i=new Date,e.prev=9,e.next=12,a.set(Object(rt.a)({displayName:r,email:c,createdAt:i},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("Error creating user",e.t0.message);case 17:return e.abrupt("return",a);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,n){return e.apply(this,arguments)}}());Ft.a.initializeApp({apiKey:"AIzaSyAYd_z7K5LzJOSn6i6yQRsdlZ6MLsGgd-c",authDomain:"crwn-db-a28d4.firebaseapp.com",databaseURL:"https://crwn-db-a28d4.firebaseio.com",projectId:"crwn-db-a28d4",storageBucket:"crwn-db-a28d4.appspot.com",messagingSenderId:"190791680328",appId:"1:190791680328:web:e195ef1ade5922a33f737d"});var Mt=function(e){return e.docs.map((function(e){var t=e.data(),n=t.title,a=t.items;return{routeName:encodeURI(n.toLowerCase()),id:e.id,title:n,items:a}})).reduce((function(e,t){return e[t.title.toLowerCase()]=t,e}),{})},Ht=Ft.a.auth(),Dt=Ft.a.firestore(),qt=new Ft.a.auth.GoogleAuthProvider;qt.setCustomParameters({prompt:"select_account"});Ft.a;var Vt=st.a.mark(Bt),zt=st.a.mark(Kt),Wt=st.a.mark($t);function Bt(){var e,t,n;return st.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,e=Dt.collection("collections"),a.next=4,e.get();case 4:return t=a.sent,a.next=7,Object(xt.b)(Mt,t);case 7:return n=a.sent,a.next=10,Object(xt.c)(_(n));case 10:a.next=16;break;case 12:return a.prev=12,a.t0=a.catch(0),a.next=16,Object(xt.c)((r=a.t0.message,{type:N.FETCH_COLLECTIONS_FAILURE,payload:r}));case 16:case"end":return a.stop()}var r}),Vt,null,[[0,12]])}function Kt(){return st.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(xt.d)(N.FETCH_COLLECTIONS_START,Bt);case 2:case"end":return e.stop()}}),zt)}function $t(){return st.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(xt.a)([Object(xt.b)(Kt)]);case 2:case"end":return e.stop()}}),Wt)}var Jt=st.a.mark(un),Zt=st.a.mark(mn),Qt=st.a.mark(pn),Yt=st.a.mark(dn),Xt=st.a.mark(fn),en=st.a.mark(bn),tn=st.a.mark(En),nn=st.a.mark(vn),an=st.a.mark(On),rn=st.a.mark(hn),cn=st.a.mark(gn),ln=st.a.mark(Sn),on=st.a.mark(Nn),sn=st.a.mark(_n);function un(e,t){var n,a;return st.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(xt.b)(Pt,e,t);case 3:return n=r.sent,r.next=6,n.get();case 6:return a=r.sent,r.next=9,Object(xt.c)((c=Object(rt.a)({id:a.id},a.data()),{type:Be.SIGN_IN_SUCCESS,payload:c}));case 9:r.next=15;break;case 11:return r.prev=11,r.t0=r.catch(0),r.next=15,Object(xt.c)(Ke(r.t0.message));case 15:case"end":return r.stop()}var c}),Jt,null,[[0,11]])}function mn(){var e,t;return st.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Ht.signInWithPopup(qt);case 3:return e=n.sent,t=e.user,n.next=7,un(t);case 7:n.next=13;break;case 9:return n.prev=9,n.t0=n.catch(0),n.next=13,Object(xt.c)(Ke(n.t0.message));case 13:case"end":return n.stop()}}),Zt,null,[[0,9]])}function pn(e){var t,n,a,r,c;return st.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return t=e.payload,n=t.email,a=t.password,i.prev=1,i.next=4,Ht.signInWithEmailAndPassword(n,a);case 4:return r=i.sent,c=r.user,i.next=8,un(c);case 8:i.next=14;break;case 10:return i.prev=10,i.t0=i.catch(1),i.next=14,Object(xt.c)(Ke(i.t0.message));case 14:case"end":return i.stop()}}),Qt,null,[[1,10]])}function dn(){var e;return st.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,new Promise((function(e,t){var n=Ht.onAuthStateChanged((function(t){n(),e(t)}),t)}));case 3:if(e=t.sent){t.next=6;break}return t.abrupt("return");case 6:return t.next=8,un(e);case 8:t.next=14;break;case 10:return t.prev=10,t.t0=t.catch(0),t.next=14,Object(xt.c)(Ke(t.t0.message));case 14:case"end":return t.stop()}}),Yt,null,[[0,10]])}function fn(){return st.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Ht.signOut();case 3:return e.next=5,Object(xt.c)({type:Be.SIGN_OUT_SUCCESS});case 5:e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(0),e.next=11,Object(xt.c)((t=e.t0.message,{type:Be.SIGN_OUT_FAILURE,payload:t}));case 11:case"end":return e.stop()}var t}),Xt,null,[[0,7]])}function bn(e){var t,n,a,r,c,i;return st.a.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return t=e.payload,n=t.email,a=t.password,r=t.displayName,l.prev=1,l.next=4,Ht.createUserWithEmailAndPassword(n,a);case 4:return c=l.sent,i=c.user,l.next=8,Object(xt.c)($e({user:i,additionalData:{displayName:r}}));case 8:l.next=14;break;case 10:return l.prev=10,l.t0=l.catch(1),l.next=14,Object(xt.c)((o=l.t0.message,{type:Be.SIGN_UP_FAILURE,payload:o}));case 14:case"end":return l.stop()}var o}),en,null,[[1,10]])}function En(e){var t,n,a;return st.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,n=t.user,a=t.additionalData.displayName,r.next=3,un(n,{displayName:a});case 3:case"end":return r.stop()}}),tn)}function vn(){return st.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(xt.d)(Be.GOOGLE_SIGN_IN_START,mn);case 2:case"end":return e.stop()}}),nn)}function On(){return st.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(xt.d)(Be.EMAIL_SIGN_IN_START,pn);case 2:case"end":return e.stop()}}),an)}function hn(){return st.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(xt.d)(Be.CHECK_USER_SESSION,dn);case 2:case"end":return e.stop()}}),rn)}function gn(){return st.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(xt.d)(Be.SIGN_OUT_START,fn);case 2:case"end":return e.stop()}}),cn)}function Sn(){return st.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(xt.d)(Be.SIGN_UP_START,bn);case 2:case"end":return e.stop()}}),ln)}function Nn(){return st.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(xt.d)(Be.SIGN_UP_SUCCESS,En);case 2:case"end":return e.stop()}}),on)}function _n(){return st.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(xt.a)([Object(xt.b)(vn),Object(xt.b)(On),Object(xt.b)(hn),Object(xt.b)(gn),Object(xt.b)(Sn),Object(xt.b)(Nn)]);case 2:case"end":return e.stop()}}),sn)}var Cn=st.a.mark(jn);function jn(){return st.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(xt.a)([Object(xt.b)($t),Object(xt.b)(_n),Object(xt.b)(Lt)]);case 2:case"end":return e.stop()}}),Cn)}var In=Object(Et.a)(),yn=[In];var wn=Object(A.e)(wt,A.a.apply(void 0,yn));In.run(jn);var xn=Object(bt.b)(wn);i.a.render(r.a.createElement(o.a,{store:wn},r.a.createElement(l.a,{basename:"/crwn-clothing"},r.a.createElement(r.a.StrictMode,null,r.a.createElement(s.a,{persistor:xn},r.a.createElement(ft,null))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[54,1,2]]]);
//# sourceMappingURL=main.723d5ddf.chunk.js.map