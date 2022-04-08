"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[3773],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),y=u(t),f=o,d=y["".concat(l,".").concat(f)]||y[f]||p[f]||i;return t?r.createElement(d,c(c({ref:n},s),{},{components:t})):r.createElement(d,c({ref:n},s))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,c=new Array(i);c[0]=y;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var u=2;u<i;u++)c[u]=t[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},53627:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return p}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),c=["components"],a={},l="On AWS ECS (Coming Soon)",u={unversionedId:"deploying-airbyte/on-aws-ecs",id:"deploying-airbyte/on-aws-ecs",title:"On AWS ECS \\(Coming Soon\\)",description:'{% hint style="info" %}',source:"@site/../docs/deploying-airbyte/on-aws-ecs.md",sourceDirName:"deploying-airbyte",slug:"/deploying-airbyte/on-aws-ecs",permalink:"/deploying-airbyte/on-aws-ecs",editUrl:"https://github.com/airbytehq/airbyte/docs/../docs/deploying-airbyte/on-aws-ecs.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"On AWS \\(EC2\\)",permalink:"/deploying-airbyte/on-aws-ec2"},next:{title:"On Azure\\(VM\\)",permalink:"/deploying-airbyte/on-azure-vm-cloud-shell"}},s={},p=[],y={toc:p};function f(e){var n=e.components,t=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"on-aws-ecs-coming-soon"},"On AWS ECS ","(","Coming Soon",")"),(0,i.kt)("p",null,'{% hint style="info" %}\nWe do not currently support deployment on ECS.\n{% endhint %}'),(0,i.kt)("p",null,"The current iteration is not compatible with ECS. Airbyte currently relies on docker containers being able to create other docker containers. ECS does not permit containers to do this. We will be revising this strategy soon, so that we can be compatible with ECS and other container services."))}f.isMDXComponent=!0}}]);