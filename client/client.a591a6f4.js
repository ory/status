function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function s(){return Object.create(null)}function r(e){e.forEach(n)}function o(e){return"function"==typeof e}function a(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function i(e,n,s,r){return e[1]&&r?t(s.ctx.slice(),e[1](r(n))):s.ctx}function c(e,t,n,s,r,o,a){const c=function(e,t,n,s){if(e[2]&&s){const r=e[2](s(n));if(void 0===t.dirty)return r;if("object"==typeof r){const e=[],n=Math.max(t.dirty.length,r.length);for(let s=0;s<n;s+=1)e[s]=t.dirty[s]|r[s];return e}return t.dirty|r}return t.dirty}(t,s,r,o);if(c){const r=i(t,n,s,a);e.p(r,c)}}function l(e){const t={};for(const n in e)"$"!==n[0]&&(t[n]=e[n]);return t}function u(e){return null==e?"":e}let f=!1;const h=new Set;function d(e,t){f&&h.delete(t),t.parentNode!==e&&e.appendChild(t)}function p(e,t,n){f&&h.delete(t),(t.parentNode!==e||n&&t.nextSibling!==n)&&e.insertBefore(t,n||null)}function m(e){f?h.add(e):e.parentNode&&e.parentNode.removeChild(e)}function g(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function b(e){return document.createElement(e)}function y(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function v(e){return document.createTextNode(e)}function $(){return v(" ")}function w(){return v("")}function _(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function E(e){return function(t){return t.preventDefault(),e.call(this,t)}}function S(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function x(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const s in t)null==t[s]?e.removeAttribute(s):"style"===s?e.style.cssText=t[s]:"__value"===s?e.value=e[s]=t[s]:n[s]&&n[s].set?e[s]=t[s]:S(e,s,t[s])}function A(e){return Array.from(e.childNodes)}function T(e,t,n,s){for(;e.length>0;){const s=e.shift();if(s.nodeName===t){let e=0;const t=[];for(;e<s.attributes.length;){const r=s.attributes[e++];n[r.name]||t.push(r.name)}for(let e=0;e<t.length;e++)s.removeAttribute(t[e]);return s}m(s)}return s?y(t):b(t)}function I(e,t){for(let n=0;n<e.length;n+=1){const s=e[n];if(3===s.nodeType)return s.data=""+t,e.splice(n,1)[0]}return v(t)}function P(e){return I(e," ")}function N(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function R(e,t){e.value=null==t?"":t}let L,O;function k(){if(void 0===L){L=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(e){L=!0}}return L}function C(e,t){"static"===getComputedStyle(e).position&&(e.style.position="relative");const n=b("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const s=k();let r;return s?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",r=_(window,"message",(e=>{e.source===n.contentWindow&&t()}))):(n.src="about:blank",n.onload=()=>{r=_(n.contentWindow,"resize",t)}),d(e,n),()=>{(s||r&&n.contentWindow)&&r(),m(n)}}function H(e,t=document.body){return Array.from(t.querySelectorAll(e))}class U{constructor(e=null){this.a=e,this.e=this.n=null}m(e,t,n=null){this.e||(this.e=b(t.nodeName),this.t=t,this.h(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)p(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(m)}}function j(e){O=e}function M(){if(!O)throw new Error("Function called outside component initialization");return O}function D(e){M().$$.on_mount.push(e)}function G(e){M().$$.after_update.push(e)}function q(e){M().$$.on_destroy.push(e)}const B=[],z=[],K=[],W=[],J=Promise.resolve();let V=!1;function F(e){K.push(e)}let Y=!1;const Q=new Set;function X(){if(!Y){Y=!0;do{for(let e=0;e<B.length;e+=1){const t=B[e];j(t),Z(t.$$)}for(j(null),B.length=0;z.length;)z.pop()();for(let e=0;e<K.length;e+=1){const t=K[e];Q.has(t)||(Q.add(t),t())}K.length=0}while(B.length);for(;W.length;)W.pop()();V=!1,Y=!1,Q.clear()}}function Z(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(F)}}const ee=new Set;let te;function ne(){te={r:0,c:[],p:te}}function se(){te.r||r(te.c),te=te.p}function re(e,t){e&&e.i&&(ee.delete(e),e.i(t))}function oe(e,t,n,s){if(e&&e.o){if(ee.has(e))return;ee.add(e),te.c.push((()=>{ee.delete(e),s&&(n&&e.d(1),s())})),e.o(t)}}function ae(e,t){const n={},s={},r={$$scope:1};let o=e.length;for(;o--;){const a=e[o],i=t[o];if(i){for(const e in a)e in i||(s[e]=1);for(const e in i)r[e]||(n[e]=i[e],r[e]=1);e[o]=i}else for(const e in a)r[e]=1}for(const e in s)e in n||(n[e]=void 0);return n}function ie(e){return"object"==typeof e&&null!==e?e:{}}function ce(e){e&&e.c()}function le(e,t){e&&e.l(t)}function ue(e,t,s,a){const{fragment:i,on_mount:c,on_destroy:l,after_update:u}=e.$$;i&&i.m(t,s),a||F((()=>{const t=c.map(n).filter(o);l?l.push(...t):r(t),e.$$.on_mount=[]})),u.forEach(F)}function fe(e,t){const n=e.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function he(e,t){-1===e.$$.dirty[0]&&(B.push(e),V||(V=!0,J.then(X)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function de(t,n,o,a,i,c,l=[-1]){const u=O;j(t);const d=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:i,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:n.context||[]),callbacks:s(),dirty:l,skip_bound:!1};let p=!1;if(d.ctx=o?o(t,n.props||{},((e,n,...s)=>{const r=s.length?s[0]:n;return d.ctx&&i(d.ctx[e],d.ctx[e]=r)&&(!d.skip_bound&&d.bound[e]&&d.bound[e](r),p&&he(t,e)),n})):[],d.update(),p=!0,r(d.before_update),d.fragment=!!a&&a(d.ctx),n.target){if(n.hydrate){f=!0;const e=A(n.target);d.fragment&&d.fragment.l(e),e.forEach(m)}else d.fragment&&d.fragment.c();n.intro&&re(t.$$.fragment),ue(t,n.target,n.anchor,n.customElement),function(){f=!1;for(const e of h)e.parentNode.removeChild(e);h.clear()}(),X()}j(u)}class pe{$destroy(){fe(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const me=[];function ge(t,n=e){let s;const r=[];function o(e){if(a(t,e)&&(t=e,s)){const e=!me.length;for(let e=0;e<r.length;e+=1){const n=r[e];n[1](),me.push(n,t)}if(e){for(let e=0;e<me.length;e+=2)me[e][0](me[e+1]);me.length=0}}}return{set:o,update:function(e){o(e(t))},subscribe:function(a,i=e){const c=[a,i];return r.push(c),1===r.length&&(s=n(o)||e),a(t),()=>{const e=r.indexOf(c);-1!==e&&r.splice(e,1),0===r.length&&(s(),s=null)}}}}const be={};var ye={owner:"ory",repo:"status",sites:[{name:"Website",url:"https://www.ory.sh"},{name:"Kubernetes Helm Charts",url:"http://k8s.ory.sh/helm/"},{name:"Ory Console",url:"https://console.ory.sh/login",expectedStatusCodes:[200,302]},{name:"Ory Kratos API",url:"https://project.console.ory.sh/api/kratos/public/health/ready"},{name:"Slack Invite Bot",url:"https://slack.ory.sh/"},{name:"SQA Web API",url:"$SECRET_SQA_WEB_SITE"},{name:"SQA API",url:"$SECRET_SQA_SITE",expectedStatusCodes:[200,201,404]},{name:"Corsar API",url:"https://corsar.ory.sh/orgs/ory/repos?__host=api.github.com&__proto=https&per_page=10&page=1"}],"status-website":{cname:"status.ory.sh",logoUrl:"https://raw.githubusercontent.com/upptime/upptime.js.org/master/static/img/icon.svg",name:"Ory Status",introTitle:"Ory Builds Open Source Identity Infrastructure and Services.",introMessage:"This is Ory's real-time status page.",navbar:[{title:"Status",href:"/"},{title:"Website",href:"https://www.ory.sh/"},{title:"GitHub",href:"https://github.com/$OWNER/$REPO"}]},commitMessages:{commitAuthorName:"ory-bot",commitAuthorEmail:"60093411+ory-bot@users.noreply.github.com"},workflowSchedule:{graphs:"0 0 * * *",responseTime:"0 23 * * *",staticSite:"0 1 * * *",summary:"0 0 * * *",updateTemplate:"0 0 * * *",updates:"0 3 * * *",uptime:"*/5 * * * *"},path:"https://status.ory.sh",i18n:{activeIncidents:"Active Incidents",allSystemsOperational:"All systems are operational",incidentReport:"Incident #$NUMBER report →",activeIncidentSummary:"Opened at $DATE with $POSTS posts",incidentTitle:"Incident $NUMBER Details",incidentDetails:"Incident Details",incidentFixed:"Fixed",incidentOngoing:"Ongoing",incidentOpenedAt:"Opened at",incidentClosedAt:"Closed at",incidentSubscribe:"Subscribe to Updates",incidentViewOnGitHub:"View on GitHub",incidentCommentSummary:"Posted at $DATE by $AUTHOR",incidentBack:"← Back to all incidents",pastIncidents:"Past Incidents",pastIncidentsResolved:"Resolved in $MINUTES minutes with $POSTS posts",liveStatus:"Live Status",overallUptime:"Overall uptime: $UPTIME",overallUptimeTitle:"Overall uptime",averageResponseTime:"Average response time: $TIMEms",averageResponseTimeTitle:"Average response",sevelDayResponseTime:"7-day response time",responseTimeMs:"Response time (ms)",up:"Up",down:"Down",degraded:"Degraded",ms:"ms",loading:"Loading",navGitHub:"GitHub",footer:"This page is [open source]($REPO), powered by [Upptime](https://upptime.js.org)",rateLimitExceededTitle:"Rate limit exceedeed",rateLimitExceededIntro:"You have exceeded the number of requests you can do in an hour, so you'll have to wait before accessing this website again. Alternately, you can add a GitHub Personal Access Token to continue to use this website.",rateLimitExceededWhatDoesErrorMean:"What does this error mean?",rateLimitExceededErrorMeaning:"This website uses the GitHub API to access real-time data about our websites' status. By default, GitHub allows each IP address 60 requests per hour, which you have consumed.",rateLimitExceededErrorHowCanFix:"How can I fix it?",rateLimitExceededErrorFix:"You can wait for another hour and your IP address' limit will be restored. Alternately, you can add your GitHub Personal Access Token, which gives you an additional 5,000 requests per hour.",rateLimitExceededGeneratePAT:"Learn how to generate a Personal Access Token",rateLimitExceededHasSet:"You have a personal access token set.",rateLimitExceededRemoveToken:"Remove token",rateLimitExceededGitHubPAT:"GitHub Personal Access Token",rateLimitExceededCopyPastePAT:"Copy and paste your token",rateLimitExceededSaveToken:"Save token",errorTitle:"An error occurred",errorIntro:"An error occurred in trying to get the latest status details.",errorText:"You can try again in a few moments.",errorHome:"Go to the homepage",pastScheduledMaintenance:"Past Scheduled Maintenance",scheduledMaintenance:"Scheduled Maintenance",scheduledMaintenanceSummaryStarted:"Started at $DATE for $DURATION minutes",scheduledMaintenanceSummaryStarts:"Starts at $DATE for $DURATION minutes",startedAt:"Started at",startsAt:"Starts at",duration:"Duration",durationMin:"$DURATION minutes",incidentCompleted:"Completed",incidentScheduled:"Scheduled"}};function ve(e,t,n){const s=e.slice();return s[1]=t[n],s}function $e(t){let n,s,r,o=ye["status-website"]&&!ye["status-website"].hideNavLogo&&function(t){let n,s;return{c(){n=b("img"),this.h()},l(e){n=T(e,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){S(n,"alt",""),n.src!==(s=ye["status-website"].logoUrl)&&S(n,"src",s),S(n,"class","svelte-a08hsz")},m(e,t){p(e,n,t)},p:e,d(e){e&&m(n)}}}(),a=ye["status-website"]&&!ye["status-website"].hideNavTitle&&function(t){let n,s,r=ye["status-website"].name+"";return{c(){n=b("div"),s=v(r)},l(e){n=T(e,"DIV",{});var t=A(n);s=I(t,r),t.forEach(m)},m(e,t){p(e,n,t),d(n,s)},p:e,d(e){e&&m(n)}}}();return{c(){n=b("div"),s=b("a"),o&&o.c(),r=$(),a&&a.c(),this.h()},l(e){n=T(e,"DIV",{});var t=A(n);s=T(t,"A",{href:!0,class:!0});var i=A(s);o&&o.l(i),r=P(i),a&&a.l(i),i.forEach(m),t.forEach(m),this.h()},h(){S(s,"href",ye["status-website"].logoHref||ye.path),S(s,"class","logo svelte-a08hsz")},m(e,t){p(e,n,t),d(n,s),o&&o.m(s,null),d(s,r),a&&a.m(s,null)},p(e,t){ye["status-website"]&&!ye["status-website"].hideNavLogo&&o.p(e,t),ye["status-website"]&&!ye["status-website"].hideNavTitle&&a.p(e,t)},d(e){e&&m(n),o&&o.d(),a&&a.d()}}}function we(e){let t,n,s,r,o,a=e[1].title+"";return{c(){t=b("li"),n=b("a"),s=v(a),o=$(),this.h()},l(e){t=T(e,"LI",{});var r=A(t);n=T(r,"A",{"aria-current":!0,href:!0,class:!0});var i=A(n);s=I(i,a),i.forEach(m),o=P(r),r.forEach(m),this.h()},h(){S(n,"aria-current",r=e[0]===("/"===e[1].href?void 0:e[1].href)?"page":void 0),S(n,"href",e[1].href.replace("$OWNER",ye.owner).replace("$REPO",ye.repo)),S(n,"class","svelte-a08hsz")},m(e,r){p(e,t,r),d(t,n),d(n,s),d(t,o)},p(e,t){1&t&&r!==(r=e[0]===("/"===e[1].href?void 0:e[1].href)?"page":void 0)&&S(n,"aria-current",r)},d(e){e&&m(t)}}}function _e(t){let n,s,r,o,a,i=ye["status-website"]&&ye["status-website"].logoUrl&&$e(),c=ye["status-website"]&&ye["status-website"].navbar&&function(e){let t,n=ye["status-website"].navbar,s=[];for(let t=0;t<n.length;t+=1)s[t]=we(ve(e,n,t));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=w()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=w()},m(e,n){for(let t=0;t<s.length;t+=1)s[t].m(e,n);p(e,t,n)},p(e,r){if(1&r){let o;for(n=ye["status-website"].navbar,o=0;o<n.length;o+=1){const a=ve(e,n,o);s[o]?s[o].p(a,r):(s[o]=we(a),s[o].c(),s[o].m(t.parentNode,t))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(e){g(s,e),e&&m(t)}}}(t),l=ye["status-website"]&&ye["status-website"].navbarGitHub&&!ye["status-website"].navbar&&function(t){let n,s,r,o=ye.i18n.navGitHub+"";return{c(){n=b("li"),s=b("a"),r=v(o),this.h()},l(e){n=T(e,"LI",{});var t=A(n);s=T(t,"A",{href:!0,class:!0});var a=A(s);r=I(a,o),a.forEach(m),t.forEach(m),this.h()},h(){S(s,"href",`https://github.com/${ye.owner}/${ye.repo}`),S(s,"class","svelte-a08hsz")},m(e,t){p(e,n,t),d(n,s),d(s,r)},p:e,d(e){e&&m(n)}}}();return{c(){n=b("nav"),s=b("div"),i&&i.c(),r=$(),o=b("ul"),c&&c.c(),a=$(),l&&l.c(),this.h()},l(e){n=T(e,"NAV",{class:!0});var t=A(n);s=T(t,"DIV",{class:!0});var u=A(s);i&&i.l(u),r=P(u),o=T(u,"UL",{class:!0});var f=A(o);c&&c.l(f),a=P(f),l&&l.l(f),f.forEach(m),u.forEach(m),t.forEach(m),this.h()},h(){S(o,"class","svelte-a08hsz"),S(s,"class","container svelte-a08hsz"),S(n,"class","svelte-a08hsz")},m(e,t){p(e,n,t),d(n,s),i&&i.m(s,null),d(s,r),d(s,o),c&&c.m(o,null),d(o,a),l&&l.m(o,null)},p(e,[t]){ye["status-website"]&&ye["status-website"].logoUrl&&i.p(e,t),ye["status-website"]&&ye["status-website"].navbar&&c.p(e,t),ye["status-website"]&&ye["status-website"].navbarGitHub&&!ye["status-website"].navbar&&l.p(e,t)},i:e,o:e,d(e){e&&m(n),i&&i.d(),c&&c.d(),l&&l.d()}}}function Ee(e,t,n){let{segment:s}=t;return e.$$set=e=>{"segment"in e&&n(0,s=e.segment)},[s]}class Se extends pe{constructor(e){super(),de(this,e,Ee,_e,a,{segment:0})}}var xe={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function Ae(e){return e.replace(RegExp("^"+(e.match(/^(\t| )+/)||"")[0],"gm"),"")}function Te(e){return(e+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ie(e,t){var n,s,r,o,a,i=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,c=[],l="",u=t||{},f=0;function h(e){var t=xe[e[1]||""],n=c[c.length-1]==e;return t?t[1]?(n?c.pop():c.push(e),t[0|n]):t[0]:e}function d(){for(var e="";c.length;)e+=h(c[c.length-1]);return e}for(e=e.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(e,t,n){return u[t.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");r=i.exec(e);)s=e.substring(f,r.index),f=i.lastIndex,n=r[0],s.match(/[^\\](\\\\)*\\$/)||((a=r[3]||r[4])?n='<pre class="code '+(r[4]?"poetry":r[2].toLowerCase())+'"><code'+(r[2]?' class="language-'+r[2].toLowerCase()+'"':"")+">"+Ae(Te(a).replace(/^\n+|\n+$/g,""))+"</code></pre>":(a=r[6])?(a.match(/\./)&&(r[5]=r[5].replace(/^\d+/gm,"")),o=Ie(Ae(r[5].replace(/^\s*[>*+.-]/gm,""))),">"==a?a="blockquote":(a=a.match(/\./)?"ol":"ul",o=o.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+a+">"+o+"</"+a+">"):r[8]?n='<img src="'+Te(r[8])+'" alt="'+Te(r[7])+'">':r[10]?(l=l.replace("<a>",'<a href="'+Te(r[11]||u[s.toLowerCase()])+'">'),n=d()+"</a>"):r[9]?n="<a>":r[12]||r[14]?n="<"+(a="h"+(r[14]?r[14].length:r[13]>"="?1:2))+">"+Ie(r[12]||r[15],u)+"</"+a+">":r[16]?n="<code>"+Te(r[16])+"</code>":(r[17]||r[1])&&(n=h(r[17]||"--"))),l+=s,l+=n;return(l+e.substring(f)+d()).replace(/^\n+|\n+$/g,"")}function Pe(e,t,n){const s=e.slice();return s[3]=t[n],s}function Ne(e,t,n){const s=e.slice();return s[3]=t[n],s}function Re(e,t,n){const s=e.slice();return s[8]=t[n],s}function Le(t){let n;return{c(){n=b("link"),this.h()},l(e){n=T(e,"LINK",{rel:!0,href:!0}),this.h()},h(){S(n,"rel","stylesheet"),S(n,"href",`${ye.path}/themes/${(ye["status-website"]||{}).theme||"light"}.css`)},m(e,t){p(e,n,t)},p:e,d(e){e&&m(n)}}}function Oe(t){let n;return{c(){n=b("link"),this.h()},l(e){n=T(e,"LINK",{rel:!0,href:!0}),this.h()},h(){S(n,"rel","stylesheet"),S(n,"href",(ye["status-website"]||{}).themeUrl)},m(e,t){p(e,n,t)},p:e,d(e){e&&m(n)}}}function ke(t){let n,s;return{c(){n=b("script"),this.h()},l(e){n=T(e,"SCRIPT",{src:!0,async:!0,defer:!0}),A(n).forEach(m),this.h()},h(){n.src!==(s=t[8].src)&&S(n,"src",s),n.async=!!t[8].async,n.defer=!!t[8].async},m(e,t){p(e,n,t)},p:e,d(e){e&&m(n)}}}function Ce(t){let n;return{c(){n=b("link"),this.h()},l(e){n=T(e,"LINK",{rel:!0,href:!0,media:!0}),this.h()},h(){S(n,"rel",t[3].rel),S(n,"href",t[3].href),S(n,"media",t[3].media)},m(e,t){p(e,n,t)},p:e,d(e){e&&m(n)}}}function He(t){let n;return{c(){n=b("meta"),this.h()},l(e){n=T(e,"META",{name:!0,content:!0}),this.h()},h(){S(n,"name",t[3].name),S(n,"content",t[3].content)},m(e,t){p(e,n,t)},p:e,d(e){e&&m(n)}}}function Ue(t){let n,s,r,o,a,l,u,f,h,y,v,_,E,x,I,N,R,L,O=Ie(ye.i18n.footer.replace(/\$REPO/,`https://github.com/${ye.owner}/${ye.repo}`))+"",k=(ye["status-website"]||{}).customHeadHtml&&function(t){let n,s,r=(ye["status-website"]||{}).customHeadHtml+"";return{c(){s=w(),this.h()},l(e){s=w(),this.h()},h(){n=new U(s)},m(e,t){n.m(r,e,t),p(e,s,t)},p:e,d(e){e&&m(s),e&&n.d()}}}();let C=((ye["status-website"]||{}).themeUrl?Oe:Le)(t),j=(ye["status-website"]||{}).scripts&&function(e){let t,n=(ye["status-website"]||{}).scripts,s=[];for(let t=0;t<n.length;t+=1)s[t]=ke(Re(e,n,t));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=w()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=w()},m(e,n){for(let t=0;t<s.length;t+=1)s[t].m(e,n);p(e,t,n)},p(e,r){if(0&r){let o;for(n=(ye["status-website"]||{}).scripts,o=0;o<n.length;o+=1){const a=Re(e,n,o);s[o]?s[o].p(a,r):(s[o]=ke(a),s[o].c(),s[o].m(t.parentNode,t))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(e){g(s,e),e&&m(t)}}}(t),M=(ye["status-website"]||{}).links&&function(e){let t,n=(ye["status-website"]||{}).links,s=[];for(let t=0;t<n.length;t+=1)s[t]=Ce(Ne(e,n,t));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=w()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=w()},m(e,n){for(let t=0;t<s.length;t+=1)s[t].m(e,n);p(e,t,n)},p(e,r){if(0&r){let o;for(n=(ye["status-website"]||{}).links,o=0;o<n.length;o+=1){const a=Ne(e,n,o);s[o]?s[o].p(a,r):(s[o]=Ce(a),s[o].c(),s[o].m(t.parentNode,t))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(e){g(s,e),e&&m(t)}}}(t),D=(ye["status-website"]||{}).metaTags&&function(e){let t,n=(ye["status-website"]||{}).metaTags,s=[];for(let t=0;t<n.length;t+=1)s[t]=He(Pe(e,n,t));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=w()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=w()},m(e,n){for(let t=0;t<s.length;t+=1)s[t].m(e,n);p(e,t,n)},p(e,r){if(0&r){let o;for(n=(ye["status-website"]||{}).metaTags,o=0;o<n.length;o+=1){const a=Pe(e,n,o);s[o]?s[o].p(a,r):(s[o]=He(a),s[o].c(),s[o].m(t.parentNode,t))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(e){g(s,e),e&&m(t)}}}(t),G=ye["status-website"].css&&function(t){let n,s,r=`<style>${ye["status-website"].css}</style>`;return{c(){s=w(),this.h()},l(e){s=w(),this.h()},h(){n=new U(s)},m(e,t){n.m(r,e,t),p(e,s,t)},p:e,d(e){e&&m(s),e&&n.d()}}}(),q=ye["status-website"].js&&function(t){let n,s,r=`<script>${ye["status-website"].js}<\/script>`;return{c(){s=w(),this.h()},l(e){s=w(),this.h()},h(){n=new U(s)},m(e,t){n.m(r,e,t),p(e,s,t)},p:e,d(e){e&&m(s),e&&n.d()}}}(),B=(ye["status-website"]||{}).customBodyHtml&&function(t){let n,s,r=(ye["status-website"]||{}).customBodyHtml+"";return{c(){s=w(),this.h()},l(e){s=w(),this.h()},h(){n=new U(s)},m(e,t){n.m(r,e,t),p(e,s,t)},p:e,d(e){e&&m(s),e&&n.d()}}}();_=new Se({props:{segment:t[0]}});const z=t[2].default,K=function(e,t,n,s){if(e){const r=i(e,t,n,s);return e[0](r)}}(z,t,t[1],null);return{c(){k&&k.c(),n=w(),C.c(),s=b("link"),r=b("link"),o=b("link"),j&&j.c(),a=w(),M&&M.c(),l=w(),D&&D.c(),u=w(),G&&G.c(),f=w(),q&&q.c(),h=w(),y=$(),B&&B.c(),v=$(),ce(_.$$.fragment),E=$(),x=b("main"),K&&K.c(),I=$(),N=b("footer"),R=b("p"),this.h()},l(e){const t=H('[data-svelte="svelte-ri9y7q"]',document.head);k&&k.l(t),n=w(),C.l(t),s=T(t,"LINK",{rel:!0,href:!0}),r=T(t,"LINK",{rel:!0,type:!0,href:!0}),o=T(t,"LINK",{rel:!0,type:!0,href:!0}),j&&j.l(t),a=w(),M&&M.l(t),l=w(),D&&D.l(t),u=w(),G&&G.l(t),f=w(),q&&q.l(t),h=w(),t.forEach(m),y=P(e),B&&B.l(e),v=P(e),le(_.$$.fragment,e),E=P(e),x=T(e,"MAIN",{class:!0});var i=A(x);K&&K.l(i),i.forEach(m),I=P(e),N=T(e,"FOOTER",{class:!0});var c=A(N);R=T(c,"P",{}),A(R).forEach(m),c.forEach(m),this.h()},h(){S(s,"rel","stylesheet"),S(s,"href",`${ye.path}/global.css`),S(r,"rel","icon"),S(r,"type","image/svg"),S(r,"href",(ye["status-website"]||{}).faviconSvg||(ye["status-website"]||{}).favicon||"https://raw.githubusercontent.com/koj-co/upptime/master/assets/icon.svg"),S(o,"rel","icon"),S(o,"type","image/png"),S(o,"href",(ye["status-website"]||{}).favicon||"/logo-192.png"),S(x,"class","container"),S(N,"class","svelte-jbr799")},m(e,t){k&&k.m(document.head,null),d(document.head,n),C.m(document.head,null),d(document.head,s),d(document.head,r),d(document.head,o),j&&j.m(document.head,null),d(document.head,a),M&&M.m(document.head,null),d(document.head,l),D&&D.m(document.head,null),d(document.head,u),G&&G.m(document.head,null),d(document.head,f),q&&q.m(document.head,null),d(document.head,h),p(e,y,t),B&&B.m(e,t),p(e,v,t),ue(_,e,t),p(e,E,t),p(e,x,t),K&&K.m(x,null),p(e,I,t),p(e,N,t),d(N,R),R.innerHTML=O,L=!0},p(e,[t]){(ye["status-website"]||{}).customHeadHtml&&k.p(e,t),C.p(e,t),(ye["status-website"]||{}).scripts&&j.p(e,t),(ye["status-website"]||{}).links&&M.p(e,t),(ye["status-website"]||{}).metaTags&&D.p(e,t),ye["status-website"].css&&G.p(e,t),ye["status-website"].js&&q.p(e,t),(ye["status-website"]||{}).customBodyHtml&&B.p(e,t);const n={};1&t&&(n.segment=e[0]),_.$set(n),K&&K.p&&(!L||2&t)&&c(K,z,e,e[1],t,null,null)},i(e){L||(re(_.$$.fragment,e),re(K,e),L=!0)},o(e){oe(_.$$.fragment,e),oe(K,e),L=!1},d(e){k&&k.d(e),m(n),C.d(e),m(s),m(r),m(o),j&&j.d(e),m(a),M&&M.d(e),m(l),D&&D.d(e),m(u),G&&G.d(e),m(f),q&&q.d(e),m(h),e&&m(y),B&&B.d(e),e&&m(v),fe(_,e),e&&m(E),e&&m(x),K&&K.d(e),e&&m(I),e&&m(N)}}}function je(e,t,n){let{$$slots:s={},$$scope:r}=t,{segment:o}=t;return e.$$set=e=>{"segment"in e&&n(0,o=e.segment),"$$scope"in e&&n(1,r=e.$$scope)},[o,r,s]}class Me extends pe{constructor(e){super(),de(this,e,je,Ue,a,{segment:0})}}function De(e){let t,n,s=e[1].stack+"";return{c(){t=b("pre"),n=v(s)},l(e){t=T(e,"PRE",{});var r=A(t);n=I(r,s),r.forEach(m)},m(e,s){p(e,t,s),d(t,n)},p(e,t){2&t&&s!==(s=e[1].stack+"")&&N(n,s)},d(e){e&&m(t)}}}function Ge(t){let n,s,r,o,a,i,c,l,u,f=t[1].message+"";document.title=n=t[0];let h=t[2]&&t[1].stack&&De(t);return{c(){s=$(),r=b("h1"),o=v(t[0]),a=$(),i=b("p"),c=v(f),l=$(),h&&h.c(),u=w(),this.h()},l(e){H('[data-svelte="svelte-1moakz"]',document.head).forEach(m),s=P(e),r=T(e,"H1",{class:!0});var n=A(r);o=I(n,t[0]),n.forEach(m),a=P(e),i=T(e,"P",{class:!0});var d=A(i);c=I(d,f),d.forEach(m),l=P(e),h&&h.l(e),u=w(),this.h()},h(){S(r,"class","svelte-17w3omn"),S(i,"class","svelte-17w3omn")},m(e,t){p(e,s,t),p(e,r,t),d(r,o),p(e,a,t),p(e,i,t),d(i,c),p(e,l,t),h&&h.m(e,t),p(e,u,t)},p(e,[t]){1&t&&n!==(n=e[0])&&(document.title=n),1&t&&N(o,e[0]),2&t&&f!==(f=e[1].message+"")&&N(c,f),e[2]&&e[1].stack?h?h.p(e,t):(h=De(e),h.c(),h.m(u.parentNode,u)):h&&(h.d(1),h=null)},i:e,o:e,d(e){e&&m(s),e&&m(r),e&&m(a),e&&m(i),e&&m(l),h&&h.d(e),e&&m(u)}}}function qe(e,t,n){let{status:s}=t,{error:r}=t;return e.$$set=e=>{"status"in e&&n(0,s=e.status),"error"in e&&n(1,r=e.error)},[s,r,false]}class Be extends pe{constructor(e){super(),de(this,e,qe,Ge,a,{status:0,error:1})}}function ze(e){let n,s,r;const o=[e[4].props];var a=e[4].component;function i(e){let n={};for(let e=0;e<o.length;e+=1)n=t(n,o[e]);return{props:n}}return a&&(n=new a(i())),{c(){n&&ce(n.$$.fragment),s=w()},l(e){n&&le(n.$$.fragment,e),s=w()},m(e,t){n&&ue(n,e,t),p(e,s,t),r=!0},p(e,t){const r=16&t?ae(o,[ie(e[4].props)]):{};if(a!==(a=e[4].component)){if(n){ne();const e=n;oe(e.$$.fragment,1,0,(()=>{fe(e,1)})),se()}a?(n=new a(i()),ce(n.$$.fragment),re(n.$$.fragment,1),ue(n,s.parentNode,s)):n=null}else a&&n.$set(r)},i(e){r||(n&&re(n.$$.fragment,e),r=!0)},o(e){n&&oe(n.$$.fragment,e),r=!1},d(e){e&&m(s),n&&fe(n,e)}}}function Ke(e){let t,n;return t=new Be({props:{error:e[0],status:e[1]}}),{c(){ce(t.$$.fragment)},l(e){le(t.$$.fragment,e)},m(e,s){ue(t,e,s),n=!0},p(e,n){const s={};1&n&&(s.error=e[0]),2&n&&(s.status=e[1]),t.$set(s)},i(e){n||(re(t.$$.fragment,e),n=!0)},o(e){oe(t.$$.fragment,e),n=!1},d(e){fe(t,e)}}}function We(e){let t,n,s,r;const o=[Ke,ze],a=[];function i(e,t){return e[0]?0:1}return t=i(e),n=a[t]=o[t](e),{c(){n.c(),s=w()},l(e){n.l(e),s=w()},m(e,n){a[t].m(e,n),p(e,s,n),r=!0},p(e,r){let c=t;t=i(e),t===c?a[t].p(e,r):(ne(),oe(a[c],1,1,(()=>{a[c]=null})),se(),n=a[t],n?n.p(e,r):(n=a[t]=o[t](e),n.c()),re(n,1),n.m(s.parentNode,s))},i(e){r||(re(n),r=!0)},o(e){oe(n),r=!1},d(e){a[t].d(e),e&&m(s)}}}function Je(e){let n,s;const r=[{segment:e[2][0]},e[3].props];let o={$$slots:{default:[We]},$$scope:{ctx:e}};for(let e=0;e<r.length;e+=1)o=t(o,r[e]);return n=new Me({props:o}),{c(){ce(n.$$.fragment)},l(e){le(n.$$.fragment,e)},m(e,t){ue(n,e,t),s=!0},p(e,[t]){const s=12&t?ae(r,[4&t&&{segment:e[2][0]},8&t&&ie(e[3].props)]):{};147&t&&(s.$$scope={dirty:t,ctx:e}),n.$set(s)},i(e){s||(re(n.$$.fragment,e),s=!0)},o(e){oe(n.$$.fragment,e),s=!1},d(e){fe(n,e)}}}function Ve(e,t,n){let{stores:s}=t,{error:r}=t,{status:o}=t,{segments:a}=t,{level0:i}=t,{level1:c=null}=t,{notify:l}=t;var u,f;return G(l),u=be,f=s,M().$$.context.set(u,f),e.$$set=e=>{"stores"in e&&n(5,s=e.stores),"error"in e&&n(0,r=e.error),"status"in e&&n(1,o=e.status),"segments"in e&&n(2,a=e.segments),"level0"in e&&n(3,i=e.level0),"level1"in e&&n(4,c=e.level1),"notify"in e&&n(6,l=e.notify)},[r,o,a,i,c,s,l]}class Fe extends pe{constructor(e){super(),de(this,e,Ve,Je,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const Ye=[],Qe=[{js:()=>Promise.all([import("./index.4a980bc4.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","index-5f8caab7.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./rate-limit-exceeded.3da43354.js"),__inject_styles(["client-04be1abb.css","rate-limit-exceeded-ec20dc01.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./[number].d2e55812.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-c4ffc2b4.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./[number].2a9cbb95.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-49f387e2.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./error.7f7feaf4.js"),__inject_styles(["client-04be1abb.css","error-64ad0d96.css"])]).then((function(e){return e[0]}))}],Xe=(Ze=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/rate-limit-exceeded\/?$/,parts:[{i:1}]},{pattern:/^\/incident\/([^/]+?)\/?$/,parts:[null,{i:2,params:e=>({number:Ze(e[1])})}]},{pattern:/^\/history\/([^/]+?)\/?$/,parts:[null,{i:3,params:e=>({number:Ze(e[1])})}]},{pattern:/^\/error\/?$/,parts:[{i:4}]}]);var Ze;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function et(e,t,n,s){return new(n||(n=Promise))((function(r,o){function a(e){try{c(s.next(e))}catch(e){o(e)}}function i(e){try{c(s.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}c((s=s.apply(e,t||[])).next())}))}function tt(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}let nt,st=1;const rt="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},ot={};let at,it;function ct(e){const t=Object.create(null);return e.length?(e=>"undefined"!=typeof URLSearchParams?[...new URLSearchParams(e).entries()]:e.slice(1).split("&").map((e=>{const[,t,n=""]=/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));return[t,n]})))(e).reduce(((e,[t,n])=>("string"==typeof e[t]&&(e[t]=[e[t]]),"object"==typeof e[t]?e[t].push(n):e[t]=n,e)),t):t}function lt(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(at))return null;let t=e.pathname.slice(at.length);if(""===t&&(t="/"),!Ye.some((e=>e.test(t))))for(let n=0;n<Xe.length;n+=1){const s=Xe[n],r=s.pattern.exec(t);if(r){const n=ct(e.search),o=s.parts[s.parts.length-1],a=o.params?o.params(r):{},i={host:location.host,path:t,query:n,params:a};return{href:e.href,route:s,match:r,page:i}}}}function ut(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;if(e.defaultPrevented)return;const t=tt(e.target);if(!t)return;if(!t.href)return;const n="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,s=String(n?t.href.baseVal:t.href);if(s===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(n?t.target.baseVal:t.target)return;const r=new URL(s);if(r.pathname===location.pathname&&r.search===location.search)return;const o=lt(r);if(o){dt(o,null,t.hasAttribute("sapper:noscroll"),r.hash),e.preventDefault(),rt.pushState({id:nt},"",r.href)}}function ft(){return{x:pageXOffset,y:pageYOffset}}function ht(e){if(ot[nt]=ft(),e.state){const t=lt(new URL(location.href));t?dt(t,e.state.id):location.href=location.href}else!function(e){st=e}(st+1),function(e){nt=e}(st),rt.replaceState({id:nt},"",location.href)}function dt(e,t,n,s){return et(this,void 0,void 0,(function*(){const r=!!t;if(r)nt=t;else{const e=ft();ot[nt]=e,nt=t=++st,ot[nt]=n?e:{x:0,y:0}}if(yield it(e),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let e,n=ot[t];s&&(e=document.getElementById(s.slice(1)),e&&(n={x:0,y:e.getBoundingClientRect().top+scrollY})),ot[nt]=n,n&&(r||e)?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function pt(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}let mt,gt=null;function bt(e){const t=tt(e.target);t&&t.hasAttribute("sapper:prefetch")&&function(e){const t=lt(new URL(e,pt(document)));if(t)gt&&e===gt.href||(gt={href:e,promise:kt(t)}),gt.promise}(t.href)}function yt(e){clearTimeout(mt),mt=setTimeout((()=>{bt(e)}),20)}function vt(e,t={noscroll:!1,replaceState:!1}){const n=lt(new URL(e,pt(document)));if(n){const s=dt(n,null,t.noscroll);return rt[t.replaceState?"replaceState":"pushState"]({id:nt},"",e),s}return location.href=e,new Promise((()=>{}))}const $t="undefined"!=typeof __SAPPER__&&__SAPPER__;let wt,_t,Et,St=!1,xt=[],At="{}";const Tt={page:function(e){const t=ge(e);let n=!0;return{notify:function(){n=!0,t.update((e=>e))},set:function(e){n=!1,t.set(e)},subscribe:function(e){let s;return t.subscribe((t=>{(void 0===s||n&&t!==s)&&e(s=t)}))}}}({}),preloading:ge(null),session:ge($t&&$t.session)};let It,Pt,Nt;function Rt(e,t){const{error:n}=e;return Object.assign({error:n},t)}function Lt(e){return et(this,void 0,void 0,(function*(){wt&&Tt.preloading.set(!0);const t=function(e){return gt&&gt.href===e.href?gt.promise:kt(e)}(e),n=_t={},s=yield t,{redirect:r}=s;if(n===_t)if(r)yield vt(r.location,{replaceState:!0});else{const{props:t,branch:n}=s;yield Ot(n,t,Rt(t,e.page))}}))}function Ot(e,t,n){return et(this,void 0,void 0,(function*(){Tt.page.set(n),Tt.preloading.set(!1),wt?wt.$set(t):(t.stores={page:{subscribe:Tt.page.subscribe},preloading:{subscribe:Tt.preloading.subscribe},session:Tt.session},t.level0={props:yield Et},t.notify=Tt.page.notify,wt=new Fe({target:Nt,props:t,hydrate:!0})),xt=e,At=JSON.stringify(n.query),St=!0,Pt=!1}))}function kt(e){return et(this,void 0,void 0,(function*(){const{route:t,page:n}=e,s=n.path.split("/").filter(Boolean);let r=null;const o={error:null,status:200,segments:[s[0]]},a={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(r&&(r.statusCode!==e||r.location!==t))throw new Error("Conflicting redirects");r={statusCode:e,location:t}},error:(e,t)=>{o.error="string"==typeof t?new Error(t):t,o.status=e}};if(!Et){const e=()=>({});Et=$t.preloaded[0]||e.call(a,{host:n.host,path:n.path,query:n.query,params:{}},It)}let i,c=1;try{const r=JSON.stringify(n.query),l=t.pattern.exec(n.path);let u=!1;i=yield Promise.all(t.parts.map(((t,i)=>et(this,void 0,void 0,(function*(){const f=s[i];if(function(e,t,n,s){if(s!==At)return!0;const r=xt[e];return!!r&&(t!==r.segment||!(!r.match||JSON.stringify(r.match.slice(1,e+2))===JSON.stringify(n.slice(1,e+2)))||void 0)}(i,f,l,r)&&(u=!0),o.segments[c]=s[i+1],!t)return{segment:f};const h=c++;let d;if(Pt||u||!xt[i]||xt[i].part!==t.i){u=!1;const{default:s,preload:r}=yield Qe[t.i].js();let o;o=St||!$t.preloaded[i+1]?r?yield r.call(a,{host:n.host,path:n.path,query:n.query,params:t.params?t.params(e.match):{}},It):{}:$t.preloaded[i+1],d={component:s,props:o,segment:f,match:l,part:t.i}}else d=xt[i];return o[`level${h}`]=d})))))}catch(e){o.error=e,o.status=500,i=[]}return{redirect:r,props:o,branch:i}}))}var Ct,Ht,Ut;Tt.session.subscribe((e=>et(void 0,void 0,void 0,(function*(){if(It=e,!St)return;Pt=!0;const t=lt(new URL(location.href)),n=_t={},{redirect:s,props:r,branch:o}=yield kt(t);n===_t&&(s?yield vt(s.location,{replaceState:!0}):yield Ot(o,r,Rt(r,t.page)))})))),Ct={target:document.querySelector("#sapper")},Ht=Ct.target,Nt=Ht,Ut=$t.baseUrl,at=Ut,it=Lt,"scrollRestoration"in rt&&(rt.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{rt.scrollRestoration="auto"})),addEventListener("load",(()=>{rt.scrollRestoration="manual"})),addEventListener("click",ut),addEventListener("popstate",ht),addEventListener("touchstart",bt),addEventListener("mousemove",yt),$t.error?Promise.resolve().then((()=>function(){const{host:e,pathname:t,search:n}=location,{session:s,preloaded:r,status:o,error:a}=$t;Et||(Et=r&&r[0]);const i={error:a,status:o,session:s,level0:{props:Et},level1:{props:{status:o,error:a},component:Be},segments:r},c=ct(n);Ot([],i,{host:e,path:t,query:c,params:{},error:a})}())):Promise.resolve().then((()=>{const{hash:e,href:t}=location;rt.replaceState({id:st},"",t);const n=lt(new URL(location.href));if(n)return dt(n,st,!0,e)}));export{fe as A,_ as B,r as C,z as D,u as E,H as F,Ie as G,U as H,y as I,vt as J,R as K,E as L,t as M,x as N,ae as O,G as P,q as Q,l as R,pe as S,ie as T,F as U,C as V,A as a,I as b,T as c,m as d,b as e,S as f,p as g,d as h,de as i,$ as j,P as k,ne as l,oe as m,e as n,se as o,re as p,D as q,ye as r,a as s,v as t,N as u,w as v,g as w,ce as x,le as y,ue as z};

import __inject_styles from './inject_styles.5607aec6.js';