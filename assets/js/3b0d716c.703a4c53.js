"use strict";(self.webpackChunkastro_vim=self.webpackChunkastro_vim||[]).push([[2120],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),f=a,c=m["".concat(s,".").concat(f)]||m[f]||d[f]||r;return n?i.createElement(c,o(o({ref:t},u),{},{components:n})):i.createElement(c,o({ref:t},u))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},67250:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));const r={id:"config_mechanism",title:"Configuration Mechanism"},o=void 0,l={unversionedId:"Configuration/config_mechanism",id:"version-2.0.0/Configuration/config_mechanism",title:"Configuration Mechanism",description:"Value of runtimepath option",source:"@site/versioned_docs/version-2.0.0/Configuration/config_mechanism.md",sourceDirName:"Configuration",slug:"/Configuration/config_mechanism",permalink:"/2.0.0/Configuration/config_mechanism",draft:!1,tags:[],version:"2.0.0",frontMatter:{id:"config_mechanism",title:"Configuration Mechanism"},sidebar:"docs",previous:{title:"Basic Configuration",permalink:"/2.0.0/Configuration/basic_configuration"},next:{title:"Available User Options",permalink:"/2.0.0/Configuration/config_options"}},s={},p=[{value:"Value of <code>runtimepath</code> option",id:"value-of-runtimepath-option",level:2},{value:"Shim function and its hook points",id:"shim-function-and-its-hook-points",level:2},{value:"How AstroNvim works for user settings",id:"how-astronvim-works-for-user-settings",level:2}],u={toc:p},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"value-of-runtimepath-option"},"Value of ",(0,a.kt)("inlineCode",{parentName:"h2"},"runtimepath")," option"),(0,a.kt)("p",null,"The AstroNvim start-up code extends the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"runtimepath")," and it contains\nnot only ",(0,a.kt)("inlineCode",{parentName:"p"},"$XDG_CONFIG_HOME/nvim")," but also ",(0,a.kt)("inlineCode",{parentName:"p"},"$XDG_CONFIG_HOME/astronvim"),". Here,\n",(0,a.kt)("inlineCode",{parentName:"p"},"$XDG_CONFIG_HOME")," is normally set to ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.config"),"."),(0,a.kt)("p",null,"This allows us to place user settings under the normal path of\n",(0,a.kt)("inlineCode",{parentName:"p"},"~/.config/nvim/lua/user")," and the offset path of\n",(0,a.kt)("inlineCode",{parentName:"p"},"~/.config/astronvim/lua/user"),"."),(0,a.kt)("p",null,"Its value can be verified by ",(0,a.kt)("inlineCode",{parentName:"p"},":lua print(vim.go.runtimepath)"),"."),(0,a.kt)("h2",{id:"shim-function-and-its-hook-points"},"Shim function and its hook points"),(0,a.kt)("p",null,"Configuration mechanism of AstroNvim uses the shim function\n",(0,a.kt)("inlineCode",{parentName:"p"},"astronvim.user_plugin_opts")," (usually aliased to local variable\n",(0,a.kt)("inlineCode",{parentName:"p"},"user_plugin_opts"),") when setting default values in the upstream source. The\nresulting default values returned by this shim function are the user requested\ncombination of corresponding upstream and user settings."),(0,a.kt)("p",null,"Running ",(0,a.kt)("inlineCode",{parentName:"p"},"rg user_plugin_opts")," at the root of the source tree should reveal many\nhook points of ",(0,a.kt)("inlineCode",{parentName:"p"},"user_plugin_opts")," calls in the source where the upstream sets\ndefault values."),(0,a.kt)("h2",{id:"how-astronvim-works-for-user-settings"},"How AstroNvim works for user settings"),(0,a.kt)("p",null,"Let us describe tersely in plain words how this shim function\n",(0,a.kt)("inlineCode",{parentName:"p"},"astronvim.user_plugin_opts")," works in AstroNvim when it is called as\n",(0,a.kt)("inlineCode",{parentName:"p"},'user_plugin_opts("MODULE", DEFAULT, EXTEND)')," with a twist of\noversimplification.  This should provide some perspective for how AstroNvim\nworks for user settings."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"DEFAULT")," contains a table setting the upstream default values."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},'"MODULE"')," contains a string specifying user settings by the module or\nvariable name."),(0,a.kt)("li",{parentName:"ul"},"If the module named ",(0,a.kt)("inlineCode",{parentName:"li"},"user.MODULE")," exists, then AstroNvim obtains user\nsettings from the ",(0,a.kt)("inlineCode",{parentName:"li"},"user.MODULE")," module.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"This is the ",(0,a.kt)("a",{parentName:"li",href:"/configuration/splitting_up"},"Splitting Up Configuration")," case."),(0,a.kt)("li",{parentName:"ul"},"If the ",(0,a.kt)("inlineCode",{parentName:"li"},"EXTEND")," is ",(0,a.kt)("inlineCode",{parentName:"li"},"nil")," (missing) or ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),", settings are extended:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If the ",(0,a.kt)("inlineCode",{parentName:"li"},"user.MODULE")," module returns a table, then AstroNvim assigns the\nreturned table to the ",(0,a.kt)("inlineCode",{parentName:"li"},"MODULE")," variable, and generates settings by\ncalling the ",(0,a.kt)("inlineCode",{parentName:"li"},'vim.tbl_deep_extend("force", DEFAULT, MODULE)')," function\nextending the ",(0,a.kt)("inlineCode",{parentName:"li"},"DEFAULT")," table the ",(0,a.kt)("inlineCode",{parentName:"li"},"MODULE")," table."),(0,a.kt)("li",{parentName:"ul"},"If the ",(0,a.kt)("inlineCode",{parentName:"li"},"user.MODULE")," module returns a function, then AstroNvim assigns\nthe returned function to the ",(0,a.kt)("inlineCode",{parentName:"li"},"MODULE")," variable, and generates custom\nextended settings by calling the ",(0,a.kt)("inlineCode",{parentName:"li"},"MODULE")," function with the ",(0,a.kt)("inlineCode",{parentName:"li"},"DEFAULT")," as\nits argument."))),(0,a.kt)("li",{parentName:"ul"},"If the ",(0,a.kt)("inlineCode",{parentName:"li"},"EXTEND")," is ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),", settings are overridden:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If the ",(0,a.kt)("inlineCode",{parentName:"li"},"user.MODULE")," module returns a table, then AstroNvim ignores\n",(0,a.kt)("inlineCode",{parentName:"li"},"DEFAULT")," and generates settings from the ",(0,a.kt)("inlineCode",{parentName:"li"},"MODULE")," table."),(0,a.kt)("li",{parentName:"ul"},"If the ",(0,a.kt)("inlineCode",{parentName:"li"},"user.MODULE")," module returns a function, then AstroNvim ignores\n",(0,a.kt)("inlineCode",{parentName:"li"},"DEFAULT")," and generates settings by executing the ",(0,a.kt)("inlineCode",{parentName:"li"},"MODULE")," function."))))),(0,a.kt)("li",{parentName:"ul"},"If the module named ",(0,a.kt)("inlineCode",{parentName:"li"},"user.MODULE")," doesn't exist, then AstroNvim obtains user\nsettings from the ",(0,a.kt)("inlineCode",{parentName:"li"},"user/init.lua")," file while looking for the ",(0,a.kt)("inlineCode",{parentName:"li"},"MODULE"),"\nvariable in it.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"This is the single setting file case using the ",(0,a.kt)("inlineCode",{parentName:"li"},"user/init.lua")," file as\ndiscussed before."),(0,a.kt)("li",{parentName:"ul"},"If the ",(0,a.kt)("inlineCode",{parentName:"li"},"EXTEND")," is ",(0,a.kt)("inlineCode",{parentName:"li"},"nil")," (missing) or ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),", settings are extended:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If the ",(0,a.kt)("inlineCode",{parentName:"li"},"MODULE")," variable contains a table, then AstroNvim generates\nsettings by calling the ",(0,a.kt)("inlineCode",{parentName:"li"},'vim.tbl_deep_extend("force", DEFAULT, MODULE)'),"\nfunction extending the ",(0,a.kt)("inlineCode",{parentName:"li"},"DEFAULT")," table by the ",(0,a.kt)("inlineCode",{parentName:"li"},"MODULE")," table."),(0,a.kt)("li",{parentName:"ul"},"If the ",(0,a.kt)("inlineCode",{parentName:"li"},"MODULE")," variable contains a function, then AstroNvim generates\ncustom extended settings by calling the ",(0,a.kt)("inlineCode",{parentName:"li"},"MODULE")," function with the\n",(0,a.kt)("inlineCode",{parentName:"li"},"DEFAULT")," as its argument."))),(0,a.kt)("li",{parentName:"ul"},"If the ",(0,a.kt)("inlineCode",{parentName:"li"},"EXTEND")," is ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),", settings are overridden:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If the ",(0,a.kt)("inlineCode",{parentName:"li"},"MODULE")," variable contains a table, then AstroNvim ignores\n",(0,a.kt)("inlineCode",{parentName:"li"},"DEFAULT")," and generates settings from the ",(0,a.kt)("inlineCode",{parentName:"li"},"MODULE")," table."),(0,a.kt)("li",{parentName:"ul"},"If the ",(0,a.kt)("inlineCode",{parentName:"li"},"MODULE")," variable contains a function, then AstroNvim ignores\n",(0,a.kt)("inlineCode",{parentName:"li"},"DEFAULT")," and generates settings by executing the ",(0,a.kt)("inlineCode",{parentName:"li"},"MODULE")," function."))))),(0,a.kt)("li",{parentName:"ul"},"If neither the module named ",(0,a.kt)("inlineCode",{parentName:"li"},"user.MODULE")," nor the variable named ",(0,a.kt)("inlineCode",{parentName:"li"},"MODULE")," in\nthe ",(0,a.kt)("inlineCode",{parentName:"li"},"user/init.lua")," file exist, then AstroNvim generates settings from the\noriginal upstream ",(0,a.kt)("inlineCode",{parentName:"li"},"DEFAULT"),".")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Please note ",(0,a.kt)("inlineCode",{parentName:"p"},".")," in the lua module path corresponds to ",(0,a.kt)("inlineCode",{parentName:"p"},"/")," in the directory\npath.  Also the ",(0,a.kt)("inlineCode",{parentName:"p"},"foo.bar")," lua module may be at ",(0,a.kt)("inlineCode",{parentName:"p"},"$runtimepath/foo/bar.lua")," or\n",(0,a.kt)("inlineCode",{parentName:"p"},"$runtimepath/foo/bar/init.lua"),".")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"For the definition of ",(0,a.kt)("inlineCode",{parentName:"p"},"vim.tbl_deep_extend"),", see ",(0,a.kt)("inlineCode",{parentName:"p"},":help tbl_deep_extend"),".")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"For the actual definition of ",(0,a.kt)("inlineCode",{parentName:"p"},"user_plugin_opts")," and related functions, see\ntheir definition in ",(0,a.kt)("inlineCode",{parentName:"p"},"lua/core/utils/init.lua"),".")))}d.isMDXComponent=!0}}]);