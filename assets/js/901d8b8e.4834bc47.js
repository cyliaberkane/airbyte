"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[2842],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return f}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),u=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(i.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(t),f=o,y=m["".concat(i,".").concat(f)]||m[f]||l[f]||c;return t?n.createElement(y,a(a({ref:r},p),{},{components:t})):n.createElement(y,a({ref:r},p))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=t.length,a=new Array(c);a[0]=m;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<c;u++)a[u]=t[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},22958:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return l}});var n=t(87462),o=t(63366),c=(t(67294),t(3905)),a=["components"],s={},i="Spree Commerce",u={unversionedId:"integrations/sources/spree-commerce",id:"integrations/sources/spree-commerce",title:"Spree Commerce",description:"Spree Commerce is an open source eCommerce platform for global brands.",source:"@site/../docs/integrations/sources/spree-commerce.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/spree-commerce",permalink:"/integrations/sources/spree-commerce",editUrl:"https://github.com/airbytehq/airbyte/docs/../docs/integrations/sources/spree-commerce.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Snowflake",permalink:"/integrations/sources/snowflake"},next:{title:"Square",permalink:"/integrations/sources/square"}},p={},l=[{value:"Sync overview",id:"sync-overview",level:2},{value:"Output schema",id:"output-schema",level:3}],m={toc:l};function f(e){var r=e.components,t=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"spree-commerce"},"Spree Commerce"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"https://spreecommerce.org/"},"Spree Commerce")," is an open source eCommerce platform for global brands."),(0,c.kt)("h2",{id:"sync-overview"},"Sync overview"),(0,c.kt)("p",null,"Spree Commerce can run on the MySQL or Postgres databases. You can use Airbyte to sync your Spree Commerce instance by connecting to the underlying database using the appropriate Airbyte connector:"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/integrations/sources/mysql"},"MySQL")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/integrations/sources/postgres"},"Postgres"))),(0,c.kt)("p",null,'{% hint style="info" %}\nReach out to your service representative or system admin to find the parameters required to connect to the underlying database\n{% endhint %}'),(0,c.kt)("h3",{id:"output-schema"},"Output schema"),(0,c.kt)("p",null,"The Spree Commerce schema is described in the ",(0,c.kt)("a",{parentName:"p",href:"https://dev-docs.spreecommerce.org/internals/"},"Spree Internals")," section of the Spree docs. Otherwise, the schema will follow the rules of the MySQL or Postgres connectors."))}f.isMDXComponent=!0}}]);