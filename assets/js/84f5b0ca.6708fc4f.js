"use strict";(self.webpackChunkastro_vim=self.webpackChunkastro_vim||[]).push([[3164],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=a.createContext({}),p=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(o.Provider,{value:n},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(t),c=i,d=m["".concat(o,".").concat(c)]||m[c]||f[c]||r;return t?a.createElement(d,l(l({ref:n},u),{},{components:t})):a.createElement(d,l({ref:n},u))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=c;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[m]="string"==typeof e?e:i,l[1]=s;for(var p=2;p<r;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},7798:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=t(87462),i=(t(67294),t(3905));const r={id:"advanced_lsp",title:"Advanced LSP Setup"},l=void 0,s={unversionedId:"Recipes/advanced_lsp",id:"version-2.0.0/Recipes/advanced_lsp",title:"Advanced LSP Setup",description:"Disable auto-format on save",source:"@site/versioned_docs/version-2.0.0/Recipes/advanced_lsp.md",sourceDirName:"Recipes",slug:"/Recipes/advanced_lsp",permalink:"/2.0.0/Recipes/advanced_lsp",draft:!1,tags:[],version:"2.0.0",frontMatter:{id:"advanced_lsp",title:"Advanced LSP Setup"},sidebar:"docs",previous:{title:"Black Belt Example User Configs",permalink:"/2.0.0/Recipes/black_belt"},next:{title:"Dashboard Customizations",permalink:"/2.0.0/Recipes/alpha"}},o={},p=[{value:"Disable auto-format on save",id:"disable-auto-format-on-save",level:3},{value:"Controlling Formatting",id:"controlling-formatting",level:3},{value:"Disabling formatting for a filter function",id:"disabling-formatting-for-a-filter-function",level:4},{value:"Disabling formatting for a list of language servers",id:"disabling-formatting-for-a-list-of-language-servers",level:4},{value:"Using both filter function and disabled list",id:"using-both-filter-function-and-disabled-list",level:4},{value:"Configure other formatting options",id:"configure-other-formatting-options",level:4},{value:"LSP Setup Without Installer",id:"lsp-setup-without-installer",level:3},{value:"LSP Specific Plugins",id:"lsp-specific-plugins",level:3}],u={toc:p};function m(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"disable-auto-format-on-save"},"Disable auto-format on save"),(0,i.kt)("p",null,"AstroNvim has made formatting on save part of the default functionality out of the box. If you don't want your code to get auto formatted on save, you can delete the autocommand group by overriding your ",(0,i.kt)("inlineCode",{parentName:"p"},"on_attach")," function in your ",(0,i.kt)("inlineCode",{parentName:"p"},"lsp")," table. Here is a minimal ",(0,i.kt)("inlineCode",{parentName:"p"},"user/init.lua")," file that disables the formatting on save:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  lsp = {\n    on_attach = function(client, bufnr)\n      if client.server_capabilities.documentFormattingProvider then\n        vim.api.nvim_del_augroup_by_name "auto_format"\n      end\n    end,\n  },\n}\n')),(0,i.kt)("h3",{id:"controlling-formatting"},"Controlling Formatting"),(0,i.kt)("p",null,"Since Neovim v0.8 there have been improvements to how language servers are used for formatting files. Previously Neovim could only use a single language server to format files at a time and would prompt on each format if multiple were available. This led to users disabling formatting capabilities for different language servers and losing that functionality all together for convenience. Now you are able to format with many formatters at the same time and filter them with a function. To empower this, AstroNvim has a configuration option for controlling what formatters are used. This can be done either with a filter function or a list of disabled clients. Here are a couple example ",(0,i.kt)("inlineCode",{parentName:"p"},"user/init.lua")," contents that demonstrate each possibility."),(0,i.kt)("h4",{id:"disabling-formatting-for-a-filter-function"},"Disabling formatting for a filter function"),(0,i.kt)("p",null,"using the ",(0,i.kt)("inlineCode",{parentName:"p"},"filter")," option you can supply filter function to be run on each client that has formatting capabilities and if it returns ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," then it will be used for formatting and if it returns ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," then it will not be used. This applies to whenever you format your code either on save, with ",(0,i.kt)("inlineCode",{parentName:"p"},"<leader>lf"),", or with ",(0,i.kt)("inlineCode",{parentName:"p"},":Format"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  lsp = {\n    formatting = {\n      filter = function(client)\n        -- disable formatting for sumneko_lua\n        if client.name == "sumneko_lua" then\n          return false\n        end\n\n        -- only enable null-ls for javascript files\n        if vim.bo.filetype == "javascript" then\n          return client.name == "null-ls"\n        end\n\n        -- enable all other clients\n        return true\n      end\n    },\n  },\n}\n')),(0,i.kt)("h4",{id:"disabling-formatting-for-a-list-of-language-servers"},"Disabling formatting for a list of language servers"),(0,i.kt)("p",null,"using the ",(0,i.kt)("inlineCode",{parentName:"p"},"disabled")," option you can supply an array like list of language server client names and those clients will be disabled with you format your code either on save, with ",(0,i.kt)("inlineCode",{parentName:"p"},"<leader>lf"),", or with ",(0,i.kt)("inlineCode",{parentName:"p"},":Format"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  lsp = {\n    formatting = {\n      disabled = {\n        "sumneko_lua",\n        "rust_analyzer",\n      },\n    },\n  },\n}\n')),(0,i.kt)("h4",{id:"using-both-filter-function-and-disabled-list"},"Using both filter function and disabled list"),(0,i.kt)("p",null,"When using the options together, a client listed in the ",(0,i.kt)("inlineCode",{parentName:"p"},"disabled")," list will always be disabled and then all other clients will then be passed into the ",(0,i.kt)("inlineCode",{parentName:"p"},"filter")," function. For example, we can simplify our previous ",(0,i.kt)("inlineCode",{parentName:"p"},"filter")," function by just disabling the ",(0,i.kt)("inlineCode",{parentName:"p"},"sumneko_lua")," client in the ",(0,i.kt)("inlineCode",{parentName:"p"},"disabled")," table:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  lsp = {\n    formatting = {\n      disabled = { "sumneko_lua" },\n      filter = function(client)\n        -- only enable null-ls for javascript files\n        if vim.bo.filetype == "javascript" then\n          return client.name == "null-ls"\n        end\n\n        -- enable all other clients\n        return true\n      end,\n    },\n  },\n}\n')),(0,i.kt)("h4",{id:"configure-other-formatting-options"},"Configure other formatting options"),(0,i.kt)("p",null,"We have also provided an option in the ",(0,i.kt)("inlineCode",{parentName:"p"},"lsp.formatting")," table for easily enabling and disabling automatic formatting on save with ",(0,i.kt)("inlineCode",{parentName:"p"},"lsp.formatting.format_on_save"),"."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"lsp.formatting")," option also allows you to specify other parameters for the ",(0,i.kt)("inlineCode",{parentName:"p"},"vim.lsp.buf.format()")," call. Any of the other formatting options are allowed to be used here to be used as the default options. This means being able to easily adjust the default ",(0,i.kt)("inlineCode",{parentName:"p"},"timeout_ms")," for formatting in AstroNvim or making asynchronous formatting the default. For example you can do the following to increase the formatting timeout along with adjust the filtering:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  lsp = {\n    formatting = {\n      format_on_save = true, -- enable or disable automatic formatting on save\n      timeout_ms = 3200, -- adjust the timeout_ms variable for formatting\n      disabled = { "sumneko_lua" },\n      filter = function(client)\n        -- only enable null-ls for javascript files\n        if vim.bo.filetype == "javascript" then\n          return client.name == "null-ls"\n        end\n\n        -- enable all other clients\n        return true\n      end,\n    },\n  },\n}\n')),(0,i.kt)("h3",{id:"lsp-setup-without-installer"},"LSP Setup Without Installer"),(0,i.kt)("p",null,"AstroNvim comes with ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/williamboman/mason-lspconfig.nvim"},"mason-lspconfig")," as an easy interface for setting up and installing language servers, but this might not be adequate for all users. The LSP installer doesn't support all of the language servers that Neovim's LSP config supports and some users may already have the language servers installed on their machine and don't want to reinstall it separately. In these cases we have added an easy interface for setting up these servers. The following is a minimal ",(0,i.kt)("inlineCode",{parentName:"p"},"user/init.lua")," file that simply sets up ",(0,i.kt)("inlineCode",{parentName:"p"},"pyright")," language server for a user with ",(0,i.kt)("inlineCode",{parentName:"p"},"pyright")," already available on their system:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  lsp = {\n    servers = {\n      "pyright",\n    },\n  },\n}\n')),(0,i.kt)("p",null,"If the user wants to configure server specific settings and configurations then they can do this with the ",(0,i.kt)("inlineCode",{parentName:"p"},"lsp.server-settings")," table as well. For example if the user wants to use ",(0,i.kt)("inlineCode",{parentName:"p"},"pyright")," that is already available on their system and disable the single file support then can do the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  lsp = {\n    servers = {\n      "pyright",\n    },\n    ["server-settings"] = {\n      pyright = {\n        single_filesupport = false,\n      },\n    },\n  },\n}\n')),(0,i.kt)("h3",{id:"lsp-specific-plugins"},"LSP Specific Plugins"),(0,i.kt)("p",null,"There are some plugins available for doing advanced setup of language servers that require the user to not use the ",(0,i.kt)("inlineCode",{parentName:"p"},"lspconfig")," setup call and instead use their own plugin setup for handling this. AstroNvim provides a nice way to do this while still using ",(0,i.kt)("inlineCode",{parentName:"p"},"mason-lspconfig")," for installing the language servers. You can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"lsp.skip_setup")," table for specifying which language servers to guarantee AstroNvim will not automatically call the ",(0,i.kt)("inlineCode",{parentName:"p"},"lspconfig")," setup for. We also provide a helper function for getting the AstroNvim default server configuration like our built in ",(0,i.kt)("inlineCode",{parentName:"p"},"capabilities"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"on_attach"),", as well as the user defined options in ",(0,i.kt)("inlineCode",{parentName:"p"},"lsp.server-settings"),". Here is a couple examples for some common LSP plugins:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/jose-elias-alvarez/typescript.nvim"},"typescript.nvim"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  lsp = {\n    skip_setup = { "tsserver" },\n  },\n  plugins = {\n    init = {\n      {\n        "jose-elias-alvarez/typescript.nvim",\n        after = "mason-lspconfig.nvim",\n        config = function()\n          require("typescript").setup {\n            server = astronvim.lsp.server_settings "tsserver",\n          }\n        end,\n      },\n    },\n    ["mason-lspconfig"] = {\n      ensure_installed = { "tsserver" },\n    },\n  },\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/p00f/clangd_extensions.nvim"},"clangd_extensions.nvim"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  lsp = {\n    skip_setup = { "clangd" },\n    ["server-settings"] = {\n      clangd = {\n        capabilities = {\n          offsetEncoding = "utf-8",\n        },\n      },\n    },\n  },\n  plugins = {\n    init = {\n      {\n        "p00f/clangd_extensions.nvim",\n        after = "mason-lspconfig.nvim", -- make sure to load after mason-lspconfig\n        config = function()\n          require("clangd_extensions").setup {\n            server = astronvim.lsp.server_settings "clangd",\n          }\n        end,\n      },\n    },\n    ["mason-lspconfig"] = {\n      ensure_installed = { "clangd" },\n    },\n  },\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/akinsho/flutter-tools.nvim"},"flutter-tools.nvim"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  lsp = {\n    skip_setup = { "dartls" }, -- skip lsp setup because flutter-tools will do it itself\n    ["server-settings"] = {\n      dartls = {\n        -- any changes you want to make to the LSP setup, for example\n        color = {\n          enabled = true,\n        },\n        settings = {\n          showTodos = true,\n          completeFunctionCalls = true,\n        },\n      },\n    },\n  },\n  plugins = {\n    init = {\n      {\n        "akinsho/flutter-tools.nvim",\n        requires = "nvim-lua/plenary.nvim",\n        after = "mason-lspconfig.nvim", -- make sure to load after mason-lspconfig\n        config = function()\n          require("flutter-tools").setup {\n            lsp = astronvim.lsp.server_settings "dartls", -- get the server settings and built in capabilities/on_attach\n          }\n        end,\n      },\n    },\n    ["mason-lspconfig"] = {\n      ensure_installed = { "dartls" }, -- install dartls\n    },\n  },\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/simrat39/rust-tools.nvim"},"rust-tools.nvim"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  lsp = {\n    skip_setup = { "rust_analyzer" }, -- skip lsp setup because rust-tools will do it itself\n  },\n  plugins = {\n    init = {\n      {\n        "simrat39/rust-tools.nvim",\n        after = "mason-lspconfig.nvim", -- make sure to load after mason-lspconfig\n        config = function()\n          require("rust-tools").setup {\n            server = astronvim.lsp.server_settings "rust_analyzer", -- get the server settings and built in capabilities/on_attach\n          }\n        end,\n      },\n    },\n    ["mason-lspconfig"] = {\n      ensure_installed = { "rust_analyzer" }, -- install rust_analyzer\n    },\n  },\n}\n')))}m.isMDXComponent=!0}}]);