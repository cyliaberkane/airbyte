"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[1404],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return u}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(a),u=r,k=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return a?n.createElement(k,i(i({ref:t},p),{},{components:a})):n.createElement(k,i({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},90156:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],l={},s="Google Search Console",c={unversionedId:"integrations/sources/google-search-console",id:"integrations/sources/google-search-console",title:"Google Search Console",description:"Overview",source:"@site/../docs/integrations/sources/google-search-console.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/google-search-console",permalink:"/integrations/sources/google-search-console",editUrl:"https://github.com/airbytehq/airbyte/docs/../docs/integrations/sources/google-search-console.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Google Directory",permalink:"/integrations/sources/google-directory"},next:{title:"Google Sheets",permalink:"/integrations/sources/google-sheets"}},p={},d=[{value:"Overview",id:"overview",level:2},{value:"Output schema",id:"output-schema",level:3},{value:"Data type mapping",id:"data-type-mapping",level:3},{value:"Features",id:"features",level:3},{value:"Performance considerations",id:"performance-considerations",level:3},{value:"Getting started",id:"getting-started",level:2},{value:"Requirements",id:"requirements",level:3},{value:"How to create the client credentials for Google Search Console, to use with Airbyte?",id:"how-to-create-the-client-credentials-for-google-search-console-to-use-with-airbyte",level:2},{value:"Creating a Google service account",id:"creating-a-google-service-account",level:3},{value:"Using the existing Service Account",id:"using-the-existing-service-account",level:3},{value:"Note",id:"note",level:3},{value:"Create a Service Account with delegated domain-wide authority",id:"create-a-service-account-with-delegated-domain-wide-authority",level:3},{value:"CHANGELOG",id:"changelog",level:2}],m={toc:d};function u(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"google-search-console"},"Google Search Console"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"The Google Search Console source supports both Full Refresh and Incremental syncs. You can choose if this connector will copy only the new or updated data, or all rows in the tables and columns you set up for replication, every time a sync is run."),(0,o.kt)("h3",{id:"output-schema"},"Output schema"),(0,o.kt)("p",null,"This Source is capable of syncing the following Streams:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/webmaster-tools/search-console-api-original/v3/sites/get"},"Sites")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/webmaster-tools/search-console-api-original/v3/sitemaps/list"},"Sitemaps")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/webmaster-tools/search-console-api-original/v3/searchanalytics/query"},"Full Analytics report")," ","(","this stream has a long sync time because it is very detailed, use with care",")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/webmaster-tools/search-console-api-original/v3/searchanalytics/query"},"Analytics report by country")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/webmaster-tools/search-console-api-original/v3/searchanalytics/query"},"Analytics report by date")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/webmaster-tools/search-console-api-original/v3/searchanalytics/query"},"Analytics report by device")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/webmaster-tools/search-console-api-original/v3/searchanalytics/query"},"Analytics report by page")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/webmaster-tools/search-console-api-original/v3/searchanalytics/query"},"Analytics report by query"))),(0,o.kt)("h3",{id:"data-type-mapping"},"Data type mapping"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Integration Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Airbyte Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"number")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"number")),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"array")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"array")),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"object")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"object")),(0,o.kt)("td",{parentName:"tr",align:"left"})))),(0,o.kt)("h3",{id:"features"},"Features"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Supported?","(","Yes/No",")"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Incremental Sync"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,o.kt)("td",{parentName:"tr",align:"left"},"except Sites and Sitemaps")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"SSL connection"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,o.kt)("td",{parentName:"tr",align:"left"},"No"),(0,o.kt)("td",{parentName:"tr",align:"left"})))),(0,o.kt)("h3",{id:"performance-considerations"},"Performance considerations"),(0,o.kt)("p",null,"This connector attempts to back off gracefully when it hits Reports API's rate limits. To find more information about limits, see ",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/webmaster-tools/search-console-api-original/v3/limits"},"Usage Limits")," documentation."),(0,o.kt)("h2",{id:"getting-started"},"Getting started"),(0,o.kt)("h3",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Credentials to a Google Service Account ","(","or Google Service Account with delegated Domain Wide Authority",")"," or Google User Account")),(0,o.kt)("h2",{id:"how-to-create-the-client-credentials-for-google-search-console-to-use-with-airbyte"},"How to create the client credentials for Google Search Console, to use with Airbyte?"),(0,o.kt)("p",null,"You can either:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use the existing ",(0,o.kt)("inlineCode",{parentName:"li"},"Service Account")," for your Google Project with granted Admin Permissions"),(0,o.kt)("li",{parentName:"ul"},"Use your personal Google User Account with oauth. If you choose this option, your account must have permissions to view the Google Search Console project you choose. "),(0,o.kt)("li",{parentName:"ul"},"Create the new ",(0,o.kt)("inlineCode",{parentName:"li"},"Service Account")," credentials for your Google Project, and grant Admin Permissions to it"),(0,o.kt)("li",{parentName:"ul"},"Follow the ",(0,o.kt)("inlineCode",{parentName:"li"},"Delegating domain-wide authority")," process to obtain the necessary permissions to your google account from the administrator of Workspace")),(0,o.kt)("h3",{id:"creating-a-google-service-account"},"Creating a Google service account"),(0,o.kt)("p",null,"A service account's credentials include a generated email address that is unique and at least one public/private key pair. If domain-wide delegation is enabled, then a client ID is also part of the service account's credentials."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open the ",(0,o.kt)("a",{parentName:"li",href:"https://console.developers.google.com/iam-admin/serviceaccounts"},"Service accounts page")),(0,o.kt)("li",{parentName:"ol"},"If prompted, select an existing project, or create a new project."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("inlineCode",{parentName:"li"},"+ Create service account"),"."),(0,o.kt)("li",{parentName:"ol"},"Under Service account details, type a ",(0,o.kt)("inlineCode",{parentName:"li"},"name"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"ID"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"description")," for the service account, then click ",(0,o.kt)("inlineCode",{parentName:"li"},"Create"),".",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Optional: Under ",(0,o.kt)("inlineCode",{parentName:"li"},"Service account permissions"),", select the ",(0,o.kt)("inlineCode",{parentName:"li"},"IAM roles")," to grant to the service account, then click ",(0,o.kt)("inlineCode",{parentName:"li"},"Continue"),"."),(0,o.kt)("li",{parentName:"ul"},"Optional: Under ",(0,o.kt)("inlineCode",{parentName:"li"},"Grant users access to this service account"),", add the ",(0,o.kt)("inlineCode",{parentName:"li"},"users")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"groups")," that are allowed to use and manage the service account."))),(0,o.kt)("li",{parentName:"ol"},"Go to ",(0,o.kt)("a",{parentName:"li",href:"https://console.cloud.google.com/apis/credentials"},"API Console/Credentials"),", check the ",(0,o.kt)("inlineCode",{parentName:"li"},"Service Accounts")," section, click on the Email address of service account you just created. "),(0,o.kt)("li",{parentName:"ol"},"Open ",(0,o.kt)("inlineCode",{parentName:"li"},"Details")," tab and find ",(0,o.kt)("inlineCode",{parentName:"li"},"Show domain-wide delegation"),", checkmark the ",(0,o.kt)("inlineCode",{parentName:"li"},"Enable Google Workspace Domain-wide Delegation"),"."),(0,o.kt)("li",{parentName:"ol"},"On ",(0,o.kt)("inlineCode",{parentName:"li"},"Keys")," tab click ",(0,o.kt)("inlineCode",{parentName:"li"},"+ Add key"),", then click ",(0,o.kt)("inlineCode",{parentName:"li"},"Create new key"),".")),(0,o.kt)("p",null,"Your new public/private key pair should be now generated and downloaded to your machine as ",(0,o.kt)("inlineCode",{parentName:"p"},"<project_id>.json")," you can find it in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Downloads")," folder or somewhere else if you use another default destination for downloaded files. This file serves as the only copy of the private key. You are responsible for storing it securely. If you lose this key pair, you will need to generate a new one!"),(0,o.kt)("h3",{id:"using-the-existing-service-account"},"Using the existing Service Account"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to ",(0,o.kt)("a",{parentName:"li",href:"https://console.cloud.google.com/apis/credentials"},"API Console/Credentials"),", check the ",(0,o.kt)("inlineCode",{parentName:"li"},"Service Accounts")," section, click on the Email address of service account you just created."),(0,o.kt)("li",{parentName:"ol"},"Click on ",(0,o.kt)("inlineCode",{parentName:"li"},"Details")," tab and find ",(0,o.kt)("inlineCode",{parentName:"li"},"Show domain-wide delegation"),", checkmark the ",(0,o.kt)("inlineCode",{parentName:"li"},"Enable Google Workspace Domain-wide Delegation"),"."),(0,o.kt)("li",{parentName:"ol"},"On ",(0,o.kt)("inlineCode",{parentName:"li"},"Keys")," tab click ",(0,o.kt)("inlineCode",{parentName:"li"},"+ Add key"),", then click ",(0,o.kt)("inlineCode",{parentName:"li"},"Create new key"),".")),(0,o.kt)("p",null,"Your new public/private key pair should be now generated and downloaded to your machine as ",(0,o.kt)("inlineCode",{parentName:"p"},"<project_id>.json")," you can find it in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Downloads")," folder or somewhere else if you use another default destination for downloaded files. This file serves as the only copy of the private key. You are responsible for storing it securely. If you lose this key pair, you will need to generate a new one!"),(0,o.kt)("h3",{id:"note"},"Note"),(0,o.kt)("p",null,"You can return to the ",(0,o.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/apis/credentials"},"API Console/Credentials")," at any time to view the email address, public key fingerprints, and other information, or to generate additional public/private key pairs. For more details about service account credentials in the API Console, see ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/iam/docs/understanding-service-accounts"},"Service accounts")," in the API Console help file."),(0,o.kt)("h3",{id:"create-a-service-account-with-delegated-domain-wide-authority"},"Create a Service Account with delegated domain-wide authority"),(0,o.kt)("p",null,"Follow the Google Documentation for performing ",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/identity/protocols/oauth2/service-account#delegatingauthority"},"Delegating domain-wide authority")," to create a Service account with delegated domain-wide authority. This account must be created by an administrator of your Google Workspace. Please make sure to grant the following ",(0,o.kt)("inlineCode",{parentName:"p"},"OAuth scopes")," to the service user:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"https://www.googleapis.com/auth/webmasters.readonly"))),(0,o.kt)("p",null,"At the end of this process, you should have JSON credentials to this Google Service Account."),(0,o.kt)("p",null,"You should now be ready to use the Google Workspace Admin Reports API connector in Airbyte."),(0,o.kt)("h2",{id:"changelog"},"CHANGELOG"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"0.1.11")),(0,o.kt)("td",{parentName:"tr",align:"left"},"2022-01-05"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9186"},"9186")," ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9194"},"9194")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Fix incremental sync: keep all urls in state object")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"0.1.10")),(0,o.kt)("td",{parentName:"tr",align:"left"},"2021-12-23"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9073"},"9073")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Add slicing by date range")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"0.1.9")),(0,o.kt)("td",{parentName:"tr",align:"left"},"2021-12-22"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9047"},"9047")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Add 'order' to spec.json props")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"0.1.8")),(0,o.kt)("td",{parentName:"tr",align:"left"},"2021-12-21"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8248"},"8248")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Enable Sentry for performance and errors tracking")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"0.1.7")),(0,o.kt)("td",{parentName:"tr",align:"left"},"2021-11-26"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7431"},"7431")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Add default ",(0,o.kt)("inlineCode",{parentName:"td"},"end_date")," param value")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"0.1.6")),(0,o.kt)("td",{parentName:"tr",align:"left"},"2021-09-27"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6460"},"6460")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Update OAuth Spec File")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"0.1.4")),(0,o.kt)("td",{parentName:"tr",align:"left"},"2021-09-23"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6394"},"6394")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Update Doc link Spec File")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"0.1.3")),(0,o.kt)("td",{parentName:"tr",align:"left"},"2021-09-23"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6405"},"6405")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Correct Spec File")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"0.1.2")),(0,o.kt)("td",{parentName:"tr",align:"left"},"2021-09-17"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6222"},"6222")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Correct Spec File")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"0.1.1")),(0,o.kt)("td",{parentName:"tr",align:"left"},"2021-09-22"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6315"},"6315")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Verify access to all sites when performing connection check")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"0.1.0")),(0,o.kt)("td",{parentName:"tr",align:"left"},"2021-09-03"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5350"},"5350")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Initial Release")))))}u.isMDXComponent=!0}}]);