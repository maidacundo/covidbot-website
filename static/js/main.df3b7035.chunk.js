(this["webpackJsonpchatbot-regione"]=this["webpackJsonpchatbot-regione"]||[]).push([[0],{1019:function(e,t){},1021:function(e,t){},1022:function(e,t){},1027:function(e,t){},1029:function(e,t){},1035:function(e,t){},1037:function(e,t){},1056:function(e,t){},1068:function(e,t){},1071:function(e,t){},141:function(e,t){},1721:function(e,t){},1765:function(e,t){},1786:function(e,t){},1788:function(e,t){},1793:function(e,t){},1794:function(e,t){},1795:function(e,t){},1796:function(e,t){},1797:function(e,t){},1801:function(e,t){},1905:function(e,t,n){},1907:function(e,t,n){},1908:function(e,t,n){},1909:function(e,t,n){},1910:function(e,t,n){"use strict";n.r(t);var c=n(3),o=n(203),a=n.n(o),i=(n(812),n(2)),s=n.n(i),r=n(417),u=n(173),l=n(787),b=n.n(l),f=n(136),j=n.n(f),m=(n(1905),n(35)),O=function(e){var t=e.className,n=e.onFetchToken,o=e.store,a=e.token,i=Object(c.useMemo)((function(){return Object(f.createDirectLine)({token:a})}),[a]),s=Object(c.useMemo)((function(){return Object(f.createStyleSet)({backgroundColor:"Transparent"})}),[]);return Object(c.useEffect)((function(){n()}),[n]),a?Object(m.jsx)(j.a,{className:"".concat(t||""," web-chat"),directLine:i,store:o,styleSet:s}):Object(m.jsx)("div",{className:"".concat(t||""," connect-spinner"),children:Object(m.jsxs)("div",{className:"content",children:[Object(m.jsx)("div",{className:"icon",children:Object(m.jsx)("span",{className:"ms-Icon ms-Icon--Robot"})}),Object(m.jsx)("p",{children:"Please wait while we are connecting."})]})})},d=(n(1907),n(1908),function(){var e=Object(c.useMemo)((function(){return Object(f.createStore)({},(function(e){var t=e.dispatch;return function(e){return function(n){return"DIRECT_LINE/CONNECT_FULFILLED"===n.type?t({type:"WEB_CHAT/SEND_EVENT",payload:{name:"webchat/join",value:{language:window.navigator.language}}}):"DIRECT_LINE/INCOMING_ACTIVITY"===n.type&&"bot"===n.payload.activity.from.role&&w(!0),e(n)}}}))}),[]),t=Object(c.useMemo)((function(){return Object(f.createStyleSet)({backgroundColor:"Transparent"})}),[]),n=Object(c.useState)(!1),o=Object(u.a)(n,2),a=o[0],i=o[1],l=Object(c.useState)(!0),j=Object(u.a)(l,2),d=j[0],h=j[1],p=Object(c.useState)(!1),x=Object(u.a)(p,2),N=x[0],w=x[1],g=Object(c.useState)("right"),k=Object(u.a)(g,2),v=k[0],I=k[1],S=Object(c.useState)(),C=Object(u.a)(S,2),y=C[0],E=C[1];function T(){var e=function(){return(65536*(1+Math.random())|0).toString(16).substring(1)};return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()}var _=Object(c.useCallback)(Object(r.a)(s.a.mark((function e(){var t,n,c,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(y){e.next=11;break}return"2kypFsUBW2E.GcjDaUeC0N36J25S_ZSwZVFPobucmA74Wm3_iXrItlw",t=T(),e.next=5,fetch("https://directline.botframework.com/v3/directline/tokens/generate",{body:JSON.stringify({user:{id:t,name:"User"}}),headers:{Authorization:"Bearer ".concat("2kypFsUBW2E.GcjDaUeC0N36J25S_ZSwZVFPobucmA74Wm3_iXrItlw"),"Content-type":"application/json"},method:"POST"});case 5:return n=e.sent,e.next=8,n.json();case 8:c=e.sent,o=c.token,E(o);case 11:case"end":return e.stop()}}),e)}))),[E,y]),F=Object(c.useCallback)(Object(r.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i(!0),h(!1),w(!1);case 3:case"end":return e.stop()}}),e)}))),[h,w]),M=Object(c.useCallback)((function(){h(!0),w(!1)}),[h,w]),W=Object(c.useCallback)((function(){I("left"===v?"right":"left")}),[I,v]);return Object(m.jsxs)("div",{className:"minimizable-web-chat",children:[d&&Object(m.jsxs)("button",{className:"maximize",onClick:F,children:[Object(m.jsx)("span",{className:y?"ms-Icon ms-Icon--MessageFill":"ms-Icon ms-Icon--Message"}),N&&Object(m.jsx)("span",{className:"ms-Icon ms-Icon--CircleShapeSolid red-dot"})]}),a&&Object(m.jsxs)("div",{className:b()("left"===v?"chat-box left":"chat-box right",d?"hide":""),children:[Object(m.jsxs)("header",{children:[Object(m.jsx)("div",{className:"filler"}),Object(m.jsx)("button",{className:"switch",onClick:W,children:Object(m.jsx)("span",{className:"ms-Icon ms-Icon--Switch"})}),Object(m.jsx)("button",{className:"minimize",onClick:M,children:Object(m.jsx)("span",{className:"ms-Icon ms-Icon--ChromeMinimize"})})]}),Object(m.jsx)(O,{className:"react-web-chat",onFetchToken:_,store:e,styleSet:t,token:y})]})]})}),h=n.p+"static/media/WebPage.ca49c60d.png",p=(n(1909),function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("img",{alt:"product background",src:h}),Object(m.jsx)(d,{})]})});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(m.jsx)(p,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},208:function(e,t){},790:function(e,t){},792:function(e,t){},793:function(e,t){},794:function(e,t){},795:function(e,t){},796:function(e,t){},797:function(e,t){},798:function(e,t){},812:function(e,t,n){},973:function(e,t){},975:function(e,t){},989:function(e,t){},991:function(e,t){}},[[1910,1,2]]]);
//# sourceMappingURL=main.df3b7035.chunk.js.map