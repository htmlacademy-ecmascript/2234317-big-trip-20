(()=>{var t={10:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});var i=n(537),s=n.n(i),r=n(645),o=n.n(r)()(s());o.push([t.id,".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n","",{version:3,sources:["webpack://./src/framework/view/abstract-view.css"],names:[],mappings:"AAAA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE;;IAEE,wBAAwB;EAC1B;;EAEA;;;;;IAKE,2BAA2B;EAC7B;;EAEA;;;;IAIE,0BAA0B;EAC5B;AACF",sourcesContent:[".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n"],sourceRoot:""}]);const a=o},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",i=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),i&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),i&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,i,s,r){"string"==typeof t&&(t=[[null,t,void 0]]);var o={};if(i)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(o[l]=!0)}for(var c=0;c<t.length;c++){var u=[].concat(t[c]);i&&o[u[0]]||(void 0!==r&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=r),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),s&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=s):u[4]="".concat(s)),e.push(u))}},e}},537:t=>{"use strict";t.exports=function(t){var e=t[1],n=t[3];if(!n)return e;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),r="/*# ".concat(s," */");return[e].concat([r]).join("\n")}return[e].join("\n")}},484:function(t){t.exports=function(){"use strict";var t=6e4,e=36e5,n="millisecond",i="second",s="minute",r="hour",o="day",a="week",l="month",c="quarter",u="year",d="date",p="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},v=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},$={s:v,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),s=n%60;return(e<=0?"+":"-")+v(i,2,"0")+":"+v(s,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),s=e.clone().add(i,l),r=n-s<0,o=e.clone().add(i+(r?-1:1),l);return+(-(i+(n-s)/(r?s-o:o-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:l,y:u,w:a,d:o,D:d,h:r,m:s,s:i,ms:n,Q:c}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",_={};_[y]=m;var g=function(t){return t instanceof M},b=function t(e,n,i){var s;if(!e)return y;if("string"==typeof e){var r=e.toLowerCase();_[r]&&(s=r),n&&(_[r]=n,s=r);var o=e.split("-");if(!s&&o.length>1)return t(o[0])}else{var a=e.name;_[a]=e,s=a}return!i&&s&&(y=s),s||!i&&y},C=function(t,e){if(g(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new M(n)},S=$;S.l=b,S.i=g,S.w=function(t,e){return C(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var M=function(){function m(t){this.$L=b(t.locale,null,!0),this.parse(t)}var v=m.prototype;return v.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(S.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(h);if(i){var s=i[2]-1||0,r=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},v.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},v.$utils=function(){return S},v.isValid=function(){return!(this.$d.toString()===p)},v.isSame=function(t,e){var n=C(t);return this.startOf(e)<=n&&n<=this.endOf(e)},v.isAfter=function(t,e){return C(t)<this.startOf(e)},v.isBefore=function(t,e){return this.endOf(e)<C(t)},v.$g=function(t,e,n){return S.u(t)?this[e]:this.set(n,t)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(t,e){var n=this,c=!!S.u(e)||e,p=S.p(t),h=function(t,e){var i=S.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return c?i:i.endOf(o)},f=function(t,e){return S.w(n.toDate()[t].apply(n.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},m=this.$W,v=this.$M,$=this.$D,y="set"+(this.$u?"UTC":"");switch(p){case u:return c?h(1,0):h(31,11);case l:return c?h(1,v):h(0,v+1);case a:var _=this.$locale().weekStart||0,g=(m<_?m+7:m)-_;return h(c?$-g:$+(6-g),v);case o:case d:return f(y+"Hours",0);case r:return f(y+"Minutes",1);case s:return f(y+"Seconds",2);case i:return f(y+"Milliseconds",3);default:return this.clone()}},v.endOf=function(t){return this.startOf(t,!1)},v.$set=function(t,e){var a,c=S.p(t),p="set"+(this.$u?"UTC":""),h=(a={},a[o]=p+"Date",a[d]=p+"Date",a[l]=p+"Month",a[u]=p+"FullYear",a[r]=p+"Hours",a[s]=p+"Minutes",a[i]=p+"Seconds",a[n]=p+"Milliseconds",a)[c],f=c===o?this.$D+(e-this.$W):e;if(c===l||c===u){var m=this.clone().set(d,1);m.$d[h](f),m.init(),this.$d=m.set(d,Math.min(this.$D,m.daysInMonth())).$d}else h&&this.$d[h](f);return this.init(),this},v.set=function(t,e){return this.clone().$set(t,e)},v.get=function(t){return this[S.p(t)]()},v.add=function(n,c){var d,p=this;n=Number(n);var h=S.p(c),f=function(t){var e=C(p);return S.w(e.date(e.date()+Math.round(t*n)),p)};if(h===l)return this.set(l,this.$M+n);if(h===u)return this.set(u,this.$y+n);if(h===o)return f(1);if(h===a)return f(7);var m=(d={},d[s]=t,d[r]=e,d[i]=1e3,d)[h]||1,v=this.$d.getTime()+n*m;return S.w(v,this)},v.subtract=function(t,e){return this.add(-1*t,e)},v.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||p;var i=t||"YYYY-MM-DDTHH:mm:ssZ",s=S.z(this),r=this.$H,o=this.$m,a=this.$M,l=n.weekdays,c=n.months,u=function(t,n,s,r){return t&&(t[n]||t(e,i))||s[n].slice(0,r)},d=function(t){return S.s(r%12||12,t,"0")},h=n.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:S.s(a+1,2,"0"),MMM:u(n.monthsShort,a,c,3),MMMM:u(c,a),D:this.$D,DD:S.s(this.$D,2,"0"),d:String(this.$W),dd:u(n.weekdaysMin,this.$W,l,2),ddd:u(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(r),HH:S.s(r,2,"0"),h:d(1),hh:d(2),a:h(r,o,!0),A:h(r,o,!1),m:String(o),mm:S.s(o,2,"0"),s:String(this.$s),ss:S.s(this.$s,2,"0"),SSS:S.s(this.$ms,3,"0"),Z:s};return i.replace(f,(function(t,e){return e||m[t]||s.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(n,d,p){var h,f=S.p(d),m=C(n),v=(m.utcOffset()-this.utcOffset())*t,$=this-m,y=S.m(this,m);return y=(h={},h[u]=y/12,h[l]=y,h[c]=y/3,h[a]=($-v)/6048e5,h[o]=($-v)/864e5,h[r]=$/e,h[s]=$/t,h[i]=$/1e3,h)[f]||$,p?y:S.a(y)},v.daysInMonth=function(){return this.endOf(l).$D},v.$locale=function(){return _[this.$L]},v.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=b(t,e,!0);return i&&(n.$L=i),n},v.clone=function(){return S.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},m}(),w=M.prototype;return C.prototype=w,[["$ms",n],["$s",i],["$m",s],["$H",r],["$W",o],["$M",l],["$y",u],["$D",d]].forEach((function(t){w[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),C.extend=function(t,e){return t.$i||(t(e,M,C),t.$i=!0),C},C.locale=b,C.isDayjs=g,C.unix=function(t){return C(1e3*t)},C.en=_[y],C.Ls=_,C.p={},C}()},646:function(t){t.exports=function(){"use strict";var t,e,n=1e3,i=6e4,s=36e5,r=864e5,o=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,a=31536e6,l=2592e6,c=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,u={years:a,months:l,days:r,hours:s,minutes:i,seconds:n,milliseconds:1,weeks:6048e5},d=function(t){return t instanceof y},p=function(t,e,n){return new y(t,n,e.$l)},h=function(t){return e.p(t)+"s"},f=function(t){return t<0},m=function(t){return f(t)?Math.ceil(t):Math.floor(t)},v=function(t){return Math.abs(t)},$=function(t,e){return t?f(t)?{negative:!0,format:""+v(t)+e}:{negative:!1,format:""+t+e}:{negative:!1,format:""}},y=function(){function f(t,e,n){var i=this;if(this.$d={},this.$l=n,void 0===t&&(this.$ms=0,this.parseFromMilliseconds()),e)return p(t*u[h(e)],this);if("number"==typeof t)return this.$ms=t,this.parseFromMilliseconds(),this;if("object"==typeof t)return Object.keys(t).forEach((function(e){i.$d[h(e)]=t[e]})),this.calMilliseconds(),this;if("string"==typeof t){var s=t.match(c);if(s){var r=s.slice(2).map((function(t){return null!=t?Number(t):0}));return this.$d.years=r[0],this.$d.months=r[1],this.$d.weeks=r[2],this.$d.days=r[3],this.$d.hours=r[4],this.$d.minutes=r[5],this.$d.seconds=r[6],this.calMilliseconds(),this}}return this}var v=f.prototype;return v.calMilliseconds=function(){var t=this;this.$ms=Object.keys(this.$d).reduce((function(e,n){return e+(t.$d[n]||0)*u[n]}),0)},v.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=m(t/a),t%=a,this.$d.months=m(t/l),t%=l,this.$d.days=m(t/r),t%=r,this.$d.hours=m(t/s),t%=s,this.$d.minutes=m(t/i),t%=i,this.$d.seconds=m(t/n),t%=n,this.$d.milliseconds=t},v.toISOString=function(){var t=$(this.$d.years,"Y"),e=$(this.$d.months,"M"),n=+this.$d.days||0;this.$d.weeks&&(n+=7*this.$d.weeks);var i=$(n,"D"),s=$(this.$d.hours,"H"),r=$(this.$d.minutes,"M"),o=this.$d.seconds||0;this.$d.milliseconds&&(o+=this.$d.milliseconds/1e3);var a=$(o,"S"),l=t.negative||e.negative||i.negative||s.negative||r.negative||a.negative,c=s.format||r.format||a.format?"T":"",u=(l?"-":"")+"P"+t.format+e.format+i.format+c+s.format+r.format+a.format;return"P"===u||"-P"===u?"P0D":u},v.toJSON=function(){return this.toISOString()},v.format=function(t){var n=t||"YYYY-MM-DDTHH:mm:ss",i={Y:this.$d.years,YY:e.s(this.$d.years,2,"0"),YYYY:e.s(this.$d.years,4,"0"),M:this.$d.months,MM:e.s(this.$d.months,2,"0"),D:this.$d.days,DD:e.s(this.$d.days,2,"0"),H:this.$d.hours,HH:e.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:e.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:e.s(this.$d.seconds,2,"0"),SSS:e.s(this.$d.milliseconds,3,"0")};return n.replace(o,(function(t,e){return e||String(i[t])}))},v.as=function(t){return this.$ms/u[h(t)]},v.get=function(t){var e=this.$ms,n=h(t);return"milliseconds"===n?e%=1e3:e="weeks"===n?m(e/u[n]):this.$d[n],0===e?0:e},v.add=function(t,e,n){var i;return i=e?t*u[h(e)]:d(t)?t.$ms:p(t,this).$ms,p(this.$ms+i*(n?-1:1),this)},v.subtract=function(t,e){return this.add(t,e,!0)},v.locale=function(t){var e=this.clone();return e.$l=t,e},v.clone=function(){return p(this.$ms,this)},v.humanize=function(e){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!e)},v.milliseconds=function(){return this.get("milliseconds")},v.asMilliseconds=function(){return this.as("milliseconds")},v.seconds=function(){return this.get("seconds")},v.asSeconds=function(){return this.as("seconds")},v.minutes=function(){return this.get("minutes")},v.asMinutes=function(){return this.as("minutes")},v.hours=function(){return this.get("hours")},v.asHours=function(){return this.as("hours")},v.days=function(){return this.get("days")},v.asDays=function(){return this.as("days")},v.weeks=function(){return this.get("weeks")},v.asWeeks=function(){return this.as("weeks")},v.months=function(){return this.get("months")},v.asMonths=function(){return this.as("months")},v.years=function(){return this.get("years")},v.asYears=function(){return this.as("years")},f}();return function(n,i,s){t=s,e=s().$utils(),s.duration=function(t,e){var n=s.locale();return p(t,{$l:n},e)},s.isDuration=d;var r=i.prototype.add,o=i.prototype.subtract;i.prototype.add=function(t,e){return d(t)&&(t=t.asMilliseconds()),r.bind(this)(t,e)},i.prototype.subtract=function(t,e){return d(t)&&(t=t.asMilliseconds()),o.bind(this)(t,e)}}}()},212:function(t){t.exports=function(){"use strict";return function(t,e){e.prototype.isSameOrAfter=function(t,e){return this.isSame(t,e)||this.isAfter(t,e)}}}()},412:function(t){t.exports=function(){"use strict";return function(t,e){e.prototype.isSameOrBefore=function(t,e){return this.isSame(t,e)||this.isBefore(t,e)}}}()},379:t=>{"use strict";var e=[];function n(t){for(var n=-1,i=0;i<e.length;i++)if(e[i].identifier===t){n=i;break}return n}function i(t,i){for(var r={},o=[],a=0;a<t.length;a++){var l=t[a],c=i.base?l[0]+i.base:l[0],u=r[c]||0,d="".concat(c," ").concat(u);r[c]=u+1;var p=n(d),h={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)e[p].references++,e[p].updater(h);else{var f=s(h,i);i.byIndex=a,e.splice(a,0,{identifier:d,updater:f,references:1})}o.push(d)}return o}function s(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,s){var r=i(t=t||[],s=s||{});return function(t){t=t||[];for(var o=0;o<r.length;o++){var a=n(r[o]);e[a].references--}for(var l=i(t,s),c=0;c<r.length;c++){var u=n(r[c]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}r=l}}},569:t=>{"use strict";var e={};t.exports=function(t,n){var i=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var s=void 0!==n.layer;s&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,s&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(i,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(i){var s=e[i];if(void 0!==s)return s.exports;var r=e[i]={id:i,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{"use strict";const t={BEFOREBEGIN:"beforebegin",AFTERBEGIN:"afterbegin",BEFOREEND:"beforeend",AFTEREND:"afterend"};function e(e,n){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.BEFOREEND;if(!(e instanceof g))throw new Error("Can render only components");if(null===n)throw new Error("Container element doesn't exist");n.insertAdjacentElement(i,e.element)}function i(t,e){if(!(t instanceof g&&e instanceof g))throw new Error("Can replace only components");const n=t.element,i=e.element,s=i.parentElement;if(null===s)throw new Error("Parent element doesn't exist");s.replaceChild(n,i)}function s(t){if(null!==t){if(!(t instanceof g))throw new Error("Can remove only components");t.element.remove(),t.removeElement()}}var r=n(379),o=n.n(r),a=n(795),l=n.n(a),c=n(569),u=n.n(c),d=n(565),p=n.n(d),h=n(216),f=n.n(h),m=n(589),v=n.n(m),$=n(10),y={};y.styleTagTransform=v(),y.setAttributes=p(),y.insert=u().bind(null,"head"),y.domAPI=l(),y.insertStyleElement=f(),o()($.Z,y),$.Z&&$.Z.locals&&$.Z.locals;const _="shake";class g{#t=null;constructor(){if(new.target===g)throw new Error("Can't instantiate AbstractView, only concrete one.")}get element(){return this.#t||(this.#t=function(t){const e=document.createElement("div");return e.innerHTML=t,e.firstElementChild}(this.template)),this.#t}get template(){throw new Error("Abstract method not implemented: get template")}removeElement(){this.#t=null}shake(t){this.element.classList.add(_),setTimeout((()=>{this.element.classList.remove(_),t?.()}),600)}}const b=10,C=200,S="https://loremflickr.com/248/152?random=",M=100,w=1e3,E=7e3,T={TAXI:"Taxi",BUS:"Bus",TRAIN:"Train",SHIP:"Ship",DRIVE:"Drive",FLIGHT:"Flight",CHECK_IN:"Check-in",SIGHTSEEING:"Sightseeing",RESTAURANT:"Restaurant"},A=["Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Cras aliquet varius magna, non porta ligula feugiat eget.","Fusce tristique felis at fermentum pharetra.","Aliquam id orci ut lectus varius viverra.","Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.","Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.","Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.","Sed sed nisi sed augue convallis suscipit in sed felis.","Aliquam erat volutpat.","Nunc fermentum tortor ac porta dapibus.","In rutrum ac purus sit amet tempus."],D="DEFAULT",k="EDITING",F={DAY:{name:"day",enabled:!0},EVENT:{name:"event",enabled:!1},TIME:{name:"time",enabled:!0},PRICE:{name:"price",enabled:!0},OFFERS:{name:"offers",enabled:!1}};class x extends g{#e=null;constructor(t){let{onSortTypeChange:e}=t;super(),this.#e=e,this.element.addEventListener("change",this.#n)}get template(){return`\n    <form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n      ${Object.values(F).map(((t,e)=>function(t,e){const{name:n,enabled:i}=t;return`\n    <div class="trip-sort__item  trip-sort__item--${n}">\n      <input id="sort-${n}"\n        class="trip-sort__input  visually-hidden"\n        type="radio"\n        name="trip-sort"\n        value="sort-${n}"\n        data-sort-type="${n}"\n        ${e?"checked":""}\n        ${i?"":"disabled"}\n      >\n      <label class="trip-sort__btn" for="sort-${n}">${n}</label>\n    </div>\n  `}(t,0===e))).join("")}\n    </form>\n  `}#n=t=>{t.preventDefault(),this.#e(t.target.dataset.sortType)}}class P extends g{get template(){return'\n    <ul class="trip-events__list"></ul>\n  '}}class H extends g{get template(){return'\n    <p class="trip-events__msg">Click New Event to create your first point</p>\n  '}}var I=n(484),O=n.n(I),L=n(646),B=n.n(L),R=n(212),N=n.n(R),Y=n(412),U=n.n(Y);O().extend(B()),O().extend(N()),O().extend(U());const j="HH:mm",q="DD/MM/YY HH:mm";function G(t,e){return t?O()(t).format(e):""}class W extends g{#i=null;#s=null;#r=null;#o=null;#a=null;constructor(t){let{point:e,offers:n,destinations:i,onEditClick:s,onFavoriteClick:r}=t;super(),this.#i=e,this.#s=n,this.#r=i,this.#o=s,this.#a=r,this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#l),this.element.querySelector(".event__favorite-btn").addEventListener("click",this.#c)}get template(){return function(t,e,n){const{basePrice:i,dateFrom:s,dateTo:r,destination:o,isFavorite:a,offers:l,type:c}=t,u=G(s,"MMM DD"),d=G(s,j),p=G(r,j),h=function(t,e){const n=O()(e).diff(t),i=O().duration(n).$ms;let s="mm[m]";return i>=864e5?s="DD[d] HH[h] mm[m]":i>=36e5&&(s="HH[h] mm[m]"),O().duration(n).format(s)}(s,r),f=a?"event__favorite-btn--active":"";return`\n    <li class="trip-events__item">\n      <div class="event">\n        <time class="event__date" datetime=${s}>${u}</time>\n        <div class="event__type">\n          <img class="event__type-icon" width="42" height="42" src="img/icons/${c.toLowerCase()}.png" alt="Event type icon">\n        </div>\n        <h3 class="event__title">${c} ${function(t,e){return t.find((t=>e.includes(t.id))).name}(n,o)}</h3>\n        <div class="event__schedule">\n          <p class="event__time">\n            <time class="event__start-time" datetime=${s}>${d}</time>\n            &mdash;\n            <time class="event__end-time" datetime=${r}>${p}</time>\n          </p>\n          <p class="event__duration">${h}</p>\n        </div>\n        <p class="event__price">\n          &euro;&nbsp;<span class="event__price-value">${i}</span>\n        </p>\n        <h4 class="visually-hidden">Offers:</h4>\n        ${function(t,e,n){const i=function(t,e,n){return t.find((t=>t.type===n)).offers.filter((t=>e.includes(t.id)))}(t,e,n).map((t=>function(t){const{title:e,price:n}=t;return`\n    <li class="event__offer">\n      <span class="event__offer-title">${e}</span>\n      &plus;&euro;&nbsp;\n      <span class="event__offer-price">${n}</span>\n    </li>\n  `}(t))).join("");return`\n    <ul class="event__selected-offers">\n      ${i}\n    </ul>\n  `}(e,l,c)}\n        <button class="event__favorite-btn ${f}" type="button">\n          <span class="visually-hidden">Add to favorite</span>\n          <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n          </svg>\n        </button>\n        <button class="event__rollup-btn" type="button">\n          <span class="visually-hidden">Open event</span>\n        </button>\n      </div>\n    </li>\n  `}(this.#i,this.#s,this.#r)}#l=t=>{t.preventDefault(),this.#o()};#c=t=>{t.preventDefault(),this.#a()}}function Z(t){return t[Math.floor(Math.random()*t.length)]}function V(t,e){const n=Math.ceil(Math.min(t,e)),i=Math.floor(Math.max(t,e)),s=Math.random()*(i-n+1)+n;return Math.floor(s)}function X(t){return t.trim().toLowerCase().replace(/[^a-zA-Z0-9 -]/,"").replace(/\s/g,"-")}function z(t,e){return t.find((t=>e.includes(t.id)))}function J(t,e,n){const{basePrice:i,dateFrom:s,dateTo:r,destination:o,offers:a,type:l}=t,c=z(n,o),u=G(s,q),d=G(r,q);return`\n    <li class="trip-events__item">\n      <form class="event event--edit" action="#" method="post">\n        <header class="event__header">\n          <div class="event__type-wrapper">\n            <label class="event__type  event__type-btn" for="event-type-toggle-1">\n              <span class="visually-hidden">Choose event type</span>\n              <img class="event__type-icon" width="17" height="17" src="img/icons/${l.toLowerCase()}.png" alt="Event type icon">\n            </label>\n            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n            <div class="event__type-list">\n              ${function(t){const e=Object.values(T).map((e=>function(t,e){const n=e===t?"checked":"";return`\n    <div class="event__type-item">\n      <input id="event-type-${e.toLowerCase()}"\n        class="event__type-input  visually-hidden"\n        type="radio"\n        name="event-type"\n        value="${e.toLowerCase()}"\n        ${n}\n      >\n      <label class="event__type-label  event__type-label--${e.toLowerCase()}" for="event-type-${e.toLowerCase()}">${e}</label>\n    </div>\n  `}(t,e))).join("");return`\n    <fieldset class="event__type-group">\n      <legend class="visually-hidden">Event type</legend>\n      ${e}\n    </fieldset>\n  `}(l)}\n            </div>\n          </div>\n\n          <div class="event__field-group  event__field-group--destination">\n            <label class="event__label  event__type-output" for="event-destination-1">\n              ${l}\n            </label>\n            <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${c.name}" list="destination-list-1">\n            <datalist id="destination-list-1">\n              ${function(t){return t.map((t=>`\n    <option value="${t.name}"></option>\n  `)).join("")}(n)}\n            </datalist>\n          </div>\n\n          <div class="event__field-group  event__field-group--time">\n            <label class="visually-hidden" for="event-start-time-1">From</label>\n            <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${u}">\n            &mdash;\n            <label class="visually-hidden" for="event-end-time-1">To</label>\n            <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${d}">\n          </div>\n\n          <div class="event__field-group  event__field-group--price">\n            <label class="event__label" for="event-price-1">\n              <span class="visually-hidden">Price</span>\n              &euro;\n            </label>\n            <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${i}">\n          </div>\n\n          <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n          <button class="event__reset-btn" type="reset">Delete</button>\n          <button class="event__rollup-btn" type="button">\n            <span class="visually-hidden">Open event</span>\n          </button>\n        </header>\n        <section class="event__details">\n          <section class="event__section  event__section--offers">\n            <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n            ${function(t,e,n){const i=function(t,e){return t.find((t=>t.type===e)).offers}(t,n).map((t=>function(t,e){const{id:n,title:i,price:s}=e,r=t.includes(n)?"checked":"";return`\n    <div class="event__offer-selector">\n      <input id="event-offer-${X(i)}"\n        class="event__offer-checkbox  visually-hidden"\n        type="checkbox"\n        name="event-offer-${X(i)}"\n        ${r}\n      >\n      <label class="event__offer-label" for="event-offer-${X(i)}">\n        <span class="event__offer-title">${i}</span>\n        &plus;&euro;&nbsp;\n        <span class="event__offer-price">${s}</span>\n      </label>\n    </div>\n  `}(e,t))).join("");return`\n    <div class="event__available-offers">\n      ${i}\n    </div>\n  `}(e,a,l)}\n          </section>\n\n          <section class="event__section  event__section--destination">\n            <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n            ${function(t){const e=t.pictures.map((t=>`\n    <img class="event__photo" src="${t.src}" alt="${t.description}">\n  `)).join("");return`\n    <p class="event__destination-description">${t.description}</p>\n    <div class="event__photos-container">\n      <div class="event__photos-tape">\n        ${e}\n      </div>\n    </div>\n  `}(z(n,o))}\n          </section>\n        </section>\n      </form>\n    </li>\n  `}class K extends g{#i=null;#s=null;#r=null;#u=null;#d=null;constructor(t){let{point:e,offers:n,destinations:i,onFormSubmit:s,onRollUpClick:r}=t;super(),this.#i=e,this.#s=n,this.#r=i,this.#u=s,this.#d=r,this.element.querySelector("form").addEventListener("submit",this.#p),this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#h)}get template(){return J(this.#i,this.#s,this.#r)}#p=t=>{t.preventDefault(),this.#u(this.#i)};#h=t=>{t.preventDefault(),this.#d()}}class Q{#f=null;#m=null;#v=null;#i=null;#s=[];#r=[];#$=D;#y=null;#_=null;constructor(t){let{pointContainer:e,offers:n,destinations:i,onDataChange:s,onModeChange:r}=t;this.#f=e,this.#s=n,this.#r=i,this.#m=s,this.#v=r}init(t){this.#i=t;const n=this.#y,r=this.#_;this.#y=new W({point:this.#i,offers:this.#s,destinations:this.#r,onEditClick:this.#o,onFavoriteClick:this.#a}),this.#_=new K({point:this.#i,offers:this.#s,destinations:this.#r,onFormSubmit:this.#u,onRollUpClick:this.#d}),null!==n&&null!==r?(this.#$===D&&i(this.#y,n),this.#$===k&&i(this.#_,r),s(n),s(r)):e(this.#y,this.#f)}destroy(){s(this.#y),s(this.#_)}resetView(){this.#$!==D&&this.#g()}#b(){i(this.#_,this.#y),document.addEventListener("keydown",this.#C),this.#v(),this.#$=k}#g(){i(this.#y,this.#_),document.removeEventListener("keydown",this.#C),this.#$=D}#C=t=>{"Escape"===t.key&&(t.preventDefault(),this.#g())};#o=()=>{this.#b()};#u=t=>{this.#m(t),this.#g()};#d=()=>{this.#g()};#a=()=>{this.#m({...this.#i,isFavorite:!this.#i.isFavorite})}}function tt(t,e){return function(t,e){return O()(t.dateFrom).diff(O()(e.dateFrom))}(t,e)}function et(t,e){return function(t,e){const n=O()(t.dateTo).diff(O()(t.dateFrom));return O()(e.dateTo).diff(O()(e.dateFrom))-n}(t,e)}function nt(t,e){return e.basePrice-t.basePrice}function it(t,e){switch(e){case F.TIME.name:t.sort(et);break;case F.PRICE.name:t.sort(nt);break;default:t.sort(tt)}}let st=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce(((t,e)=>t+((e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_")),"");const rt=[{id:"0",description:Z(A),name:"Chamonix",pictures:[{src:`${S}${V(1,M)}`,description:Z(A)},{src:`${S}${V(1,M)}`,description:Z(A)},{src:`${S}${V(1,M)}`,description:Z(A)},{src:`${S}${V(1,M)}`,description:Z(A)}]},{id:"1",description:Z(A),name:"Geneva",pictures:[{src:`${S}${V(1,M)}`,description:Z(A)},{src:`${S}${V(1,M)}`,description:Z(A)},{src:`${S}${V(1,M)}`,description:Z(A)},{src:`${S}${V(1,M)}`,description:Z(A)},{src:`${S}${V(1,M)}`,description:Z(A)}]},{id:"2",description:Z(A),name:"Amsterdam",pictures:[{src:`${S}${V(1,M)}`,description:Z(A)},{src:`${S}${V(1,M)}`,description:Z(A)},{src:`${S}${V(1,M)}`,description:Z(A)}]}];function ot(){return Z(rt)}const at=[{basePrice:V(w,E),dateFrom:"2023-01-02T10:45",dateTo:"2023-01-03T14:55",destination:ot().id,isFavorite:!1,offers:["1","3","2"],type:T.TAXI},{basePrice:V(w,E),dateFrom:"2023-01-03T11:45",dateTo:"2023-01-03T15:05",destination:ot().id,isFavorite:!0,offers:["2"],type:T.RESTAURANT},{basePrice:V(w,E),dateFrom:"2023-01-03T12:45",dateTo:"2023-01-04T15:15",destination:ot().id,isFavorite:!1,offers:["0","3"],type:T.SHIP},{basePrice:V(w,E),dateFrom:"2023-01-04T13:45",dateTo:"2023-01-04T14:25",destination:ot().id,isFavorite:!1,offers:["0"],type:T.TRAIN}];function lt(){return{id:st(),...Z(at)}}const ct=[{type:T.TAXI,offers:[{id:"0",title:"Upgrade to a business class",price:V(b,C)},{id:"1",title:"Order Uber",price:V(b,C)},{id:"2",title:"Transportation of an animal",price:V(b,C)},{id:"3",title:"Child safety seat",price:V(b,C)}]},{type:T.BUS,offers:[{id:"0",title:"Transportation of an animal",price:V(b,C)},{id:"1",title:"Baggage transportation",price:V(b,C)},{id:"2",title:"A place for a disabled person",price:V(b,C)},{id:"3",title:"Baggage transportation",price:V(b,C)}]},{type:T.TRAIN,offers:[{id:"0",title:"Baggage transportation",price:V(b,C)},{id:"1",title:"Transportation of an animal",price:V(b,C)},{id:"2",title:"A place for a disabled person",price:V(b,C)},{id:"3",title:"A place for a child",price:V(b,C)}]},{type:T.SHIP,offers:[{id:"0",title:"A place for a child",price:V(b,C)},{id:"1",title:"A place for a disabled person",price:V(b,C)},{id:"2",title:"Transportation of an animal",price:V(b,C)},{id:"3",title:"Baggage transportation",price:V(b,C)}]},{type:T.CHECK_IN,offers:[{id:"0",title:"Add breakfast",price:V(b,C)},{id:"1",title:"Add lunch",price:V(b,C)},{id:"2",title:"Add dinner",price:V(b,C)},{id:"3",title:"Add three meals a day",price:V(b,C)}]},{type:T.FLIGHT,offers:[{id:"0",title:"Add luggage",price:V(b,C)},{id:"1",title:"Switch to comfort",price:V(b,C)},{id:"2",title:"Transportation for an animal",price:V(b,C)},{id:"3",title:"Baggage transportation",price:V(b,C)}]},{type:T.DRIVE,offers:[{id:"0",title:"Rent a car",price:V(b,C)},{id:"1",title:"Baggage transportation",price:V(b,C)},{id:"2",title:"Child safety seat",price:V(b,C)},{id:"3",title:"Transportation for an animal",price:V(b,C)}]},{type:T.SIGHTSEEING,offers:[{id:"0",title:"Book tickets",price:V(b,C)},{id:"1",title:"Lunch in city",price:V(b,C)},{id:"2",title:"Book tickets",price:V(b,C)},{id:"3",title:"Breakfast in city",price:V(b,C)}]},{type:T.RESTAURANT,offers:[{id:"0",title:"Book a table",price:V(b,C)},{id:"1",title:"Live music",price:V(b,C)},{id:"2",title:"Personal waiter",price:V(b,C)},{id:"3",title:"A compliment from the chef",price:V(b,C)}]},{type:T.FLIGHT,offers:[{id:"0",title:"Add luggage",price:V(b,C)},{id:"1",title:"Switch to comfort",price:V(b,C)},{id:"2",title:"Transportation for an animal",price:V(b,C)},{id:"3",title:"A place for a child",price:V(b,C)}]}],ut={Everything:t=>[...t],Future:t=>t.filter((t=>{return e=t.dateFrom,O()().isBefore(e,"D");var e})),Present:t=>t.filter((t=>function(t,e){const n=O()().isSameOrAfter(O()(t),"D"),i=O()().isSameOrBefore(O()(e),"D");return n&&i}(t.dateFrom,t.dateTo))),Past:t=>t.filter((t=>{return e=t.dateTo,O()().isAfter(e,"D");var e}))},dt=document.querySelector(".trip-main"),pt=document.querySelector(".trip-controls__filters"),ht=document.querySelector(".trip-events"),ft=new class{#S=Array.from({length:5},lt);#s=ct;#r=rt;get points(){return this.#S}get offers(){return this.#s}get destinations(){return this.#r}},mt=new class{#M=null;#w=null;#S=[];#s=[];#r=[];#E=new Map;#T=F.DAY.name;#A=new P;#D=null;#k=new H;constructor(t){let{tripContainer:e,pointsModel:n}=t;this.#M=e,this.#w=n}init(){this.#S=[...this.#w.points],this.#s=[...this.#w.offers],this.#r=[...this.#w.destinations],it(this.#S,this.#T),0===this.#S.length?this.#F():this.#x()}#x(){this.#P(),this.#H(),this.#I(this.#S,this.#s,this.#r)}#P(){this.#D=new x({onSortTypeChange:this.#e}),e(this.#D,this.#M)}#H(){e(this.#A,this.#M)}#I(t,e,n){for(let i=0;i<t.length;i++)this.#O(t[i],e,n)}#L(){this.#E.forEach((t=>t.destroy())),this.#E.clear()}#B(t){it(this.#S,t),this.#T=t}#F(){e(this.#k,this.#M)}#O(t,e,n){const i=new Q({pointContainer:this.#A.element,offers:e,destinations:n,onDataChange:this.#R,onModeChange:this.#v});i.init(t),this.#E.set(t.id,i)}#R=t=>{var e,n;this.#S=(e=this.#S,n=t,e.map((t=>t.id===n.id?n:t))),this.#E.get(t.id).init(t)};#v=()=>{this.#E.forEach((t=>t.resetView()))};#e=t=>{this.#T!==t&&(this.#B(t),this.#L(),this.#I(this.#S,this.#s,this.#r))}}({tripContainer:ht,pointsModel:ft}),vt=($t=ft.points,Object.entries(ut).map((t=>{let[e,n]=t;return{type:e,hasPoints:n($t).length>0}})));var $t;e(new class extends g{get template(){return'\n    <section class="trip-main__trip-info  trip-info">\n      <div class="trip-info__main">\n        <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>\n\n        <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;20</p>\n      </div>\n\n      <p class="trip-info__cost">\n        Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>\n      </p>\n    </section>\n  '}},dt,t.AFTERBEGIN),e(new class extends g{#N=null;constructor(t){let{filters:e}=t;super(),this.#N=e}get template(){return function(t){const e=t.map(((t,e)=>function(t,e){const{type:n,hasPoints:i}=t;return`\n    <div class="trip-filters__filter">\n      <input id="filter-${n.toLowerCase()}"\n        class="trip-filters__filter-input visually-hidden"\n        type="radio"\n        name="trip-filter"\n        value="${n.toLowerCase()}"\n        ${e?"checked":""}\n        ${i?"":"disabled"}\n      >\n      <label class="trip-filters__filter-label" for="filter-${n.toLowerCase()}">${n}</label>\n    </div>\n  `}(t,0===e))).join("");return`\n    <form class="trip-filters" action="#" method="get">\n      ${e}\n\n      <button class="visually-hidden" type="submit">Accept filter</button>\n    </form>\n  `}(this.#N)}}({filters:vt}),pt),mt.init()})()})();
//# sourceMappingURL=bundle.4fe20cfb49db91465b41.js.map