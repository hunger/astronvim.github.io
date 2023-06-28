"use strict";(self.webpackChunkastro_vim=self.webpackChunkastro_vim||[]).push([[65825],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),c=i,h=m["".concat(s,".").concat(c)]||m[c]||d[c]||r;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},89312:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={id:"updater",title:"Managing AstroNvim Updates"},o=void 0,l={unversionedId:"Configuration/updater",id:"version-3.29.0/Configuration/updater",title:"Managing AstroNvim Updates",description:"Features",source:"@site/versioned_docs/version-3.29.0/Configuration/updater.md",sourceDirName:"Configuration",slug:"/Configuration/updater",permalink:"/Configuration/updater",draft:!1,tags:[],version:"3.29.0",frontMatter:{id:"updater",title:"Managing AstroNvim Updates"},sidebar:"docs",previous:{title:"Splitting Up Configuration",permalink:"/Configuration/splitting_up"},next:{title:"Migration to v3.0",permalink:"/Configuration/v3_migration"}},s={},p=[{value:"Features",id:"features",level:2},{value:"Update Channels",id:"update-channels",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Options",id:"options",level:3}],u={toc:p},m="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"stable")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"nightly")," update channels"),(0,i.kt)("li",{parentName:"ul"},"pinning your updater to a specific commit/branch/stable version"),(0,i.kt)("li",{parentName:"ul"},"allow AstroNvim to completely manage updates for core provided plugins in a stable way"),(0,i.kt)("li",{parentName:"ul"},"will prompt the user if there are breaking changes before updating as well as show the full changelog after a successful update"),(0,i.kt)("li",{parentName:"ul"},"setting and managing custom remote repositories"),(0,i.kt)("li",{parentName:"ul"},"show the changelog at the end of an update")),(0,i.kt)("h2",{id:"update-channels"},"Update Channels"),(0,i.kt)("p",null,"As of AstroNvim ",(0,i.kt)("inlineCode",{parentName:"p"},"v1.4.0")," we have adopted a release model using two channels: ",(0,i.kt)("inlineCode",{parentName:"p"},"stable")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"nightly"),". They each have a few different features and goals:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Stable")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"stable")," update channel is meant to provide tracking of officially tagged releases that should be the most stable experience that you can achieve with no fear of plugin updates breaking your editor or anything. With each stable release we release a snapshot of the core provided plugins and their latest working commit at the time of release. By default on the ",(0,i.kt)("inlineCode",{parentName:"p"},"stable")," channel AstroNvim will use these snapshots to pin all of the core plugins to these commits and keep them from updating and potentially bringing in breaking changes. These tagged releases also will happen a lot less frequently and each update will come with several changes/bug fixes/features/etc. There is also the ability to filter what versions you want to update to for example if you only want to stay in ",(0,i.kt)("inlineCode",{parentName:"p"},"v1.X")," and never update to ",(0,i.kt)("inlineCode",{parentName:"p"},"v2")," whenever it gets released that can be configured. The updater will also warn you if there are any breaking changes included in the update that may require manual updating of your user configuration, and ask if you want to continue or abort the process."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Nightly")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"nightly")," update channel is meant for people who want more regular updates and follow the latest and greatest features real time. This also by default does not track pinned plugin versions and the core plugins are able to update freely with the package manager."),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"Here is the complete set of configuration options for the ",(0,i.kt)("inlineCode",{parentName:"p"},"updater")," table in your ",(0,i.kt)("inlineCode",{parentName:"p"},"user/init.lua")," file as well as the default values:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'updater = {\n  channel = "nightly",\n  remote = "origin",\n  version = "latest",\n  branch = "main",\n  commit = nil,\n  pin_plugins = nil,\n  skip_prompts = false,\n  show_changelog = true,\n  auto_quit = false,\n  -- remotes = { -- easily add new remotes to track\n  --   ["remote_name"] = "https://remote_url.come/repo.git", -- full remote url\n  --   ["remote2"] = "github_user/repo", -- GitHub user/repo shortcut,\n  --   ["remote3"] = "github_user", -- GitHub user assumes user/AstroNvim.git\n  -- },\n},\n')),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"channel"),": This can be either ",(0,i.kt)("inlineCode",{parentName:"li"},'"nightly"')," or ",(0,i.kt)("inlineCode",{parentName:"li"},'"stable"')," and those two options are described above"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"remote"),": This lets you choose to use a separate remote outside of the ",(0,i.kt)("inlineCode",{parentName:"li"},"origin")," which can be useful for checking out other forks and testing PRs from community members"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"version"),": (",(0,i.kt)("inlineCode",{parentName:"li"},"stable")," only) This allows you to apply a filter for searching for versions. ",(0,i.kt)("inlineCode",{parentName:"li"},'"latest"')," is automatically treated as ",(0,i.kt)("inlineCode",{parentName:"li"},'"v*"'),", other examples can be exact versions (",(0,i.kt)("inlineCode",{parentName:"li"},"v1.4.0"),") or search filters (",(0,i.kt)("inlineCode",{parentName:"li"},"v1.*"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"branch"),": (",(0,i.kt)("inlineCode",{parentName:"li"},"nightly")," only) This allows you to check out a different branch on the specified ",(0,i.kt)("inlineCode",{parentName:"li"},"remote")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"commit"),": (",(0,i.kt)("inlineCode",{parentName:"li"},"nightly")," only) This allows you to pin the ",(0,i.kt)("inlineCode",{parentName:"li"},"nightly")," updates to a specific commit"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pin_plugins"),": This value controls the automatic management of core plugin commits. This can either be ",(0,i.kt)("inlineCode",{parentName:"li"},"nil")," (default) which will pin plugin commits only on ",(0,i.kt)("inlineCode",{parentName:"li"},"stable"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"false")," which completely disables it, ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," which enables it for both ",(0,i.kt)("inlineCode",{parentName:"li"},"stable")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"nightly"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"skip_prompts"),": This lets you skip the confirmation prompts in the update process and automatically accept each one"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"show_changelog"),": This allows you to skip the printing of the complete changelog at the end of the update"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"auto_quit"),": This allows you to automatically quit AstroNvim after a successful update to quickly reopen Neovim."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"remotes"),": This is a configuration table for easily setting up more remotes for AstroNvim to pull from. The above example shows the different formats for the URL that are supported and once a remote is defined, the key can be used in the ",(0,i.kt)("inlineCode",{parentName:"li"},"remote")," option field.")))}d.isMDXComponent=!0}}]);