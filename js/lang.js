// Orivia language toggle: English / Simplified Chinese (zh-CN).
// Static text uses data-i18n / data-i18n-html / data-i18n-ph attributes.
// Dynamic text goes through window.OrvLang.t(key, vars).
window.OrvLang = (function () {
  var DICT = {
    en: {
      "nav.mint": "Mint", "nav.market": "Market", "nav.skill": "Skill file",
      "ribbon.t": "ORIVIA · 7,777 ONE-OF-ONE FACES · POP ART · $ORIVIA LIVE · FIRST MINT FREE · ",
      "gal.kicker": "SNEAK PEEK", "gal.h2": "Meet a few of her first.",
      "hero.kicker": "POP ART PORTRAITS · 7,777 FACES · $ORIVIA LIVE",
      "hero.h1": "Every face,<br/><span class=\"hl\">one of one.</span>",
      "hero.lede": "Pop art portraits of Mandarin women, drawn by code the moment an agent mints. Bold colour, halftone dots, jade and gold. Every face different, every seed locked on chain, and every face now revealed.",
      "board.minted": "MINTED", "board.left": "SUPPLY LEFT", "board.listed": "ON MARKET",
      "board.reveal": "REVEAL", "board.reveal.v": "Revealed",
      "cd.opens": "OPENS IN", "cd.reveal": "REVEAL IN", "cd.revealed": "REVEALED",
      "hero.note": "FREE WITH AGENT ID · PAID 0.000636 BNB · MAX 20 PER WALLET",
      "mint.kicker": "01 · MINT", "mint.h2": "Mint a face, already revealed.",
      "mint.p1": "Minting runs only through AI agents holding a Binance Agentic Wallet. This page never moves. It reads the chain and shows the door. Your agent walks through it, free once with an Agent ID, then on the paid lane open to every wallet.",
      "free.tag": "FREE LANE", "free.h3": "One free face per Agent ID",
      "free.p": "Wallets holding an Agent ID (SPACE ID .ai name) mint one Orivia free. A small maths question from the contract guards the door. Your agent reads its own question, answers, and mints. One free mint per wallet, ever.",
      "free.li1": "Agent ID required",
      "free.li2": "Answer one small question",
      "free.li3": "One per wallet",
      "paid.tag": "PAID LANE", "paid.h3": "0.000636 BNB, any wallet",
      "paid.p": "No Agent ID, no question. Any wallet mints on the paid lane at 0.000636 BNB per face, up to 20 faces per wallet across both lanes. Payment is exact, checked by the contract itself.",
      "paid.li1": "Open to every wallet",
      "paid.li2": "No question asked",
      "paid.li3": "Max 20 per wallet in total",
      "prompt.label": "AGENT PROMPT · COPY AND SEND TO YOUR AGENT", "prompt.copy": "COPY", "prompt.copied": "Copied",
      "check.kicker": "WALLET CHECK", "check.ph": "Paste your BSC wallet address", "check.btn": "Check",
      "check.init": "Your question and free mint status appear here. Read-only, nothing is signed.",
      "check.invalid": "Paste a valid BSC wallet address first.",
      "check.reading": "Reading chain…",
      "check.agentid": "Agent ID:", "check.held": "held", "check.notheld": "not held",
      "check.free": "Your free mint:", "check.needid": "needs an Agent ID", "check.used": "already used", "check.avail": "available",
      "check.question": "Your question:", "check.qnote": "(your agent answers it inside the mint)",
      "check.minted": "Minted by this wallet:", "check.yes": "yes", "check.notyet": "not yet",
      "check.tail": " · paid mints stay open to every wallet",
      "check.fail": "Read failed. Try again.",
      "card.fig": "A REVEALED WORK · #46 · DIVA",
      "fact.supply": "SUPPLY", "fact.reveal": "REVEAL", "fact.reveal.v": "Revealed on 8 Nov 2026",
      "fact.classes": "CLASSES", "fact.classes.v": "Muse ±70% · Icon ±27% · Diva ±3%",
      "fact.after": "AFTER REVEAL", "fact.after.v": "Living portrait per work, animated forever",
      "fact.token": "TOKEN", "fact.token.v": "$ORIVIA is live. 250,000 claimable per work",
      "mkt.kicker": "02 · MARKET", "mkt.h2": "Faces change hands here.",
      "mkt.p1": "An official escrow market, open from the first minute. List a face, buy a face, delist any time before it sells. Every face is revealed, so what you see is exactly what trades. A 2.5% fee goes to the project on each sale.",
      "mkt.p2": "{n} works minted so far. Every minted work is revealed and can be listed.",
      "mkt.btn": "Open market",
      "nav.claim": "Claim",
      "clm.kicker": "03 · CLAIM $ORIVIA", "clm.h2": "Every face carries $ORIVIA.",
      "clm.p1": "Every Orivia work claims 250,000 $ORIVIA, once per work, recorded by token number, belonging to whoever holds the work now. Claiming runs through your agent: open the claim skill file below and follow it.",
      "clm.p2": "Token contract 0xa9A94ffBaC4C87cF0c3e15FB0fd7EaBD8564eadd · Claim contract 0x540C092651E20bD4DB283fEC4e4f58C1fcB56690 · A pool of 1,944,250,000 $ORIVIA is fully funded. Claims are open now.",
      "clm.btn": "Open the claim skill file",
      "foot.nft": "NFT contract", "foot.market": "Market contract", "foot.skill": "Skill file",
      "foot.note": "Minting runs through your agent. Pages here stay read-only, market page excluded. Times shown in UTC.",
      "mk.strip": "OFFICIAL MARKET · ESCROW · 2.5% FEE · UTC",
      "mk.kicker": "MARKET", "mk.h2": "Bright faces, fully revealed.",
      "mk.p": "Listings sit in escrow inside the market contract until sold or delisted. Buyers pay the exact listed price: 97.5% reaches the seller instantly, 2.5% goes to the project. A face keeps its mint history and seed wherever it travels.",
      "mk.listed": "LISTED", "mk.floor": "FLOOR",
      "mk.connect": "Connect wallet", "mk.connected": "Wallet connected",
      "mk.empty": "No listings yet. First listings can appear as soon as minting opens.",
      "sell.kicker": "SELL A FACE", "sell.h2": "List yours.", "sell.id.ph": "Face number (token ID)", "sell.price.ph": "Price in BNB, e.g. 0.01",
      "sell.btn": "Approve and list",
      "sell.note": "Listing moves your face into the market contract until it sells or you delist. Two wallet confirmations: approve, then list.",
      "foot.back": "Back to mint",
      "strip.opens": "OPENS", "strip.reveal": "REVEAL", "strip.live": "MINT LIVE", "strip.revealed": "REVEALED",
      "st.connected": "Wallet connected.",
      "st.nowallet": "No wallet found in this browser. Open this page inside your wallet browser.",
      "st.rejected": "Wallet request rejected.", "st.connfail": "Wallet connection failed.",
      "st.confirm": "Confirm in wallet…", "st.confirming": "Confirming…",
      "st.buy": "Buy", "st.buyfor": "Buy for {p}", "st.delist": "Delist",
      "st.buyok": "Purchase confirmed. Orivia #{id} is yours.",
      "st.buyrej": "Purchase rejected in wallet.", "st.buyfail": "Purchase failed. Listing may have changed.",
      "st.delistok": "Delisted. Orivia #{id} is back in your wallet.",
      "st.delistrej": "Delist rejected in wallet.", "st.delistfail": "Delist failed.",
      "st.listok": "Listed. Orivia #{id} is on the market.",
      "st.listrej": "Listing rejected in wallet.", "st.listfail": "Listing failed. Check ownership and try again.",
      "st.notowner": "This wallet does not own Orivia #{id}.",
      "st.badid": "Enter a valid face number.", "st.badprice": "Enter a valid BNB price.", "st.pricepos": "Price must be above zero.",
      "st.approveconfirm": "Confirm approve in wallet…", "st.listconfirm": "Confirm listing in wallet…",
      "st.readfail": "Could not read listings. Refresh in a moment."
    },
    zh: {
      "nav.mint": "铸造", "nav.market": "市场", "nav.skill": "技能文件",
      "ribbon.t": "ORIVIA · 7,777 张独一无二的面孔 · 波普艺术 · $ORIVIA 已上线 · 首铸免费 · ",
      "gal.kicker": "抢先预览", "gal.h2": "先认识她们几位。",
      "hero.kicker": "波普艺术肖像 · 7,777 张脸 · $ORIVIA 已上线",
      "hero.h1": "每张脸,<br/><span class=\"hl\">都是唯一。</span>",
      "hero.lede": "华人女性的波普艺术肖像, 在智能体铸造的那一刻由代码绘成。大胆的色彩, 半调圆点, 翡翠与金。每张脸各不相同, 每个种子都锁定在链上, 所有面孔现已全部揭晓。",
      "board.minted": "已铸造", "board.left": "剩余供应", "board.listed": "市场在售",
      "board.reveal": "揭晓状态", "board.reveal.v": "已揭晓",
      "cd.opens": "开启倒计时", "cd.reveal": "揭晓倒计时", "cd.revealed": "已揭晓",
      "hero.note": "持有 AGENT ID 免费 · 付费 0.000636 BNB · 每钱包最多 20 件",
      "mint.kicker": "01 · 铸造", "mint.h2": "铸造一张已揭晓的脸。",
      "mint.p1": "铸造只能通过持有 Binance Agentic Wallet 的 AI 智能体进行。本页从不移动, 只读取链上数据并指出大门所在。你的智能体走进大门:持 Agent ID 免费一次, 之后走对所有钱包开放的付费通道。",
      "free.tag": "免费通道", "free.h3": "每个 Agent ID 一张免费脸",
      "free.p": "持有 Agent ID (SPACE ID 的 .ai 名字) 的钱包可免费铸造一张 Orivia。合约里的一道小型算术题守着大门。你的智能体读取属于自己的题目, 作答并铸造。每钱包限免费一次, 永久有效。",
      "free.li1": "需要 Agent ID",
      "free.li2": "回答一道小问题",
      "free.li3": "每钱包一次",
      "paid.tag": "付费通道", "paid.h3": "0.000636 BNB, 任何钱包",
      "paid.p": "无需 Agent ID, 无需答题。任何钱包都能在付费通道以每张 0.000636 BNB 铸造, 两个通道合计每钱包最多 20 张。付款金额精确, 由合约本身核验。",
      "paid.li1": "对所有钱包开放",
      "paid.li2": "无需答题",
      "paid.li3": "合计每钱包最多 20 张",
      "prompt.label": "智能体提示词 · 复制并发送给你的智能体", "prompt.copy": "复制", "prompt.copied": "已复制",
      "check.kicker": "钱包查询", "check.ph": "输入你的 BSC 钱包地址", "check.btn": "查询",
      "check.init": "你的题目与免费铸造状态会显示在这里。只读, 无需签名。",
      "check.invalid": "请先输入有效的 BSC 钱包地址。",
      "check.reading": "正在读取链上数据…",
      "check.agentid": "Agent ID:", "check.held": "已持有", "check.notheld": "未持有",
      "check.free": "你的免费铸造:", "check.needid": "需要 Agent ID", "check.used": "已使用", "check.avail": "可使用",
      "check.question": "你的题目:", "check.qnote": "(你的智能体在铸造时作答)",
      "check.minted": "该钱包已铸造:", "check.yes": "是", "check.notyet": "尚未",
      "check.tail": " · 付费铸造向所有钱包开放",
      "check.fail": "读取失败, 请重试。",
      "card.fig": "已揭晓作品 · 编号 46 · DIVA",
      "fact.supply": "供应量", "fact.reveal": "揭晓", "fact.reveal.v": "已于 2026 年 11 月 8 日揭晓",
      "fact.classes": "类别", "fact.classes.v": "Muse ±70% · Icon ±27% · Diva ±3%",
      "fact.after": "揭晓后", "fact.after.v": "每件作品的动态肖像, 永远生动",
      "fact.token": "代币", "fact.token.v": "$ORIVIA 已上线。每件作品可领取 250,000。",
      "mkt.kicker": "02 · 市场", "mkt.h2": "脸在这里易手。",
      "mkt.p1": "官方托管市场从第一分钟起运行。挂单, 购买, 售出前随时下架。所有面孔均已揭晓, 所见即所交易。每笔交易 2.5% 手续费归项目。",
      "mkt.p2": "迄今已铸造 {n} 件作品。每件作品均已揭晓, 都可以挂单。",
      "mkt.btn": "打开市场",
      "nav.claim": "领取",
      "clm.kicker": "03 · 领取 $ORIVIA", "clm.h2": "每张脸,都带着一笔 $ORIVIA。",
      "clm.p1": "每件 Orivia 作品可领取 250,000 $ORIVIA,每件作品限领一次,按编号记录,权利属于作品的当前持有者。领取通过你的智能体进行:打开下方领取技能文件,照着步骤做即可。",
      "clm.p2": "代币合约 0xa9A94ffBaC4C87cF0c3e15FB0fd7EaBD8564eadd · 领取合约 0x540C092651E20bD4DB283fEC4e4f58C1fcB56690 · 奖池 1,944,250,000 $ORIVIA 已全部就位,领取现已开启。",
      "clm.btn": "打开领取技能文件",
      "foot.nft": "NFT 合约", "foot.market": "市场合约", "foot.skill": "技能文件",
      "foot.note": "铸造通过你的智能体运行。本页只读, 市场页除外。时间以 UTC 显示。",
      "mk.strip": "官方市场 · 托管 · 每笔 2.5% 手续费 · UTC",
      "mk.kicker": "市场", "mk.h2": "明亮的脸, 全部揭晓。",
      "mk.p": "挂单作品托管在市场合约中, 直到售出或下架。买家支付确切的挂单价:97.5% 即时到达卖家, 2.5% 归项目。一张脸无论流转到哪里, 都保留其铸造历史与种子。",
      "mk.listed": "在售", "mk.floor": "地板价",
      "mk.connect": "连接钱包", "mk.connected": "钱包已连接",
      "mk.empty": "暂无挂单。铸造开启后即可出现首批挂单。",
      "sell.kicker": "出售一张脸", "sell.h2": "挂上你的脸。", "sell.id.ph": "脸的编号 (token ID)", "sell.price.ph": "价格 (BNB), 例如 0.01",
      "sell.btn": "授权并挂单",
      "sell.note": "挂单会将你的脸移入市场合约, 直到售出或你下架。需要两次钱包确认:授权, 然后挂单。",
      "foot.back": "返回铸造",
      "strip.opens": "开启", "strip.reveal": "揭晓", "strip.live": "铸造进行中", "strip.revealed": "已揭晓",
      "st.connected": "钱包已连接。",
      "st.nowallet": "未在此浏览器中找到钱包。请在钱包浏览器中打开本页。",
      "st.rejected": "钱包请求被拒绝。", "st.connfail": "钱包连接失败。",
      "st.confirm": "在钱包中确认…", "st.confirming": "确认中…",
      "st.buy": "购买", "st.buyfor": "以 {p} 购买", "st.delist": "下架",
      "st.buyok": "购买确认。Orivia #{id} 现在归你所有。",
      "st.buyrej": "在钱包中拒绝了购买。", "st.buyfail": "购买失败。挂单可能已变化。",
      "st.delistok": "已下架。Orivia #{id} 已回到你的钱包。",
      "st.delistrej": "在钱包中拒绝了下架。", "st.delistfail": "下架失败。",
      "st.listok": "已挂单。Orivia #{id} 已上架。",
      "st.listrej": "在钱包中拒绝了挂单。", "st.listfail": "挂单失败。请检查所有权后重试。",
      "st.notowner": "此钱包不拥有 Orivia #{id}。",
      "st.badid": "请输入有效的脸编号。", "st.badprice": "请输入有效的 BNB 价格。", "st.pricepos": "价格必须大于零。",
      "st.approveconfirm": "在钱包中确认授权…", "st.listconfirm": "在钱包中确认挂单…",
      "st.readfail": "无法读取挂单。稍后刷新。"
    }
  };

  var cur = "zh";
  try { cur = localStorage.getItem("orv-lang") === "en" ? "en" : "zh"; } catch (e) {}
  function t(key, vars) {
    var s = (DICT[cur] && DICT[cur][key]) || DICT.en[key] || key;
    if (vars) for (var k in vars) s = s.replace("{" + k + "}", vars[k]);
    return s;
  }
  function apply() {
    document.documentElement.lang = cur === "zh" ? "zh-CN" : "en";
    document.querySelectorAll("[data-i18n]").forEach(function (el) { el.textContent = t(el.getAttribute("data-i18n")); });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) { el.innerHTML = t(el.getAttribute("data-i18n-html")); });
    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) { el.setAttribute("placeholder", t(el.getAttribute("data-i18n-ph"))); });
    document.querySelectorAll(".lang-btn").forEach(function (b) { b.textContent = cur === "zh" ? "EN" : "中文"; });
    document.dispatchEvent(new CustomEvent("orv:lang"));
  }
  function toggle() {
    cur = cur === "zh" ? "en" : "zh";
    try { localStorage.setItem("orv-lang", cur); } catch (e) {}
    apply();
  }
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".lang-btn").forEach(function (b) { b.addEventListener("click", toggle); });
    apply();
  });
  return { t: t, get: function () { return cur; }, apply: apply };
})();
