"use strict";(self.webpackChunkastro_vim=self.webpackChunkastro_vim||[]).push([[30394],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},62877:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={id:"override_formats",title:"Override Formats"},o=void 0,l={unversionedId:"Configuration/override_formats",id:"version-3.2.0/Configuration/override_formats",title:"Override Formats",description:"This applies to all init.lua fields except those that expect specific",source:"@site/versioned_docs/version-3.2.0/Configuration/override_formats.md",sourceDirName:"Configuration",slug:"/Configuration/override_formats",permalink:"/3.2.0/Configuration/override_formats",draft:!1,tags:[],version:"3.2.0",frontMatter:{id:"override_formats",title:"Override Formats"},sidebar:"docs",previous:{title:"Using Old Versions of Neovim",permalink:"/3.2.0/Configuration/nvim_versions"},next:{title:"Default Plugin Configurations",permalink:"/3.2.0/Configuration/plugin_defaults"}},s={},p=[{value:"Override Table",id:"override-table",level:3},{value:"Override Function",id:"override-function",level:3}],u={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This applies to all ",(0,r.kt)("inlineCode",{parentName:"p"},"init.lua")," fields except those that expect specific\ndefinitions such as ",(0,r.kt)("inlineCode",{parentName:"p"},"lsp.on_attach"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"lsp.server_registration"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"polish"),"."),(0,r.kt)("h3",{id:"override-table"},"Override Table"),(0,r.kt)("p",null,"For most use cases, supplying a table is more than enough for supplying your\nown configuration changes to a default table. This is done by simply providing\na new table and we merge the table with the default table where the user table\ntakes precedence."),(0,r.kt)("p",null,"For example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"plugins")," table can be used to add new plugins to be\ninstalled along side the default plugins:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'plugins = {\n  { "andweeb/presence.nvim" }, -- each table entry is a plugin specification for lazy.nvim\n  {\n    "ray-x/lsp_signature.nvim",\n    event = "BufRead",\n    config = function()\n      require("lsp_signature").setup()\n    end,\n  },\n},\n')),(0,r.kt)("p",null,"For adding new key mappings and updating which-key menu, the ",(0,r.kt)("inlineCode",{parentName:"p"},"mapping")," table is used to extend existing configuration."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'mappings = {\n  -- first key is the mode\n  -- desc setting is stored by vim.keymap.set() as a part of opts table in vim lua module\n  n = {\n    -- second key is the lefthand side of the map\n    -- Tab Mappings\n    ["<leader>Tn"] = { "<cmd>tabnew<cr>", desc = "New tab" },\n    ["<leader>Tc"] = { "<cmd>tabclose<cr>", desc = "Close tab" },\n    -- a table with the `name` key will register with which-key if it\'s available\n    -- this an easy way to add menu titles in which-key\n    ["<leader>T"] = { name = "Tab" },\n    -- quick save\n    ["<C-s>"] = { ":w!<cr>", desc = "Save File" },  -- change description but the same command\n  },\n  t = {\n    -- setting a mapping to false will disable it\n    ["<esc>"] = false,\n  },\n},\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Please pay attention to the use of ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"desc")," used in the above.")),(0,r.kt)("h3",{id:"override-function"},"Override Function"),(0,r.kt)("p",null,"There may be cases where you want to have more control over the default tables\nwhen overriding them. For these situations we also provide the ability to use a\n",(0,r.kt)("inlineCode",{parentName:"p"},"function")," that takes one parameter (the default table) and returns a new table\nto be used in it's place. This method is a lot more advanced and requires\nknowledge of the Lua programming language."),(0,r.kt)("p",null,"For example with the ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," table, you may want to use the function notation to unset a default option that we set:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"options = function(local_vim) -- parameter is the default table to be overridden\n  -- nil is the same as a key not being set, so you cannot use nil reliably\n  -- when using the table override notation\n  local_vim.clipboard = nil -- set a value to nil to remove it from the table\n  -- return modified table\n  return local_vim\nend,\n")))}c.isMDXComponent=!0}}]);