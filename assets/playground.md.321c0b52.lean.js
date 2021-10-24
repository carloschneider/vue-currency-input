var ne=Object.defineProperty,se=Object.defineProperties;var oe=Object.getOwnPropertyDescriptors;var U=Object.getOwnPropertySymbols;var re=Object.prototype.hasOwnProperty,ae=Object.prototype.propertyIsEnumerable;var T=(t,e,i)=>e in t?ne(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,S=(t,e)=>{for(var i in e||(e={}))re.call(e,i)&&T(t,i,e[i]);if(U)for(var i of U(e))ae.call(e,i)&&T(t,i,e[i]);return t},O=(t,e)=>se(t,oe(e));import{r as B,g as le,b as N,d as ue,e as de,f as I,w as R,_ as V,c as h,o as p,h as u,i as z,j,k as C,n as M,l as ce,t as v,m as me,p as pe,q as he,s as ge,u as m,v as F,F as $,x as H,y as x,z as A,A as k,B as W}from"./app.ad4b7c82.js";const w=t=>t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),X=t=>t.replace(/^0+(0$|[^0])/,"$1"),_=(t,e)=>(t.match(new RegExp(w(e),"g"))||[]).length,G=(t,e)=>t.substring(0,t.indexOf(e));var D;(function(t){t.symbol="symbol",t.narrowSymbol="narrowSymbol",t.code="code",t.name="name",t.hidden="hidden"})(D||(D={}));const q=[",",".","\u066B"],J="(0|[1-9]\\d*)";class fe{constructor(e){const{currency:i,currencyDisplay:s,locale:o,precision:r}=e;this.currencyDisplay=s!==D.hidden?s:void 0;const l=new Intl.NumberFormat(o,{currency:i,currencyDisplay:this.currencyDisplay,style:"currency"}),d=l.format(123456);this.locale=o,this.currency=i,this.digits=[0,1,2,3,4,5,6,7,8,9].map(a=>a.toLocaleString(o)),this.decimalSymbol=_(d,this.digits[0])?d.substr(d.indexOf(this.digits[6])+1,1):void 0,this.groupingSymbol=d.substr(d.indexOf(this.digits[3])+1,1),this.minusSymbol=G(Number(-1).toLocaleString(o),this.digits[1]),this.decimalSymbol===void 0?this.minimumFractionDigits=this.maximumFractionDigits=0:r!==void 0?this.minimumFractionDigits=this.maximumFractionDigits=r:(this.minimumFractionDigits=l.resolvedOptions().minimumFractionDigits,this.maximumFractionDigits=l.resolvedOptions().maximumFractionDigits),this.prefix=G(d,this.digits[1]),this.negativePrefix=G(l.format(-1),this.digits[1]),this.suffix=d.substring(d.lastIndexOf(this.decimalSymbol?this.digits[0]:this.digits[6])+1)}parse(e){if(e){const i=this.isNegative(e);e=this.normalizeDigits(e),e=this.stripCurrencySymbol(e,i),e=this.stripMinusSymbol(e);const s=this.decimalSymbol?`(?:${w(this.decimalSymbol)}(\\d*))?`:"",o=this.stripGroupingSeparator(e).match(new RegExp(`^${J}${s}$`));if(o&&this.isValidIntegerFormat(this.decimalSymbol?e.split(this.decimalSymbol)[0]:e,Number(o[1])))return Number(`${i?"-":""}${this.onlyDigits(o[1])}.${this.onlyDigits(o[2]||"")}`)}return null}isValidIntegerFormat(e,i){const s={style:"currency",currency:this.currency,currencyDisplay:this.currencyDisplay,minimumFractionDigits:0};return[this.stripCurrencySymbol(this.normalizeDigits(i.toLocaleString(this.locale,O(S({},s),{useGrouping:!0}))),!1),this.stripCurrencySymbol(this.normalizeDigits(i.toLocaleString(this.locale,O(S({},s),{useGrouping:!1}))),!1)].includes(e)}format(e,i={minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits}){return e!=null?e.toLocaleString(this.locale,S({style:"currency",currency:this.currency,currencyDisplay:this.currencyDisplay},i)):""}toFraction(e){return`${this.digits[0]}${this.decimalSymbol}${this.onlyLocaleDigits(e.substr(1)).substr(0,this.maximumFractionDigits)}`}isFractionIncomplete(e){return!!this.normalizeDigits(this.stripGroupingSeparator(e)).match(new RegExp(`^${J}${w(this.decimalSymbol)}$`))}isNegative(e){return e.startsWith(this.negativePrefix)||e.replace("-",this.minusSymbol).startsWith(this.minusSymbol)}insertCurrencySymbol(e,i){return`${i?this.negativePrefix:this.prefix}${e}${this.suffix}`}stripGroupingSeparator(e){return e.replace(new RegExp(w(this.groupingSymbol),"g"),"")}stripMinusSymbol(e){return e.replace("-",this.minusSymbol).replace(this.minusSymbol,"")}stripCurrencySymbol(e,i){return e.replace(i?this.negativePrefix:this.prefix,"").replace(this.suffix,"")}normalizeDecimalSeparator(e,i){return q.forEach(s=>{e=e.substr(0,i)+e.substr(i).replace(s,this.decimalSymbol)}),e}normalizeDigits(e){return this.digits[0]!=="0"&&this.digits.forEach((i,s)=>{e=e.replace(new RegExp(i,"g"),String(s))}),e}onlyDigits(e){return this.normalizeDigits(e).replace(/\D+/g,"")}onlyLocaleDigits(e){return e.replace(new RegExp(`[^${this.digits.join("")}]*`,"g"),"")}}class Y{constructor(e){this.currencyFormat=e}}class ye extends Y{conformToMask(e,i=""){const s=this.currencyFormat.isNegative(e),o=g=>{if(g===""&&s&&i!==this.currencyFormat.negativePrefix)return"";if(this.currencyFormat.maximumFractionDigits>0){if(this.currencyFormat.isFractionIncomplete(g))return g;if(g.startsWith(this.currencyFormat.decimalSymbol))return this.currencyFormat.toFraction(g)}return null};let r=e;r=this.currencyFormat.stripCurrencySymbol(r,s),r=this.currencyFormat.stripMinusSymbol(r);const l=o(r);if(l!=null)return this.currencyFormat.insertCurrencySymbol(l,s);const[d,...a]=r.split(this.currencyFormat.decimalSymbol),f=X(this.currencyFormat.onlyDigits(d)),y=this.currencyFormat.onlyDigits(a.join("")).substr(0,this.currencyFormat.maximumFractionDigits),n=a.length>0&&y.length===0,b=f===""&&s&&(i===e.slice(0,-1)||i!==this.currencyFormat.negativePrefix);return n||b?i:f.match(/\d+/)?{numberValue:Number(`${s?"-":""}${f}.${y}`),fractionDigits:y}:""}}class be extends Y{conformToMask(e,i=""){if(e===""||this.currencyFormat.parse(i)===0&&this.currencyFormat.stripCurrencySymbol(i,!0).slice(0,-1)===this.currencyFormat.stripCurrencySymbol(e,!0))return"";const s=this.currencyFormat.isNegative(e),o=this.currencyFormat.stripMinusSymbol(e)===""?-0:Number(`${s?"-":""}${X(this.currencyFormat.onlyDigits(e))}`)/Math.pow(10,this.currencyFormat.minimumFractionDigits);return{numberValue:o,fractionDigits:o.toFixed(this.currencyFormat.minimumFractionDigits).slice(-this.currencyFormat.minimumFractionDigits)}}}const ve={locale:void 0,currency:void 0,currencyDisplay:void 0,exportValueAsInteger:!1,hideGroupingSeparatorOnFocus:!0,hideCurrencySymbolOnFocus:!0,hideNegligibleDecimalDigitsOnFocus:!0,precision:void 0,autoDecimalDigits:!1,valueRange:void 0,autoSign:!0,useGrouping:!0};class Ve{constructor(e,i){this.el=e,this.numberValue=null,this.addEventListener(),this.init(i),this.setValue(this.currencyFormat.parse(this.el.value))}setOptions(e){this.init(e),this.applyFixedFractionFormat(this.numberValue,!0)}getValue(){return{number:this.options.exportValueAsInteger&&this.numberValue!=null?this.toInteger(this.numberValue):this.numberValue,formatted:this.formattedValue}}setValue(e){const i=this.options.exportValueAsInteger&&e!=null?this.toFloat(e):e;i!==this.numberValue&&this.applyFixedFractionFormat(i)}dispatchEvent(e){this.el.dispatchEvent(new CustomEvent(e,{detail:this.getValue()}))}init(e){this.options=S(S({},ve),e),this.options.autoDecimalDigits?(this.options.hideNegligibleDecimalDigitsOnFocus=!1,this.el.setAttribute("inputmode","numeric")):this.el.setAttribute("inputmode","decimal"),this.currencyFormat=new fe(this.options),this.numberMask=this.options.autoDecimalDigits?new be(this.currencyFormat):new ye(this.currencyFormat),this.minValue=this.getMinValue(),this.maxValue=this.getMaxValue()}getMinValue(){var i,s;let e=this.toFloat(-Number.MAX_SAFE_INTEGER);return((i=this.options.valueRange)==null?void 0:i.min)!==void 0&&(e=Math.max((s=this.options.valueRange)==null?void 0:s.min,this.toFloat(-Number.MAX_SAFE_INTEGER))),!this.options.autoSign&&e<0&&(e=0),e}getMaxValue(){var i,s;let e=this.toFloat(Number.MAX_SAFE_INTEGER);return((i=this.options.valueRange)==null?void 0:i.max)!==void 0&&(e=Math.min((s=this.options.valueRange)==null?void 0:s.max,this.toFloat(Number.MAX_SAFE_INTEGER))),!this.options.autoSign&&e<0&&(e=this.toFloat(Number.MAX_SAFE_INTEGER)),e}toFloat(e){return e/Math.pow(10,this.currencyFormat.maximumFractionDigits)}toInteger(e){return Number(e.toFixed(this.currencyFormat.maximumFractionDigits).split(".").join(""))}validateValueRange(e){return e!=null?Math.min(Math.max(e,this.minValue),this.maxValue):e}applyFixedFractionFormat(e,i=!1){this.format(this.currencyFormat.format(this.validateValueRange(e))),(e!==this.numberValue||i)&&this.dispatchEvent("change")}format(e,i=!1){if(e!=null){this.decimalSymbolInsertedAt!==void 0&&(e=this.currencyFormat.normalizeDecimalSeparator(e,this.decimalSymbolInsertedAt),this.decimalSymbolInsertedAt=void 0);const s=this.numberMask.conformToMask(e,this.formattedValue);let o;if(typeof s=="object"){const{numberValue:r,fractionDigits:l}=s;let{maximumFractionDigits:d,minimumFractionDigits:a}=this.currencyFormat;this.focus?a=i?l.replace(/0+$/,"").length:Math.min(d,l.length):Number.isInteger(r)&&!this.options.autoDecimalDigits&&(this.options.precision===void 0||a===0)&&(a=d=0),o=this.toInteger(Math.abs(r))>Number.MAX_SAFE_INTEGER?this.formattedValue:this.currencyFormat.format(r,{useGrouping:this.options.useGrouping&&!(this.focus&&this.options.hideGroupingSeparatorOnFocus),minimumFractionDigits:a,maximumFractionDigits:d})}else o=s;this.options.autoSign&&(this.maxValue<=0&&!this.currencyFormat.isNegative(o)&&this.currencyFormat.parse(o)!==0&&(o=o.replace(this.currencyFormat.prefix,this.currencyFormat.negativePrefix)),this.minValue>=0&&(o=o.replace(this.currencyFormat.negativePrefix,this.currencyFormat.prefix))),(this.options.currencyDisplay===D.hidden||this.focus&&this.options.hideCurrencySymbolOnFocus)&&(o=o.replace(this.currencyFormat.negativePrefix,this.currencyFormat.minusSymbol).replace(this.currencyFormat.prefix,"").replace(this.currencyFormat.suffix,"")),this.el.value=o,this.numberValue=this.currencyFormat.parse(o)}else this.el.value="",this.numberValue=null;this.formattedValue=this.el.value,this.dispatchEvent("input")}addEventListener(){this.el.addEventListener("input",e=>{if(!e.detail){const{value:i,selectionStart:s}=this.el,o=e;if(s&&o.data&&q.includes(o.data)&&(this.decimalSymbolInsertedAt=s-1),this.format(i),this.focus&&s!=null){const r=()=>{const{prefix:l,suffix:d,decimalSymbol:a,maximumFractionDigits:f,groupingSymbol:y}=this.currencyFormat;let n=i.length-s;const b=this.formattedValue.length;if(this.formattedValue.substr(s,1)===y&&_(this.formattedValue,y)===_(i,y)+1)return b-n-1;if(b<n)return s;if(a!==void 0&&i.indexOf(a)!==-1){const g=i.indexOf(a)+1;if(Math.abs(b-i.length)>1&&s<=g)return this.formattedValue.indexOf(a)+1;!this.options.autoDecimalDigits&&s>g&&this.currencyFormat.onlyDigits(i.substr(g)).length-1===f&&(n-=1)}return this.options.hideCurrencySymbolOnFocus||this.options.currencyDisplay===D.hidden?b-n:Math.max(b-Math.max(n,d.length),l.length)};this.setCaretPosition(r())}}},{capture:!0}),this.el.addEventListener("focus",()=>{this.focus=!0,setTimeout(()=>{const{value:e,selectionStart:i,selectionEnd:s}=this.el;if(this.format(e,this.options.hideNegligibleDecimalDigitsOnFocus),i!=null&&s!=null&&Math.abs(i-s)>0)this.setCaretPosition(0,this.el.value.length);else if(i!=null){const o=()=>{const{prefix:r,suffix:l,groupingSymbol:d}=this.currencyFormat;if(!this.options.hideCurrencySymbolOnFocus&&this.options.currencyDisplay!==D.hidden){if(i>=e.length-l.length)return this.formattedValue.length-l.length;if(i<r.length)return r.length}let a=i;return this.options.hideCurrencySymbolOnFocus&&this.options.currencyDisplay!==D.hidden&&(a-=r.length),this.options.hideGroupingSeparatorOnFocus&&(a-=_(e.substring(0,i),d)),a};this.setCaretPosition(o())}})}),this.el.addEventListener("blur",()=>{this.focus=!1,this.applyFixedFractionFormat(this.numberValue)}),this.el.addEventListener("change",e=>{e.detail||this.dispatchEvent("change")},{capture:!0})}setCaretPosition(e,i=e){this.el.setSelectionRange(e,i)}}const Fe=t=>(t==null?void 0:t.matches("input"))?t:t==null?void 0:t.querySelector("input");var De=t=>{var L;let e,i;const s=B(null),o=B(null),r=le();if(r==null)throw new Error;const l=(c,E)=>r.emit(c,E),d=(L=r.attrs.modelModifiers)==null?void 0:L.lazy,a=N(()=>r.props.modelValue),f="update:modelValue",y=d?"update:modelValue":"change",n=!!r.attrs["onUpdate:modelValue"]&&!d,b=d||!!r.attrs.onChange,g=c=>{c.detail&&(a.value!==c.detail.number&&l(f,c.detail.number),o.value=c.detail.formatted)},P=c=>{c.detail&&(l(y,c.detail.number),o.value=c.detail.formatted)};return ue(()=>{var c,E;if(i=Fe((E=(c=s.value)==null?void 0:c.$el)!=null?E:s.value),!i)throw new Error("No input element found");e=new Ve(i,t),n&&i.addEventListener("input",g),b&&i.addEventListener("change",P),e.setValue(a.value)}),de(()=>{n&&(i==null||i.removeEventListener("input",g)),b&&(i==null||i.removeEventListener("change",P))}),{inputRef:s,formattedValue:o,setValue:c=>e==null?void 0:e.setValue(c),setOptions:c=>e==null?void 0:e.setOptions(c)}};const Se=I({name:"CurrencyInput",props:{modelValue:{type:Number,default:null},options:{type:Object,required:!0}},setup(t){const{inputRef:e,formattedValue:i,setOptions:s,setValue:o}=De(t.options);return R(()=>t.options,r=>{s(r)}),R(()=>t.modelValue,r=>{o(r)}),{inputRef:e}}}),xe={ref:"inputRef",type:"text"};function Ee(t,e,i,s,o,r){return p(),h("input",xe,null,512)}var K=V(Se,[["render",Ee]]);const $e={name:"Dialog",props:{modelValue:Boolean},emits:["update:modelValue"]},we={class:"max-w-md md:relative m-auto p-8 bg-white rounded w-full h-auto shadow"};function _e(t,e,i,s,o,r){return i.modelValue?(p(),h("div",{key:0,class:"w-screen h-screen fixed z-50 inset-0 flex bg-gray-600 bg-opacity-50",onClick:e[0]||(e[0]=j(l=>t.$emit("update:modelValue",!1),["self"]))},[u("div",we,[z(t.$slots,"default")])])):C("v-if",!0)}var Z=V($e,[["render",_e]]);const Oe=I({name:"Switch",props:{modelValue:Boolean},emits:["update:modelValue"]}),Ne=["aria-checked"];function Ie(t,e,i,s,o,r){return p(),h("div",{tabindex:"0",role:"checkbox","aria-checked":t.modelValue,class:"transition-all cursor-pointer flex justify-between items-center rounded-full focus:outline-none focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 ring-offset-1",onKeydown:e[0]||(e[0]=ce(j(l=>t.$emit("update:modelValue",!t.modelValue),["prevent"]),["space"])),onClick:e[1]||(e[1]=l=>t.$emit("update:modelValue",!t.modelValue))},[u("div",{class:M(["w-10 h-6 flex items-center bg-gray-300 rounded-full p-1 duration-300 ease-in-out",{"bg-primary":t.modelValue}])},[u("div",{class:M(["bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out",{"translate-x-4":t.modelValue}])},null,2)],2)],40,Ne)}var Q=V(Oe,[["render",Ie]]);const Re={name:"OptionSection",components:{Switch:Q},props:{label:{type:String,required:!0},description:{type:String,default:void 0},modelValue:{type:Boolean,default:void 0}},emits:["update:modelValue"]},Ce={class:"mb-12 min-w-0"},Me={class:"flex items-center justify-between mb-3"},Ae={class:"text-xl font-medium"},ke={key:0,class:"mb-3"};function Ge(t,e,i,s,o,r){const l=Q;return p(),h("section",Ce,[u("div",Me,[u("span",Ae,v(i.label),1),i.modelValue!==void 0?(p(),me(l,{key:0,"model-value":i.modelValue,"onUpdate:modelValue":e[0]||(e[0]=d=>t.$emit("update:modelValue",d))},null,8,["model-value"])):C("v-if",!0)]),i.description?(p(),h("div",ke,v(i.description),1)):C("v-if",!0),z(t.$slots,"default")])}var ee=V(Re,[["render",Ge]]);const Pe={name:"Checkbox",props:{modelValue:Boolean,disabled:{type:Boolean,default:!1},label:{type:String,required:!0}},emits:["update:modelValue"]},Le=["checked","disabled"];function Ue(t,e,i,s,o,r){return p(),h("label",{class:M(["flex items-center",{"text-gray-300 cursor-not-allowed":i.disabled,"cursor-pointer":!i.disabled}])},[u("input",{checked:i.modelValue,disabled:i.disabled,type:"checkbox",class:"w-5 h-5 mr-2 rounded rounded border-gray-300 shadow-sm disabled:text-gray-300 disabled:cursor-not-allowed not-disabled:text-primary not-disabled:cursor-pointer focus:border-primary focus:ring focus:ring-offset-0 focus:ring-primary focus:ring-opacity-50",onInput:e[0]||(e[0]=l=>t.$emit("update:modelValue",l.target.checked))},null,40,Le),u("span",null,v(i.label),1)],2)}var te=V(Pe,[["render",Ue]]);const Te={name:"Slider",props:{modelValue:{type:Number,default:null},max:{type:Number,default:15}},emits:["update:modelValue"]},Be=["max","value"];function ze(t,e,i,s,o,r){return p(),h("input",{type:"range",max:i.max,value:i.modelValue,onInput:e[0]||(e[0]=l=>t.$emit("update:modelValue",l.target.value))},null,40,Be)}var ie=V(Te,[["render",ze],["__scopeId","data-v-3aa1880a"]]);const je=I({name:"Demo",components:{Slider:ie,Checkbox:te,OptionSection:ee,Dialog:Z,CurrencyInput:K},setup(){const t=pe({exportDialogVisible:!1,value:1234.5,localeEnabled:!1,locale:"de-DE",locales:["de-DE","de-CH","en-US","en-IN","nl-NL","sv-SE","fr-FR","es-ES","pt-PT","pt-BR","zh-ZH","ja-JP","ar-SA","fa-IR"],currency:"EUR",currencyDisplay:"symbol",currencies:["EUR","USD","JPY","GBP","BRL","INR","CNY","JPY","SAR","IRR"],currencyDisplays:[{value:"symbol",label:"Symbol"},{value:"narrowSymbol",label:"Narrow symbol"},{value:"code",label:"Code"},{value:"name",label:"Name"},{value:"hidden",label:"Hidden"}],hideCurrencySymbolOnFocus:!0,hideGroupingSeparatorOnFocus:!0,hideNegligibleDecimalDigitsOnFocusEnabled:!0,hideNegligibleDecimalDigitsOnFocus:!0,precisionEnabled:!1,precision:2,valueRangeEnabled:!1,minValue:void 0,maxValue:void 0,autoDecimalDigitsEnabled:!0,autoDecimalDigits:!1,exportValueAsInteger:!1,autoSign:!0,useGrouping:!0,options:N(()=>({locale:t.localeEnabled?t.locale:void 0,currency:t.currency,currencyDisplay:t.currencyDisplay,valueRange:t.valueRangeEnabled?{min:t.minValue,max:t.maxValue}:void 0,precision:t.precisionEnabled?t.precision:void 0,hideCurrencySymbolOnFocus:t.hideCurrencySymbolOnFocus,hideGroupingSeparatorOnFocus:t.hideGroupingSeparatorOnFocus,hideNegligibleDecimalDigitsOnFocus:t.hideNegligibleDecimalDigitsOnFocus,autoDecimalDigits:t.autoDecimalDigits,exportValueAsInteger:t.exportValueAsInteger,autoSign:t.autoSign,useGrouping:t.useGrouping})),stringifiedOptions:N(()=>ge(t.options))});return R(()=>t.autoDecimalDigits,e=>{t.hideNegligibleDecimalDigitsOnFocusEnabled=!e,t.hideNegligibleDecimalDigitsOnFocus=!e}),he(t)}}),He={class:"grid gap-y-4 md:grid-cols-2 md:gap-x-8 items-center my-8"},We=H(" Number value: "),Xe={class:"ml-2"},qe={class:"flex items-center justify-between mb-2"},Je=u("span",{class:"text-2xl font-bold"},"Options",-1),Ye={class:"white--text m-0",style:{margin:"0"}},Ke=u("hr",{class:"mb-8"},null,-1),Ze={class:"grid grid-cols-1 md:grid-cols-2 gap-x-8"},Qe=["disabled"],et=["value"],tt={class:"flex items-center space-x-4"},it=["disabled"],nt=u("span",{class:"text-center"},"to",-1),st=["disabled"],ot={class:"flex items-center"},rt=["value"];function at(t,e,i,s,o,r){const l=K,d=Z,a=ee,f=te,y=ie;return p(),h($,null,[u("div",He,[m(l,{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=n=>t.value=n),options:t.options,class:"block w-full transition-all rounded-md shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"},null,8,["modelValue","options"]),u("div",null,[We,u("code",Xe,v(t.value!=null?t.value:"null"),1)])]),u("div",qe,[Je,u("div",null,[u("button",{class:"transition-all bg-white hover:bg-gray-100 text-gray-800 font-semibold text-sm py-2 px-4 border border-gray-300 rounded shadow focus:outline-none focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50",onClick:e[1]||(e[1]=n=>t.exportDialogVisible=!0)}," Export "),m(d,{modelValue:t.exportDialogVisible,"onUpdate:modelValue":e[2]||(e[2]=n=>t.exportDialogVisible=n)},{default:F(()=>[u("pre",Ye,v(t.stringifiedOptions),1)]),_:1},8,["modelValue"])])]),Ke,u("div",Ze,[u("div",null,[m(a,{modelValue:t.localeEnabled,"onUpdate:modelValue":e[4]||(e[4]=n=>t.localeEnabled=n),label:"Locale"},{default:F(()=>[x(u("select",{"onUpdate:modelValue":e[3]||(e[3]=n=>t.locale=n),disabled:!t.localeEnabled,class:"cursor-pointer transition-all w-full shadow-sm disabled:cursor-not-allowed disabled:border-gray-300 disabled:text-gray-300 rounded-md text-base focus:border-primary focus:ring focus:ring-offset-0 focus:ring-primary focus:ring-opacity-50"},[(p(!0),h($,null,k(t.locales,n=>(p(),h("option",{key:n},v(n),1))),128))],8,Qe),[[A,t.locale]])]),_:1},8,["modelValue"]),m(a,{label:"Currency"},{default:F(()=>[x(u("select",{"onUpdate:modelValue":e[5]||(e[5]=n=>t.currency=n),class:"cursor-pointer w-full shadow-sm not-disabled:( rounded-lg text-base focus:border-primary focus:ring focus:ring-offset-0 focus:ring-primary focus:ring-opacity-50"},[(p(!0),h($,null,k(t.currencies,n=>(p(),h("option",{key:n},v(n),1))),128))],512),[[A,t.currency]])]),_:1}),m(a,{label:"Currency Display",description:"How to display the currency in the formatting."},{default:F(()=>[x(u("select",{"onUpdate:modelValue":e[6]||(e[6]=n=>t.currencyDisplay=n),class:"cursor-pointer w-full shadow-sm not-disabled:( rounded-lg text-base focus:border-primary focus:ring focus:ring-offset-0 focus:ring-primary focus:ring-opacity-50"},[(p(!0),h($,null,k(t.currencyDisplays,n=>(p(),h("option",{key:n.value,value:n.value},v(n.label),9,et))),128))],512),[[A,t.currencyDisplay]])]),_:1}),m(a,{modelValue:t.useGrouping,"onUpdate:modelValue":e[7]||(e[7]=n=>t.useGrouping=n),label:"Use Grouping",description:"Whether to use grouping separators such as thousands/lakh/crore separators."},null,8,["modelValue"]),m(a,{label:"Distraction Free Input",description:"Hide various parts of the formatting on focus for easier input."},{default:F(()=>[m(f,{modelValue:t.hideCurrencySymbolOnFocus,"onUpdate:modelValue":e[8]||(e[8]=n=>t.hideCurrencySymbolOnFocus=n),label:"Hide currency symbol",class:"mb-1"},null,8,["modelValue"]),m(f,{modelValue:t.hideGroupingSeparatorOnFocus,"onUpdate:modelValue":e[9]||(e[9]=n=>t.hideGroupingSeparatorOnFocus=n),label:"Hide grouping separator",class:"mb-1"},null,8,["modelValue"]),m(f,{modelValue:t.hideNegligibleDecimalDigitsOnFocus,"onUpdate:modelValue":e[10]||(e[10]=n=>t.hideNegligibleDecimalDigitsOnFocus=n),disabled:!t.hideNegligibleDecimalDigitsOnFocusEnabled,label:"Hide negligible decimal digits"},null,8,["modelValue","disabled"])]),_:1})]),u("div",null,[m(a,{modelValue:t.autoSign,"onUpdate:modelValue":e[11]||(e[11]=n=>t.autoSign=n),label:"Auto Sign",description:"Whether the minus symbol is automatically inserted or prevented to be inputted depending the current value range."},null,8,["modelValue"]),m(a,{modelValue:t.valueRangeEnabled,"onUpdate:modelValue":e[14]||(e[14]=n=>t.valueRangeEnabled=n),label:"Value Range",description:"The validation is triggered on blur and automatically sets the respective threshold if out of range."},{default:F(()=>[u("div",tt,[x(u("input",{"onUpdate:modelValue":e[12]||(e[12]=n=>t.minValue=n),disabled:!t.valueRangeEnabled,type:"number",placeholder:"Min",class:"min-w-0 flex-1 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed rounded-md text-base focus:border-primary focus:ring focus:ring-offset-0 focus:ring-primary focus:ring-opacity-50"},null,8,it),[[W,t.minValue,void 0,{number:!0}]]),nt,x(u("input",{"onUpdate:modelValue":e[13]||(e[13]=n=>t.maxValue=n),disabled:!t.valueRangeEnabled,type:"number",placeholder:"Max",class:"min-w-0 flex-1 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed rounded-md text-base focus:border-primary focus:ring focus:ring-offset-0 focus:ring-primary focus:ring-opacity-50"},null,8,st),[[W,t.maxValue,void 0,{number:!0}]])])]),_:1},8,["modelValue"]),m(a,{modelValue:t.precisionEnabled,"onUpdate:modelValue":e[16]||(e[16]=n=>t.precisionEnabled=n),label:"Precision",description:"Override the number of displayed decimal digits. Can only be applied for currencies that support decimal digits."},{default:F(()=>[u("div",ot,[m(y,{modelValue:t.precision,"onUpdate:modelValue":e[15]||(e[15]=n=>t.precision=n),modelModifiers:{number:!0},disabled:!t.precisionEnabled},null,8,["modelValue","disabled"]),u("code",{value:t.precision,class:"w-10 ml-4 text-center"},v(t.precision),9,rt)])]),_:1},8,["modelValue"]),m(a,{modelValue:t.autoDecimalDigits,"onUpdate:modelValue":e[17]||(e[17]=n=>t.autoDecimalDigits=n),label:"Auto Decimal Digits",description:"Whether the decimal symbol is inserted automatically, using the last inputted digits as decimal digits."},null,8,["modelValue"]),m(a,{modelValue:t.exportValueAsInteger,"onUpdate:modelValue":e[18]||(e[18]=n=>t.exportValueAsInteger=n),label:"Export Value As Integer",description:"Whether the number value should be exported as integer instead of a float value depending on the configured precision."},null,8,["modelValue"])])])],64)}var lt=V(je,[["render",at]]);const ht='{"title":"Playground","description":"","frontmatter":{},"relativePath":"playground.md","lastUpdated":1635113934732}',ut={},dt=u("h1",{id:"playground",tabindex:"-1"},[H("Playground "),u("a",{class:"header-anchor",href:"#playground","aria-hidden":"true"},"#")],-1);function ct(t,e,i,s,o,r){const l=lt;return p(),h("div",null,[dt,m(l)])}var gt=V(ut,[["render",ct]]);export{ht as __pageData,gt as default};