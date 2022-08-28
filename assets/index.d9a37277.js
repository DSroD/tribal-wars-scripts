(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=t(a);fetch(a.href,i)}})();var Te,x,yr,Ce,lt,kr,Be={},xr=[],Ha=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function X(e,n){for(var t in n)e[t]=n[t];return e}function wr(e){var n=e.parentNode;n&&n.removeChild(e)}function R(e,n,t){var r,a,i,o={};for(i in n)i=="key"?r=n[i]:i=="ref"?a=n[i]:o[i]=n[i];if(arguments.length>2&&(o.children=arguments.length>3?Te.call(arguments,2):t),typeof e=="function"&&e.defaultProps!=null)for(i in e.defaultProps)o[i]===void 0&&(o[i]=e.defaultProps[i]);return Oe(e,o,r,a,null)}function Oe(e,n,t,r,a){var i={type:e,props:n,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:a==null?++yr:a};return a==null&&x.vnode!=null&&x.vnode(i),i}function Wa(){return{current:null}}function D(e){return e.children}function W(e,n){this.props=e,this.context=n}function he(e,n){if(n==null)return e.__?he(e.__,e.__.__k.indexOf(e)+1):null;for(var t;n<e.__k.length;n++)if((t=e.__k[n])!=null&&t.__e!=null)return t.__e;return typeof e.type=="function"?he(e):null}function Ar(e){var n,t;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if((t=e.__k[n])!=null&&t.__e!=null){e.__e=e.__c.base=t.__e;break}return Ar(e)}}function _n(e){(!e.__d&&(e.__d=!0)&&Ce.push(e)&&!Ye.__r++||lt!==x.debounceRendering)&&((lt=x.debounceRendering)||setTimeout)(Ye)}function Ye(){for(var e;Ye.__r=Ce.length;)e=Ce.sort(function(n,t){return n.__v.__b-t.__v.__b}),Ce=[],e.some(function(n){var t,r,a,i,o,l;n.__d&&(o=(i=(t=n).__v).__e,(l=t.__P)&&(r=[],(a=X({},i)).__v=i.__v+1,Un(l,i,a,t.__n,l.ownerSVGElement!==void 0,i.__h!=null?[o]:null,r,o==null?he(i):o,i.__h),Er(r,i),i.__e!=o&&Ar(i)))})}function Sr(e,n,t,r,a,i,o,l,u,d){var c,p,v,s,m,f,h,g=r&&r.__k||xr,y=g.length;for(t.__k=[],c=0;c<n.length;c++)if((s=t.__k[c]=(s=n[c])==null||typeof s=="boolean"?null:typeof s=="string"||typeof s=="number"||typeof s=="bigint"?Oe(null,s,null,null,s):Array.isArray(s)?Oe(D,{children:s},null,null,null):s.__b>0?Oe(s.type,s.props,s.key,null,s.__v):s)!=null){if(s.__=t,s.__b=t.__b+1,(v=g[c])===null||v&&s.key==v.key&&s.type===v.type)g[c]=void 0;else for(p=0;p<y;p++){if((v=g[p])&&s.key==v.key&&s.type===v.type){g[p]=void 0;break}v=null}Un(e,s,v=v||Be,a,i,o,l,u,d),m=s.__e,(p=s.ref)&&v.ref!=p&&(h||(h=[]),v.ref&&h.push(v.ref,null,s),h.push(p,s.__c||m,s)),m!=null?(f==null&&(f=m),typeof s.type=="function"&&s.__k===v.__k?s.__d=u=Cr(s,u,e):u=Or(e,s,v,g,m,u),typeof t.type=="function"&&(t.__d=u)):u&&v.__e==u&&u.parentNode!=e&&(u=he(v))}for(t.__e=f,c=y;c--;)g[c]!=null&&(typeof t.type=="function"&&g[c].__e!=null&&g[c].__e==t.__d&&(t.__d=he(r,c+1)),$r(g[c],g[c]));if(h)for(c=0;c<h.length;c++)Nr(h[c],h[++c],h[++c])}function Cr(e,n,t){for(var r,a=e.__k,i=0;a&&i<a.length;i++)(r=a[i])&&(r.__=e,n=typeof r.type=="function"?Cr(r,n,t):Or(t,r,r,a,r.__e,n));return n}function B(e,n){return n=n||[],e==null||typeof e=="boolean"||(Array.isArray(e)?e.some(function(t){B(t,n)}):n.push(e)),n}function Or(e,n,t,r,a,i){var o,l,u;if(n.__d!==void 0)o=n.__d,n.__d=void 0;else if(t==null||a!=i||a.parentNode==null)e:if(i==null||i.parentNode!==e)e.appendChild(a),o=null;else{for(l=i,u=0;(l=l.nextSibling)&&u<r.length;u+=2)if(l==a)break e;e.insertBefore(a,i),o=i}return o!==void 0?o:a.nextSibling}function Ba(e,n,t,r,a){var i;for(i in t)i==="children"||i==="key"||i in n||Ge(e,i,null,t[i],r);for(i in n)a&&typeof n[i]!="function"||i==="children"||i==="key"||i==="value"||i==="checked"||t[i]===n[i]||Ge(e,i,n[i],t[i],r)}function ct(e,n,t){n[0]==="-"?e.setProperty(n,t):e[n]=t==null?"":typeof t!="number"||Ha.test(n)?t:t+"px"}function Ge(e,n,t,r,a){var i;e:if(n==="style")if(typeof t=="string")e.style.cssText=t;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(n in r)t&&n in t||ct(e.style,n,"");if(t)for(n in t)r&&t[n]===r[n]||ct(e.style,n,t[n])}else if(n[0]==="o"&&n[1]==="n")i=n!==(n=n.replace(/Capture$/,"")),n=n.toLowerCase()in e?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+i]=t,t?r||e.addEventListener(n,i?ft:ut,i):e.removeEventListener(n,i?ft:ut,i);else if(n!=="dangerouslySetInnerHTML"){if(a)n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(n!=="href"&&n!=="list"&&n!=="form"&&n!=="tabIndex"&&n!=="download"&&n in e)try{e[n]=t==null?"":t;break e}catch{}typeof t=="function"||(t!=null&&(t!==!1||n[0]==="a"&&n[1]==="r")?e.setAttribute(n,t):e.removeAttribute(n))}}function ut(e){this.l[e.type+!1](x.event?x.event(e):e)}function ft(e){this.l[e.type+!0](x.event?x.event(e):e)}function Un(e,n,t,r,a,i,o,l,u){var d,c,p,v,s,m,f,h,g,y,k,$,S,C=n.type;if(n.constructor!==void 0)return null;t.__h!=null&&(u=t.__h,l=n.__e=t.__e,n.__h=null,i=[l]),(d=x.__b)&&d(n);try{e:if(typeof C=="function"){if(h=n.props,g=(d=C.contextType)&&r[d.__c],y=d?g?g.props.value:d.__:r,t.__c?f=(c=n.__c=t.__c).__=c.__E:("prototype"in C&&C.prototype.render?n.__c=c=new C(h,y):(n.__c=c=new W(h,y),c.constructor=C,c.render=Ga),g&&g.sub(c),c.props=h,c.state||(c.state={}),c.context=y,c.__n=r,p=c.__d=!0,c.__h=[]),c.__s==null&&(c.__s=c.state),C.getDerivedStateFromProps!=null&&(c.__s==c.state&&(c.__s=X({},c.__s)),X(c.__s,C.getDerivedStateFromProps(h,c.__s))),v=c.props,s=c.state,p)C.getDerivedStateFromProps==null&&c.componentWillMount!=null&&c.componentWillMount(),c.componentDidMount!=null&&c.__h.push(c.componentDidMount);else{if(C.getDerivedStateFromProps==null&&h!==v&&c.componentWillReceiveProps!=null&&c.componentWillReceiveProps(h,y),!c.__e&&c.shouldComponentUpdate!=null&&c.shouldComponentUpdate(h,c.__s,y)===!1||n.__v===t.__v){c.props=h,c.state=c.__s,n.__v!==t.__v&&(c.__d=!1),c.__v=n,n.__e=t.__e,n.__k=t.__k,n.__k.forEach(function(N){N&&(N.__=n)}),c.__h.length&&o.push(c);break e}c.componentWillUpdate!=null&&c.componentWillUpdate(h,c.__s,y),c.componentDidUpdate!=null&&c.__h.push(function(){c.componentDidUpdate(v,s,m)})}if(c.context=y,c.props=h,c.__v=n,c.__P=e,k=x.__r,$=0,"prototype"in C&&C.prototype.render)c.state=c.__s,c.__d=!1,k&&k(n),d=c.render(c.props,c.state,c.context);else do c.__d=!1,k&&k(n),d=c.render(c.props,c.state,c.context),c.state=c.__s;while(c.__d&&++$<25);c.state=c.__s,c.getChildContext!=null&&(r=X(X({},r),c.getChildContext())),p||c.getSnapshotBeforeUpdate==null||(m=c.getSnapshotBeforeUpdate(v,s)),S=d!=null&&d.type===D&&d.key==null?d.props.children:d,Sr(e,Array.isArray(S)?S:[S],n,t,r,a,i,o,l,u),c.base=n.__e,n.__h=null,c.__h.length&&o.push(c),f&&(c.__E=c.__=null),c.__e=!1}else i==null&&n.__v===t.__v?(n.__k=t.__k,n.__e=t.__e):n.__e=Ya(t.__e,n,t,r,a,i,o,u);(d=x.diffed)&&d(n)}catch(N){n.__v=null,(u||i!=null)&&(n.__e=l,n.__h=!!u,i[i.indexOf(l)]=null),x.__e(N,n,t)}}function Er(e,n){x.__c&&x.__c(n,e),e.some(function(t){try{e=t.__h,t.__h=[],e.some(function(r){r.call(t)})}catch(r){x.__e(r,t.__v)}})}function Ya(e,n,t,r,a,i,o,l){var u,d,c,p=t.props,v=n.props,s=n.type,m=0;if(s==="svg"&&(a=!0),i!=null){for(;m<i.length;m++)if((u=i[m])&&"setAttribute"in u==!!s&&(s?u.localName===s:u.nodeType===3)){e=u,i[m]=null;break}}if(e==null){if(s===null)return document.createTextNode(v);e=a?document.createElementNS("http://www.w3.org/2000/svg",s):document.createElement(s,v.is&&v),i=null,l=!1}if(s===null)p===v||l&&e.data===v||(e.data=v);else{if(i=i&&Te.call(e.childNodes),d=(p=t.props||Be).dangerouslySetInnerHTML,c=v.dangerouslySetInnerHTML,!l){if(i!=null)for(p={},m=0;m<e.attributes.length;m++)p[e.attributes[m].name]=e.attributes[m].value;(c||d)&&(c&&(d&&c.__html==d.__html||c.__html===e.innerHTML)||(e.innerHTML=c&&c.__html||""))}if(Ba(e,v,p,a,l),c)n.__k=[];else if(m=n.props.children,Sr(e,Array.isArray(m)?m:[m],n,t,r,a&&s!=="foreignObject",i,o,i?i[0]:t.__k&&he(t,0),l),i!=null)for(m=i.length;m--;)i[m]!=null&&wr(i[m]);l||("value"in v&&(m=v.value)!==void 0&&(m!==e.value||s==="progress"&&!m||s==="option"&&m!==p.value)&&Ge(e,"value",m,p.value,!1),"checked"in v&&(m=v.checked)!==void 0&&m!==e.checked&&Ge(e,"checked",m,p.checked,!1))}return e}function Nr(e,n,t){try{typeof e=="function"?e(n):e.current=n}catch(r){x.__e(r,t)}}function $r(e,n,t){var r,a;if(x.unmount&&x.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||Nr(r,null,n)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(i){x.__e(i,n)}r.base=r.__P=null}if(r=e.__k)for(a=0;a<r.length;a++)r[a]&&$r(r[a],n,typeof e.type!="function");t||e.__e==null||wr(e.__e),e.__e=e.__d=void 0}function Ga(e,n,t){return this.constructor(e,t)}function ge(e,n,t){var r,a,i;x.__&&x.__(e,n),a=(r=typeof t=="function")?null:t&&t.__k||n.__k,i=[],Un(n,e=(!r&&t||n).__k=R(D,null,[e]),a||Be,Be,n.ownerSVGElement!==void 0,!r&&t?[t]:a?null:n.firstChild?Te.call(n.childNodes):null,i,!r&&t?t:a?a.__e:n.firstChild,r),Er(i,e)}function Pr(e,n){ge(e,n,Pr)}function Tr(e,n,t){var r,a,i,o=X({},e.props);for(i in n)i=="key"?r=n[i]:i=="ref"?a=n[i]:o[i]=n[i];return arguments.length>2&&(o.children=arguments.length>3?Te.call(arguments,2):t),Oe(e.type,o,r||e.key,a||e.ref,null)}function Fn(e,n){var t={__c:n="__cC"+kr++,__:e,Consumer:function(r,a){return r.children(a)},Provider:function(r){var a,i;return this.getChildContext||(a=[],(i={})[n]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(o){this.props.value!==o.value&&a.some(_n)},this.sub=function(o){a.push(o);var l=o.componentWillUnmount;o.componentWillUnmount=function(){a.splice(a.indexOf(o),1),l&&l.call(o)}}),r.children}};return t.Provider.__=t.Consumer.contextType=t}Te=xr.slice,x={__e:function(e,n,t,r){for(var a,i,o;n=n.__;)if((a=n.__c)&&!a.__)try{if((i=a.constructor)&&i.getDerivedStateFromError!=null&&(a.setState(i.getDerivedStateFromError(e)),o=a.__d),a.componentDidCatch!=null&&(a.componentDidCatch(e,r||{}),o=a.__d),o)return a.__E=a}catch(l){e=l}throw e}},yr=0,W.prototype.setState=function(e,n){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=X({},this.state),typeof e=="function"&&(e=e(X({},t),this.props)),e&&X(t,e),e!=null&&this.__v&&(n&&this.__h.push(n),_n(this))},W.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),_n(this))},W.prototype.render=D,Ce=[],Ye.__r=0,kr=0;var _e,z,sn,mt,be=0,Ir=[],Me=[],dt=x.__b,pt=x.__r,vt=x.diffed,ht=x.__c,gt=x.unmount;function Ie(e,n){x.__h&&x.__h(z,e,be||n),be=0;var t=z.__H||(z.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({__V:Me}),t.__[e]}function $e(e){return be=1,zr(Mr,e)}function zr(e,n,t){var r=Ie(_e++,2);if(r.t=e,!r.__c&&(r.__=[t?t(n):Mr(void 0,n),function(i){var o=r.__N?r.__N[0]:r.__[0],l=r.t(o,i);o!==l&&(r.__N=[l,r.__[1]],r.__c.setState({}))}],r.__c=z,!z.u)){z.u=!0;var a=z.shouldComponentUpdate;z.shouldComponentUpdate=function(i,o,l){if(!r.__c.__H)return!0;var u=r.__c.__H.__.filter(function(c){return c.__c});if(u.every(function(c){return!c.__N}))return!a||a.call(this,i,o,l);var d=!1;return u.forEach(function(c){if(c.__N){var p=c.__[0];c.__=c.__N,c.__N=void 0,p!==c.__[0]&&(d=!0)}}),!!d&&(!a||a.call(this,i,o,l))}}return r.__N||r.__}function Hn(e,n){var t=Ie(_e++,3);!x.__s&&Yn(t.__H,n)&&(t.__=e,t.i=n,z.__H.__h.push(t))}function Ve(e,n){var t=Ie(_e++,4);!x.__s&&Yn(t.__H,n)&&(t.__=e,t.i=n,z.__h.push(t))}function Lr(e){return be=5,Wn(function(){return{current:e}},[])}function Va(e,n,t){be=6,Ve(function(){return typeof e=="function"?(e(n()),function(){return e(null)}):e?(e.current=n(),function(){return e.current=null}):void 0},t==null?t:t.concat(e))}function Wn(e,n){var t=Ie(_e++,7);return Yn(t.__H,n)?(t.__V=e(),t.i=n,t.__h=e,t.__V):t.__}function jr(e,n){return be=8,Wn(function(){return e},n)}function Bn(e){var n=z.context[e.__c],t=Ie(_e++,9);return t.c=e,n?(t.__==null&&(t.__=!0,n.sub(z)),n.props.value):e.__}function qa(e,n){x.useDebugValue&&x.useDebugValue(n?n(e):e)}function Xa(){for(var e;e=Ir.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(Re),e.__H.__h.forEach(yn),e.__H.__h=[]}catch(n){e.__H.__h=[],x.__e(n,e.__v)}}x.__b=function(e){z=null,dt&&dt(e)},x.__r=function(e){pt&&pt(e),_e=0;var n=(z=e.__c).__H;n&&(sn===z?(n.__h=[],z.__h=[],n.__.forEach(function(t){t.__N&&(t.__=t.__N),t.__V=Me,t.__N=t.i=void 0})):(n.__h.forEach(Re),n.__h.forEach(yn),n.__h=[])),sn=z},x.diffed=function(e){vt&&vt(e);var n=e.__c;n&&n.__H&&(n.__H.__h.length&&(Ir.push(n)!==1&&mt===x.requestAnimationFrame||((mt=x.requestAnimationFrame)||function(t){var r,a=function(){clearTimeout(i),bt&&cancelAnimationFrame(r),setTimeout(t)},i=setTimeout(a,100);bt&&(r=requestAnimationFrame(a))})(Xa)),n.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.__V!==Me&&(t.__=t.__V),t.i=void 0,t.__V=Me})),sn=z=null},x.__c=function(e,n){n.some(function(t){try{t.__h.forEach(Re),t.__h=t.__h.filter(function(r){return!r.__||yn(r)})}catch(r){n.some(function(a){a.__h&&(a.__h=[])}),n=[],x.__e(r,t.__v)}}),ht&&ht(e,n)},x.unmount=function(e){gt&&gt(e);var n,t=e.__c;t&&t.__H&&(t.__H.__.forEach(function(r){try{Re(r)}catch(a){n=a}}),n&&x.__e(n,t.__v))};var bt=typeof requestAnimationFrame=="function";function Re(e){var n=z,t=e.__c;typeof t=="function"&&(e.__c=void 0,t()),z=n}function yn(e){var n=z;e.__c=e.__(),z=n}function Yn(e,n){return!e||e.length!==n.length||n.some(function(t,r){return t!==e[r]})}function Mr(e,n){return typeof n=="function"?n(e):n}var Ka={};function xe(e,n){for(var t in n)e[t]=n[t];return e}function Za(e,n,t){var r,a=/(?:\?([^#]*))?(#.*)?$/,i=e.match(a),o={};if(i&&i[1])for(var l=i[1].split("&"),u=0;u<l.length;u++){var d=l[u].split("=");o[decodeURIComponent(d[0])]=decodeURIComponent(d.slice(1).join("="))}e=kn(e.replace(a,"")),n=kn(n||"");for(var c=Math.max(e.length,n.length),p=0;p<c;p++)if(n[p]&&n[p].charAt(0)===":"){var v=n[p].replace(/(^:|[+*?]+$)/g,""),s=(n[p].match(/[+*?]+$/)||Ka)[0]||"",m=~s.indexOf("+"),f=~s.indexOf("*"),h=e[p]||"";if(!h&&!f&&(s.indexOf("?")<0||m)){r=!1;break}if(o[v]=decodeURIComponent(h),m||f){o[v]=e.slice(p).map(decodeURIComponent).join("/");break}}else if(n[p]!==e[p]){r=!1;break}return(t.default===!0||r!==!1)&&o}function Ja(e,n){return e.rank<n.rank?1:e.rank>n.rank?-1:e.index-n.index}function Qa(e,n){return e.index=n,e.rank=function(t){return t.props.default?0:kn(t.props.path).map(ei).join("")}(e),e.props}function kn(e){return e.replace(/(^\/+|\/+$)/g,"").split("/")}function ei(e){return e.charAt(0)==":"?1+"*+?".indexOf(e.charAt(e.length-1))||4:5}var ni={},se=[],_t=[],M=null,Rr={url:Gn()},ti=Fn(Rr);function Gn(){var e;return""+((e=M&&M.location?M.location:M&&M.getCurrentLocation?M.getCurrentLocation():typeof location<"u"?location:ni).pathname||"")+(e.search||"")}function ri(e,n){return n===void 0&&(n=!1),typeof e!="string"&&e.url&&(n=e.replace,e=e.url),function(t){for(var r=se.length;r--;)if(se[r].canRoute(t))return!0;return!1}(e)&&function(t,r){r===void 0&&(r="push"),M&&M[r]?M[r](t):typeof history<"u"&&history[r+"State"]&&history[r+"State"](null,null,t)}(e,n?"replace":"push"),Dr(e)}function Dr(e){for(var n=!1,t=0;t<se.length;t++)se[t].routeTo(e)&&(n=!0);return n}function ai(e){if(e&&e.getAttribute){var n=e.getAttribute("href"),t=e.getAttribute("target");if(n&&n.match(/^\//g)&&(!t||t.match(/^_?self$/i)))return ri(n)}}function ii(e){return e.stopImmediatePropagation&&e.stopImmediatePropagation(),e.stopPropagation&&e.stopPropagation(),e.preventDefault(),!1}function Ur(e){if(!(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||e.button)){var n=e.target;do if(n.localName==="a"&&n.getAttribute("href")){if(n.hasAttribute("data-native")||n.hasAttribute("native"))return;if(ai(n))return ii(e)}while(n=n.parentNode)}}var yt=!1;function Fr(e){e.history&&(M=e.history),this.state={url:e.url||Gn()}}xe(Fr.prototype=new W,{shouldComponentUpdate:function(e){return e.static!==!0||e.url!==this.props.url||e.onChange!==this.props.onChange},canRoute:function(e){var n=B(this.props.children);return this.g(n,e)!==void 0},routeTo:function(e){this.setState({url:e});var n=this.canRoute(e);return this.p||this.forceUpdate(),n},componentWillMount:function(){this.p=!0},componentDidMount:function(){var e=this;yt||(yt=!0,M||addEventListener("popstate",function(){Dr(Gn())}),addEventListener("click",Ur)),se.push(this),M&&(this.u=M.listen(function(n){var t=n.location||n;e.routeTo(""+(t.pathname||"")+(t.search||""))})),this.p=!1},componentWillUnmount:function(){typeof this.u=="function"&&this.u(),se.splice(se.indexOf(this),1)},componentWillUpdate:function(){this.p=!0},componentDidUpdate:function(){this.p=!1},g:function(e,n){e=e.filter(Qa).sort(Ja);for(var t=0;t<e.length;t++){var r=e[t],a=Za(n,r.props.path,r.props);if(a)return[r,a]}},render:function(e,n){var t,r,a=e.onChange,i=n.url,o=this.c,l=this.g(B(e.children),i);if(l&&(r=Tr(l[0],xe(xe({url:i,matches:t=l[1]},t),{key:void 0,ref:void 0}))),i!==(o&&o.url)){xe(Rr,o=this.c={url:i,previous:o&&o.url,current:r,path:r?r.props.path:null,matches:t}),o.router=this,o.active=r?[r]:[];for(var u=_t.length;u--;)_t[u]({});typeof a=="function"&&a(o)}return R(ti.Provider,{value:o},r)}});var Hr=function(e){return R("a",xe({onClick:Ur},e))},oi=0;function O(e,n,t,r,a){var i,o,l={};for(o in n)o=="ref"?i=n[o]:l[o]=n[o];var u={type:e,props:l,key:t,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--oi,__source:a,__self:r};if(typeof e=="function"&&(i=e.defaultProps))for(o in i)l[o]===void 0&&(l[o]=i[o]);return x.vnode&&x.vnode(u),u}function si({path:e}){return O(D,{children:[O("h1",{children:"TW Scripts"}),"Some homemade scripts for Tribal Wars browser game..."]})}function li(e){return O(D,{children:O("h1",{children:"Str\xE1nka nenalezena!"})})}function ci(e,n){Hn(()=>{const t=r=>{!e.current||r.target instanceof Node&&e.current.contains(r.target)||n(r)};return document.addEventListener("click",t),()=>{document.removeEventListener("click",t)}},[e,n])}const ui="/tribal-wars-scripts/assets/cs.f5e5fdbd.svg",fi="/tribal-wars-scripts/assets/en.f630a937.svg";/*!
 * Font Awesome Free 6.1.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function kt(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function _(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?kt(Object(t),!0).forEach(function(r){pi(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):kt(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function qe(e){return qe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},qe(e)}function mi(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function xt(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function di(e,n,t){return n&&xt(e.prototype,n),t&&xt(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function pi(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Vn(e,n){return hi(e)||bi(e,n)||Wr(e,n)||yi()}function nn(e){return vi(e)||gi(e)||Wr(e)||_i()}function vi(e){if(Array.isArray(e))return xn(e)}function hi(e){if(Array.isArray(e))return e}function gi(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function bi(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r=[],a=!0,i=!1,o,l;try{for(t=t.call(e);!(a=(o=t.next()).done)&&(r.push(o.value),!(n&&r.length===n));a=!0);}catch(u){i=!0,l=u}finally{try{!a&&t.return!=null&&t.return()}finally{if(i)throw l}}return r}}function Wr(e,n){if(!!e){if(typeof e=="string")return xn(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return xn(e,n)}}function xn(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function _i(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function yi(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var wt=function(){},qn={},Br={},Yr=null,Gr={mark:wt,measure:wt};try{typeof window<"u"&&(qn=window),typeof document<"u"&&(Br=document),typeof MutationObserver<"u"&&(Yr=MutationObserver),typeof performance<"u"&&(Gr=performance)}catch{}var ki=qn.navigator||{},At=ki.userAgent,St=At===void 0?"":At,re=qn,T=Br,Ct=Yr,je=Gr;re.document;var Q=!!T.documentElement&&!!T.head&&typeof T.addEventListener=="function"&&typeof T.createElement=="function",Vr=~St.indexOf("MSIE")||~St.indexOf("Trident/"),K="___FONT_AWESOME___",wn=16,qr="fa",Xr="svg-inline--fa",le="data-fa-i2svg",An="data-fa-pseudo-element",xi="data-fa-pseudo-element-pending",Xn="data-prefix",Kn="data-icon",Ot="fontawesome-i2svg",wi="async",Ai=["HTML","HEAD","STYLE","SCRIPT"],Kr=function(){try{return!0}catch{return!1}}(),Zn={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},Xe={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},Zr={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},Si={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},Ci=/fa[srltdbk]?[\-\ ]/,Jr="fa-layers-text",Oi=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,Ei={900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},Qr=[1,2,3,4,5,6,7,8,9,10],Ni=Qr.concat([11,12,13,14,15,16,17,18,19,20]),$i=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],oe={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Pi=[].concat(nn(Object.keys(Xe)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",oe.GROUP,oe.SWAP_OPACITY,oe.PRIMARY,oe.SECONDARY]).concat(Qr.map(function(e){return"".concat(e,"x")})).concat(Ni.map(function(e){return"w-".concat(e)})),ea=re.FontAwesomeConfig||{};function Ti(e){var n=T.querySelector("script["+e+"]");if(n)return n.getAttribute(e)}function Ii(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(T&&typeof T.querySelector=="function"){var zi=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];zi.forEach(function(e){var n=Vn(e,2),t=n[0],r=n[1],a=Ii(Ti(t));a!=null&&(ea[r]=a)})}var Li={familyPrefix:qr,styleDefault:"solid",replacementClass:Xr,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Ee=_(_({},Li),ea);Ee.autoReplaceSvg||(Ee.observeMutations=!1);var w={};Object.keys(Ee).forEach(function(e){Object.defineProperty(w,e,{enumerable:!0,set:function(t){Ee[e]=t,De.forEach(function(r){return r(w)})},get:function(){return Ee[e]}})});re.FontAwesomeConfig=w;var De=[];function ji(e){return De.push(e),function(){De.splice(De.indexOf(e),1)}}var ee=wn,G={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Mi(e){if(!(!e||!Q)){var n=T.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=e;for(var t=T.head.childNodes,r=null,a=t.length-1;a>-1;a--){var i=t[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return T.head.insertBefore(n,r),e}}var Ri="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Pe(){for(var e=12,n="";e-- >0;)n+=Ri[Math.random()*62|0];return n}function ye(e){for(var n=[],t=(e||[]).length>>>0;t--;)n[t]=e[t];return n}function Jn(e){return e.classList?ye(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(n){return n})}function na(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Di(e){return Object.keys(e||{}).reduce(function(n,t){return n+"".concat(t,'="').concat(na(e[t]),'" ')},"").trim()}function tn(e){return Object.keys(e||{}).reduce(function(n,t){return n+"".concat(t,": ").concat(e[t].trim(),";")},"")}function Qn(e){return e.size!==G.size||e.x!==G.x||e.y!==G.y||e.rotate!==G.rotate||e.flipX||e.flipY}function Ui(e){var n=e.transform,t=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(t/2," 256)")},i="translate(".concat(n.x*32,", ").concat(n.y*32,") "),o="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),l="rotate(".concat(n.rotate," 0 0)"),u={transform:"".concat(i," ").concat(o," ").concat(l)},d={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:u,path:d}}function Fi(e){var n=e.transform,t=e.width,r=t===void 0?wn:t,a=e.height,i=a===void 0?wn:a,o=e.startCentered,l=o===void 0?!1:o,u="";return l&&Vr?u+="translate(".concat(n.x/ee-r/2,"em, ").concat(n.y/ee-i/2,"em) "):l?u+="translate(calc(-50% + ".concat(n.x/ee,"em), calc(-50% + ").concat(n.y/ee,"em)) "):u+="translate(".concat(n.x/ee,"em, ").concat(n.y/ee,"em) "),u+="scale(".concat(n.size/ee*(n.flipX?-1:1),", ").concat(n.size/ee*(n.flipY?-1:1),") "),u+="rotate(".concat(n.rotate,"deg) "),u}var Hi=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function ta(){var e=qr,n=Xr,t=w.familyPrefix,r=w.replacementClass,a=Hi;if(t!==e||r!==n){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(n),"g");a=a.replace(i,".".concat(t,"-")).replace(o,"--".concat(t,"-")).replace(l,".".concat(r))}return a}var Et=!1;function ln(){w.autoAddCss&&!Et&&(Mi(ta()),Et=!0)}var Wi={mixout:function(){return{dom:{css:ta,insertCss:ln}}},hooks:function(){return{beforeDOMElementCreation:function(){ln()},beforeI2svg:function(){ln()}}}},Z=re||{};Z[K]||(Z[K]={});Z[K].styles||(Z[K].styles={});Z[K].hooks||(Z[K].hooks={});Z[K].shims||(Z[K].shims=[]);var H=Z[K],ra=[],Bi=function e(){T.removeEventListener("DOMContentLoaded",e),Ke=1,ra.map(function(n){return n()})},Ke=!1;Q&&(Ke=(T.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(T.readyState),Ke||T.addEventListener("DOMContentLoaded",Bi));function Yi(e){!Q||(Ke?setTimeout(e,0):ra.push(e))}function ze(e){var n=e.tag,t=e.attributes,r=t===void 0?{}:t,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?na(e):"<".concat(n," ").concat(Di(r),">").concat(i.map(ze).join(""),"</").concat(n,">")}function Nt(e,n,t){if(e&&e[n]&&e[n][t])return{prefix:n,iconName:t,icon:e[n][t]}}var Gi=function(n,t){return function(r,a,i,o){return n.call(t,r,a,i,o)}},cn=function(n,t,r,a){var i=Object.keys(n),o=i.length,l=a!==void 0?Gi(t,a):t,u,d,c;for(r===void 0?(u=1,c=n[i[0]]):(u=0,c=r);u<o;u++)d=i[u],c=l(c,n[d],d,n);return c};function Vi(e){for(var n=[],t=0,r=e.length;t<r;){var a=e.charCodeAt(t++);if(a>=55296&&a<=56319&&t<r){var i=e.charCodeAt(t++);(i&64512)==56320?n.push(((a&1023)<<10)+(i&1023)+65536):(n.push(a),t--)}else n.push(a)}return n}function Sn(e){var n=Vi(e);return n.length===1?n[0].toString(16):null}function qi(e,n){var t=e.length,r=e.charCodeAt(n),a;return r>=55296&&r<=56319&&t>n+1&&(a=e.charCodeAt(n+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function $t(e){return Object.keys(e).reduce(function(n,t){var r=e[t],a=!!r.icon;return a?n[r.iconName]=r.icon:n[t]=r,n},{})}function Cn(e,n){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=t.skipHooks,a=r===void 0?!1:r,i=$t(n);typeof H.hooks.addPack=="function"&&!a?H.hooks.addPack(e,$t(n)):H.styles[e]=_(_({},H.styles[e]||{}),i),e==="fas"&&Cn("fa",n)}var Ne=H.styles,Xi=H.shims,Ki=Object.values(Zr),et=null,aa={},ia={},oa={},sa={},la={},Zi=Object.keys(Zn);function Ji(e){return~Pi.indexOf(e)}function Qi(e,n){var t=n.split("-"),r=t[0],a=t.slice(1).join("-");return r===e&&a!==""&&!Ji(a)?a:null}var ca=function(){var n=function(i){return cn(Ne,function(o,l,u){return o[u]=cn(l,i,{}),o},{})};aa=n(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var l=i[2].filter(function(u){return typeof u=="number"});l.forEach(function(u){a[u.toString(16)]=o})}return a}),ia=n(function(a,i,o){if(a[o]=o,i[2]){var l=i[2].filter(function(u){return typeof u=="string"});l.forEach(function(u){a[u]=o})}return a}),la=n(function(a,i,o){var l=i[2];return a[o]=o,l.forEach(function(u){a[u]=o}),a});var t="far"in Ne||w.autoFetchSvg,r=cn(Xi,function(a,i){var o=i[0],l=i[1],u=i[2];return l==="far"&&!t&&(l="fas"),typeof o=="string"&&(a.names[o]={prefix:l,iconName:u}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:l,iconName:u}),a},{names:{},unicodes:{}});oa=r.names,sa=r.unicodes,et=rn(w.styleDefault)};ji(function(e){et=rn(e.styleDefault)});ca();function nt(e,n){return(aa[e]||{})[n]}function eo(e,n){return(ia[e]||{})[n]}function fe(e,n){return(la[e]||{})[n]}function ua(e){return oa[e]||{prefix:null,iconName:null}}function no(e){var n=sa[e],t=nt("fas",e);return n||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function ae(){return et}var tt=function(){return{prefix:null,iconName:null,rest:[]}};function rn(e){var n=Zn[e],t=Xe[e]||Xe[n],r=e in H.styles?e:null;return t||r||null}function an(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=n.skipLookups,r=t===void 0?!1:t,a=null,i=e.reduce(function(o,l){var u=Qi(w.familyPrefix,l);if(Ne[l]?(l=Ki.includes(l)?Si[l]:l,a=l,o.prefix=l):Zi.indexOf(l)>-1?(a=l,o.prefix=rn(l)):u?o.iconName=u:l!==w.replacementClass&&o.rest.push(l),!r&&o.prefix&&o.iconName){var d=a==="fa"?ua(o.iconName):{},c=fe(o.prefix,o.iconName);d.prefix&&(a=null),o.iconName=d.iconName||c||o.iconName,o.prefix=d.prefix||o.prefix,o.prefix==="far"&&!Ne.far&&Ne.fas&&!w.autoFetchSvg&&(o.prefix="fas")}return o},tt());return(i.prefix==="fa"||a==="fa")&&(i.prefix=ae()||"fas"),i}var to=function(){function e(){mi(this,e),this.definitions={}}return di(e,[{key:"add",value:function(){for(var t=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(l){t.definitions[l]=_(_({},t.definitions[l]||{}),o[l]),Cn(l,o[l]);var u=Zr[l];u&&Cn(u,o[l]),ca()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],l=o.prefix,u=o.iconName,d=o.icon,c=d[2];t[l]||(t[l]={}),c.length>0&&c.forEach(function(p){typeof p=="string"&&(t[l][p]=d)}),t[l][u]=d}),t}}]),e}(),Pt=[],me={},ve={},ro=Object.keys(ve);function ao(e,n){var t=n.mixoutsTo;return Pt=e,me={},Object.keys(ve).forEach(function(r){ro.indexOf(r)===-1&&delete ve[r]}),Pt.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(t[o]=a[o]),qe(a[o])==="object"&&Object.keys(a[o]).forEach(function(l){t[o]||(t[o]={}),t[o][l]=a[o][l]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){me[o]||(me[o]=[]),me[o].push(i[o])})}r.provides&&r.provides(ve)}),t}function On(e,n){for(var t=arguments.length,r=new Array(t>2?t-2:0),a=2;a<t;a++)r[a-2]=arguments[a];var i=me[e]||[];return i.forEach(function(o){n=o.apply(null,[n].concat(r))}),n}function ce(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var a=me[e]||[];a.forEach(function(i){i.apply(null,t)})}function J(){var e=arguments[0],n=Array.prototype.slice.call(arguments,1);return ve[e]?ve[e].apply(null,n):void 0}function En(e){e.prefix==="fa"&&(e.prefix="fas");var n=e.iconName,t=e.prefix||ae();if(!!n)return n=fe(t,n)||n,Nt(fa.definitions,t,n)||Nt(H.styles,t,n)}var fa=new to,io=function(){w.autoReplaceSvg=!1,w.observeMutations=!1,ce("noAuto")},oo={i2svg:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Q?(ce("beforeI2svg",n),J("pseudoElements2svg",n),J("i2svg",n)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=n.autoReplaceSvgRoot;w.autoReplaceSvg===!1&&(w.autoReplaceSvg=!0),w.observeMutations=!0,Yi(function(){lo({autoReplaceSvgRoot:t}),ce("watch",n)})}},so={icon:function(n){if(n===null)return null;if(qe(n)==="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:fe(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){var t=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],r=rn(n[0]);return{prefix:r,iconName:fe(r,t)||t}}if(typeof n=="string"&&(n.indexOf("".concat(w.familyPrefix,"-"))>-1||n.match(Ci))){var a=an(n.split(" "),{skipLookups:!0});return{prefix:a.prefix||ae(),iconName:fe(a.prefix,a.iconName)||a.iconName}}if(typeof n=="string"){var i=ae();return{prefix:i,iconName:fe(i,n)||n}}}},U={noAuto:io,config:w,dom:oo,parse:so,library:fa,findIconDefinition:En,toHtml:ze},lo=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=n.autoReplaceSvgRoot,r=t===void 0?T:t;(Object.keys(H.styles).length>0||w.autoFetchSvg)&&Q&&w.autoReplaceSvg&&U.dom.i2svg({node:r})};function on(e,n){return Object.defineProperty(e,"abstract",{get:n}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return ze(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!Q){var r=T.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function co(e){var n=e.children,t=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Qn(o)&&t.found&&!r.found){var l=t.width,u=t.height,d={x:l/u/2,y:.5};a.style=tn(_(_({},i),{},{"transform-origin":"".concat(d.x+o.x/16,"em ").concat(d.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:n}]}function uo(e){var n=e.prefix,t=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(n,"-").concat(w.familyPrefix,"-").concat(t):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:_(_({},a),{},{id:o}),children:r}]}]}function rt(e){var n=e.icons,t=n.main,r=n.mask,a=e.prefix,i=e.iconName,o=e.transform,l=e.symbol,u=e.title,d=e.maskId,c=e.titleId,p=e.extra,v=e.watchable,s=v===void 0?!1:v,m=r.found?r:t,f=m.width,h=m.height,g=a==="fak",y=[w.replacementClass,i?"".concat(w.familyPrefix,"-").concat(i):""].filter(function(A){return p.classes.indexOf(A)===-1}).filter(function(A){return A!==""||!!A}).concat(p.classes).join(" "),k={children:[],attributes:_(_({},p.attributes),{},{"data-prefix":a,"data-icon":i,class:y,role:p.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(f," ").concat(h)})},$=g&&!~p.classes.indexOf("fa-fw")?{width:"".concat(f/h*16*.0625,"em")}:{};s&&(k.attributes[le]=""),u&&(k.children.push({tag:"title",attributes:{id:k.attributes["aria-labelledby"]||"title-".concat(c||Pe())},children:[u]}),delete k.attributes.title);var S=_(_({},k),{},{prefix:a,iconName:i,main:t,mask:r,maskId:d,transform:o,symbol:l,styles:_(_({},$),p.styles)}),C=r.found&&t.found?J("generateAbstractMask",S)||{children:[],attributes:{}}:J("generateAbstractIcon",S)||{children:[],attributes:{}},N=C.children,b=C.attributes;return S.children=N,S.attributes=b,l?uo(S):co(S)}function Tt(e){var n=e.content,t=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,l=e.watchable,u=l===void 0?!1:l,d=_(_(_({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});u&&(d[le]="");var c=_({},o.styles);Qn(a)&&(c.transform=Fi({transform:a,startCentered:!0,width:t,height:r}),c["-webkit-transform"]=c.transform);var p=tn(c);p.length>0&&(d.style=p);var v=[];return v.push({tag:"span",attributes:d,children:[n]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function fo(e){var n=e.content,t=e.title,r=e.extra,a=_(_(_({},r.attributes),t?{title:t}:{}),{},{class:r.classes.join(" ")}),i=tn(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[n]}),t&&o.push({tag:"span",attributes:{class:"sr-only"},children:[t]}),o}var un=H.styles;function Nn(e){var n=e[0],t=e[1],r=e.slice(4),a=Vn(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(w.familyPrefix,"-").concat(oe.GROUP)},children:[{tag:"path",attributes:{class:"".concat(w.familyPrefix,"-").concat(oe.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(w.familyPrefix,"-").concat(oe.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:n,height:t,icon:o}}var mo={found:!1,width:512,height:512};function po(e,n){!Kr&&!w.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(n,'" is missing.'))}function $n(e,n){var t=n;return n==="fa"&&w.styleDefault!==null&&(n=ae()),new Promise(function(r,a){if(J("missingIconAbstract"),t==="fa"){var i=ua(e)||{};e=i.iconName||e,n=i.prefix||n}if(e&&n&&un[n]&&un[n][e]){var o=un[n][e];return r(Nn(o))}po(e,n),r(_(_({},mo),{},{icon:w.showMissingIcons&&e?J("missingIconAbstract")||{}:{}}))})}var It=function(){},Pn=w.measurePerformance&&je&&je.mark&&je.measure?je:{mark:It,measure:It},we='FA "6.1.2"',vo=function(n){return Pn.mark("".concat(we," ").concat(n," begins")),function(){return ma(n)}},ma=function(n){Pn.mark("".concat(we," ").concat(n," ends")),Pn.measure("".concat(we," ").concat(n),"".concat(we," ").concat(n," begins"),"".concat(we," ").concat(n," ends"))},at={begin:vo,end:ma},Ue=function(){};function zt(e){var n=e.getAttribute?e.getAttribute(le):null;return typeof n=="string"}function ho(e){var n=e.getAttribute?e.getAttribute(Xn):null,t=e.getAttribute?e.getAttribute(Kn):null;return n&&t}function go(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(w.replacementClass)}function bo(){if(w.autoReplaceSvg===!0)return Fe.replace;var e=Fe[w.autoReplaceSvg];return e||Fe.replace}function _o(e){return T.createElementNS("http://www.w3.org/2000/svg",e)}function yo(e){return T.createElement(e)}function da(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=n.ceFn,r=t===void 0?e.tag==="svg"?_o:yo:t;if(typeof e=="string")return T.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(da(o,{ceFn:r}))}),a}function ko(e){var n=" ".concat(e.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}var Fe={replace:function(n){var t=n[0];if(t.parentNode)if(n[1].forEach(function(a){t.parentNode.insertBefore(da(a),t)}),t.getAttribute(le)===null&&w.keepOriginalSource){var r=T.createComment(ko(t));t.parentNode.replaceChild(r,t)}else t.remove()},nest:function(n){var t=n[0],r=n[1];if(~Jn(t).indexOf(w.replacementClass))return Fe.replace(n);var a=new RegExp("".concat(w.familyPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(l,u){return u===w.replacementClass||u.match(a)?l.toSvg.push(u):l.toNode.push(u),l},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(l){return ze(l)}).join(`
`);t.setAttribute(le,""),t.innerHTML=o}};function Lt(e){e()}function pa(e,n){var t=typeof n=="function"?n:Ue;if(e.length===0)t();else{var r=Lt;w.mutateApproach===wi&&(r=re.requestAnimationFrame||Lt),r(function(){var a=bo(),i=at.begin("mutate");e.map(a),i(),t()})}}var it=!1;function va(){it=!0}function Tn(){it=!1}var Ze=null;function jt(e){if(!!Ct&&!!w.observeMutations){var n=e.treeCallback,t=n===void 0?Ue:n,r=e.nodeCallback,a=r===void 0?Ue:r,i=e.pseudoElementsCallback,o=i===void 0?Ue:i,l=e.observeMutationsRoot,u=l===void 0?T:l;Ze=new Ct(function(d){if(!it){var c=ae();ye(d).forEach(function(p){if(p.type==="childList"&&p.addedNodes.length>0&&!zt(p.addedNodes[0])&&(w.searchPseudoElements&&o(p.target),t(p.target)),p.type==="attributes"&&p.target.parentNode&&w.searchPseudoElements&&o(p.target.parentNode),p.type==="attributes"&&zt(p.target)&&~$i.indexOf(p.attributeName))if(p.attributeName==="class"&&ho(p.target)){var v=an(Jn(p.target)),s=v.prefix,m=v.iconName;p.target.setAttribute(Xn,s||c),m&&p.target.setAttribute(Kn,m)}else go(p.target)&&a(p.target)})}}),Q&&Ze.observe(u,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function xo(){!Ze||Ze.disconnect()}function wo(e){var n=e.getAttribute("style"),t=[];return n&&(t=n.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],l=i.slice(1);return o&&l.length>0&&(r[o]=l.join(":").trim()),r},{})),t}function Ao(e){var n=e.getAttribute("data-prefix"),t=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=an(Jn(e));return a.prefix||(a.prefix=ae()),n&&t&&(a.prefix=n,a.iconName=t),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=eo(a.prefix,e.innerText)||nt(a.prefix,Sn(e.innerText))),!a.iconName&&w.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function So(e){var n=ye(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),t=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return w.autoA11y&&(t?n["aria-labelledby"]="".concat(w.replacementClass,"-title-").concat(r||Pe()):(n["aria-hidden"]="true",n.focusable="false")),n}function Co(){return{iconName:null,title:null,titleId:null,prefix:null,transform:G,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Mt(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},t=Ao(e),r=t.iconName,a=t.prefix,i=t.rest,o=So(e),l=On("parseNodeAttributes",{},e),u=n.styleParser?wo(e):[];return _({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:G,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:u,attributes:o}},l)}var Oo=H.styles;function ha(e){var n=w.autoReplaceSvg==="nest"?Mt(e,{styleParser:!1}):Mt(e);return~n.extra.classes.indexOf(Jr)?J("generateLayersText",e,n):J("generateSvgReplacementMutation",e,n)}function Rt(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Q)return Promise.resolve();var t=T.documentElement.classList,r=function(p){return t.add("".concat(Ot,"-").concat(p))},a=function(p){return t.remove("".concat(Ot,"-").concat(p))},i=w.autoFetchSvg?Object.keys(Zn):Object.keys(Oo);i.includes("fa")||i.push("fa");var o=[".".concat(Jr,":not([").concat(le,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(le,"])")})).join(", ");if(o.length===0)return Promise.resolve();var l=[];try{l=ye(e.querySelectorAll(o))}catch{}if(l.length>0)r("pending"),a("complete");else return Promise.resolve();var u=at.begin("onTree"),d=l.reduce(function(c,p){try{var v=ha(p);v&&c.push(v)}catch(s){Kr||s.name==="MissingIcon"&&console.error(s)}return c},[]);return new Promise(function(c,p){Promise.all(d).then(function(v){pa(v,function(){r("active"),r("complete"),a("pending"),typeof n=="function"&&n(),u(),c()})}).catch(function(v){u(),p(v)})})}function Eo(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ha(e).then(function(t){t&&pa([t],n)})}function No(e){return function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(n||{}).icon?n:En(n||{}),a=t.mask;return a&&(a=(a||{}).icon?a:En(a||{})),e(r,_(_({},t),{},{mask:a}))}}var $o=function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.transform,a=r===void 0?G:r,i=t.symbol,o=i===void 0?!1:i,l=t.mask,u=l===void 0?null:l,d=t.maskId,c=d===void 0?null:d,p=t.title,v=p===void 0?null:p,s=t.titleId,m=s===void 0?null:s,f=t.classes,h=f===void 0?[]:f,g=t.attributes,y=g===void 0?{}:g,k=t.styles,$=k===void 0?{}:k;if(!!n){var S=n.prefix,C=n.iconName,N=n.icon;return on(_({type:"icon"},n),function(){return ce("beforeDOMElementCreation",{iconDefinition:n,params:t}),w.autoA11y&&(v?y["aria-labelledby"]="".concat(w.replacementClass,"-title-").concat(m||Pe()):(y["aria-hidden"]="true",y.focusable="false")),rt({icons:{main:Nn(N),mask:u?Nn(u.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:C,transform:_(_({},G),a),symbol:o,title:v,maskId:c,titleId:m,extra:{attributes:y,styles:$,classes:h}})})}},Po={mixout:function(){return{icon:No($o)}},hooks:function(){return{mutationObserverCallbacks:function(t){return t.treeCallback=Rt,t.nodeCallback=Eo,t}}},provides:function(n){n.i2svg=function(t){var r=t.node,a=r===void 0?T:r,i=t.callback,o=i===void 0?function(){}:i;return Rt(a,o)},n.generateSvgReplacementMutation=function(t,r){var a=r.iconName,i=r.title,o=r.titleId,l=r.prefix,u=r.transform,d=r.symbol,c=r.mask,p=r.maskId,v=r.extra;return new Promise(function(s,m){Promise.all([$n(a,l),c.iconName?$n(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(f){var h=Vn(f,2),g=h[0],y=h[1];s([t,rt({icons:{main:g,mask:y},prefix:l,iconName:a,transform:u,symbol:d,maskId:p,title:i,titleId:o,extra:v,watchable:!0})])}).catch(m)})},n.generateAbstractIcon=function(t){var r=t.children,a=t.attributes,i=t.main,o=t.transform,l=t.styles,u=tn(l);u.length>0&&(a.style=u);var d;return Qn(o)&&(d=J("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(d||i.icon),{children:r,attributes:a}}}},To={mixout:function(){return{layer:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return on({type:"layer"},function(){ce("beforeDOMElementCreation",{assembler:t,params:r});var o=[];return t(function(l){Array.isArray(l)?l.map(function(u){o=o.concat(u.abstract)}):o=o.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(w.familyPrefix,"-layers")].concat(nn(i)).join(" ")},children:o}]})}}}},Io={mixout:function(){return{counter:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,l=o===void 0?[]:o,u=r.attributes,d=u===void 0?{}:u,c=r.styles,p=c===void 0?{}:c;return on({type:"counter",content:t},function(){return ce("beforeDOMElementCreation",{content:t,params:r}),fo({content:t.toString(),title:i,extra:{attributes:d,styles:p,classes:["".concat(w.familyPrefix,"-layers-counter")].concat(nn(l))}})})}}}},zo={mixout:function(){return{text:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?G:a,o=r.title,l=o===void 0?null:o,u=r.classes,d=u===void 0?[]:u,c=r.attributes,p=c===void 0?{}:c,v=r.styles,s=v===void 0?{}:v;return on({type:"text",content:t},function(){return ce("beforeDOMElementCreation",{content:t,params:r}),Tt({content:t,transform:_(_({},G),i),title:l,extra:{attributes:p,styles:s,classes:["".concat(w.familyPrefix,"-layers-text")].concat(nn(d))}})})}}},provides:function(n){n.generateLayersText=function(t,r){var a=r.title,i=r.transform,o=r.extra,l=null,u=null;if(Vr){var d=parseInt(getComputedStyle(t).fontSize,10),c=t.getBoundingClientRect();l=c.width/d,u=c.height/d}return w.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([t,Tt({content:t.innerHTML,width:l,height:u,transform:i,title:a,extra:o,watchable:!0})])}}},Lo=new RegExp('"',"ug"),Dt=[1105920,1112319];function jo(e){var n=e.replace(Lo,""),t=qi(n,0),r=t>=Dt[0]&&t<=Dt[1],a=n.length===2?n[0]===n[1]:!1;return{value:Sn(a?n[0]:n),isSecondary:r||a}}function Ut(e,n){var t="".concat(xi).concat(n.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(t)!==null)return r();var i=ye(e.children),o=i.filter(function(C){return C.getAttribute(An)===n})[0],l=re.getComputedStyle(e,n),u=l.getPropertyValue("font-family").match(Oi),d=l.getPropertyValue("font-weight"),c=l.getPropertyValue("content");if(o&&!u)return e.removeChild(o),r();if(u&&c!=="none"&&c!==""){var p=l.getPropertyValue("content"),v=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(u[2])?Xe[u[2].toLowerCase()]:Ei[d],s=jo(p),m=s.value,f=s.isSecondary,h=u[0].startsWith("FontAwesome"),g=nt(v,m),y=g;if(h){var k=no(m);k.iconName&&k.prefix&&(g=k.iconName,v=k.prefix)}if(g&&!f&&(!o||o.getAttribute(Xn)!==v||o.getAttribute(Kn)!==y)){e.setAttribute(t,y),o&&e.removeChild(o);var $=Co(),S=$.extra;S.attributes[An]=n,$n(g,v).then(function(C){var N=rt(_(_({},$),{},{icons:{main:C,mask:tt()},prefix:v,iconName:y,extra:S,watchable:!0})),b=T.createElement("svg");n==="::before"?e.insertBefore(b,e.firstChild):e.appendChild(b),b.outerHTML=N.map(function(A){return ze(A)}).join(`
`),e.removeAttribute(t),r()}).catch(a)}else r()}else r()})}function Mo(e){return Promise.all([Ut(e,"::before"),Ut(e,"::after")])}function Ro(e){return e.parentNode!==document.head&&!~Ai.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(An)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Ft(e){if(!!Q)return new Promise(function(n,t){var r=ye(e.querySelectorAll("*")).filter(Ro).map(Mo),a=at.begin("searchPseudoElements");va(),Promise.all(r).then(function(){a(),Tn(),n()}).catch(function(){a(),Tn(),t()})})}var Do={hooks:function(){return{mutationObserverCallbacks:function(t){return t.pseudoElementsCallback=Ft,t}}},provides:function(n){n.pseudoElements2svg=function(t){var r=t.node,a=r===void 0?T:r;w.searchPseudoElements&&Ft(a)}}},Ht=!1,Uo={mixout:function(){return{dom:{unwatch:function(){va(),Ht=!0}}}},hooks:function(){return{bootstrap:function(){jt(On("mutationObserverCallbacks",{}))},noAuto:function(){xo()},watch:function(t){var r=t.observeMutationsRoot;Ht?Tn():jt(On("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Wt=function(n){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],l=i.slice(1).join("-");if(o&&l==="h")return r.flipX=!0,r;if(o&&l==="v")return r.flipY=!0,r;if(l=parseFloat(l),isNaN(l))return r;switch(o){case"grow":r.size=r.size+l;break;case"shrink":r.size=r.size-l;break;case"left":r.x=r.x-l;break;case"right":r.x=r.x+l;break;case"up":r.y=r.y-l;break;case"down":r.y=r.y+l;break;case"rotate":r.rotate=r.rotate+l;break}return r},t)},Fo={mixout:function(){return{parse:{transform:function(t){return Wt(t)}}}},hooks:function(){return{parseNodeAttributes:function(t,r){var a=r.getAttribute("data-fa-transform");return a&&(t.transform=Wt(a)),t}}},provides:function(n){n.generateAbstractTransformGrouping=function(t){var r=t.main,a=t.transform,i=t.containerWidth,o=t.iconWidth,l={transform:"translate(".concat(i/2," 256)")},u="translate(".concat(a.x*32,", ").concat(a.y*32,") "),d="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),c="rotate(".concat(a.rotate," 0 0)"),p={transform:"".concat(u," ").concat(d," ").concat(c)},v={transform:"translate(".concat(o/2*-1," -256)")},s={outer:l,inner:p,path:v};return{tag:"g",attributes:_({},s.outer),children:[{tag:"g",attributes:_({},s.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:_(_({},r.icon.attributes),s.path)}]}]}}}},fn={x:0,y:0,width:"100%",height:"100%"};function Bt(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||n)&&(e.attributes.fill="black"),e}function Ho(e){return e.tag==="g"?e.children:[e]}var Wo={hooks:function(){return{parseNodeAttributes:function(t,r){var a=r.getAttribute("data-fa-mask"),i=a?an(a.split(" ").map(function(o){return o.trim()})):tt();return i.prefix||(i.prefix=ae()),t.mask=i,t.maskId=r.getAttribute("data-fa-mask-id"),t}}},provides:function(n){n.generateAbstractMask=function(t){var r=t.children,a=t.attributes,i=t.main,o=t.mask,l=t.maskId,u=t.transform,d=i.width,c=i.icon,p=o.width,v=o.icon,s=Ui({transform:u,containerWidth:p,iconWidth:d}),m={tag:"rect",attributes:_(_({},fn),{},{fill:"white"})},f=c.children?{children:c.children.map(Bt)}:{},h={tag:"g",attributes:_({},s.inner),children:[Bt(_({tag:c.tag,attributes:_(_({},c.attributes),s.path)},f))]},g={tag:"g",attributes:_({},s.outer),children:[h]},y="mask-".concat(l||Pe()),k="clip-".concat(l||Pe()),$={tag:"mask",attributes:_(_({},fn),{},{id:y,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[m,g]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:k},children:Ho(v)},$]};return r.push(S,{tag:"rect",attributes:_({fill:"currentColor","clip-path":"url(#".concat(k,")"),mask:"url(#".concat(y,")")},fn)}),{children:r,attributes:a}}}},Bo={provides:function(n){var t=!1;re.matchMedia&&(t=re.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:_(_({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=_(_({},i),{},{attributeName:"opacity"}),l={tag:"circle",attributes:_(_({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||l.children.push({tag:"animate",attributes:_(_({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:_(_({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(l),r.push({tag:"path",attributes:_(_({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:_(_({},o),{},{values:"1;0;0;0;0;1;"})}]}),t||r.push({tag:"path",attributes:_(_({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:_(_({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Yo={hooks:function(){return{parseNodeAttributes:function(t,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return t.symbol=i,t}}}},Go=[Wi,Po,To,Io,zo,Do,Uo,Fo,Wo,Bo,Yo];ao(Go,{mixoutsTo:U});U.noAuto;U.config;U.library;U.dom;var In=U.parse;U.findIconDefinition;U.toHtml;var Vo=U.icon;U.layer;U.text;U.counter;var E={exports:{}},qo="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Xo=qo,Ko=Xo;function ga(){}function ba(){}ba.resetWarningCache=ga;var Zo=function(){function e(r,a,i,o,l,u){if(u!==Ko){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}e.isRequired=e;function n(){return e}var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:ba,resetWarningCache:ga};return t.PropTypes=t,t};E.exports=Zo();function _a(e,n){for(var t in n)e[t]=n[t];return e}function zn(e,n){for(var t in e)if(t!=="__source"&&!(t in n))return!0;for(var r in n)if(r!=="__source"&&e[r]!==n[r])return!0;return!1}function Ln(e){this.props=e}function Jo(e,n){function t(a){var i=this.props.ref,o=i==a.ref;return!o&&i&&(i.call?i(null):i.current=null),n?!n(this.props,a)||!o:zn(this.props,a)}function r(a){return this.shouldComponentUpdate=t,R(e,a)}return r.displayName="Memo("+(e.displayName||e.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(Ln.prototype=new W).isPureReactComponent=!0,Ln.prototype.shouldComponentUpdate=function(e,n){return zn(this.props,e)||zn(this.state,n)};var Yt=x.__b;x.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),Yt&&Yt(e)};var Qo=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function es(e){function n(t){var r=_a({},t);return delete r.ref,e(r,t.ref||null)}return n.$$typeof=Qo,n.render=n,n.prototype.isReactComponent=n.__f=!0,n.displayName="ForwardRef("+(e.displayName||e.name)+")",n}var Gt=function(e,n){return e==null?null:B(B(e).map(n))},ns={map:Gt,forEach:Gt,count:function(e){return e?B(e).length:0},only:function(e){var n=B(e);if(n.length!==1)throw"Children.only";return n[0]},toArray:B},ts=x.__e;x.__e=function(e,n,t,r){if(e.then){for(var a,i=n;i=i.__;)if((a=i.__c)&&a.__c)return n.__e==null&&(n.__e=t.__e,n.__k=t.__k),a.__c(e,n)}ts(e,n,t,r)};var Vt=x.unmount;function He(){this.__u=0,this.t=null,this.__b=null}function ya(e){var n=e.__.__c;return n&&n.__a&&n.__a(e)}function rs(e){var n,t,r;function a(i){if(n||(n=e()).then(function(o){t=o.default||o},function(o){r=o}),r)throw r;if(!t)throw n;return R(t,i)}return a.displayName="Lazy",a.__f=!0,a}function Ae(){this.u=null,this.o=null}x.unmount=function(e){var n=e.__c;n&&n.__R&&n.__R(),n&&e.__h===!0&&(e.type=null),Vt&&Vt(e)},(He.prototype=new W).__c=function(e,n){var t=n.__c,r=this;r.t==null&&(r.t=[]),r.t.push(t);var a=ya(r.__v),i=!1,o=function(){i||(i=!0,t.__R=null,a?a(l):l())};t.__R=o;var l=function(){if(!--r.__u){if(r.state.__a){var d=r.state.__a;r.__v.__k[0]=function p(v,s,m){return v&&(v.__v=null,v.__k=v.__k&&v.__k.map(function(f){return p(f,s,m)}),v.__c&&v.__c.__P===s&&(v.__e&&m.insertBefore(v.__e,v.__d),v.__c.__e=!0,v.__c.__P=m)),v}(d,d.__c.__P,d.__c.__O)}var c;for(r.setState({__a:r.__b=null});c=r.t.pop();)c.forceUpdate()}},u=n.__h===!0;r.__u++||u||r.setState({__a:r.__b=r.__v.__k[0]}),e.then(o,o)},He.prototype.componentWillUnmount=function(){this.t=[]},He.prototype.render=function(e,n){if(this.__b){if(this.__v.__k){var t=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=function i(o,l,u){return o&&(o.__c&&o.__c.__H&&(o.__c.__H.__.forEach(function(d){typeof d.__c=="function"&&d.__c()}),o.__c.__H=null),(o=_a({},o)).__c!=null&&(o.__c.__P===u&&(o.__c.__P=l),o.__c=null),o.__k=o.__k&&o.__k.map(function(d){return i(d,l,u)})),o}(this.__b,t,r.__O=r.__P)}this.__b=null}var a=n.__a&&R(D,null,e.fallback);return a&&(a.__h=null),[R(D,null,n.__a?null:e.children),a]};var qt=function(e,n,t){if(++t[1]===t[0]&&e.o.delete(n),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(t=e.u;t;){for(;t.length>3;)t.pop()();if(t[1]<t[0])break;e.u=t=t[2]}};function as(e){return this.getChildContext=function(){return e.context},e.children}function is(e){var n=this,t=e.i;n.componentWillUnmount=function(){ge(null,n.l),n.l=null,n.i=null},n.i&&n.i!==t&&n.componentWillUnmount(),e.__v?(n.l||(n.i=t,n.l={nodeType:1,parentNode:t,childNodes:[],appendChild:function(r){this.childNodes.push(r),n.i.appendChild(r)},insertBefore:function(r,a){this.childNodes.push(r),n.i.appendChild(r)},removeChild:function(r){this.childNodes.splice(this.childNodes.indexOf(r)>>>1,1),n.i.removeChild(r)}}),ge(R(as,{context:n.context},e.__v),n.l)):n.l&&n.componentWillUnmount()}function os(e,n){var t=R(is,{__v:e,i:n});return t.containerInfo=n,t}(Ae.prototype=new W).__a=function(e){var n=this,t=ya(n.__v),r=n.o.get(e);return r[0]++,function(a){var i=function(){n.props.revealOrder?(r.push(a),qt(n,e,r)):a()};t?t(i):i()}},Ae.prototype.render=function(e){this.u=null,this.o=new Map;var n=B(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&n.reverse();for(var t=n.length;t--;)this.o.set(n[t],this.u=[1,0,this.u]);return e.children},Ae.prototype.componentDidUpdate=Ae.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(n,t){qt(e,t,n)})};var ka=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,ss=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,ls=typeof document<"u",cs=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/i:/fil|che|ra/i).test(e)};function us(e,n,t){return n.__k==null&&(n.textContent=""),ge(e,n),typeof t=="function"&&t(),e?e.__c:null}function fs(e,n,t){return Pr(e,n),typeof t=="function"&&t(),e?e.__c:null}W.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(W.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(n){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:n})}})});var Xt=x.event;function ms(){}function ds(){return this.cancelBubble}function ps(){return this.defaultPrevented}x.event=function(e){return Xt&&(e=Xt(e)),e.persist=ms,e.isPropagationStopped=ds,e.isDefaultPrevented=ps,e.nativeEvent=e};var xa,Kt={configurable:!0,get:function(){return this.class}},Zt=x.vnode;x.vnode=function(e){var n=e.type,t=e.props,r=t;if(typeof n=="string"){var a=n.indexOf("-")===-1;for(var i in r={},t){var o=t[i];ls&&i==="children"&&n==="noscript"||i==="value"&&"defaultValue"in t&&o==null||(i==="defaultValue"&&"value"in t&&t.value==null?i="value":i==="download"&&o===!0?o="":/ondoubleclick/i.test(i)?i="ondblclick":/^onchange(textarea|input)/i.test(i+n)&&!cs(t.type)?i="oninput":/^onfocus$/i.test(i)?i="onfocusin":/^onblur$/i.test(i)?i="onfocusout":/^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(i)?i=i.toLowerCase():a&&ss.test(i)?i=i.replace(/[A-Z0-9]/g,"-$&").toLowerCase():o===null&&(o=void 0),/^oninput$/i.test(i)&&(i=i.toLowerCase(),r[i]&&(i="oninputCapture")),r[i]=o)}n=="select"&&r.multiple&&Array.isArray(r.value)&&(r.value=B(t.children).forEach(function(l){l.props.selected=r.value.indexOf(l.props.value)!=-1})),n=="select"&&r.defaultValue!=null&&(r.value=B(t.children).forEach(function(l){l.props.selected=r.multiple?r.defaultValue.indexOf(l.props.value)!=-1:r.defaultValue==l.props.value})),e.props=r,t.class!=t.className&&(Kt.enumerable="className"in t,t.className!=null&&(r.class=t.className),Object.defineProperty(r,"className",Kt))}e.$$typeof=ka,Zt&&Zt(e)};var Jt=x.__r;x.__r=function(e){Jt&&Jt(e),xa=e.__c};var vs={ReactCurrentDispatcher:{current:{readContext:function(e){return xa.__n[e.__c].props.value}}}};function hs(e){return R.bind(null,e)}function wa(e){return!!e&&e.$$typeof===ka}function ot(e){return wa(e)?Tr.apply(null,arguments):e}function gs(e){return!!e.__k&&(ge(null,e),!0)}function bs(e){return e&&(e.base||e.nodeType===1&&e)||null}var _s=function(e,n){return e(n)},ys=function(e,n){return e(n)};function Aa(e){e()}function ks(e){return e}function xs(){return[!1,Aa]}function ws(e,n){var t=n(),r=$e({s:{__:t,h:n}}),a=r[0].s,i=r[1];return Ve(function(){a.__=t,a.h=n,a.__!==n()&&i({s:a})},[e,t,n]),Hn(function(){return a.__!==a.h()&&i({s:a}),e(function(){a.__!==a.h()&&i({s:a})})},[e]),t}const Sa={useState:$e,useReducer:zr,useEffect:Hn,useLayoutEffect:Ve,useInsertionEffect:Ve,useTransition:xs,useDeferredValue:ks,useSyncExternalStore:ws,startTransition:Aa,useRef:Lr,useImperativeHandle:Va,useMemo:Wn,useCallback:jr,useContext:Bn,useDebugValue:qa,version:"17.0.2",Children:ns,render:us,hydrate:fs,unmountComponentAtNode:gs,createPortal:os,createElement:R,createContext:Fn,createFactory:hs,cloneElement:ot,createRef:Wa,Fragment:D,isValidElement:wa,findDOMNode:bs,Component:W,PureComponent:Ln,memo:Jo,forwardRef:es,flushSync:ys,unstable_batchedUpdates:_s,StrictMode:D,Suspense:He,SuspenseList:Ae,lazy:rs,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:vs};function Qt(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function te(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Qt(Object(t),!0).forEach(function(r){de(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Qt(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Je(e){return Je=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Je(e)}function de(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function As(e,n){if(e==null)return{};var t={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(n.indexOf(a)>=0)&&(t[a]=e[a]);return t}function Ss(e,n){if(e==null)return{};var t=As(e,n),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(t[r]=e[r]))}return t}function jn(e){return Cs(e)||Os(e)||Es(e)||Ns()}function Cs(e){if(Array.isArray(e))return Mn(e)}function Os(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Es(e,n){if(!!e){if(typeof e=="string")return Mn(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Mn(e,n)}}function Mn(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function Ns(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $s(e){var n,t=e.beat,r=e.fade,a=e.beatFade,i=e.bounce,o=e.shake,l=e.flash,u=e.spin,d=e.spinPulse,c=e.spinReverse,p=e.pulse,v=e.fixedWidth,s=e.inverse,m=e.border,f=e.listItem,h=e.flip,g=e.size,y=e.rotation,k=e.pull,$=(n={"fa-beat":t,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":i,"fa-shake":o,"fa-flash":l,"fa-spin":u,"fa-spin-reverse":c,"fa-spin-pulse":d,"fa-pulse":p,"fa-fw":v,"fa-inverse":s,"fa-border":m,"fa-li":f,"fa-flip":h===!0,"fa-flip-horizontal":h==="horizontal"||h==="both","fa-flip-vertical":h==="vertical"||h==="both"},de(n,"fa-".concat(g),typeof g<"u"&&g!==null),de(n,"fa-rotate-".concat(y),typeof y<"u"&&y!==null&&y!==0),de(n,"fa-pull-".concat(k),typeof k<"u"&&k!==null),de(n,"fa-swap-opacity",e.swapOpacity),n);return Object.keys($).map(function(S){return $[S]?S:null}).filter(function(S){return S})}function Ps(e){return e=e-0,e===e}function Ca(e){return Ps(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(n,t){return t?t.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var Ts=["style"];function Is(e){return e.charAt(0).toUpperCase()+e.slice(1)}function zs(e){return e.split(";").map(function(n){return n.trim()}).filter(function(n){return n}).reduce(function(n,t){var r=t.indexOf(":"),a=Ca(t.slice(0,r)),i=t.slice(r+1).trim();return a.startsWith("webkit")?n[Is(a)]=i:n[a]=i,n},{})}function Oa(e,n){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof n=="string")return n;var r=(n.children||[]).map(function(u){return Oa(e,u)}),a=Object.keys(n.attributes||{}).reduce(function(u,d){var c=n.attributes[d];switch(d){case"class":u.attrs.className=c,delete n.attributes.class;break;case"style":u.attrs.style=zs(c);break;default:d.indexOf("aria-")===0||d.indexOf("data-")===0?u.attrs[d.toLowerCase()]=c:u.attrs[Ca(d)]=c}return u},{attrs:{}}),i=t.style,o=i===void 0?{}:i,l=Ss(t,Ts);return a.attrs.style=te(te({},a.attrs.style),o),e.apply(void 0,[n.tag,te(te({},a.attrs),l)].concat(jn(r)))}var Ea=!1;try{Ea=!0}catch{}function Ls(){if(!Ea&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function er(e){if(e&&Je(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(In.icon)return In.icon(e);if(e===null)return null;if(e&&Je(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function mn(e,n){return Array.isArray(n)&&n.length>0||!Array.isArray(n)&&n?de({},e,n):{}}var Le=Sa.forwardRef(function(e,n){var t=e.icon,r=e.mask,a=e.symbol,i=e.className,o=e.title,l=e.titleId,u=e.maskId,d=er(t),c=mn("classes",[].concat(jn($s(e)),jn(i.split(" ")))),p=mn("transform",typeof e.transform=="string"?In.transform(e.transform):e.transform),v=mn("mask",er(r)),s=Vo(d,te(te(te(te({},c),p),v),{},{symbol:a,title:o,titleId:l,maskId:u}));if(!s)return Ls("Could not find icon",d),null;var m=s.abstract,f={ref:n};return Object.keys(e).forEach(function(h){Le.defaultProps.hasOwnProperty(h)||(f[h]=e[h])}),js(m[0],f)});Le.displayName="FontAwesomeIcon";Le.propTypes={beat:E.exports.bool,border:E.exports.bool,beatFade:E.exports.bool,bounce:E.exports.bool,className:E.exports.string,fade:E.exports.bool,flash:E.exports.bool,mask:E.exports.oneOfType([E.exports.object,E.exports.array,E.exports.string]),maskId:E.exports.string,fixedWidth:E.exports.bool,inverse:E.exports.bool,flip:E.exports.oneOf([!0,!1,"horizontal","vertical","both"]),icon:E.exports.oneOfType([E.exports.object,E.exports.array,E.exports.string]),listItem:E.exports.bool,pull:E.exports.oneOf(["right","left"]),pulse:E.exports.bool,rotation:E.exports.oneOf([0,90,180,270]),shake:E.exports.bool,size:E.exports.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:E.exports.bool,spinPulse:E.exports.bool,spinReverse:E.exports.bool,symbol:E.exports.oneOfType([E.exports.bool,E.exports.string]),title:E.exports.string,titleId:E.exports.string,transform:E.exports.oneOfType([E.exports.string,E.exports.object]),swapOpacity:E.exports.bool};Le.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var js=Oa.bind(null,Sa.createElement);/*!
 * Font Awesome Free 6.1.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var Ms={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"]};function nr({children:e,to:n,mobile:t}){const r=`px-2 md:px-4${t?" py-2 text-lg":""}`;return typeof n=="function"?O("a",{class:r,onClick:n,children:e}):O(Hr,{class:r,href:`${en}${n}`,children:e})}const tr=[{link:"",text:{cs:"Dom\u016F",en:"Home"}},{link:"scripts/",text:{cs:"Skripty",en:"Scripts"}}],Rs={cs:"Divok\xE9 Kmeny Skripty",en:"Tribal Wars Scripts"},rr={cs:"\u010Cesky",en:"English"},dn={cs:ui,en:fi},ar=["cs","en"];function Ds(){const[e,n]=$e(!1),[t,r]=$e(!1),{lang:a,setLang:i}=Bn(st),o=Lr(null);return ci(o,l=>{t&&r(!1)}),O(D,{children:[O("header",{class:"h-14 px-6 flex flex-row items-center justify-between bg-red-700 text-white select-none border-b-8 "+(e?"border-red-700 sm:border-amber-700":"border-amber-500"),children:[O("a",{class:"font-bold text-xl",href:en,children:Rs[a]}),O("div",{class:"hidden sm:block",role:"navigation",children:[tr.map(l=>O(nr,{to:l.link,children:l.text[a]})),O("button",{class:"ml-2 md:ml-4","aria-label":"language",onClick:l=>r(!t),children:[O("img",{class:"w-8 inline border border-gray-400",alt:a,src:dn[a]}),O("svg",{class:"-mr-1 ml-2 h-5 w-5 inline",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:O("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})})]}),O("div",{ref:o,class:"origin-top-right absolute right-4 mt-6 p-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none",hidden:!t,role:"menu","aria-orientation":"vertical",tabIndex:-1,children:O("div",{class:"py-1",role:"none",children:ar.map(l=>O("img",{class:"w-12 mb-2 last:mb-0 cursor-pointer",alt:rr[l],src:dn[l],onClick:()=>i(l)}))})})]}),O("button",{"aria-label":"menu",class:"px-4 py-2 -my-2 -mr-4 sm:hidden",onClick:()=>n(!e),children:O(Le,{icon:Ms})})]}),e&&O("div",{class:"flex flex-col bg-amber-600 px-2 text-white divide-red-700 divide-y-2 sm:hidden",role:"navigation",children:[tr.map(l=>O(nr,{to:l.link,mobile:!0,children:l.text[a]})),O("div",{class:"px-2 flex flex-row align-center justify-around py-2",children:ar.map(l=>O("img",{class:"w-14 p-1 last:mb-0 cursor-pointer",alt:rr[l],src:dn[l],onClick:()=>i(l)}))})]})]})}function Se(){return(Se=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}const Us=["children","options"],ir=["allowFullScreen","allowTransparency","autoComplete","autoFocus","autoPlay","cellPadding","cellSpacing","charSet","className","classId","colSpan","contentEditable","contextMenu","crossOrigin","encType","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","hrefLang","inputMode","keyParams","keyType","marginHeight","marginWidth","maxLength","mediaGroup","minLength","noValidate","radioGroup","readOnly","rowSpan","spellCheck","srcDoc","srcLang","srcSet","tabIndex","useMap"].reduce((e,n)=>(e[n.toLowerCase()]=n,e),{for:"htmlFor"}),or={amp:"&",apos:"'",gt:">",lt:"<",nbsp:"\xA0",quot:"\u201C"},Fs=["style","script"],Hs=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,Ws=/mailto:/i,Bs=/\n{2,}$/,Na=/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,Ys=/^ *> ?/gm,Gs=/^ {2,}\n/,Vs=/^(?:( *[-*_]) *){3,}(?:\n *)+\n/,$a=/^\s*(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n *)+\n?/,Pa=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,qs=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,Xs=/^(?:\n *)*\n/,Ks=/\r\n?/g,Zs=/^\[\^([^\]]+)](:.*)\n/,Js=/^\[\^([^\]]+)]/,Qs=/\f/g,el=/^\s*?\[(x|\s)\]/,Ta=/^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,Ia=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,Rn=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,nl=/&([a-z]+);/g,za=/^<!--[\s\S]*?(?:-->)/,tl=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,Dn=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,rl=/^\{.*\}$/,al=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,il=/^<([^ >]+@[^ >]+)>/,ol=/^<([^ >]+:\/[^ >]+)>/,sr=/ *\n+$/,sl=/(?:^|\n)( *)$/,ll=/-([a-z])?/gi,La=/^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,cl=/^\[([^\]]*)\]:\s*(\S+)\s*("([^"]*)")?/,ul=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,fl=/^\[([^\]]*)\] ?\[([^\]]*)\]/,ml=/(\[|\])/g,dl=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,pl=/\t/g,vl=/^ *\| */,hl=/(^ *\||\| *$)/g,gl=/ *$/,bl=/^ *:-+: *$/,_l=/^ *:-+ *$/,yl=/^ *-+: *$/,kl=/^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,xl=/^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/,wl=/^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,Al=/^\\([^0-9A-Za-z\s])/,Sl=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,Cl=/^\n+/,Ol=/^([ \t]*)/,El=/\\([^0-9A-Z\s])/gi,lr=new RegExp("^( *)((?:[*+-]|\\d+\\.)) +"),ja=new RegExp("^( *)((?:[*+-]|\\d+\\.)) +[^\\n]*(?:\\n(?!\\1(?:[*+-]|\\d+\\.) )[^\\n]*)*(\\n|$)","gm"),Ma=new RegExp("^( *)((?:[*+-]|\\d+\\.)) [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1(?:[*+-]|\\d+\\.) (?!(?:[*+-]|\\d+\\.) ))\\n*|\\s*\\n*$)"),Ra="(?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*",Nl=new RegExp("^\\[("+Ra+`)\\]\\(\\s*<?((?:[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['"]([\\s\\S]*?)['"])?\\s*\\)`),$l=new RegExp("^!\\[("+Ra+`)\\]\\(\\s*<?((?:[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['"]([\\s\\S]*?)['"])?\\s*\\)`),Da=[Na,Pa,$a,Ta,Ia,za,ja,Ma,La],Pl=[...Da,/^[^\n]+(?:  \n|\n{2,})/,Rn,Dn];function Tl(e){return e.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g,"a").replace(/[çÇ]/g,"c").replace(/[ðÐ]/g,"d").replace(/[ÈÉÊËéèêë]/g,"e").replace(/[ÏïÎîÍíÌì]/g,"i").replace(/[Ññ]/g,"n").replace(/[øØœŒÕõÔôÓóÒò]/g,"o").replace(/[ÜüÛûÚúÙù]/g,"u").replace(/[ŸÿÝý]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function Il(e){return yl.test(e)?"right":bl.test(e)?"center":_l.test(e)?"left":null}function cr(e,n,t){const r=t.t;t.t=!0;const a=n(e.trim(),t);t.t=r;let i=[[]];return a.forEach(function(o,l){o.type==="tableSeparator"?l!==0&&l!==a.length-1&&i.push([]):(o.type!=="text"||a[l+1]!=null&&a[l+1].type!=="tableSeparator"||(o.content=o.content.replace(gl,"")),i[i.length-1].push(o))}),i}function zl(e,n,t){t.o=!0;const r=cr(e[1],n,t),a=e[2].replace(hl,"").split("|").map(Il),i=function(o,l,u){return o.trim().split(`
`).map(function(d){return cr(d,l,u)})}(e[3],n,t);return t.o=!1,{align:a,cells:i,header:r,type:"table"}}function ur(e,n){return e.align[n]==null?{}:{textAlign:e.align[n]}}function ne(e){return function(n,t){return t.o?e.exec(n):null}}function ie(e){return function(n,t){return t.o||t.u?e.exec(n):null}}function q(e){return function(n,t){return t.o||t.u?null:e.exec(n)}}function ke(e){return function(n){return e.exec(n)}}function Ll(e,n,t){if(n.o||n.u||t&&!t.endsWith(`
`))return null;let r="";e.split(`
`).every(i=>!Da.some(o=>o.test(i))&&(r+=i+`
`,i.trim()));const a=r.trimEnd();return a==""?null:[r,a]}function ue(e){try{if(decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g,"").match(/^\s*(javascript|vbscript|data):/i))return null}catch{return null}return e}function fr(e){return e.replace(El,"$1")}function We(e,n,t){const r=t.o||!1,a=t.u||!1;t.o=!0,t.u=!0;const i=e(n,t);return t.o=r,t.u=a,i}function jl(e,n,t){const r=t.o||!1,a=t.u||!1;t.o=!1,t.u=!0;const i=e(n,t);return t.o=r,t.u=a,i}function Ml(e,n,t){return t.o=!1,e(n+`

`,t)}const mr=(e,n,t)=>({content:We(n,e[1],t)});function pn(){return{}}function vn(){return null}function Rl(...e){return e.filter(Boolean).join(" ")}function hn(e,n,t){let r=e;const a=n.split(".");for(;a.length&&(r=r[a[0]],r!==void 0);)a.shift();return r||t}var P;function Dl(e,n={}){n.overrides=n.overrides||{},n.slugify=n.slugify||Tl,n.namedCodesToUnicode=n.namedCodesToUnicode?Se({},or,n.namedCodesToUnicode):or;const t=n.createElement||R;function r(s,m,...f){const h=hn(n.overrides,`${s}.props`,{});return t(function(g,y){const k=hn(y,g);return k?typeof k=="function"||typeof k=="object"&&"render"in k?k:hn(y,`${g}.component`,g):g}(s,n.overrides),Se({},m,h,{className:Rl(m==null?void 0:m.className,h.className)||void 0}),...f)}function a(s){let m=!1;n.forceInline?m=!0:n.forceBlock||(m=dl.test(s)===!1);const f=c(d(m?s:`${s.trimEnd().replace(Cl,"")}

`,{o:m}));for(;typeof f[f.length-1]=="string"&&!f[f.length-1].trim();)f.pop();if(n.wrapper===null)return f;const h=n.wrapper||(m?"span":"div");let g;if(f.length>1||n.forceWrapper)g=f;else{if(f.length===1)return g=f[0],typeof g=="string"?r("span",{key:"outer"},g):g;g=null}return R(h,{key:"outer"},g)}function i(s){const m=s.match(Hs);return m?m.reduce(function(f,h,g){const y=h.indexOf("=");if(y!==-1){const k=function(N){return N.indexOf("-")!==-1&&N.match(tl)===null&&(N=N.replace(ll,function(b,A){return A.toUpperCase()})),N}(h.slice(0,y)).trim(),$=function(N){const b=N[0];return(b==='"'||b==="'")&&N.length>=2&&N[N.length-1]===b?N.slice(1,-1):N}(h.slice(y+1).trim()),S=ir[k]||k,C=f[S]=function(N,b){return N==="style"?b.split(/;\s?/).reduce(function(A,I){const L=I.slice(0,I.indexOf(":"));return A[L.replace(/(-[a-z])/g,j=>j[1].toUpperCase())]=I.slice(L.length+1).trim(),A},{}):N==="href"?ue(b):(b.match(rl)&&(b=b.slice(1,b.length-1)),b==="true"||b!=="false"&&b)}(k,$);typeof C=="string"&&(Rn.test(C)||Dn.test(C))&&(f[S]=ot(a(C.trim()),{key:g}))}else h!=="style"&&(f[ir[h]||h]=!0);return f},{}):void 0}const o=[],l={},u={blockQuote:{i:q(Na),l:P.HIGH,_:(s,m,f)=>({content:m(s[0].replace(Ys,""),f)}),p:(s,m,f)=>r("blockquote",{key:f.g},m(s.content,f))},breakLine:{i:ke(Gs),l:P.HIGH,_:pn,p:(s,m,f)=>r("br",{key:f.g})},breakThematic:{i:q(Vs),l:P.HIGH,_:pn,p:(s,m,f)=>r("hr",{key:f.g})},codeBlock:{i:q(Pa),l:P.MAX,_:s=>({content:s[0].replace(/^ {4}/gm,"").replace(/\n+$/,""),lang:void 0}),p:(s,m,f)=>r("pre",{key:f.g},r("code",{className:s.lang?`lang-${s.lang}`:""},s.content))},codeFenced:{i:q($a),l:P.MAX,_:s=>({content:s[3],lang:s[2]||void 0,type:"codeBlock"})},codeInline:{i:ie(qs),l:P.LOW,_:s=>({content:s[2]}),p:(s,m,f)=>r("code",{key:f.g},s.content)},footnote:{i:q(Zs),l:P.MAX,_:s=>(o.push({footnote:s[2],identifier:s[1]}),{}),p:vn},footnoteReference:{i:ne(Js),l:P.HIGH,_:s=>({content:s[1],target:`#${n.slugify(s[1])}`}),p:(s,m,f)=>r("a",{key:f.g,href:ue(s.target)},r("sup",{key:f.g},s.content))},gfmTask:{i:ne(el),l:P.HIGH,_:s=>({completed:s[1].toLowerCase()==="x"}),p:(s,m,f)=>r("input",{checked:s.completed,key:f.g,readOnly:!0,type:"checkbox"})},heading:{i:q(Ta),l:P.HIGH,_:(s,m,f)=>({content:We(m,s[2],f),id:n.slugify(s[2]),level:s[1].length}),p:(s,m,f)=>(s.tag=`h${s.level}`,r(s.tag,{id:s.id,key:f.g},m(s.content,f)))},headingSetext:{i:q(Ia),l:P.MAX,_:(s,m,f)=>({content:We(m,s[1],f),level:s[2]==="="?1:2,type:"heading"})},htmlComment:{i:ke(za),l:P.HIGH,_:()=>({}),p:vn},image:{i:ie($l),l:P.HIGH,_:s=>({alt:s[1],target:fr(s[2]),title:s[3]}),p:(s,m,f)=>r("img",{key:f.g,alt:s.alt||void 0,title:s.title||void 0,src:ue(s.target)})},link:{i:ne(Nl),l:P.LOW,_:(s,m,f)=>({content:jl(m,s[1],f),target:fr(s[2]),title:s[3]}),p:(s,m,f)=>r("a",{key:f.g,href:ue(s.target),title:s.title},m(s.content,f))},linkAngleBraceStyleDetector:{i:ne(ol),l:P.MAX,_:s=>({content:[{content:s[1],type:"text"}],target:s[1],type:"link"})},linkBareUrlDetector:{i:(s,m)=>m.m?null:ne(al)(s,m),l:P.MAX,_:s=>({content:[{content:s[1],type:"text"}],target:s[1],title:void 0,type:"link"})},linkMailtoDetector:{i:ne(il),l:P.MAX,_(s){let m=s[1],f=s[1];return Ws.test(f)||(f="mailto:"+f),{content:[{content:m.replace("mailto:",""),type:"text"}],target:f,type:"link"}}},list:{i(s,m,f){const h=sl.exec(f);return!h||!m.h&&m.o?null:Ma.exec(s=h[1]+s)},l:P.HIGH,_(s,m,f){const h=s[2],g=h.length>1,y=g?+h:void 0,k=s[0].replace(Bs,`
`).match(ja);let $=!1;return{items:k.map(function(S,C){const N=lr.exec(S)[0].length,b=new RegExp("^ {1,"+N+"}","gm"),A=S.replace(b,"").replace(lr,""),I=C===k.length-1,L=A.indexOf(`

`)!==-1||I&&$;$=L;const j=f.o,F=f.h;let V;f.h=!0,L?(f.o=!1,V=A.replace(sr,`

`)):(f.o=!0,V=A.replace(sr,""));const Y=m(V,f);return f.o=j,f.h=F,Y}),ordered:g,start:y}},p:(s,m,f)=>r(s.ordered?"ol":"ul",{key:f.g,start:s.start},s.items.map(function(h,g){return r("li",{key:g},m(h,f))}))},newlineCoalescer:{i:q(Xs),l:P.LOW,_:pn,p:()=>`
`},paragraph:{i:Ll,l:P.LOW,_:mr,p:(s,m,f)=>r("p",{key:f.g},m(s.content,f))},ref:{i:ne(cl),l:P.MAX,_:s=>(l[s[1]]={target:s[2],title:s[4]},{}),p:vn},refImage:{i:ie(ul),l:P.MAX,_:s=>({alt:s[1]||void 0,ref:s[2]}),p:(s,m,f)=>r("img",{key:f.g,alt:s.alt,src:ue(l[s.ref].target),title:l[s.ref].title})},refLink:{i:ne(fl),l:P.MAX,_:(s,m,f)=>({content:m(s[1],f),fallbackContent:m(s[0].replace(ml,"\\$1"),f),ref:s[2]}),p:(s,m,f)=>l[s.ref]?r("a",{key:f.g,href:ue(l[s.ref].target),title:l[s.ref].title},m(s.content,f)):r("span",{key:f.g},m(s.fallbackContent,f))},table:{i:q(La),l:P.HIGH,_:zl,p:(s,m,f)=>r("table",{key:f.g},r("thead",null,r("tr",null,s.header.map(function(h,g){return r("th",{key:g,style:ur(s,g)},m(h,f))}))),r("tbody",null,s.cells.map(function(h,g){return r("tr",{key:g},h.map(function(y,k){return r("td",{key:k,style:ur(s,k)},m(y,f))}))})))},tableSeparator:{i:function(s,m){return m.t?vl.exec(s):null},l:P.HIGH,_:function(){return{type:"tableSeparator"}},p:()=>" | "},text:{i:ke(Sl),l:P.MIN,_:s=>({content:s[0].replace(nl,(m,f)=>n.namedCodesToUnicode[f]?n.namedCodesToUnicode[f]:m)}),p:s=>s.content},textBolded:{i:ie(kl),l:P.MED,_:(s,m,f)=>({content:m(s[2],f)}),p:(s,m,f)=>r("strong",{key:f.g},m(s.content,f))},textEmphasized:{i:ie(xl),l:P.LOW,_:(s,m,f)=>({content:m(s[2],f)}),p:(s,m,f)=>r("em",{key:f.g},m(s.content,f))},textEscaped:{i:ie(Al),l:P.HIGH,_:s=>({content:s[1],type:"text"})},textStrikethroughed:{i:ie(wl),l:P.LOW,_:mr,p:(s,m,f)=>r("del",{key:f.g},m(s.content,f))}};n.disableParsingRawHTML!==!0&&(u.htmlBlock={i:ke(Rn),l:P.HIGH,_(s,m,f){const[,h]=s[3].match(Ol),g=new RegExp(`^${h}`,"gm"),y=s[3].replace(g,""),k=($=y,Pl.some(b=>b.test($))?Ml:We);var $;const S=s[1].toLowerCase(),C=Fs.indexOf(S)!==-1;f.m=f.m||S==="a";const N=C?s[3]:k(m,y,f);return f.m=!1,{attrs:i(s[2]),content:N,noInnerParse:C,tag:C?S:s[1]}},p:(s,m,f)=>r(s.tag,Se({key:f.g},s.attrs),s.noInnerParse?s.content:m(s.content,f))},u.htmlSelfClosing={i:ke(Dn),l:P.HIGH,_:s=>({attrs:i(s[2]||""),tag:s[1]}),p:(s,m,f)=>r(s.tag,Se({},s.attrs,{key:f.g}))});const d=function(s){let m=Object.keys(s);function f(h,g){let y=[],k="";for(;h;){let $=0;for(;$<m.length;){const S=m[$],C=s[S],N=C.i(h,g,k);if(N){const b=N[0];h=h.substring(b.length);const A=C._(N,f,g);A.type==null&&(A.type=S),y.push(A),k=b;break}$++}}return y}return m.sort(function(h,g){let y=s[h].l,k=s[g].l;return y!==k?y-k:h<g?-1:1}),function(h,g){return f(function(y){return y.replace(Ks,`
`).replace(Qs,"").replace(pl,"    ")}(h),g)}}(u),c=(p=function(s){return function(m,f,h){return s[m.type].p(m,f,h)}}(u),function s(m,f={}){if(Array.isArray(m)){const h=f.g,g=[];let y=!1;for(let k=0;k<m.length;k++){f.g=k;const $=s(m[k],f),S=typeof $=="string";S&&y?g[g.length-1]+=$:$!==null&&g.push($),y=S}return f.g=h,g}return p(m,s,f)});var p;const v=a(e);return o.length?r("div",null,v,r("footer",{key:"footer"},o.map(function(s){return r("div",{id:n.slugify(s.identifier),key:s.identifier},s.identifier,c(d(s.footnote,{o:!0})))}))):v}(function(e){e[e.MAX=0]="MAX",e[e.HIGH=1]="HIGH",e[e.MED=2]="MED",e[e.LOW=3]="LOW",e[e.MIN=4]="MIN"})(P||(P={}));const Ua=e=>{let{children:n,options:t}=e,r=function(a,i){if(a==null)return{};var o,l,u={},d=Object.keys(a);for(l=0;l<d.length;l++)i.indexOf(o=d[l])>=0||(u[o]=a[o]);return u}(e,Us);return ot(Dl(n,t),r)},Fa={overrides:{h1:{component:"h1",props:{className:"text-2xl font-bold mb-2"}},h2:{component:"h2",props:{className:"text-xl font-bold mb-2"}},h3:{component:"h3",props:{className:"text-md font-bold mb-2"}},ul:{component:"ul",props:{className:"mb-2 pl-4 list-disc"}},ol:{component:"ol",props:{className:"mb-2 pl-4 list-decimal"}},input:{props:{className:"bg-zinc-700",disabled:"true"}},p:{props:{className:"mb-2"}},a:{props:{className:"text-red-500 hover:text-red-700"}},blockquote:{props:{className:"border-l-4 border-red-700 pl-2"}},code:{props:{className:"bg-slate-200 p-0.5 border-2 border-slate-300 rounded-md inline-block"}}}},Ul="Script *Reminders* allows you to create own timers with sound notification.",Fl="Skript *Reminders* slou\u017E\xED k tvorb\u011B vlastn\xEDch odpo\u010D\xEDt\xE1vadel se zvukovou notifikac\xED.",Hl=`# TW Reminders

Widget for countdowns in Tribal Wars.

This script allows you to create own timers with sound notifications. Each timer has an arbitrary name and contains a link to the page, where it was set up. This allows players to have ultimate overview and notifications about timed actions, such as bulding or scavenge being finished or planned attacks, even when the game is in an inactive browser tab.

## Build

\`yarn && yarn build\`

Generates \`dist/main.js\` file with transpiled javascript.

## Usage

\`javascript: void($.getScript('https://cdn.jsdelivr.net/gh/DSroD/tribal-wars-scripts/Reminders/dist/main.js?raw'))\`

Once you run the script, a window with reminders shows up. You can add new reminder or remove old/finished ones.

![Example](/tribal-wars-scripts/img/reminders.png)

If any browser tab has this script running in the time of reminder a sound effect is played.`,Wl=`# TW Reminders

Widget pro odpo\u010D\xEDt\xE1v\xE1n\xED \u010Dasu pro Tribal Wars.

Tento skript umo\u017E\u0148uje tvorbu vlastn\xEDch \u010Dasova\u010D\u016F se zvukovou notifikac\xED p\u0159i dob\u011Bhnut\xED \u010Dasu. Ka\u017Ed\xFD \u010Dasova\u010D m\u016F\u017Ee m\xEDt
libovoln\xFD n\xE1zev a obsahuje odkaz na str\xE1nku, kde byl vytvo\u0159en. Umo\u017En\xED tak m\xEDt p\u0159ehled nap\u0159. o ukon\u010Den\xED v\xFDroby,
sb\u011Bru nebo napl\xE1novan\xFDch \xFAtoc\xEDch i v moment, kdy je hra v neaktivn\xED z\xE1lo\u017Ece prohl\xED\u017Ee\u010De.

## Build

\`yarn && yarn build\`

Vygeneruje \`dist/main.js\` soubor s transpilovan\xFDm k\xF3dem.

## Pou\u017Eit\xED

\`javascript: void($.getScript('https://cdn.jsdelivr.net/gh/DSroD/tribal-wars-scripts/Reminders/dist/main.js?raw'))\`

Po spu\u0161t\u011Bn\xED skriptu se zobraz\xED okno s \u010Dasova\u010Di, kde lze p\u0159idat nov\xFD vlastn\xED \u010Dasova\u010D, p\u0159\xEDpadn\u011B b\u011B\u017E\xEDc\xED/dob\u011Bhl\xE9 \u010Dasova\u010De odstranit.

![Uk\xE1zka](/tribal-wars-scripts/img/reminders.png)

Pokud je v moment\u011B dob\u011Bhnut\xED \u010Dasova\u010De okno \u010Dasova\u010D\u016F otev\u0159eno v jak\xE9mkoliv panelu prohl\xED\u017Ee\u010De, dojde k p\u0159ehr\xE1n\xED zvukov\xE9ho efektu.`,Bl="This script generates a help request for a single incomming attack with all the necessary info in BB-codes. Currently only for czech localization.",Yl="Tento skript generuje \u017E\xE1dost o pomoc s ve\u0161ker\xFDmi d\u016Fle\u017Eit\xFDmi informacemi v BB-k\xF3dech.",Gl="TBD...",Vl=`# Help Request Generator - Tribal Wars CZ

Gener\xE1tor \u017E\xE1dosti o podporu s informacemi o p\u0159\xEDchoz\xEDm \xFAtoku v BB-k\xF3dech.

## Pou\u017Eit\xED

Na str\xE1nce s p\u0159\xEDchoz\xEDm \xFAtokem se po pou\u017Eit\xED skriptu objev\xED textov\xE9 pole s p\u0159edvypln\u011Bn\xFDmi informacemi o p\u0159\xEDchoz\xEDm \xFAtoku (naform\xE1tovan\xE9 BB k\xF3dy).
Kliknut\xEDm na jednotku nad textov\xFDm polem zvol\xEDte v\xE1mi o\u010Dek\xE1vanou nejpomalej\u0161\xED jednotku v \xFAtoku.


### Uk\xE1zka

![Uk\xE1zka](/tribal-wars-scripts/img/helpgen.png)
Po spu\u0161t\u011Bn\xED skriptu se objev\xED textov\xE9 pole s informacemi


## Instalace

### Build from source (doporu\u010Den\xE9)

\`yarn && yarn build\`

### Provided stable build

\`javascript: void($.getScript('https://cdn.jsdelivr.net/gh/DSroD/tribal-wars-scripts/HelpGen/dist/main.js?raw'))\`

## Disclaimer

Tento software je poskytovan\xFD *"AS IS"* - nen\xED ru\u010Deno za udr\u017Eov\xE1n\xED funk\u010Dnosti, p\u0159\xEDapdn\xE9 chyby ani nekompatibility s jin\xFDm software.
`,ql="A simple script that adds an additional button to the village options on map. This button selects the village as an origin for the unit travel time calculations.",Xl="Skript *MapRuler* p\u0159id\xE1v\xE1 mo\u017Enost zvolit po\u010D\xE1te\u010Dn\xED vesnici pro v\xFDpo\u010Dty doby trv\xE1n\xED cesty jednotliv\xFDch vojensk\xFDch jednotek.",Kl=`# MapRuler

A simple script that adds an additional button to the village options on map. This button selects the village as an origin for the unit travel time calculations.

## Build

\`yarn && yarn build\`

Generate \`index.js\` file with minified code.

## Pou\u017Eit\xED

Requires premium account.

\`javascript: void($.getScript('https://cdn.jsdelivr.net/gh/DSroD/tribal-wars-scripts/MapRuler/index.js?raw'))\`

After running the script, all villages will have an additional button in the context menu, allowing for change of origin for unit travel time calculations.

![Showcase](/tribal-wars-scripts/img/map-ruler.png)

![Showcase](/tribal-wars-scripts/img/map-ruler2.png)`,Zl=`# MapRuler

Skript p\u0159id\xE1v\xE1 mo\u017Enost zvolit libovolnou vesnici jako po\u010D\xE1te\u010Dn\xED bod pro v\xFDpo\u010Dty doby cesty jednotek mezi vesnicemi.

## Build

\`yarn && yarn build\`

Vygeneruje \`index.js\` soubor s minifikovan\xFDm k\xF3dem.

## Pou\u017Eit\xED

Skript vy\u017Eaduje pr\xE9miov\xFD \xFA\u010Det.

\`javascript: void($.getScript('https://cdn.jsdelivr.net/gh/DSroD/tribal-wars-scripts/MapRuler/index.js?raw'))\`

Po spu\u0161t\u011Bn\xED skriptu se mezi kontextov\xFDmi tla\u010D\xEDtky, kter\xE9 se zobrazuj\xED po kliknut\xED na vesnici na map\u011B, bude zobrazovat i tla\u010D\xEDtko dovoluj\xEDc\xED zm\u011Bnit po\u010D\xE1te\u010Dn\xED bod pro v\xFDpo\u010Dty doby cesty jednotek na vybranou vesnici.

![Uk\xE1zka](/tribal-wars-scripts/img/map-ruler.png)

![Uk\xE1zka2](/tribal-wars-scripts/img/map-ruler2.png)`,Jl="Minimal SCHEME inspired language. Contains basic binary and unary operations over numeric type, `cdr` and `car` to access list elements, `lambda` expressions and also variables tied directly to the game, such as resources, population or coordinates of current village. As accrding to rules, this language does not allow to automate any aspects of the game.",Ql="Minim\xE1ln\xED jazyk inspirovan\xFD SCHEMEm. Obsahuje z\xE1kladn\xED sadu bin\xE1rn\xEDch a un\xE1rn\xEDch operand\u016F nad numerick\xFDm typem, `cdr` a `car` pro p\u0159\xEDstup k element\u016Fm listu, `lambda` expressions pro definici funkc\xED. D\xE1le obsahuje prom\u011Bnn\xE9 nav\xE1zan\xE9 p\u0159\xEDmo na instanci hry, jako nap\u0159. po\u010Det surovin, populaci, koordin\xE1ty moment\xE1ln\xED vesnice. Nijak nedovoluje p\u0159\xEDmo automatizovat hru.",ec='# TWLang\n\nJednoduch\xFD jazyk inspirovan\xFD jazykem SCHEME. Umo\u017E\u0148uje p\u0159\xEDstup k prom\u011Bnn\xFDm ve h\u0159e a prov\xE1d\u011Bn\xED operac\xED nad nimi s mo\u017Enost\xED definic\xED vlastn\xEDch lambda expressions.\n\n## REPL\nSkript: `javascript: void($.getScript(\'https://cdn.jsdelivr.net/gh/DSroD/tribal-wars-scripts/TWLang/dist/main.js?raw\'))`\nSpu\u0161t\u011Bn\xEDm skriptu se zobraz\xED okno REPL pro TWLang. K\xF3d se evaluuje po stisknut\xED tla\u010D\xEDtka `eval` nebo pomoc\xED kl\xE1vesov\xE9 zkratky `Ctrl+Enter`\n\n![Uk\xE1zka](/tribal-wars-scripts/img/twlang_repl.png)\n\n## Typy\n\nObjekty v TWLang mohou m\xEDt n\xE1sleduj\xEDc\xED typy:\n- `Void` - pr\xE1zdn\xFD typ (`#nil`)\n- `Number` - \u010D\xEDslo\n- `Bool` - true/false\n- `String` - textov\xFD \u0159et\u011Bzec\n- `Lambda` - lambda expression\n- `List` - list objekt\u016F (ne nutn\u011B stejn\xE9ho typu)\n\n## Syntax\n\nJazyk kop\xEDruje syntax SCHEME.\n\n### P\u0159\xEDklady\n\n- Vol\xE1n\xED funkce `f` s parametry `1` (: `Number`), `"x"` (: `String`) a `t` (prom\u011Bnn\xE1 nezn\xE1m\xE9ho typu)  \n    \n    - `(f 1 "x" t)`\n\n\n- Definice prom\u011Bnn\xE9 pomoc\xED `define`  \n\n    - `(define x 10)`  \n    - `(define x (+ 5 6 7 8))`\n\n- Procedur\xE1n\xED vyhodnocen\xED pomoc\xED `begin` (v\xFDsledkem bude `20`)\n    - `(begin\n        (define a (sqr 2)) \n        (define b (sqr 4)) \n        (+ a b) \n    )`\n\n- Zaveden\xED lambdy (`x^3` a zadefinov\xE1n\xED znaku `second` pro lambdu kter\xE1 vr\xE1t\xED druh\xFD element listu)  \n    - `(lambda (x) (* x x x))`  \n    - `(define second (lambda (list) (car (cdr list))))`\n\n\n## std\n\nStandardn\xED env obsahuje n\xE1sleduj\xEDc\xED objekty\n- `wood` : `Number` - mno\u017Estv\xED d\u0159eva v moment\xE1ln\xED vesnici\n- `iron` : `Number` - mno\u017Estv\xED \u017Eeleza v moment\xE1ln\xED vesnici\n- `stone` : `Number` - mno\u017Estv\xED hl\xEDny v moment\xE1ln\xED vesnici\n- `storage` : `Number` - maxim\xE1ln\xED kapacita skladu v moment\xE1ln\xED vesnici\n- `wood-pm` : `Number` - produkce d\u0159eva za minutu v moment\xE1ln\xED vesnici\n- `iron-pm` : `Number` - produkce \u017Eeleza za minutu v moment\xE1ln\xED vesnici\n- `stone-pm` : `Number` - produkce hl\xEDny za minutu v moment\xE1ln\xED vesnici\n- `popul` : `Number` - populace v moment\xE1ln\xED vesnici\n- `popul-max` : `Number` - maxim\xE1ln\xED populace v moment\xE1ln\xED vesnici\n- `village-name` : `String` - jm\xE9no vesnice\n- `coords` : `List` : `(Number Number)` - koordin\xE1ty moment\xE1lnn\xED vesnice\n- `speed-spear` : `Number` - z\xE1kladn\xED rychlost kop\xEDn\xEDka (nez\xE1visle na sv\u011Bt\u011B, viz. wiki) (minut za 1 pole)\n- `speed-sword` : `Number` - z\xE1kladn\xED rychlost \u0161erm\xED\u0159e (minut za 1 pole)\n- `speed-axe` : `Number` - z\xE1kladn\xED rychlost sekern\xEDka (minut za 1 pole)\n- `speed-archer` : `Number` - z\xE1kladn\xED rychlost lu\u010Di\u0161tn\xEDka (minut za 1 pole)\n- `speed-spy` : `Number` - z\xE1kladn\xED rychlost \u0161peha (minut za 1 pole)\n- `speed-light` : `Number` - z\xE1kladn\xED rychlost lehk\xE9 kvalerie (minut za 1 pole)\n- `speed-marcher` : `Number` - z\xE1kladn\xED rychlost lu\u010Di\u0161tn\xEDka na koni (minut za 1 pole)\n- `speed-heavy` : `Number` - z\xE1kladn\xED rychlost t\u011B\u017Ek\xE9 kvalerie (minut za 1 pole)\n- `speed-ram` : `Number` - z\xE1kladn\xED rychlost beranidla (minut za 1 pole)\n- `speed-catapult` : `Number` - z\xE1kladn\xED rychlost katapultu (minut za 1 pole)\n- `speed-knight` : `Number` - z\xE1kladn\xED rychlost paladina (minut za 1 pole)\n- `speed-snob` : `Number` - z\xE1kladn\xED rychlost \u0161lechtice (minut za 1 pole)\n- `world-speed` : `Number` - rychlost sv\u011Bta\n- `unit-speed` : `Number` - rychlost jednotek\n\n- `+` : `(Number ...) => Number` - s\u010D\xEDt\xE1n\xED \u010D\xEDsel\n- `-` : `(Number ...) => Number` - od\u010D\xEDt\xE1n\xED \u010D\xEDsel\n- `*` : `(Number ...) => Number` - n\xE1soben\xED \u010D\xEDsel\n- `/` : `(Number Number) => Number` - d\u011Blen\xED 2 \u010D\xEDsel\n- `sqr` : (Number) => Number` - druh\xE1 mocnina \u010D\xEDsla\n- `sqrt` : `(Number) => Number` - druh\xE1 odmocnina \u010D\xEDsla\n- `car` : `List => any` - prvn\xED element listu\n- `cdr` : `List => List` - list bez prvn\xEDho elementu\n- `persist-var` : `any => Void` - ulo\u017Een\xED prom\u011Bnn\xE9 do persisted storage (separ\xE1tn\xED pro ka\u017Ed\xFD sv\u011Bt, umo\u017En\xED p\u0159\xEDstup k prom\u011Bnn\xFDm i po restartu okna s REPL)\n\n## TODO\n\n- if expression\n- roz\u0161\xED\u0159en\xED std knihovny a roz\u0161\xED\u0159en\xED hern\xEDch prom\u011Bnn\xFDch\n- konstruktory pro list m\xEDsto implicitn\xEDho p\u0159edpokladu listu\n- type check funkce\n- persist-var namespacing',nc=`# Market Request Sort

This script adds buttons to sort some tables in game (A = ascending, D = descending)

![Uk\xE1zka](/tribal-wars-scripts/img/market-request-sort.png)

## Usage

\`javascript: void($.getScript('https://cdn.jsdelivr.net/gh/DSroD/tribal-wars-scripts/TablesSort/main.js?raw'))\``,tc=`# Tables Sort

Tento skript p\u0159id\xE1v\xE1 tla\u010D\xEDtka pro se\u0159azen\xED (A = ascending - vzestupn\xE9, D = descending - sestupn\xE9) do tabulek ve h\u0159e.

Moment\xE1ln\u011B funguje v okn\u011B informac\xED o hr\xE1\u010Di, kde se\u0159azuje vesnice a v okn\u011B 'Po\u017E\xE1dat' v tr\u017Ei\u0161ti.

![Uk\xE1zka](/tribal-wars-scripts/img/market-request-sort.png)

## Pou\u017Eit\xED

Do z\xE1lo\u017Eky / li\u0161ty rychl\xE9ho n\xE1hledu p\u0159idejte

\`javascript: void($.getScript('https://cdn.jsdelivr.net/gh/DSroD/tribal-wars-scripts/TablesSort/main.js?raw'))\``,gn=new Map([["reminders",{name:"Reminders",desc:{cs:Fl,en:Ul},text:{cs:Wl,en:Hl}}],["helpgen",{name:"HelpGen",desc:{cs:Yl,en:Bl},text:{cs:Vl,en:Gl}}],["twlang",{name:"TWLang",desc:{cs:Ql,en:Jl},text:{cs:ec,en:"TBD..."}}],["tables-sort",{name:"Tables Sort",desc:{cs:"P\u0159id\xE1n\xED tla\u010D\xEDtek pro se\u0159azen\xED r\u016Fzn\xFDch tabulek.",en:"Sorting buttons for various tables."},text:{cs:tc,en:nc}}],["map-ruler",{name:"Map Ruler",desc:{cs:Xl,en:ql},text:{cs:Zl,en:Kl}}]]),rc={cs:"Skripty",en:"Scripts"};function ac(e,n,t){return O("div",{children:[O("h3",{class:"text-xl font-bold mb-2 pt-2",children:O(Hr,{class:"text-red-500 hover:text-red-700",href:`/scripts/${e}/`,children:n.name})}),O(Ua,{options:Fa,children:n.desc[t]})]})}function ic({path:e,script_name:n}){var r;const{lang:t}=Bn(st);return!!n&&gn.has(n)?O(D,{children:O(Ua,{options:Fa,children:(r=gn.get(n))==null?void 0:r.text[t]})}):O(D,{children:[O("h2",{class:"font-bold text-2xl mb-2",children:rc[t]}),O("div",{class:"flex flex-col divide-y-2 divide-red-700 space-y-1",children:Array.from(gn.entries()).map(a=>ac(a[0],a[1],t))})]})}function Qe(){return Qe=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Qe.apply(this,arguments)}var pe;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(pe||(pe={}));var dr=function(e){return e},pr="beforeunload",oc="hashchange",sc="popstate";function lc(e){e===void 0&&(e={});var n=e,t=n.window,r=t===void 0?document.defaultView:t,a=r.history;function i(){var b=gr(r.location.hash.substr(1)),A=b.pathname,I=A===void 0?"/":A,L=b.search,j=L===void 0?"":L,F=b.hash,V=F===void 0?"":F,Y=a.state||{};return[Y.idx,dr({pathname:I,search:j,hash:V,state:Y.usr||null,key:Y.key||"default"})]}var o=null;function l(){if(o)s.call(o),o=null;else{var b=pe.Pop,A=i(),I=A[0],L=A[1];if(s.length){if(I!=null){var j=c-I;j&&(o={action:b,location:L,retry:function(){C(j*-1)}},C(j))}}else k(b)}}r.addEventListener(sc,l),r.addEventListener(oc,function(){var b=i(),A=b[1];bn(A)!==bn(p)&&l()});var u=pe.Pop,d=i(),c=d[0],p=d[1],v=hr(),s=hr();c==null&&(c=0,a.replaceState(Qe({},a.state,{idx:c}),""));function m(){var b=document.querySelector("base"),A="";if(b&&b.getAttribute("href")){var I=r.location.href,L=I.indexOf("#");A=L===-1?I:I.slice(0,L)}return A}function f(b){return m()+"#"+(typeof b=="string"?b:bn(b))}function h(b,A){return A===void 0&&(A=null),dr(Qe({pathname:p.pathname,hash:"",search:""},typeof b=="string"?gr(b):b,{state:A,key:cc()}))}function g(b,A){return[{usr:b.state,key:b.key,idx:A},f(b)]}function y(b,A,I){return!s.length||(s.call({action:b,location:A,retry:I}),!1)}function k(b){u=b;var A=i();c=A[0],p=A[1],v.call({action:u,location:p})}function $(b,A){var I=pe.Push,L=h(b,A);function j(){$(b,A)}if(y(I,L,j)){var F=g(L,c+1),V=F[0],Y=F[1];try{a.pushState(V,"",Y)}catch{r.location.assign(Y)}k(I)}}function S(b,A){var I=pe.Replace,L=h(b,A);function j(){S(b,A)}if(y(I,L,j)){var F=g(L,c),V=F[0],Y=F[1];a.replaceState(V,"",Y),k(I)}}function C(b){a.go(b)}var N={get action(){return u},get location(){return p},createHref:f,push:$,replace:S,go:C,back:function(){C(-1)},forward:function(){C(1)},listen:function(A){return v.push(A)},block:function(A){var I=s.push(A);return s.length===1&&r.addEventListener(pr,vr),function(){I(),s.length||r.removeEventListener(pr,vr)}}};return N}function vr(e){e.preventDefault(),e.returnValue=""}function hr(){var e=[];return{get length(){return e.length},push:function(t){return e.push(t),function(){e=e.filter(function(r){return r!==t})}},call:function(t){e.forEach(function(r){return r&&r(t)})}}}function cc(){return Math.random().toString(36).substr(2,8)}function bn(e){var n=e.pathname,t=n===void 0?"/":n,r=e.search,a=r===void 0?"":r,i=e.hash,o=i===void 0?"":i;return a&&a!=="?"&&(t+=a.charAt(0)==="?"?a:"?"+a),o&&o!=="#"&&(t+=o.charAt(0)==="#"?o:"#"+o),t}function gr(e){var n={};if(e){var t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));var r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}var br;const en=(br={BASE_URL:"/tribal-wars-scripts/",MODE:"production",DEV:!1,PROD:!0}.VITE_BASE_URL)!=null?br:"/",uc=e=>({listen:n=>e.listen(({location:t})=>n(t)),location:e.location,push:e.push,replace:e.replace}),st=Fn({lang:"cs"});var _r;const fc=(_r=localStorage.getItem("lang"))!=null?_r:"cs";function mc(){const[e,n]=$e(fc),t=jr(r=>{n(r),localStorage.setItem("lang",r)},[n]);return O(st.Provider,{value:{lang:e,setLang:t},children:[O(Ds,{}),O("article",{class:"container sm:mt-4 lg:max-w-3xl mx-auto p-4",children:O(Fr,{history:uc(lc()),children:[O(si,{path:en}),O(ic,{path:`${en}scripts/:script_name?`}),O(li,{default:!0})]})})]})}ge(O(mc,{}),document.getElementById("app"));
