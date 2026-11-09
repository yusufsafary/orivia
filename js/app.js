(function () {
  var N = window.ORV, R = window.OrvRead;
  var L = function (k, v) { return window.OrvLang ? window.OrvLang.t(k, v) : k; };
  var $ = function (id) { return document.getElementById(id); };
  var fmt = function (n) { return Number(n).toLocaleString("en-US"); };

  function refreshBoard() {
    R.call(N.nft, N.sel.totalMinted).then(function (hex) {
      var minted = Number(BigInt(hex));
      var el = $("b-minted"); if (el) el.textContent = fmt(minted);
      var left = $("b-left"); if (left) left.textContent = fmt(N.maxSupply - minted);
      var bar = $("supply-bar"); if (bar) bar.style.width = (minted / N.maxSupply * 100).toFixed(2) + "%";
      lastMinted = minted; renderP2();
    }).catch(function () {});
    R.call(N.market, N.sel.listedIds).then(function (hex) {
      var w = R.words(hex);
      var count = w.length > 1 ? Number(w[1]) : 0;
      var el = $("b-listed"); if (el) el.textContent = fmt(count);
    }).catch(function () {});
  }
  refreshBoard();
  setInterval(refreshBoard, 30000);
  var lastMinted = 0;
  function renderP2() {
    var el = $("mkt-p2"); if (!el) return;
    el.innerHTML = L("mkt.p2", { n: '<b id="m-minted">' + fmt(lastMinted) + "</b>" });
  }
  document.addEventListener("orv:lang", function () { renderP2(); });

  // Gentle reveal on scroll for sections and cards.
  (function () {
    var els = document.querySelectorAll(".gate .lane, .gate .prompt-card, .gate .checker, .gate .workcard, .gate .facts, .gate .btn, .gate h2, .gallery .gal-card, .gallery h2, .gallery .kicker");
    var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!("IntersectionObserver" in window) || reduced) return;
    els.forEach(function (el) { el.classList.add("rv"); });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.1 });
    els.forEach(function (el) { io.observe(el); });
  })();

  // Enter key runs the wallet check.
  var ca = $("check-addr");
  if (ca) ca.addEventListener("keydown", function (e) { if (e.key === "Enter") $("check-btn").click(); });

  // Wallet checker: shows the wallet's own question and status. Read-only.
  var btn = $("check-btn");
  if (btn) btn.addEventListener("click", function () {
    var addr = ($("check-addr").value || "").trim();
    var out = $("check-out");
    if (!/^0x[0-9a-fA-F]{40}$/.test(addr)) { out.textContent = L("check.invalid"); return; }
    out.textContent = L("check.reading");
    var q = R.call(N.nft, N.sel.questionFor + R.padAddr(addr));
    var st = R.call(N.nft, N.sel.stats + R.padAddr(addr));
    Promise.all([q, st]).then(function (res) {
      var qw = R.words(res[0]);
      var a = Number(qw[0]), b = Number(qw[1]), op = Number(qw[2]);
      var sym = op === 0 ? "+" : op === 1 ? "−" : "×";
      var sw = R.words(res[1]);
      var hasId = sw[4] === 1n, hasMinted = sw[5] === 1n;
      R.call(N.nft, N.sel.freeUsed + R.padAddr(addr)).then(function (fu) {
        var used = R.words(fu)[0] === 1n;
        var lines = [];
        lines.push(L("check.agentid") + " " + (hasId ? L("check.held") : L("check.notheld")));
        lines.push(L("check.free") + " " + (!hasId ? L("check.needid") : used ? L("check.used") : L("check.avail")));
        if (hasId && !used) lines.push(L("check.question") + " " + a + " " + sym + " " + b + " = ?  " + L("check.qnote"));
        lines.push(L("check.minted") + " " + (hasMinted ? L("check.yes") : L("check.notyet")) + L("check.tail"));
        out.textContent = lines.join("\n");
      }).catch(function () { out.textContent = L("check.fail"); });
    }).catch(function () { out.textContent = L("check.fail"); });
  });

  // Copy agent prompt
  var cp = $("copy-prompt");
  if (cp) cp.addEventListener("click", function () {
    var txt = $("agent-prompt").textContent;
    if (navigator.clipboard) navigator.clipboard.writeText(txt).then(function () {
      cp.textContent = L("prompt.copied"); setTimeout(function () { cp.textContent = L("prompt.copy"); }, 1600);
    });
  });
})();
