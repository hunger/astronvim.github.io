"use strict";(self.webpackChunkastro_vim=self.webpackChunkastro_vim||[]).push([[4993],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>s});var a=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var o=a.createContext({}),p=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(o.Provider,{value:e},t.children)},k="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},N=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,i=t.originalType,o=t.parentName,m=d(t,["components","mdxType","originalType","parentName"]),k=p(n),N=l,s=k["".concat(o,".").concat(N)]||k[N]||u[N]||i;return n?a.createElement(s,r(r({ref:e},m),{},{components:n})):a.createElement(s,r({ref:e},m))}));function s(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var i=n.length,r=new Array(i);r[0]=N;var d={};for(var o in e)hasOwnProperty.call(e,o)&&(d[o]=e[o]);d.originalType=t,d[k]="string"==typeof t?t:l,r[1]=d;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},18972:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>k,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var a=n(87462),l=(n(67294),n(3905));const i={id:"config_options",title:"Available User Options"},r=void 0,d={unversionedId:"Configuration/config_options",id:"Configuration/config_options",title:"Available User Options",description:"| init.lua table key              | Expected Format                    | Use Case                                                                                                                   | Alternate File Path (in user/ folder) |",source:"@site/docs/Configuration/config_options.md",sourceDirName:"Configuration",slug:"/Configuration/config_options",permalink:"/nightly/Configuration/config_options",draft:!1,tags:[],version:"current",frontMatter:{id:"config_options",title:"Available User Options"},sidebar:"docs",previous:{title:"Configuration Mechanism",permalink:"/nightly/Configuration/config_mechanism"},next:{title:"Override Formats",permalink:"/nightly/Configuration/override_formats"}},o={},p=[],m={toc:p};function k(t){let{components:e,...n}=t;return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"init.lua")," table key"),(0,l.kt)("th",{parentName:"tr",align:null},"Expected Format"),(0,l.kt)("th",{parentName:"tr",align:null},"Use Case"),(0,l.kt)("th",{parentName:"tr",align:null},"Alternate File Path (in ",(0,l.kt)("inlineCode",{parentName:"th"},"user/")," folder)"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"updater")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"The configuration for the AstroNvim updater"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"updater.lua"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"colorscheme")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The colorscheme to be set"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"colorscheme.lua"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"highlights.init")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Custom highlight groups for the all colorschemes"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"highlights/init.lua"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"highlights.<colorscheme>")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Custom highlight groups for the specified theme, replace ",(0,l.kt)("inlineCode",{parentName:"td"},"<colorscheme>")," with colorscheme name"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"highlights/<colorscheme>.lua"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"icons")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Customize the icons used in the user interface"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"icons.lua"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"text_icons")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Customize the text based icons used in the user interface when ",(0,l.kt)("inlineCode",{parentName:"td"},"vim.g.icons_enabled = false")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"text_icons.lua"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"options")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"The ",(0,l.kt)("inlineCode",{parentName:"td"},"vim.x.y")," variables to be set"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"options.lua"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"header")),(0,l.kt)("td",{parentName:"tr",align:null},"table of ",(0,l.kt)("inlineCode",{parentName:"td"},"string"),"s"),(0,l.kt)("td",{parentName:"tr",align:null},"The header to be displayed on the Dashboard"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"header.lua"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ui")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Toggle custom UI elements (",(0,l.kt)("inlineCode",{parentName:"td"},"nui_input")," controls NUI for inputs, ",(0,l.kt)("inlineCode",{parentName:"td"},"telescope_select")," controls Telescope for selections)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ui.lua"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"polish")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"function()...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Lua function to be run last. Good place for setting vim options and adding mappings"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"polish.lua"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"default_theme.diagnostics_style")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"Set highlight style options for virtual text"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"default_theme/diagnostics_style.lua"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"default_theme.colors")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the default theme's color table"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"default_theme/colors.lua"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"default_theme.highlights")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the default theme's highlight groups"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"default_theme/highlights.lua"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"default_theme.plugins")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the default theme's enabled plugin highlight groups"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"default_theme/plugins.lua"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"diagnostics")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the default vim diagnostics options"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"diagnostics.lua"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"luasnip")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify available ",(0,l.kt)("inlineCode",{parentName:"td"},"luasnip")," options"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"luasnip.lua"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugins.init")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the default plugins table such as adding new plugins"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugins/init.lua"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugins.aerial")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the ",(0,l.kt)("inlineCode",{parentName:"td"},"aerial.setup()")," options"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugins/aerial.lua"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugins.autopairs")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the ",(0,l.kt)("inlineCode",{parentName:"td"},"autopairs.setup()")," options"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugins/autopairs.lua"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugins.better_escape")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the ",(0,l.kt)("inlineCode",{parentName:"td"},"better_escape.setup()")," options"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugins/better_escape.lua"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugins.bufferline")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the ",(0,l.kt)("inlineCode",{parentName:"td"},"bufferline.setup()")," options"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugins/bufferline.lua"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugins.cmp")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the ",(0,l.kt)("inlineCode",{parentName:"td"},"cmp.setup()")," options"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugins/cmp.lua"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugins.colorizer")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the ",(0,l.kt)("inlineCode",{parentName:"td"},"colorizer.setup()")," options"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugins/colorizer.lua"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugins.Comment")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the ",(0,l.kt)("inlineCode",{parentName:"td"},"Comment.setup()")," options"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugins/Comment.lua"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugins.dapui")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the ",(0,l.kt)("inlineCode",{parentName:"td"},"dapui.setup()")," options"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugins/dapui.lua"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugins.gitsigns")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the ",(0,l.kt)("inlineCode",{parentName:"td"},"gitsigns.setup()")," options"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugins/gitsigns.lua"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugins.nvim-web-devicons")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the ",(0,l.kt)("inlineCode",{parentName:"td"},"nvim-web-devicons.setup()")," options"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugins/nvim-web-devicons.lua"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugins.indent_blankline")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the ",(0,l.kt)("inlineCode",{parentName:"td"},"indent_blankline.setup()")," options"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugins/indent_blankline.lua"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugins.indent-o-matic")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the ",(0,l.kt)("inlineCode",{parentName:"td"},"indent-o-matic.setup()")," options"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugins/indent-o-matic.lua"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugins.heirline")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the ",(0,l.kt)("inlineCode",{parentName:"td"},"heirline.setup()")," options"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugins/heirline.lua"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugins.lspkind")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the ",(0,l.kt)("inlineCode",{parentName:"td"},"lspkind.init()")," options"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugins/lspkind.lua"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugins.mason")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the ",(0,l.kt)("inlineCode",{parentName:"td"},"mason.setup()")," options"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugins/mason.lua"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugins.mason-lspconfig")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the ",(0,l.kt)("inlineCode",{parentName:"td"},"mason-lspconfig.setup()")," options"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugins/mason-lspconfig.lua"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugins.mason-null-ls")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the ",(0,l.kt)("inlineCode",{parentName:"td"},"mason-null-ls.setup()")," options"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugins/mason-null-ls.lua"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugins.mason-nvim-dap")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the ",(0,l.kt)("inlineCode",{parentName:"td"},"mason-nvim-dap.setup()")," options"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugins/mason-nvim-dap.lua"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugins.neo-tree")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the ",(0,l.kt)("inlineCode",{parentName:"td"},"neo-tree.setup()")," options"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugins/neo-tree.lua"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugins.null-ls")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the ",(0,l.kt)("inlineCode",{parentName:"td"},"null-ls.setup()")," options"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugins/null-ls.lua"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugins.telescope")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the ",(0,l.kt)("inlineCode",{parentName:"td"},"telescope.setup()")," options"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugins/telescope.lua"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugins.toggleterm")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the ",(0,l.kt)("inlineCode",{parentName:"td"},"toggleterm.setup()")," options"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugins/toggleterm.lua"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugins.treesitter")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the ",(0,l.kt)("inlineCode",{parentName:"td"},"treesitter.setup()")," options"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugins/treesitter.lua"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugins.which-key")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the ",(0,l.kt)("inlineCode",{parentName:"td"},"which-key.setup()")," options"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugins/which-key.lua"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugins.window-picker")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the ",(0,l.kt)("inlineCode",{parentName:"td"},"window-picker.setup()")," options"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugins/window-picker.lua"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"which-key.register")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the default which-key bindings"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"which-key/register.lua"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"which-key.show")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"function(orig_show)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the default ",(0,l.kt)("inlineCode",{parentName:"td"},"which-key.show()")," method. Must return ",(0,l.kt)("inlineCode",{parentName:"td"},"function(key, opts)...end")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"which-key/show.lua"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"cmp.source_priority")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the default cmp sources and their priorities"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"cmp/source_priority.lua"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"cmp.setup")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the extended ",(0,l.kt)("inlineCode",{parentName:"td"},"cmp")," setup calls"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"cmp/setup.lua"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"heirline.colors")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the section colors used by Heirline"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"heirline/colors.lua"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"heirline.separators")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the section separators used by Heirline"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"heirline/separators.lua"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"dap.adapters")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Table of DAP adapters to be set up"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"dap/adapters.lua"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"dap.configurations")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Table of DAP configurations to be set up"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"dap/configurations.lua"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lsp.servers")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"List of language servers to be set up that are already installed without ",(0,l.kt)("inlineCode",{parentName:"td"},"mason")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lsp/servers.lua"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lsp.skip_setup")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"List of language servers to guarantee the lspconfig setup is never called on automatically"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lsp/skip_setup.lua"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lsp.server-settings.<lsp>")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the LSP server settings, replace ",(0,l.kt)("inlineCode",{parentName:"td"},"<lsp>")," with server name"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lsp/server-settings/<lsp>.lua"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lsp.on_attach")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"function(client, bufnr)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the default LSP ",(0,l.kt)("inlineCode",{parentName:"td"},"on_attach")," function"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lsp/on_attach.lua"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lsp.capabilities")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the default LSP ",(0,l.kt)("inlineCode",{parentName:"td"},"capabilities")," table"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lsp/capabilities.lua"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lsp.flags")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the default LSP ",(0,l.kt)("inlineCode",{parentName:"td"},"flags")," table"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lsp/flags.lua"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lsp.server_registration")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"function(server, opts)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the ",(0,l.kt)("inlineCode",{parentName:"td"},"lsp-installer")," ",(0,l.kt)("inlineCode",{parentName:"td"},"server_registration")," function"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lsp/server_registration.lua"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lsp.formatting")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the formatting options described in the ",(0,l.kt)("a",{parentName:"td",href:"/nightly/Recipes/advanced_lsp#controlling-formatting"},"LSP Configuration Page")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lsp/formatting.lua"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"mason-lspconfig.setup_handlers")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the setup handlers for ",(0,l.kt)("inlineCode",{parentName:"td"},"mason-lspconfig")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"mason-lspconfig/setup_handlers.lua"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"mason-null-ls.setup_handlers")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the setup handlers for ",(0,l.kt)("inlineCode",{parentName:"td"},"mason-null-ls")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"mason-null-ls/setup_handlers.lua"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"mason-nvim-dap.setup_handlers")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"function(table)...end")),(0,l.kt)("td",{parentName:"tr",align:null},"Modify the setup handlers for ",(0,l.kt)("inlineCode",{parentName:"td"},"mason-nvim-dap")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"mason-nvim-dap/setup_handlers.lua"))))))}k.isMDXComponent=!0}}]);