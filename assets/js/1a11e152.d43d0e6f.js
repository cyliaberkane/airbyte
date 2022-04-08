"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[3552],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return h}});var s=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function n(e,t){if(null==e)return{};var r,s,a=function(e,t){if(null==e)return{};var r,s,a={},o=Object.keys(e);for(s=0;s<o.length;s++)r=o[s],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)r=o[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=s.createContext({}),c=function(e){var t=s.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=c(e.components);return s.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=n(e,["components","mdxType","originalType","parentName"]),m=c(r),h=a,d=m["".concat(i,".").concat(h)]||m[h]||u[h]||o;return r?s.createElement(d,p(p({ref:t},l),{},{components:r})):s.createElement(d,p({ref:t},l))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=m;var n={};for(var i in t)hasOwnProperty.call(t,i)&&(n[i]=t[i]);n.originalType=e,n.mdxType="string"==typeof e?e:a,p[1]=n;for(var c=2;c<o;c++)p[c]=r[c];return s.createElement.apply(null,p)}return s.createElement.apply(null,r)}m.displayName="MDXCreateElement"},93426:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return n},metadata:function(){return c},toc:function(){return u}});var s=r(87462),a=r(63366),o=(r(67294),r(3905)),p=["components"],n={},i="PrestaShop",c={unversionedId:"integrations/sources/presta-shop",id:"integrations/sources/presta-shop",title:"PrestaShop",description:"Overview",source:"@site/../docs/integrations/sources/presta-shop.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/presta-shop",permalink:"/integrations/sources/presta-shop",editUrl:"https://github.com/airbytehq/airbyte/docs/../docs/integrations/sources/presta-shop.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"PostHog",permalink:"/integrations/sources/posthog"},next:{title:"Qualaroo",permalink:"/integrations/sources/qualaroo"}},l={},u=[{value:"Overview",id:"overview",level:2},{value:"Output schema",id:"output-schema",level:3},{value:"Features",id:"features",level:3},{value:"Getting started",id:"getting-started",level:2},{value:"Requirements",id:"requirements",level:3},{value:"CHANGELOG",id:"changelog",level:2}],m={toc:u};function h(e){var t=e.components,r=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,s.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"prestashop"},"PrestaShop"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"The PrestaShop source supports both Full Refresh and Incremental syncs. You can choose if this connector will copy only the new or updated data, or all rows in the tables and columns you set up for replication, every time a sync is run."),(0,o.kt)("h3",{id:"output-schema"},"Output schema"),(0,o.kt)("p",null,"This Source is capable of syncing the following core Streams:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/addresses/"},"Addresses")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/carriers/"},"Carriers")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/cart_rules/"},"Cart Rules")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/carts/"},"Carts")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/categories/"},"Categories")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/combinations/"},"Combinations")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/configurations/"},"Configurations")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/contacts/"},"Contacts")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/content_management_system/"},"Content Management System")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/countries/"},"Countries")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/currencies/"},"Currencies")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/customer_messages/"},"Customer Messages")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/customer_threads/"},"Customer Threads")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/customers/"},"Customers")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/deliveries/"},"Deliveries")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/employees/"},"Employees")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/groups/"},"Groups")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/guests/"},"Guests")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/image_types/"},"Image Types")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/languages/"},"Languages")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/manufacturers/"},"Manufacturers")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/messages/"},"Messages")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/order_carriers/"},"Order Carriers")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/order_details/"},"Order Details")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/order_histories/"},"Order Histories")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/order_invoices/"},"Order Invoices")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/order_payments/"},"Order Payments")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/order_slip/"},"Order Slip")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/order_states/"},"Order States")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/orders/"},"Orders")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/price_ranges/"},"Price Ranges")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/product_customization_fields/"},"Product Customization Fields")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/product_feature_values/"},"Product Feature Values")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/product_features/"},"Product Features")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/product_option_values/"},"Product Option Values")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/product_suppliers/"},"Product Suppliers")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/products/"},"Products")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/shop_groups/"},"ShopGroups")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/shop_urls/"},"ShopUrls")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/shops/"},"Shops")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/specific_price_rules/"},"Specific Price Rules")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/specific_prices/"},"Specific Prices")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/states/"},"States")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/stock_availables/"},"Stock Availables")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/stock_movement_reasons/"},"Stock Movement Reasons")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/stock_movements/"},"Stock Movements")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/stores/"},"Stores")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/suppliers/"},"Suppliers")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/tags/"},"Tags")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/tax_rule_groups/"},"Tax Rule Groups")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/tax_rules/"},"Tax Rules")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/taxes/"},"Taxes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/translated_configurations/"},"Translated Configurations")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/weight_ranges/"},"Weight Ranges")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/resources/zones/"},"Zones"))),(0,o.kt)("p",null,"If there are more endpoints you'd like Airbyte to support, please ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues/new/choose"},"create an issue.")),(0,o.kt)("h3",{id:"features"},"Features"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Supported?"),(0,o.kt)("th",{parentName:"tr",align:"left"}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Incremental Sync"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Addresses, Cart Rules, Carts, Categories, Customer Messages, Customer Threads, Customers, Manufacturers, Messages, Order Carriers, Order Histories, Order Invoices, Order Payments, Order Slip, Orders, Products, Stock Movement Reasons, Stock Movements, Stores, Suppliers, Tax Rule Groups")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Replicate Incremental Deletes"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Coming soon"),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"SSL connection"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,o.kt)("td",{parentName:"tr",align:"left"},"No"),(0,o.kt)("td",{parentName:"tr",align:"left"})))),(0,o.kt)("h2",{id:"getting-started"},"Getting started"),(0,o.kt)("p",null,"PrestaShop enables merchants to give third-party tools access to their shop\u2019s database through a CRUD API, otherwise called a ",(0,o.kt)("a",{parentName:"p",href:"https://devdocs.prestashop.com/1.7/webservice/"},"web service"),"."),(0,o.kt)("p",null,"By default, the webservice feature is disabled on PrestaShop and needs to be ",(0,o.kt)("a",{parentName:"p",href:"https://devdocs.prestashop.com/1.7/webservice/tutorials/creating-access/#enable-the-webservice"},"switched on")," before the first use."),(0,o.kt)("h3",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"PrestaShop ",(0,o.kt)("a",{parentName:"li",href:"https://devdocs.prestashop.com/1.7/webservice/tutorials/creating-access/#create-an-access-key"},"access key")),(0,o.kt)("li",{parentName:"ul"},"PrestaShop url")),(0,o.kt)("h2",{id:"changelog"},"CHANGELOG"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,o.kt)("td",{parentName:"tr",align:"left"},"2021-07-02"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4465"},"#","4465")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Initial implementation")))))}h.isMDXComponent=!0}}]);