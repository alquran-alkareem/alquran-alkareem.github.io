(function(){var T=['\u0644\u0625\u064a\u0642\u0627\u0641 \u0635\u0648\u062a \u062a\u0642\u0644\u064a\u0628 \u0627\u0644\u0635\u0641\u062d\u0627\u062a: \u0627\u0641\u062a\u062d \u0627\u0644\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0648\u0623\u0648\u0642\u0641\u0647 \u0625\u0646 \u0623\u0631\u062f\u062a.','\u0644\u062a\u063a\u064a\u064a\u0631 \u0627\u0644\u0645\u0638\u0647\u0631: \u0627\u0641\u062a\u062d \u0627\u0644\u0625\u0639\u062f\u0627\u062f\u0627\u062a.','\u0644\u062a\u062b\u0628\u064a\u062a \u0627\u0644\u062a\u0637\u0628\u064a\u0642 \u0644\u064a\u0639\u0645\u0644 \u0628\u062f\u0648\u0646 \u0625\u0646\u062a\u0631\u0646\u062a: \u0627\u0636\u063a\u0637 \u0639\u0644\u0649 \u0627\u0644\u0646\u0642\u0627\u0637 \u0627\u0644\u062b\u0644\u0627\u062b \u0623\u0639\u0644\u0649 \u0627\u0644\u0645\u062a\u0635\u0641\u062d\u060c \u062b\u0645 \u0627\u062e\u062a\u0631 \u00ab\u062a\u062b\u0628\u064a\u062a \u0627\u0644\u062a\u0637\u0628\u064a\u0642\u00bb \u0648\u0644\u064a\u0633 \u00ab\u0625\u0646\u0634\u0627\u0621 \u0627\u062e\u062a\u0635\u0627\u0631\u00bb.','\u0644\u0644\u0627\u0633\u062a\u0645\u0627\u0639 \u0625\u0644\u0649 \u0622\u064a\u0629: \u0627\u0636\u063a\u0637 \u0639\u0644\u064a\u0647\u0627 \u0636\u063a\u0637\u0629 \u0645\u0637\u0648\u0644\u0629.','\u0644\u062a\u063a\u064a\u064a\u0631 \u0635\u0648\u062a \u0627\u0644\u0642\u0627\u0631\u0626: \u0627\u0641\u062a\u062d \u0627\u0644\u0625\u0639\u062f\u0627\u062f\u0627\u062a.'];function add(){var d=document.getElementById('dw'),c=d&&d.querySelector('.cred');if(!d||!c||d.querySelector('.tips'))return;var b=document.createElement('div');b.className='tips';b.style.cssText='margin-top:auto;padding:10px 12px;border:1px solid var(--gold);border-radius:10px;font-size:13px;line-height:1.8;color:var(--fg)';b.innerHTML='<b style="color:var(--gold)">\u0646\u0635\u0627\u0626\u062d \u0633\u0631\u064a\u0639\u0629</b><ol style="margin:4px 0 0;padding:0 18px 0 0">'+T.map(function(t){return'<li>'+t+'</li>'}).join('')+'</ol>';d.insertBefore(b,c);c.style.marginTop='0'}if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',add);else add()})();
(function () {
  var EV = 'https://everyayah.com/data/';
  var R = [
    { id: 'alafasy', n: 'مشاري العفاسي', f: 'Alafasy_64kbps', kb: 133 },
    { id: 'husary', n: 'محمود خليل الحصري', f: 'Husary_64kbps', kb: 187 },
    { id: 'minshawi', n: 'محمد صديق المنشاوي', f: 'Minshawy_Murattal_128kbps', kb: 252 },
    { id: 'basit', n: 'عبد الباسط عبد الصمد', f: 'Abdul_Basit_Murattal_64kbps', kb: 138 },
    { id: 'sudais', n: 'عبد الرحمن السديس', f: 'Abdurrahmaan_As-Sudais_64kbps', kb: 96 },
    { id: 'shuraim', n: 'سعود الشريم', f: 'Saood_ash-Shuraym_64kbps', kb: 82 },
    { id: 'maher', n: 'ماهر المعيقلي', f: 'Maher_AlMuaiqly_64kbps', kb: 95 },
    { id: 'dosari', n: 'ياسر الدوسري', f: 'Yasser_Ad-Dussary_128kbps', kb: 235 },
    { id: 'hani', n: 'هاني الرفاعي', f: 'Hani_Rifai_64kbps', kb: 114 },
    { id: 'hudhaify', n: 'علي الحذيفي', f: 'Hudhaify_64kbps', kb: 130 },
    { id: 'ajamy', n: 'أحمد العجمي', f: 'ahmed_ibn_ali_al_ajamy_128kbps', kb: 230 },
    { id: 'ayyoub', n: 'محمد أيوب', f: 'Muhammad_Ayyoub_64kbps', kb: 141 },
    { id: 'jibreel', n: 'محمد جبريل', f: 'Muhammad_Jibreel_64kbps', kb: 116 },
    { id: 'ghamdi', n: 'سعد الغامدي', f: 'Ghamadi_40kbps', kb: 68 }
  ];
  function p3(n) { return ('00' + n).slice(-3); }
  function eu(r, s, a) { return EV + r.f + '/' + p3(s) + p3(a) + '.mp3'; }
  function rec(id) { for (var i = 0; i < R.length; i++) if (R[i].id === id) return R[i]; return R[0]; }
  function cur() { return rec(S.rec || 'alafasy'); }
  function dl() { return get('qdl', {}); }
  function has(id, s) { var d = dl()[id]; return !!(d && d.indexOf(s) > -1); }
  function fmt(mb) {
    if (mb >= 1000) return N(Math.round(mb / 100) / 10) + ' جيجا';
    return N(Math.max(1, Math.round(mb))) + ' ميجا';
  }
  function surahMB(r, s) { return Q[s - 1].v.length * r.kb / 1024; }
  function allMB(r) { return 6236 * r.kb / 1024; }

  // ---- playback (online by default; local copy only if the user downloaded it) ----
  window.play = function (s, a) {
    stop();
    playing = { s: s, a: a };
    var r = cur();
    var aud = new Audio();
    audio = aud;
    var online = r.id === 'alafasy'
      ? 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/' + gid(s, a) + '.mp3'
      : eu(r, s, a);
    var blobUrl = null;
    function free() { if (blobUrl) { URL.revokeObjectURL(blobUrl); blobUrl = null; } }
    if (window.BK && BK.onplay) BK.onplay(s, a);
    var b = document.querySelector('#a' + a + ' .pl'); if (b) b.textContent = '❚❚';
    var el = document.getElementById('a' + a); if (el) el.scrollIntoView({ block: 'center', behavior: 'smooth' });
    aud.onended = function () {
      free();
      if (a < Q[s - 1].v.length) play(s, a + 1);
      else if (s < 114 && S.mode === 'book' && document.body.classList.contains('bookmode')) play(s + 1, 1);
      else stop();
    };
    aud.onerror = function () { free(); stop(); toast('تعذر تشغيل الصوت (يحتاج إنترنت)'); };
    function go(src) { if (audio !== aud) return; aud.src = src; aud.play().catch(function () {}); }
    if (has(r.id, s) && window.caches) {
      caches.open('qaudio-' + r.id).then(function (c) { return c.match(eu(r, s, a)); })
        .then(function (resp) { return resp ? resp.blob() : null; })
        .then(function (bl) { if (bl) { blobUrl = URL.createObjectURL(bl); go(blobUrl); } else go(online); })
        .catch(function () { go(online); });
    } else go(online);
  };

  // ---- download manager ----
  var job = null;
  function setStatus(id, txt) { var e = document.getElementById('dls-' + id); if (e) e.textContent = txt; }
  function statusText(r) {
    var d = dl()[r.id] || [];
    if (d.length >= 114) return 'محمّل كاملًا';
    if (d.length) return 'محمّل ' + N(d.length) + ' سورة من ١١٤';
    return 'غير محمّل (يعمل أونلاين فقط)';
  }
  async function storageInfo() {
    try {
      var e = await navigator.storage.estimate();
      return { used: e.usage / 1048576, quota: e.quota / 1048576 };
    } catch (x) { return null; }
  }
  async function start(r, surahs) {
    if (job) { toast('هناك تحميل جارٍ'); return; }
    var todo = surahs.filter(function (s) { return !has(r.id, s); });
    if (!todo.length) { toast('هذا المحتوى محمّل بالفعل'); return; }
    var mb = todo.reduce(function (t, s) { return t + surahMB(r, s); }, 0);
    var si = await storageInfo();
    var free = si ? si.quota - si.used : null;
    if (free !== null && mb > free * 0.9) {
      alert('المساحة المتاحة للموقع في هذا المتصفح (' + fmt(free) + ') لا تكفي لتحميل ' + fmt(mb) + '. جرّب تحميل سور أقل أو احذف تحميلًا آخر.');
      return;
    }
    var msg = 'تحميل صوت ' + r.n + ' (' + N(todo.length) + ' سورة) حجمه تقريبًا ' + fmt(mb) +
      '، ويُحفظ على جهازك ليعمل بدون إنترنت.' + (free !== null ? ' المساحة المتاحة: ' + fmt(free) + '.' : '') +
      ' يفضّل الاتصال بشبكة واي فاي. متابعة؟';
    if (!confirm(msg)) return;
    try { if (navigator.storage && navigator.storage.persist) await navigator.storage.persist(); } catch (x) {}
    var cache = await caches.open('qaudio-' + r.id);
    var cancel = false;
    job = { id: r.id, stop: function () { cancel = true; } };
    refreshButtons();
    var total = todo.reduce(function (t, s) { return t + Q[s - 1].v.length; }, 0), done = 0, failed = false;
    try {
      for (var i = 0; i < todo.length && !cancel; i++) {
        var s = todo[i], n = Q[s - 1].v.length, next = 1;
        var workers = [];
        for (var w = 0; w < 4; w++) workers.push((async function () {
          while (!cancel && !failed) {
            var a = next++; if (a > n) return;
            var u = eu(r, s, a);
            if (await cache.match(u)) { done++; continue; }
            var resp = await fetch(u, { mode: 'cors' });
            if (!resp.ok) { failed = true; return; }
            await cache.put(u, resp);
            done++;
            setStatus(r.id, 'جارٍ التحميل ' + N(Math.round(done / total * 100)) + '٪');
          }
        })());
        await Promise.all(workers);
        if (failed || cancel) break;
        var d = dl(); d[r.id] = d[r.id] || []; if (d[r.id].indexOf(s) < 0) d[r.id].push(s); put('qdl', d);
      }
    } catch (e) { failed = true; }
    job = null;
    if (failed) toast('توقف التحميل، تأكد من الإنترنت والمساحة وأعد المحاولة');
    else if (cancel) toast('تم إيقاف التحميل');
    else toast('اكتمل التحميل');
    if (document.getElementById('dlbox')) settings();
  }
  function refreshButtons() { if (document.getElementById('dlbox')) settings(); }

  // ---- settings UI ----
  var os = window.settings;
  window.settings = function () {
    os();
    var r0 = cur();
    var h = '<div class="row"><span>القارئ</span><select id="rcs" style="font:inherit;padding:8px;border-radius:10px;border:1px solid var(--bd);background:var(--card);color:var(--fg);max-width:60%">' +
      R.map(function (r) { return '<option value="' + r.id + '"' + (r.id === r0.id ? ' selected' : '') + '>' + r.n + '</option>'; }).join('') +
      '</select></div>' +
      '<div id="dlbox"><div class="foot" style="margin:14px 0 6px;font-size:14px"><b>تحميل الصوت للاستخدام بدون إنترنت (اختياري)</b></div>' +
      '<div class="foot" style="margin:0 0 10px">الصوت يعمل أونلاين افتراضيًا ولا يُحمَّل شيء إلا إذا اخترت. التحميل يأخذ مساحة من جهازك، وحجم كل قارئ مكتوب قبل التحميل.</div>' +
      R.map(function (r) {
        var running = job && job.id === r.id;
        return '<div class="row" style="flex-wrap:wrap;gap:8px"><span style="width:100%"><b>' + r.n + '</b><br><small id="dls-' + r.id + '" style="color:var(--mut)">' + statusText(r) + '</small></span>' +
          (running ? '<span style="display:flex;gap:6px"><button data-x="1">إيقاف</button></span>' :
          '<span style="display:flex;gap:6px;flex-wrap:wrap;align-items:center">' +
          '<select data-ss="' + r.id + '" style="font:inherit;padding:8px;border-radius:10px;border:1px solid var(--bd);background:var(--card);color:var(--fg);max-width:46vw">' +
          Q.map(function (q, i) { return '<option value="' + (i + 1) + '">' + N(i + 1) + '. ' + q.n + '</option>'; }).join('') +
          '</select><button data-s="' + r.id + '">تحميل السورة (~' + fmt(surahMB(r, 1)) + ')</button></span>' +
          '<span style="display:flex;gap:6px;flex-wrap:wrap"><button data-f="' + r.id + '">المصحف كامل (~' + fmt(allMB(r)) + ')</button>' +
          ((dl()[r.id] || []).length ? '<button data-d="' + r.id + '">حذف</button>' : '') + '</span>') +
          '</div>';
      }).join('') +
      '<div class="foot" id="dsto"></div></div>';
    app.insertAdjacentHTML('beforeend', h);
    $('#rcs').onchange = function (e) { S.rec = e.target.value; saveS(); stop(); toast('تم اختيار ' + cur().n); settings(); };
    $('#dlbox').onchange = function (e) {
      var t = e.target; if (!t.dataset || !t.dataset.ss) return;
      var btn = document.querySelector('button[data-s="' + t.dataset.ss + '"]');
      if (btn) btn.textContent = 'تحميل السورة (~' + fmt(surahMB(rec(t.dataset.ss), +t.value)) + ')';
    };
    $('#dlbox').onclick = function (e) {
      var t = e.target.closest('button'); if (!t) return;
      if (t.dataset.x) { if (job) job.stop(); return; }
      if (t.dataset.s) { var sel = document.querySelector('select[data-ss="' + t.dataset.s + '"]'); start(rec(t.dataset.s), [+sel.value]); return; }
      if (t.dataset.f) { var r = rec(t.dataset.f), all = []; for (var i = 1; i <= 114; i++) all.push(i); start(r, all); }
      if (t.dataset.d) {
        var rr = rec(t.dataset.d);
        if (confirm('حذف صوت ' + rr.n + ' المحمّل من جهازك؟')) {
          caches.delete('qaudio-' + rr.id).then(function () { var d = dl(); delete d[rr.id]; put('qdl', d); settings(); });
        }
      }
    };
    storageInfo().then(function (si) {
      var e = document.getElementById('dsto');
      if (e && si) e.textContent = 'المساحة المستخدمة للموقع: ' + fmt(si.used) + ' من ' + fmt(si.quota) + ' متاحة في هذا المتصفح (تقديرية).';
    });
  };
})();
