"use strict";(self.webpackChunkastro_vim=self.webpackChunkastro_vim||[]).push([[258],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),p=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(o.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(t),m=a,g=c["".concat(o,".").concat(m)]||c[m]||d[m]||s;return t?r.createElement(g,i(i({ref:n},u),{},{components:t})):r.createElement(g,i({ref:n},u))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,i=new Array(s);i[0]=m;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<s;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},20875:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const s={id:"advanced_lsp",title:"Advanced LSP Setup"},i=void 0,l={unversionedId:"Recipes/advanced_lsp",id:"version-1.8.0/Recipes/advanced_lsp",title:"Advanced LSP Setup",description:"LSP Setup Without Installer",source:"@site/versioned_docs/version-1.8.0/Recipes/advanced_lsp.md",sourceDirName:"Recipes",slug:"/Recipes/advanced_lsp",permalink:"/1.8.0/Recipes/advanced_lsp",draft:!1,tags:[],version:"1.8.0",frontMatter:{id:"advanced_lsp",title:"Advanced LSP Setup"},sidebar:"docs",previous:{title:"Black Belt Example User Configs",permalink:"/1.8.0/Recipes/black_belt"},next:{title:"Dashboard Customizations",permalink:"/1.8.0/Recipes/alpha"}},o={},p=[{value:"LSP Setup Without Installer",id:"lsp-setup-without-installer",level:3},{value:"LSP Specific Plugins",id:"lsp-specific-plugins",level:3}],u={toc:p};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"lsp-setup-without-installer"},"LSP Setup Without Installer"),(0,a.kt)("p",null,"AstroNvim comes with ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/williamboman/mason-lspconfig.nvim"},"mason-lspconfig")," as an easy interface for setting up and installing language servers, but this might not be adequate for all users. The LSP installer doesn't support all of the language servers that Neovim's LSP config supports and some users may already have the language servers installed on their machine and don't want to reinstall it separately. In these cases we have added an easy interface for setting up these servers. The following is a minimal ",(0,a.kt)("inlineCode",{parentName:"p"},"user/init.lua")," file that simply sets up ",(0,a.kt)("inlineCode",{parentName:"p"},"pyright")," language server for a user with ",(0,a.kt)("inlineCode",{parentName:"p"},"pyright")," already available on their system:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  lsp = {\n    servers = {\n      "pyright",\n    },\n  },\n}\n')),(0,a.kt)("p",null,"If the user wants to configure server specific settings and configurations then they can do this with the ",(0,a.kt)("inlineCode",{parentName:"p"},"lsp.server-settings")," table as well. For example if the user wants to use ",(0,a.kt)("inlineCode",{parentName:"p"},"pyright")," that is already available on their system and disable the single file support then can do the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  lsp = {\n    servers = {\n      "pyright",\n    },\n    ["server-settings"] = {\n      pyright = {\n        single_filesupport = false,\n      },\n    },\n  },\n}\n')),(0,a.kt)("h3",{id:"lsp-specific-plugins"},"LSP Specific Plugins"),(0,a.kt)("p",null,"There are some plugins available for doing advanced setup of language servers that require the user to not use the ",(0,a.kt)("inlineCode",{parentName:"p"},"lspconfig")," setup call and instead use their own plugin setup for handling this. AstroNvim provides a nice way to do this while still using ",(0,a.kt)("inlineCode",{parentName:"p"},"mason-lspconfig")," for installing the language servers. You can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"lsp.skip_setup")," table for specifying which language servers to guarantee AstroNvim will not automatically call the ",(0,a.kt)("inlineCode",{parentName:"p"},"lspconfig")," setup for. We also provide a helper function for getting the AstroNvim default server configuration like our built in ",(0,a.kt)("inlineCode",{parentName:"p"},"capabilities"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"on_attach"),", as well as the user defined options in ",(0,a.kt)("inlineCode",{parentName:"p"},"lsp.server-settings"),". Here is a couple examples for some common LSP plugins:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/jose-elias-alvarez/typescript.nvim"},"typescript.nvim"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  lsp = {\n    skip_setup = { "tsserver" },\n  },\n  plugins = {\n    init = {\n      {\n        "jose-elias-alvarez/typescript.nvim",\n        after = "mason-lspconfig.nvim",\n        config = function()\n          require("typescript").setup {\n            server = astronvim.lsp.server_settings "tsserver",\n          }\n        end,\n      },\n    },\n    ["mason-lspconfig"] = {\n      ensure_installed = { "tsserver" },\n    },\n  },\n}\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/p00f/clangd_extensions.nvim"},"clangd_extensions.nvim"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  lsp = {\n    skip_setup = { "clangd" },\n    ["server-settings"] = {\n      clangd = {\n        capabilities = {\n          offsetEncoding = "utf-8",\n        },\n      },\n    },\n  },\n  plugins = {\n    init = {\n      {\n        "p00f/clangd_extensions.nvim",\n        after = "mason-lspconfig.nvim", -- make sure to load after mason-lspconfig\n        config = function()\n          require("clangd_extensions").setup {\n            server = astronvim.lsp.server_settings "clangd",\n          }\n        end,\n      },\n    },\n    ["mason-lspconfig"] = {\n      ensure_installed = { "clangd" },\n    },\n  },\n}\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/akinsho/flutter-tools.nvim"},"flutter-tools.nvim"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  lsp = {\n    skip_setup = { "dartls" }, -- skip lsp setup because flutter-tools will do it itself\n    ["server-settings"] = {\n      dartls = {\n        -- any changes you want to make to the LSP setup, for example\n        color = {\n          enabled = true,\n        },\n        settings = {\n          showTodos = true,\n          completeFunctionCalls = true,\n        },\n      },\n    },\n  },\n  plugins = {\n    init = {\n      {\n        "akinsho/flutter-tools.nvim",\n        requires = "nvim-lua/plenary.nvim",\n        after = "mason-lspconfig.nvim", -- make sure to load after mason-lspconfig\n        config = function()\n          require("flutter-tools").setup {\n            lsp = astronvim.lsp.server_settings "dartls", -- get the server settings and built in capabilities/on_attach\n          }\n        end,\n      },\n    },\n    ["mason-lspconfig"] = {\n      ensure_installed = { "dartls" }, -- install dartls\n    },\n  },\n}\n')))}c.isMDXComponent=!0}}]);