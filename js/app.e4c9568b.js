(function(t){function e(e){for(var n,c,i=e[0],o=e[1],u=e[2],p=0,d=[];p<i.length;p++)c=i[p],a[c]&&d.push(a[c][0]),a[c]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);l&&l(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],n=!0,i=1;i<r.length;i++){var o=r[i];0!==a[o]&&(n=!1)}n&&(s.splice(e--,1),t=c(c.s=r[0]))}return t}var n={},a={app:0},s=[];function c(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=t,c.c=n,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(r,n,function(e){return t[e]}.bind(null,n));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/mtg-card-search/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=o;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"21bb":function(t,e,r){"use strict";var n=r("bcc9"),a=r.n(n);a.a},2892:function(t,e,r){},"341c":function(t,e,r){},"3de7":function(t,e,r){"use strict";var n=r("f32b"),a=r.n(n);a.a},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d"),r("b107");var n=r("2b0e"),a=r("5f5b"),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("navbar-component"),r("router-view")],1)},c=[],i=(r("8e6e"),r("ac6a"),r("456d"),r("bd86")),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark"},[r("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("MTG Search")]),t._m(0),r("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[r("ul",{staticClass:"navbar-nav ml-auto"},[r("navbar-nav-link",{attrs:{route:"/search"}},[t._v("Search")])],1)])])},u=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse"}},[r("span",{staticClass:"navbar-toggler-icon"})])}],l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{activeClass:t.activeClass,replace:t.replace,append:t.append,tag:t.tag,exact:t.exact,event:t.event,exactActiveClass:t.exactActiveClass,to:t.route}},[t._t("default")],2)],1)},p=[],d={name:"navbar-nav-link",props:{activeClass:{type:String,default:""},route:{type:String,required:!0},replace:{type:Boolean,default:!1},append:{type:Boolean,default:!1},tag:{type:String,default:"a"},exact:{type:Boolean,default:!1},event:{type:[String,Array],default:"click"},exactActiveClass:{type:String,default:""}}},f=d,m=r("2877"),h=Object(m["a"])(f,l,p,!1,null,null,null),v=h.exports,g={name:"navbar-component",components:{NavbarNavLink:v}},b=g,y=Object(m["a"])(b,o,u,!1,null,null,null),_=y.exports,x=r("2f62");function O(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function C(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?O(r,!0).forEach(function(e){Object(i["a"])(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):O(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var S={name:"app",components:{NavbarComponent:_},computed:C({},Object(x["c"])(["sets"])),methods:C({},Object(x["b"])({getSets:"GET_SETS"})),created:function(){this.getSets()}},w=S,T=(r("5c0b"),Object(m["a"])(w,s,c,!1,null,null,null)),j=T.exports,E=r("8c4f"),k=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home container mt-3"},[r("card-search"),r("div",{staticClass:"container border rounded"},[t.loading?r("div",{staticClass:"p-5 d-flex justify-content-center"},[t._m(0)]):t.cards.length<1?r("div",[r("h2",{staticClass:"text-secondary text-center p-5"},[t._v("No cards found.")])]):r("div",{staticClass:"card border-0"},[r("card-list",{attrs:{cards:t.cards,type:"list"}})],1),t.hasMorePages?r("nav",{attrs:{"aria-label":"Page navigation example"}},[t._m(1)]):t._e()])],1)},P=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"spinner-border text-secondary",attrs:{role:"status"}},[r("span",{staticClass:"sr-only"},[t._v("Loading...")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"pagination"},[r("li",{staticClass:"page-item"},[r("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("Previous")])]),r("li",{staticClass:"page-item"},[r("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("Next")])])])}],A=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"row p-3"},[r("h4",[t._v(t._s(t.type.charAt(0).toUpperCase()+this.type.slice(1))+" View")]),r("b-button-group",{staticClass:"ml-auto",attrs:{size:"sm"}},[r("b-button",{attrs:{variant:"light",active:"list"===t.type},on:{click:function(e){return t.toggleType("list")}}},[r("i",{staticClass:"fas fa-list"})]),r("b-button",{attrs:{variant:"light",active:"grid"===t.type},on:{click:function(e){return t.toggleType("grid")}}},[r("i",{staticClass:"fas fa-th"})])],1)],1),"grid"===t.type?r("div",[r("div",{staticClass:"row"},t._l(t.cards,function(e){return r("div",{key:e.id,staticClass:"card p-3 border-0 col-lg-3 col-md-4 col-sm-6 col-xs-12"},[e.image_uris?r("img",{staticClass:"card-img",attrs:{src:e.image_uris.normal,alt:e.name}}):e.card_faces?r("img",{staticClass:"card-img",attrs:{src:e.card_faces[0].image_uris.normal,alt:e.name}}):t._e(),r("div",{staticClass:"card-img-overlay"})])}),0)]):r("div",[r("b-table",{attrs:{responsive:"",striped:"",hover:"",items:t.cards,fields:t.fields,"primary-key":"id"},scopedSlots:t._u([{key:"[image_uris]",fn:function(e){return[r("img",{attrs:{src:t.croppedArtwork(e.item),alt:"",width:"150"}})]}},{key:"[colors]",fn:function(e){return t._l(e.item.colors,function(t){return r("i",{key:t,class:"ms ms-"+t.toLowerCase()})})}},{key:"[mana_cost]",fn:function(e){return t._l(t.convertToIcons(e.value),function(t,e){return r("i",{key:e,class:"ms ms-"+t.toLowerCase()})})}}])})],1)])},R=[],D=(r("4917"),{name:"card-list",props:{cards:Array},data:function(){return{type:"list",fields:[{key:"image_uris",label:"Image"},"name","mana_cost",{key:"type_line",label:"Type"},{key:"oracle_text",label:"Description"},"set_name","rarity","colors"]}},methods:{toggleType:function(t){this.type=t},convertToIcons:function(t){return t.match(/[^{}]+(?=})/g)},croppedArtwork:function(t){var e=t.image_uris;return e||(e=t.card_faces[0].image_uris),e.art_crop}}}),$=D,M=(r("b012"),Object(m["a"])($,A,R,!1,null,null,null)),L=M.exports,N=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-form-group",{staticClass:"border rounded p-3"},[r("card-search-text-input",{staticClass:"mb-3",model:{value:t.searchTerm,callback:function(e){t.searchTerm=e},expression:"searchTerm"}}),t.showAdvanced?r("div",[r("b-form-select",{staticClass:"mb-3",attrs:{placeholder:"Set",options:t.setOptions},model:{value:t.currentSet,callback:function(e){t.currentSet=e},expression:"currentSet"}}),r("b-form-select",{staticClass:"mb-3",attrs:{placeholder:"Type",options:t.typeOptions},model:{value:t.selectedType,callback:function(e){t.selectedType=e},expression:"selectedType"}}),r("b-form-select",{staticClass:"mb-3",attrs:{placeholder:"Rarity",options:t.rarityOptions},model:{value:t.selectedRarity,callback:function(e){t.selectedRarity=e},expression:"selectedRarity"}}),r("b-form-checkbox-group",{staticClass:"mb-3",attrs:{id:"mana-color-form-2",options:t.colorOptions,name:"mana"},model:{value:t.selectedColors,callback:function(e){t.selectedColors=e},expression:"selectedColors"}})],1):t._e(),r("b-button-group",{staticClass:"float-right"},[r("button",{staticClass:"btn btn-default",on:{click:t.toggleAdvanced}},[r("i",{class:"fas fa-chevron-"+(t.showAdvanced?"down":"left")}),t._v(" "+t._s(t.showAdvanced?"Less":"More"))]),r("button",{staticClass:"btn btn-success",on:{click:t.onSearchSubmit}},[t._v("Search")])])],1)},I=[],G=(r("7f7f"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("type-ahead",{attrs:{placeholder:"Search...",data:t.autocompleteTerms,maxMatches:5},on:{input:t.updateSearchTerm},model:{value:t.searchTerm,callback:function(e){t.searchTerm=e},expression:"searchTerm"}})}),V=[],q=(r("96cf"),r("3b8d")),H=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{class:t.sizeClasses},[t.$slots.prepend||t.prepend?r("div",{ref:"prependDiv",staticClass:"input-group-prepend"},[t._t("prepend",[r("span",{staticClass:"input-group-text"},[t._v(t._s(t.prepend))])])],2):t._e(),r("input",{ref:"input",class:"form-control "+t.inputClass,attrs:{type:"search",placeholder:t.placeholder,"aria-label":t.placeholder,autocomplete:"off"},domProps:{value:t.inputValue},on:{focus:function(e){t.isFocused=!0},blur:t.handleBlur,input:function(e){return t.handleInput(e.target.value)}}}),t.$slots.append||t.append?r("div",{staticClass:"input-group-append"},[t._t("append",[r("span",{staticClass:"input-group-text"},[t._v(t._s(t.append))])])],2):t._e()]),r("type-ahead-list",{directives:[{name:"show",rawName:"v-show",value:t.isFocused&&t.data.length>0,expression:"isFocused && data.length > 0"}],ref:"list",staticClass:"autocomplete-list",attrs:{query:t.inputValue,data:t.formattedData,"background-variant":t.backgroundVariant,"text-variant":t.textVariant,maxMatches:t.maxMatches,minMatchingChars:t.minMatchingChars},on:{hit:t.handleHit},scopedSlots:t._u([t._l(t.$scopedSlots,function(e,r){return{key:r,fn:function(e){var n=e.data,a=e.htmlText;return[t._t(r,null,null,{data:n,htmlText:a})]}}})],null,!0)})],1)},B=[],z=(r("c5f6"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"list-group shadow"},t._l(t.matchedItems,function(e,n){return r("type-ahead-list-item",{key:n,attrs:{data:e.data,"html-text":t.highlight(e.text),"background-variant":t.backgroundVariant,"text-variant":t.textVariant},nativeOn:{click:function(r){return t.handleHit(e,r)}},scopedSlots:t._u([{key:"suggestion",fn:function(e){var r=e.data,n=e.htmlText;return t.$scopedSlots.suggestion?[t._t("suggestion",null,null,{data:r,htmlText:n})]:void 0}}],null,!0)})}),1)}),U=[],F=(r("55dd"),r("3b2b"),r("a481"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{class:t.textClasses,attrs:{tabindex:"0",href:"#"},on:{mouseover:function(e){t.active=!0},mouseout:function(e){t.active=!1}}},[t._t("suggestion",[r("span",{domProps:{innerHTML:t._s(t.htmlText)}})],null,{data:t.data,htmlText:t.htmlText})],2)}),Q=[],J={name:"type-ahead-input-list-item",props:{data:{},htmlText:{type:String},backgroundVariant:{type:String},textVariant:{type:String}},data:function(){return{active:!1}},computed:{textClasses:function(){var t="";return t+=this.active?"active":"",t+=this.backgroundVariant?" bg-".concat(this.backgroundVariant):"",t+=this.textVariant?" text-".concat(this.textVariant):"","type-ahead-item list-group-item list-group-item-action ".concat(t)}}},W=J,Y=Object(m["a"])(W,F,Q,!1,null,null,null),K=Y.exports;function X(t){return t.replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Z(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}var tt={name:"type-ahead-list",components:{TypeAheadListItem:K},props:{data:{type:Array,required:!0,validator:function(t){return t instanceof Array}},query:{type:String,default:""},backgroundVariant:{type:String},textVariant:{type:String},maxMatches:{type:Number,default:10},minMatchingChars:{type:Number,default:2}},computed:{highlight:function(){var t=this;return function(e){if(e=X(e),0===t.query.length)return e;var r=new RegExp(t.escapedQuery,"gi");return e.replace(r,"<strong>$&</strong>")}},escapedQuery:function(){return Z(X(this.query))},matchedItems:function(){if(0===this.query.length||this.query.length<this.minMatchingChars)return[];var t=new RegExp(this.escapedQuery,"gi");return this.data.filter(function(e){return null!==e.text.match(t)}).sort(function(e,r){var n=e.text.indexOf(e.text.match(t)[0]),a=r.text.indexOf(r.text.match(t)[0]);return n<a?-1:n>a?1:0}).slice(0,this.maxMatches)}},methods:{handleHit:function(t,e){this.$emit("hit",t),e.preventDefault()}}},et=tt,rt=Object(m["a"])(et,z,U,!1,null,null,null),nt=rt.exports,at=r("6dd8"),st={name:"type-ahead",components:{TypeAheadList:nt},props:{size:{type:String,default:null,validator:function(t){return["lg","sm"].indexOf(t)>-1}},value:{type:String},data:{type:Array,required:!0,validator:function(t){return t instanceof Array}},serializer:{type:Function,default:function(t){return t},validator:function(t){return t instanceof Function}},backgroundVariant:String,textVariant:String,inputClass:{type:String,default:""},maxMatches:{type:Number,default:10},minMatchingChars:{type:Number,default:2},placeholder:String,prepend:String,append:String},computed:{sizeClasses:function(){return this.size?"input-group input-group-".concat(this.size):"input-group"},formattedData:function(){var t=this;return this.data instanceof Array?this.data.map(function(e,r){return{id:r,data:e,text:t.serializer(e)}}):[]}},methods:{resizeList:function(t){var e=t.getBoundingClientRect(),r=this.$refs.list.$el.style;if(r.width=e.width+"px",this.$refs.prependDiv){var n=this.$refs.prependDiv.getBoundingClientRect();r.marginLeft=n.width+"px"}},handleHit:function(t){"undefined"!==typeof this.value&&this.$emit("input",t.text),this.inputValue=t.text,this.$emit("hit",t.data),this.$refs.input.blur(),this.isFocused=!1},handleBlur:function(t){var e=t.relatedTarget;e&&e.classList.contains("type-ahead-item")||(this.isFocused=!1)},handleInput:function(t){this.inputValue=t,"undefined"!==typeof this.value&&this.$emit("input",t)}},data:function(){return{isFocused:!1,inputValue:""}},mounted:function(){var t=this;this.$_ro=new at["a"](function(e){t.resizeList(t.$refs.input)}),this.$_ro.observe(this.$refs.input),this.$_ro.observe(this.$refs.list.$el)},beforeDestroy:function(){this.$_ro.disconnect()}},ct=st,it=(r("ad40"),Object(m["a"])(ct,H,B,!1,null,"c31c093a",null)),ot=it.exports,ut=r("bc3a"),lt=r.n(ut),pt={getCards:function(){var t=Object(q["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",lt.a.get("/cards"));case 1:case"end":return t.stop()}},t)}));function e(){return t.apply(this,arguments)}return e}(),getCardsBySetCode:function(){var t=Object(q["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",lt.a.get("/cards/search?q=e:".concat(e)));case 1:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}(),cardAutocomplete:function(){var t=Object(q["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",lt.a.get("/cards/autocomplete?q=".concat(e)));case 1:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}(),cardSearch:function(){var t=Object(q["a"])(regeneratorRuntime.mark(function t(e){var r,n,a,s,c,i,o,u,l;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(r=e.text,n=e.set,a=e.colors,s=e.type,c=e.rarity,i="/cards/search",o=[],!r){t.next=5;break}return t.abrupt("return",lt.a.get("".concat(i,"?q=name:").concat(r)));case 5:return n&&o.push("set:".concat(n)),a.length>0&&o.push("color:".concat(a.reduce(function(t,e){return t+e}))),s&&o.push("type:".concat(s)),c&&o.push("rarity:".concat(c)),u=o.length>0?o.reduce(function(t,e){return t+"+".concat(e)}):"",l=""!==u?"".concat(i,"?q=").concat(u):i,t.abrupt("return",lt.a.get(l));case 12:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}()},dt={name:"card-search-text-input",data:function(){return{searchTerm:"",isHidden:!0,autocompleteTerms:[]}},components:{TypeAhead:ot},computed:{showResults:function(){return this.autocompleteTerms.length>0&&!this.isHidden}},watch:{searchTerm:function(){var t=Object(q["a"])(regeneratorRuntime.mark(function t(e){var r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,pt.cardAutocomplete(e);case 3:r=t.sent,this.autocompleteTerms=r.data.data,this.isHidden=!1,t.next=12;break;case 8:t.prev=8,t.t0=t["catch"](0),console.log(t.t0),this.autocompleteTerms=[];case 12:case"end":return t.stop()}},t,this,[[0,8]])}));function e(e){return t.apply(this,arguments)}return e}()},methods:{updateSearchTerm:function(){this.$emit("input",this.searchTerm)}}},ft=dt,mt=(r("af4b"),Object(m["a"])(ft,G,V,!1,null,null,null)),ht=mt.exports;function vt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function gt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?vt(r,!0).forEach(function(e){Object(i["a"])(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):vt(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var bt={name:"card-search",components:{CardSearchTextInput:ht},data:function(){return{showAdvanced:!1,searchTerm:"",currentSet:null,selectedRarity:null,rarityOptions:[{text:"Rarity...",value:null,disabled:!0},{text:"Common",value:"common"},{text:"Uncommon",value:"uncommon"},{text:"Rare",value:"rare"},{text:"Mythic",value:"mythic"}],selectedColors:[],colorOptions:[{text:"White",value:"w"},{text:"Blue",value:"u"},{text:"Black",value:"b"},{text:"Red",value:"r"},{text:"Green",value:"g"},{text:"Colorless",value:"c"}],selectedType:null,typeOptions:[{text:"Type...",value:null,disabled:!0},{text:"Creature",value:"creature"},{text:"Instant",value:"instant"},{text:"Sorcery",value:"sorcery"},{text:"Enchantment",value:"enchantment"},{text:"Land",value:"land"}]}},computed:gt({},Object(x["c"])(["loading","sets","cards"]),{setOptions:function(){var t=this.sets.filter(function(t){return"core"===t.set_type||"expansion"===t.set_type||"masters"===t.set_type}).map(function(t){return{text:t.name,value:t.code}});return t.unshift({text:"Set...",value:null,disabled:!0}),t},searchOptions:function(){return{text:this.searchTerm,set:this.currentSet,type:this.selectedType,colors:this.selectedColors,rarity:this.selectedRarity}}}),methods:gt({},Object(x["b"])(["CARD_SEARCH","GET_CARD_AUTOCOMPLETE"]),{toggleAdvanced:function(t){t.preventDefault(),this.showAdvanced=!this.showAdvanced},onSearchSubmit:function(t){t.preventDefault(),this.CARD_SEARCH(this.searchOptions)}})},yt=bt,_t=Object(m["a"])(yt,N,I,!1,null,null,null),xt=_t.exports;function Ot(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function Ct(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?Ot(r,!0).forEach(function(e){Object(i["a"])(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Ot(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var St={name:"home",data:function(){return{}},components:{CardList:L,CardSearch:xt},computed:Ct({},Object(x["c"])(["loading","autocomplete","sets","cards","hasMorePages","totalCards","numPages"]))},wt=St,Tt=(r("21bb"),Object(m["a"])(wt,k,P,!1,null,null,null)),jt=Tt.exports,Et=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home container mt-3"},[r("card-search"),r("div",{staticClass:"container border rounded"},[t.loading?r("div",{staticClass:"p-5 d-flex justify-content-center"},[t._m(0)]):t.cards.length<1?r("div",[r("h2",{staticClass:"text-secondary text-center p-5"},[t._v("No cards found.")])]):r("div",{staticClass:"card border-0"},[r("card-list",{attrs:{cards:t.cards,type:"list"}})],1),t.hasMorePages?r("nav",{attrs:{"aria-label":"Page navigation example"}},[t._m(1)]):t._e()])],1)},kt=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"spinner-border text-secondary",attrs:{role:"status"}},[r("span",{staticClass:"sr-only"},[t._v("Loading...")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"pagination"},[r("li",{staticClass:"page-item"},[r("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("Previous")])]),r("li",{staticClass:"page-item"},[r("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("Next")])])])}];function Pt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function At(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?Pt(r,!0).forEach(function(e){Object(i["a"])(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Pt(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var Rt={name:"home",data:function(){return{}},components:{CardList:L,CardSearch:xt},computed:At({},Object(x["c"])(["loading","autocomplete","sets","cards","hasMorePages","totalCards","numPages"]))},Dt=Rt,$t=(r("3de7"),Object(m["a"])(Dt,Et,kt,!1,null,null,null)),Mt=$t.exports;n["default"].use(E["a"]);var Lt=new E["a"]({mode:"history",base:"/mtg-card-search/",routes:[{path:"/",name:"home",component:jt},{path:"/search",name:"search",component:Mt}]}),Nt={getSets:function(){var t=Object(q["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",lt.a.get("/sets"));case 1:case"end":return t.stop()}},t)}));function e(){return t.apply(this,arguments)}return e}(),getSetsByCode:function(){var t=Object(q["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",lt.a.get("/cards?q=e:".concat(e)));case 1:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}()};n["default"].use(x["a"]);var It=new x["a"].Store({state:{loading:!1,numPages:1,totalCards:0,hasMorePages:!1,cards:[],sets:[],autocomplete:[]},mutations:{SET_LOADING:function(t,e){t.loading=e},SET_CARDS:function(t,e){t.cards=e.data},SET_SETS:function(t,e){t.sets=e.data},SET_NUM_PAGES:function(t,e){t.numPages=e},SET_HAS_MORE:function(t,e){t.hasMorePages=e},SET_AUTOCOMPLETE_OPTIONS:function(t,e){t.autocomplete=e.data}},actions:{GET_CARDS:function(){var t=Object(q["a"])(regeneratorRuntime.mark(function t(e){var r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e.commit("SET_LOADING",!0),t.prev=1,t.next=4,pt.getCards();case 4:r=t.sent,e.commit("SET_CARDS",r.data),e.commit("SET_LOADING",!1),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](1),console.log(t.t0);case 12:case"end":return t.stop()}},t,null,[[1,9]])}));function e(e){return t.apply(this,arguments)}return e}(),GET_SETS:function(){var t=Object(q["a"])(regeneratorRuntime.mark(function t(e){var r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e.commit("SET_LOADING",!0),t.prev=1,t.next=4,Nt.getSets();case 4:r=t.sent,e.commit("SET_SETS",r.data),e.commit("SET_LOADING",!1),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](1),console.log(t.t0);case 12:case"end":return t.stop()}},t,null,[[1,9]])}));function e(e){return t.apply(this,arguments)}return e}(),GET_CARDS_BY_SET:function(){var t=Object(q["a"])(regeneratorRuntime.mark(function t(e,r){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e.commit("SET_LOADING",!0),t.prev=1,t.next=4,pt.getCardsBySetCode(r);case 4:n=t.sent,n.data.has_more?(e.commit("SET_NUM_PAGES",Math.ceil(n.data.total_cards/175)),e.commit("SET_HAS_MORE",!0)):e.commit("SET_HAS_MORE",!1),e.commit("SET_CARDS",n.data),e.commit("SET_LOADING",!1),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](1),console.log(t.t0);case 13:case"end":return t.stop()}},t,null,[[1,10]])}));function e(e,r){return t.apply(this,arguments)}return e}(),CARD_SEARCH:function(){var t=Object(q["a"])(regeneratorRuntime.mark(function t(e,r){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e.commit("SET_LOADING",!0),t.prev=1,t.next=4,pt.cardSearch(r);case 4:n=t.sent,e.commit("SET_CARDS",n.data),e.commit("SET_LOADING",!1),t.next=14;break;case 9:t.prev=9,t.t0=t["catch"](1),e.commit("SET_CARDS",{data:[]}),console.log(t.t0),e.commit("SET_LOADING",!1);case 14:case"end":return t.stop()}},t,null,[[1,9]])}));function e(e,r){return t.apply(this,arguments)}return e}(),GET_CARD_AUTOCOMPLETE:function(){var t=Object(q["a"])(regeneratorRuntime.mark(function t(e,r){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,pt.cardAutocomplete(r);case 3:n=t.sent,e.commit("SET_AUTOCOMPLETE_OPTIONS",n.data),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:case"end":return t.stop()}},t,null,[[0,7]])}));function e(e,r){return t.apply(this,arguments)}return e}()}});lt.a.defaults.baseURL="https://api.scryfall.com",n["default"].config.productionTip=!1,n["default"].use(a["a"]),new n["default"]({router:Lt,store:It,render:function(t){return t(j)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";var n=r("5e27"),a=r.n(n);a.a},"5e27":function(t,e,r){},ad40:function(t,e,r){"use strict";var n=r("d1a2"),a=r.n(n);a.a},af4b:function(t,e,r){"use strict";var n=r("341c"),a=r.n(n);a.a},b012:function(t,e,r){"use strict";var n=r("2892"),a=r.n(n);a.a},b107:function(t,e,r){},bcc9:function(t,e,r){},d1a2:function(t,e,r){},f32b:function(t,e,r){}});
//# sourceMappingURL=app.e4c9568b.js.map