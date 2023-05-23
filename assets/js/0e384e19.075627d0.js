"use strict";(self.webpackChunkastro_vim=self.webpackChunkastro_vim||[]).push([[59671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,h=m["".concat(u,".").concat(d)]||m[d]||c[d]||l;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(87462),r=n(67294),l=n(86010),i=n(12466),o=n(16550),u=n(91980),s=n(67392),p=n(50012);function m(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function c(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??m(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=c(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[u,s]=h({queryString:n,groupId:a}),[m,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,p.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),k=(()=>{const e=u??m;return d({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{k&&o(k)}),[k]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),s(e),g(e)}),[s,g,l]),tabValues:l}}var k=n(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:o,selectValue:u,tabValues:s}=e;const p=[],{blockElementScrollPositionUntilNextRender:m}=(0,i.o5)(),c=e=>{const t=e.currentTarget,n=p.indexOf(t),a=s[n].value;a!==o&&(m(t),u(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>p.push(e),onKeyDown:d,onClick:c},i,{className:(0,l.Z)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":o===t})}),n??t)})))}function b(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=g(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",f.tabList)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(b,(0,a.Z)({},e,t)))}function N(e){const t=(0,k.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},59881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var a=n(87462),r=(n(67294),n(3905)),l=n(74866),i=n(85162);const o={id:"intro",title:"Getting Started",slug:"/",sidebar_position:1},u=void 0,s={unversionedId:"intro",id:"intro",title:"Getting Started",description:"If you are on AstroNvim v2.0 and are upgrading to AstroNvim v3.0 please see the",source:"@site/docs/intro.md",sourceDirName:".",slug:"/",permalink:"/nightly/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"intro",title:"Getting Started",slug:"/",sidebar_position:1},sidebar:"docs",next:{title:"Basic Walkthrough",permalink:"/nightly/Basic Usage/walkthrough"}},p={},m=[{value:"\u26a1 Requirements",id:"-requirements",level:2},{value:"\ud83d\udee0\ufe0f Installation",id:"\ufe0f-installation",level:2},{value:"Make a backup of your current nvim folder",id:"make-a-backup-of-your-current-nvim-folder",level:4},{value:"Clean neovim folders (Optional but recommended)",id:"clean-neovim-folders-optional-but-recommended",level:4},{value:"Clone the repository",id:"clone-the-repository",level:4},{value:"Make a backup of your current nvim folder",id:"make-a-backup-of-your-current-nvim-folder-1",level:4},{value:"Clean old plugins (Optional but recommended)",id:"clean-old-plugins-optional-but-recommended",level:4},{value:"Clone the repository",id:"clone-the-repository-1",level:4},{value:"\ud83d\udce6 Setup",id:"-setup",level:2},{value:"Install LSP",id:"install-lsp",level:4},{value:"Install language parser",id:"install-language-parser",level:4},{value:"Install Debugger",id:"install-debugger",level:4},{value:"Manage plugins",id:"manage-plugins",level:4},{value:"Update AstroNvim",id:"update-astronvim",level:4},{value:"Update AstroNvim Packages",id:"update-astronvim-packages",level:4},{value:"Reload AstroNvim (<em>EXPERIMENTAL</em>)",id:"reload-astronvim-experimental",level:4},{value:"\u2728 Features",id:"-features",level:2},{value:"\u2699\ufe0f Configuration",id:"\ufe0f-configuration",level:2},{value:"\ud83d\udce6 Community Plugin Configurations",id:"-community-plugin-configurations",level:2},{value:"\u2757\ufe0f General tips",id:"\ufe0f-general-tips",level:2}],c={toc:m},d="wrapper";function h(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If you are on AstroNvim v2.0 and are upgrading to AstroNvim v3.0 please see the\n",(0,r.kt)("a",{parentName:"p",href:"/nightly/Configuration/v3_migration"},"Migration to v3.0 Page"),"!")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"AstroNvim Screenshot",src:n(5708).Z,width:"1920",height:"1080"})),(0,r.kt)("p",null,"AstroNvim is an aesthetic and feature-rich neovim config that is extensible and easy to use with a great set of plugins"),(0,r.kt)("h2",{id:"-requirements"},"\u26a1 Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.nerdfonts.com/font-downloads"},"Nerd Fonts")," (",(0,r.kt)("em",{parentName:"li"},"Optional with manual intervention:")," See ",(0,r.kt)("a",{parentName:"li",href:"Recipes/icons#disable-icons"},"Recipes/Customizing Icons"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/neovim/neovim/releases/tag/stable"},"Neovim v0.8+ (",(0,r.kt)("em",{parentName:"a"},"Not")," including nightly)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/tree-sitter/tree-sitter/blob/master/cli/README.md"},"Tree-sitter CLI")," (",(0,r.kt)("em",{parentName:"li"},"Note:")," This is only necessary if you want to use ",(0,r.kt)("inlineCode",{parentName:"li"},"auto_install")," feature with Treesitter)"),(0,r.kt)("li",{parentName:"ul"},"A clipboard tool is necessary for the integration with the system clipboard (see ",(0,r.kt)("a",{parentName:"li",href:"https://neovim.io/doc/user/provider.html#clipboard-tool"},(0,r.kt)("inlineCode",{parentName:"a"},":help clipboard-tool"))," for supported solutions)"),(0,r.kt)("li",{parentName:"ul"},"Terminal with true color support (for the default theme, otherwise it is dependent on the theme you are using)"),(0,r.kt)("li",{parentName:"ul"},"Optional Requirements:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/BurntSushi/ripgrep"},"ripgrep")," - live grep telescope search (",(0,r.kt)("inlineCode",{parentName:"li"},"<leader>fw"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/jesseduffield/lazygit"},"lazygit")," - git ui toggle terminal (",(0,r.kt)("inlineCode",{parentName:"li"},"<leader>tl")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"<leader>gg"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/dundee/gdu"},"go DiskUsage()")," - disk usage toggle terminal (",(0,r.kt)("inlineCode",{parentName:"li"},"<leader>tu"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/ClementTsang/bottom"},"bottom")," - process viewer toggle terminal (",(0,r.kt)("inlineCode",{parentName:"li"},"<leader>tt"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.python.org/"},"Python")," - python repl toggle terminal (",(0,r.kt)("inlineCode",{parentName:"li"},"<leader>tp"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/"},"Node")," - Node is needed for a lot of the LSPs, and for the node repl toggle terminal (",(0,r.kt)("inlineCode",{parentName:"li"},"<leader>tn"),")")))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"When using default theme: For MacOS, the default terminal does not have true color support. You will need to use ",(0,r.kt)("a",{parentName:"p",href:"https://iterm2.com/"},"iTerm2")," or another ",(0,r.kt)("a",{parentName:"p",href:"https://gist.github.com/XVilka/8346728#terminal-emulators"},"terminal emulator")," that has true color support.")),(0,r.kt)("h2",{id:"\ufe0f-installation"},"\ud83d\udee0\ufe0f Installation"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"nix",label:"Linux/Mac OS (Unix)",default:!0,mdxType:"TabItem"},(0,r.kt)("h4",{id:"make-a-backup-of-your-current-nvim-folder"},"Make a backup of your current nvim folder"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"mv ~/.config/nvim ~/.config/nvim.bak\n")),(0,r.kt)("h4",{id:"clean-neovim-folders-optional-but-recommended"},"Clean neovim folders (Optional but recommended)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"mv ~/.local/share/nvim ~/.local/share/nvim.bak\nmv ~/.local/state/nvim ~/.local/state/nvim.bak\nmv ~/.cache/nvim ~/.cache/nvim.bak\n")),(0,r.kt)("h4",{id:"clone-the-repository"},"Clone the repository"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"git clone --depth 1 https://github.com/AstroNvim/AstroNvim ~/.config/nvim\nnvim\n"))),(0,r.kt)(i.Z,{value:"windoze",label:"Windows (PowerShell)",default:!0,mdxType:"TabItem"},(0,r.kt)("h4",{id:"make-a-backup-of-your-current-nvim-folder-1"},"Make a backup of your current nvim folder"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"Move-Item $env:LOCALAPPDATA\\nvim $env:LOCALAPPDATA\\nvim.bak\n")),(0,r.kt)("h4",{id:"clean-old-plugins-optional-but-recommended"},"Clean old plugins (Optional but recommended)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"Move-Item $env:LOCALAPPDATA\\nvim-data $env:LOCALAPPDATA\\nvim-data.bak\n")),(0,r.kt)("h4",{id:"clone-the-repository-1"},"Clone the repository"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"git clone --depth 1 https://github.com/AstroNvim/AstroNvim $env:LOCALAPPDATA\\nvim\nnvim\n"))),(0,r.kt)(i.Z,{value:"docker",label:"Docker",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"If you want to try AstroNvim before installing you can use the following Docker command to open a test instance without touching your current Neovim configuration. This also allows you to use ",(0,r.kt)("inlineCode",{parentName:"p"},":TSInstall")," and ",(0,r.kt)("inlineCode",{parentName:"p"},":LspInstall")," to load and evaluate language servers and treesitter parsers as well."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"docker run -w /root -it --rm alpine:edge sh -uelic '\n  apk add bash git lua nodejs npm lazygit bottom python3 go neovim ripgrep alpine-sdk --update\n  git clone --depth 1 https://github.com/AstroNvim/AstroNvim ~/.config/nvim\n  # Uncomment the line below and replace the link with your user config repo to load a user config\n  # git clone https://github.com/username/AstroNvim_user ~/.config/nvim/lua/user\n  nvim\n'\n")))),(0,r.kt)("h2",{id:"-setup"},"\ud83d\udce6 Setup"),(0,r.kt)("h4",{id:"install-lsp"},"Install LSP"),(0,r.kt)("p",null,"Enter ",(0,r.kt)("inlineCode",{parentName:"p"},":LspInstall")," followed by the name of the server you want to install"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Example: ",(0,r.kt)("inlineCode",{parentName:"p"},":LspInstall pyright"))),(0,r.kt)("h4",{id:"install-language-parser"},"Install language parser"),(0,r.kt)("p",null,"Enter ",(0,r.kt)("inlineCode",{parentName:"p"},":TSInstall")," followed by the name of the language you want to install"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Example: ",(0,r.kt)("inlineCode",{parentName:"p"},":TSInstall python"))),(0,r.kt)("h4",{id:"install-debugger"},"Install Debugger"),(0,r.kt)("p",null,"Enter ",(0,r.kt)("inlineCode",{parentName:"p"},":DapInstall")," followed by the name of the debugger you want to install"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Example: ",(0,r.kt)("inlineCode",{parentName:"p"},":DapInstall python"))),(0,r.kt)("h4",{id:"manage-plugins"},"Manage plugins"),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},":Lazy check")," to check for plugin updates"),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},":Lazy update")," to apply any pending plugin updates"),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},":Lazy clean")," to remove any disabled or unused plugins"),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},":Lazy sync")," to update and clean plugins"),(0,r.kt)("h4",{id:"update-astronvim"},"Update AstroNvim"),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},":AstroUpdate")," (",(0,r.kt)("inlineCode",{parentName:"p"},"<leader>pA"),") to get the latest updates from the repository"),(0,r.kt)("h4",{id:"update-astronvim-packages"},"Update AstroNvim Packages"),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},":AstroUpdatePackages")," (",(0,r.kt)("inlineCode",{parentName:"p"},"<leader>pa"),") to update both Neovim plugins and Mason packages"),(0,r.kt)("h4",{id:"reload-astronvim-experimental"},"Reload AstroNvim (",(0,r.kt)("em",{parentName:"h4"},"EXPERIMENTAL"),")"),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},":AstroReload")," to reload the AstroNvim configuration and any new user configuration changes without restarting. This is currently an experimental feature and may lead to instability until the next restart."),(0,r.kt)("h2",{id:"-features"},"\u2728 Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Statusline, Winbar, and Tabline with ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/rebelot/heirline.nvim"},"Heirline")),(0,r.kt)("li",{parentName:"ul"},"Plugin management with ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/folke/lazy.nvim"},"lazy.nvim")),(0,r.kt)("li",{parentName:"ul"},"Package management with ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/williamboman/mason.nvim"},"mason.nvim")),(0,r.kt)("li",{parentName:"ul"},"File explorer with ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/nvim-neo-tree/neo-tree.nvim"},"Neo-tree")),(0,r.kt)("li",{parentName:"ul"},"Autocompletion with ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/hrsh7th/nvim-cmp"},"Cmp")),(0,r.kt)("li",{parentName:"ul"},"Git integration with ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/lewis6991/gitsigns.nvim"},"Gitsigns")),(0,r.kt)("li",{parentName:"ul"},"Terminal with ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/akinsho/toggleterm.nvim"},"Toggleterm")),(0,r.kt)("li",{parentName:"ul"},"Fuzzy finding with ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/nvim-telescope/telescope.nvim"},"Telescope")),(0,r.kt)("li",{parentName:"ul"},"Syntax highlighting with ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/nvim-treesitter/nvim-treesitter"},"Treesitter")),(0,r.kt)("li",{parentName:"ul"},"Formatting and linting with ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/jose-elias-alvarez/null-ls.nvim"},"Null-ls")),(0,r.kt)("li",{parentName:"ul"},"Language Server Protocol with ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/neovim/nvim-lspconfig"},"Native LSP"))),(0,r.kt)("h2",{id:"\ufe0f-configuration"},"\u2699\ufe0f Configuration"),(0,r.kt)("p",null,"To begin making custom user configurations you must create a ",(0,r.kt)("inlineCode",{parentName:"p"},"user/")," folder. We have created a template repository for easily making a user configuration file: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/AstroNvim/user_example"},"Astronvim/user_example")),(0,r.kt)("p",null,"The provided template repo can be used to create a new user configuration repository on your GitHub account or cloned directly. After creating a new repository from the template you can run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/<username>/<config_repo> ~/.config/nvim/lua/user\n")),(0,r.kt)("h2",{id:"-community-plugin-configurations"},"\ud83d\udce6 Community Plugin Configurations"),(0,r.kt)("p",null,"To avoid duplication of effort, you can use community-provided setups from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/AstroNvim/astrocommunity"},"AstroCommunity repository"),". For example, to enable language tools (LSP and DAP etc.) for Rust and Python, your ",(0,r.kt)("inlineCode",{parentName:"p"},"plugins/community.lua")," file can look like the following."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Disclaimer: These setups might not always work. Think of them as VSCode extensions or AUR build scripts, separate from the main AstroNvim project. Report any issues to the ",(0,r.kt)("a",{parentName:"strong",href:"https://github.com/AstroNvim/astrocommunity"},"AstroCommunity")," maintainers, not the AstroNvim maintainers.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  -- Add the community repository of plugin specifications\n  "AstroNvim/astrocommunity",\n  -- example of imporing a plugin, comment out to use it or add your own\n  -- available plugins can be found at https://github.com/AstroNvim/astrocommunity\n  -- { import = "astrocommunity.colorscheme.catppuccin" },\n  { import = "astrocommunity.pack.rust" },\n  { import = "astrocommunity.pack.python" },\n}\n')),(0,r.kt)("h2",{id:"\ufe0f-general-tips"},"\u2757\ufe0f General tips"),(0,r.kt)("p",null,"For more information on the organization of config files and general usage of AstroNvim, be sure to check out the excellent ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=GEHPiZ10gOk"},"youtube tutorial"),"."),(0,r.kt)("p",null,"More advanced LSP setups can also be found in ",(0,r.kt)("a",{parentName:"p",href:"/nightly/Recipes/advanced_lsp"},"Recipes"),". Note that whenever you see ",(0,r.kt)("inlineCode",{parentName:"p"},"plugins = { <inner_code_block> }"),", you can also put the ",(0,r.kt)("inlineCode",{parentName:"p"},"<inner_code_block>")," into ",(0,r.kt)("inlineCode",{parentName:"p"},"plugins/user.lua")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"plugins/*.lua")," (they will all be merged into the final plugins spec, and the lua code ",(0,r.kt)("inlineCode",{parentName:"p"},"plugins = {...}")," acts like the directory structure ",(0,r.kt)("inlineCode",{parentName:"p"},"plugins/..."),")."))}h.isMDXComponent=!0},5708:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/overview-5af09d12ff00455df138660519208019.png"}}]);