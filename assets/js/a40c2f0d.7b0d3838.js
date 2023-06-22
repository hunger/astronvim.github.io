"use strict";(self.webpackChunkastro_vim=self.webpackChunkastro_vim||[]).push([[662],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>v});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),m=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=m(e.components);return a.createElement(s.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=m(t),d=i,v=c["".concat(s,".").concat(d)]||c[d]||u[d]||r;return t?a.createElement(v,o(o({ref:n},p),{},{components:t})):a.createElement(v,o({ref:n},p))}));function v(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var m=2;m<r;m++)o[m]=t[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},80193:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var a=t(87462),i=(t(67294),t(3905));const r={id:"plugin_defaults",title:"Default Plugin Configurations"},o=void 0,l={unversionedId:"Configuration/plugin_defaults",id:"Configuration/plugin_defaults",title:"Default Plugin Configurations",description:"This page documents the default options that are set by AstroNvim for each individual plugin. All of these options can be changed in the plugins table in the user/init.lua configuration file as described in the Custom Plugins Documentation.",source:"@site/docs/Configuration/plugin_defaults.md",sourceDirName:"Configuration",slug:"/Configuration/plugin_defaults",permalink:"/nightly/Configuration/plugin_defaults",draft:!1,tags:[],version:"current",frontMatter:{id:"plugin_defaults",title:"Default Plugin Configurations"},sidebar:"docs",previous:{title:"Override Formats",permalink:"/nightly/Configuration/override_formats"},next:{title:"Splitting Up Configuration",permalink:"/nightly/Configuration/splitting_up"}},s={},m=[{value:"aerial.nvim",id:"aerialnvim",level:2},{value:"alpha-nvim",id:"alpha-nvim",level:2},{value:"astrotheme",id:"astrotheme",level:2},{value:"better-escape.nvim",id:"better-escapenvim",level:2},{value:"Comment.nvim",id:"commentnvim",level:2},{value:"dressing.nvim",id:"dressingnvim",level:2},{value:"gitsigns.nvim",id:"gitsignsnvim",level:2},{value:"heirline.nvim",id:"heirlinenvim",level:2},{value:"indent-blankline.nvim",id:"indent-blanklinenvim",level:2},{value:"lspkind.nvim",id:"lspkindnvim",level:2},{value:"LuaSnip",id:"luasnip",level:2},{value:"mason-null-ls.nvim",id:"mason-null-lsnvim",level:2},{value:"mason-nvim-dap",id:"mason-nvim-dap",level:2},{value:"mason.nvim",id:"masonnvim",level:2},{value:"neo-tree.nvim",id:"neo-treenvim",level:2},{value:"neodev.nvim",id:"neodevnvim",level:2},{value:"null-ls.nvim",id:"null-lsnvim",level:2},{value:"nvim-autopairs",id:"nvim-autopairs",level:2},{value:"nvim-cmp",id:"nvim-cmp",level:2},{value:"nvim-colorizer.lua",id:"nvim-colorizerlua",level:2},{value:"nvim-dap-ui",id:"nvim-dap-ui",level:2},{value:"nvim-notify",id:"nvim-notify",level:2},{value:"nvim-treesitter",id:"nvim-treesitter",level:2},{value:"nvim-ufo",id:"nvim-ufo",level:2},{value:"nvim-web-devicons",id:"nvim-web-devicons",level:2},{value:"nvim-window-picker",id:"nvim-window-picker",level:2},{value:"smart-splits.nvim",id:"smart-splitsnvim",level:2},{value:"telescope.nvim",id:"telescopenvim",level:2},{value:"toggleterm.nvim",id:"toggletermnvim",level:2}],p={toc:m},c="wrapper";function u(e){let{components:n,...t}=e;return(0,i.kt)(c,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This page documents the default options that are set by AstroNvim for each individual plugin. All of these options can be changed in the ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins")," table in the ",(0,i.kt)("inlineCode",{parentName:"p"},"user/init.lua")," configuration file as described in the ",(0,i.kt)("a",{parentName:"p",href:"/nightly/Recipes/custom_plugins"},"Custom Plugins Documentation"),"."),(0,i.kt)("h2",{id:"aerialnvim"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/stevearc/aerial.nvim"},"aerial.nvim")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  buftype_exclude = {\n    "nofile",\n    "terminal",\n  },\n  filetype_exclude = {\n    "help",\n    "startify",\n    "aerial",\n    "alpha",\n    "dashboard",\n    "lazy",\n    "neogitstatus",\n    "NvimTree",\n    "neo-tree",\n    "Trouble",\n  },\n  context_patterns = {\n    "class",\n    "return",\n    "function",\n    "method",\n    "^if",\n    "^while",\n    "jsx_element",\n    "^for",\n    "^object",\n    "^table",\n    "block",\n    "arguments",\n    "if_statement",\n    "else_clause",\n    "jsx_element",\n    "jsx_self_closing_element",\n    "try_statement",\n    "catch_clause",\n    "import_statement",\n    "operation_type",\n  },\n  show_trailing_blankline_indent = false,\n  use_treesitter = true,\n  char = "\u258f",\n  context_char = "\u258f",\n  show_current_context = true,\n}\n')),(0,i.kt)("h2",{id:"alpha-nvim"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/goolord/alpha-nvim"},"alpha-nvim")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function()\n  local dashboard = require "alpha.themes.dashboard"\n  dashboard.section.header.val = {\n    " \u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2588\u2588   \u2588\u2588\u2588\u2588\u2588\u2588",\n    "\u2588\u2588   \u2588\u2588 \u2588\u2588         \u2588\u2588    \u2588\u2588   \u2588\u2588 \u2588\u2588    \u2588\u2588",\n    "\u2588\u2588\u2588\u2588\u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2588\u2588\u2588    \u2588\u2588    \u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588    \u2588\u2588",\n    "\u2588\u2588   \u2588\u2588      \u2588\u2588    \u2588\u2588    \u2588\u2588   \u2588\u2588 \u2588\u2588    \u2588\u2588",\n    "\u2588\u2588   \u2588\u2588 \u2588\u2588\u2588\u2588\u2588\u2588\u2588    \u2588\u2588    \u2588\u2588   \u2588\u2588  \u2588\u2588\u2588\u2588\u2588\u2588",\n    " ",\n    "    \u2588\u2588\u2588    \u2588\u2588 \u2588\u2588    \u2588\u2588 \u2588\u2588 \u2588\u2588\u2588    \u2588\u2588\u2588",\n    "    \u2588\u2588\u2588\u2588   \u2588\u2588 \u2588\u2588    \u2588\u2588 \u2588\u2588 \u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588",\n    "    \u2588\u2588 \u2588\u2588  \u2588\u2588 \u2588\u2588    \u2588\u2588 \u2588\u2588 \u2588\u2588 \u2588\u2588\u2588\u2588 \u2588\u2588",\n    "    \u2588\u2588  \u2588\u2588 \u2588\u2588  \u2588\u2588  \u2588\u2588  \u2588\u2588 \u2588\u2588  \u2588\u2588  \u2588\u2588",\n    "    \u2588\u2588   \u2588\u2588\u2588\u2588   \u2588\u2588\u2588\u2588   \u2588\u2588 \u2588\u2588      \u2588\u2588",\n  }\n  dashboard.section.header.opts.hl = "DashboardHeader"\n\n  local button = require("astronvim.utils").alpha_button\n  dashboard.section.buttons.val = {\n    button("LDR n", "\uf0fe  New File  "),\n    button("LDR f f", "\uf422  Find File  "),\n    button("LDR f o", "\udb80\ude19  Recents  "),\n    button("LDR f w", "\udb80\ude2d  Find Word  "),\n    button("LDR f \'", "\uf02e  Bookmarks  "),\n    button("LDR S l", "\uf01e  Last Session  "),\n  }\n\n  dashboard.config.layout[1].val = vim.fn.max { 2, vim.fn.floor(vim.fn.winheight(0) * 0.2) }\n  dashboard.config.layout[3].val = 5\n  dashboard.config.opts.noautocmd = true\n  return dashboard\nend\n')),(0,i.kt)("h2",{id:"astrotheme"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/AstroNvim/astrotheme"},"astrotheme")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'opts = { plugins = { ["dashboard-nvim"] = true } }\n')),(0,i.kt)("h2",{id:"better-escapenvim"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/max397574/better-escape.nvim"},"better-escape.nvim")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"opts = { timeout = 300 }\n")),(0,i.kt)("h2",{id:"commentnvim"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/numToStr/Comment.nvim"},"Comment.nvim")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function()\n  return { pre_hook = require("ts_context_commentstring.integrations.comment_nvim").create_pre_hook() }\nend\n')),(0,i.kt)("h2",{id:"dressingnvim"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/stevearc/dressing.nvim"},"dressing.nvim")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  input = {\n    default_prompt = "\u27a4 ",\n    win_options = { winhighlight = "Normal:Normal,NormalNC:Normal" },\n  },\n  select = {\n    backend = { "telescope", "builtin" },\n    builtin = { win_options = { winhighlight = "Normal:Normal,NormalNC:Normal" } },\n  },\n}\n')),(0,i.kt)("h2",{id:"gitsignsnvim"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/lewis6991/gitsigns.nvim"},"gitsigns.nvim")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  signs = {\n    add = { text = "\u258e" },\n    change = { text = "\u258e" },\n    delete = { text = "\u258e" },\n    topdelete = { text = "\uf909" },\n    changedelete = { text = "\u258e" },\n    untracked = { text = "\u258e" },\n  },\n}\n')),(0,i.kt)("h2",{id:"heirlinenvim"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/rebelot/heirline.nvim"},"heirline.nvim")),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/nightly/Recipes/status"},"Customizing Statusline")),(0,i.kt)("h2",{id:"indent-blanklinenvim"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/lukas-reineke/indent-blankline.nvim"},"indent-blankline.nvim")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  buftype_exclude = {\n    "nofile",\n    "terminal",\n  },\n  filetype_exclude = {\n    "help",\n    "startify",\n    "aerial",\n    "alpha",\n    "dashboard",\n    "lazy",\n    "neogitstatus",\n    "NvimTree",\n    "neo-tree",\n    "Trouble",\n  },\n  context_patterns = {\n    "class",\n    "return",\n    "function",\n    "method",\n    "^if",\n    "^while",\n    "jsx_element",\n    "^for",\n    "^object",\n    "^table",\n    "block",\n    "arguments",\n    "if_statement",\n    "else_clause",\n    "jsx_element",\n    "jsx_self_closing_element",\n    "try_statement",\n    "catch_clause",\n    "import_statement",\n    "operation_type",\n  },\n  show_trailing_blankline_indent = false,\n  use_treesitter = true,\n  char = "\u258f",\n  context_char = "\u258f",\n  show_current_context = true,\n}\n')),(0,i.kt)("h2",{id:"lspkindnvim"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/onsails/lspkind.nvim"},"lspkind.nvim")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  mode = "symbol",\n  symbol_map = {\n    NONE = "",\n    Array = "\uf669",\n    Boolean = "\u22a8",\n    Class = "\uf816",\n    Constructor = "\uf425",\n    Key = "\uf805",\n    Namespace = "\uf669",\n    Null = "NULL",\n    Number = "#",\n    Object = "\u29bf",\n    Package = "\uf8d6",\n    Property = "\uf0ad",\n    Reference = "\uf481",\n    Snippet = "\uf0c4",\n    String = "\ud835\udcd0",\n    TypeParameter = "\uf783",\n    Unit = "\ue21f",\n  },\n}\n')),(0,i.kt)("h2",{id:"luasnip"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/L3MON4D3/LuaSnip"},"LuaSnip")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  store_selection_keys = "<C-x>",\n}\n')),(0,i.kt)("h2",{id:"mason-null-lsnvim"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/jay-babu/mason-null-ls.nvim"},"mason-null-ls.nvim")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"opts = { automatic_setup = true }\n")),(0,i.kt)("h2",{id:"mason-nvim-dap"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/jay-babu/mason-nvim-dap.nvim"},"mason-nvim-dap")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"opts = { automatic_setup = true }\n")),(0,i.kt)("h2",{id:"masonnvim"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/williamboman/mason.nvim"},"mason.nvim")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  ui = {\n    icons = {\n      package_installed = "\u2713",\n      package_uninstalled = "\u2717",\n      package_pending = "\u27f3",\n    },\n  },\n}\n')),(0,i.kt)("h2",{id:"neo-treenvim"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/nvim-neo-tree/neo-tree.nvim"},"neo-tree.nvim")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'local get_icon = require("astronvim.utils").get_icon\nopts = {\n  auto_clean_after_session_restore = true,\n  close_if_last_window = true,\n  source_selector = {\n    winbar = true,\n    content_layout = "center",\n    sources = {\n      { source = "filesystem", display_name = get_icon "FolderClosed" .. " File" },\n      { source = "buffers", display_name = get_icon "DefaultFile" .. " Bufs" },\n      { source = "git_status", display_name = get_icon "Git" .. " Git" },\n      { source = "diagnostics", display_name = get_icon "Diagnostic" .. " Diagnostic" },\n    },\n  },\n  default_component_configs = {\n    indent = { padding = 0, indent_size = 1 },\n    icon = {\n      folder_closed = get_icon "FolderClosed",\n      folder_open = get_icon "FolderOpen",\n      folder_empty = get_icon "FolderEmpty",\n      default = get_icon "DefaultFile",\n    },\n    modified = { symbol = get_icon "FileModified" },\n    git_status = {\n      symbols = {\n        added = get_icon "GitAdd",\n        deleted = get_icon "GitDelete",\n        modified = get_icon "GitChange",\n        renamed = get_icon "GitRenamed",\n        untracked = get_icon "GitUntracked",\n        ignored = get_icon "GitIgnored",\n        unstaged = get_icon "GitUnstaged",\n        staged = get_icon "GitStaged",\n        conflict = get_icon "GitConflict",\n      },\n    },\n  },\n  commands = {\n    system_open = function(state) require("astronvim.utils").system_open(state.tree:get_node():get_id()) end,\n    parent_or_close = function(state)\n      local node = state.tree:get_node()\n      if (node.type == "directory" or node:has_children()) and node:is_expanded() then\n        state.commands.toggle_node(state)\n      else\n        require("neo-tree.ui.renderer").focus_node(state, node:get_parent_id())\n      end\n    end,\n    child_or_open = function(state)\n      local node = state.tree:get_node()\n      if node.type == "directory" or node:has_children() then\n        if not node:is_expanded() then -- if unexpanded, expand\n          state.commands.toggle_node(state)\n        else -- if expanded and has children, seleect the next child\n          require("neo-tree.ui.renderer").focus_node(state, node:get_child_ids()[1])\n        end\n      else -- if not a directory just open it\n        state.commands.open(state)\n      end\n    end,\n    copy_selector = function(state)\n      local node = state.tree:get_node()\n      local filepath = node:get_id()\n      local filename = node.name\n      local modify = vim.fn.fnamemodify\n\n      local results = {\n        e = { val = modify(filename, ":e"), msg = "Extension only" },\n        f = { val = filename, msg = "Filename" },\n        F = { val = modify(filename, ":r"), msg = "Filename w/o extension" },\n        h = { val = modify(filepath, ":~"), msg = "Path relative to Home" },\n        p = { val = modify(filepath, ":."), msg = "Path relative to CWD" },\n        P = { val = filepath, msg = "Absolute path" },\n      }\n\n      local messages = {\n        { "\\nChoose to copy to clipboard:\\n", "Normal" },\n      }\n      for i, result in pairs(results) do\n        if result.val and result.val ~= "" then\n          vim.list_extend(messages, {\n            { ("%s."):format(i), "Identifier" },\n            { (" %s: "):format(result.msg) },\n            { result.val, "String" },\n            { "\\n" },\n          })\n        end\n      end\n      vim.api.nvim_echo(messages, false, {})\n      local result = results[vim.fn.getcharstr()]\n      if result and result.val and result.val ~= "" then\n        vim.notify("Copied: " .. result.val)\n        vim.fn.setreg("+", result.val)\n      end\n    end,\n  },\n  window = {\n    width = 30,\n    mappings = {\n      ["<space>"] = false, -- disable space until we figure out which-key disabling\n      ["[b"] = "prev_source",\n      ["]b"] = "next_source",\n      o = "open",\n      O = "system_open",\n      h = "parent_or_close",\n      l = "child_or_open",\n      Y = "copy_selector",\n    },\n  },\n  filesystem = {\n    follow_current_file = true,\n    hijack_netrw_behavior = "open_current",\n    use_libuv_file_watcher = true,\n  },\n  event_handlers = {\n    {\n      event = "neo_tree_buffer_enter",\n      handler = function(_) vim.opt_local.signcolumn = "auto" end,\n    },\n  },\n}\n')),(0,i.kt)("h2",{id:"neodevnvim"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/folke/neodev.nvim"},"neodev.nvim")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"opts = {\n  override = function(root_dir, library)\n    if root_dir:match(astronvim.install.config) then library.plugins = true end\n    vim.b.neodev_enabled = library.enabled\n  end,\n}\n")),(0,i.kt)("h2",{id:"null-lsnvim"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/jose-elias-alvarez/null-ls.nvim"},"null-ls.nvim")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function() return { on_attach = require("astronvim.utils.lsp").on_attach } end\n')),(0,i.kt)("h2",{id:"nvim-autopairs"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/windwp/nvim-autopairs"},"nvim-autopairs")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  check_ts = true,\n  ts_config = { java = false },\n  fast_wrap = {\n    map = "<M-e>",\n    chars = { "{", "[", "(", \'"\', "\'" },\n    pattern = string.gsub([[ [%\'%"%)%>%]%)%}%,] ]], "%s+", ""),\n    offset = 0,\n    end_key = "$",\n    keys = "qwertyuiopzxcvbnmasdfghjkl",\n    check_comma = true,\n    highlight = "PmenuSel",\n    highlight_grey = "LineNr",\n  },\n}\n')),(0,i.kt)("h2",{id:"nvim-cmp"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/hrsh7th/nvim-cmp"},"nvim-cmp")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function()\n  local cmp = require "cmp"\n  local snip_status_ok, luasnip = pcall(require, "luasnip")\n  local lspkind_status_ok, lspkind = pcall(require, "lspkind")\n  if not snip_status_ok then return end\n  local border_opts =\n    { border = "single", winhighlight = "Normal:Normal,FloatBorder:FloatBorder,CursorLine:Visual,Search:None" }\n\n  local function has_words_before()\n    local line, col = unpack(vim.api.nvim_win_get_cursor(0))\n    return col ~= 0 and vim.api.nvim_buf_get_lines(0, line - 1, line, true)[1]:sub(col, col):match "%s" == nil\n  end\n\n  return {\n    enabled = function()\n      if vim.api.nvim_get_option_value("buftype", { buf = 0 }) == "prompt" then return false end\n      return vim.g.cmp_enabled\n    end,\n    preselect = cmp.PreselectMode.None,\n    formatting = {\n      fields = { "kind", "abbr", "menu" },\n      format = lspkind_status_ok and lspkind.cmp_format(astronvim.lspkind) or nil,\n    },\n    snippet = {\n      expand = function(args) luasnip.lsp_expand(args.body) end,\n    },\n    duplicates = {\n      nvim_lsp = 1,\n      luasnip = 1,\n      cmp_tabnine = 1,\n      buffer = 1,\n      path = 1,\n    },\n    confirm_opts = {\n      behavior = cmp.ConfirmBehavior.Replace,\n      select = false,\n    },\n    window = {\n      completion = cmp.config.window.bordered(border_opts),\n      documentation = cmp.config.window.bordered(border_opts),\n    },\n    mapping = {\n      ["<Up>"] = cmp.mapping.select_prev_item { behavior = cmp.SelectBehavior.Select },\n      ["<Down>"] = cmp.mapping.select_next_item { behavior = cmp.SelectBehavior.Select },\n      ["<C-p>"] = cmp.mapping.select_prev_item { behavior = cmp.SelectBehavior.Insert },\n      ["<C-n>"] = cmp.mapping.select_next_item { behavior = cmp.SelectBehavior.Insert },\n      ["<C-k>"] = cmp.mapping.select_prev_item { behavior = cmp.SelectBehavior.Insert },\n      ["<C-j>"] = cmp.mapping.select_next_item { behavior = cmp.SelectBehavior.Insert },\n      ["<C-u>"] = cmp.mapping(cmp.mapping.scroll_docs(-4), { "i", "c" }),\n      ["<C-d>"] = cmp.mapping(cmp.mapping.scroll_docs(4), { "i", "c" }),\n      ["<C-Space>"] = cmp.mapping(cmp.mapping.complete(), { "i", "c" }),\n      ["<C-y>"] = cmp.config.disable,\n      ["<C-e>"] = cmp.mapping { i = cmp.mapping.abort(), c = cmp.mapping.close() },\n      ["<CR>"] = cmp.mapping.confirm { select = false },\n      ["<Tab>"] = cmp.mapping(function(fallback)\n        if cmp.visible() then\n          cmp.select_next_item()\n        elseif luasnip.expand_or_jumpable() then\n          luasnip.expand_or_jump()\n        elseif has_words_before() then\n          cmp.complete()\n        else\n          fallback()\n        end\n      end, { "i", "s" }),\n      ["<S-Tab>"] = cmp.mapping(function(fallback)\n        if cmp.visible() then\n          cmp.select_prev_item()\n        elseif luasnip.jumpable(-1) then\n          luasnip.jump(-1)\n        else\n          fallback()\n        end\n      end, { "i", "s" }),\n    },\n    sources = cmp.config.sources {\n      { name = "nvim_lsp", priority = 1000 },\n      { name = "luasnip", priority = 750 },\n      { name = "buffer", priority = 500 },\n      { name = "path", priority = 250 },\n    },\n  }\nend\n')),(0,i.kt)("h2",{id:"nvim-colorizerlua"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/NvChad/nvim-colorizer.lua"},"nvim-colorizer.lua")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"opts = { user_default_options = { names = false } }\n")),(0,i.kt)("h2",{id:"nvim-dap-ui"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/rcarriga/nvim-dap-ui"},"nvim-dap-ui")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'opts = { floating = { border = "rounded" } }\n')),(0,i.kt)("h2",{id:"nvim-notify"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/rcarriga/nvim-notify"},"nvim-notify")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'opts = { stages = "fade" }\n')),(0,i.kt)("h2",{id:"nvim-treesitter"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/nvim-treesitter/nvim-treesitter"},"nvim-treesitter")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  autotag = { enable = true },\n  context_commentstring = { enable = true, enable_autocmd = false },\n  highlight = {\n    enable = true,\n    disable = function(_, bufnr) return vim.api.nvim_buf_line_count(bufnr) > 10000 end,\n  },\n  incremental_selection = { enable = true },\n  indent = { enable = true },\n  textobjects = {\n    select = {\n      enable = true,\n      lookahead = true,\n      keymaps = {\n        ["ak"] = "@block.outer",\n        ["ik"] = "@block.inner",\n        ["ac"] = "@class.outer",\n        ["ic"] = "@class.inner",\n        ["a?"] = "@conditional.outer",\n        ["i?"] = "@conditional.inner",\n        ["af"] = "@function.outer",\n        ["if"] = "@function.inner",\n        ["al"] = "@loop.outer",\n        ["il"] = "@loop.inner",\n        ["aa"] = "@parameter.outer",\n        ["ia"] = "@parameter.inner",\n      },\n    },\n    move = {\n      enable = true,\n      set_jumps = true,\n      goto_next_start = {\n        ["]k"] = { query = "@block.outer", desc = "Next block start" },\n        ["]c"] = { query = "@class.outer", desc = "Next class start" },\n        ["]f"] = { query = "@function.outer", desc = "Next function start" },\n        ["]a"] = { query = "@parameter.outer", desc = "Next parameter start" },\n      },\n      goto_next_end = {\n        ["]k"] = { query = "@block.outer", desc = "Next block end" },\n        ["]c"] = { query = "@class.outer", desc = "Next class end" },\n        ["]f"] = { query = "@function.outer", desc = "Next function end" },\n        ["]a"] = { query = "@parameter.outer", desc = "Next parameter end" },\n      },\n      goto_previous_start = {\n        ["[k"] = { query = "@block.outer", desc = "Previous block start" },\n        ["[c"] = { query = "@class.outer", desc = "Previous class start" },\n        ["[f"] = { query = "@function.outer", desc = "Previous function start" },\n        ["[a"] = { query = "@parameter.outer", desc = "Previous parameter start" },\n      },\n      goto_previous_end = {\n        ["[K"] = { query = "@block.outer", desc = "Previous block end" },\n        ["[C"] = { query = "@class.outer", desc = "Previous class end" },\n        ["[F"] = { query = "@function.outer", desc = "Previous function end" },\n        ["[A"] = { query = "@parameter.outer", desc = "Previous parameter end" },\n      },\n    },\n    swap = {\n      enable = true,\n      swap_next = {\n        [">k"] = { query = "@block.outer", desc = "Swap next block" },\n        [">f"] = { query = "@function.outer", desc = "Swap next function" },\n        [">a"] = { query = "@parameter.inner", desc = "Swap next parameter" },\n      },\n      swap_previous = {\n        ["<k"] = { query = "@block.outer", desc = "Swap previous block" },\n        ["<f"] = { query = "@function.outer", desc = "Swap previous function" },\n        ["<a"] = { query = "@parameter.inner", desc = "Swap previous parameter" },\n      },\n    },\n  },\n}\n')),(0,i.kt)("h2",{id:"nvim-ufo"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/kevinhwang91/nvim-ufo"},"nvim-ufo")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  preview = {\n    mappings = {\n      scrollB = "<C-b>",\n      scrollF = "<C-f>",\n      scrollU = "<C-u>",\n      scrollD = "<C-d>",\n    },\n  },\n  provider_selector = function(_, filetype, buftype)\n    return (filetype == "" or buftype == "nofile") and "indent" -- only use indent until a file is opened\n      or { "treesitter", "indent" } -- if file opened, try to use treesitter if available\n  end,\n}\n')),(0,i.kt)("h2",{id:"nvim-web-devicons"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/nvim-tree/nvim-web-devicons"},"nvim-web-devicons")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  override = {\n    default_icon = { icon = require("astronvim.utils").get_icon "DefaultFile" },\n    deb = { icon = "\uf306", name = "Deb" },\n    lock = { icon = "\udb80\udf3e", name = "Lock" },\n    mp3 = { icon = "\udb80\udf86", name = "Mp3" },\n    mp4 = { icon = "\uf144", name = "Mp4" },\n    out = { icon = "\ue612", name = "Out" },\n    ["robots.txt"] = { icon = "\udb81\udea9", name = "Robots" },\n    ttf = { icon = "\uf031", name = "TrueTypeFont" },\n    rpm = { icon = "\uf316", name = "Rpm" },\n    woff = { icon = "\uf031", name = "WebOpenFontFormat" },\n    woff2 = { icon = "\uf031", name = "WebOpenFontFormat2" },\n    xz = { icon = "\uf1c6", name = "Xz" },\n    zip = { icon = "\uf1c6", name = "Zip" },\n  },\n}\n')),(0,i.kt)("h2",{id:"nvim-window-picker"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/s1n7ax/nvim-window-picker"},"nvim-window-picker")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'opts = { use_winbar = "smart" }\n')),(0,i.kt)("h2",{id:"smart-splitsnvim"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/mrjones2014/smart-splits.nvim"},"smart-splits.nvim")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  ignored_filetypes = { "nofile", "quickfix", "qf", "prompt" },\n  ignored_buftypes = { "nofile" },\n}\n')),(0,i.kt)("h2",{id:"telescopenvim"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/nvim-telescope/telescope.nvim"},"telescope.nvim")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function()\n  local actions = require "telescope.actions"\n  local get_icon = require("astronvim.utils").get_icon\n  return {\n    defaults = {\n      prompt_prefix = string.format("%s ", get_icon "Search"),\n      selection_caret = string.format("%s ", get_icon "Selected"),\n      path_display = { "truncate" },\n      sorting_strategy = "ascending",\n      layout_config = {\n        horizontal = {\n          prompt_position = "top",\n          preview_width = 0.55,\n        },\n        vertical = {\n          mirror = false,\n        },\n        width = 0.87,\n        height = 0.80,\n        preview_cutoff = 120,\n      },\n\n      mappings = {\n        i = {\n          ["<C-n>"] = actions.cycle_history_next,\n          ["<C-p>"] = actions.cycle_history_prev,\n          ["<C-j>"] = actions.move_selection_next,\n          ["<C-k>"] = actions.move_selection_previous,\n        },\n        n = { ["q"] = actions.close },\n      },\n    },\n  }\nend\n')),(0,i.kt)("h2",{id:"toggletermnvim"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/akinsho/toggleterm.nvim"},"toggleterm.nvim")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  size = 10,\n  open_mapping = [[<F7>]],\n  shading_factor = 2,\n  direction = "float",\n  float_opts = {\n    border = "curved",\n    highlights = { border = "Normal", background = "Normal" },\n  },\n}\n')))}u.isMDXComponent=!0}}]);