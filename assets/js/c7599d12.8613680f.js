"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[1458],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),f=o,g=m["".concat(u,".").concat(f)]||m[f]||c[f]||a;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},53526:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],s={},u="Troubleshooting & FAQ",l={unversionedId:"troubleshooting/README",id:"troubleshooting/README",title:"Troubleshooting & FAQ",description:"Our FAQ is now a section on our Discourse forum. Check it out here! If you don't see your question answered, feel free to open up a new topic for it.",source:"@site/../docs/troubleshooting/README.md",sourceDirName:"troubleshooting",slug:"/troubleshooting/",permalink:"/troubleshooting/",editUrl:"https://github.com/airbytehq/airbyte/docs/../docs/troubleshooting/README.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Product Release Stages",permalink:"/project-overview/product-release-stages"},next:{title:"On Deploying",permalink:"/troubleshooting/on-deploying"}},p={},c=[{value:"Slack Issue Template",id:"slack-issue-template",level:2}],m={toc:c};function f(e){var t=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"troubleshooting--faq"},"Troubleshooting & FAQ"),(0,a.kt)("p",null,"Our FAQ is now a section on our Discourse forum. Check it out ",(0,a.kt)("a",{parentName:"p",href:"https://discuss.airbyte.io/c/faq/15"},"here"),"! If you don't see your question answered, feel free to open up a new topic for it."),(0,a.kt)("p",null,"The troubleshooting section is aimed at collecting common issues users have to provide quick solutions. There are some sections you can find:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/troubleshooting/on-deploying"},"On Deploying"),": "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/troubleshooting/new-connection"},"On Setting up a New Connection")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/troubleshooting/running-sync"},"On Running a Sync")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/troubleshooting/on-upgrading"},"On Upgrading"))),(0,a.kt)("p",null,"If you don't see your issue listed in those sections, you can send a message in our ","#","troubleshooting Slack channel. Using the template bellow will allow us to address your issue quickly and will give us full understanding of your situation."),(0,a.kt)("h2",{id:"slack-issue-template"},"Slack Issue Template"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Is this your first time deploying Airbyte"),": No / Yes",(0,a.kt)("br",{parentName:"p"}),"\n","",(0,a.kt)("strong",{parentName:"p"},"OS Version / Instance"),": Ubuntu 18.04, Mac OS, Windows, GCP , EC2 micro.a4",(0,a.kt)("br",{parentName:"p"}),"\n","",(0,a.kt)("strong",{parentName:"p"},"Memory / Disk"),": 16Gb / 1Tb SSD",(0,a.kt)("br",{parentName:"p"}),"\n","",(0,a.kt)("strong",{parentName:"p"},"Deployment"),": Docker / Kubernetes",(0,a.kt)("br",{parentName:"p"}),"\n","",(0,a.kt)("strong",{parentName:"p"},"Airbyte Version"),": 0.26.2-alpha",(0,a.kt)("br",{parentName:"p"}),"\n","",(0,a.kt)("strong",{parentName:"p"},"Source name/version"),": File 0.24",(0,a.kt)("br",{parentName:"p"}),"\n","",(0,a.kt)("strong",{parentName:"p"},"Destination name/version"),": Postgres 0.3.0",(0,a.kt)("br",{parentName:"p"}),"\n","",(0,a.kt)("strong",{parentName:"p"},"Step"),": Setting new connection, source / On sync",(0,a.kt)("br",{parentName:"p"}),"\n","",(0,a.kt)("strong",{parentName:"p"},"Description"),": I'm trying to sync for the first time and the process doesn't finish. I had enabled CDC and other cool features.   "),(0,a.kt)("p",null,"Add the logs and other relevant information in the message thread. Below is an example:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(23081).Z,width:"534",height:"620"})))}f.isMDXComponent=!0},23081:function(e,t,n){t.Z=n.p+"assets/images/issue-example-155670d31cbc77ac5c97f898e2ee49ff.png"}}]);