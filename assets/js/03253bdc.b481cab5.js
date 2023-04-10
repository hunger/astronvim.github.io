"use strict";(self.webpackChunkastro_vim=self.webpackChunkastro_vim||[]).push([[48079],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=l(t),m=i,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||a;return t?r.createElement(f,o(o({ref:n},p),{},{components:t})):r.createElement(f,o({ref:n},p))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var u={};for(var s in n)hasOwnProperty.call(n,s)&&(u[s]=n[s]);u.originalType=e,u[c]="string"==typeof e?e:i,o[1]=u;for(var l=2;l<a;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},91975:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>u,toc:()=>l});var r=t(87462),i=(t(67294),t(3905));const a={id:"autopairs",title:"Customize Autopairs"},o=void 0,u={unversionedId:"Recipes/autopairs",id:"version-2.10.0/Recipes/autopairs",title:"Customize Autopairs",description:"Add Custom Rules to nvim-autopairs",source:"@site/versioned_docs/version-2.10.0/Recipes/autopairs.md",sourceDirName:"Recipes",slug:"/Recipes/autopairs",permalink:"/2.10.0/Recipes/autopairs",draft:!1,tags:[],version:"2.10.0",frontMatter:{id:"autopairs",title:"Customize Autopairs"},sidebar:"docs",previous:{title:"Dashboard Customizations",permalink:"/2.10.0/Recipes/alpha"},next:{title:"Disable cmdheight=0",permalink:"/2.10.0/Recipes/cmdheight"}},s={},l=[{value:"Add Custom Rules to <code>nvim-autopairs</code>",id:"add-custom-rules-to-nvim-autopairs",level:3}],p={toc:l},c="wrapper";function d(e){let{components:n,...t}=e;return(0,i.kt)(c,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"add-custom-rules-to-nvim-autopairs"},"Add Custom Rules to ",(0,i.kt)("inlineCode",{parentName:"h3"},"nvim-autopairs")),(0,i.kt)("p",null,"We have provided a simple API in the user configuration to easily add custom rules to ",(0,i.kt)("inlineCode",{parentName:"p"},"nvim-autopairs"),". This is done with the ",(0,i.kt)("inlineCode",{parentName:"p"},"nvim-autopairs.add_rules")," table. Here is a example minimal ",(0,i.kt)("inlineCode",{parentName:"p"},"user/init.lua")," configuration file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  ["nvim-autopairs"] = function()\n    -- require Rule function\n    local Rule = require "nvim-autopairs.rule"\n    return {\n      -- return table that is used in `npairs.add_rules({...})` call\n      add_rules = {\n        -- specify a list of rules to add\n        Rule(" ", " "):with_pair(function(opts)\n          local pair = opts.line:sub(opts.col - 1, opts.col)\n          return vim.tbl_contains({ "()", "[]", "{}" }, pair)\n        end),\n        Rule("( ", " )")\n          :with_pair(function() return false end)\n          :with_move(function(opts) return opts.prev_char:match ".%)" ~= nil end)\n          :use_key ")",\n        Rule("{ ", " }")\n          :with_pair(function() return false end)\n          :with_move(function(opts) return opts.prev_char:match ".%}" ~= nil end)\n          :use_key "}",\n        Rule("[ ", " ]")\n          :with_pair(function() return false end)\n          :with_move(function(opts) return opts.prev_char:match ".%]" ~= nil end)\n          :use_key "]",\n      },\n    }\n  end,\n}\n')),(0,i.kt)("p",null,"Here we use the ",(0,i.kt)("inlineCode",{parentName:"p"},"function")," notation so that we can run ",(0,i.kt)("inlineCode",{parentName:"p"},"require")," safely on ",(0,i.kt)("inlineCode",{parentName:"p"},"nvim-autopairs"),". Another approach is to split up your configuration and put the following in ",(0,i.kt)("inlineCode",{parentName:"p"},"user/nvim-autopairs.lua")," which will automatically be loaded when it is needed:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'local Rule = require "nvim-autopairs.rule"\n\nreturn {\n  -- return table that is used in `npairs.add_rules({...})` call\n  add_rules = {\n    -- specify a list of rules to add\n    Rule(" ", " "):with_pair(function(opts)\n      local pair = opts.line:sub(opts.col - 1, opts.col)\n      return vim.tbl_contains({ "()", "[]", "{}" }, pair)\n    end),\n    Rule("( ", " )")\n      :with_pair(function() return false end)\n      :with_move(function(opts) return opts.prev_char:match ".%)" ~= nil end)\n      :use_key ")",\n    Rule("{ ", " }")\n      :with_pair(function() return false end)\n      :with_move(function(opts) return opts.prev_char:match ".%}" ~= nil end)\n      :use_key "}",\n    Rule("[ ", " ]")\n      :with_pair(function() return false end)\n      :with_move(function(opts) return opts.prev_char:match ".%]" ~= nil end)\n      :use_key "]",\n  },\n}\n')))}d.isMDXComponent=!0}}]);