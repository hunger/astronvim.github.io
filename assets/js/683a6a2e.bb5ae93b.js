"use strict";(self.webpackChunkastro_vim=self.webpackChunkastro_vim||[]).push([[44757],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=i.createContext({}),c=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=c(e.components);return i.createElement(s.Provider,{value:n},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),l=c(t),d=r,h=l["".concat(s,".").concat(d)]||l[d]||m[d]||o;return t?i.createElement(h,p(p({ref:n},u),{},{components:t})):i.createElement(h,p({ref:n},u))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,p=new Array(o);p[0]=d;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a[l]="string"==typeof e?e:r,p[1]=a;for(var c=2;c<o;c++)p[c]=t[c];return i.createElement.apply(null,p)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},37621:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=t(87462),r=(t(67294),t(3905));const o={id:"cmp",title:"Customize cmp Completion"},p=void 0,a={unversionedId:"Recipes/cmp",id:"version-3.0.0/Recipes/cmp",title:"Customize cmp Completion",description:"Customize Keybindings",source:"@site/versioned_docs/version-3.0.0/Recipes/cmp.md",sourceDirName:"Recipes",slug:"/Recipes/cmp",permalink:"/3.0.0/Recipes/cmp",draft:!1,tags:[],version:"3.0.0",frontMatter:{id:"cmp",title:"Customize cmp Completion"},sidebar:"docs",previous:{title:"Disable cmdheight=0",permalink:"/3.0.0/Recipes/cmdheight"},next:{title:"Custom Colorscheme",permalink:"/3.0.0/Recipes/colorscheme"}},s={},c=[{value:"Customize Keybindings",id:"customize-keybindings",level:3},{value:"Customize Source Priority",id:"customize-source-priority",level:3},{value:"Modify Existing Source Options",id:"modify-existing-source-options",level:3},{value:"Add More Sources",id:"add-more-sources",level:3},{value:"Advanced Setup For Filetype and Cmdline",id:"advanced-setup-for-filetype-and-cmdline",level:3}],u={toc:c},l="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(l,(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"customize-keybindings"},"Customize Keybindings"),(0,r.kt)("p",null,"Some overrides require access to the plugin itself that you are overriding. This comes up a lot in things adding custom mappings to ",(0,r.kt)("inlineCode",{parentName:"p"},"cmp"),". This can be achieved with the following in your ",(0,r.kt)("inlineCode",{parentName:"p"},"user/init.lua"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  plugins = {\n    { -- override nvim-cmp plugin\n      "hrsh7th/nvim-cmp",\n      -- override the options table that is used in the `require("cmp").setup()` call\n      opts = function(_, opts)\n        -- opts parameter is the default options table\n        -- the function is lazy loaded so cmp is able to be required\n        local cmp = require "cmp"\n        -- modify the mapping part of the table\n        opts.mapping["<C-x>"] = cmp.mapping.select_next_item()\n\n        -- return the new table to be used\n        return opts\n      end,\n    },\n  },\n}\n')),(0,r.kt)("h3",{id:"customize-source-priority"},"Customize Source Priority"),(0,r.kt)("p",null,"Similarly to customizing mappings, you can customize and configure your ",(0,r.kt)("inlineCode",{parentName:"p"},"cmp")," sources as well:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  plugins = {\n    { -- override nvim-autopairs plugin\n      "hrsh7th/nvim-cmp",\n      -- override the options table that is used in the `require("cmp").setup()` call\n      opts = function(_, opts)\n        -- opts parameter is the default options table\n        -- the function is lazy loaded so cmp is able to be required\n        local cmp = require "cmp"\n        -- modify the sources part of the options table\n        opts.sources = cmp.config.sources {\n          { name = "nvim_lsp", priority = 1000 },\n          { name = "luasnip", priority = 750 },\n          { name = "buffer", priority = 500 },\n          { name = "path", priority = 250 },\n        }\n\n        -- return the new table to be used\n        return opts\n      end,\n    },\n  },\n}\n')),(0,r.kt)("h3",{id:"modify-existing-source-options"},"Modify Existing Source Options"),(0,r.kt)("p",null,"You can use this ",(0,r.kt)("inlineCode",{parentName:"p"},"cmp")," override to also customize the options of the sources:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  plugins = {\n    { -- override nvim-autopairs plugin\n      "hrsh7th/nvim-cmp",\n      -- override the options table that is used in the `require("cmp").setup()` call\n      opts = function(_, opts)\n        -- opts parameter is the default options table\n        -- the function is lazy loaded so cmp is able to be required\n        local cmp = require "cmp"\n        -- modify the sources part of the options table\n        opts.sources = cmp.config.sources {\n          { name = "nvim_lsp", priority = 1000 },\n          { name = "luasnip", priority = 750 },\n          {\n            name = "buffer",\n            priority = 500,\n            option = {\n              get_bufnrs = function() return vim.api.nvim_list_bufs() end,\n            },\n          },\n          { name = "path", priority = 250 },\n        }\n\n        -- return the new table to be used\n        return opts\n      end,\n    },\n  },\n}\n')),(0,r.kt)("h3",{id:"add-more-sources"},"Add More Sources"),(0,r.kt)("p",null,"To add more sources than the default, you can add other ",(0,r.kt)("inlineCode",{parentName:"p"},"cmp")," source plugins as dependencies, and then add the new source in the ",(0,r.kt)("inlineCode",{parentName:"p"},"opts"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  plugins = {\n    { -- override nvim-autopairs plugin\n      "hrsh7th/nvim-cmp",\n      dependencies = {\n        "hrsh7th/cmp-emoji", -- add cmp source as dependency of cmp\n      },\n      -- override the options table that is used in the `require("cmp").setup()` call\n      opts = function(_, opts)\n        -- opts parameter is the default options table\n        -- the function is lazy loaded so cmp is able to be required\n        local cmp = require "cmp"\n        -- modify the sources part of the options table\n        opts.sources = cmp.config.sources {\n          { name = "nvim_lsp", priority = 1000 },\n          { name = "luasnip", priority = 750 },\n          { name = "buffer", priority = 500 },\n          { name = "path", priority = 250 },\n          { name = "emoji", priority = 700 }, -- add new source\n        }\n\n        -- return the new table to be used\n        return opts\n      end,\n    },\n  },\n}\n')),(0,r.kt)("h3",{id:"advanced-setup-for-filetype-and-cmdline"},"Advanced Setup For Filetype and Cmdline"),(0,r.kt)("p",null,"You can also use the ",(0,r.kt)("inlineCode",{parentName:"p"},"config")," function and the provided default configuration function for each plugin to extend the configuration and setup of ",(0,r.kt)("inlineCode",{parentName:"p"},"cmp")," like adding ",(0,r.kt)("inlineCode",{parentName:"p"},"cmp-cmdline"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  plugins = {\n    {\n      { -- override nvim-autopairs plugin\n        "hrsh7th/nvim-cmp",\n        keys = { ":", "/", "?" }, -- lazy load cmp on more keys along with insert mode\n        dependencies = {\n          "hrsh7th/cmp-cmdline", -- add cmp-cmdline as dependency of cmp\n        },\n        config = function(plugin, opts)\n          local cmp = require "cmp"\n          -- run cmp setup\n          cmp.setup(opts)\n\n          -- configure `cmp-cmdline` as described in their repo: https://github.com/hrsh7th/cmp-cmdline#setup\n          cmp.setup.cmdline("/", {\n            mapping = cmp.mapping.preset.cmdline(),\n            sources = {\n              { name = "buffer" },\n            },\n          })\n          cmp.setup.cmdline(":", {\n            mapping = cmp.mapping.preset.cmdline(),\n            sources = cmp.config.sources({\n              { name = "path" },\n            }, {\n              {\n                name = "cmdline",\n                option = {\n                  ignore_cmds = { "Man", "!" },\n                },\n              },\n            }),\n          })\n        end,\n      },\n    },\n  },\n}\n')))}m.isMDXComponent=!0}}]);