"use strict";(self.webpackChunkastro_vim=self.webpackChunkastro_vim||[]).push([[50423],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=r.createContext({}),l=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,p=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=s,f=u["".concat(o,".").concat(m)]||u[m]||d[m]||p;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var p=n.length,a=new Array(p);a[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[u]="string"==typeof e?e:s,a[1]=i;for(var l=2;l<p;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22806:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>p,metadata:()=>i,toc:()=>l});var r=n(87462),s=(n(67294),n(3905));const p={id:"snippets",title:"Custom VS Code Style Snippets"},a=void 0,i={unversionedId:"Recipes/snippets",id:"version-2.8.1/Recipes/snippets",title:"Custom VS Code Style Snippets",description:"user/init.lua:",source:"@site/versioned_docs/version-2.8.1/Recipes/snippets.md",sourceDirName:"Recipes",slug:"/Recipes/snippets",permalink:"/2.8.1/Recipes/snippets",draft:!1,tags:[],version:"2.8.1",frontMatter:{id:"snippets",title:"Custom VS Code Style Snippets"},sidebar:"docs",previous:{title:"Customize Icons",permalink:"/2.8.1/Recipes/icons"},next:{title:"Customizing Statusline",permalink:"/2.8.1/Recipes/status"}},o={},l=[],c={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,s.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"user/init.lua"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  luasnip = {\n    vscode = {\n      paths = {\n        "./lua/user/snippets",\n      },\n    } ,\n  },\n}\n')),(0,s.kt)("p",null,"Create a folder inside of your ",(0,s.kt)("inlineCode",{parentName:"p"},"user/")," folder called ",(0,s.kt)("inlineCode",{parentName:"p"},"snippets"),". Add snippets to that folder that follow the vscode style as described in the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/L3MON4D3/LuaSnip/blob/master/DOC.md#vscode-snippets-loader"},"Documentation")),(0,s.kt)("p",null,"Necessary configuration file in ",(0,s.kt)("inlineCode",{parentName:"p"},"user/snippets/package.json"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "user snippets",\n  "engines": {\n    "vscode": "^1.11.0"\n  },\n  "contributes": {\n    "snippets": [\n      {\n        "language": "vue",\n        "path": "./vue.json"\n      }\n    ]\n  }\n}\n')),(0,s.kt)("p",null,"Example Vue snippet in ",(0,s.kt)("inlineCode",{parentName:"p"},"user/snippets/vue.json"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "setup": {\n    "prefix": ["setup", "template"],\n    "body": [\n      "<template>",\n      "\\t$1",\n      "</template>",\n      "",\n      "<script lang=\\"ts\\" setup>",\n      "\\t$2",\n      "<\/script>",\n      "",\n      "<style lang=\\"sass\\">",\n      "\\t$3",\n      "</style>",\n      ""\n    ],\n    "description": "My standard setup Vue3 + TS"\n  }\n}\n')))}d.isMDXComponent=!0}}]);