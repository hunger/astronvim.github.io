"use strict";(self.webpackChunkastro_vim=self.webpackChunkastro_vim||[]).push([[4688],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),c=i,h=m["".concat(l,".").concat(c)]||m[c]||d[c]||r;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},91622:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={id:"autocmds",title:"Exposed Autocommands"},o=void 0,s={unversionedId:"Configuration/autocmds",id:"Configuration/autocmds",title:"Exposed Autocommands",description:"AstroNvim has man internally built features to help ease both user experience",source:"@site/docs/Configuration/autocmds.md",sourceDirName:"Configuration",slug:"/Configuration/autocmds",permalink:"/nightly/Configuration/autocmds",draft:!1,tags:[],version:"current",frontMatter:{id:"autocmds",title:"Exposed Autocommands"},sidebar:"docs",previous:{title:"Managing User Configuration",permalink:"/nightly/Configuration/manage_user_config"},next:{title:"Configuration Mechanism",permalink:"/nightly/Configuration/config_mechanism"}},l={},p=[{value:"Example Autocommand Usage",id:"example-autocommand-usage",level:3}],u={toc:p},m="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"AstroNvim has man internally built features to help ease both user experience\nand configuration. Some of these features work asynchronously, so we provide a\nfew ",(0,i.kt)("inlineCode",{parentName:"p"},"User")," autocommand events that can be accessed by the user. All of the\nautocommand events that we provide are in the ",(0,i.kt)("inlineCode",{parentName:"p"},"User")," autocommand space and the\npatterns begin with ",(0,i.kt)("inlineCode",{parentName:"p"},"Astro"),". Here is a complete list of all of the events that\nwe provide as well as descriptions on when they happen. For a list of the core\nNeovim autocmd events, check the help page with ",(0,i.kt)("inlineCode",{parentName:"p"},":h autocmd-events"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"AstroBufsUpdated"),": AstroNvim uses a vim-tab local variable for managing\nbuffers displayed in our custom ",(0,i.kt)("inlineCode",{parentName:"p"},"tabline"),". This is stored in ",(0,i.kt)("inlineCode",{parentName:"p"},"vim.t.bufs"),".\n",(0,i.kt)("inlineCode",{parentName:"p"},"AstroBufsUpdated")," is triggered every time we update this ",(0,i.kt)("inlineCode",{parentName:"p"},"vim.t.bufs"),"\nvariable internally.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"AstroColorScheme"),": The ",(0,i.kt)("inlineCode",{parentName:"p"},"highlights")," configuration option in the user\nconfiguration provides an easy to use API for customizing highlight groups\nfor all themes or specific themes even if the theme plugins do not provide\ngood configuration APIs. ",(0,i.kt)("inlineCode",{parentName:"p"},"AstroColorScheme")," is triggered after we finish\napplying these custom highlights when a new colorscheme is applied.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"AstroFile"),": AstroNvim uses this autocmd event for lazy loading plugins\non the first real file opened for editing. This can also be used by the user.\nThis event fires every time a file is opened with a non-empty filename.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"AstroGitFile"),": AstroNvim uses this autocmd event for lazy loading git related\nplugins. This event fires every time a file is opened that is in a git tracked\ndirectory.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"AstroLspSetup"),": AstroNvim has a lot of internal tooling surrounding setting\nup handlers for the interal LSP mechanisms. ",(0,i.kt)("inlineCode",{parentName:"p"},"AstroLspSetup")," is triggered when\nwe have finished setting up these handlers and configuring ",(0,i.kt)("inlineCode",{parentName:"p"},"lspconfig"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"AstroMasonUpdateCompleted"),": AstroNvim provides a custom command for easily\nupdating all packages that are currently installed with Mason using\n",(0,i.kt)("inlineCode",{parentName:"p"},":MasonUpdateAll"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"AstroMasonUpdateCompleted")," is triggered after all of the\navailable updates have been applied.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"AstroUpdateComplete"),": This is triggered once the AstroNvim updater has\ncompleted the update process. This could be useful for automatically quitting\nthe editor after an update to quickly relaunch."))),(0,i.kt)("h3",{id:"example-autocommand-usage"},"Example Autocommand Usage"),(0,i.kt)("p",null,"Just to demonstrate the usage of ",(0,i.kt)("inlineCode",{parentName:"p"},"User")," autocommand events in Neovim here is an\nexample ",(0,i.kt)("inlineCode",{parentName:"p"},"autocmd")," that disables the ",(0,i.kt)("inlineCode",{parentName:"p"},"tabline")," if there is only a single buffer\nand a single tab available. The following can be placed in the ",(0,i.kt)("inlineCode",{parentName:"p"},"polish"),"\nfunction in a user configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'-- create an augroup to easily manage autocommands\nvim.api.nvim_create_augroup("autohidetabline", { clear = true })\n-- create a new autocmd on the "User" event\nvim.api.nvim_create_autocmd("User", {\n  desc = "Hide tabline when only one buffer and one tab", -- nice description\n  -- triggered when vim.t.bufs is updated\n  pattern = "AstroBufsUpdated", -- the pattern si the name of our User autocommand events\n  group = "autohidetabline", -- add the autocmd to the newly created augroup\n  callback = function()\n    -- if there is more than one buffer in the tab, show the tabline\n    -- if there are 0 or 1 buffers in the tab, only show the tabline if there is more than one vim tab\n    local new_showtabline = #vim.t.bufs > 1 and 2 or 1\n    -- check if the new value is the same as the current value\n    if new_showtabline ~= vim.opt.showtabline:get() then\n      -- if it is different, then set the new `showtabline` value\n      vim.opt.showtabline = new_showtabline\n    end\n  end,\n})\n')))}d.isMDXComponent=!0}}]);