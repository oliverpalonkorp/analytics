!function(i,o){"use strict";var e,l=i.location,s=i.document,t=s.querySelector('[src*="'+o+'"]'),c=t&&t.getAttribute("data-domain"),p=i.localStorage.plausible_ignore,u=t&&t.getAttribute("data-exclude").split(",");function g(e){console.warn("Ignoring Event: "+e)}function a(e,t){if(/^localhost$|^127(?:\.[0-9]+){0,2}\.[0-9]+$|^(?:0*\:)*?:?0*1$/.test(l.hostname)||"file:"===l.protocol)return g("localhost");if(!(i.phantom||i._phantom||i.__nightmare||i.navigator.webdriver||i.Cypress)){if("true"==p)return g("localStorage flag");if(u)for(var a=0;a<u.length;a++)if("pageview"==e&&l.pathname.match(new RegExp("^"+u[a].trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$")))return g("exclusion rule");var r={};r.n=e,r.u=l.href,r.d=c,r.r=s.referrer||null,r.w=i.innerWidth,t&&t.meta&&(r.m=JSON.stringify(t.meta)),t&&t.props&&(r.p=JSON.stringify(t.props)),r.h=1;var n=new XMLHttpRequest;n.open("POST",o+"/api/event",!0),n.setRequestHeader("Content-Type","text/plain"),n.send(JSON.stringify(r)),n.onreadystatechange=function(){4==n.readyState&&t&&t.callback&&t.callback()}}}function r(){e=l.pathname,a("pageview")}try{i.addEventListener("hashchange",r);var n=i.plausible&&i.plausible.q||[];i.plausible=a;for(var h=0;h<n.length;h++)a.apply(this,n[h]);"prerender"===s.visibilityState?s.addEventListener("visibilitychange",function(){e||"visible"!==s.visibilityState||r()}):r()}catch(e){console.error(e),(new Image).src=o+"/api/error?message="+encodeURIComponent(e.message)}}(window,"<%= base_url %>");