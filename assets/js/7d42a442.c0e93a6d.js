"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4765],{15680:(e,n,a)=>{a.d(n,{xA:()=>p,yg:()=>m});var t=a(96540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function u(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=t.createContext({}),i=function(e){var n=t.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):u(u({},n),e)),a},p=function(e){var n=i(e.components);return t.createElement(o.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=i(a),g=r,m=c["".concat(o,".").concat(g)]||c[g]||d[g]||l;return a?t.createElement(m,u(u({ref:n},p),{},{components:a})):t.createElement(m,u({ref:n},p))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,u=new Array(l);u[0]=g;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[c]="string"==typeof e?e:r,u[1]=s;for(var i=2;i<l;i++)u[i]=a[i];return t.createElement.apply(null,u)}return t.createElement.apply(null,a)}g.displayName="MDXCreateElement"},19365:(e,n,a)=>{a.d(n,{A:()=>u});var t=a(96540),r=a(20053);const l={tabItem:"tabItem_Ymn6"};function u(e){let{children:n,hidden:a,className:u}=e;return t.createElement("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,u),hidden:a},n)}},11470:(e,n,a)=>{a.d(n,{A:()=>x});var t=a(58168),r=a(96540),l=a(20053),u=a(23104),s=a(56347),o=a(57485),i=a(31682),p=a(89466);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:r}}=e;return{value:n,label:a,attributes:t,default:r}}))}function d(e){const{values:n,children:a}=e;return(0,r.useMemo)((()=>{const e=n??c(a);return function(e){const n=(0,i.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function g(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:a}=e;const t=(0,s.W6)(),l=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,o.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(t.location.search);n.set(l,e),t.replace({...t.location,search:n.toString()})}),[l,t])]}function y(e){const{defaultValue:n,queryString:a=!1,groupId:t}=e,l=d(e),[u,s]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:l}))),[o,i]=m({queryString:a,groupId:t}),[c,y]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,l]=(0,p.Dv)(a);return[t,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:t}),f=(()=>{const e=o??c;return g({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:u,selectValue:(0,r.useCallback)((e=>{if(!g({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),i(e),y(e)}),[i,y,l]),tabValues:l}}var f=a(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:n,block:a,selectedValue:s,selectValue:o,tabValues:i}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,u.a_)(),d=e=>{const n=e.currentTarget,a=p.indexOf(n),t=i[a].value;t!==s&&(c(n),o(t))},g=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;n=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;n=p[a]??p[p.length-1];break}}n?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":a},n)},i.map((e=>{let{value:n,label:a,attributes:u}=e;return r.createElement("li",(0,t.A)({role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,key:n,ref:e=>p.push(e),onKeyDown:g,onClick:d},u,{className:(0,l.A)("tabs__item",b.tabItem,u?.className,{"tabs__item--active":s===n})}),a??n)})))}function N(e){let{lazy:n,children:a,selectedValue:t}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===t));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==t}))))}function v(e){const n=y(e);return r.createElement("div",{className:(0,l.A)("tabs-container",b.tabList)},r.createElement(h,(0,t.A)({},e,n)),r.createElement(N,(0,t.A)({},e,n)))}function x(e){const n=(0,f.A)();return r.createElement(v,(0,t.A)({key:String(n)},e))}},44632:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var t=a(58168),r=(a(96540),a(15680)),l=a(11470),u=a(19365);const s={sidebar_position:2},o="Linux",i={unversionedId:"install/linux",id:"install/linux",title:"Linux",description:"\u652f\u6301\u5404\u79cd\u53d1\u884c\u7248\uff0c\u6bd4\u5982\u8bf4 Ubuntu\u3001Debian\u3001CentOS\u3001Armbian \u7b49\uff1b\u53ea\u8981\u662f Linux \u90fd\u53ef\u7528\u3002",source:"@site/docs/install/linux.md",sourceDirName:"install",slug:"/install/linux",permalink:"/UIF_help/docs/install/linux",draft:!1,editUrl:"https://github.com/UIforFreedom/UIF/doc/doc/docs/install/linux.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Windows",permalink:"/UIF_help/docs/install/windows"},next:{title:"Macos",permalink:"/UIF_help/docs/install/macos"}},p={},c=[],d={toc:c},g="wrapper";function m(e){let{components:n,...s}=e;return(0,r.yg)(g,(0,t.A)({},d,s,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"linux"},"Linux"),(0,r.yg)("p",null,"\u652f\u6301\u5404\u79cd\u53d1\u884c\u7248\uff0c\u6bd4\u5982\u8bf4 Ubuntu\u3001Debian\u3001CentOS\u3001Armbian \u7b49\uff1b\u53ea\u8981\u662f Linux \u90fd\u53ef\u7528\u3002"),(0,r.yg)("p",null,"\u9009\u62e9\u5408\u9002\u4f60\u7684\u65b9\u5f0f\u5b89\u88c5\uff1a"),(0,r.yg)(l.A,{mdxType:"Tabs"},(0,r.yg)(u.A,{value:"bash",label:"\u4e00\u952e\u811a\u672c",mdxType:"TabItem"},(0,r.yg)("p",null,"\u4e00\u952e\u811a\u672c\u4f9d\u8d56\uff1abash\u3001tar\u3001curl \u4e14\u5fc5\u987b\u8981\u6709 systemd \u6216 procd \u4f5c\u4e3a\u542f\u52a8\u670d\u52a1\u3002\u82e5\u65e0\u6cd5\u81ea\u884c\u89e3\u51b3\u4f9d\u8d56\u95ee\u9898\uff0c\u8bf7\u4f7f\u7528 Docker\u3002"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"}," \ud83d\udc49\ufe0f > \u5b89\u88c5 ")),(0,r.yg)("p",null,"\u6253\u5f00 Shell\uff0c\u590d\u5236\u7c98\u8d34\uff0c\u56de\u8f66\u8fd0\u884c\u5373\u53ef\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'# \u8fd0\u884c\u524d\u786e\u4fdd\u5177\u6709 sudo \u6743\u9650\ncurl -L -O "https://fastly.jsdelivr.net/gh/UIforFreedom/UIF@master/uifd/linux_install.sh" && chmod 755 ./linux_install.sh && bash ./linux_install.sh\n')),(0,r.yg)("p",null,"\u6267\u884c\u5b8c\u6bd5\u540e\uff0c\u5982\u65e0\u610f\u5916\uff0c\u4f1a\u51fa\u73b0\u672c\u673a\u76d1\u542c\u7684 ",(0,r.yg)("inlineCode",{parentName:"p"},"Web Address"),"\u3001",(0,r.yg)("inlineCode",{parentName:"p"},"API Address")," \u548c ",(0,r.yg)("inlineCode",{parentName:"p"},"Password"),"\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"# \u4e3e\u4f8b\uff1a\n...\n\nWeb Address:   http://1.2.3.4:1234\nAPI Address:   http://1.2.3.4:4321\nPassword:      123-123123-123123-123123\n")),(0,r.yg)("p",null,"\u82e5\u5fd8\u8bb0\u4e86\u5bc6\u7801\u548c\u7aef\u53e3\uff0c\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u67e5\u770b\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"cat /usr/bin/uif/uif_key.txt # Password\ncat /usr/bin/uif/uif_api_address.txt # API Address\ncat /usr/bin/uif/uif_web_address.txt # Web Address\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"}," \ud83d\udc49\ufe0f > \u8fd0\u884c ")),(0,r.yg)("p",null,"\u6210\u529f\u6267\u884c\u5b8c\u4e00\u952e\u811a\u672c\u540e\uff0cUIF \u4f1a\u5728\u540e\u53f0\u8fd0\u884c\u7740\uff0c\u4e0b\u5217\u547d\u4ee4\u4f9b\u7528\u6237\u6309\u5b9e\u9645\u60c5\u51b5\u4f7f\u7528\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"# systemd\nsystemctl restart ui4freedom # \u8fd0\u884c\nsystemctl stop ui4freedom # \u5173\u95ed\nsystemctl enable ui4freedom # \u5f00\u673a\u81ea\u542f\nsystemctl disable ui4freedom # \u53d6\u6d88\u5f00\u673a\u81ea\u542f\n\n# procd\n/etc/init.d/ui4freedom.sh start # \u8fd0\u884c\n/etc/init.d/ui4freedom.sh stop # \u5173\u95ed\n/etc/init.d/ui4freedom.sh enable # \u5f00\u673a\u81ea\u542f\n/etc/init.d/ui4freedom.sh disable # \u53d6\u6d88\u5f00\u673a\u81ea\u542f\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"}," \ud83d\udc49\ufe0f > \u5378\u8f7d ")),(0,r.yg)("p",null,"UIF \u4f1a\u5b58\u653e\u5728\u8fd9\u91cc\uff1a",(0,r.yg)("inlineCode",{parentName:"p"},"/usr/bin/uif/"),"\uff0c\u53ea\u9700\u5220\u9664\u8fd9\u4e2a\u6587\u4ef6\u5939\u5373\u53ef\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"rm -r /usr/bin/uif/\n"))),(0,r.yg)(u.A,{value:"docker",label:"Docker",mdxType:"TabItem"},(0,r.yg)("p",null,"\u9996\u5148\u8981\u786e\u4fdd\u4f60\u5df2\u5b89\u88c5\u4e86 Docker\uff0c\u5177\u4f53\u5b89\u88c5 Docker \u7684\u6559\u7a0b\u8bf7\u81ea\u884c\u8c37\u6b4c\u641c\u7d22\u3002"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"}," \ud83d\udc49\ufe0f > \u4e0b\u8f7d ")),(0,r.yg)("p",null,"Docker Hub \u5df2\u88ab\u5c4f\u853d\uff0c\u9009\u62e9\u6700\u5408\u9002\u4f60\u7684\u65b9\u6cd5\u5b89\u88c5\u955c\u50cf\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u82e5\u4f60\u80fd\u76f4\u63a5\u4f7f\u7528 Docker Hub \u5c31\u6700\u597d\u4e86")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"docker pull ui4freedom/uif:latest # \u62c9\u53d6\u6700\u65b0\u955c\u50cf\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u901a\u8fc7\u955c\u50cf\u7ad9\uff0c\u53c2\u8003 ",(0,r.yg)("a",{parentName:"li",href:"https://gist.github.com/y0ngb1n/7e8f16af3242c7815e7ca2f0833d3ea6"},"Docker \u7684\u6e90\u7ad9\u8bbe\u7f6e"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"# \u4e3e\u4f8b\ndocker pull dockerproxy.net/ui4freedom/uif:latest && docker tag dockerproxy.net/ui4freedom/uif:latest ui4freedom/uif:latest && docker rmi dockerproxy.net/ui4freedom/uif:latest\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"}," \ud83d\udc49\ufe0f > \u8fd0\u884c ")),(0,r.yg)("p",null,"\u9996\u6b21\u8fd0\u884c\uff08\u521b\u5efa\u5bb9\u5668\uff09\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"# \u7f51\u7edc\u6a21\u5f0f\u5fc5\u987b\u662f\u8981 host\n# -d \u8bbe\u7f6e\u4e3a\u540e\u53f0\u8fd0\u884c\n# \u5bb9\u5668\u540d\u5b57\u9884\u8bbe\u503c\u4e3a uif\n# privileged \u662f\u5fc5\u987b\u7684\uff0c\u5982\u679c\u4f60\u8981\u7528 tun\n# unless-stopped \u8bbe\u7f6e\u4e3a\u5f00\u673a\u81ea\u542f\n# --log-opt max-size \u9650\u5236\u8f93\u51fa\u65e5\u5fd7\u7684\u5927\u5c0f\uff0c\u4ee5\u9632\u7206\u786c\u76d8\ndocker run --network host --name uif --privileged --restart unless-stopped --log-opt max-size=10m -d ui4freedom/uif:latest\n")),(0,r.yg)("p",null,"\u518d\u6b21\u8fd0\u884c\uff08\u590d\u7528\u5bb9\u5668\uff09\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"docker start uif\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"}," \ud83d\udc49\ufe0f > \u67e5\u770b ",(0,r.yg)("inlineCode",{parentName:"strong"},"Password"),"\u3001",(0,r.yg)("inlineCode",{parentName:"strong"},"Web Address")," \u548c ",(0,r.yg)("inlineCode",{parentName:"strong"},"API Address")," ")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"docker logs -f uif\n")),(0,r.yg)("p",null,"\u4f1a\u51fa\u73b0\u5982\u4e0b\u7c7b\u4f3c\u5185\u5bb9\uff0c\u4e3b\u8981\u662f\u4e3a\u4e86\u67e5\u770b\u5bc6\u7801\u548c\u7aef\u53e3\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"Password: 92c204a9-3934-4976-96f2-7bbcb338ccf0\nWeb Address: 0.0.0.0:9527\nAPI Address: 0.0.0.0:9413\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"}," \ud83d\udc49\ufe0f > \u505c\u6b62\u8fd0\u884c ")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"docker stop uif\n"))),(0,r.yg)(u.A,{value:"custom",label:"\u81ea\u5b9a\u4e49\u5b89\u88c5",mdxType:"TabItem"},(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u7684 Linux \u662f\u6ca1\u6709\u56fe\u50cf\u754c\u9762\uff0c\u4e3a\u4e86\u65b9\u4fbf\u4f60\u9700\u8981\u5c06 UIF \u7684 API \u548c Web \u7684\u7aef\u53e3\u66b4\u9732\u51fa\u6765\u3002\u4e00\u952e\u811a\u672c\u548c docker \u90fd\u4f1a\u81ea\u52a8\u521d\u59cb\u5316\u5bc6\u7801\u548c\u7aef\u53e3\uff0c\u81ea\u5b9a\u4e49\u5b89\u88c5\u65f6\uff0c\u4f60\u5fc5\u987b\u8981\u81ea\u884c\u8bbe\u7f6e\u8fd9\u4e9b\u3002")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"}," \ud83d\udc49\ufe0f > \u4e0b\u8f7d ")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{target:"_blank",href:a(54720).A},"uif-linux-amd64.tar.gz")," (x64) (\u5e38\u89c1)"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{target:"_blank",href:a(46888).A},"uif-linux-arm64.tar.gz")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{target:"_blank",href:a(22397).A},"uif-linux-armv7.tar.gz")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/UIforFreedom/UIF/releases"},"Github \u901a\u9053")," \uff08\u53ef\u80fd\u88ab\u5c4f\u853d\u4e86\u6253\u4e0d\u5f00\uff09")),(0,r.yg)("p",null,"\u5148\u786e\u5b9a\u4f60\u673a\u5668\u7684\u67b6\u6784\uff0c\u6bd4\u5982\u8bf4\u662f ",(0,r.yg)("inlineCode",{parentName:"p"},"arm64"),"\uff0c\u90a3\u4e48\u53ef\u4ee5\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"curl")," \u6216\u8005 ",(0,r.yg)("inlineCode",{parentName:"p"},"wget"),"\uff08\u5148\u786e\u4fdd\u5df2\u5b89\u88c5\u4e86\uff09 \u6839\u636e\u5305\u540d",(0,r.yg)("inlineCode",{parentName:"p"},"uif-linux-arm64.tar.gz")," \u4e0b\u8f7d\uff1b\u53bb ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/UIforFreedom/UIF/releases"},"\u8fd9\u91cc")," \u67e5\u770b\u5168\u90e8\u5df2\u7f16\u8bd1\u597d\u53ef\u7528\u7684\u67b6\u6784\uff0c\u5982\u679c\u6ca1\u6709\u4f60\u5bf9\u5e94\u673a\u5668\u7684\u67b6\u6784\uff0c\u8bf7\u79fb\u6b65\u5230 ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/UIforFreedom/UIF/issues"},"\u8ba8\u8bba\u533a"),"\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"# \u4e3e\u4f8b\uff1a\ncurl -L -O https://github.com/UIforFreedom/UIF/releases/latest/download/uif-linux-arm64.tar.gz\n")),(0,r.yg)("p",null,"Github \u53ef\u80fd\u88ab\u5c4f\u853d\u4e86\uff0c\u53ef\u4ee5\u9009\u62e9\u53e6\u4e00\u4e2a\u4e0b\u8f7d\u5730\u5740\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"curl -L -O https://ui4freedom.org/UIF_help/assets/release/uif-linux-arm64.tar.gz\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"}," \ud83d\udc49\ufe0f > \u89e3\u538b ")),(0,r.yg)("p",null,"\u5148\u786e\u4fdd ",(0,r.yg)("inlineCode",{parentName:"p"},"tar")," \u662f\u6b63\u5e38\u4f7f\u7528\u7684\u3002\u4f60\u53ef\u4ee5\u89e3\u538b\u5230\u4efb\u610f\u5730\u65b9\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'# \u4e3e\u4f8b\uff1a\ntar -xzf "./uif-linux-arm64.tar.gz"\n')),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"}," \ud83d\udc49\ufe0f > \u8bbe\u7f6e ",(0,r.yg)("inlineCode",{parentName:"strong"},"Web Address")," \u548c ",(0,r.yg)("inlineCode",{parentName:"strong"},"API Address")," ")),(0,r.yg)("p",null,"\u5728 UIF \u7684\u76ee\u5f55\u91cc\u65b0\u5efa\u4e00\u4e2a\u540d\u53eb ",(0,r.yg)("inlineCode",{parentName:"p"},"uif_api_address.txt")," \u7684\u6587\u672c\u6587\u4ef6\uff0c\u5f80\u91cc\u9762\u5199\u5165\u4f60\u60f3\u8981\u4f7f\u7528\u7684\u7aef\u53e3\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'# \u4e3e\u4f8b\uff1a\n# \u5fc5\u987b\u8bbe\u7f6e\u4e3a 0.0.0.0\uff0c\u610f\u5473\u7740\u516c\u7f51\u53ef\u89c1\necho "0.0.0.0:1234" | tee "./uif_api_address.txt" > /dev/null\necho "0.0.0.0:8888" | tee "./uif_web_address.txt" > /dev/null\n')),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"}," \ud83d\udc49\ufe0f > \u8fd0\u884c ")),(0,r.yg)("p",null,"\u786e\u4fdd UIF \u76ee\u5f55\u4e0b\u5177\u6709\u5168\u90e8\u6743\u9650\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"# \u4e3e\u4f8b ./uif_dir \u662f\u4f60\u7684\u89e3\u538b\u76ee\u5f55\uff1a\nchmod -R 755 ./uif_dir\n")),(0,r.yg)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"nohup")," \u547d\u4ee4\u6216\u8005\u5199\u4e00\u4e2a\u7cfb\u7edf\u670d\u52a1\uff0c\u8ba9\u542f\u52a8\u5173\u95ed\u66f4\u52a0\u7b80\u5355\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"# UIF \u76ee\u5f55\u91cc\u6709\u4e00\u4e2a\u540d\u53eb uif \u7684\u53ef\u6267\u884c\u6587\u4ef6\uff0c\u76f4\u63a5\u8fd0\u884c\u5373\u53ef\n# \u4e3e\u4f8b\uff1a\nnohup ./uif_dir/uif\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"}," \ud83d\udc49\ufe0f > \u67e5\u770b ",(0,r.yg)("inlineCode",{parentName:"strong"},"Password")," ")),(0,r.yg)("p",null,"\u5982\u679c\u4f60\u5fd8\u8bb0\u4e86\u5bc6\u7801\uff0c\u4f7f\u7528\u547d\u4ee4\u67e5\u770b UIF \u81ea\u52a8\u751f\u6210\u7684\u5bc6\u7801\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"# \u6210\u529f\u8fd0\u884c\u540e\uff0cUIF \u76ee\u5f55\u91cc\u6709\u4e00\u4e2a\u540d\u53eb uif_key.txt \u7684\u6587\u4ef6\n# \u5728\u7ec8\u7aef\u4e2d\u8f93\u5165\uff1a\ncat ./uif_dir/uif_key.txt\n")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"}," \ud83d\udc49\ufe0f > \u6253\u5f00 UI ")),(0,r.yg)("p",null,"\u6210\u529f\u5b89\u88c5\u5e76\u786e\u4fdd\u5728\u540e\u53f0\u5df2\u8fd0\u884c UIF \u540e\uff0c\u53ef\u4ee5\u6253\u5f00 UIF \u7684 Web \u754c\u9762\uff0c\u8fdb\u884c\u5404\u79cd\u64cd\u4f5c\u4e86\u3002"),(0,r.yg)("p",null,"\u82e5\u4f60\u7684 Linux \u65e0\u56fe\u50cf\u754c\u9762\uff0c\u90a3\u5fc5\u987b\u8981\u5728\u53e6\u5916\u7684\u8bbe\u5907\u4e0a\u6253\u5f00\u4e00\u4e2a\u6d4f\u89c8\u5668\uff0c\u4f8b\u5982\u8bf4\u624b\u673a\u3001Windows\u3002"),(0,r.yg)("p",null,"\u6d4f\u89c8\u5668\u8f93\u5165 ",(0,r.yg)("inlineCode",{parentName:"p"},"Web Address")," \u7684\u7f51\u5740\uff0c\u5982\u65e0\u610f\u5916\u5373\u53ef\u770b\u5230\u7684 Web \u754c\u9762\u3002"),(0,r.yg)("p",null,"\u7136\u540e\uff0c\u70b9\u51fb\u6dfb\u52a0\u63a5\u53e3\uff0c\u628a ",(0,r.yg)("inlineCode",{parentName:"p"},"API Address")," \u548c ",(0,r.yg)("inlineCode",{parentName:"p"},"Password")," \u586b\u8fdb\u53bb\u3002\u70b9\u51fb",(0,r.yg)("inlineCode",{parentName:"p"},"\u5207\u6362"),"\uff0c\u6b64\u65f6\u5c31\u4f1a\u81ea\u52a8\u8fde\u63a5\u4e0a UIF \u540e\u7aef\u3002"),(0,r.yg)("p",null,'UI \u4e2d\u53f3\u4e0a\u89d2\u663e\u793a "\u8fde\u63a5\u6210\u529f" \u5373\u53ef\u64cd\u4f5c UIF \u7684\u5168\u90e8\u529f\u80fd\u3002'))}m.isMDXComponent=!0},54720:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/files/uif-linux-amd64.tar-bbc1d21341bb6930d6d2ff2a4675c581.gz"},46888:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/files/uif-linux-arm64.tar-8c4f11262f1c47ac8e29350aea3c370b.gz"},22397:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/files/uif-linux-armv7.tar-066b140387010f9fc0541101107ccaad.gz"}}]);