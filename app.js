
(function(){var S=window.SITE,$=function(s,c){return(c||document).querySelector(s)},$$=function(s,c){return[].slice.call((c||document).querySelectorAll(s))};
function E(t,c,h){var e=document.createElement(t);if(c)e.className=c;if(h!==undefined)e.innerHTML=h;return e}
function esc(s){return String(s).replace(/[&<>"]/g,function(m){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]})}
var mb=$('.mb'),ln=$('.links');mb.onclick=function(){var o=ln.classList.toggle('open');mb.setAttribute('aria-expanded',o);mb.textContent=o?'✕':'☰'};
$$('[data-wa]').forEach(function(a){a.href='https://wa.me/'+S.whatsapp+'?text='+encodeURIComponent(a.getAttribute('data-wa'));a.target='_blank';a.rel='noopener'});
$$('[data-mail]').forEach(function(a){a.href='mailto:'+S.email;a.textContent=S.email});$$('[data-phone]').forEach(function(a){a.textContent=S.phone;a.href='tel:'+S.phone.replace(/\s/g,'')});
$$('.soc').forEach(function(b){for(var k in S.social){if(S.social[k]){var a=E('a','');a.href=S.social[k];a.target='_blank';a.rel='noopener';a.textContent=k;b.appendChild(a)}}});
$$('.yr').forEach(function(y){y.textContent=new Date().getFullYear()});
var pk=$('#pk');if(pk){var n=+pk.getAttribute('data-n')||S.packages.length;S.packages.slice(0,n).forEach(function(p){var c=E('div','card pk rv'+(p.badge?' pop':''));if(p.badge)c.setAttribute('data-b',p.badge);
c.innerHTML='<h3>'+esc(p.name)+'</h3><div class="pr">'+esc(p.price)+' <small>'+esc(p.per)+'</small></div><ul class="ck">'+p.features.map(function(f){return'<li>'+esc(f)+'</li>'}).join('')+'</ul>';
var b=E('a','btn','Subscribe Now');b.setAttribute('data-wa','Hello Grow With Alie, I would like to subscribe to the '+p.name+' package ('+p.price+' '+p.per+').');b.href='https://wa.me/'+S.whatsapp+'?text='+encodeURIComponent(b.getAttribute('data-wa'));b.target='_blank';b.rel='noopener';c.appendChild(b);pk.appendChild(c)})}
var pf=$('#pf');if(pf){var cats=['All'];S.portfolio.forEach(function(p){if(cats.indexOf(p.cat)<0)cats.push(p.cat)});var fl=$('#flt');
S.portfolio.forEach(function(p){var d=E('article','pi rv'+(p.wide?' w':''));d.setAttribute('data-c',p.cat);d.innerHTML='<img loading="lazy" src="'+esc(p.img)+'" alt="Sample design: '+esc(p.t)+' by Grow With Alie"><div><small>'+esc(p.cat)+' · Sample</small><h3>'+esc(p.t)+'</h3></div>';pf.appendChild(d)});
if(fl)cats.forEach(function(c,i){var b=E('button',i?'':'on',esc(c));b.type='button';b.onclick=function(){$$('button',fl).forEach(function(x){x.classList.remove('on')});b.classList.add('on');$$('.pi',pf).forEach(function(d){d.style.display=(c=='All'||d.getAttribute('data-c')==c)?'':'none'})};fl.appendChild(b)})}
var ts=$('#ts');if(ts){var tl=S.testimonials||[];if(tl.length){if(tl.some(function(t){return t.quote})){var th=$('#tsh'),tp=$('#tsp');if(th)th.textContent='What clients say';if(tp)tp.textContent='Real feedback from the businesses we work with.'}
tl.forEach(function(t){var c=E('div','card tc rv'),h='';if(t.logo)h+='<div class="lg"><img loading="lazy" src="'+esc(t.logo)+'" alt="'+esc(t.name)+' logo"></div>';h+='<span class="tag">'+esc(t.status||'Current client')+'</span>';if(t.quote)h+='<p class="q">“'+esc(t.quote)+'”</p>';h+='<h3>'+esc(t.name)+'</h3>';if(t.biz)h+='<p>'+esc(t.biz)+'</p>';c.innerHTML=h;ts.appendChild(c)})}
else ts.appendChild(E('div','card rv','<div class="ic">⭐</div><h3>Be one of our founding clients</h3><p>We are welcoming our first clients and would love your business to be one of our success stories. Ask us about founding client rates.</p><p style="margin-top:18px"><a class="btn" href="contact.html">Get Started</a></p>'))}
var tm=$('#tm');if(tm){var tt=S.team||[];if(tt.length)tt.forEach(function(m){tm.appendChild(E('div','card tmc rv',(m.img?'<img loading="lazy" src="'+esc(m.img)+'" alt="'+esc(m.name)+'">':'')+'<h3>'+(m.role?'<span class="role">'+esc(m.role)+'</span>':'')+esc(m.name)+'</h3>'))});else tm.appendChild(E('div','card pend rv','<h3>Pending</h3>'))}
var bl=$('#bl');if(bl)S.blog.forEach(function(p){bl.appendChild(E('details','rv','<summary>'+esc(p.t)+'</summary><p><b style="color:#D63B00">'+esc(p.d)+'</b> · '+esc(p.b)+'</p>'))});
var io='IntersectionObserver' in window?new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12}):null;
$$('.rv').forEach(function(e){io?io.observe(e):e.classList.add('in')});
var f=$('#cf');if(f)f.onsubmit=function(ev){ev.preventDefault();var b=$('button',f),m=$('#cm');b.disabled=true;m.textContent='Sending…';var d={};new FormData(f).forEach(function(v,k){d[k]=v});
if(d._honey){return}d._subject='New website inquiry from '+d.name;d._template='table';d._captcha='false';
fetch('https://formsubmit.co/ajax/'+S.email,{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(d)}).then(function(r){return r.json()}).then(function(j){if(j.success===true||j.success==='true'){f.reset();m.style.color='#1a7f37';m.textContent='Thank you! We received your inquiry and will reply within 24 hours.'}else throw 0}).catch(function(){m.style.color='#b42318';m.innerHTML='We could not send that right now. Please email <a href="mailto:'+S.email+'">'+S.email+'</a> or message us on WhatsApp.'}).then(function(){b.disabled=false})};
var ss=$('.ss');if(ss){var sl=$$('.sl',ss),dt=$$('.ss-d button',ss),pp=$('.ss-p',ss),vw=$('.ss-v',ss),cur=0,tmr=null,on=!(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches);
function show(i){cur=(i+sl.length)%sl.length;sl.forEach(function(x,k){x.classList.toggle('on',k===cur);x.setAttribute('aria-hidden',k===cur?'false':'true')});dt.forEach(function(d,k){d.classList.toggle('on',k===cur);d.setAttribute('aria-current',k===cur?'true':'false')})}
function stop(){if(tmr){clearInterval(tmr);tmr=null}}function go(){stop();if(on)tmr=setInterval(function(){show(cur+1)},5000)}
function setOn(v){on=v;pp.setAttribute('aria-label',v?'Pause slideshow':'Play slideshow');pp.textContent=v?'❚❚':'▶';vw.setAttribute('aria-live',v?'off':'polite');go()}
$('.ss-prev',ss).onclick=function(){show(cur-1);go()};$('.ss-next',ss).onclick=function(){show(cur+1);go()};pp.onclick=function(){setOn(!on)};
dt.forEach(function(d,k){d.onclick=function(){show(k);go()}});
ss.addEventListener('mouseenter',stop);ss.addEventListener('mouseleave',go);ss.addEventListener('focusin',stop);ss.addEventListener('focusout',go);
ss.addEventListener('keydown',function(e){if(e.key==='ArrowLeft'){show(cur-1);go()}else if(e.key==='ArrowRight'){show(cur+1);go()}});
var sx=null;ss.addEventListener('touchstart',function(e){sx=e.touches[0].clientX},{passive:true});ss.addEventListener('touchend',function(e){if(sx===null)return;var d=e.changedTouches[0].clientX-sx;sx=null;if(Math.abs(d)>40){show(cur+(d<0?1:-1));go()}});
setOn(on)}
})();
