(window.coreWebpackJsonp=window.coreWebpackJsonp||[]).push([[10],{220:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return re}));var n=a(1),r=a(0),l=a.n(r),i=a(112),o=a(96),c=a(116),s=a(40),m=a(329),d=a(268),p=a(21),u=a(330),b=a(334),g=a(12),h=a(10),f=a(5),y=a(36),E=a(20),v=a(319),j=a(55),w=a(86),O=a(50),x=a(110),A=a(132),k=a(271),P=a(188),T=a(65),S=a(344);function C(e,t,a,n,r,l,i){try{var o=e[l](i),c=o.value}catch(s){return void a(s)}o.done?t(c):Promise.resolve(c).then(n,r)}const W={"jquery-1":"https://static.bbc.co.uk/frameworks/jquery/0.4.1/sharedmodules/jquery-1.7.2","bump-3":"https://emp.bbci.co.uk/emp/bump-3/bump-3","jquery-1.9":"https://static.bbc.co.uk/frameworks/jquery/0.4.1/sharedmodules/jquery-1.9.1","istats-1":"https://news.files.bbci.co.uk/include/vjassets/js/vendor/istats-1.0.0.min"};let q=!1;var I=function(){var e,t=(e=function*(){try{yield Object(S.a)(),q||void 0===window.require||(window.require.config({paths:W}),q=!0)}catch(e){}},function(){var t=this,a=arguments;return new Promise((function(n,r){var l=e.apply(t,a);function i(e){C(l,n,r,i,o,"next",e)}function o(e){C(l,n,r,i,o,"throw",e)}i(void 0)}))});return function(){return t.apply(this,arguments)}}();function D(){return(D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function R(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function L(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?R(Object(a),!0).forEach((function(t){z(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):R(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function z(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const H=Object(n.a)("div",{target:"e1xue1i80",label:"ComponentWrapper"})("margin:",f.e," ",(e=>{let{leftAligned:t}=e;return t?"0":"auto"}),";",(e=>{let{emphasise:t}=e;return!t&&"max-width: ".concat(P.a)}),";"),M=Object(n.a)(H,{target:"e1xue1i81",label:"SocialEmbedComponentWrapper"})("div{margin:",f.e," ",(e=>{let{leftAligned:t}=e;return t?"0":"auto"}),";}iframe{max-width:100%;}div > blockquote{border:1px solid ",(e=>{let{theme:t}=e;return t.colourPalette.border}),";border-radius:4px;padding:",f.c,";max-width:",P.b,";margin:",f.a," ",(e=>{let{leftAligned:t}=e;return t?"0":"auto"}),";}span{display:block;",h.c," margin-bottom:",f.a,";}.fb-post{max-width:100%;margin-bottom:",f.a,";span{max-width:100%;}}"),U=Object(n.a)(H,{target:"e1xue1i82",label:"YouTubeSocialEmbedComponentWrapper"})({name:"rd737g",styles:"position:relative;width:100%;height:0;padding-bottom:56.25%;margin-bottom:0;iframe{max-width:100%;position:absolute;top:0;left:0;width:100%;height:100%;}"}),F=Object(n.a)("div",{target:"e1xue1i83",label:"RichTextComponentWrapper"})("margin:",f.c," ",(e=>{let{leftAligned:t}=e;return t?"0":"auto"}),";max-width:",P.b,";"),J=Object(n.a)(H,{target:"e1xue1i84",label:"CrossheadComponentWrapper"})("padding-top:",f.c,";max-width:",P.b,";"),N=Object(n.a)(H,{target:"e1xue1i85",label:"IncludeComponentWrapper"})({name:"vdsegv",styles:"iframe{max-width:100%;}"}),Y=Object(n.a)("div",{target:"e1xue1i86",label:"Id2FixWrapper"})({name:"1v77xgv",styles:"@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none) and (min-width:599px){img{top:50% !important;left:50% !important;transform:translate(-50%,-50%) !important;height:auto !important;}}"}),B=e=>{let{media:t,args:{host:a,assetId:n,analytics:r,isAdvertisingEnabled:i}}=e;const{colourPalette:{accent:o,accentContrast:c}}=Object(T.b)(),s=L(L({},t),{},{smpAppName:"news",externalEmbedUrl:"https://".concat(a,"/news/av/embed/{vpid}/").concat(n),analytics:r,isAdvertisingEnabled:i});return l.a.createElement(j.a,{media:s,uiOptions:{colour:o,foreColour:c}})},V=(e,t,a)=>{let{model:{caption:n,emphasiseImage:r,copyright:i,media:o},type:c}=t;return l.a.createElement(H,{"data-component":e,leftAligned:a.leftAligned,emphasise:r},l.a.createElement(w.a,{caption:n,copyright:i,mediaType:c},"image"===c?l.a.createElement(A.a,o):l.a.createElement(B,{media:o,args:a})))},G=(e,t,a)=>{let{leftAligned:n}=a;return l.a.createElement(F,{"data-component":e,leftAligned:n},l.a.createElement(O.a,{blocks:t}))},K=(e,t,a)=>{let{model:{html:n,type:r,idt2Image:i}}=t,{leftAligned:o,nonce:c}=a;if(!n||"idt2"===r&&!i)return null;if("idt2"===r&&/js\/verticalChart|horizontalChart|lineChart|pieChart|simpleMap|table\./.test(n))return((e,t,a)=>{let{alt:n,src:r,srcSet:i,sizes:o,width:c,height:s}=t,{leftAligned:m}=a;return l.a.createElement(H,{"data-component":e,leftAligned:m},l.a.createElement(A.a,{alt:n,src:r,srcSet:i,sizes:o,width:c,height:s}))})(e,i,{leftAligned:o,emphasise:!0});if("edp"===r)return l.a.createElement(H,{"data-component":"envelope-block",leftAligned:o},l.a.createElement(x.a,{type:"envelope",html:n,nonce:c}));const s="vj"===r?I:null,m=L({},"idt2"===r&&/js\/quotePic\./.test(n)&&{wrapper:Y});return l.a.createElement(N,{"data-component":e,leftAligned:o,emphasise:!0},l.a.createElement(x.a,D({html:n,nonce:c,prerequisites:s},m)))},Q=(e,t,a)=>{let{text:n}=t,{leftAligned:r}=a;return l.a.createElement(J,{"data-component":e,leftAligned:r},l.a.createElement(s.a,{level:"2",fontScale:"headlineSmall"},n))};var X={crosshead:(e,t)=>Q("crosshead-block",e,t),heading:(e,t)=>Q("heading-block",e,t),image:(e,t)=>V("image-block",e,t),media:(e,t)=>V("media-block",e,t),orderedList:(e,t)=>G("ordered-list-block",[e],t),socialEmbed:(e,t)=>((e,t,a)=>{let{model:{html:n,source:r,href:i}}=t,{leftAligned:o,socialEmbedTranslations:c}=a;const{warningText:s,linkText:m}=c[r];return"youtube"===r?l.a.createElement(w.a,{caption:s},l.a.createElement(U,{"data-component":e,leftAligned:o,emphasise:!0},l.a.createElement(x.a,{type:"noscript",html:n}))):l.a.createElement(M,{"data-component":e,leftAligned:o,emphasise:!0},l.a.createElement(x.a,{type:"noscript",html:n}),l.a.createElement(F,{leftAligned:o},s&&l.a.createElement("span",null,s),m&&l.a.createElement(k.a,{url:i},m)))})("social-embed-block",e,t),text:(e,t)=>G("text-block",e.model.blocks,t),unorderedList:(e,t)=>G("unordered-list-block",[e],t),include:(e,t)=>K("include-block",e,t)};const Z=Object(n.a)("article",{target:"e1nh2i2l0",label:"ArticleWrapper"})(g.b," ",h.b," color:",(e=>{let{theme:t}=e;return t.colourPalette.primary}),";margin:",f.c," 0 ",f.e," 0;padding-bottom:",f.e,";"),$=Object(n.a)("header",{target:"e1nh2i2l1",label:"HeadingWrapper"})("border-bottom:solid 1px ",(e=>{let{theme:t}=e;return t.colourPalette.border}),";padding-bottom:",f.e,";> ",y.a,"{margin-top:",f.c,";}"),_=Object(n.a)("li",{target:"e1nh2i2l2",label:"PromoItem"})("margin:",f.e," 0;"),ee=Object(n.a)("div",{target:"e1nh2i2l3",label:"SectionHeaderWrapper"})("margin-bottom:",f.e,";"),te=Object(n.a)("section",{target:"e1nh2i2l4",label:"SectionWrapper"})("margin:",f.e," 0;padding-top:",f.e,";"),ae=Object(n.a)("div",{target:"e1nh2i2l5",label:"CommentsWrapper"})("margin:",f.a," 0;"),ne=Object(n.a)("div",{target:"e1nh2i2l6",label:"TagShareWrapper"})("display:flex;> ",y.a,"{margin-left:",f.a,";}");var re=e=>{let{data:{blocks:t,contributor:a,headline:n,metadata:{assetId:g,timestampRelative:h,publishedDateTime:f,translations:y,analytics:{page:{name:j,producer:w}},options:{allowPrintingSharingLinks:O,allowRightHandSide:x=!1,includeComments:A}},seeAlsos:k,tags:P=[]},uri:T,host:S,env:C,currentPageAnalyticsDestination:W,isAdvertisingEnabled:q}=e;const I=Object(E.f)(),{seeAlsos:D,tagList:R,socialEmbed:L}=y,{nonce:z}=Object(v.b)(),H={page:{producer:w,destination:W,name:j}},M=t.map((e=>{if(!X[e.type])return null;if("socialEmbed"===e.type)return X[e.type](e,{leftAligned:x,socialEmbedTranslations:L});if("media"===e.type)return X[e.type](e,{host:S,assetId:g,leftAligned:x,analytics:H,isAdvertisingEnabled:q});if("include"===e.type){let t=!1;return["edp","idt2","vj"].includes(e.model.type)&&(t=!0),t&&e.model?X[e.type](e,{leftAligned:x,nonce:z}):null}return X[e.type](e,{leftAligned:x})})).filter(Boolean),[U]=P.filter((e=>e.isEvent)),F={URN:g,STY:"article"};return l.a.createElement(Z,null,l.a.createElement($,null,l.a.createElement(s.a,{level:"1",fontScale:"headlineLarge"},n),a&&l.a.createElement(m.a,a),h&&l.a.createElement(d.a,{items:[{label:"Published",iconType:"core:duration",text:l.a.createElement("time",{dateTime:f},h)}]}),l.a.createElement(ne,null,O&&l.a.createElement(i.a,{buttonVariant:"standard",mode:"icon-only",horizontalAlignment:"left",trackingMetadata:F}),U&&l.a.createElement(o.a,{tags:[U]},l.a.createElement(p.a,null,R)))),M.map(((e,t)=>l.a.createElement(r.Fragment,{key:t},e))),A&&l.a.createElement(ae,null,l.a.createElement(c.a,{assetUri:T,assetTitle:n,meta:{env:C,host:S,location:I}})),P.length>0&&l.a.createElement(te,{"data-component":"tag-list"},l.a.createElement(o.a,{tags:P},l.a.createElement(ee,null,l.a.createElement(u.a,{headingText:R})))),k&&k.length>0&&l.a.createElement(te,{"data-component":"see-alsos"},l.a.createElement(ee,null,l.a.createElement(u.a,{headingText:D})),l.a.createElement("ul",null,k.map(((e,t)=>l.a.createElement(_,{key:t},l.a.createElement(b.a,{headline:e.headline,url:e.url,metadataStripItems:e.timestampRelative&&[{label:"Published",text:e.timestampRelative}],pageTypeIndicator:"MAP"===e.type?{iconType:"audio-visual:play"}:void 0})))))))}}}]);