"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[6726],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,h=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(h,i(i({ref:t},l),{},{components:n})):r.createElement(h,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},26088:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={},c="Basic Concepts",p={unversionedId:"connector-development/cdk-python/basic-concepts",id:"connector-development/cdk-python/basic-concepts",title:"Basic Concepts",description:"The Airbyte Specification",source:"@site/../docs/connector-development/cdk-python/basic-concepts.md",sourceDirName:"connector-development/cdk-python",slug:"/connector-development/cdk-python/basic-concepts",permalink:"/connector-development/cdk-python/basic-concepts",editUrl:"https://github.com/airbytehq/airbyte/docs/../docs/connector-development/cdk-python/basic-concepts.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Connector Development Kit \\(Python\\)",permalink:"/connector-development/cdk-python/"},next:{title:"Defining Stream Schemas",permalink:"/connector-development/cdk-python/schemas"}},l={},m=[{value:"The Airbyte Specification",id:"the-airbyte-specification",level:2},{value:"The <code>Source</code> class",id:"the-source-class",level:2},{value:"The <code>AbstractSource</code> Object",id:"the-abstractsource-object",level:2},{value:"The <code>Stream</code> Abstract Base Class",id:"the-stream-abstract-base-class",level:3},{value:"HTTP Streams",id:"http-streams",level:2}],u={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"basic-concepts"},"Basic Concepts"),(0,o.kt)("h2",{id:"the-airbyte-specification"},"The Airbyte Specification"),(0,o.kt)("p",null,"As a quick recap, the Airbyte Specification requires an Airbyte Source to support 4 distinct operations:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Spec")," - The required configuration in order to interact with the underlying technical system e.g. database"),(0,o.kt)("p",{parentName:"li"},"information, authentication information etc.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Check")," - Validate that the provided configuration is valid with sufficient permissions for one to perform all"),(0,o.kt)("p",{parentName:"li"},"required operations on the Source.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Discover")," - Discover the Source's schema. This let users select what a subset of the data to sync. Useful"),(0,o.kt)("p",{parentName:"li"},"if users require only a subset of the data.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Read")," - Perform the actual syncing process. Data is read from the Source, parsed into ",(0,o.kt)("inlineCode",{parentName:"p"},"AirbyteRecordMessage"),"s"),(0,o.kt)("p",{parentName:"li"},"and sent to the Airbyte Destination. Depending on how the Source is implemented, this sync can be incremental"),(0,o.kt)("p",{parentName:"li"},"or a full-refresh."))),(0,o.kt)("p",null,"A core concept discussed here is the ",(0,o.kt)("strong",{parentName:"p"},"Source"),"."),(0,o.kt)("p",null,"The Source contains one or more ",(0,o.kt)("strong",{parentName:"p"},"Streams")," ","(","or ",(0,o.kt)("strong",{parentName:"p"},"Airbyte Streams"),")",". A ",(0,o.kt)("strong",{parentName:"p"},"Stream")," is the other concept key to understanding how Airbyte models the data syncing process. A ",(0,o.kt)("strong",{parentName:"p"},"Stream")," models the logical data groups that make up the larger ",(0,o.kt)("strong",{parentName:"p"},"Source"),". If the ",(0,o.kt)("strong",{parentName:"p"},"Source")," is a RDMS, each ",(0,o.kt)("strong",{parentName:"p"},"Stream")," is a table. In a REST API setting, each ",(0,o.kt)("strong",{parentName:"p"},"Stream")," corresponds to one resource within the API. e.g. a ",(0,o.kt)("strong",{parentName:"p"},"Stripe Source")," would have have one ",(0,o.kt)("strong",{parentName:"p"},"Stream")," for ",(0,o.kt)("inlineCode",{parentName:"p"},"Transactions"),", one for ",(0,o.kt)("inlineCode",{parentName:"p"},"Charges")," and so on."),(0,o.kt)("h2",{id:"the-source-class"},"The ",(0,o.kt)("inlineCode",{parentName:"h2"},"Source")," class"),(0,o.kt)("p",null,"Airbyte provides abstract base classes which make it much easier to perform certain categories of tasks e.g: ",(0,o.kt)("inlineCode",{parentName:"p"},"HttpStream")," makes it easy to create HTTP API-based streams. However, if those do not satisfy your use case ","(","for example, if you're pulling data from a relational database",")",", you can always directly implement the Airbyte Protocol by subclassing the CDK's ",(0,o.kt)("inlineCode",{parentName:"p"},"Source")," class."),(0,o.kt)("p",null,"Note that while this is the most flexible way to implement a source connector, it is also the most toilsome as you will be required to manually manage state, input validation, correctly conforming to the Airbyte Protocol message formats, and more. We recommend using a subclass of ",(0,o.kt)("inlineCode",{parentName:"p"},"Source")," unless you cannot fulfill your use case otherwise."),(0,o.kt)("h2",{id:"the-abstractsource-object"},"The ",(0,o.kt)("inlineCode",{parentName:"h2"},"AbstractSource")," Object"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"AbstractSource")," is a more opinionated implementation of ",(0,o.kt)("inlineCode",{parentName:"p"},"Source"),". It implements ",(0,o.kt)("inlineCode",{parentName:"p"},"Source"),"'s 4 methods as follows:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Spec")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Check")," are the ",(0,o.kt)("inlineCode",{parentName:"p"},"AbstractSource"),"'s simplest operations."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Spec")," returns a checked in json schema file specifying the required configuration. The ",(0,o.kt)("inlineCode",{parentName:"p"},"AbstractSource")," looks for a file named ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.json")," in the module's root by default. Here is an ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/blob/master/airbyte-integrations/connectors/source-exchange-rates/source_exchange_rates/spec.json"},"example"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Check")," delegates to the ",(0,o.kt)("inlineCode",{parentName:"p"},"AbstractSource"),"'s ",(0,o.kt)("inlineCode",{parentName:"p"},"check_connection")," function. The function's ",(0,o.kt)("inlineCode",{parentName:"p"},"config")," parameter contains the user-provided configuration, specified in the ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.json")," returned by ",(0,o.kt)("inlineCode",{parentName:"p"},"Spec"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"check_connection")," uses this configuration to validate access and permissioning. Here is an ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/blob/master/airbyte-integrations/connectors/source-exchange-rates/source_exchange_rates/source.py#L90"},"example")," from the same Exchange Rates API."),(0,o.kt)("h3",{id:"the-stream-abstract-base-class"},"The ",(0,o.kt)("inlineCode",{parentName:"h3"},"Stream")," Abstract Base Class"),(0,o.kt)("p",null,"An ",(0,o.kt)("inlineCode",{parentName:"p"},"AbstractSource")," also owns a set of ",(0,o.kt)("inlineCode",{parentName:"p"},"Stream"),"s. This is populated via the ",(0,o.kt)("inlineCode",{parentName:"p"},"AbstractSource"),"'s ",(0,o.kt)("inlineCode",{parentName:"p"},"streams")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/blob/master/airbyte-cdk/python/airbyte_cdk/sources/abstract_source.py#L63"},"function"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"Discover")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Read")," rely on this populated set."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Discover")," returns an ",(0,o.kt)("inlineCode",{parentName:"p"},"AirbyteCatalog")," representing all the distinct resources the underlying API supports. Here is the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/blob/master/airbyte-cdk/python/airbyte_cdk/sources/abstract_source.py#L74"},"entrypoint")," for those interested in reading the code. See ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/tree/21116cad97f744f936e503f9af5a59ed3ac59c38/docs/contributing-to-airbyte/python/concepts/schemas.md"},"schemas")," for more information on how to declare the schema of a stream."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Read")," creates an in-memory stream reading from each of the ",(0,o.kt)("inlineCode",{parentName:"p"},"AbstractSource"),"'s streams. Here is the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/blob/master/airbyte-cdk/python/airbyte_cdk/sources/abstract_source.py#L90"},"entrypoint")," for those interested."),(0,o.kt)("p",null,"As the code examples show, the ",(0,o.kt)("inlineCode",{parentName:"p"},"AbstractSource")," delegates to the set of ",(0,o.kt)("inlineCode",{parentName:"p"},"Stream"),"s it owns to fulfill both ",(0,o.kt)("inlineCode",{parentName:"p"},"Discover")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Read"),". Thus, implementing ",(0,o.kt)("inlineCode",{parentName:"p"},"AbstractSource"),"'s ",(0,o.kt)("inlineCode",{parentName:"p"},"streams")," function is required when using the CDK."),(0,o.kt)("p",null,"A summary of what we've covered so far on how to use the Airbyte CDK:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A concrete implementation of the ",(0,o.kt)("inlineCode",{parentName:"li"},"AbstractSource")," object is required."),(0,o.kt)("li",{parentName:"ul"},"This involves,",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"implementing the ",(0,o.kt)("inlineCode",{parentName:"li"},"check_connection"),"function."),(0,o.kt)("li",{parentName:"ol"},"Creating the appropriate ",(0,o.kt)("inlineCode",{parentName:"li"},"Stream")," classes and returning them in the ",(0,o.kt)("inlineCode",{parentName:"li"},"streams")," function."),(0,o.kt)("li",{parentName:"ol"},"placing the above mentioned ",(0,o.kt)("inlineCode",{parentName:"li"},"spec.json")," file in the right place.")))),(0,o.kt)("h2",{id:"http-streams"},"HTTP Streams"),(0,o.kt)("p",null,"We've covered how the ",(0,o.kt)("inlineCode",{parentName:"p"},"AbstractSource")," works with the ",(0,o.kt)("inlineCode",{parentName:"p"},"Stream")," interface in order to fulfill the Airbyte Specification. Although developers are welcome to implement their own object, the CDK saves developers the hassle of doing so in the case of HTTP APIs with the ",(0,o.kt)("a",{parentName:"p",href:"/connector-development/cdk-python/http-streams"},(0,o.kt)("inlineCode",{parentName:"a"},"HTTPStream"))," object."))}d.isMDXComponent=!0}}]);