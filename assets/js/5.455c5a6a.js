(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{195:function(t,e,i){},196:function(t,e,i){},197:function(t,e,i){},198:function(t,e,i){},199:function(t,e,i){},200:function(t,e,i){},201:function(t,e,i){},202:function(t,e,i){},203:function(t,e,i){},210:function(t,e,i){"use strict";var n=i(195);i.n(n).a},211:function(t,e,i){"use strict";var n=i(196);i.n(n).a},212:function(t,e,i){"use strict";var n=i(3),s=i(213);n(n.P+n.F*i(214)("includes"),"String",{includes:function(t){return!!~s(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},213:function(t,e,i){var n=i(78),s=i(17);t.exports=function(t,e,i){if(n(e))throw TypeError("String#"+i+" doesn't accept regex!");return String(s(t))}},214:function(t,e,i){var n=i(2)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(i){try{return e[n]=!1,!"/./"[t](e)}catch(t){}}return!0}},215:function(t,e,i){"use strict";var n=i(197);i.n(n).a},216:function(t,e,i){"use strict";var n=i(198);i.n(n).a},217:function(t,e,i){"use strict";var n=i(199);i.n(n).a},218:function(t,e,i){"use strict";var n=i(200);i.n(n).a},219:function(t,e,i){"use strict";var n=i(201);i.n(n).a},220:function(t,e,i){"use strict";var n=i(202);i.n(n).a},222:function(t,e,i){"use strict";var n=i(203);i.n(n).a},226:function(t,e,i){"use strict";var n=i(0),s={name:"z-tabs",props:{selected:{type:String,required:!0}},data:function(){return{eventBus:new n.a}},provide:function(){return{eventBus:this.eventBus}},mounted:function(){var t=this;this.eventBus&&(this.eventBus.$on("update:selected",function(e){t.$emit("update:selected",e)}),this.eventBus.$emit("update:selected",this.selected))},watch:{selected:function(t){this.selected=t,this.eventBus&&this.eventBus.$emit("update:selected",this.selected)}}},a=i(1),r=Object(a.a)(s,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"z-tabs"},[this._t("default")],2)},[],!1,null,"01004532",null).exports,c={name:"z-tabs-header"},l=(i(210),Object(a.a)(c,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"z-tabs-header"},[this._t("default")],2)},[],!1,null,"41464eee",null).exports),o={name:"z-tabs-body"},u=Object(a.a)(o,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"z-tabs-body"},[this._t("default")],2)},[],!1,null,"70b8e407",null).exports,d=(i(54),i(189),{name:"z-tabs-item",data:function(){return{active:!1}},props:{name:{type:[String,Number]},activeClass:{type:String}},inject:["eventBus"],methods:{click:function(){this.eventBus&&this.eventBus.$emit("update:selected",this.name)}},created:function(){var t=this;this.eventBus&&this.eventBus.$on("update:selected",function(e){t.active=e===t.name})}}),h=(i(211),Object(a.a)(d,function(){var t,e=this.$createElement;return(this._self._c||e)("div",{class:(t={"z-tabs-item":!0,"z-tabs-item-active":this.active},t[""+this.activeClass]=this.active&&this.activeClass,t),on:{click:this.click}},[this._t("default")],2)},[],!1,null,"24010498",null).exports),v={name:"z-tabs-pane",data:function(){return{active:!1}},props:{name:{type:[String,Number]}},inject:["eventBus"],created:function(){var t=this;this.eventBus&&this.eventBus.$on("update:selected",function(e){t.active=e===t.name})}},p=Object(a.a)(v,function(){var t=this.$createElement;return(this._self._c||t)("div",{directives:[{name:"show",rawName:"v-show",value:this.active,expression:"active"}],staticClass:"z-tabs-body"},[this._t("default")],2)},[],!1,null,"50608132",null).exports;i.d(e,"b",function(){return l}),i.d(e,"a",function(){return u}),i.d(e,"c",function(){return h}),i.d(e,"d",function(){return p});e.e=r},227:function(t,e,i){"use strict";i(55),i(16),i(20),i(25);var n=i(10),s=(i(189),i(232)),a={name:"z-picker-item",data:function(){return{items:this.data,show:this.visible,selectedIndex:0}},props:{index:{type:Number},data:{type:Array,default:function(){return[]}},value:{type:[String,Number]},valueKey:{type:String,default:"id"},labelKey:{type:String,default:"name"},disabled:{type:Boolean,default:!1}},watch:{data:function(t){var e=this;this.items=t,this.$nextTick(function(){e.scroll?(e.scroll.refresh(),e.scroll.wheelTo(0)):e.scroll=e.createScroll()})},value:function(t){var e=this;this.$nextTick(function(){e.scroll.refresh(),e.setSelectedIndex(t)})},disabled:function(t){t?this.scroll.disable():this.scroll.enable()}},methods:{setSelectedIndex:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.value,e=0;e<this.data.length;e++)if(this.data[e][this.valueKey]===t)return void(this.selectedIndex=e);this.selectedIndex=void 0},createScroll:function(){var t=this,e=new s.a(this.$refs.wrapper,{wheel:{selectedIndex:this.selectedIndex},probeType:3,deceleration:.002,scrollY:!0,rotare:6,zoom:!0,bindToWrapper:!0});return e.on("beforeScrollStart",function(){t.$emit("beforeScrollStart",e,t)}),e.on("scrollEnd",function(){var e=t.scroll.getSelectedIndex();t.selectedIndex=e,t.$emit("change",t.data[t.selectedIndex])}),e}},mounted:function(){var t=this;this.setSelectedIndex(),this.$nextTick(function(){t.scroll?t.scroll.refresh():t.scroll=t.createScroll()})}},r=(i(218),i(1)),c={name:"z-picker",data:function(){return{values:Object(n.a)(this.value),show:this.visible,pickerItemDatas:[],disabled:[!1,!1,!1]}},components:{"picker-item":Object(r.a)(a,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"wrapper",staticClass:"z-item-wrapper",style:"color: "+(t.disabled?"#aaa":"#333")},[i("div",{staticClass:"z-item-content"},t._l(t.items,function(e){return i("div",{key:e[t.valueKey],staticClass:"z-item"},[t._v(t._s(e[t.labelKey]))])}),0)])},[],!1,null,"26531254",null).exports},props:{data:{type:Array,default:function(){return[]}},visible:{type:Boolean,default:!1},value:{type:Array,default:function(){return[]}},valueKey:{type:String,default:"id"},labelKey:{type:String,default:"name"},childrenKey:{type:String,default:"children"},title:{type:String},showModel:{type:Boolean,default:!0},maskClosable:{type:Boolean,default:!0}},methods:{cnacel:function(){this.$emit("cancel")},confirm:function(){var t=this,e=[];this.pickerItemDatas.map(function(i){i.map(function(i){t.values.map(function(n){i[t.valueKey]===n&&e.push(i)})})}),this.$emit("confirm",this.values,e)},clickModel:function(){this.maskClosable&&this.cnacel()},pickerChange:function(t,e){var i=this;if(this.values.map(function(e,n){n!=t&&(i.disabled[n]=!1)}),this.disabled=Object(n.a)(this.disabled),e&&(this.$set(this.values,t,e[this.valueKey]),t!=this.values.length-1)){this.$set(this.pickerItemDatas,t+1,e[this.childrenKey]),this.$set(this.values,t+1,this.pickerItemDatas[t+1][0][this.valueKey]);for(var s=t+2;s<this.pickerItemDatas.length;s++)this.$set(this.pickerItemDatas,s,this.pickerItemDatas[s-1][0][this.childrenKey]),this.$set(this.values,s,this.pickerItemDatas[s][0][this.valueKey])}},beforeScrollStart:function(t,e){var i=this,s=this.values.indexOf(e.value);this.values.map(function(t,e){e!=s&&(i.disabled[e]=!0)}),this.disabled=Object(n.a)(this.disabled)},getSelectedItemsByData:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.data,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],n=++e,s=this.values[n],a=0;a<t.length;a++){if(!s)return i.push(t[0]),t[a][this.childrenKey]&&t[a][this.childrenKey].length&&this.getSelectedItemsByData(t[a][this.childrenKey],n,i),i;if(t[a][this.valueKey]===s)return i.push(t[a]),t[a][this.childrenKey]&&t[a][this.childrenKey].length&&this.getSelectedItemsByData(t[a][this.childrenKey],n,i),i}return i},setPickerData:function(){var t=this,e=this.getSelectedItemsByData();e.map(function(i,n){t.pickerItemDatas[n]=0===n?t.data:e[n-1][t.childrenKey],t.values[n]=i[t.valueKey]})}},watch:{value:function(t){this.values=Object(n.a)(t),this.setPickerData()},visible:function(t){var e=this;this.values=Object(n.a)(this.value),this.setPickerData(),this.values.length||this.pickerItemDatas.map(function(t,i){var n=t[e.valueKey];e.values[i]=n}),this.show=t}}},l=(i(219),Object(r.a)(c,function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.show?i("div",{class:{"z-picker-model":t.showModel},on:{click:function(e){return e.stopPropagation(),t.clickModel(e)},touchmove:function(t){t.preventDefault()}}},[i("div",{ref:"picker",staticClass:"z-picker-wrapper",on:{click:function(t){t.stopPropagation()}}},[i("div",{staticClass:"title"},[i("div",{staticStyle:{fontWeight:"600"},on:{click:t.cnacel}},[t._v("取消")]),t._v(" "),i("div",{staticStyle:{color:"#333"}},[t._v(t._s(t.title))]),t._v(" "),i("div",{staticStyle:{fontWeight:"600"},on:{click:t.confirm}},[t._v("确定")])]),t._v(" "),i("div",{staticClass:"scroll"},t._l(t.values,function(e,n){return i("div",{key:n,staticClass:"pciker-item"},[i("picker-item",{attrs:{data:t.pickerItemDatas[n],value:e,valueKey:t.valueKey,labelKey:t.labelKey,disabled:t.disabled[n]},on:{beforeScrollStart:t.beforeScrollStart,change:function(e){return t.pickerChange(n,e)}}})],1)}),0)])]):t._e()},[],!1,null,"ee4366bc",null));e.a=l.exports},228:function(t,e,i){"use strict";i(101),i(100);var n=i(10),s=(i(212),i(25),i(188),i(189),{name:"z-cascader-list",data:function(){return{num:this.index,currentItem:null,selectedChildrenData:[]}},components:{"z-icon":i(187).a},inject:["eventBus","divisionSymbol","valueKey","childrenKey","labelKey"],props:{index:{type:Number,default:0},data:{type:Array,default:function(){return[]}}},created:function(){var t=this;this.num+=1,this.eventBus.$on("update:change",function(e){t.currentItem=e[t.index],t.selectedChildrenData=t.currentItem?t.currentItem[t.childrenKey]:[]})},watch:{data:function(t){this.selectedChildrenData=[]}},methods:{selectedHandle:function(t){t.disabled||(this.selectedChildrenData=t[this.childrenKey],this.eventBus.$emit("update:select",this.index,t))}},mounted:function(){this.eventBus.$emit("update:mounted")}}),a=(i(215),i(1)),r=Object(a.a)(s,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"cascader-list"},[i("div",{staticClass:"left",on:{click:function(t){t.stopPropagation()}}},t._l(t.data,function(e){return i("div",{key:e[t.valueKey],class:{items:!0,"item-disabled":e.disabled,"item-active":t.currentItem&&t.currentItem[t.valueKey]===e[t.valueKey]},on:{click:function(i){return i.stopPropagation(),t.selectedHandle(e)}}},[i("span",{staticClass:"cascader-content"},[t._v(t._s(e[t.labelKey]))]),t._v(" "),i("z-icon",{directives:[{name:"show",rawName:"v-show",value:e[t.childrenKey]&&e[t.childrenKey].length,expression:"item[childrenKey] && item[childrenKey].length"}],staticClass:"arrow",attrs:{name:"right"}})],1)}),0),t._v(" "),t.selectedChildrenData&&t.selectedChildrenData.length?i("div",{staticClass:"right"},[i("z-cascader-list",{attrs:{index:t.num,data:t.selectedChildrenData}})],1):t._e()])},[],!1,null,"1df32428",null).exports,c=i(204),l=i(0),o={name:"z-cascader",data:function(){return{visible:!1,eventBus:new l.a,iconName:null,outerSelectedItems:[],currentItems:[],selectedLabels:"",memorySelectedLabels:"",memoryCurrentItems:[]}},props:{data:{type:Array,default:function(){return[]}},divisionSymbol:{type:String,default:"/"},valueKey:{type:String,default:"id"},labelKey:{type:String,default:"name"},childrenKey:{type:String,default:"children"},value:{type:Array,default:function(){return[]}},allowClear:{type:Boolean,default:!0},placeholder:{type:String},size:{type:String,default:"middle",validator:function(t){var e=["small","middle","large"],i=e.includes(t);return i||console.error("input属性size不支持".concat(t,"类型。它应属于[").concat(e,"]中之一")),i}}},components:{"z-cascader-list":r,"z-input":c.a},provide:function(){return{eventBus:this.eventBus,selectedItems:this.currentItems,divisionSymbol:this.divisionSymbol,valueKey:this.valueKey,labelKey:this.labelKey,childrenKey:this.childrenKey,selectedData:this.selectedData}},methods:{trigger:function(){this.visible=!0,this.eventBus.$emit("update:change",this.currentItems)},clearn:function(){this.allowClear&&!this.visible&&this.selectedLabels&&(this.memorySelectedLabels="",this.memoryCurrentItems=[],this.currentItems=[],this.selectedLabels="",this.eventBus.$emit("update:change",this.currentItems),this.$emit("change",[],[],[]))},getLabels:function(t){var e=this,i=[];return t.map(function(t){i.push(t[e.labelKey])}),i.join(" ".concat(this.divisionSymbol," "))},initCurrentItems:function(t){var e=this,i=[];!function t(n){n.map(function(n){e.value.includes(n[e.valueKey])&&i.push(n),n[e.childrenKey]&&n[e.childrenKey].length&&t(n[e.childrenKey])})}(this.data),this.currentItems=i,this.selectedLabels=this.getLabels(this.currentItems),this.memorySelectedLabels=this.selectedLabels,this.memoryCurrentItems=JSON.parse(JSON.stringify(this.currentItems))},getValues:function(){var t=this;return this.currentItems.map(function(e){return e[t.valueKey]})}},created:function(){var t=this;this.initCurrentItems(this.value),this.eventBus.$on("update:select",function(e,i){t.currentItems[e]=i,t.currentItems.splice(e+1);var s=t.getValues(),a=t.getLabels(t.currentItems);t.selectedLabels=a,i[t.childrenKey]&&i[t.childrenKey].length||(t.visible=!1,t.memorySelectedLabels=t.selectedLabels,t.memoryCurrentItems=Object(n.a)(t.currentItems),t.$emit("change",s,t.selectedLabels.split(t.divisionSymbol).map(function(t){return t.trim()}),t.memoryCurrentItems)),t.eventBus.$emit("update:change",t.currentItems)}),this.eventBus.$on("update:mounted",function(){t.eventBus.$emit("update:change",t.currentItems)})},watch:{value:function(t){this.initCurrentItems(t),this.eventBus.$emit("update:change",this.currentItems)}},mounted:function(){var t=this;this.eventBus.$emit("update:change",this.currentItems),document.addEventListener("click",function(){t.visible&&(t.visible=!1,t.currentItems=Object(n.a)(t.memoryCurrentItems),t.selectedLabels=t.memorySelectedLabels,t.eventBus.$emit("update:change",t.currentItems))})}},u=(i(216),Object(a.a)(o,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"z-cascader"},[i("z-input",{ref:"input",staticClass:"cascader-input",staticStyle:{width:"100%"},attrs:{readonly:"",placeholder:t.placeholder,size:t.size,value:t.selectedLabels,iconName:t.allowClear&&t.selectedLabels&&!t.visible?"round_close_light":t.visible?"fold":"unfold",iconPosition:"after"},on:{click:function(e){return e.stopPropagation(),t.trigger(e)},iconTrigger:t.clearn}}),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"cascaderBox"},[i("div",{staticStyle:{position:"absolute","z-index":"10",top:"2px",left:"0","box-shadow":"0 2px 2px 2px #ccc"}},[i("z-cascader-list",{attrs:{data:t.data}})],1)])],1)},[],!1,null,"9d9f6d66",null));e.a=u.exports},229:function(t,e,i){"use strict";var n=i(205),s=(i(188),i(189),{name:"z-toast",data:function(){return{style:"",top:"top"==this.position?-100:"",bottom:"bottom"==this.position?-100:"",opacity:0}},props:{message:{type:String},showCloseButton:{type:Boolean,default:!0},closeButtonText:{type:String,default:"关闭"},autoClose:{type:Boolean,default:!0},duration:{type:[String,Number],default:2e3},position:{type:String,default:"top",validator:function(t){var e=["top","bottom"],i=e.includes(t);return i||console.error("toast组件position属性的值只能选择[".concat(e,"]").concat(e.length,"种类型，而你给的值是").concat(t)),i}},layout:{type:String,default:"row",validator:function(t){var e=["row","column"],i=e.includes(t);return i||console.error("toast组件position属性的值只能选择[".concat(e,"]").concat(e.length,"种类型，而你给的值是").concat(t)),i}}},methods:{close:function(){var t=this,e=this.position;this.opacity=0,"top"==e&&(this.top=-100,this.bottom=""),"bottom"==e&&(this.bottom=-100,this.top=""),setTimeout(function(){t.$el.remove(),t.$destroy()},1e3)}},mounted:function(){var t=this;setTimeout(function(){var e=t.position;t.opacity=1,"top"==e&&(t.top=0,t.bottom=""),"bottom"==e&&(t.bottom=0,t.top=""),t.autoClose&&setTimeout(t.close,t.duration)},10)}}),a=(i(222),i(1)),r=Object(a.a)(s,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:{"z-toast":!0,"z-toast-flex-column":"column"==t.layout},style:("top"==t.position?"top:"+t.top+"px":"")+"; "+("bottom"==t.position?"bottom:"+t.bottom+"px":"")+"; opacity:"+t.opacity+";"+t.style},[i("div",{staticClass:"z-toast-message",style:"row"==t.layout?"border-right-width: 1px":"border-bottom-width: 1px"},[t._v(t._s(t.message))]),t._v(" "),t.showCloseButton?i("div",{staticClass:"z-toast-closeBtn",on:{click:t.close}},[t._v(t._s(t.closeButtonText))]):t._e()])},[],!1,null,"0307d16c",null).exports,c={install:function(t,e){t.prototype.$ztoast=function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=new(t.extend(r))({propsData:Object(n.a)({message:e},i)});s.$mount(),document.body.appendChild(s.$el)}}};e.a=c},230:function(t,e,i){"use strict";i(189);var n={name:"z-cell",props:{title:{type:[String,Number]}}},s=(i(217),i(1)),a=Object(s.a)(n,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"z-cell-swrap"},[i("div",{staticClass:"z-cell-title"},[t._v("\n    "+t._s(t.title)+"\n    "),t.title?t._e():t._t("title")],2),t._v(" "),i("div",{staticClass:"z-cell-content"},[t._t("default")],2)])},[],!1,null,"94983058",null);e.a=a.exports},231:function(t,e,i){"use strict";i(54);var n={name:"z-checkbox",data:function(){return{isChecked:this.checked}},props:{value:{type:String,required:!0},checked:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},name:{type:String,required:!0}},watch:{checked:function(t){this.isChecked=t}},methods:{checkHandle:function(){!0!==this.disabled&&(this.isChecked=!this.isChecked,this.$emit("change",this.isChecked,{name:this.name,checked:this.isChecked,value:this.value}))}}},s=(i(220),i(1)),a=Object(s.a)(n,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("label",{staticClass:"z-checkbox-swrap",on:{click:function(e){return e.preventDefault(),t.checkHandle(e)}}},[i("input",{staticClass:"z-checkbox-input",attrs:{type:"checkbox",name:t.name,disabled:t.disabled},domProps:{checked:t.checked,value:t.value}}),t._v(" "),i("span",{staticClass:"z-checkbox-box",attrs:{"data-checkded":t.isChecked,"data-disabled":t.disabled}}),t._v(" "),t._t("default")],2)},[],!1,null,"31161e04",null);e.a=a.exports},247:function(t,e,i){"use strict";i.r(e);var n=i(205),s=(i(54),i(16),i(20),i(26),i(25),i(191)),a=i(187),r=i(207),c=i(204),l=i(226),o=i(228),u=i(230),d=i(227),h=i(231),v=i(234),p=i(229),m={Button:s.a,Icon:a.a,ButtonGroup:r.a,Input:c.a,Tabs:l.e,TabsBody:l.a,TabsHeader:l.b,TabsItem:l.c,TabsPane:l.d,Cascader:o.a,Cell:u.a,Picker:d.a,Checkbox:h.a,Modal:v.a},f=(Object(n.a)({install:function(t,e){Object.keys(m).map(function(e){var i=m[e].name,n=m[e];t.component(i,n)}),t.use(p.a)}},m),{name:"button_intro",components:{"z-button":s.a,"z-button-group":r.a,"z-icon":a.a},data:function(){return{loading:!1}},methods:{triggerLoading:function(){var t=this;this.loading=!0,setTimeout(function(){t.loading=!1},2e3)}}}),y=i(1),b=Object(y.a)(f,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h4",[t._v("三种不同颜色类型的按钮")]),t._v(" "),i("p",[i("z-button",{attrs:{type:"default"}},[t._v("default按钮")]),t._v(" "),i("z-button",{attrs:{type:"primary"}},[t._v("primary按钮")]),t._v(" "),i("z-button",{attrs:{type:"danger"}},[t._v("danger按钮")])],1),t._v(" "),i("h4",[t._v("ghost按钮")]),t._v(" "),i("p",[i("z-button",{attrs:{type:"default",ghost:""}},[t._v("dashed按钮")]),t._v(" "),i("z-button",{attrs:{type:"primary",ghost:""}},[t._v("primary dashed按钮")]),t._v(" "),i("z-button",{attrs:{type:"danger",ghost:""}},[t._v("danger dashed按钮")])],1),t._v(" "),i("h4",[t._v("禁止点击")]),t._v(" "),i("p",[i("z-button",{attrs:{disabled:""}},[t._v("禁止点击")]),t._v(" "),i("z-button",{attrs:{ghost:"",disabled:""}},[t._v("禁止点击")])],1),t._v(" "),i("h4",[t._v("支持loading图标")]),t._v(" "),i("p",[i("z-button",{attrs:{loading:""}},[t._v("loading按钮")]),t._v(" "),i("z-button",{attrs:{type:"primary",loading:""}},[t._v("loading按钮")]),t._v(" "),i("z-button",{attrs:{type:"danger",loading:""}},[t._v("loading按钮")]),t._v(" "),i("z-button",{attrs:{size:"middle",type:"primary",loading:t.loading},on:{click:t.triggerLoading}},[t._v("触发点击")])],1),t._v(" "),i("h4",[t._v("三种不同尺寸")]),t._v(" "),i("p",[i("z-button",{attrs:{size:"small",type:"primary"}},[t._v("small按钮")]),t._v(" "),i("z-button",{attrs:{size:"middle",type:"primary"}},[t._v("middle按钮")]),t._v(" "),i("z-button",{attrs:{size:"large",type:"primary"}},[t._v("large按钮")])],1),t._v(" "),i("h4",[t._v("支持按钮组")]),t._v(" "),i("p",[i("z-button-group",[i("z-button",{attrs:{type:"default"}},[i("z-icon",{staticStyle:{"margin-right":".4em"},attrs:{name:"settings_light"}}),t._v(" 按钮1")],1),t._v(" "),i("z-button",{attrs:{type:"primary"}},[t._v("按钮2")]),t._v(" "),i("z-button",{attrs:{type:"primary"}},[t._v("按钮3")]),t._v(" "),i("z-button",{attrs:{type:"danger"}},[t._v("按钮4"),i("z-icon",{staticStyle:{"margin-left":".4em"},attrs:{name:"round_location_fill"}})],1)],1)],1)])},[],!1,null,null,null);e.default=b.exports}}]);