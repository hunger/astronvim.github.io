"use strict";(self.webpackChunkastro_vim=self.webpackChunkastro_vim||[]).push([[89730],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,d=c["".concat(u,".").concat(m)]||c[m]||f[m]||a;return n?r.createElement(d,l(l({ref:t},s),{},{components:n})):r.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[c]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22154:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const a={id:"splitting_up",title:"Splitting Up Configuration"},l=void 0,o={unversionedId:"Configuration/splitting_up",id:"version-3.15.0/Configuration/splitting_up",title:"Splitting Up Configuration",description:"AstroNvim can be fully configured using just the user/init.lua file, but also",source:"@site/versioned_docs/version-3.15.0/Configuration/splitting_up.md",sourceDirName:"Configuration",slug:"/Configuration/splitting_up",permalink:"/Configuration/splitting_up",draft:!1,tags:[],version:"3.15.0",frontMatter:{id:"splitting_up",title:"Splitting Up Configuration"},sidebar:"docs",previous:{title:"Default Plugin Configurations",permalink:"/Configuration/plugin_defaults"},next:{title:"Managing AstroNvim Updates",permalink:"/Configuration/updater"}},u={},p=[{value:"Example File Tree",id:"example-file-tree",level:2}],s={toc:p},c="wrapper";function f(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"AstroNvim can be fully configured using just the ",(0,i.kt)("inlineCode",{parentName:"p"},"user/init.lua")," file, but also\nsupports easily being configured with separate files. These files will be\nautomatically detected if the file location corresponds to the location in the\n",(0,i.kt)("inlineCode",{parentName:"p"},"init.lua")," table."),(0,i.kt)("p",null,"For example the ",(0,i.kt)("inlineCode",{parentName:"p"},"mappings")," override table (or\n",(0,i.kt)("inlineCode",{parentName:"p"},"function(table)...end"),") can be placed in the file ",(0,i.kt)("inlineCode",{parentName:"p"},"user/mappings.lua"),"\nwhich would be a ",(0,i.kt)("inlineCode",{parentName:"p"},"lua")," file that returns the override ",(0,i.kt)("inlineCode",{parentName:"p"},"table")," or\n",(0,i.kt)("inlineCode",{parentName:"p"},"function(table)...end"),"."),(0,i.kt)("p",null,"Example ",(0,i.kt)("inlineCode",{parentName:"p"},"user/mappings.lua")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  n = {\n    ["<leader>q"] = { "<cmd>q<cr>", desc = "Quit" },\n  },\n}\n')),(0,i.kt)("p",null,"Another example would be adding a custom ",(0,i.kt)("inlineCode",{parentName:"p"},"lsp.on_attach")," function, this could\nbe in a file ",(0,i.kt)("inlineCode",{parentName:"p"},"lsp/on_attach.lua")," that returns a ",(0,i.kt)("inlineCode",{parentName:"p"},"function(client, bufnr)...end"),"\nfor example, if you want to run some code when a language server attaches:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"return function(client, bufnr)\n  -- run some code when a language server attaches\nend\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"A full example of a split up user configuration can be found on our GitHub at ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/AstroNvim/user_example"},"AstroNvim/user_example"))),(0,i.kt)("h2",{id:"example-file-tree"},"Example File Tree"),(0,i.kt)("p",null,"A heavily modified AstroNvim setup that leverages these separate files could have a file structure as such:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"user/\n\u251c\u2500\u2500 init.lua\n\u251c\u2500\u2500 highlights/\n\u2502   \u2514\u2500\u2500 init.lua\n\u251c\u2500\u2500 diagnostics.lua\n\u251c\u2500\u2500 lsp/\n\u2502   \u251c\u2500\u2500 on_attach.lua\n\u2502   \u251c\u2500\u2500 setup_handlers.lua\n\u2502   \u2514\u2500\u2500 config/\n\u2502       \u251c\u2500\u2500 texlab.lua\n\u2502       \u2514\u2500\u2500 yamlls.lua\n\u251c\u2500\u2500 mappings.lua\n\u2514\u2500\u2500 plugins/\n    \u2514\u2500\u2500 init.lua\n")))}f.isMDXComponent=!0}}]);