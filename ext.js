/* ext.js: tolerant search, surah index, tafsir (Al-Muyassar, King Fahd Complex via QuranEnc) */
(function(){
const ARD='٠١٢٣٤٥٦٧٨٩';
const dig=s=>s.replace(/[٠-٩]/g,d=>ARD.indexOf(d)).replace(/[۰-۹]/g,d=>'۰۱۲۳۴۵۶۷۸۹'.indexOf(d));
// normalise: drop all marks, unify hamza/alef/ya/ta marbuta forms
const base=s=>s.replace(/[\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06ED\u08D3-\u08FF\u0640\u200c\u200d]/g,'')
 .replace(/[أإآٱ]/g,'ا').replace(/[ىیي]/g,'ي').replace(/[ةہ]/g,'ه').replace(/ک/g,'ك').replace(/ؤ/g,'و').replace(/ئ/g,'ي').replace(/ء/g,'');
// skeleton: also ignore alef (Uthmani vs standard spelling) and final waw before ha (صلوة/صلاة)
const sk=s=>base(s).split(/\s+/).map(w=>w.replace(/ا/g,'').replace(/وه$/,'ه')).filter(Boolean).join(' ');
window.qsk=sk;
const SK=[];const skv=(s,a)=>{const x=SK[s]||(SK[s]=[]);return x[a]||(x[a]=sk(Q[s].v[a]))};
const sname=s=>sk(Q[s].n.replace(/^ال/,'')); // name without ال
const LAT='Al-Fatihah Al-Baqarah Aal-Imran An-Nisa Al-Maidah Al-Anam Al-Araf Al-Anfal At-Tawbah Yunus Hud Yusuf Ar-Rad Ibrahim Al-Hijr An-Nahl Al-Isra Al-Kahf Maryam Taha Al-Anbiya Al-Hajj Al-Muminun An-Nur Al-Furqan Ash-Shuara An-Naml Al-Qasas Al-Ankabut Ar-Rum Luqman As-Sajdah Al-Ahzab Saba Fatir Ya-Sin As-Saffat Sad Az-Zumar Ghafir Fussilat Ash-Shura Az-Zukhruf Ad-Dukhan Al-Jathiyah Al-Ahqaf Muhammad Al-Fath Al-Hujurat Qaf Adh-Dhariyat At-Tur An-Najm Al-Qamar Ar-Rahman Al-Waqiah Al-Hadid Al-Mujadilah Al-Hashr Al-Mumtahanah As-Saff Al-Jumuah Al-Munafiqun At-Taghabun At-Talaq At-Tahrim Al-Mulk Al-Qalam Al-Haqqah Al-Maarij Nuh Al-Jinn Al-Muzzammil Al-Muddaththir Al-Qiyamah Al-Insan Al-Mursalat An-Naba An-Naziat Abasa At-Takwir Al-Infitar Al-Mutaffifin Al-Inshiqaq Al-Buruj At-Tariq Al-Ala Al-Ghashiyah Al-Fajr Al-Balad Ash-Shams Al-Layl Ad-Duha Ash-Sharh At-Tin Al-Alaq Al-Qadr Al-Bayyinah Az-Zalzalah Al-Adiyat Al-Qariah At-Takathur Al-Asr Al-Humazah Al-Fil Quraysh Al-Maun Al-Kawthar Al-Kafirun An-Nasr Al-Masad Al-Ikhlas Al-Falaq An-Nas'.split(' ');
const lat=s=>s.toLowerCase().replace(/[^a-z]/g,'').replace(/^(al|an|ar|as|at|ad|adh|ash|az|aal)/,'');
const LATK=LAT.map(x=>lat(x));

function surahMatch(q){ // returns surah indexes (0-based) that the query names
  q=dig(q).trim();
  let t=q.replace(/^\s*سورة\s+/,'').replace(/^\s*سوره\s+/,'');
  const k=sk(t.replace(/^ال/,'')),kf=sk(t);
  if(/^\d+$/.test(t)){const n=+t;return n>=1&&n<=114?[n-1]:[]}
  if(/^[a-z' -]+$/i.test(t)&&t){const l=lat(t);if(l.length>=2){const e=[],p=[];LATK.forEach((x,i)=>{if(x===l)e.push(i);else if(x.startsWith(l))p.push(i)});return e.length?e:p}return[]}
  if(!k)return[];
  const ex=[],pre=[];
  for(let i=0;i<114;i++){const n=sname(i);if(n===k||sk(Q[i].n)===kf)ex.push(i);else if(n.startsWith(k)||sk(Q[i].n).startsWith(kf))pre.push(i)}
  return ex.length?ex:pre;
}
// "البقرة 255" / "سورة البقرة:255" / "2:255"
function refMatch(raw){
  const q=dig(raw).trim();let m=q.match(/^(\d{1,3})\s*[:/ \-]\s*(\d{1,3})$/);
  if(m)return[+m[1]-1,+m[2]];
  m=q.match(/^(?:سورة\s+|سوره\s+)?(.+?)\s*(?:[:/ \-]|آية|اية|ايه|آيه)\s*(\d{1,3})$/);
  if(m){const r=surahMatch(m[1]);if(r.length===1)return[r[0],+m[2]]}
  return null;
}
function hlWords(text,words){
  return text.split(' ').map(w=>{const s=sk(w);const hit=words.some(x=>s.includes(x));const e=esc(w);return hit?'<mark>'+e+'</mark>':e}).join(' ');
}
const surahCard=(i,big)=>{const S0=Q[i];return `<a class="sc ${big?'big':''}" href="#/s/${i+1}"><span class="num"><i>${N(i+1)}</i></span><span><b>سورة ${S0.n}</b><small>${type(S0)} · ${N(S0.v.length)} آية</small></span></a>`};
const ayahCard=(s,a,words)=>`<a class="res" href="#/s/${s+1}/${a}"><small>سورة ${Q[s].n} · آية ${N(a)}</small><div class="q" style="font-size:22px">${DM(words?hlWords(Q[s].v[a-1],words):esc(Q[s].v[a-1]))}</div></a>`;

window.search=function(q){
  setNav('search');head('البحث في القرآن','');
  app.innerHTML='<input class="inp" id="q" placeholder="اكتب اسم سورة، أو كلمات من آية، أو رقم مثل 2:255" autocomplete="off"><div id="r"></div>';
  const inp=$('#q');inp.value=q||'';
  const run=()=>{
    const raw=inp.value.trim(),r=$('#r');
    if(!raw){r.innerHTML='<div class="empty">اكتب اسم سورة لتفتحها مباشرة.<br>أو اكتب كلمات من آية (لا يهم التشكيل ولا شكل الهمزة).<br>أو رقم السورة والآية مثل 36:1</div>';return}
    const ref=refMatch(raw);
    if(ref){const[s,a]=ref;if(s>=0&&s<114&&a>=1&&a<=Q[s].v.length){r.innerHTML=ayahCard(s,a);return}}
    const sm=surahMatch(raw);
    const explicit=/^\s*سور[ةه]\s/.test(raw);
    if(sm.length&&(explicit||sm.length<=3&&sk(raw.replace(/^\s*سور[ةه]\s+/,'').replace(/^ال/,'')).length>=3&&!raw.trim().includes(' ')||sm.length===1&&sname(sm[0])===sk(raw.replace(/^ال/,'')))){
      r.innerHTML=sm.map(i=>surahCard(i,true)).join('');
      if(sm.length===1&&!explicit){/* also offer ayah search below only if text matches whole words */}
      return;
    }
    const words=sk(raw).split(' ').filter(Boolean);
    if(!words.length){r.innerHTML='<div class="empty">لا توجد نتائج</div>';return}
    const phrase=words.join(' ');
    const ph=[],all=[];
    for(let s=0;s<114;s++)for(let a=0;a<Q[s].v.length;a++){const t=skv(s,a);if(t.includes(phrase))ph.push([s,a+1]);else if(words.every(w=>t.includes(w)))all.push([s,a+1])}
    let out=ph.length?ph:all;
    // a whole-verse query: if one verse contains the whole phrase, show only it
    if(!out.length){r.innerHTML='<div class="empty">لا توجد نتائج</div>';return}
    const extra=sm.length?sm.slice(0,2).map(i=>surahCard(i)).join(''):'';
    r.innerHTML=extra+`<div class="sub" style="margin:8px 0;color:var(--mut)">${N(out.length)} نتيجة${out.length>100?' (عرض أول ١٠٠)':''}</div>`+out.slice(0,100).map(([s,a])=>ayahCard(s,a,words)).join('');
  };
  inp.oninput=run;run();inp.focus();
};

window.surahs=function(){
  setNav('home');head('فهرس السور','114 سورة · 6236 آية');
  let h='';
  if(last)h+=`<a class="hero" href="#/s/${last.s}/${last.a}"><small>أكمل من حيث توقفت</small><b>سورة ${Q[last.s-1].n} · آية ${N(last.a)}</b></a>`;
  h+=`<input class="inp" id="f" placeholder="ابحث عن سورة بالاسم أو الرقم" autocomplete="off"><div class="chips" id="ch"><button data-k="all" class="on">الكل</button><button data-k="meccan">مكية</button><button data-k="medinan">مدنية</button></div><div class="sgrid" id="l"></div>`;
  app.innerHTML=h;
  let kind='all';
  const info=i=>{let pg='',jz='';try{const p=pageOfSA(i+1,1);pg='ص '+N(p+1);jz='جزء '+N(JZ[p])}catch(e){}return pg+(jz?' · '+jz:'')};
  const draw=()=>{
    const q=$('#f').value.trim();let idx;
    if(q){idx=surahMatch(q);const k=sk(dig(q).replace(/^\s*سورة\s+/,'').replace(/^ال/,''));if(k&&!/^\d+$/.test(dig(q).trim()))idx=[...new Set([...idx,...Q.map((s,i)=>i).filter(i=>sname(i).includes(k))])]}
    else idx=Q.map((s,i)=>i);
    idx=idx.filter(i=>kind==='all'||Q[i].t===kind);
    $('#l').innerHTML=idx.length?idx.map(i=>`<a class="sc" href="#/s/${i+1}"><span class="num"><i>${N(i+1)}</i></span><span><b>${Q[i].n}</b><small>${type(Q[i])} · ${N(Q[i].v.length)} آية</small><small class="pg">${info(i)}</small></span></a>`).join(''):`<div class="empty" style="grid-column:1/-1">لا توجد سورة بهذا الاسم.<br><a href="#/search?q=${encodeURIComponent(q)}">ابحث عنه في الآيات</a></div>`;
  };
  $('#f').oninput=draw;
  $('#ch').onclick=e=>{const b=e.target.closest('button');if(!b)return;kind=b.dataset.k;document.querySelectorAll('#ch button').forEach(x=>x.classList.toggle('on',x===b));draw()};
  draw();
};

// ===== Tafsir =====
const TF={};const TKEY='qtf1_';
async function loadTafsir(s){
  if(TF[s])return TF[s];
  try{const c=localStorage.getItem(TKEY+s);if(c){TF[s]=JSON.parse(c);return TF[s]}}catch(e){}
  const r=await fetch('https://quranenc.com/api/v1/translation/sura/arabic_moyassar/'+s);
  if(!r.ok)throw new Error('http');
  const j=await r.json();const m={};(j.result||[]).forEach(x=>{m[+x.aya]={t:x.translation,f:x.footnotes||''}});
  TF[s]=m;try{localStorage.setItem(TKEY+s,JSON.stringify(m))}catch(e){}
  return m;
}
function closeSheet(){const o=document.getElementById('tfo');if(o)o.remove()}
async function showTafsir(s,a){
  closeSheet();
  const o=document.createElement('div');o.id='tfo';
  o.innerHTML=`<div class="tfs" role="dialog" aria-label="تفسير"><div class="tfh"><b>تفسير سورة ${Q[s-1].n} · آية ${N(a)}</b><button id="tfx" aria-label="إغلاق">✕</button></div><div class="q tfa" style="font-size:22px">${DM(esc(Q[s-1].v[a-1]))}</div><div class="tfb" id="tfb">جارٍ التحميل…</div><div class="tff">التفسير الميسر · مجمع الملك فهد لطباعة المصحف الشريف<br>المصدر: موسوعة القرآن الكريم QuranEnc.com</div></div>`;
  o.addEventListener('click',e=>{if(e.target===o||e.target.id==='tfx')closeSheet()});
  document.body.append(o);
  try{
    const m=await loadTafsir(s);const x=m[a];const b=document.getElementById('tfb');if(!b)return;
    b.textContent=x&&x.t?x.t:'لا يوجد تفسير لهذه الآية.';
    if(x&&x.f){const f=document.createElement('div');f.className='tfn';f.textContent=x.f;b.append(f)}
  }catch(e){const b=document.getElementById('tfb');if(b)b.textContent='تعذر تحميل التفسير (يحتاج إنترنت).'}
}
window.showTafsir=showTafsir;
const parseRef=t=>{const m=dig(t||'').match(/(\d+)\s*:\s*(\d+)/);return m?[+m[1],+m[2]]:null};
const TAFSIR_ON=true;
function decorate(){
  if(!TAFSIR_ON)return;
  const tb=document.getElementById('tb');
  if(tb&&!tb.querySelector('[data-tf]')){const sp=tb.querySelector('span');const r=parseRef(sp&&sp.textContent);if(r){const b=document.createElement('button');b.dataset.tf=r.join(':');b.textContent='تفسير';tb.insertBefore(b,tb.querySelector('[data-x=x]'))}}
  document.querySelectorAll('.ay .bar:not([data-tfd])').forEach(bar=>{bar.dataset.tfd=1;const r=parseRef(bar.querySelector('span').textContent);if(!r)return;const b=document.createElement('button');b.dataset.tf=r.join(':');b.textContent='تفسير';bar.append(b)});
}
document.addEventListener('click',e=>{const b=e.target.closest&&e.target.closest('[data-tf]');if(!b)return;e.stopPropagation();e.preventDefault();const[s,a]=b.dataset.tf.split(':').map(Number);showTafsir(s,a)},true);
new MutationObserver(decorate).observe(document.body,{childList:true,subtree:true});
addEventListener('hashchange',closeSheet);
decorate();if(/^#\/(search|surahs)/.test(location.hash)&&typeof route==="function")route();

const st=document.createElement('style');
st.textContent=`
.sgrid{display:grid;grid-template-columns:1fr 1fr;gap:10px}
@media(min-width:700px){.sgrid{grid-template-columns:repeat(3,1fr)}}
.sc{display:flex;align-items:center;gap:12px;background:var(--card);border:1px solid var(--bd);border-radius:14px;padding:12px;min-width:0;transition:transform .15s,box-shadow .15s}
.sc:active{transform:scale(.98)}
.sc b{display:block;font-size:18px;color:var(--fg)}
.sc small{display:block;color:var(--mut);font-size:12px;margin-top:2px}
.sc .pg{color:var(--gold);background:none;border:0;padding:0}
.sc.big{padding:16px;margin-bottom:10px}.sc.big b{font-size:22px}
.chips{display:flex;gap:8px;margin-bottom:12px}
.chips button{flex:1;padding:8px;border-radius:999px;border:1px solid var(--bd);background:var(--card);color:var(--fg);font:inherit}
.chips button.on{background:var(--ac);color:#fff;border-color:var(--ac)}
#tfo{position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:9999;display:flex;align-items:flex-end;justify-content:center}
.tfs{background:var(--card);color:var(--fg);width:100%;max-width:640px;max-height:78vh;overflow:auto;border-radius:18px 18px 0 0;padding:16px;border-top:3px solid var(--gold)}
.tfh{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px}
.tfh button{border:0;background:none;color:var(--fg);font-size:20px}
.tfa{text-align:center;padding:8px 0 12px;border-bottom:1px solid var(--bd);margin-bottom:12px}
.tfb{font-size:18px;line-height:2;white-space:pre-wrap}
.tfn{font-size:14px;color:var(--mut);margin-top:10px}
.tff{margin-top:14px;padding-top:10px;border-top:1px solid var(--bd);font-size:12px;color:var(--mut);text-align:center}
#tb button[data-tf]{font-size:13px}
`;
document.head.append(st);
})();
