(()=>{"use strict";var e={n:t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},d:(t,r)=>{for(var a in r)e.o(r,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:r[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=window.jQuery;var r=e.n(t);const a=window.Typed;var o=e.n(a);const n=e=>{if("string"!=typeof e)return!1;try{return JSON.parse(e),!0}catch{return!1}};r()((()=>{var e;e=".text-item.typing-element",r()(".disq_typing_text").each(((t,a)=>{if(r()(a).find(e).length){const t=r()(a).find(e),s=r()(t).attr("data-typed-options"),p=r()(t).attr("data-typed-extra-options"),u=n(s)?JSON.parse(s):{},l=n(p)?JSON.parse(p):{},d=n(l.strings)?JSON.parse(l.strings):[],i=[].filter.call(d,(e=>!!e.value)),c=[].map.call(i,(e=>e.value.toString())),[y]=r()(a).find(".text-item.typing-element .typed-text");c&&y&&new(o())(y,{strings:c,typeSpeed:Number.parseInt(u.typeSpeed),startDelay:Number.parseInt(u.startDelay),backSpeed:Number.parseInt(u.backSpeed),backDelay:Number.parseInt(u.backDelay),shuffle:u.shuffle,fadeOut:u.fadeOut,fadeOutDelay:Number.parseInt(u.fadeOutDelay),loop:u.loop,showCursor:u.showCursor,cursorChar:l.cursorChar,onComplete:e=>{u.loop&&"on"===u.showCursor&&"on"===l.remove_cursor&&(e.cursor.parentNode.removeChild(e.cursor),e.cursor=null)}})}}))}))})();