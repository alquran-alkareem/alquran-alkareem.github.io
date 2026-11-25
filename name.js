(function () {
  var KEY = 'visitorNameAsked';
  try { if (localStorage.getItem(KEY)) return; } catch (e) {}
  function done() { try { localStorage.setItem(KEY, '1'); } catch (e) {} }
  function send(name, tries) {
    tries = tries || 0;
    if (window.goatcounter && window.goatcounter.count) {
      window.goatcounter.count({ path: 'name/' + name, title: name, event: true });
    } else if (tries < 20) {
      setTimeout(function () { send(name, tries + 1); }, 500);
    }
  }
  function show() {
    var o = document.createElement('div');
    o.setAttribute('dir', 'rtl');
    o.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.55);z-index:99999;display:flex;align-items:center;justify-content:center;padding:16px;font-family:inherit';
    o.innerHTML = '<div style="background:#fff;color:#222;border-radius:14px;max-width:340px;width:100%;padding:20px;text-align:center;box-shadow:0 8px 30px rgba(0,0,0,.3)">' +
      '<div style="font-size:18px;margin-bottom:6px">مرحبًا بك</div>' +
      '<div style="font-size:14px;margin-bottom:12px;color:#555">اكتب اسمك (اختياري)</div>' +
      '<input id="vn-input" type="text" maxlength="40" placeholder="الاسم" style="width:100%;box-sizing:border-box;padding:10px;font-size:16px;border:1px solid #bbb;border-radius:8px;text-align:center">' +
      '<div style="display:flex;gap:8px;margin-top:12px">' +
      '<button id="vn-ok" style="flex:1;padding:10px;font-size:15px;border:0;border-radius:8px;background:#1b7a4b;color:#fff;cursor:pointer">إرسال</button>' +
      '<button id="vn-skip" style="flex:1;padding:10px;font-size:15px;border:1px solid #bbb;border-radius:8px;background:#f5f5f5;color:#333;cursor:pointer">تخطي</button>' +
      '</div></div>';
    document.body.appendChild(o);
    var inp = o.querySelector('#vn-input');
    function close() { done(); o.remove(); }
    o.querySelector('#vn-skip').onclick = close;
    o.querySelector('#vn-ok').onclick = function () {
      var n = inp.value.replace(/\s+/g, ' ').trim().slice(0, 40);
      if (n) send(n);
      close();
    };
    inp.addEventListener('keydown', function (e) { if (e.key === 'Enter') o.querySelector('#vn-ok').click(); });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', show); else show();
})();
