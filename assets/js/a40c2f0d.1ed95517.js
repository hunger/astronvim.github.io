"use strict";(self.webpackChunkastro_vim=self.webpackChunkastro_vim||[]).push([[662],{3905:(n,e,t)=>{t.d(e,{Zo:()=>c,kt:()=>g});var i=t(67294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function r(n,e){if(null==n)return{};var t,i,a=function(n,e){if(null==n)return{};var t,i,a={},l=Object.keys(n);for(i=0;i<l.length;i++)t=l[i],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(i=0;i<l.length;i++)t=l[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var s=i.createContext({}),p=function(n){var e=i.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},c=function(n){var e=p(n.components);return i.createElement(s.Provider,{value:e},n.children)},m="mdxType",u={inlineCode:"code",wrapper:function(n){var e=n.children;return i.createElement(i.Fragment,{},e)}},d=i.forwardRef((function(n,e){var t=n.components,a=n.mdxType,l=n.originalType,s=n.parentName,c=r(n,["components","mdxType","originalType","parentName"]),m=p(t),d=a,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return t?i.createElement(g,o(o({ref:e},c),{},{components:t})):i.createElement(g,o({ref:e},c))}));function g(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var l=t.length,o=new Array(l);o[0]=d;var r={};for(var s in e)hasOwnProperty.call(e,s)&&(r[s]=e[s]);r.originalType=n,r[m]="string"==typeof n?n:a,o[1]=r;for(var p=2;p<l;p++)o[p]=t[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},80193:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>p});var i=t(87462),a=(t(67294),t(3905));const l={id:"plugin_defaults",title:"Default Plugin Configurations"},o=void 0,r={unversionedId:"Configuration/plugin_defaults",id:"Configuration/plugin_defaults",title:"Default Plugin Configurations",description:"This page documents the default options that are set by AstroNvim for each individual plugin. All of these options can be changed in the plugins table in the user/init.lua configuration file as described in the Custom Plugins Documentation.",source:"@site/docs/Configuration/plugin_defaults.md",sourceDirName:"Configuration",slug:"/Configuration/plugin_defaults",permalink:"/nightly/Configuration/plugin_defaults",draft:!1,tags:[],version:"current",frontMatter:{id:"plugin_defaults",title:"Default Plugin Configurations"},sidebar:"docs",previous:{title:"Override Formats",permalink:"/nightly/Configuration/override_formats"},next:{title:"Splitting Up Configuration",permalink:"/nightly/Configuration/splitting_up"}},s={},p=[{value:"aerial.nvim",id:"aerialnvim",level:2},{value:"alpha-nvim",id:"alpha-nvim",level:2},{value:"astrotheme",id:"astrotheme",level:2},{value:"better-escape.nvim",id:"better-escapenvim",level:2},{value:"Comment.nvim",id:"commentnvim",level:2},{value:"dressing.nvim",id:"dressingnvim",level:2},{value:"gitsigns.nvim",id:"gitsignsnvim",level:2},{value:"heirline.nvim",id:"heirlinenvim",level:2},{value:"indent-blankline.nvim",id:"indent-blanklinenvim",level:2},{value:"lspkind.nvim",id:"lspkindnvim",level:2},{value:"mason-null-ls.nvim",id:"mason-null-lsnvim",level:2},{value:"mason-nvim-dap",id:"mason-nvim-dap",level:2},{value:"mason.nvim",id:"masonnvim",level:2},{value:"neo-tree.nvim",id:"neo-treenvim",level:2},{value:"neodev.nvim",id:"neodevnvim",level:2},{value:"null-ls.nvim",id:"null-lsnvim",level:2},{value:"nvim-autopairs",id:"nvim-autopairs",level:2},{value:"nvim-cmp",id:"nvim-cmp",level:2},{value:"nvim-colorizer.lua",id:"nvim-colorizerlua",level:2},{value:"nvim-dap-ui",id:"nvim-dap-ui",level:2},{value:"nvim-notify",id:"nvim-notify",level:2},{value:"nvim-treesitter",id:"nvim-treesitter",level:2},{value:"nvim-ufo",id:"nvim-ufo",level:2},{value:"nvim-web-devicons",id:"nvim-web-devicons",level:2},{value:"nvim-window-picker",id:"nvim-window-picker",level:2},{value:"smart-splits.nvim",id:"smart-splitsnvim",level:2},{value:"telescope.nvim",id:"telescopenvim",level:2},{value:"toggleterm.nvim",id:"toggletermnvim",level:2}],c={toc:p},m="wrapper";function u(n){let{components:e,...t}=n;return(0,a.kt)(m,(0,i.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This page documents the default options that are set by AstroNvim for each individual plugin. All of these options can be changed in the ",(0,a.kt)("inlineCode",{parentName:"p"},"plugins")," table in the ",(0,a.kt)("inlineCode",{parentName:"p"},"user/init.lua")," configuration file as described in the ",(0,a.kt)("a",{parentName:"p",href:"/nightly/Recipes/custom_plugins"},"Custom Plugins Documentation"),"."),(0,a.kt)("h2",{id:"aerialnvim"},"aerial.nvim"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  buftype_exclude = {\n    "nofile",\n    "terminal",\n  },\n  filetype_exclude = {\n    "help",\n    "startify",\n    "aerial",\n    "alpha",\n    "dashboard",\n    "lazy",\n    "neogitstatus",\n    "NvimTree",\n    "neo-tree",\n    "Trouble",\n  },\n  context_patterns = {\n    "class",\n    "return",\n    "function",\n    "method",\n    "^if",\n    "^while",\n    "jsx_element",\n    "^for",\n    "^object",\n    "^table",\n    "block",\n    "arguments",\n    "if_statement",\n    "else_clause",\n    "jsx_element",\n    "jsx_self_closing_element",\n    "try_statement",\n    "catch_clause",\n    "import_statement",\n    "operation_type",\n  },\n  show_trailing_blankline_indent = false,\n  use_treesitter = true,\n  char = "\u258f",\n  context_char = "\u258f",\n  show_current_context = true,\n}\n')),(0,a.kt)("h2",{id:"alpha-nvim"},"alpha-nvim"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function()\n  local dashboard = require "alpha.themes.dashboard"\n  dashboard.section.header.val = {\n    " \u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2588\u2588   \u2588\u2588\u2588\u2588\u2588\u2588",\n    "\u2588\u2588   \u2588\u2588 \u2588\u2588         \u2588\u2588    \u2588\u2588   \u2588\u2588 \u2588\u2588    \u2588\u2588",\n    "\u2588\u2588\u2588\u2588\u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2588\u2588\u2588    \u2588\u2588    \u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588    \u2588\u2588",\n    "\u2588\u2588   \u2588\u2588      \u2588\u2588    \u2588\u2588    \u2588\u2588   \u2588\u2588 \u2588\u2588    \u2588\u2588",\n    "\u2588\u2588   \u2588\u2588 \u2588\u2588\u2588\u2588\u2588\u2588\u2588    \u2588\u2588    \u2588\u2588   \u2588\u2588  \u2588\u2588\u2588\u2588\u2588\u2588",\n    " ",\n    "    \u2588\u2588\u2588    \u2588\u2588 \u2588\u2588    \u2588\u2588 \u2588\u2588 \u2588\u2588\u2588    \u2588\u2588\u2588",\n    "    \u2588\u2588\u2588\u2588   \u2588\u2588 \u2588\u2588    \u2588\u2588 \u2588\u2588 \u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588",\n    "    \u2588\u2588 \u2588\u2588  \u2588\u2588 \u2588\u2588    \u2588\u2588 \u2588\u2588 \u2588\u2588 \u2588\u2588\u2588\u2588 \u2588\u2588",\n    "    \u2588\u2588  \u2588\u2588 \u2588\u2588  \u2588\u2588  \u2588\u2588  \u2588\u2588 \u2588\u2588  \u2588\u2588  \u2588\u2588",\n    "    \u2588\u2588   \u2588\u2588\u2588\u2588   \u2588\u2588\u2588\u2588   \u2588\u2588 \u2588\u2588      \u2588\u2588",\n  }\n  dashboard.section.header.opts.hl = "DashboardHeader"\n\n  local button = require("astronvim.utils").alpha_button\n  dashboard.section.buttons.val = {\n    button("LDR n", "\uf0fe  New File  "),\n    button("LDR f f", "\uf422  Find File  "),\n    button("LDR f o", "\uf719  Recents  "),\n    button("LDR f w", "\uf72c  Find Word  "),\n    button("LDR f \'", "\uf02e  Bookmarks  "),\n    button("LDR S l", "\uf01e  Last Session  "),\n  }\n\n  dashboard.section.footer.val =\n    { " ", " ", " ", "AstroNvim loaded " .. require("lazy").stats().count .. " plugins \uf1e6" }\n  dashboard.section.footer.opts.hl = "DashboardFooter"\n\n  dashboard.config.layout[1].val = vim.fn.max { 2, vim.fn.floor(vim.fn.winheight(0) * 0.2) }\n  dashboard.config.layout[3].val = 5\n  dashboard.config.opts.noautocmd = true\n  return dashboard\nend\n')),(0,a.kt)("h2",{id:"astrotheme"},"astrotheme"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'opts = { plugins = { ["dashboard-nvim"] = true } }\n')),(0,a.kt)("h2",{id:"better-escapenvim"},"better-escape.nvim"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"opts = { timeout = 300 }\n")),(0,a.kt)("h2",{id:"commentnvim"},"Comment.nvim"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function()\n  return { pre_hook = require("ts_context_commentstring.integrations.comment_nvim").create_pre_hook() }\nend\n')),(0,a.kt)("h2",{id:"dressingnvim"},"dressing.nvim"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  input = {\n    default_prompt = "\u27a4 ",\n    win_options = { winhighlight = "Normal:Normal,NormalNC:Normal" },\n  },\n  select = {\n    backend = { "telescope", "builtin" },\n    builtin = { win_options = { winhighlight = "Normal:Normal,NormalNC:Normal" } },\n  },\n}\n')),(0,a.kt)("h2",{id:"gitsignsnvim"},"gitsigns.nvim"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  signs = {\n    add = { text = "\u258e" },\n    change = { text = "\u258e" },\n    delete = { text = "\u258e" },\n    topdelete = { text = "\uf909" },\n    changedelete = { text = "\u258e" },\n    untracked = { text = "\u258e" },\n  },\n}\n')),(0,a.kt)("h2",{id:"heirlinenvim"},"heirline.nvim"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/nightly/Recipes/status"},"Customizing Statusline")),(0,a.kt)("h2",{id:"indent-blanklinenvim"},"indent-blankline.nvim"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  buftype_exclude = {\n    "nofile",\n    "terminal",\n  },\n  filetype_exclude = {\n    "help",\n    "startify",\n    "aerial",\n    "alpha",\n    "dashboard",\n    "lazy",\n    "neogitstatus",\n    "NvimTree",\n    "neo-tree",\n    "Trouble",\n  },\n  context_patterns = {\n    "class",\n    "return",\n    "function",\n    "method",\n    "^if",\n    "^while",\n    "jsx_element",\n    "^for",\n    "^object",\n    "^table",\n    "block",\n    "arguments",\n    "if_statement",\n    "else_clause",\n    "jsx_element",\n    "jsx_self_closing_element",\n    "try_statement",\n    "catch_clause",\n    "import_statement",\n    "operation_type",\n  },\n  show_trailing_blankline_indent = false,\n  use_treesitter = true,\n  char = "\u258f",\n  context_char = "\u258f",\n  show_current_context = true,\n}\n')),(0,a.kt)("h2",{id:"lspkindnvim"},"lspkind.nvim"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  mode = "symbol",\n  symbol_map = {\n    NONE = "",\n    Array = "\uf669",\n    Boolean = "\u22a8",\n    Class = "\uf816",\n    Constructor = "\uf425",\n    Key = "\uf805",\n    Namespace = "\uf669",\n    Null = "NULL",\n    Number = "#",\n    Object = "\u29bf",\n    Package = "\uf8d6",\n    Property = "\uf0ad",\n    Reference = "\uf481",\n    Snippet = "\uf0c4",\n    String = "\ud835\udcd0",\n    TypeParameter = "\uf783",\n    Unit = "\ue21f",\n  },\n}\n')),(0,a.kt)("h2",{id:"mason-null-lsnvim"},"mason-null-ls.nvim"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"opts = { automatic_setup = true }\n")),(0,a.kt)("h2",{id:"mason-nvim-dap"},"mason-nvim-dap"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"opts = { automatic_setup = true }\n")),(0,a.kt)("h2",{id:"masonnvim"},"mason.nvim"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  ui = {\n    icons = {\n      package_installed = "\u2713",\n      package_uninstalled = "\u2717",\n      package_pending = "\u27f3",\n    },\n  },\n}\n')),(0,a.kt)("h2",{id:"neo-treenvim"},"neo-tree.nvim"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function()\n  local global_commands = {\n    system_open = function(state) require("astronvim.utils").system_open(state.tree:get_node():get_id()) end,\n    parent_or_close = function(state)\n      local node = state.tree:get_node()\n      if (node.type == "directory" or node:has_children()) and node:is_expanded() then\n        state.commands.toggle_node(state)\n      else\n        require("neo-tree.ui.renderer").focus_node(state, node:get_parent_id())\n      end\n    end,\n    child_or_open = function(state)\n      local node = state.tree:get_node()\n      if node.type == "directory" or node:has_children() then\n        if not node:is_expanded() then -- if unexpanded, expand\n          state.commands.toggle_node(state)\n        else -- if expanded and has children, seleect the next child\n          require("neo-tree.ui.renderer").focus_node(state, node:get_child_ids()[1])\n        end\n      else -- if not a directory just open it\n        state.commands.open(state)\n      end\n    end,\n  }\n  local get_icon = require("astronvim.utils").get_icon\n  return {\n    close_if_last_window = true,\n    source_selector = {\n      winbar = true,\n      content_layout = "center",\n      tab_labels = {\n        filesystem = get_icon "FolderClosed" .. " File",\n        buffers = get_icon "DefaultFile" .. " Bufs",\n        git_status = get_icon "Git" .. " Git",\n        diagnostics = get_icon "Diagnostic" .. " Diagnostic",\n      },\n    },\n    default_component_configs = {\n      indent = { padding = 0 },\n      icon = {\n        folder_closed = get_icon "FolderClosed",\n        folder_open = get_icon "FolderOpen",\n        folder_empty = get_icon "FolderEmpty",\n        default = get_icon "DefaultFile",\n      },\n      modified = { symbol = get_icon "FileModified" },\n      git_status = {\n        symbols = {\n          added = get_icon "GitAdd",\n          deleted = get_icon "GitDelete",\n          modified = get_icon "GitChange",\n          renamed = get_icon "GitRenamed",\n          untracked = get_icon "GitUntracked",\n          ignored = get_icon "GitIgnored",\n          unstaged = get_icon "GitUnstaged",\n          staged = get_icon "GitStaged",\n          conflict = get_icon "GitConflict",\n        },\n      },\n    },\n    window = {\n      width = 30,\n      mappings = {\n        ["<space>"] = false, -- disable space until we figure out which-key disabling\n        ["[b"] = "prev_source",\n        ["]b"] = "next_source",\n        o = "open",\n        O = "system_open",\n        h = "parent_or_close",\n        l = "child_or_open",\n      },\n    },\n    filesystem = {\n      follow_current_file = true,\n      hijack_netrw_behavior = "open_current",\n      use_libuv_file_watcher = true,\n      commands = global_commands,\n    },\n    buffers = { commands = global_commands },\n    git_status = { commands = global_commands },\n    event_handlers = {\n      { event = "neo_tree_buffer_enter", handler = function(_) vim.opt_local.signcolumn = "auto" end },\n    },\n  }\nend\n')),(0,a.kt)("h2",{id:"neodevnvim"},"neodev.nvim"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"opts = {\n  override = function(root_dir, library)\n    if root_dir:match(astronvim.install.config) then library.plugins = true end\n    vim.b.neodev_enabled = library.enabled\n  end,\n}\n")),(0,a.kt)("h2",{id:"null-lsnvim"},"null-ls.nvim"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function() return { on_attach = require("astronvim.utils.lsp").on_attach } end\n')),(0,a.kt)("h2",{id:"nvim-autopairs"},"nvim-autopairs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  check_ts = true,\n  ts_config = { java = false },\n  fast_wrap = {\n    map = "<M-e>",\n    chars = { "{", "[", "(", \'"\', "\'" },\n    pattern = string.gsub([[ [%\'%"%)%>%]%)%}%,] ]], "%s+", ""),\n    offset = 0,\n    end_key = "$",\n    keys = "qwertyuiopzxcvbnmasdfghjkl",\n    check_comma = true,\n    highlight = "PmenuSel",\n    highlight_grey = "LineNr",\n  },\n}\n')),(0,a.kt)("h2",{id:"nvim-cmp"},"nvim-cmp"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function()\n  local cmp = require "cmp"\n  local snip_status_ok, luasnip = pcall(require, "luasnip")\n  local lspkind_status_ok, lspkind = pcall(require, "lspkind")\n  if not snip_status_ok then return end\n  local border_opts =\n    { border = "single", winhighlight = "Normal:Normal,FloatBorder:FloatBorder,CursorLine:Visual,Search:None" }\n\n  local function has_words_before()\n    local line, col = unpack(vim.api.nvim_win_get_cursor(0))\n    return col ~= 0 and vim.api.nvim_buf_get_lines(0, line - 1, line, true)[1]:sub(col, col):match "%s" == nil\n  end\n\n  return {\n    enabled = function()\n      if vim.api.nvim_get_option_value("buftype", { buf = 0 }) == "prompt" then return false end\n      return vim.g.cmp_enabled\n    end,\n    preselect = cmp.PreselectMode.None,\n    formatting = {\n      fields = { "kind", "abbr", "menu" },\n      format = lspkind_status_ok and lspkind.cmp_format(astronvim.lspkind) or nil,\n    },\n    snippet = {\n      expand = function(args) luasnip.lsp_expand(args.body) end,\n    },\n    duplicates = {\n      nvim_lsp = 1,\n      luasnip = 1,\n      cmp_tabnine = 1,\n      buffer = 1,\n      path = 1,\n    },\n    confirm_opts = {\n      behavior = cmp.ConfirmBehavior.Replace,\n      select = false,\n    },\n    window = {\n      completion = cmp.config.window.bordered(border_opts),\n      documentation = cmp.config.window.bordered(border_opts),\n    },\n    mapping = {\n      ["<Up>"] = cmp.mapping.select_prev_item { behavior = cmp.SelectBehavior.Select },\n      ["<Down>"] = cmp.mapping.select_next_item { behavior = cmp.SelectBehavior.Select },\n      ["<C-p>"] = cmp.mapping.select_prev_item { behavior = cmp.SelectBehavior.Insert },\n      ["<C-n>"] = cmp.mapping.select_next_item { behavior = cmp.SelectBehavior.Insert },\n      ["<C-k>"] = cmp.mapping.select_prev_item { behavior = cmp.SelectBehavior.Insert },\n      ["<C-j>"] = cmp.mapping.select_next_item { behavior = cmp.SelectBehavior.Insert },\n      ["<C-u>"] = cmp.mapping(cmp.mapping.scroll_docs(-4), { "i", "c" }),\n      ["<C-d>"] = cmp.mapping(cmp.mapping.scroll_docs(4), { "i", "c" }),\n      ["<C-Space>"] = cmp.mapping(cmp.mapping.complete(), { "i", "c" }),\n      ["<C-y>"] = cmp.config.disable,\n      ["<C-e>"] = cmp.mapping { i = cmp.mapping.abort(), c = cmp.mapping.close() },\n      ["<CR>"] = cmp.mapping.confirm { select = false },\n      ["<Tab>"] = cmp.mapping(function(fallback)\n        if cmp.visible() then\n          cmp.select_next_item()\n        elseif luasnip.expand_or_jumpable() then\n          luasnip.expand_or_jump()\n        elseif has_words_before() then\n          cmp.complete()\n        else\n          fallback()\n        end\n      end, { "i", "s" }),\n      ["<S-Tab>"] = cmp.mapping(function(fallback)\n        if cmp.visible() then\n          cmp.select_prev_item()\n        elseif luasnip.jumpable(-1) then\n          luasnip.jump(-1)\n        else\n          fallback()\n        end\n      end, { "i", "s" }),\n    },\n    sources = cmp.config.sources {\n      { name = "nvim_lsp", priority = 1000 },\n      { name = "luasnip", priority = 750 },\n      { name = "buffer", priority = 500 },\n      { name = "path", priority = 250 },\n    },\n  }\nend\n')),(0,a.kt)("h2",{id:"nvim-colorizerlua"},"nvim-colorizer.lua"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"opts = { user_default_options = { names = false } }\n")),(0,a.kt)("h2",{id:"nvim-dap-ui"},"nvim-dap-ui"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'opts = { floating = { border = "rounded" } }\n')),(0,a.kt)("h2",{id:"nvim-notify"},"nvim-notify"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'opts = { stages = "fade" }\n')),(0,a.kt)("h2",{id:"nvim-treesitter"},"nvim-treesitter"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"opts = {\n  highlight = { enable = true },\n  incremental_selection = { enable = true },\n  autotag = { enable = true },\n  context_commentstring = { enable = true, enable_autocmd = false },\n}\n")),(0,a.kt)("h2",{id:"nvim-ufo"},"nvim-ufo"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  preview = {\n    mappings = {\n      scrollB = "<C-b>",\n      scrollF = "<C-f>",\n      scrollU = "<C-u>",\n      scrollD = "<C-d>",\n    },\n  },\n  provider_selector = function(_, filetype, buftype)\n    return (filetype == "" or buftype == "nofile") and "indent" -- only use indent until a file is opened\n      or { "treesitter", "indent" } -- if file opened, try to use treesitter if available\n  end,\n}\n')),(0,a.kt)("h2",{id:"nvim-web-devicons"},"nvim-web-devicons"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  deb = { icon = "\uf306", name = "Deb" },\n  lock = { icon = "\uf83d", name = "Lock" },\n  mp3 = { icon = "\uf885", name = "Mp3" },\n  mp4 = { icon = "\uf144", name = "Mp4" },\n  out = { icon = "\ue612", name = "Out" },\n  ["robots.txt"] = { icon = "\ufba7", name = "Robots" },\n  ttf = { icon = "\uf031", name = "TrueTypeFont" },\n  rpm = { icon = "\uf316", name = "Rpm" },\n  woff = { icon = "\uf031", name = "WebOpenFontFormat" },\n  woff2 = { icon = "\uf031", name = "WebOpenFontFormat2" },\n  xz = { icon = "\uf1c6", name = "Xz" },\n  zip = { icon = "\uf1c6", name = "Zip" },\n}\n')),(0,a.kt)("h2",{id:"nvim-window-picker"},"nvim-window-picker"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'opts = { use_winbar = "smart" }\n')),(0,a.kt)("h2",{id:"smart-splitsnvim"},"smart-splits.nvim"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  ignored_filetypes = { "nofile", "quickfix", "qf", "prompt" },\n  ignored_buftypes = { "nofile" },\n}\n')),(0,a.kt)("h2",{id:"telescopenvim"},"telescope.nvim"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function()\n  local actions = require "telescope.actions"\n  local get_icon = require("astronvim.utils").get_icon\n  return {\n    defaults = {\n      prompt_prefix = string.format("%s ", get_icon "Search"),\n      selection_caret = string.format("%s ", get_icon "Selected"),\n      path_display = { "truncate" },\n      sorting_strategy = "ascending",\n      layout_config = {\n        horizontal = {\n          prompt_position = "top",\n          preview_width = 0.55,\n        },\n        vertical = {\n          mirror = false,\n        },\n        width = 0.87,\n        height = 0.80,\n        preview_cutoff = 120,\n      },\n\n      mappings = {\n        i = {\n          ["<C-n>"] = actions.cycle_history_next,\n          ["<C-p>"] = actions.cycle_history_prev,\n          ["<C-j>"] = actions.move_selection_next,\n          ["<C-k>"] = actions.move_selection_previous,\n        },\n        n = { ["q"] = actions.close },\n      },\n    },\n  }\nend\n')),(0,a.kt)("h2",{id:"toggletermnvim"},"toggleterm.nvim"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  size = 10,\n  open_mapping = [[<F7>]],\n  shading_factor = 2,\n  direction = "float",\n  float_opts = {\n    border = "curved",\n    highlights = { border = "Normal", background = "Normal" },\n  },\n}\n')))}u.isMDXComponent=!0}}]);