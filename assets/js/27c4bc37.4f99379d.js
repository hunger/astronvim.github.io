"use strict";(self.webpackChunkastro_vim=self.webpackChunkastro_vim||[]).push([[9559],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=i.createContext({}),u=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return i.createElement(l.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),m=a,d=p["".concat(l,".").concat(m)]||p[m]||f[m]||r;return t?i.createElement(d,o(o({ref:n},c),{},{components:t})):i.createElement(d,o({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<r;u++)o[u]=t[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},27955:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var i=t(87462),a=(t(67294),t(3905));const r={id:"basic_configuration",title:"Basic Configuration"},o=void 0,s={unversionedId:"Configuration/basic_configuration",id:"version-2.1.0/Configuration/basic_configuration",title:"Basic Configuration",description:"Set Up User Configuration",source:"@site/versioned_docs/version-2.1.0/Configuration/basic_configuration.md",sourceDirName:"Configuration",slug:"/Configuration/basic_configuration",permalink:"/2.1.0/Configuration/basic_configuration",draft:!1,tags:[],version:"2.1.0",frontMatter:{id:"basic_configuration",title:"Basic Configuration"},sidebar:"docs",previous:{title:"Managing User Configuration",permalink:"/2.1.0/Configuration/manage_user_config"},next:{title:"Configuration Mechanism",permalink:"/2.1.0/Configuration/config_mechanism"}},l={},u=[{value:"Set Up User Configuration",id:"set-up-user-configuration",level:2},{value:"Example User Configuration",id:"example-user-configuration",level:3}],c={toc:u},p="wrapper";function f(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"set-up-user-configuration"},"Set Up User Configuration"),(0,a.kt)("p",null,"To begin making custom user configurations you must create a ",(0,a.kt)("inlineCode",{parentName:"p"},"user/")," folder. The provided example can be created with (please note the trailing slashes after the directory names)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cp -r ~/.config/nvim/lua/user_example/ ~/.config/nvim/lua/user/\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If you want to keep your user configuration completely separate from the cloned repository, you can also put this folder in ",(0,a.kt)("inlineCode",{parentName:"p"},"$XDG_CONFIG_HOME/astronvim/lua/user"),". AstroNvim adds the folder ",(0,a.kt)("inlineCode",{parentName:"p"},"$XDG_CONFIG_HOME/astronvim")," to the ",(0,a.kt)("inlineCode",{parentName:"p"},"runtimepath")," so any ",(0,a.kt)("inlineCode",{parentName:"p"},"vimscript")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"lua")," files in there can be sourced.")),(0,a.kt)("h3",{id:"example-user-configuration"},"Example User Configuration"),(0,a.kt)("p",null,"Below is the provided user configuration template found at ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.config/nvim/lua/user/init.lua")," after the ",(0,a.kt)("inlineCode",{parentName:"p"},"cp")," command above."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"For more details of the provided defaults for each plugin please refer to ",(0,a.kt)("a",{parentName:"p",href:"/configuration/plugin_defaults"},"Default Plugin Configurations")),(0,a.kt)("p",{parentName:"admonition"},"For an exhaustive list of all available options in the ",(0,a.kt)("inlineCode",{parentName:"p"},"user/init.lua")," file please refer to ",(0,a.kt)("a",{parentName:"p",href:"/configuration/config_options"},"Available User Options"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'--              AstroNvim Configuration Table\n-- All configuration changes should go inside of the table below\n\n-- You can think of a Lua "table" as a dictionary like data structure the\n-- normal format is "key = value". These also handle array like data structures\n-- where a value with no key simply has an implicit numeric key\nlocal config = {\n\n  -- Configure AstroNvim updates\n  updater = {\n    remote = "origin", -- remote to use\n    channel = "nightly", -- "stable" or "nightly"\n    version = "latest", -- "latest", tag name, or regex search like "v1.*" to only do updates before v2 (STABLE ONLY)\n    branch = "main", -- branch name (NIGHTLY ONLY)\n    commit = nil, -- commit hash (NIGHTLY ONLY)\n    pin_plugins = nil, -- nil, true, false (nil will pin plugins on stable only)\n    skip_prompts = false, -- skip prompts about breaking changes\n    show_changelog = true, -- show the changelog after performing an update\n    auto_reload = false, -- automatically reload and sync packer after a successful update\n    auto_quit = false, -- automatically quit the current session after a successful update\n    -- remotes = { -- easily add new remotes to track\n    --   ["remote_name"] = "https://remote_url.come/repo.git", -- full remote url\n    --   ["remote2"] = "github_user/repo", -- GitHub user/repo shortcut,\n    --   ["remote3"] = "github_user", -- GitHub user assume AstroNvim fork\n    -- },\n  },\n\n  -- Set colorscheme to use\n  colorscheme = "default_theme",\n\n  -- Override highlight groups in any theme\n  highlights = {\n    -- duskfox = { -- a table of overrides/changes to the default\n    --   Normal = { bg = "#000000" },\n    -- },\n    default_theme = function(highlights) -- or a function that returns a new table of colors to set\n      local C = require "default_theme.colors"\n\n      -- New approach instead of diagnostic_style\n      highlights.DiagnosticError.italic = true\n      highlights.DiagnosticHint.italic = true\n      highlights.DiagnosticInfo.italic = true\n      highlights.DiagnosticWarn.italic = true\n\n      highlights.Normal = { fg = C.fg, bg = C.bg }\n      return highlights\n    end,\n  },\n\n  -- set vim options here (vim.<first_key>.<second_key> =  value)\n  options = {\n    opt = {\n      relativenumber = true, -- sets vim.opt.relativenumber\n    },\n    g = {\n      mapleader = " ", -- sets vim.g.mapleader\n    },\n  },\n  -- If you need more control, you can use the function()...end notation\n  -- options = function(local_vim)\n  --   local_vim.opt.relativenumber = true\n  --   local_vim.g.mapleader = " "\n  --   local_vim.opt.whichwrap = vim.opt.whichwrap - { \'b\', \'s\' } -- removing option from list\n  --   local_vim.opt.shortmess = vim.opt.shortmess + { I = true } -- add to option list\n  --\n  --   return local_vim\n  -- end,\n\n  -- Set dashboard header\n  header = {\n    " \u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2588\u2588   \u2588\u2588\u2588\u2588\u2588\u2588",\n    "\u2588\u2588   \u2588\u2588 \u2588\u2588         \u2588\u2588    \u2588\u2588   \u2588\u2588 \u2588\u2588    \u2588\u2588",\n    "\u2588\u2588\u2588\u2588\u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2588\u2588\u2588    \u2588\u2588    \u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588    \u2588\u2588",\n    "\u2588\u2588   \u2588\u2588      \u2588\u2588    \u2588\u2588    \u2588\u2588   \u2588\u2588 \u2588\u2588    \u2588\u2588",\n    "\u2588\u2588   \u2588\u2588 \u2588\u2588\u2588\u2588\u2588\u2588\u2588    \u2588\u2588    \u2588\u2588   \u2588\u2588  \u2588\u2588\u2588\u2588\u2588\u2588",\n    " ",\n    "    \u2588\u2588\u2588\u2001   \u2588\u2588\u2001\u2588\u2588\u2001   \u2588\u2588\u2001\u2588\u2588\u2001\u2588\u2588\u2588\u2001   \u2588\u2588\u2588",\n    "    \u2588\u2588\u2588\u2588\u2001  \u2588\u2588\u2001\u2588\u2588\u2001   \u2588\u2588\u2001\u2588\u2588\u2001\u2588\u2588\u2588\u2588\u2001 \u2588\u2588\u2588\u2588",\n    "    \u2588\u2588\u2001\u2588\u2588\u2001 \u2588\u2588\u2001\u2588\u2588\u2001   \u2588\u2588\u2001\u2588\u2588\u2001\u2588\u2588\u2001\u2588\u2588\u2588\u2588\u2001\u2588\u2588",\n    "    \u2588\u2588\u2001\u2001\u2588\u2588\u2001\u2588\u2588\u2001\u2001\u2588\u2588\u2001 \u2588\u2588\u2001\u2001\u2588\u2588\u2001\u2588\u2588\u2001\u2001\u2588\u2588\u2001\u2001\u2588\u2588",\n    "    \u2588\u2588\u2001 \u2001\u2588\u2588\u2588\u2588\u2001 \u2001\u2588\u2588\u2588\u2588\u2001\u2001 \u2588\u2588\u2001\u2588\u2588\u2001 \u2001\u2001\u2001 \u2588\u2588",\n  },\n\n  -- Default theme configuration\n  default_theme = {\n    -- Modify the color palette for the default theme\n    colors = {\n      fg = "#abb2bf",\n      bg = "#1e222a",\n    },\n    -- enable or disable highlighting for extra plugins\n    plugins = {\n      aerial = true,\n      beacon = false,\n      bufferline = true,\n      dashboard = true,\n      highlighturl = true,\n      hop = false,\n      indent_blankline = true,\n      lightspeed = false,\n      ["neo-tree"] = true,\n      notify = true,\n      ["nvim-tree"] = false,\n      ["nvim-web-devicons"] = true,\n      rainbow = true,\n      symbols_outline = false,\n      telescope = true,\n      vimwiki = false,\n      ["which-key"] = true,\n    },\n  },\n\n  -- Diagnostics configuration (for vim.diagnostics.config({...}))\n  diagnostics = {\n    virtual_text = true,\n    underline = true,\n  },\n\n  -- Extend LSP configuration\n  lsp = {\n    -- enable servers that you already have installed without mason\n    servers = {\n      -- "pyright"\n    },\n    -- easily add or disable built in mappings added during LSP attaching\n    mappings = {\n      n = {\n        -- ["<leader>lf"] = false -- disable formatting keymap\n      },\n    },\n    -- add to the global LSP on_attach function\n    -- on_attach = function(client, bufnr)\n    -- end,\n\n    -- override the mason server-registration function\n    -- server_registration = function(server, opts)\n    --   require("lspconfig")[server].setup(opts)\n    -- end,\n\n    -- Add overrides for LSP server settings, the keys are the name of the server\n    ["server-settings"] = {\n      -- example for addings schemas to yamlls\n      -- yamlls = { -- override table for require("lspconfig").yamlls.setup({...})\n      --   settings = {\n      --     yaml = {\n      --       schemas = {\n      --         ["http://json.schemastore.org/github-workflow"] = ".github/workflows/*.{yml,yaml}",\n      --         ["http://json.schemastore.org/github-action"] = ".github/action.{yml,yaml}",\n      --         ["http://json.schemastore.org/ansible-stable-2.9"] = "roles/tasks/*.{yml,yaml}",\n      --       },\n      --     },\n      --   },\n      -- },\n    },\n  },\n\n  -- Mapping data with "desc" stored directly by vim.keymap.set().\n  --\n  -- Please use this mappings table to set keyboard mapping since this is the\n  -- lower level configuration and more robust one. (which-key will\n  -- automatically pick-up stored data by this setting.)\n  mappings = {\n    -- first key is the mode\n    n = {\n      -- second key is the lefthand side of the map\n      -- mappings seen under group name "Buffer"\n      ["<leader>bb"] = { "<cmd>tabnew<cr>", desc = "New tab" },\n      ["<leader>bc"] = { "<cmd>BufferLinePickClose<cr>", desc = "Pick to close" },\n      ["<leader>bj"] = { "<cmd>BufferLinePick<cr>", desc = "Pick to jump" },\n      ["<leader>bt"] = { "<cmd>BufferLineSortByTabs<cr>", desc = "Sort by tabs" },\n      -- quick save\n      -- ["<C-s>"] = { ":w!<cr>", desc = "Save File" },  -- change description but the same command\n    },\n    t = {\n      -- setting a mapping to false will disable it\n      -- ["<esc>"] = false,\n    },\n  },\n\n  -- Configure plugins\n  plugins = {\n    init = {\n      -- You can disable default plugins as follows:\n      -- ["goolord/alpha-nvim"] = { disable = true },\n\n      -- You can also add new plugins here as well:\n      -- Add plugins, the packer syntax without the "use"\n      -- { "andweeb/presence.nvim" },\n      -- {\n      --   "ray-x/lsp_signature.nvim",\n      --   event = "BufRead",\n      --   config = function()\n      --     require("lsp_signature").setup()\n      --   end,\n      -- },\n\n      -- We also support a key value style plugin definition similar to NvChad:\n      -- ["ray-x/lsp_signature.nvim"] = {\n      --   event = "BufRead",\n      --   config = function()\n      --     require("lsp_signature").setup()\n      --   end,\n      -- },\n    },\n    -- All other entries override the require("<key>").setup({...}) call for default plugins\n    ["null-ls"] = function(config) -- overrides `require("null-ls").setup(config)`\n      -- config variable is the default configuration table for the setup functino call\n      local null_ls = require "null-ls"\n      -- Check supported formatters and linters\n      -- https://github.com/jose-elias-alvarez/null-ls.nvim/tree/main/lua/null-ls/builtins/formatting\n      -- https://github.com/jose-elias-alvarez/null-ls.nvim/tree/main/lua/null-ls/builtins/diagnostics\n      config.sources = {\n        -- Set a formatter that is manually installed\n        null_ls.builtins.formatting.prettier,\n      }\n      return config -- return final config table to use in require("null-ls").setup(config)\n    end,\n    treesitter = { -- overrides `require("treesitter").setup(...)`\n      ensure_installed = { "lua" },\n    },\n    -- use mason-lspconfig to configure LSP installations\n    ["mason-lspconfig"] = { -- overrides `require("mason-lspconfig").setup(...)`\n      ensure_installed = { "sumneko_lua" },\n    },\n    -- use mason-null-ls to install and setup configure null-ls sources\n    ["mason-null-ls"] = { -- overrides `require("mason-null-ls").setup(...)`\n      ensure_installed = { "stylua" },\n    },\n    packer = { -- overrides `require("packer").setup(...)`\n      compile_path = vim.fn.stdpath "data" .. "/packer_compiled.lua",\n    },\n  },\n\n  -- LuaSnip Options\n  luasnip = {\n    -- Add paths for including more VS Code style snippets in luasnip\n    vscode_snippet_paths = {},\n    -- Extend filetypes\n    filetype_extend = {\n      javascript = { "javascriptreact" },\n    },\n  },\n\n  -- CMP Source Priorities\n  -- modify here the priorities of default cmp sources\n  -- higher value == higher priority\n  -- The value can also be set to a boolean for disabling default sources:\n  -- false == disabled\n  -- true == 1000\n  cmp = {\n    source_priority = {\n      nvim_lsp = 1000,\n      luasnip = 750,\n      buffer = 500,\n      path = 250,\n    },\n  },\n\n  -- Modify which-key registration (Use this with mappings table in the above.)\n  ["which-key"] = {\n    -- Add bindings which show up as group name\n    register = {\n      -- first key is the mode, n == normal mode\n      n = {\n        -- second key is the prefix, <leader> prefixes\n        ["<leader>"] = {\n          -- third key is the key to bring up next level and its displayed\n          -- group name in which-key top level menu\n          ["b"] = { name = "Buffer" },\n        },\n      },\n    },\n  },\n\n  -- This function is run last and is a good place to configuring\n  -- augroups/autocommands and custom filetypes also this just pure lua so\n  -- anything that doesn\'t fit in the normal config locations above can go here\n  polish = function()\n    -- Set key binding\n    -- Set autocommands\n    vim.api.nvim_create_augroup("packer_conf", { clear = true })\n    vim.api.nvim_create_autocmd("BufWritePost", {\n      desc = "Sync packer after modifying plugins.lua",\n      group = "packer_conf",\n      pattern = "plugins.lua",\n      command = "source <afile> | PackerSync",\n    })\n\n    -- Set up custom filetypes\n    -- vim.filetype.add {\n    --   extension = {\n    --     foo = "fooscript",\n    --   },\n    --   filename = {\n    --     ["Foofile"] = "fooscript",\n    --   },\n    --   pattern = {\n    --     ["~/%.config/foo/.*"] = "fooscript",\n    --   },\n    -- }\n  end,\n}\n\nreturn config\n')))}f.isMDXComponent=!0}}]);