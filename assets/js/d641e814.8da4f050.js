"use strict";(self.webpackChunkastro_vim=self.webpackChunkastro_vim||[]).push([[63609],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),f=i,d=u["".concat(s,".").concat(f)]||u[f]||b[f]||a;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},10750:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>b,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const a={id:"disable_winbar",title:"Disable Winbar"},o=void 0,l={unversionedId:"Recipes/disable_winbar",id:"version-3.10.0/Recipes/disable_winbar",title:"Disable Winbar",description:"By default AstroNvim enables the new winbar that comes with Neovim v0.8+. Some users may not like this behavior and prefer to not have a winbar at the top of each window. You can do this by overriding the heirline plugin configuration.",source:"@site/versioned_docs/version-3.10.0/Recipes/disable_winbar.md",sourceDirName:"Recipes",slug:"/Recipes/disable_winbar",permalink:"/Recipes/disable_winbar",draft:!1,tags:[],version:"3.10.0",frontMatter:{id:"disable_winbar",title:"Disable Winbar"},sidebar:"docs",previous:{title:"Disable Tabline",permalink:"/Recipes/disable_tabline"},next:{title:"Disable Global Statusbar",permalink:"/Recipes/globalstatus"}},s={},c=[],p={toc:c},u="wrapper";function b(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"By default AstroNvim enables the new winbar that comes with Neovim v0.8+. Some users may not like this behavior and prefer to not have a winbar at the top of each window. You can do this by overriding the ",(0,i.kt)("inlineCode",{parentName:"p"},"heirline")," plugin configuration."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  plugins = {\n    {\n      "rebelot/heirline.nvim",\n      opts = function(_, opts)\n        opts.winbar = nil\n        return opts\n      end\n    },\n  },\n}\n')))}b.isMDXComponent=!0}}]);