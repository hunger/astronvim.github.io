"use strict";(self.webpackChunkastro_vim=self.webpackChunkastro_vim||[]).push([[66427],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),g=i,c=d["".concat(p,".").concat(g)]||d[g]||m[g]||r;return n?a.createElement(c,o(o({ref:t},u),{},{components:n})):a.createElement(c,o({ref:t},u))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},93863:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const r={id:"v2_migration",title:"Migration to v2.0"},o="Migrating from v1.x to v2.0",l={unversionedId:"Configuration/v2_migration",id:"version-2.8.0/Configuration/v2_migration",title:"Migration to v2.0",description:"AstroNvim requires the migration to Neovim v0.8 to use the new APIs and features. Please refer to the Neovim v0.8 changelog and review the breaking changes to see if any of the Lua that you have in your user configuration for AstroNvim needs to be updated to follow the new APIs as well.",source:"@site/versioned_docs/version-2.8.0/Configuration/v2_migration.md",sourceDirName:"Configuration",slug:"/Configuration/v2_migration",permalink:"/2.8.0/Configuration/v2_migration",draft:!1,tags:[],version:"2.8.0",frontMatter:{id:"v2_migration",title:"Migration to v2.0"},sidebar:"docs",previous:{title:"Managing AstroNvim Updates",permalink:"/2.8.0/Configuration/updater"},next:{title:"Black Belt Example User Configs",permalink:"/2.8.0/Recipes/black_belt"}},p={},s=[],u={toc:s},d="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"migrating-from-v1x-to-v20"},"Migrating from v1.x to v2.0"),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"AstroNvim requires the migration to Neovim v0.8 to use the new APIs and features. Please refer to the Neovim v0.8 changelog and review the breaking changes to see if any of the Lua that you have in your user configuration for AstroNvim needs to be updated to follow the new APIs as well.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Updater changes:")," Stable AstroNvim is now the default behavior of installing AstroNvim without any user configuration. This will mean slower updates as well as pinning provided plugins to protect against breaking changes. You can opt into the ",(0,i.kt)("inlineCode",{parentName:"p"},"nightly")," update channel through your user configuration with the ",(0,i.kt)("inlineCode",{parentName:"p"},"updater")," table. We have also enabled automatically syncing plugins and quitting AstroNvim on a successful update which will then require a relaunch to start using the new update as quickly as possible. All of these options can also be configured in the ",(0,i.kt)("inlineCode",{parentName:"p"},"updater")," configuration table. If you want to achieve the previous update behavior of AstroNvim, you can put the following ",(0,i.kt)("inlineCode",{parentName:"p"},"updater")," settings in your user configuration:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'updater = {\n  -- get nightly updates\n  channel = "nightly",\n  -- disable automatically reloading AstroNvim after an update\n  auto_reload = false,\n  -- disable automatically quitting AstroNvim after an update\n  auto_quit = false,\n}\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We have also deprecated the configuration item ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins.nvim-lsp-installer")," as we have since moved to ",(0,i.kt)("inlineCode",{parentName:"p"},"mason-lspconfig"),". if you have ",(0,i.kt)("inlineCode",{parentName:"p"},"nvim-lsp-installer")," configuration in your ",(0,i.kt)("inlineCode",{parentName:"p"},"user/init.lua")," file or the file ",(0,i.kt)("inlineCode",{parentName:"p"},"user/plugins/nvim-lsp-installer.lua"),", this should be replaced with ",(0,i.kt)("inlineCode",{parentName:"p"},"mason-lspconfig"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"With the maturity of mason specific plugins ",(0,i.kt)("inlineCode",{parentName:"p"},"mason-lspconfig")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"mason-null-ls")," we are going to remove ",(0,i.kt)("inlineCode",{parentName:"p"},"mason-tool-installer.nvim")," as a provided plugin. ",(0,i.kt)("inlineCode",{parentName:"p"},"mason-lspconfig")," provides a way to automatically install language servers and ",(0,i.kt)("inlineCode",{parentName:"p"},"mason-null-ls")," can automatically install null-ls sources. These plugins also provide functionality for letting us set things up so the tool installer plugin is nearly down to no use. If you use Mason to automatically install debuggers and want to add it back please add this plugin to your ",(0,i.kt)("inlineCode",{parentName:"p"},"user/init.lua")," file in your ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins.init")," table with this:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'["WhoIsSethDaniel/mason-tool-installer.nvim"] = {\n  after = "mason.nvim",\n  config = function()\n    require("mason-tool-installer").setup({\n      -- your config for the plugin here\n    })\n  end,\n},\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Formatting has been greatly improved with Neovim v0.8 that doesn't require users to disable formatting capabilities for any LSP clients. It allows for filtering of clients that have formatting enabled as well as formatting with multiple language servers without having to select a specific one to use. We have added a new ",(0,i.kt)("inlineCode",{parentName:"p"},"lsp.formatting")," option to the user configuration that allow users to easily control the filter function and disable language servers more easily. If you are disabling formatting capabilities of any LSP clients in your ",(0,i.kt)("inlineCode",{parentName:"p"},"lsp.server-settings")," configuration, we would recommend that you remove that and try out formatting without disabling anything. If you need to disable formatting for clients, check out the new ",(0,i.kt)("a",{parentName:"p",href:"/2.8.0/Recipes/advanced_lsp#controlling-formatting"},"LSP Formatting Documentation"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Format on save is now a default behavior of AstroNvim. We have also combined the ",(0,i.kt)("inlineCode",{parentName:"p"},"on_attach")," for language servers and ",(0,i.kt)("inlineCode",{parentName:"p"},"null-ls")," together. If you are setting up automatic saving in your ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins.null-ls")," table with the ",(0,i.kt)("inlineCode",{parentName:"p"},"on_attach")," function, you can remove this all together. We recommend removing the entire ",(0,i.kt)("inlineCode",{parentName:"p"},"on_attach")," function for ",(0,i.kt)("inlineCode",{parentName:"p"},"null-ls")," and do all the configuration within the ",(0,i.kt)("inlineCode",{parentName:"p"},"lsp.on_attach")," function in your user configuration.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"<leader>p")," menu option for syncing and checking ",(0,i.kt)("inlineCode",{parentName:"p"},"Packer")," has been reworked to be a general menu for checking and updating packages, plugins, and AstroNvim itself. This also includes remapping ",(0,i.kt)("inlineCode",{parentName:"p"},"<leader>lI")," which was the LSP Installer to ",(0,i.kt)("inlineCode",{parentName:"p"},"<leader>pI")," to open the Mason Installer since it is a general purpose package installer and not just language servers")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We have replaced Feline with the plugin ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rebelot/heirline.nvim"},(0,i.kt)("inlineCode",{parentName:"a"},"Heirline.nvim")),". This provides us with a much more powerful way to provide custom statusline and winbar support to AstroNvim. This has also come with a new module ",(0,i.kt)("inlineCode",{parentName:"p"},"astronvim.status")," that will provide many building blocks for creating custom statuslines for users if they want to modify the default bar. We have also provided new documentation for this at ",(0,i.kt)("a",{parentName:"p",href:"../Recipes/status"},"Recipes/Customizing Statusline"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"cinnamon.nvim")," has been removed from the default plugin list. If you liked the smooth scrolling, please add it back to your ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins.init")," table in your user configuration. If you have previously disabled it then you no longer need to.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"which-key.register_mappings")," key has been simplified to just ",(0,i.kt)("inlineCode",{parentName:"p"},"which-key.register"),". If you have ",(0,i.kt)("inlineCode",{parentName:"p"},"register_mappings")," table in your ",(0,i.kt)("inlineCode",{parentName:"p"},"user/init.lua")," file then simply rename it to ",(0,i.kt)("inlineCode",{parentName:"p"},"register"),". If you have the file ",(0,i.kt)("inlineCode",{parentName:"p"},"user/which-key/register_mappings.lua")," for your configuration, just simply rename that file to ",(0,i.kt)("inlineCode",{parentName:"p"},"user/which-key/register.lua"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"default_theme.diagnostics_style")," has been deprecated in favor of the improved ",(0,i.kt)("inlineCode",{parentName:"p"},"highlights")," configuration table which allows you to easily override any highlight group in the theme before it gets set. To achieve the same functionality as the ",(0,i.kt)("inlineCode",{parentName:"p"},"default_theme.diagnostics_style")," you include this in your ",(0,i.kt)("inlineCode",{parentName:"p"},"user/init.lua")," configuration table:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"default_theme = {\n  highlights = function(hl)\n    -- New approach instead of diagnostic_style\n    hl.DiagnosticError.italic = true\n    hl.DiagnosticHint.italic = true\n    hl.DiagnosticInfo.italic = true\n    hl.DiagnosticWarn.italic = true\n\n    return hl\n  end,\n},\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We have removed the default escape bindings for the terminal mode. This caused a lot of frictions with users who wanted to use terminal interfaces within AstroNvim. We have also changed the ",(0,i.kt)("inlineCode",{parentName:"p"},"<C-\\>")," binding to be ",(0,i.kt)("inlineCode",{parentName:"p"},"<F7>")," for toggling the terminal since this conflicted with a very useful default binding. The following are the mappings that were removed just in case anyone wants to add them back:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'mappings = {\n  n = {\n    ["<C-\\\\>"] = { "<cmd>ToggleTerm<cr>", desc = "Toggle terminal" },\n  },\n  t = {\n    ["<esc>"] = { "<C-\\\\><C-n>", desc = "Terminal normal mode" },\n    ["jk"] = { "<C-\\\\><C-n>", desc = "Terminal normal mode" },\n  },\n},\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We have added a new UI menu (",(0,i.kt)("inlineCode",{parentName:"p"},"<leader>u"),") for quickly toggling UI/UX elements of AstroNvim. Ranging from toggling completion and syntax highlighting to toggling indentation level. Previously ",(0,i.kt)("inlineCode",{parentName:"p"},"<leader>u")," was used by default to toggle underlining URLs, but this has been moved to within the new UI menu. New Mappings:"),(0,i.kt)("table",{parentName:"li"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Action"),(0,i.kt)("th",{parentName:"tr",align:null},"Mappings"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Toggle autopairs"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Space + ua"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Toggle background"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Space + ub"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Toggle autocompletion"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Space + uc"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Toggle color highlights"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Space + uC"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Toggle diagnostics"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Space + ud"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Toggle signcolumn"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Space + ug"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Change indent setting"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Space + ui"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Change line numbering"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Space + un"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Toggle spellcheck"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Space + up"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Toggle URL highlight"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Space + uu"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Toggle wrap"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Space + uw"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Toggle syntax highlight"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Space + uy")))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We have deprecated the ",(0,i.kt)("inlineCode",{parentName:"p"},"ui")," configuration table for enabling and disabling using ",(0,i.kt)("inlineCode",{parentName:"p"},"nui")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"telescope")," for ",(0,i.kt)("inlineCode",{parentName:"p"},"input")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"select")," windows. This has been replaced with the plugin ",(0,i.kt)("inlineCode",{parentName:"p"},"dressing")," now that it is back in active development. These features can be controlled with overriding the ",(0,i.kt)("inlineCode",{parentName:"p"},"dressing")," setup with ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins.dressing")," table or the file ",(0,i.kt)("inlineCode",{parentName:"p"},"user/plugins/dressing.lua"),". If you have not disabled any of the ",(0,i.kt)("inlineCode",{parentName:"p"},"ui")," elements then you don't need to add anything. If you have set either of them to false, you will want to add the following to your user configuration:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ui.nui_input = false"),", the following should be added to your ",(0,i.kt)("inlineCode",{parentName:"li"},"user/init.lua")," to override the dressing settings:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"plugins = {\n  dressing = {\n    input = { enabled = false },\n  },\n}\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ui.telescope_select = false"),", the following should be added to your ",(0,i.kt)("inlineCode",{parentName:"li"},"user/init.lua")," to override the dressing settings:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"plugins = {\n  dressing = {\n    select = { enabled = false },\n  },\n}\n"))),(0,i.kt)("li",{parentName:"ul"},"To disable both, you can either disable both the ",(0,i.kt)("inlineCode",{parentName:"li"},"input")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"select")," items in the ",(0,i.kt)("inlineCode",{parentName:"li"},"dressing")," configuration or you can just disable the ",(0,i.kt)("inlineCode",{parentName:"li"},"dressing")," plugin altogether:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'plugins = {\n  init = {\n    ["stevearc/dressing.nvim"] = { disable = true },\n  },\n}\n'))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"configs/lsp/handlers.lua")," has been moved to ",(0,i.kt)("inlineCode",{parentName:"p"},"lua/core/utils/lsp.lua"),". If you are doing ",(0,i.kt)("inlineCode",{parentName:"p"},'require("configs.lsp.handlers")')," anywhere, you should move to using ",(0,i.kt)("inlineCode",{parentName:"p"},"astronvim.lsp"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We have replaced a couple of the terminal applications we have out of the box support for. We have replaced ",(0,i.kt)("inlineCode",{parentName:"p"},"NCDU")," with ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/dundee/gdu"},(0,i.kt)("inlineCode",{parentName:"a"},"gdu"))," and ",(0,i.kt)("inlineCode",{parentName:"p"},"htop")," with ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ClementTsang/bottom"},(0,i.kt)("inlineCode",{parentName:"a"},"bottom")),". This is to provide out of the box options that are cross platform supported. The following bindings have been updated:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Space + tu")," will now open ",(0,i.kt)("inlineCode",{parentName:"li"},"gdu")," instead of ",(0,i.kt)("inlineCode",{parentName:"li"},"ncdu")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Space + tt")," will now open ",(0,i.kt)("inlineCode",{parentName:"li"},"btm")," instead of ",(0,i.kt)("inlineCode",{parentName:"li"},"top"))))))}m.isMDXComponent=!0}}]);