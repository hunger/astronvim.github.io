"use strict";(self.webpackChunkastro_vim=self.webpackChunkastro_vim||[]).push([[3710],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),p=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(t),c=a,g=d["".concat(s,".").concat(c)]||d[c]||m[c]||l;return t?i.createElement(g,r(r({ref:n},u),{},{components:t})):i.createElement(g,r({ref:n},u))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,r=new Array(l);r[0]=c;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[d]="string"==typeof e?e:a,r[1]=o;for(var p=2;p<l;p++)r[p]=t[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},47760:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var i=t(87462),a=(t(67294),t(3905));const l={id:"custom_plugins",title:"Custom Plugins"},r=void 0,o={unversionedId:"Recipes/custom_plugins",id:"version-2.8.0/Recipes/custom_plugins",title:"Custom Plugins",description:"Defining Plugins",source:"@site/versioned_docs/version-2.8.0/Recipes/custom_plugins.md",sourceDirName:"Recipes",slug:"/Recipes/custom_plugins",permalink:"/2.8.0/Recipes/custom_plugins",draft:!1,tags:[],version:"2.8.0",frontMatter:{id:"custom_plugins",title:"Custom Plugins"},sidebar:"docs",previous:{title:"Custom Colorscheme",permalink:"/2.8.0/Recipes/colorscheme"},next:{title:"Disable Winbar",permalink:"/2.8.0/Recipes/disable_winbar"}},s={},p=[{value:"Defining Plugins",id:"defining-plugins",level:2},{value:"Overriding Core Plugins",id:"overriding-core-plugins",level:3},{value:"Full Example",id:"full-example",level:3},{value:"Lazy Loading",id:"lazy-loading",level:2},{value:"Lazy Load File Related Plugins",id:"lazy-load-file-related-plugins",level:3},{value:"Lazy Load Git Plugins",id:"lazy-load-git-plugins",level:3}],u={toc:p};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"defining-plugins"},"Defining Plugins"),(0,a.kt)("p",null,"Plugins can be added in your user configuration either in ",(0,a.kt)("inlineCode",{parentName:"p"},"user/init.lua")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"plugins.init")," table or if you are separating your configuration in ",(0,a.kt)("inlineCode",{parentName:"p"},"user/plugins.init.lua")," file."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Any time you modify ",(0,a.kt)("inlineCode",{parentName:"p"},"plugins.init")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"user/plugins/init.lua")," file make sure you restart and run ",(0,a.kt)("inlineCode",{parentName:"p"},":PackerSync")," to commit these changes to your packer compilation file.")),(0,a.kt)("p",null,"To see all available options in Packer please refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/wbthomason/packer.nvim#specifying-plugins"},"Packer Documentation")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'-- Packer syntax\n-- =============\nuse {\n  "williamboman/mason.nvim",\n  cmd = "Mason",\n}\n\n-- AstroNvim\'s Syntax (Preferred)\n-- ==============================\n\n-- This key/value notation will allow overriding core plugin\n-- specifications as well as defining new user plugins\n["williamboman/mason.nvim"] = {\n  cmd = "Mason",\n},\n\n-- Specifying a plugins with key/value without any options\n["williamboman/mason.nvim"] = {},\n\n\n-- Other Syntaxes that are supported, but not recommended\n-- ======================================================\n\n-- you can specify the default Packer Syntax without the `use`\n-- this works completely fine, but is less error prone. If you\n-- specify this with a default plugin, it will not be able to override\n-- and will add the plugin twice to the Packer table\n{\n  "williamboman/mason.nvim",\n  cmd = "Mason",\n},\n\n-- if there is a plugin you want to add without any options, you can\n-- simply just add the string and it will be added, this has the same\n-- caveat of the previous syntax where it will not be able to tell if\n-- it is a duplicate or not, so use with caution\n"williamboman/mason.nvim",\n')),(0,a.kt)("h3",{id:"overriding-core-plugins"},"Overriding Core Plugins"),(0,a.kt)("p",null,"This key/value notation allows you to override the specifications for core plugins as well. This is mostly used for disabling core plugins that you do not want to be used, but could also be used to disable/change lazy loading or anything. Here is a simple example disabling a core plugin such as ",(0,a.kt)("inlineCode",{parentName:"p"},"alpha"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'["goolord/alpha-nvim"] = { disable = true },\n')),(0,a.kt)("h3",{id:"full-example"},"Full Example"),(0,a.kt)("p",null,"Here is a simple ",(0,a.kt)("inlineCode",{parentName:"p"},"user/init.lua")," file that just defines a plugin in the ",(0,a.kt)("inlineCode",{parentName:"p"},"plugins.init")," table:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  plugins = {\n    init = {\n      ["catppuccin/nvim"] = { as = "catppuccin" },\n    },\n  },\n}\n')),(0,a.kt)("p",null,"Here is the same plugin being added to ",(0,a.kt)("inlineCode",{parentName:"p"},"user/plugins/init.lua")," file if you prefer separating out your configuration files:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  ["catppuccin/nvim"] = { as = "catppuccin" },\n}\n')),(0,a.kt)("h2",{id:"lazy-loading"},"Lazy Loading"),(0,a.kt)("p",null,"For maintaining a fast startup time, it is recommended to do lazy loading which is easily configurable in Packer. There are a few basic methods of lazy loading that can be easily added. The main keys here are ",(0,a.kt)("inlineCode",{parentName:"p"},"cmd"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"module"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ft"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"keys"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"event"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"after"),". More details of these and more options can be found in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/wbthomason/packer.nvim#specifying-plugins"},"Packer Documentation"),". Here are a few examples:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  plugins = {\n    init = {\n      -- this plugin will be loaded the first time `require("smart-splits")` is run\n      ["mrjones2014/smart-splits.nvim"] = { module = "smart-splits" },\n\n      -- this plugin will be loaded on the autocmd event "UIEnter"\n      ["rcarriga/nvim-notify"] = { event = "UIEnter" },\n\n      -- this plugin will be loaded when using `:Bdelete` and `:Bwipeout`\n      ["famiu/bufdelete.nvim"] = { cmd = { "Bdelete", "Bwipeout" } },\n\n      -- this plugin will be loaded immediately after `nvim-cmp`\n      ["hrsh7th/cmp-buffer"] = { after = "nvim-cmp" },\n    }\n  }\n}\n')),(0,a.kt)("h3",{id:"lazy-load-file-related-plugins"},"Lazy Load File Related Plugins"),(0,a.kt)("p",null,"AstroNvim has many plugins that we load on the first real file that is open. This is used internally for plugins like Treesitter, LSP related plugins, and other various plugins related to interacting with files. Because of this we have added some internal mechanisms to make it easy to add this specific type of lazy loading. To do this you simply want to mark the plugin as optional with the ",(0,a.kt)("inlineCode",{parentName:"p"},"opt")," key and then use the ",(0,a.kt)("inlineCode",{parentName:"p"},"setup")," key to add the plugin name to the table ",(0,a.kt)("inlineCode",{parentName:"p"},"astronvim.file_plugins"),". Here is a simple example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'["NvChad/nvim-colorizer.lua"] = {\n  opt = true,\n  setup = function() table.insert(astronvim.file_plugins, "nvim-colorizer.lua") end,\n},\n\n')),(0,a.kt)("p",null,"This will tell AstroNvim that this plugin should be loaded with the other file related plugins on the opening of the first real file."),(0,a.kt)("h3",{id:"lazy-load-git-plugins"},"Lazy Load Git Plugins"),(0,a.kt)("p",null,"Similar to the file related plugins described above, we also have a similar hook for git related plugins. These shouldn't be loaded until a file is open that is in a git repository folder. We use this for stuff like the ",(0,a.kt)("inlineCode",{parentName:"p"},"gitsigns")," plugin. This will check when a file is opened if it is in a git tracked folder and then load the plugin. You just need to mark the plugin as optional with ",(0,a.kt)("inlineCode",{parentName:"p"},"opt")," key and then use the ",(0,a.kt)("inlineCode",{parentName:"p"},"setup")," key to add the plugin name to the table ",(0,a.kt)("inlineCode",{parentName:"p"},"astronvim.git_plugins"),". ",(0,a.kt)("strong",{parentName:"p"},"This does require access to the ",(0,a.kt)("inlineCode",{parentName:"strong"},"git")," command in your ",(0,a.kt)("inlineCode",{parentName:"strong"},"PATH"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'["lewis6991/gitsigns.nvim"] = {\n  opt = true,\n  setup = function() table.insert(astronvim.git_plugins, "gitsigns.nvim") end,\n},\n')))}d.isMDXComponent=!0}}]);