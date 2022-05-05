"use strict";(self.webpackChunkastro_vim=self.webpackChunkastro_vim||[]).push([[426],{3905:function(e,t,n){n.d(t,{Zo:function(){return i},kt:function(){return g}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),a=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},i=function(e){var t=a(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),f=a(n),g=o,m=f["".concat(s,".").concat(g)]||f[g]||u[g]||l;return n?r.createElement(m,c(c({ref:t},i),{},{components:n})):r.createElement(m,c({ref:t},i))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,c=new Array(l);c[0]=f;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,c[1]=p;for(var a=2;a<l;a++)c[a]=n[a];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9882:function(e,t,n){n.r(t),n.d(t,{assets:function(){return i},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return p},metadata:function(){return a},toc:function(){return u}});var r=n(7462),o=n(3366),l=(n(7294),n(3905)),c=["components"],p={id:"telescope_theme",title:"NvChad Telescope Theme"},s=void 0,a={unversionedId:"recipes/telescope_theme",id:"recipes/telescope_theme",title:"NvChad Telescope Theme",description:"This code snippet make the default theme telescope look like the default NvChad telescope theme:",source:"@site/docs/recipes/telescope_theme.md",sourceDirName:"recipes",slug:"/recipes/telescope_theme",permalink:"/recipes/telescope_theme",tags:[],version:"current",frontMatter:{id:"telescope_theme",title:"NvChad Telescope Theme"},sidebar:"docs",previous:{title:"Manually Add LSP",permalink:"/recipes/manual_lsp"},next:{title:"Unattended Installation",permalink:"/recipes/unattended_install"}},i={},u=[],f={toc:u};function g(e){var t=e.components,p=(0,o.Z)(e,c);return(0,l.kt)("wrapper",(0,r.Z)({},f,p,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This code snippet make the default theme telescope look like the default NvChad telescope theme:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Screenshot of telescope theme",src:n(9810).Z,width:"1862",height:"1022"})),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"user/init.lua"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  default_theme = {\n    colors = function(C)\n      C.telescope_green = C.green\n      C.telescope_red = C.red\n      C.telescope_fg = C.fg\n      C.telescope_bg = C.black_1\n      C.telescope_bg_alt = C.bg_1\n      return C\n    end,\n    highlights = function(hl)\n      local C = require "default_theme.colors"\n      hl.LvimInfoHeader = { fg = C.telescope_bg, bg = C.telescope_green }\n      hl.LvimInfoIdentifier = { fg = C.telescope_red, bg = C.telescope_bg_alt }\n      hl.TelescopeBorder = { fg = C.telescope_bg_alt, bg = C.telescope_bg }\n      hl.TelescopeNormal = { bg = C.telescope_bg }\n      hl.TelescopePreviewBorder = { fg = C.telescope_bg, bg = C.telescope_bg }\n      hl.TelescopePreviewNormal = { bg = C.telescope_bg }\n      hl.TelescopePreviewTitle = { fg = C.telescope_bg, bg = C.telescope_green }\n      hl.TelescopePromptBorder = { fg = C.telescope_bg_alt, bg = C.telescope_bg_alt }\n      hl.TelescopePromptNormal = { fg = C.telescope_fg, bg = C.telescope_bg_alt }\n      hl.TelescopePromptPrefix = { fg = C.telescope_red, bg = C.telescope_bg_alt }\n      hl.TelescopePromptTitle = { fg = C.telescope_bg, bg = C.telescope_red }\n      hl.TelescopeResultsBorder = { fg = C.telescope_bg, bg = C.telescope_bg }\n      hl.TelescopeResultsNormal = { bg = C.telescope_bg }\n      hl.TelescopeResultsTitle = { fg = C.telescope_bg, bg = C.telescope_bg }\n      return hl\n    end,\n  },\n}\n')))}g.isMDXComponent=!0},9810:function(e,t,n){t.Z=n.p+"assets/images/telescope_theme-e8afecd9d0d8fc0b2b343d573c0a37cc.png"}}]);