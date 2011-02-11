/*
 * LazyWrite - deferred document.write implementation
 * Version: 1.0 beta build 20110212
 * Website: http://github.com/xfsn/LazyWrite
 * 
 * Copyright (c) 2011 Shen Junru
 * Released under the MIT License.
 */
(function(u,h){var C=1,g=!-[1,],w=g?"onreadystatechange":"onload",k=u.write,v=u.writeln,b=u.createDocumentFragment(),r=u.createElement("div"),x=h,q=h,B=h,i=h,e=[],f=[],p=false,c=true,j=[].join,D=function(G,F){return G.appendChild(F)},n=function(F){return F.parentNode?F.parentNode.removeChild(F):F},a=function(G,F){return G.parentNode.replaceChild(F,G)&&F},t=function(){return u.createElement("span")},A=function l(G){var F=u.createElement("script");F.type=G.type;if(G.src){F.src=G.src}else{F.text=G.text}return F},z=function(G,F){if(F.src){F[w]=function(){var H=g&&F.readyState;if(!F.done&&(!H||/complete|loaded/.test(H))){if(H==="loaded"&&!F.loaded){F.loaded=true;setTimeout(arguments.callee)}else{F.done=true;F[w]=null;n(G);if(q===F){q=h;d()}}}};q=F;setTimeout(function(){D(G,F)})}else{F.text="try{"+F.text+"}catch(_ex_){}";D(G,F);n(G)}},s=function(F,G){if(G){if(!q){x=G.holder}z(G.holder,G.script=A(G.script));return !G.script.src}},y=function(G,F){while((F=s(G,f.shift()))){}return F!==false&&!q},o=function(H,I){if(g){r.innerHTML="<img />"+I;n(r.firstChild)}else{r.innerHTML=I}var G=[],F=r.getElementsByTagName("script");while(F[0]){G.push({script:F[0],holder:a(F[0],element=t())})}f=G.concat(f);while(r.firstChild){b.appendChild(r.firstChild)}if(B===H){i.parentNode.insertBefore(b,i)}else{i=b.appendChild(i||t());a(H,b)}B=H;if(G.length){c=y(H)}return c},E=function(F){return F&&o(u.getElementById(F.id),F.html)},m=function(F){while(E(e.shift())){}if(c&&!e.length){i&&n(i);u.write=k;u.writeln=v}},d=function(){c=true;if(y()){m()}};u.writeln=u.write=function(){var G,F=j.call(arguments,"");if(p){try{o(x,F)}catch(H){}}else{e.push({id:G="document_write_"+C++,html:F});k.call(u,'<span id="'+G+'"></span>')}};window.LazyWrite={write:function(){k.apply(u,arguments)},start:function(){if(p){return}p=true;m()}}})(document);
