"use strict";(self.webpackChunkastro_vim=self.webpackChunkastro_vim||[]).push([[9057],{3905:(t,e,n)=>{n.d(e,{Zo:()=>h,kt:()=>g});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),o=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):m(m({},e),t)),n},h=function(t){var e=o(t.components);return a.createElement(p.Provider,{value:e},t.children)},u="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,h=l(t,["components","mdxType","originalType","parentName"]),u=o(n),d=r,g=u["".concat(p,".").concat(d)]||u[d]||s[d]||i;return n?a.createElement(g,m(m({ref:e},h),{},{components:n})):a.createElement(g,m({ref:e},h))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,m=new Array(i);m[0]=d;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[u]="string"==typeof t?t:r,m[1]=l;for(var o=2;o<i;o++)m[o]=n[o];return a.createElement.apply(null,m)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},31533:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>m,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var a=n(87462),r=(n(67294),n(3905));const i={id:"acknowledgements",title:"Acknowledgements"},m=void 0,l={unversionedId:"acknowledgements",id:"version-2.8.1/acknowledgements",title:"Acknowledgements",description:"\u2b50 Credits",source:"@site/versioned_docs/version-2.8.1/acknowledgements.md",sourceDirName:".",slug:"/acknowledgements",permalink:"/2.8.1/acknowledgements",draft:!1,tags:[],version:"2.8.1",frontMatter:{id:"acknowledgements",title:"Acknowledgements"},sidebar:"docs",previous:{title:"Unattended Installation",permalink:"/2.8.1/Recipes/unattended_install"}},p={},o=[{value:"\u2b50 Credits",id:"-credits",level:2},{value:"\ud83d\udd0c Plugins used in AstroNvim",id:"-plugins-used-in-astronvim",level:2}],h={toc:o},u="wrapper";function s(t){let{components:e,...n}=t;return(0,r.kt)(u,(0,a.Z)({},h,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"-credits"},"\u2b50 Credits"),(0,r.kt)("p",null,"Sincere appreciation to the following repositories, plugin authors and the entire neovim community out there that made the development of AstroNvim possible."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/NvChad/NvChad"},"NvChad")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/LunarVim"},"LunarVim")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/CosmicNvim/CosmicNvim"},"CosmicVim"))),(0,r.kt)("h2",{id:"-plugins-used-in-astronvim"},"\ud83d\udd0c Plugins used in AstroNvim"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Plugin"),(0,r.kt)("th",{parentName:"tr",align:null},"Git Repository"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Plugin Manager"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/wbthomason/packer.nvim"},"https://github.com/wbthomason/packer.nvim"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Package Manager"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/williamboman/mason.nvim"},"https://github.com/williamboman/mason.nvim"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Session Manager"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/Shatur/neovim-session-manager"},"https://github.com/Shatur/neovim-session-manager"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Optimiser"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/lewis6991/impatient.nvim"},"https://github.com/lewis6991/impatient.nvim"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Lua Functions"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/nvim-lua/plenary.nvim"},"https://github.com/nvim-lua/plenary.nvim"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Popup API"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/nvim-lua/popup.nvim"},"https://github.com/nvim-lua/popup.nvim"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Notifications"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/rcarriga/nvim-notify"},"https://github.com/rcarriga/nvim-notify"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Neovim UI Enhancer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/MunifTanjim/nui.nvim"},"https://github.com/MunifTanjim/nui.nvim"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Automatic Indent Detection"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/Darazaki/indent-o-matic"},"https://github.com/Darazaki/indent-o-matic"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Curshold Fix"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/antoinemadec/FixCursorHold.nvim"},"https://github.com/antoinemadec/FixCursorHold.nvim"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Smarter Splits"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/mrjones2014/smart-splits.nvim"},"https://github.com/mrjones2014/smart-splits.nvim"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Icons"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/ryanoasis/vim-devicons"},"https://github.com/ryanoasis/vim-devicons"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Bufferline"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/akinsho/bufferline.nvim"},"https://github.com/akinsho/bufferline.nvim"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Buffer Closing"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/famiu/bufdelete.nvim"},"https://github.com/famiu/bufdelete.nvim"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"File Explorer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/nvim-neo-tree/neo-tree.nvim"},"https://github.com/nvim-neo-tree/neo-tree.nvim"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Statusline"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/rebelot/heirline.nvim"},"https://github.com/rebelot/heirline.nvim"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Syntax Highlighting"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/nvim-treesitter/nvim-treesitter"},"https://github.com/nvim-treesitter/nvim-treesitter"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Parenthesis Highlighting"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/p00f/nvim-ts-rainbow"},"https://github.com/p00f/nvim-ts-rainbow"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Autoclose tags"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/windwp/nvim-ts-autotag"},"https://github.com/windwp/nvim-ts-autotag"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Context Commenting"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/JoosepAlviste/nvim-ts-context-commentstring"},"https://github.com/JoosepAlviste/nvim-ts-context-commentstring"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Snippet Engine"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/L3MON4D3/LuaSnip"},"https://github.com/L3MON4D3/LuaSnip"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Snnipet Collections"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/rafamadriz/friendly-snippets"},"https://github.com/rafamadriz/friendly-snippets"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Completion Engine"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/hrsh7th/nvim-cmp"},"https://github.com/hrsh7th/nvim-cmp"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Snippet Completion"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/saadparwaiz1/cmp_luasnip"},"https://github.com/saadparwaiz1/cmp_luasnip"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Buffer Completion"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/hrsh7th/cmp-buffer"},"https://github.com/hrsh7th/cmp-buffer"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Command Line Completion"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/hrsh7th/cmp-cmdline"},"https://github.com/hrsh7th/cmp-cmdline"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Path Completion"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/hrsh7th/cmp-path"},"https://github.com/hrsh7th/cmp-path"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LSP Completion"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/hrsh7th/nvim-cmp"},"https://github.com/hrsh7th/nvim-cmp"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Built-in LSP"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/neovim/nvim-lspconfig"},"https://github.com/neovim/nvim-lspconfig"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LSP Symbols"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/stevearc/aerial.nvim"},"https://github.com/stevearc/aerial.nvim"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Formatting & Linting"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/jose-elias-alvarez/null-ls.nvim"},"https://github.com/jose-elias-alvarez/null-ls.nvim"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Fuzzy Finder"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/nvim-telescope/telescope.nvim"},"https://github.com/nvim-telescope/telescope.nvim"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Fuzzy Finder Syntax"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/nvim-telescope/telescope-fzf-native.nvim"},"https://github.com/nvim-telescope/telescope-fzf-native.nvim"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Git Integration"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/lewis6991/gitsigns.nvim"},"https://github.com/lewis6991/gitsigns.nvim"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Start Screen"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/goolord/alpha-nvim"},"https://github.com/goolord/alpha-nvim"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Color Highlighting"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/NvChad/nvim-colorizer.lua"},"https://github.com/NvChad/nvim-colorizer.lua"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Autopairs"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/windwp/nvim-autopairs"},"https://github.com/windwp/nvim-autopairs"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Terminal"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/akinsho/toggleterm.nvim"},"https://github.com/akinsho/toggleterm.nvim"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Commenting"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/numToStr/Comment.nvim"},"https://github.com/numToStr/Comment.nvim"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Indentation"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/lukas-reineke/indent-blankline.nvim"},"https://github.com/lukas-reineke/indent-blankline.nvim"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Keymaps Popup"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/folke/which-key.nvim"},"https://github.com/folke/which-key.nvim"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Smooth Escaping"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/max397574/better-escape.nvim"},"https://github.com/max397574/better-escape.nvim"))))),(0,r.kt)("div",{align:"center",id:"madewithlua"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://lua.org"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Made%20with%20Lua-blue.svg?style=for-the-badge&logo=lua",alt:"Lua"})))))}s.isMDXComponent=!0}}]);