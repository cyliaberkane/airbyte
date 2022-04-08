"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[1418],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),p=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(r),f=n,d=m["".concat(o,".").concat(f)]||m[f]||c[f]||s;return r?a.createElement(d,l(l({ref:t},u),{},{components:r})):a.createElement(d,l({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,l=new Array(s);l[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<s;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},27891:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return f},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var a=r(87462),n=r(63366),s=(r(67294),r(3905)),l=["components"],i={},o="Freshsales",p={unversionedId:"integrations/sources/freshsales",id:"integrations/sources/freshsales",title:"Freshsales",description:"Overview",source:"@site/../docs/integrations/sources/freshsales.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/freshsales",permalink:"/integrations/sources/freshsales",editUrl:"https://github.com/airbytehq/airbyte/docs/../docs/integrations/sources/freshsales.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Freshdesk",permalink:"/integrations/sources/freshdesk"},next:{title:"Freshservice",permalink:"/integrations/sources/freshservice"}},u={},c=[{value:"Overview",id:"overview",level:2},{value:"Output schema",id:"output-schema",level:3},{value:"Features",id:"features",level:3},{value:"Performance considerations",id:"performance-considerations",level:3},{value:"Getting started",id:"getting-started",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Setup guide",id:"setup-guide",level:3},{value:"Changelog",id:"changelog",level:2}],m={toc:c};function f(e){var t=e.components,r=(0,n.Z)(e,l);return(0,s.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"freshsales"},"Freshsales"),(0,s.kt)("h2",{id:"overview"},"Overview"),(0,s.kt)("p",null,"The Freshsales supports full refresh syncs."),(0,s.kt)("h3",{id:"output-schema"},"Output schema"),(0,s.kt)("p",null,"Several output streams are available from this source:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://developers.freshworks.com/crm/api/#contacts"},"Contacts")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://developers.freshworks.com/crm/api/#accounts"},"Accounts")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://developers.freshworks.com/crm/api/#deals"},"Open Deals")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://developers.freshworks.com/crm/api/#deals"},"Won Deals")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://developers.freshworks.com/crm/api/#deals"},"Lost Deals")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://developers.freshworks.com/crm/api/#tasks"},"Open Tasks")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://developers.freshworks.com/crm/api/#tasks"},"Completed Tasks")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://developers.freshworks.com/crm/api/#appointments"},"Past appointments")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://developers.freshworks.com/crm/api/#appointments"},"Upcoming appointments"))),(0,s.kt)("p",null,"If there are more endpoints you'd like Airbyte to support, please ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues/new/choose"},"create an issue.")),(0,s.kt)("h3",{id:"features"},"Features"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Supported?"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"Incremental Sync"),(0,s.kt)("td",{parentName:"tr",align:"left"},"No")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"SSL connection"),(0,s.kt)("td",{parentName:"tr",align:"left"},"No")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,s.kt)("td",{parentName:"tr",align:"left"},"No")))),(0,s.kt)("h3",{id:"performance-considerations"},"Performance considerations"),(0,s.kt)("p",null,"The Freshsales connector should not run into Freshsales API limitations under normal usage. Please ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues"},"create an issue")," if you see any rate limit issues that are not automatically retried successfully."),(0,s.kt)("h2",{id:"getting-started"},"Getting started"),(0,s.kt)("h3",{id:"requirements"},"Requirements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Freshsales Account"),(0,s.kt)("li",{parentName:"ul"},"Freshsales API Key"),(0,s.kt)("li",{parentName:"ul"},"Freshsales domain name")),(0,s.kt)("h3",{id:"setup-guide"},"Setup guide"),(0,s.kt)("p",null,"Please read ",(0,s.kt)("a",{parentName:"p",href:"https://crmsupport.freshworks.com/support/solutions/articles/50000002503-how-to-find-my-api-key-"},"How to find your API key"),"."),(0,s.kt)("h2",{id:"changelog"},"Changelog"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"0.1.1"),(0,s.kt)("td",{parentName:"tr",align:"left"},"2021-12-24"),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9101"},"9101")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Update fields and descriptions")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,s.kt)("td",{parentName:"tr",align:"left"},"2021-11-03"),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6963"},"6963")),(0,s.kt)("td",{parentName:"tr",align:"left"},"\ud83c\udf89 New Source: Freshsales")))))}f.isMDXComponent=!0}}]);