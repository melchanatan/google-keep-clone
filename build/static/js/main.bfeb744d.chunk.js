(this["webpackJsonpusing-pre-built-react-components"]=this["webpackJsonpusing-pre-built-react-components"]||[]).push([[0],{56:function(e,t,n){e.exports=n(71)},71:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(11),o=n.n(l),r=n(39),i=n(4),u=n(40);n(61).config();var m={apiKey:Object({NODE_ENV:"production",PUBLIC_URL:"/google-keep-clone"}).API_KEY,authDomain:"not-keep.firebaseapp.com",projectId:"not-keep",storageBucket:"not-keep.appspot.com",messagingSenderId:"643263663525",appId:"1:643263663525:web:fa6eb39b7421eecb64ec4c",measurementId:"G-8EM6RZG0L4"};var s=function(){return c.a.createElement("header",null,c.a.createElement("h1",null,"not Google Keep"))};var p=function(){const e=(new Date).getFullYear();return c.a.createElement("footer",null,c.a.createElement("p",null,"Built by Mel Chanatan "),c.a.createElement("p",null,"Copyright \u24d2 ",e))},d=n(47),E=n.n(d),b=n(86),g=n(41);var f=function(e){return c.a.createElement("div",{className:"note"},c.a.createElement("h1",null,e.title),c.a.createElement("p",null,e.content),c.a.createElement(b.a,{onClick:function(){Object(g.confirmAlert)({title:"Delete?",message:"This action can't be undone.",buttons:[{label:"Delete",onClick:()=>e.deleteNote(e.id)},{label:"Nah"}]})}},c.a.createElement(E.a,null)))},h=n(49),v=n.n(h),j=n(88),O=n(89),k=n(48),y=n.n(k);var N=function(e){const[t,n]=Object(a.useState)({title:"",content:"",id:""});function l(e){const{name:t,value:a}=e.target;n(e=>({...e,[t]:a}))}const[o,r]=Object(a.useState)(!1);return c.a.createElement("div",null,c.a.createElement("form",{className:"create-note",onSubmit:function(a){const c=y()();e.onAdd({...t,id:c}),n({title:"",content:"",id:""}),a.preventDefault()}},o&&c.a.createElement("input",{name:"title",onChange:l,value:t.title,placeholder:"Title"}),c.a.createElement("textarea",{name:"content",onFocus:function(){r(!0)},onChange:l,value:t.content,placeholder:"Say something...",rows:o?3:1,maxlength:"500"}),c.a.createElement(O.a,{in:o},c.a.createElement(j.a,{type:"submit"},c.a.createElement(v.a,null)))))};var C=function(){Object(r.a)(m);const e=Object(i.j)(),t=Object(i.a)(e,"users"),[n]=Object(u.a)(t),a=async t=>{const n=Object(i.c)(e,"users",t);await Object(i.b)(n)};return c.a.createElement("div",null,c.a.createElement(s,null),c.a.createElement(N,{onAdd:function(t){if(0!==t.title.length||0!==t.content.length)try{Object(i.n)(Object(i.c)(e,"users",t.id),t)}catch(n){console.error("Error adding document: ",n)}}}),c.a.createElement("div",{className:"note-container"},n&&n.map(e=>c.a.createElement(f,{id:e.id,key:e.id,title:e.title,content:e.content,deleteNote:a}))),c.a.createElement(p,null))};o.a.render(c.a.createElement(C,null),document.getElementById("root"))}},[[56,1,2]]]);