(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{13:function(e,t,n){e.exports={container:"pokemon_container__2lG_b",favorite:"pokemon_favorite__3n-_-",img:"pokemon_img__2u4pH",parrafo:"pokemon_parrafo__2M_ws",type:"pokemon_type__1e1S8",stats1:"pokemon_stats1__3Luty",stats2:"pokemon_stats2__ssJb2"}},21:function(e,t,n){e.exports={container:"search_container__3ZqCn",field:"search_field__3mBh9",button:"search_button__rQ_DA",field2:"search_field2__2_3_z",buttonreset:"search_buttonreset__2h6Fv"}},27:function(e,t,n){e.exports={container:"landingpage_container__1681a",myButton:"landingpage_myButton__dEwRZ"}},29:function(e,t,n){e.exports={container:"pokedex_container__3bqQh",reset:"pokedex_reset__2NlfI"}},30:function(e,t,n){e.exports={header:"navbar_header__3hUT1",logo:"navbar_logo__3BpLd"}},33:function(e,t,n){e.exports={container:"favorite_container__3ws37"}},40:function(e,t,n){},41:function(e,t,n){},5:function(e,t,n){e.exports={container:"form_container__lOQJ8",columns:"form_columns__3ws_a",column:"form_column__1m4wq",title:"form_title__3OYOG",form:"form_form__3BOMb",hiddenCB:"form_hiddenCB__3_byP",question:"form_question__2RMPv",danger:"form_danger__pVxde",submit:"form_submit__3w9qy"}},52:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(22),s=n.n(a),r=(n(40),n(41),n(4)),i=n(8),o=n(10),l=n(27),j=n.n(l),u=n(0),d=function(){return Object(u.jsxs)("div",{className:j.a.container,children:[Object(u.jsxs)("div",{children:[Object(u.jsxs)("h1",{children:[Object(u.jsx)("span",{children:"Here"})," you'll ",Object(u.jsx)("br",{}),"find all your",Object(u.jsx)("br",{}),Object(u.jsx)("span",{children:"Favorites Pokemon"})]}),Object(u.jsxs)("p",{children:["From pikachu to Wigglytuff, ",Object(u.jsx)("br",{}),"From Grass type to Dragon types! ",Object(u.jsx)("br",{}),"Everything about pokemon!!! ",Object(u.jsx)("br",{}),"Everything"]}),Object(u.jsx)(o.b,{to:"/home",children:Object(u.jsx)("input",{type:"submit",value:"Gotta catchem' all",className:j.a.myButton})})]}),Object(u.jsx)("div",{children:Object(u.jsx)("img",{src:"img/blackmew.png",alt:""})})]})},b=n(15),h=n(29),p=n.n(h),m=(n(52),function(e){var t=e.array,n=e.img;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"container",children:t.length?t.map((function(e){return Object(u.jsx)(o.b,{to:"/pokemon/".concat(e.id),children:Object(u.jsxs)("figure",{className:e.type,children:[Object(u.jsx)("div",{className:"cardImageContainer",children:Object(u.jsx)("img",{src:e.img,alt:"",className:"CardImage"})}),Object(u.jsxs)("div",{className:"cardCaption",children:[Object(u.jsxs)("h1",{className:"cardName",children:["Id:",e.idPoke?"".concat(e.idPoke):e.id]}),2===e.type.length?Object(u.jsxs)("div",{className:"types",children:[Object(u.jsx)("h3",{className:"cardType",children:e.type[0]}),Object(u.jsx)("h3",{className:"cardType",children:e.type[1]})]}):Object(u.jsx)("div",{className:"types",children:Object(u.jsx)("h3",{className:"cardType",children:e.type[0]})}),Object(u.jsx)("div",{className:"cardName",children:e.name})]})]})},e.name)})):Object(u.jsx)("img",{src:t.info?"https://static1.thegamerimages.com/wordpress/wp-content/uploads/2020/02/Pokemon-404-page.jpg":n,alt:"Not found"})})})}),O=n(21),f=n.n(O),x=n(6),v=n(14),g=function(){return function(){var e=Object(v.a)(Object(x.a)().mark((function e(t){var n,c;return Object(x.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeserver.onrender.com/pokemons");case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,t({type:"GET_POKEMONS",payload:c});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},_=function(){var e=Object(i.b)(),t=Object(c.useState)(""),n=Object(b.a)(t,2),a=n[0],s=n[1],r=Object(i.c)((function(e){return e.types})),o=f.a.button;return Object(u.jsxs)("div",{className:f.a.container,children:[Object(u.jsx)("form",{onSubmit:function(t){var n;t.preventDefault(),e((n=a,function(){var e=Object(v.a)(Object(x.a)().mark((function e(t){var c,a;return Object(x.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeserver.onrender.com/pokemons?name=".concat(n));case 2:return c=e.sent,e.next=5,c.json();case 5:a=e.sent,t({type:"GET_NAME",payload:a});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),s("")},children:Object(u.jsxs)("div",{className:f.a.field,children:[Object(u.jsx)("input",{type:"text",id:"searchterm",value:a,onChange:function(e){s(e.target.value)},placeholder:"Find your pokemon"}),Object(u.jsx)("input",{className:o,type:"submit",value:"Find!"})]})}),Object(u.jsxs)("div",{className:f.a.field2,children:[Object(u.jsxs)("select",{className:o,name:"Type",onChange:function(t){var n;e((n=t.target.value,function(e){e({type:"BY_TYPE",payload:n})}))},children:[Object(u.jsx)("option",{value:"",children:"Type"}),null===r||void 0===r?void 0:r.map((function(e){return Object(u.jsx)("option",{value:e.name,children:e.name},e.slot)}))]}),Object(u.jsxs)("select",{name:"Origin",className:o,onChange:function(t){var n;e((n=t.target.value,function(){var e=Object(v.a)(Object(x.a)().mark((function e(t){var c,a;return Object(x.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeserver.onrender.com/pokemons?by=".concat(n));case 2:return c=e.sent,e.next=5,c.json();case 5:a=e.sent,t({type:"FILTER",payload:a});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(u.jsx)("option",{value:"0",children:"Origin"}),Object(u.jsx)("option",{value:"1",children:"DataBase"}),Object(u.jsx)("option",{value:"2",children:"Created"})]}),Object(u.jsxs)("select",{name:"Sort",className:o,onChange:function(t){var n;e((n=t.target.value,function(e){e({type:"ORDER",payload:n})}))},children:[Object(u.jsx)("option",{value:"",children:"Sort"}),Object(u.jsx)("option",{value:"a-z",children:"A-Z"}),Object(u.jsx)("option",{value:"z-a",children:"Z-A"}),Object(u.jsx)("option",{value:"fuerza+",children:"Higher Level Attack"}),Object(u.jsx)("option",{value:"fuerza-",children:"Lower Level Attack"})]})]})]})},y=function(){var e=Object(i.c)((function(e){return e.pokemons})),t=Object(i.c)((function(e){return e.type})),n=Object(i.c)((function(e){return e.order}));t&&(e=function(e,t){return t.length?t.filter((function(t){return t.type.includes(e)})):[]}(t,e)),n&&(e=function(e,t){var n=t.map((function(e){return e.name})),c=t.map((function(e){return e.fuerza})),a=[];switch(e){case"a-z":return(n=n.sort()).forEach((function(e){t.forEach((function(t){e===t.name&&a.push(t)}))})),a;case"z-a":return(n=n.sort().reverse()).forEach((function(e){t.forEach((function(t){e===t.name&&a.push(t)}))})),a;case"fuerza+":return(c=c.sort((function(e,t){return t-e}))).forEach((function(e){t.forEach((function(t){t.fuerza===e&&a.push(t)}))})),a=a.filter((function(e,t){return a.indexOf(e)===t}));case"fuerza-":return(c=c.sort((function(e,t){return e-t}))).forEach((function(e){t.forEach((function(t){t.fuerza===e&&a.push(t)}))})),a=a.filter((function(e,t){return a.indexOf(e)===t}));default:return t}}(n,e));var a=Object(c.useState)(0),s=Object(b.a)(a,2),r=s[0],o=s[1],l=e.length?e.slice(r,r+9):e.info?e:[];return Object(u.jsxs)("div",{className:p.a.container,children:[Object(u.jsx)(_,{}),Object(u.jsx)("button",{onClick:function(){window.location.reload()},className:p.a.reset,children:"Reset"}),Object(u.jsxs)("div",{className:"botones",children:[Object(u.jsx)("button",{onClick:function(){r>0&&o(r-12)},className:"pages",children:"\xab Previous"}),Object(u.jsx)("button",{onClick:function(){e.length>r+12&&o(r+12)},className:"pages",children:"Next \xbb"})]}),Object(u.jsx)(m,{array:l,img:"https://media.tenor.com/z7Zy8aEZSvsAAAAi/ash-now-loading-dark.gif"})]})},N=n(25),k=n(17),E=n(2),w=n(5),C=n.n(w),S=function(){var e,t,n=Object(i.b)(),a=Object(i.c)((function(e){return e.types})),s=Object(c.useState)({name:"",hp:0,attack:0,defense:0,speed:0,height:0,weight:0,types:[]}),r=Object(b.a)(s,2),o=r[0],l=r[1],j=Object(c.useState)({}),d=Object(b.a)(j,2),h=d[0],p=d[1],m=function(e){"name"!==e.target.name?l(Object(E.a)(Object(E.a)({},o),{},Object(k.a)({},e.target.name,Number(e.target.value)<=0?0:e.target.value))):(p(function(e){var t={};return e.name||(t.name="El name es obligatorio"),t}(Object(E.a)(Object(E.a)({},o),{},Object(k.a)({},e.target.name,e.target.value)))),l(Object(E.a)(Object(E.a)({},o),{},Object(k.a)({},e.target.name,e.target.value))))},O=function(e){o.tipos.includes(e.target.value)?(o.tipos=o.tipos.filter((function(t){return t!==e.target.value})),l(Object(E.a)(Object(E.a)({},o),{},{tipos:o.tipos}))):l(Object(E.a)(Object(E.a)({},o),{},{tipos:[].concat(Object(N.a)(o.tipos),[e.target.value])}))},f=function(){var e=Object(v.a)(Object(x.a)().mark((function e(t){var c,a;return Object(x.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("https://pokeserver.onrender.com/pokemons",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(o)});case 3:return c=e.sent,n(g()),e.next=7,c.json();case 7:a=e.sent,console.log(a),l({name:"",hp:0,attack:0,defense:0,speed:0,height:0,weight:0,types:[]});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsx)("div",{className:C.a.container,children:Object(u.jsx)("form",{action:"POST",className:C.a.form,onSubmit:f,children:Object(u.jsxs)("section",{className:C.a.columns,children:[Object(u.jsx)("div",{className:C.a.column,children:Object(u.jsx)("header",{children:Object(u.jsx)("h1",{children:"Create your Pokemon!!!"})})}),Object(u.jsxs)("div",{className:C.a.column,children:[Object(u.jsxs)("p",{className:h.name?C.a.danger:C.a.question,children:[Object(u.jsx)("label",{children:"Pokemon name"}),Object(u.jsx)("input",{type:"text",name:"name",value:o.name,onChange:m,required:!0})]}),h.name?Object(u.jsx)("p",{className:"danger",children:h.username}):null,Object(u.jsxs)("p",{className:C.a.question,children:[Object(u.jsx)("label",{children:"HP"}),Object(u.jsx)("input",{type:"number",name:"Hp",placeholder:"Hp level",value:o.hp,onChange:m})]}),Object(u.jsxs)("p",{className:C.a.question,children:[Object(u.jsx)("label",{children:"ATTACK"}),Object(u.jsx)("input",{type:"number",name:"attack",placeholder:"Attack level",value:o.attack,onChange:m})]}),Object(u.jsxs)("p",{className:C.a.question,children:[Object(u.jsx)("label",{children:"DEFENSE"}),Object(u.jsx)("input",{type:"number",name:"defense",placeholder:"Defense level",value:o.defense,onChange:m})]}),Object(u.jsxs)("p",{className:C.a.question,children:[Object(u.jsx)("label",{children:"speed"}),Object(u.jsx)("input",{type:"number",name:"speed",placeholder:"Speed level",value:o.speed,onChange:m})]}),Object(u.jsxs)("p",{className:C.a.question,children:[Object(u.jsx)("label",{children:"height"}),Object(u.jsx)("input",{type:"number",name:"height",placeholder:"Height",value:o.height,onChange:m})]}),Object(u.jsxs)("p",{className:C.a.question,children:[Object(u.jsx)("label",{children:"weight"}),Object(u.jsx)("input",{type:"number",name:"weight",placeholder:"Weight",value:o.weight,onChange:m})]})]}),Object(u.jsx)("div",{className:C.a.column,children:Object(u.jsxs)("div",{className:C.a.hiddenCB,children:[Object(u.jsx)("h1",{children:"Types"}),Object(u.jsx)("div",{className:C.a.tipos,children:null===(e=a.slice(0,10))||void 0===e?void 0:e.map((function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{type:"checkbox",name:e.name,value:e.slot,id:e.slot,onChange:O}),Object(u.jsx)("label",{htmlFor:e.slot,children:e.name}),e.slot%4===0?Object(u.jsx)("br",{}):null]},e.slot)}))}),null===(t=a.slice(11,20))||void 0===t?void 0:t.map((function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{type:"checkbox",name:e.name,value:e.slot,id:e.slot,onChange:O}),Object(u.jsx)("label",{htmlFor:e.slot,children:e.name}),e.slot%4===0?Object(u.jsx)("br",{}):null]},e.slot)}))]})}),Object(u.jsxs)("div",{className:C.a.column,children:[" ",Object(u.jsx)("input",{type:"submit",value:"create",className:C.a.submit})]})]})})})},T=function(){return Object(u.jsx)("div",{children:Object(u.jsx)(S,{})})},F=n(30),P=n.n(F),A=function(){return Object(u.jsx)("div",{children:Object(u.jsxs)("header",{className:P.a.header,children:[Object(u.jsx)(o.b,{to:"/",className:P.a.logo,children:Object(u.jsx)("img",{src:"img/logo.png",alt:""})}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)(o.b,{to:"/home",children:"Pokedex"})}),Object(u.jsx)("li",{children:Object(u.jsx)(o.b,{to:"/create",children:"Create"})}),Object(u.jsx)("li",{children:Object(u.jsx)(o.b,{to:"/Favorite",children:"Favorite"})})]})]})})},z=n(13),D=n.n(z),I=n.p+"static/media/lujoball.5e6e1937.png",q=function(){var e=Object(r.e)().id,t=Object(c.useState)({}),n=Object(b.a)(t,2),a=n[0],s=n[1];Object(c.useEffect)((function(){i()}),[]);var i=function(){var t=Object(v.a)(Object(x.a)().mark((function t(){var n,c;return Object(x.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://pokeserver.onrender.com/pokemons/".concat(e));case 2:return n=t.sent,t.next=5,n.json();case 5:c=t.sent,s(c);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:D.a.container,children:[Object(u.jsxs)("div",{className:D.a.pokemon,children:[Object(u.jsx)("h1",{children:a.name}),Object(u.jsxs)("h2",{children:["Id:",a.id]}),Object(u.jsxs)("div",{className:D.a.img,children:[Object(u.jsx)("img",{src:a.img,alt:""}),Object(u.jsxs)("div",{className:D.a.parrafo,children:[Object(u.jsxs)("p",{children:["Weight: ",a.weight,"kg"]}),Object(u.jsxs)("p",{children:["Height: ",a.height/10," m"]})]})]})]}),Object(u.jsxs)("div",{className:D.a.favorite,children:[Object(u.jsx)("p",{children:"Catch'em!!!"}),Object(u.jsx)("button",{onClick:function(){!function(e){var t=[];localStorage.getItem("Fav")?(t=localStorage.getItem("Fav"),(t=JSON.parse(t)).length>=8&&t.shift(),t.push(e),localStorage.setItem("Fav",JSON.stringify(t))):(t.push(e),localStorage.setItem("Fav",JSON.stringify(t)))}({id:a.id,name:a.name,type:a.type,img:a.img})},children:Object(u.jsx)("img",{src:I,alt:""})})]}),Object(u.jsx)("div",{className:D.a.type,children:a.type?null===a||void 0===a?void 0:a.type.map((function(e){return Object(u.jsx)("h3",{className:D.a.types,children:e})})):null}),Object(u.jsxs)("div",{className:D.a.meter,children:[Object(u.jsxs)("div",{className:D.a.stats1,children:[Object(u.jsxs)("div",{children:["HP: ",a.vida]}),Object(u.jsxs)("div",{children:["ATTACK: ",a.fuerza]})]}),Object(u.jsxs)("div",{className:D.a.stats2,children:[Object(u.jsxs)("div",{children:["DEFENSE: ",a.defensa]}),Object(u.jsxs)("div",{children:["SPEED: ",a.velocidad]})]})]})]})},B=n(33),G=n.n(B),J=function(){var e=function(){if(localStorage.getItem("Fav")){var e=localStorage.getItem("Fav");return e=JSON.parse(e)}return[]}();return Object(u.jsx)("div",{className:G.a.container,children:Object(u.jsx)(m,{array:e,img:"https://media.tenor.com/NwjkKZzlXJ0AAAAd/pokemon-pokemon-journeys.gif"})})};var H=function(){var e=Object(i.b)();return Object(c.useEffect)((function(){e(function(){var e=Object(v.a)(Object(x.a)().mark((function e(t){var n,c;return Object(x.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeserver.onrender.com/types");case 2:return n=e.sent,console.log(n),e.next=6,n.json();case 6:c=e.sent,console.log(c),t({type:"GET_TYPE",payload:c});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e(g())})),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(A,{}),Object(u.jsx)(r.a,{exact:!0,path:"/pokemon/:id",children:Object(u.jsx)(q,{})}),Object(u.jsx)(r.a,{exact:!0,path:"/",children:Object(u.jsx)(d,{})}),Object(u.jsx)(r.a,{exact:!0,path:"/home",children:Object(u.jsx)(y,{})}),Object(u.jsx)(r.a,{exact:!0,path:"/create",children:Object(u.jsx)(T,{})}),Object(u.jsx)(r.a,{exact:!0,path:"/favorite",children:Object(u.jsx)(J,{})})]})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,54)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))},R=n(24),M={types:[],pokemons:[],type:"",order:"",fav:[]},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_TYPE":return Object(E.a)(Object(E.a)({},e),{},{types:t.payload});case"GET_POKEMONS":case"GET_NAME":case"FILTER":return Object(E.a)(Object(E.a)({},e),{},{pokemons:t.payload});case"BY_TYPE":return Object(E.a)(Object(E.a)({},e),{},{type:t.payload});case"ORDER":return Object(E.a)(Object(E.a)({},e),{},{order:t.payload});case"ADD":return 8===e.fav.length&&e.fav.shift(),Object(E.a)(Object(E.a)({},e),{},{fav:[].concat(Object(N.a)(e.fav),[t.payload])});default:return e}},Z=n(34),K=n(35),W=Object(R.createStore)(Y,Object(Z.composeWithDevTools)(Object(R.applyMiddleware)(K.a)));s.a.render(Object(u.jsx)(o.a,{children:Object(u.jsx)(i.a,{store:W,children:Object(u.jsx)(H,{})})}),document.getElementById("root")),L()}},[[53,1,2]]]);
//# sourceMappingURL=main.d229b201.chunk.js.map