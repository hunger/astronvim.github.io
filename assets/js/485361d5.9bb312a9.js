"use strict";(self.webpackChunkastro_vim=self.webpackChunkastro_vim||[]).push([[50942],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>f});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),c=p(t),d=i,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return t?r.createElement(f,a(a({ref:n},l),{},{components:t})):r.createElement(f,a({ref:n},l))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var u={};for(var s in n)hasOwnProperty.call(n,s)&&(u[s]=n[s]);u.originalType=e,u[c]="string"==typeof e?e:i,a[1]=u;for(var p=2;p<o;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},46995:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var r=t(87462),i=(t(67294),t(3905));const o={id:"autopairs",title:"Customize Autopairs"},a=void 0,u={unversionedId:"Recipes/autopairs",id:"version-3.2.0/Recipes/autopairs",title:"Customize Autopairs",description:"Add Custom Rules to nvim-autopairs",source:"@site/versioned_docs/version-3.2.0/Recipes/autopairs.md",sourceDirName:"Recipes",slug:"/Recipes/autopairs",permalink:"/3.2.0/Recipes/autopairs",draft:!1,tags:[],version:"3.2.0",frontMatter:{id:"autopairs",title:"Customize Autopairs"},sidebar:"docs",previous:{title:"Dashboard Customizations",permalink:"/3.2.0/Recipes/alpha"},next:{title:"Disable cmdheight=0",permalink:"/3.2.0/Recipes/cmdheight"}},s={},p=[{value:"Add Custom Rules to <code>nvim-autopairs</code>",id:"add-custom-rules-to-nvim-autopairs",level:3}],l={toc:p},c="wrapper";function m(e){let{components:n,...t}=e;return(0,i.kt)(c,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"add-custom-rules-to-nvim-autopairs"},"Add Custom Rules to ",(0,i.kt)("inlineCode",{parentName:"h3"},"nvim-autopairs")),(0,i.kt)("p",null,"You can easily add rules and further configure ",(0,i.kt)("inlineCode",{parentName:"p"},"nvim-autopairs")," in your user configuration by overriding the configuration function of the ",(0,i.kt)("inlineCode",{parentName:"p"},"nvim-autopairs")," plugin. Here is a example minimal ",(0,i.kt)("inlineCode",{parentName:"p"},"user/init.lua")," configuration file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  plugins = {\n    { -- override nvim-autopairs plugin\n      "windwp/nvim-autopairs",\n      config = function(plugin, opts)\n        -- run default AstroNvim config\n        require "plugins.configs.nvim-autopairs"(plugin, opts)\n        -- require Rule function\n        local Rule = require "nvim-autopairs.rule"\n        local npairs = require "nvim-autopairs"\n        npairs.add_rules {\n          {\n            -- specify a list of rules to add\n            Rule(" ", " "):with_pair(function(options)\n              local pair = options.line:sub(options.col - 1, options.col)\n              return vim.tbl_contains({ "()", "[]", "{}" }, pair)\n            end),\n            Rule("( ", " )")\n              :with_pair(function() return false end)\n              :with_move(function(options) return options.prev_char:match ".%)" ~= nil end)\n              :use_key ")",\n            Rule("{ ", " }")\n              :with_pair(function() return false end)\n              :with_move(function(options) return options.prev_char:match ".%}" ~= nil end)\n              :use_key "}",\n            Rule("[ ", " ]")\n              :with_pair(function() return false end)\n              :with_move(function(options) return options.prev_char:match ".%]" ~= nil end)\n              :use_key "]",\n          },\n        }\n      end,\n    },\n  },\n}\n')))}m.isMDXComponent=!0}}]);