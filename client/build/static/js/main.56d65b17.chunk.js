(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{13:function(e,t,n){e.exports={container:"pokemon_container__2lG_b",favorite:"pokemon_favorite__3n-_-",img:"pokemon_img__2u4pH",parrafo:"pokemon_parrafo__2M_ws",type:"pokemon_type__1e1S8",stats1:"pokemon_stats1__3Luty",stats2:"pokemon_stats2__ssJb2"}},21:function(e,t,n){e.exports={container:"search_container__3ZqCn",field:"search_field__3mBh9",button:"search_button__rQ_DA",field2:"search_field2__2_3_z",buttonreset:"search_buttonreset__2h6Fv"}},27:function(e,t,n){e.exports={container:"landingpage_container__1681a",myButton:"landingpage_myButton__dEwRZ"}},29:function(e,t,n){e.exports={container:"pokedex_container__3bqQh",reset:"pokedex_reset__2NlfI"}},30:function(e,t,n){e.exports={header:"navbar_header__3hUT1",logo:"navbar_logo__3BpLd"}},33:function(e,t,n){e.exports={container:"favorite_container__3ws37"}},40:function(e,t,n){},41:function(e,t,n){},5:function(e,t,n){e.exports={container:"form_container__lOQJ8",columns:"form_columns__3ws_a",column:"form_column__1m4wq",title:"form_title__3OYOG",form:"form_form__3BOMb",hiddenCB:"form_hiddenCB__3_byP",question:"form_question__2RMPv",danger:"form_danger__pVxde",submit:"form_submit__3w9qy"}},52:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(22),r=n.n(s),i=(n(40),n(41),n(4)),o=n(8),l=n(10),j=n(27),u=n.n(j),d=n(0),b=function(){return Object(d.jsxs)("div",{className:u.a.container,children:[Object(d.jsxs)("div",{children:[Object(d.jsxs)("h1",{children:[Object(d.jsx)("span",{children:"Here"})," you'll ",Object(d.jsx)("br",{}),"find all your",Object(d.jsx)("br",{}),Object(d.jsx)("span",{children:"Favorites Pokemon"})]}),Object(d.jsxs)("p",{children:["From pikachu to Wigglytuff, ",Object(d.jsx)("br",{}),"From Grass type to Dragon types! ",Object(d.jsx)("br",{}),"Everything about pokemon!!! ",Object(d.jsx)("br",{}),"Everything"]}),Object(d.jsx)(l.b,{to:"/home",children:Object(d.jsx)("input",{type:"submit",value:"Gotta catchem' all",className:u.a.myButton})})]}),Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:"img/blackmew.png",alt:""})})]})},h=n(15),p=n(29),m=n.n(p),O=(n(52),function(e){var t=e.array,n=e.img;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"container",children:t.length?t.map((function(e){return Object(d.jsx)(l.b,{to:"/pokemon/".concat(e.id),children:Object(d.jsxs)("figure",{className:e.type,children:[Object(d.jsx)("div",{className:"cardImageContainer",children:Object(d.jsx)("img",{src:e.img,alt:"",className:"CardImage"})}),Object(d.jsxs)("div",{className:"cardCaption",children:[Object(d.jsxs)("h1",{className:"cardName",children:["Id:",e.idPoke?"".concat(e.idPoke):e.id]}),2===e.type.length?Object(d.jsxs)("div",{className:"types",children:[Object(d.jsx)("h3",{className:"cardType",children:e.type[0]}),Object(d.jsx)("h3",{className:"cardType",children:e.type[1]})]}):Object(d.jsx)("div",{className:"types",children:Object(d.jsx)("h3",{className:"cardType",children:e.type[0]})}),Object(d.jsx)("div",{className:"cardName",children:e.name})]})]})},e.name)})):Object(d.jsx)("img",{src:t.info?"https://static1.thegamerimages.com/wordpress/wp-content/uploads/2020/02/Pokemon-404-page.jpg":n,alt:"Not found"})})})}),f=n(21),x=n.n(f),v=n(6),g=n(14),_=function(){return function(){var e=Object(g.a)(Object(v.a)().mark((function e(t){var n,c;return Object(v.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeserver.onrender.com/pokemons");case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,t({type:"GET_POKEMONS",payload:c});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},y=function(){var e=Object(o.b)(),t=Object(c.useState)(""),n=Object(h.a)(t,2),a=n[0],s=n[1],r=Object(o.c)((function(e){return e.types})),i=x.a.button;return Object(d.jsxs)("div",{className:x.a.container,children:[Object(d.jsx)("form",{onSubmit:function(t){var n;t.preventDefault(),e((n=a,function(){var e=Object(g.a)(Object(v.a)().mark((function e(t){var c,a;return Object(v.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeserver.onrender.com/pokemons?name=".concat(n));case 2:return c=e.sent,e.next=5,c.json();case 5:a=e.sent,t({type:"GET_NAME",payload:a});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),s("")},children:Object(d.jsxs)("div",{className:x.a.field,children:[Object(d.jsx)("input",{type:"text",id:"searchterm",value:a,onChange:function(e){s(e.target.value)},placeholder:"Find your pokemon"}),Object(d.jsx)("input",{className:i,type:"submit",value:"Find!"})]})}),Object(d.jsxs)("div",{className:x.a.field2,children:[Object(d.jsxs)("select",{className:i,name:"Type",onChange:function(t){var n;e((n=t.target.value,function(e){e({type:"BY_TYPE",payload:n})}))},children:[Object(d.jsx)("option",{value:"",children:"Type"}),null===r||void 0===r?void 0:r.map((function(e){return Object(d.jsx)("option",{value:e.name,children:e.name},e.slot)}))]}),Object(d.jsxs)("select",{name:"Origin",className:i,onChange:function(t){var n;e((n=t.target.value,function(){var e=Object(g.a)(Object(v.a)().mark((function e(t){var c,a;return Object(v.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeserver.onrender.com/pokemons?by=".concat(n));case 2:return c=e.sent,e.next=5,c.json();case 5:a=e.sent,t({type:"FILTER",payload:a});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(d.jsx)("option",{value:"0",children:"Origin"}),Object(d.jsx)("option",{value:"1",children:"DataBase"}),Object(d.jsx)("option",{value:"2",children:"Created"})]}),Object(d.jsxs)("select",{name:"Sort",className:i,onChange:function(t){var n;e((n=t.target.value,function(e){e({type:"ORDER",payload:n})}))},children:[Object(d.jsx)("option",{value:"",children:"Sort"}),Object(d.jsx)("option",{value:"a-z",children:"A-Z"}),Object(d.jsx)("option",{value:"z-a",children:"Z-A"}),Object(d.jsx)("option",{value:"fuerza+",children:"Higher Level Attack"}),Object(d.jsx)("option",{value:"fuerza-",children:"Lower Level Attack"})]})]})]})},N=function(){var e=Object(o.c)((function(e){return e.pokemons})),t=Object(o.c)((function(e){return e.type})),n=Object(o.c)((function(e){return e.order}));t&&(e=function(e,t){return t.length?t.filter((function(t){return t.type.includes(e)})):[]}(t,e)),n&&(e=function(e,t){var n=t.map((function(e){return e.name})),c=t.map((function(e){return e.fuerza})),a=[];switch(e){case"a-z":return(n=n.sort()).forEach((function(e){t.forEach((function(t){e===t.name&&a.push(t)}))})),a;case"z-a":return(n=n.sort().reverse()).forEach((function(e){t.forEach((function(t){e===t.name&&a.push(t)}))})),a;case"fuerza+":return(c=c.sort((function(e,t){return t-e}))).forEach((function(e){t.forEach((function(t){t.fuerza===e&&a.push(t)}))})),a=a.filter((function(e,t){return a.indexOf(e)===t}));case"fuerza-":return(c=c.sort((function(e,t){return e-t}))).forEach((function(e){t.forEach((function(t){t.fuerza===e&&a.push(t)}))})),a=a.filter((function(e,t){return a.indexOf(e)===t}));default:return t}}(n,e));var a=Object(c.useState)(0),s=Object(h.a)(a,2),r=s[0],i=s[1],l=e.length?e.slice(r,r+9):e.info?e:[];return Object(d.jsxs)("div",{className:m.a.container,children:[Object(d.jsx)(y,{}),Object(d.jsx)("button",{onClick:function(){window.location.reload()},className:m.a.reset,children:"Reset"}),Object(d.jsxs)("div",{className:"botones",children:[Object(d.jsx)("button",{onClick:function(){r>0&&i(r-12)},className:"pages",children:"\xab Previous"}),Object(d.jsx)("button",{onClick:function(){e.length>r+12&&i(r+12)},className:"pages",children:"Next \xbb"})]}),Object(d.jsx)(O,{array:l,img:"https://media.tenor.com/z7Zy8aEZSvsAAAAi/ash-now-loading-dark.gif"})]})},k=n(25),E=n(17),w=n(2),C=n(5),S=n.n(C),T=function(){var e,t,n=Object(o.b)(),a=Object(o.c)((function(e){return e.types})),s=Object(c.useState)({name:"",hp:0,attack:0,defense:0,speed:0,height:0,weight:0,types:[]}),r=Object(h.a)(s,2),i=r[0],l=r[1],j=Object(c.useState)({}),u=Object(h.a)(j,2),b=u[0],p=u[1],m=function(e){"name"!==e.target.name?l(Object(w.a)(Object(w.a)({},i),{},Object(E.a)({},e.target.name,Number(e.target.value)<=0?0:e.target.value))):(p(function(e){var t={};return e.name||(t.name="El name es obligatorio"),t}(Object(w.a)(Object(w.a)({},i),{},Object(E.a)({},e.target.name,e.target.value)))),l(Object(w.a)(Object(w.a)({},i),{},Object(E.a)({},e.target.name,e.target.value))))},O=function(e){i.tipos.includes(e.target.value)?(i.tipos=i.tipos.filter((function(t){return t!==e.target.value})),l(Object(w.a)(Object(w.a)({},i),{},{tipos:i.tipos}))):l(Object(w.a)(Object(w.a)({},i),{},{tipos:[].concat(Object(k.a)(i.tipos),[e.target.value])}))},f=function(){var e=Object(g.a)(Object(v.a)().mark((function e(t){var c,a;return Object(v.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("https://pokeserver.onrender.com/pokemons",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(i)});case 3:return c=e.sent,n(_()),e.next=7,c.json();case 7:a=e.sent,console.log(a),l({name:"",hp:0,attack:0,defense:0,speed:0,height:0,weight:0,types:[]});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsx)("div",{className:S.a.container,children:Object(d.jsx)("form",{action:"POST",className:S.a.form,onSubmit:f,children:Object(d.jsxs)("section",{className:S.a.columns,children:[Object(d.jsx)("div",{className:S.a.column,children:Object(d.jsx)("header",{children:Object(d.jsx)("h1",{children:"Create your Pokemon!!!"})})}),Object(d.jsxs)("div",{className:S.a.column,children:[Object(d.jsxs)("p",{className:b.name?S.a.danger:S.a.question,children:[Object(d.jsx)("label",{children:"Pokemon name"}),Object(d.jsx)("input",{type:"text",name:"name",value:i.name,onChange:m,required:!0})]}),b.name?Object(d.jsx)("p",{className:"danger",children:b.username}):null,Object(d.jsxs)("p",{className:S.a.question,children:[Object(d.jsx)("label",{children:"HP"}),Object(d.jsx)("input",{type:"number",name:"Hp",placeholder:"Hp level",value:i.hp,onChange:m})]}),Object(d.jsxs)("p",{className:S.a.question,children:[Object(d.jsx)("label",{children:"ATTACK"}),Object(d.jsx)("input",{type:"number",name:"attack",placeholder:"Attack level",value:i.attack,onChange:m})]}),Object(d.jsxs)("p",{className:S.a.question,children:[Object(d.jsx)("label",{children:"DEFENSE"}),Object(d.jsx)("input",{type:"number",name:"defense",placeholder:"Defense level",value:i.defense,onChange:m})]}),Object(d.jsxs)("p",{className:S.a.question,children:[Object(d.jsx)("label",{children:"speed"}),Object(d.jsx)("input",{type:"number",name:"speed",placeholder:"Speed level",value:i.speed,onChange:m})]}),Object(d.jsxs)("p",{className:S.a.question,children:[Object(d.jsx)("label",{children:"height"}),Object(d.jsx)("input",{type:"number",name:"height",placeholder:"Height",value:i.height,onChange:m})]}),Object(d.jsxs)("p",{className:S.a.question,children:[Object(d.jsx)("label",{children:"weight"}),Object(d.jsx)("input",{type:"number",name:"weight",placeholder:"Weight",value:i.weight,onChange:m})]})]}),Object(d.jsx)("div",{className:S.a.column,children:Object(d.jsxs)("div",{className:S.a.hiddenCB,children:[Object(d.jsx)("h1",{children:"Types"}),Object(d.jsx)("div",{className:S.a.tipos,children:null===(e=a.slice(0,10))||void 0===e?void 0:e.map((function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{type:"checkbox",name:e.name,value:e.slot,id:e.slot,onChange:O}),Object(d.jsx)("label",{htmlFor:e.slot,children:e.name}),e.slot%4===0?Object(d.jsx)("br",{}):null]},e.slot)}))}),null===(t=a.slice(11,20))||void 0===t?void 0:t.map((function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{type:"checkbox",name:e.name,value:e.slot,id:e.slot,onChange:O}),Object(d.jsx)("label",{htmlFor:e.slot,children:e.name}),e.slot%4===0?Object(d.jsx)("br",{}):null]},e.slot)}))]})}),Object(d.jsxs)("div",{className:S.a.column,children:[" ",Object(d.jsx)("input",{type:"submit",value:"create",className:S.a.submit})]})]})})})},F=function(){return Object(d.jsx)("div",{children:Object(d.jsx)(T,{})})},P=n(30),A=n.n(P),z=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)("header",{className:A.a.header,children:[Object(d.jsx)(l.b,{to:"/",className:A.a.logo,children:Object(d.jsx)("img",{src:"img/logo.png",alt:""})}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)(l.b,{to:"/home",children:"Pokedex"})}),Object(d.jsx)("li",{children:Object(d.jsx)(l.b,{to:"/create",children:"Create"})}),Object(d.jsx)("li",{children:Object(d.jsx)(l.b,{to:"/Favorite",children:"Favorite"})})]})]})})},D=n(13),I=n.n(D),q=n.p+"static/media/lujoball.5e6e1937.png",B=function(){var e=Object(i.e)().id,t=Object(c.useState)({}),n=Object(h.a)(t,2),a=n[0],s=n[1];Object(c.useEffect)((function(){r()}),[]);var r=function(){var t=Object(g.a)(Object(v.a)().mark((function t(){var n,c;return Object(v.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://pokeserver.onrender.com/pokemons/".concat(e));case 2:return n=t.sent,t.next=5,n.json();case 5:c=t.sent,s(c);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:I.a.container,children:[Object(d.jsxs)("div",{className:I.a.pokemon,children:[Object(d.jsx)("h1",{children:a.name}),Object(d.jsxs)("h2",{children:["Id:",a.id]}),Object(d.jsxs)("div",{className:I.a.img,children:[Object(d.jsx)("img",{src:a.img,alt:""}),Object(d.jsxs)("div",{className:I.a.parrafo,children:[Object(d.jsxs)("p",{children:["Weight: ",a.weight,"kg"]}),Object(d.jsxs)("p",{children:["Height: ",a.height/10," m"]})]})]})]}),Object(d.jsxs)("div",{className:I.a.favorite,children:[Object(d.jsx)("p",{children:"Catch'em!!!"}),Object(d.jsx)("button",{onClick:function(){!function(e){var t=[];localStorage.getItem("Fav")?(t=localStorage.getItem("Fav"),(t=JSON.parse(t)).length>=8&&t.shift(),t.push(e),localStorage.setItem("Fav",JSON.stringify(t))):(t.push(e),localStorage.setItem("Fav",JSON.stringify(t)))}({id:a.id,name:a.name,type:a.type,img:a.img})},children:Object(d.jsx)("img",{src:q,alt:""})})]}),Object(d.jsx)("div",{className:I.a.type,children:a.type?null===a||void 0===a?void 0:a.type.map((function(e){return Object(d.jsx)("h3",{className:I.a.types,children:e})})):null}),Object(d.jsxs)("div",{className:I.a.meter,children:[Object(d.jsxs)("div",{className:I.a.stats1,children:[Object(d.jsxs)("div",{children:["HP: ",a.vida]}),Object(d.jsxs)("div",{children:["ATTACK: ",a.fuerza]})]}),Object(d.jsxs)("div",{className:I.a.stats2,children:[Object(d.jsxs)("div",{children:["DEFENSE: ",a.defensa]}),Object(d.jsxs)("div",{children:["SPEED: ",a.velocidad]})]})]})]})},G=n(33),J=n.n(G),H=function(){var e=function(){if(localStorage.getItem("Fav")){var e=localStorage.getItem("Fav");return e=JSON.parse(e)}return[]}();return Object(d.jsx)("div",{className:J.a.container,children:Object(d.jsx)(O,{array:e,img:"https://media.tenor.com/NwjkKZzlXJ0AAAAd/pokemon-pokemon-journeys.gif"})})};var L=function(){var e=Object(o.b)();return Object(c.useEffect)((function(){e(function(){var e=Object(g.a)(Object(v.a)().mark((function e(t){var n,c;return Object(v.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeserver.onrender.com/types");case 2:return n=e.sent,console.log(n),e.next=6,n.json();case 6:c=e.sent,console.log(c),t({type:"GET_TYPE",payload:c});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e(_())})),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(z,{}),Object(d.jsx)(i.a,{exact:!0,path:"/pokemon/:id",children:Object(d.jsx)(B,{})}),Object(d.jsx)(i.a,{exact:!0,path:"/",children:Object(d.jsx)(b,{})}),Object(d.jsx)(i.a,{exact:!0,path:"/home",children:Object(d.jsx)(N,{})}),Object(d.jsx)(i.a,{exact:!0,path:"/create",children:Object(d.jsx)(F,{})}),Object(d.jsx)(i.a,{exact:!0,path:"/favorite",children:Object(d.jsx)(H,{})})]})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,54)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))},R=n(24),Y={types:[],pokemons:[],type:"",order:"",fav:[]},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_TYPE":return Object(w.a)(Object(w.a)({},e),{},{types:t.payload});case"GET_POKEMONS":case"GET_NAME":case"FILTER":return Object(w.a)(Object(w.a)({},e),{},{pokemons:t.payload});case"BY_TYPE":return Object(w.a)(Object(w.a)({},e),{},{type:t.payload});case"ORDER":return Object(w.a)(Object(w.a)({},e),{},{order:t.payload});case"ADD":return 8===e.fav.length&&e.fav.shift(),Object(w.a)(Object(w.a)({},e),{},{fav:[].concat(Object(k.a)(e.fav),[t.payload])});default:return e}},K=n(34),W=n(35),Q=Object(R.createStore)(Z,Object(K.composeWithDevTools)(Object(R.applyMiddleware)(W.a)));r.a.render(Object(d.jsx)(l.a,{children:Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(o.a,{store:Q,children:Object(d.jsx)(L,{})})})}),document.getElementById("root")),M()}},[[53,1,2]]]);
//# sourceMappingURL=main.56d65b17.chunk.js.map