(this["webpackJsonpmalayali-meet"]=this["webpackJsonpmalayali-meet"]||[]).push([[0],[,,function(e,t,a){e.exports={container:"style_container__1yda0",closeChat:"style_closeChat__3vfV5",chatDiv:"style_chatDiv__1XJFf",chat:"style_chat__3eE5k",name:"style_name__uEsHP",message:"style_message__1UbXk",time:"style_time__3I85z",chatFormDiv:"style_chatFormDiv__S1rDn",chatForm:"style_chatForm__1j34S",chatInput:"style_chatInput__2pPY7",chatSubmitBtn:"style_chatSubmitBtn__3ZUTe"}},,function(e,t,a){e.exports={container:"style_container__dnf22",closeChat:"style_closeChat__185Q5",usersDiv:"style_usersDiv__1axSt",user:"style_user__eB7Xi",name:"style_name__2KvVl",audio:"style_audio__3xKN-",video:"style_video__26rCO"}},function(e,t,a){e.exports={container:"style_container__2XDn8",tools:"style_tools__3IKGT",toolIcons:"style_toolIcons__3tejr"}},,,function(e,t,a){e.exports={videoSmall:"style_videoSmall__17pjw",fullScreenBtn:"style_fullScreenBtn__3Qze2",nameOnNoVideo:"style_nameOnNoVideo__8uaXt",nameOnVideo:"style_nameOnVideo__TBMhj"}},,,function(e,t,a){e.exports={VideoSmalls:"style_VideoSmalls__kmXCK"}},,,,,,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var s=a(1),o=a.n(s),n=a(10),c=a.n(n),r=(a(17),a(3)),i=a(8),l=a.n(i),d=a(0),u=function(e){var t=Object(s.useState)(!1),a=Object(r.a)(t,2),o=a[0],n=a[1],c=function(t,a){var s=t.target.parentElement,c=s.querySelector("#i-".concat(e.id));if(a&&(s=t.target),o){s.style.width="28rem",s.style.height="21rem",c.classList.add("fa-expand"),c.classList.remove("fa-compress"),n(!1);var r=s.parentElement;r.insertBefore(s,r.childNodes[r.childNodes.length])}else{s.style.width="200vh",s.style.height="100vh",c.classList.remove("fa-expand"),c.classList.add("fa-compress"),n(!0);var i=s.parentElement;i.insertBefore(s,i.childNodes[0])}window.scrollTo(0,0)};return Object(s.useEffect)((function(){if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){var t=0;document.getElementById(e.id).addEventListener("click",(function(e){0===t?t=(new Date).getTime():(new Date).getTime()-t<800?(c(e,!0),t=0):t=(new Date).getTime()}))}else console.log("not mobile device")}),[e.id]),Object(d.jsxs)("div",{id:e.id,className:l.a.videoSmall,onDoubleClick:function(e){return c(e,!0)},children:[Object(d.jsx)("h2",{className:"".concat(l.a.nameOnNoVideo," "),children:e.name}),Object(d.jsx)("i",{id:"i-".concat(e.id),onClick:c,className:"fas fa-expand ".concat(l.a.fullScreenBtn)})]})},m=a(11),p=a.n(m),h=function(e){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{id:"VideoSmalls",className:p.a.VideoSmalls,style:{position:"relative"},children:e.users.map((function(e){return Object(d.jsx)(u,{id:e.id,name:e.name},e.id)}))})})},j=a(5),f=a.n(j),O=function(e){var t=e.toolBarProps,a=t.audio,s=t.video,o=t.chatOpen,n=t.usersOpen,c=function(e){document.getElementById("tools").style.opacity=e?"1":"0.3"};return Object(d.jsx)("div",{className:f.a.container,onMouseOver:function(){return c(!0)},onMouseOut:function(){return c(!1)},style:{zIndex:"2"},children:Object(d.jsxs)("div",{id:"tools",className:f.a.tools,children:[Object(d.jsx)("i",{className:"fas ".concat(a?"fa-microphone":"fa-microphone-slash","  ").concat(f.a.toolIcons),onClick:function(){a?e.setToolBarProps("audio",!1):e.setToolBarProps("audio",!0)}}),Object(d.jsx)("i",{className:"fas ".concat(s?"fa-video":"fa-video-slash"," ").concat(f.a.toolIcons),onClick:function(){s?e.setToolBarProps("video",!1):e.setToolBarProps("video",!0)}}),Object(d.jsx)("i",{className:"fas fa-comments ".concat(f.a.toolIcons),onClick:function(){o?e.setToolBarProps("chatOpen",!1):e.setToolBarProps("chatOpen",!0)}}),Object(d.jsx)("i",{className:"fas fa-users ".concat(f.a.toolIcons),onClick:function(){n?e.setToolBarProps("usersOpen",!1):e.setToolBarProps("usersOpen",!0)}})]})})},_=a(12),v=a(2),b=a.n(v),x=function(e){var t=function(){setTimeout((function(){var e=document.getElementById("chatDivId");e.scrollTo({top:e.scrollHeight,behavior:"smooth"})}),100)};t();return Object(d.jsxs)("div",{id:"chatContainer",className:b.a.container,children:[Object(d.jsx)("h1",{children:"Chat"}),Object(d.jsx)("i",{className:"fas fa-times ".concat(b.a.closeChat),onClick:function(){e.setToolBarProps("chatOpen",!1)}}),Object(d.jsx)("div",{className:b.a.chatDiv,id:"chatDivId",children:e.chats.map((function(e){return Object(d.jsxs)("div",{className:b.a.chat,children:[Object(d.jsx)("p",{className:b.a.name,children:e.name}),Object(d.jsx)("pre",{className:b.a.message,children:e.msg}),Object(d.jsx)("p",{className:b.a.time,children:e.time})]},e.msg)}))}),Object(d.jsx)("div",{className:b.a.chatFormDiv,children:Object(d.jsxs)("form",{onSubmit:function(a){a.preventDefault(),a.persist();var s=a.target.chatInput.value,o=(new Date).getHours();o>12?o-=12:0===o&&(o=12);var n=(new Date).getMinutes();n<10&&(n="0"+n);var c=o+":"+n;e.setChat((function(e){return[].concat(Object(_.a)(e),[{name:"Ajay",msg:s,time:c}])})),a.target.chatInput.value="",a.target.chatInput.focus(),t()},className:b.a.chatForm,children:[Object(d.jsx)("textarea",{type:"text",name:"chatInput",className:b.a.chatInput,autoComplete:"off",rows:"1"}),Object(d.jsx)("button",{type:"submit",style:{background:"transparent",boxShadow:"0px 0px 0px transparent",border:"0px solid transparent",textShadow:"0px 0px 0px transparent",width:"20%"},children:Object(d.jsx)("i",{className:"far fa-paper-plane ".concat(b.a.chatSubmitBtn),type:"submit"})})]})})]})},B=a(4),y=a.n(B),P=function(e){return console.log(e.toolBarProps),Object(d.jsxs)("div",{id:"usersContainer",className:y.a.container,children:[Object(d.jsx)("h1",{children:"Participants"}),Object(d.jsx)("i",{className:"fas fa-times ".concat(y.a.closeChat),onClick:function(){e.setToolBarProps("usersOpen",!1)}}),Object(d.jsx)("div",{className:y.a.usersDiv,id:"chatDivId",children:e.users.map((function(e){return Object(d.jsxs)("div",{className:y.a.user,children:[Object(d.jsx)("p",{className:y.a.name,children:e.name.length>19?e.name.slice(0,19)+"...":e.name}),Object(d.jsx)("i",{className:"".concat(y.a.audio," ").concat(e.toolBarProps.audio?"fas fa-microphone":"fas fa-microphone-slash"," ")}),Object(d.jsx)("i",{className:"".concat(y.a.video," ").concat(e.toolBarProps.video?"fas fa-video":"fas fa-video-slash"," ")})]},e.name)}))})]})};var N=function(){var e=Object(s.useState)(1),t=Object(r.a)(e,2),a=t[0],o=(t[1],Object(s.useState)(!1)),n=Object(r.a)(o,2),c=n[0],i=n[1],l=Object(s.useState)({audio:!1,video:!1,chatOpen:!1,usersOpen:!1}),u=Object(r.a)(l,2),m=(u[0],u[1],Object(s.useState)([])),p=Object(r.a)(m,2),j=p[0],f=p[1],_=Object(s.useState)([{id:"1",name:"ajay daniel trevor",toolBarProps:{audio:!1,video:!1,chatOpen:!1,usersOpen:!1},setToolBarProps:function(e,t){this.toolBarProps[e]=t,i((function(e){return!e}))},socketId:"1"},{id:"2",name:"teena joanne trevor",toolBarProps:{audio:!1,video:!1,chatOpen:!1,usersOpen:!1},setToolBarProps:function(e,t){this.toolBarProps[e]=t,i(!c)},socketId:"2"},{id:"3",name:"anne santha mathew",toolBarProps:{audio:!1,video:!1,chatOpen:!1,usersOpen:!1},setToolBarProps:function(e,t){this.toolBarProps[e]=t,i(!c)},socketId:"3"},{id:"4",name:"trevor jyotish william",toolBarProps:{audio:!1,video:!1,chatOpen:!1,usersOpen:!1},setToolBarProps:function(e,t){this.toolBarProps[e]=t,i(!c)},socketId:"4"}]),v=Object(r.a)(_,2),b=v[0],B=v[1],y=b.find((function(e){return e.socketId==a}));return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(h,{users:b}),Object(d.jsx)(O,{setToolBarProps:y.setToolBarProps,toolBarProps:y.toolBarProps}),y.toolBarProps.chatOpen?Object(d.jsx)(x,{setToolBarProps:y.setToolBarProps,toolBarProps:y.toolBarProps,chats:j,setChat:f,users:b}):null,y.toolBarProps.usersOpen?Object(d.jsx)(P,{setToolBarProps:y.setToolBarProps,toolBarProps:y.toolBarProps,users:b,setUsers:B}):null]})};c.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(N,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.c05c980a.chunk.js.map