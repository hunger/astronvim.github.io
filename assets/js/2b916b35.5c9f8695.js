"use strict";(self.webpackChunkastro_vim=self.webpackChunkastro_vim||[]).push([[63165],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=i,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1125:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const a={id:"unattended_install",title:"Unattended Installation"},o=void 0,l={unversionedId:"Recipes/unattended_install",id:"version-2.9.0/Recipes/unattended_install",title:"Unattended Installation",description:"Instead of running nvim to initialize AstroNvim you can run the",source:"@site/versioned_docs/version-2.9.0/Recipes/unattended_install.md",sourceDirName:"Recipes",slug:"/Recipes/unattended_install",permalink:"/2.9.0/Recipes/unattended_install",draft:!1,tags:[],version:"2.9.0",frontMatter:{id:"unattended_install",title:"Unattended Installation"},sidebar:"docs",previous:{title:"NvChad Telescope Theme",permalink:"/2.9.0/Recipes/telescope_theme"},next:{title:"Acknowledgements",permalink:"/2.9.0/acknowledgements"}},c={},s=[],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Instead of running ",(0,i.kt)("inlineCode",{parentName:"p"},"nvim")," to initialize AstroNvim you can run the\nfollowing command to do a fully headless initialization:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"nvim  --headless -c 'autocmd User PackerComplete quitall'\n")),(0,i.kt)("p",null,"Full Steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"git clone https://github.com/AstroNvim/AstroNvim ~/.config/nvim")),(0,i.kt)("li",{parentName:"ol"},"(Optional) ",(0,i.kt)("inlineCode",{parentName:"li"},"git clone"),"/copy over user configuration to ",(0,i.kt)("inlineCode",{parentName:"li"},"~/.config/nvim/user")),(0,i.kt)("li",{parentName:"ol"},"`nvim --headless -c 'autocmd User PackerComplete quitall'")))}d.isMDXComponent=!0}}]);