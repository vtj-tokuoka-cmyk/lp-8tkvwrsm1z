/* =========================================================================
   共通の描画パーツ
   複数のページから使うカード類をまとめています。
   ========================================================================= */

/* ---------- 講演テーマ ---------- */
function topicCard(t) {
  return `<article class="card topic rv">
    <div class="no">TOPIC ${t.no}</div>
    <div class="catch">${esc(L(t.catch))}</div>
    <h3>${esc(L(t.title))}</h3>
    <p>${esc(L(t.body))}</p>
    ${L(t.forwhom) ? `<div class="who"><b>${T('forWhom')}</b>${esc(L(t.forwhom))}</div>` : ''}
    ${L(t.record) ? `<div class="rec">${esc(L(t.record))}</div>` : ''}
    <div class="tags">${L(t.tags).map(g => `<span class="tag">${esc(g)}</span>`).join('')}</div>
  </article>`;
}

/* ---------- 講演パッケージ ---------- */
function packCard(p) {
  const price = L(p.price) ? esc(L(p.price)) : T('quoteOnly');
  return `<article class="card pack rv${p.featured ? ' on' : ''}">
    ${p.featured ? `<span class="badge">${T('popular')}</span>` : ''}
    <h3>${esc(L(p.name))}</h3>
    <div class="time">${T('perTime')}　${esc(L(p.time))}</div>
    <p class="lead">${esc(L(p.lead))}</p>
    <ul>${L(p.items).map(i => `<li>${esc(i)}</li>`).join('')}</ul>
    <div class="best"><b>${T('bestFor')}</b>${esc(L(p.best))}</div>
    <div class="price">${price}</div>
    <a class="go" href="index.html#contact">${T('pickPackage')} →</a>
  </article>`;
}

/* ---------- ご依頼の流れ ---------- */
function stepCard(s) {
  return `<article class="card step rv">
    <div class="n">${s.no}</div>
    <h4>${esc(L(s.title))}</h4>
    <p>${esc(L(s.body))}</p>
    ${L(s.note) ? `<span class="note">${esc(L(s.note))}</span>` : ''}
  </article>`;
}

/* ---------- 講演・出演の実績 1行 ---------- */
function lecRow(l) {
  const d = fmtDateShort(l.date);
  const up = isUpcoming(l);
  const kind = L(KIND_LABELS[l.kind] || l.kind);
  const cls = l.kind === 'MC' ? 'b' : (up ? '' : 'n');

  /* 情報行：中身がある項目だけ並べる */
  const meta = [];
  const add = (key, v) => { const t = L(v); if (t) meta.push(`<span><i>${T(key)}</i>${esc(t)}</span>`); };
  add('lblHost', l.host);
  add('lblVenue', l.venue);
  if (up) {
    add('lblTime', l.time);
    add('lblFee', l.fee);
    if (l.deadline && !isClosed(l)) meta.push(`<span><i>${T('lblDeadline')}</i>${esc(fmtDeadline(l.deadline))}</span>`);
  }
  add('lblAudience', l.audience);

  const desc = L(l.desc);
  const acts = lecActions(l, up);
  const thumb = l.flyer
    ? `<button type="button" class="lec-flyer" data-flyer="${esc(l.flyer)}" data-cap="${esc(L(l.title))}" aria-label="${esc(T('btnFlyer'))}"><img src="${esc(l.flyer)}" alt="" loading="lazy"></button>`
    : '';
  const rich = desc || acts || thumb;

  return `<article class="card lec${rich ? ' rich' : ''} rv">
    <div class="d"><b>${d.md}</b><span>${d.y}</span></div>
    <div>
      <h4>${esc(L(l.title))}</h4>
      <div class="meta">${meta.join('')}</div>
      ${desc ? `<p class="lec-desc">${esc(desc)}</p>` : ''}
      ${acts}
    </div>
    <div class="right"><span class="tag ${cls}">${esc(kind)}</span>${thumb}</div>
  </article>`;
}

