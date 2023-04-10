"use strict";(self.webpackChunkastro_vim=self.webpackChunkastro_vim||[]).push([[80686],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),g=c(r),m=o,f=g["".concat(s,".").concat(m)]||g[m]||u[m]||l;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[g]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<l;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6189:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const l={id:"telescope_theme",title:"NvChad Telescope Theme"},a=void 0,i={unversionedId:"Recipes/telescope_theme",id:"version-2.6.0/Recipes/telescope_theme",title:"NvChad Telescope Theme",description:"This code snippet makes the default theme telescope look like the default NvChad telescope theme:",source:"@site/versioned_docs/version-2.6.0/Recipes/telescope_theme.md",sourceDirName:"Recipes",slug:"/Recipes/telescope_theme",permalink:"/2.6.0/Recipes/telescope_theme",draft:!1,tags:[],version:"2.6.0",frontMatter:{id:"telescope_theme",title:"NvChad Telescope Theme"},sidebar:"docs",previous:{title:"Customizing Statusline",permalink:"/2.6.0/Recipes/status"},next:{title:"Unattended Installation",permalink:"/2.6.0/Recipes/unattended_install"}},s={},c=[],p={toc:c},g="wrapper";function u(e){let{components:t,...l}=e;return(0,o.kt)(g,(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This code snippet makes the default theme telescope look like the default NvChad telescope theme:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Screenshot of telescope theme",src:r(59810).Z,width:"1862",height:"1022"})),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"user/init.lua"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  highlights = {\n    -- set highlights for all themes\n    -- use a function override to let us use lua to retrieve colors from highlight group\n    -- there is no default table so we don\'t need to put a parameter for this function\n    init = function()\n      -- get highlights from highlight groups\n      local normal = astronvim.get_hlgroup "Normal"\n      local fg, bg = normal.fg, normal.bg\n      local bg_alt = astronvim.get_hlgroup("Visual").bg\n      local green = astronvim.get_hlgroup("String").fg\n      local red = astronvim.get_hlgroup("Error").fg\n      -- return a table of highlights for telescope based on colors gotten from highlight groups\n      return {\n        TelescopeBorder = { fg = bg_alt, bg = bg },\n        TelescopeNormal = { bg = bg },\n        TelescopePreviewBorder = { fg = bg, bg = bg },\n        TelescopePreviewNormal = { bg = bg },\n        TelescopePreviewTitle = { fg = bg, bg = green },\n        TelescopePromptBorder = { fg = bg_alt, bg = bg_alt },\n        TelescopePromptNormal = { fg = fg, bg = bg_alt },\n        TelescopePromptPrefix = { fg = red, bg = bg_alt },\n        TelescopePromptTitle = { fg = bg, bg = red },\n        TelescopeResultsBorder = { fg = bg, bg = bg },\n        TelescopeResultsNormal = { bg = bg },\n        TelescopeResultsTitle = { fg = bg, bg = bg },\n      }\n    end,\n  },\n}\n')))}u.isMDXComponent=!0},59810:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/telescope_theme-1b19c5c15be46b41edede74d6ad0ae01.png"}}]);