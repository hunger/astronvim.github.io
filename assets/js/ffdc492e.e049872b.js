"use strict";(self.webpackChunkastro_vim=self.webpackChunkastro_vim||[]).push([[88542],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var o=r.createContext({}),l=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(o.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,p=e.originalType,o=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),c=l(t),m=s,f=c["".concat(o,".").concat(m)]||c[m]||d[m]||p;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function f(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var p=t.length,i=new Array(p);i[0]=m;var a={};for(var o in n)hasOwnProperty.call(n,o)&&(a[o]=n[o]);a.originalType=e,a[c]="string"==typeof e?e:s,i[1]=a;for(var l=2;l<p;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},31207:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>p,metadata:()=>a,toc:()=>l});var r=t(87462),s=(t(67294),t(3905));const p={id:"snippets",title:"Custom Snippets"},i=void 0,a={unversionedId:"Recipes/snippets",id:"version-3.2.0/Recipes/snippets",title:"Custom Snippets",description:"user/init.lua:",source:"@site/versioned_docs/version-3.2.0/Recipes/snippets.md",sourceDirName:"Recipes",slug:"/Recipes/snippets",permalink:"/3.2.0/Recipes/snippets",draft:!1,tags:[],version:"3.2.0",frontMatter:{id:"snippets",title:"Custom Snippets"},sidebar:"docs",previous:{title:"Customize Icons",permalink:"/3.2.0/Recipes/icons"},next:{title:"Customizing Statusline",permalink:"/3.2.0/Recipes/status"}},o={},l=[],u={toc:l},c="wrapper";function d(e){let{components:n,...t}=e;return(0,s.kt)(c,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"user/init.lua"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  plugins = {\n    {\n      "L3MON4D3/LuaSnip",\n      config = function(plugin, opts)\n        require "plugins.configs.luasnip"(plugin, opts) -- include the default astronvim config that calls the setup call\n        require("luasnip.loaders.from_vscode").lazy_load { paths = { "./lua/user/snippets" } } -- load snippets paths\n      end,\n    },\n  },\n}\n')),(0,s.kt)("p",null,"Create a folder inside of your ",(0,s.kt)("inlineCode",{parentName:"p"},"user/")," folder called ",(0,s.kt)("inlineCode",{parentName:"p"},"snippets"),". Add snippets to that folder that follow the vscode style as described in the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/L3MON4D3/LuaSnip/blob/master/DOC.md#vscode-snippets-loader"},"Documentation")),(0,s.kt)("p",null,"Necessary configuration file in ",(0,s.kt)("inlineCode",{parentName:"p"},"user/snippets/package.json"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "user snippets",\n  "engines": {\n    "vscode": "^1.11.0"\n  },\n  "contributes": {\n    "snippets": [\n      {\n        "language": "vue",\n        "path": "./vue.json"\n      }\n    ]\n  }\n}\n')),(0,s.kt)("p",null,"Example Vue snippet in ",(0,s.kt)("inlineCode",{parentName:"p"},"user/snippets/vue.json"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "setup": {\n    "prefix": ["setup", "template"],\n    "body": [\n      "<template>",\n      "\\t$1",\n      "</template>",\n      "",\n      "<script lang=\\"ts\\" setup>",\n      "\\t$2",\n      "<\/script>",\n      "",\n      "<style lang=\\"sass\\">",\n      "\\t$3",\n      "</style>",\n      ""\n    ],\n    "description": "My standard setup Vue3 + TS"\n  }\n}\n')))}d.isMDXComponent=!0}}]);