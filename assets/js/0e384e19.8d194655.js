"use strict";(self.webpackChunkastro_vim=self.webpackChunkastro_vim||[]).push([[671],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return c}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=m(n),c=i,h=d["".concat(p,".").concat(c)]||d[c]||u[c]||r;return n?a.createElement(h,l(l({ref:t},s),{},{components:n})):a.createElement(h,l({ref:t},s))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var m=2;m<r;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9881:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return o},metadata:function(){return m},toc:function(){return u}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),l=["components"],o={id:"intro",title:"Getting Started",slug:"/"},p=void 0,m={unversionedId:"intro",id:"intro",title:"Getting Started",description:"AstroNvim Screenshot",source:"@site/docs/intro.md",sourceDirName:".",slug:"/",permalink:"/",tags:[],version:"current",frontMatter:{id:"intro",title:"Getting Started",slug:"/"},sidebar:"docs",next:{title:"Basic Walkthrough",permalink:"/usage/walkthrough"}},s={},u=[{value:"\u26a1 Requirements",id:"-requirements",level:2},{value:"\ud83d\udee0\ufe0f Installation",id:"\ufe0f-installation",level:2},{value:"Make a backup of your current nvim folder",id:"make-a-backup-of-your-current-nvim-folder",level:4},{value:"Clean old plugins (Optional but recommended)",id:"clean-old-plugins-optional-but-recommended",level:4},{value:"Clone the repository",id:"clone-the-repository",level:4},{value:"\ud83d\udce6 Setup",id:"-setup",level:2},{value:"Install LSP",id:"install-lsp",level:4},{value:"Install language parser",id:"install-language-parser",level:4},{value:"Manage plugins",id:"manage-plugins",level:4},{value:"Update AstroNvim",id:"update-astronvim",level:4},{value:"\u2728 Features",id:"-features",level:2},{value:"\u2699\ufe0f Configuration",id:"\ufe0f-configuration",level:2}],d={toc:u};function c(e){var t=e.components,o=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"AstroNvim Screenshot",src:n(5708).Z,width:"1920",height:"1080"})),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"AstroNvim v1.4.0 has added ",(0,r.kt)("inlineCode",{parentName:"p"},"stable")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"nightly")," update channels. For the time being we have kept the default update channel to ",(0,r.kt)("inlineCode",{parentName:"p"},"nightly")," so that the behavior of AstroNvim doesn't change (this could be considered a breaking change to some). We are planning to make the ",(0,r.kt)("inlineCode",{parentName:"p"},"stable"),' channel the default update channel when Neovim v0.8 is released and we tag AstroNvim v2.0.0 to incorporate this "breaking" change.'))),(0,r.kt)("h2",{id:"-requirements"},"\u26a1 Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.nerdfonts.com/font-downloads"},"Nerd Fonts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/neovim/neovim/releases/tag/v0.7.0"},"Neovim 0.7+")),(0,r.kt)("li",{parentName:"ul"},"Terminal with true color support (for the default theme, otherwise it is dependent on the theme you are using)"),(0,r.kt)("li",{parentName:"ul"},"Optional Requirements:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/BurntSushi/ripgrep"},"ripgrep")," - live grep telescope search (",(0,r.kt)("inlineCode",{parentName:"li"},"<leader>fw"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/jesseduffield/lazygit"},"lazygit")," - git ui toggle terminal (",(0,r.kt)("inlineCode",{parentName:"li"},"<leader>tl")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"<leader>gg"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dev.yorhel.nl/ncdu"},"NCDU")," - disk usage toggle terminal (",(0,r.kt)("inlineCode",{parentName:"li"},"<leader>tu"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://htop.dev/"},"Htop")," - process viewer toggle terminal (",(0,r.kt)("inlineCode",{parentName:"li"},"<leader>tt"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.python.org/"},"Python")," - python repl toggle terminal (",(0,r.kt)("inlineCode",{parentName:"li"},"<leader>tp"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/"},"Node")," - node repl toggle terminal (",(0,r.kt)("inlineCode",{parentName:"li"},"<leader>tn"),")")))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"When using default theme: For MacOS, the default terminal does not have true color support. You wil need to use ",(0,r.kt)("a",{parentName:"p",href:"https://iterm2.com/"},"iTerm2")," or another ",(0,r.kt)("a",{parentName:"p",href:"https://gist.github.com/XVilka/8346728#terminal-emulators"},"terminal emulator")," that has true color support."))),(0,r.kt)("h2",{id:"\ufe0f-installation"},"\ud83d\udee0\ufe0f Installation"),(0,r.kt)("h4",{id:"make-a-backup-of-your-current-nvim-folder"},"Make a backup of your current nvim folder"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"mv ~/.config/nvim ~/.config/nvim.bak\n")),(0,r.kt)("h4",{id:"clean-old-plugins-optional-but-recommended"},"Clean old plugins (Optional but recommended)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"mv ~/.local/share/nvim/site ~/.local/share/nvim/site.bak\n")),(0,r.kt)("h4",{id:"clone-the-repository"},"Clone the repository"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/AstroNvim/AstroNvim ~/.config/nvim\nnvim +PackerSync\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you are still using Neovim v0.6 you can still use the last version of AstroNvim prior to the Neovim v0.7 release. After running the ",(0,r.kt)("inlineCode",{parentName:"p"},"git clone")," command above please checkout the ",(0,r.kt)("inlineCode",{parentName:"p"},"nvim-0.6")," branch like so:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre"},"git -C ~/.config/nvim checkout nvim-0.6\n")),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("em",{parentName:"p"},"Note:")," This branch will not be updated after the Neovim v0.7 release and will not get any new features or bug fixes."))),(0,r.kt)("h2",{id:"-setup"},"\ud83d\udce6 Setup"),(0,r.kt)("h4",{id:"install-lsp"},"Install LSP"),(0,r.kt)("p",null,"Enter ",(0,r.kt)("inlineCode",{parentName:"p"},":LspInstall")," followed by the name of the server you want to install"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Example: ",(0,r.kt)("inlineCode",{parentName:"p"},":LspInstall pyright"))),(0,r.kt)("h4",{id:"install-language-parser"},"Install language parser"),(0,r.kt)("p",null,"Enter ",(0,r.kt)("inlineCode",{parentName:"p"},":TSInstall")," followed by the name of the language you want to install"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Example: ",(0,r.kt)("inlineCode",{parentName:"p"},":TSInstall python"))),(0,r.kt)("h4",{id:"manage-plugins"},"Manage plugins"),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},":PackerClean")," to remove any disabled or unused plugins"),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},":PackerSync")," to update and clean plugins"),(0,r.kt)("h4",{id:"update-astronvim"},"Update AstroNvim"),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},":AstroUpdate")," to get the latest updates from the repository"),(0,r.kt)("h2",{id:"-features"},"\u2728 Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"File explorer with ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/nvim-neo-tree/neo-tree.nvim"},"Neo-tree")),(0,r.kt)("li",{parentName:"ul"},"Autocompletion with ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/hrsh7th/nvim-cmp"},"Cmp")),(0,r.kt)("li",{parentName:"ul"},"Git integration with ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/lewis6991/gitsigns.nvim"},"Gitsigns")),(0,r.kt)("li",{parentName:"ul"},"Statusline with ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/feline-nvim/feline.nvim"},"Feline")),(0,r.kt)("li",{parentName:"ul"},"Terminal with ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/akinsho/toggleterm.nvim"},"Toggleterm")),(0,r.kt)("li",{parentName:"ul"},"Fuzzy finding with ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/nvim-telescope/telescope.nvim"},"Telescope")),(0,r.kt)("li",{parentName:"ul"},"Syntax highlighting with ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/nvim-treesitter/nvim-treesitter"},"Treesitter")),(0,r.kt)("li",{parentName:"ul"},"Formatting and linting with ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/jose-elias-alvarez/null-ls.nvim"},"Null-ls")),(0,r.kt)("li",{parentName:"ul"},"Language Server Protocol with ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/neovim/nvim-lspconfig"},"Native LSP"))),(0,r.kt)("h2",{id:"\ufe0f-configuration"},"\u2699\ufe0f Configuration"),(0,r.kt)("p",null,"To begin making custom user configurations you must create a ",(0,r.kt)("inlineCode",{parentName:"p"},"user/")," folder. The provided example can be created with (please note the trailing slashes after the directory names)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cp -r ~/.config/nvim/lua/user_example/ ~/.config/nvim/lua/user/\n")),(0,r.kt)("p",null,"The provided example\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/AstroNvim/AstroNvim/blob/main/lua/user_example"},"user_example"),"\ncontains an ",(0,r.kt)("inlineCode",{parentName:"p"},"init.lua")," file which can be used for all user configuration. After\nrunning the ",(0,r.kt)("inlineCode",{parentName:"p"},"cp")," command above this file can be found in\n",(0,r.kt)("inlineCode",{parentName:"p"},"~/.config/nvim/lua/user/init.lua"),"."))}c.isMDXComponent=!0},5708:function(e,t,n){t.Z=n.p+"assets/images/overview-10e85680b1d467fe27792aedeb271efa.png"}}]);