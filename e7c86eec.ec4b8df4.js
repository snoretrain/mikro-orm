(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{275:function(n,t,e){"use strict";e.r(t),e.d(t,"frontMatter",(function(){return o})),e.d(t,"rightToc",(function(){return i})),e.d(t,"default",(function(){return p}));e(52),e(25),e(20),e(21),e(53),e(0);var r=e(289);function a(){return(a=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}var o={id:"handling-transactions-and-concurrency-in-mikroorm",title:"Handling Transactions and Concurrency in MikroORM",author:"Martin Ad\xe1mek",authorTitle:"Author of MikroORM",authorURL:"https://github.com/B4nan",authorImageURL:"https://avatars1.githubusercontent.com/u/615580?s=460&v=4",authorTwitter:"B4nan",tags:["typescript","javascript","node","sql"]},i=[],c={rightToc:i},u="wrapper";function p(n){var t=n.components,e=function(n,t){if(null==n)return{};var e,r,a={},o=Object.keys(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||(a[e]=n[e]);return a}(n,["components"]);return Object(r.b)(u,a({},c,e,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"How to handle transactions and concurrency with ease."))}p.isMDXComponent=!0},289:function(n,t,e){"use strict";e.d(t,"a",(function(){return c})),e.d(t,"b",(function(){return l}));var r=e(0),a=e.n(r),o=a.a.createContext({}),i=function(n){var t=a.a.useContext(o),e=t;return n&&(e="function"==typeof n?n(t):Object.assign({},t,n)),e},c=function(n){var t=i(n.components);return a.a.createElement(o.Provider,{value:t},n.children)};var u="mdxType",p={inlineCode:"code",wrapper:function(n){var t=n.children;return a.a.createElement(a.a.Fragment,{},t)}},s=Object(r.forwardRef)((function(n,t){var e=n.components,r=n.mdxType,o=n.originalType,c=n.parentName,u=function(n,t){var e={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&-1===t.indexOf(r)&&(e[r]=n[r]);return e}(n,["components","mdxType","originalType","parentName"]),s=i(e),l=r,f=s[c+"."+l]||s[l]||p[l]||o;return e?a.a.createElement(f,Object.assign({},{ref:t},u,{components:e})):a.a.createElement(f,Object.assign({},{ref:t},u))}));function l(n,t){var e=arguments,r=t&&t.mdxType;if("string"==typeof n||r){var o=e.length,i=new Array(o);i[0]=s;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=n,c[u]="string"==typeof n?n:r,i[1]=c;for(var l=2;l<o;l++)i[l]=e[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,e)}s.displayName="MDXCreateElement"}}]);