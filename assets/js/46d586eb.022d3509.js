"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5851],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>m});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),s=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(a),g=n,m=p["".concat(i,".").concat(g)]||p[g]||d[g]||l;return a?r.createElement(m,o(o({ref:t},c),{},{components:a})):r.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=g;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[p]="string"==typeof e?e:n,o[1]=u;for(var s=2;s<l;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},19365:(e,t,a)=>{a.d(t,{A:()=>o});var r=a(96540),n=a(20053);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.A)(l.tabItem,o),hidden:a},t)}},11470:(e,t,a)=>{a.d(t,{A:()=>I});var r=a(58168),n=a(96540),l=a(20053),o=a(23104),u=a(56347),i=a(57485),s=a(31682),c=a(89466);function p(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function d(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,s.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function g(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const r=(0,u.W6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i.aZ)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=d(e),[o,u]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[i,s]=m({queryString:a,groupId:r}),[p,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,c.Dv)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),f=(()=>{const e=i??p;return g({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{f&&u(f)}),[f]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!g({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),s(e),b(e)}),[s,b,l]),tabValues:l}}var f=a(92303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:t,block:a,selectedValue:u,selectValue:i,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.a_)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),r=s[a].value;r!==u&&(p(t),i(r))},g=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,r.A)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>c.push(e),onKeyDown:g,onClick:d},o,{className:(0,l.A)("tabs__item",y.tabItem,o?.className,{"tabs__item--active":u===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:r}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function A(e){const t=b(e);return n.createElement("div",{className:(0,l.A)("tabs-container",y.tabList)},n.createElement(h,(0,r.A)({},e,t)),n.createElement(v,(0,r.A)({},e,t)))}function I(e){const t=(0,f.A)();return n.createElement(A,(0,r.A)({key:String(t)},e))}},82438:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>s});var r=a(58168),n=(a(96540),a(15680));a(11470),a(19365);const l={slug:"block_ads",title:"\u5c4f\u853d\u5e7f\u544a\u7684\u65b9\u6cd5\u603b\u7ed3",authors:["uif"],tags:["\u8f6f\u8def\u7531\u5c4f\u853d\u5e7f\u544a","\u8f6f\u8def\u7531\u5c4f\u853d AD","Clash \u5c4f\u853d\u5e7f\u544a","Tun \u5c4f\u853d\u5e7f\u544a","DNS \u5c4f\u853d\u5e7f\u544a","\u5982\u4f55\u5c4f\u853d\u5e7f\u544a","\u5c4f\u853d\u5e7f\u544a\u7684\u65b9\u6cd5","AdGuard","AdGuard \u8f6f\u8def\u7531","AdGuardHome","AdGuardHome \u8f6f\u8def\u7531"]},o=void 0,u={permalink:"/UIF_help/blog/block_ads",editUrl:"https://github.com/UIforFreedom/UIF/doc/blog/blog/2024-09-13-block_ads/index.md",source:"@site/blog/2024-09-13-block_ads/index.md",title:"\u5c4f\u853d\u5e7f\u544a\u7684\u65b9\u6cd5\u603b\u7ed3",description:"\u5e7f\u544a\u5c4f\u853d",date:"2024-09-13T00:00:00.000Z",formattedDate:"September 13, 2024",tags:[{label:"\u8f6f\u8def\u7531\u5c4f\u853d\u5e7f\u544a",permalink:"/UIF_help/blog/tags/\u8f6f\u8def\u7531\u5c4f\u853d\u5e7f\u544a"},{label:"\u8f6f\u8def\u7531\u5c4f\u853d AD",permalink:"/UIF_help/blog/tags/\u8f6f\u8def\u7531\u5c4f\u853d-ad"},{label:"Clash \u5c4f\u853d\u5e7f\u544a",permalink:"/UIF_help/blog/tags/clash-\u5c4f\u853d\u5e7f\u544a"},{label:"Tun \u5c4f\u853d\u5e7f\u544a",permalink:"/UIF_help/blog/tags/tun-\u5c4f\u853d\u5e7f\u544a"},{label:"DNS \u5c4f\u853d\u5e7f\u544a",permalink:"/UIF_help/blog/tags/dns-\u5c4f\u853d\u5e7f\u544a"},{label:"\u5982\u4f55\u5c4f\u853d\u5e7f\u544a",permalink:"/UIF_help/blog/tags/\u5982\u4f55\u5c4f\u853d\u5e7f\u544a"},{label:"\u5c4f\u853d\u5e7f\u544a\u7684\u65b9\u6cd5",permalink:"/UIF_help/blog/tags/\u5c4f\u853d\u5e7f\u544a\u7684\u65b9\u6cd5"},{label:"AdGuard",permalink:"/UIF_help/blog/tags/ad-guard"},{label:"AdGuard \u8f6f\u8def\u7531",permalink:"/UIF_help/blog/tags/ad-guard-\u8f6f\u8def\u7531"},{label:"AdGuardHome",permalink:"/UIF_help/blog/tags/ad-guard-home"},{label:"AdGuardHome \u8f6f\u8def\u7531",permalink:"/UIF_help/blog/tags/ad-guard-home-\u8f6f\u8def\u7531"}],readingTime:5.245,hasTruncateMarker:!1,authors:[{name:"UIF Official",title:"UIF \u5b98\u65b9",url:"https://github.com/UIforFreedom/UIF",imageURL:"https://avatars.githubusercontent.com/u/140743845?s=48&v=4",key:"uif"}],frontMatter:{slug:"block_ads",title:"\u5c4f\u853d\u5e7f\u544a\u7684\u65b9\u6cd5\u603b\u7ed3",authors:["uif"],tags:["\u8f6f\u8def\u7531\u5c4f\u853d\u5e7f\u544a","\u8f6f\u8def\u7531\u5c4f\u853d AD","Clash \u5c4f\u853d\u5e7f\u544a","Tun \u5c4f\u853d\u5e7f\u544a","DNS \u5c4f\u853d\u5e7f\u544a","\u5982\u4f55\u5c4f\u853d\u5e7f\u544a","\u5c4f\u853d\u5e7f\u544a\u7684\u65b9\u6cd5","AdGuard","AdGuard \u8f6f\u8def\u7531","AdGuardHome","AdGuardHome \u8f6f\u8def\u7531"]},prevItem:{title:"\u5982\u4f55\u4f7f\u7528\u94fe\u5f0f\u4ee3\u7406\uff1f\u5168\u5e73\u53f0\u652f\u6301\uff01\u6700\u5168\u6700\u5148\u8fdb",permalink:"/UIF_help/blog/detour"},nextItem:{title:"\ud83d\udd25 2024 \u5e74 9 \u6708\u6700\u65b0\u53ef\u7528\u7684\u514d\u8d39\u7ffb\u5899\u8282\u70b9\u8ba2\u9605",permalink:"/UIF_help/blog/free_proxy_nodes"}},i={authorsImageUrls:[void 0]},s=[{value:"\u975e\u4fb5\u5165\u5f0f",id:"\u975e\u4fb5\u5165\u5f0f",level:2},{value:"\u4fb5\u5165\u5f0f",id:"\u4fb5\u5165\u5f0f",level:2},{value:"\u6700\u4f73\u65b9\u6848",id:"\u6700\u4f73\u65b9\u6848",level:2}],c={toc:s},p="wrapper";function d(e){let{components:t,...l}=e;return(0,n.yg)(p,(0,r.A)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"\u5e7f\u544a\u5c4f\u853d",src:a(76468).A,width:"1024",height:"1024"})),(0,n.yg)("p",null,"\u9996\u5148\u6211\u4eec\u8981\u77e5\u9053\u6280\u672f\u4e0a\u662f\u5982\u4f55\u5c4f\u853d\u5e7f\u544a\u7684\uff1f\u5f53\u8bbf\u95ee\u4e00\u4e2a\u7f51\u9875\u65f6\uff0c\u5e7f\u544a\u4e5f\u4f1a\u968f\u7740\u7f51\u9875\u5185\u5bb9\u4e00\u540c\u663e\u793a\u5728\u6d4f\u89c8\u5668\u4e0a\uff0c\u8981\u5c4f\u853d\u67d0\u4e00\u4e2a\u7f51\u9875\u4e0a\u7684\u5e7f\u544a\uff0c\u5c31\u5fc5\u987b\u5f97\u533a\u5206\u51fa\u771f\u5b9e\u5185\u5bb9\u548c\u5e7f\u544a\u5185\u5bb9\u3002\u6240\u4ee5\u603b\u7684\u6765\u8bf4\uff0c\u5c4f\u853d\u5e7f\u544a\u7684\u65b9\u6cd5\u5206\u4e3a\u4fe9\u5927\u7c7b\uff1a"),(0,n.yg)("h2",{id:"\u975e\u4fb5\u5165\u5f0f"},"\u975e\u4fb5\u5165\u5f0f"),(0,n.yg)("p",null,"\u5c4f\u853d\u5e7f\u544a\u7a0b\u5e8f\u4e0d\u4f1a\u53bb\u68c0\u67e5\u4f20\u8f93\u7684\u5185\u5bb9\uff0c\u4ec5\u77e5\u9053\u4f20\u8f93\u7684\u57df\u540d\u548c IP\u3002"),(0,n.yg)("p",null,"\u6bd4\u5982\u8bf4\u8c37\u6b4c\u6709\u4e13\u95e8\u7684\u5e7f\u544a\u57df\u540d ",(0,n.yg)("inlineCode",{parentName:"p"},"ad.google.com"),"\uff0c\u5f53\u6211\u4eec\u68c0\u6d4b\u5230\u5b58\u5728\u8be5\u57df\u540d\u7684\u94fe\u63a5\uff0c\u5c31\u628a\u4ed6\u4e2d\u65ad\u6389\uff0c\u4ece\u800c\u65e0\u6cd5\u663e\u793a\u51fa\u6765\u3002\u7136\u800c\uff0c\u5982\u679c\u67d0\u4e2a\u7f51\u7ad9\u7684\u5e7f\u544a\u57df\u540d\u662f ",(0,n.yg)("inlineCode",{parentName:"p"},"user.x.com"),"\uff0c\u7528\u6237\u7684\u4fe1\u606f\u4e5f\u4f1a\u901a\u8fc7\u6b64\u57df\u540d\u4f20\u8f93\uff0c\u5373\u4f7f\u6211\u4eec\u77e5\u9053\u8fd9\u4e2a\u4f1a\u4f20\u8f93\u5e7f\u544a\uff0c\u4f46\u662f\u5c4f\u853d\u4e86\u4ed6\uff0c\u4e5f\u5c31\u540c\u6837\u5c4f\u853d\u4e86\u6b63\u5e38\u7684\u529f\u80fd\u3002"),(0,n.yg)("p",null,"\u5373\u4f7f\u53ef\u80fd\u4f1a\u8bef\u6740\uff0c\u4f46\u8fd8\u662f\u6709\u597d\u5fc3\u4eba\u6536\u96c6\u6574\u7406\u4e86\u8fd9\u4e9b\u5e7f\u544a\u57df\u540d\u6570\u636e\u5e93\uff0c\u4f8b\u5982\u8bf4 ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/v2fly/domain-list-community"},"domain-list-community")),(0,n.yg)("p",null,"\u652f\u6301\u8fd9\u79cd\u5c4f\u853d\u65b9\u5f0f\u7684\u8f6f\u4ef6\u6709\uff1a"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"clash"),(0,n.yg)("li",{parentName:"ul"},"v2ray/xray"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://sing-box.sagernet.org/zh/"},"sing-box"))),(0,n.yg)("p",null,"\u4ee5\u4e0a\u7684\u8f6f\u4ef6\u7684\u539f\u7406\u57fa\u672c\u4e0a\u90fd\u662f\u63a5\u7ba1\u6240\u6709\u7f51\u7edc\u6d41\u91cf\uff0c\u7136\u540e\u5206\u6790\u8bc6\u522b\uff0c\u5339\u914d\u76ee\u6807\u57df\u540d\u662f\u5426\u5728\u5e7f\u544a\u6570\u636e\u5e93\u4e2d\uff0c\u5982\u679c\u5728\uff0c\u90a3\u4e48\u5c31\u4e2d\u65ad\u3002\u800c\u4e14\u4ed6\u4eec\u6240\u4f9d\u8d56\u7684\u6570\u636e\u5e93\u57fa\u672c\u4e0a\u90fd\u662f ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/v2fly/domain-list-community"},"domain-list-community"),"\uff0c\u6548\u679c\u53ef\u4ee5\u8bf4\u662f\u5927\u540c\u5c0f\u5f02\u3002"),(0,n.yg)("p",null,"\u540c\u65f6\u4e5f\u5b58\u5728\u80fd\u5c4f\u853d\u5e7f\u544a\u7684 DNS\uff0c\u4f8b\u5982\u8bf4 AdGuard DNS\uff0c\u53ea\u8981\u628a\u4f60\u7684\u8bbe\u5907\u7684 DNS \u8bbe\u7f6e\u6210\u4ed6\u4eec\u7684\u5c31\u53ef\u4ee5\u5c4f\u853d\u5e7f\u544a\u3002\u539f\u7406\u8fd8\u662f\u4e00\u6837\u7684\uff1a\u901a\u8fc7\u57df\u540d\u5339\u914d\u5e7f\u544a\u6570\u636e\u5e93\u3002\u4f46\u662f\u8fd9\u4e9b DNS \u90fd\u5728\u56fd\u5916\uff0c\u5ef6\u8fdf\u975e\u5e38\u9ad8\uff0c\u57fa\u672c\u4e0d\u53ef\u7528\uff0c\u6240\u4ee5\u5c31\u6709 ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/AdguardTeam/AdGuardHome"},"AdGuardHome"),"\uff0c\u5141\u8bb8\u4f60\u672c\u5730\u642d\u5efa\u4e00\u4e2a DNS Server\u3002"),(0,n.yg)("h2",{id:"\u4fb5\u5165\u5f0f"},"\u4fb5\u5165\u5f0f"),(0,n.yg)("p",null,"\u8fd9\u79cd\u65b9\u5f0f\u6548\u679c\u6700\u597d\uff0c\u6211\u4eec\u4f1a\u83b7\u5f97\u4f20\u8f93\u7684\u6240\u6709\u5185\u5bb9\uff0c\u66f4\u52a0\u7ec6\u5316\u548c\u7cbe\u786e\u3002\u4f46\u4e5f\u662f\u540c\u6837\u4f9d\u8d56\u6570\u636e\u5e93\u66f4\u65b0\u7684\u3002"),(0,n.yg)("p",null,"\u652f\u6301\u8fd9\u79cd\u65b9\u5f0f\u7684\u57fa\u672c\u53ea\u6709\u6d4f\u89c8\u5668\u63d2\u4ef6\uff0c\u4f8b\u5982\u8bf4\uff1a"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://getadblock.com/zh_CN/"},"ADBlock")),(0,n.yg)("li",{parentName:"ul"},"AdGuard")),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"\u6d4f\u89c8\u5668\u63d2\u4ef6",src:a(71740).A,width:"2257",height:"1438"})),(0,n.yg)("p",null,"\u56fe\u4e2d\u6240\u5c55\u793a\u7684\u5c31\u662f AdGuard \u7684\u79fb\u9664\u5e7f\u544a\u6548\u679c\uff0c\u56e0\u4e3a\uff0c\u8fd9\u7c7b\u63d2\u4ef6\u90fd\u662f\u5bc4\u751f\u5728\u6d4f\u89c8\u5668\u8eab\u4e0a\uff0c\u672c\u6765\u5c31\u80fd\u83b7\u53d6\u7f51\u9875\u5185\u6240\u6709\u7684\u5185\u5bb9\uff0c\u6240\u4ee5\u80fd\u533a\u5206\u5e7f\u544a\u5185\u5bb9\u8fd8\u662f\u6709\u6548\u5185\u5bb9\uff0c\u505a\u5230\u7cbe\u786e\u79fb\u9664\u7f51\u9875\u5185\u7684\u5e7f\u544a\u3002"),(0,n.yg)("p",null,"\u4f46\u5982\u679c\u4f60\u662f\u7528\u901a\u8fc7 App \u4f7f\u7528 YouTube \u4e4b\u7c7b\u7684\uff0c\u4f60\u662f\u65e0\u6cd5\u5b89\u88c5\u5e76\u4f7f\u7528\u8fd9\u4e9b\u63d2\u4ef6\u7684\u3002\u60f3\u8981\u5c4f\u853d App \u7684\u5e7f\u544a\u662f\u4e0d\u73b0\u5b9e\u7684\uff0c\u6211\u4eec\u9996\u5148\u9700\u8981\u505a\u4e2d\u95f4\u4eba ",(0,n.yg)("a",{parentName:"p",href:"https://zh.wikipedia.org/wiki/%E4%B8%AD%E9%97%B4%E4%BA%BA%E6%94%BB%E5%87%BB"},"MITM \u89e3\u5bc6")," \u4f20\u8f93\u5185\u5bb9\uff0c\u5373\u4f7f\u80fd\u83b7\u53d6\u4f20\u8f93\u5185\u5bb9\uff0c\u6211\u4eec\u4e5f\u9700\u8981\u82b1\u8d39\u5927\u91cf\u7cbe\u529b\u7814\u7a76\u5982\u4f55\u4fee\u6539\u8fd9\u4e9b\u4f20\u8f93\u5185\u5bb9\uff0c\u4e0d\u540c\u4e8e\u5e7f\u544a\u6570\u636e\u5e93\uff0c\u4fee\u6539\u8fd9\u4e9b\u5185\u5bb9\u6709\u53ef\u80fd\u9700\u8981\u590d\u6742\u7684\u7f16\u7a0b\u3002"),(0,n.yg)("p",null,"\u5982\u679c\u4e00\u4e2a APP\uff0c\u76f4\u63a5\u5185\u5d4c\u8bc1\u4e66\uff0c\u800c\u4e0d\u4f7f\u7528\u7cfb\u7edf\u5185\u7684\u8bc1\u4e66\uff0c\u90a3\u4e48\u8fde\u89e3\u5bc6\u7684\u673a\u4f1a\u90fd\u6ca1\u6709\u4e86\uff0c\u53ea\u80fd\u53bb\u7834\u89e3 APP\u3002\u5e02\u9762\u4e0a\u4e5f\u6709\u8bb8\u591a\u975e\u5b98\u65b9\u7248\u7684\u7834\u89e3 APP\uff0c\u4f46\u975e\u5e38\u4e0d\u5efa\u8bae\u53bb\u4f7f\u7528\u8fd9\u4e9b\u6765\u6e90\u4e0d\u660e\u7684 APP\uff0c\u53ef\u80fd\u4f1a\u7559\u6709\u540e\u95e8\u3002"),(0,n.yg)("h2",{id:"\u6700\u4f73\u65b9\u6848"},"\u6700\u4f73\u65b9\u6848"),(0,n.yg)("p",null,"\u7ef4\u62a4\u5e7f\u544a\u6570\u636e\u5e93\u662f\u5341\u5206\u56f0\u96be\u7684\uff0c\u5168\u7403\u51e0\u5343\u4e07\u7ad9\u70b9\uff0c\u6bcf\u5929\u4e0a\u767e\u4ebf\u6b21\u5e7f\u544a\u5c55\u73b0\uff0c\u9891\u7e41\u53d8\u66f4\u7684\u5e7f\u544a\u690d\u5165\u65b9\u5f0f\u3002"),(0,n.yg)("p",null,"\u5f53\u7136\u4e86\uff0c\u6700\u4f73\u65b9\u6848\u5c31\u662f\u7ed9 APP \u94b1\uff0c\u5f00\u4f1a\u5458\u53bb\u5e7f\u544a\u3002\u4f46\u5982\u679c\u4f60\u4e0d\u60f3\u7ed9\u94b1\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u4e00\u4e0b\uff1a\u4f7f\u7528 AdGuard \u89c4\u5219\u7684 sing-box\uff1b\u539f\u7406\u8ddf Clash\u3001V2ray \u4e4b\u7c7b\u662f\u4e00\u6837\u7684\uff0c\u4f46\u4f7f\u7528\u4e86 ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/ppfeufer/adguard-filter-list"},"\u66f4\u52a0\u5b8c\u5584\u7684\u5e7f\u544a\u6570\u636e\u5e93"),"\uff0c\u66f4\u65b0\u66f4\u52a0\u9891\u7e41\uff0c\u751f\u6001\u66f4\u597d\u3002"),(0,n.yg)("p",null,"\u5982\u679c\u4f60\u662f\u6d4f\u89c8\u5668\u7528\u6237\uff0c\u90a3\u4e48\u76f4\u63a5\u4f7f\u7528\u63d2\u4ef6\u5373\u53ef\u3002"),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Sing-Box \u53bb\u5e7f\u544a",src:a(96174).A,width:"1290",height:"1039"})),(0,n.yg)("p",null,"\u901a\u5e38\u5728\u8f6f\u8def\u7531\u4e0a\uff0c\u4eba\u4eec\u90fd\u559c\u6b22\u53bb\u5b89\u88c5 AdGuardHome\uff0c\u4f7f\u7528 Sing-Box \u7684\u5177\u4f53\u4f18\u52bf\u53c2\u8003\u4e0a\u56fe\u3002",(0,n.yg)("strong",{parentName:"p"},"\u5728 UIF \u4e2d\uff0c\u4f60\u4ec5\u9700\u70b9\u51fb\u542f\u7528\u5373\u53ef\u4f7f\u7528 AdGuard \u7684\u5e7f\u544a\u8fc7\u6ee4"),"\uff0c\u5168\u7cfb\u7edf\u652f\u6301 WIndows\u3001Linux\u3001Macos \u5f53\u7136\u4e5f\u5305\u62ec\u8f6f\u8def\u7531\u3002"),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"UIF \u53bb\u5e7f\u544a",src:a(94657).A,width:"2105",height:"545"})),(0,n.yg)("admonition",{type:"warning"},(0,n.yg)("p",{parentName:"admonition"},"\u5728 UIF \u4e2d\u542f\u7528\u4e86 ",(0,n.yg)("inlineCode",{parentName:"p"},"AdGuard")," \u529f\u80fd\uff0c\u8bd5\u8bd5\u6253\u5f00 ",(0,n.yg)("a",{parentName:"p",href:"https://analytics.google.com/analytics/web"},"analytics.google.com")," \u8fd9\u662f\u8c37\u6b4c\u7684\u5e7f\u544a\u7ba1\u7406\u5de5\u5177\uff0c\u53ef\u4ee5\u53d1\u73b0\u6253\u4e0d\u5f00\u88ab\u8bef\u6740\u4e86\u3002\u8fd9\u5c5e\u4e8e\u6b63\u5e38\u73b0\u8c61\u3002")))}d.isMDXComponent=!0},71740:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/1-97cc086d0ac68de04e287b31ca3d12f3.png"},76468:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/2-92f75ba702b6f364882c63187bc3d8e3.webp"},96174:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/3-d28829759a61b463961a3c183391a529.png"},94657:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/4-98eedd14d8d38b408dae3b685363f0cd.png"}}]);