"use strict";(self.webpackChunkastro_vim=self.webpackChunkastro_vim||[]).push([[85950],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),u=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=u(e.components);return i.createElement(l.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),m=r,d=p["".concat(l,".").concat(m)]||p[m]||f[m]||o;return t?i.createElement(d,a(a({ref:n},c),{},{components:t})):i.createElement(d,a({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:r,a[1]=s;for(var u=2;u<o;u++)a[u]=t[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},31368:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var i=t(87462),r=(t(67294),t(3905));const o={id:"basic_configuration",title:"Basic Configuration"},a=void 0,s={unversionedId:"Configuration/basic_configuration",id:"version-1.8.0/Configuration/basic_configuration",title:"Basic Configuration",description:"Set Up User Configuration",source:"@site/versioned_docs/version-1.8.0/Configuration/basic_configuration.md",sourceDirName:"Configuration",slug:"/Configuration/basic_configuration",permalink:"/1.8.0/Configuration/basic_configuration",draft:!1,tags:[],version:"1.8.0",frontMatter:{id:"basic_configuration",title:"Basic Configuration"},sidebar:"docs",previous:{title:"Managing User Configuration",permalink:"/1.8.0/Configuration/manage_user_config"},next:{title:"Available User Options",permalink:"/1.8.0/Configuration/config_options"}},l={},u=[{value:"Set Up User Configuration",id:"set-up-user-configuration",level:2},{value:"Example User Configuration",id:"example-user-configuration",level:3}],c={toc:u},p="wrapper";function f(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"set-up-user-configuration"},"Set Up User Configuration"),(0,r.kt)("p",null,"To begin making custom user configurations you must create a ",(0,r.kt)("inlineCode",{parentName:"p"},"user/")," folder. The provided example can be created with (please note the trailing slashes after the directory names)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cp -r ~/.config/nvim/lua/user_example/ ~/.config/nvim/lua/user/\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you want to keep your user configuration completely separate from the cloned repository, you can also put this folder in ",(0,r.kt)("inlineCode",{parentName:"p"},"$XDG_CONFIG_HOME/astronvim/lua/user"),". AstroNvim adds the folder ",(0,r.kt)("inlineCode",{parentName:"p"},"$XDG_CONFIG_HOME/astronvim")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"runtimepath")," so any ",(0,r.kt)("inlineCode",{parentName:"p"},"vimscript")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"lua")," files in there can be sourced.")),(0,r.kt)("h3",{id:"example-user-configuration"},"Example User Configuration"),(0,r.kt)("p",null,"Below is the provided user configuration template found at ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.config/nvim/lua/user/init.lua")," after the ",(0,r.kt)("inlineCode",{parentName:"p"},"cp")," command above."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"For more details of the provided defaults for each plugin please refer to ",(0,r.kt)("a",{parentName:"p",href:"/configuration/plugin_defaults"},"Default Plugin Configurations")),(0,r.kt)("p",{parentName:"admonition"},"For an exhaustive list of all available options in the ",(0,r.kt)("inlineCode",{parentName:"p"},"user/init.lua")," file please refer to ",(0,r.kt)("a",{parentName:"p",href:"/configuration/config_options"},"Available User Options"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'local config = {\n\n  -- Configure AstroNvim updates\n  updater = {\n    remote = "origin", -- remote to use\n    channel = "nightly", -- "stable" or "nightly"\n    version = "latest", -- "latest", tag name, or regex search like "v1.*" to only do updates before v2 (STABLE ONLY)\n    branch = "main", -- branch name (NIGHTLY ONLY)\n    commit = nil, -- commit hash (NIGHTLY ONLY)\n    pin_plugins = true, -- true, false, or a string for a specific AstroNvim snapshot to use (true will only track the current version if channel is "stable")\n    skip_prompts = false, -- skip prompts about breaking changes\n    show_changelog = true, -- show the changelog after performing an update\n    -- remotes = { -- easily add new remotes to track\n    --   ["remote_name"] = "https://remote_url.come/repo.git", -- full remote url\n    --   ["remote2"] = "github_user/repo", -- GitHub user/repo shortcut,\n    --   ["remote3"] = "github_user", -- GitHub user assume AstroNvim fork\n    -- },\n  },\n\n  -- Set colorscheme\n  colorscheme = "default_theme",\n\n  -- set vim options here (vim.<first_key>.<second_key> =  value)\n  options = {\n    opt = {\n      relativenumber = true, -- sets vim.opt.relativenumber\n    },\n    g = {\n      mapleader = " ", -- sets vim.g.mapleader\n    },\n  },\n\n  -- Set dashboard header\n  header = {\n    " ",\n    " ",\n    " ",\n    " ",\n    " ",\n    " \u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2588\u2588   \u2588\u2588\u2588\u2588\u2588\u2588",\n    "\u2588\u2588   \u2588\u2588 \u2588\u2588         \u2588\u2588    \u2588\u2588   \u2588\u2588 \u2588\u2588    \u2588\u2588",\n    "\u2588\u2588\u2588\u2588\u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2588\u2588\u2588    \u2588\u2588    \u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588    \u2588\u2588",\n    "\u2588\u2588   \u2588\u2588      \u2588\u2588    \u2588\u2588    \u2588\u2588   \u2588\u2588 \u2588\u2588    \u2588\u2588",\n    "\u2588\u2588   \u2588\u2588 \u2588\u2588\u2588\u2588\u2588\u2588\u2588    \u2588\u2588    \u2588\u2588   \u2588\u2588  \u2588\u2588\u2588\u2588\u2588\u2588",\n    " ",\n    "    \u2588\u2588\u2588\u2001   \u2588\u2588\u2001\u2588\u2588\u2001   \u2588\u2588\u2001\u2588\u2588\u2001\u2588\u2588\u2588\u2001   \u2588\u2588\u2588",\n    "    \u2588\u2588\u2588\u2588\u2001  \u2588\u2588\u2001\u2588\u2588\u2001   \u2588\u2588\u2001\u2588\u2588\u2001\u2588\u2588\u2588\u2588\u2001 \u2588\u2588\u2588\u2588",\n    "    \u2588\u2588\u2001\u2588\u2588\u2001 \u2588\u2588\u2001\u2588\u2588\u2001   \u2588\u2588\u2001\u2588\u2588\u2001\u2588\u2588\u2001\u2588\u2588\u2588\u2588\u2001\u2588\u2588",\n    "    \u2588\u2588\u2001\u2001\u2588\u2588\u2001\u2588\u2588\u2001\u2001\u2588\u2588\u2001 \u2588\u2588\u2001\u2001\u2588\u2588\u2001\u2588\u2588\u2001\u2001\u2588\u2588\u2001\u2001\u2588\u2588",\n    "    \u2588\u2588\u2001 \u2001\u2588\u2588\u2588\u2588\u2001 \u2001\u2588\u2588\u2588\u2588\u2001\u2001 \u2588\u2588\u2001\u2588\u2588\u2001 \u2001\u2001\u2001 \u2588\u2588",\n    " ",\n    " ",\n    " ",\n  },\n\n  -- Default theme configuration\n  default_theme = {\n    diagnostics_style = "none",\n    -- Modify the color table\n    colors = {\n      fg = "#abb2bf",\n    },\n    -- Modify the highlight groups\n    highlights = function(highlights)\n      local C = require "default_theme.colors"\n\n      highlights.Normal = { fg = C.fg, bg = C.bg }\n      return highlights\n    end,\n    -- enable or disable highlighting for supported plugins\n    plugins = {\n      aerial = true,\n      beacon = false,\n      bufferline = true,\n      dashboard = true,\n      highlighturl = true,\n      hop = false,\n      indent_blankline = true,\n      lightspeed = false,\n      ["neo-tree"] = true,\n      notify = true,\n      ["nvim-tree"] = false,\n      ["nvim-web-devicons"] = true,\n      rainbow = true,\n      symbols_outline = false,\n      telescope = true,\n      vimwiki = false,\n      ["which-key"] = true,\n    },\n  },\n\n  -- Disable AstroNvim ui features\n  ui = {\n    nui_input = true,\n    telescope_select = true,\n  },\n\n  -- Configure plugins\n  plugins = {\n    -- Add plugins, the packer syntax without the "use"\n    init = {\n      -- ["goolord/alpha-nvim"] = { disable = true }, -- New method for disbaling a default plugin\n      -- { "andweeb/presence.nvim" },\n      -- {\n      --   "ray-x/lsp_signature.nvim",\n      --   event = "BufRead",\n      --   config = function()\n      --     require("lsp_signature").setup()\n      --   end,\n      -- },\n    },\n    -- All other entries override the setup() call for default plugins\n    -- override require("null-ls").setup() options\n    ["null-ls"] = function(config)\n      local null_ls = require "null-ls"\n      -- Check supported formatters and linters\n      -- https://github.com/jose-elias-alvarez/null-ls.nvim/tree/main/lua/null-ls/builtins/formatting\n      -- https://github.com/jose-elias-alvarez/null-ls.nvim/tree/main/lua/null-ls/builtins/diagnostics\n      config.sources = {\n        -- Set a formatter\n        null_ls.builtins.formatting.rufo,\n        -- Set a linter\n        null_ls.builtins.diagnostics.rubocop,\n      }\n      -- set up null-ls\'s on_attach function\n      config.on_attach = function(client)\n        -- NOTE: You can remove this on attach function to disable format on save\n        if client.resolved_capabilities.document_formatting then\n          vim.api.nvim_create_autocmd("BufWritePre", {\n            desc = "Auto format before save",\n            pattern = "<buffer>",\n            callback = vim.lsp.buf.formatting_sync,\n          })\n        end\n      end\n      return config -- return final config table\n    end,\n    -- override require("nvim-treesitter.configs").setup() options\n    treesitter = {\n    --   ensure_installed = { "lua" },\n    },\n    -- override require("packer").setup() configuration options\n    packer = {\n      compile_path = vim.fn.stdpath "config" .. "/lua/packer_compiled.lua",\n    },\n  },\n\n  -- Add paths for including more VS Code style snippets in luasnip\n  luasnip = {\n    vscode_snippet_paths = {},\n  },\n\n  -- Modify which-key registration\n  ["which-key"] = {\n    -- Add bindings\n    register_mappings = {\n      -- first key is the mode, n == normal mode\n      n = {\n        -- second key is the prefix, <leader> prefixes\n        ["<leader>"] = {\n          -- which-key registration table for normal mode, leader prefix\n          -- ["N"] = { "<cmd>tabnew<cr>", "New Buffer" },\n        },\n      },\n    },\n  },\n\n  -- CMP Source Priorities\n  -- modify here the priorities of default cmp sources\n  -- higher value == higher priority\n  -- The value can also be set to a boolean for disabling default sources:\n  -- false == disabled\n  -- true == 1000\n  cmp = {\n    source_priority = {\n      nvim_lsp = 1000,\n      luasnip = 750,\n      buffer = 500,\n      path = 250,\n    },\n  },\n\n  -- Extend LSP configuration\n  lsp = {\n    -- enable servers that you already have installed without lsp-installer\n    servers = {\n      -- "pyright"\n    },\n    -- easily add or disable built in mappings added during LSP attaching\n    mappings = {\n      n = {\n        -- ["<leader>lf"] = false -- disable formatting keymap\n      },\n    },\n    -- add to the server on_attach function\n    -- on_attach = function(client, bufnr)\n    -- if client.name == "sqls" then\n    --   require("sqls").on_attach(client, bufnr)\n    -- end\n    -- end,\n\n    -- override the lsp installer server-registration function\n    -- server_registration = function(server, opts)\n    --   require("lspconfig")[server].setup(opts)\n    -- end,\n\n    -- Add overrides for LSP server settings, the keys are the name of the server\n    -- ["server-settings"] = {\n      -- example for addings schemas to yamlls\n      -- yamlls = {\n      --   settings = {\n      --     yaml = {\n      --       schemas = {\n      --         ["http://json.schemastore.org/github-workflow"] = ".github/workflows/*.{yml,yaml}",\n      --         ["http://json.schemastore.org/github-action"] = ".github/action.{yml,yaml}",\n      --         ["http://json.schemastore.org/ansible-stable-2.9"] = "roles/tasks/*.{yml,yaml}",\n      --       },\n      --     },\n      --   },\n      -- },\n    -- },\n  },\n\n  -- Diagnostics configuration (for vim.diagnostics.config())\n  diagnostics = {\n    virtual_text = true,\n    underline = true,\n  },\n\n  mappings = {\n    -- first key is the mode\n    n = {\n      -- second key is the lefthand side of the map\n      ["<C-s>"] = { ":w!<cr>", desc = "Save File" },\n    },\n    t = {\n      -- setting a mapping to false will disable it\n      -- ["<esc>"] = false,\n    },\n  },\n\n  -- This function is run last\n  -- good place to configuring augroups/autocommands and custom filetypes\n  polish = function()\n    -- Set autocommands\n    vim.api.nvim_create_augroup("packer_conf", {})\n    vim.api.nvim_create_autocmd("BufWritePost", {\n      desc = "Sync packer after modifying plugins.lua",\n      group = "packer_conf",\n      pattern = "plugins.lua",\n      command = "source <afile> | PackerSync",\n    })\n\n    -- Set up custom filetypes\n    -- vim.filetype.add {\n    --   extension = {\n    --     foo = "fooscript",\n    --   },\n    --   filename = {\n    --     ["Foofile"] = "fooscript",\n    --   },\n    --   pattern = {\n    --     ["~/%.config/foo/.*"] = "fooscript",\n    --   },\n    -- }\n  end,\n}\n\nreturn config\n')))}f.isMDXComponent=!0}}]);