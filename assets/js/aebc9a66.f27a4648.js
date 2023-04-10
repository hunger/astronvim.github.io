"use strict";(self.webpackChunkastro_vim=self.webpackChunkastro_vim||[]).push([[49737],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},b="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,f=b["".concat(s,".").concat(d)]||b[d]||u[d]||i;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[b]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},68001:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={id:"disable_tabline",title:"Disable Tabline"},l=void 0,o={unversionedId:"Recipes/disable_tabline",id:"Recipes/disable_tabline",title:"Disable Tabline",description:"By default AstroNvim uses Heirline for generating the tabline for displaying buffers as tabs. Some users may not like this behavior and prefer to not have the bar at the top. You can do this a couple ways. The easiest would be to set vim.opt.showtabline to 0 which will hide the bar but still let it be toggled in the UI as well as let the interactive buffer picker with b to function when necessary.",source:"@site/docs/Recipes/disable_tabline.md",sourceDirName:"Recipes",slug:"/Recipes/disable_tabline",permalink:"/nightly/Recipes/disable_tabline",draft:!1,tags:[],version:"current",frontMatter:{id:"disable_tabline",title:"Disable Tabline"},sidebar:"docs",previous:{title:"Debugger Setup",permalink:"/nightly/Recipes/dap"},next:{title:"Disable Winbar",permalink:"/nightly/Recipes/disable_winbar"}},s={},p=[],c={toc:p},b="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(b,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"By default AstroNvim uses Heirline for generating the tabline for displaying buffers as tabs. Some users may not like this behavior and prefer to not have the bar at the top. You can do this a couple ways. The easiest would be to set ",(0,a.kt)("inlineCode",{parentName:"p"},"vim.opt.showtabline")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," which will hide the bar but still let it be toggled in the UI as well as let the interactive buffer picker with ",(0,a.kt)("inlineCode",{parentName:"p"},"<leader>b")," to function when necessary."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"return {\n  options = {\n    opt = {\n      showtabline = 0\n    },\n  },\n}\n")),(0,a.kt)("p",null,"Another way would be to fully remove the ",(0,a.kt)("inlineCode",{parentName:"p"},"tabline")," definition from Heirline, but this will also break the ",(0,a.kt)("inlineCode",{parentName:"p"},"<leader>b")," functionality as well and not allow you to ever toggle the tabline on:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  options = {\n    opt = {\n      showtabline = 0, -- don\'t show tabline\n    },\n  },\n  mappings = {\n    n = { -- disable <leader>b mappings\n      ["<leader>b"] = false,\n      ["<leader>bb"] = false,\n      ["<leader>bd"] = false,\n      ["<leader>b\\\\"] = false,\n      ["<leader>b|"] = false,\n    },\n  },\n  plugins = {\n    {\n      "rebelot/heirline.nvim",\n      opts = function(_, opts)\n        opts.tabline = nil -- remove tabline\n        return opts\n      end,\n    },\n  },\n}\n')))}u.isMDXComponent=!0}}]);