var Bx=Object.defineProperty;var zx=(i,e,t)=>e in i?Bx(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var pt=(i,e,t)=>zx(i,typeof e!="symbol"?e+"":e,t);var oh=!1,ch=!1,wr=[],lh=-1;function kx(i){Vx(i)}function Vx(i){wr.includes(i)||wr.push(i),Hx()}function Vm(i){let e=wr.indexOf(i);e!==-1&&e>lh&&wr.splice(e,1)}function Hx(){!ch&&!oh&&(oh=!0,queueMicrotask(Gx))}function Gx(){oh=!1,ch=!0;for(let i=0;i<wr.length;i++)wr[i](),lh=i;wr.length=0,lh=-1,ch=!1}var Is,zr,Ls,Hm,uh=!0;function Wx(i){uh=!1,i(),uh=!0}function Xx(i){Is=i.reactive,Ls=i.release,zr=e=>i.effect(e,{scheduler:t=>{uh?kx(t):t()}}),Hm=i.raw}function xd(i){zr=i}function qx(i){let e=()=>{};return[n=>{let r=zr(n);return i._x_effects||(i._x_effects=new Set,i._x_runEffects=()=>{i._x_effects.forEach(s=>s())}),i._x_effects.add(r),e=()=>{r!==void 0&&(i._x_effects.delete(r),Ls(r))},r},()=>{e()}]}function Gm(i,e){let t=!0,n,r=zr(()=>{let s=i();JSON.stringify(s),t?n=s:queueMicrotask(()=>{e(s,n),n=s}),t=!1});return()=>Ls(r)}var Wm=[],Xm=[],qm=[];function Yx(i){qm.push(i)}function Kh(i,e){typeof e=="function"?(i._x_cleanups||(i._x_cleanups=[]),i._x_cleanups.push(e)):(e=i,Xm.push(e))}function Ym(i){Wm.push(i)}function Zm(i,e,t){i._x_attributeCleanups||(i._x_attributeCleanups={}),i._x_attributeCleanups[e]||(i._x_attributeCleanups[e]=[]),i._x_attributeCleanups[e].push(t)}function Km(i,e){i._x_attributeCleanups&&Object.entries(i._x_attributeCleanups).forEach(([t,n])=>{(e===void 0||e.includes(t))&&(n.forEach(r=>r()),delete i._x_attributeCleanups[t])})}function Zx(i){if(i._x_cleanups)for(;i._x_cleanups.length;)i._x_cleanups.pop()()}var Jh=new MutationObserver(ef),$h=!1;function jh(){Jh.observe(document,{subtree:!0,childList:!0,attributes:!0,attributeOldValue:!0}),$h=!0}function Jm(){Kx(),Jh.disconnect(),$h=!1}var ks=[];function Kx(){let i=Jh.takeRecords();ks.push(()=>i.length>0&&ef(i));let e=ks.length;queueMicrotask(()=>{if(ks.length===e)for(;ks.length>0;)ks.shift()()})}function Rt(i){if(!$h)return i();Jm();let e=i();return jh(),e}var Qh=!1,mc=[];function Jx(){Qh=!0}function $x(){Qh=!1,ef(mc),mc=[]}function ef(i){if(Qh){mc=mc.concat(i);return}let e=new Set,t=new Set,n=new Map,r=new Map;for(let s=0;s<i.length;s++)if(!i[s].target._x_ignoreMutationObserver&&(i[s].type==="childList"&&(i[s].addedNodes.forEach(a=>a.nodeType===1&&e.add(a)),i[s].removedNodes.forEach(a=>a.nodeType===1&&t.add(a))),i[s].type==="attributes")){let a=i[s].target,o=i[s].attributeName,c=i[s].oldValue,l=()=>{n.has(a)||n.set(a,[]),n.get(a).push({name:o,value:a.getAttribute(o)})},u=()=>{r.has(a)||r.set(a,[]),r.get(a).push(o)};a.hasAttribute(o)&&c===null?l():a.hasAttribute(o)?(u(),l()):u()}r.forEach((s,a)=>{Km(a,s)}),n.forEach((s,a)=>{Wm.forEach(o=>o(a,s))});for(let s of t)e.has(s)||Xm.forEach(a=>a(s));e.forEach(s=>{s._x_ignoreSelf=!0,s._x_ignore=!0});for(let s of e)t.has(s)||s.isConnected&&(delete s._x_ignoreSelf,delete s._x_ignore,qm.forEach(a=>a(s)),s._x_ignore=!0,s._x_ignoreSelf=!0);e.forEach(s=>{delete s._x_ignoreSelf,delete s._x_ignore}),e=null,t=null,n=null,r=null}function $m(i){return Wa(Es(i))}function Ga(i,e,t){return i._x_dataStack=[e,...Es(t||i)],()=>{i._x_dataStack=i._x_dataStack.filter(n=>n!==e)}}function Es(i){return i._x_dataStack?i._x_dataStack:typeof ShadowRoot=="function"&&i instanceof ShadowRoot?Es(i.host):i.parentNode?Es(i.parentNode):[]}function Wa(i){return new Proxy({objects:i},jx)}var jx={ownKeys({objects:i}){return Array.from(new Set(i.flatMap(e=>Object.keys(e))))},has({objects:i},e){return e==Symbol.unscopables?!1:i.some(t=>Object.prototype.hasOwnProperty.call(t,e)||Reflect.has(t,e))},get({objects:i},e,t){return e=="toJSON"?Qx:Reflect.get(i.find(n=>Reflect.has(n,e))||{},e,t)},set({objects:i},e,t,n){const r=i.find(a=>Object.prototype.hasOwnProperty.call(a,e))||i[i.length-1],s=Object.getOwnPropertyDescriptor(r,e);return s!=null&&s.set&&(s!=null&&s.get)?s.set.call(n,t)||!0:Reflect.set(r,e,t)}};function Qx(){return Reflect.ownKeys(this).reduce((e,t)=>(e[t]=Reflect.get(this,t),e),{})}function jm(i){let e=n=>typeof n=="object"&&!Array.isArray(n)&&n!==null,t=(n,r="")=>{Object.entries(Object.getOwnPropertyDescriptors(n)).forEach(([s,{value:a,enumerable:o}])=>{if(o===!1||a===void 0||typeof a=="object"&&a!==null&&a.__v_skip)return;let c=r===""?s:`${r}.${s}`;typeof a=="object"&&a!==null&&a._x_interceptor?n[s]=a.initialize(i,c,s):e(a)&&a!==n&&!(a instanceof Element)&&t(a,c)})};return t(i)}function Qm(i,e=()=>{}){let t={initialValue:void 0,_x_interceptor:!0,initialize(n,r,s){return i(this.initialValue,()=>ev(n,r),a=>hh(n,r,a),r,s)}};return e(t),n=>{if(typeof n=="object"&&n!==null&&n._x_interceptor){let r=t.initialize.bind(t);t.initialize=(s,a,o)=>{let c=n.initialize(s,a,o);return t.initialValue=c,r(s,a,o)}}else t.initialValue=n;return t}}function ev(i,e){return e.split(".").reduce((t,n)=>t[n],i)}function hh(i,e,t){if(typeof e=="string"&&(e=e.split(".")),e.length===1)i[e[0]]=t;else{if(e.length===0)throw error;return i[e[0]]||(i[e[0]]={}),hh(i[e[0]],e.slice(1),t)}}var eg={};function Fn(i,e){eg[i]=e}function fh(i,e){return Object.entries(eg).forEach(([t,n])=>{let r=null;function s(){if(r)return r;{let[a,o]=ag(e);return r={interceptor:Qm,...a},Kh(e,o),r}}Object.defineProperty(i,`$${t}`,{get(){return n(e,s())},enumerable:!1})}),i}function tv(i,e,t,...n){try{return t(...n)}catch(r){_a(r,i,e)}}function _a(i,e,t=void 0){i=Object.assign(i??{message:"No error message given."},{el:e,expression:t}),console.warn(`Alpine Expression Error: ${i.message}

${t?'Expression: "'+t+`"

`:""}`,e),setTimeout(()=>{throw i},0)}var lc=!0;function tg(i){let e=lc;lc=!1;let t=i();return lc=e,t}function Er(i,e,t={}){let n;return jt(i,e)(r=>n=r,t),n}function jt(...i){return ng(...i)}var ng=ig;function nv(i){ng=i}function ig(i,e){let t={};fh(t,i);let n=[t,...Es(i)],r=typeof e=="function"?iv(n,e):sv(n,e,i);return tv.bind(null,i,e,r)}function iv(i,e){return(t=()=>{},{scope:n={},params:r=[]}={})=>{let s=e.apply(Wa([n,...i]),r);gc(t,s)}}var cu={};function rv(i,e){if(cu[i])return cu[i];let t=Object.getPrototypeOf(async function(){}).constructor,n=/^[\n\s]*if.*\(.*\)/.test(i.trim())||/^(let|const)\s/.test(i.trim())?`(async()=>{ ${i} })()`:i,s=(()=>{try{let a=new t(["__self","scope"],`with (scope) { __self.result = ${n} }; __self.finished = true; return __self.result;`);return Object.defineProperty(a,"name",{value:`[Alpine] ${i}`}),a}catch(a){return _a(a,e,i),Promise.resolve()}})();return cu[i]=s,s}function sv(i,e,t){let n=rv(e,t);return(r=()=>{},{scope:s={},params:a=[]}={})=>{n.result=void 0,n.finished=!1;let o=Wa([s,...i]);if(typeof n=="function"){let c=n(n,o).catch(l=>_a(l,t,e));n.finished?(gc(r,n.result,o,a,t),n.result=void 0):c.then(l=>{gc(r,l,o,a,t)}).catch(l=>_a(l,t,e)).finally(()=>n.result=void 0)}}}function gc(i,e,t,n,r){if(lc&&typeof e=="function"){let s=e.apply(t,n);s instanceof Promise?s.then(a=>gc(i,a,t,n)).catch(a=>_a(a,r,e)):i(s)}else typeof e=="object"&&e instanceof Promise?e.then(s=>i(s)):i(e)}var tf="x-";function Ds(i=""){return tf+i}function av(i){tf=i}var _c={};function Ct(i,e){return _c[i]=e,{before(t){if(!_c[t]){console.warn(String.raw`Cannot find directive \`${t}\`. \`${i}\` will use the default order of execution`);return}const n=vr.indexOf(t);vr.splice(n>=0?n:vr.indexOf("DEFAULT"),0,i)}}}function ov(i){return Object.keys(_c).includes(i)}function nf(i,e,t){if(e=Array.from(e),i._x_virtualDirectives){let s=Object.entries(i._x_virtualDirectives).map(([o,c])=>({name:o,value:c})),a=rg(s);s=s.map(o=>a.find(c=>c.name===o.name)?{name:`x-bind:${o.name}`,value:`"${o.value}"`}:o),e=e.concat(s)}let n={};return e.map(lg((s,a)=>n[s]=a)).filter(hg).map(uv(n,t)).sort(hv).map(s=>lv(i,s))}function rg(i){return Array.from(i).map(lg()).filter(e=>!hg(e))}var dh=!1,ia=new Map,sg=Symbol();function cv(i){dh=!0;let e=Symbol();sg=e,ia.set(e,[]);let t=()=>{for(;ia.get(e).length;)ia.get(e).shift()();ia.delete(e)},n=()=>{dh=!1,t()};i(t),n()}function ag(i){let e=[],t=o=>e.push(o),[n,r]=qx(i);return e.push(r),[{Alpine:qa,effect:n,cleanup:t,evaluateLater:jt.bind(jt,i),evaluate:Er.bind(Er,i)},()=>e.forEach(o=>o())]}function lv(i,e){let t=()=>{},n=_c[e.type]||t,[r,s]=ag(i);Zm(i,e.original,s);let a=()=>{i._x_ignore||i._x_ignoreSelf||(n.inline&&n.inline(i,e,r),n=n.bind(n,i,e,r),dh?ia.get(sg).push(n):n())};return a.runCleanups=s,a}var og=(i,e)=>({name:t,value:n})=>(t.startsWith(i)&&(t=t.replace(i,e)),{name:t,value:n}),cg=i=>i;function lg(i=()=>{}){return({name:e,value:t})=>{let{name:n,value:r}=ug.reduce((s,a)=>a(s),{name:e,value:t});return n!==e&&i(n,e),{name:n,value:r}}}var ug=[];function rf(i){ug.push(i)}function hg({name:i}){return fg().test(i)}var fg=()=>new RegExp(`^${tf}([^:^.]+)\\b`);function uv(i,e){return({name:t,value:n})=>{let r=t.match(fg()),s=t.match(/:([a-zA-Z0-9\-_:]+)/),a=t.match(/\.[^.\]]+(?=[^\]]*$)/g)||[],o=e||i[t]||t;return{type:r?r[1]:null,value:s?s[1]:null,modifiers:a.map(c=>c.replace(".","")),expression:n,original:o}}}var ph="DEFAULT",vr=["ignore","ref","data","id","anchor","bind","init","for","model","modelable","transition","show","if",ph,"teleport"];function hv(i,e){let t=vr.indexOf(i.type)===-1?ph:i.type,n=vr.indexOf(e.type)===-1?ph:e.type;return vr.indexOf(t)-vr.indexOf(n)}function aa(i,e,t={}){i.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0,cancelable:!0}))}function ki(i,e){if(typeof ShadowRoot=="function"&&i instanceof ShadowRoot){Array.from(i.children).forEach(r=>ki(r,e));return}let t=!1;if(e(i,()=>t=!0),t)return;let n=i.firstElementChild;for(;n;)ki(n,e),n=n.nextElementSibling}function An(i,...e){console.warn(`Alpine Warning: ${i}`,...e)}var vd=!1;function fv(){vd&&An("Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems."),vd=!0,document.body||An("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"),aa(document,"alpine:init"),aa(document,"alpine:initializing"),jh(),Yx(e=>di(e,ki)),Kh(e=>vg(e)),Ym((e,t)=>{nf(e,t).forEach(n=>n())});let i=e=>!ll(e.parentElement,!0);Array.from(document.querySelectorAll(mg().join(","))).filter(i).forEach(e=>{di(e)}),aa(document,"alpine:initialized"),setTimeout(()=>{mv()})}var sf=[],dg=[];function pg(){return sf.map(i=>i())}function mg(){return sf.concat(dg).map(i=>i())}function gg(i){sf.push(i)}function _g(i){dg.push(i)}function ll(i,e=!1){return Xa(i,t=>{if((e?mg():pg()).some(r=>t.matches(r)))return!0})}function Xa(i,e){if(i){if(e(i))return i;if(i._x_teleportBack&&(i=i._x_teleportBack),!!i.parentElement)return Xa(i.parentElement,e)}}function dv(i){return pg().some(e=>i.matches(e))}var xg=[];function pv(i){xg.push(i)}function di(i,e=ki,t=()=>{}){cv(()=>{e(i,(n,r)=>{t(n,r),xg.forEach(s=>s(n,r)),nf(n,n.attributes).forEach(s=>s()),n._x_ignore&&r()})})}function vg(i,e=ki){e(i,t=>{Km(t),Zx(t)})}function mv(){[["ui","dialog",["[x-dialog], [x-popover]"]],["anchor","anchor",["[x-anchor]"]],["sort","sort",["[x-sort]"]]].forEach(([e,t,n])=>{ov(t)||n.some(r=>{if(document.querySelector(r))return An(`found "${r}", but missing ${e} plugin`),!0})})}var mh=[],af=!1;function of(i=()=>{}){return queueMicrotask(()=>{af||setTimeout(()=>{gh()})}),new Promise(e=>{mh.push(()=>{i(),e()})})}function gh(){for(af=!1;mh.length;)mh.shift()()}function gv(){af=!0}function cf(i,e){return Array.isArray(e)?yd(i,e.join(" ")):typeof e=="object"&&e!==null?_v(i,e):typeof e=="function"?cf(i,e()):yd(i,e)}function yd(i,e){let t=r=>r.split(" ").filter(s=>!i.classList.contains(s)).filter(Boolean),n=r=>(i.classList.add(...r),()=>{i.classList.remove(...r)});return e=e===!0?e="":e||"",n(t(e))}function _v(i,e){let t=o=>o.split(" ").filter(Boolean),n=Object.entries(e).flatMap(([o,c])=>c?t(o):!1).filter(Boolean),r=Object.entries(e).flatMap(([o,c])=>c?!1:t(o)).filter(Boolean),s=[],a=[];return r.forEach(o=>{i.classList.contains(o)&&(i.classList.remove(o),a.push(o))}),n.forEach(o=>{i.classList.contains(o)||(i.classList.add(o),s.push(o))}),()=>{a.forEach(o=>i.classList.add(o)),s.forEach(o=>i.classList.remove(o))}}function ul(i,e){return typeof e=="object"&&e!==null?xv(i,e):vv(i,e)}function xv(i,e){let t={};return Object.entries(e).forEach(([n,r])=>{t[n]=i.style[n],n.startsWith("--")||(n=yv(n)),i.style.setProperty(n,r)}),setTimeout(()=>{i.style.length===0&&i.removeAttribute("style")}),()=>{ul(i,t)}}function vv(i,e){let t=i.getAttribute("style",e);return i.setAttribute("style",e),()=>{i.setAttribute("style",t||"")}}function yv(i){return i.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function _h(i,e=()=>{}){let t=!1;return function(){t?e.apply(this,arguments):(t=!0,i.apply(this,arguments))}}Ct("transition",(i,{value:e,modifiers:t,expression:n},{evaluate:r})=>{typeof n=="function"&&(n=r(n)),n!==!1&&(!n||typeof n=="boolean"?bv(i,t,e):Mv(i,n,e))});function Mv(i,e,t){yg(i,cf,""),{enter:r=>{i._x_transition.enter.during=r},"enter-start":r=>{i._x_transition.enter.start=r},"enter-end":r=>{i._x_transition.enter.end=r},leave:r=>{i._x_transition.leave.during=r},"leave-start":r=>{i._x_transition.leave.start=r},"leave-end":r=>{i._x_transition.leave.end=r}}[t](e)}function bv(i,e,t){yg(i,ul);let n=!e.includes("in")&&!e.includes("out")&&!t,r=n||e.includes("in")||["enter"].includes(t),s=n||e.includes("out")||["leave"].includes(t);e.includes("in")&&!n&&(e=e.filter((g,v)=>v<e.indexOf("out"))),e.includes("out")&&!n&&(e=e.filter((g,v)=>v>e.indexOf("out")));let a=!e.includes("opacity")&&!e.includes("scale"),o=a||e.includes("opacity"),c=a||e.includes("scale"),l=o?0:1,u=c?Vs(e,"scale",95)/100:1,h=Vs(e,"delay",0)/1e3,f=Vs(e,"origin","center"),d="opacity, transform",p=Vs(e,"duration",150)/1e3,_=Vs(e,"duration",75)/1e3,m="cubic-bezier(0.4, 0.0, 0.2, 1)";r&&(i._x_transition.enter.during={transformOrigin:f,transitionDelay:`${h}s`,transitionProperty:d,transitionDuration:`${p}s`,transitionTimingFunction:m},i._x_transition.enter.start={opacity:l,transform:`scale(${u})`},i._x_transition.enter.end={opacity:1,transform:"scale(1)"}),s&&(i._x_transition.leave.during={transformOrigin:f,transitionDelay:`${h}s`,transitionProperty:d,transitionDuration:`${_}s`,transitionTimingFunction:m},i._x_transition.leave.start={opacity:1,transform:"scale(1)"},i._x_transition.leave.end={opacity:l,transform:`scale(${u})`})}function yg(i,e,t={}){i._x_transition||(i._x_transition={enter:{during:t,start:t,end:t},leave:{during:t,start:t,end:t},in(n=()=>{},r=()=>{}){xh(i,e,{during:this.enter.during,start:this.enter.start,end:this.enter.end},n,r)},out(n=()=>{},r=()=>{}){xh(i,e,{during:this.leave.during,start:this.leave.start,end:this.leave.end},n,r)}})}window.Element.prototype._x_toggleAndCascadeWithTransitions=function(i,e,t,n){const r=document.visibilityState==="visible"?requestAnimationFrame:setTimeout;let s=()=>r(t);if(e){i._x_transition&&(i._x_transition.enter||i._x_transition.leave)?i._x_transition.enter&&(Object.entries(i._x_transition.enter.during).length||Object.entries(i._x_transition.enter.start).length||Object.entries(i._x_transition.enter.end).length)?i._x_transition.in(t):s():i._x_transition?i._x_transition.in(t):s();return}i._x_hidePromise=i._x_transition?new Promise((a,o)=>{i._x_transition.out(()=>{},()=>a(n)),i._x_transitioning&&i._x_transitioning.beforeCancel(()=>o({isFromCancelledTransition:!0}))}):Promise.resolve(n),queueMicrotask(()=>{let a=Mg(i);a?(a._x_hideChildren||(a._x_hideChildren=[]),a._x_hideChildren.push(i)):r(()=>{let o=c=>{let l=Promise.all([c._x_hidePromise,...(c._x_hideChildren||[]).map(o)]).then(([u])=>u==null?void 0:u());return delete c._x_hidePromise,delete c._x_hideChildren,l};o(i).catch(c=>{if(!c.isFromCancelledTransition)throw c})})})};function Mg(i){let e=i.parentNode;if(e)return e._x_hidePromise?e:Mg(e)}function xh(i,e,{during:t,start:n,end:r}={},s=()=>{},a=()=>{}){if(i._x_transitioning&&i._x_transitioning.cancel(),Object.keys(t).length===0&&Object.keys(n).length===0&&Object.keys(r).length===0){s(),a();return}let o,c,l;Sv(i,{start(){o=e(i,n)},during(){c=e(i,t)},before:s,end(){o(),l=e(i,r)},after:a,cleanup(){c(),l()}})}function Sv(i,e){let t,n,r,s=_h(()=>{Rt(()=>{t=!0,n||e.before(),r||(e.end(),gh()),e.after(),i.isConnected&&e.cleanup(),delete i._x_transitioning})});i._x_transitioning={beforeCancels:[],beforeCancel(a){this.beforeCancels.push(a)},cancel:_h(function(){for(;this.beforeCancels.length;)this.beforeCancels.shift()();s()}),finish:s},Rt(()=>{e.start(),e.during()}),gv(),requestAnimationFrame(()=>{if(t)return;let a=Number(getComputedStyle(i).transitionDuration.replace(/,.*/,"").replace("s",""))*1e3,o=Number(getComputedStyle(i).transitionDelay.replace(/,.*/,"").replace("s",""))*1e3;a===0&&(a=Number(getComputedStyle(i).animationDuration.replace("s",""))*1e3),Rt(()=>{e.before()}),n=!0,requestAnimationFrame(()=>{t||(Rt(()=>{e.end()}),gh(),setTimeout(i._x_transitioning.finish,a+o),r=!0)})})}function Vs(i,e,t){if(i.indexOf(e)===-1)return t;const n=i[i.indexOf(e)+1];if(!n||e==="scale"&&isNaN(n))return t;if(e==="duration"||e==="delay"){let r=n.match(/([0-9]+)ms/);if(r)return r[1]}return e==="origin"&&["top","right","left","center","bottom"].includes(i[i.indexOf(e)+2])?[n,i[i.indexOf(e)+2]].join(" "):n}var Vi=!1;function Ji(i,e=()=>{}){return(...t)=>Vi?e(...t):i(...t)}function wv(i){return(...e)=>Vi&&i(...e)}var bg=[];function hl(i){bg.push(i)}function Ev(i,e){bg.forEach(t=>t(i,e)),Vi=!0,Sg(()=>{di(e,(t,n)=>{n(t,()=>{})})}),Vi=!1}var vh=!1;function Av(i,e){e._x_dataStack||(e._x_dataStack=i._x_dataStack),Vi=!0,vh=!0,Sg(()=>{Tv(e)}),Vi=!1,vh=!1}function Tv(i){let e=!1;di(i,(n,r)=>{ki(n,(s,a)=>{if(e&&dv(s))return a();e=!0,r(s,a)})})}function Sg(i){let e=zr;xd((t,n)=>{let r=e(t);return Ls(r),()=>{}}),i(),xd(e)}function wg(i,e,t,n=[]){switch(i._x_bindings||(i._x_bindings=Is({})),i._x_bindings[e]=t,e=n.includes("camel")?Uv(e):e,e){case"value":Cv(i,t);break;case"style":Pv(i,t);break;case"class":Rv(i,t);break;case"selected":case"checked":Iv(i,e,t);break;default:Eg(i,e,t);break}}function Cv(i,e){if(i.type==="radio")i.attributes.value===void 0&&(i.value=e),window.fromModel&&(typeof e=="boolean"?i.checked=uc(i.value)===e:i.checked=Md(i.value,e));else if(i.type==="checkbox")Number.isInteger(e)?i.value=e:!Array.isArray(e)&&typeof e!="boolean"&&![null,void 0].includes(e)?i.value=String(e):Array.isArray(e)?i.checked=e.some(t=>Md(t,i.value)):i.checked=!!e;else if(i.tagName==="SELECT")Nv(i,e);else{if(i.value===e)return;i.value=e===void 0?"":e}}function Rv(i,e){i._x_undoAddedClasses&&i._x_undoAddedClasses(),i._x_undoAddedClasses=cf(i,e)}function Pv(i,e){i._x_undoAddedStyles&&i._x_undoAddedStyles(),i._x_undoAddedStyles=ul(i,e)}function Iv(i,e,t){Eg(i,e,t),Dv(i,e,t)}function Eg(i,e,t){[null,void 0,!1].includes(t)&&Ov(e)?i.removeAttribute(e):(Ag(e)&&(t=e),Lv(i,e,t))}function Lv(i,e,t){i.getAttribute(e)!=t&&i.setAttribute(e,t)}function Dv(i,e,t){i[e]!==t&&(i[e]=t)}function Nv(i,e){const t=[].concat(e).map(n=>n+"");Array.from(i.options).forEach(n=>{n.selected=t.includes(n.value)})}function Uv(i){return i.toLowerCase().replace(/-(\w)/g,(e,t)=>t.toUpperCase())}function Md(i,e){return i==e}function uc(i){return[1,"1","true","on","yes",!0].includes(i)?!0:[0,"0","false","off","no",!1].includes(i)?!1:i?!!i:null}function Ag(i){return["disabled","checked","required","readonly","open","selected","autofocus","itemscope","multiple","novalidate","allowfullscreen","allowpaymentrequest","formnovalidate","autoplay","controls","loop","muted","playsinline","default","ismap","reversed","async","defer","nomodule"].includes(i)}function Ov(i){return!["aria-pressed","aria-checked","aria-expanded","aria-selected"].includes(i)}function Fv(i,e,t){return i._x_bindings&&i._x_bindings[e]!==void 0?i._x_bindings[e]:Tg(i,e,t)}function Bv(i,e,t,n=!0){if(i._x_bindings&&i._x_bindings[e]!==void 0)return i._x_bindings[e];if(i._x_inlineBindings&&i._x_inlineBindings[e]!==void 0){let r=i._x_inlineBindings[e];return r.extract=n,tg(()=>Er(i,r.expression))}return Tg(i,e,t)}function Tg(i,e,t){let n=i.getAttribute(e);return n===null?typeof t=="function"?t():t:n===""?!0:Ag(e)?!![e,"true"].includes(n):n}function Cg(i,e){var t;return function(){var n=this,r=arguments,s=function(){t=null,i.apply(n,r)};clearTimeout(t),t=setTimeout(s,e)}}function Rg(i,e){let t;return function(){let n=this,r=arguments;t||(i.apply(n,r),t=!0,setTimeout(()=>t=!1,e))}}function Pg({get:i,set:e},{get:t,set:n}){let r=!0,s,a=zr(()=>{let o=i(),c=t();if(r)n(lu(o)),r=!1;else{let l=JSON.stringify(o),u=JSON.stringify(c);l!==s?n(lu(o)):l!==u&&e(lu(c))}s=JSON.stringify(i()),JSON.stringify(t())});return()=>{Ls(a)}}function lu(i){return typeof i=="object"?JSON.parse(JSON.stringify(i)):i}function zv(i){(Array.isArray(i)?i:[i]).forEach(t=>t(qa))}var mr={},bd=!1;function kv(i,e){if(bd||(mr=Is(mr),bd=!0),e===void 0)return mr[i];mr[i]=e,typeof e=="object"&&e!==null&&e.hasOwnProperty("init")&&typeof e.init=="function"&&mr[i].init(),jm(mr[i])}function Vv(){return mr}var Ig={};function Hv(i,e){let t=typeof e!="function"?()=>e:e;return i instanceof Element?Lg(i,t()):(Ig[i]=t,()=>{})}function Gv(i){return Object.entries(Ig).forEach(([e,t])=>{Object.defineProperty(i,e,{get(){return(...n)=>t(...n)}})}),i}function Lg(i,e,t){let n=[];for(;n.length;)n.pop()();let r=Object.entries(e).map(([a,o])=>({name:a,value:o})),s=rg(r);return r=r.map(a=>s.find(o=>o.name===a.name)?{name:`x-bind:${a.name}`,value:`"${a.value}"`}:a),nf(i,r,t).map(a=>{n.push(a.runCleanups),a()}),()=>{for(;n.length;)n.pop()()}}var Dg={};function Wv(i,e){Dg[i]=e}function Xv(i,e){return Object.entries(Dg).forEach(([t,n])=>{Object.defineProperty(i,t,{get(){return(...r)=>n.bind(e)(...r)},enumerable:!1})}),i}var qv={get reactive(){return Is},get release(){return Ls},get effect(){return zr},get raw(){return Hm},version:"3.14.1",flushAndStopDeferringMutations:$x,dontAutoEvaluateFunctions:tg,disableEffectScheduling:Wx,startObservingMutations:jh,stopObservingMutations:Jm,setReactivityEngine:Xx,onAttributeRemoved:Zm,onAttributesAdded:Ym,closestDataStack:Es,skipDuringClone:Ji,onlyDuringClone:wv,addRootSelector:gg,addInitSelector:_g,interceptClone:hl,addScopeToNode:Ga,deferMutations:Jx,mapAttributes:rf,evaluateLater:jt,interceptInit:pv,setEvaluator:nv,mergeProxies:Wa,extractProp:Bv,findClosest:Xa,onElRemoved:Kh,closestRoot:ll,destroyTree:vg,interceptor:Qm,transition:xh,setStyles:ul,mutateDom:Rt,directive:Ct,entangle:Pg,throttle:Rg,debounce:Cg,evaluate:Er,initTree:di,nextTick:of,prefixed:Ds,prefix:av,plugin:zv,magic:Fn,store:kv,start:fv,clone:Av,cloneNode:Ev,bound:Fv,$data:$m,watch:Gm,walk:ki,data:Wv,bind:Hv},qa=qv;function Yv(i,e){const t=Object.create(null),n=i.split(",");for(let r=0;r<n.length;r++)t[n[r]]=!0;return r=>!!t[r]}var Zv=Object.freeze({}),Kv=Object.prototype.hasOwnProperty,fl=(i,e)=>Kv.call(i,e),Ar=Array.isArray,oa=i=>Ng(i)==="[object Map]",Jv=i=>typeof i=="string",lf=i=>typeof i=="symbol",dl=i=>i!==null&&typeof i=="object",$v=Object.prototype.toString,Ng=i=>$v.call(i),Ug=i=>Ng(i).slice(8,-1),uf=i=>Jv(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,jv=i=>{const e=Object.create(null);return t=>e[t]||(e[t]=i(t))},Qv=jv(i=>i.charAt(0).toUpperCase()+i.slice(1)),Og=(i,e)=>i!==e&&(i===i||e===e),yh=new WeakMap,Hs=[],Hn,Tr=Symbol("iterate"),Mh=Symbol("Map key iterate");function ey(i){return i&&i._isEffect===!0}function ty(i,e=Zv){ey(i)&&(i=i.raw);const t=ry(i,e);return e.lazy||t(),t}function ny(i){i.active&&(Fg(i),i.options.onStop&&i.options.onStop(),i.active=!1)}var iy=0;function ry(i,e){const t=function(){if(!t.active)return i();if(!Hs.includes(t)){Fg(t);try{return ay(),Hs.push(t),Hn=t,i()}finally{Hs.pop(),Bg(),Hn=Hs[Hs.length-1]}}};return t.id=iy++,t.allowRecurse=!!e.allowRecurse,t._isEffect=!0,t.active=!0,t.raw=i,t.deps=[],t.options=e,t}function Fg(i){const{deps:e}=i;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(i);e.length=0}}var As=!0,hf=[];function sy(){hf.push(As),As=!1}function ay(){hf.push(As),As=!0}function Bg(){const i=hf.pop();As=i===void 0?!0:i}function Nn(i,e,t){if(!As||Hn===void 0)return;let n=yh.get(i);n||yh.set(i,n=new Map);let r=n.get(t);r||n.set(t,r=new Set),r.has(Hn)||(r.add(Hn),Hn.deps.push(r),Hn.options.onTrack&&Hn.options.onTrack({effect:Hn,target:i,type:e,key:t}))}function Hi(i,e,t,n,r,s){const a=yh.get(i);if(!a)return;const o=new Set,c=u=>{u&&u.forEach(h=>{(h!==Hn||h.allowRecurse)&&o.add(h)})};if(e==="clear")a.forEach(c);else if(t==="length"&&Ar(i))a.forEach((u,h)=>{(h==="length"||h>=n)&&c(u)});else switch(t!==void 0&&c(a.get(t)),e){case"add":Ar(i)?uf(t)&&c(a.get("length")):(c(a.get(Tr)),oa(i)&&c(a.get(Mh)));break;case"delete":Ar(i)||(c(a.get(Tr)),oa(i)&&c(a.get(Mh)));break;case"set":oa(i)&&c(a.get(Tr));break}const l=u=>{u.options.onTrigger&&u.options.onTrigger({effect:u,target:i,key:t,type:e,newValue:n,oldValue:r,oldTarget:s}),u.options.scheduler?u.options.scheduler(u):u()};o.forEach(l)}var oy=Yv("__proto__,__v_isRef,__isVue"),zg=new Set(Object.getOwnPropertyNames(Symbol).map(i=>Symbol[i]).filter(lf)),cy=kg(),ly=kg(!0),Sd=uy();function uy(){const i={};return["includes","indexOf","lastIndexOf"].forEach(e=>{i[e]=function(...t){const n=dt(this);for(let s=0,a=this.length;s<a;s++)Nn(n,"get",s+"");const r=n[e](...t);return r===-1||r===!1?n[e](...t.map(dt)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{i[e]=function(...t){sy();const n=dt(this)[e].apply(this,t);return Bg(),n}}),i}function kg(i=!1,e=!1){return function(n,r,s){if(r==="__v_isReactive")return!i;if(r==="__v_isReadonly")return i;if(r==="__v_raw"&&s===(i?e?wy:Wg:e?Sy:Gg).get(n))return n;const a=Ar(n);if(!i&&a&&fl(Sd,r))return Reflect.get(Sd,r,s);const o=Reflect.get(n,r,s);return(lf(r)?zg.has(r):oy(r))||(i||Nn(n,"get",r),e)?o:bh(o)?!a||!uf(r)?o.value:o:dl(o)?i?Xg(o):mf(o):o}}var hy=fy();function fy(i=!1){return function(t,n,r,s){let a=t[n];if(!i&&(r=dt(r),a=dt(a),!Ar(t)&&bh(a)&&!bh(r)))return a.value=r,!0;const o=Ar(t)&&uf(n)?Number(n)<t.length:fl(t,n),c=Reflect.set(t,n,r,s);return t===dt(s)&&(o?Og(r,a)&&Hi(t,"set",n,r,a):Hi(t,"add",n,r)),c}}function dy(i,e){const t=fl(i,e),n=i[e],r=Reflect.deleteProperty(i,e);return r&&t&&Hi(i,"delete",e,void 0,n),r}function py(i,e){const t=Reflect.has(i,e);return(!lf(e)||!zg.has(e))&&Nn(i,"has",e),t}function my(i){return Nn(i,"iterate",Ar(i)?"length":Tr),Reflect.ownKeys(i)}var gy={get:cy,set:hy,deleteProperty:dy,has:py,ownKeys:my},_y={get:ly,set(i,e){return console.warn(`Set operation on key "${String(e)}" failed: target is readonly.`,i),!0},deleteProperty(i,e){return console.warn(`Delete operation on key "${String(e)}" failed: target is readonly.`,i),!0}},ff=i=>dl(i)?mf(i):i,df=i=>dl(i)?Xg(i):i,pf=i=>i,pl=i=>Reflect.getPrototypeOf(i);function oo(i,e,t=!1,n=!1){i=i.__v_raw;const r=dt(i),s=dt(e);e!==s&&!t&&Nn(r,"get",e),!t&&Nn(r,"get",s);const{has:a}=pl(r),o=n?pf:t?df:ff;if(a.call(r,e))return o(i.get(e));if(a.call(r,s))return o(i.get(s));i!==r&&i.get(e)}function co(i,e=!1){const t=this.__v_raw,n=dt(t),r=dt(i);return i!==r&&!e&&Nn(n,"has",i),!e&&Nn(n,"has",r),i===r?t.has(i):t.has(i)||t.has(r)}function lo(i,e=!1){return i=i.__v_raw,!e&&Nn(dt(i),"iterate",Tr),Reflect.get(i,"size",i)}function wd(i){i=dt(i);const e=dt(this);return pl(e).has.call(e,i)||(e.add(i),Hi(e,"add",i,i)),this}function Ed(i,e){e=dt(e);const t=dt(this),{has:n,get:r}=pl(t);let s=n.call(t,i);s?Hg(t,n,i):(i=dt(i),s=n.call(t,i));const a=r.call(t,i);return t.set(i,e),s?Og(e,a)&&Hi(t,"set",i,e,a):Hi(t,"add",i,e),this}function Ad(i){const e=dt(this),{has:t,get:n}=pl(e);let r=t.call(e,i);r?Hg(e,t,i):(i=dt(i),r=t.call(e,i));const s=n?n.call(e,i):void 0,a=e.delete(i);return r&&Hi(e,"delete",i,void 0,s),a}function Td(){const i=dt(this),e=i.size!==0,t=oa(i)?new Map(i):new Set(i),n=i.clear();return e&&Hi(i,"clear",void 0,void 0,t),n}function uo(i,e){return function(n,r){const s=this,a=s.__v_raw,o=dt(a),c=e?pf:i?df:ff;return!i&&Nn(o,"iterate",Tr),a.forEach((l,u)=>n.call(r,c(l),c(u),s))}}function ho(i,e,t){return function(...n){const r=this.__v_raw,s=dt(r),a=oa(s),o=i==="entries"||i===Symbol.iterator&&a,c=i==="keys"&&a,l=r[i](...n),u=t?pf:e?df:ff;return!e&&Nn(s,"iterate",c?Mh:Tr),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:o?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Ai(i){return function(...e){{const t=e[0]?`on key "${e[0]}" `:"";console.warn(`${Qv(i)} operation ${t}failed: target is readonly.`,dt(this))}return i==="delete"?!1:this}}function xy(){const i={get(s){return oo(this,s)},get size(){return lo(this)},has:co,add:wd,set:Ed,delete:Ad,clear:Td,forEach:uo(!1,!1)},e={get(s){return oo(this,s,!1,!0)},get size(){return lo(this)},has:co,add:wd,set:Ed,delete:Ad,clear:Td,forEach:uo(!1,!0)},t={get(s){return oo(this,s,!0)},get size(){return lo(this,!0)},has(s){return co.call(this,s,!0)},add:Ai("add"),set:Ai("set"),delete:Ai("delete"),clear:Ai("clear"),forEach:uo(!0,!1)},n={get(s){return oo(this,s,!0,!0)},get size(){return lo(this,!0)},has(s){return co.call(this,s,!0)},add:Ai("add"),set:Ai("set"),delete:Ai("delete"),clear:Ai("clear"),forEach:uo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{i[s]=ho(s,!1,!1),t[s]=ho(s,!0,!1),e[s]=ho(s,!1,!0),n[s]=ho(s,!0,!0)}),[i,t,e,n]}var[vy,yy,$P,jP]=xy();function Vg(i,e){const t=i?yy:vy;return(n,r,s)=>r==="__v_isReactive"?!i:r==="__v_isReadonly"?i:r==="__v_raw"?n:Reflect.get(fl(t,r)&&r in n?t:n,r,s)}var My={get:Vg(!1)},by={get:Vg(!0)};function Hg(i,e,t){const n=dt(t);if(n!==t&&e.call(i,n)){const r=Ug(i);console.warn(`Reactive ${r} contains both the raw and reactive versions of the same object${r==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}var Gg=new WeakMap,Sy=new WeakMap,Wg=new WeakMap,wy=new WeakMap;function Ey(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ay(i){return i.__v_skip||!Object.isExtensible(i)?0:Ey(Ug(i))}function mf(i){return i&&i.__v_isReadonly?i:qg(i,!1,gy,My,Gg)}function Xg(i){return qg(i,!0,_y,by,Wg)}function qg(i,e,t,n,r){if(!dl(i))return console.warn(`value cannot be made reactive: ${String(i)}`),i;if(i.__v_raw&&!(e&&i.__v_isReactive))return i;const s=r.get(i);if(s)return s;const a=Ay(i);if(a===0)return i;const o=new Proxy(i,a===2?n:t);return r.set(i,o),o}function dt(i){return i&&dt(i.__v_raw)||i}function bh(i){return!!(i&&i.__v_isRef===!0)}Fn("nextTick",()=>of);Fn("dispatch",i=>aa.bind(aa,i));Fn("watch",(i,{evaluateLater:e,cleanup:t})=>(n,r)=>{let s=e(n),o=Gm(()=>{let c;return s(l=>c=l),c},r);t(o)});Fn("store",Vv);Fn("data",i=>$m(i));Fn("root",i=>ll(i));Fn("refs",i=>(i._x_refs_proxy||(i._x_refs_proxy=Wa(Ty(i))),i._x_refs_proxy));function Ty(i){let e=[];return Xa(i,t=>{t._x_refs&&e.push(t._x_refs)}),e}var uu={};function Yg(i){return uu[i]||(uu[i]=0),++uu[i]}function Cy(i,e){return Xa(i,t=>{if(t._x_ids&&t._x_ids[e])return!0})}function Ry(i,e){i._x_ids||(i._x_ids={}),i._x_ids[e]||(i._x_ids[e]=Yg(e))}Fn("id",(i,{cleanup:e})=>(t,n=null)=>{let r=`${t}${n?`-${n}`:""}`;return Py(i,r,e,()=>{let s=Cy(i,t),a=s?s._x_ids[t]:Yg(t);return n?`${t}-${a}-${n}`:`${t}-${a}`})});hl((i,e)=>{i._x_id&&(e._x_id=i._x_id)});function Py(i,e,t,n){if(i._x_id||(i._x_id={}),i._x_id[e])return i._x_id[e];let r=n();return i._x_id[e]=r,t(()=>{delete i._x_id[e]}),r}Fn("el",i=>i);Zg("Focus","focus","focus");Zg("Persist","persist","persist");function Zg(i,e,t){Fn(e,n=>An(`You can't use [$${e}] without first installing the "${i}" plugin here: https://alpinejs.dev/plugins/${t}`,n))}Ct("modelable",(i,{expression:e},{effect:t,evaluateLater:n,cleanup:r})=>{let s=n(e),a=()=>{let u;return s(h=>u=h),u},o=n(`${e} = __placeholder`),c=u=>o(()=>{},{scope:{__placeholder:u}}),l=a();c(l),queueMicrotask(()=>{if(!i._x_model)return;i._x_removeModelListeners.default();let u=i._x_model.get,h=i._x_model.set,f=Pg({get(){return u()},set(d){h(d)}},{get(){return a()},set(d){c(d)}});r(f)})});Ct("teleport",(i,{modifiers:e,expression:t},{cleanup:n})=>{i.tagName.toLowerCase()!=="template"&&An("x-teleport can only be used on a <template> tag",i);let r=Cd(t),s=i.content.cloneNode(!0).firstElementChild;i._x_teleport=s,s._x_teleportBack=i,i.setAttribute("data-teleport-template",!0),s.setAttribute("data-teleport-target",!0),i._x_forwardEvents&&i._x_forwardEvents.forEach(o=>{s.addEventListener(o,c=>{c.stopPropagation(),i.dispatchEvent(new c.constructor(c.type,c))})}),Ga(s,{},i);let a=(o,c,l)=>{l.includes("prepend")?c.parentNode.insertBefore(o,c):l.includes("append")?c.parentNode.insertBefore(o,c.nextSibling):c.appendChild(o)};Rt(()=>{a(s,r,e),Ji(()=>{di(s),s._x_ignore=!0})()}),i._x_teleportPutBack=()=>{let o=Cd(t);Rt(()=>{a(i._x_teleport,o,e)})},n(()=>s.remove())});var Iy=document.createElement("div");function Cd(i){let e=Ji(()=>document.querySelector(i),()=>Iy)();return e||An(`Cannot find x-teleport element for selector: "${i}"`),e}var Kg=()=>{};Kg.inline=(i,{modifiers:e},{cleanup:t})=>{e.includes("self")?i._x_ignoreSelf=!0:i._x_ignore=!0,t(()=>{e.includes("self")?delete i._x_ignoreSelf:delete i._x_ignore})};Ct("ignore",Kg);Ct("effect",Ji((i,{expression:e},{effect:t})=>{t(jt(i,e))}));function Sh(i,e,t,n){let r=i,s=c=>n(c),a={},o=(c,l)=>u=>l(c,u);if(t.includes("dot")&&(e=Ly(e)),t.includes("camel")&&(e=Dy(e)),t.includes("passive")&&(a.passive=!0),t.includes("capture")&&(a.capture=!0),t.includes("window")&&(r=window),t.includes("document")&&(r=document),t.includes("debounce")){let c=t[t.indexOf("debounce")+1]||"invalid-wait",l=xc(c.split("ms")[0])?Number(c.split("ms")[0]):250;s=Cg(s,l)}if(t.includes("throttle")){let c=t[t.indexOf("throttle")+1]||"invalid-wait",l=xc(c.split("ms")[0])?Number(c.split("ms")[0]):250;s=Rg(s,l)}return t.includes("prevent")&&(s=o(s,(c,l)=>{l.preventDefault(),c(l)})),t.includes("stop")&&(s=o(s,(c,l)=>{l.stopPropagation(),c(l)})),t.includes("once")&&(s=o(s,(c,l)=>{c(l),r.removeEventListener(e,s,a)})),(t.includes("away")||t.includes("outside"))&&(r=document,s=o(s,(c,l)=>{i.contains(l.target)||l.target.isConnected!==!1&&(i.offsetWidth<1&&i.offsetHeight<1||i._x_isShown!==!1&&c(l))})),t.includes("self")&&(s=o(s,(c,l)=>{l.target===i&&c(l)})),(Uy(e)||Jg(e))&&(s=o(s,(c,l)=>{Oy(l,t)||c(l)})),r.addEventListener(e,s,a),()=>{r.removeEventListener(e,s,a)}}function Ly(i){return i.replace(/-/g,".")}function Dy(i){return i.toLowerCase().replace(/-(\w)/g,(e,t)=>t.toUpperCase())}function xc(i){return!Array.isArray(i)&&!isNaN(i)}function Ny(i){return[" ","_"].includes(i)?i:i.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[_\s]/,"-").toLowerCase()}function Uy(i){return["keydown","keyup"].includes(i)}function Jg(i){return["contextmenu","click","mouse"].some(e=>i.includes(e))}function Oy(i,e){let t=e.filter(s=>!["window","document","prevent","stop","once","capture","self","away","outside","passive"].includes(s));if(t.includes("debounce")){let s=t.indexOf("debounce");t.splice(s,xc((t[s+1]||"invalid-wait").split("ms")[0])?2:1)}if(t.includes("throttle")){let s=t.indexOf("throttle");t.splice(s,xc((t[s+1]||"invalid-wait").split("ms")[0])?2:1)}if(t.length===0||t.length===1&&Rd(i.key).includes(t[0]))return!1;const r=["ctrl","shift","alt","meta","cmd","super"].filter(s=>t.includes(s));return t=t.filter(s=>!r.includes(s)),!(r.length>0&&r.filter(a=>((a==="cmd"||a==="super")&&(a="meta"),i[`${a}Key`])).length===r.length&&(Jg(i.type)||Rd(i.key).includes(t[0])))}function Rd(i){if(!i)return[];i=Ny(i);let e={ctrl:"control",slash:"/",space:" ",spacebar:" ",cmd:"meta",esc:"escape",up:"arrow-up",down:"arrow-down",left:"arrow-left",right:"arrow-right",period:".",comma:",",equal:"=",minus:"-",underscore:"_"};return e[i]=i,Object.keys(e).map(t=>{if(e[t]===i)return t}).filter(t=>t)}Ct("model",(i,{modifiers:e,expression:t},{effect:n,cleanup:r})=>{let s=i;e.includes("parent")&&(s=i.parentNode);let a=jt(s,t),o;typeof t=="string"?o=jt(s,`${t} = __placeholder`):typeof t=="function"&&typeof t()=="string"?o=jt(s,`${t()} = __placeholder`):o=()=>{};let c=()=>{let f;return a(d=>f=d),Pd(f)?f.get():f},l=f=>{let d;a(p=>d=p),Pd(d)?d.set(f):o(()=>{},{scope:{__placeholder:f}})};typeof t=="string"&&i.type==="radio"&&Rt(()=>{i.hasAttribute("name")||i.setAttribute("name",t)});var u=i.tagName.toLowerCase()==="select"||["checkbox","radio"].includes(i.type)||e.includes("lazy")?"change":"input";let h=Vi?()=>{}:Sh(i,u,e,f=>{l(hu(i,e,f,c()))});if(e.includes("fill")&&([void 0,null,""].includes(c())||i.type==="checkbox"&&Array.isArray(c())||i.tagName.toLowerCase()==="select"&&i.multiple)&&l(hu(i,e,{target:i},c())),i._x_removeModelListeners||(i._x_removeModelListeners={}),i._x_removeModelListeners.default=h,r(()=>i._x_removeModelListeners.default()),i.form){let f=Sh(i.form,"reset",[],d=>{of(()=>i._x_model&&i._x_model.set(hu(i,e,{target:i},c())))});r(()=>f())}i._x_model={get(){return c()},set(f){l(f)}},i._x_forceModelUpdate=f=>{f===void 0&&typeof t=="string"&&t.match(/\./)&&(f=""),window.fromModel=!0,Rt(()=>wg(i,"value",f)),delete window.fromModel},n(()=>{let f=c();e.includes("unintrusive")&&document.activeElement.isSameNode(i)||i._x_forceModelUpdate(f)})});function hu(i,e,t,n){return Rt(()=>{if(t instanceof CustomEvent&&t.detail!==void 0)return t.detail!==null&&t.detail!==void 0?t.detail:t.target.value;if(i.type==="checkbox")if(Array.isArray(n)){let r=null;return e.includes("number")?r=fu(t.target.value):e.includes("boolean")?r=uc(t.target.value):r=t.target.value,t.target.checked?n.includes(r)?n:n.concat([r]):n.filter(s=>!Fy(s,r))}else return t.target.checked;else{if(i.tagName.toLowerCase()==="select"&&i.multiple)return e.includes("number")?Array.from(t.target.selectedOptions).map(r=>{let s=r.value||r.text;return fu(s)}):e.includes("boolean")?Array.from(t.target.selectedOptions).map(r=>{let s=r.value||r.text;return uc(s)}):Array.from(t.target.selectedOptions).map(r=>r.value||r.text);{let r;return i.type==="radio"?t.target.checked?r=t.target.value:r=n:r=t.target.value,e.includes("number")?fu(r):e.includes("boolean")?uc(r):e.includes("trim")?r.trim():r}}})}function fu(i){let e=i?parseFloat(i):null;return By(e)?e:i}function Fy(i,e){return i==e}function By(i){return!Array.isArray(i)&&!isNaN(i)}function Pd(i){return i!==null&&typeof i=="object"&&typeof i.get=="function"&&typeof i.set=="function"}Ct("cloak",i=>queueMicrotask(()=>Rt(()=>i.removeAttribute(Ds("cloak")))));_g(()=>`[${Ds("init")}]`);Ct("init",Ji((i,{expression:e},{evaluate:t})=>typeof e=="string"?!!e.trim()&&t(e,{},!1):t(e,{},!1)));Ct("text",(i,{expression:e},{effect:t,evaluateLater:n})=>{let r=n(e);t(()=>{r(s=>{Rt(()=>{i.textContent=s})})})});Ct("html",(i,{expression:e},{effect:t,evaluateLater:n})=>{let r=n(e);t(()=>{r(s=>{Rt(()=>{i.innerHTML=s,i._x_ignoreSelf=!0,di(i),delete i._x_ignoreSelf})})})});rf(og(":",cg(Ds("bind:"))));var $g=(i,{value:e,modifiers:t,expression:n,original:r},{effect:s,cleanup:a})=>{if(!e){let c={};Gv(c),jt(i,n)(u=>{Lg(i,u,r)},{scope:c});return}if(e==="key")return zy(i,n);if(i._x_inlineBindings&&i._x_inlineBindings[e]&&i._x_inlineBindings[e].extract)return;let o=jt(i,n);s(()=>o(c=>{c===void 0&&typeof n=="string"&&n.match(/\./)&&(c=""),Rt(()=>wg(i,e,c,t))})),a(()=>{i._x_undoAddedClasses&&i._x_undoAddedClasses(),i._x_undoAddedStyles&&i._x_undoAddedStyles()})};$g.inline=(i,{value:e,modifiers:t,expression:n})=>{e&&(i._x_inlineBindings||(i._x_inlineBindings={}),i._x_inlineBindings[e]={expression:n,extract:!1})};Ct("bind",$g);function zy(i,e){i._x_keyExpression=e}gg(()=>`[${Ds("data")}]`);Ct("data",(i,{expression:e},{cleanup:t})=>{if(ky(i))return;e=e===""?"{}":e;let n={};fh(n,i);let r={};Xv(r,n);let s=Er(i,e,{scope:r});(s===void 0||s===!0)&&(s={}),fh(s,i);let a=Is(s);jm(a);let o=Ga(i,a);a.init&&Er(i,a.init),t(()=>{a.destroy&&Er(i,a.destroy),o()})});hl((i,e)=>{i._x_dataStack&&(e._x_dataStack=i._x_dataStack,e.setAttribute("data-has-alpine-state",!0))});function ky(i){return Vi?vh?!0:i.hasAttribute("data-has-alpine-state"):!1}Ct("show",(i,{modifiers:e,expression:t},{effect:n})=>{let r=jt(i,t);i._x_doHide||(i._x_doHide=()=>{Rt(()=>{i.style.setProperty("display","none",e.includes("important")?"important":void 0)})}),i._x_doShow||(i._x_doShow=()=>{Rt(()=>{i.style.length===1&&i.style.display==="none"?i.removeAttribute("style"):i.style.removeProperty("display")})});let s=()=>{i._x_doHide(),i._x_isShown=!1},a=()=>{i._x_doShow(),i._x_isShown=!0},o=()=>setTimeout(a),c=_h(h=>h?a():s(),h=>{typeof i._x_toggleAndCascadeWithTransitions=="function"?i._x_toggleAndCascadeWithTransitions(i,h,a,s):h?o():s()}),l,u=!0;n(()=>r(h=>{!u&&h===l||(e.includes("immediate")&&(h?o():s()),c(h),l=h,u=!1)}))});Ct("for",(i,{expression:e},{effect:t,cleanup:n})=>{let r=Hy(e),s=jt(i,r.items),a=jt(i,i._x_keyExpression||"index");i._x_prevKeys=[],i._x_lookup={},t(()=>Vy(i,r,s,a)),n(()=>{Object.values(i._x_lookup).forEach(o=>o.remove()),delete i._x_prevKeys,delete i._x_lookup})});function Vy(i,e,t,n){let r=a=>typeof a=="object"&&!Array.isArray(a),s=i;t(a=>{Gy(a)&&a>=0&&(a=Array.from(Array(a).keys(),m=>m+1)),a===void 0&&(a=[]);let o=i._x_lookup,c=i._x_prevKeys,l=[],u=[];if(r(a))a=Object.entries(a).map(([m,g])=>{let v=Id(e,g,m,a);n(x=>{u.includes(x)&&An("Duplicate key on x-for",i),u.push(x)},{scope:{index:m,...v}}),l.push(v)});else for(let m=0;m<a.length;m++){let g=Id(e,a[m],m,a);n(v=>{u.includes(v)&&An("Duplicate key on x-for",i),u.push(v)},{scope:{index:m,...g}}),l.push(g)}let h=[],f=[],d=[],p=[];for(let m=0;m<c.length;m++){let g=c[m];u.indexOf(g)===-1&&d.push(g)}c=c.filter(m=>!d.includes(m));let _="template";for(let m=0;m<u.length;m++){let g=u[m],v=c.indexOf(g);if(v===-1)c.splice(m,0,g),h.push([_,m]);else if(v!==m){let x=c.splice(m,1)[0],M=c.splice(v-1,1)[0];c.splice(m,0,M),c.splice(v,0,x),f.push([x,M])}else p.push(g);_=g}for(let m=0;m<d.length;m++){let g=d[m];o[g]._x_effects&&o[g]._x_effects.forEach(Vm),o[g].remove(),o[g]=null,delete o[g]}for(let m=0;m<f.length;m++){let[g,v]=f[m],x=o[g],M=o[v],A=document.createElement("div");Rt(()=>{M||An('x-for ":key" is undefined or invalid',s,v,o),M.after(A),x.after(M),M._x_currentIfEl&&M.after(M._x_currentIfEl),A.before(x),x._x_currentIfEl&&x.after(x._x_currentIfEl),A.remove()}),M._x_refreshXForScope(l[u.indexOf(v)])}for(let m=0;m<h.length;m++){let[g,v]=h[m],x=g==="template"?s:o[g];x._x_currentIfEl&&(x=x._x_currentIfEl);let M=l[v],A=u[v],T=document.importNode(s.content,!0).firstElementChild,w=Is(M);Ga(T,w,s),T._x_refreshXForScope=P=>{Object.entries(P).forEach(([U,y])=>{w[U]=y})},Rt(()=>{x.after(T),Ji(()=>di(T))()}),typeof A=="object"&&An("x-for key cannot be an object, it must be a string or an integer",s),o[A]=T}for(let m=0;m<p.length;m++)o[p[m]]._x_refreshXForScope(l[u.indexOf(p[m])]);s._x_prevKeys=u})}function Hy(i){let e=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,t=/^\s*\(|\)\s*$/g,n=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,r=i.match(n);if(!r)return;let s={};s.items=r[2].trim();let a=r[1].replace(t,"").trim(),o=a.match(e);return o?(s.item=a.replace(e,"").trim(),s.index=o[1].trim(),o[2]&&(s.collection=o[2].trim())):s.item=a,s}function Id(i,e,t,n){let r={};return/^\[.*\]$/.test(i.item)&&Array.isArray(e)?i.item.replace("[","").replace("]","").split(",").map(a=>a.trim()).forEach((a,o)=>{r[a]=e[o]}):/^\{.*\}$/.test(i.item)&&!Array.isArray(e)&&typeof e=="object"?i.item.replace("{","").replace("}","").split(",").map(a=>a.trim()).forEach(a=>{r[a]=e[a]}):r[i.item]=e,i.index&&(r[i.index]=t),i.collection&&(r[i.collection]=n),r}function Gy(i){return!Array.isArray(i)&&!isNaN(i)}function jg(){}jg.inline=(i,{expression:e},{cleanup:t})=>{let n=ll(i);n._x_refs||(n._x_refs={}),n._x_refs[e]=i,t(()=>delete n._x_refs[e])};Ct("ref",jg);Ct("if",(i,{expression:e},{effect:t,cleanup:n})=>{i.tagName.toLowerCase()!=="template"&&An("x-if can only be used on a <template> tag",i);let r=jt(i,e),s=()=>{if(i._x_currentIfEl)return i._x_currentIfEl;let o=i.content.cloneNode(!0).firstElementChild;return Ga(o,{},i),Rt(()=>{i.after(o),Ji(()=>di(o))()}),i._x_currentIfEl=o,i._x_undoIf=()=>{ki(o,c=>{c._x_effects&&c._x_effects.forEach(Vm)}),o.remove(),delete i._x_currentIfEl},o},a=()=>{i._x_undoIf&&(i._x_undoIf(),delete i._x_undoIf)};t(()=>r(o=>{o?s():a()})),n(()=>i._x_undoIf&&i._x_undoIf())});Ct("id",(i,{expression:e},{evaluate:t})=>{t(e).forEach(r=>Ry(i,r))});hl((i,e)=>{i._x_ids&&(e._x_ids=i._x_ids)});rf(og("@",cg(Ds("on:"))));Ct("on",Ji((i,{value:e,modifiers:t,expression:n},{cleanup:r})=>{let s=n?jt(i,n):()=>{};i.tagName.toLowerCase()==="template"&&(i._x_forwardEvents||(i._x_forwardEvents=[]),i._x_forwardEvents.includes(e)||i._x_forwardEvents.push(e));let a=Sh(i,e,t,o=>{s(()=>{},{scope:{$event:o},params:[o]})});r(()=>a())}));ml("Collapse","collapse","collapse");ml("Intersect","intersect","intersect");ml("Focus","trap","focus");ml("Mask","mask","mask");function ml(i,e,t){Ct(e,n=>An(`You can't use [x-${e}] without first installing the "${i}" plugin here: https://alpinejs.dev/plugins/${t}`,n))}qa.setEvaluator(ig);qa.setReactivityEngine({reactive:mf,effect:ty,release:ny,raw:dt});var Wy=qa,Xy=Wy;const qy=async i=>new Promise((e,t)=>{const n=new Image;n.onload=()=>e({width:n.naturalWidth,height:n.naturalHeight}),n.onerror=()=>t(new Error("Failed to load image")),n.src=i}),Yy=()=>{window.Alpine.directive("parallax",(i,{expression:e},{effect:t,cleanup:n})=>{const r=e;i.style.backgroundImage=`url(${r})`,i.style.backgroundAttachment="fixed",i.style.backgroundPosition="center",i.style.backgroundRepeat="no-repeat";const s=.5,a=()=>{const c=-(window.scrollY-i.offsetTop)*s;var l=`translate(${c}px,0) rotate3D(0.5,1,0,${c}deg)`;i.style.transform=l};a();const o=async()=>{const c=window.innerHeight,l=window.innerWidth,u=c*s;try{const{width:h,height:f}=await qy(r),d=h/f;let p=c+u,_=p*d;_<l&&(_=l,p=_/d),i.style.backgroundSize=`${_}px ${p}px`}catch(h){console.error("Error:",h.message)}};t(()=>{o(),window.addEventListener("resize",o),window.addEventListener("scroll",a)}),n(()=>{window.removeEventListener("resize",o),window.removeEventListener("scroll",a)})})};function Ye(){}const gl=i=>i;function wh(i,e){for(const t in e)i[t]=e[t];return i}function Zy(i){return!!i&&(typeof i=="object"||typeof i=="function")&&typeof i.then=="function"}function Qg(i){return i()}function Ld(){return Object.create(null)}function $i(i){i.forEach(Qg)}function kr(i){return typeof i=="function"}function un(i,e){return i!=i?e==e:i!==e||i&&typeof i=="object"||typeof i=="function"}let fo;function Ky(i,e){return i===e?!0:(fo||(fo=document.createElement("a")),fo.href=e,i===fo.href)}function Jy(i){return Object.keys(i).length===0}function e_(i,...e){if(i==null){for(const n of e)n(void 0);return Ye}const t=i.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function zi(i,e,t){i.$$.on_destroy.push(e_(e,t))}function vi(i,e,t,n){if(i){const r=t_(i,e,t,n);return i[0](r)}}function t_(i,e,t,n){return i[1]&&n?wh(t.ctx.slice(),i[1](n(e))):t.ctx}function yi(i,e,t,n){if(i[2]&&n){const r=i[2](n(t));if(e.dirty===void 0)return r;if(typeof r=="object"){const s=[],a=Math.max(e.dirty.length,r.length);for(let o=0;o<a;o+=1)s[o]=e.dirty[o]|r[o];return s}return e.dirty|r}return e.dirty}function Mi(i,e,t,n,r,s){if(r){const a=t_(e,t,n,s);i.p(a,r)}}function bi(i){if(i.ctx.length>32){const e=[],t=i.ctx.length/32;for(let n=0;n<t;n++)e[n]=-1;return e}return-1}function Dd(i){const e={};for(const t in i)t[0]!=="$"&&(e[t]=i[t]);return e}function Nd(i,e){const t={};e=new Set(e);for(const n in i)!e.has(n)&&n[0]!=="$"&&(t[n]=i[n]);return t}function $y(i){return i&&kr(i.destroy)?i.destroy:Ye}const n_=typeof window<"u";let xa=n_?()=>window.performance.now():()=>Date.now(),gf=n_?i=>requestAnimationFrame(i):Ye;const bs=new Set;function i_(i){bs.forEach(e=>{e.c(i)||(bs.delete(e),e.f())}),bs.size!==0&&gf(i_)}function _l(i){let e;return bs.size===0&&gf(i_),{promise:new Promise(t=>{bs.add(e={c:i,f:t})}),abort(){bs.delete(e)}}}let xl=!1;function jy(){xl=!0}function Qy(){xl=!1}function eM(i,e,t,n){for(;i<e;){const r=i+(e-i>>1);t(r)<=n?i=r+1:e=r}return i}function tM(i){if(i.hydrate_init)return;i.hydrate_init=!0;let e=i.childNodes;if(i.nodeName==="HEAD"){const c=[];for(let l=0;l<e.length;l++){const u=e[l];u.claim_order!==void 0&&c.push(u)}e=c}const t=new Int32Array(e.length+1),n=new Int32Array(e.length);t[0]=-1;let r=0;for(let c=0;c<e.length;c++){const l=e[c].claim_order,u=(r>0&&e[t[r]].claim_order<=l?r+1:eM(1,r,f=>e[t[f]].claim_order,l))-1;n[c]=t[u]+1;const h=u+1;t[h]=c,r=Math.max(h,r)}const s=[],a=[];let o=e.length-1;for(let c=t[r]+1;c!=0;c=n[c-1]){for(s.push(e[c-1]);o>=c;o--)a.push(e[o]);o--}for(;o>=0;o--)a.push(e[o]);s.reverse(),a.sort((c,l)=>c.claim_order-l.claim_order);for(let c=0,l=0;c<a.length;c++){for(;l<s.length&&a[c].claim_order>=s[l].claim_order;)l++;const u=l<s.length?s[l]:null;i.insertBefore(a[c],u)}}function r_(i,e){i.appendChild(e)}function s_(i){if(!i)return document;const e=i.getRootNode?i.getRootNode():i.ownerDocument;return e&&e.host?e:i.ownerDocument}function nM(i){const e=yt("style");return e.textContent="/* empty */",iM(s_(i),e),e.sheet}function iM(i,e){return r_(i.head||i,e),e.sheet}function Ut(i,e){if(xl){for(tM(i),(i.actual_end_child===void 0||i.actual_end_child!==null&&i.actual_end_child.parentNode!==i)&&(i.actual_end_child=i.firstChild);i.actual_end_child!==null&&i.actual_end_child.claim_order===void 0;)i.actual_end_child=i.actual_end_child.nextSibling;e!==i.actual_end_child?(e.claim_order!==void 0||e.parentNode!==i)&&i.insertBefore(e,i.actual_end_child):i.actual_end_child=e.nextSibling}else(e.parentNode!==i||e.nextSibling!==null)&&i.appendChild(e)}function lt(i,e,t){xl&&!t?Ut(i,e):(e.parentNode!==i||e.nextSibling!=t)&&i.insertBefore(e,t||null)}function Oe(i){i.parentNode&&i.parentNode.removeChild(i)}function a_(i,e){for(let t=0;t<i.length;t+=1)i[t]&&i[t].d(e)}function yt(i){return document.createElement(i)}function Kn(i){return document.createTextNode(i)}function gn(){return Kn(" ")}function Jn(){return Kn("")}function vc(i,e,t,n){return i.addEventListener(e,t,n),()=>i.removeEventListener(e,t,n)}function ct(i,e,t){t==null?i.removeAttribute(e):i.getAttribute(e)!==t&&i.setAttribute(e,t)}function o_(i){return i.dataset.svelteH}function Bt(i){return Array.from(i.childNodes)}function rM(i){i.claim_info===void 0&&(i.claim_info={last_index:0,total_claimed:0})}function c_(i,e,t,n,r=!1){rM(i);const s=(()=>{for(let a=i.claim_info.last_index;a<i.length;a++){const o=i[a];if(e(o)){const c=t(o);return c===void 0?i.splice(a,1):i[a]=c,r||(i.claim_info.last_index=a),o}}for(let a=i.claim_info.last_index-1;a>=0;a--){const o=i[a];if(e(o)){const c=t(o);return c===void 0?i.splice(a,1):i[a]=c,r?c===void 0&&i.claim_info.last_index--:i.claim_info.last_index=a,o}}return n()})();return s.claim_order=i.claim_info.total_claimed,i.claim_info.total_claimed+=1,s}function sM(i,e,t,n){return c_(i,r=>r.nodeName===e,r=>{const s=[];for(let a=0;a<r.attributes.length;a++){const o=r.attributes[a];t[o.name]||s.push(o.name)}s.forEach(a=>r.removeAttribute(a))},()=>n(e))}function Pt(i,e,t){return sM(i,e,t,yt)}function Gi(i,e){return c_(i,t=>t.nodeType===3,t=>{const n=""+e;if(t.data.startsWith(n)){if(t.data.length!==n.length)return t.splitText(n.length)}else t.data=n},()=>Kn(e),!0)}function _n(i){return Gi(i," ")}function vl(i,e){e=""+e,i.data!==e&&(i.data=e)}function po(i,e,t,n){t==null?i.style.removeProperty(e):i.style.setProperty(e,t,"")}let mo;function aM(){if(mo===void 0){mo=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{mo=!0}}return mo}function l_(i,e){getComputedStyle(i).position==="static"&&(i.style.position="relative");const n=yt("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const r=aM();let s;return r?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",s=vc(window,"message",a=>{a.source===n.contentWindow&&e()})):(n.src="about:blank",n.onload=()=>{s=vc(n.contentWindow,"resize",e),e()}),r_(i,n),()=>{(r||s&&n.contentWindow)&&s(),Oe(n)}}function u_(i,e,{bubbles:t=!1,cancelable:n=!1}={}){return new CustomEvent(i,{detail:e,bubbles:t,cancelable:n})}const yc=new Map;let Mc=0;function oM(i){let e=5381,t=i.length;for(;t--;)e=(e<<5)-e^i.charCodeAt(t);return e>>>0}function cM(i,e){const t={stylesheet:nM(e),rules:{}};return yc.set(i,t),t}function _f(i,e,t,n,r,s,a,o=0){const c=16.666/n;let l=`{
`;for(let m=0;m<=1;m+=c){const g=e+(t-e)*s(m);l+=m*100+`%{${a(g,1-g)}}
`}const u=l+`100% {${a(t,1-t)}}
}`,h=`__svelte_${oM(u)}_${o}`,f=s_(i),{stylesheet:d,rules:p}=yc.get(f)||cM(f,i);p[h]||(p[h]=!0,d.insertRule(`@keyframes ${h} ${u}`,d.cssRules.length));const _=i.style.animation||"";return i.style.animation=`${_?`${_}, `:""}${h} ${n}ms linear ${r}ms 1 both`,Mc+=1,h}function bc(i,e){const t=(i.style.animation||"").split(", "),n=t.filter(e?s=>s.indexOf(e)<0:s=>s.indexOf("__svelte")===-1),r=t.length-n.length;r&&(i.style.animation=n.join(", "),Mc-=r,Mc||lM())}function lM(){gf(()=>{Mc||(yc.forEach(i=>{const{ownerNode:e}=i.stylesheet;e&&Oe(e)}),yc.clear())})}function uM(i,e,t,n){if(!e)return Ye;const r=i.getBoundingClientRect();if(e.left===r.left&&e.right===r.right&&e.top===r.top&&e.bottom===r.bottom)return Ye;const{delay:s=0,duration:a=300,easing:o=gl,start:c=xa()+s,end:l=c+a,tick:u=Ye,css:h}=t(i,{from:e,to:r},n);let f=!0,d=!1,p;function _(){h&&(p=_f(i,0,1,a,s,o,h)),s||(d=!0)}function m(){h&&bc(i,p),f=!1}return _l(g=>{if(!d&&g>=c&&(d=!0),d&&g>=l&&(u(1,0),m()),!f)return!1;if(d){const v=g-c,x=0+1*o(v/a);u(x,1-x)}return!0}),_(),u(0,1),m}function hM(i){const e=getComputedStyle(i);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:t,height:n}=e,r=i.getBoundingClientRect();i.style.position="absolute",i.style.width=t,i.style.height=n,h_(i,r)}}function h_(i,e){const t=i.getBoundingClientRect();if(e.left!==t.left||e.top!==t.top){const n=getComputedStyle(i),r=n.transform==="none"?"":n.transform;i.style.transform=`${r} translate(${e.left-t.left}px, ${e.top-t.top}px)`}}let va;function li(i){va=i}function Si(){if(!va)throw new Error("Function called outside component initialization");return va}function Ya(i){Si().$$.on_mount.push(i)}function fM(i){Si().$$.after_update.push(i)}function Bn(i){Si().$$.on_destroy.push(i)}function dM(){const i=Si();return(e,t,{cancelable:n=!1}={})=>{const r=i.$$.callbacks[e];if(r){const s=u_(e,t,{cancelable:n});return r.slice().forEach(a=>{a.call(i,s)}),!s.defaultPrevented}return!0}}function qn(i,e){return Si().$$.context.set(i,e),e}function pi(i){return Si().$$.context.get(i)}const ps=[],Lr=[];let Ss=[];const Eh=[],f_=Promise.resolve();let Ah=!1;function d_(){Ah||(Ah=!0,f_.then(xf))}function p_(){return d_(),f_}function Wi(i){Ss.push(i)}function Th(i){Eh.push(i)}const du=new Set;let qr=0;function xf(){if(qr!==0)return;const i=va;do{try{for(;qr<ps.length;){const e=ps[qr];qr++,li(e),pM(e.$$)}}catch(e){throw ps.length=0,qr=0,e}for(li(null),ps.length=0,qr=0;Lr.length;)Lr.pop()();for(let e=0;e<Ss.length;e+=1){const t=Ss[e];du.has(t)||(du.add(t),t())}Ss.length=0}while(ps.length);for(;Eh.length;)Eh.pop()();Ah=!1,du.clear(),li(i)}function pM(i){if(i.fragment!==null){i.update(),$i(i.before_update);const e=i.dirty;i.dirty=[-1],i.fragment&&i.fragment.p(i.ctx,e),i.after_update.forEach(Wi)}}function mM(i){const e=[],t=[];Ss.forEach(n=>i.indexOf(n)===-1?e.push(n):t.push(n)),t.forEach(n=>n()),Ss=e}let Gs;function m_(){return Gs||(Gs=Promise.resolve(),Gs.then(()=>{Gs=null})),Gs}function Sc(i,e,t){i.dispatchEvent(u_(`${e?"intro":"outro"}${t}`))}const hc=new Set;let Bi;function Xi(){Bi={r:0,c:[],p:Bi}}function qi(){Bi.r||$i(Bi.c),Bi=Bi.p}function ke(i,e){i&&i.i&&(hc.delete(i),i.i(e))}function Xe(i,e,t,n){if(i&&i.o){if(hc.has(i))return;hc.add(i),Bi.c.push(()=>{hc.delete(i),n&&(t&&i.d(1),n())}),i.o(e)}else n&&n()}const g_={duration:0};function gM(i,e,t){const n={direction:"in"};let r=e(i,t,n),s=!1,a,o,c=0;function l(){a&&bc(i,a)}function u(){const{delay:f=0,duration:d=300,easing:p=gl,tick:_=Ye,css:m}=r||g_;m&&(a=_f(i,0,1,d,f,p,m,c++)),_(0,1);const g=xa()+f,v=g+d;o&&o.abort(),s=!0,Wi(()=>Sc(i,!0,"start")),o=_l(x=>{if(s){if(x>=v)return _(1,0),Sc(i,!0,"end"),l(),s=!1;if(x>=g){const M=p((x-g)/d);_(M,1-M)}}return s})}let h=!1;return{start(){h||(h=!0,bc(i),kr(r)?(r=r(n),m_().then(u)):u())},invalidate(){h=!1},end(){s&&(l(),s=!1)}}}function _M(i,e,t){const n={direction:"out"};let r=e(i,t,n),s=!0,a;const o=Bi;o.r+=1;let c;function l(){const{delay:u=0,duration:h=300,easing:f=gl,tick:d=Ye,css:p}=r||g_;p&&(a=_f(i,1,0,h,u,f,p));const _=xa()+u,m=_+h;Wi(()=>Sc(i,!1,"start")),"inert"in i&&(c=i.inert,i.inert=!0),_l(g=>{if(s){if(g>=m)return d(0,1),Sc(i,!1,"end"),--o.r||$i(o.c),!1;if(g>=_){const v=f((g-_)/h);d(1-v,v)}}return s})}return kr(r)?m_().then(()=>{r=r(n),l()}):l(),{end(u){u&&"inert"in i&&(i.inert=c),u&&r.tick&&r.tick(1,0),s&&(a&&bc(i,a),s=!1)}}}function xM(i,e){const t=e.token={};function n(r,s,a,o){if(e.token!==t)return;e.resolved=o;let c=e.ctx;a!==void 0&&(c=c.slice(),c[a]=o);const l=r&&(e.current=r)(c);let u=!1;e.block&&(e.blocks?e.blocks.forEach((h,f)=>{f!==s&&h&&(Xi(),Xe(h,1,1,()=>{e.blocks[f]===h&&(e.blocks[f]=null)}),qi())}):e.block.d(1),l.c(),ke(l,1),l.m(e.mount(),e.anchor),u=!0),e.block=l,e.blocks&&(e.blocks[s]=l),u&&xf()}if(Zy(i)){const r=Si();if(i.then(s=>{li(r),n(e.then,1,e.value,s),li(null)},s=>{if(li(r),n(e.catch,2,e.error,s),li(null),!e.hasCatch)throw s}),e.current!==e.pending)return n(e.pending,0),!0}else{if(e.current!==e.then)return n(e.then,1,e.value,i),!0;e.resolved=i}}function vM(i,e,t){const n=e.slice(),{resolved:r}=i;i.current===i.then&&(n[i.value]=r),i.current===i.catch&&(n[i.error]=r),i.block.p(n,t)}function Yi(i){return(i==null?void 0:i.length)!==void 0?i:Array.from(i)}function __(i,e){Xe(i,1,1,()=>{e.delete(i.key)})}function yM(i,e){i.f(),__(i,e)}function x_(i,e,t,n,r,s,a,o,c,l,u,h){let f=i.length,d=s.length,p=f;const _={};for(;p--;)_[i[p].key]=p;const m=[],g=new Map,v=new Map,x=[];for(p=d;p--;){const w=h(r,s,p),P=t(w);let U=a.get(P);U?x.push(()=>U.p(w,e)):(U=l(P,w),U.c()),g.set(P,m[p]=U),P in _&&v.set(P,Math.abs(p-_[P]))}const M=new Set,A=new Set;function T(w){ke(w,1),w.m(o,u),a.set(w.key,w),u=w.first,d--}for(;f&&d;){const w=m[d-1],P=i[f-1],U=w.key,y=P.key;w===P?(u=w.first,f--,d--):g.has(y)?!a.has(U)||M.has(U)?T(w):A.has(y)?f--:v.get(U)>v.get(y)?(A.add(U),T(w)):(M.add(y),f--):(c(P,a),f--)}for(;f--;){const w=i[f];g.has(w.key)||c(w,a)}for(;d;)T(m[d-1]);return $i(x),m}function Ch(i,e,t){const n=i.$$.props[e];n!==void 0&&(i.$$.bound[n]=t,t(i.$$.ctx[n]))}function Kt(i){i&&i.c()}function Jt(i,e){i&&i.l(e)}function Ht(i,e,t){const{fragment:n,after_update:r}=i.$$;n&&n.m(e,t),Wi(()=>{const s=i.$$.on_mount.map(Qg).filter(kr);i.$$.on_destroy?i.$$.on_destroy.push(...s):$i(s),i.$$.on_mount=[]}),r.forEach(Wi)}function Gt(i,e){const t=i.$$;t.fragment!==null&&(mM(t.after_update),$i(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function MM(i,e){i.$$.dirty[0]===-1&&(ps.push(i),d_(),i.$$.dirty.fill(0)),i.$$.dirty[e/31|0]|=1<<e%31}function Mn(i,e,t,n,r,s,a=null,o=[-1]){const c=va;li(i);const l=i.$$={fragment:null,ctx:[],props:s,update:Ye,not_equal:r,bound:Ld(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:Ld(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};a&&a(l.root);let u=!1;if(l.ctx=t?t(i,e.props||{},(h,f,...d)=>{const p=d.length?d[0]:f;return l.ctx&&r(l.ctx[h],l.ctx[h]=p)&&(!l.skip_bound&&l.bound[h]&&l.bound[h](p),u&&MM(i,h)),f}):[],l.update(),u=!0,$i(l.before_update),l.fragment=n?n(l.ctx):!1,e.target){if(e.hydrate){jy();const h=Bt(e.target);l.fragment&&l.fragment.l(h),h.forEach(Oe)}else l.fragment&&l.fragment.c();e.intro&&ke(i.$$.fragment),Ht(i,e.target,e.anchor),Qy(),xf()}li(c)}class bn{constructor(){pt(this,"$$");pt(this,"$$set")}$destroy(){Gt(this,1),this.$destroy=Ye}$on(e,t){if(!kr(t))return Ye;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const r=n.indexOf(t);r!==-1&&n.splice(r,1)}}$set(e){this.$$set&&!Jy(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const bM="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(bM);const Yr=[];function v_(i,e){return{subscribe:vn(i,e).subscribe}}function vn(i,e=Ye){let t;const n=new Set;function r(o){if(un(i,o)&&(i=o,t)){const c=!Yr.length;for(const l of n)l[1](),Yr.push(l,i);if(c){for(let l=0;l<Yr.length;l+=2)Yr[l][0](Yr[l+1]);Yr.length=0}}}function s(o){r(o(i))}function a(o,c=Ye){const l=[o,c];return n.add(l),n.size===1&&(t=e(r,s)||Ye),o(i),()=>{n.delete(l),n.size===0&&t&&(t(),t=null)}}return{set:r,update:s,subscribe:a}}function y_(i,e,t){const n=!Array.isArray(i),r=n?[i]:i;if(!r.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const s=e.length<2;return v_(t,(a,o)=>{let c=!1;const l=[];let u=0,h=Ye;const f=()=>{if(u)return;h();const p=e(n?l[0]:l,a,o);s?a(p):h=kr(p)?p:Ye},d=r.map((p,_)=>e_(p,m=>{l[_]=m,u&=~(1<<_),c&&f()},()=>{u|=1<<_}));return c=!0,f(),function(){$i(d),h(),c=!1}})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Za="169",SM={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},wM={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},M_=0,Rh=1,b_=2,EM=3,AM=0,vf=1,yl=2,Vn=3,mi=0,Qt=1,Dn=2,hi=0,Cr=1,Ph=2,Ih=3,Lh=4,S_=5,Fi=100,w_=101,E_=102,A_=103,T_=104,C_=200,R_=201,P_=202,I_=203,wc=204,Ec=205,L_=206,D_=207,N_=208,U_=209,O_=210,F_=211,B_=212,z_=213,k_=214,Ac=0,Tc=1,Cc=2,Dr=3,Rc=4,Pc=5,Ic=6,Lc=7,Ka=0,V_=1,H_=2,fi=0,G_=1,W_=2,X_=3,yf=4,q_=5,Y_=6,Z_=7,Dh="attached",K_="detached",Ml=300,gi=301,Zi=302,ya=303,Ma=304,Ns=306,ba=1e3,on=1001,Sa=1002,Ot=1003,Mf=1004,TM=1004,ms=1005,CM=1005,Tt=1006,ca=1007,RM=1007,Wn=1008,PM=1008,$n=1009,bf=1010,Sf=1011,Ts=1012,bl=1013,_i=1014,cn=1015,Us=1016,Sl=1017,wl=1018,Nr=1020,wf=35902,Ef=1021,Af=1022,$t=1023,Tf=1024,Cf=1025,Rr=1026,Ur=1027,El=1028,Ja=1029,Rf=1030,Al=1031,IM=1032,Tl=1033,la=33776,ua=33777,ha=33778,fa=33779,Dc=35840,Nc=35841,Uc=35842,Oc=35843,Fc=36196,Bc=37492,zc=37496,kc=37808,Vc=37809,Hc=37810,Gc=37811,Wc=37812,Xc=37813,qc=37814,Yc=37815,Zc=37816,Kc=37817,Jc=37818,$c=37819,jc=37820,Qc=37821,da=36492,el=36494,tl=36495,Pf=36283,nl=36284,il=36285,rl=36286,J_=2200,$_=2201,j_=2202,wa=2300,sl=2301,fc=2302,yr=2400,Mr=2401,Ea=2402,Cl=2500,If=2501,LM=0,DM=1,NM=2,Q_=3200,e0=3201,UM=3202,OM=3203,ji=0,t0=1,oi="",En="srgb",wi="srgb-linear",Rl="display-p3",$a="display-p3-linear",Aa="linear",ht="srgb",Ta="rec709",Ca="p3",FM=0,gr=7680,BM=7681,zM=7682,kM=7683,VM=34055,HM=34056,GM=5386,WM=512,XM=513,qM=514,YM=515,ZM=516,KM=517,JM=518,Nh=519,n0=512,i0=513,r0=514,Lf=515,s0=516,a0=517,o0=518,c0=519,Ra=35044,$M=35048,jM=35040,QM=35045,eb=35049,tb=35041,nb=35046,ib=35050,rb=35042,sb="100",Uh="300 es",Xn=2e3,Pa=2001;class jn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ud=1234567;const Pr=Math.PI/180,Cs=180/Math.PI;function xn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[n&255]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]).toLowerCase()}function vt(i,e,t){return Math.max(e,Math.min(t,i))}function Df(i,e){return(i%e+e)%e}function ab(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function ob(i,e,t){return i!==e?(t-i)/(e-i):0}function pa(i,e,t){return(1-t)*i+t*e}function cb(i,e,t,n){return pa(i,e,1-Math.exp(-t*n))}function lb(i,e=1){return e-Math.abs(Df(i,e*2)-e)}function ub(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function hb(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function fb(i,e){return i+Math.floor(Math.random()*(e-i+1))}function db(i,e){return i+Math.random()*(e-i)}function pb(i){return i*(.5-Math.random())}function mb(i){i!==void 0&&(Ud=i);let e=Ud+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function gb(i){return i*Pr}function _b(i){return i*Cs}function xb(i){return(i&i-1)===0&&i!==0}function vb(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function yb(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Mb(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),u=a((e+n)/2),h=s((e-n)/2),f=a((e-n)/2),d=s((n-e)/2),p=a((n-e)/2);switch(r){case"XYX":i.set(o*u,c*h,c*f,o*l);break;case"YZY":i.set(c*f,o*u,c*h,o*l);break;case"ZXZ":i.set(c*h,c*f,o*u,o*l);break;case"XZX":i.set(o*u,c*p,c*d,o*l);break;case"YXY":i.set(c*d,o*u,c*p,o*l);break;case"ZYZ":i.set(c*p,c*d,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Zt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ge(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const bb={DEG2RAD:Pr,RAD2DEG:Cs,generateUUID:xn,clamp:vt,euclideanModulo:Df,mapLinear:ab,inverseLerp:ob,lerp:pa,damp:cb,pingpong:lb,smoothstep:ub,smootherstep:hb,randInt:fb,randFloat:db,randFloatSpread:pb,seededRandom:mb,degToRad:gb,radToDeg:_b,isPowerOfTwo:xb,ceilPowerOfTwo:vb,floorPowerOfTwo:yb,setQuaternionFromProperEuler:Mb,normalize:Ge,denormalize:Zt};class K{constructor(e=0,t=0){K.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,t,n,r,s,a,o,c,l){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l)}set(e,t,n,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],d=n[5],p=n[8],_=r[0],m=r[3],g=r[6],v=r[1],x=r[4],M=r[7],A=r[2],T=r[5],w=r[8];return s[0]=a*_+o*v+c*A,s[3]=a*m+o*x+c*T,s[6]=a*g+o*M+c*w,s[1]=l*_+u*v+h*A,s[4]=l*m+u*x+h*T,s[7]=l*g+u*M+h*w,s[2]=f*_+d*v+p*A,s[5]=f*m+d*x+p*T,s[8]=f*g+d*M+p*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*s*u+n*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,f=o*c-u*s,d=l*s-a*c,p=t*h+n*f+r*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return e[0]=h*_,e[1]=(r*l-u*n)*_,e[2]=(o*n-r*a)*_,e[3]=f*_,e[4]=(u*t-r*c)*_,e[5]=(r*s-o*t)*_,e[6]=d*_,e[7]=(n*c-l*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(pu.makeScale(e,t)),this}rotate(e){return this.premultiply(pu.makeRotation(-e)),this}translate(e,t){return this.premultiply(pu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const pu=new He;function l0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}const Sb={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function gs(i,e){return new Sb[i](e)}function Ia(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function u0(){const i=Ia("canvas");return i.style.display="block",i}const Od={};function dc(i){i in Od||(Od[i]=!0,console.warn(i))}function wb(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Eb(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Ab(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Fd=new He().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Bd=new He().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ws={[wi]:{transfer:Aa,primaries:Ta,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[En]:{transfer:ht,primaries:Ta,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[$a]:{transfer:Aa,primaries:Ca,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Bd),fromReference:i=>i.applyMatrix3(Fd)},[Rl]:{transfer:ht,primaries:Ca,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Bd),fromReference:i=>i.applyMatrix3(Fd).convertLinearToSRGB()}},Tb=new Set([wi,$a]),Qe={enabled:!0,_workingColorSpace:wi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Tb.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Ws[e].toReference,r=Ws[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Ws[i].primaries},getTransfer:function(i){return i===oi?Aa:Ws[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(Ws[e].luminanceCoefficients)}};function ws(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function mu(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Zr;class h0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Zr===void 0&&(Zr=Ia("canvas")),Zr.width=e.width,Zr.height=e.height;const n=Zr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Zr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ia("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ws(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ws(t[n]/255)*255):t[n]=ws(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Cb=0;class br{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cb++}),this.uuid=xn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(gu(r[a].image)):s.push(gu(r[a]))}else s=gu(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function gu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?h0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Rb=0;class Mt extends jn{constructor(e=Mt.DEFAULT_IMAGE,t=Mt.DEFAULT_MAPPING,n=on,r=on,s=Tt,a=Wn,o=$t,c=$n,l=Mt.DEFAULT_ANISOTROPY,u=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rb++}),this.uuid=xn(),this.name="",this.source=new br(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new K(0,0),this.repeat=new K(1,1),this.center=new K(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ml)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ba:e.x=e.x-Math.floor(e.x);break;case on:e.x=e.x<0?0:1;break;case Sa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ba:e.y=e.y-Math.floor(e.y);break;case on:e.y=e.y<0?0:1;break;case Sa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Mt.DEFAULT_IMAGE=null;Mt.DEFAULT_MAPPING=Ml;Mt.DEFAULT_ANISOTROPY=1;class et{constructor(e=0,t=0,n=0,r=1){et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],p=c[9],_=c[2],m=c[6],g=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(p+m)<.1&&Math.abs(l+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,M=(d+1)/2,A=(g+1)/2,T=(u+f)/4,w=(h+_)/4,P=(p+m)/4;return x>M&&x>A?x<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(x),r=T/n,s=w/n):M>A?M<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),n=T/r,s=P/r):A<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),n=w/s,r=P/s),this.set(n,r,s,t),this}let v=Math.sqrt((m-p)*(m-p)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(m-p)/v,this.y=(h-_)/v,this.z=(f-u)/v,this.w=Math.acos((l+d+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class f0 extends jn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new et(0,0,e,t),this.scissorTest=!1,this.viewport=new et(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Mt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new br(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Un extends f0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Pl extends Mt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Pb extends Un{constructor(e=1,t=1,n=1,r={}){super(e,t,r),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new Pl(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class Nf extends Mt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ib extends Un{constructor(e=1,t=1,n=1,r={}){super(e,t,r),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new Nf(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class ln{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],l=n[r+1],u=n[r+2],h=n[r+3];const f=s[a+0],d=s[a+1],p=s[a+2],_=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=p,e[t+3]=_;return}if(h!==_||c!==f||l!==d||u!==p){let m=1-o;const g=c*f+l*d+u*p+h*_,v=g>=0?1:-1,x=1-g*g;if(x>Number.EPSILON){const A=Math.sqrt(x),T=Math.atan2(A,g*v);m=Math.sin(m*T)/A,o=Math.sin(o*T)/A}const M=o*v;if(c=c*m+f*M,l=l*m+d*M,u=u*m+p*M,h=h*m+_*M,m===1-o){const A=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=A,l*=A,u*=A,h*=A}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],c=n[r+1],l=n[r+2],u=n[r+3],h=s[a],f=s[a+1],d=s[a+2],p=s[a+3];return e[t]=o*p+u*h+c*d-l*f,e[t+1]=c*p+u*f+l*h-o*d,e[t+2]=l*p+u*d+o*f-c*h,e[t+3]=u*p-o*h-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(r/2),h=o(s/2),f=c(n/2),d=c(r/2),p=c(s/2);switch(a){case"XYZ":this._x=f*u*h+l*d*p,this._y=l*d*h-f*u*p,this._z=l*u*p+f*d*h,this._w=l*u*h-f*d*p;break;case"YXZ":this._x=f*u*h+l*d*p,this._y=l*d*h-f*u*p,this._z=l*u*p-f*d*h,this._w=l*u*h+f*d*p;break;case"ZXY":this._x=f*u*h-l*d*p,this._y=l*d*h+f*u*p,this._z=l*u*p+f*d*h,this._w=l*u*h-f*d*p;break;case"ZYX":this._x=f*u*h-l*d*p,this._y=l*d*h+f*u*p,this._z=l*u*p-f*d*h,this._w=l*u*h+f*d*p;break;case"YZX":this._x=f*u*h+l*d*p,this._y=l*d*h+f*u*p,this._z=l*u*p-f*d*h,this._w=l*u*h-f*d*p;break;case"XZY":this._x=f*u*h-l*d*p,this._y=l*d*h-f*u*p,this._z=l*u*p+f*d*h,this._w=l*u*h+f*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(s-l)*d,this._z=(a-r)*d}else if(n>o&&n>h){const d=2*Math.sqrt(1+n-o-h);this._w=(u-c)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+l)/d}else if(o>h){const d=2*Math.sqrt(1+o-n-h);this._w=(s-l)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+h-n-o);this._w=(a-r)/d,this._x=(s+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-n*l,this._z=s*u+a*l+n*c-r*o,this._w=a*u-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,n=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*n),u=2*(o*t-s*r),h=2*(s*n-a*t);return this.x=t+c*l+a*h-o*u,this.y=n+c*u+o*l-s*h,this.z=r+c*h+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return _u.copy(this).projectOnVector(e),this.sub(_u)}reflect(e){return this.sub(_u.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _u=new R,zd=new ln;class en{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Cn):Cn.fromBufferAttribute(s,a),Cn.applyMatrix4(e.matrixWorld),this.expandByPoint(Cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),go.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),go.copy(n.boundingBox)),go.applyMatrix4(e.matrixWorld),this.union(go)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Cn),Cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xs),_o.subVectors(this.max,Xs),Kr.subVectors(e.a,Xs),Jr.subVectors(e.b,Xs),$r.subVectors(e.c,Xs),Ti.subVectors(Jr,Kr),Ci.subVectors($r,Jr),ir.subVectors(Kr,$r);let t=[0,-Ti.z,Ti.y,0,-Ci.z,Ci.y,0,-ir.z,ir.y,Ti.z,0,-Ti.x,Ci.z,0,-Ci.x,ir.z,0,-ir.x,-Ti.y,Ti.x,0,-Ci.y,Ci.x,0,-ir.y,ir.x,0];return!xu(t,Kr,Jr,$r,_o)||(t=[1,0,0,0,1,0,0,0,1],!xu(t,Kr,Jr,$r,_o))?!1:(xo.crossVectors(Ti,Ci),t=[xo.x,xo.y,xo.z],xu(t,Kr,Jr,$r,_o))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ti=[new R,new R,new R,new R,new R,new R,new R,new R],Cn=new R,go=new en,Kr=new R,Jr=new R,$r=new R,Ti=new R,Ci=new R,ir=new R,Xs=new R,_o=new R,xo=new R,rr=new R;function xu(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){rr.fromArray(i,s);const o=r.x*Math.abs(rr.x)+r.y*Math.abs(rr.y)+r.z*Math.abs(rr.z),c=e.dot(rr),l=t.dot(rr),u=n.dot(rr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Lb=new en,qs=new R,vu=new R;class Wt{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Lb.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qs.subVectors(e,this.center);const t=qs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(qs,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qs.copy(e.center).add(vu)),this.expandByPoint(qs.copy(e.center).sub(vu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ni=new R,yu=new R,vo=new R,Ri=new R,Mu=new R,yo=new R,bu=new R;class Os{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ni.copy(this.origin).addScaledVector(this.direction,t),ni.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){yu.copy(e).add(t).multiplyScalar(.5),vo.copy(t).sub(e).normalize(),Ri.copy(this.origin).sub(yu);const s=e.distanceTo(t)*.5,a=-this.direction.dot(vo),o=Ri.dot(this.direction),c=-Ri.dot(vo),l=Ri.lengthSq(),u=Math.abs(1-a*a);let h,f,d,p;if(u>0)if(h=a*c-o,f=a*o-c,p=s*u,h>=0)if(f>=-p)if(f<=p){const _=1/u;h*=_,f*=_,d=h*(h+a*f+2*o)+f*(a*h+f+2*c)+l}else f=s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;else f=-s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;else f<=-p?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-c),s),d=-h*h+f*(f+2*c)+l):f<=p?(h=0,f=Math.min(Math.max(-s,-c),s),d=f*(f+2*c)+l):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-c),s),d=-h*h+f*(f+2*c)+l);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(yu).addScaledVector(vo,f),d}intersectSphere(e,t){ni.subVectors(e.center,this.origin);const n=ni.dot(this.direction),r=ni.dot(ni)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ni)!==null}intersectTriangle(e,t,n,r,s){Mu.subVectors(t,e),yo.subVectors(n,e),bu.crossVectors(Mu,yo);let a=this.direction.dot(bu),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ri.subVectors(this.origin,e);const c=o*this.direction.dot(yo.crossVectors(Ri,yo));if(c<0)return null;const l=o*this.direction.dot(Mu.cross(Ri));if(l<0||c+l>a)return null;const u=-o*Ri.dot(bu);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pe{constructor(e,t,n,r,s,a,o,c,l,u,h,f,d,p,_,m){Pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l,u,h,f,d,p,_,m)}set(e,t,n,r,s,a,o,c,l,u,h,f,d,p,_,m){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=s,g[5]=a,g[9]=o,g[13]=c,g[2]=l,g[6]=u,g[10]=h,g[14]=f,g[3]=d,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/jr.setFromMatrixColumn(e,0).length(),s=1/jr.setFromMatrixColumn(e,1).length(),a=1/jr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*u,d=a*h,p=o*u,_=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=d+p*l,t[5]=f-_*l,t[9]=-o*c,t[2]=_-f*l,t[6]=p+d*l,t[10]=a*c}else if(e.order==="YXZ"){const f=c*u,d=c*h,p=l*u,_=l*h;t[0]=f+_*o,t[4]=p*o-d,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=d*o-p,t[6]=_+f*o,t[10]=a*c}else if(e.order==="ZXY"){const f=c*u,d=c*h,p=l*u,_=l*h;t[0]=f-_*o,t[4]=-a*h,t[8]=p+d*o,t[1]=d+p*o,t[5]=a*u,t[9]=_-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const f=a*u,d=a*h,p=o*u,_=o*h;t[0]=c*u,t[4]=p*l-d,t[8]=f*l+_,t[1]=c*h,t[5]=_*l+f,t[9]=d*l-p,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const f=a*c,d=a*l,p=o*c,_=o*l;t[0]=c*u,t[4]=_-f*h,t[8]=p*h+d,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=d*h+p,t[10]=f-_*h}else if(e.order==="XZY"){const f=a*c,d=a*l,p=o*c,_=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+_,t[5]=a*u,t[9]=d*h-p,t[2]=p*h-d,t[6]=o*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Db,e,Nb)}lookAt(e,t,n){const r=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),Pi.crossVectors(n,pn),Pi.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),Pi.crossVectors(n,pn)),Pi.normalize(),Mo.crossVectors(pn,Pi),r[0]=Pi.x,r[4]=Mo.x,r[8]=pn.x,r[1]=Pi.y,r[5]=Mo.y,r[9]=pn.y,r[2]=Pi.z,r[6]=Mo.z,r[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],d=n[13],p=n[2],_=n[6],m=n[10],g=n[14],v=n[3],x=n[7],M=n[11],A=n[15],T=r[0],w=r[4],P=r[8],U=r[12],y=r[1],b=r[5],F=r[9],k=r[13],H=r[2],Z=r[6],V=r[10],Q=r[14],W=r[3],ue=r[7],pe=r[11],me=r[15];return s[0]=a*T+o*y+c*H+l*W,s[4]=a*w+o*b+c*Z+l*ue,s[8]=a*P+o*F+c*V+l*pe,s[12]=a*U+o*k+c*Q+l*me,s[1]=u*T+h*y+f*H+d*W,s[5]=u*w+h*b+f*Z+d*ue,s[9]=u*P+h*F+f*V+d*pe,s[13]=u*U+h*k+f*Q+d*me,s[2]=p*T+_*y+m*H+g*W,s[6]=p*w+_*b+m*Z+g*ue,s[10]=p*P+_*F+m*V+g*pe,s[14]=p*U+_*k+m*Q+g*me,s[3]=v*T+x*y+M*H+A*W,s[7]=v*w+x*b+M*Z+A*ue,s[11]=v*P+x*F+M*V+A*pe,s[15]=v*U+x*k+M*Q+A*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],d=e[14],p=e[3],_=e[7],m=e[11],g=e[15];return p*(+s*c*h-r*l*h-s*o*f+n*l*f+r*o*d-n*c*d)+_*(+t*c*d-t*l*f+s*a*f-r*a*d+r*l*u-s*c*u)+m*(+t*l*h-t*o*d-s*a*h+n*a*d+s*o*u-n*l*u)+g*(-r*o*u-t*c*h+t*o*f+r*a*h-n*a*f+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],d=e[11],p=e[12],_=e[13],m=e[14],g=e[15],v=h*m*l-_*f*l+_*c*d-o*m*d-h*c*g+o*f*g,x=p*f*l-u*m*l-p*c*d+a*m*d+u*c*g-a*f*g,M=u*_*l-p*h*l+p*o*d-a*_*d-u*o*g+a*h*g,A=p*h*c-u*_*c-p*o*f+a*_*f+u*o*m-a*h*m,T=t*v+n*x+r*M+s*A;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/T;return e[0]=v*w,e[1]=(_*f*s-h*m*s-_*r*d+n*m*d+h*r*g-n*f*g)*w,e[2]=(o*m*s-_*c*s+_*r*l-n*m*l-o*r*g+n*c*g)*w,e[3]=(h*c*s-o*f*s-h*r*l+n*f*l+o*r*d-n*c*d)*w,e[4]=x*w,e[5]=(u*m*s-p*f*s+p*r*d-t*m*d-u*r*g+t*f*g)*w,e[6]=(p*c*s-a*m*s-p*r*l+t*m*l+a*r*g-t*c*g)*w,e[7]=(a*f*s-u*c*s+u*r*l-t*f*l-a*r*d+t*c*d)*w,e[8]=M*w,e[9]=(p*h*s-u*_*s-p*n*d+t*_*d+u*n*g-t*h*g)*w,e[10]=(a*_*s-p*o*s+p*n*l-t*_*l-a*n*g+t*o*g)*w,e[11]=(u*o*s-a*h*s-u*n*l+t*h*l+a*n*d-t*o*d)*w,e[12]=A*w,e[13]=(u*_*r-p*h*r+p*n*f-t*_*f-u*n*m+t*h*m)*w,e[14]=(p*o*r-a*_*r-p*n*c+t*_*c+a*n*m-t*o*m)*w,e[15]=(a*h*r-u*o*r+u*n*c-t*h*c-a*n*f+t*o*f)*w,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+n,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,h=o+o,f=s*l,d=s*u,p=s*h,_=a*u,m=a*h,g=o*h,v=c*l,x=c*u,M=c*h,A=n.x,T=n.y,w=n.z;return r[0]=(1-(_+g))*A,r[1]=(d+M)*A,r[2]=(p-x)*A,r[3]=0,r[4]=(d-M)*T,r[5]=(1-(f+g))*T,r[6]=(m+v)*T,r[7]=0,r[8]=(p+x)*w,r[9]=(m-v)*w,r[10]=(1-(f+_))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=jr.set(r[0],r[1],r[2]).length();const a=jr.set(r[4],r[5],r[6]).length(),o=jr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Rn.copy(this);const l=1/s,u=1/a,h=1/o;return Rn.elements[0]*=l,Rn.elements[1]*=l,Rn.elements[2]*=l,Rn.elements[4]*=u,Rn.elements[5]*=u,Rn.elements[6]*=u,Rn.elements[8]*=h,Rn.elements[9]*=h,Rn.elements[10]*=h,t.setFromRotationMatrix(Rn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=Xn){const c=this.elements,l=2*s/(t-e),u=2*s/(n-r),h=(t+e)/(t-e),f=(n+r)/(n-r);let d,p;if(o===Xn)d=-(a+s)/(a-s),p=-2*a*s/(a-s);else if(o===Pa)d=-a/(a-s),p=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=p,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=Xn){const c=this.elements,l=1/(t-e),u=1/(n-r),h=1/(a-s),f=(t+e)*l,d=(n+r)*u;let p,_;if(o===Xn)p=(a+s)*h,_=-2*h;else if(o===Pa)p=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=_,c[14]=-p,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const jr=new R,Rn=new Pe,Db=new R(0,0,0),Nb=new R(1,1,1),Pi=new R,Mo=new R,pn=new R,kd=new Pe,Vd=new ln;class yn{constructor(e=0,t=0,n=0,r=yn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(vt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-vt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(vt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return kd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(kd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vd.setFromEuler(this),this.setFromQuaternion(Vd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yn.DEFAULT_ORDER="XYZ";class Il{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ub=0;const Hd=new R,Qr=new ln,ii=new Pe,bo=new R,Ys=new R,Ob=new R,Fb=new ln,Gd=new R(1,0,0),Wd=new R(0,1,0),Xd=new R(0,0,1),qd={type:"added"},Bb={type:"removed"},es={type:"childadded",child:null},Su={type:"childremoved",child:null};class tt extends jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ub++}),this.uuid=xn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=tt.DEFAULT_UP.clone();const e=new R,t=new yn,n=new ln,r=new R(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Pe},normalMatrix:{value:new He}}),this.matrix=new Pe,this.matrixWorld=new Pe,this.matrixAutoUpdate=tt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Il,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qr.setFromAxisAngle(e,t),this.quaternion.multiply(Qr),this}rotateOnWorldAxis(e,t){return Qr.setFromAxisAngle(e,t),this.quaternion.premultiply(Qr),this}rotateX(e){return this.rotateOnAxis(Gd,e)}rotateY(e){return this.rotateOnAxis(Wd,e)}rotateZ(e){return this.rotateOnAxis(Xd,e)}translateOnAxis(e,t){return Hd.copy(e).applyQuaternion(this.quaternion),this.position.add(Hd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gd,e)}translateY(e){return this.translateOnAxis(Wd,e)}translateZ(e){return this.translateOnAxis(Xd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?bo.copy(e):bo.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(Ys,bo,this.up):ii.lookAt(bo,Ys,this.up),this.quaternion.setFromRotationMatrix(ii),r&&(ii.extractRotation(r.matrixWorld),Qr.setFromRotationMatrix(ii),this.quaternion.premultiply(Qr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qd),es.child=e,this.dispatchEvent(es),es.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Bb),Su.child=e,this.dispatchEvent(Su),Su.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qd),es.child=e,this.dispatchEvent(es),es.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,e,Ob),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,Fb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),d=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=r,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}tt.DEFAULT_UP=new R(0,1,0);tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pn=new R,ri=new R,wu=new R,si=new R,ts=new R,ns=new R,Yd=new R,Eu=new R,Au=new R,Tu=new R,Cu=new et,Ru=new et,Pu=new et;class an{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Pn.subVectors(e,t),r.cross(Pn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Pn.subVectors(r,t),ri.subVectors(n,t),wu.subVectors(e,t);const a=Pn.dot(Pn),o=Pn.dot(ri),c=Pn.dot(wu),l=ri.dot(ri),u=ri.dot(wu),h=a*l-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(l*c-o*u)*f,p=(a*u-o*c)*f;return s.set(1-d-p,p,d)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,si)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,si.x),c.addScaledVector(a,si.y),c.addScaledVector(o,si.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return Cu.setScalar(0),Ru.setScalar(0),Pu.setScalar(0),Cu.fromBufferAttribute(e,t),Ru.fromBufferAttribute(e,n),Pu.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Cu,s.x),a.addScaledVector(Ru,s.y),a.addScaledVector(Pu,s.z),a}static isFrontFacing(e,t,n,r){return Pn.subVectors(n,t),ri.subVectors(e,t),Pn.cross(ri).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),Pn.cross(ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return an.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return an.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return an.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return an.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return an.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;ts.subVectors(r,n),ns.subVectors(s,n),Eu.subVectors(e,n);const c=ts.dot(Eu),l=ns.dot(Eu);if(c<=0&&l<=0)return t.copy(n);Au.subVectors(e,r);const u=ts.dot(Au),h=ns.dot(Au);if(u>=0&&h<=u)return t.copy(r);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(ts,a);Tu.subVectors(e,s);const d=ts.dot(Tu),p=ns.dot(Tu);if(p>=0&&d<=p)return t.copy(s);const _=d*l-c*p;if(_<=0&&l>=0&&p<=0)return o=l/(l-p),t.copy(n).addScaledVector(ns,o);const m=u*p-d*h;if(m<=0&&h-u>=0&&d-p>=0)return Yd.subVectors(s,r),o=(h-u)/(h-u+(d-p)),t.copy(r).addScaledVector(Yd,o);const g=1/(m+_+f);return a=_*g,o=f*g,t.copy(n).addScaledVector(ts,a).addScaledVector(ns,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const d0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ii={h:0,s:0,l:0},So={h:0,s:0,l:0};function Iu(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class de{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=En){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qe.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Qe.workingColorSpace){if(e=Df(e,1),t=vt(t,0,1),n=vt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Iu(a,s,e+1/3),this.g=Iu(a,s,e),this.b=Iu(a,s,e-1/3)}return Qe.toWorkingColorSpace(this,r),this}setStyle(e,t=En){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=En){const n=d0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ws(e.r),this.g=ws(e.g),this.b=ws(e.b),this}copyLinearToSRGB(e){return this.r=mu(e.r),this.g=mu(e.g),this.b=mu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=En){return Qe.fromWorkingColorSpace(kt.copy(this),e),Math.round(vt(kt.r*255,0,255))*65536+Math.round(vt(kt.g*255,0,255))*256+Math.round(vt(kt.b*255,0,255))}getHexString(e=En){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.fromWorkingColorSpace(kt.copy(this),t);const n=kt.r,r=kt.g,s=kt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-n)/h+2;break;case s:c=(n-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(kt.copy(this),t),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=En){Qe.fromWorkingColorSpace(kt.copy(this),e);const t=kt.r,n=kt.g,r=kt.b;return e!==En?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Ii),this.setHSL(Ii.h+e,Ii.s+t,Ii.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ii),e.getHSL(So);const n=pa(Ii.h,So.h,t),r=pa(Ii.s,So.s,t),s=pa(Ii.l,So.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kt=new de;de.NAMES=d0;let zb=0;class Xt extends jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zb++}),this.uuid=xn(),this.name="",this.type="Material",this.blending=Cr,this.side=mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wc,this.blendDst=Ec,this.blendEquation=Fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new de(0,0,0),this.blendAlpha=0,this.depthFunc=Dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gr,this.stencilZFail=gr,this.stencilZPass=gr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Cr&&(n.blending=this.blending),this.side!==mi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==wc&&(n.blendSrc=this.blendSrc),this.blendDst!==Ec&&(n.blendDst=this.blendDst),this.blendEquation!==Fi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Dr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Nh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==gr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==gr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Qi extends Xt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=Ka,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ci=kb();function kb(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let c=0;c<256;++c){const l=c-127;l<-27?(n[c]=0,n[c|256]=32768,r[c]=24,r[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,r[c]=-l-1,r[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,r[c]=13,r[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,r[c]=24,r[c|256]=24):(n[c]=31744,n[c|256]=64512,r[c]=13,r[c|256]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,u=0;for(;!(l&8388608);)l<<=1,u-=8388608;l&=-8388609,u+=947912704,s[c]=l|u}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}function sn(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=vt(i,-65504,65504),ci.floatView[0]=i;const e=ci.uint32View[0],t=e>>23&511;return ci.baseTable[t]+((e&8388607)>>ci.shiftTable[t])}function ra(i){const e=i>>10;return ci.uint32View[0]=ci.mantissaTable[ci.offsetTable[e]+(i&1023)]+ci.exponentTable[e],ci.floatView[0]}const Vb={toHalfFloat:sn,fromHalfFloat:ra},At=new R,wo=new K;class ot{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ra,this.updateRanges=[],this.gpuType=cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)wo.fromBufferAttribute(this,t),wo.applyMatrix3(e),this.setXY(t,wo.x,wo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Zt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ge(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ge(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ge(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ge(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ge(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ge(t,this.array),n=Ge(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ge(t,this.array),n=Ge(n,this.array),r=Ge(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Ge(t,this.array),n=Ge(n,this.array),r=Ge(r,this.array),s=Ge(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ra&&(e.usage=this.usage),e}}class Hb extends ot{constructor(e,t,n){super(new Int8Array(e),t,n)}}class Gb extends ot{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class Wb extends ot{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}}class Xb extends ot{constructor(e,t,n){super(new Int16Array(e),t,n)}}class Uf extends ot{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class qb extends ot{constructor(e,t,n){super(new Int32Array(e),t,n)}}class Of extends ot{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Yb extends ot{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=ra(this.array[e*this.itemSize]);return this.normalized&&(t=Zt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ge(t,this.array)),this.array[e*this.itemSize]=sn(t),this}getY(e){let t=ra(this.array[e*this.itemSize+1]);return this.normalized&&(t=Zt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ge(t,this.array)),this.array[e*this.itemSize+1]=sn(t),this}getZ(e){let t=ra(this.array[e*this.itemSize+2]);return this.normalized&&(t=Zt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ge(t,this.array)),this.array[e*this.itemSize+2]=sn(t),this}getW(e){let t=ra(this.array[e*this.itemSize+3]);return this.normalized&&(t=Zt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ge(t,this.array)),this.array[e*this.itemSize+3]=sn(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ge(t,this.array),n=Ge(n,this.array)),this.array[e+0]=sn(t),this.array[e+1]=sn(n),this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ge(t,this.array),n=Ge(n,this.array),r=Ge(r,this.array)),this.array[e+0]=sn(t),this.array[e+1]=sn(n),this.array[e+2]=sn(r),this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Ge(t,this.array),n=Ge(n,this.array),r=Ge(r,this.array),s=Ge(s,this.array)),this.array[e+0]=sn(t),this.array[e+1]=sn(n),this.array[e+2]=sn(r),this.array[e+3]=sn(s),this}}class we extends ot{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Zb=0;const wn=new Pe,Lu=new tt,is=new R,mn=new en,Zs=new en,Dt=new R;class We extends jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zb++}),this.uuid=xn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(l0(e)?Of:Uf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new He().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wn.makeRotationFromQuaternion(e),this.applyMatrix4(wn),this}rotateX(e){return wn.makeRotationX(e),this.applyMatrix4(wn),this}rotateY(e){return wn.makeRotationY(e),this.applyMatrix4(wn),this}rotateZ(e){return wn.makeRotationZ(e),this.applyMatrix4(wn),this}translate(e,t,n){return wn.makeTranslation(e,t,n),this.applyMatrix4(wn),this}scale(e,t,n){return wn.makeScale(e,t,n),this.applyMatrix4(wn),this}lookAt(e){return Lu.lookAt(e),Lu.updateMatrix(),this.applyMatrix4(Lu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new we(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new en);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];mn.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){const n=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Zs.setFromBufferAttribute(o),this.morphTargetsRelative?(Dt.addVectors(mn.min,Zs.min),mn.expandByPoint(Dt),Dt.addVectors(mn.max,Zs.max),mn.expandByPoint(Dt)):(mn.expandByPoint(Zs.min),mn.expandByPoint(Zs.max))}mn.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Dt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Dt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Dt.fromBufferAttribute(o,l),c&&(is.fromBufferAttribute(e,l),Dt.add(is)),r=Math.max(r,n.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ot(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let P=0;P<n.count;P++)o[P]=new R,c[P]=new R;const l=new R,u=new R,h=new R,f=new K,d=new K,p=new K,_=new R,m=new R;function g(P,U,y){l.fromBufferAttribute(n,P),u.fromBufferAttribute(n,U),h.fromBufferAttribute(n,y),f.fromBufferAttribute(s,P),d.fromBufferAttribute(s,U),p.fromBufferAttribute(s,y),u.sub(l),h.sub(l),d.sub(f),p.sub(f);const b=1/(d.x*p.y-p.x*d.y);isFinite(b)&&(_.copy(u).multiplyScalar(p.y).addScaledVector(h,-d.y).multiplyScalar(b),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-p.x).multiplyScalar(b),o[P].add(_),o[U].add(_),o[y].add(_),c[P].add(m),c[U].add(m),c[y].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let P=0,U=v.length;P<U;++P){const y=v[P],b=y.start,F=y.count;for(let k=b,H=b+F;k<H;k+=3)g(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const x=new R,M=new R,A=new R,T=new R;function w(P){A.fromBufferAttribute(r,P),T.copy(A);const U=o[P];x.copy(U),x.sub(A.multiplyScalar(A.dot(U))).normalize(),M.crossVectors(T,U);const b=M.dot(c[P])<0?-1:1;a.setXYZW(P,x.x,x.y,x.z,b)}for(let P=0,U=v.length;P<U;++P){const y=v[P],b=y.start,F=y.count;for(let k=b,H=b+F;k<H;k+=3)w(e.getX(k+0)),w(e.getX(k+1)),w(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ot(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const r=new R,s=new R,a=new R,o=new R,c=new R,l=new R,u=new R,h=new R;if(e)for(let f=0,d=e.count;f<d;f+=3){const p=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,p),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(n,p),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,f=new l.constructor(c.length*u);let d=0,p=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?d=c[_]*o.data.stride+o.offset:d=c[_]*u;for(let g=0;g<u;g++)f[p++]=l[d++]}return new ot(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new We,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,h=l.length;u<h;u++){const f=l[u],d=e(f,n);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const d=l[h];u.push(d.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zd=new Pe,sr=new Os,Eo=new Wt,Kd=new R,Ao=new R,To=new R,Co=new R,Du=new R,Ro=new R,Jd=new R,Po=new R;class wt extends tt{constructor(e=new We,t=new Qi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Ro.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],h=s[c];u!==0&&(Du.fromBufferAttribute(h,e),a?Ro.addScaledVector(Du,u):Ro.addScaledVector(Du.sub(t),u))}t.add(Ro)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Eo.copy(n.boundingSphere),Eo.applyMatrix4(s),sr.copy(e.ray).recast(e.near),!(Eo.containsPoint(sr.origin)===!1&&(sr.intersectSphere(Eo,Kd)===null||sr.origin.distanceToSquared(Kd)>(e.far-e.near)**2))&&(Zd.copy(s).invert(),sr.copy(e.ray).applyMatrix4(Zd),!(n.boundingBox!==null&&sr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,sr)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,_=f.length;p<_;p++){const m=f[p],g=a[m.materialIndex],v=Math.max(m.start,d.start),x=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let M=v,A=x;M<A;M+=3){const T=o.getX(M),w=o.getX(M+1),P=o.getX(M+2);r=Io(this,g,e,n,l,u,h,T,w,P),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const p=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=p,g=_;m<g;m+=3){const v=o.getX(m),x=o.getX(m+1),M=o.getX(m+2);r=Io(this,a,e,n,l,u,h,v,x,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let p=0,_=f.length;p<_;p++){const m=f[p],g=a[m.materialIndex],v=Math.max(m.start,d.start),x=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let M=v,A=x;M<A;M+=3){const T=M,w=M+1,P=M+2;r=Io(this,g,e,n,l,u,h,T,w,P),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const p=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let m=p,g=_;m<g;m+=3){const v=m,x=m+1,M=m+2;r=Io(this,a,e,n,l,u,h,v,x,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Kb(i,e,t,n,r,s,a,o){let c;if(e.side===Qt?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===mi,o),c===null)return null;Po.copy(o),Po.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Po);return l<t.near||l>t.far?null:{distance:l,point:Po.clone(),object:i}}function Io(i,e,t,n,r,s,a,o,c,l){i.getVertexPosition(o,Ao),i.getVertexPosition(c,To),i.getVertexPosition(l,Co);const u=Kb(i,e,t,n,Ao,To,Co,Jd);if(u){const h=new R;an.getBarycoord(Jd,Ao,To,Co,h),r&&(u.uv=an.getInterpolatedAttribute(r,o,c,l,h,new K)),s&&(u.uv1=an.getInterpolatedAttribute(s,o,c,l,h,new K)),a&&(u.normal=an.getInterpolatedAttribute(a,o,c,l,h,new R),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new R,materialIndex:0};an.getNormal(Ao,To,Co,f.normal),u.face=f,u.barycoord=h}return u}class Vr extends We{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],h=[];let f=0,d=0;p("z","y","x",-1,-1,n,t,e,a,s,0),p("z","y","x",1,-1,n,t,-e,a,s,1),p("x","z","y",1,1,e,n,t,r,a,2),p("x","z","y",1,-1,e,n,-t,r,a,3),p("x","y","z",1,-1,e,t,n,r,s,4),p("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new we(l,3)),this.setAttribute("normal",new we(u,3)),this.setAttribute("uv",new we(h,2));function p(_,m,g,v,x,M,A,T,w,P,U){const y=M/w,b=A/P,F=M/2,k=A/2,H=T/2,Z=w+1,V=P+1;let Q=0,W=0;const ue=new R;for(let pe=0;pe<V;pe++){const me=pe*b-k;for(let Ze=0;Ze<Z;Ze++){const nt=Ze*y-F;ue[_]=nt*v,ue[m]=me*x,ue[g]=H,l.push(ue.x,ue.y,ue.z),ue[_]=0,ue[m]=0,ue[g]=T>0?1:-1,u.push(ue.x,ue.y,ue.z),h.push(Ze/w),h.push(1-pe/P),Q+=1}}for(let pe=0;pe<P;pe++)for(let me=0;me<w;me++){const Ze=f+me+Z*pe,nt=f+me+Z*(pe+1),X=f+(me+1)+Z*(pe+1),te=f+(me+1)+Z*pe;c.push(Ze,nt,te),c.push(nt,X,te),W+=6}o.addGroup(d,W,U),d+=W,f+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Rs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Yt(i){const e={};for(let t=0;t<i.length;t++){const n=Rs(i[t]);for(const r in n)e[r]=n[r]}return e}function Jb(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function p0(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const m0={clone:Rs,merge:Yt};var $b=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class On extends Xt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$b,this.fragmentShader=jb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rs(e.uniforms),this.uniformsGroups=Jb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ll extends tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pe,this.projectionMatrix=new Pe,this.projectionMatrixInverse=new Pe,this.coordinateSystem=Xn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Li=new R,$d=new K,jd=new K;class Nt extends Ll{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Cs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Pr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cs*2*Math.atan(Math.tan(Pr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Li.x,Li.y).multiplyScalar(-e/Li.z),Li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Li.x,Li.y).multiplyScalar(-e/Li.z)}getViewSize(e,t){return this.getViewBounds(e,$d,jd),t.subVectors(jd,$d)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Pr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const rs=-90,ss=1;class g0 extends tt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Nt(rs,ss,e,t);r.layers=this.layers,this.add(r);const s=new Nt(rs,ss,e,t);s.layers=this.layers,this.add(s);const a=new Nt(rs,ss,e,t);a.layers=this.layers,this.add(a);const o=new Nt(rs,ss,e,t);o.layers=this.layers,this.add(o);const c=new Nt(rs,ss,e,t);c.layers=this.layers,this.add(c);const l=new Nt(rs,ss,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===Xn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Pa)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class ja extends Mt{constructor(e,t,n,r,s,a,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:gi,super(e,t,n,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _0 extends Un{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new ja(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Tt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Vr(5,5,5),s=new On({name:"CubemapFromEquirect",uniforms:Rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qt,blending:hi});s.uniforms.tEquirect.value=t;const a=new wt(r,s),o=t.minFilter;return t.minFilter===Wn&&(t.minFilter=Tt),new g0(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const Nu=new R,Qb=new R,eS=new He;class Ui{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Nu.subVectors(n,t).cross(Qb.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Nu),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||eS.getNormalMatrix(e),r=this.coplanarPoint(Nu).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ar=new Wt,Lo=new R;class Qa{constructor(e=new Ui,t=new Ui,n=new Ui,r=new Ui,s=new Ui,a=new Ui){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Xn){const n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],u=r[5],h=r[6],f=r[7],d=r[8],p=r[9],_=r[10],m=r[11],g=r[12],v=r[13],x=r[14],M=r[15];if(n[0].setComponents(c-s,f-l,m-d,M-g).normalize(),n[1].setComponents(c+s,f+l,m+d,M+g).normalize(),n[2].setComponents(c+a,f+u,m+p,M+v).normalize(),n[3].setComponents(c-a,f-u,m-p,M-v).normalize(),n[4].setComponents(c-o,f-h,m-_,M-x).normalize(),t===Xn)n[5].setComponents(c+o,f+h,m+_,M+x).normalize();else if(t===Pa)n[5].setComponents(o,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ar.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ar.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ar)}intersectsSprite(e){return ar.center.set(0,0,0),ar.radius=.7071067811865476,ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(ar)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Lo.x=r.normal.x>0?e.max.x:e.min.x,Lo.y=r.normal.y>0?e.max.y:e.min.y,Lo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Lo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function x0(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function tS(i){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,h=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,u),o.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,o),h.length===0)i.bufferSubData(l,0,u);else{h.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<h.length;d++){const p=h[f],_=h[d];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,p=h.length;d<p;d++){const _=h[d];i.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}class Hr extends We{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,u=c+1,h=e/o,f=t/c,d=[],p=[],_=[],m=[];for(let g=0;g<u;g++){const v=g*f-a;for(let x=0;x<l;x++){const M=x*h-s;p.push(M,-v,0),_.push(0,0,1),m.push(x/o),m.push(1-g/c)}}for(let g=0;g<c;g++)for(let v=0;v<o;v++){const x=v+l*g,M=v+l*(g+1),A=v+1+l*(g+1),T=v+1+l*g;d.push(x,M,T),d.push(M,A,T)}this.setIndex(d),this.setAttribute("position",new we(p,3)),this.setAttribute("normal",new we(_,3)),this.setAttribute("uv",new we(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hr(e.width,e.height,e.widthSegments,e.heightSegments)}}var nS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,iS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,rS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,aS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,oS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,lS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,uS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,hS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,mS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,gS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,_S=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,xS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,MS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,SS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,wS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ES=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,AS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,TS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,CS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,RS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,PS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,IS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,LS="gl_FragColor = linearToOutputTexel( gl_FragColor );",DS=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,NS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,US=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,OS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,FS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,BS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,zS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,VS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,HS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,GS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,WS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,XS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,YS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ZS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,KS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,JS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$S=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,QS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ew=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,tw=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,nw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,iw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rw=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sw=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,aw=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ow=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,uw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,hw=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_w=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,xw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,yw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Mw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ww=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ew=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Aw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Iw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Uw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ow=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Bw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,zw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,kw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Vw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Gw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ww=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Xw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Jw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,$w=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,e1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const t1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,n1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,c1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,l1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,u1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,h1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,f1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,p1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,m1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,g1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,x1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,y1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,b1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,S1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,w1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,A1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,C1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,P1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,I1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,L1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,D1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,N1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ie={alphahash_fragment:nS,alphahash_pars_fragment:iS,alphamap_fragment:rS,alphamap_pars_fragment:sS,alphatest_fragment:aS,alphatest_pars_fragment:oS,aomap_fragment:cS,aomap_pars_fragment:lS,batching_pars_vertex:uS,batching_vertex:hS,begin_vertex:fS,beginnormal_vertex:dS,bsdfs:pS,iridescence_fragment:mS,bumpmap_pars_fragment:gS,clipping_planes_fragment:_S,clipping_planes_pars_fragment:xS,clipping_planes_pars_vertex:vS,clipping_planes_vertex:yS,color_fragment:MS,color_pars_fragment:bS,color_pars_vertex:SS,color_vertex:wS,common:ES,cube_uv_reflection_fragment:AS,defaultnormal_vertex:TS,displacementmap_pars_vertex:CS,displacementmap_vertex:RS,emissivemap_fragment:PS,emissivemap_pars_fragment:IS,colorspace_fragment:LS,colorspace_pars_fragment:DS,envmap_fragment:NS,envmap_common_pars_fragment:US,envmap_pars_fragment:OS,envmap_pars_vertex:FS,envmap_physical_pars_fragment:ZS,envmap_vertex:BS,fog_vertex:zS,fog_pars_vertex:kS,fog_fragment:VS,fog_pars_fragment:HS,gradientmap_pars_fragment:GS,lightmap_pars_fragment:WS,lights_lambert_fragment:XS,lights_lambert_pars_fragment:qS,lights_pars_begin:YS,lights_toon_fragment:KS,lights_toon_pars_fragment:JS,lights_phong_fragment:$S,lights_phong_pars_fragment:jS,lights_physical_fragment:QS,lights_physical_pars_fragment:ew,lights_fragment_begin:tw,lights_fragment_maps:nw,lights_fragment_end:iw,logdepthbuf_fragment:rw,logdepthbuf_pars_fragment:sw,logdepthbuf_pars_vertex:aw,logdepthbuf_vertex:ow,map_fragment:cw,map_pars_fragment:lw,map_particle_fragment:uw,map_particle_pars_fragment:hw,metalnessmap_fragment:fw,metalnessmap_pars_fragment:dw,morphinstance_vertex:pw,morphcolor_vertex:mw,morphnormal_vertex:gw,morphtarget_pars_vertex:_w,morphtarget_vertex:xw,normal_fragment_begin:vw,normal_fragment_maps:yw,normal_pars_fragment:Mw,normal_pars_vertex:bw,normal_vertex:Sw,normalmap_pars_fragment:ww,clearcoat_normal_fragment_begin:Ew,clearcoat_normal_fragment_maps:Aw,clearcoat_pars_fragment:Tw,iridescence_pars_fragment:Cw,opaque_fragment:Rw,packing:Pw,premultiplied_alpha_fragment:Iw,project_vertex:Lw,dithering_fragment:Dw,dithering_pars_fragment:Nw,roughnessmap_fragment:Uw,roughnessmap_pars_fragment:Ow,shadowmap_pars_fragment:Fw,shadowmap_pars_vertex:Bw,shadowmap_vertex:zw,shadowmask_pars_fragment:kw,skinbase_vertex:Vw,skinning_pars_vertex:Hw,skinning_vertex:Gw,skinnormal_vertex:Ww,specularmap_fragment:Xw,specularmap_pars_fragment:qw,tonemapping_fragment:Yw,tonemapping_pars_fragment:Zw,transmission_fragment:Kw,transmission_pars_fragment:Jw,uv_pars_fragment:$w,uv_pars_vertex:jw,uv_vertex:Qw,worldpos_vertex:e1,background_vert:t1,background_frag:n1,backgroundCube_vert:i1,backgroundCube_frag:r1,cube_vert:s1,cube_frag:a1,depth_vert:o1,depth_frag:c1,distanceRGBA_vert:l1,distanceRGBA_frag:u1,equirect_vert:h1,equirect_frag:f1,linedashed_vert:d1,linedashed_frag:p1,meshbasic_vert:m1,meshbasic_frag:g1,meshlambert_vert:_1,meshlambert_frag:x1,meshmatcap_vert:v1,meshmatcap_frag:y1,meshnormal_vert:M1,meshnormal_frag:b1,meshphong_vert:S1,meshphong_frag:w1,meshphysical_vert:E1,meshphysical_frag:A1,meshtoon_vert:T1,meshtoon_frag:C1,points_vert:R1,points_frag:P1,shadow_vert:I1,shadow_frag:L1,sprite_vert:D1,sprite_frag:N1},oe={common:{diffuse:{value:new de(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new K(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new de(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new de(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new de(16777215)},opacity:{value:1},center:{value:new K(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},Ln={basic:{uniforms:Yt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:Yt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new de(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:Yt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new de(0)},specular:{value:new de(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:Yt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new de(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:Yt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new de(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:Yt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:Yt([oe.points,oe.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:Yt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:Yt([oe.common,oe.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:Yt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:Yt([oe.sprite,oe.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:Yt([oe.common,oe.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:Yt([oe.lights,oe.fog,{color:{value:new de(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};Ln.physical={uniforms:Yt([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new K(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new de(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new K},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new de(0)},specularColor:{value:new de(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new K},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};const Do={r:0,b:0,g:0},or=new yn,U1=new Pe;function O1(i,e,t,n,r,s,a){const o=new de(0);let c=s===!0?0:1,l,u,h=null,f=0,d=null;function p(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?t:e).get(x)),x}function _(v){let x=!1;const M=p(v);M===null?g(o,c):M&&M.isColor&&(g(M,1),x=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(v,x){const M=p(x);M&&(M.isCubeTexture||M.mapping===Ns)?(u===void 0&&(u=new wt(new Vr(1,1,1),new On({name:"BackgroundCubeMaterial",uniforms:Rs(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),or.copy(x.backgroundRotation),or.x*=-1,or.y*=-1,or.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(or.y*=-1,or.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(U1.makeRotationFromEuler(or)),u.material.toneMapped=Qe.getTransfer(M.colorSpace)!==ht,(h!==M||f!==M.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=M,f=M.version,d=i.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new wt(new Hr(2,2),new On({name:"BackgroundMaterial",uniforms:Rs(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=Qe.getTransfer(M.colorSpace)!==ht,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=M,f=M.version,d=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,x){v.getRGB(Do,p0(i)),n.buffers.color.setClear(Do.r,Do.g,Do.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(v,x=1){o.set(v),c=x,g(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,g(o,c)},render:_,addToRenderList:m}}function F1(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,a=!1;function o(y,b,F,k,H){let Z=!1;const V=h(k,F,b);s!==V&&(s=V,l(s.object)),Z=d(y,k,F,H),Z&&p(y,k,F,H),H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,M(y,b,F,k),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function h(y,b,F){const k=F.wireframe===!0;let H=n[y.id];H===void 0&&(H={},n[y.id]=H);let Z=H[b.id];Z===void 0&&(Z={},H[b.id]=Z);let V=Z[k];return V===void 0&&(V=f(c()),Z[k]=V),V}function f(y){const b=[],F=[],k=[];for(let H=0;H<t;H++)b[H]=0,F[H]=0,k[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:F,attributeDivisors:k,object:y,attributes:{},index:null}}function d(y,b,F,k){const H=s.attributes,Z=b.attributes;let V=0;const Q=F.getAttributes();for(const W in Q)if(Q[W].location>=0){const pe=H[W];let me=Z[W];if(me===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(me=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(me=y.instanceColor)),pe===void 0||pe.attribute!==me||me&&pe.data!==me.data)return!0;V++}return s.attributesNum!==V||s.index!==k}function p(y,b,F,k){const H={},Z=b.attributes;let V=0;const Q=F.getAttributes();for(const W in Q)if(Q[W].location>=0){let pe=Z[W];pe===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(pe=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(pe=y.instanceColor));const me={};me.attribute=pe,pe&&pe.data&&(me.data=pe.data),H[W]=me,V++}s.attributes=H,s.attributesNum=V,s.index=k}function _(){const y=s.newAttributes;for(let b=0,F=y.length;b<F;b++)y[b]=0}function m(y){g(y,0)}function g(y,b){const F=s.newAttributes,k=s.enabledAttributes,H=s.attributeDivisors;F[y]=1,k[y]===0&&(i.enableVertexAttribArray(y),k[y]=1),H[y]!==b&&(i.vertexAttribDivisor(y,b),H[y]=b)}function v(){const y=s.newAttributes,b=s.enabledAttributes;for(let F=0,k=b.length;F<k;F++)b[F]!==y[F]&&(i.disableVertexAttribArray(F),b[F]=0)}function x(y,b,F,k,H,Z,V){V===!0?i.vertexAttribIPointer(y,b,F,H,Z):i.vertexAttribPointer(y,b,F,k,H,Z)}function M(y,b,F,k){_();const H=k.attributes,Z=F.getAttributes(),V=b.defaultAttributeValues;for(const Q in Z){const W=Z[Q];if(W.location>=0){let ue=H[Q];if(ue===void 0&&(Q==="instanceMatrix"&&y.instanceMatrix&&(ue=y.instanceMatrix),Q==="instanceColor"&&y.instanceColor&&(ue=y.instanceColor)),ue!==void 0){const pe=ue.normalized,me=ue.itemSize,Ze=e.get(ue);if(Ze===void 0)continue;const nt=Ze.buffer,X=Ze.type,te=Ze.bytesPerElement,Me=X===i.INT||X===i.UNSIGNED_INT||ue.gpuType===bl;if(ue.isInterleavedBufferAttribute){const le=ue.data,De=le.stride,Le=ue.offset;if(le.isInstancedInterleavedBuffer){for(let ze=0;ze<W.locationSize;ze++)g(W.location+ze,le.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ze=0;ze<W.locationSize;ze++)m(W.location+ze);i.bindBuffer(i.ARRAY_BUFFER,nt);for(let ze=0;ze<W.locationSize;ze++)x(W.location+ze,me/W.locationSize,X,pe,De*te,(Le+me/W.locationSize*ze)*te,Me)}else{if(ue.isInstancedBufferAttribute){for(let le=0;le<W.locationSize;le++)g(W.location+le,ue.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let le=0;le<W.locationSize;le++)m(W.location+le);i.bindBuffer(i.ARRAY_BUFFER,nt);for(let le=0;le<W.locationSize;le++)x(W.location+le,me/W.locationSize,X,pe,me*te,me/W.locationSize*le*te,Me)}}else if(V!==void 0){const pe=V[Q];if(pe!==void 0)switch(pe.length){case 2:i.vertexAttrib2fv(W.location,pe);break;case 3:i.vertexAttrib3fv(W.location,pe);break;case 4:i.vertexAttrib4fv(W.location,pe);break;default:i.vertexAttrib1fv(W.location,pe)}}}}v()}function A(){P();for(const y in n){const b=n[y];for(const F in b){const k=b[F];for(const H in k)u(k[H].object),delete k[H];delete b[F]}delete n[y]}}function T(y){if(n[y.id]===void 0)return;const b=n[y.id];for(const F in b){const k=b[F];for(const H in k)u(k[H].object),delete k[H];delete b[F]}delete n[y.id]}function w(y){for(const b in n){const F=n[b];if(F[y.id]===void 0)continue;const k=F[y.id];for(const H in k)u(k[H].object),delete k[H];delete F[y.id]}}function P(){U(),a=!0,s!==r&&(s=r,l(s.object))}function U(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:P,resetDefaultState:U,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function B1(i,e,t){let n;function r(l){n=l}function s(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function a(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function o(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let d=0;for(let p=0;p<h;p++)d+=u[p];t.update(d,n,1)}function c(l,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<l.length;p++)a(l[p],u[p],f[p]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,u,0,f,0,h);let p=0;for(let _=0;_<h;_++)p+=u[_];for(let _=0;_<f.length;_++)t.update(p,n,f[_])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function z1(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(w){return!(w!==$t&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const P=w===Us&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==$n&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==cn&&!P)}function c(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){const w=e.get("EXT_clip_control");w.clipControlEXT(w.LOWER_LEFT_EXT,w.ZERO_TO_ONE_EXT)}const d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=p>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:M,vertexTextures:A,maxSamples:T}}function k1(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Ui,o=new He,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||r;return r=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const p=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,g=i.get(h);if(!r||p===null||p.length===0||s&&!m)s?u(null):l();else{const v=s?0:n,x=v*4;let M=g.clippingState||null;c.value=M,M=u(p,f,x,d);for(let A=0;A!==x;++A)M[A]=t[A];g.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,p){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=c.value,p!==!0||m===null){const g=d+_*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<g)&&(m=new Float32Array(g));for(let x=0,M=d;x!==_;++x,M+=4)a.copy(h[x]).applyMatrix4(v,o),a.normal.toArray(m,M),m[M+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function V1(i){let e=new WeakMap;function t(a,o){return o===ya?a.mapping=gi:o===Ma&&(a.mapping=Zi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ya||o===Ma)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new _0(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Dl extends Ll{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const _s=4,Qd=[.125,.215,.35,.446,.526,.582],xr=20,Uu=new Dl,ep=new de;let Ou=null,Fu=0,Bu=0,zu=!1;const _r=(1+Math.sqrt(5))/2,as=1/_r,tp=[new R(-_r,as,0),new R(_r,as,0),new R(-as,0,_r),new R(as,0,_r),new R(0,_r,-as),new R(0,_r,as),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class Oh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Ou=this._renderer.getRenderTarget(),Fu=this._renderer.getActiveCubeFace(),Bu=this._renderer.getActiveMipmapLevel(),zu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ip(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ou,Fu,Bu),this._renderer.xr.enabled=zu,e.scissorTest=!1,No(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===gi||e.mapping===Zi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ou=this._renderer.getRenderTarget(),Fu=this._renderer.getActiveCubeFace(),Bu=this._renderer.getActiveMipmapLevel(),zu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Tt,minFilter:Tt,generateMipmaps:!1,type:Us,format:$t,colorSpace:wi,depthBuffer:!1},r=np(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=np(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=H1(s)),this._blurMaterial=G1(s,e,t)}return r}_compileMaterial(e){const t=new wt(this._lodPlanes[0],e);this._renderer.compile(t,Uu)}_sceneToCubeUV(e,t,n,r){const o=new Nt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(ep),u.toneMapping=fi,u.autoClear=!1;const d=new Qi({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1}),p=new wt(new Vr,d);let _=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,_=!0):(d.color.copy(ep),_=!0);for(let g=0;g<6;g++){const v=g%3;v===0?(o.up.set(0,c[g],0),o.lookAt(l[g],0,0)):v===1?(o.up.set(0,0,c[g]),o.lookAt(0,l[g],0)):(o.up.set(0,c[g],0),o.lookAt(0,0,l[g]));const x=this._cubeSize;No(r,v*x,g>2?x:0,x,x),u.setRenderTarget(r),_&&u.render(p,o),u.render(e,o)}p.geometry.dispose(),p.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===gi||e.mapping===Zi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=rp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ip());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new wt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;No(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Uu)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=tp[(r-s-1)%tp.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new wt(this._lodPlanes[r],l),f=l.uniforms,d=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*xr-1),_=s/p,m=isFinite(s)?1+Math.floor(u*_):xr;m>xr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${xr}`);const g=[];let v=0;for(let w=0;w<xr;++w){const P=w/_,U=Math.exp(-P*P/2);g.push(U),w===0?v+=U:w<m&&(v+=2*U)}for(let w=0;w<g.length;w++)g[w]=g[w]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=g,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=p,f.mipInt.value=x-n;const M=this._sizeLods[r],A=3*M*(r>x-_s?r-x+_s:0),T=4*(this._cubeSize-M);No(t,A,T,3*M,2*M),c.setRenderTarget(t),c.render(h,Uu)}}function H1(i){const e=[],t=[],n=[];let r=i;const s=i-_s+1+Qd.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>i-_s?c=Qd[a-i+_s-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,p=6,_=3,m=2,g=1,v=new Float32Array(_*p*d),x=new Float32Array(m*p*d),M=new Float32Array(g*p*d);for(let T=0;T<d;T++){const w=T%3*2/3-1,P=T>2?0:-1,U=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];v.set(U,_*p*T),x.set(f,m*p*T);const y=[T,T,T,T,T,T];M.set(y,g*p*T)}const A=new We;A.setAttribute("position",new ot(v,_)),A.setAttribute("uv",new ot(x,m)),A.setAttribute("faceIndex",new ot(M,g)),e.push(A),r>_s&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function np(i,e,t){const n=new Un(i,e,t);return n.texture.mapping=Ns,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function No(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function G1(i,e,t){const n=new Float32Array(xr),r=new R(0,1,0);return new On({name:"SphericalGaussianBlur",defines:{n:xr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ff(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function ip(){return new On({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ff(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function rp(){return new On({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ff(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Ff(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function W1(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===ya||c===Ma,u=c===gi||c===Zi;if(l||u){let h=e.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Oh(i)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const d=o.image;return l&&d&&d.height>0||u&&d&&r(d)?(t===null&&(t=new Oh(i)),h=l?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function X1(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&dc("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function q1(i,e,t,n){const r={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const p in f.attributes)e.remove(f.attributes[p]);for(const p in f.morphAttributes){const _=f.morphAttributes[p];for(let m=0,g=_.length;m<g;m++)e.remove(_[m])}f.removeEventListener("dispose",a),delete r[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const p in f)e.update(f[p],i.ARRAY_BUFFER);const d=h.morphAttributes;for(const p in d){const _=d[p];for(let m=0,g=_.length;m<g;m++)e.update(_[m],i.ARRAY_BUFFER)}}function l(h){const f=[],d=h.index,p=h.attributes.position;let _=0;if(d!==null){const v=d.array;_=d.version;for(let x=0,M=v.length;x<M;x+=3){const A=v[x+0],T=v[x+1],w=v[x+2];f.push(A,T,T,w,w,A)}}else if(p!==void 0){const v=p.array;_=p.version;for(let x=0,M=v.length/3-1;x<M;x+=3){const A=x+0,T=x+1,w=x+2;f.push(A,T,T,w,w,A)}}else return;const m=new(l0(f)?Of:Uf)(f,1);m.version=_;const g=s.get(h);g&&e.remove(g),s.set(h,m)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function Y1(i,e,t){let n;function r(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function c(f,d){i.drawElements(n,d,s,f*a),t.update(d,n,1)}function l(f,d,p){p!==0&&(i.drawElementsInstanced(n,d,s,f*a,p),t.update(d,n,p))}function u(f,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,p);let m=0;for(let g=0;g<p;g++)m+=d[g];t.update(m,n,1)}function h(f,d,p,_){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f.length;g++)l(f[g]/a,d[g],_[g]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,_,0,p);let g=0;for(let v=0;v<p;v++)g+=d[v];for(let v=0;v<_.length;v++)t.update(g,n,_[v])}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Z1(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function K1(i,e,t){const n=new WeakMap,r=new et;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let y=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",y)};var d=y;f!==void 0&&f.texture.dispose();const p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let M=0;p===!0&&(M=1),_===!0&&(M=2),m===!0&&(M=3);let A=o.attributes.position.count*M,T=1;A>e.maxTextureSize&&(T=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const w=new Float32Array(A*T*4*h),P=new Pl(w,A,T,h);P.type=cn,P.needsUpdate=!0;const U=M*4;for(let b=0;b<h;b++){const F=g[b],k=v[b],H=x[b],Z=A*T*4*b;for(let V=0;V<F.count;V++){const Q=V*U;p===!0&&(r.fromBufferAttribute(F,V),w[Z+Q+0]=r.x,w[Z+Q+1]=r.y,w[Z+Q+2]=r.z,w[Z+Q+3]=0),_===!0&&(r.fromBufferAttribute(k,V),w[Z+Q+4]=r.x,w[Z+Q+5]=r.y,w[Z+Q+6]=r.z,w[Z+Q+7]=0),m===!0&&(r.fromBufferAttribute(H,V),w[Z+Q+8]=r.x,w[Z+Q+9]=r.y,w[Z+Q+10]=r.z,w[Z+Q+11]=H.itemSize===4?r.w:1)}}f={count:h,texture:P,size:new K(A,T)},n.set(o,f),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let m=0;m<l.length;m++)p+=l[m];const _=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function J1(i,e,t,n){let r=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(r.get(h)!==l&&(e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return h}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}class Bf extends Mt{constructor(e,t,n,r,s,a,o,c,l,u=Rr){if(u!==Rr&&u!==Ur)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Rr&&(n=_i),n===void 0&&u===Ur&&(n=Nr),super(null,r,s,a,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ot,this.minFilter=c!==void 0?c:Ot,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const v0=new Mt,sp=new Bf(1,1),y0=new Pl,M0=new Nf,b0=new ja,ap=[],op=[],cp=new Float32Array(16),lp=new Float32Array(9),up=new Float32Array(4);function Fs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=ap[r];if(s===void 0&&(s=new Float32Array(r),ap[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function It(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Lt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Nl(i,e){let t=op[e];t===void 0&&(t=new Int32Array(e),op[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function $1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function j1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2fv(this.addr,e),Lt(t,e)}}function Q1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;i.uniform3fv(this.addr,e),Lt(t,e)}}function eE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4fv(this.addr,e),Lt(t,e)}}function tE(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(It(t,n))return;up.set(n),i.uniformMatrix2fv(this.addr,!1,up),Lt(t,n)}}function nE(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(It(t,n))return;lp.set(n),i.uniformMatrix3fv(this.addr,!1,lp),Lt(t,n)}}function iE(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(It(t,n))return;cp.set(n),i.uniformMatrix4fv(this.addr,!1,cp),Lt(t,n)}}function rE(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function sE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2iv(this.addr,e),Lt(t,e)}}function aE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3iv(this.addr,e),Lt(t,e)}}function oE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4iv(this.addr,e),Lt(t,e)}}function cE(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function lE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2uiv(this.addr,e),Lt(t,e)}}function uE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3uiv(this.addr,e),Lt(t,e)}}function hE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4uiv(this.addr,e),Lt(t,e)}}function fE(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(sp.compareFunction=Lf,s=sp):s=v0,t.setTexture2D(e||s,r)}function dE(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||M0,r)}function pE(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||b0,r)}function mE(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||y0,r)}function gE(i){switch(i){case 5126:return $1;case 35664:return j1;case 35665:return Q1;case 35666:return eE;case 35674:return tE;case 35675:return nE;case 35676:return iE;case 5124:case 35670:return rE;case 35667:case 35671:return sE;case 35668:case 35672:return aE;case 35669:case 35673:return oE;case 5125:return cE;case 36294:return lE;case 36295:return uE;case 36296:return hE;case 35678:case 36198:case 36298:case 36306:case 35682:return fE;case 35679:case 36299:case 36307:return dE;case 35680:case 36300:case 36308:case 36293:return pE;case 36289:case 36303:case 36311:case 36292:return mE}}function _E(i,e){i.uniform1fv(this.addr,e)}function xE(i,e){const t=Fs(e,this.size,2);i.uniform2fv(this.addr,t)}function vE(i,e){const t=Fs(e,this.size,3);i.uniform3fv(this.addr,t)}function yE(i,e){const t=Fs(e,this.size,4);i.uniform4fv(this.addr,t)}function ME(i,e){const t=Fs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function bE(i,e){const t=Fs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function SE(i,e){const t=Fs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function wE(i,e){i.uniform1iv(this.addr,e)}function EE(i,e){i.uniform2iv(this.addr,e)}function AE(i,e){i.uniform3iv(this.addr,e)}function TE(i,e){i.uniform4iv(this.addr,e)}function CE(i,e){i.uniform1uiv(this.addr,e)}function RE(i,e){i.uniform2uiv(this.addr,e)}function PE(i,e){i.uniform3uiv(this.addr,e)}function IE(i,e){i.uniform4uiv(this.addr,e)}function LE(i,e,t){const n=this.cache,r=e.length,s=Nl(t,r);It(n,s)||(i.uniform1iv(this.addr,s),Lt(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||v0,s[a])}function DE(i,e,t){const n=this.cache,r=e.length,s=Nl(t,r);It(n,s)||(i.uniform1iv(this.addr,s),Lt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||M0,s[a])}function NE(i,e,t){const n=this.cache,r=e.length,s=Nl(t,r);It(n,s)||(i.uniform1iv(this.addr,s),Lt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||b0,s[a])}function UE(i,e,t){const n=this.cache,r=e.length,s=Nl(t,r);It(n,s)||(i.uniform1iv(this.addr,s),Lt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||y0,s[a])}function OE(i){switch(i){case 5126:return _E;case 35664:return xE;case 35665:return vE;case 35666:return yE;case 35674:return ME;case 35675:return bE;case 35676:return SE;case 5124:case 35670:return wE;case 35667:case 35671:return EE;case 35668:case 35672:return AE;case 35669:case 35673:return TE;case 5125:return CE;case 36294:return RE;case 36295:return PE;case 36296:return IE;case 35678:case 36198:case 36298:case 36306:case 35682:return LE;case 35679:case 36299:case 36307:return DE;case 35680:case 36300:case 36308:case 36293:return NE;case 36289:case 36303:case 36311:case 36292:return UE}}class FE{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=gE(t.type)}}class BE{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=OE(t.type)}}class zE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const ku=/(\w+)(\])?(\[|\.)?/g;function hp(i,e){i.seq.push(e),i.map[e.id]=e}function kE(i,e,t){const n=i.name,r=n.length;for(ku.lastIndex=0;;){const s=ku.exec(n),a=ku.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){hp(t,l===void 0?new FE(o,i,e):new BE(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new zE(o),hp(t,h)),t=h}}}class pc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);kE(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function fp(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const VE=37297;let HE=0;function GE(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function WE(i){const e=Qe.getPrimaries(Qe.workingColorSpace),t=Qe.getPrimaries(i);let n;switch(e===t?n="":e===Ca&&t===Ta?n="LinearDisplayP3ToLinearSRGB":e===Ta&&t===Ca&&(n="LinearSRGBToLinearDisplayP3"),i){case wi:case $a:return[n,"LinearTransferOETF"];case En:case Rl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function dp(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+GE(i.getShaderSource(e),a)}else return r}function XE(i,e){const t=WE(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function qE(i,e){let t;switch(e){case G_:t="Linear";break;case W_:t="Reinhard";break;case X_:t="Cineon";break;case yf:t="ACESFilmic";break;case Y_:t="AgX";break;case Z_:t="Neutral";break;case q_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Uo=new R;function YE(){Qe.getLuminanceCoefficients(Uo);const i=Uo.x.toFixed(4),e=Uo.y.toFixed(4),t=Uo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ZE(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sa).join(`
`)}function KE(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function JE(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function sa(i){return i!==""}function pp(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $E=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fh(i){return i.replace($E,QE)}const jE=new Map;function QE(i,e){let t=Ie[e];if(t===void 0){const n=jE.get(e);if(n!==void 0)t=Ie[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Fh(t)}const eA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gp(i){return i.replace(eA,tA)}function tA(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function _p(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function nA(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===vf?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===yl?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Vn&&(e="SHADOWMAP_TYPE_VSM"),e}function iA(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case gi:case Zi:e="ENVMAP_TYPE_CUBE";break;case Ns:e="ENVMAP_TYPE_CUBE_UV";break}return e}function rA(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Zi:e="ENVMAP_MODE_REFRACTION";break}return e}function sA(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ka:e="ENVMAP_BLENDING_MULTIPLY";break;case V_:e="ENVMAP_BLENDING_MIX";break;case H_:e="ENVMAP_BLENDING_ADD";break}return e}function aA(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function oA(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=nA(t),l=iA(t),u=rA(t),h=sA(t),f=aA(t),d=ZE(t),p=KE(s),_=r.createProgram();let m,g,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(sa).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(sa).join(`
`),g.length>0&&(g+=`
`)):(m=[_p(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sa).join(`
`),g=[_p(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fi?"#define TONE_MAPPING":"",t.toneMapping!==fi?Ie.tonemapping_pars_fragment:"",t.toneMapping!==fi?qE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ie.colorspace_pars_fragment,XE("linearToOutputTexel",t.outputColorSpace),YE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(sa).join(`
`)),a=Fh(a),a=pp(a,t),a=mp(a,t),o=Fh(o),o=pp(o,t),o=mp(o,t),a=gp(a),o=gp(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===Uh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Uh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const x=v+m+a,M=v+g+o,A=fp(r,r.VERTEX_SHADER,x),T=fp(r,r.FRAGMENT_SHADER,M);r.attachShader(_,A),r.attachShader(_,T),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function w(b){if(i.debug.checkShaderErrors){const F=r.getProgramInfoLog(_).trim(),k=r.getShaderInfoLog(A).trim(),H=r.getShaderInfoLog(T).trim();let Z=!0,V=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,A,T);else{const Q=dp(r,A,"vertex"),W=dp(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+F+`
`+Q+`
`+W)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(k===""||H==="")&&(V=!1);V&&(b.diagnostics={runnable:Z,programLog:F,vertexShader:{log:k,prefix:m},fragmentShader:{log:H,prefix:g}})}r.deleteShader(A),r.deleteShader(T),P=new pc(r,_),U=JE(r,_)}let P;this.getUniforms=function(){return P===void 0&&w(this),P};let U;this.getAttributes=function(){return U===void 0&&w(this),U};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(_,VE)),y},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=HE++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=T,this}let cA=0;class lA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new uA(e),t.set(e,n)),n}}class uA{constructor(e){this.id=cA++,this.code=e,this.usedTimes=0}}function hA(i,e,t,n,r,s,a){const o=new Il,c=new lA,l=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.reverseDepthBuffer,d=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return l.add(y),y===0?"uv":`uv${y}`}function g(y,b,F,k,H){const Z=k.fog,V=H.geometry,Q=y.isMeshStandardMaterial?k.environment:null,W=(y.isMeshStandardMaterial?t:e).get(y.envMap||Q),ue=W&&W.mapping===Ns?W.image.height:null,pe=_[y.type];y.precision!==null&&(p=r.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const me=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Ze=me!==void 0?me.length:0;let nt=0;V.morphAttributes.position!==void 0&&(nt=1),V.morphAttributes.normal!==void 0&&(nt=2),V.morphAttributes.color!==void 0&&(nt=3);let X,te,Me,le;if(pe){const rn=Ln[pe];X=rn.vertexShader,te=rn.fragmentShader}else X=y.vertexShader,te=y.fragmentShader,c.update(y),Me=c.getVertexShaderID(y),le=c.getFragmentShaderID(y);const De=i.getRenderTarget(),Le=H.isInstancedMesh===!0,ze=H.isBatchedMesh===!0,qe=!!y.map,J=!!y.matcap,I=!!W,se=!!y.aoMap,re=!!y.lightMap,ee=!!y.bumpMap,ae=!!y.normalMap,Ce=!!y.displacementMap,ge=!!y.emissiveMap,C=!!y.metalnessMap,S=!!y.roughnessMap,O=y.anisotropy>0,q=y.clearcoat>0,$=y.dispersion>0,Y=y.iridescence>0,Ee=y.sheen>0,ce=y.transmission>0,ve=O&&!!y.anisotropyMap,Ke=q&&!!y.clearcoatMap,ne=q&&!!y.clearcoatNormalMap,ye=q&&!!y.clearcoatRoughnessMap,Fe=Y&&!!y.iridescenceMap,Be=Y&&!!y.iridescenceThicknessMap,be=Ee&&!!y.sheenColorMap,Je=Ee&&!!y.sheenRoughnessMap,Ve=!!y.specularMap,ut=!!y.specularColorMap,L=!!y.specularIntensityMap,_e=ce&&!!y.transmissionMap,G=ce&&!!y.thicknessMap,j=!!y.gradientMap,he=!!y.alphaMap,xe=y.alphaTest>0,$e=!!y.alphaHash,Et=!!y.extensions;let nn=fi;y.toneMapped&&(De===null||De.isXRRenderTarget===!0)&&(nn=i.toneMapping);const it={shaderID:pe,shaderType:y.type,shaderName:y.name,vertexShader:X,fragmentShader:te,defines:y.defines,customVertexShaderID:Me,customFragmentShaderID:le,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:ze,batchingColor:ze&&H._colorsTexture!==null,instancing:Le,instancingColor:Le&&H.instanceColor!==null,instancingMorph:Le&&H.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:De===null?i.outputColorSpace:De.isXRRenderTarget===!0?De.texture.colorSpace:wi,alphaToCoverage:!!y.alphaToCoverage,map:qe,matcap:J,envMap:I,envMapMode:I&&W.mapping,envMapCubeUVHeight:ue,aoMap:se,lightMap:re,bumpMap:ee,normalMap:ae,displacementMap:d&&Ce,emissiveMap:ge,normalMapObjectSpace:ae&&y.normalMapType===t0,normalMapTangentSpace:ae&&y.normalMapType===ji,metalnessMap:C,roughnessMap:S,anisotropy:O,anisotropyMap:ve,clearcoat:q,clearcoatMap:Ke,clearcoatNormalMap:ne,clearcoatRoughnessMap:ye,dispersion:$,iridescence:Y,iridescenceMap:Fe,iridescenceThicknessMap:Be,sheen:Ee,sheenColorMap:be,sheenRoughnessMap:Je,specularMap:Ve,specularColorMap:ut,specularIntensityMap:L,transmission:ce,transmissionMap:_e,thicknessMap:G,gradientMap:j,opaque:y.transparent===!1&&y.blending===Cr&&y.alphaToCoverage===!1,alphaMap:he,alphaTest:xe,alphaHash:$e,combine:y.combine,mapUv:qe&&m(y.map.channel),aoMapUv:se&&m(y.aoMap.channel),lightMapUv:re&&m(y.lightMap.channel),bumpMapUv:ee&&m(y.bumpMap.channel),normalMapUv:ae&&m(y.normalMap.channel),displacementMapUv:Ce&&m(y.displacementMap.channel),emissiveMapUv:ge&&m(y.emissiveMap.channel),metalnessMapUv:C&&m(y.metalnessMap.channel),roughnessMapUv:S&&m(y.roughnessMap.channel),anisotropyMapUv:ve&&m(y.anisotropyMap.channel),clearcoatMapUv:Ke&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:ne&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:Be&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:be&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:Je&&m(y.sheenRoughnessMap.channel),specularMapUv:Ve&&m(y.specularMap.channel),specularColorMapUv:ut&&m(y.specularColorMap.channel),specularIntensityMapUv:L&&m(y.specularIntensityMap.channel),transmissionMapUv:_e&&m(y.transmissionMap.channel),thicknessMapUv:G&&m(y.thicknessMap.channel),alphaMapUv:he&&m(y.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(ae||O),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!V.attributes.uv&&(qe||he),fog:!!Z,useFog:y.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:f,skinning:H.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Ze,morphTextureStride:nt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:nn,decodeVideoTexture:qe&&y.map.isVideoTexture===!0&&Qe.getTransfer(y.map.colorSpace)===ht,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Dn,flipSided:y.side===Qt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Et&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Et&&y.extensions.multiDraw===!0||ze)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return it.vertexUv1s=l.has(1),it.vertexUv2s=l.has(2),it.vertexUv3s=l.has(3),l.clear(),it}function v(y){const b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(const F in y.defines)b.push(F),b.push(y.defines[F]);return y.isRawShaderMaterial===!1&&(x(b,y),M(b,y),b.push(i.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function x(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function M(y,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reverseDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.alphaToCoverage&&o.enable(20),y.push(o.mask)}function A(y){const b=_[y.type];let F;if(b){const k=Ln[b];F=m0.clone(k.uniforms)}else F=y.uniforms;return F}function T(y,b){let F;for(let k=0,H=u.length;k<H;k++){const Z=u[k];if(Z.cacheKey===b){F=Z,++F.usedTimes;break}}return F===void 0&&(F=new oA(i,b,y,s),u.push(F)),F}function w(y){if(--y.usedTimes===0){const b=u.indexOf(y);u[b]=u[u.length-1],u.pop(),y.destroy()}}function P(y){c.remove(y)}function U(){c.dispose()}return{getParameters:g,getProgramCacheKey:v,getUniforms:A,acquireProgram:T,releaseProgram:w,releaseShaderCache:P,programs:u,dispose:U}}function fA(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function dA(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function xp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function vp(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(h,f,d,p,_,m){let g=i[e];return g===void 0?(g={id:h.id,object:h,geometry:f,material:d,groupOrder:p,renderOrder:h.renderOrder,z:_,group:m},i[e]=g):(g.id=h.id,g.object=h,g.geometry=f,g.material=d,g.groupOrder=p,g.renderOrder=h.renderOrder,g.z=_,g.group=m),e++,g}function o(h,f,d,p,_,m){const g=a(h,f,d,p,_,m);d.transmission>0?n.push(g):d.transparent===!0?r.push(g):t.push(g)}function c(h,f,d,p,_,m){const g=a(h,f,d,p,_,m);d.transmission>0?n.unshift(g):d.transparent===!0?r.unshift(g):t.unshift(g)}function l(h,f){t.length>1&&t.sort(h||dA),n.length>1&&n.sort(f||xp),r.length>1&&r.sort(f||xp)}function u(){for(let h=e,f=i.length;h<f;h++){const d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:c,finish:u,sort:l}}function pA(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new vp,i.set(n,[a])):r>=s.length?(a=new vp,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function mA(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new de};break;case"SpotLight":t={position:new R,direction:new R,color:new de,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new de,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new de,groundColor:new de};break;case"RectAreaLight":t={color:new de,position:new R,halfWidth:new R,halfHeight:new R};break}return i[e.id]=t,t}}}function gA(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let _A=0;function xA(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function vA(i){const e=new mA,t=gA(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);const r=new R,s=new Pe,a=new Pe;function o(l){let u=0,h=0,f=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let d=0,p=0,_=0,m=0,g=0,v=0,x=0,M=0,A=0,T=0,w=0;l.sort(xA);for(let U=0,y=l.length;U<y;U++){const b=l[U],F=b.color,k=b.intensity,H=b.distance,Z=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)u+=F.r*k,h+=F.g*k,f+=F.b*k;else if(b.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(b.sh.coefficients[V],k);w++}else if(b.isDirectionalLight){const V=e.get(b);if(V.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const Q=b.shadow,W=t.get(b);W.shadowIntensity=Q.intensity,W.shadowBias=Q.bias,W.shadowNormalBias=Q.normalBias,W.shadowRadius=Q.radius,W.shadowMapSize=Q.mapSize,n.directionalShadow[d]=W,n.directionalShadowMap[d]=Z,n.directionalShadowMatrix[d]=b.shadow.matrix,v++}n.directional[d]=V,d++}else if(b.isSpotLight){const V=e.get(b);V.position.setFromMatrixPosition(b.matrixWorld),V.color.copy(F).multiplyScalar(k),V.distance=H,V.coneCos=Math.cos(b.angle),V.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),V.decay=b.decay,n.spot[_]=V;const Q=b.shadow;if(b.map&&(n.spotLightMap[A]=b.map,A++,Q.updateMatrices(b),b.castShadow&&T++),n.spotLightMatrix[_]=Q.matrix,b.castShadow){const W=t.get(b);W.shadowIntensity=Q.intensity,W.shadowBias=Q.bias,W.shadowNormalBias=Q.normalBias,W.shadowRadius=Q.radius,W.shadowMapSize=Q.mapSize,n.spotShadow[_]=W,n.spotShadowMap[_]=Z,M++}_++}else if(b.isRectAreaLight){const V=e.get(b);V.color.copy(F).multiplyScalar(k),V.halfWidth.set(b.width*.5,0,0),V.halfHeight.set(0,b.height*.5,0),n.rectArea[m]=V,m++}else if(b.isPointLight){const V=e.get(b);if(V.color.copy(b.color).multiplyScalar(b.intensity),V.distance=b.distance,V.decay=b.decay,b.castShadow){const Q=b.shadow,W=t.get(b);W.shadowIntensity=Q.intensity,W.shadowBias=Q.bias,W.shadowNormalBias=Q.normalBias,W.shadowRadius=Q.radius,W.shadowMapSize=Q.mapSize,W.shadowCameraNear=Q.camera.near,W.shadowCameraFar=Q.camera.far,n.pointShadow[p]=W,n.pointShadowMap[p]=Z,n.pointShadowMatrix[p]=b.shadow.matrix,x++}n.point[p]=V,p++}else if(b.isHemisphereLight){const V=e.get(b);V.skyColor.copy(b.color).multiplyScalar(k),V.groundColor.copy(b.groundColor).multiplyScalar(k),n.hemi[g]=V,g++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=oe.LTC_FLOAT_1,n.rectAreaLTC2=oe.LTC_FLOAT_2):(n.rectAreaLTC1=oe.LTC_HALF_1,n.rectAreaLTC2=oe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const P=n.hash;(P.directionalLength!==d||P.pointLength!==p||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==g||P.numDirectionalShadows!==v||P.numPointShadows!==x||P.numSpotShadows!==M||P.numSpotMaps!==A||P.numLightProbes!==w)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=p,n.hemi.length=g,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=M+A-T,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=w,P.directionalLength=d,P.pointLength=p,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=g,P.numDirectionalShadows=v,P.numPointShadows=x,P.numSpotShadows=M,P.numSpotMaps=A,P.numLightProbes=w,n.version=_A++)}function c(l,u){let h=0,f=0,d=0,p=0,_=0;const m=u.matrixWorldInverse;for(let g=0,v=l.length;g<v;g++){const x=l[g];if(x.isDirectionalLight){const M=n.directional[h];M.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),h++}else if(x.isSpotLight){const M=n.spot[d];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),d++}else if(x.isRectAreaLight){const M=n.rectArea[p];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),a.identity(),s.copy(x.matrixWorld),s.premultiply(m),a.extractRotation(s),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),p++}else if(x.isPointLight){const M=n.point[f];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const M=n.hemi[_];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:n}}function yp(i){const e=new vA(i),t=[],n=[];function r(u){l.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function yA(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new yp(i),e.set(r,[o])):s>=a.length?(o=new yp(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class zf extends Xt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Q_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class kf extends Xt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const MA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function SA(i,e,t){let n=new Qa;const r=new K,s=new K,a=new et,o=new zf({depthPacking:e0}),c=new kf,l={},u=t.maxTextureSize,h={[mi]:Qt,[Qt]:mi,[Dn]:Dn},f=new On({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new K},radius:{value:4}},vertexShader:MA,fragmentShader:bA}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const p=new We;p.setAttribute("position",new ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new wt(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vf;let g=this.type;this.render=function(T,w,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const U=i.getRenderTarget(),y=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),F=i.state;F.setBlending(hi),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const k=g!==Vn&&this.type===Vn,H=g===Vn&&this.type!==Vn;for(let Z=0,V=T.length;Z<V;Z++){const Q=T[Z],W=Q.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const ue=W.getFrameExtents();if(r.multiply(ue),s.copy(W.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ue.x),r.x=s.x*ue.x,W.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ue.y),r.y=s.y*ue.y,W.mapSize.y=s.y)),W.map===null||k===!0||H===!0){const me=this.type!==Vn?{minFilter:Ot,magFilter:Ot}:{};W.map!==null&&W.map.dispose(),W.map=new Un(r.x,r.y,me),W.map.texture.name=Q.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const pe=W.getViewportCount();for(let me=0;me<pe;me++){const Ze=W.getViewport(me);a.set(s.x*Ze.x,s.y*Ze.y,s.x*Ze.z,s.y*Ze.w),F.viewport(a),W.updateMatrices(Q,me),n=W.getFrustum(),M(w,P,W.camera,Q,this.type)}W.isPointLightShadow!==!0&&this.type===Vn&&v(W,P),W.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(U,y,b)};function v(T,w){const P=e.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Un(r.x,r.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(w,null,P,f,_,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(w,null,P,d,_,null)}function x(T,w,P,U){let y=null;const b=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(b!==void 0)y=b;else if(y=P.isPointLight===!0?c:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const F=y.uuid,k=w.uuid;let H=l[F];H===void 0&&(H={},l[F]=H);let Z=H[k];Z===void 0&&(Z=y.clone(),H[k]=Z,w.addEventListener("dispose",A)),y=Z}if(y.visible=w.visible,y.wireframe=w.wireframe,U===Vn?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:h[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const F=i.properties.get(y);F.light=P}return y}function M(T,w,P,U,y){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===Vn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const k=e.update(T),H=T.material;if(Array.isArray(H)){const Z=k.groups;for(let V=0,Q=Z.length;V<Q;V++){const W=Z[V],ue=H[W.materialIndex];if(ue&&ue.visible){const pe=x(T,ue,U,y);T.onBeforeShadow(i,T,w,P,k,pe,W),i.renderBufferDirect(P,null,k,pe,T,W),T.onAfterShadow(i,T,w,P,k,pe,W)}}}else if(H.visible){const Z=x(T,H,U,y);T.onBeforeShadow(i,T,w,P,k,Z,null),i.renderBufferDirect(P,null,k,Z,T,null),T.onAfterShadow(i,T,w,P,k,Z,null)}}const F=T.children;for(let k=0,H=F.length;k<H;k++)M(F[k],w,P,U,y)}function A(T){T.target.removeEventListener("dispose",A);for(const P in l){const U=l[P],y=T.target.uuid;y in U&&(U[y].dispose(),delete U[y])}}}const wA={[Ac]:Tc,[Cc]:Ic,[Rc]:Lc,[Dr]:Pc,[Tc]:Ac,[Ic]:Cc,[Lc]:Rc,[Pc]:Dr};function EA(i){function e(){let L=!1;const _e=new et;let G=null;const j=new et(0,0,0,0);return{setMask:function(he){G!==he&&!L&&(i.colorMask(he,he,he,he),G=he)},setLocked:function(he){L=he},setClear:function(he,xe,$e,Et,nn){nn===!0&&(he*=Et,xe*=Et,$e*=Et),_e.set(he,xe,$e,Et),j.equals(_e)===!1&&(i.clearColor(he,xe,$e,Et),j.copy(_e))},reset:function(){L=!1,G=null,j.set(-1,0,0,0)}}}function t(){let L=!1,_e=!1,G=null,j=null,he=null;return{setReversed:function(xe){_e=xe},setTest:function(xe){xe?Me(i.DEPTH_TEST):le(i.DEPTH_TEST)},setMask:function(xe){G!==xe&&!L&&(i.depthMask(xe),G=xe)},setFunc:function(xe){if(_e&&(xe=wA[xe]),j!==xe){switch(xe){case Ac:i.depthFunc(i.NEVER);break;case Tc:i.depthFunc(i.ALWAYS);break;case Cc:i.depthFunc(i.LESS);break;case Dr:i.depthFunc(i.LEQUAL);break;case Rc:i.depthFunc(i.EQUAL);break;case Pc:i.depthFunc(i.GEQUAL);break;case Ic:i.depthFunc(i.GREATER);break;case Lc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}j=xe}},setLocked:function(xe){L=xe},setClear:function(xe){he!==xe&&(i.clearDepth(xe),he=xe)},reset:function(){L=!1,G=null,j=null,he=null}}}function n(){let L=!1,_e=null,G=null,j=null,he=null,xe=null,$e=null,Et=null,nn=null;return{setTest:function(it){L||(it?Me(i.STENCIL_TEST):le(i.STENCIL_TEST))},setMask:function(it){_e!==it&&!L&&(i.stencilMask(it),_e=it)},setFunc:function(it,rn,ei){(G!==it||j!==rn||he!==ei)&&(i.stencilFunc(it,rn,ei),G=it,j=rn,he=ei)},setOp:function(it,rn,ei){(xe!==it||$e!==rn||Et!==ei)&&(i.stencilOp(it,rn,ei),xe=it,$e=rn,Et=ei)},setLocked:function(it){L=it},setClear:function(it){nn!==it&&(i.clearStencil(it),nn=it)},reset:function(){L=!1,_e=null,G=null,j=null,he=null,xe=null,$e=null,Et=null,nn=null}}}const r=new e,s=new t,a=new n,o=new WeakMap,c=new WeakMap;let l={},u={},h=new WeakMap,f=[],d=null,p=!1,_=null,m=null,g=null,v=null,x=null,M=null,A=null,T=new de(0,0,0),w=0,P=!1,U=null,y=null,b=null,F=null,k=null;const H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,V=0;const Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(Q)[1]),Z=V>=1):Q.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),Z=V>=2);let W=null,ue={};const pe=i.getParameter(i.SCISSOR_BOX),me=i.getParameter(i.VIEWPORT),Ze=new et().fromArray(pe),nt=new et().fromArray(me);function X(L,_e,G,j){const he=new Uint8Array(4),xe=i.createTexture();i.bindTexture(L,xe),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $e=0;$e<G;$e++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(_e,0,i.RGBA,1,1,j,0,i.RGBA,i.UNSIGNED_BYTE,he):i.texImage2D(_e+$e,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,he);return xe}const te={};te[i.TEXTURE_2D]=X(i.TEXTURE_2D,i.TEXTURE_2D,1),te[i.TEXTURE_CUBE_MAP]=X(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[i.TEXTURE_2D_ARRAY]=X(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),te[i.TEXTURE_3D]=X(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),Me(i.DEPTH_TEST),s.setFunc(Dr),re(!1),ee(Rh),Me(i.CULL_FACE),I(hi);function Me(L){l[L]!==!0&&(i.enable(L),l[L]=!0)}function le(L){l[L]!==!1&&(i.disable(L),l[L]=!1)}function De(L,_e){return u[L]!==_e?(i.bindFramebuffer(L,_e),u[L]=_e,L===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=_e),L===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=_e),!0):!1}function Le(L,_e){let G=f,j=!1;if(L){G=h.get(_e),G===void 0&&(G=[],h.set(_e,G));const he=L.textures;if(G.length!==he.length||G[0]!==i.COLOR_ATTACHMENT0){for(let xe=0,$e=he.length;xe<$e;xe++)G[xe]=i.COLOR_ATTACHMENT0+xe;G.length=he.length,j=!0}}else G[0]!==i.BACK&&(G[0]=i.BACK,j=!0);j&&i.drawBuffers(G)}function ze(L){return d!==L?(i.useProgram(L),d=L,!0):!1}const qe={[Fi]:i.FUNC_ADD,[w_]:i.FUNC_SUBTRACT,[E_]:i.FUNC_REVERSE_SUBTRACT};qe[A_]=i.MIN,qe[T_]=i.MAX;const J={[C_]:i.ZERO,[R_]:i.ONE,[P_]:i.SRC_COLOR,[wc]:i.SRC_ALPHA,[O_]:i.SRC_ALPHA_SATURATE,[N_]:i.DST_COLOR,[L_]:i.DST_ALPHA,[I_]:i.ONE_MINUS_SRC_COLOR,[Ec]:i.ONE_MINUS_SRC_ALPHA,[U_]:i.ONE_MINUS_DST_COLOR,[D_]:i.ONE_MINUS_DST_ALPHA,[F_]:i.CONSTANT_COLOR,[B_]:i.ONE_MINUS_CONSTANT_COLOR,[z_]:i.CONSTANT_ALPHA,[k_]:i.ONE_MINUS_CONSTANT_ALPHA};function I(L,_e,G,j,he,xe,$e,Et,nn,it){if(L===hi){p===!0&&(le(i.BLEND),p=!1);return}if(p===!1&&(Me(i.BLEND),p=!0),L!==S_){if(L!==_||it!==P){if((m!==Fi||x!==Fi)&&(i.blendEquation(i.FUNC_ADD),m=Fi,x=Fi),it)switch(L){case Cr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ph:i.blendFunc(i.ONE,i.ONE);break;case Ih:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Lh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Cr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ph:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ih:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Lh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}g=null,v=null,M=null,A=null,T.set(0,0,0),w=0,_=L,P=it}return}he=he||_e,xe=xe||G,$e=$e||j,(_e!==m||he!==x)&&(i.blendEquationSeparate(qe[_e],qe[he]),m=_e,x=he),(G!==g||j!==v||xe!==M||$e!==A)&&(i.blendFuncSeparate(J[G],J[j],J[xe],J[$e]),g=G,v=j,M=xe,A=$e),(Et.equals(T)===!1||nn!==w)&&(i.blendColor(Et.r,Et.g,Et.b,nn),T.copy(Et),w=nn),_=L,P=!1}function se(L,_e){L.side===Dn?le(i.CULL_FACE):Me(i.CULL_FACE);let G=L.side===Qt;_e&&(G=!G),re(G),L.blending===Cr&&L.transparent===!1?I(hi):I(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),s.setFunc(L.depthFunc),s.setTest(L.depthTest),s.setMask(L.depthWrite),r.setMask(L.colorWrite);const j=L.stencilWrite;a.setTest(j),j&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ce(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Me(i.SAMPLE_ALPHA_TO_COVERAGE):le(i.SAMPLE_ALPHA_TO_COVERAGE)}function re(L){U!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),U=L)}function ee(L){L!==M_?(Me(i.CULL_FACE),L!==y&&(L===Rh?i.cullFace(i.BACK):L===b_?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):le(i.CULL_FACE),y=L}function ae(L){L!==b&&(Z&&i.lineWidth(L),b=L)}function Ce(L,_e,G){L?(Me(i.POLYGON_OFFSET_FILL),(F!==_e||k!==G)&&(i.polygonOffset(_e,G),F=_e,k=G)):le(i.POLYGON_OFFSET_FILL)}function ge(L){L?Me(i.SCISSOR_TEST):le(i.SCISSOR_TEST)}function C(L){L===void 0&&(L=i.TEXTURE0+H-1),W!==L&&(i.activeTexture(L),W=L)}function S(L,_e,G){G===void 0&&(W===null?G=i.TEXTURE0+H-1:G=W);let j=ue[G];j===void 0&&(j={type:void 0,texture:void 0},ue[G]=j),(j.type!==L||j.texture!==_e)&&(W!==G&&(i.activeTexture(G),W=G),i.bindTexture(L,_e||te[L]),j.type=L,j.texture=_e)}function O(){const L=ue[W];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ee(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ce(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ve(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ke(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ne(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ye(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Fe(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Be(L){Ze.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),Ze.copy(L))}function be(L){nt.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),nt.copy(L))}function Je(L,_e){let G=c.get(_e);G===void 0&&(G=new WeakMap,c.set(_e,G));let j=G.get(L);j===void 0&&(j=i.getUniformBlockIndex(_e,L.name),G.set(L,j))}function Ve(L,_e){const j=c.get(_e).get(L);o.get(_e)!==j&&(i.uniformBlockBinding(_e,j,L.__bindingPointIndex),o.set(_e,j))}function ut(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},W=null,ue={},u={},h=new WeakMap,f=[],d=null,p=!1,_=null,m=null,g=null,v=null,x=null,M=null,A=null,T=new de(0,0,0),w=0,P=!1,U=null,y=null,b=null,F=null,k=null,Ze.set(0,0,i.canvas.width,i.canvas.height),nt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:Me,disable:le,bindFramebuffer:De,drawBuffers:Le,useProgram:ze,setBlending:I,setMaterial:se,setFlipSided:re,setCullFace:ee,setLineWidth:ae,setPolygonOffset:Ce,setScissorTest:ge,activeTexture:C,bindTexture:S,unbindTexture:O,compressedTexImage2D:q,compressedTexImage3D:$,texImage2D:ye,texImage3D:Fe,updateUBOMapping:Je,uniformBlockBinding:Ve,texStorage2D:Ke,texStorage3D:ne,texSubImage2D:Y,texSubImage3D:Ee,compressedTexSubImage2D:ce,compressedTexSubImage3D:ve,scissor:Be,viewport:be,reset:ut}}function AA(i,e){const t=i.image&&i.image.width?i.image.width/i.image.height:1;return t>e?(i.repeat.x=1,i.repeat.y=t/e,i.offset.x=0,i.offset.y=(1-i.repeat.y)/2):(i.repeat.x=e/t,i.repeat.y=1,i.offset.x=(1-i.repeat.x)/2,i.offset.y=0),i}function TA(i,e){const t=i.image&&i.image.width?i.image.width/i.image.height:1;return t>e?(i.repeat.x=e/t,i.repeat.y=1,i.offset.x=(1-i.repeat.x)/2,i.offset.y=0):(i.repeat.x=1,i.repeat.y=t/e,i.offset.x=0,i.offset.y=(1-i.repeat.y)/2),i}function CA(i){return i.repeat.x=1,i.repeat.y=1,i.offset.x=0,i.offset.y=0,i}function Bh(i,e,t,n){const r=RA(n);switch(t){case Ef:return i*e;case Tf:return i*e;case Cf:return i*e*2;case El:return i*e/r.components*r.byteLength;case Ja:return i*e/r.components*r.byteLength;case Rf:return i*e*2/r.components*r.byteLength;case Al:return i*e*2/r.components*r.byteLength;case Af:return i*e*3/r.components*r.byteLength;case $t:return i*e*4/r.components*r.byteLength;case Tl:return i*e*4/r.components*r.byteLength;case la:case ua:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ha:case fa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Nc:case Oc:return Math.max(i,16)*Math.max(e,8)/4;case Dc:case Uc:return Math.max(i,8)*Math.max(e,8)/2;case Fc:case Bc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case zc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case kc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Vc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Hc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Gc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Wc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Xc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case qc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Yc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Zc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Kc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Jc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case $c:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case jc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Qc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case da:case el:case tl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Pf:case nl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case il:case rl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function RA(i){switch(i){case $n:case bf:return{byteLength:1,components:1};case Ts:case Sf:case Us:return{byteLength:2,components:1};case Sl:case wl:return{byteLength:2,components:4};case _i:case bl:case cn:return{byteLength:4,components:1};case wf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}const PA={contain:AA,cover:TA,fill:CA,getByteLength:Bh};function IA(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new K,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(C,S){return d?new OffscreenCanvas(C,S):Ia("canvas")}function _(C,S,O){let q=1;const $=ge(C);if(($.width>O||$.height>O)&&(q=O/Math.max($.width,$.height)),q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Y=Math.floor(q*$.width),Ee=Math.floor(q*$.height);h===void 0&&(h=p(Y,Ee));const ce=S?p(Y,Ee):h;return ce.width=Y,ce.height=Ee,ce.getContext("2d").drawImage(C,0,0,Y,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+Y+"x"+Ee+")."),ce}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),C;return C}function m(C){return C.generateMipmaps&&C.minFilter!==Ot&&C.minFilter!==Tt}function g(C){i.generateMipmap(C)}function v(C,S,O,q,$=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Y=S;if(S===i.RED&&(O===i.FLOAT&&(Y=i.R32F),O===i.HALF_FLOAT&&(Y=i.R16F),O===i.UNSIGNED_BYTE&&(Y=i.R8)),S===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.R8UI),O===i.UNSIGNED_SHORT&&(Y=i.R16UI),O===i.UNSIGNED_INT&&(Y=i.R32UI),O===i.BYTE&&(Y=i.R8I),O===i.SHORT&&(Y=i.R16I),O===i.INT&&(Y=i.R32I)),S===i.RG&&(O===i.FLOAT&&(Y=i.RG32F),O===i.HALF_FLOAT&&(Y=i.RG16F),O===i.UNSIGNED_BYTE&&(Y=i.RG8)),S===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RG8UI),O===i.UNSIGNED_SHORT&&(Y=i.RG16UI),O===i.UNSIGNED_INT&&(Y=i.RG32UI),O===i.BYTE&&(Y=i.RG8I),O===i.SHORT&&(Y=i.RG16I),O===i.INT&&(Y=i.RG32I)),S===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),O===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),O===i.UNSIGNED_INT&&(Y=i.RGB32UI),O===i.BYTE&&(Y=i.RGB8I),O===i.SHORT&&(Y=i.RGB16I),O===i.INT&&(Y=i.RGB32I)),S===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),O===i.UNSIGNED_INT&&(Y=i.RGBA32UI),O===i.BYTE&&(Y=i.RGBA8I),O===i.SHORT&&(Y=i.RGBA16I),O===i.INT&&(Y=i.RGBA32I)),S===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),S===i.RGBA){const Ee=$?Aa:Qe.getTransfer(q);O===i.FLOAT&&(Y=i.RGBA32F),O===i.HALF_FLOAT&&(Y=i.RGBA16F),O===i.UNSIGNED_BYTE&&(Y=Ee===ht?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function x(C,S){let O;return C?S===null||S===_i||S===Nr?O=i.DEPTH24_STENCIL8:S===cn?O=i.DEPTH32F_STENCIL8:S===Ts&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===_i||S===Nr?O=i.DEPTH_COMPONENT24:S===cn?O=i.DEPTH_COMPONENT32F:S===Ts&&(O=i.DEPTH_COMPONENT16),O}function M(C,S){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ot&&C.minFilter!==Tt?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function A(C){const S=C.target;S.removeEventListener("dispose",A),w(S),S.isVideoTexture&&u.delete(S)}function T(C){const S=C.target;S.removeEventListener("dispose",T),U(S)}function w(C){const S=n.get(C);if(S.__webglInit===void 0)return;const O=C.source,q=f.get(O);if(q){const $=q[S.__cacheKey];$.usedTimes--,$.usedTimes===0&&P(C),Object.keys(q).length===0&&f.delete(O)}n.remove(C)}function P(C){const S=n.get(C);i.deleteTexture(S.__webglTexture);const O=C.source,q=f.get(O);delete q[S.__cacheKey],a.memory.textures--}function U(C){const S=n.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(S.__webglFramebuffer[q]))for(let $=0;$<S.__webglFramebuffer[q].length;$++)i.deleteFramebuffer(S.__webglFramebuffer[q][$]);else i.deleteFramebuffer(S.__webglFramebuffer[q]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[q])}else{if(Array.isArray(S.__webglFramebuffer))for(let q=0;q<S.__webglFramebuffer.length;q++)i.deleteFramebuffer(S.__webglFramebuffer[q]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let q=0;q<S.__webglColorRenderbuffer.length;q++)S.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[q]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const O=C.textures;for(let q=0,$=O.length;q<$;q++){const Y=n.get(O[q]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(O[q])}n.remove(C)}let y=0;function b(){y=0}function F(){const C=y;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),y+=1,C}function k(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function H(C,S){const O=n.get(C);if(C.isVideoTexture&&ae(C),C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){const q=C.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{nt(O,C,S);return}}t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+S)}function Z(C,S){const O=n.get(C);if(C.version>0&&O.__version!==C.version){nt(O,C,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+S)}function V(C,S){const O=n.get(C);if(C.version>0&&O.__version!==C.version){nt(O,C,S);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+S)}function Q(C,S){const O=n.get(C);if(C.version>0&&O.__version!==C.version){X(O,C,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+S)}const W={[ba]:i.REPEAT,[on]:i.CLAMP_TO_EDGE,[Sa]:i.MIRRORED_REPEAT},ue={[Ot]:i.NEAREST,[Mf]:i.NEAREST_MIPMAP_NEAREST,[ms]:i.NEAREST_MIPMAP_LINEAR,[Tt]:i.LINEAR,[ca]:i.LINEAR_MIPMAP_NEAREST,[Wn]:i.LINEAR_MIPMAP_LINEAR},pe={[n0]:i.NEVER,[c0]:i.ALWAYS,[i0]:i.LESS,[Lf]:i.LEQUAL,[r0]:i.EQUAL,[o0]:i.GEQUAL,[s0]:i.GREATER,[a0]:i.NOTEQUAL};function me(C,S){if(S.type===cn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Tt||S.magFilter===ca||S.magFilter===ms||S.magFilter===Wn||S.minFilter===Tt||S.minFilter===ca||S.minFilter===ms||S.minFilter===Wn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,W[S.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,W[S.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,W[S.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,ue[S.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,ue[S.minFilter]),S.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,pe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Ot||S.minFilter!==ms&&S.minFilter!==Wn||S.type===cn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Ze(C,S){let O=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",A));const q=S.source;let $=f.get(q);$===void 0&&($={},f.set(q,$));const Y=k(S);if(Y!==C.__cacheKey){$[Y]===void 0&&($[Y]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),$[Y].usedTimes++;const Ee=$[C.__cacheKey];Ee!==void 0&&($[C.__cacheKey].usedTimes--,Ee.usedTimes===0&&P(S)),C.__cacheKey=Y,C.__webglTexture=$[Y].texture}return O}function nt(C,S,O){let q=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(q=i.TEXTURE_3D);const $=Ze(C,S),Y=S.source;t.bindTexture(q,C.__webglTexture,i.TEXTURE0+O);const Ee=n.get(Y);if(Y.version!==Ee.__version||$===!0){t.activeTexture(i.TEXTURE0+O);const ce=Qe.getPrimaries(Qe.workingColorSpace),ve=S.colorSpace===oi?null:Qe.getPrimaries(S.colorSpace),Ke=S.colorSpace===oi||ce===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);let ne=_(S.image,!1,r.maxTextureSize);ne=Ce(S,ne);const ye=s.convert(S.format,S.colorSpace),Fe=s.convert(S.type);let Be=v(S.internalFormat,ye,Fe,S.colorSpace,S.isVideoTexture);me(q,S);let be;const Je=S.mipmaps,Ve=S.isVideoTexture!==!0,ut=Ee.__version===void 0||$===!0,L=Y.dataReady,_e=M(S,ne);if(S.isDepthTexture)Be=x(S.format===Ur,S.type),ut&&(Ve?t.texStorage2D(i.TEXTURE_2D,1,Be,ne.width,ne.height):t.texImage2D(i.TEXTURE_2D,0,Be,ne.width,ne.height,0,ye,Fe,null));else if(S.isDataTexture)if(Je.length>0){Ve&&ut&&t.texStorage2D(i.TEXTURE_2D,_e,Be,Je[0].width,Je[0].height);for(let G=0,j=Je.length;G<j;G++)be=Je[G],Ve?L&&t.texSubImage2D(i.TEXTURE_2D,G,0,0,be.width,be.height,ye,Fe,be.data):t.texImage2D(i.TEXTURE_2D,G,Be,be.width,be.height,0,ye,Fe,be.data);S.generateMipmaps=!1}else Ve?(ut&&t.texStorage2D(i.TEXTURE_2D,_e,Be,ne.width,ne.height),L&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ne.width,ne.height,ye,Fe,ne.data)):t.texImage2D(i.TEXTURE_2D,0,Be,ne.width,ne.height,0,ye,Fe,ne.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ve&&ut&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,Be,Je[0].width,Je[0].height,ne.depth);for(let G=0,j=Je.length;G<j;G++)if(be=Je[G],S.format!==$t)if(ye!==null)if(Ve){if(L)if(S.layerUpdates.size>0){const he=Bh(be.width,be.height,S.format,S.type);for(const xe of S.layerUpdates){const $e=be.data.subarray(xe*he/be.data.BYTES_PER_ELEMENT,(xe+1)*he/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,xe,be.width,be.height,1,ye,$e,0,0)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,be.width,be.height,ne.depth,ye,be.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,G,Be,be.width,be.height,ne.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?L&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,be.width,be.height,ne.depth,ye,Fe,be.data):t.texImage3D(i.TEXTURE_2D_ARRAY,G,Be,be.width,be.height,ne.depth,0,ye,Fe,be.data)}else{Ve&&ut&&t.texStorage2D(i.TEXTURE_2D,_e,Be,Je[0].width,Je[0].height);for(let G=0,j=Je.length;G<j;G++)be=Je[G],S.format!==$t?ye!==null?Ve?L&&t.compressedTexSubImage2D(i.TEXTURE_2D,G,0,0,be.width,be.height,ye,be.data):t.compressedTexImage2D(i.TEXTURE_2D,G,Be,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?L&&t.texSubImage2D(i.TEXTURE_2D,G,0,0,be.width,be.height,ye,Fe,be.data):t.texImage2D(i.TEXTURE_2D,G,Be,be.width,be.height,0,ye,Fe,be.data)}else if(S.isDataArrayTexture)if(Ve){if(ut&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,Be,ne.width,ne.height,ne.depth),L)if(S.layerUpdates.size>0){const G=Bh(ne.width,ne.height,S.format,S.type);for(const j of S.layerUpdates){const he=ne.data.subarray(j*G/ne.data.BYTES_PER_ELEMENT,(j+1)*G/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,ne.width,ne.height,1,ye,Fe,he)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,ye,Fe,ne.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Be,ne.width,ne.height,ne.depth,0,ye,Fe,ne.data);else if(S.isData3DTexture)Ve?(ut&&t.texStorage3D(i.TEXTURE_3D,_e,Be,ne.width,ne.height,ne.depth),L&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,ye,Fe,ne.data)):t.texImage3D(i.TEXTURE_3D,0,Be,ne.width,ne.height,ne.depth,0,ye,Fe,ne.data);else if(S.isFramebufferTexture){if(ut)if(Ve)t.texStorage2D(i.TEXTURE_2D,_e,Be,ne.width,ne.height);else{let G=ne.width,j=ne.height;for(let he=0;he<_e;he++)t.texImage2D(i.TEXTURE_2D,he,Be,G,j,0,ye,Fe,null),G>>=1,j>>=1}}else if(Je.length>0){if(Ve&&ut){const G=ge(Je[0]);t.texStorage2D(i.TEXTURE_2D,_e,Be,G.width,G.height)}for(let G=0,j=Je.length;G<j;G++)be=Je[G],Ve?L&&t.texSubImage2D(i.TEXTURE_2D,G,0,0,ye,Fe,be):t.texImage2D(i.TEXTURE_2D,G,Be,ye,Fe,be);S.generateMipmaps=!1}else if(Ve){if(ut){const G=ge(ne);t.texStorage2D(i.TEXTURE_2D,_e,Be,G.width,G.height)}L&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ye,Fe,ne)}else t.texImage2D(i.TEXTURE_2D,0,Be,ye,Fe,ne);m(S)&&g(q),Ee.__version=Y.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function X(C,S,O){if(S.image.length!==6)return;const q=Ze(C,S),$=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+O);const Y=n.get($);if($.version!==Y.__version||q===!0){t.activeTexture(i.TEXTURE0+O);const Ee=Qe.getPrimaries(Qe.workingColorSpace),ce=S.colorSpace===oi?null:Qe.getPrimaries(S.colorSpace),ve=S.colorSpace===oi||Ee===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Ke=S.isCompressedTexture||S.image[0].isCompressedTexture,ne=S.image[0]&&S.image[0].isDataTexture,ye=[];for(let j=0;j<6;j++)!Ke&&!ne?ye[j]=_(S.image[j],!0,r.maxCubemapSize):ye[j]=ne?S.image[j].image:S.image[j],ye[j]=Ce(S,ye[j]);const Fe=ye[0],Be=s.convert(S.format,S.colorSpace),be=s.convert(S.type),Je=v(S.internalFormat,Be,be,S.colorSpace),Ve=S.isVideoTexture!==!0,ut=Y.__version===void 0||q===!0,L=$.dataReady;let _e=M(S,Fe);me(i.TEXTURE_CUBE_MAP,S);let G;if(Ke){Ve&&ut&&t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,Je,Fe.width,Fe.height);for(let j=0;j<6;j++){G=ye[j].mipmaps;for(let he=0;he<G.length;he++){const xe=G[he];S.format!==$t?Be!==null?Ve?L&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,he,0,0,xe.width,xe.height,Be,xe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,he,Je,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,he,0,0,xe.width,xe.height,Be,be,xe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,he,Je,xe.width,xe.height,0,Be,be,xe.data)}}}else{if(G=S.mipmaps,Ve&&ut){G.length>0&&_e++;const j=ge(ye[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,Je,j.width,j.height)}for(let j=0;j<6;j++)if(ne){Ve?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ye[j].width,ye[j].height,Be,be,ye[j].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Je,ye[j].width,ye[j].height,0,Be,be,ye[j].data);for(let he=0;he<G.length;he++){const $e=G[he].image[j].image;Ve?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,he+1,0,0,$e.width,$e.height,Be,be,$e.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,he+1,Je,$e.width,$e.height,0,Be,be,$e.data)}}else{Ve?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Be,be,ye[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Je,Be,be,ye[j]);for(let he=0;he<G.length;he++){const xe=G[he];Ve?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,he+1,0,0,Be,be,xe.image[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,he+1,Je,Be,be,xe.image[j])}}}m(S)&&g(i.TEXTURE_CUBE_MAP),Y.__version=$.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function te(C,S,O,q,$,Y){const Ee=s.convert(O.format,O.colorSpace),ce=s.convert(O.type),ve=v(O.internalFormat,Ee,ce,O.colorSpace);if(!n.get(S).__hasExternalTextures){const ne=Math.max(1,S.width>>Y),ye=Math.max(1,S.height>>Y);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?t.texImage3D($,Y,ve,ne,ye,S.depth,0,Ee,ce,null):t.texImage2D($,Y,ve,ne,ye,0,Ee,ce,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),ee(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,$,n.get(O).__webglTexture,0,re(S)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,$,n.get(O).__webglTexture,Y),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Me(C,S,O){if(i.bindRenderbuffer(i.RENDERBUFFER,C),S.depthBuffer){const q=S.depthTexture,$=q&&q.isDepthTexture?q.type:null,Y=x(S.stencilBuffer,$),Ee=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=re(S);ee(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce,Y,S.width,S.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,Y,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Y,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ee,i.RENDERBUFFER,C)}else{const q=S.textures;for(let $=0;$<q.length;$++){const Y=q[$],Ee=s.convert(Y.format,Y.colorSpace),ce=s.convert(Y.type),ve=v(Y.internalFormat,Ee,ce,Y.colorSpace),Ke=re(S);O&&ee(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ke,ve,S.width,S.height):ee(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ke,ve,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ve,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function le(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),H(S.depthTexture,0);const q=n.get(S.depthTexture).__webglTexture,$=re(S);if(S.depthTexture.format===Rr)ee(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,q,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,q,0);else if(S.depthTexture.format===Ur)ee(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,q,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function De(C){const S=n.get(C),O=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){const q=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),q){const $=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,q.removeEventListener("dispose",$)};q.addEventListener("dispose",$),S.__depthDisposeCallback=$}S.__boundDepthTexture=q}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");le(S.__webglFramebuffer,C)}else if(O){S.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[q]),S.__webglDepthbuffer[q]===void 0)S.__webglDepthbuffer[q]=i.createRenderbuffer(),Me(S.__webglDepthbuffer[q],C,!1);else{const $=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=S.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,Y)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),Me(S.__webglDepthbuffer,C,!1);else{const q=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,$)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Le(C,S,O){const q=n.get(C);S!==void 0&&te(q.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&De(C)}function ze(C){const S=C.texture,O=n.get(C),q=n.get(S);C.addEventListener("dispose",T);const $=C.textures,Y=C.isWebGLCubeRenderTarget===!0,Ee=$.length>1;if(Ee||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=S.version,a.memory.textures++),Y){O.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer[ce]=[];for(let ve=0;ve<S.mipmaps.length;ve++)O.__webglFramebuffer[ce][ve]=i.createFramebuffer()}else O.__webglFramebuffer[ce]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer=[];for(let ce=0;ce<S.mipmaps.length;ce++)O.__webglFramebuffer[ce]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Ee)for(let ce=0,ve=$.length;ce<ve;ce++){const Ke=n.get($[ce]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&ee(C)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ce=0;ce<$.length;ce++){const ve=$[ce];O.__webglColorRenderbuffer[ce]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[ce]);const Ke=s.convert(ve.format,ve.colorSpace),ne=s.convert(ve.type),ye=v(ve.internalFormat,Ke,ne,ve.colorSpace,C.isXRRenderTarget===!0),Fe=re(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Fe,ye,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,O.__webglColorRenderbuffer[ce])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),Me(O.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),me(i.TEXTURE_CUBE_MAP,S);for(let ce=0;ce<6;ce++)if(S.mipmaps&&S.mipmaps.length>0)for(let ve=0;ve<S.mipmaps.length;ve++)te(O.__webglFramebuffer[ce][ve],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ve);else te(O.__webglFramebuffer[ce],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(S)&&g(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let ce=0,ve=$.length;ce<ve;ce++){const Ke=$[ce],ne=n.get(Ke);t.bindTexture(i.TEXTURE_2D,ne.__webglTexture),me(i.TEXTURE_2D,Ke),te(O.__webglFramebuffer,C,Ke,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,0),m(Ke)&&g(i.TEXTURE_2D)}t.unbindTexture()}else{let ce=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ce=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,q.__webglTexture),me(ce,S),S.mipmaps&&S.mipmaps.length>0)for(let ve=0;ve<S.mipmaps.length;ve++)te(O.__webglFramebuffer[ve],C,S,i.COLOR_ATTACHMENT0,ce,ve);else te(O.__webglFramebuffer,C,S,i.COLOR_ATTACHMENT0,ce,0);m(S)&&g(ce),t.unbindTexture()}C.depthBuffer&&De(C)}function qe(C){const S=C.textures;for(let O=0,q=S.length;O<q;O++){const $=S[O];if(m($)){const Y=C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ee=n.get($).__webglTexture;t.bindTexture(Y,Ee),g(Y),t.unbindTexture()}}}const J=[],I=[];function se(C){if(C.samples>0){if(ee(C)===!1){const S=C.textures,O=C.width,q=C.height;let $=i.COLOR_BUFFER_BIT;const Y=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ee=n.get(C),ce=S.length>1;if(ce)for(let ve=0;ve<S.length;ve++)t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let ve=0;ve<S.length;ve++){if(C.resolveDepthBuffer&&(C.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),ce){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[ve]);const Ke=n.get(S[ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ke,0)}i.blitFramebuffer(0,0,O,q,0,0,O,q,$,i.NEAREST),c===!0&&(J.length=0,I.length=0,J.push(i.COLOR_ATTACHMENT0+ve),C.depthBuffer&&C.resolveDepthBuffer===!1&&(J.push(Y),I.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,J))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ce)for(let ve=0;ve<S.length;ve++){t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[ve]);const Ke=n.get(S[ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,Ke,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const S=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function re(C){return Math.min(r.maxSamples,C.samples)}function ee(C){const S=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ae(C){const S=a.render.frame;u.get(C)!==S&&(u.set(C,S),C.update())}function Ce(C,S){const O=C.colorSpace,q=C.format,$=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||O!==wi&&O!==oi&&(Qe.getTransfer(O)===ht?(q!==$t||$!==$n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),S}function ge(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=b,this.setTexture2D=H,this.setTexture2DArray=Z,this.setTexture3D=V,this.setTextureCube=Q,this.rebindTextures=Le,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=te,this.useMultisampledRTT=ee}function S0(i,e){function t(n,r=oi){let s;const a=Qe.getTransfer(r);if(n===$n)return i.UNSIGNED_BYTE;if(n===Sl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===wl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===wf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===bf)return i.BYTE;if(n===Sf)return i.SHORT;if(n===Ts)return i.UNSIGNED_SHORT;if(n===bl)return i.INT;if(n===_i)return i.UNSIGNED_INT;if(n===cn)return i.FLOAT;if(n===Us)return i.HALF_FLOAT;if(n===Ef)return i.ALPHA;if(n===Af)return i.RGB;if(n===$t)return i.RGBA;if(n===Tf)return i.LUMINANCE;if(n===Cf)return i.LUMINANCE_ALPHA;if(n===Rr)return i.DEPTH_COMPONENT;if(n===Ur)return i.DEPTH_STENCIL;if(n===El)return i.RED;if(n===Ja)return i.RED_INTEGER;if(n===Rf)return i.RG;if(n===Al)return i.RG_INTEGER;if(n===Tl)return i.RGBA_INTEGER;if(n===la||n===ua||n===ha||n===fa)if(a===ht)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===la)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ua)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ha)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===fa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===la)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ua)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ha)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===fa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Dc||n===Nc||n===Uc||n===Oc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Dc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Nc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Uc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Oc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Fc||n===Bc||n===zc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Fc||n===Bc)return a===ht?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===zc)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===kc||n===Vc||n===Hc||n===Gc||n===Wc||n===Xc||n===qc||n===Yc||n===Zc||n===Kc||n===Jc||n===$c||n===jc||n===Qc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===kc)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Vc)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Hc)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Gc)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Wc)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Xc)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===qc)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Yc)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Zc)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Kc)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Jc)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===$c)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===jc)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Qc)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===da||n===el||n===tl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===da)return a===ht?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===el)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===tl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Pf||n===nl||n===il||n===rl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===da)return s.COMPRESSED_RED_RGTC1_EXT;if(n===nl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===il)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===rl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Nr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class w0 extends Nt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class xs extends tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const LA={type:"move"};class Vu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),g=this._getHandJoint(l,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,p=.005;l.inputState.pinching&&f>d+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(LA)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new xs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const DA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,NA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class UA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new Mt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new On({vertexShader:DA,fragmentShader:NA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new wt(new Hr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class OA extends jn{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,p=null;const _=new UA,m=t.getContextAttributes();let g=null,v=null;const x=[],M=[],A=new K;let T=null;const w=new Nt;w.layers.enable(1),w.viewport=new et;const P=new Nt;P.layers.enable(2),P.viewport=new et;const U=[w,P],y=new w0;y.layers.enable(1),y.layers.enable(2);let b=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let te=x[X];return te===void 0&&(te=new Vu,x[X]=te),te.getTargetRaySpace()},this.getControllerGrip=function(X){let te=x[X];return te===void 0&&(te=new Vu,x[X]=te),te.getGripSpace()},this.getHand=function(X){let te=x[X];return te===void 0&&(te=new Vu,x[X]=te),te.getHandSpace()};function k(X){const te=M.indexOf(X.inputSource);if(te===-1)return;const Me=x[te];Me!==void 0&&(Me.update(X.inputSource,X.frame,l||a),Me.dispatchEvent({type:X.type,data:X.inputSource}))}function H(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",Z);for(let X=0;X<x.length;X++){const te=M[X];te!==null&&(M[X]=null,x[X].disconnect(te))}b=null,F=null,_.reset(),e.setRenderTarget(g),d=null,f=null,h=null,r=null,v=null,nt.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",H),r.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(A),r.renderState.layers===void 0){const te={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,te),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Un(d.framebufferWidth,d.framebufferHeight,{format:$t,type:$n,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let te=null,Me=null,le=null;m.depth&&(le=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=m.stencil?Ur:Rr,Me=m.stencil?Nr:_i);const De={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(De),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new Un(f.textureWidth,f.textureHeight,{format:$t,type:$n,depthTexture:new Bf(f.textureWidth,f.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),nt.setContext(r),nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Z(X){for(let te=0;te<X.removed.length;te++){const Me=X.removed[te],le=M.indexOf(Me);le>=0&&(M[le]=null,x[le].disconnect(Me))}for(let te=0;te<X.added.length;te++){const Me=X.added[te];let le=M.indexOf(Me);if(le===-1){for(let Le=0;Le<x.length;Le++)if(Le>=M.length){M.push(Me),le=Le;break}else if(M[Le]===null){M[Le]=Me,le=Le;break}if(le===-1)break}const De=x[le];De&&De.connect(Me)}}const V=new R,Q=new R;function W(X,te,Me){V.setFromMatrixPosition(te.matrixWorld),Q.setFromMatrixPosition(Me.matrixWorld);const le=V.distanceTo(Q),De=te.projectionMatrix.elements,Le=Me.projectionMatrix.elements,ze=De[14]/(De[10]-1),qe=De[14]/(De[10]+1),J=(De[9]+1)/De[5],I=(De[9]-1)/De[5],se=(De[8]-1)/De[0],re=(Le[8]+1)/Le[0],ee=ze*se,ae=ze*re,Ce=le/(-se+re),ge=Ce*-se;if(te.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ge),X.translateZ(Ce),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),De[10]===-1)X.projectionMatrix.copy(te.projectionMatrix),X.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const C=ze+Ce,S=qe+Ce,O=ee-ge,q=ae+(le-ge),$=J*qe/S*C,Y=I*qe/S*C;X.projectionMatrix.makePerspective(O,q,$,Y,C,S),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function ue(X,te){te===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(te.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let te=X.near,Me=X.far;_.texture!==null&&(_.depthNear>0&&(te=_.depthNear),_.depthFar>0&&(Me=_.depthFar)),y.near=P.near=w.near=te,y.far=P.far=w.far=Me,(b!==y.near||F!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),b=y.near,F=y.far);const le=X.parent,De=y.cameras;ue(y,le);for(let Le=0;Le<De.length;Le++)ue(De[Le],le);De.length===2?W(y,w,P):y.projectionMatrix.copy(w.projectionMatrix),pe(X,y,le)};function pe(X,te,Me){Me===null?X.matrix.copy(te.matrixWorld):(X.matrix.copy(Me.matrixWorld),X.matrix.invert(),X.matrix.multiply(te.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(te.projectionMatrix),X.projectionMatrixInverse.copy(te.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Cs*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(X){c=X,f!==null&&(f.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let me=null;function Ze(X,te){if(u=te.getViewerPose(l||a),p=te,u!==null){const Me=u.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let le=!1;Me.length!==y.cameras.length&&(y.cameras.length=0,le=!0);for(let Le=0;Le<Me.length;Le++){const ze=Me[Le];let qe=null;if(d!==null)qe=d.getViewport(ze);else{const I=h.getViewSubImage(f,ze);qe=I.viewport,Le===0&&(e.setRenderTargetTextures(v,I.colorTexture,f.ignoreDepthValues?void 0:I.depthStencilTexture),e.setRenderTarget(v))}let J=U[Le];J===void 0&&(J=new Nt,J.layers.enable(Le),J.viewport=new et,U[Le]=J),J.matrix.fromArray(ze.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(ze.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(qe.x,qe.y,qe.width,qe.height),Le===0&&(y.matrix.copy(J.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),le===!0&&y.cameras.push(J)}const De=r.enabledFeatures;if(De&&De.includes("depth-sensing")){const Le=h.getDepthInformation(Me[0]);Le&&Le.isValid&&Le.texture&&_.init(e,Le,r.renderState)}}for(let Me=0;Me<x.length;Me++){const le=M[Me],De=x[Me];le!==null&&De!==void 0&&De.update(le,te,l||a)}me&&me(X,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),p=null}const nt=new x0;nt.setAnimationLoop(Ze),this.setAnimationLoop=function(X){me=X},this.dispose=function(){}}}const cr=new yn,FA=new Pe;function BA(i,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,p0(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function r(m,g,v,x,M){g.isMeshBasicMaterial||g.isMeshLambertMaterial?s(m,g):g.isMeshToonMaterial?(s(m,g),h(m,g)):g.isMeshPhongMaterial?(s(m,g),u(m,g)):g.isMeshStandardMaterial?(s(m,g),f(m,g),g.isMeshPhysicalMaterial&&d(m,g,M)):g.isMeshMatcapMaterial?(s(m,g),p(m,g)):g.isMeshDepthMaterial?s(m,g):g.isMeshDistanceMaterial?(s(m,g),_(m,g)):g.isMeshNormalMaterial?s(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?c(m,g,v,x):g.isSpriteMaterial?l(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Qt&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Qt&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const v=e.get(g),x=v.envMap,M=v.envMapRotation;x&&(m.envMap.value=x,cr.copy(M),cr.x*=-1,cr.y*=-1,cr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(cr.y*=-1,cr.z*=-1),m.envMapRotation.value.setFromMatrix4(FA.makeRotationFromEuler(cr)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function c(m,g,v,x){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*v,m.scale.value=x*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function l(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function h(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,v){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Qt&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){const v=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function zA(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,x){const M=x.program;n.uniformBlockBinding(v,M)}function l(v,x){let M=r[v.id];M===void 0&&(p(v),M=u(v),r[v.id]=M,v.addEventListener("dispose",m));const A=x.program;n.updateUBOMapping(v,A);const T=e.render.frame;s[v.id]!==T&&(f(v),s[v.id]=T)}function u(v){const x=h();v.__bindingPointIndex=x;const M=i.createBuffer(),A=v.__size,T=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,A,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,M),M}function h(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const x=r[v.id],M=v.uniforms,A=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let T=0,w=M.length;T<w;T++){const P=Array.isArray(M[T])?M[T]:[M[T]];for(let U=0,y=P.length;U<y;U++){const b=P[U];if(d(b,T,U,A)===!0){const F=b.__offset,k=Array.isArray(b.value)?b.value:[b.value];let H=0;for(let Z=0;Z<k.length;Z++){const V=k[Z],Q=_(V);typeof V=="number"||typeof V=="boolean"?(b.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,F+H,b.__data)):V.isMatrix3?(b.__data[0]=V.elements[0],b.__data[1]=V.elements[1],b.__data[2]=V.elements[2],b.__data[3]=0,b.__data[4]=V.elements[3],b.__data[5]=V.elements[4],b.__data[6]=V.elements[5],b.__data[7]=0,b.__data[8]=V.elements[6],b.__data[9]=V.elements[7],b.__data[10]=V.elements[8],b.__data[11]=0):(V.toArray(b.__data,H),H+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,b.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(v,x,M,A){const T=v.value,w=x+"_"+M;if(A[w]===void 0)return typeof T=="number"||typeof T=="boolean"?A[w]=T:A[w]=T.clone(),!0;{const P=A[w];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return A[w]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function p(v){const x=v.uniforms;let M=0;const A=16;for(let w=0,P=x.length;w<P;w++){const U=Array.isArray(x[w])?x[w]:[x[w]];for(let y=0,b=U.length;y<b;y++){const F=U[y],k=Array.isArray(F.value)?F.value:[F.value];for(let H=0,Z=k.length;H<Z;H++){const V=k[H],Q=_(V),W=M%A,ue=W%Q.boundary,pe=W+ue;M+=ue,pe!==0&&A-pe<Q.storage&&(M+=A-pe),F.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=M,M+=Q.storage}}}const T=M%A;return T>0&&(M+=A-T),v.__size=M,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const M=a.indexOf(x.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function g(){for(const v in r)i.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:c,update:l,dispose:g}}class E0{constructor(e={}){const{canvas:t=u0(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const d=new Uint32Array(4),p=new Int32Array(4);let _=null,m=null;const g=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=En,this.toneMapping=fi,this.toneMappingExposure=1;const x=this;let M=!1,A=0,T=0,w=null,P=-1,U=null;const y=new et,b=new et;let F=null;const k=new de(0);let H=0,Z=t.width,V=t.height,Q=1,W=null,ue=null;const pe=new et(0,0,Z,V),me=new et(0,0,Z,V);let Ze=!1;const nt=new Qa;let X=!1,te=!1;const Me=new Pe,le=new Pe,De=new R,Le=new et,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qe=!1;function J(){return w===null?Q:1}let I=n;function se(E,D){return t.getContext(E,D)}try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Za}`),t.addEventListener("webglcontextlost",j,!1),t.addEventListener("webglcontextrestored",he,!1),t.addEventListener("webglcontextcreationerror",xe,!1),I===null){const D="webgl2";if(I=se(D,E),I===null)throw se(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let re,ee,ae,Ce,ge,C,S,O,q,$,Y,Ee,ce,ve,Ke,ne,ye,Fe,Be,be,Je,Ve,ut,L;function _e(){re=new X1(I),re.init(),Ve=new S0(I,re),ee=new z1(I,re,e,Ve),ae=new EA(I),ee.reverseDepthBuffer&&ae.buffers.depth.setReversed(!0),Ce=new Z1(I),ge=new fA,C=new IA(I,re,ae,ge,ee,Ve,Ce),S=new V1(x),O=new W1(x),q=new tS(I),ut=new F1(I,q),$=new q1(I,q,Ce,ut),Y=new J1(I,$,q,Ce),Be=new K1(I,ee,C),ne=new k1(ge),Ee=new hA(x,S,O,re,ee,ut,ne),ce=new BA(x,ge),ve=new pA,Ke=new yA(re),Fe=new O1(x,S,O,ae,Y,f,c),ye=new SA(x,Y,ee),L=new zA(I,Ce,ee,ae),be=new B1(I,re,Ce),Je=new Y1(I,re,Ce),Ce.programs=Ee.programs,x.capabilities=ee,x.extensions=re,x.properties=ge,x.renderLists=ve,x.shadowMap=ye,x.state=ae,x.info=Ce}_e();const G=new OA(x,I);this.xr=G,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const E=re.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=re.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(E){E!==void 0&&(Q=E,this.setSize(Z,V,!1))},this.getSize=function(E){return E.set(Z,V)},this.setSize=function(E,D,B=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=E,V=D,t.width=Math.floor(E*Q),t.height=Math.floor(D*Q),B===!0&&(t.style.width=E+"px",t.style.height=D+"px"),this.setViewport(0,0,E,D)},this.getDrawingBufferSize=function(E){return E.set(Z*Q,V*Q).floor()},this.setDrawingBufferSize=function(E,D,B){Z=E,V=D,Q=B,t.width=Math.floor(E*B),t.height=Math.floor(D*B),this.setViewport(0,0,E,D)},this.getCurrentViewport=function(E){return E.copy(y)},this.getViewport=function(E){return E.copy(pe)},this.setViewport=function(E,D,B,z){E.isVector4?pe.set(E.x,E.y,E.z,E.w):pe.set(E,D,B,z),ae.viewport(y.copy(pe).multiplyScalar(Q).round())},this.getScissor=function(E){return E.copy(me)},this.setScissor=function(E,D,B,z){E.isVector4?me.set(E.x,E.y,E.z,E.w):me.set(E,D,B,z),ae.scissor(b.copy(me).multiplyScalar(Q).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(E){ae.setScissorTest(Ze=E)},this.setOpaqueSort=function(E){W=E},this.setTransparentSort=function(E){ue=E},this.getClearColor=function(E){return E.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor.apply(Fe,arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha.apply(Fe,arguments)},this.clear=function(E=!0,D=!0,B=!0){let z=0;if(E){let N=!1;if(w!==null){const ie=w.texture.format;N=ie===Tl||ie===Al||ie===Ja}if(N){const ie=w.texture.type,fe=ie===$n||ie===_i||ie===Ts||ie===Nr||ie===Sl||ie===wl,Se=Fe.getClearColor(),Ae=Fe.getClearAlpha(),Ne=Se.r,Ue=Se.g,Te=Se.b;fe?(d[0]=Ne,d[1]=Ue,d[2]=Te,d[3]=Ae,I.clearBufferuiv(I.COLOR,0,d)):(p[0]=Ne,p[1]=Ue,p[2]=Te,p[3]=Ae,I.clearBufferiv(I.COLOR,0,p))}else z|=I.COLOR_BUFFER_BIT}D&&(z|=I.DEPTH_BUFFER_BIT,I.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),B&&(z|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",he,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),ve.dispose(),Ke.dispose(),ge.dispose(),S.dispose(),O.dispose(),Y.dispose(),ut.dispose(),L.dispose(),Ee.dispose(),G.dispose(),G.removeEventListener("sessionstart",ud),G.removeEventListener("sessionend",hd),nr.stop()};function j(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const E=Ce.autoReset,D=ye.enabled,B=ye.autoUpdate,z=ye.needsUpdate,N=ye.type;_e(),Ce.autoReset=E,ye.enabled=D,ye.autoUpdate=B,ye.needsUpdate=z,ye.type=N}function xe(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function $e(E){const D=E.target;D.removeEventListener("dispose",$e),Et(D)}function Et(E){nn(E),ge.remove(E)}function nn(E){const D=ge.get(E).programs;D!==void 0&&(D.forEach(function(B){Ee.releaseProgram(B)}),E.isShaderMaterial&&Ee.releaseShaderCache(E))}this.renderBufferDirect=function(E,D,B,z,N,ie){D===null&&(D=ze);const fe=N.isMesh&&N.matrixWorld.determinant()<0,Se=Nx(E,D,B,z,N);ae.setMaterial(z,fe);let Ae=B.index,Ne=1;if(z.wireframe===!0){if(Ae=$.getWireframeAttribute(B),Ae===void 0)return;Ne=2}const Ue=B.drawRange,Te=B.attributes.position;let at=Ue.start*Ne,ft=(Ue.start+Ue.count)*Ne;ie!==null&&(at=Math.max(at,ie.start*Ne),ft=Math.min(ft,(ie.start+ie.count)*Ne)),Ae!==null?(at=Math.max(at,0),ft=Math.min(ft,Ae.count)):Te!=null&&(at=Math.max(at,0),ft=Math.min(ft,Te.count));const _t=ft-at;if(_t<0||_t===1/0)return;ut.setup(N,z,Se,B,Ae);let fn,rt=be;if(Ae!==null&&(fn=q.get(Ae),rt=Je,rt.setIndex(fn)),N.isMesh)z.wireframe===!0?(ae.setLineWidth(z.wireframeLinewidth*J()),rt.setMode(I.LINES)):rt.setMode(I.TRIANGLES);else if(N.isLine){let Re=z.linewidth;Re===void 0&&(Re=1),ae.setLineWidth(Re*J()),N.isLineSegments?rt.setMode(I.LINES):N.isLineLoop?rt.setMode(I.LINE_LOOP):rt.setMode(I.LINE_STRIP)}else N.isPoints?rt.setMode(I.POINTS):N.isSprite&&rt.setMode(I.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)rt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(re.get("WEBGL_multi_draw"))rt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Re=N._multiDrawStarts,Ft=N._multiDrawCounts,st=N._multiDrawCount,Tn=Ae?q.get(Ae).bytesPerElement:1,Xr=ge.get(z).currentProgram.getUniforms();for(let dn=0;dn<st;dn++)Xr.setValue(I,"_gl_DrawID",dn),rt.render(Re[dn]/Tn,Ft[dn])}else if(N.isInstancedMesh)rt.renderInstances(at,_t,N.count);else if(B.isInstancedBufferGeometry){const Re=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Ft=Math.min(B.instanceCount,Re);rt.renderInstances(at,_t,Ft)}else rt.render(at,_t)};function it(E,D,B){E.transparent===!0&&E.side===Dn&&E.forceSinglePass===!1?(E.side=Qt,E.needsUpdate=!0,ao(E,D,B),E.side=mi,E.needsUpdate=!0,ao(E,D,B),E.side=Dn):ao(E,D,B)}this.compile=function(E,D,B=null){B===null&&(B=E),m=Ke.get(B),m.init(D),v.push(m),B.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),E!==B&&E.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),m.setupLights();const z=new Set;return E.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const ie=N.material;if(ie)if(Array.isArray(ie))for(let fe=0;fe<ie.length;fe++){const Se=ie[fe];it(Se,B,N),z.add(Se)}else it(ie,B,N),z.add(ie)}),v.pop(),m=null,z},this.compileAsync=function(E,D,B=null){const z=this.compile(E,D,B);return new Promise(N=>{function ie(){if(z.forEach(function(fe){ge.get(fe).currentProgram.isReady()&&z.delete(fe)}),z.size===0){N(E);return}setTimeout(ie,10)}re.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let rn=null;function ei(E){rn&&rn(E)}function ud(){nr.stop()}function hd(){nr.start()}const nr=new x0;nr.setAnimationLoop(ei),typeof self<"u"&&nr.setContext(self),this.setAnimationLoop=function(E){rn=E,G.setAnimationLoop(E),E===null?nr.stop():nr.start()},G.addEventListener("sessionstart",ud),G.addEventListener("sessionend",hd),this.render=function(E,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(D),D=G.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,D,w),m=Ke.get(E,v.length),m.init(D),v.push(m),le.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),nt.setFromProjectionMatrix(le),te=this.localClippingEnabled,X=ne.init(this.clippingPlanes,te),_=ve.get(E,g.length),_.init(),g.push(_),G.enabled===!0&&G.isPresenting===!0){const ie=x.xr.getDepthSensingMesh();ie!==null&&ru(ie,D,-1/0,x.sortObjects)}ru(E,D,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(W,ue),qe=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,qe&&Fe.addToRenderList(_,E),this.info.render.frame++,X===!0&&ne.beginShadows();const B=m.state.shadowsArray;ye.render(B,E,D),X===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=_.opaque,N=_.transmissive;if(m.setupLights(),D.isArrayCamera){const ie=D.cameras;if(N.length>0)for(let fe=0,Se=ie.length;fe<Se;fe++){const Ae=ie[fe];dd(z,N,E,Ae)}qe&&Fe.render(E);for(let fe=0,Se=ie.length;fe<Se;fe++){const Ae=ie[fe];fd(_,E,Ae,Ae.viewport)}}else N.length>0&&dd(z,N,E,D),qe&&Fe.render(E),fd(_,E,D);w!==null&&(C.updateMultisampleRenderTarget(w),C.updateRenderTargetMipmap(w)),E.isScene===!0&&E.onAfterRender(x,E,D),ut.resetDefaultState(),P=-1,U=null,v.pop(),v.length>0?(m=v[v.length-1],X===!0&&ne.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,g.pop(),g.length>0?_=g[g.length-1]:_=null};function ru(E,D,B,z){if(E.visible===!1)return;if(E.layers.test(D.layers)){if(E.isGroup)B=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(D);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||nt.intersectsSprite(E)){z&&Le.setFromMatrixPosition(E.matrixWorld).applyMatrix4(le);const fe=Y.update(E),Se=E.material;Se.visible&&_.push(E,fe,Se,B,Le.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||nt.intersectsObject(E))){const fe=Y.update(E),Se=E.material;if(z&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Le.copy(E.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Le.copy(fe.boundingSphere.center)),Le.applyMatrix4(E.matrixWorld).applyMatrix4(le)),Array.isArray(Se)){const Ae=fe.groups;for(let Ne=0,Ue=Ae.length;Ne<Ue;Ne++){const Te=Ae[Ne],at=Se[Te.materialIndex];at&&at.visible&&_.push(E,fe,at,B,Le.z,Te)}}else Se.visible&&_.push(E,fe,Se,B,Le.z,null)}}const ie=E.children;for(let fe=0,Se=ie.length;fe<Se;fe++)ru(ie[fe],D,B,z)}function fd(E,D,B,z){const N=E.opaque,ie=E.transmissive,fe=E.transparent;m.setupLightsView(B),X===!0&&ne.setGlobalState(x.clippingPlanes,B),z&&ae.viewport(y.copy(z)),N.length>0&&so(N,D,B),ie.length>0&&so(ie,D,B),fe.length>0&&so(fe,D,B),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function dd(E,D,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[z.id]===void 0&&(m.state.transmissionRenderTarget[z.id]=new Un(1,1,{generateMipmaps:!0,type:re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float")?Us:$n,minFilter:Wn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const ie=m.state.transmissionRenderTarget[z.id],fe=z.viewport||y;ie.setSize(fe.z,fe.w);const Se=x.getRenderTarget();x.setRenderTarget(ie),x.getClearColor(k),H=x.getClearAlpha(),H<1&&x.setClearColor(16777215,.5),x.clear(),qe&&Fe.render(B);const Ae=x.toneMapping;x.toneMapping=fi;const Ne=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),m.setupLightsView(z),X===!0&&ne.setGlobalState(x.clippingPlanes,z),so(E,B,z),C.updateMultisampleRenderTarget(ie),C.updateRenderTargetMipmap(ie),re.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let Te=0,at=D.length;Te<at;Te++){const ft=D[Te],_t=ft.object,fn=ft.geometry,rt=ft.material,Re=ft.group;if(rt.side===Dn&&_t.layers.test(z.layers)){const Ft=rt.side;rt.side=Qt,rt.needsUpdate=!0,pd(_t,B,z,fn,rt,Re),rt.side=Ft,rt.needsUpdate=!0,Ue=!0}}Ue===!0&&(C.updateMultisampleRenderTarget(ie),C.updateRenderTargetMipmap(ie))}x.setRenderTarget(Se),x.setClearColor(k,H),Ne!==void 0&&(z.viewport=Ne),x.toneMapping=Ae}function so(E,D,B){const z=D.isScene===!0?D.overrideMaterial:null;for(let N=0,ie=E.length;N<ie;N++){const fe=E[N],Se=fe.object,Ae=fe.geometry,Ne=z===null?fe.material:z,Ue=fe.group;Se.layers.test(B.layers)&&pd(Se,D,B,Ae,Ne,Ue)}}function pd(E,D,B,z,N,ie){E.onBeforeRender(x,D,B,z,N,ie),E.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),N.onBeforeRender(x,D,B,z,E,ie),N.transparent===!0&&N.side===Dn&&N.forceSinglePass===!1?(N.side=Qt,N.needsUpdate=!0,x.renderBufferDirect(B,D,z,N,E,ie),N.side=mi,N.needsUpdate=!0,x.renderBufferDirect(B,D,z,N,E,ie),N.side=Dn):x.renderBufferDirect(B,D,z,N,E,ie),E.onAfterRender(x,D,B,z,N,ie)}function ao(E,D,B){D.isScene!==!0&&(D=ze);const z=ge.get(E),N=m.state.lights,ie=m.state.shadowsArray,fe=N.state.version,Se=Ee.getParameters(E,N.state,ie,D,B),Ae=Ee.getProgramCacheKey(Se);let Ne=z.programs;z.environment=E.isMeshStandardMaterial?D.environment:null,z.fog=D.fog,z.envMap=(E.isMeshStandardMaterial?O:S).get(E.envMap||z.environment),z.envMapRotation=z.environment!==null&&E.envMap===null?D.environmentRotation:E.envMapRotation,Ne===void 0&&(E.addEventListener("dispose",$e),Ne=new Map,z.programs=Ne);let Ue=Ne.get(Ae);if(Ue!==void 0){if(z.currentProgram===Ue&&z.lightsStateVersion===fe)return gd(E,Se),Ue}else Se.uniforms=Ee.getUniforms(E),E.onBeforeCompile(Se,x),Ue=Ee.acquireProgram(Se,Ae),Ne.set(Ae,Ue),z.uniforms=Se.uniforms;const Te=z.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Te.clippingPlanes=ne.uniform),gd(E,Se),z.needsLights=Ox(E),z.lightsStateVersion=fe,z.needsLights&&(Te.ambientLightColor.value=N.state.ambient,Te.lightProbe.value=N.state.probe,Te.directionalLights.value=N.state.directional,Te.directionalLightShadows.value=N.state.directionalShadow,Te.spotLights.value=N.state.spot,Te.spotLightShadows.value=N.state.spotShadow,Te.rectAreaLights.value=N.state.rectArea,Te.ltc_1.value=N.state.rectAreaLTC1,Te.ltc_2.value=N.state.rectAreaLTC2,Te.pointLights.value=N.state.point,Te.pointLightShadows.value=N.state.pointShadow,Te.hemisphereLights.value=N.state.hemi,Te.directionalShadowMap.value=N.state.directionalShadowMap,Te.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Te.spotShadowMap.value=N.state.spotShadowMap,Te.spotLightMatrix.value=N.state.spotLightMatrix,Te.spotLightMap.value=N.state.spotLightMap,Te.pointShadowMap.value=N.state.pointShadowMap,Te.pointShadowMatrix.value=N.state.pointShadowMatrix),z.currentProgram=Ue,z.uniformsList=null,Ue}function md(E){if(E.uniformsList===null){const D=E.currentProgram.getUniforms();E.uniformsList=pc.seqWithValue(D.seq,E.uniforms)}return E.uniformsList}function gd(E,D){const B=ge.get(E);B.outputColorSpace=D.outputColorSpace,B.batching=D.batching,B.batchingColor=D.batchingColor,B.instancing=D.instancing,B.instancingColor=D.instancingColor,B.instancingMorph=D.instancingMorph,B.skinning=D.skinning,B.morphTargets=D.morphTargets,B.morphNormals=D.morphNormals,B.morphColors=D.morphColors,B.morphTargetsCount=D.morphTargetsCount,B.numClippingPlanes=D.numClippingPlanes,B.numIntersection=D.numClipIntersection,B.vertexAlphas=D.vertexAlphas,B.vertexTangents=D.vertexTangents,B.toneMapping=D.toneMapping}function Nx(E,D,B,z,N){D.isScene!==!0&&(D=ze),C.resetTextureUnits();const ie=D.fog,fe=z.isMeshStandardMaterial?D.environment:null,Se=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:wi,Ae=(z.isMeshStandardMaterial?O:S).get(z.envMap||fe),Ne=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ue=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Te=!!B.morphAttributes.position,at=!!B.morphAttributes.normal,ft=!!B.morphAttributes.color;let _t=fi;z.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(_t=x.toneMapping);const fn=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,rt=fn!==void 0?fn.length:0,Re=ge.get(z),Ft=m.state.lights;if(X===!0&&(te===!0||E!==U)){const Sn=E===U&&z.id===P;ne.setState(z,E,Sn)}let st=!1;z.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==Ft.state.version||Re.outputColorSpace!==Se||N.isBatchedMesh&&Re.batching===!1||!N.isBatchedMesh&&Re.batching===!0||N.isBatchedMesh&&Re.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Re.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Re.instancing===!1||!N.isInstancedMesh&&Re.instancing===!0||N.isSkinnedMesh&&Re.skinning===!1||!N.isSkinnedMesh&&Re.skinning===!0||N.isInstancedMesh&&Re.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Re.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Re.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Re.instancingMorph===!1&&N.morphTexture!==null||Re.envMap!==Ae||z.fog===!0&&Re.fog!==ie||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==ne.numPlanes||Re.numIntersection!==ne.numIntersection)||Re.vertexAlphas!==Ne||Re.vertexTangents!==Ue||Re.morphTargets!==Te||Re.morphNormals!==at||Re.morphColors!==ft||Re.toneMapping!==_t||Re.morphTargetsCount!==rt)&&(st=!0):(st=!0,Re.__version=z.version);let Tn=Re.currentProgram;st===!0&&(Tn=ao(z,D,N));let Xr=!1,dn=!1,su=!1;const bt=Tn.getUniforms(),Ei=Re.uniforms;if(ae.useProgram(Tn.program)&&(Xr=!0,dn=!0,su=!0),z.id!==P&&(P=z.id,dn=!0),Xr||U!==E){ee.reverseDepthBuffer?(Me.copy(E.projectionMatrix),Eb(Me),Ab(Me),bt.setValue(I,"projectionMatrix",Me)):bt.setValue(I,"projectionMatrix",E.projectionMatrix),bt.setValue(I,"viewMatrix",E.matrixWorldInverse);const Sn=bt.map.cameraPosition;Sn!==void 0&&Sn.setValue(I,De.setFromMatrixPosition(E.matrixWorld)),ee.logarithmicDepthBuffer&&bt.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&bt.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),U!==E&&(U=E,dn=!0,su=!0)}if(N.isSkinnedMesh){bt.setOptional(I,N,"bindMatrix"),bt.setOptional(I,N,"bindMatrixInverse");const Sn=N.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),bt.setValue(I,"boneTexture",Sn.boneTexture,C))}N.isBatchedMesh&&(bt.setOptional(I,N,"batchingTexture"),bt.setValue(I,"batchingTexture",N._matricesTexture,C),bt.setOptional(I,N,"batchingIdTexture"),bt.setValue(I,"batchingIdTexture",N._indirectTexture,C),bt.setOptional(I,N,"batchingColorTexture"),N._colorsTexture!==null&&bt.setValue(I,"batchingColorTexture",N._colorsTexture,C));const au=B.morphAttributes;if((au.position!==void 0||au.normal!==void 0||au.color!==void 0)&&Be.update(N,B,Tn),(dn||Re.receiveShadow!==N.receiveShadow)&&(Re.receiveShadow=N.receiveShadow,bt.setValue(I,"receiveShadow",N.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Ei.envMap.value=Ae,Ei.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&D.environment!==null&&(Ei.envMapIntensity.value=D.environmentIntensity),dn&&(bt.setValue(I,"toneMappingExposure",x.toneMappingExposure),Re.needsLights&&Ux(Ei,su),ie&&z.fog===!0&&ce.refreshFogUniforms(Ei,ie),ce.refreshMaterialUniforms(Ei,z,Q,V,m.state.transmissionRenderTarget[E.id]),pc.upload(I,md(Re),Ei,C)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(pc.upload(I,md(Re),Ei,C),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&bt.setValue(I,"center",N.center),bt.setValue(I,"modelViewMatrix",N.modelViewMatrix),bt.setValue(I,"normalMatrix",N.normalMatrix),bt.setValue(I,"modelMatrix",N.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Sn=z.uniformsGroups;for(let ou=0,Fx=Sn.length;ou<Fx;ou++){const _d=Sn[ou];L.update(_d,Tn),L.bind(_d,Tn)}}return Tn}function Ux(E,D){E.ambientLightColor.needsUpdate=D,E.lightProbe.needsUpdate=D,E.directionalLights.needsUpdate=D,E.directionalLightShadows.needsUpdate=D,E.pointLights.needsUpdate=D,E.pointLightShadows.needsUpdate=D,E.spotLights.needsUpdate=D,E.spotLightShadows.needsUpdate=D,E.rectAreaLights.needsUpdate=D,E.hemisphereLights.needsUpdate=D}function Ox(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(E,D,B){ge.get(E.texture).__webglTexture=D,ge.get(E.depthTexture).__webglTexture=B;const z=ge.get(E);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=B===void 0,z.__autoAllocateDepthBuffer||re.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,D){const B=ge.get(E);B.__webglFramebuffer=D,B.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(E,D=0,B=0){w=E,A=D,T=B;let z=!0,N=null,ie=!1,fe=!1;if(E){const Ae=ge.get(E);if(Ae.__useDefaultFramebuffer!==void 0)ae.bindFramebuffer(I.FRAMEBUFFER,null),z=!1;else if(Ae.__webglFramebuffer===void 0)C.setupRenderTarget(E);else if(Ae.__hasExternalTextures)C.rebindTextures(E,ge.get(E.texture).__webglTexture,ge.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Te=E.depthTexture;if(Ae.__boundDepthTexture!==Te){if(Te!==null&&ge.has(Te)&&(E.width!==Te.image.width||E.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(E)}}const Ne=E.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(fe=!0);const Ue=ge.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ue[D])?N=Ue[D][B]:N=Ue[D],ie=!0):E.samples>0&&C.useMultisampledRTT(E)===!1?N=ge.get(E).__webglMultisampledFramebuffer:Array.isArray(Ue)?N=Ue[B]:N=Ue,y.copy(E.viewport),b.copy(E.scissor),F=E.scissorTest}else y.copy(pe).multiplyScalar(Q).floor(),b.copy(me).multiplyScalar(Q).floor(),F=Ze;if(ae.bindFramebuffer(I.FRAMEBUFFER,N)&&z&&ae.drawBuffers(E,N),ae.viewport(y),ae.scissor(b),ae.setScissorTest(F),ie){const Ae=ge.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+D,Ae.__webglTexture,B)}else if(fe){const Ae=ge.get(E.texture),Ne=D||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ae.__webglTexture,B||0,Ne)}P=-1},this.readRenderTargetPixels=function(E,D,B,z,N,ie,fe){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=ge.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&fe!==void 0&&(Se=Se[fe]),Se){ae.bindFramebuffer(I.FRAMEBUFFER,Se);try{const Ae=E.texture,Ne=Ae.format,Ue=Ae.type;if(!ee.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=E.width-z&&B>=0&&B<=E.height-N&&I.readPixels(D,B,z,N,Ve.convert(Ne),Ve.convert(Ue),ie)}finally{const Ae=w!==null?ge.get(w).__webglFramebuffer:null;ae.bindFramebuffer(I.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(E,D,B,z,N,ie,fe){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=ge.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&fe!==void 0&&(Se=Se[fe]),Se){const Ae=E.texture,Ne=Ae.format,Ue=Ae.type;if(!ee.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=E.width-z&&B>=0&&B<=E.height-N){ae.bindFramebuffer(I.FRAMEBUFFER,Se);const Te=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Te),I.bufferData(I.PIXEL_PACK_BUFFER,ie.byteLength,I.STREAM_READ),I.readPixels(D,B,z,N,Ve.convert(Ne),Ve.convert(Ue),0);const at=w!==null?ge.get(w).__webglFramebuffer:null;ae.bindFramebuffer(I.FRAMEBUFFER,at);const ft=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await wb(I,ft,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Te),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ie),I.deleteBuffer(Te),I.deleteSync(ft),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,D=null,B=0){E.isTexture!==!0&&(dc("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,E=arguments[1]);const z=Math.pow(2,-B),N=Math.floor(E.image.width*z),ie=Math.floor(E.image.height*z),fe=D!==null?D.x:0,Se=D!==null?D.y:0;C.setTexture2D(E,0),I.copyTexSubImage2D(I.TEXTURE_2D,B,0,0,fe,Se,N,ie),ae.unbindTexture()},this.copyTextureToTexture=function(E,D,B=null,z=null,N=0){E.isTexture!==!0&&(dc("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,E=arguments[1],D=arguments[2],N=arguments[3]||0,B=null);let ie,fe,Se,Ae,Ne,Ue;B!==null?(ie=B.max.x-B.min.x,fe=B.max.y-B.min.y,Se=B.min.x,Ae=B.min.y):(ie=E.image.width,fe=E.image.height,Se=0,Ae=0),z!==null?(Ne=z.x,Ue=z.y):(Ne=0,Ue=0);const Te=Ve.convert(D.format),at=Ve.convert(D.type);C.setTexture2D(D,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,D.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,D.unpackAlignment);const ft=I.getParameter(I.UNPACK_ROW_LENGTH),_t=I.getParameter(I.UNPACK_IMAGE_HEIGHT),fn=I.getParameter(I.UNPACK_SKIP_PIXELS),rt=I.getParameter(I.UNPACK_SKIP_ROWS),Re=I.getParameter(I.UNPACK_SKIP_IMAGES),Ft=E.isCompressedTexture?E.mipmaps[N]:E.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,Ft.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ft.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Se),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ae),E.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,N,Ne,Ue,ie,fe,Te,at,Ft.data):E.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,N,Ne,Ue,Ft.width,Ft.height,Te,Ft.data):I.texSubImage2D(I.TEXTURE_2D,N,Ne,Ue,ie,fe,Te,at,Ft),I.pixelStorei(I.UNPACK_ROW_LENGTH,ft),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,_t),I.pixelStorei(I.UNPACK_SKIP_PIXELS,fn),I.pixelStorei(I.UNPACK_SKIP_ROWS,rt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Re),N===0&&D.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),ae.unbindTexture()},this.copyTextureToTexture3D=function(E,D,B=null,z=null,N=0){E.isTexture!==!0&&(dc("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,z=arguments[1]||null,E=arguments[2],D=arguments[3],N=arguments[4]||0);let ie,fe,Se,Ae,Ne,Ue,Te,at,ft;const _t=E.isCompressedTexture?E.mipmaps[N]:E.image;B!==null?(ie=B.max.x-B.min.x,fe=B.max.y-B.min.y,Se=B.max.z-B.min.z,Ae=B.min.x,Ne=B.min.y,Ue=B.min.z):(ie=_t.width,fe=_t.height,Se=_t.depth,Ae=0,Ne=0,Ue=0),z!==null?(Te=z.x,at=z.y,ft=z.z):(Te=0,at=0,ft=0);const fn=Ve.convert(D.format),rt=Ve.convert(D.type);let Re;if(D.isData3DTexture)C.setTexture3D(D,0),Re=I.TEXTURE_3D;else if(D.isDataArrayTexture||D.isCompressedArrayTexture)C.setTexture2DArray(D,0),Re=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,D.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,D.unpackAlignment);const Ft=I.getParameter(I.UNPACK_ROW_LENGTH),st=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Tn=I.getParameter(I.UNPACK_SKIP_PIXELS),Xr=I.getParameter(I.UNPACK_SKIP_ROWS),dn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,_t.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,_t.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ae),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ne),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ue),E.isDataTexture||E.isData3DTexture?I.texSubImage3D(Re,N,Te,at,ft,ie,fe,Se,fn,rt,_t.data):D.isCompressedArrayTexture?I.compressedTexSubImage3D(Re,N,Te,at,ft,ie,fe,Se,fn,_t.data):I.texSubImage3D(Re,N,Te,at,ft,ie,fe,Se,fn,rt,_t),I.pixelStorei(I.UNPACK_ROW_LENGTH,Ft),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,st),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Tn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Xr),I.pixelStorei(I.UNPACK_SKIP_IMAGES,dn),N===0&&D.generateMipmaps&&I.generateMipmap(Re),ae.unbindTexture()},this.initRenderTarget=function(E){ge.get(E).__webglFramebuffer===void 0&&C.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?C.setTextureCube(E,0):E.isData3DTexture?C.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?C.setTexture2DArray(E,0):C.setTexture2D(E,0),ae.unbindTexture()},this.resetState=function(){A=0,T=0,w=null,ae.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Rl?"display-p3":"srgb",t.unpackColorSpace=Qe.workingColorSpace===$a?"display-p3":"srgb"}}class Ul{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new de(e),this.density=t}clone(){return new Ul(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ol{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new de(e),this.near=t,this.far=n}clone(){return new Ol(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Vf extends tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yn,this.environmentIntensity=1,this.environmentRotation=new yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Fl{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ra,this.updateRanges=[],this.version=0,this.uuid=xn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const qt=new R;class Or{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Zt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ge(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ge(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ge(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ge(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ge(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Zt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Zt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Zt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Zt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ge(t,this.array),n=Ge(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ge(t,this.array),n=Ge(n,this.array),r=Ge(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ge(t,this.array),n=Ge(n,this.array),r=Ge(r,this.array),s=Ge(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new ot(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Or(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Hf extends Xt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new de(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let os;const Ks=new R,cs=new R,ls=new R,us=new K,Js=new K,A0=new Pe,Oo=new R,$s=new R,Fo=new R,Mp=new K,Hu=new K,bp=new K;class T0 extends tt{constructor(e=new Hf){if(super(),this.isSprite=!0,this.type="Sprite",os===void 0){os=new We;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Fl(t,5);os.setIndex([0,1,2,0,2,3]),os.setAttribute("position",new Or(n,3,0,!1)),os.setAttribute("uv",new Or(n,2,3,!1))}this.geometry=os,this.material=e,this.center=new K(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),cs.setFromMatrixScale(this.matrixWorld),A0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ls.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&cs.multiplyScalar(-ls.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const a=this.center;Bo(Oo.set(-.5,-.5,0),ls,a,cs,r,s),Bo($s.set(.5,-.5,0),ls,a,cs,r,s),Bo(Fo.set(.5,.5,0),ls,a,cs,r,s),Mp.set(0,0),Hu.set(1,0),bp.set(1,1);let o=e.ray.intersectTriangle(Oo,$s,Fo,!1,Ks);if(o===null&&(Bo($s.set(-.5,.5,0),ls,a,cs,r,s),Hu.set(0,1),o=e.ray.intersectTriangle(Oo,Fo,$s,!1,Ks),o===null))return;const c=e.ray.origin.distanceTo(Ks);c<e.near||c>e.far||t.push({distance:c,point:Ks.clone(),uv:an.getInterpolation(Ks,Oo,$s,Fo,Mp,Hu,bp,new K),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Bo(i,e,t,n,r,s){us.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(Js.x=s*us.x-r*us.y,Js.y=r*us.x+s*us.y):Js.copy(us),i.copy(e),i.x+=Js.x,i.y+=Js.y,i.applyMatrix4(A0)}const zo=new R,Sp=new R;class C0 extends tt{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,r=t.length;n<r;n++){const s=t[n];this.addLevel(s.object.clone(),s.distance,s.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const r=this.levels;let s;for(s=0;s<r.length&&!(t<r[s].distance);s++);return r.splice(s,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}removeLevel(e){const t=this.levels;for(let n=0;n<t.length;n++)if(t[n].distance===e){const r=t.splice(n,1);return this.remove(r[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,r;for(n=1,r=t.length;n<r;n++){let s=t[n].distance;if(t[n].object.visible&&(s-=s*t[n].hysteresis),e<s)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){zo.setFromMatrixPosition(this.matrixWorld);const r=e.ray.origin.distanceTo(zo);this.getObjectForDistance(r).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){zo.setFromMatrixPosition(e.matrixWorld),Sp.setFromMatrixPosition(this.matrixWorld);const n=zo.distanceTo(Sp)/e.zoom;t[0].object.visible=!0;let r,s;for(r=1,s=t.length;r<s;r++){let a=t[r].distance;if(t[r].object.visible&&(a-=a*t[r].hysteresis),n>=a)t[r-1].object.visible=!1,t[r].object.visible=!0;else break}for(this._currentLevel=r-1;r<s;r++)t[r].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let r=0,s=n.length;r<s;r++){const a=n[r];t.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return t}}const Ep=new R,Ap=new et,Tp=new et,kA=new R,Cp=new Pe,ko=new R,Gu=new Wt,Rp=new Pe,Wu=new Os;class R0 extends wt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Dh,this.bindMatrix=new Pe,this.bindMatrixInverse=new Pe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new en),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ko),this.boundingBox.expandByPoint(ko)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Wt),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ko),this.boundingSphere.expandByPoint(ko)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Gu.copy(this.boundingSphere),Gu.applyMatrix4(r),e.ray.intersectsSphere(Gu)!==!1&&(Rp.copy(r).invert(),Wu.copy(e.ray).applyMatrix4(Rp),!(this.boundingBox!==null&&Wu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Wu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new et,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Dh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===K_?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,r=this.geometry;Ap.fromBufferAttribute(r.attributes.skinIndex,e),Tp.fromBufferAttribute(r.attributes.skinWeight,e),Ep.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=Tp.getComponent(s);if(a!==0){const o=Ap.getComponent(s);Cp.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(kA.copy(Ep).applyMatrix4(Cp),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Gf extends tt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Yn extends Mt{constructor(e=null,t=1,n=1,r,s,a,o,c,l=Ot,u=Ot,h,f){super(null,a,o,c,l,u,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Pp=new Pe,VA=new Pe;class Bl{constructor(e=[],t=[]){this.uuid=xn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new Pe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Pe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:VA;Pp.multiplyMatrices(o,t[s]),Pp.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Bl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Yn(t,e,e,$t,cn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const s=e.bones[n];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new Gf),this.bones.push(a),this.boneInverses.push(new Pe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const a=t[r];e.bones.push(a.uuid);const o=n[r];e.boneInverses.push(o.toArray())}return e}}class Ps extends ot{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const hs=new Pe,Ip=new Pe,Vo=[],Lp=new en,HA=new Pe,js=new wt,Qs=new Wt;class P0 extends wt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ps(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,HA)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new en),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,hs),Lp.copy(e.boundingBox).applyMatrix4(hs),this.boundingBox.union(Lp)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Wt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,hs),Qs.copy(e.boundingSphere).applyMatrix4(hs),this.boundingSphere.union(Qs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(js.geometry=this.geometry,js.material=this.material,js.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qs.copy(this.boundingSphere),Qs.applyMatrix4(n),e.ray.intersectsSphere(Qs)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,hs),Ip.multiplyMatrices(n,hs),js.matrixWorld=Ip,js.raycast(e,Vo);for(let a=0,o=Vo.length;a<o;a++){const c=Vo[a];c.instanceId=s,c.object=this,t.push(c)}Vo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ps(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Yn(new Float32Array(r*this.count),r,this.count,El,cn));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=r*e;s[c]=o,s.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}function GA(i,e){return i.z-e.z}function WA(i,e){return e.z-i.z}class XA{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n){const r=this.pool,s=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});const a=r[this.index];s.push(a),this.index++,a.start=e.start,a.count=e.count,a.z=t,a.index=n}reset(){this.list.length=0,this.index=0}}const Di=new Pe,Xu=new Pe,qA=new Pe,YA=new de(1,1,1),Dp=new Pe,qu=new Qa,Ho=new en,lr=new Wt,ea=new R,Np=new R,ZA=new R,Yu=new XA,Vt=new wt,Go=[];function KA(i,e,t=0){const n=e.itemSize;if(i.isInterleavedBufferAttribute||i.array.constructor!==e.array.constructor){const r=i.count;for(let s=0;s<r;s++)for(let a=0;a<n;a++)e.setComponent(s+t,a,i.getComponent(s,a))}else e.array.set(i.array,t*n);e.needsUpdate=!0}class I0 extends wt{get maxInstanceCount(){return this._maxInstanceCount}constructor(e,t,n=t*2,r){super(new We,r),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._drawInfo=[],this._availableInstanceIds=[],this._drawRanges=[],this._reservedRanges=[],this._bounds=[],this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._geometryInitialized=!1,this._geometryCount=0,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._visibilityChanged=!0,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),n=new Yn(t,e,e,$t,cn);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Uint32Array(e*e),n=new Yn(t,e,e,Ja,_i);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Float32Array(e*e*4).fill(1),n=new Yn(t,e,e,$t,cn);n.colorSpace=Qe.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){const t=this.geometry,n=this._maxVertexCount,r=this._maxIndexCount;if(this._geometryInitialized===!1){for(const s in e.attributes){const a=e.getAttribute(s),{array:o,itemSize:c,normalized:l}=a,u=new o.constructor(n*c),h=new ot(u,c,l);t.setAttribute(s,h)}if(e.getIndex()!==null){const s=n>65535?new Uint32Array(r):new Uint16Array(r);t.setIndex(new ot(s,1))}this._geometryInitialized=!0}}_validateGeometry(e){const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(const n in t.attributes){if(!e.hasAttribute(n))throw new Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const r=e.getAttribute(n),s=t.getAttribute(n);if(r.itemSize!==s.itemSize||r.normalized!==s.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new en);const e=this.boundingBox,t=this._drawInfo;e.makeEmpty();for(let n=0,r=t.length;n<r;n++){if(t[n].active===!1)continue;const s=t[n].geometryIndex;this.getMatrixAt(n,Di),this.getBoundingBoxAt(s,Ho).applyMatrix4(Di),e.union(Ho)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wt);const e=this.boundingSphere,t=this._drawInfo;e.makeEmpty();for(let n=0,r=t.length;n<r;n++){if(t[n].active===!1)continue;const s=t[n].geometryIndex;this.getMatrixAt(n,Di),this.getBoundingSphereAt(s,lr).applyMatrix4(Di),e.union(lr)}}addInstance(e){if(this._drawInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("BatchedMesh: Maximum item count reached.");const n={visible:!0,active:!0,geometryIndex:e};let r=null;this._availableInstanceIds.length>0?(r=this._availableInstanceIds.pop(),this._drawInfo[r]=n):(r=this._drawInfo.length,this._drawInfo.push(n));const s=this._matricesTexture,a=s.image.data;qA.toArray(a,r*16),s.needsUpdate=!0;const o=this._colorsTexture;return o&&(YA.toArray(o.image.data,r*4),o.needsUpdate=!0),r}addGeometry(e,t=-1,n=-1){if(this._initializeGeometry(e),this._validateGeometry(e),this._drawInfo.length>=this._maxInstanceCount)throw new Error("BatchedMesh: Maximum item count reached.");const r={vertexStart:-1,vertexCount:-1,indexStart:-1,indexCount:-1};let s=null;const a=this._reservedRanges,o=this._drawRanges,c=this._bounds;this._geometryCount!==0&&(s=a[a.length-1]),t===-1?r.vertexCount=e.getAttribute("position").count:r.vertexCount=t,s===null?r.vertexStart=0:r.vertexStart=s.vertexStart+s.vertexCount;const l=e.getIndex(),u=l!==null;if(u&&(n===-1?r.indexCount=l.count:r.indexCount=n,s===null?r.indexStart=0:r.indexStart=s.indexStart+s.indexCount),r.indexStart!==-1&&r.indexStart+r.indexCount>this._maxIndexCount||r.vertexStart+r.vertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");const h=this._geometryCount;return this._geometryCount++,a.push(r),o.push({start:u?r.indexStart:r.vertexStart,count:-1}),c.push({boxInitialized:!1,box:new en,sphereInitialized:!1,sphere:new Wt}),this.setGeometryAt(h,e),h}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const n=this.geometry,r=n.getIndex()!==null,s=n.getIndex(),a=t.getIndex(),o=this._reservedRanges[e];if(r&&a.count>o.indexCount||t.attributes.position.count>o.vertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");const c=o.vertexStart,l=o.vertexCount;for(const d in n.attributes){const p=t.getAttribute(d),_=n.getAttribute(d);KA(p,_,c);const m=p.itemSize;for(let g=p.count,v=l;g<v;g++){const x=c+g;for(let M=0;M<m;M++)_.setComponent(x,M,0)}_.needsUpdate=!0,_.addUpdateRange(c*m,l*m)}if(r){const d=o.indexStart;for(let p=0;p<a.count;p++)s.setX(d+p,c+a.getX(p));for(let p=a.count,_=o.indexCount;p<_;p++)s.setX(d+p,c);s.needsUpdate=!0,s.addUpdateRange(d,o.indexCount)}const u=this._bounds[e];t.boundingBox!==null?(u.box.copy(t.boundingBox),u.boxInitialized=!0):u.boxInitialized=!1,t.boundingSphere!==null?(u.sphere.copy(t.boundingSphere),u.sphereInitialized=!0):u.sphereInitialized=!1;const h=this._drawRanges[e],f=t.getAttribute("position");return h.count=r?a.count:f.count,this._visibilityChanged=!0,e}deleteInstance(e){const t=this._drawInfo;return e>=t.length||t[e].active===!1?this:(t[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this)}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;const n=this._bounds[e],r=n.box,s=this.geometry;if(n.boxInitialized===!1){r.makeEmpty();const a=s.index,o=s.attributes.position,c=this._drawRanges[e];for(let l=c.start,u=c.start+c.count;l<u;l++){let h=l;a&&(h=a.getX(h)),r.expandByPoint(ea.fromBufferAttribute(o,h))}n.boxInitialized=!0}return t.copy(r),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;const n=this._bounds[e],r=n.sphere,s=this.geometry;if(n.sphereInitialized===!1){r.makeEmpty(),this.getBoundingBoxAt(e,Ho),Ho.getCenter(r.center);const a=s.index,o=s.attributes.position,c=this._drawRanges[e];let l=0;for(let u=c.start,h=c.start+c.count;u<h;u++){let f=u;a&&(f=a.getX(f)),ea.fromBufferAttribute(o,f),l=Math.max(l,r.center.distanceToSquared(ea))}r.radius=Math.sqrt(l),n.sphereInitialized=!0}return t.copy(r),t}setMatrixAt(e,t){const n=this._drawInfo,r=this._matricesTexture,s=this._matricesTexture.image.data;return e>=n.length||n[e].active===!1?this:(t.toArray(s,e*16),r.needsUpdate=!0,this)}getMatrixAt(e,t){const n=this._drawInfo,r=this._matricesTexture.image.data;return e>=n.length||n[e].active===!1?null:t.fromArray(r,e*16)}setColorAt(e,t){this._colorsTexture===null&&this._initColorsTexture();const n=this._colorsTexture,r=this._colorsTexture.image.data,s=this._drawInfo;return e>=s.length||s[e].active===!1?this:(t.toArray(r,e*4),n.needsUpdate=!0,this)}getColorAt(e,t){const n=this._colorsTexture.image.data,r=this._drawInfo;return e>=r.length||r[e].active===!1?null:t.fromArray(n,e*4)}setVisibleAt(e,t){const n=this._drawInfo;return e>=n.length||n[e].active===!1||n[e].visible===t?this:(n[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){const t=this._drawInfo;return e>=t.length||t[e].active===!1?!1:t[e].visible}setGeometryIdAt(e,t){const n=this._drawInfo;return e>=n.length||n[e].active===!1||t<0||t>=this._geometryCount?null:(n[e].geometryIndex=t,this)}getGeometryIdAt(e){const t=this._drawInfo;return e>=t.length||t[e].active===!1?-1:t[e].geometryIndex}getGeometryRangeAt(e,t={}){if(e<0||e>=this._geometryCount)return null;const n=this._drawRanges[e];return t.start=n.start,t.count=n.count,t}raycast(e,t){const n=this._drawInfo,r=this._drawRanges,s=this.matrixWorld,a=this.geometry;Vt.material=this.material,Vt.geometry.index=a.index,Vt.geometry.attributes=a.attributes,Vt.geometry.boundingBox===null&&(Vt.geometry.boundingBox=new en),Vt.geometry.boundingSphere===null&&(Vt.geometry.boundingSphere=new Wt);for(let o=0,c=n.length;o<c;o++){if(!n[o].visible||!n[o].active)continue;const l=n[o].geometryIndex,u=r[l];Vt.geometry.setDrawRange(u.start,u.count),this.getMatrixAt(o,Vt.matrixWorld).premultiply(s),this.getBoundingBoxAt(l,Vt.geometry.boundingBox),this.getBoundingSphereAt(l,Vt.geometry.boundingSphere),Vt.raycast(e,Go);for(let h=0,f=Go.length;h<f;h++){const d=Go[h];d.object=this,d.batchId=o,t.push(d)}Go.length=0}Vt.material=null,Vt.geometry.index=null,Vt.geometry.attributes={},Vt.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._drawRanges=e._drawRanges.map(t=>({...t})),this._reservedRanges=e._reservedRanges.map(t=>({...t})),this._drawInfo=e._drawInfo.map(t=>({...t})),this._bounds=e._bounds.map(t=>({boxInitialized:t.boxInitialized,box:t.box.clone(),sphereInitialized:t.sphereInitialized,sphere:t.sphere.clone()})),this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._geometryCount=e._geometryCount,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this}onBeforeRender(e,t,n,r,s){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const a=r.getIndex(),o=a===null?1:a.array.BYTES_PER_ELEMENT,c=this._drawInfo,l=this._multiDrawStarts,u=this._multiDrawCounts,h=this._drawRanges,f=this.perObjectFrustumCulled,d=this._indirectTexture,p=d.image.data;f&&(Dp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),qu.setFromProjectionMatrix(Dp,e.coordinateSystem));let _=0;if(this.sortObjects){Xu.copy(this.matrixWorld).invert(),ea.setFromMatrixPosition(n.matrixWorld).applyMatrix4(Xu),Np.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(Xu);for(let v=0,x=c.length;v<x;v++)if(c[v].visible&&c[v].active){const M=c[v].geometryIndex;this.getMatrixAt(v,Di),this.getBoundingSphereAt(M,lr).applyMatrix4(Di);let A=!1;if(f&&(A=!qu.intersectsSphere(lr)),!A){const T=ZA.subVectors(lr.center,ea).dot(Np);Yu.push(h[M],T,v)}}const m=Yu.list,g=this.customSort;g===null?m.sort(s.transparent?WA:GA):g.call(this,m,n);for(let v=0,x=m.length;v<x;v++){const M=m[v];l[_]=M.start*o,u[_]=M.count,p[_]=M.index,_++}Yu.reset()}else for(let m=0,g=c.length;m<g;m++)if(c[m].visible&&c[m].active){const v=c[m].geometryIndex;let x=!1;if(f&&(this.getMatrixAt(m,Di),this.getBoundingSphereAt(v,lr).applyMatrix4(Di),x=!qu.intersectsSphere(lr)),!x){const M=h[v];l[_]=M.start*o,u[_]=M.count,p[_]=m,_++}}d.needsUpdate=!0,this._multiDrawCount=_,this._visibilityChanged=!1}onBeforeShadow(e,t,n,r,s,a){this.onBeforeRender(e,null,r,s,a)}}class tn extends Xt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new de(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const al=new R,ol=new R,Up=new Pe,ta=new Os,Wo=new Wt,Zu=new R,Op=new R;class Ki extends tt{constructor(e=new We,t=new tn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)al.fromBufferAttribute(t,r-1),ol.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=al.distanceTo(ol);e.setAttribute("lineDistance",new we(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wo.copy(n.boundingSphere),Wo.applyMatrix4(r),Wo.radius+=s,e.ray.intersectsSphere(Wo)===!1)return;Up.copy(r).invert(),ta.copy(e.ray).applyMatrix4(Up);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let _=d,m=p-1;_<m;_+=l){const g=u.getX(_),v=u.getX(_+1),x=Xo(this,e,ta,c,g,v);x&&t.push(x)}if(this.isLineLoop){const _=u.getX(p-1),m=u.getX(d),g=Xo(this,e,ta,c,_,m);g&&t.push(g)}}else{const d=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let _=d,m=p-1;_<m;_+=l){const g=Xo(this,e,ta,c,_,_+1);g&&t.push(g)}if(this.isLineLoop){const _=Xo(this,e,ta,c,p-1,d);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Xo(i,e,t,n,r,s){const a=i.geometry.attributes.position;if(al.fromBufferAttribute(a,r),ol.fromBufferAttribute(a,s),t.distanceSqToSegment(al,ol,Zu,Op)>n)return;Zu.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Zu);if(!(c<e.near||c>e.far))return{distance:c,point:Op.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}const Fp=new R,Bp=new R;class Qn extends Ki{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Fp.fromBufferAttribute(t,r),Bp.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Fp.distanceTo(Bp);e.setAttribute("lineDistance",new we(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class L0 extends Ki{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Wf extends Xt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new de(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const zp=new Pe,zh=new Os,qo=new Wt,Yo=new R;class D0 extends tt{constructor(e=new We,t=new Wf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qo.copy(n.boundingSphere),qo.applyMatrix4(r),qo.radius+=s,e.ray.intersectsSphere(qo)===!1)return;zp.copy(r).invert(),zh.copy(e.ray).applyMatrix4(zp);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null){const f=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let p=f,_=d;p<_;p++){const m=l.getX(p);Yo.fromBufferAttribute(h,m),kp(Yo,m,c,r,e,t,this)}}else{const f=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let p=f,_=d;p<_;p++)Yo.fromBufferAttribute(h,p),kp(Yo,p,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function kp(i,e,t,n,r,s,a){const o=zh.distanceSqToPoint(i);if(o<t){const c=new R;zh.closestPointToPoint(i,c),c.applyMatrix4(n);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class JA extends Mt{constructor(e,t,n,r,s,a,o,c,l){super(e,t,n,r,s,a,o,c,l),this.isVideoTexture=!0,this.minFilter=a!==void 0?a:Tt,this.magFilter=s!==void 0?s:Tt,this.generateMipmaps=!1;const u=this;function h(){u.needsUpdate=!0,e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(h)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class $A extends Mt{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=Ot,this.minFilter=Ot,this.generateMipmaps=!1,this.needsUpdate=!0}}class zl extends Mt{constructor(e,t,n,r,s,a,o,c,l,u,h,f){super(null,a,o,c,l,u,r,s,h,f),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class jA extends zl{constructor(e,t,n,r,s,a){super(e,t,n,s,a),this.isCompressedArrayTexture=!0,this.image.depth=r,this.wrapR=on,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class QA extends zl{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,gi),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class eT extends Mt{constructor(e,t,n,r,s,a,o,c,l){super(e,t,n,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class zn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let r=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,c=s-1,l;for(;o<=c;)if(r=Math.floor(o+(c-o)/2),l=n[r]-a,l<0)o=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,n[r]===a)return r/(s-1);const u=n[r],f=n[r+1]-u,d=(a-u)/f;return(r+d)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),c=t||(a.isVector2?new K:new R);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new R,r=[],s=[],a=[],o=new R,c=new Pe;for(let d=0;d<=e;d++){const p=d/e;r[d]=this.getTangentAt(p,new R)}s[0]=new R,a[0]=new R;let l=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),f<=l&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(r[d-1],r[d]),o.length()>Number.EPSILON){o.normalize();const p=Math.acos(vt(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(c.makeRotationAxis(o,p))}a[d].crossVectors(r[d],s[d])}if(t===!0){let d=Math.acos(vt(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(d=-d);for(let p=1;p<=e;p++)s[p].applyMatrix4(c.makeRotationAxis(r[p],d*p)),a[p].crossVectors(r[p],s[p])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class kl extends zn{constructor(e=0,t=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new K){const n=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*u-d*h+this.aX,l=f*h+d*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class N0 extends kl{constructor(e,t,n,r,s,a){super(e,t,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Xf(){let i=0,e=0,t=0,n=0;function r(s,a,o,c){i=s,e=o,t=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){r(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,u,h){let f=(a-s)/l-(o-s)/(l+u)+(o-a)/u,d=(o-a)/u-(c-a)/(u+h)+(c-o)/h;f*=u,d*=u,r(a,o,f,d)},calc:function(s){const a=s*s,o=a*s;return i+e*s+t*a+n*o}}}const Zo=new R,Ku=new Xf,Ju=new Xf,$u=new Xf;class U0 extends zn{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new R){const n=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let l,u;this.closed||o>0?l=r[(o-1)%s]:(Zo.subVectors(r[0],r[1]).add(r[0]),l=Zo);const h=r[o%s],f=r[(o+1)%s];if(this.closed||o+2<s?u=r[(o+2)%s]:(Zo.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Zo),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let p=Math.pow(l.distanceToSquared(h),d),_=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);_<1e-4&&(_=1),p<1e-4&&(p=_),m<1e-4&&(m=_),Ku.initNonuniformCatmullRom(l.x,h.x,f.x,u.x,p,_,m),Ju.initNonuniformCatmullRom(l.y,h.y,f.y,u.y,p,_,m),$u.initNonuniformCatmullRom(l.z,h.z,f.z,u.z,p,_,m)}else this.curveType==="catmullrom"&&(Ku.initCatmullRom(l.x,h.x,f.x,u.x,this.tension),Ju.initCatmullRom(l.y,h.y,f.y,u.y,this.tension),$u.initCatmullRom(l.z,h.z,f.z,u.z,this.tension));return n.set(Ku.calc(c),Ju.calc(c),$u.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new R().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Vp(i,e,t,n,r){const s=(n-e)*.5,a=(r-t)*.5,o=i*i,c=i*o;return(2*t-2*n+s+a)*c+(-3*t+3*n-2*s-a)*o+s*i+t}function tT(i,e){const t=1-i;return t*t*e}function nT(i,e){return 2*(1-i)*i*e}function iT(i,e){return i*i*e}function ma(i,e,t,n){return tT(i,e)+nT(i,t)+iT(i,n)}function rT(i,e){const t=1-i;return t*t*t*e}function sT(i,e){const t=1-i;return 3*t*t*i*e}function aT(i,e){return 3*(1-i)*i*i*e}function oT(i,e){return i*i*i*e}function ga(i,e,t,n,r){return rT(i,e)+sT(i,t)+aT(i,n)+oT(i,r)}class qf extends zn{constructor(e=new K,t=new K,n=new K,r=new K){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new K){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(ga(e,r.x,s.x,a.x,o.x),ga(e,r.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class O0 extends zn{constructor(e=new R,t=new R,n=new R,r=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new R){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(ga(e,r.x,s.x,a.x,o.x),ga(e,r.y,s.y,a.y,o.y),ga(e,r.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Yf extends zn{constructor(e=new K,t=new K){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new K){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new K){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class F0 extends zn{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Zf extends zn{constructor(e=new K,t=new K,n=new K){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new K){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(ma(e,r.x,s.x,a.x),ma(e,r.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Kf extends zn{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(ma(e,r.x,s.x,a.x),ma(e,r.y,s.y,a.y),ma(e,r.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Jf extends zn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new K){const n=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,c=r[a===0?a:a-1],l=r[a],u=r[a>r.length-2?r.length-1:a+1],h=r[a>r.length-3?r.length-1:a+2];return n.set(Vp(o,c.x,l.x,u.x,h.x),Vp(o,c.y,l.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new K().fromArray(r))}return this}}var cl=Object.freeze({__proto__:null,ArcCurve:N0,CatmullRomCurve3:U0,CubicBezierCurve:qf,CubicBezierCurve3:O0,EllipseCurve:kl,LineCurve:Yf,LineCurve3:F0,QuadraticBezierCurve:Zf,QuadraticBezierCurve3:Kf,SplineCurve:Jf});class B0 extends zn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new cl[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const a=r[s]-n,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new cl[r.type]().fromJSON(r))}return this}}class La extends B0{constructor(e){super(),this.type="Path",this.currentPoint=new K,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Yf(this.currentPoint.clone(),new K(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new Zf(this.currentPoint.clone(),new K(e,t),new K(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,a){const o=new qf(this.currentPoint.clone(),new K(e,t),new K(n,r),new K(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Jf(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,r,s,a),this}absarc(e,t,n,r,s,a){return this.absellipse(e,t,n,n,r,s,a),this}ellipse(e,t,n,r,s,a,o,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,r,s,a,o,c),this}absellipse(e,t,n,r,s,a,o,c){const l=new kl(e,t,n,r,s,a,o,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class eo extends We{constructor(e=[new K(0,-.5),new K(.5,0),new K(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=vt(r,0,Math.PI*2);const s=[],a=[],o=[],c=[],l=[],u=1/t,h=new R,f=new K,d=new R,p=new R,_=new R;let m=0,g=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:m=e[v+1].x-e[v].x,g=e[v+1].y-e[v].y,d.x=g*1,d.y=-m,d.z=g*0,_.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case e.length-1:c.push(_.x,_.y,_.z);break;default:m=e[v+1].x-e[v].x,g=e[v+1].y-e[v].y,d.x=g*1,d.y=-m,d.z=g*0,p.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),c.push(d.x,d.y,d.z),_.copy(p)}for(let v=0;v<=t;v++){const x=n+v*u*r,M=Math.sin(x),A=Math.cos(x);for(let T=0;T<=e.length-1;T++){h.x=e[T].x*M,h.y=e[T].y,h.z=e[T].x*A,a.push(h.x,h.y,h.z),f.x=v/t,f.y=T/(e.length-1),o.push(f.x,f.y);const w=c[3*T+0]*M,P=c[3*T+1],U=c[3*T+0]*A;l.push(w,P,U)}}for(let v=0;v<t;v++)for(let x=0;x<e.length-1;x++){const M=x+v*e.length,A=M,T=M+e.length,w=M+e.length+1,P=M+1;s.push(A,T,P),s.push(w,P,T)}this.setIndex(s),this.setAttribute("position",new we(a,3)),this.setAttribute("uv",new we(o,2)),this.setAttribute("normal",new we(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new eo(e.points,e.segments,e.phiStart,e.phiLength)}}class Vl extends eo{constructor(e=1,t=1,n=4,r=8){const s=new La;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(n),r),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:r}}static fromJSON(e){return new Vl(e.radius,e.length,e.capSegments,e.radialSegments)}}class Hl extends We{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);const s=[],a=[],o=[],c=[],l=new R,u=new K;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){const d=n+h/t*r;l.x=e*Math.cos(d),l.y=e*Math.sin(d),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[f]/e+1)/2,u.y=(a[f+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new we(a,3)),this.setAttribute("normal",new we(o,3)),this.setAttribute("uv",new we(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hl(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Bs extends We{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],f=[],d=[];let p=0;const _=[],m=n/2;let g=0;v(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new we(h,3)),this.setAttribute("normal",new we(f,3)),this.setAttribute("uv",new we(d,2));function v(){const M=new R,A=new R;let T=0;const w=(t-e)/n;for(let P=0;P<=s;P++){const U=[],y=P/s,b=y*(t-e)+e;for(let F=0;F<=r;F++){const k=F/r,H=k*c+o,Z=Math.sin(H),V=Math.cos(H);A.x=b*Z,A.y=-y*n+m,A.z=b*V,h.push(A.x,A.y,A.z),M.set(Z,w,V).normalize(),f.push(M.x,M.y,M.z),d.push(k,1-y),U.push(p++)}_.push(U)}for(let P=0;P<r;P++)for(let U=0;U<s;U++){const y=_[U][P],b=_[U+1][P],F=_[U+1][P+1],k=_[U][P+1];e>0&&(u.push(y,b,k),T+=3),t>0&&(u.push(b,F,k),T+=3)}l.addGroup(g,T,0),g+=T}function x(M){const A=p,T=new K,w=new R;let P=0;const U=M===!0?e:t,y=M===!0?1:-1;for(let F=1;F<=r;F++)h.push(0,m*y,0),f.push(0,y,0),d.push(.5,.5),p++;const b=p;for(let F=0;F<=r;F++){const H=F/r*c+o,Z=Math.cos(H),V=Math.sin(H);w.x=U*V,w.y=m*y,w.z=U*Z,h.push(w.x,w.y,w.z),f.push(0,y,0),T.x=Z*.5+.5,T.y=V*.5*y+.5,d.push(T.x,T.y),p++}for(let F=0;F<r;F++){const k=A+F,H=b+F;M===!0?u.push(H,H+1,k):u.push(H+1,H,k),P+=3}l.addGroup(g,P,M===!0?1:2),g+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bs(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Gl extends Bs{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Gl(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class er extends We{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],a=[];o(r),l(n),u(),this.setAttribute("position",new we(s,3)),this.setAttribute("normal",new we(s.slice(),3)),this.setAttribute("uv",new we(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const x=new R,M=new R,A=new R;for(let T=0;T<t.length;T+=3)d(t[T+0],x),d(t[T+1],M),d(t[T+2],A),c(x,M,A,v)}function c(v,x,M,A){const T=A+1,w=[];for(let P=0;P<=T;P++){w[P]=[];const U=v.clone().lerp(M,P/T),y=x.clone().lerp(M,P/T),b=T-P;for(let F=0;F<=b;F++)F===0&&P===T?w[P][F]=U:w[P][F]=U.clone().lerp(y,F/b)}for(let P=0;P<T;P++)for(let U=0;U<2*(T-P)-1;U++){const y=Math.floor(U/2);U%2===0?(f(w[P][y+1]),f(w[P+1][y]),f(w[P][y])):(f(w[P][y+1]),f(w[P+1][y+1]),f(w[P+1][y]))}}function l(v){const x=new R;for(let M=0;M<s.length;M+=3)x.x=s[M+0],x.y=s[M+1],x.z=s[M+2],x.normalize().multiplyScalar(v),s[M+0]=x.x,s[M+1]=x.y,s[M+2]=x.z}function u(){const v=new R;for(let x=0;x<s.length;x+=3){v.x=s[x+0],v.y=s[x+1],v.z=s[x+2];const M=m(v)/2/Math.PI+.5,A=g(v)/Math.PI+.5;a.push(M,1-A)}p(),h()}function h(){for(let v=0;v<a.length;v+=6){const x=a[v+0],M=a[v+2],A=a[v+4],T=Math.max(x,M,A),w=Math.min(x,M,A);T>.9&&w<.1&&(x<.2&&(a[v+0]+=1),M<.2&&(a[v+2]+=1),A<.2&&(a[v+4]+=1))}}function f(v){s.push(v.x,v.y,v.z)}function d(v,x){const M=v*3;x.x=e[M+0],x.y=e[M+1],x.z=e[M+2]}function p(){const v=new R,x=new R,M=new R,A=new R,T=new K,w=new K,P=new K;for(let U=0,y=0;U<s.length;U+=9,y+=6){v.set(s[U+0],s[U+1],s[U+2]),x.set(s[U+3],s[U+4],s[U+5]),M.set(s[U+6],s[U+7],s[U+8]),T.set(a[y+0],a[y+1]),w.set(a[y+2],a[y+3]),P.set(a[y+4],a[y+5]),A.copy(v).add(x).add(M).divideScalar(3);const b=m(A);_(T,y+0,v,b),_(w,y+2,x,b),_(P,y+4,M,b)}}function _(v,x,M,A){A<0&&v.x===1&&(a[x]=v.x-1),M.x===0&&M.z===0&&(a[x]=A/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function g(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new er(e.vertices,e.indices,e.radius,e.details)}}class Wl extends er{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Wl(e.radius,e.detail)}}const Ko=new R,Jo=new R,ju=new R,$o=new an;class z0 extends We{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(Pr*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],u=["a","b","c"],h=new Array(3),f={},d=[];for(let p=0;p<c;p+=3){a?(l[0]=a.getX(p),l[1]=a.getX(p+1),l[2]=a.getX(p+2)):(l[0]=p,l[1]=p+1,l[2]=p+2);const{a:_,b:m,c:g}=$o;if(_.fromBufferAttribute(o,l[0]),m.fromBufferAttribute(o,l[1]),g.fromBufferAttribute(o,l[2]),$o.getNormal(ju),h[0]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,h[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,h[2]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let v=0;v<3;v++){const x=(v+1)%3,M=h[v],A=h[x],T=$o[u[v]],w=$o[u[x]],P=`${M}_${A}`,U=`${A}_${M}`;U in f&&f[U]?(ju.dot(f[U].normal)<=s&&(d.push(T.x,T.y,T.z),d.push(w.x,w.y,w.z)),f[U]=null):P in f||(f[P]={index0:l[v],index1:l[x],normal:ju.clone()})}}for(const p in f)if(f[p]){const{index0:_,index1:m}=f[p];Ko.fromBufferAttribute(o,_),Jo.fromBufferAttribute(o,m),d.push(Ko.x,Ko.y,Ko.z),d.push(Jo.x,Jo.y,Jo.z)}this.setAttribute("position",new we(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Ir extends La{constructor(e){super(e),this.uuid=xn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new La().fromJSON(r))}return this}}const cT={triangulate:function(i,e,t=2){const n=e&&e.length,r=n?e[0]*t:i.length;let s=k0(i,0,r,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,c,l,u,h,f,d;if(n&&(s=dT(i,e,s,t)),i.length>80*t){o=l=i[0],c=u=i[1];for(let p=t;p<r;p+=t)h=i[p],f=i[p+1],h<o&&(o=h),f<c&&(c=f),h>l&&(l=h),f>u&&(u=f);d=Math.max(l-o,u-c),d=d!==0?32767/d:0}return Da(s,a,t,o,c,d,0),a}};function k0(i,e,t,n,r){let s,a;if(r===wT(i,e,t,n)>0)for(s=e;s<t;s+=n)a=Hp(s,i[s],i[s+1],a);else for(s=t-n;s>=e;s-=n)a=Hp(s,i[s],i[s+1],a);return a&&Xl(a,a.next)&&(Ua(a),a=a.next),a}function Fr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Xl(t,t.next)||mt(t.prev,t,t.next)===0)){if(Ua(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Da(i,e,t,n,r,s,a){if(!i)return;!a&&s&&xT(i,n,r,s);let o=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,s?uT(i,n,r,s):lT(i)){e.push(c.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),Ua(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=hT(Fr(i),e,t),Da(i,e,t,n,r,s,2)):a===2&&fT(i,e,t,n,r,s):Da(Fr(i),e,t,n,r,s,1);break}}}function lT(i){const e=i.prev,t=i,n=i.next;if(mt(e,t,n)>=0)return!1;const r=e.x,s=t.x,a=n.x,o=e.y,c=t.y,l=n.y,u=r<s?r<a?r:a:s<a?s:a,h=o<c?o<l?o:l:c<l?c:l,f=r>s?r>a?r:a:s>a?s:a,d=o>c?o>l?o:l:c>l?c:l;let p=n.next;for(;p!==e;){if(p.x>=u&&p.x<=f&&p.y>=h&&p.y<=d&&vs(r,o,s,c,a,l,p.x,p.y)&&mt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function uT(i,e,t,n){const r=i.prev,s=i,a=i.next;if(mt(r,s,a)>=0)return!1;const o=r.x,c=s.x,l=a.x,u=r.y,h=s.y,f=a.y,d=o<c?o<l?o:l:c<l?c:l,p=u<h?u<f?u:f:h<f?h:f,_=o>c?o>l?o:l:c>l?c:l,m=u>h?u>f?u:f:h>f?h:f,g=kh(d,p,e,t,n),v=kh(_,m,e,t,n);let x=i.prevZ,M=i.nextZ;for(;x&&x.z>=g&&M&&M.z<=v;){if(x.x>=d&&x.x<=_&&x.y>=p&&x.y<=m&&x!==r&&x!==a&&vs(o,u,c,h,l,f,x.x,x.y)&&mt(x.prev,x,x.next)>=0||(x=x.prevZ,M.x>=d&&M.x<=_&&M.y>=p&&M.y<=m&&M!==r&&M!==a&&vs(o,u,c,h,l,f,M.x,M.y)&&mt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;x&&x.z>=g;){if(x.x>=d&&x.x<=_&&x.y>=p&&x.y<=m&&x!==r&&x!==a&&vs(o,u,c,h,l,f,x.x,x.y)&&mt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;M&&M.z<=v;){if(M.x>=d&&M.x<=_&&M.y>=p&&M.y<=m&&M!==r&&M!==a&&vs(o,u,c,h,l,f,M.x,M.y)&&mt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function hT(i,e,t){let n=i;do{const r=n.prev,s=n.next.next;!Xl(r,s)&&V0(r,n,n.next,s)&&Na(r,s)&&Na(s,r)&&(e.push(r.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),Ua(n),Ua(n.next),n=i=s),n=n.next}while(n!==i);return Fr(n)}function fT(i,e,t,n,r,s){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&MT(a,o)){let c=H0(a,o);a=Fr(a,a.next),c=Fr(c,c.next),Da(a,e,t,n,r,s,0),Da(c,e,t,n,r,s,0);return}o=o.next}a=a.next}while(a!==i)}function dT(i,e,t,n){const r=[];let s,a,o,c,l;for(s=0,a=e.length;s<a;s++)o=e[s]*n,c=s<a-1?e[s+1]*n:i.length,l=k0(i,o,c,n,!1),l===l.next&&(l.steiner=!0),r.push(yT(l));for(r.sort(pT),s=0;s<r.length;s++)t=mT(r[s],t);return t}function pT(i,e){return i.x-e.x}function mT(i,e){const t=gT(i,e);if(!t)return e;const n=H0(t,i);return Fr(n,n.next),Fr(t,t.next)}function gT(i,e){let t=e,n=-1/0,r;const s=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const f=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=s&&f>n&&(n=f,r=t.x<t.next.x?t:t.next,f===s))return r}t=t.next}while(t!==e);if(!r)return null;const o=r,c=r.x,l=r.y;let u=1/0,h;t=r;do s>=t.x&&t.x>=c&&s!==t.x&&vs(a<l?s:n,a,c,l,a<l?n:s,a,t.x,t.y)&&(h=Math.abs(a-t.y)/(s-t.x),Na(t,i)&&(h<u||h===u&&(t.x>r.x||t.x===r.x&&_T(r,t)))&&(r=t,u=h)),t=t.next;while(t!==o);return r}function _T(i,e){return mt(i.prev,i,e.prev)<0&&mt(e.next,i,i.next)<0}function xT(i,e,t,n){let r=i;do r.z===0&&(r.z=kh(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,vT(r)}function vT(i){let e,t,n,r,s,a,o,c,l=1;do{for(t=i,i=null,s=null,a=0;t;){for(a++,n=t,o=0,e=0;e<l&&(o++,n=n.nextZ,!!n);e++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||t.z<=n.z)?(r=t,t=t.nextZ,o--):(r=n,n=n.nextZ,c--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;t=n}s.nextZ=null,l*=2}while(a>1);return i}function kh(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function yT(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function vs(i,e,t,n,r,s,a,o){return(r-a)*(e-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(n-o)}function MT(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!bT(i,e)&&(Na(i,e)&&Na(e,i)&&ST(i,e)&&(mt(i.prev,i,e.prev)||mt(i,e.prev,e))||Xl(i,e)&&mt(i.prev,i,i.next)>0&&mt(e.prev,e,e.next)>0)}function mt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Xl(i,e){return i.x===e.x&&i.y===e.y}function V0(i,e,t,n){const r=Qo(mt(i,e,t)),s=Qo(mt(i,e,n)),a=Qo(mt(t,n,i)),o=Qo(mt(t,n,e));return!!(r!==s&&a!==o||r===0&&jo(i,t,e)||s===0&&jo(i,n,e)||a===0&&jo(t,i,n)||o===0&&jo(t,e,n))}function jo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Qo(i){return i>0?1:i<0?-1:0}function bT(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&V0(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Na(i,e){return mt(i.prev,i,i.next)<0?mt(i,e,i.next)>=0&&mt(i,i.prev,e)>=0:mt(i,e,i.prev)<0||mt(i,i.next,e)<0}function ST(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function H0(i,e){const t=new Vh(i.i,i.x,i.y),n=new Vh(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Hp(i,e,t,n){const r=new Vh(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Ua(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Vh(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function wT(i,e,t,n){let r=0;for(let s=e,a=t-n;s<t;s+=n)r+=(i[a]-i[s])*(i[s+1]+i[a+1]),a=s;return r}class Zn{static area(e){const t=e.length;let n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return Zn.area(e)<0}static triangulateShape(e,t){const n=[],r=[],s=[];Gp(e),Wp(n,e);let a=e.length;t.forEach(Gp);for(let c=0;c<t.length;c++)r.push(a),a+=t[c].length,Wp(n,t[c]);const o=cT.triangulate(n,r);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}}function Gp(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Wp(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class ql extends We{constructor(e=new Ir([new K(.5,.5),new K(-.5,.5),new K(-.5,-.5),new K(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,r=[],s=[];for(let o=0,c=e.length;o<c;o++){const l=e[o];a(l)}this.setAttribute("position",new we(r,3)),this.setAttribute("uv",new we(s,2)),this.computeVertexNormals();function a(o){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:d-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const g=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:ET;let x,M=!1,A,T,w,P;g&&(x=g.getSpacedPoints(u),M=!0,f=!1,A=g.computeFrenetFrames(u,!1),T=new R,w=new R,P=new R),f||(m=0,d=0,p=0,_=0);const U=o.extractPoints(l);let y=U.shape;const b=U.holes;if(!Zn.isClockWise(y)){y=y.reverse();for(let J=0,I=b.length;J<I;J++){const se=b[J];Zn.isClockWise(se)&&(b[J]=se.reverse())}}const k=Zn.triangulateShape(y,b),H=y;for(let J=0,I=b.length;J<I;J++){const se=b[J];y=y.concat(se)}function Z(J,I,se){return I||console.error("THREE.ExtrudeGeometry: vec does not exist"),J.clone().addScaledVector(I,se)}const V=y.length,Q=k.length;function W(J,I,se){let re,ee,ae;const Ce=J.x-I.x,ge=J.y-I.y,C=se.x-J.x,S=se.y-J.y,O=Ce*Ce+ge*ge,q=Ce*S-ge*C;if(Math.abs(q)>Number.EPSILON){const $=Math.sqrt(O),Y=Math.sqrt(C*C+S*S),Ee=I.x-ge/$,ce=I.y+Ce/$,ve=se.x-S/Y,Ke=se.y+C/Y,ne=((ve-Ee)*S-(Ke-ce)*C)/(Ce*S-ge*C);re=Ee+Ce*ne-J.x,ee=ce+ge*ne-J.y;const ye=re*re+ee*ee;if(ye<=2)return new K(re,ee);ae=Math.sqrt(ye/2)}else{let $=!1;Ce>Number.EPSILON?C>Number.EPSILON&&($=!0):Ce<-Number.EPSILON?C<-Number.EPSILON&&($=!0):Math.sign(ge)===Math.sign(S)&&($=!0),$?(re=-ge,ee=Ce,ae=Math.sqrt(O)):(re=Ce,ee=ge,ae=Math.sqrt(O/2))}return new K(re/ae,ee/ae)}const ue=[];for(let J=0,I=H.length,se=I-1,re=J+1;J<I;J++,se++,re++)se===I&&(se=0),re===I&&(re=0),ue[J]=W(H[J],H[se],H[re]);const pe=[];let me,Ze=ue.concat();for(let J=0,I=b.length;J<I;J++){const se=b[J];me=[];for(let re=0,ee=se.length,ae=ee-1,Ce=re+1;re<ee;re++,ae++,Ce++)ae===ee&&(ae=0),Ce===ee&&(Ce=0),me[re]=W(se[re],se[ae],se[Ce]);pe.push(me),Ze=Ze.concat(me)}for(let J=0;J<m;J++){const I=J/m,se=d*Math.cos(I*Math.PI/2),re=p*Math.sin(I*Math.PI/2)+_;for(let ee=0,ae=H.length;ee<ae;ee++){const Ce=Z(H[ee],ue[ee],re);le(Ce.x,Ce.y,-se)}for(let ee=0,ae=b.length;ee<ae;ee++){const Ce=b[ee];me=pe[ee];for(let ge=0,C=Ce.length;ge<C;ge++){const S=Z(Ce[ge],me[ge],re);le(S.x,S.y,-se)}}}const nt=p+_;for(let J=0;J<V;J++){const I=f?Z(y[J],Ze[J],nt):y[J];M?(w.copy(A.normals[0]).multiplyScalar(I.x),T.copy(A.binormals[0]).multiplyScalar(I.y),P.copy(x[0]).add(w).add(T),le(P.x,P.y,P.z)):le(I.x,I.y,0)}for(let J=1;J<=u;J++)for(let I=0;I<V;I++){const se=f?Z(y[I],Ze[I],nt):y[I];M?(w.copy(A.normals[J]).multiplyScalar(se.x),T.copy(A.binormals[J]).multiplyScalar(se.y),P.copy(x[J]).add(w).add(T),le(P.x,P.y,P.z)):le(se.x,se.y,h/u*J)}for(let J=m-1;J>=0;J--){const I=J/m,se=d*Math.cos(I*Math.PI/2),re=p*Math.sin(I*Math.PI/2)+_;for(let ee=0,ae=H.length;ee<ae;ee++){const Ce=Z(H[ee],ue[ee],re);le(Ce.x,Ce.y,h+se)}for(let ee=0,ae=b.length;ee<ae;ee++){const Ce=b[ee];me=pe[ee];for(let ge=0,C=Ce.length;ge<C;ge++){const S=Z(Ce[ge],me[ge],re);M?le(S.x,S.y+x[u-1].y,x[u-1].x+se):le(S.x,S.y,h+se)}}}X(),te();function X(){const J=r.length/3;if(f){let I=0,se=V*I;for(let re=0;re<Q;re++){const ee=k[re];De(ee[2]+se,ee[1]+se,ee[0]+se)}I=u+m*2,se=V*I;for(let re=0;re<Q;re++){const ee=k[re];De(ee[0]+se,ee[1]+se,ee[2]+se)}}else{for(let I=0;I<Q;I++){const se=k[I];De(se[2],se[1],se[0])}for(let I=0;I<Q;I++){const se=k[I];De(se[0]+V*u,se[1]+V*u,se[2]+V*u)}}n.addGroup(J,r.length/3-J,0)}function te(){const J=r.length/3;let I=0;Me(H,I),I+=H.length;for(let se=0,re=b.length;se<re;se++){const ee=b[se];Me(ee,I),I+=ee.length}n.addGroup(J,r.length/3-J,1)}function Me(J,I){let se=J.length;for(;--se>=0;){const re=se;let ee=se-1;ee<0&&(ee=J.length-1);for(let ae=0,Ce=u+m*2;ae<Ce;ae++){const ge=V*ae,C=V*(ae+1),S=I+re+ge,O=I+ee+ge,q=I+ee+C,$=I+re+C;Le(S,O,q,$)}}}function le(J,I,se){c.push(J),c.push(I),c.push(se)}function De(J,I,se){ze(J),ze(I),ze(se);const re=r.length/3,ee=v.generateTopUV(n,r,re-3,re-2,re-1);qe(ee[0]),qe(ee[1]),qe(ee[2])}function Le(J,I,se,re){ze(J),ze(I),ze(re),ze(I),ze(se),ze(re);const ee=r.length/3,ae=v.generateSideWallUV(n,r,ee-6,ee-3,ee-2,ee-1);qe(ae[0]),qe(ae[1]),qe(ae[3]),qe(ae[1]),qe(ae[2]),qe(ae[3])}function ze(J){r.push(c[J*3+0]),r.push(c[J*3+1]),r.push(c[J*3+2])}function qe(J){s.push(J.x),s.push(J.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return AT(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];n.push(o)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new cl[r.type]().fromJSON(r)),new ql(n,e.options)}}const ET={generateTopUV:function(i,e,t,n,r){const s=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[r*3],u=e[r*3+1];return[new K(s,a),new K(o,c),new K(l,u)]},generateSideWallUV:function(i,e,t,n,r,s){const a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],u=e[n*3+1],h=e[n*3+2],f=e[r*3],d=e[r*3+1],p=e[r*3+2],_=e[s*3],m=e[s*3+1],g=e[s*3+2];return Math.abs(o-u)<Math.abs(a-l)?[new K(a,1-c),new K(l,1-h),new K(f,1-p),new K(_,1-g)]:[new K(o,1-c),new K(u,1-h),new K(d,1-p),new K(m,1-g)]}};function AT(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Yl extends er{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Yl(e.radius,e.detail)}}class to extends er{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new to(e.radius,e.detail)}}class Zl extends We{constructor(e=.5,t=1,n=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);const o=[],c=[],l=[],u=[];let h=e;const f=(t-e)/r,d=new R,p=new K;for(let _=0;_<=r;_++){for(let m=0;m<=n;m++){const g=s+m/n*a;d.x=h*Math.cos(g),d.y=h*Math.sin(g),c.push(d.x,d.y,d.z),l.push(0,0,1),p.x=(d.x/t+1)/2,p.y=(d.y/t+1)/2,u.push(p.x,p.y)}h+=f}for(let _=0;_<r;_++){const m=_*(n+1);for(let g=0;g<n;g++){const v=g+m,x=v,M=v+n+1,A=v+n+2,T=v+1;o.push(x,M,T),o.push(M,A,T)}}this.setIndex(o),this.setAttribute("position",new we(c,3)),this.setAttribute("normal",new we(l,3)),this.setAttribute("uv",new we(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zl(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Kl extends We{constructor(e=new Ir([new K(0,.5),new K(-.5,-.5),new K(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],r=[],s=[],a=[];let o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let u=0;u<e.length;u++)l(e[u]),this.addGroup(o,c,u),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new we(r,3)),this.setAttribute("normal",new we(s,3)),this.setAttribute("uv",new we(a,2));function l(u){const h=r.length/3,f=u.extractPoints(t);let d=f.shape;const p=f.holes;Zn.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,g=p.length;m<g;m++){const v=p[m];Zn.isClockWise(v)===!0&&(p[m]=v.reverse())}const _=Zn.triangulateShape(d,p);for(let m=0,g=p.length;m<g;m++){const v=p[m];d=d.concat(v)}for(let m=0,g=d.length;m<g;m++){const v=d[m];r.push(v.x,v.y,0),s.push(0,0,1),a.push(v.x,v.y)}for(let m=0,g=_.length;m<g;m++){const v=_[m],x=v[0]+h,M=v[1]+h,A=v[2]+h;n.push(x,M,A),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return TT(t,e)}static fromJSON(e,t){const n=[];for(let r=0,s=e.shapes.length;r<s;r++){const a=t[e.shapes[r]];n.push(a)}return new Kl(n,e.curveSegments)}}function TT(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const r=i[t];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e}class no extends We{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const u=[],h=new R,f=new R,d=[],p=[],_=[],m=[];for(let g=0;g<=n;g++){const v=[],x=g/n;let M=0;g===0&&a===0?M=.5/t:g===n&&c===Math.PI&&(M=-.5/t);for(let A=0;A<=t;A++){const T=A/t;h.x=-e*Math.cos(r+T*s)*Math.sin(a+x*o),h.y=e*Math.cos(a+x*o),h.z=e*Math.sin(r+T*s)*Math.sin(a+x*o),p.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(T+M,1-x),v.push(l++)}u.push(v)}for(let g=0;g<n;g++)for(let v=0;v<t;v++){const x=u[g][v+1],M=u[g][v],A=u[g+1][v],T=u[g+1][v+1];(g!==0||a>0)&&d.push(x,M,T),(g!==n-1||c<Math.PI)&&d.push(M,A,T)}this.setIndex(d),this.setAttribute("position",new we(p,3)),this.setAttribute("normal",new we(_,3)),this.setAttribute("uv",new we(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new no(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Jl extends er{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,r,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Jl(e.radius,e.detail)}}class $l extends We{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const a=[],o=[],c=[],l=[],u=new R,h=new R,f=new R;for(let d=0;d<=n;d++)for(let p=0;p<=r;p++){const _=p/r*s,m=d/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(_),h.y=(e+t*Math.cos(m))*Math.sin(_),h.z=t*Math.sin(m),o.push(h.x,h.y,h.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),f.subVectors(h,u).normalize(),c.push(f.x,f.y,f.z),l.push(p/r),l.push(d/n)}for(let d=1;d<=n;d++)for(let p=1;p<=r;p++){const _=(r+1)*d+p-1,m=(r+1)*(d-1)+p-1,g=(r+1)*(d-1)+p,v=(r+1)*d+p;a.push(_,m,v),a.push(m,g,v)}this.setIndex(a),this.setAttribute("position",new we(o,3)),this.setAttribute("normal",new we(c,3)),this.setAttribute("uv",new we(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $l(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class jl extends We{constructor(e=1,t=.4,n=64,r=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:r,p:s,q:a},n=Math.floor(n),r=Math.floor(r);const o=[],c=[],l=[],u=[],h=new R,f=new R,d=new R,p=new R,_=new R,m=new R,g=new R;for(let x=0;x<=n;++x){const M=x/n*s*Math.PI*2;v(M,s,a,e,d),v(M+.01,s,a,e,p),m.subVectors(p,d),g.addVectors(p,d),_.crossVectors(m,g),g.crossVectors(_,m),_.normalize(),g.normalize();for(let A=0;A<=r;++A){const T=A/r*Math.PI*2,w=-t*Math.cos(T),P=t*Math.sin(T);h.x=d.x+(w*g.x+P*_.x),h.y=d.y+(w*g.y+P*_.y),h.z=d.z+(w*g.z+P*_.z),c.push(h.x,h.y,h.z),f.subVectors(h,d).normalize(),l.push(f.x,f.y,f.z),u.push(x/n),u.push(A/r)}}for(let x=1;x<=n;x++)for(let M=1;M<=r;M++){const A=(r+1)*(x-1)+(M-1),T=(r+1)*x+(M-1),w=(r+1)*x+M,P=(r+1)*(x-1)+M;o.push(A,T,P),o.push(T,w,P)}this.setIndex(o),this.setAttribute("position",new we(c,3)),this.setAttribute("normal",new we(l,3)),this.setAttribute("uv",new we(u,2));function v(x,M,A,T,w){const P=Math.cos(x),U=Math.sin(x),y=A/M*x,b=Math.cos(y);w.x=T*(2+b)*.5*P,w.y=T*(2+b)*U*.5,w.z=T*Math.sin(y)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jl(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class Ql extends We{constructor(e=new Kf(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};const a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new R,c=new R,l=new K;let u=new R;const h=[],f=[],d=[],p=[];_(),this.setIndex(p),this.setAttribute("position",new we(h,3)),this.setAttribute("normal",new we(f,3)),this.setAttribute("uv",new we(d,2));function _(){for(let x=0;x<t;x++)m(x);m(s===!1?t:0),v(),g()}function m(x){u=e.getPointAt(x/t,u);const M=a.normals[x],A=a.binormals[x];for(let T=0;T<=r;T++){const w=T/r*Math.PI*2,P=Math.sin(w),U=-Math.cos(w);c.x=U*M.x+P*A.x,c.y=U*M.y+P*A.y,c.z=U*M.z+P*A.z,c.normalize(),f.push(c.x,c.y,c.z),o.x=u.x+n*c.x,o.y=u.y+n*c.y,o.z=u.z+n*c.z,h.push(o.x,o.y,o.z)}}function g(){for(let x=1;x<=t;x++)for(let M=1;M<=r;M++){const A=(r+1)*(x-1)+(M-1),T=(r+1)*x+(M-1),w=(r+1)*x+M,P=(r+1)*(x-1)+M;p.push(A,T,P),p.push(T,w,P)}}function v(){for(let x=0;x<=t;x++)for(let M=0;M<=r;M++)l.x=x/t,l.y=M/r,d.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Ql(new cl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class G0 extends We{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,r=new R,s=new R;if(e.index!==null){const a=e.attributes.position,o=e.index;let c=e.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,u=c.length;l<u;++l){const h=c[l],f=h.start,d=h.count;for(let p=f,_=f+d;p<_;p+=3)for(let m=0;m<3;m++){const g=o.getX(p+m),v=o.getX(p+(m+1)%3);r.fromBufferAttribute(a,g),s.fromBufferAttribute(a,v),Xp(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{const a=e.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let l=0;l<3;l++){const u=3*o+l,h=3*o+(l+1)%3;r.fromBufferAttribute(a,u),s.fromBufferAttribute(a,h),Xp(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new we(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Xp(i,e,t){const n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)===!0||t.has(r)===!0?!1:(t.add(n),t.add(r),!0)}var qp=Object.freeze({__proto__:null,BoxGeometry:Vr,CapsuleGeometry:Vl,CircleGeometry:Hl,ConeGeometry:Gl,CylinderGeometry:Bs,DodecahedronGeometry:Wl,EdgesGeometry:z0,ExtrudeGeometry:ql,IcosahedronGeometry:Yl,LatheGeometry:eo,OctahedronGeometry:to,PlaneGeometry:Hr,PolyhedronGeometry:er,RingGeometry:Zl,ShapeGeometry:Kl,SphereGeometry:no,TetrahedronGeometry:Jl,TorusGeometry:$l,TorusKnotGeometry:jl,TubeGeometry:Ql,WireframeGeometry:G0});class W0 extends Xt{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new de(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class X0 extends On{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class $f extends Xt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new de(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ji,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class q0 extends $f{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new K(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return vt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new de(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new de(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new de(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Y0 extends Xt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new de(16777215),this.specular=new de(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ji,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=Ka,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Z0 extends Xt{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new de(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ji,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class K0 extends Xt{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ji,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class J0 extends Xt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ji,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=Ka,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class $0 extends Xt{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new de(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ji,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class j0 extends tn{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function Sr(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Q0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ex(i){function e(r,s){return i[r]-i[s]}const t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function Hh(i,e,t){const n=i.length,r=new i.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let c=0;c!==e;++c)r[a++]=i[o+c]}return r}function jf(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=i[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=i[r++];while(s!==void 0)}function CT(i,e,t,n,r=30){const s=i.clone();s.name=e;const a=[];for(let c=0;c<s.tracks.length;++c){const l=s.tracks[c],u=l.getValueSize(),h=[],f=[];for(let d=0;d<l.times.length;++d){const p=l.times[d]*r;if(!(p<t||p>=n)){h.push(l.times[d]);for(let _=0;_<u;++_)f.push(l.values[d*u+_])}}h.length!==0&&(l.times=Sr(h,l.times.constructor),l.values=Sr(f,l.values.constructor),a.push(l))}s.tracks=a;let o=1/0;for(let c=0;c<s.tracks.length;++c)o>s.tracks[c].times[0]&&(o=s.tracks[c].times[0]);for(let c=0;c<s.tracks.length;++c)s.tracks[c].shift(-1*o);return s.resetDuration(),s}function RT(i,e=0,t=i,n=30){n<=0&&(n=30);const r=t.tracks.length,s=e/n;for(let a=0;a<r;++a){const o=t.tracks[a],c=o.ValueTypeName;if(c==="bool"||c==="string")continue;const l=i.tracks.find(function(g){return g.name===o.name&&g.ValueTypeName===c});if(l===void 0)continue;let u=0;const h=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=h/3);let f=0;const d=l.getValueSize();l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(f=d/3);const p=o.times.length-1;let _;if(s<=o.times[0]){const g=u,v=h-u;_=o.values.slice(g,v)}else if(s>=o.times[p]){const g=p*h+u,v=g+h-u;_=o.values.slice(g,v)}else{const g=o.createInterpolant(),v=u,x=h-u;g.evaluate(s),_=g.resultBuffer.slice(v,x)}c==="quaternion"&&new ln().fromArray(_).normalize().conjugate().toArray(_);const m=l.times.length;for(let g=0;g<m;++g){const v=g*d+f;if(c==="quaternion")ln.multiplyQuaternionsFlat(l.values,v,_,0,l.values,v);else{const x=d-f*2;for(let M=0;M<x;++M)l.values[v+M]-=_[M]}}}return i.blendMode=If,i}const PT={convertArray:Sr,isTypedArray:Q0,getKeyframeOrder:ex,sortedArray:Hh,flattenJSON:jf,subclip:CT,makeClipAdditive:RT};class io{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],s=t[n-1];e:{t:{let a;n:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=t[++n],e<r)break t}a=t.length;break n}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=t[--n-1],e>=s)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class tx extends io{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:yr,endingEnd:yr}}intervalChanged_(e,t,n){const r=this.parameterPositions;let s=e-2,a=e+1,o=r[s],c=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Mr:s=e,o=2*t-n;break;case Ea:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Mr:a=e,c=2*n-t;break;case Ea:a=1,c=n+r[1]-r[0];break;default:a=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-t)/(r-t),_=p*p,m=_*p,g=-f*m+2*f*_-f*p,v=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*p+1,x=(-1-d)*m+(1.5+d)*_+.5*p,M=d*m-d*_;for(let A=0;A!==o;++A)s[A]=g*a[u+A]+v*a[l+A]+x*a[c+A]+M*a[h+A];return s}}class Qf extends io{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(n-t)/(r-t),h=1-u;for(let f=0;f!==o;++f)s[f]=a[l+f]*h+a[c+f]*u;return s}}class nx extends io{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class kn{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Sr(t,this.TimeBufferType),this.values=Sr(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Sr(e.times,Array),values:Sr(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new nx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Qf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new tx(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case wa:t=this.InterpolantFactoryMethodDiscrete;break;case sl:t=this.InterpolantFactoryMethodLinear;break;case fc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return wa;case this.InterpolantFactoryMethodLinear:return sl;case this.InterpolantFactoryMethodSmooth:return fc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(r!==void 0&&Q0(r))for(let o=0,c=r.length;o!==c;++o){const l=r[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===fc,s=e.length-1;let a=1;for(let o=1;o<s;++o){let c=!1;const l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(r)c=!0;else{const h=o*n,f=h-n,d=h+n;for(let p=0;p!==n;++p){const _=t[h+p];if(_!==t[f+p]||_!==t[d+p]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const h=o*n,f=a*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}kn.prototype.TimeBufferType=Float32Array;kn.prototype.ValueBufferType=Float32Array;kn.prototype.DefaultInterpolation=sl;class Gr extends kn{constructor(e,t,n){super(e,t,n)}}Gr.prototype.ValueTypeName="bool";Gr.prototype.ValueBufferType=Array;Gr.prototype.DefaultInterpolation=wa;Gr.prototype.InterpolantFactoryMethodLinear=void 0;Gr.prototype.InterpolantFactoryMethodSmooth=void 0;class ed extends kn{}ed.prototype.ValueTypeName="color";class Oa extends kn{}Oa.prototype.ValueTypeName="number";class ix extends io{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(r-t);let l=e*o;for(let u=l+o;l!==u;l+=4)ln.slerpFlat(s,0,a,l-o,a,l,c);return s}}class ro extends kn{InterpolantFactoryMethodLinear(e){return new ix(this.times,this.values,this.getValueSize(),e)}}ro.prototype.ValueTypeName="quaternion";ro.prototype.InterpolantFactoryMethodSmooth=void 0;class Wr extends kn{constructor(e,t,n){super(e,t,n)}}Wr.prototype.ValueTypeName="string";Wr.prototype.ValueBufferType=Array;Wr.prototype.DefaultInterpolation=wa;Wr.prototype.InterpolantFactoryMethodLinear=void 0;Wr.prototype.InterpolantFactoryMethodSmooth=void 0;class Fa extends kn{}Fa.prototype.ValueTypeName="vector";class Ba{constructor(e="",t=-1,n=[],r=Cl){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=xn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(LT(n[a]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(kn.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const s=t.length,a=[];for(let o=0;o<s;o++){let c=[],l=[];c.push((o+s-1)%s,o,(o+1)%s),l.push(0,1,0);const u=ex(c);c=Hh(c,1,u),l=Hh(l,1,u),!r&&c[0]===0&&(c.push(s),l.push(l[0])),a.push(new Oa(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],u=l.name.match(s);if(u&&u.length>1){const h=u[1];let f=r[h];f||(r[h]=f=[]),f.push(l)}}const a=[];for(const o in r)a.push(this.CreateFromMorphTargetSequence(o,r[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,p,_){if(d.length!==0){const m=[],g=[];jf(d,m,g,p),m.length!==0&&_.push(new h(f,m,g))}},r=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const f=l[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let p;for(p=0;p<f.length;p++)if(f[p].morphTargets)for(let _=0;_<f[p].morphTargets.length;_++)d[f[p].morphTargets[_]]=-1;for(const _ in d){const m=[],g=[];for(let v=0;v!==f[p].morphTargets.length;++v){const x=f[p];m.push(x.time),g.push(x.morphTarget===_?1:0)}r.push(new Oa(".morphTargetInfluence["+_+"]",m,g))}c=d.length*a}else{const d=".bones["+t[h].name+"]";n(Fa,d+".position",f,"pos",r),n(ro,d+".quaternion",f,"rot",r),n(Fa,d+".scale",f,"scl",r)}}return r.length===0?null:new this(s,c,r,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function IT(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Oa;case"vector":case"vector2":case"vector3":case"vector4":return Fa;case"color":return ed;case"quaternion":return ro;case"bool":case"boolean":return Gr;case"string":return Wr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function LT(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=IT(i.type);if(i.times===void 0){const t=[],n=[];jf(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const ui={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class td{constructor(e,t,n){const r=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){const d=l[h],p=l[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return p}return null}}}const rx=new td;class hn{constructor(e){this.manager=e!==void 0?e:rx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}hn.DEFAULT_MATERIAL_NAME="__DEFAULT";const ai={};class DT extends Error{constructor(e,t){super(e),this.response=t}}class xi extends hn{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=ui.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(ai[e]!==void 0){ai[e].push({onLoad:t,onProgress:n,onError:r});return}ai[e]=[],ai[e].push({onLoad:t,onProgress:n,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=ai[e],h=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,p=d!==0;let _=0;const m=new ReadableStream({start(g){v();function v(){h.read().then(({done:x,value:M})=>{if(x)g.close();else{_+=M.byteLength;const A=new ProgressEvent("progress",{lengthComputable:p,loaded:_,total:d});for(let T=0,w=u.length;T<w;T++){const P=u[T];P.onProgress&&P.onProgress(A)}g.enqueue(M),v()}},x=>{g.error(x)})}}});return new Response(m)}else throw new DT(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(p=>d.decode(p))}}}).then(l=>{ui.add(e,l);const u=ai[e];delete ai[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(l)}}).catch(l=>{const u=ai[e];if(u===void 0)throw this.manager.itemError(e),l;delete ai[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class NT extends hn{constructor(e){super(e)}load(e,t,n,r){const s=this,a=new xi(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(s.parse(JSON.parse(o)))}catch(c){r?r(c):console.error(c),s.manager.itemError(e)}},n,r)}parse(e){const t=[];for(let n=0;n<e.length;n++){const r=Ba.parse(e[n]);t.push(r)}return t}}class UT extends hn{constructor(e){super(e)}load(e,t,n,r){const s=this,a=[],o=new zl,c=new xi(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(s.withCredentials);let l=0;function u(h){c.load(e[h],function(f){const d=s.parse(f,!0);a[h]={width:d.width,height:d.height,format:d.format,mipmaps:d.mipmaps},l+=1,l===6&&(d.mipmapCount===1&&(o.minFilter=Tt),o.image=a,o.format=d.format,o.needsUpdate=!0,t&&t(o))},n,r)}if(Array.isArray(e))for(let h=0,f=e.length;h<f;++h)u(h);else c.load(e,function(h){const f=s.parse(h,!0);if(f.isCubemap){const d=f.mipmaps.length/f.mipmapCount;for(let p=0;p<d;p++){a[p]={mipmaps:[]};for(let _=0;_<f.mipmapCount;_++)a[p].mipmaps.push(f.mipmaps[p*f.mipmapCount+_]),a[p].format=f.format,a[p].width=f.width,a[p].height=f.height}o.image=a}else o.image.width=f.width,o.image.height=f.height,o.mipmaps=f.mipmaps;f.mipmapCount===1&&(o.minFilter=Tt),o.format=f.format,o.needsUpdate=!0,t&&t(o)},n,r);return o}}class za extends hn{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=ui.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=Ia("img");function c(){u(),ui.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class OT extends hn{constructor(e){super(e)}load(e,t,n,r){const s=new ja;s.colorSpace=En;const a=new za(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function c(l){a.load(e[l],function(u){s.images[l]=u,o++,o===6&&(s.needsUpdate=!0,t&&t(s))},void 0,r)}for(let l=0;l<e.length;++l)c(l);return s}}class FT extends hn{constructor(e){super(e)}load(e,t,n,r){const s=this,a=new Yn,o=new xi(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(e,function(c){let l;try{l=s.parse(c)}catch(u){if(r!==void 0)r(u);else{console.error(u);return}}l.image!==void 0?a.image=l.image:l.data!==void 0&&(a.image.width=l.width,a.image.height=l.height,a.image.data=l.data),a.wrapS=l.wrapS!==void 0?l.wrapS:on,a.wrapT=l.wrapT!==void 0?l.wrapT:on,a.magFilter=l.magFilter!==void 0?l.magFilter:Tt,a.minFilter=l.minFilter!==void 0?l.minFilter:Tt,a.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0&&(a.colorSpace=l.colorSpace),l.flipY!==void 0&&(a.flipY=l.flipY),l.format!==void 0&&(a.format=l.format),l.type!==void 0&&(a.type=l.type),l.mipmaps!==void 0&&(a.mipmaps=l.mipmaps,a.minFilter=Wn),l.mipmapCount===1&&(a.minFilter=Tt),l.generateMipmaps!==void 0&&(a.generateMipmaps=l.generateMipmaps),a.needsUpdate=!0,t&&t(a,l)},n,r),a}}class sx extends hn{constructor(e){super(e)}load(e,t,n,r){const s=new Mt,a=new za(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class tr extends tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new de(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class ax extends tr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(tt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new de(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Qu=new Pe,Yp=new R,Zp=new R;class nd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new K(512,512),this.map=null,this.mapPass=null,this.matrix=new Pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qa,this._frameExtents=new K(1,1),this._viewportCount=1,this._viewports=[new et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Yp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Yp),Zp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Zp),t.updateMatrixWorld(),Qu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qu),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Qu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class BT extends nd{constructor(){super(new Nt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Cs*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class ox extends tr{constructor(e,t,n=0,r=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(tt.DEFAULT_UP),this.updateMatrix(),this.target=new tt,this.distance=n,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new BT}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Kp=new Pe,na=new R,eh=new R;class zT extends nd{constructor(){super(new Nt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new K(4,2),this._viewportCount=6,this._viewports=[new et(2,1,1,1),new et(0,1,1,1),new et(3,1,1,1),new et(1,1,1,1),new et(3,0,1,1),new et(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),na.setFromMatrixPosition(e.matrixWorld),n.position.copy(na),eh.copy(n.position),eh.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(eh),n.updateMatrixWorld(),r.makeTranslation(-na.x,-na.y,-na.z),Kp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kp)}}class cx extends tr{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new zT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class kT extends nd{constructor(){super(new Dl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class lx extends tr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tt.DEFAULT_UP),this.updateMatrix(),this.target=new tt,this.shadow=new kT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ux extends tr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class hx extends tr{constructor(e,t,n=10,r=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=r}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class fx{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new R)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,r=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*r),t.addScaledVector(a[2],.488603*s),t.addScaledVector(a[3],.488603*n),t.addScaledVector(a[4],1.092548*(n*r)),t.addScaledVector(a[5],1.092548*(r*s)),t.addScaledVector(a[6],.315392*(3*s*s-1)),t.addScaledVector(a[7],1.092548*(n*s)),t.addScaledVector(a[8],.546274*(n*n-r*r)),t}getIrradianceAt(e,t){const n=e.x,r=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*r),t.addScaledVector(a[2],2*.511664*s),t.addScaledVector(a[3],2*.511664*n),t.addScaledVector(a[4],2*.429043*n*r),t.addScaledVector(a[5],2*.429043*r*s),t.addScaledVector(a[6],.743125*s*s-.247708),t.addScaledVector(a[7],2*.429043*n*s),t.addScaledVector(a[8],.429043*(n*n-r*r)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let r=0;r<9;r++)n[r].fromArray(e,t+r*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let r=0;r<9;r++)n[r].toArray(e,t+r*3);return e}static getBasisAt(e,t){const n=e.x,r=e.y,s=e.z;t[0]=.282095,t[1]=.488603*r,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*r,t[5]=1.092548*r*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-r*r)}}class dx extends tr{constructor(e=new fx,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class eu extends hn{constructor(e){super(e),this.textures={}}load(e,t,n,r){const s=this,a=new xi(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(o){try{t(s.parse(JSON.parse(o)))}catch(c){r?r(c):console.error(c),s.manager.itemError(e)}},n,r)}parse(e){const t=this.textures;function n(s){return t[s]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",s),t[s]}const r=this.createMaterialFromType(e.type);if(e.uuid!==void 0&&(r.uuid=e.uuid),e.name!==void 0&&(r.name=e.name),e.color!==void 0&&r.color!==void 0&&r.color.setHex(e.color),e.roughness!==void 0&&(r.roughness=e.roughness),e.metalness!==void 0&&(r.metalness=e.metalness),e.sheen!==void 0&&(r.sheen=e.sheen),e.sheenColor!==void 0&&(r.sheenColor=new de().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(r.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&r.emissive!==void 0&&r.emissive.setHex(e.emissive),e.specular!==void 0&&r.specular!==void 0&&r.specular.setHex(e.specular),e.specularIntensity!==void 0&&(r.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&r.specularColor!==void 0&&r.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(r.shininess=e.shininess),e.clearcoat!==void 0&&(r.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(r.dispersion=e.dispersion),e.iridescence!==void 0&&(r.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(r.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(r.transmission=e.transmission),e.thickness!==void 0&&(r.thickness=e.thickness),e.attenuationDistance!==void 0&&(r.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&r.attenuationColor!==void 0&&r.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(r.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(r.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(r.fog=e.fog),e.flatShading!==void 0&&(r.flatShading=e.flatShading),e.blending!==void 0&&(r.blending=e.blending),e.combine!==void 0&&(r.combine=e.combine),e.side!==void 0&&(r.side=e.side),e.shadowSide!==void 0&&(r.shadowSide=e.shadowSide),e.opacity!==void 0&&(r.opacity=e.opacity),e.transparent!==void 0&&(r.transparent=e.transparent),e.alphaTest!==void 0&&(r.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(r.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(r.depthFunc=e.depthFunc),e.depthTest!==void 0&&(r.depthTest=e.depthTest),e.depthWrite!==void 0&&(r.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(r.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(r.blendSrc=e.blendSrc),e.blendDst!==void 0&&(r.blendDst=e.blendDst),e.blendEquation!==void 0&&(r.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(r.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(r.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(r.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&r.blendColor!==void 0&&r.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(r.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(r.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(r.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(r.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(r.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(r.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(r.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(r.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(r.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(r.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(r.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(r.rotation=e.rotation),e.linewidth!==void 0&&(r.linewidth=e.linewidth),e.dashSize!==void 0&&(r.dashSize=e.dashSize),e.gapSize!==void 0&&(r.gapSize=e.gapSize),e.scale!==void 0&&(r.scale=e.scale),e.polygonOffset!==void 0&&(r.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(r.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(r.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(r.dithering=e.dithering),e.alphaToCoverage!==void 0&&(r.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(r.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(r.forceSinglePass=e.forceSinglePass),e.visible!==void 0&&(r.visible=e.visible),e.toneMapped!==void 0&&(r.toneMapped=e.toneMapped),e.userData!==void 0&&(r.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?r.vertexColors=e.vertexColors>0:r.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const s in e.uniforms){const a=e.uniforms[s];switch(r.uniforms[s]={},a.type){case"t":r.uniforms[s].value=n(a.value);break;case"c":r.uniforms[s].value=new de().setHex(a.value);break;case"v2":r.uniforms[s].value=new K().fromArray(a.value);break;case"v3":r.uniforms[s].value=new R().fromArray(a.value);break;case"v4":r.uniforms[s].value=new et().fromArray(a.value);break;case"m3":r.uniforms[s].value=new He().fromArray(a.value);break;case"m4":r.uniforms[s].value=new Pe().fromArray(a.value);break;default:r.uniforms[s].value=a.value}}if(e.defines!==void 0&&(r.defines=e.defines),e.vertexShader!==void 0&&(r.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(r.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(r.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)r.extensions[s]=e.extensions[s];if(e.lights!==void 0&&(r.lights=e.lights),e.clipping!==void 0&&(r.clipping=e.clipping),e.size!==void 0&&(r.size=e.size),e.sizeAttenuation!==void 0&&(r.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(r.map=n(e.map)),e.matcap!==void 0&&(r.matcap=n(e.matcap)),e.alphaMap!==void 0&&(r.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(r.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(r.bumpScale=e.bumpScale),e.normalMap!==void 0&&(r.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(r.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),r.normalScale=new K().fromArray(s)}return e.displacementMap!==void 0&&(r.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(r.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(r.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(r.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(r.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(r.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(r.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(r.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(r.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(r.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(r.envMap=n(e.envMap)),e.envMapRotation!==void 0&&r.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(r.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(r.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(r.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(r.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(r.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(r.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(r.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(r.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(r.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(r.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(r.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(r.clearcoatNormalScale=new K().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(r.iridescenceMap=n(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(r.iridescenceThicknessMap=n(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(r.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(r.thicknessMap=n(e.thicknessMap)),e.anisotropyMap!==void 0&&(r.anisotropyMap=n(e.anisotropyMap)),e.sheenColorMap!==void 0&&(r.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(r.sheenRoughnessMap=n(e.sheenRoughnessMap)),r}setTextures(e){return this.textures=e,this}createMaterialFromType(e){return eu.createMaterialFromType(e)}static createMaterialFromType(e){const t={ShadowMaterial:W0,SpriteMaterial:Hf,RawShaderMaterial:X0,ShaderMaterial:On,PointsMaterial:Wf,MeshPhysicalMaterial:q0,MeshStandardMaterial:$f,MeshPhongMaterial:Y0,MeshToonMaterial:Z0,MeshNormalMaterial:K0,MeshLambertMaterial:J0,MeshDepthMaterial:zf,MeshDistanceMaterial:kf,MeshBasicMaterial:Qi,MeshMatcapMaterial:$0,LineDashedMaterial:j0,LineBasicMaterial:tn,Material:Xt};return new t[e]}}class Gh{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class px extends We{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class mx extends hn{constructor(e){super(e)}load(e,t,n,r){const s=this,a=new xi(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(o){try{t(s.parse(JSON.parse(o)))}catch(c){r?r(c):console.error(c),s.manager.itemError(e)}},n,r)}parse(e){const t={},n={};function r(d,p){if(t[p]!==void 0)return t[p];const m=d.interleavedBuffers[p],g=s(d,m.buffer),v=gs(m.type,g),x=new Fl(v,m.stride);return x.uuid=m.uuid,t[p]=x,x}function s(d,p){if(n[p]!==void 0)return n[p];const m=d.arrayBuffers[p],g=new Uint32Array(m).buffer;return n[p]=g,g}const a=e.isInstancedBufferGeometry?new px:new We,o=e.data.index;if(o!==void 0){const d=gs(o.type,o.array);a.setIndex(new ot(d,1))}const c=e.data.attributes;for(const d in c){const p=c[d];let _;if(p.isInterleavedBufferAttribute){const m=r(e.data,p.data);_=new Or(m,p.itemSize,p.offset,p.normalized)}else{const m=gs(p.type,p.array),g=p.isInstancedBufferAttribute?Ps:ot;_=new g(m,p.itemSize,p.normalized)}p.name!==void 0&&(_.name=p.name),p.usage!==void 0&&_.setUsage(p.usage),a.setAttribute(d,_)}const l=e.data.morphAttributes;if(l)for(const d in l){const p=l[d],_=[];for(let m=0,g=p.length;m<g;m++){const v=p[m];let x;if(v.isInterleavedBufferAttribute){const M=r(e.data,v.data);x=new Or(M,v.itemSize,v.offset,v.normalized)}else{const M=gs(v.type,v.array);x=new ot(M,v.itemSize,v.normalized)}v.name!==void 0&&(x.name=v.name),_.push(x)}a.morphAttributes[d]=_}e.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);const h=e.data.groups||e.data.drawcalls||e.data.offsets;if(h!==void 0)for(let d=0,p=h.length;d!==p;++d){const _=h[d];a.addGroup(_.start,_.count,_.materialIndex)}const f=e.data.boundingSphere;if(f!==void 0){const d=new R;f.center!==void 0&&d.fromArray(f.center),a.boundingSphere=new Wt(d,f.radius)}return e.name&&(a.name=e.name),e.userData&&(a.userData=e.userData),a}}class VT extends hn{constructor(e){super(e)}load(e,t,n,r){const s=this,a=this.path===""?Gh.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||a;const o=new xi(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(c){let l=null;try{l=JSON.parse(c)}catch(h){r!==void 0&&r(h),console.error("THREE:ObjectLoader: Can't parse "+e+".",h.message);return}const u=l.metadata;if(u===void 0||u.type===void 0||u.type.toLowerCase()==="geometry"){r!==void 0&&r(new Error("THREE.ObjectLoader: Can't load "+e)),console.error("THREE.ObjectLoader: Can't load "+e);return}s.parse(l,t)},n,r)}async loadAsync(e,t){const n=this,r=this.path===""?Gh.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||r;const s=new xi(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials);const a=await s.loadAsync(e,t),o=JSON.parse(a),c=o.metadata;if(c===void 0||c.type===void 0||c.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(o)}parse(e,t){const n=this.parseAnimations(e.animations),r=this.parseShapes(e.shapes),s=this.parseGeometries(e.geometries,r),a=this.parseImages(e.images,function(){t!==void 0&&t(l)}),o=this.parseTextures(e.textures,a),c=this.parseMaterials(e.materials,o),l=this.parseObject(e.object,s,c,o,n),u=this.parseSkeletons(e.skeletons,l);if(this.bindSkeletons(l,u),this.bindLightTargets(l),t!==void 0){let h=!1;for(const f in a)if(a[f].data instanceof HTMLImageElement){h=!0;break}h===!1&&t(l)}return l}async parseAsync(e){const t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),r=this.parseGeometries(e.geometries,n),s=await this.parseImagesAsync(e.images),a=this.parseTextures(e.textures,s),o=this.parseMaterials(e.materials,a),c=this.parseObject(e.object,r,o,a,t),l=this.parseSkeletons(e.skeletons,c);return this.bindSkeletons(c,l),this.bindLightTargets(c),c}parseShapes(e){const t={};if(e!==void 0)for(let n=0,r=e.length;n<r;n++){const s=new Ir().fromJSON(e[n]);t[s.uuid]=s}return t}parseSkeletons(e,t){const n={},r={};if(t.traverse(function(s){s.isBone&&(r[s.uuid]=s)}),e!==void 0)for(let s=0,a=e.length;s<a;s++){const o=new Bl().fromJSON(e[s],r);n[o.uuid]=o}return n}parseGeometries(e,t){const n={};if(e!==void 0){const r=new mx;for(let s=0,a=e.length;s<a;s++){let o;const c=e[s];switch(c.type){case"BufferGeometry":case"InstancedBufferGeometry":o=r.parse(c);break;default:c.type in qp?o=qp[c.type].fromJSON(c,t):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${c.type}"`)}o.uuid=c.uuid,c.name!==void 0&&(o.name=c.name),c.userData!==void 0&&(o.userData=c.userData),n[c.uuid]=o}}return n}parseMaterials(e,t){const n={},r={};if(e!==void 0){const s=new eu;s.setTextures(t);for(let a=0,o=e.length;a<o;a++){const c=e[a];n[c.uuid]===void 0&&(n[c.uuid]=s.parse(c)),r[c.uuid]=n[c.uuid]}}return r}parseAnimations(e){const t={};if(e!==void 0)for(let n=0;n<e.length;n++){const r=e[n],s=Ba.parse(r);t[s.uuid]=s}return t}parseImages(e,t){const n=this,r={};let s;function a(c){return n.manager.itemStart(c),s.load(c,function(){n.manager.itemEnd(c)},void 0,function(){n.manager.itemError(c),n.manager.itemEnd(c)})}function o(c){if(typeof c=="string"){const l=c,u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(l)?l:n.resourcePath+l;return a(u)}else return c.data?{data:gs(c.type,c.data),width:c.width,height:c.height}:null}if(e!==void 0&&e.length>0){const c=new td(t);s=new za(c),s.setCrossOrigin(this.crossOrigin);for(let l=0,u=e.length;l<u;l++){const h=e[l],f=h.url;if(Array.isArray(f)){const d=[];for(let p=0,_=f.length;p<_;p++){const m=f[p],g=o(m);g!==null&&(g instanceof HTMLImageElement?d.push(g):d.push(new Yn(g.data,g.width,g.height)))}r[h.uuid]=new br(d)}else{const d=o(h.url);r[h.uuid]=new br(d)}}}return r}async parseImagesAsync(e){const t=this,n={};let r;async function s(a){if(typeof a=="string"){const o=a,c=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:t.resourcePath+o;return await r.loadAsync(c)}else return a.data?{data:gs(a.type,a.data),width:a.width,height:a.height}:null}if(e!==void 0&&e.length>0){r=new za(this.manager),r.setCrossOrigin(this.crossOrigin);for(let a=0,o=e.length;a<o;a++){const c=e[a],l=c.url;if(Array.isArray(l)){const u=[];for(let h=0,f=l.length;h<f;h++){const d=l[h],p=await s(d);p!==null&&(p instanceof HTMLImageElement?u.push(p):u.push(new Yn(p.data,p.width,p.height)))}n[c.uuid]=new br(u)}else{const u=await s(c.url);n[c.uuid]=new br(u)}}}return n}parseTextures(e,t){function n(s,a){return typeof s=="number"?s:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",s),a[s])}const r={};if(e!==void 0)for(let s=0,a=e.length;s<a;s++){const o=e[s];o.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',o.uuid),t[o.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",o.image);const c=t[o.image],l=c.data;let u;Array.isArray(l)?(u=new ja,l.length===6&&(u.needsUpdate=!0)):(l&&l.data?u=new Yn:u=new Mt,l&&(u.needsUpdate=!0)),u.source=c,u.uuid=o.uuid,o.name!==void 0&&(u.name=o.name),o.mapping!==void 0&&(u.mapping=n(o.mapping,HT)),o.channel!==void 0&&(u.channel=o.channel),o.offset!==void 0&&u.offset.fromArray(o.offset),o.repeat!==void 0&&u.repeat.fromArray(o.repeat),o.center!==void 0&&u.center.fromArray(o.center),o.rotation!==void 0&&(u.rotation=o.rotation),o.wrap!==void 0&&(u.wrapS=n(o.wrap[0],Jp),u.wrapT=n(o.wrap[1],Jp)),o.format!==void 0&&(u.format=o.format),o.internalFormat!==void 0&&(u.internalFormat=o.internalFormat),o.type!==void 0&&(u.type=o.type),o.colorSpace!==void 0&&(u.colorSpace=o.colorSpace),o.minFilter!==void 0&&(u.minFilter=n(o.minFilter,$p)),o.magFilter!==void 0&&(u.magFilter=n(o.magFilter,$p)),o.anisotropy!==void 0&&(u.anisotropy=o.anisotropy),o.flipY!==void 0&&(u.flipY=o.flipY),o.generateMipmaps!==void 0&&(u.generateMipmaps=o.generateMipmaps),o.premultiplyAlpha!==void 0&&(u.premultiplyAlpha=o.premultiplyAlpha),o.unpackAlignment!==void 0&&(u.unpackAlignment=o.unpackAlignment),o.compareFunction!==void 0&&(u.compareFunction=o.compareFunction),o.userData!==void 0&&(u.userData=o.userData),r[o.uuid]=u}return r}parseObject(e,t,n,r,s){let a;function o(f){return t[f]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",f),t[f]}function c(f){if(f!==void 0){if(Array.isArray(f)){const d=[];for(let p=0,_=f.length;p<_;p++){const m=f[p];n[m]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",m),d.push(n[m])}return d}return n[f]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",f),n[f]}}function l(f){return r[f]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",f),r[f]}let u,h;switch(e.type){case"Scene":a=new Vf,e.background!==void 0&&(Number.isInteger(e.background)?a.background=new de(e.background):a.background=l(e.background)),e.environment!==void 0&&(a.environment=l(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?a.fog=new Ol(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(a.fog=new Ul(e.fog.color,e.fog.density)),e.fog.name!==""&&(a.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(a.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(a.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&a.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(a.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&a.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":a=new Nt(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(a.focus=e.focus),e.zoom!==void 0&&(a.zoom=e.zoom),e.filmGauge!==void 0&&(a.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(a.filmOffset=e.filmOffset),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"OrthographicCamera":a=new Dl(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(a.zoom=e.zoom),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"AmbientLight":a=new ux(e.color,e.intensity);break;case"DirectionalLight":a=new lx(e.color,e.intensity),a.target=e.target||"";break;case"PointLight":a=new cx(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":a=new hx(e.color,e.intensity,e.width,e.height);break;case"SpotLight":a=new ox(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),a.target=e.target||"";break;case"HemisphereLight":a=new ax(e.color,e.groundColor,e.intensity);break;case"LightProbe":a=new dx().fromJSON(e);break;case"SkinnedMesh":u=o(e.geometry),h=c(e.material),a=new R0(u,h),e.bindMode!==void 0&&(a.bindMode=e.bindMode),e.bindMatrix!==void 0&&a.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(a.skeleton=e.skeleton);break;case"Mesh":u=o(e.geometry),h=c(e.material),a=new wt(u,h);break;case"InstancedMesh":u=o(e.geometry),h=c(e.material);const f=e.count,d=e.instanceMatrix,p=e.instanceColor;a=new P0(u,h,f),a.instanceMatrix=new Ps(new Float32Array(d.array),16),p!==void 0&&(a.instanceColor=new Ps(new Float32Array(p.array),p.itemSize));break;case"BatchedMesh":u=o(e.geometry),h=c(e.material),a=new I0(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,h),a.geometry=u,a.perObjectFrustumCulled=e.perObjectFrustumCulled,a.sortObjects=e.sortObjects,a._drawRanges=e.drawRanges,a._reservedRanges=e.reservedRanges,a._visibility=e.visibility,a._active=e.active,a._bounds=e.bounds.map(_=>{const m=new en;m.min.fromArray(_.boxMin),m.max.fromArray(_.boxMax);const g=new Wt;return g.radius=_.sphereRadius,g.center.fromArray(_.sphereCenter),{boxInitialized:_.boxInitialized,box:m,sphereInitialized:_.sphereInitialized,sphere:g}}),a._maxInstanceCount=e.maxInstanceCount,a._maxVertexCount=e.maxVertexCount,a._maxIndexCount=e.maxIndexCount,a._geometryInitialized=e.geometryInitialized,a._geometryCount=e.geometryCount,a._matricesTexture=l(e.matricesTexture.uuid),e.colorsTexture!==void 0&&(a._colorsTexture=l(e.colorsTexture.uuid));break;case"LOD":a=new C0;break;case"Line":a=new Ki(o(e.geometry),c(e.material));break;case"LineLoop":a=new L0(o(e.geometry),c(e.material));break;case"LineSegments":a=new Qn(o(e.geometry),c(e.material));break;case"PointCloud":case"Points":a=new D0(o(e.geometry),c(e.material));break;case"Sprite":a=new T0(c(e.material));break;case"Group":a=new xs;break;case"Bone":a=new Gf;break;default:a=new tt}if(a.uuid=e.uuid,e.name!==void 0&&(a.name=e.name),e.matrix!==void 0?(a.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(a.matrixAutoUpdate=e.matrixAutoUpdate),a.matrixAutoUpdate&&a.matrix.decompose(a.position,a.quaternion,a.scale)):(e.position!==void 0&&a.position.fromArray(e.position),e.rotation!==void 0&&a.rotation.fromArray(e.rotation),e.quaternion!==void 0&&a.quaternion.fromArray(e.quaternion),e.scale!==void 0&&a.scale.fromArray(e.scale)),e.up!==void 0&&a.up.fromArray(e.up),e.castShadow!==void 0&&(a.castShadow=e.castShadow),e.receiveShadow!==void 0&&(a.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(a.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(a.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(a.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(a.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&a.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(a.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(a.visible=e.visible),e.frustumCulled!==void 0&&(a.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(a.renderOrder=e.renderOrder),e.userData!==void 0&&(a.userData=e.userData),e.layers!==void 0&&(a.layers.mask=e.layers),e.children!==void 0){const f=e.children;for(let d=0;d<f.length;d++)a.add(this.parseObject(f[d],t,n,r,s))}if(e.animations!==void 0){const f=e.animations;for(let d=0;d<f.length;d++){const p=f[d];a.animations.push(s[p])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(a.autoUpdate=e.autoUpdate);const f=e.levels;for(let d=0;d<f.length;d++){const p=f[d],_=a.getObjectByProperty("uuid",p.object);_!==void 0&&a.addLevel(_,p.distance,p.hysteresis)}}return a}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const r=t[n.skeleton];r===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(r,n.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){const n=t.target,r=e.getObjectByProperty("uuid",n);r!==void 0?t.target=r:t.target=new tt}})}}const HT={UVMapping:Ml,CubeReflectionMapping:gi,CubeRefractionMapping:Zi,EquirectangularReflectionMapping:ya,EquirectangularRefractionMapping:Ma,CubeUVReflectionMapping:Ns},Jp={RepeatWrapping:ba,ClampToEdgeWrapping:on,MirroredRepeatWrapping:Sa},$p={NearestFilter:Ot,NearestMipmapNearestFilter:Mf,NearestMipmapLinearFilter:ms,LinearFilter:Tt,LinearMipmapNearestFilter:ca,LinearMipmapLinearFilter:Wn};class GT extends hn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=ui.get(e);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(l=>{t&&t(l),s.manager.itemEnd(e)}).catch(l=>{r&&r(l)});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return ui.add(e,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){r&&r(l),ui.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});ui.add(e,c),s.manager.itemStart(e)}}let ec;class id{static getContext(){return ec===void 0&&(ec=new(window.AudioContext||window.webkitAudioContext)),ec}static setContext(e){ec=e}}class WT extends hn{constructor(e){super(e)}load(e,t,n,r){const s=this,a=new xi(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(c){try{const l=c.slice(0);id.getContext().decodeAudioData(l,function(h){t(h)}).catch(o)}catch(l){o(l)}},n,r);function o(c){r?r(c):console.error(c),s.manager.itemError(e)}}}const jp=new Pe,Qp=new Pe,ur=new Pe;class XT{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Nt,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Nt,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,ur.copy(e.projectionMatrix);const r=t.eyeSep/2,s=r*t.near/t.focus,a=t.near*Math.tan(Pr*t.fov*.5)/t.zoom;let o,c;Qp.elements[12]=-r,jp.elements[12]=r,o=-a*t.aspect+s,c=a*t.aspect+s,ur.elements[0]=2*t.near/(c-o),ur.elements[8]=(c+o)/(c-o),this.cameraL.projectionMatrix.copy(ur),o=-a*t.aspect-s,c=a*t.aspect-s,ur.elements[0]=2*t.near/(c-o),ur.elements[8]=(c+o)/(c-o),this.cameraR.projectionMatrix.copy(ur)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(Qp),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(jp)}}class gx{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=em(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=em();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function em(){return performance.now()}const hr=new R,tm=new ln,qT=new R,fr=new R;class YT extends tt{constructor(){super(),this.type="AudioListener",this.context=id.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new gx}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(hr,tm,qT),fr.set(0,0,-1).applyQuaternion(tm),t.positionX){const r=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(hr.x,r),t.positionY.linearRampToValueAtTime(hr.y,r),t.positionZ.linearRampToValueAtTime(hr.z,r),t.forwardX.linearRampToValueAtTime(fr.x,r),t.forwardY.linearRampToValueAtTime(fr.y,r),t.forwardZ.linearRampToValueAtTime(fr.z,r),t.upX.linearRampToValueAtTime(n.x,r),t.upY.linearRampToValueAtTime(n.y,r),t.upZ.linearRampToValueAtTime(n.z,r)}else t.setPosition(hr.x,hr.y,hr.z),t.setOrientation(fr.x,fr.y,fr.z,n.x,n.y,n.z)}}class _x extends tt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const dr=new R,nm=new ln,ZT=new R,pr=new R;class KT extends _x{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(dr,nm,ZT),pr.set(0,0,1).applyQuaternion(nm);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(dr.x,n),t.positionY.linearRampToValueAtTime(dr.y,n),t.positionZ.linearRampToValueAtTime(dr.z,n),t.orientationX.linearRampToValueAtTime(pr.x,n),t.orientationY.linearRampToValueAtTime(pr.y,n),t.orientationZ.linearRampToValueAtTime(pr.z,n)}else t.setPosition(dr.x,dr.y,dr.z),t.setOrientation(pr.x,pr.y,pr.z)}}class JT{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}class xx{constructor(e,t,n){this.binding=e,this.valueSize=n;let r,s,a;switch(t){case"quaternion":r=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":r=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:r=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,r=this.valueSize,s=e*r+r;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==r;++o)n[s+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,s,0,o,r)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,r=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,r=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const c=t*this._origIndex;this._mixBufferRegion(n,r,c,1-s,t)}a>0&&this._mixBufferRegionAdditive(n,r,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,r);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,r=n*this._origIndex;e.getValue(t,r);for(let s=n,a=r;s!==a;++s)t[s]=t[r+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,r,s){if(r>=.5)for(let a=0;a!==s;++a)e[t+a]=e[n+a]}_slerp(e,t,n,r){ln.slerpFlat(e,t,e,t,e,n,r)}_slerpAdditive(e,t,n,r,s){const a=this._workIndex*s;ln.multiplyQuaternionsFlat(e,a,e,t,e,n),ln.slerpFlat(e,t,e,t,e,a,r)}_lerp(e,t,n,r,s){const a=1-r;for(let o=0;o!==s;++o){const c=t+o;e[c]=e[c]*a+e[n+o]*r}}_lerpAdditive(e,t,n,r,s){for(let a=0;a!==s;++a){const o=t+a;e[o]=e[o]+e[n+a]*r}}}const rd="\\[\\]\\.:\\/",$T=new RegExp("["+rd+"]","g"),sd="[^"+rd+"]",jT="[^"+rd.replace("\\.","")+"]",QT=/((?:WC+[\/:])*)/.source.replace("WC",sd),eC=/(WCOD+)?/.source.replace("WCOD",jT),tC=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",sd),nC=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",sd),iC=new RegExp("^"+QT+eC+tC+nC+"$"),rC=["material","materials","bones","map"];class sC{constructor(e,t,n){const r=n||je.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class je{constructor(e,t,n){this.path=t,this.parsedPath=n||je.parseTrackName(t),this.node=je.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new je.Composite(e,t,n):new je(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace($T,"")}static parseTrackName(e){const t=iC.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);rC.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=je.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[r];if(a===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}je.Composite=sC;je.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};je.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};je.prototype.GetterByBindingType=[je.prototype._getValue_direct,je.prototype._getValue_array,je.prototype._getValue_arrayElement,je.prototype._getValue_toArray];je.prototype.SetterByBindingTypeAndVersioning=[[je.prototype._setValue_direct,je.prototype._setValue_direct_setNeedsUpdate,je.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[je.prototype._setValue_array,je.prototype._setValue_array_setNeedsUpdate,je.prototype._setValue_array_setMatrixWorldNeedsUpdate],[je.prototype._setValue_arrayElement,je.prototype._setValue_arrayElement_setNeedsUpdate,je.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[je.prototype._setValue_fromArray,je.prototype._setValue_fromArray_setNeedsUpdate,je.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class aC{constructor(){this.isAnimationObjectGroup=!0,this.uuid=xn(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,r=arguments.length;n!==r;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,n=this._paths,r=this._parsedPaths,s=this._bindings,a=s.length;let o,c=e.length,l=this.nCachedObjects_;for(let u=0,h=arguments.length;u!==h;++u){const f=arguments[u],d=f.uuid;let p=t[d];if(p===void 0){p=c++,t[d]=p,e.push(f);for(let _=0,m=a;_!==m;++_)s[_].push(new je(f,n[_],r[_]))}else if(p<l){o=e[p];const _=--l,m=e[_];t[m.uuid]=p,e[p]=m,t[d]=_,e[_]=f;for(let g=0,v=a;g!==v;++g){const x=s[g],M=x[_];let A=x[p];x[p]=M,A===void 0&&(A=new je(f,n[g],r[g])),x[_]=A}}else e[p]!==o&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=l}remove(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,r=n.length;let s=this.nCachedObjects_;for(let a=0,o=arguments.length;a!==o;++a){const c=arguments[a],l=c.uuid,u=t[l];if(u!==void 0&&u>=s){const h=s++,f=e[h];t[f.uuid]=u,e[u]=f,t[l]=h,e[h]=c;for(let d=0,p=r;d!==p;++d){const _=n[d],m=_[h],g=_[u];_[u]=m,_[h]=g}}}this.nCachedObjects_=s}uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,r=n.length;let s=this.nCachedObjects_,a=e.length;for(let o=0,c=arguments.length;o!==c;++o){const l=arguments[o],u=l.uuid,h=t[u];if(h!==void 0)if(delete t[u],h<s){const f=--s,d=e[f],p=--a,_=e[p];t[d.uuid]=h,e[h]=d,t[_.uuid]=f,e[f]=_,e.pop();for(let m=0,g=r;m!==g;++m){const v=n[m],x=v[f],M=v[p];v[h]=x,v[f]=M,v.pop()}}else{const f=--a,d=e[f];f>0&&(t[d.uuid]=h),e[h]=d,e.pop();for(let p=0,_=r;p!==_;++p){const m=n[p];m[h]=m[f],m.pop()}}}this.nCachedObjects_=s}subscribe_(e,t){const n=this._bindingsIndicesByPath;let r=n[e];const s=this._bindings;if(r!==void 0)return s[r];const a=this._paths,o=this._parsedPaths,c=this._objects,l=c.length,u=this.nCachedObjects_,h=new Array(l);r=s.length,n[e]=r,a.push(e),o.push(t),s.push(h);for(let f=u,d=c.length;f!==d;++f){const p=c[f];h[f]=new je(p,e,t)}return h}unsubscribe_(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const r=this._paths,s=this._parsedPaths,a=this._bindings,o=a.length-1,c=a[o],l=e[o];t[l]=n,a[n]=c,a.pop(),s[n]=s[o],s.pop(),r[n]=r[o],r.pop()}}}class vx{constructor(e,t,n=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=r;const s=t.tracks,a=s.length,o=new Array(a),c={endingStart:yr,endingEnd:yr};for(let l=0;l!==a;++l){const u=s[l].createInterpolant(null);o[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=$_,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const r=this._clip.duration,s=e._clip.duration,a=s/r,o=r/s;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const r=this._mixer,s=r.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=r._lendControlInterpolant(),this._timeScaleInterpolant=o);const c=o.parameterPositions,l=o.sampleValues;return c[0]=s,c[1]=s+n,l[0]=e/a,l[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,r){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const c=(e-s)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case If:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(a),l[u].accumulateAdditive(o);break;case Cl:default:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(a),l[u].accumulate(r,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let r=this.time+e,s=this._loopCount;const a=n===j_;if(e===0)return s===-1?r:a&&(s&1)===1?t-r:r;if(n===J_){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),r>=t||r<0){const o=Math.floor(r/t);r-=t*o,s+=Math.abs(o);const c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=r;if(a&&(s&1)===1)return t-r}return r}_setEndings(e,t,n){const r=this._interpolantSettings;n?(r.endingStart=Mr,r.endingEnd=Mr):(e?r.endingStart=this.zeroSlopeAtStart?Mr:yr:r.endingStart=Ea,t?r.endingEnd=this.zeroSlopeAtEnd?Mr:yr:r.endingEnd=Ea)}_scheduleFading(e,t,n){const r=this._mixer,s=r.time;let a=this._weightInterpolant;a===null&&(a=r._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,c=a.sampleValues;return o[0]=s,c[0]=t,o[1]=s+e,c[1]=n,this}}const oC=new Float32Array(1);class cC extends jn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,r=e._clip.tracks,s=r.length,a=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let u=l[c];u===void 0&&(u={},l[c]=u);for(let h=0;h!==s;++h){const f=r[h],d=f.name;let p=u[d];if(p!==void 0)++p.referenceCount,a[h]=p;else{if(p=a[h],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,c,d));continue}const _=t&&t._propertyBindings[h].binding.parsedPath;p=new xx(je.create(n,d,_),f.ValueTypeName,f.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,c,d),a[h]=p}o[h].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,r=e._clip.uuid,s=this._actionsByClip[r];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,r,n)}const t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const r=this._actions,s=this._actionsByClip;let a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=r.length,r.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],r=e._cacheIndex;n._cacheIndex=r,t[r]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,a=this._actionsByClip,o=a[s],c=o.knownActions,l=c[c.length-1],u=e._byClipCacheIndex;l._byClipCacheIndex=u,c[u]=l,c.pop(),e._byClipCacheIndex=null;const h=o.actionByRoot,f=(e._localRoot||this._root).uuid;delete h[f],c.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,r=this._nActiveActions++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,r=--this._nActiveActions,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const r=this._bindingsByRootAndName,s=this._bindings;let a=r[t];a===void 0&&(a={},r[t]=a),a[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,r=n.rootNode.uuid,s=n.path,a=this._bindingsByRootAndName,o=a[r],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[s],Object.keys(o).length===0&&delete a[r]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,r=this._nActiveBindings++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,r=--this._nActiveBindings,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Qf(new Float32Array(2),new Float32Array(2),1,oC),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,r=--this._nActiveControlInterpolants,s=t[r];e.__cacheIndex=r,t[r]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const r=t||this._root,s=r.uuid;let a=typeof e=="string"?Ba.findByName(r,e):e;const o=a!==null?a.uuid:e,c=this._actionsByClip[o];let l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Cl),c!==void 0){const h=c.actionByRoot[s];if(h!==void 0&&h.blendMode===n)return h;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;const u=new vx(this,a,t,n);return this._bindAction(u,l),this._addInactiveAction(u,o,s),u}existingAction(e,t){const n=t||this._root,r=n.uuid,s=typeof e=="string"?Ba.findByName(n,e):e,a=s?s.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[r]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,r=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(r,e,s,a);const o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,r=this._actionsByClip,s=r[n];if(s!==void 0){const a=s.knownActions;for(let o=0,c=a.length;o!==c;++o){const l=a[o];this._deactivateAction(l);const u=l._cacheIndex,h=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(l)}delete r[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const r=this._bindingsByRootAndName,s=r[t];if(s!==void 0)for(const a in s){const o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class ad{constructor(e){this.value=e}clone(){return new ad(this.value.clone===void 0?this.value:this.value.clone())}}let lC=0;class uC extends jn{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:lC++}),this.name="",this.usage=Ra,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let n=0,r=t.length;n<r;n++){const s=Array.isArray(t[n])?t[n]:[t[n]];for(let a=0;a<s.length;a++)this.uniforms.push(s[a].clone())}return this}clone(){return new this.constructor().copy(this)}}class hC extends Fl{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class fC{constructor(e,t,n,r,s){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=r,this.count=s,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}const im=new Pe;class dC{constructor(e,t,n=0,r=1/0){this.ray=new Os(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Il,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return im.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(im),this}intersectObject(e,t=!0,n=[]){return Wh(e,this,n,t),n.sort(rm),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Wh(e[r],this,n,t);return n.sort(rm),n}}function rm(i,e){return i.distance-e.distance}function Wh(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let a=0,o=s.length;a<o;a++)Wh(s[a],e,t,!0)}}class pC{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(vt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class mC{constructor(e=1,t=0,n=0){return this.radius=e,this.theta=t,this.y=n,this}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}}class od{constructor(e,t,n,r){od.prototype.isMatrix2=!0,this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}}const sm=new K;class gC{constructor(e=new K(1/0,1/0),t=new K(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=sm.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,sm).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const am=new R,tc=new R;class _C{constructor(e=new R,t=new R){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){am.subVectors(e,this.start),tc.subVectors(this.end,this.start);const n=tc.dot(tc);let s=tc.dot(am)/n;return t&&(s=vt(s,0,1)),s}closestPointToPoint(e,t,n){const r=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(r).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const om=new R;class xC extends tt{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const n=new We,r=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let a=0,o=1,c=32;a<c;a++,o++){const l=a/c*Math.PI*2,u=o/c*Math.PI*2;r.push(Math.cos(l),Math.sin(l),1,Math.cos(u),Math.sin(u),1)}n.setAttribute("position",new we(r,3));const s=new tn({fog:!1,toneMapped:!1});this.cone=new Qn(n,s),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),om.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(om),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const Ni=new R,nc=new Pe,th=new Pe;class vC extends Qn{constructor(e){const t=yx(e),n=new We,r=[],s=[],a=new de(0,0,1),o=new de(0,1,0);for(let l=0;l<t.length;l++){const u=t[l];u.parent&&u.parent.isBone&&(r.push(0,0,0),r.push(0,0,0),s.push(a.r,a.g,a.b),s.push(o.r,o.g,o.b))}n.setAttribute("position",new we(r,3)),n.setAttribute("color",new we(s,3));const c=new tn({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,c),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,r=n.getAttribute("position");th.copy(this.root.matrixWorld).invert();for(let s=0,a=0;s<t.length;s++){const o=t[s];o.parent&&o.parent.isBone&&(nc.multiplyMatrices(th,o.matrixWorld),Ni.setFromMatrixPosition(nc),r.setXYZ(a,Ni.x,Ni.y,Ni.z),nc.multiplyMatrices(th,o.parent.matrixWorld),Ni.setFromMatrixPosition(nc),r.setXYZ(a+1,Ni.x,Ni.y,Ni.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose()}}function yx(i){const e=[];i.isBone===!0&&e.push(i);for(let t=0;t<i.children.length;t++)e.push.apply(e,yx(i.children[t]));return e}class yC extends wt{constructor(e,t,n){const r=new no(t,4,2),s=new Qi({wireframe:!0,fog:!1,toneMapped:!1});super(r,s),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const MC=new R,cm=new de,lm=new de;class bC extends tt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const r=new to(t);r.rotateY(Math.PI*.5),this.material=new Qi({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const s=r.getAttribute("position"),a=new Float32Array(s.count*3);r.setAttribute("color",new ot(a,3)),this.add(new wt(r,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");cm.copy(this.light.color),lm.copy(this.light.groundColor);for(let n=0,r=t.count;n<r;n++){const s=n<r/2?cm:lm;t.setXYZ(n,s.r,s.g,s.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(MC.setFromMatrixPosition(this.light.matrixWorld).negate())}}class SC extends Qn{constructor(e=10,t=10,n=4473924,r=8947848){n=new de(n),r=new de(r);const s=t/2,a=e/t,o=e/2,c=[],l=[];for(let f=0,d=0,p=-o;f<=t;f++,p+=a){c.push(-o,0,p,o,0,p),c.push(p,0,-o,p,0,o);const _=f===s?n:r;_.toArray(l,d),d+=3,_.toArray(l,d),d+=3,_.toArray(l,d),d+=3,_.toArray(l,d),d+=3}const u=new We;u.setAttribute("position",new we(c,3)),u.setAttribute("color",new we(l,3));const h=new tn({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class wC extends Qn{constructor(e=10,t=16,n=8,r=64,s=4473924,a=8947848){s=new de(s),a=new de(a);const o=[],c=[];if(t>1)for(let h=0;h<t;h++){const f=h/t*(Math.PI*2),d=Math.sin(f)*e,p=Math.cos(f)*e;o.push(0,0,0),o.push(d,0,p);const _=h&1?s:a;c.push(_.r,_.g,_.b),c.push(_.r,_.g,_.b)}for(let h=0;h<n;h++){const f=h&1?s:a,d=e-e/n*h;for(let p=0;p<r;p++){let _=p/r*(Math.PI*2),m=Math.sin(_)*d,g=Math.cos(_)*d;o.push(m,0,g),c.push(f.r,f.g,f.b),_=(p+1)/r*(Math.PI*2),m=Math.sin(_)*d,g=Math.cos(_)*d,o.push(m,0,g),c.push(f.r,f.g,f.b)}}const l=new We;l.setAttribute("position",new we(o,3)),l.setAttribute("color",new we(c,3));const u=new tn({vertexColors:!0,toneMapped:!1});super(l,u),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const um=new R,ic=new R,hm=new R;class EC extends tt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let r=new We;r.setAttribute("position",new we([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const s=new tn({fog:!1,toneMapped:!1});this.lightPlane=new Ki(r,s),this.add(this.lightPlane),r=new We,r.setAttribute("position",new we([0,0,0,0,0,1],3)),this.targetLine=new Ki(r,s),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),um.setFromMatrixPosition(this.light.matrixWorld),ic.setFromMatrixPosition(this.light.target.matrixWorld),hm.subVectors(ic,um),this.lightPlane.lookAt(ic),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(ic),this.targetLine.scale.z=hm.length()}}const rc=new R,xt=new Ll;class AC extends Qn{constructor(e){const t=new We,n=new tn({color:16777215,vertexColors:!0,toneMapped:!1}),r=[],s=[],a={};o("n1","n2"),o("n2","n4"),o("n4","n3"),o("n3","n1"),o("f1","f2"),o("f2","f4"),o("f4","f3"),o("f3","f1"),o("n1","f1"),o("n2","f2"),o("n3","f3"),o("n4","f4"),o("p","n1"),o("p","n2"),o("p","n3"),o("p","n4"),o("u1","u2"),o("u2","u3"),o("u3","u1"),o("c","t"),o("p","c"),o("cn1","cn2"),o("cn3","cn4"),o("cf1","cf2"),o("cf3","cf4");function o(p,_){c(p),c(_)}function c(p){r.push(0,0,0),s.push(0,0,0),a[p]===void 0&&(a[p]=[]),a[p].push(r.length/3-1)}t.setAttribute("position",new we(r,3)),t.setAttribute("color",new we(s,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update();const l=new de(16755200),u=new de(16711680),h=new de(43775),f=new de(16777215),d=new de(3355443);this.setColors(l,u,h,f,d)}setColors(e,t,n,r,s){const o=this.geometry.getAttribute("color");o.setXYZ(0,e.r,e.g,e.b),o.setXYZ(1,e.r,e.g,e.b),o.setXYZ(2,e.r,e.g,e.b),o.setXYZ(3,e.r,e.g,e.b),o.setXYZ(4,e.r,e.g,e.b),o.setXYZ(5,e.r,e.g,e.b),o.setXYZ(6,e.r,e.g,e.b),o.setXYZ(7,e.r,e.g,e.b),o.setXYZ(8,e.r,e.g,e.b),o.setXYZ(9,e.r,e.g,e.b),o.setXYZ(10,e.r,e.g,e.b),o.setXYZ(11,e.r,e.g,e.b),o.setXYZ(12,e.r,e.g,e.b),o.setXYZ(13,e.r,e.g,e.b),o.setXYZ(14,e.r,e.g,e.b),o.setXYZ(15,e.r,e.g,e.b),o.setXYZ(16,e.r,e.g,e.b),o.setXYZ(17,e.r,e.g,e.b),o.setXYZ(18,e.r,e.g,e.b),o.setXYZ(19,e.r,e.g,e.b),o.setXYZ(20,e.r,e.g,e.b),o.setXYZ(21,e.r,e.g,e.b),o.setXYZ(22,e.r,e.g,e.b),o.setXYZ(23,e.r,e.g,e.b),o.setXYZ(24,t.r,t.g,t.b),o.setXYZ(25,t.r,t.g,t.b),o.setXYZ(26,t.r,t.g,t.b),o.setXYZ(27,t.r,t.g,t.b),o.setXYZ(28,t.r,t.g,t.b),o.setXYZ(29,t.r,t.g,t.b),o.setXYZ(30,t.r,t.g,t.b),o.setXYZ(31,t.r,t.g,t.b),o.setXYZ(32,n.r,n.g,n.b),o.setXYZ(33,n.r,n.g,n.b),o.setXYZ(34,n.r,n.g,n.b),o.setXYZ(35,n.r,n.g,n.b),o.setXYZ(36,n.r,n.g,n.b),o.setXYZ(37,n.r,n.g,n.b),o.setXYZ(38,r.r,r.g,r.b),o.setXYZ(39,r.r,r.g,r.b),o.setXYZ(40,s.r,s.g,s.b),o.setXYZ(41,s.r,s.g,s.b),o.setXYZ(42,s.r,s.g,s.b),o.setXYZ(43,s.r,s.g,s.b),o.setXYZ(44,s.r,s.g,s.b),o.setXYZ(45,s.r,s.g,s.b),o.setXYZ(46,s.r,s.g,s.b),o.setXYZ(47,s.r,s.g,s.b),o.setXYZ(48,s.r,s.g,s.b),o.setXYZ(49,s.r,s.g,s.b),o.needsUpdate=!0}update(){const e=this.geometry,t=this.pointMap,n=1,r=1;xt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),St("c",t,e,xt,0,0,-1),St("t",t,e,xt,0,0,1),St("n1",t,e,xt,-n,-r,-1),St("n2",t,e,xt,n,-r,-1),St("n3",t,e,xt,-n,r,-1),St("n4",t,e,xt,n,r,-1),St("f1",t,e,xt,-n,-r,1),St("f2",t,e,xt,n,-r,1),St("f3",t,e,xt,-n,r,1),St("f4",t,e,xt,n,r,1),St("u1",t,e,xt,n*.7,r*1.1,-1),St("u2",t,e,xt,-n*.7,r*1.1,-1),St("u3",t,e,xt,0,r*2,-1),St("cf1",t,e,xt,-n,0,1),St("cf2",t,e,xt,n,0,1),St("cf3",t,e,xt,0,-r,1),St("cf4",t,e,xt,0,r,1),St("cn1",t,e,xt,-n,0,-1),St("cn2",t,e,xt,n,0,-1),St("cn3",t,e,xt,0,-r,-1),St("cn4",t,e,xt,0,r,-1),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function St(i,e,t,n,r,s,a){rc.set(r,s,a).unproject(n);const o=e[i];if(o!==void 0){const c=t.getAttribute("position");for(let l=0,u=o.length;l<u;l++)c.setXYZ(o[l],rc.x,rc.y,rc.z)}}const sc=new en;class TC extends Qn{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=new Float32Array(8*3),s=new We;s.setIndex(new ot(n,1)),s.setAttribute("position",new ot(r,3)),super(s,new tn({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&sc.setFromObject(this.object),sc.isEmpty())return;const t=sc.min,n=sc.max,r=this.geometry.attributes.position,s=r.array;s[0]=n.x,s[1]=n.y,s[2]=n.z,s[3]=t.x,s[4]=n.y,s[5]=n.z,s[6]=t.x,s[7]=t.y,s[8]=n.z,s[9]=n.x,s[10]=t.y,s[11]=n.z,s[12]=n.x,s[13]=n.y,s[14]=t.z,s[15]=t.x,s[16]=n.y,s[17]=t.z,s[18]=t.x,s[19]=t.y,s[20]=t.z,s[21]=n.x,s[22]=t.y,s[23]=t.z,r.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class CC extends Qn{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new We;s.setIndex(new ot(n,1)),s.setAttribute("position",new we(r,3)),super(s,new tn({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class RC extends Ki{constructor(e,t=1,n=16776960){const r=n,s=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],a=new We;a.setAttribute("position",new we(s,3)),a.computeBoundingSphere(),super(a,new tn({color:r,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],c=new We;c.setAttribute("position",new we(o,3)),c.computeBoundingSphere(),this.add(new wt(c,new Qi({color:r,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const fm=new R;let ac,nh;class PC extends tt{constructor(e=new R(0,0,1),t=new R(0,0,0),n=1,r=16776960,s=n*.2,a=s*.2){super(),this.type="ArrowHelper",ac===void 0&&(ac=new We,ac.setAttribute("position",new we([0,0,0,0,1,0],3)),nh=new Bs(0,.5,1,5,1),nh.translate(0,-.5,0)),this.position.copy(t),this.line=new Ki(ac,new tn({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new wt(nh,new Qi({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,s,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{fm.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(fm,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class IC extends Qn{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new We;r.setAttribute("position",new we(t,3)),r.setAttribute("color",new we(n,3));const s=new tn({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,t,n){const r=new de,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(t),r.toArray(s,6),r.toArray(s,9),r.set(n),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class LC{constructor(){this.type="ShapePath",this.color=new de,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new La,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,r){return this.currentPath.quadraticCurveTo(e,t,n,r),this}bezierCurveTo(e,t,n,r,s,a){return this.currentPath.bezierCurveTo(e,t,n,r,s,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(g){const v=[];for(let x=0,M=g.length;x<M;x++){const A=g[x],T=new Ir;T.curves=A.curves,v.push(T)}return v}function n(g,v){const x=v.length;let M=!1;for(let A=x-1,T=0;T<x;A=T++){let w=v[A],P=v[T],U=P.x-w.x,y=P.y-w.y;if(Math.abs(y)>Number.EPSILON){if(y<0&&(w=v[T],U=-U,P=v[A],y=-y),g.y<w.y||g.y>P.y)continue;if(g.y===w.y){if(g.x===w.x)return!0}else{const b=y*(g.x-w.x)-U*(g.y-w.y);if(b===0)return!0;if(b<0)continue;M=!M}}else{if(g.y!==w.y)continue;if(P.x<=g.x&&g.x<=w.x||w.x<=g.x&&g.x<=P.x)return!0}}return M}const r=Zn.isClockWise,s=this.subPaths;if(s.length===0)return[];let a,o,c;const l=[];if(s.length===1)return o=s[0],c=new Ir,c.curves=o.curves,l.push(c),l;let u=!r(s[0].getPoints());u=e?!u:u;const h=[],f=[];let d=[],p=0,_;f[p]=void 0,d[p]=[];for(let g=0,v=s.length;g<v;g++)o=s[g],_=o.getPoints(),a=r(_),a=e?!a:a,a?(!u&&f[p]&&p++,f[p]={s:new Ir,p:_},f[p].s.curves=o.curves,u&&p++,d[p]=[]):d[p].push({h:o,p:_[0]});if(!f[0])return t(s);if(f.length>1){let g=!1,v=0;for(let x=0,M=f.length;x<M;x++)h[x]=[];for(let x=0,M=f.length;x<M;x++){const A=d[x];for(let T=0;T<A.length;T++){const w=A[T];let P=!0;for(let U=0;U<f.length;U++)n(w.p,f[U].p)&&(x!==U&&v++,P?(P=!1,h[U].push(w)):g=!0);P&&h[x].push(w)}}v>0&&g===!1&&(d=h)}let m;for(let g=0,v=f.length;g<v;g++){c=f[g].s,l.push(c),m=d[g];for(let x=0,M=m.length;x<M;x++)c.holes.push(m[x].h)}return l}}class DC extends jn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}class NC extends Un{constructor(e=1,t=1,n=1,r={}){console.warn('THREE.WebGLMultipleRenderTargets has been deprecated and will be removed in r172. Use THREE.WebGLRenderTarget and set the "count" parameter to enable MRT.'),super(e,t,{...r,count:n}),this.isWebGLMultipleRenderTargets=!0}get texture(){return this.textures}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Za}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Za);const UC=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:yf,AddEquation:Fi,AddOperation:H_,AdditiveAnimationBlendMode:If,AdditiveBlending:Ph,AgXToneMapping:Y_,AlphaFormat:Ef,AlwaysCompare:c0,AlwaysDepth:Tc,AlwaysStencilFunc:Nh,AmbientLight:ux,AnimationAction:vx,AnimationClip:Ba,AnimationLoader:NT,AnimationMixer:cC,AnimationObjectGroup:aC,AnimationUtils:PT,ArcCurve:N0,ArrayCamera:w0,ArrowHelper:PC,AttachedBindMode:Dh,Audio:_x,AudioAnalyser:JT,AudioContext:id,AudioListener:YT,AudioLoader:WT,AxesHelper:IC,BackSide:Qt,BasicDepthPacking:Q_,BasicShadowMap:AM,BatchedMesh:I0,Bone:Gf,BooleanKeyframeTrack:Gr,Box2:gC,Box3:en,Box3Helper:CC,BoxGeometry:Vr,BoxHelper:TC,BufferAttribute:ot,BufferGeometry:We,BufferGeometryLoader:mx,ByteType:bf,Cache:ui,Camera:Ll,CameraHelper:AC,CanvasTexture:eT,CapsuleGeometry:Vl,CatmullRomCurve3:U0,CineonToneMapping:X_,CircleGeometry:Hl,ClampToEdgeWrapping:on,Clock:gx,Color:de,ColorKeyframeTrack:ed,ColorManagement:Qe,CompressedArrayTexture:jA,CompressedCubeTexture:QA,CompressedTexture:zl,CompressedTextureLoader:UT,ConeGeometry:Gl,ConstantAlphaFactor:z_,ConstantColorFactor:F_,Controls:DC,CubeCamera:g0,CubeReflectionMapping:gi,CubeRefractionMapping:Zi,CubeTexture:ja,CubeTextureLoader:OT,CubeUVReflectionMapping:Ns,CubicBezierCurve:qf,CubicBezierCurve3:O0,CubicInterpolant:tx,CullFaceBack:Rh,CullFaceFront:b_,CullFaceFrontBack:EM,CullFaceNone:M_,Curve:zn,CurvePath:B0,CustomBlending:S_,CustomToneMapping:q_,CylinderGeometry:Bs,Cylindrical:mC,Data3DTexture:Nf,DataArrayTexture:Pl,DataTexture:Yn,DataTextureLoader:FT,DataUtils:Vb,DecrementStencilOp:kM,DecrementWrapStencilOp:HM,DefaultLoadingManager:rx,DepthFormat:Rr,DepthStencilFormat:Ur,DepthTexture:Bf,DetachedBindMode:K_,DirectionalLight:lx,DirectionalLightHelper:EC,DiscreteInterpolant:nx,DisplayP3ColorSpace:Rl,DodecahedronGeometry:Wl,DoubleSide:Dn,DstAlphaFactor:L_,DstColorFactor:N_,DynamicCopyUsage:ib,DynamicDrawUsage:$M,DynamicReadUsage:eb,EdgesGeometry:z0,EllipseCurve:kl,EqualCompare:r0,EqualDepth:Rc,EqualStencilFunc:qM,EquirectangularReflectionMapping:ya,EquirectangularRefractionMapping:Ma,Euler:yn,EventDispatcher:jn,ExtrudeGeometry:ql,FileLoader:xi,Float16BufferAttribute:Yb,Float32BufferAttribute:we,FloatType:cn,Fog:Ol,FogExp2:Ul,FramebufferTexture:$A,FrontSide:mi,Frustum:Qa,GLBufferAttribute:fC,GLSL1:sb,GLSL3:Uh,GreaterCompare:s0,GreaterDepth:Ic,GreaterEqualCompare:o0,GreaterEqualDepth:Pc,GreaterEqualStencilFunc:JM,GreaterStencilFunc:ZM,GridHelper:SC,Group:xs,HalfFloatType:Us,HemisphereLight:ax,HemisphereLightHelper:bC,IcosahedronGeometry:Yl,ImageBitmapLoader:GT,ImageLoader:za,ImageUtils:h0,IncrementStencilOp:zM,IncrementWrapStencilOp:VM,InstancedBufferAttribute:Ps,InstancedBufferGeometry:px,InstancedInterleavedBuffer:hC,InstancedMesh:P0,Int16BufferAttribute:Xb,Int32BufferAttribute:qb,Int8BufferAttribute:Hb,IntType:bl,InterleavedBuffer:Fl,InterleavedBufferAttribute:Or,Interpolant:io,InterpolateDiscrete:wa,InterpolateLinear:sl,InterpolateSmooth:fc,InvertStencilOp:GM,KeepStencilOp:gr,KeyframeTrack:kn,LOD:C0,LatheGeometry:eo,Layers:Il,LessCompare:i0,LessDepth:Cc,LessEqualCompare:Lf,LessEqualDepth:Dr,LessEqualStencilFunc:YM,LessStencilFunc:XM,Light:tr,LightProbe:dx,Line:Ki,Line3:_C,LineBasicMaterial:tn,LineCurve:Yf,LineCurve3:F0,LineDashedMaterial:j0,LineLoop:L0,LineSegments:Qn,LinearDisplayP3ColorSpace:$a,LinearFilter:Tt,LinearInterpolant:Qf,LinearMipMapLinearFilter:PM,LinearMipMapNearestFilter:RM,LinearMipmapLinearFilter:Wn,LinearMipmapNearestFilter:ca,LinearSRGBColorSpace:wi,LinearToneMapping:G_,LinearTransfer:Aa,Loader:hn,LoaderUtils:Gh,LoadingManager:td,LoopOnce:J_,LoopPingPong:j_,LoopRepeat:$_,LuminanceAlphaFormat:Cf,LuminanceFormat:Tf,MOUSE:SM,Material:Xt,MaterialLoader:eu,MathUtils:bb,Matrix2:od,Matrix3:He,Matrix4:Pe,MaxEquation:T_,Mesh:wt,MeshBasicMaterial:Qi,MeshDepthMaterial:zf,MeshDistanceMaterial:kf,MeshLambertMaterial:J0,MeshMatcapMaterial:$0,MeshNormalMaterial:K0,MeshPhongMaterial:Y0,MeshPhysicalMaterial:q0,MeshStandardMaterial:$f,MeshToonMaterial:Z0,MinEquation:A_,MirroredRepeatWrapping:Sa,MixOperation:V_,MultiplyBlending:Lh,MultiplyOperation:Ka,NearestFilter:Ot,NearestMipMapLinearFilter:CM,NearestMipMapNearestFilter:TM,NearestMipmapLinearFilter:ms,NearestMipmapNearestFilter:Mf,NeutralToneMapping:Z_,NeverCompare:n0,NeverDepth:Ac,NeverStencilFunc:WM,NoBlending:hi,NoColorSpace:oi,NoToneMapping:fi,NormalAnimationBlendMode:Cl,NormalBlending:Cr,NotEqualCompare:a0,NotEqualDepth:Lc,NotEqualStencilFunc:KM,NumberKeyframeTrack:Oa,Object3D:tt,ObjectLoader:VT,ObjectSpaceNormalMap:t0,OctahedronGeometry:to,OneFactor:R_,OneMinusConstantAlphaFactor:k_,OneMinusConstantColorFactor:B_,OneMinusDstAlphaFactor:D_,OneMinusDstColorFactor:U_,OneMinusSrcAlphaFactor:Ec,OneMinusSrcColorFactor:I_,OrthographicCamera:Dl,P3Primaries:Ca,PCFShadowMap:vf,PCFSoftShadowMap:yl,PMREMGenerator:Oh,Path:La,PerspectiveCamera:Nt,Plane:Ui,PlaneGeometry:Hr,PlaneHelper:RC,PointLight:cx,PointLightHelper:yC,Points:D0,PointsMaterial:Wf,PolarGridHelper:wC,PolyhedronGeometry:er,PositionalAudio:KT,PropertyBinding:je,PropertyMixer:xx,QuadraticBezierCurve:Zf,QuadraticBezierCurve3:Kf,Quaternion:ln,QuaternionKeyframeTrack:ro,QuaternionLinearInterpolant:ix,RED_GREEN_RGTC2_Format:il,RED_RGTC1_Format:Pf,REVISION:Za,RGBADepthPacking:e0,RGBAFormat:$t,RGBAIntegerFormat:Tl,RGBA_ASTC_10x10_Format:$c,RGBA_ASTC_10x5_Format:Zc,RGBA_ASTC_10x6_Format:Kc,RGBA_ASTC_10x8_Format:Jc,RGBA_ASTC_12x10_Format:jc,RGBA_ASTC_12x12_Format:Qc,RGBA_ASTC_4x4_Format:kc,RGBA_ASTC_5x4_Format:Vc,RGBA_ASTC_5x5_Format:Hc,RGBA_ASTC_6x5_Format:Gc,RGBA_ASTC_6x6_Format:Wc,RGBA_ASTC_8x5_Format:Xc,RGBA_ASTC_8x6_Format:qc,RGBA_ASTC_8x8_Format:Yc,RGBA_BPTC_Format:da,RGBA_ETC2_EAC_Format:zc,RGBA_PVRTC_2BPPV1_Format:Oc,RGBA_PVRTC_4BPPV1_Format:Uc,RGBA_S3TC_DXT1_Format:ua,RGBA_S3TC_DXT3_Format:ha,RGBA_S3TC_DXT5_Format:fa,RGBDepthPacking:UM,RGBFormat:Af,RGBIntegerFormat:IM,RGB_BPTC_SIGNED_Format:el,RGB_BPTC_UNSIGNED_Format:tl,RGB_ETC1_Format:Fc,RGB_ETC2_Format:Bc,RGB_PVRTC_2BPPV1_Format:Nc,RGB_PVRTC_4BPPV1_Format:Dc,RGB_S3TC_DXT1_Format:la,RGDepthPacking:OM,RGFormat:Rf,RGIntegerFormat:Al,RawShaderMaterial:X0,Ray:Os,Raycaster:dC,Rec709Primaries:Ta,RectAreaLight:hx,RedFormat:El,RedIntegerFormat:Ja,ReinhardToneMapping:W_,RenderTarget:f0,RepeatWrapping:ba,ReplaceStencilOp:BM,ReverseSubtractEquation:E_,RingGeometry:Zl,SIGNED_RED_GREEN_RGTC2_Format:rl,SIGNED_RED_RGTC1_Format:nl,SRGBColorSpace:En,SRGBTransfer:ht,Scene:Vf,ShaderChunk:Ie,ShaderLib:Ln,ShaderMaterial:On,ShadowMaterial:W0,Shape:Ir,ShapeGeometry:Kl,ShapePath:LC,ShapeUtils:Zn,ShortType:Sf,Skeleton:Bl,SkeletonHelper:vC,SkinnedMesh:R0,Source:br,Sphere:Wt,SphereGeometry:no,Spherical:pC,SphericalHarmonics3:fx,SplineCurve:Jf,SpotLight:ox,SpotLightHelper:xC,Sprite:T0,SpriteMaterial:Hf,SrcAlphaFactor:wc,SrcAlphaSaturateFactor:O_,SrcColorFactor:P_,StaticCopyUsage:nb,StaticDrawUsage:Ra,StaticReadUsage:QM,StereoCamera:XT,StreamCopyUsage:rb,StreamDrawUsage:jM,StreamReadUsage:tb,StringKeyframeTrack:Wr,SubtractEquation:w_,SubtractiveBlending:Ih,TOUCH:wM,TangentSpaceNormalMap:ji,TetrahedronGeometry:Jl,Texture:Mt,TextureLoader:sx,TextureUtils:PA,TorusGeometry:$l,TorusKnotGeometry:jl,Triangle:an,TriangleFanDrawMode:NM,TriangleStripDrawMode:DM,TrianglesDrawMode:LM,TubeGeometry:Ql,UVMapping:Ml,Uint16BufferAttribute:Uf,Uint32BufferAttribute:Of,Uint8BufferAttribute:Gb,Uint8ClampedBufferAttribute:Wb,Uniform:ad,UniformsGroup:uC,UniformsLib:oe,UniformsUtils:m0,UnsignedByteType:$n,UnsignedInt248Type:Nr,UnsignedInt5999Type:wf,UnsignedIntType:_i,UnsignedShort4444Type:Sl,UnsignedShort5551Type:wl,UnsignedShortType:Ts,VSMShadowMap:Vn,Vector2:K,Vector3:R,Vector4:et,VectorKeyframeTrack:Fa,VideoTexture:JA,WebGL3DRenderTarget:Ib,WebGLArrayRenderTarget:Pb,WebGLCoordinateSystem:Xn,WebGLCubeRenderTarget:_0,WebGLMultipleRenderTargets:NC,WebGLRenderTarget:Un,WebGLRenderer:E0,WebGLUtils:S0,WebGPUCoordinateSystem:Pa,WireframeGeometry:G0,WrapAroundEnding:Ea,ZeroCurvatureEnding:yr,ZeroFactor:C_,ZeroSlopeEnding:Mr,ZeroStencilOp:FM,createCanvasElement:u0},Symbol.toStringTag,{value:"Module"}));function OC(i){return{all:i=i||new Map,on:function(e,t){var n=i.get(e);n?n.push(t):i.set(e,[t])},off:function(e,t){var n=i.get(e);n&&(t?n.splice(n.indexOf(t)>>>0,1):i.set(e,[]))},emit:function(e,t){var n=i.get(e);n&&n.slice().map(function(r){r(t)}),(n=i.get("*"))&&n.slice().map(function(r){r(e,t)})}}}class Oi{constructor(){pt(this,"allVertices",{});pt(this,"isolatedVertices",{});pt(this,"connectedVertices",{});pt(this,"sortedConnectedValues",[]);pt(this,"needsSort",!1);pt(this,"emitter",OC());pt(this,"emit",this.emitter.emit.bind(this.emitter));pt(this,"on",this.emitter.on.bind(this.emitter));pt(this,"off",this.emitter.off.bind(this.emitter));pt(this,"getKey",e=>typeof e=="object"?e.key:e)}get sortedVertices(){return this.mapNodes(e=>e)}moveToIsolated(e){const t=this.connectedVertices[e];t&&(this.isolatedVertices[e]=t,delete this.connectedVertices[e])}moveToConnected(e){const t=this.isolatedVertices[e];t&&(this.connectedVertices[e]=t,delete this.isolatedVertices[e])}add(e,t,n){if(this.allVertices[e]&&this.allVertices[e].value!==void 0)throw new Error(`A node with the key ${e.toString()} already exists`);let r=this.allVertices[e];r?r.value===void 0&&(r.value=t):(r={value:t,previous:new Set,next:new Set},this.allVertices[e]=r);const s=r.next.size>0||r.previous.size>0;if(!(n!=null&&n.after)&&!(n!=null&&n.before)&&!s){this.isolatedVertices[e]=r,this.emit("node:added",{key:e,type:"isolated",value:t});return}else this.connectedVertices[e]=r;if(n!=null&&n.after){const a=Array.isArray(n.after)?n.after:[n.after];a.forEach(o=>{r.previous.add(this.getKey(o))}),a.forEach(o=>{const c=this.getKey(o),l=this.allVertices[c];l?(l.next.add(e),this.moveToConnected(c)):(this.allVertices[c]={value:void 0,previous:new Set,next:new Set([e])},this.connectedVertices[c]=this.allVertices[c])})}if(n!=null&&n.before){const a=Array.isArray(n.before)?n.before:[n.before];a.forEach(o=>{r.next.add(this.getKey(o))}),a.forEach(o=>{const c=this.getKey(o),l=this.allVertices[c];l?(l.previous.add(e),this.moveToConnected(c)):(this.allVertices[c]={value:void 0,previous:new Set([e]),next:new Set},this.connectedVertices[c]=this.allVertices[c])})}this.emit("node:added",{key:e,type:"connected",value:t}),this.needsSort=!0}remove(e){const t=this.getKey(e);if(this.isolatedVertices[t]){delete this.isolatedVertices[t],delete this.allVertices[t],this.emit("node:removed",{key:t,type:"isolated"});return}const r=this.connectedVertices[t];r&&(r.next.forEach(s=>{const a=this.connectedVertices[s];a&&(a.previous.delete(t),a.previous.size===0&&a.next.size===0&&this.moveToIsolated(s))}),r.previous.forEach(s=>{const a=this.connectedVertices[s];a&&(a.next.delete(t),a.previous.size===0&&a.next.size===0&&this.moveToIsolated(s))}),delete this.connectedVertices[t],delete this.allVertices[t],this.emit("node:removed",{key:t,type:"connected"}),this.needsSort=!0)}mapNodes(e){this.needsSort&&this.sort();const t=[];return this.forEachNode((n,r)=>{t.push(e(n,r))}),t}forEachNode(e){this.needsSort&&this.sort();let t=0;for(;t<this.sortedConnectedValues.length;t++)e(this.sortedConnectedValues[t],t);Reflect.ownKeys(this.isolatedVertices).forEach(n=>{const r=this.isolatedVertices[n];r.value!==void 0&&e(r.value,t++)})}getValueByKey(e){var t;return(t=this.allVertices[e])==null?void 0:t.value}getKeyByValue(e){return Reflect.ownKeys(this.connectedVertices).find(t=>this.connectedVertices[t].value===e)??Reflect.ownKeys(this.isolatedVertices).find(t=>this.isolatedVertices[t].value===e)}sort(){var a;const e=new Map,t=[],n=[],r=Reflect.ownKeys(this.connectedVertices).filter(o=>this.connectedVertices[o].value!==void 0);for(r.forEach(o=>{e.set(o,0)}),r.forEach(o=>{this.connectedVertices[o].next.forEach(l=>{this.connectedVertices[l]&&e.set(l,(e.get(l)||0)+1)})}),e.forEach((o,c)=>{o===0&&t.push(c)});t.length>0;){const o=t.shift();n.push(o);const c=r.find(l=>l===o);c&&((a=this.connectedVertices[c])==null||a.next.forEach(l=>{const u=(e.get(l)||0)-1;e.set(l,u),u===0&&t.push(l)}))}if(n.length!==r.length)throw new Error("The graph contains a cycle, and thus can not be sorted topologically.");const s=o=>o!==void 0;this.sortedConnectedValues=n.map(o=>this.connectedVertices[o].value).filter(s),this.needsSort=!1}clear(){this.allVertices={},this.isolatedVertices={},this.connectedVertices={},this.sortedConnectedValues=[],this.needsSort=!1}static isKey(e){return typeof e=="string"||typeof e=="symbol"}static isValue(e){return typeof e=="object"&&"key"in e}}class FC{constructor(e,t,n){pt(this,"key");pt(this,"stage");pt(this,"callback");pt(this,"runTask",!0);this.stage=e,this.key=t,this.callback=n}stop(){this.runTask=!1}start(){this.runTask=!0}run(e){this.runTask&&this.callback(e)}}class BC extends Oi{constructor(t,n,r){super();pt(this,"key");pt(this,"scheduler");pt(this,"callback",(t,n)=>n());pt(this,"removeTask",this.remove.bind(this));this.scheduler=t,this.key=n,r&&(this.callback=r.bind(this))}get tasks(){return this.sortedVertices}createTask(t,n,r){const s=new FC(this,t,n);return this.add(t,s,r),s}getTask(t){return this.getValueByKey(t)}run(t){this.callback(t,n=>{this.forEachNode(r=>{r.run(n??t)})})}runWithTiming(t){const n={};return this.callback(t,r=>{this.forEachNode(s=>{const a=performance.now();s.run(r??t);const o=performance.now()-a;n[s.key]=o})}),n}getSchedule(){return this.mapNodes(t=>t.key.toString())}}class zC extends Oi{constructor(t){super();pt(this,"lastTime",performance.now());pt(this,"clampDeltaTo",.1);pt(this,"removeStage",this.remove.bind(this));t!=null&&t.clampDeltaTo&&(this.clampDeltaTo=t.clampDeltaTo),this.run=this.run.bind(this)}get stages(){return this.sortedVertices}createStage(t,n){const r=new BC(this,t,n==null?void 0:n.callback);return this.add(t,r,{after:n==null?void 0:n.after,before:n==null?void 0:n.before}),r}getStage(t){return this.getValueByKey(t)}run(t){const n=t-this.lastTime;this.forEachNode(r=>{r.run(Math.min(n/1e3,this.clampDeltaTo))}),this.lastTime=t}runWithTiming(t){const n=t-this.lastTime,r={},s=performance.now();return this.forEachNode(a=>{const o=performance.now(),c=a.runWithTiming(Math.min(n/1e3,this.clampDeltaTo)),l=performance.now()-o;r[a.key.toString()]={duration:l,tasks:c}}),{total:performance.now()-s,stages:r}}getSchedule(t={tasks:!0}){return{stages:this.mapNodes(n=>{if(n===void 0)throw new Error("Stage not found");return{key:n.key.toString(),tasks:t.tasks?n.getSchedule():void 0}})}}dispose(){this.clear()}}const Gn=(i,e)=>{const t=y_(i,s=>s);let n;const r=t.subscribe(async s=>{n&&n();const a=await e(s);a&&(n=a)});Bn(()=>{r(),n&&n()})},In=i=>{const e=vn(i),t={set:n=>{t.current=n,e.set(n)},subscribe:e.subscribe,update:n=>{const r=n(t.current);t.current=r,e.set(r)},current:i};return t},tu=new Nt(75,0,.1,1e3);tu.position.z=5;tu.lookAt(0,0,0);const kC=()=>tu,VC=i=>{Gn(i.size,e=>{if(i.camera.current===tu){const t=i.camera.current;t.aspect=e.width/e.height,t.updateProjectionMatrix(),i.invalidate()}})},HC=Symbol("use-legacy-frame-compatibility-context"),GC=()=>{const i={useFrameOrders:[],useRenderOrders:[]};return qn(HC,i),i},WC=i=>{const e={frameInvalidated:!0,advance:!1,autoInvalidations:new Set,resetFrameInvalidation:()=>{e.frameInvalidated=!1,e.advance=!1},dispose:async(l=!1)=>{await p_(),!(!e.shouldDispose&&!l)&&(e.disposableObjects.forEach((u,h)=>{var f;(u===0||l)&&((f=h==null?void 0:h.dispose)==null||f.call(h),e.disposableObjects.delete(h))}),e.shouldDispose=!1)},collectDisposableObjects:(l,u)=>{const h=u??[];return l&&(l!=null&&l.dispose&&typeof l.dispose=="function"&&l.type!=="Scene"&&h.push(l),Object.entries(l).forEach(([f,d])=>{if(f==="parent"||f==="children"||typeof d!="object")return;const p=d;p!=null&&p.dispose&&e.collectDisposableObjects(p,h)})),h},addDisposableObjects:l=>{l.forEach(u=>{const h=e.disposableObjects.get(u);h?e.disposableObjects.set(u,h+1):e.disposableObjects.set(u,1)})},removeDisposableObjects:l=>{l.length!==0&&(l.forEach(u=>{const h=e.disposableObjects.get(u);h&&h>0&&e.disposableObjects.set(u,h-1)}),e.shouldDispose=!0)},disposableObjects:new Map,shouldDispose:!1},{useRenderOrders:t}=GC(),n=new zC,r=n.createStage(Symbol("threlte-main-stage")),s=n.createStage(Symbol("threlte-render-stage"),{after:r,callback(l,u){o.shouldRender()&&u()}}),a=s.createTask(Symbol("threlte-auto-render-task"),l=>{t.length>0||o.renderer.render(o.scene,o.camera.current)}),o={size:y_([i.userSize,i.parentSize],([l,u])=>l||u),camera:In(kC()),scene:new Vf,renderer:void 0,invalidate:()=>{e.frameInvalidated=!0},advance:()=>{e.advance=!0},colorSpace:In(i.colorSpace),toneMapping:In(i.toneMapping),dpr:In(i.dpr),useLegacyLights:In(i.useLegacyLights),shadows:In(i.shadows),colorManagementEnabled:In(i.colorManagementEnabled),renderMode:In(i.renderMode),autoRender:In(i.autoRender),scheduler:n,mainStage:r,renderStage:s,autoRenderTask:a,shouldRender:()=>o.renderMode.current==="always"||o.renderMode.current==="on-demand"&&(e.frameInvalidated||e.autoInvalidations.size>0)||o.renderMode.current==="manual"&&e.advance};VC(o);const c=In({});return qn("threlte",o),qn("threlte-internal-context",e),qn("threlte-user-context",c),o},cd=typeof window<"u",XC=()=>{const i=In({width:0,height:0});if(!cd)return{parentSize:i,parentSizeAction:()=>{}};const e={childList:!0,subtree:!1,attributes:!1};let t;const n=o=>{r.disconnect(),s.disconnect(),r.observe(o),s.observe(o,e)},r=new ResizeObserver(([o])=>{const{width:c,height:l}=o.contentRect;c===i.current.width&&l===i.current.height||i.set({width:c,height:l})}),s=new MutationObserver(o=>{for(const c of o)for(const l of c.removedNodes)if(t===l&&t.parentElement){n(t.parentElement);return}}),a=o=>{t=o;const c=t.parentElement;c&&(i.set({width:c.clientWidth,height:c.clientHeight}),n(c))};return Bn(()=>{r.disconnect(),s.disconnect()}),{parentSize:i,parentSizeAction:a}};function Mx(i,e){const t=vn(i);let n=i;const r=t.subscribe(o=>n=o);return Bn(r),{...t,set:o=>{if((o==null?void 0:o.uuid)===(n==null?void 0:n.uuid))return;const c=n;t.set(o),e==null||e(o,c)},update:o=>{const c=o(n);if((c==null?void 0:c.uuid)===(n==null?void 0:n.uuid))return;const l=n;t.set(c),e==null||e(c,l)}}}const zs=()=>{const i=pi("threlte");if(i===void 0)throw new Error("No Threlte context found, are you using this hook inside of <Canvas>?");return i},ld=Symbol("threlte-hierarchical-parent-context"),bx=()=>pi(ld),qC=i=>qn(ld,i),YC=i=>{const e=Mx(i);return qn(ld,e),e};function ZC(i){let e;const t=i[7].default,n=vi(t,i,i[6],null);return{c(){n&&n.c()},l(r){n&&n.l(r)},m(r,s){n&&n.m(r,s),e=!0},p(r,[s]){n&&n.p&&(!e||s&64)&&Mi(n,t,r,r[6],e?yi(t,r[6],s,null):bi(r[6]),null)},i(r){e||(ke(n,r),e=!0)},o(r){Xe(n,r),e=!1},d(r){n&&n.d(r)}}}const KC=()=>({onChildMount:pi("threlte-hierarchical-object-on-mount"),onChildDestroy:pi("threlte-hierarchical-object-on-destroy")});function JC(i,e,t){var m;let n,{$$slots:r={},$$scope:s}=e,{object:a=void 0}=e,{onChildMount:o=void 0}=e;const c=g=>{o==null||o(g)};let{onChildDestroy:l=void 0}=e;const u=g=>{l==null||l(g)},{invalidate:h}=zs(),f=bx();zi(i,f,g=>t(5,n=g));let{parent:d=n}=e;const p=KC();a&&((m=p.onChildMount)==null||m.call(p,a),h());const _=Mx(a,(g,v)=>{var x,M;v&&((x=p.onChildDestroy)==null||x.call(p,v),h()),g&&((M=p.onChildMount)==null||M.call(p,g),h())});return Bn(()=>{var g;a&&((g=p.onChildDestroy)==null||g.call(p,a),h())}),qn("threlte-hierarchical-object-on-mount",c),qn("threlte-hierarchical-object-on-destroy",u),qC(_),i.$$set=g=>{"object"in g&&t(2,a=g.object),"onChildMount"in g&&t(3,o=g.onChildMount),"onChildDestroy"in g&&t(4,l=g.onChildDestroy),"parent"in g&&t(1,d=g.parent),"$$scope"in g&&t(6,s=g.$$scope)},i.$$.update=()=>{i.$$.dirty&32&&t(1,d=n),i.$$.dirty&4&&_.set(a)},[f,d,a,o,l,n,s,r]}class $C extends bn{constructor(e){super(),Mn(this,e,JC,ZC,un,{object:2,onChildMount:3,onChildDestroy:4,parent:1})}}function jC(i){let e;const t=i[1].default,n=vi(t,i,i[4],null);return{c(){n&&n.c()},l(r){n&&n.l(r)},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s&16)&&Mi(n,t,r,r[4],e?yi(t,r[4],s,null):bi(r[4]),null)},i(r){e||(ke(n,r),e=!0)},o(r){Xe(n,r),e=!1},d(r){n&&n.d(r)}}}function QC(i){let e,t;return e=new $C({props:{object:i[0],onChildMount:i[2],onChildDestroy:i[3],$$slots:{default:[jC]},$$scope:{ctx:i}}}),{c(){Kt(e.$$.fragment)},l(n){Jt(e.$$.fragment,n)},m(n,r){Ht(e,n,r),t=!0},p(n,[r]){const s={};r&1&&(s.object=n[0]),r&1&&(s.onChildMount=n[2]),r&1&&(s.onChildDestroy=n[3]),r&16&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(ke(e.$$.fragment,n),t=!0)},o(n){Xe(e.$$.fragment,n),t=!1},d(n){Gt(e,n)}}}function eR(i,e,t){let{$$slots:n={},$$scope:r}=e,{object:s}=e;const a=c=>s.add(c),o=c=>s.remove(c);return i.$$set=c=>{"object"in c&&t(0,s=c.object),"$$scope"in c&&t(4,r=c.$$scope)},[s,n,a,o,r]}class Sx extends bn{constructor(e){super(),Mn(this,e,eR,QC,un,{object:0})}}const dm=(i,e)=>{if(i===e)return!0;if(!i||!e)return!1;const t=i.length;if(e.length!==t)return!1;for(let n=0;n<t;n++)if(i[n]!==e[n])return!1;return!0},tR=()=>{qn("threlte-cache",[])},nR=()=>{const i=pi("threlte-cache");if(!i)throw new Error("No cache found. The cache can only be used in a child component to <Canvas>.");return{remember:(n,r)=>{for(const a of i)if(dm(r,a.keys)){if(a.error)throw a.error;if(a.promise)return a.promise}const s={promise:n(),keys:r,value:void 0};return i.push(s),s.promise.catch(a=>{s.error=a}),s.promise},clear:n=>{const r=i.findIndex(s=>dm(n,s.keys));r!==-1&&i.splice(r,1)}}},iR=Za.replace("dev",""),rR=Number.parseInt(iR),sR=i=>{const e=vn(void 0),t=(n,r)=>{i.renderer=new E0({powerPreference:"high-performance",canvas:n,antialias:!0,alpha:!0,...r}),e.set(i.renderer)};return Gn([i.colorManagementEnabled],([n])=>{Qe.enabled=n}),Gn([e,i.colorSpace],([n,r])=>{n&&(n.outputColorSpace=r)}),Gn([e,i.dpr],([n,r])=>{n==null||n.setPixelRatio(r)}),Gn([e,i.size],([n,r])=>{var s;(s=n==null?void 0:n.xr)!=null&&s.isPresenting||n==null||n.setSize(r.width,r.height)}),Gn([e,i.shadows],([n,r])=>{n&&(n.shadowMap.enabled=!!r,r&&r!==!0?n.shadowMap.type=r:r===!0&&(n.shadowMap.type=yl))}),Gn([e,i.toneMapping],([n,r])=>{n&&(n.toneMapping=r)}),Gn([e,i.useLegacyLights],([n,r])=>{n&&r&&(n.useLegacyLights=r)}),{createRenderer:t}},wx=()=>pi("threlte-internal-context");function pm(i){let e,t;return e=new Sx({props:{object:i[0].scene,$$slots:{default:[aR]},$$scope:{ctx:i}}}),{c(){Kt(e.$$.fragment)},l(n){Jt(e.$$.fragment,n)},m(n,r){Ht(e,n,r),t=!0},p(n,r){const s={};r&131072&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(ke(e.$$.fragment,n),t=!0)},o(n){Xe(e.$$.fragment,n),t=!1},d(n){Gt(e,n)}}}function aR(i){let e;const t=i[15].default,n=vi(t,i,i[17],null);return{c(){n&&n.c()},l(r){n&&n.l(r)},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s&131072)&&Mi(n,t,r,r[17],e?yi(t,r[17],s,null):bi(r[17]),null)},i(r){e||(ke(n,r),e=!0)},o(r){Xe(n,r),e=!1},d(r){n&&n.d(r)}}}function oR(i){let e,t,n,r,s=i[2]&&pm(i);return{c(){e=yt("canvas"),s&&s.c(),this.h()},l(a){e=Pt(a,"CANVAS",{class:!0});var o=Bt(e);s&&s.l(o),o.forEach(Oe),this.h()},h(){ct(e,"class","svelte-o3oskp")},m(a,o){lt(a,e,o),s&&s.m(e,null),i[16](e),t=!0,n||(r=$y(i[4].call(null,e)),n=!0)},p(a,[o]){a[2]?s?(s.p(a,o),o&4&&ke(s,1)):(s=pm(a),s.c(),ke(s,1),s.m(e,null)):s&&(Xi(),Xe(s,1,1,()=>{s=null}),qi())},i(a){t||(ke(s),t=!0)},o(a){Xe(s),t=!1},d(a){a&&Oe(e),s&&s.d(),i[16](null),n=!1,r()}}}function cR(i,e,t){let n,{$$slots:r={},$$scope:s}=e,{colorManagementEnabled:a=!0}=e,{colorSpace:o="srgb"}=e,{dpr:c=cd?window.devicePixelRatio:1}=e,{renderMode:l="on-demand"}=e,{rendererParameters:u=void 0}=e,{shadows:h=yl}=e,{size:f=void 0}=e,{toneMapping:d=yf}=e,{useLegacyLights:p=!(rR>=155)}=e,{autoRender:_=!0}=e,m,g=vn(!1);zi(i,g,y=>t(2,n=y));const v=vn(f),{parentSize:x,parentSizeAction:M}=XC(),A=WC({colorManagementEnabled:a,colorSpace:o,dpr:c,renderMode:l,parentSize:x,autoRender:_,shadows:h,toneMapping:d,useLegacyLights:p,userSize:v}),T=wx(),w=A;Gn([g,w.autoRender],([y,b])=>(y&&b?w.autoRenderTask.start():w.autoRenderTask.stop(),()=>{w.autoRenderTask.stop()})),tR();const{createRenderer:P}=sR(w);Ya(()=>{P(m,u),w.renderer.setAnimationLoop(y=>{T.dispose(),w.scheduler.run(y),T.resetFrameInvalidation()}),g.set(!0)}),Bn(()=>{var y;T.dispose(!0),w.scheduler.dispose(),(y=w.renderer)==null||y.dispose()});function U(y){Lr[y?"unshift":"push"](()=>{m=y,t(1,m)})}return i.$$set=y=>{"colorManagementEnabled"in y&&t(5,a=y.colorManagementEnabled),"colorSpace"in y&&t(6,o=y.colorSpace),"dpr"in y&&t(7,c=y.dpr),"renderMode"in y&&t(8,l=y.renderMode),"rendererParameters"in y&&t(9,u=y.rendererParameters),"shadows"in y&&t(10,h=y.shadows),"size"in y&&t(11,f=y.size),"toneMapping"in y&&t(12,d=y.toneMapping),"useLegacyLights"in y&&t(13,p=y.useLegacyLights),"autoRender"in y&&t(14,_=y.autoRender),"$$scope"in y&&t(17,s=y.$$scope)},i.$$.update=()=>{i.$$.dirty&2048&&v.set(f),i.$$.dirty&64&&w.colorSpace.set(o),i.$$.dirty&128&&w.dpr.set(c),i.$$.dirty&256&&w.renderMode.set(l),i.$$.dirty&16384&&w.autoRender.set(_),i.$$.dirty&1024&&w.shadows.set(h),i.$$.dirty&4096&&w.toneMapping.set(d)},[w,m,n,g,M,a,o,c,l,u,h,f,d,p,_,r,U,s]}class lR extends bn{constructor(e){super(),Mn(this,e,cR,oR,un,{colorManagementEnabled:5,colorSpace:6,dpr:7,renderMode:8,rendererParameters:9,shadows:10,size:11,toneMapping:12,useLegacyLights:13,autoRender:14,ctx:0})}get ctx(){return this.$$.ctx[0]}}function uR(i){let e;const t=i[9].default,n=vi(t,i,i[8],null);return{c(){n&&n.c()},l(r){n&&n.l(r)},m(r,s){n&&n.m(r,s),e=!0},p(r,[s]){n&&n.p&&(!e||s&256)&&Mi(n,t,r,r[8],e?yi(t,r[8],s,null):bi(r[8]),null)},i(r){e||(ke(n,r),e=!0)},o(r){Xe(n,r),e=!1},d(r){n&&n.d(r)}}}const mm="threlte-disposable-object-context";function hR(i,e,t){let n,r,{$$slots:s={},$$scope:a}=e;const{collectDisposableObjects:o,addDisposableObjects:c,removeDisposableObjects:l}=wx();let{object:u=void 0}=e,h=u,{dispose:f=void 0}=e;const d=pi(mm);zi(i,d,m=>t(7,r=m));const p=vn(f??r??!0);zi(i,p,m=>t(6,n=m)),qn(mm,p);let _=n?o(u):[];return c(_),Bn(()=>{l(_)}),i.$$set=m=>{"object"in m&&t(2,u=m.object),"dispose"in m&&t(3,f=m.dispose),"$$scope"in m&&t(8,a=m.$$scope)},i.$$.update=()=>{i.$$.dirty&136&&p.set(f??r??!0),i.$$.dirty&116&&u!==h&&(l(_),t(5,_=n?o(u):[]),c(_),t(4,h=u))},[d,p,u,f,h,_,n,r,a,s]}class fR extends bn{constructor(e){super(),Mn(this,e,hR,uR,un,{object:2,dispose:3})}}const dR=/^\s*class\s+/,pR=i=>typeof i!="function"?!1:dR.test(i.toString()),mR=i=>Array.isArray(i),gm=(i,e)=>pR(i)?mR(e)?new i(...e):new i:i,gR=i=>"isObject3D"in i,_m=i=>"dispose"in i,Ex=(i,e)=>{if(e.includes(".")){const t=e.split("."),n=t.pop();for(let r=0;r<t.length;r+=1)i=i[t[r]];return{target:i,key:n}}else return{target:i,key:e}},ih=Symbol("initialValueBeforeAttach"),_R=()=>{const{invalidate:i}=zs();let e=!1,t=ih,n,r,s;const a=(c,l,u)=>{if(o(),!u){const h=c;((h==null?void 0:h.isMaterial)||!1)&&(u="material"),((h==null?void 0:h.isBufferGeometry)||(h==null?void 0:h.isGeometry)||!1)&&(u="geometry")}if(u){if(typeof u=="function")n=u(l,c);else{const{target:h,key:f}=Ex(l,u);t=h[f],h[f]=c,r=h,s=f}e=!0,i()}},o=()=>{e&&(n?(n(),n=void 0):r&&s&&t!==ih&&(r[s]=t,t=ih,r=void 0,s=void 0),e=!1,i())};return Bn(()=>{o()}),{update:a}},xR=i=>i&&i.isCamera,Ax=i=>i&&i.isOrthographicCamera,Tx=i=>i&&i.isPerspectiveCamera,vR=i=>Tx(i)||Ax(i),yR=()=>{const{invalidate:i,size:e,camera:t}=zs();let n,r;Bn(()=>{r==null||r()});const s=c=>{n&&(Ax(n)?(n.left=c.width/-2,n.right=c.width/2,n.top=c.height/2,n.bottom=c.height/-2,n.updateProjectionMatrix(),n.updateMatrixWorld(),i()):Tx(n)&&(n.aspect=c.width/c.height,n.updateProjectionMatrix(),n.updateMatrixWorld(),i()))};return{update:(c,l)=>{if(r==null||r(),l||!vR(c)){n=void 0;return}n=c,r=e.subscribe(s)},makeDefaultCamera:(c,l)=>{!xR(c)||!l||(t.set(c),i())}}},Cx=()=>{const i=Si(),e=(n,r)=>{const s=i.$$.callbacks[n];s&&s.forEach(a=>{a(r)})};return Object.defineProperty(e,"hasEventListener",{value:n=>!!i.$$.callbacks[n],enumerable:!0}),e},MR=()=>{const i=Cx(),e=[];let t,n=!1;const r=()=>{e.forEach(o=>o()),e.length=0,i("create",{ref:t,cleanup:o=>{e.push(o)}})},s=a=>{t=a,n&&r()};return Ya(()=>{r(),n=!0}),Bn(()=>{e.forEach(a=>a())}),{updateRef:s}},xm=i=>!!(i!=null&&i.addEventListener),bR=()=>{const i=Cx(),e=Si(),t=c=>{c!=null&&c.type&&i(c.type,c)},n=(c,l)=>{xm(c)&&l.forEach(u=>{c.removeEventListener(u,t)})},r=(c,l)=>{xm(c)&&l.forEach(u=>{c.addEventListener(u,t)})},s=vn(),a=vn([]);return Gn([s,a],([c,l])=>(r(c,l),()=>n(c,l))),Ya(()=>{a.set(Object.keys(e.$$.callbacks))}),{updateRef:c=>{s.set(c)}}},SR=i=>{const t=pi("threlte-plugin-context");if(!t)return;const n=Object.values(t).map(l=>l(i)).filter(Boolean),r=n.flatMap(l=>l.pluginProps??[]);let s=[];return Bn(()=>{s.forEach(l=>l())}),{updateRef:l=>{s.forEach(u=>u()),s=[],n.forEach(u=>{var f;const h=(f=u.onRefChange)==null?void 0:f.call(u,l);h&&s.push(h)})},updateProps:l=>{n.forEach(u=>{var h;(h=u.onPropsChange)==null||h.call(u,l)})},updateRestProps:l=>{n.forEach(u=>{var h;(h=u.onRestPropsChange)==null||h.call(u,l)})},pluginsProps:r}},wR=new Set(["$$scope","$$slots","type","args","attach","instance"]),ER=new Set(["fov","aspect","near","far","left","right","top","bottom","zoom"]),AR=i=>typeof i=="string"||typeof i=="number"||typeof i=="boolean"||typeof i>"u"||i===null,vm=(i,e,t)=>{var n,r,s;return!Array.isArray(t)&&typeof t=="number"&&typeof((n=i[e])==null?void 0:n.setScalar)=="function"&&!((r=i[e])!=null&&r.isColor)?(a,o,c)=>{a[o].setScalar(c)}:typeof((s=i[e])==null?void 0:s.set)=="function"?Array.isArray(t)?(a,o,c)=>{a[o].set(...c)}:(a,o,c)=>{a[o].set(c)}:(a,o,c)=>{a[o]=c}},TR=()=>{const{invalidate:i}=zs(),e=new Map,t=new Map,n=(s,a,o,c)=>{if(AR(o)){const h=e.get(a);if(h&&h.instance===s&&h.value===o)return;e.set(a,{instance:s,value:o})}const{key:l,target:u}=Ex(s,a);if(o!=null){const h=t.get(a);if(h)h(u,l,o);else{const f=vm(u,l,o);t.set(a,f),f(u,l,o)}}else vm(u,l,o)(u,l,o);c.manualCamera||ER.has(l)&&(u.isPerspectiveCamera||u.isOrthographicCamera)&&u.updateProjectionMatrix()};return{updateProps:(s,a,o)=>{var c;for(const l in a)!wR.has(l)&&!((c=o.pluginsProps)!=null&&c.includes(l))&&n(s,l,a[l],o),i()}}},CR=i=>({ref:i&2}),ym=i=>({ref:i[1]}),RR=i=>({ref:i&2}),Mm=i=>({ref:i[1]});function bm(i){let e,t;return e=new fR({props:{object:i[1],dispose:i[0]}}),{c(){Kt(e.$$.fragment)},l(n){Jt(e.$$.fragment,n)},m(n,r){Ht(e,n,r),t=!0},p(n,r){const s={};r&2&&(s.object=n[1]),r&1&&(s.dispose=n[0]),e.$set(s)},i(n){t||(ke(e.$$.fragment,n),t=!0)},o(n){Xe(e.$$.fragment,n),t=!1},d(n){Gt(e,n)}}}function PR(i){let e;const t=i[10].default,n=vi(t,i,i[11],ym);return{c(){n&&n.c()},l(r){n&&n.l(r)},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s&2050)&&Mi(n,t,r,r[11],e?yi(t,r[11],s,CR):bi(r[11]),ym)},i(r){e||(ke(n,r),e=!0)},o(r){Xe(n,r),e=!1},d(r){n&&n.d(r)}}}function IR(i){let e,t;return e=new Sx({props:{object:i[1],$$slots:{default:[LR]},$$scope:{ctx:i}}}),{c(){Kt(e.$$.fragment)},l(n){Jt(e.$$.fragment,n)},m(n,r){Ht(e,n,r),t=!0},p(n,r){const s={};r&2&&(s.object=n[1]),r&2050&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(ke(e.$$.fragment,n),t=!0)},o(n){Xe(e.$$.fragment,n),t=!1},d(n){Gt(e,n)}}}function LR(i){let e;const t=i[10].default,n=vi(t,i,i[11],Mm);return{c(){n&&n.c()},l(r){n&&n.l(r)},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s&2050)&&Mi(n,t,r,r[11],e?yi(t,r[11],s,RR):bi(r[11]),Mm)},i(r){e||(ke(n,r),e=!0)},o(r){Xe(n,r),e=!1},d(r){n&&n.d(r)}}}function DR(i){let e=_m(i[1]),t,n,r,s,a,o,c=e&&bm(i);const l=[IR,PR],u=[];function h(f,d){return d&2&&(n=null),n==null&&(n=!!gR(f[1])),n?0:1}return r=h(i,-1),s=u[r]=l[r](i),{c(){c&&c.c(),t=gn(),s.c(),a=Jn()},l(f){c&&c.l(f),t=_n(f),s.l(f),a=Jn()},m(f,d){c&&c.m(f,d),lt(f,t,d),u[r].m(f,d),lt(f,a,d),o=!0},p(f,[d]){d&2&&(e=_m(f[1])),e?c?(c.p(f,d),d&2&&ke(c,1)):(c=bm(f),c.c(),ke(c,1),c.m(t.parentNode,t)):c&&(Xi(),Xe(c,1,1,()=>{c=null}),qi());let p=r;r=h(f,d),r===p?u[r].p(f,d):(Xi(),Xe(u[p],1,1,()=>{u[p]=null}),qi(),s=u[r],s?s.p(f,d):(s=u[r]=l[r](f),s.c()),ke(s,1),s.m(a.parentNode,a))},i(f){o||(ke(c),ke(s),o=!0)},o(f){Xe(c),Xe(s),o=!1},d(f){f&&(Oe(t),Oe(a)),c&&c.d(f),u[r].d(f)}}}function NR(i,e,t){const n=["is","args","attach","manual","makeDefault","dispose","ref"];let r=Nd(e,n),s,{$$slots:a={},$$scope:o}=e,{is:c}=e,{args:l=void 0}=e,{attach:u=void 0}=e,{manual:h=void 0}=e,{makeDefault:f=void 0}=e,{dispose:d=void 0}=e;const p=bx();zi(i,p,b=>t(9,s=b));const _=MR();let m=gm(c,l);_.updateRef(m);let g=!1;const v=()=>{if(!g){g=!0;return}t(1,m=gm(c,l)),_.updateRef(m)};let{ref:x=m}=e;const M=YC(m),A=SR({ref:m,props:e}),T=(A==null?void 0:A.pluginsProps)??[],w=TR(),P=yR(),U=_R(),y=bR();return i.$$set=b=>{t(23,e=wh(wh({},e),Dd(b))),t(22,r=Nd(e,n)),"is"in b&&t(4,c=b.is),"args"in b&&t(5,l=b.args),"attach"in b&&t(6,u=b.attach),"manual"in b&&t(7,h=b.manual),"makeDefault"in b&&t(8,f=b.makeDefault),"dispose"in b&&t(0,d=b.dispose),"ref"in b&&t(3,x=b.ref),"$$scope"in b&&t(11,o=b.$$scope)},i.$$.update=()=>{i.$$.dirty&48&&v(),i.$$.dirty&2&&t(3,x=m),i.$$.dirty&2&&M.set(m),w.updateProps(m,r,{manualCamera:h,pluginsProps:T}),i.$$.dirty&130&&P.update(m,h),i.$$.dirty&258&&P.makeDefaultCamera(m,f),i.$$.dirty&578&&U.update(m,s,u),i.$$.dirty&2&&y.updateRef(m),i.$$.dirty&2&&(A==null||A.updateRef(m)),A==null||A.updateProps(e),A==null||A.updateRestProps(r)},e=Dd(e),[d,m,p,x,c,l,u,h,f,s,a,o]}let Rx=class extends bn{constructor(e){super(),Mn(this,e,NR,DR,un,{is:4,args:5,attach:6,manual:7,makeDefault:8,dispose:0,ref:3})}};const UR={},OR=(i,e)=>{const t=UR[e]||UC[e];if(!t)throw new Error(`No Three.js module found for ${e}. Did you forget to extend the catalogue?`);return{...i,props:{...i.props,is:t}}},FR=i=>new Proxy(class{},{construct(e,[t]){const n=t;return new Rx(OR(n,i))}}),ys=new Proxy(class{},{construct(i,[e]){const t=e;return new Rx(t)},get(i,e){return FR(e)}});function BR(i,e,t){if(!cd)return{task:void 0,start:()=>{},stop:()=>{},started:v_(!1)};let n,r,s;Oi.isKey(i)?(n=i,r=e,s=t):(n=Symbol("useTask"),r=i,s=e);const a=zs();let o=a.mainStage;if(s){if(s.stage)if(Oi.isValue(s.stage))o=s.stage;else{const d=a.scheduler.getStage(s.stage);if(!d)throw new Error(`No stage found with key ${s.stage.toString()}`);o=d}else if(s.after)if(Array.isArray(s.after))for(let d=0;d<s.after.length;d++){const p=s.after[d];if(Oi.isValue(p)){o=p.stage;break}}else Oi.isValue(s.after)&&(o=s.after.stage);else if(s.before)if(Array.isArray(s.before))for(let d=0;d<s.before.length;d++){const p=s.before[d];if(Oi.isValue(p)){o=p.stage;break}}else Oi.isValue(s.before)&&(o=s.before.stage)}const{autoInvalidations:c}=pi("threlte-internal-context"),l=vn(!1),u=o.createTask(n,r,s),h=()=>{l.set(!0),((s==null?void 0:s.autoInvalidate)??!0)&&c.add(r),u.start()},f=()=>{l.set(!0),((s==null?void 0:s.autoInvalidate)??!0)&&c.delete(r),u.stop()};return(s==null?void 0:s.autoStart)??!0?h():f(),Bn(()=>{o&&o.removeTask(n)}),{task:u,start:h,stop:f,started:{subscribe:l.subscribe}}}const rh=i=>{const e=vn(void 0),t=vn(void 0);return i.then(n=>{e.set(n)}).catch(n=>{console.error("Error in asyncWritable:",n.message),t.set(n)}),Object.assign(Object.assign(i,e),{error:t,promise:i})};function zR(i,e){const{remember:t,clear:n}=nR();let r;const s=()=>{var l;const c=new i(...(e==null?void 0:e.args)??[]);return(l=e==null?void 0:e.extend)==null||l.call(e,c),c};return{load:(c,l)=>{const u=async h=>{var f;if(r||(r=s()),"loadAsync"in r){const d=await r.loadAsync(h,l==null?void 0:l.onProgress);return((f=l==null?void 0:l.transform)==null?void 0:f.call(l,d))??d}else return new Promise((d,p)=>{r.load(h,_=>{var m;return d(((m=l==null?void 0:l.transform)==null?void 0:m.call(l,_))??_)},_=>{var m;return(m=l==null?void 0:l.onProgress)==null?void 0:m.call(l,_)},p)})};if(Array.isArray(c)){const h=c.map(d=>t(()=>u(d),[i,d]));return rh(Promise.all(h))}else if(typeof c=="string"){const h=t(()=>u(c),[i,c]);return rh(h)}else{const h=Object.values(c).map(d=>t(()=>u(d),[i,d]));return rh(Promise.all(h).then(d=>Object.fromEntries(Object.entries(c).map(([p],_)=>[p,d[_]]))))}},clear:c=>{Array.isArray(c)?c.forEach(l=>{n([i,l])}):typeof c=="string"?n([i,c]):Object.entries(c).forEach(([l,u])=>{n([i,l,u])})},loader:r}}const kR=(i,e)=>{const t=zR(sx,e),{renderer:n}=zs();return t.load(i,{...e,transform:r=>{var s;return r.colorSpace=n.outputColorSpace,r.needsUpdate=!0,((s=e==null?void 0:e.transform)==null?void 0:s.call(e,r))??r}})};new R;new R;new R;new Pe;new Pe;new wt;`${Ie.logdepthbuf_pars_vertex}${Ie.fog_pars_vertex}${Ie.logdepthbuf_vertex}${Ie.fog_vertex}`;`${Ie.tonemapping_fragment}${Ie.colorspace_fragment}`;`${Ie.tonemapping_fragment}${Ie.colorspace_fragment}`;const VR=`

// A stack of uint32 indices can can store the indices for
// a perfectly balanced tree with a depth up to 31. Lower stack
// depth gets higher performance.
//
// However not all trees are balanced. Best value to set this to
// is the trees max depth.
#ifndef BVH_STACK_DEPTH
#define BVH_STACK_DEPTH 60
#endif

#ifndef INFINITY
#define INFINITY 1e20
#endif

// Utilities
uvec4 uTexelFetch1D( usampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

ivec4 iTexelFetch1D( isampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 texelFetch1D( sampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 textureSampleBarycoord( sampler2D tex, vec3 barycoord, uvec3 faceIndices ) {

	return
		barycoord.x * texelFetch1D( tex, faceIndices.x ) +
		barycoord.y * texelFetch1D( tex, faceIndices.y ) +
		barycoord.z * texelFetch1D( tex, faceIndices.z );

}

void ndcToCameraRay(
	vec2 coord, mat4 cameraWorld, mat4 invProjectionMatrix,
	out vec3 rayOrigin, out vec3 rayDirection
) {

	// get camera look direction and near plane for camera clipping
	vec4 lookDirection = cameraWorld * vec4( 0.0, 0.0, - 1.0, 0.0 );
	vec4 nearVector = invProjectionMatrix * vec4( 0.0, 0.0, - 1.0, 1.0 );
	float near = abs( nearVector.z / nearVector.w );

	// get the camera direction and position from camera matrices
	vec4 origin = cameraWorld * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec4 direction = invProjectionMatrix * vec4( coord, 0.5, 1.0 );
	direction /= direction.w;
	direction = cameraWorld * direction - origin;

	// slide the origin along the ray until it sits at the near clip plane position
	origin.xyz += direction.xyz * near / dot( direction, lookDirection );

	rayOrigin = origin.xyz;
	rayDirection = direction.xyz;

}
`,HR=`

#ifndef TRI_INTERSECT_EPSILON
#define TRI_INTERSECT_EPSILON 1e-5
#endif

// Raycasting
bool intersectsBounds( vec3 rayOrigin, vec3 rayDirection, vec3 boundsMin, vec3 boundsMax, out float dist ) {

	// https://www.reddit.com/r/opengl/comments/8ntzz5/fast_glsl_ray_box_intersection/
	// https://tavianator.com/2011/ray_box.html
	vec3 invDir = 1.0 / rayDirection;

	// find intersection distances for each plane
	vec3 tMinPlane = invDir * ( boundsMin - rayOrigin );
	vec3 tMaxPlane = invDir * ( boundsMax - rayOrigin );

	// get the min and max distances from each intersection
	vec3 tMinHit = min( tMaxPlane, tMinPlane );
	vec3 tMaxHit = max( tMaxPlane, tMinPlane );

	// get the furthest hit distance
	vec2 t = max( tMinHit.xx, tMinHit.yz );
	float t0 = max( t.x, t.y );

	// get the minimum hit distance
	t = min( tMaxHit.xx, tMaxHit.yz );
	float t1 = min( t.x, t.y );

	// set distance to 0.0 if the ray starts inside the box
	dist = max( t0, 0.0 );

	return t1 >= dist;

}

bool intersectsTriangle(
	vec3 rayOrigin, vec3 rayDirection, vec3 a, vec3 b, vec3 c,
	out vec3 barycoord, out vec3 norm, out float dist, out float side
) {

	// https://stackoverflow.com/questions/42740765/intersection-between-line-and-triangle-in-3d
	vec3 edge1 = b - a;
	vec3 edge2 = c - a;
	norm = cross( edge1, edge2 );

	float det = - dot( rayDirection, norm );
	float invdet = 1.0 / det;

	vec3 AO = rayOrigin - a;
	vec3 DAO = cross( AO, rayDirection );

	vec4 uvt;
	uvt.x = dot( edge2, DAO ) * invdet;
	uvt.y = - dot( edge1, DAO ) * invdet;
	uvt.z = dot( AO, norm ) * invdet;
	uvt.w = 1.0 - uvt.x - uvt.y;

	// set the hit information
	barycoord = uvt.wxy; // arranged in A, B, C order
	dist = uvt.z;
	side = sign( det );
	norm = side * normalize( norm );

	// add an epsilon to avoid misses between triangles
	uvt += vec4( TRI_INTERSECT_EPSILON );

	return all( greaterThanEqual( uvt, vec4( 0.0 ) ) );

}

bool intersectTriangles(
	// geometry info and triangle range
	sampler2D positionAttr, usampler2D indexAttr, uint offset, uint count,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// outputs
	inout float minDistance, inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	bool found = false;
	vec3 localBarycoord, localNormal;
	float localDist, localSide;
	for ( uint i = offset, l = offset + count; i < l; i ++ ) {

		uvec3 indices = uTexelFetch1D( indexAttr, i ).xyz;
		vec3 a = texelFetch1D( positionAttr, indices.x ).rgb;
		vec3 b = texelFetch1D( positionAttr, indices.y ).rgb;
		vec3 c = texelFetch1D( positionAttr, indices.z ).rgb;

		if (
			intersectsTriangle( rayOrigin, rayDirection, a, b, c, localBarycoord, localNormal, localDist, localSide )
			&& localDist < minDistance
		) {

			found = true;
			minDistance = localDist;

			faceIndices = uvec4( indices.xyz, i );
			faceNormal = localNormal;

			side = localSide;
			barycoord = localBarycoord;
			dist = localDist;

		}

	}

	return found;

}

bool intersectsBVHNodeBounds( vec3 rayOrigin, vec3 rayDirection, sampler2D bvhBounds, uint currNodeIndex, out float dist ) {

	uint cni2 = currNodeIndex * 2u;
	vec3 boundsMin = texelFetch1D( bvhBounds, cni2 ).xyz;
	vec3 boundsMax = texelFetch1D( bvhBounds, cni2 + 1u ).xyz;
	return intersectsBounds( rayOrigin, rayDirection, boundsMin, boundsMax, dist );

}

// use a macro to hide the fact that we need to expand the struct into separate fields
#define	bvhIntersectFirstHit(		bvh,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)	_bvhIntersectFirstHit(		bvh.position, bvh.index, bvh.bvhBounds, bvh.bvhContents,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)

bool _bvhIntersectFirstHit(
	// bvh info
	sampler2D bvh_position, usampler2D bvh_index, sampler2D bvh_bvhBounds, usampler2D bvh_bvhContents,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// output variables split into separate variables due to output precision
	inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	// stack needs to be twice as long as the deepest tree we expect because
	// we push both the left and right child onto the stack every traversal
	int ptr = 0;
	uint stack[ BVH_STACK_DEPTH ];
	stack[ 0 ] = 0u;

	float triangleDistance = INFINITY;
	bool found = false;
	while ( ptr > - 1 && ptr < BVH_STACK_DEPTH ) {

		uint currNodeIndex = stack[ ptr ];
		ptr --;

		// check if we intersect the current bounds
		float boundsHitDistance;
		if (
			! intersectsBVHNodeBounds( rayOrigin, rayDirection, bvh_bvhBounds, currNodeIndex, boundsHitDistance )
			|| boundsHitDistance > triangleDistance
		) {

			continue;

		}

		uvec2 boundsInfo = uTexelFetch1D( bvh_bvhContents, currNodeIndex ).xy;
		bool isLeaf = bool( boundsInfo.x & 0xffff0000u );

		if ( isLeaf ) {

			uint count = boundsInfo.x & 0x0000ffffu;
			uint offset = boundsInfo.y;

			found = intersectTriangles(
				bvh_position, bvh_index, offset, count,
				rayOrigin, rayDirection, triangleDistance,
				faceIndices, faceNormal, barycoord, side, dist
			) || found;

		} else {

			uint leftIndex = currNodeIndex + 1u;
			uint splitAxis = boundsInfo.x & 0x0000ffffu;
			uint rightIndex = boundsInfo.y;

			bool leftToRight = rayDirection[ splitAxis ] >= 0.0;
			uint c1 = leftToRight ? leftIndex : rightIndex;
			uint c2 = leftToRight ? rightIndex : leftIndex;

			// set c2 in the stack so we traverse it later. We need to keep track of a pointer in
			// the stack while we traverse. The second pointer added is the one that will be
			// traversed first
			ptr ++;
			stack[ ptr ] = c2;

			ptr ++;
			stack[ ptr ] = c1;

		}

	}

	return found;

}
`,GR=`
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`,WR=GR,XR=`
	${VR}
	${HR}
`;`${WR}${XR}${Ie.tonemapping_fragment}${Ie.colorspace_fragment}`;for(let i=0;i<256;i++)(i<16?"0":"")+i.toString(16);var Px={exports:{}};Px.exports=nu;Px.exports.default=nu;function nu(i,e,t){t=t||2;var n=e&&e.length,r=n?e[0]*t:i.length,s=Ix(i,0,r,t,!0),a=[];if(!s||s.next===s.prev)return a;var o,c,l,u,h,f,d;if(n&&(s=JR(i,e,s,t)),i.length>80*t){o=l=i[0],c=u=i[1];for(var p=t;p<r;p+=t)h=i[p],f=i[p+1],h<o&&(o=h),f<c&&(c=f),h>l&&(l=h),f>u&&(u=f);d=Math.max(l-o,u-c),d=d!==0?32767/d:0}return ka(s,a,t,o,c,d,0),a}function Ix(i,e,t,n,r){var s,a;if(r===Yh(i,e,t,n)>0)for(s=e;s<t;s+=n)a=Sm(s,i[s],i[s+1],a);else for(s=t-n;s>=e;s-=n)a=Sm(s,i[s],i[s+1],a);return a&&iu(a,a.next)&&(Ha(a),a=a.next),a}function Br(i,e){if(!i)return i;e||(e=i);var t=i,n;do if(n=!1,!t.steiner&&(iu(t,t.next)||gt(t.prev,t,t.next)===0)){if(Ha(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ka(i,e,t,n,r,s,a){if(i){!a&&s&&tP(i,n,r,s);for(var o=i,c,l;i.prev!==i.next;){if(c=i.prev,l=i.next,s?YR(i,n,r,s):qR(i)){e.push(c.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),Ha(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=ZR(Br(i),e,t),ka(i,e,t,n,r,s,2)):a===2&&KR(i,e,t,n,r,s):ka(Br(i),e,t,n,r,s,1);break}}}}function qR(i){var e=i.prev,t=i,n=i.next;if(gt(e,t,n)>=0)return!1;for(var r=e.x,s=t.x,a=n.x,o=e.y,c=t.y,l=n.y,u=r<s?r<a?r:a:s<a?s:a,h=o<c?o<l?o:l:c<l?c:l,f=r>s?r>a?r:a:s>a?s:a,d=o>c?o>l?o:l:c>l?c:l,p=n.next;p!==e;){if(p.x>=u&&p.x<=f&&p.y>=h&&p.y<=d&&Ms(r,o,s,c,a,l,p.x,p.y)&&gt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function YR(i,e,t,n){var r=i.prev,s=i,a=i.next;if(gt(r,s,a)>=0)return!1;for(var o=r.x,c=s.x,l=a.x,u=r.y,h=s.y,f=a.y,d=o<c?o<l?o:l:c<l?c:l,p=u<h?u<f?u:f:h<f?h:f,_=o>c?o>l?o:l:c>l?c:l,m=u>h?u>f?u:f:h>f?h:f,g=Xh(d,p,e,t,n),v=Xh(_,m,e,t,n),x=i.prevZ,M=i.nextZ;x&&x.z>=g&&M&&M.z<=v;){if(x.x>=d&&x.x<=_&&x.y>=p&&x.y<=m&&x!==r&&x!==a&&Ms(o,u,c,h,l,f,x.x,x.y)&&gt(x.prev,x,x.next)>=0||(x=x.prevZ,M.x>=d&&M.x<=_&&M.y>=p&&M.y<=m&&M!==r&&M!==a&&Ms(o,u,c,h,l,f,M.x,M.y)&&gt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;x&&x.z>=g;){if(x.x>=d&&x.x<=_&&x.y>=p&&x.y<=m&&x!==r&&x!==a&&Ms(o,u,c,h,l,f,x.x,x.y)&&gt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;M&&M.z<=v;){if(M.x>=d&&M.x<=_&&M.y>=p&&M.y<=m&&M!==r&&M!==a&&Ms(o,u,c,h,l,f,M.x,M.y)&&gt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function ZR(i,e,t){var n=i;do{var r=n.prev,s=n.next.next;!iu(r,s)&&Lx(r,n,n.next,s)&&Va(r,s)&&Va(s,r)&&(e.push(r.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),Ha(n),Ha(n.next),n=i=s),n=n.next}while(n!==i);return Br(n)}function KR(i,e,t,n,r,s){var a=i;do{for(var o=a.next.next;o!==a.prev;){if(a.i!==o.i&&rP(a,o)){var c=Dx(a,o);a=Br(a,a.next),c=Br(c,c.next),ka(a,e,t,n,r,s,0),ka(c,e,t,n,r,s,0);return}o=o.next}a=a.next}while(a!==i)}function JR(i,e,t,n){var r=[],s,a,o,c,l;for(s=0,a=e.length;s<a;s++)o=e[s]*n,c=s<a-1?e[s+1]*n:i.length,l=Ix(i,o,c,n,!1),l===l.next&&(l.steiner=!0),r.push(iP(l));for(r.sort($R),s=0;s<r.length;s++)t=jR(r[s],t);return t}function $R(i,e){return i.x-e.x}function jR(i,e){var t=QR(i,e);if(!t)return e;var n=Dx(t,i);return Br(n,n.next),Br(t,t.next)}function QR(i,e){var t=e,n=i.x,r=i.y,s=-1/0,a;do{if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){var o=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(o<=n&&o>s&&(s=o,a=t.x<t.next.x?t:t.next,o===n))return a}t=t.next}while(t!==e);if(!a)return null;var c=a,l=a.x,u=a.y,h=1/0,f;t=a;do n>=t.x&&t.x>=l&&n!==t.x&&Ms(r<u?n:s,r,l,u,r<u?s:n,r,t.x,t.y)&&(f=Math.abs(r-t.y)/(n-t.x),Va(t,i)&&(f<h||f===h&&(t.x>a.x||t.x===a.x&&eP(a,t)))&&(a=t,h=f)),t=t.next;while(t!==c);return a}function eP(i,e){return gt(i.prev,i,e.prev)<0&&gt(e.next,i,i.next)<0}function tP(i,e,t,n){var r=i;do r.z===0&&(r.z=Xh(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,nP(r)}function nP(i){var e,t,n,r,s,a,o,c,l=1;do{for(t=i,i=null,s=null,a=0;t;){for(a++,n=t,o=0,e=0;e<l&&(o++,n=n.nextZ,!!n);e++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||t.z<=n.z)?(r=t,t=t.nextZ,o--):(r=n,n=n.nextZ,c--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;t=n}s.nextZ=null,l*=2}while(a>1);return i}function Xh(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function iP(i){var e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Ms(i,e,t,n,r,s,a,o){return(r-a)*(e-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(n-o)}function rP(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!sP(i,e)&&(Va(i,e)&&Va(e,i)&&aP(i,e)&&(gt(i.prev,i,e.prev)||gt(i,e.prev,e))||iu(i,e)&&gt(i.prev,i,i.next)>0&&gt(e.prev,e,e.next)>0)}function gt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function iu(i,e){return i.x===e.x&&i.y===e.y}function Lx(i,e,t,n){var r=cc(gt(i,e,t)),s=cc(gt(i,e,n)),a=cc(gt(t,n,i)),o=cc(gt(t,n,e));return!!(r!==s&&a!==o||r===0&&oc(i,t,e)||s===0&&oc(i,n,e)||a===0&&oc(t,i,n)||o===0&&oc(t,e,n))}function oc(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function cc(i){return i>0?1:i<0?-1:0}function sP(i,e){var t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Lx(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Va(i,e){return gt(i.prev,i,i.next)<0?gt(i,e,i.next)>=0&&gt(i,i.prev,e)>=0:gt(i,e,i.prev)<0||gt(i,i.next,e)<0}function aP(i,e){var t=i,n=!1,r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Dx(i,e){var t=new qh(i.i,i.x,i.y),n=new qh(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Sm(i,e,t,n){var r=new qh(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Ha(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function qh(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}nu.deviation=function(i,e,t,n){var r=e&&e.length,s=r?e[0]*t:i.length,a=Math.abs(Yh(i,0,s,t));if(r)for(var o=0,c=e.length;o<c;o++){var l=e[o]*t,u=o<c-1?e[o+1]*t:i.length;a-=Math.abs(Yh(i,l,u,t))}var h=0;for(o=0;o<n.length;o+=3){var f=n[o]*t,d=n[o+1]*t,p=n[o+2]*t;h+=Math.abs((i[f]-i[p])*(i[d+1]-i[f+1])-(i[f]-i[d])*(i[p+1]-i[f+1]))}return a===0&&h===0?0:Math.abs((h-a)/a)};function Yh(i,e,t,n){for(var r=0,s=e,a=t-n;s<t;s+=n)r+=(i[a]-i[s])*(i[s+1]+i[a+1]),a=s;return r}nu.flatten=function(i){for(var e=i[0][0].length,t={vertices:[],holes:[],dimensions:e},n=0,r=0;r<i.length;r++){for(var s=0;s<i[r].length;s++)for(var a=0;a<e;a++)t.vertices.push(i[r][s][a]);r>0&&(n+=i[r-1].length,t.holes.push(n))}return t};new K;new K;var wm;(i=>{function e(r){let s=r.slice();return s.sort(i.POINT_COMPARATOR),i.makeHullPresorted(s)}i.makeHull=e;function t(r){if(r.length<=1)return r.slice();let s=[];for(let o=0;o<r.length;o++){const c=r[o];for(;s.length>=2;){const l=s[s.length-1],u=s[s.length-2];if((l.x-u.x)*(c.y-u.y)>=(l.y-u.y)*(c.x-u.x))s.pop();else break}s.push(c)}s.pop();let a=[];for(let o=r.length-1;o>=0;o--){const c=r[o];for(;a.length>=2;){const l=a[a.length-1],u=a[a.length-2];if((l.x-u.x)*(c.y-u.y)>=(l.y-u.y)*(c.x-u.x))a.pop();else break}a.push(c)}return a.pop(),s.length==1&&a.length==1&&s[0].x==a[0].x&&s[0].y==a[0].y?s:s.concat(a)}i.makeHullPresorted=t;function n(r,s){return r.x<s.x?-1:r.x>s.x?1:r.y<s.y?-1:r.y>s.y?1:0}i.POINT_COMPARATOR=n})(wm||(wm={}));function Em(i){return Object.prototype.toString.call(i)==="[object Date]"}function Zh(i,e,t,n){if(typeof t=="number"||Em(t)){const r=n-t,s=(t-e)/(i.dt||1/60),a=i.opts.stiffness*r,o=i.opts.damping*s,c=(a-o)*i.inv_mass,l=(s+c)*i.dt;return Math.abs(l)<i.opts.precision&&Math.abs(r)<i.opts.precision?n:(i.settled=!1,Em(t)?new Date(t.getTime()+l):t+l)}else{if(Array.isArray(t))return t.map((r,s)=>Zh(i,e[s],t[s],n[s]));if(typeof t=="object"){const r={};for(const s in t)r[s]=Zh(i,e[s],t[s],n[s]);return r}else throw new Error(`Cannot spring ${typeof t} values`)}}function sh(i,e={}){const t=vn(i),{stiffness:n=.15,damping:r=.8,precision:s=.01}=e;let a,o,c,l=i,u=i,h=1,f=0,d=!1;function p(m,g={}){u=m;const v=c={};return i==null||g.hard||_.stiffness>=1&&_.damping>=1?(d=!0,a=xa(),l=m,t.set(i=u),Promise.resolve()):(g.soft&&(f=1/((g.soft===!0?.5:+g.soft)*60),h=0),o||(a=xa(),d=!1,o=_l(x=>{if(d)return d=!1,o=null,!1;h=Math.min(h+f,1);const M={inv_mass:h,opts:_,settled:!0,dt:(x-a)*60/1e3},A=Zh(M,l,i,u);return a=x,l=i,t.set(i=A),M.settled&&(o=null),!M.settled})),new Promise(x=>{o.promise.then(()=>{v===c&&x()})}))}const _={set:p,update:(m,g)=>p(m(u,i),g),subscribe:t.subscribe,stiffness:n,damping:r,precision:s};return _}function oP(i){const e=i-1;return e*e*e+1}function cP(i){return{c:Ye,l:Ye,m:Ye,p:Ye,i:Ye,o:Ye,d:Ye}}function lP(i){let e,t;return e=new ys.Mesh({props:{scale:1.5,position:[i[2],2,0],geometry:i[7],"rotation.y":Math.PI/4*(i[1]/6)+i[2]/85,"rotation.x":Math.PI/4*(i[3]/3),$$slots:{default:[uP]},$$scope:{ctx:i}}}),{c(){Kt(e.$$.fragment)},l(n){Jt(e.$$.fragment,n)},m(n,r){Ht(e,n,r),t=!0},p(n,r){const s={};r&4&&(s.position=[n[2],2,0]),r&6&&(s["rotation.y"]=Math.PI/4*(n[1]/6)+n[2]/85),r&8&&(s["rotation.x"]=Math.PI/4*(n[3]/3)),r&8388608&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(ke(e.$$.fragment,n),t=!0)},o(n){Xe(e.$$.fragment,n),t=!1},d(n){Gt(e,n)}}}function uP(i){let e,t;return e=new ys.MeshStandardMaterial({props:{color:16777215,side:Dn,map:i[22],metalness:.75,roughness:.5,wireframe:!1}}),{c(){Kt(e.$$.fragment)},l(n){Jt(e.$$.fragment,n)},m(n,r){Ht(e,n,r),t=!0},p:Ye,i(n){t||(ke(e.$$.fragment,n),t=!0)},o(n){Xe(e.$$.fragment,n),t=!1},d(n){Gt(e,n)}}}function hP(i){return{c:Ye,l:Ye,m:Ye,p:Ye,i:Ye,o:Ye,d:Ye}}function fP(i){let e,t,n,r,s,a,o,c,l,u;e=new ys.PerspectiveCamera({props:{makeDefault:!0,position:[i[1],i[2]/4+Math.sin(i[0]/3)+i[3]/2,20+i[3]*-5],fov:90,"lookAt.y":.5}}),n=new ys.DirectionalLight({props:{position:[-10,10,30],castShadow:!0,intensity:3+Math.sin(i[0]/2),color:26112}}),s=new ys.DirectionalLight({props:{position:[10,10,30],castShadow:!0,intensity:3+Math.cos(i[0]*2),color:16711680}}),o=new ys.DirectionalLight({props:{position:[0,-10,20],castShadow:!0,intensity:5+Math.cos(i[0]),color:255}});let h={ctx:i,current:null,token:null,hasCatch:!1,pending:hP,then:lP,catch:cP,value:22,blocks:[,,,]};return xM(i[8],h),{c(){Kt(e.$$.fragment),t=gn(),Kt(n.$$.fragment),r=gn(),Kt(s.$$.fragment),a=gn(),Kt(o.$$.fragment),c=gn(),l=Jn(),h.block.c()},l(f){Jt(e.$$.fragment,f),t=_n(f),Jt(n.$$.fragment,f),r=_n(f),Jt(s.$$.fragment,f),a=_n(f),Jt(o.$$.fragment,f),c=_n(f),l=Jn(),h.block.l(f)},m(f,d){Ht(e,f,d),lt(f,t,d),Ht(n,f,d),lt(f,r,d),Ht(s,f,d),lt(f,a,d),Ht(o,f,d),lt(f,c,d),lt(f,l,d),h.block.m(f,h.anchor=d),h.mount=()=>l.parentNode,h.anchor=l,u=!0},p(f,[d]){i=f;const p={};d&15&&(p.position=[i[1],i[2]/4+Math.sin(i[0]/3)+i[3]/2,20+i[3]*-5]),e.$set(p);const _={};d&1&&(_.intensity=3+Math.sin(i[0]/2)),n.$set(_);const m={};d&1&&(m.intensity=3+Math.cos(i[0]*2)),s.$set(m);const g={};d&1&&(g.intensity=5+Math.cos(i[0])),o.$set(g),vM(h,i,d)},i(f){u||(ke(e.$$.fragment,f),ke(n.$$.fragment,f),ke(s.$$.fragment,f),ke(o.$$.fragment,f),ke(h.block),u=!0)},o(f){Xe(e.$$.fragment,f),Xe(n.$$.fragment,f),Xe(s.$$.fragment,f),Xe(o.$$.fragment,f);for(let d=0;d<3;d+=1){const p=h.blocks[d];Xe(p)}u=!1},d(f){f&&(Oe(t),Oe(r),Oe(a),Oe(c),Oe(l)),Gt(e,f),Gt(n,f),Gt(s,f),Gt(o,f),h.block.d(f),h.token=null,h=null}}}let fs=20,ds=10,dP=200,pP=100;function mP(i){return(i- -10)/10}function gP(i,e,t){let n,r,s,{m:a}=e,o=1;const c=new K;let l=sh(0,{stiffness:.02,damping:.9});zi(i,l,w=>t(1,n=w));let u=sh(0,{stiffness:.02,damping:.9});zi(i,u,w=>t(3,s=w));let h=sh(60,{stiffness:.06,damping:.9});zi(i,h,w=>t(2,r=w));const f=new Hr(fs,ds,dP,pP),d=f.getAttribute("position"),p=f.getAttribute("uv"),_=fs/ds;let m=0,g=1200,v=600,x=2;const M=kR("texture6.png",{transform:w=>{w.wrapS=on,w.wrapT=on,w.repeat.set(1,1),x=w.image.width/w.image.height,g=w.image.width,v=w.image.height;for(let P=0;P<d.count;P++){let U=d.getX(P),y=d.getY(P);A(U,y,P)}return w}});Ya(()=>{window.addEventListener("mousemove",T),h.set(0)});function A(w,P,U){let y,b;x=g/v,_>x?(y=(w+fs/2)/fs,b=(P+ds/2)/ds*(x/_)):(y=(w+fs/2)/fs*(_/x),b=(P+ds/2)/ds),p.setXY(U,y,b)}function T(w){const{clientX:P,clientY:U}=w;c.x=P/window.innerWidth*2-1,c.y=-(U/window.innerHeight)*2+1}return BR(w=>{if(!M)return!1;t(0,m+=w);for(let P=0;P<d.count;P++){let U=d.getX(P),y=d.getY(P),b=d.getZ(P);isNaN(o)&&(o=.5);const F=mP(U);U!==-10&&(b=(Math.sin(U+m*-1)*o/2+Math.sin(y/2+m*-1)*o/2)*F,b+=Math.sin(b*Math.sin(m/4)+y*Math.cos(m/3))*.2*F,isNaN(b)&&(b=0),isNaN(b)||d.setZ(P,b))}d.needsUpdate=!0,p.needsUpdate=!0,f.computeVertexNormals()}),i.$$set=w=>{"m"in w&&t(9,a=w.m)},i.$$.update=()=>{i.$$.dirty&512&&l.set(a.x),i.$$.dirty&512&&u.set(a.y)},[m,n,r,s,l,u,h,f,M,a]}class _P extends bn{constructor(e){super(),Mn(this,e,gP,fP,un,{m:9})}}function xP(i){let e,t;return e=new _P({props:{m:i[0]}}),{c(){Kt(e.$$.fragment)},l(n){Jt(e.$$.fragment,n)},m(n,r){Ht(e,n,r),t=!0},p(n,r){const s={};r&1&&(s.m=n[0]),e.$set(s)},i(n){t||(ke(e.$$.fragment,n),t=!0)},o(n){Xe(e.$$.fragment,n),t=!1},d(n){Gt(e,n)}}}function vP(i){let e,t,n,r,s,a;return t=new lR({props:{$$slots:{default:[xP]},$$scope:{ctx:i}}}),{c(){e=yt("div"),Kt(t.$$.fragment),this.h()},l(o){e=Pt(o,"DIV",{class:!0});var c=Bt(e);Jt(t.$$.fragment,c),c.forEach(Oe),this.h()},h(){ct(e,"class","w-full h-screen bg-black"),Wi(()=>i[4].call(e))},m(o,c){lt(o,e,c),Ht(t,e,null),n=l_(e,i[4].bind(e)),r=!0,s||(a=vc(e,"mousemove",i[3]),s=!0)},p(o,[c]){const l={};c&33&&(l.$$scope={dirty:c,ctx:o}),t.$set(l)},i(o){r||(ke(t.$$.fragment,o),r=!0)},o(o){Xe(t.$$.fragment,o),r=!1},d(o){o&&Oe(e),Gt(t),n(),s=!1,a()}}}function yP(i,e,t){let n={x:0,y:0};function r(c){t(0,n.x=c.clientX/s*2-1,n),t(0,n.y=c.clientY/a,n)}let s,a;function o(){s=this.clientWidth,a=this.clientHeight,t(1,s),t(2,a)}return[n,s,a,r,o]}let MP=class extends bn{constructor(e){super(),Mn(this,e,yP,vP,un,{})}};const bP=i=>({intersecting:i&1,entry:i&2,observer:i&4}),Am=i=>({intersecting:i[0],entry:i[1],observer:i[2]});function SP(i){let e;const t=i[9].default,n=vi(t,i,i[8],Am);return{c(){n&&n.c()},l(r){n&&n.l(r)},m(r,s){n&&n.m(r,s),e=!0},p(r,[s]){n&&n.p&&(!e||s&263)&&Mi(n,t,r,r[8],e?yi(t,r[8],s,bP):bi(r[8]),Am)},i(r){e||(ke(n,r),e=!0)},o(r){Xe(n,r),e=!1},d(r){n&&n.d(r)}}}function wP(i,e,t){let{$$slots:n={},$$scope:r}=e,{element:s=null}=e,{once:a=!1}=e,{intersecting:o=!1}=e,{root:c=null}=e,{rootMargin:l="0px"}=e,{threshold:u=0}=e,{entry:h=null}=e,{observer:f=null}=e;const d=dM();let p=null,_=null;const m=()=>{t(2,f=new IntersectionObserver(g=>{g.forEach(v=>{t(1,h=v),t(0,o=v.isIntersecting)})},{root:c,rootMargin:l,threshold:u}))};return Ya(()=>(m(),()=>{f&&(f.disconnect(),t(2,f=null))})),fM(async()=>{h!==null&&(d("observe",h),h.isIntersecting&&(d("intersect",h),s&&a&&(f==null||f.unobserve(s)))),await p_(),s!==null&&s!==_&&(f==null||f.observe(s),_!==null&&(f==null||f.unobserve(_)),_=s),p&&l!==p&&(f==null||f.disconnect(),_=null,m()),p=l}),i.$$set=g=>{"element"in g&&t(3,s=g.element),"once"in g&&t(4,a=g.once),"intersecting"in g&&t(0,o=g.intersecting),"root"in g&&t(5,c=g.root),"rootMargin"in g&&t(6,l=g.rootMargin),"threshold"in g&&t(7,u=g.threshold),"entry"in g&&t(1,h=g.entry),"observer"in g&&t(2,f=g.observer),"$$scope"in g&&t(8,r=g.$$scope)},[o,h,f,s,a,c,l,u,r,n]}class EP extends bn{constructor(e){super(),Mn(this,e,wP,SP,un,{element:3,once:4,intersecting:0,root:5,rootMargin:6,threshold:7,entry:1,observer:2})}}function AP(i){let e,t,n,r;return{c(){e=yt("div"),t=yt("img"),this.h()},l(s){e=Pt(s,"DIV",{class:!0});var a=Bt(e);t=Pt(a,"IMG",{src:!0}),a.forEach(Oe),this.h()},h(){Ky(t.src,n=i[2].image)||ct(t,"src",n),ct(e,"class",r="transition-all duration-1000 delay-300 translate-x-1/2 "+(i[1]?"out":"")+" svelte-1yfepx5")},m(s,a){lt(s,e,a),Ut(e,t),i[4](e)},p(s,a){a&2&&r!==(r="transition-all duration-1000 delay-300 translate-x-1/2 "+(s[1]?"out":"")+" svelte-1yfepx5")&&ct(e,"class",r)},d(s){s&&Oe(e),i[4](null)}}}function TP(i){let e,t,n,r,s,a=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mattis interdum
  augue nec sollicitudin. Etiam suscipit rutrum mauris eu laoreet. Cras
  tincidunt mollis enim quis molestie.`,o,c,l,u;function h(d){i[5](d)}let f={element:i[0],once:!0,$$slots:{default:[AP]},$$scope:{ctx:i}};return i[1]!==void 0&&(f.intersecting=i[1]),c=new EP({props:f}),Lr.push(()=>Ch(c,"intersecting",h)),{c(){e=yt("p"),t=Kn("Nael Swimwear "),n=Kn(i[1]),r=gn(),s=yt("p"),s.textContent=a,o=gn(),Kt(c.$$.fragment)},l(d){e=Pt(d,"P",{});var p=Bt(e);t=Gi(p,"Nael Swimwear "),n=Gi(p,i[1]),p.forEach(Oe),r=_n(d),s=Pt(d,"P",{"data-svelte-h":!0}),o_(s)!=="svelte-1p97f7k"&&(s.textContent=a),o=_n(d),Jt(c.$$.fragment,d)},m(d,p){lt(d,e,p),Ut(e,t),Ut(e,n),lt(d,r,p),lt(d,s,p),lt(d,o,p),Ht(c,d,p),u=!0},p(d,[p]){(!u||p&2)&&vl(n,d[1]);const _={};p&1&&(_.element=d[0]),p&67&&(_.$$scope={dirty:p,ctx:d}),!l&&p&2&&(l=!0,_.intersecting=d[1],Th(()=>l=!1)),c.$set(_)},i(d){u||(ke(c.$$.fragment,d),u=!0)},o(d){Xe(c.$$.fragment,d),u=!1},d(d){d&&(Oe(e),Oe(r),Oe(s),Oe(o)),Gt(c,d)}}}function CP(i,e,t){let n,r,{dump:s}=e,a=JSON.parse(s);function o(l){Lr[l?"unshift":"push"](()=>{n=l,t(0,n)})}function c(l){r=l,t(1,r)}return i.$$set=l=>{"dump"in l&&t(3,s=l.dump)},[n,r,a,s,o,c]}let RP=class extends bn{constructor(e){super(),Mn(this,e,CP,TP,un,{dump:3})}};function Tm(i,e,t){const n=i.slice();return n[4]=e[t],n}function Cm(i){let e,t=i[4].post_title+"",n,r;return{c(){e=yt("a"),n=Kn(t),r=gn(),this.h()},l(s){e=Pt(s,"A",{href:!0,class:!0});var a=Bt(e);n=Gi(a,t),r=_n(a),a.forEach(Oe),this.h()},h(){ct(e,"href",i[4].permalink),ct(e,"class","whitespace-nowrap flex items-center first-of-type:rounded-t-md last-of-type:rounded-b-md text-left text-sm hover:text-white")},m(s,a){lt(s,e,a),Ut(e,n),Ut(e,r)},p:Ye,d(s){s&&Oe(e)}}}function PP(i){let e,t,n,r,s,a="Menu",o,c,l=Yi(i[1].items),u=[];for(let h=0;h<l.length;h+=1)u[h]=Cm(Tm(i,l,h));return{c(){e=yt("div"),t=yt("div");for(let h=0;h<u.length;h+=1)u[h].c();r=gn(),s=yt("div"),s.textContent=a,this.h()},l(h){e=Pt(h,"DIV",{class:!0});var f=Bt(e);t=Pt(f,"DIV",{class:!0});var d=Bt(t);for(let p=0;p<u.length;p+=1)u[p].l(d);d.forEach(Oe),r=_n(f),s=Pt(f,"DIV",{class:!0,"data-svelte-h":!0}),o_(s)!=="svelte-nsmth8"&&(s.textContent=a),f.forEach(Oe),this.h()},h(){ct(t,"class",n="flex gap-3 overflow-hidden transition-all duration-1000 w-auto "+(i[0]?"max-w-screen-lg pl-3":"max-w-0")),ct(s,"class","px-3 py-1.5 cursor-pointer"),ct(e,"class","relative flex justify-end rounded-full bg-white text-black px-2 m-2")},m(h,f){lt(h,e,f),Ut(e,t);for(let d=0;d<u.length;d+=1)u[d]&&u[d].m(t,null);Ut(e,r),Ut(e,s),o||(c=vc(s,"click",i[3]),o=!0)},p(h,[f]){if(f&2){l=Yi(h[1].items);let d;for(d=0;d<l.length;d+=1){const p=Tm(h,l,d);u[d]?u[d].p(p,f):(u[d]=Cm(p),u[d].c(),u[d].m(t,null))}for(;d<u.length;d+=1)u[d].d(1);u.length=l.length}f&1&&n!==(n="flex gap-3 overflow-hidden transition-all duration-1000 w-auto "+(h[0]?"max-w-screen-lg pl-3":"max-w-0"))&&ct(t,"class",n)},i:Ye,o:Ye,d(h){h&&Oe(e),a_(u,h),o=!1,c()}}}function IP(i,e,t){let{dump:n}=e,r=JSON.parse(n);console.log(r);let s=!1;const a=()=>{t(0,s=!s)};return i.$$set=o=>{"dump"in o&&t(2,n=o.dump)},[s,r,n,a]}let LP=class extends bn{constructor(e){super(),Mn(this,e,IP,PP,un,{dump:2})}};function DP(i,{from:e,to:t},n={}){const r=getComputedStyle(i),s=r.transform==="none"?"":r.transform,[a,o]=r.transformOrigin.split(" ").map(parseFloat),c=e.left+e.width*a/t.width-(t.left+a),l=e.top+e.height*o/t.height-(t.top+o),{delay:u=0,duration:h=d=>Math.sqrt(d)*120,easing:f=oP}=n;return{delay:u,duration:kr(h)?h(Math.sqrt(c*c+l*l)):h,easing:f,css:(d,p)=>{const _=p*c,m=p*l,g=d+p*e.width/t.width,v=d+p*e.height/t.height;return`transform: ${s} translate(${_}px, ${m}px) scale(${g}, ${v});`}}}function Rm(i,{delay:e=0,duration:t=400,easing:n=gl}={}){const r=+getComputedStyle(i).opacity;return{delay:e,duration:t,easing:n,css:s=>`opacity: ${s*r}`}}function Pm(i,e,t){const n=i.slice();return n[18]=e[t],n}function Im(i,e,t){const n=i.slice();return n[21]=e[t][0],n[22]=e[t][1],n}const NP=i=>({idx:i&1024,item:i&1024}),Lm=i=>({idx:i[22],item:i[21]});function Dm(i,e,t){const n=i.slice();return n[21]=e[t][0],n[22]=e[t][1],n}const UP=i=>({idx:i&1024,item:i&1024}),Nm=i=>({idx:i[22],item:i[21]});function OP(i){let e=[],t=new Map,n,r,s=Yi(i[18]);const a=o=>o[6](o[21]);for(let o=0;o<s.length;o+=1){let c=Im(i,s,o),l=a(c);t.set(l,e[o]=Um(l,c))}return{c(){for(let o=0;o<e.length;o+=1)e[o].c();n=Jn()},l(o){for(let c=0;c<e.length;c+=1)e[c].l(o);n=Jn()},m(o,c){for(let l=0;l<e.length;l+=1)e[l]&&e[l].m(o,c);lt(o,n,c),r=!0},p(o,c){c&33856&&(s=Yi(o[18]),Xi(),e=x_(e,c,a,1,o,s,t,n.parentNode,__,Um,n,Im),qi())},i(o){if(!r){for(let c=0;c<s.length;c+=1)ke(e[c]);r=!0}},o(o){for(let c=0;c<e.length;c+=1)Xe(e[c]);r=!1},d(o){o&&Oe(n);for(let c=0;c<e.length;c+=1)e[c].d(o)}}}function FP(i){let e=[],t=new Map,n,r,s=Yi(i[18]);const a=o=>o[6](o[21]);for(let o=0;o<s.length;o+=1){let c=Dm(i,s,o),l=a(c);t.set(l,e[o]=Om(l,c))}return{c(){for(let o=0;o<e.length;o+=1)e[o].c();n=Jn()},l(o){for(let c=0;c<e.length;c+=1)e[c].l(o);n=Jn()},m(o,c){for(let l=0;l<e.length;l+=1)e[l]&&e[l].m(o,c);lt(o,n,c),r=!0},p(o,c){if(c&33872){s=Yi(o[18]),Xi();for(let l=0;l<e.length;l+=1)e[l].r();e=x_(e,c,a,1,o,s,t,n.parentNode,yM,Om,n,Dm);for(let l=0;l<e.length;l+=1)e[l].a();qi()}},i(o){if(!r){for(let c=0;c<s.length;c+=1)ke(e[c]);r=!0}},o(o){for(let c=0;c<e.length;c+=1)Xe(e[c]);r=!1},d(o){o&&Oe(n);for(let c=0;c<e.length;c+=1)e[c].d(o)}}}function BP(i){let e,t=i[21]+"",n,r;return{c(){e=yt("span"),n=Kn(t),r=gn(),this.h()},l(s){e=Pt(s,"SPAN",{class:!0});var a=Bt(e);n=Gi(a,t),a.forEach(Oe),r=_n(s),this.h()},h(){ct(e,"class","svelte-b2jtby")},m(s,a){lt(s,e,a),Ut(e,n),lt(s,r,a)},p(s,a){a&1024&&t!==(t=s[21]+"")&&vl(n,t)},d(s){s&&(Oe(e),Oe(r))}}}function Um(i,e){let t,n;const r=e[16].default,s=vi(r,e,e[15],Lm),a=s||BP(e);return{key:i,first:null,c(){t=Jn(),a&&a.c(),this.h()},l(o){t=Jn(),a&&a.l(o),this.h()},h(){this.first=t},m(o,c){lt(o,t,c),a&&a.m(o,c),n=!0},p(o,c){e=o,s?s.p&&(!n||c&33792)&&Mi(s,r,e,e[15],n?yi(r,e[15],c,NP):bi(e[15]),Lm):a&&a.p&&(!n||c&1024)&&a.p(e,n?c:-1)},i(o){n||(ke(a,o),n=!0)},o(o){Xe(a,o),n=!1},d(o){o&&Oe(t),a&&a.d(o)}}}function zP(i){let e,t=i[21]+"",n;return{c(){e=yt("span"),n=Kn(t),this.h()},l(r){e=Pt(r,"SPAN",{class:!0});var s=Bt(e);n=Gi(s,t),s.forEach(Oe),this.h()},h(){ct(e,"class","svelte-b2jtby")},m(r,s){lt(r,e,s),Ut(e,n)},p(r,s){s&1024&&t!==(t=r[21]+"")&&vl(n,t)},d(r){r&&Oe(e)}}}function Om(i,e){let t,n,r,s,a,o=Ye,c;const l=e[16].default,u=vi(l,e,e[15],Nm),h=u||zP(e);return{key:i,first:null,c(){t=yt("div"),h&&h.c(),n=gn(),this.h()},l(f){t=Pt(f,"DIV",{class:!0});var d=Bt(t);h&&h.l(d),n=_n(d),d.forEach(Oe),this.h()},h(){ct(t,"class","svelte-b2jtby"),this.first=t},m(f,d){lt(f,t,d),h&&h.m(t,null),Ut(t,n),c=!0},p(f,d){e=f,u?u.p&&(!c||d&33792)&&Mi(u,l,e,e[15],c?yi(l,e[15],d,UP):bi(e[15]),Nm):h&&h.p&&(!c||d&1024)&&h.p(e,c?d:-1)},r(){a=t.getBoundingClientRect()},f(){hM(t),o(),h_(t,a)},a(){o(),o=uM(t,a,DP,{duration:e[4]})},i(f){c||(ke(h,f),f&&Wi(()=>{c&&(s&&s.end(1),r=gM(t,Rm,{delay:100,duration:e[4]}),r.start())}),c=!0)},o(f){Xe(h,f),r&&r.invalidate(),f&&(s=_M(t,Rm,{delay:0,duration:e[4]})),c=!1},d(f){f&&Oe(t),h&&h.d(f),f&&s&&s.end()}}}function Fm(i){let e,t,n,r,s,a;const o=[FP,OP],c=[];function l(u,h){return u[2]?0:1}return t=l(i),n=c[t]=o[t](i),{c(){e=yt("div"),n.c(),r=gn(),this.h()},l(u){e=Pt(u,"DIV",{class:!0,style:!0});var h=Bt(e);n.l(h),r=_n(h),h.forEach(Oe),this.h()},h(){ct(e,"class",s="col "+i[3]+" svelte-b2jtby"),po(e,"gap",i[5]+"px"),po(e,"max-width",i[7]+"px")},m(u,h){lt(u,e,h),c[t].m(e,null),Ut(e,r),a=!0},p(u,h){let f=t;t=l(u),t===f?c[t].p(u,h):(Xi(),Xe(c[f],1,1,()=>{c[f]=null}),qi(),n=c[t],n?n.p(u,h):(n=c[t]=o[t](u),n.c()),ke(n,1),n.m(e,r)),(!a||h&8&&s!==(s="col "+u[3]+" svelte-b2jtby"))&&ct(e,"class",s),(!a||h&32)&&po(e,"gap",u[5]+"px"),(!a||h&128)&&po(e,"max-width",u[7]+"px")},i(u){a||(ke(n),a=!0)},o(u){Xe(n),a=!1},d(u){u&&Oe(e),c[t].d()}}}function kP(i){let e,t,n,r,s,a=Yi(i[10]),o=[];for(let l=0;l<a.length;l+=1)o[l]=Fm(Pm(i,a,l));const c=l=>Xe(o[l],1,1,()=>{o[l]=null});return{c(){e=yt("div");for(let l=0;l<o.length;l+=1)o[l].c();this.h()},l(l){e=Pt(l,"DIV",{class:!0,style:!0});var u=Bt(e);for(let h=0;h<o.length;h+=1)o[h].l(u);u.forEach(Oe),this.h()},h(){ct(e,"class",t="masonry "+i[9]+" svelte-b2jtby"),ct(e,"style",n="gap: "+i[5]+"px; "+i[8]),Wi(()=>i[17].call(e))},m(l,u){lt(l,e,u);for(let h=0;h<o.length;h+=1)o[h]&&o[h].m(e,null);r=l_(e,i[17].bind(e)),s=!0},p(l,[u]){if(u&33980){a=Yi(l[10]);let h;for(h=0;h<a.length;h+=1){const f=Pm(l,a,h);o[h]?(o[h].p(f,u),ke(o[h],1)):(o[h]=Fm(f),o[h].c(),ke(o[h],1),o[h].m(e,null))}for(Xi(),h=a.length;h<o.length;h+=1)c(h);qi()}(!s||u&512&&t!==(t="masonry "+l[9]+" svelte-b2jtby"))&&ct(e,"class",t),(!s||u&288&&n!==(n="gap: "+l[5]+"px; "+l[8]))&&ct(e,"style",n)},i(l){if(!s){for(let u=0;u<a.length;u+=1)ke(o[u]);s=!0}},o(l){o=o.filter(Boolean);for(let u=0;u<o.length;u+=1)Xe(o[u]);s=!1},d(l){l&&Oe(e),a_(o,l),r()}}}function VP(i,e,t){let n,r,{$$slots:s={},$$scope:a}=e,{animate:o=!0}=e,{columnClass:c=""}=e,{duration:l=200}=e,{gap:u=20}=e,{getId:h=A=>typeof A=="number"||typeof A=="string"?A:A[f]}=e,{idKey:f="id"}=e,{items:d}=e,{masonryHeight:p=0}=e,{masonryWidth:_=0}=e,{maxColWidth:m=500}=e,{minColWidth:g=330}=e,{style:v=""}=e,{class:x=""}=e;function M(){_=this.clientWidth,p=this.clientHeight,t(0,_),t(1,p)}return i.$$set=A=>{"animate"in A&&t(2,o=A.animate),"columnClass"in A&&t(3,c=A.columnClass),"duration"in A&&t(4,l=A.duration),"gap"in A&&t(5,u=A.gap),"getId"in A&&t(6,h=A.getId),"idKey"in A&&t(11,f=A.idKey),"items"in A&&t(12,d=A.items),"masonryHeight"in A&&t(1,p=A.masonryHeight),"masonryWidth"in A&&t(0,_=A.masonryWidth),"maxColWidth"in A&&t(7,m=A.maxColWidth),"minColWidth"in A&&t(13,g=A.minColWidth),"style"in A&&t(8,v=A.style),"class"in A&&t(9,x=A.class),"$$scope"in A&&t(15,a=A.$$scope)},i.$$.update=()=>{i.$$.dirty&12321&&t(14,n=Math.min(d.length,Math.floor(_/(g+u))||1)),i.$$.dirty&20480&&t(10,r=d.reduce((A,T,w)=>(A[w%A.length].push([T,w]),A),Array(n).fill(null).map(()=>[])))},[_,p,o,c,l,u,h,m,v,x,r,f,d,g,n,a,s,M]}class HP extends bn{constructor(e){super(),Mn(this,e,VP,kP,un,{animate:2,columnClass:3,duration:4,gap:5,getId:6,idKey:11,items:12,masonryHeight:1,masonryWidth:0,maxColWidth:7,minColWidth:13,style:8,class:9})}}function GP(i){let e,t,n=i[0].item.post_title+"",r,s,a,o,c,l;return{c(){e=yt("div"),t=yt("div"),r=Kn(n),s=gn(),a=yt("a"),o=Kn("View more"),this.h()},l(u){e=Pt(u,"DIV",{class:!0});var h=Bt(e);t=Pt(h,"DIV",{class:!0});var f=Bt(t);r=Gi(f,n),f.forEach(Oe),s=_n(h),a=Pt(h,"A",{href:!0,class:!0});var d=Bt(a);o=Gi(d,"View more"),d.forEach(Oe),h.forEach(Oe),this.h()},h(){ct(t,"class","text-2xl"),ct(a,"href",c=i[0].item.permalink),ct(a,"class","text-zinc-500"),ct(e,"class",l="bg-zinc-800 rounded-xl p-8 "+i[1])},m(u,h){lt(u,e,h),Ut(e,t),Ut(t,r),Ut(e,s),Ut(e,a),Ut(a,o)},p(u,[h]){h&1&&n!==(n=u[0].item.post_title+"")&&vl(r,n),h&1&&c!==(c=u[0].item.permalink)&&ct(a,"href",c),h&2&&l!==(l="bg-zinc-800 rounded-xl p-8 "+u[1])&&ct(e,"class",l)},i:Ye,o:Ye,d(u){u&&Oe(e)}}}function WP(i,e,t){let{item:n}=e,r="";return n.size=="small"?r="h-[300px]":n.size=="big"&&(r="h-[500px]"),i.$$set=s=>{"item"in s&&t(0,n=s.item)},[n,r]}class XP extends bn{constructor(e){super(),Mn(this,e,WP,GP,un,{item:0})}}function qP(i){let e,t;return e=new XP({props:{item:i[10]}}),{c(){Kt(e.$$.fragment)},l(n){Jt(e.$$.fragment,n)},m(n,r){Ht(e,n,r),t=!0},p(n,r){const s={};r&1024&&(s.item=n[10]),e.$set(s)},i(n){t||(ke(e.$$.fragment,n),t=!0)},o(n){Xe(e.$$.fragment,n),t=!1},d(n){Gt(e,n)}}}function YP(i){let e,t,n,r,s;function a(l){i[7](l)}function o(l){i[8](l)}let c={items:i[2],minColWidth:i[3],maxColWidth:i[4],gap:i[5],animate:!0,duration:200,$$slots:{default:[qP,({item:l})=>({10:l}),({item:l})=>l?1024:0]},$$scope:{ctx:i}};return i[0]!==void 0&&(c.masonryWidth=i[0]),i[1]!==void 0&&(c.masonryHeight=i[1]),t=new HP({props:c}),Lr.push(()=>Ch(t,"masonryWidth",a)),Lr.push(()=>Ch(t,"masonryHeight",o)),{c(){e=yt("div"),Kt(t.$$.fragment),this.h()},l(l){e=Pt(l,"DIV",{class:!0});var u=Bt(e);Jt(t.$$.fragment,u),u.forEach(Oe),this.h()},h(){ct(e,"class","w-full text-white px-[20px]")},m(l,u){lt(l,e,u),Ht(t,e,null),s=!0},p(l,[u]){const h={};u&4&&(h.items=l[2]),u&3072&&(h.$$scope={dirty:u,ctx:l}),!n&&u&1&&(n=!0,h.masonryWidth=l[0],Th(()=>n=!1)),!r&&u&2&&(r=!0,h.masonryHeight=l[1],Th(()=>r=!1)),t.$set(h)},i(l){s||(ke(t.$$.fragment,l),s=!0)},o(l){Xe(t.$$.fragment,l),s=!1},d(l){l&&Oe(e),Gt(t)}}}function ZP(i,e,t){let n,{dump:r}=e,s=JSON.parse(r);console.log(s);let[a,o,c]=[520,900,20],l,u;function h(d){l=d,t(0,l)}function f(d){u=d,t(1,u)}return i.$$set=d=>{"dump"in d&&t(6,r=d.dump)},t(2,n=s.items.map((d,p)=>({...d,id:p}))),[l,u,n,a,o,c,r,h,f]}class KP extends bn{constructor(e){super(),Mn(this,e,ZP,YP,un,{dump:6})}}let Bm={Flag:MP,WorkBrief:RP,Menu:LP,Masonry:KP},ah=[],zm=0;function km(){ah.forEach(e=>{e.$destroy()}),ah=[];const i=document.querySelectorAll(".bendblock");i.length>0&&i.forEach(e=>{if(typeof Bm[e.dataset.component]<"u"){let t=e.dataset.dump||"{}";ah.push(new Bm[e.dataset.component]({target:e,hydrate:!0,props:{dump:t}}))}}),window.Alpine=Xy,window.Alpine.data("dropdown",()=>({open:!0,toggle(){this.open=!this.open}})),window.Alpine.data("menu",()=>({open:!1,openMenu(){this.open=!0},closeMenu(){this.open=!1}})),Yy(),window.Alpine.start()}typeof wp<"u"&&typeof wp.blockEditor<"u"?wp.domReady(()=>{const{select:i,subscribe:e}=wp.data;e(()=>{const t=i("core/block-editor").getBlocks();t.length&&zm!=t.length&&(zm=t.length,setTimeout(()=>{km()},2e3))})}):document.addEventListener("DOMContentLoaded",km);
