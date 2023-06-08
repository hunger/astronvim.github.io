"use strict";(self.webpackChunkastro_vim=self.webpackChunkastro_vim||[]).push([[39828],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),f=a,m=c["".concat(p,".").concat(f)]||c[f]||d[f]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},38462:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={id:"alpha",title:"Dashboard Customizations"},i=void 0,l={unversionedId:"Recipes/alpha",id:"version-3.18.0/Recipes/alpha",title:"Dashboard Customizations",description:"Customize Alpha Header",source:"@site/versioned_docs/version-3.18.0/Recipes/alpha.md",sourceDirName:"Recipes",slug:"/Recipes/alpha",permalink:"/3.18.0/Recipes/alpha",draft:!1,tags:[],version:"3.18.0",frontMatter:{id:"alpha",title:"Dashboard Customizations"},sidebar:"docs",previous:{title:"Advanced LSP Setup",permalink:"/3.18.0/Recipes/advanced_lsp"},next:{title:"Customize Autopairs",permalink:"/3.18.0/Recipes/autopairs"}},p={},s=[{value:"Customize Alpha Header",id:"customize-alpha-header",level:3},{value:"Open Alpha Automatically When No More Buffers",id:"open-alpha-automatically-when-no-more-buffers",level:3}],u={toc:s},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"customize-alpha-header"},"Customize Alpha Header"),(0,a.kt)("p",null,"If you want to customize your header on the dashboard you can do this easily in the ",(0,a.kt)("inlineCode",{parentName:"p"},"user/init.lua")," by overriding the ",(0,a.kt)("inlineCode",{parentName:"p"},"alpha")," options:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  plugins = {\n    {\n      "goolord/alpha-nvim",\n      opts = function(_, opts) -- override the options using lazy.nvim\n        opts.section.header.val = { -- change the header section value\n          "    My Custom ",\n          " Dashboard Header",\n        }\n      end,\n    },\n  },\n}\n')),(0,a.kt)("h3",{id:"open-alpha-automatically-when-no-more-buffers"},"Open Alpha Automatically When No More Buffers"),(0,a.kt)("p",null,"If you want to make the Alpha dashboard open automatically when you close the last buffer in your session you can add the following in your ",(0,a.kt)("inlineCode",{parentName:"p"},"user/init.lua")," in your ",(0,a.kt)("inlineCode",{parentName:"p"},"mappings")," table:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  mappings = {\n    n = {\n      ["<leader>c"] = {\n        function()\n          local bufs = vim.fn.getbufinfo { buflisted = true }\n          require("astronvim.utils.buffer").close(0)\n          if require("astronvim.utils").is_available "alpha-nvim" and not bufs[2] then require("alpha").start(true) end\n        end,\n        desc = "Close buffer",\n      },\n    },\n  },\n}\n')))}d.isMDXComponent=!0}}]);