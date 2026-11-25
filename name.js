(function () {
  var NAME_KEY = 'visitorName';
  function getName() {
    try { return (localStorage.getItem(NAME_KEY) || '').slice(0, 40); } catch (e) { return ''; }
  }
  function saveName(n) { try { localStorage.setItem(NAME_KEY, n); } catch (e) {} }
  function send(name, tries) {
    tries = tries || 0;
    if (window.goatcounter && window.goatcounter.count) {
      window.goatcounter.count({ path: 'name/' + name, title: name, event: true });
    } else if (tries < 20) {
      setTimeout(function () { send(name, tries + 1); }, 500);
    }
  }
  function isHome() {
    var h = location.hash;
    return h === '' || h === '#' || h === '#/';
  }
  function el(tag, css, text) {
    var e = document.createElement(tag);
    if (css) e.style.cssText = css;
    if (text != null) e.textContent = text;
    return e;
  }
  var BTN = 'padding:8px 14px;font-size:14px;border:0;border-radius:8px;background:#1b7a4b;color:#fff;cursor:pointer;font-family:inherit';
  var LINK = 'padding:8px 10px;font-size:13px;border:0;border-radius:8px;background:transparent;color:var(--mut,#888);cursor:pointer;font-family:inherit;text-decoration:underline';
  function buildBar() {
    var bar = el('div', 'background:var(--card,#fff);border:1px solid var(--bd,#ddd);border-radius:16px;padding:12px 16px;margin-bottom:12px;display:flex;align-items:center;gap:8px;flex-wrap:wrap;font-family:system-ui');
    bar.id = 'vngreet';
    bar.setAttribute('dir', 'rtl');
    var n = getName();
    if (n) {
      var line = el('div', 'flex:1;font-size:17px;color:var(--ac,#222)');
      line.textContent = 'أهلاً ' + n;
      bar.appendChild(line);
      var edit = el('button', LINK, 'تغيير الاسم');
      edit.type = 'button';
      edit.onclick = function () { render(true); };
      bar.appendChild(edit);
    } else {
      var open = el('button', LINK, '✎ اكتب اسمك');
      open.type = 'button';
      open.onclick = function () { render(true); };
      bar.appendChild(open);
    }
    return bar;
  }
  function fillForm(bar, current) {
    var lbl = el('div', 'font-size:14px;color:var(--mut,#666)', current ? 'تغيير اسمك' : 'اكتب اسمك (اختياري)');
    bar.appendChild(lbl);
    var inp = el('input', 'flex:1;min-width:120px;padding:8px;font-size:15px;border:1px solid var(--bd,#bbb);border-radius:8px;text-align:center;font-family:inherit;background:transparent;color:var(--ac,#222)');
    inp.type = 'text';
    inp.maxLength = 40;
    inp.placeholder = 'الاسم';
    inp.value = current;
    bar.appendChild(inp);
    var ok = el('button', BTN, 'حفظ');
    ok.type = 'button';
    ok.onclick = function () {
      var v = inp.value.replace(/\s+/g, ' ').trim().slice(0, 40);
      if (!v) return;
      saveName(v);
      send(v);
      render(false);
    };
    bar.appendChild(ok);
    inp.addEventListener('keydown', function (e) { if (e.key === 'Enter') ok.click(); });
  }
  function render(editing) {
    var app = document.getElementById('app');
    if (!app) return;
    var old = document.getElementById('vngreet');
    if (old) old.remove();
    if (!isHome()) return;
    var bar;
    if (editing) {
      bar = el('div', 'background:var(--card,#fff);border:1px solid var(--bd,#ddd);border-radius:16px;padding:12px 16px;margin-bottom:12px;display:flex;align-items:center;gap:8px;flex-wrap:wrap;font-family:system-ui');
      bar.id = 'vngreet';
      bar.setAttribute('dir', 'rtl');
      fillForm(bar, getName());
    } else {
      bar = buildBar();
    }
    app.insertBefore(bar, app.firstChild);
  }
  function watch() {
    var app = document.getElementById('app');
    if (!app) return;
    render(false);
    new MutationObserver(function () {
      if (!document.getElementById('vngreet') && isHome()) render(false);
      if (!isHome()) { var g = document.getElementById('vngreet'); if (g) g.remove(); }
    }).observe(app, { childList: true });
    addEventListener('hashchange', function () { setTimeout(function () { render(false); }, 0); });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', watch); else watch();
})();
