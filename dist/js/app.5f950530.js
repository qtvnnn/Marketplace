(function(t){function e(e){for(var a,s,c=e[0],o=e[1],l=e[2],u=0,m=[];u<c.length;u++)s=c[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&m.push(r[s][0]),r[s]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);v&&v(e);while(m.length)m.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,s=1;s<n.length;s++){var o=n[s];0!==r[o]&&(a=!1)}a&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={app:0},i=[];function s(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"bcbcc795"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=r[t]=[e,a]}));e.push(n[2]=a);var i,o=document.createElement("script");o.charset="utf-8",o.timeout=120,c.nc&&o.setAttribute("nonce",c.nc),o.src=s(t);var l=new Error;i=function(e){o.onerror=o.onload=null,clearTimeout(u);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,n[1](l)}r[t]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:o})}),12e4);o.onerror=o.onload=i,document.head.appendChild(o)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var v=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0324":function(t,e,n){"use strict";n("3365")},2058:function(t,e,n){},"21bb":function(t,e,n){"use strict";n("2dad")},2963:function(t,e,n){"use strict";n("2058")},"2dad":function(t,e,n){},3365:function(t,e,n){},3414:function(t,e,n){"use strict";n("b785")},"42c8":function(t,e,n){},"4a84":function(t,e,n){"use strict";n("f0d4")},"4b65":function(t,e,n){"use strict";n("aa81")},"4c5c":function(t,e,n){"use strict";n("42c8")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("Header"),n("v-main",[n("router-view")],1),n("v-footer",{attrs:{app:""}},[n("Footer")],1)],1)},i=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{staticClass:"header",attrs:{app:"",color:"white",flat:""}},[n("v-container",{staticClass:"py-0 fill-height"},[n("v-avatar",{staticClass:"mr-2",attrs:{color:"grey darken-1",size:"32"}}),n("span",{staticClass:"mr-12 brand-name",staticStyle:{"margin-right":"40px"}},[n("router-link",{staticStyle:{"text-decoration":"none",color:"inherit"},attrs:{to:"/"}},[t._v("Marketplace")])],1),n("v-responsive",{attrs:{"max-width":"400"}},[n("v-text-field",{attrs:{label:"Search items, collections, and accounts","prepend-icon":"mdi-magnify",dense:"",flat:"","hide-details":"",rounded:"","solo-inverted":""}})],1),n("v-spacer"),n("v-menu",{attrs:{"open-on-hover":"",bottom:"","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,r=e.attrs;return[n("v-btn",t._g(t._b({attrs:{rounded:""}},"v-btn",r,!1),a),[t._v(" My account ")])]}}])},[n("v-list",[n("v-list-item",[n("v-list-item-title",{staticClass:"menu-item-account"},[n("router-link",{staticStyle:{"text-decoration":"none",color:"inherit"},attrs:{to:"/account"}},[t._v("My Profile")])],1)],1),n("v-list-item",[n("v-list-item-title",{staticClass:"menu-item-account"},[n("router-link",{staticStyle:{"text-decoration":"none",color:"inherit"},attrs:{to:"/collections"}},[t._v("My Collections")])],1)],1)],1)],1),n("v-btn",{staticClass:"ml-4",attrs:{text:"",rounded:""}},[t._v("Connect Wallet")])],1)],1)},c=[],o={data:function(){return{}}},l=o,u=(n("eaf8"),n("2877")),v=n("6544"),m=n.n(v),p=n("40dc"),f=n("8212"),h=n("8336"),d=n("a523"),b=n("8860"),g=n("da13"),_=n("5d23"),C=n("e449"),x=n("6b53"),y=n("2fa4"),w=n("8654"),V=Object(u["a"])(l,s,c,!1,null,"21dd0858",null),T=V.exports;m()(V,{VAppBar:p["a"],VAvatar:f["a"],VBtn:h["a"],VContainer:d["a"],VList:b["a"],VListItem:g["a"],VListItemTitle:_["b"],VMenu:C["a"],VResponsive:x["a"],VSpacer:y["a"],VTextField:w["a"]});var O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("footer")])},k=[],S={data:function(){return{}}},A=S,j=Object(u["a"])(A,O,k,!1,null,null,null),E=j.exports,F={name:"App",components:{Footer:E,Header:T},data:function(){return{}}},M=F,B=n("7496"),N=n("553a"),R=n("f6c4"),q=Object(u["a"])(M,r,i,!1,null,null,null),I=q.exports;m()(q,{VApp:B["a"],VFooter:N["a"],VMain:R["a"]});n("d3b7"),n("3ca3"),n("ddb0");var $=n("8c4f"),L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"inspire"}},[n("Banner"),n("v-main",[n("NFTList"),n("AuctionList")],1)],1)},P=[],U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"banner"},[n("v-container",[n("v-row",{staticClass:"banner-row"},[n("BannerLeft"),n("BannerRight")],1)],1)],1)},G=[],D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"banner-left",attrs:{align:"center"}},[n("p",{staticClass:"title-banner"},[t._v("Chào mừng bạn đã đến với chợ đồ cũ BDA !!!")]),n("p",{staticClass:"mb-6",staticStyle:{"font-size":"24px"}},[t._v(" thị trường NFT đầu tiên và lớp nhất Việt Nam ")]),n("router-link",{staticStyle:{"text-decoration":"none",color:"inherit"},attrs:{to:"/create-nft"}},[n("v-btn",{staticClass:"mr-2",attrs:{color:"primary",height:"50"}},[t._v("Tạo sản phẩm ")])],1),n("router-link",{staticStyle:{"text-decoration":"none",color:"inherit"},attrs:{to:"/create-auction"}},[n("v-btn",{attrs:{outlined:"",color:"indigo",height:"50"}},[t._v("Tạo đấu giá ")])],1)],1)},H=[],z={name:"BannerLeft",components:{}},J=z,Q=(n("0324"),n("62ad")),W=Object(u["a"])(J,D,H,!1,null,"6ea47b3b",null),X=W.exports;m()(W,{VBtn:h["a"],VCol:Q["a"]});var K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"banner-right"},[n("v-img",{staticClass:"banner-img",attrs:{"max-height":"419","max-width":"549",src:"https://lh3.googleusercontent.com/06DG0Jq_0OUOp0cqfaQh2KyywUMNeeQBrrim1JtNcs6jf0t1e6fuEmO8EOA-eHiR7sHdgqvjjh7wnxgMzeoIIea6lnXTmUx6fEn7FQ=s550"}})],1)},Y=[],Z={name:"BannerRight",components:{}},tt=Z,et=(n("3414"),n("adda")),nt=Object(u["a"])(tt,K,Y,!1,null,"1b9f223c",null),at=nt.exports;m()(nt,{VCol:Q["a"],VImg:et["a"]});var rt={name:"Banner",components:{BannerLeft:X,BannerRight:at}},it=rt,st=(n("4a84"),n("0fd9")),ct=Object(u["a"])(it,U,G,!1,null,"52a5b25a",null),ot=ct.exports;m()(ct,{VContainer:d["a"],VRow:st["a"]});var lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("span",{staticClass:"title-nft-list"},[t._v("Chợ mua bán sản phẩm")]),n("v-row",{staticClass:"mt-6 mb-12"},t._l(8,(function(e){return n("v-col",{key:e,attrs:{cols:"3"}},[n("router-link",{staticStyle:{"text-decoration":"none",color:"inherit"},attrs:{to:"/nft/1"}},[n("v-card",{attrs:{height:"400",align:"center"}},[n("div",{staticClass:"img-contain",staticStyle:{height:"320px"}},[n("img",{staticClass:"item-img",attrs:{src:"https://picsum.photos/500/400?random"}})]),n("v-container",[n("v-row",[n("v-col",{staticClass:"text-left"},[n("span",{staticClass:"item-name"},[t._v("Tên sản phẩm")]),n("br"),n("span",{staticClass:"item-owner"},[t._v("Owner")])]),n("v-col",{staticClass:"text-right"},[n("span",{staticClass:"txt-price"},[t._v("Price")]),n("br"),n("span",{staticClass:"price"},[t._v("$10")])])],1)],1)],1)],1)],1)})),1)],1)},ut=[],vt={name:"NFTList",components:{}},mt=vt,pt=(n("2963"),n("b0af")),ft=Object(u["a"])(mt,lt,ut,!1,null,"306b9a34",null),ht=ft.exports;m()(ft,{VCard:pt["a"],VCol:Q["a"],VContainer:d["a"],VRow:st["a"]});var dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("span",{staticClass:"title-auction-list"},[t._v("Chợ đấu giá sản phẩm")]),n("v-row",{staticClass:"mt-6"},t._l(8,(function(e){return n("v-col",{key:e,attrs:{cols:"3"}},[n("router-link",{staticStyle:{"text-decoration":"none",color:"inherit"},attrs:{to:"/auction/1"}},[n("v-card",{attrs:{height:"400",align:"center"}},[n("div",{staticClass:"img-contain",staticStyle:{height:"320px"}},[n("img",{staticClass:"item-img",attrs:{src:"https://picsum.photos/500/400?random"}})]),n("v-container",[n("v-row",[n("v-col",{staticClass:"text-left"},[n("span",{staticClass:"item-name"},[t._v("Tên sản phẩm")]),n("br"),n("span",{staticClass:"item-owner"},[t._v("Owner")])]),n("v-col",{staticClass:"text-right"},[n("span",{staticClass:"txt-price"},[t._v("Price")]),n("br"),n("span",{staticClass:"price"},[t._v("$10")])])],1)],1)],1)],1)],1)})),1)],1)},bt=[],gt={name:"AuctionList",components:{}},_t=gt,Ct=(n("617e"),Object(u["a"])(_t,dt,bt,!1,null,"7a5694a5",null)),xt=Ct.exports;m()(Ct,{VCard:pt["a"],VCol:Q["a"],VContainer:d["a"],VRow:st["a"]});var yt={name:"Home",components:{Banner:ot,NFTList:ht,AuctionList:xt}},wt=yt,Vt=(n("21bb"),Object(u["a"])(wt,L,P,!1,null,null,null)),Tt=Vt.exports;m()(Vt,{VApp:B["a"],VMain:R["a"]});var Ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"account"},[n("Profile"),n("MyItems"),n("MyAuctions")],1)},kt=[],St=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"profile"},[n("v-row",[n("v-col",[n("v-avatar",{staticClass:"mb-6",attrs:{color:"warning lighten-2",size:"140"}},[t._v("NN")]),n("h2",{staticClass:"mb-4 username"},[t._v("User Name")]),n("h3",{staticClass:"mb-12"},[t._v(" Tài khoản của bạn: "),n("span",{staticClass:"address"},[t._v("0x6976e231a2B80052A4d33875eFD386B980a486fC ")])])],1)],1),n("hr")],1)},At=[],jt={name:"Profile",components:{}},Et=jt,Ft=(n("98bd"),Object(u["a"])(Et,St,At,!1,null,"3872a5ac",null)),Mt=Ft.exports;m()(Ft,{VAvatar:f["a"],VCol:Q["a"],VContainer:d["a"],VRow:st["a"]});var Bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("h2",{staticClass:"mb-6"},[t._v("My list Items")]),n("v-row",[n("v-col",[n("router-link",{staticStyle:{"text-decoration":"none",color:"inherit"},attrs:{to:"/create-nft"}},[n("v-btn",{attrs:{color:"error",outlined:"",height:"50"}},[t._v("Tạo sản phẩm")])],1)],1),n("v-col",[n("v-text-field",{attrs:{outlined:"",label:"Search","append-icon":"mdi-magnify"}})],1),n("v-col",[n("v-select",{attrs:{items:t.items,label:"Lựa chọn sắp xếp",outlined:""}})],1)],1),n("v-row",t._l(6,(function(e){return n("v-col",{key:e,attrs:{cols:"4"}},[n("router-link",{staticStyle:{"text-decoration":"none",color:"inherit"},attrs:{to:"/auction/1"}},[n("v-card",{attrs:{height:"400",align:"center"}},[n("div",{staticClass:"img-contain",staticStyle:{height:"320px"}},[n("img",{staticClass:"item-img",attrs:{src:"https://picsum.photos/500/400?random"}})]),n("v-container",[n("v-row",[n("v-col",{staticClass:"text-left"},[n("span",{staticClass:"item-name"},[t._v("Tên sản phẩm")]),n("br"),n("span",{staticClass:"item-owner"},[t._v("Owner")])]),n("v-col",{staticClass:"text-right"},[n("span",{staticClass:"txt-price"},[t._v("Price")]),n("br"),n("span",{staticClass:"price"},[t._v("$10")])])],1)],1)],1)],1)],1)})),1)],1)},Nt=[],Rt={name:"MyItems",components:{},data:function(){return{items:["Giá từ thấp đến cao","Giá từ cao đến thấp"]}}},qt=Rt,It=(n("4b65"),n("b974")),$t=Object(u["a"])(qt,Bt,Nt,!1,null,"73a712a1",null),Lt=$t.exports;m()($t,{VBtn:h["a"],VCard:pt["a"],VCol:Q["a"],VContainer:d["a"],VRow:st["a"],VSelect:It["a"],VTextField:w["a"]});var Pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("h2",{staticClass:"mb-6 mt-12"},[t._v("My list Auctions")]),n("v-row",[n("v-col",[n("router-link",{staticStyle:{"text-decoration":"none",color:"inherit"},attrs:{to:"/create-auction"}},[n("v-btn",{attrs:{color:"error",outlined:"",height:"50"}},[t._v("Tạo đấu giá")])],1)],1),n("v-col",[n("v-text-field",{attrs:{outlined:"",label:"Search","append-icon":"mdi-magnify"}})],1),n("v-col",[n("v-select",{attrs:{items:t.items,label:"Lựa chọn sắp xếp",outlined:""}})],1),n("v-col",[n("v-select",{attrs:{items:t.statusAuction,label:"Lựa chọn trạng thái",outlined:""}})],1)],1),n("v-row",t._l(6,(function(e){return n("v-col",{key:e,attrs:{cols:"4"}},[n("router-link",{staticStyle:{"text-decoration":"none",color:"inherit"},attrs:{to:"/auction/1"}},[n("v-card",{attrs:{height:"400",align:"center"}},[n("div",{staticClass:"img-contain",staticStyle:{height:"320px"}},[n("img",{staticClass:"item-img",attrs:{src:"https://picsum.photos/500/400?random"}})]),n("v-container",[n("v-row",[n("v-col",{staticClass:"text-left"},[n("span",{staticClass:"item-name"},[t._v("Tên sản phẩm")]),n("br"),n("span",{staticClass:"item-owner"},[t._v("Owner")])]),n("v-col",{staticClass:"text-right"},[n("span",{staticClass:"txt-price"},[t._v("Price")]),n("br"),n("span",{staticClass:"price"},[t._v("$10")])])],1)],1)],1)],1)],1)})),1)],1)},Ut=[],Gt={name:"MyAuctions",components:{},data:function(){return{items:["Giá từ thấp đến cao","Giá từ cao đến thấp"],statusAuction:["Đang đấu giá","Đã kết thúc","Đang tham gia"]}}},Dt=Gt,Ht=(n("5880"),Object(u["a"])(Dt,Pt,Ut,!1,null,"6e1e79be",null)),zt=Ht.exports;m()(Ht,{VBtn:h["a"],VCard:pt["a"],VCol:Q["a"],VContainer:d["a"],VRow:st["a"],VSelect:It["a"],VTextField:w["a"]});var Jt={name:"Home",components:{Profile:Mt,MyItems:Lt,MyAuctions:zt}},Qt=Jt,Wt=(n("77d4"),Object(u["a"])(Qt,Ot,kt,!1,null,"62f39804",null)),Xt=Wt.exports,Kt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"collections",staticStyle:{"padding-top":"50px",background:"#82b1ff",height:"100vh"}},[n("h1",[t._v("This is my Collections page")]),n("v-btn",[t._v(" Create a collection ")])],1)},Yt=[],Zt=(n("83cd"),{}),te=Object(u["a"])(Zt,Kt,Yt,!1,null,"0b188623",null),ee=te.exports;m()(te,{VBtn:h["a"]});var ne=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"create-nft",staticStyle:{"padding-top":"50px",height:"100vh"}},[n("v-container",[n("v-row",[n("v-col",[n("h1",[t._v("Tạo sản phẩm")])])],1),n("NFTForm")],1)],1)},ae=[],re=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{staticClass:"form-create"},[n("v-col",{staticClass:"pt-8",attrs:{cols:"12",md:"3"}},[n("v-img",{staticClass:"banner-img",attrs:{height:"240",width:"240",src:"https://lh3.googleusercontent.com/06DG0Jq_0OUOp0cqfaQh2KyywUMNeeQBrrim1JtNcs6jf0t1e6fuEmO8EOA-eHiR7sHdgqvjjh7wnxgMzeoIIea6lnXTmUx6fEn7FQ=s550"}}),n("v-file-input",{attrs:{"show-size":"","small-chips":"","truncate-length":"20"}})],1),n("v-col",{attrs:{cols:"12",md:"9"}},[n("v-container",[n("v-row",[n("v-col",[n("v-text-field",{attrs:{rules:t.nameRules,counter:30,label:"Tên sản phẩm",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),n("v-col",[n("v-text-field",{attrs:{rules:t.priceRules,counter:15,label:"Giá sản phẩm",required:"",type:"number"},model:{value:t.price,callback:function(e){t.price=e},expression:"price"}})],1)],1),n("v-row",[n("v-col",[n("v-textarea",{attrs:{outlined:"",label:"Mô tả sản phẩm"}})],1)],1),n("v-row",[n("v-col",[n("v-btn",[t._v("Tạo sản phẩm")])],1)],1)],1)],1)],1)},ie=[],se={name:"CreateNFT",components:{},data:function(){return{valid:!1,name:"",price:"",nameRules:[function(t){return!!t||"Name is required"},function(t){return t.length<=30||"Name must be less than 30 characters"}],priceRules:[function(t){return!!t||"Price is required"},function(t){return t.length<=15||"Name must be less than 15 characters"}]}}},ce=se,oe=n("23a7"),le=n("a844"),ue=Object(u["a"])(ce,re,ie,!1,null,"f45466fc",null),ve=ue.exports;m()(ue,{VBtn:h["a"],VCol:Q["a"],VContainer:d["a"],VFileInput:oe["a"],VImg:et["a"],VRow:st["a"],VTextField:w["a"],VTextarea:le["a"]});var me={components:{NFTForm:ve},data:function(){return{}}},pe=me,fe=(n("70ff"),Object(u["a"])(pe,ne,ae,!1,null,"083224ae",null)),he=fe.exports;m()(fe,{VCol:Q["a"],VContainer:d["a"],VRow:st["a"]});var de=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"create-auction",staticStyle:{"padding-top":"50px",height:"100vh"}},[n("v-container",[n("v-row",[n("v-col",[n("h1",[t._v("Tạo sản phẩm đấu giá")])])],1),n("AuctionForm")],1)],1)},be=[],ge=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{staticClass:"form-create"},[n("v-col",{staticClass:"pt-8",attrs:{cols:"12",md:"3"}},[n("v-img",{staticClass:"banner-img",attrs:{height:"240",width:"240",src:"https://lh3.googleusercontent.com/06DG0Jq_0OUOp0cqfaQh2KyywUMNeeQBrrim1JtNcs6jf0t1e6fuEmO8EOA-eHiR7sHdgqvjjh7wnxgMzeoIIea6lnXTmUx6fEn7FQ=s550"}}),n("v-file-input",{attrs:{"show-size":"","small-chips":"","truncate-length":"20"}})],1),n("v-col",{attrs:{cols:"12",md:"9"}},[n("v-container",[n("v-row",[n("v-col",[n("v-text-field",{attrs:{rules:t.nameRules,counter:30,label:"Tên sản phẩm",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),n("v-col",[n("v-text-field",{attrs:{rules:t.priceRules,counter:15,label:"Giá bán luôn",required:"",type:"number"},model:{value:t.price,callback:function(e){t.price=e},expression:"price"}})],1)],1),n("v-row",[n("v-col",[n("v-text-field",{attrs:{rules:t.priceRules,counter:15,label:"Giá khởi điểm",required:"",type:"number"},model:{value:t.price,callback:function(e){t.price=e},expression:"price"}})],1),n("v-col",[n("v-text-field",{attrs:{rules:t.priceRules,counter:15,label:"Bước nhảy",required:"",type:"number"},model:{value:t.price,callback:function(e){t.price=e},expression:"price"}})],1)],1),n("v-row",[n("v-col",[n("v-datetime-picker",{attrs:{label:"Thời gian bắt đầu"},model:{value:t.timeStart,callback:function(e){t.timeStart=e},expression:"timeStart"}})],1),n("v-col",[n("v-datetime-picker",{attrs:{label:"Thời gian kết thúc"},model:{value:t.timeEnd,callback:function(e){t.timeEnd=e},expression:"timeEnd"}})],1)],1),n("v-row",[n("v-col",[n("v-textarea",{attrs:{outlined:"",label:"Mô tả sản phẩm"}})],1)],1),n("v-row",[n("v-col",[n("v-btn",[t._v("Tạo đấu giá")])],1)],1)],1)],1)],1)},_e=[],Ce={name:"CreateAuction",components:{},data:function(){return{valid:!1,timeStart:"",timeEnd:"",name:"",price:"",nameRules:[function(t){return!!t||"Name is required"},function(t){return t.length<=30||"Name must be less than 30 characters"}],priceRules:[function(t){return!!t||"Price is required"},function(t){return t.length<=15||"Name must be less than 15 characters"}]}}},xe=Ce,ye=Object(u["a"])(xe,ge,_e,!1,null,"6a384682",null),we=ye.exports;m()(ye,{VBtn:h["a"],VCol:Q["a"],VContainer:d["a"],VFileInput:oe["a"],VImg:et["a"],VRow:st["a"],VTextField:w["a"],VTextarea:le["a"]});var Ve={components:{AuctionForm:we},data:function(){return{}}},Te=Ve,Oe=(n("883a"),Object(u["a"])(Te,de,be,!1,null,"be7d2acc",null)),ke=Oe.exports;m()(Oe,{VCol:Q["a"],VContainer:d["a"],VRow:st["a"]});var Se=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nft-detail",staticStyle:{"padding-top":"50px"}},[n("h1",{staticClass:"mb-12",staticStyle:{"text-align":"center"}},[t._v("Chi tiết sản phẩm")]),n("NFT")],1)},Ae=[],je=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",md:"5"}},[n("v-img",{staticClass:"banner-img",attrs:{"max-height":"600",src:"https://lh3.googleusercontent.com/gerpAEWBpUrL784sMdXAUEUF86-9GxraSLrqcA_2cqo2IiJ_9wIvtlL17ztRWscrFWKqr7fb3NUqV3omPWzkLdB_lGqM6HLIUXkqOw=w600"}})],1),n("v-col",{staticClass:"nft-detail-right",attrs:{cols:"12",md:"7"}},[n("p",{staticClass:"item-name"},[t._v("Item Name")]),n("p",{staticClass:"owned"},[t._v("Owned by "),n("span",{staticClass:"owner-name"},[t._v("Username")])]),n("p",[t._v("Mô tả sản phẩm:")]),n("p",{staticClass:"description"},[t._v(" The column was decorated in high relief with scenes from Greek mythology. ")]),n("p",[t._v(" Contract Address: "),n("span",{staticStyle:{color:"#1868b7"}},[t._v("0x88B48F654c30e99bc2e4A1559b4Dcf1aD93FA656")])]),n("p",[t._v(" Token ID: "),n("span",{staticStyle:{color:"#707a83"}},[t._v("27267367970176516212915745...")])]),n("p",[t._v("Blockchain: "),n("span",{staticStyle:{color:"#707a83"}},[t._v(" Rinkeby")])]),n("p",[t._v("Price: "),n("span",{staticClass:"price"},[t._v("$10")])]),n("v-btn",[t._v("Make Offer")])],1)],1)],1)},Ee=[],Fe={name:"NFT",components:{},data:function(){return{}}},Me=Fe,Be=(n("ca17"),Object(u["a"])(Me,je,Ee,!1,null,"ee412c24",null)),Ne=Be.exports;m()(Be,{VBtn:h["a"],VCol:Q["a"],VContainer:d["a"],VImg:et["a"],VRow:st["a"]});var Re={name:"AuctionDetail",components:{NFT:Ne}},qe=Re,Ie=Object(u["a"])(qe,Se,Ae,!1,null,"767f8e56",null),$e=Ie.exports,Le=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"auction-detail",staticStyle:{"padding-top":"50px"}},[n("h1",{staticClass:"mb-12",staticStyle:{"text-align":"center"}},[t._v("Chi tiết sản phẩm đấu giá")]),n("Auction")],1)},Pe=[],Ue=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",[n("v-col",{staticClass:"nft-detail-left",attrs:{cols:"12",md:"4"}},[n("v-img",{staticClass:"banner-img",attrs:{"max-height":"600",src:"https://lh3.googleusercontent.com/gerpAEWBpUrL784sMdXAUEUF86-9GxraSLrqcA_2cqo2IiJ_9wIvtlL17ztRWscrFWKqr7fb3NUqV3omPWzkLdB_lGqM6HLIUXkqOw=w600"}})],1),n("v-col",{staticClass:"nft-detail-right",attrs:{cols:"12",md:"8"}},[n("v-row",[n("v-col",{staticClass:"info-auction"},[n("p",{staticClass:"item-name"},[t._v("Item Name")]),n("p",{staticClass:"owned"},[t._v(" Owned by "),n("span",{staticClass:"owner-name"},[t._v("Username")])]),n("p",[t._v("Mô tả sản phẩm:")]),n("p",{staticClass:"description"},[t._v(" The column was decorated in high relief with scenes from Greek mythology. ")]),n("p",[t._v(" Contract Address: "),n("span",{staticStyle:{color:"#1868b7"}},[t._v("0x88B48F654c30e99bc2e4A1559b4Dcf1aD93FA656")])]),n("p",[t._v(" Token ID: "),n("span",{staticStyle:{color:"#707a83"}},[t._v("27267367970176516212915745...")])]),n("p",[t._v("Blockchain: "),n("span",{staticStyle:{color:"#707a83"}},[t._v(" Rinkeby")])]),n("p",[t._v("Price: "),n("span",{staticClass:"price"},[t._v("$10")])]),n("v-btn",[t._v("Make Offer")])],1),n("v-col",[n("h2",{staticClass:"mt-15"},[t._v("Thể lệ đấu giá")]),n("ul",[n("li",[t._v("Thời gian:")]),n("li",[t._v("Mức giá gần nhất:")]),n("li",[t._v("Trạng thái phiên:")]),n("li",[t._v("Giá khởi điểm:")]),n("li",[t._v("Bước nhảy:")])]),n("h3",{staticClass:"mt-4 mb-2"},[t._v("Tham gia đấu giá")]),n("v-text-field",{attrs:{solo:"",suffix:"NGINNFT"}}),n("v-btn",{staticClass:"btn-auction"},[t._v("Đấu giá")])],1)],1)],1)],1)],1)},Ge=[],De={name:"Auction",components:{},data:function(){return{}}},He=De,ze=(n("4c5c"),Object(u["a"])(He,Ue,Ge,!1,null,"27c5324a",null)),Je=ze.exports;m()(ze,{VBtn:h["a"],VCol:Q["a"],VContainer:d["a"],VImg:et["a"],VRow:st["a"],VTextField:w["a"]});var Qe={name:"AuctionDetail",components:{Auction:Je}},We=Qe,Xe=Object(u["a"])(We,Le,Pe,!1,null,"c0e5993a",null),Ke=Xe.exports;a["a"].use($["a"]);var Ye=[{path:"/",name:"Home",component:Tt},{path:"/account",name:"Account",component:Xt},{path:"/collections",name:"Collections",component:ee},{path:"/create-nft",name:"CreateNFT",component:he},{path:"/create-auction",name:"CreateAuction",component:ke},{path:"/nft/1",name:"NFTDetail",component:$e},{path:"/auction/1",name:"AuctionDetail",component:Ke},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],Ze=new $["a"]({mode:"history",base:"/",routes:Ye}),tn=Ze,en=n("2f62");a["a"].use(en["a"]);var nn=new en["a"].Store({state:{},mutations:{},actions:{},modules:{}}),an=n("f309");a["a"].use(an["a"]);var rn=new an["a"]({}),sn=n("ad24");a["a"].config.productionTip=!1,a["a"].use(sn["a"]),new a["a"]({router:tn,store:nn,vuetify:rn,render:function(t){return t(I)}}).$mount("#app")},5880:function(t,e,n){"use strict";n("c732")},"617e":function(t,e,n){"use strict";n("d810")},"70ff":function(t,e,n){"use strict";n("7f40")},"77d4":function(t,e,n){"use strict";n("d0af")},"7f40":function(t,e,n){},"83cd":function(t,e,n){"use strict";n("b3ec")},"883a":function(t,e,n){"use strict";n("8d33")},"8d33":function(t,e,n){},"98bd":function(t,e,n){"use strict";n("e64e")},aa81:function(t,e,n){},b3ec:function(t,e,n){},b506:function(t,e,n){},b785:function(t,e,n){},c358:function(t,e,n){},c732:function(t,e,n){},ca17:function(t,e,n){"use strict";n("c358")},d0af:function(t,e,n){},d810:function(t,e,n){},e64e:function(t,e,n){},eaf8:function(t,e,n){"use strict";n("b506")},f0d4:function(t,e,n){}});
//# sourceMappingURL=app.5f950530.js.map