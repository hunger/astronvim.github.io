"use strict";(self.webpackChunkastro_vim=self.webpackChunkastro_vim||[]).push([[4323],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=i.createContext({}),p=function(e){var n=i.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=p(e.components);return i.createElement(u.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},f=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=p(t),f=a,m=c["".concat(u,".").concat(f)]||c[f]||d[f]||r;return t?i.createElement(m,l(l({ref:n},s),{},{components:t})):i.createElement(m,l({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=f;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<r;p++)l[p]=t[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}f.displayName="MDXCreateElement"},32227:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var i=t(87462),a=(t(67294),t(3905));const r={id:"splitting_up",title:"Splitting Up Configuration"},l=void 0,o={unversionedId:"Configuration/splitting_up",id:"version-2.8.1/Configuration/splitting_up",title:"Splitting Up Configuration",description:"AstroNvim can be fully configured using just the user/init.lua file, but also",source:"@site/versioned_docs/version-2.8.1/Configuration/splitting_up.md",sourceDirName:"Configuration",slug:"/Configuration/splitting_up",permalink:"/2.8.1/Configuration/splitting_up",draft:!1,tags:[],version:"2.8.1",frontMatter:{id:"splitting_up",title:"Splitting Up Configuration"},sidebar:"docs",previous:{title:"Default Plugin Configurations",permalink:"/2.8.1/Configuration/plugin_defaults"},next:{title:"Managing AstroNvim Updates",permalink:"/2.8.1/Configuration/updater"}},u={},p=[{value:"Lazy Loaded Files",id:"lazy-loaded-files",level:2},{value:"Example File Tree",id:"example-file-tree",level:2}],s={toc:p},c="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(c,(0,i.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"AstroNvim can be fully configured using just the ",(0,a.kt)("inlineCode",{parentName:"p"},"user/init.lua")," file, but also\nsupports easily being configured with separate files. These files will be\nautomatically detected if the file location corresponds to the location in the\n",(0,a.kt)("inlineCode",{parentName:"p"},"init.lua")," table."),(0,a.kt)("p",null,"For example the plugins ",(0,a.kt)("inlineCode",{parentName:"p"},"plugins.init")," override table (or\n",(0,a.kt)("inlineCode",{parentName:"p"},"function(table)...end"),") can be placed in the file ",(0,a.kt)("inlineCode",{parentName:"p"},"user/plugins/init.lua"),"\nwhich would be a ",(0,a.kt)("inlineCode",{parentName:"p"},"lua")," file that returns the override ",(0,a.kt)("inlineCode",{parentName:"p"},"table")," or\n",(0,a.kt)("inlineCode",{parentName:"p"},"function(table)...end"),"."),(0,a.kt)("p",null,"Example ",(0,a.kt)("inlineCode",{parentName:"p"},"user/plugins/init.lua")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  { "andweeb/presence.nvim" },\n  {\n    "ray-x/lsp_signature.nvim",\n    event = "BufRead",\n    config = function()\n      require("lsp_signature").setup()\n    end,\n  },\n}\n')),(0,a.kt)("p",null,"Another example would be adding a custom ",(0,a.kt)("inlineCode",{parentName:"p"},"lsp.on_attach")," function, this could\nbe in a file ",(0,a.kt)("inlineCode",{parentName:"p"},"lsp/on_attach.lua")," that returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"function(client, bufnr)...end"),"\nfor example, if you want to run some code when a language server attaches:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"return function(client, bufnr)\n  -- run some code when a language server attaches\nend\n")),(0,a.kt)("h2",{id:"lazy-loaded-files"},"Lazy Loaded Files"),(0,a.kt)("p",null,"When separating these files into separate files they are lazy loaded by AstroNvim and only called when they are needed. This is particularly useful when configuring plugins when you may want to ",(0,a.kt)("inlineCode",{parentName:"p"},"require")," them."),(0,a.kt)("p",null,"For example if you want to add bindings to ",(0,a.kt)("inlineCode",{parentName:"p"},"nvim-tree")," that use the ",(0,a.kt)("inlineCode",{parentName:"p"},"nvim_tree_callback")," function. This can be easily achieved with the file ",(0,a.kt)("inlineCode",{parentName:"p"},"plugins/nvim-tree.lua")," with the contents:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'local tree_cb = require("nvim-tree.config").nvim_tree_callback\n\nreturn {\n  view = {\n    mappings = {\n      custom_only = false,\n      list = {\n        { key = { "l", "<CR>", "o" }, cb = tree_cb "edit" },\n        { key = "h", cb = tree_cb "close_node" },\n        { key = "v", cb = tree_cb "vsplit" },\n      },\n    },\n  },\n}\n')),(0,a.kt)("h2",{id:"example-file-tree"},"Example File Tree"),(0,a.kt)("p",null,"A heavily modified AstroNvim setup that leverages these separate files could have a file structure as such:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"user/\n\u251c\u2500\u2500 init.lua\n\u251c\u2500\u2500 default_theme/\n\u2502   \u251c\u2500\u2500 init.lua\n\u2502   \u251c\u2500\u2500 colors.lua\n\u2502   \u2514\u2500\u2500 highlights.lua\n\u251c\u2500\u2500 diagnostics.lua\n\u251c\u2500\u2500 lsp/\n\u2502   \u251c\u2500\u2500 on_attach.lua\n\u2502   \u251c\u2500\u2500 server_registration.lua\n\u2502   \u2514\u2500\u2500 server-settings/\n\u2502       \u251c\u2500\u2500 texlab.lua\n\u2502       \u2514\u2500\u2500 yamlls.lua\n\u251c\u2500\u2500 luasnip.lua\n\u251c\u2500\u2500 plugins/\n|   \u251c\u2500\u2500 init.lua\n|   \u251c\u2500\u2500 null-ls.lua\n\u2502   \u251c\u2500\u2500 bufferline.lua\n\u2502   \u251c\u2500\u2500 which-key.lua\n|   \u251c\u2500\u2500 packer.lua\n|   \u251c\u2500\u2500 aerial.lua\n|   \u251c\u2500\u2500 telescope.lua\n|   \u251c\u2500\u2500 toggleterm.lua\n|   \u251c\u2500\u2500 treesitter.lua\n\u2502   \u2514\u2500\u2500 nvim-tree.lua\n\u2514\u2500\u2500 which-key/\n    \u2514\u2500\u2500 register_n_leader.lua\n")))}d.isMDXComponent=!0}}]);