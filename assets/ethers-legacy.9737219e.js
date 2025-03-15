System.register(["./index-legacy.37b6fe49.js"],(function(t){"use strict";var r,e,i,n,o,s,a;return{setters:[function(t){r=t.ac,e=t.bn,i=t.af,n=t.al,o=t.bo,s=t.a9,a=t.aT}],execute:function(){t({a:function(t){return E(t,18)},b:S,c:function(t){const r=String(t).split(".");(r.length>2||!r[0].match(/^-?[0-9]*$/)||r[1]&&!r[1].match(/^[0-9]*$/)||"."===t||"-."===t)&&_.throwArgumentError("invalid value","value",t);let e=r[0],i="";for("-"===e.substring(0,1)&&(i="-",e=e.substring(1));"0"===e.substring(0,1);)e=e.substring(1);""===e&&(e="0");let n="";for(2===r.length&&(n="."+(r[1]||"0"));n.length>2&&"0"===n[n.length-1];)n=n.substring(0,n.length-1);const o=[];for(;e.length;){if(e.length<=3){o.unshift(e);break}{const t=e.length-3;o.unshift(e.substring(t)),e=e.substring(0,t)}}return i+o.join(",")+n},f:E,p:function(t){return S(t,18)}});const l=new r(e),u={},m=i.from(0),f=i.from(-1);function h(t,e,i,n){const o={fault:e,operation:i};return void 0!==n&&(o.value=n),l.throwError(t,r.errors.NUMERIC_FAULT,o)}let c="0";for(;c.length<256;)c+=c;function d(t){if("number"!=typeof t)try{t=i.from(t).toNumber()}catch(r){}return"number"==typeof t&&t>=0&&t<=256&&!(t%1)?"1"+c.substring(0,t):l.throwArgumentError("invalid decimal size","decimals",t)}function g(t,r){null==r&&(r=0);const e=d(r),n=(t=i.from(t)).lt(m);n&&(t=t.mul(f));let o=t.mod(e).toString();for(;o.length<e.length-1;)o="0"+o;o=o.match(/^([0-9]*[1-9]|0)(0*)/)[1];const s=t.div(e).toString();return t=1===e.length?s:s+"."+o,n&&(t="-"+t),t}function w(t,r){null==r&&(r=0);const e=d(r);"string"==typeof t&&t.match(/^-?[0-9.]+$/)||l.throwArgumentError("invalid decimal value","value",t);const n="-"===t.substring(0,1);n&&(t=t.substring(1)),"."===t&&l.throwArgumentError("missing value","value",t);const o=t.split(".");o.length>2&&l.throwArgumentError("too many decimal points","value",t);let s=o[0],a=o[1];for(s||(s="0"),a||(a="0");"0"===a[a.length-1];)a=a.substring(0,a.length-1);for(a.length>e.length-1&&h("fractional component exceeds decimals","underflow","parseFixed"),""===a&&(a="0");a.length<e.length-1;)a+="0";const u=i.from(s),m=i.from(a);let c=u.mul(e).add(m);return n&&(c=c.mul(f)),c}class v{constructor(t,e,i,n){t!==u&&l.throwError("cannot use FixedFormat constructor; use FixedFormat.from",r.errors.UNSUPPORTED_OPERATION,{operation:"new FixedFormat"}),this.signed=e,this.width=i,this.decimals=n,this.name=(e?"":"u")+"fixed"+String(i)+"x"+String(n),this._multiplier=d(n),Object.freeze(this)}static from(t){if(t instanceof v)return t;"number"==typeof t&&(t=`fixed128x${t}`);let r=!0,e=128,i=18;if("string"==typeof t)if("fixed"===t);else if("ufixed"===t)r=!1;else{const n=t.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);n||l.throwArgumentError("invalid fixed format","format",t),r="u"!==n[1],e=parseInt(n[2]),i=parseInt(n[3])}else if(t){const n=(r,e,i)=>null==t[r]?i:(typeof t[r]!==e&&l.throwArgumentError("invalid fixed format ("+r+" not "+e+")","format."+r,t[r]),t[r]);r=n("signed","boolean",r),e=n("width","number",e),i=n("decimals","number",i)}return e%8&&l.throwArgumentError("invalid fixed format width (not byte aligned)","format.width",e),i>80&&l.throwArgumentError("invalid fixed format (decimals too large)","format.decimals",i),new v(u,r,e,i)}}class b{constructor(t,e,i,n){t!==u&&l.throwError("cannot use FixedNumber constructor; use FixedNumber.from",r.errors.UNSUPPORTED_OPERATION,{operation:"new FixedFormat"}),this.format=n,this._hex=e,this._value=i,this._isFixedNumber=!0,Object.freeze(this)}_checkFormat(t){this.format.name!==t.format.name&&l.throwArgumentError("incompatible format; use fixedNumber.toFormat","other",t)}addUnsafe(t){this._checkFormat(t);const r=w(this._value,this.format.decimals),e=w(t._value,t.format.decimals);return b.fromValue(r.add(e),this.format.decimals,this.format)}subUnsafe(t){this._checkFormat(t);const r=w(this._value,this.format.decimals),e=w(t._value,t.format.decimals);return b.fromValue(r.sub(e),this.format.decimals,this.format)}mulUnsafe(t){this._checkFormat(t);const r=w(this._value,this.format.decimals),e=w(t._value,t.format.decimals);return b.fromValue(r.mul(e).div(this.format._multiplier),this.format.decimals,this.format)}divUnsafe(t){this._checkFormat(t);const r=w(this._value,this.format.decimals),e=w(t._value,t.format.decimals);return b.fromValue(r.mul(this.format._multiplier).div(e),this.format.decimals,this.format)}floor(){const t=this.toString().split(".");1===t.length&&t.push("0");let r=b.from(t[0],this.format);const e=!t[1].match(/^(0*)$/);return this.isNegative()&&e&&(r=r.subUnsafe(x.toFormat(r.format))),r}ceiling(){const t=this.toString().split(".");1===t.length&&t.push("0");let r=b.from(t[0],this.format);const e=!t[1].match(/^(0*)$/);return!this.isNegative()&&e&&(r=r.addUnsafe(x.toFormat(r.format))),r}round(t){null==t&&(t=0);const r=this.toString().split(".");if(1===r.length&&r.push("0"),(t<0||t>80||t%1)&&l.throwArgumentError("invalid decimal count","decimals",t),r[1].length<=t)return this;const e=b.from("1"+c.substring(0,t),this.format),i=p.toFormat(this.format);return this.mulUnsafe(e).addUnsafe(i).floor().divUnsafe(e)}isZero(){return"0.0"===this._value||"0"===this._value}isNegative(){return"-"===this._value[0]}toString(){return this._value}toHexString(t){if(null==t)return this._hex;t%8&&l.throwArgumentError("invalid byte width","width",t);const r=i.from(this._hex).fromTwos(this.format.width).toTwos(t).toHexString();return n(r,t/8)}toUnsafeFloat(){return parseFloat(this.toString())}toFormat(t){return b.fromString(this._value,t)}static fromValue(t,r,e){return null!=e||null==r||o(r)||(e=r,r=null),null==r&&(r=0),null==e&&(e="fixed"),b.fromString(g(t,r),v.from(e))}static fromString(t,r){null==r&&(r="fixed");const e=v.from(r),i=w(t,e.decimals);!e.signed&&i.lt(m)&&h("unsigned value cannot be negative","overflow","value",t);let o=null;e.signed?o=i.toTwos(e.width).toHexString():(o=i.toHexString(),o=n(o,e.width/8));const s=g(i,e.decimals);return new b(u,o,s,e)}static fromBytes(t,r){null==r&&(r="fixed");const e=v.from(r);if(s(t).length>e.width/8)throw new Error("overflow");let n=i.from(t);e.signed&&(n=n.fromTwos(e.width));const o=n.toTwos((e.signed?0:1)+e.width).toHexString(),a=g(n,e.decimals);return new b(u,o,a,e)}static from(t,e){if("string"==typeof t)return b.fromString(t,e);if(a(t))return b.fromBytes(t,e);try{return b.fromValue(t,0,e)}catch(i){if(i.code!==r.errors.INVALID_ARGUMENT)throw i}return l.throwArgumentError("invalid FixedNumber value","value",t)}static isFixedNumber(t){return!(!t||!t._isFixedNumber)}}const x=b.from(1),p=b.from("0.5"),_=new r("units/5.7.0"),F=["wei","kwei","mwei","gwei","szabo","finney","ether"];function E(t,r){if("string"==typeof r){const t=F.indexOf(r);-1!==t&&(r=3*t)}return g(t,null!=r?r:18)}function S(t,r){if("string"!=typeof t&&_.throwArgumentError("value must be a string","value",t),"string"==typeof r){const t=F.indexOf(r);-1!==t&&(r=3*t)}return w(t,null!=r?r:18)}new r("ethers/5.7.2")}}}));
