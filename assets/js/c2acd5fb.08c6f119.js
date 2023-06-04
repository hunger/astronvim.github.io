"use strict";(self.webpackChunkastro_vim=self.webpackChunkastro_vim||[]).push([[57638],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),c=i,h=m["".concat(p,".").concat(c)]||m[c]||d[c]||r;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},74366:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const r={id:"v3_migration",title:"Migration to v3.0"},o=void 0,l={unversionedId:"Configuration/v3_migration",id:"version-3.15.0/Configuration/v3_migration",title:"Migration to v3.0",description:"Migrating User Configuration",source:"@site/versioned_docs/version-3.15.0/Configuration/v3_migration.md",sourceDirName:"Configuration",slug:"/Configuration/v3_migration",permalink:"/3.15.0/Configuration/v3_migration",draft:!1,tags:[],version:"3.15.0",frontMatter:{id:"v3_migration",title:"Migration to v3.0"},sidebar:"docs",previous:{title:"Managing AstroNvim Updates",permalink:"/3.15.0/Configuration/updater"},next:{title:"Black Belt Example User Configs",permalink:"/3.15.0/Recipes/black_belt"}},p={},s=[{value:"Migrating User Configuration",id:"migrating-user-configuration",level:2}],u={toc:s},m="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"migrating-user-configuration"},"Migrating User Configuration"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Plugin Manager Change:")," With v3 we have moved away from Packer and to the new ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/folke/lazy.nvim"},"lazy.nvim"),". The options for lazy can be configured with the ",(0,i.kt)("inlineCode",{parentName:"p"},"lazy")," user option. We have also removed all abstraction away from the plugin specifications. So the lazy.nvim docs can be referred to for the format of adding new plugins. You can also check the updated ",(0,i.kt)("a",{parentName:"p",href:"/3.15.0/Recipes/custom_plugins"},"Customizing Plugins Documentation")," for defining new plugins as well as overriding core plugins."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Lazy also handles overriding options and setup functions automatically so we have removed all of the ",(0,i.kt)("inlineCode",{parentName:"li"},"plugins.X")," user options for overriding the setup tables for the core provided plugins. These can be set up, extended, and configured similar to any other plugin that you are adding."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Note:")," The default options for lazy sets ",(0,i.kt)("inlineCode",{parentName:"li"},"lazy = true")," for each plugin. This means plugins should either be configured appropriately for lazy loading or use ",(0,i.kt)("inlineCode",{parentName:"li"},"lazy = false")," if you do not want a plugin to be lazy loaded"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"user/plugins/")," folder is added to the Lazy plugin specifications to be imported. This allows you to add lists of plugins to any files in the ",(0,i.kt)("inlineCode",{parentName:"li"},"user/plugins/")," folder and they will be used appropriately. This will allow you to organize your plugins in any way you would prefer."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"astronvim.file_plugins")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"astronvim.git_plugins")," tables have been removed in favor of a ",(0,i.kt)("inlineCode",{parentName:"p"},"User")," ",(0,i.kt)("inlineCode",{parentName:"p"},"autocmd")," model. Wherever you are using ",(0,i.kt)("inlineCode",{parentName:"p"},"astronvim.file_plugins")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"astronvim.git_plugins")," to lazy load your plugins, please switch to lazy loading on the user events ",(0,i.kt)("inlineCode",{parentName:"p"},"User AstroFile")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"User AstroGitFile"),". More details for these can be found in the updated ",(0,i.kt)("a",{parentName:"p",href:"/3.15.0/Recipes/custom_plugins"},"Customizing Plugins Documentation"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A large restructuring of our internal utilities has taken place."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Our ",(0,i.kt)("inlineCode",{parentName:"li"},"core")," module has been renamed to ",(0,i.kt)("inlineCode",{parentName:"li"},"astronvim")," so anywhere you use ",(0,i.kt)("inlineCode",{parentName:"li"},'require("core...")')," will need to be replaced with ",(0,i.kt)("inlineCode",{parentName:"li"},'require("astronvim...")')),(0,i.kt)("li",{parentName:"ul"},"Most utility functions in the global ",(0,i.kt)("inlineCode",{parentName:"li"},"astronvim")," variable have been separated into specific modules and can be accessed with require such as: ",(0,i.kt)("inlineCode",{parentName:"li"},'require("astronvim.utils")'),". Commonly used changes are: ",(0,i.kt)("inlineCode",{parentName:"li"},"astronvim.lsp")," is now ",(0,i.kt)("inlineCode",{parentName:"li"},'require("astronvim.utils.lsp")'),", ",(0,i.kt)("inlineCode",{parentName:"li"},"astronvim.status")," is now ",(0,i.kt)("inlineCode",{parentName:"li"},'require("astronvim.utils.status")'),", and most of the various utilities are now just in ",(0,i.kt)("inlineCode",{parentName:"li"},'require("astronvim.utils")'),". Please check out the updated API documentation here for specific details and finding specific functions: ",(0,i.kt)("a",{parentName:"li",href:"https://api.astronvim.com"},"api.astronvim.com"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We have removed Bufferline and are now using Heirline and ",(0,i.kt)("inlineCode",{parentName:"p"},"astronvim.utils.status")," (previously was in ",(0,i.kt)("inlineCode",{parentName:"p"},"astronvim.status")," but is now accessed with ",(0,i.kt)("inlineCode",{parentName:"p"},'require("astronvim.utils.status")'),") for our own performant and custom tabline.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},":AstroReload")," has been removed. There are a couple reasons for this, it was never very reliable and hard to maintain and lazy.nvim strictly does not support hot reloading neovim configurations.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},'require("astronvim.utils.status").component.macro_recording')," status component has been removed. Please use the improved ",(0,i.kt)("inlineCode",{parentName:"p"},'require("astronvim.utils.status").component.cmd_info')," component.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"lsp.server-settings")," has been renamed to ",(0,i.kt)("inlineCode",{parentName:"p"},"lsp.config"),". If you have the ",(0,i.kt)("inlineCode",{parentName:"p"},'["server-settings"]')," table in your ",(0,i.kt)("inlineCode",{parentName:"p"},"user/init.lua")," file, just rename it to ",(0,i.kt)("inlineCode",{parentName:"p"},"config"),". If you have the folder ",(0,i.kt)("inlineCode",{parentName:"p"},"user/lsp/server-settings"),", just rename the folder to ",(0,i.kt)("inlineCode",{parentName:"p"},"user/lsp/config"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"luasnip")," options table has been removed. Please see the updated ",(0,i.kt)("a",{parentName:"p",href:"/3.15.0/Recipes/snippets"},"Custom Snippets Documentation")," for the new way to extend the default configuration of LuaSnip to add new loaders.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"which-key")," options table has been removed. Which-key menu titles can now be easily added into the ",(0,i.kt)("inlineCode",{parentName:"p"},"mappings")," table by setting a binding to a table with the ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," property set and it will be passed to ",(0,i.kt)("inlineCode",{parentName:"p"},"which-key"),". For example, you can add the following to the ",(0,i.kt)("inlineCode",{parentName:"p"},"mappings")," table: ",(0,i.kt)("inlineCode",{parentName:"p"},'["<leader>b"] = { name = "Buffer" }'),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"nvim-autopairs")," options table has been removed. Please see the updated ",(0,i.kt)("a",{parentName:"p",href:"/3.15.0/Recipes/autopairs"},"Customize Autopairs Documentation")," for the new way to extend the default configuration of autopairs and adding more rules.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"cmp")," options table has been removed. Please see the updated ",(0,i.kt)("a",{parentName:"p",href:"/3.15.0/Recipes/cmp"},"Customize cmp Completion Documentation")," for the new way to extend the default configuration of cmp and running more ",(0,i.kt)("inlineCode",{parentName:"p"},"cmp")," setup functions.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"mason-lspconfig"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"mason-null-ls"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"mason-nvim-dap")," options tables have been removed, please use the new plugin notation for extending these options like adding custom setup handlers. This is described in the ",(0,i.kt)("a",{parentName:"p",href:"/3.15.0/Recipes/custom_plugins#extending-core-plugin-config-functions"},"Extending Core Plugin Config Functions Documentation"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"default_theme")," has been migrated to a dedicated plugin that can be used outside of AstroNvim as well at ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/AstroNvim/astrotheme"},"AstroNvim/astrotheme"),". This can be customized and configured the same as any other plugin, check the README for details on the ",(0,i.kt)("inlineCode",{parentName:"p"},"setup")," function.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The bindings in ",(0,i.kt)("inlineCode",{parentName:"p"},"cmp")," to scroll the preview window for a completion item have moved to ",(0,i.kt)("inlineCode",{parentName:"p"},"<c-u>")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"<c-d>"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"<leader>p")," mappings for package and plugin management have been cleaned up to follow a common format amongst each other. ",(0,i.kt)("inlineCode",{parentName:"p"},"<leader>ps")," is now for checking Plugin Status and ",(0,i.kt)("inlineCode",{parentName:"p"},"<leader>pS")," is for syncing plugins. Mason mappings have been moved to ",(0,i.kt)("inlineCode",{parentName:"p"},"<leader>pm")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"<leader>pM")," for Mason Status and Mason Update respectively.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The dashboard mapping has been changed from ",(0,i.kt)("inlineCode",{parentName:"p"},"<leader>d")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"<leader>h"),' for the "Home Screen"')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The debugging menu has been moved from ",(0,i.kt)("inlineCode",{parentName:"p"},"<leader>D")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"<leader>d")," for quicker and more comfortable usage.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"H")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"L")," have been changed to ",(0,i.kt)("inlineCode",{parentName:"p"},"[b")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"]b")," respectively for changing tabs in the UI. This is for both switching buffers as well as neo-tree sources in the explorer. This can be changed in the your user configuration by adding the following entries to your ",(0,i.kt)("inlineCode",{parentName:"p"},"mappings.n")," table (This uses an internal ",(0,i.kt)("inlineCode",{parentName:"p"},"astronvim.utils.buffer")," function that follows the tab positioning and also allows for using a number to move by multiple tabs at once):"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'    L = { function() require("astronvim.utils.buffer").nav(vim.v.count > 0 and vim.v.count or 1) end, desc = "Next buffer" },\n    H = { function() require("astronvim.utils.buffer").nav(-(vim.v.count > 0 and vim.v.count or 1)) end, desc = "Previous buffer" },\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"header")," option has been removed in favor of decreasing abstractions. Check the updated ",(0,i.kt)("a",{parentName:"p",href:"/3.15.0/Recipes/alpha"},"Dashboard Customizations Documentation"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"<leader>s")," has been unified with the ",(0,i.kt)("inlineCode",{parentName:"p"},"<leader>f")," menu rather than spreading the Telescope mappings out across two menus. Please check the new mappings by pressing ",(0,i.kt)("inlineCode",{parentName:"p"},"<leader>f")," or in the updated ",(0,i.kt)("a",{parentName:"p",href:"/3.15.0/Basic%20Usage/mappings"},"Mappings Documentation"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Heirline has moved to a more sustainable configuration format for their ",(0,i.kt)("inlineCode",{parentName:"p"},"setup")," call. Before it was configured with ",(0,i.kt)("inlineCode",{parentName:"p"},'require("heirline").setup(statusline, winbar, tabline)'),", this has moved to a new format with a single table like ",(0,i.kt)("inlineCode",{parentName:"p"},'require("heirline").setup({ statusline = statusline, winbar = winbar, tabline = tabline, statuscolumn = statuscolumn })'),". If you have a custom Heirline configuration please check out the updated ",(0,i.kt)("a",{parentName:"p",href:"/3.15.0/Recipes/status"},"Customizing Statusline Documentation")," as well as the updated ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rebelot/heirline.nvim/blob/master/cookbook.md"},"Heirline Documentation"),". (",(0,i.kt)("em",{parentName:"p"},"Note:")," also that along with all of the other core plugin setups, the abstractions have been removed and you will need to update to the new Lazy syntax described in the ",(0,i.kt)("a",{parentName:"p",href:"/3.15.0/Recipes/custom_plugins#overriding-core-plugins"},"Custom Plugins Documentation"),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"lsp.skip_setup")," option has been removed as the new and improved ",(0,i.kt)("inlineCode",{parentName:"p"},"lsp.setup_handlers")," option makes this easy. If you are using this option for LSP specific plugins, check up the updated ",(0,i.kt)("a",{parentName:"p",href:"/3.15.0/Recipes/advanced_lsp#lsp-specific-plugins"},"Advanced LSP Setup Documentation"),". This page also includes the new format for setting these plugins up with Lazy.nvim.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"default_tbl(override_tbl, default_tbl)")," internal function has been removed and replaced with ",(0,i.kt)("inlineCode",{parentName:"p"},"extend_tbl(default_tbl, override_tbl)"),". If you use the original function anywhere in your config, remember to rename it and change the order of the parameters. Also note that this now lives in ",(0,i.kt)("inlineCode",{parentName:"p"},"astronvim.utils")," rather than the global ",(0,i.kt)("inlineCode",{parentName:"p"},"astronvim")," table. This can be accessed with ",(0,i.kt)("inlineCode",{parentName:"p"},'require("astronvim.utils").extend_tbl(default_tbl, override_tbl)'),"."))))}d.isMDXComponent=!0}}]);