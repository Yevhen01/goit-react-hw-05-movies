"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[983],{4652:function(n,e,t){t.d(e,{Z:function(){return l}});var r,a,c=t(168),o=t(1087),u=t(7924),s=(0,u.ZP)(o.rU)(r||(r=(0,c.Z)(["\n  margin: 0;\n  text-decoration: none;\n  color: #ffe6e6;\n  font-size: 16px;\n  font-weight: normal;\n  transition: color 250ms ease;\n\n  &:hover,\n  &:focus {\n    color: #e1afd1;\n  }\n"]))),i=t(184),p=function(n){var e=n.id,t=n.title;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("li",{children:(0,i.jsx)(s,{to:"/movies/".concat(e),children:(0,i.jsx)("h3",{children:t})})})})},f=u.ZP.ul(a||(a=(0,c.Z)(["\n  margin: 0;\n"]))),l=function(n){var e=n.movies;return(0,i.jsx)(f,{children:e.map((function(n){var e=n.id,t=n.original_title;return(0,i.jsx)(p,{title:t,id:e},e)}))})}},3983:function(n,e,t){t.r(e);var r,a=t(168),c=t(5861),o=t(9439),u=t(7757),s=t.n(u),i=t(2791),p=t(7924),f=t(4652),l=t(7182),v=t(184),h=p.ZP.h2(r||(r=(0,a.Z)(["\n  color: #f28585;\n  margin-left: 30px;\n  font-size: 24px;\n  font-weight: 700;\n"])));e.default=function(){var n=(0,i.useState)([]),e=(0,o.Z)(n,2),t=e[0],r=e[1];return(0,i.useEffect)((function(){function n(){return(n=(0,c.Z)(s().mark((function n(){var e,t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,l.wS)();case 3:e=n.sent,t=e.results,r(t),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(h,{children:"Trending Today"}),t&&(0,v.jsx)(f.Z,{movies:t})]})}},7182:function(n,e,t){t.d(e,{BG:function(){return p},FE:function(){return i},IV:function(){return f},lw:function(){return l},wS:function(){return s}});var r=t(5861),a=t(7757),c=t.n(a),o=t(5294);o.Z.defaults.baseURL="https://api.themoviedb.org/3";var u={NODE_ENV:"production",PUBLIC_URL:"/goit-react-hw-05-movies",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_KEY;o.Z.defaults.params={api_key:u};var s=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("/trending/movie/day");case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),i=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("/search/movie?query=".concat(e));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("/movie/".concat(e));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("/movie/".concat(e,"/credits"));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("/movie/".concat(e,"/reviews"));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=983.1ec57d3d.chunk.js.map