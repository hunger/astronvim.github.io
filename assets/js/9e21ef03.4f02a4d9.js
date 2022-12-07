"use strict";(self.webpackChunkastro_vim=self.webpackChunkastro_vim||[]).push([[1210],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=s(n),m=i,k=u["".concat(p,".").concat(m)]||u[m]||c[m]||r;return n?o.createElement(k,l(l({ref:t},d),{},{components:n})):o.createElement(k,l({ref:t},d))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[u]="string"==typeof e?e:i,l[1]=a;for(var s=2;s<r;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},64590:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>s});var o=n(87462),i=(n(67294),n(3905));const r={id:"walkthrough",title:"Basic Walkthrough",sidebar_position:1},l=void 0,a={unversionedId:"Basic Usage/walkthrough",id:"Basic Usage/walkthrough",title:"Basic Walkthrough",description:"Opening file explorer",source:"@site/docs/Basic Usage/walkthough.md",sourceDirName:"Basic Usage",slug:"/Basic Usage/walkthrough",permalink:"/nightly/Basic Usage/walkthrough",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"walkthrough",title:"Basic Walkthrough",sidebar_position:1},sidebar:"docs",previous:{title:"Getting Started",permalink:"/nightly/"},next:{title:"Default Mappings",permalink:"/nightly/Basic Usage/mappings"}},p={},s=[{value:"Opening file explorer",id:"opening-file-explorer",level:3},{value:"Opening terminal",id:"opening-terminal",level:3},{value:"Opening LSP symbols",id:"opening-lsp-symbols",level:3},{value:"Close buffer",id:"close-buffer",level:3},{value:"Commenting",id:"commenting",level:3},{value:"Show line diagnostics",id:"show-line-diagnostics",level:3},{value:"Hover document",id:"hover-document",level:3},{value:"Open rename prompt",id:"open-rename-prompt",level:3},{value:"Go to definition",id:"go-to-definition",level:3},{value:"Code actions",id:"code-actions",level:3},{value:"Telescope search",id:"telescope-search",level:3},{value:"Telescope grep",id:"telescope-grep",level:3},{value:"Telescope git status",id:"telescope-git-status",level:3},{value:"Telescope old files",id:"telescope-old-files",level:3},{value:"Which key",id:"which-key",level:3},{value:"Navigate buffers",id:"navigate-buffers",level:3},{value:"Navigate windows",id:"navigate-windows",level:3},{value:"Resizing buffers",id:"resizing-buffers",level:3}],d={toc:s};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"opening-file-explorer"},"Opening file explorer"),(0,i.kt)("p",null,"To toggle file explorer you need to press ",(0,i.kt)("inlineCode",{parentName:"p"},"Space")," + ",(0,i.kt)("inlineCode",{parentName:"p"},"e")),(0,i.kt)("h3",{id:"opening-terminal"},"Opening terminal"),(0,i.kt)("p",null,"To toggle terminal you need to press ",(0,i.kt)("inlineCode",{parentName:"p"},"F7")),(0,i.kt)("h3",{id:"opening-lsp-symbols"},"Opening LSP symbols"),(0,i.kt)("p",null,"To toggle symbols outline you need to press ",(0,i.kt)("inlineCode",{parentName:"p"},"Space")," + ",(0,i.kt)("inlineCode",{parentName:"p"},"lS")),(0,i.kt)("h3",{id:"close-buffer"},"Close buffer"),(0,i.kt)("p",null,"To close the current buffer you need to press ",(0,i.kt)("inlineCode",{parentName:"p"},"Space")," + ",(0,i.kt)("inlineCode",{parentName:"p"},"c")),(0,i.kt)("h3",{id:"commenting"},"Commenting"),(0,i.kt)("p",null,"To comment on a one or multiple lines you need to press ",(0,i.kt)("inlineCode",{parentName:"p"},"Space")," + ",(0,i.kt)("inlineCode",{parentName:"p"},"/")),(0,i.kt)("h3",{id:"show-line-diagnostics"},"Show line diagnostics"),(0,i.kt)("p",null,"To see line diagnostics you need to press ",(0,i.kt)("inlineCode",{parentName:"p"},"g")," + ",(0,i.kt)("inlineCode",{parentName:"p"},"l")),(0,i.kt)("h3",{id:"hover-document"},"Hover document"),(0,i.kt)("p",null,"To hover over a document you need to press ",(0,i.kt)("inlineCode",{parentName:"p"},"Shift")," + ",(0,i.kt)("inlineCode",{parentName:"p"},"k")),(0,i.kt)("h3",{id:"open-rename-prompt"},"Open rename prompt"),(0,i.kt)("p",null,"To open rename prompt you need to press ",(0,i.kt)("inlineCode",{parentName:"p"},"Space")," + ",(0,i.kt)("inlineCode",{parentName:"p"},"lr")),(0,i.kt)("h3",{id:"go-to-definition"},"Go to definition"),(0,i.kt)("p",null,"To go to the definition you need to press ",(0,i.kt)("inlineCode",{parentName:"p"},"g")," + ",(0,i.kt)("inlineCode",{parentName:"p"},"d")),(0,i.kt)("h3",{id:"code-actions"},"Code actions"),(0,i.kt)("p",null,"To use code actions you need to press ",(0,i.kt)("inlineCode",{parentName:"p"},"Space")," + ",(0,i.kt)("inlineCode",{parentName:"p"},"la")),(0,i.kt)("h3",{id:"telescope-search"},"Telescope search"),(0,i.kt)("p",null,"To find files you need to press ",(0,i.kt)("inlineCode",{parentName:"p"},"Space")," + ",(0,i.kt)("inlineCode",{parentName:"p"},"ff")),(0,i.kt)("h3",{id:"telescope-grep"},"Telescope grep"),(0,i.kt)("p",null,"To grep files you need to press ",(0,i.kt)("inlineCode",{parentName:"p"},"Space")," + ",(0,i.kt)("inlineCode",{parentName:"p"},"fw")),(0,i.kt)("h3",{id:"telescope-git-status"},"Telescope git status"),(0,i.kt)("p",null,"To get git status you need to press ",(0,i.kt)("inlineCode",{parentName:"p"},"Space")," + ",(0,i.kt)("inlineCode",{parentName:"p"},"gt")),(0,i.kt)("h3",{id:"telescope-old-files"},"Telescope old files"),(0,i.kt)("p",null,"To find old files you need to press ",(0,i.kt)("inlineCode",{parentName:"p"},"Space")," + ",(0,i.kt)("inlineCode",{parentName:"p"},"fo")),(0,i.kt)("h3",{id:"which-key"},"Which key"),(0,i.kt)("p",null,"You can use which key plugin to get a menu of some helpful key bindings by pressing ",(0,i.kt)("inlineCode",{parentName:"p"},"Space")),(0,i.kt)("h3",{id:"navigate-buffers"},"Navigate buffers"),(0,i.kt)("p",null,"To switch to the left buffer you need to press ",(0,i.kt)("inlineCode",{parentName:"p"},"Shift")," + ",(0,i.kt)("inlineCode",{parentName:"p"},"h")),(0,i.kt)("p",null,"To switch to the right buffer you need to press ",(0,i.kt)("inlineCode",{parentName:"p"},"Shift")," + ",(0,i.kt)("inlineCode",{parentName:"p"},"l")),(0,i.kt)("h3",{id:"navigate-windows"},"Navigate windows"),(0,i.kt)("p",null,"To switch to the left window you need to press ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl")," + ",(0,i.kt)("inlineCode",{parentName:"p"},"h")),(0,i.kt)("p",null,"To switch to the right window you need to press ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl")," + ",(0,i.kt)("inlineCode",{parentName:"p"},"l")),(0,i.kt)("p",null,"To switch to the top window you need to press ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl")," + ",(0,i.kt)("inlineCode",{parentName:"p"},"k")),(0,i.kt)("p",null,"To switch to the bottom window you need to press ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl")," + ",(0,i.kt)("inlineCode",{parentName:"p"},"j")),(0,i.kt)("h3",{id:"resizing-buffers"},"Resizing buffers"),(0,i.kt)("p",null,"To resize buffer to the left you need to press ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl")," + ",(0,i.kt)("inlineCode",{parentName:"p"},"left key")),(0,i.kt)("p",null,"To resize buffer to the right you need to press ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl")," + ",(0,i.kt)("inlineCode",{parentName:"p"},"right key")),(0,i.kt)("p",null,"To resize buffer to the top you need to press ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl")," + ",(0,i.kt)("inlineCode",{parentName:"p"},"up key")),(0,i.kt)("p",null,"To resize buffer to the bottom you need to press ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl")," + ",(0,i.kt)("inlineCode",{parentName:"p"},"down key")))}u.isMDXComponent=!0}}]);