/* 登壇カードのボタン列：情報があるものだけ出す */
function lecActions(l, up) {
  const a = [];
  if (up && l.apply) {
    a.push(isClosed(l)
      ? `<span class="lec-closed">${T('regClosed')}</span>`
      : `<a class="lec-btn pri" href="${esc(l.apply)}" target="_blank" rel="noopener">${T('btnApply')} →</a>`);
  }
  const site = l.site || l.url;
  if (site) a.push(`<a class="lec-btn" href="${esc(site)}" target="_blank" rel="noopener">${T(l.site ? 'btnSite' : 'visitSite')} ↗</a>`);
  if (l.flyer) a.push(`<button type="button" class="lec-btn" data-flyer="${esc(l.flyer)}" data-cap="${esc(L(l.title))}">${T('btnFlyer')}</button>`);
  return a.length ? `<div class="lec-act">${a.join('')}</div>` : '';
}

/* チラシを拡大表示（ページに #lb が無ければ作る。言語切替で再描画しても二重登録しない） */
let _flyerBound = false;
function bindFlyers() {
  if (_flyerBound) return;
  _flyerBound = true;
  let lb = document.getElementById('lb');
  if (!lb) {
    lb = document.createElement('div');
    lb.id = 'lb';
    lb.innerHTML = '<span class="x">×</span><img alt=""><div class="cap"></div>';
    document.body.appendChild(lb);
  }
  const im = lb.querySelector('img'), cap = lb.querySelector('.cap');
  document.addEventListener('click', e => {
    const b = e.target.closest('[data-flyer]');
    if (!b) return;
    e.preventDefault();
    im.src = b.dataset.flyer;
    im.alt = b.dataset.cap || '';
    cap.innerHTML = `${esc(b.dataset.cap || '')}　<a href="${esc(b.dataset.flyer)}" target="_blank" rel="noopener" class="lb-full">${T('openFull')} ↗</a>`;
    lb.classList.add('on');
  });
  lb.addEventListener('click', e => {
    if (e.target !== im && !e.target.closest('.lb-full')) lb.classList.remove('on');
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') lb.classList.remove('on'); });
}

/* ---------- メディア出演 1行 ---------- */
function mediaRow(m) {
  const link = m.url
    ? `<a class="go" href="${m.url}" target="_blank" rel="noopener">${T('visitSite')} ↗</a>` : '<span></span>';
  return `<div class="media-item">
    <div class="d">${fmtDate(m.date)}</div>
    <div><span class="tag n">${esc(m.kind)}</span></div>
    <div>
      <h4>${esc(L(m.title))}</h4>
      <div class="out">${esc(L(m.outlet))}</div>
    </div>
    ${link}
  </div>`;
}

/* ---------- 情報テーブル 1行 ---------- */
function specRow(s) {
  return `<div class="r"><dt>${esc(L(s.label))}</dt><dd>${esc(L(s.value))}</dd></div>`;
}

/* ---------- グループ ---------- */
function groupCard(g) {
  const link = g.url
    ? `<a class="go" href="${g.url}" target="_blank" rel="noopener">${T('visitSite')} ↗</a>` : '';
  return `<article class="card grp-item rv">
    <div class="yr">${esc(L(g.est))}</div>
    <h4>${esc(L(g.name))}</h4>
    <div class="en">${esc(g.en)}</div>
    <p>${esc(L(g.body))}</p>
    <div class="foot"><span class="pos">${esc(L(g.role))}</span>${link}</div>
  </article>`;
}

function serviceCard(s) {
  return `<a class="card rv" href="${s.url}" target="_blank" rel="noopener" style="padding:22px 24px 24px;display:block">
    <div style="font-size:9.5px;letter-spacing:.18em;color:var(--red);font-weight:700">${esc(s.en)}</div>
    <h5 style="font-size:15px;margin:8px 0 7px">${esc(L(s.name))}</h5>
    <p style="font-size:12.5px;color:var(--ink-2)">${esc(L(s.desc))}</p>
    <span style="font-size:11px;color:var(--red);font-weight:700;margin-top:12px;display:inline-block">${T('visitSite')} ↗</span>
  </a>`;
}

/* ---------- ブログカード ---------- */
function postCard(p) {
  const cat = (POST_CATS.find(c => c.key === p.cat) || {}).label || p.cat;
  return `<a class="card post rv" href="blog.html?p=${encodeURIComponent(p.slug)}">
    ${p.image ? `<div class="ph"><img src="${p.image}" alt=""></div>` : ''}
    <div class="bd">
      <div class="top"><span class="tag">${esc(L(cat))}</span><time>${fmtDate(p.date)}</time></div>
      <h3>${esc(L(p.title))}</h3>
      <p>${esc(L(p.excerpt))}</p>
      <span class="go">${T('readMore')} →</span>
    </div></a>`;
}

/* =========================================================================
   動画
   ========================================================================= */

/* チャンネルの「最新のアップロード」を自動再生するプレイリストID
   UCxxxx（チャンネルID）→ UUxxxx（アップロード一覧）に変換します        */
function uploadsPlaylistId() {
  return (typeof YT_CHANNEL_ID === 'string' && YT_CHANNEL_ID.indexOf('UC') === 0)
    ? 'UU' + YT_CHANNEL_ID.slice(2) : '';
}

function renderPlayer() {
  const host = document.getElementById('player');
  if (!host) return;
  const pl = uploadsPlaylistId();
  const src = pl
    ? `https://www.youtube-nocookie.com/embed/videoseries?list=${pl}&rel=0`
    : (VIDEOS[0] ? `https://www.youtube-nocookie.com/embed/${VIDEOS[0].id}?rel=0` : '');
  if (!src) { host.innerHTML = `<p class="empty">${T('preparing')}</p>`; return; }
  host.innerHTML = `<iframe id="ytframe" src="${src}" title="YouTube"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen loading="lazy"></iframe>`;
}

function videoCard(v) {
  /* maxresdefault は縦型動画でも背景がきれいに埋まります。
     用意がない動画のときは hqdefault に自動で切り替えます。 */
  return `<article class="card vid rv" data-vid="${v.id}">
    <div class="ph">
      <img src="https://i.ytimg.com/vi/${v.id}/maxresdefault.jpg" alt="" loading="lazy"
           onerror="this.onerror=null;this.src='https://i.ytimg.com/vi/${v.id}/hqdefault.jpg'">
      <span class="play"><span><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></span></span>
    </div>
    <div class="bd">
      <time>${fmtDate(v.date)}</time>
      <h4>${esc(L(v.title))}</h4>
    </div>
  </article>`;
}

/* サムネイルを押すと、上のプレイヤーでその動画を再生します */
function bindVideoClicks() {
  document.querySelectorAll('.vid[data-vid]').forEach(el => {
    el.onclick = () => {
      const f = document.getElementById('ytframe');
      if (!f) return;
      f.src = `https://www.youtube-nocookie.com/embed/${el.dataset.vid}?autoplay=1&rel=0`;
      const p = document.getElementById('player');
      window.scrollTo({ top: window.scrollY + p.getBoundingClientRect().top - 90, behavior: 'smooth' });
    };
  });
}

/* ---------- SNSアカウント紹介カード ---------- */
function accountCard(a) {
  return `<article class="card acc rv" data-k="${a.key}">
    <div class="ic">${snsIcon(a.key)}</div>
    <div>
      <h3>${esc(a.name)}</h3>
      <div class="handle">${esc(a.handle)}</div>
      <div class="lead">${esc(L(a.lead))}</div>
      <p>${esc(L(a.body))}</p>
    </div>
    <a class="btn btn-r" href="${a.url}" target="_blank" rel="noopener">${esc(L(a.cta))} ↗</a>
  </article>`;
}
