(this.webpackJsonploldex=this.webpackJsonploldex||[]).push([[0],{108:function(e,t,s){},112:function(e,t,s){},115:function(e,t,s){"use strict";s.r(t);var a=s(0),c=s.n(a),i=s(10),n=s.n(i),l=(s(79),s.p,s(31)),r=s.n(l),o=s(43),d=s(30),j=s(44),m=s.n(j),h="http://ddragon.leagueoflegends.com/cdn/12.19.1/data/pt_BR",u="https://ddragon.leagueoflegends.com/cdn/img/champion/loading",b="http://ddragon.leagueoflegends.com/cdn/12.19.1/img/spell",p=s(138),g=(s(99),s.p+"static/media/lol_logo.9ff7c2d5.png"),x=s(59),O=s.n(x),v=s(1);var f=function(){var e=Object(a.useState)(!1),t=Object(d.a)(e,2),s=(t[0],t[1]);return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{className:"app__header",children:[Object(v.jsx)("div",{className:"switch",children:Object(v.jsxs)("div",{className:"toggle",children:[Object(v.jsx)("label",{htmlFor:"themeSwitch"}),Object(v.jsx)("input",{type:"checkbox",id:"themeSwitch",onClick:function(){var e=document.documentElement.getAttribute("data-theme"),t="light";console.log(">>currentTheme",e),"light"===e||null===e?(t="dark",s(!0)):s(!1),document.documentElement.setAttribute("data-theme",t)}}),Object(v.jsx)("div",{className:"toggle-bg"}),Object(v.jsxs)("div",{className:"toggle-thumb",children:[Object(v.jsx)("i",{className:"fas fa-sun"}),Object(v.jsx)("i",{className:"fas fa-moon"})]})]})}),Object(v.jsx)("div",{className:"lol__logos noselect",children:Object(v.jsx)("img",{src:g,className:"lol__logo",alt:"lollogo"})}),Object(v.jsx)("div",{className:"github__box github__icon",children:Object(v.jsx)(O.a,{onClick:function(){window.open("https://www.github.com/wallisonwilliam/")}})})]})})},_=s.p+"static/media/loading.0e32869c.gif",N=s(64),k=s(65),y=s(37),C=s(68),w=s(67),S=function(e){Object(C.a)(s,e);var t=Object(w.a)(s);function s(e){var a;return Object(N.a)(this,s),(a=t.call(this,e)).state={text:""},a.tick=a.tick.bind(Object(y.a)(a)),a}return Object(k.a)(s,[{key:"componentDidMount",value:function(){this.unmounted=!1,this.loopNum=0,this.period=2e3,this.isDeleting=!1,this.tick()}},{key:"componentWillUnmount",value:function(){this.unmounted=!0}},{key:"tick",value:function(){var e=this;if(!this.unmounted){var t=this.props.data,s=t[this.loopNum%t.length],a="";a=this.isDeleting?s.substring(0,this.state.text.length-1):s.substring(0,this.state.text.length+1);var c=200-100*Math.random();this.isDeleting&&(c/=2),this.isDeleting||a!==s?this.isDeleting&&""===a&&(this.isDeleting=!1,this.loopNum++,c=500):(c=this.period,this.isDeleting=!0),this.setState({text:a}),setTimeout((function(){e.tick()}),c)}}},{key:"render",value:function(){return Object(v.jsx)("span",{className:"typewriter",children:this.state.text})}}]),s}(c.a.PureComponent);var F=function(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{className:"app__container",children:[Object(v.jsx)("div",{className:"loading__text",children:Object(v.jsx)(S,{data:["Loading..."]})}),Object(v.jsx)("div",{className:"gif__container",children:Object(v.jsx)("img",{src:_,className:"loading__gif",alt:"loading-gif"})})]})})},M=(s(108),s(109),s(110),s(139)),T=s(137),I={Support:"/static/classChamp/ClassSupport.png",Tank:"/static/classChamp/ClassTank.png",Assassin:"/static/classChamp/ClassAssassin.png",Marksman:"/static/classChamp/ClassMarksman.png",Mage:"/static/classChamp/ClassMage.png",Fighter:"/static/classChamp/ClassFighter.png"},D=s(27);var z=function(e){var t=e.objectchamp,s=(e.id,e.name,e.tags),a=e.image,c={Fighter:"Lutador",Mage:"Mago",Tank:"Tanque",Support:"Suporte",Assassin:"Assassino",Marksman:"Atirador"};return Object(v.jsxs)("div",{className:"thumbnail__container noselect",style:{backgroundImage:"url("+a+")",backgroundSize:"cover"},children:[Object(v.jsxs)("div",{className:"card__header",children:[Object(v.jsx)("div",{className:"champ__number"}),Object(v.jsx)(D.b,{to:{pathname:"/championinfo",state:{objectchamp:t}},children:Object(v.jsx)("div",{className:"info__icon",children:Object(v.jsx)("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 512 512",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:Object(v.jsx)("path",{d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"})})})})]}),Object(v.jsx)("div",{className:"image__container"}),Object(v.jsx)("div",{className:"champ__name",children:Object(v.jsx)("div",{className:"champ__type",children:s.map((function(e){return Object(v.jsx)(M.a,{TransitionComponent:T.a,title:c[e],children:Object(v.jsx)("div",{className:"champ__type__bg ",children:Object(v.jsx)("img",{src:I[e]})})},e)}))})})]})};var A=function(){var e=Object(a.useState)(!0),t=Object(d.a)(e,2),s=t[0],c=t[1],i=Object(a.useState)([]),n=Object(d.a)(i,2),l=n[0],j=n[1],b={visible:{opacity:1,x:0},hidden:{opacity:0,x:-150}};Object(a.useEffect)((function(){g()}),[]);var g=function(){var e=Object(o.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("".concat(h,"/champion.json")).catch((function(e){return console.log("Error:",e)}));case 2:t=e.sent,console.log(">>allchamp",Object.values(t.data.data)),x(Object.values(t.data.data));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(o.a)(r.a.mark((function e(t){var s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=[],e.next=3,Promise.all(t.map((function(e){return m.a.get("".concat(h,"/champion/").concat(e.id,".json")).then((function(t){s.push(t.data.data[e.id])}))})));case 3:e.sent,console.log(">>champArr",s),j(s),setTimeout((function(){c(!1)}),1e3);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)(v.Fragment,{children:[s&&Object(v.jsx)(F,{}),!s&&Object(v.jsxs)("div",{className:"app_container",children:[Object(v.jsx)(f,{}),Object(v.jsx)("div",{className:"champion_container",children:Object(v.jsx)("div",{className:"all__champions",children:Object(v.jsx)(p.a.ul,{style:{display:"flex",flexWrap:"wrap",listStyleType:"none",paddingInlineStart:"0px",marginBlockStart:"0px",marginBlockEnd:"0px",alignItems:"center",justifyContent:"center"},initial:"hidden",animate:"visible",variants:{visible:{opacity:1,transition:{when:"beforeChildren",staggerChildren:.35,delayChildren:.75}},hidden:{opacity:0,transition:{when:"afterChildren"}}},children:l.map((function(e){return Object(v.jsx)(p.a.li,{variants:b,children:Object(v.jsx)(z,{id:l.findIndex((function(t){return t.id==e.id}))+1,name:e.name,image:"".concat(u,"/").concat(e.id,"_0.jpg"),tags:e.tags,objectchamp:e})},e.id)}))})})})]})]})},E=(s(112),s(4));s(113);var B=function(){var e=Object(E.f)().state.objectchamp;return Object(v.jsx)("div",{className:"app__container",children:Object(v.jsxs)("div",{className:"info__container",children:[Object(v.jsx)("div",{className:"info__image",children:Object(v.jsx)("img",{src:"".concat(u,"/").concat(e.id,"_0.jpg")})}),Object(v.jsxs)("div",{className:"info__detail",children:[Object(v.jsx)("div",{className:"title",children:"".concat(e.name,"-").concat(e.title)}),Object(v.jsxs)("div",{className:"skill__box",children:[Object(v.jsx)("div",{className:"skill__item",children:Object(v.jsx)(M.a,{placement:"top",title:Object(v.jsx)("div",{children:Object(v.jsx)("div",{children:e.passive.name})}),children:Object(v.jsxs)("div",{className:"passive",children:[Object(v.jsx)("img",{src:"".concat("http://ddragon.leagueoflegends.com/cdn/12.19.1/img/passive","/").concat(e.passive.image.full)}),Object(v.jsx)("div",{className:"skill__title",children:"N\u1ed9i t\u1ea1i"})]})},e.passive.name)}),Object(v.jsx)(M.a,{placement:"top",title:Object(v.jsx)("div",{children:Object(v.jsx)("div",{children:e.spells[0].name})}),children:Object(v.jsxs)("div",{className:"skill__item",children:[Object(v.jsx)(p.a.div,{className:"dismo",animate:{rotate:360},transition:{duration:2,ease:"easeOut",type:"spring",bounce:.65,damping:25},children:Object(v.jsx)("img",{src:"".concat(b,"/").concat(e.spells[0].image.full)})}),Object(v.jsx)("div",{className:"skill__title",style:{backgroundImage:"url("+b+"/"+e.spells[0].image.full+")",backgroundSize:"cover"},children:"Q"})]})},e.spells[0].name),Object(v.jsx)(M.a,{placement:"top",title:Object(v.jsx)("div",{children:Object(v.jsx)("div",{children:e.spells[1].name})}),children:Object(v.jsxs)("div",{className:"skill__item",children:[Object(v.jsx)(p.a.div,{className:"dismo",animate:{rotate:360},transition:{duration:2,ease:"easeOut",type:"spring",bounce:.65,damping:25},children:Object(v.jsx)("img",{src:"".concat(b,"/").concat(e.spells[1].image.full)})}),Object(v.jsx)("div",{className:"skill__title",style:{backgroundImage:"url("+b+"/"+e.spells[1].image.full+")",backgroundSize:"cover"},children:"W"})]})},e.spells[1].name),Object(v.jsx)(M.a,{placement:"top",title:Object(v.jsx)("div",{children:Object(v.jsx)("div",{children:e.spells[2].name})}),children:Object(v.jsxs)("div",{className:"skill__item",children:[Object(v.jsx)(p.a.div,{className:"dismo",animate:{rotate:360},transition:{duration:2,ease:"easeOut",type:"spring",bounce:.65,damping:25},children:Object(v.jsx)("img",{src:"".concat(b,"/").concat(e.spells[2].image.full)})}),Object(v.jsx)("div",{className:"skill__title",style:{backgroundImage:"url("+b+"/"+e.spells[2].image.full+")",backgroundSize:"cover"},children:"E"})]})},e.spells[2].name),Object(v.jsx)(M.a,{placement:"top",title:Object(v.jsx)("div",{children:Object(v.jsx)("div",{children:e.spells[3].name})}),children:Object(v.jsxs)("div",{className:"skill__item",children:[Object(v.jsx)(p.a.div,{className:"dismo",animate:{rotate:360},transition:{duration:2,ease:"easeOut",type:"spring",bounce:.65,damping:25},children:Object(v.jsx)("img",{src:"".concat(b,"/").concat(e.spells[3].image.full)})}),Object(v.jsx)("div",{className:"skill__title",style:{backgroundImage:"url("+b+"/"+e.spells[3].image.full+")",backgroundSize:"cover"},children:"R"})]})},e.spells[3].name)]}),Object(v.jsxs)("div",{className:"lore__box",children:[Object(v.jsx)("div",{className:"title",children:"Enredo:"}),Object(v.jsx)("div",{className:"content",children:"".concat(e.lore)})]})]})]})})};var L=function(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(D.a,{children:Object(v.jsxs)(E.c,{children:[Object(v.jsx)(E.a,{path:"/championinfo",children:Object(v.jsx)(B,{})}),Object(v.jsx)(E.a,{path:"/",children:Object(v.jsx)(A,{})})]})})})},P=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,140)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,n=t.getTTFB;s(e),a(e),c(e),i(e),n(e)}))};s(114);n.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(L,{})}),document.getElementById("root")),P()},79:function(e,t,s){},99:function(e,t,s){}},[[115,1,2]]]);
//# sourceMappingURL=main.3a0d3ed5.chunk.js.map