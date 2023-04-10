"use strict";(self.webpackChunkastro_vim=self.webpackChunkastro_vim||[]).push([[57575],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),h=o,d=u["".concat(s,".").concat(h)]||u[h]||m[h]||i;return n?r.createElement(d,a(a({ref:t},p),{},{components:n})):r.createElement(d,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},26855:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const i={id:"colorscheme",title:"Custom Colorscheme"},a=void 0,c={unversionedId:"recipes/colorscheme",id:"version-1.7.0/recipes/colorscheme",title:"Custom Colorscheme",description:"Using a Custom Colorscheme",source:"@site/versioned_docs/version-1.7.0/recipes/colorscheme.md",sourceDirName:"recipes",slug:"/recipes/colorscheme",permalink:"/1.7.0/recipes/colorscheme",draft:!1,tags:[],version:"1.7.0",frontMatter:{id:"colorscheme",title:"Custom Colorscheme"},sidebar:"docs",previous:{title:"Black Belt Example User Configs",permalink:"/1.7.0/recipes/black_belt"},next:{title:"Customize cmp Completion",permalink:"/1.7.0/recipes/cmp"}},s={},l=[{value:"Using a Custom Colorscheme",id:"using-a-custom-colorscheme",level:2},{value:"Using a Custom Colorscheme Configured with Global Variables",id:"using-a-custom-colorscheme-configured-with-global-variables",level:2}],p={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"using-a-custom-colorscheme"},"Using a Custom Colorscheme"),(0,o.kt)("p",null,"Example setting a custom colorscheme with ",(0,o.kt)("inlineCode",{parentName:"p"},"catppuccin")," in your ",(0,o.kt)("inlineCode",{parentName:"p"},"user/init.lua"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  colorscheme = "catppuccin",\n\n  plugins = {\n    init = {\n      {\n        "catppuccin/nvim",\n        as = "catppuccin",\n        config = function()\n          require("catppuccin").setup {}\n        end,\n      },\n    },\n  },\n}\n')),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"There used to be a recommended trick to check for your colorscheme before setting it. We have improved the base installation to do this checking automatically. So no more need for user side checking.")),(0,o.kt)("h2",{id:"using-a-custom-colorscheme-configured-with-global-variables"},"Using a Custom Colorscheme Configured with Global Variables"),(0,o.kt)("p",null,"Some colorscheme plugins are configured through global variables rather than Lua functions like ",(0,o.kt)("inlineCode",{parentName:"p"},"config()")," so they require a slightly different setup in Packer to get them working correctly. For example if we want to use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/sainnhe/sonokai"},"Sonokai"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  colorscheme = "sonokai",\n  options = {\n    g = {\n      sonokai_style = "shusia"\n    }\n  },\n  plugins = {\n    init = {\n      { "sainnhe/sonokai" },\n    },\n  },\n}\n')),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"This approach also handles the case when the colorscheme is not installed yet and AstroNvim will not try to set it.")))}m.isMDXComponent=!0}}]);