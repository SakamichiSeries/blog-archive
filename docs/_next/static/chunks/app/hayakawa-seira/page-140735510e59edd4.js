(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[454],{7690:function(e,s,l){Promise.resolve().then(l.bind(l,3411))},3411:function(e,s,l){"use strict";l.r(s),l.d(s,{default:function(){return r}});var a=l(7437),i=l(2265);function r(){let[e,s]=(0,i.useState)({}),[l,r]=(0,i.useState)(!0),[n,t]=(0,i.useState)(!1),[c,o]=(0,i.useState)(0),m=(0,i.useRef)(null),d=()=>{null!==m.current&&m.current.scroll({top:0})},x=e=>{console.log("currentIndex",e),o(e)};return((0,i.useEffect)(()=>{fetch("/hayakawa-seira-blog-archive/result.json").then(e=>e.json()).then(e=>{s(e),r(!1)})},[]),l)?(0,a.jsx)("main",{className:"flex min-h-screen flex-col items-center justify-between p-24",children:"Loading"}):(0,a.jsxs)("main",{className:"flex min-h-screen items-center justify-between h-screen w-screen bg-purple-100 flex-wrap",children:[(0,a.jsx)("nav",{className:"max-lg:flex hidden h-0 bg-white w-full min-w-full max-w-full fixed top-0",children:(0,a.jsxs)("div",{className:"menu-icon space-y-2 p-6 ml-auto mr-0 max-w-xs",onClick:()=>t(e=>!e),children:[(0,a.jsx)("span",{className:"block h-0.5 w-8 animate-pulse bg-gray-600"}),(0,a.jsx)("span",{className:"block h-0.5 w-8 animate-pulse bg-gray-600"}),(0,a.jsx)("span",{className:"block h-0.5 w-8 animate-pulse bg-gray-600"})]})}),(0,a.jsxs)("div",{className:"flex flex-wrap flex-row w-full h-full",children:[(0,a.jsx)("div",{className:(n?"basis-3/5":"max-lg:hidden")+" flex flex-col lg:basis-1/3 overflow-auto h-full p-6 max-lg:p-1 divide-y divide-gray-300",children:e.blog.map((e,s)=>(0,a.jsx)("div",{className:"px-1 py-2",onClick:()=>{x(s),t(!1),d()},children:(0,a.jsxs)("div",{className:"hover:bg-white hover:cursor-pointer rounded-3xl",children:[(0,a.jsx)("div",{className:"p-3 pb-0",children:e.title}),(0,a.jsx)("div",{className:"p-3 pt-0 text-gray-600",children:e.time})]})},s))}),(0,a.jsxs)("div",{ref:m,className:(n?"max-lg:hidden":"")+" max-lg:basis-full max-lg:max-w-full lg:basis-1/2 h-full overflow-auto p-6 bg-white",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"font-semibold py-3 max-lg:pt-12 text-4xl text-purple-900",children:e.blog[c].title}),(0,a.jsx)("div",{className:"font-light pb-12 text-gray-600",children:e.blog[c].time})]}),(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:e.blog[c].content}}),(0,a.jsx)("div",{className:"pt-12",children:(0,a.jsx)("a",{className:"underline",href:e.blog[c].url,children:"Original link"})})]}),(0,a.jsxs)("div",{className:(n?"basis-2/5":"max-lg:hidden")+" lg:flex lg:basis-1/6 max-lg:pt-24 p-9 max-lg:p-4 flex-col h-screen overflow-y-auto",children:[(0,a.jsx)("div",{className:"min-h-fit p-1",children:(0,a.jsx)("img",{alt:e.member_name,src:e.profile_pic,className:"max-h-48"})}),(0,a.jsx)("div",{className:"p-1 pt-3 font-semibold text-purple-900 text-2xl",children:e.member_name_kanji}),(0,a.jsx)("div",{className:"p-1",children:e.生年月日}),(0,a.jsx)("div",{className:"p-1",children:e.血液型}),(0,a.jsx)("div",{className:"p-1",children:e.星座}),(0,a.jsx)("div",{className:"p-1",children:e.身長}),(0,a.jsx)("div",{className:"p-1",children:(0,a.jsx)("span",{children:Object.keys(e.SNS).map(s=>(0,a.jsx)("a",{href:e.SNS[s],children:s},s))})}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)("div",{className:"p-1 flex-1",children:(0,a.jsxs)("span",{className:"",children:["This site is an unofficial mirror of ",e.member_name_romaji.toUpperCase(),"'s blog."]})})]})]})]})}},622:function(e,s,l){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a=l(2265),i=Symbol.for("react.element"),r=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),n=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,t={key:!0,ref:!0,__self:!0,__source:!0};function c(e,s,l){var a,c={},o=null,m=null;for(a in void 0!==l&&(o=""+l),void 0!==s.key&&(o=""+s.key),void 0!==s.ref&&(m=s.ref),s)r.call(s,a)&&!t.hasOwnProperty(a)&&(c[a]=s[a]);if(e&&e.defaultProps)for(a in s=e.defaultProps)void 0===c[a]&&(c[a]=s[a]);return{$$typeof:i,type:e,key:o,ref:m,props:c,_owner:n.current}}s.jsx=c,s.jsxs=c},7437:function(e,s,l){"use strict";e.exports=l(622)}},function(e){e.O(0,[971,596,744],function(){return e(e.s=7690)}),_N_E=e.O()}]);