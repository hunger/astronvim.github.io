"use strict";(self.webpackChunkastro_vim=self.webpackChunkastro_vim||[]).push([[17479],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),h=o,f=p["".concat(s,".").concat(h)]||p[h]||m[h]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},67127:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const i={id:"colorscheme",title:"Custom Colorscheme"},a=void 0,c={unversionedId:"Recipes/colorscheme",id:"version-3.10.0/Recipes/colorscheme",title:"Custom Colorscheme",description:"Using a Custom Colorscheme",source:"@site/versioned_docs/version-3.10.0/Recipes/colorscheme.md",sourceDirName:"Recipes",slug:"/Recipes/colorscheme",permalink:"/Recipes/colorscheme",draft:!1,tags:[],version:"3.10.0",frontMatter:{id:"colorscheme",title:"Custom Colorscheme"},sidebar:"docs",previous:{title:"Customize cmp Completion",permalink:"/Recipes/cmp"},next:{title:"Custom Plugins",permalink:"/Recipes/custom_plugins"}},s={},l=[{value:"Using a Custom Colorscheme",id:"using-a-custom-colorscheme",level:2},{value:"Using a Custom Colorscheme Configured with Global Variables",id:"using-a-custom-colorscheme-configured-with-global-variables",level:2}],u={toc:l},p="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"using-a-custom-colorscheme"},"Using a Custom Colorscheme"),(0,o.kt)("p",null,"Example setting a custom colorscheme with ",(0,o.kt)("inlineCode",{parentName:"p"},"catppuccin")," in your ",(0,o.kt)("inlineCode",{parentName:"p"},"user/init.lua"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  colorscheme = "catppuccin",\n\n  plugins = {\n    {\n      "catppuccin/nvim",\n      as = "catppuccin",\n      config = function()\n        require("catppuccin").setup {}\n      end,\n    },\n  },\n}\n')),(0,o.kt)("h2",{id:"using-a-custom-colorscheme-configured-with-global-variables"},"Using a Custom Colorscheme Configured with Global Variables"),(0,o.kt)("p",null,"Some colorscheme plugins are configured through global variables rather than Lua functions like ",(0,o.kt)("inlineCode",{parentName:"p"},"config()")," so they require a slightly different setup to get them working correctly. For example if we want to use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/sainnhe/sonokai"},"Sonokai"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  colorscheme = "sonokai",\n  plugins = {\n    {\n      "sainnhe/sonokai",\n      init = function() -- init function runs before the plugin is loaded\n        vim.g.sonokai_style = "shusia"\n      end,\n    },\n  },\n}\n')),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"This approach also handles the case when the colorscheme is not installed yet and AstroNvim will not try to set it.")))}m.isMDXComponent=!0}}]);